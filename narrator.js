/* ═══════════════════════════════════════════════════════════
   NARRATOR.JS — Audiobook narrator for Nahwa Tafsir Mawdui
   Features: section-by-section, book mode, karaoke,
   voice/speed/pitch, loop, lock screen, sleep timer
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  if (!('speechSynthesis' in window)) {
    window.narratorTogglePanel = function() {
      if (typeof showToast === 'function') {
        var l = (typeof lang !== 'undefined') ? lang : 'en';
        var msg = l === 'ar' ? 'الراوي غير مدعوم في هذا المتصفح' : l === 'fr' ? 'Narrateur non support\u00e9 dans ce navigateur' : 'Narrator not supported in this browser';
        showToast(msg);
      }
    };
    window.narratorPlayPage = window.narratorPlayBook = window.narratorPause = function() {};
    window.narratorStop = window.narratorNext = window.narratorPrev = function() {};
    window.narratorSpeedChange = window.narratorPitchChange = function() {};
    window.narratorLoopChange = window.narratorSleepChange = function() {};
    window.narratorKaraokeToggle = window.narratorAutoScrollToggle = function() {};
    window.narratorDuoToggle = window.narratorVoiceChange = function() {};
    window.narratorPopulateVoices = function() {};
    return;
  }

  const NR_T = {
    ar: { title: '\uD83C\uDFA7 الراوي', page: 'اقرأ هذه الصفحة', book: 'اقرأ ككتاب', voice: 'الصوت', speed: 'السرعة', pitch: 'النبرة', loop: 'تكرار البطاقة', sleep: 'مؤقت النوم', karaoke: 'كاريوكي', autoScroll: 'تمرير تلقائي', duo: 'ثنائي (عربي+فرنسي)', off: 'إيقاف', min: 'دقيقة', bookDone: 'تم الانتهاء من الكتاب', sleepDone: 'انتهى مؤقت النوم', sleepSet: 'مؤقت النوم:' },
    en: { title: '\uD83C\uDFA7 Narrator', page: 'Read this page', book: 'Read as a book', voice: 'Voice', speed: 'Speed', pitch: 'Pitch', loop: 'Loop card', sleep: 'Sleep timer', karaoke: 'Karaoke', autoScroll: 'Auto-scroll', duo: 'Duo (AR+FR)', off: 'Off', min: 'min', bookDone: 'Book finished', sleepDone: 'Sleep timer ended', sleepSet: 'Sleep:' },
    fr: { title: '\uD83C\uDFA7 Narrateur', page: 'Lire cette page', book: 'Lire comme un livre', voice: 'Voix', speed: 'Vitesse', pitch: 'Tonalit\u00e9', loop: 'R\u00e9p\u00e9ter la carte', sleep: 'Minuterie', karaoke: 'Karaok\u00e9', autoScroll: 'D\u00e9filement auto', duo: 'Duo (AR+FR)', off: 'D\u00e9sactiv\u00e9', min: 'min', bookDone: 'Livre termin\u00e9', sleepDone: 'Minuterie termin\u00e9e', sleepSet: 'Minuterie:' }
  };

  function nrT() { return NR_T[getLang()] || NR_T.en; }

  const STATE = {
    playing: false, paused: false, mode: 'page',
    cardIndex: 0, cards: [],
    tabOrder: ['about','cards','reflections'],
    tabIndex: 0, loopCount: 0, loopCurrent: 0,
    sleepTimer: null, sleepMinutes: 0, duoTimeout: null,
    karaokeEnabled: true, autoScroll: true, duoReading: false,
    speed: 1, pitch: 1, voiceAR: null, voiceEN: null, voiceFR: null,
  };

  function getLang() { return document.documentElement.lang || 'ar'; }

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return;
    STATE.voiceAR = findBestVoice(voices, ['Majed','Maged','Google Arabic','Tarik','Lila'], 'ar');
    STATE.voiceEN = findBestVoice(voices, ['Samantha','Daniel','Google UK English','Google US English'], 'en');
    STATE.voiceFR = findBestVoice(voices, ['Thomas','Amelie','Google French'], 'fr');
  }

  function findBestVoice(voices, priority, langCode) {
    const langVoices = voices.filter(v => v.lang.startsWith(langCode));
    for (const pref of priority) { const match = langVoices.find(v => v.name.includes(pref)); if (match) return match; }
    return langVoices[0] || null;
  }

  function getVoiceForLang(l) { if (l === 'ar') return STATE.voiceAR; if (l === 'fr') return STATE.voiceFR; return STATE.voiceEN; }

  speechSynthesis.addEventListener('voiceschanged', loadVoices);
  loadVoices();

  function getActivePanel() { return document.querySelector('.panel.active'); }
  function getActiveTabName() { const btn = document.querySelector('.tab.active'); return btn ? btn.dataset.tab : 'about'; }

  function extractCards(panel) {
    if (!panel) return [];
    const cards = [];
    const tabName = panel.id.replace('panel-', '');
    if (tabName !== 'about') {
      const title = panel.querySelector('.section-title');
      const desc = panel.querySelector('.section-desc');
      if (title) cards.push({ el: title.closest('.panel') || title, text: (title.textContent || '') + '. ' + (desc ? desc.textContent : ''), type: 'title' });
    }
    if (tabName === 'about') {
      panel.querySelectorAll('.about-disclaimer, .about-author, .about-section').forEach(el => { const text = cleanText(el.textContent); if (text) cards.push({ el, text, type: 'about' }); });
    } else if (tabName === 'cards') {
      panel.querySelectorAll('.principle-card').forEach(el => {
        if (el.style.display === 'none') return;
        let text = '';
        const t = el.querySelector('.principle-title'); if (t) text += t.textContent + '. ';
        const d = el.querySelector('.principle-desc'); if (d) text += d.textContent + '. ';
        const a = el.querySelector('.action-box'); if (a) text += a.textContent;
        cards.push({ el, text: cleanText(text), type: 'principle' });
      });
    } else if (tabName === 'reflections') {
      panel.querySelectorAll('.anxiety-card').forEach(el => { cards.push({ el, text: cleanText(el.textContent), type: 'anxiety' }); });
    } else if (tabName === 'habits') {
      panel.querySelectorAll('.habit-item').forEach(el => { cards.push({ el, text: cleanText(el.textContent), type: 'habit' }); });
    } else if (tabName === 'home') {
      const daily = panel.querySelector('.daily-card');
      if (daily) cards.push({ el: daily, text: cleanText(daily.textContent), type: 'daily' });
    }
    return cards;
  }

  function cleanText(text) {
    var clean = text.replace(/\s+/g, ' ').replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}\u{1F900}-\u{1F9FF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}\u{2190}-\u{21FF}\u2191\u2193\u2190\u2192\u2713]/gu, '').trim();
    clean = clean.replace(/[\u00AB\u00BB\u201C\u201D()[\]{}—–•●◆■▪]/g, ' ').replace(/\s+/g, ' ');
    clean = clean.replace(/:\s/g, ':, ').replace(/;\s/g, ';, ').replace(/\s\u2014\s/g, ', ').replace(/\.\.\./g, ', ').replace(/\s*\n\s*/g, '. ');
    var l = getLang();
    if (l === 'fr') { clean = clean.replace(/al-Ghazali/gi, 'al Razali').replace(/Ghazali/gi, 'Razali').replace(/Sheikh/gi, 'Cheikh').replace(/Mohammed/gi, 'Moham\u00e8d').replace(/\bet\b/g, ', et').replace(/\bmais\b/g, ', mais').replace(/\bou\b/g, ', ou').replace(/\bcar\b/g, ', car').replace(/\bdonc\b/g, ', donc'); }
    if (l === 'en') { clean = clean.replace(/al-Ghazali/gi, 'al Gah-zah-lee').replace(/Ghazali/gi, 'Gah-zah-lee').replace(/\band\b/g, ', and').replace(/\bbut\b/g, ', but').replace(/\bor\b/g, ', or').replace(/\bhowever\b/gi, ', however,'); }
    if (l === 'ar') { clean = clean.replace(/https?:\/\/[^\s]+/g, '').replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '').replace(/workshop-diy\.org/gi, '').replace(/[a-zA-Z]{4,}/g, '').replace(/\u0648/g, '\u060C \u0648').replace(/\u0644\u0643\u0646/g, '\u060C \u0644\u0643\u0646').replace(/\u0623\u0648/g, '\u060C \u0623\u0648').replace(/\u062B\u0645/g, '\u060C \u062B\u0645').replace(/\u0628\u0644/g, '\u060C \u0628\u0644'); }
    return clean.replace(/,\s*,/g, ',').replace(/\s+/g, ' ').trim();
  }

  let speakGen = 0;
  function speak(text, onEnd) {
    speakGen++; var myGen = speakGen; speechSynthesis.cancel();
    if (!text || !text.trim()) { if (onEnd) onEnd(); return; }
    var l = getLang(); var utt = new SpeechSynthesisUtterance(text);
    var selectedVoice = getVoiceForLang(l); if (selectedVoice) utt.voice = selectedVoice;
    utt.lang = l === 'ar' ? 'ar-SA' : l === 'fr' ? 'fr-FR' : 'en-US';
    utt.rate = (l === 'ar') ? STATE.speed * 0.9 : STATE.speed; utt.pitch = STATE.pitch;
    if (STATE.karaokeEnabled) { utt.onboundary = function(e) { if (myGen !== speakGen) return; if (e.name === 'word' && e.charLength > 0 && STATE.cards[STATE.cardIndex]) highlightWord(STATE.cards[STATE.cardIndex].el, e.charIndex, e.charLength, text); }; }
    var done = false;
    function finish() { if (done) return; done = true; clearHighlights(); if (myGen !== speakGen) return; if (onEnd) onEnd(); }
    utt.onend = finish; utt.onerror = finish; speechSynthesis.speak(utt);
    var pollStarted = false;
    var pollInterval = setInterval(function() { if (done || myGen !== speakGen) { clearInterval(pollInterval); return; } if (speechSynthesis.speaking) pollStarted = true; if (pollStarted && speechSynthesis.paused && !STATE.paused) speechSynthesis.resume(); if (pollStarted && !speechSynthesis.speaking && !speechSynthesis.pending) { clearInterval(pollInterval); finish(); } }, 500);
    setTimeout(function() { if (!done && myGen === speakGen) { clearInterval(pollInterval); finish(); } }, Math.max(5000, (text.length / 3) * (1000 / STATE.speed)) + 3000);
  }

  function highlightWord(el, charIndex, charLength, fullText) { if (!el || !charLength) return; const word = fullText.slice(charIndex, charIndex + charLength); const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT); let node; while (node = walker.nextNode()) { const idx = node.textContent.indexOf(word); if (idx !== -1) { clearHighlights(); const range = document.createRange(); range.setStart(node, idx); range.setEnd(node, Math.min(idx + word.length, node.textContent.length)); const span = document.createElement('span'); span.className = 'narrator-word-highlight'; try { range.surroundContents(span); } catch(e) {} return; } } }
  function clearHighlights() { document.querySelectorAll('.narrator-word-highlight').forEach(el => { const parent = el.parentNode; parent.replaceChild(document.createTextNode(el.textContent), el); parent.normalize(); }); }
  function highlightCard(el) { document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card')); if (el) { el.classList.add('narrator-active-card'); if (STATE.autoScroll) el.scrollIntoView({ behavior: 'smooth', block: 'center' }); } }

  function readCurrentCard() {
    if (STATE.cardIndex >= STATE.cards.length) { if (STATE.mode === 'book') nextTab(); else stopNarrator(); return; }
    const card = STATE.cards[STATE.cardIndex]; highlightCard(card.el);
    if (card.type === 'principle' && card.el && !card.el.classList.contains('open')) card.el.classList.add('open');
    updateProgress();
    speak(card.text, function() { if (!STATE.playing) return; if (STATE.duoReading && getLang() === 'ar') { readDuoTranslation(card, afterCardDone); return; } afterCardDone(); });
  }

  function afterCardDone() {
    if (!STATE.playing) return;
    if (STATE.loopCount > 0) { STATE.loopCurrent++; if (STATE.loopCurrent < STATE.loopCount) { setTimeout(function() { if (STATE.playing) readCurrentCard(); }, 300); return; } STATE.loopCurrent = 0; }
    var justRead = STATE.cards[STATE.cardIndex];
    var delay = justRead && justRead.type === 'title' ? 2500 : (justRead && justRead.text && justRead.text.length > 150) ? 2000 : 1200;
    STATE.cardIndex++; if (!STATE.playing) return;
    document.querySelectorAll('.narrator-active-card').forEach(function(e) { e.classList.remove('narrator-active-card'); });
    setTimeout(function() { if (STATE.playing) readCurrentCard(); }, delay);
  }

  function readDuoTranslation(card, onEnd) {
    var duoVoice = getVoiceForLang('fr'); var duoText = '';
    var principleId = card.el ? card.el.id : ''; var pMatch = principleId.match(/principle-(\d+)/);
    if (pMatch && typeof CARDS !== 'undefined') { var p = CARDS[parseInt(pMatch[1]) - 1]; if (p && p.fr) duoText = p.fr.title + '. ' + p.fr.desc; }
    if (!duoText) { if (onEnd) onEnd(); return; }
    var duoCalled = false;
    function duoDone() { if (!duoCalled) { duoCalled = true; STATE.duoTimeout = null; if (onEnd) onEnd(); } }
    var utt = new SpeechSynthesisUtterance(cleanText(duoText));
    utt.voice = duoVoice; utt.lang = 'fr-FR'; utt.rate = STATE.speed; utt.pitch = STATE.pitch;
    utt.onend = duoDone; utt.onerror = duoDone;
    STATE.duoTimeout = setTimeout(function() { if (STATE.playing) speechSynthesis.speak(utt); else duoDone(); }, 300);
  }

  function nextTab() { STATE.tabIndex++; if (STATE.tabIndex >= STATE.tabOrder.length) { stopNarrator(); showToast(nrT().bookDone); return; } switchToTab(STATE.tabOrder[STATE.tabIndex]); }
  function switchToTab(tabName) {
    var tabBtn = document.querySelector('.tab[data-tab="' + tabName + '"]');
    if (tabBtn) { tabBtn.click(); setTimeout(function() { if (!STATE.playing) return; STATE.cards = extractCards(getActivePanel()); STATE.cardIndex = 0; var title = getActivePanel().querySelector('.section-title'); if (title) { speak(title.textContent, function() { if (!STATE.playing) return; setTimeout(function() { if (STATE.playing) readCurrentCard(); }, 300); }); } else readCurrentCard(); }, 400); }
  }

  function playPage() { STATE.mode = 'page'; STATE.cards = extractCards(getActivePanel()); STATE.cardIndex = 0; STATE.playing = true; STATE.paused = false; closePanel(); updateUI(); setupMediaSession(); if (typeof showToast === 'function') showToast(nrT().page); readCurrentCard(); }
  function playBook() { STATE.mode = 'book'; STATE.tabIndex = 0; STATE.playing = true; STATE.paused = false; closePanel(); updateUI(); setupMediaSession(); if (typeof showToast === 'function') showToast(nrT().book); switchToTab(STATE.tabOrder[0]); }
  function closePanel() { var panel = document.getElementById('narratorPanel'); if (panel && !panel.classList.contains('hidden')) panel.classList.add('hidden'); }
  function pauseNarrator() { if (STATE.playing && !STATE.paused) { speechSynthesis.pause(); STATE.paused = true; if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused'; updateUI(); } else if (STATE.paused) { speechSynthesis.resume(); STATE.paused = false; if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing'; updateUI(); } }
  function cancelDuo() { if (STATE.duoTimeout) { clearTimeout(STATE.duoTimeout); STATE.duoTimeout = null; } }
  function stopNarrator() { speakGen++; cancelDuo(); speechSynthesis.cancel(); STATE.playing = false; STATE.paused = false; STATE.cardIndex = 0; clearHighlights(); document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card')); if (STATE.sleepTimer) { clearTimeout(STATE.sleepTimer); STATE.sleepTimer = null; } if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none'; updateUI(); }
  function nextCard() { if (!STATE.playing) return; speakGen++; cancelDuo(); speechSynthesis.cancel(); clearHighlights(); STATE.loopCurrent = 0; STATE.cardIndex++; if (STATE.cardIndex >= STATE.cards.length) { if (STATE.mode === 'book') nextTab(); else stopNarrator(); return; } readCurrentCard(); }
  function prevCard() { if (!STATE.playing) return; speakGen++; cancelDuo(); speechSynthesis.cancel(); clearHighlights(); STATE.loopCurrent = 0; STATE.cardIndex = Math.max(0, STATE.cardIndex - 1); readCurrentCard(); }
  function setSleepTimer(minutes) { if (STATE.sleepTimer) clearTimeout(STATE.sleepTimer); STATE.sleepMinutes = minutes; if (minutes > 0) STATE.sleepTimer = setTimeout(() => { stopNarrator(); showToast(nrT().sleepDone); }, minutes * 60000); }

  function setupMediaSession() {
    if (!('mediaSession' in navigator)) return;
    var l = getLang();
    navigator.mediaSession.metadata = new MediaMetadata({ title: l === 'ar' ? 'نحو تفسير موضوعي' : l === 'fr' ? 'Vers une Interpr\u00e9tation Th\u00e9matique du Coran' : 'Toward Thematic Quran Interpretation', artist: l === 'ar' ? 'الشيخ محمد الغزالي' : 'Sheikh Mohammed al-Ghazali', album: STATE.mode === 'book' ? (l === 'ar' ? 'الكتاب كاملاً' : l === 'fr' ? 'Livre complet' : 'Full Book') : getActiveTabName() });
    navigator.mediaSession.playbackState = 'playing';
    navigator.mediaSession.setActionHandler('play', pauseNarrator); navigator.mediaSession.setActionHandler('pause', pauseNarrator);
    navigator.mediaSession.setActionHandler('nexttrack', nextCard); navigator.mediaSession.setActionHandler('previoustrack', prevCard); navigator.mediaSession.setActionHandler('stop', stopNarrator);
  }

  function updateProgress() { var total = STATE.cards.length; var current = STATE.cardIndex + 1; var el = document.getElementById('narratorProgress'); if (el) el.textContent = current + '/' + total; var bar = document.getElementById('narratorBar'); if (bar) bar.style.width = (current / total * 100) + '%'; }
  function updateUI() { var btn = document.getElementById('narratorMainBtn'); var playBtn = document.getElementById('narratorPlayPause'); if (btn) btn.classList.toggle('active', STATE.playing); if (playBtn) playBtn.textContent = STATE.playing && !STATE.paused ? '\u23F8\uFE0F' : '\u25B6\uFE0F'; var speedEl = document.getElementById('narratorSpeed'); if (speedEl) speedEl.value = STATE.speed; var speedLabel = document.getElementById('narratorSpeedLabel'); if (speedLabel) speedLabel.textContent = STATE.speed + 'x'; }
  function updateLabels() { var t = nrT(); var set = function(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; }; set('narratorTitle', t.title); document.querySelectorAll('[data-nr="page"]').forEach(el => el.textContent = t.page); document.querySelectorAll('[data-nr="book"]').forEach(el => el.textContent = t.book); document.querySelectorAll('[data-nr="voice"]').forEach(el => el.textContent = t.voice); document.querySelectorAll('[data-nr="speed"]').forEach(el => el.textContent = t.speed); document.querySelectorAll('[data-nr="pitch"]').forEach(el => el.textContent = t.pitch); document.querySelectorAll('[data-nr="loop"]').forEach(el => el.textContent = t.loop); document.querySelectorAll('[data-nr="sleep"]').forEach(el => el.textContent = t.sleep); document.querySelectorAll('[data-nr="karaoke"]').forEach(el => el.textContent = t.karaoke); document.querySelectorAll('[data-nr="autoscroll"]').forEach(el => el.textContent = t.autoScroll); document.querySelectorAll('[data-nr="duo"]').forEach(el => el.textContent = t.duo); document.querySelectorAll('[data-nr="off"]').forEach(el => el.textContent = t.off); }
  function toggleNarratorPanel() { var panel = document.getElementById('narratorPanel'); if (!panel) return; panel.classList.toggle('hidden'); if (!panel.classList.contains('hidden')) { updateLabels(); populateVoiceSelect(); syncCheckboxes(); } if (typeof playSound === 'function') playSound('click'); }
  function syncCheckboxes() { var panel = document.getElementById('narratorPanel'); if (!panel) return; var toggles = panel.querySelectorAll('.narrator-toggle input[type=checkbox]'); if (toggles[0]) toggles[0].checked = STATE.karaokeEnabled; if (toggles[1]) toggles[1].checked = STATE.autoScroll; if (toggles[2]) toggles[2].checked = STATE.duoReading; var speedEl = document.getElementById('narratorSpeed'); if (speedEl) speedEl.value = STATE.speed; var speedLabel = document.getElementById('narratorSpeedLabel'); if (speedLabel) speedLabel.textContent = STATE.speed + 'x'; var pitchEl = document.getElementById('narratorPitch'); if (pitchEl) pitchEl.value = STATE.pitch; var pitchLabel = document.getElementById('narratorPitchLabel'); if (pitchLabel) pitchLabel.textContent = STATE.pitch.toFixed(1); }

  function onSpeedChange(val) { STATE.speed = parseFloat(val); var label = document.getElementById('narratorSpeedLabel'); if (label) label.textContent = STATE.speed + 'x'; localStorage.setItem('nt-narrator-speed', STATE.speed); }
  function onPitchChange(val) { STATE.pitch = parseFloat(val); var label = document.getElementById('narratorPitchLabel'); if (label) label.textContent = STATE.pitch.toFixed(1); localStorage.setItem('nt-narrator-pitch', STATE.pitch); }
  function onLoopChange(val) { STATE.loopCount = parseInt(val); }
  function onSleepChange(val) { setSleepTimer(parseInt(val)); if (parseInt(val) > 0 && typeof showToast === 'function') showToast(nrT().sleepSet + ' ' + val + ' ' + nrT().min); }
  function onKaraokeToggle(checked) { STATE.karaokeEnabled = checked; localStorage.setItem('nt-narrator-karaoke', checked); }
  function onAutoScrollToggle(checked) { STATE.autoScroll = checked; localStorage.setItem('nt-narrator-autoscroll', checked); }
  function onDuoToggle(checked) { STATE.duoReading = checked; localStorage.setItem('nt-narrator-duo', checked); }
  function populateVoiceSelect() { var select = document.getElementById('narratorVoice'); if (!select) return; var voices = speechSynthesis.getVoices(); var l = getLang(); var langCode = l === 'ar' ? 'ar' : l === 'fr' ? 'fr' : 'en'; select.innerHTML = ''; var filtered = []; voices.forEach(function(v, realIdx) { if (v.lang.startsWith(langCode)) filtered.push({ voice: v, idx: realIdx }); }); if (filtered.length === 0) voices.forEach(function(v, realIdx) { filtered.push({ voice: v, idx: realIdx }); }); var currentVoice = getVoiceForLang(l); filtered.forEach(function(item) { var opt = document.createElement('option'); opt.value = item.idx; opt.textContent = item.voice.name + ' (' + item.voice.lang + ')'; if (currentVoice && item.voice.name === currentVoice.name) opt.selected = true; select.appendChild(opt); }); }
  function onVoiceChange(val) { var voices = speechSynthesis.getVoices(); var voice = voices[parseInt(val)]; if (!voice) return; var l = getLang(); if (l === 'ar') STATE.voiceAR = voice; else if (l === 'fr') STATE.voiceFR = voice; else STATE.voiceEN = voice; }

  function loadSettings() { STATE.speed = parseFloat(localStorage.getItem('nt-narrator-speed')) || 1; STATE.pitch = parseFloat(localStorage.getItem('nt-narrator-pitch')) || 1; STATE.karaokeEnabled = localStorage.getItem('nt-narrator-karaoke') !== 'false'; STATE.autoScroll = localStorage.getItem('nt-narrator-autoscroll') !== 'false'; STATE.duoReading = localStorage.getItem('nt-narrator-duo') === 'true'; }

  document.addEventListener('keydown', function(e) { if (e.key === 'Escape') { var panel = document.getElementById('narratorPanel'); if (panel && !panel.classList.contains('hidden')) { panel.classList.add('hidden'); e.stopPropagation(); } } });
  window.addEventListener('beforeunload', function() { speechSynthesis.cancel(); });

  var sectionSpeaking = false;
  function speakSection(el) { if (STATE.playing) stopNarrator(); speakGen++; speechSynthesis.cancel(); var text = cleanText(el.textContent || ''); if (!text) return; sectionSpeaking = true; el.classList.add('narrator-active-card'); var l = getLang(); var utt = new SpeechSynthesisUtterance(text); var selectedVoice = getVoiceForLang(l); if (selectedVoice) utt.voice = selectedVoice; utt.lang = l === 'ar' ? 'ar-SA' : l === 'fr' ? 'fr-FR' : 'en-US'; utt.rate = (l === 'ar') ? STATE.speed * 0.9 : STATE.speed; utt.pitch = STATE.pitch; var done = false; function finish() { if (done) return; done = true; sectionSpeaking = false; el.classList.remove('narrator-active-card'); clearHighlights(); } utt.onend = finish; utt.onerror = finish; if (STATE.karaokeEnabled) { utt.onboundary = function(e) { if (e.name === 'word' && e.charLength > 0) highlightWord(el, e.charIndex, e.charLength, text); }; } speechSynthesis.speak(utt); var pollStarted = false; var pollInterval = setInterval(function() { if (done) { clearInterval(pollInterval); return; } if (speechSynthesis.speaking) pollStarted = true; if (pollStarted && speechSynthesis.paused) speechSynthesis.resume(); if (pollStarted && !speechSynthesis.speaking && !speechSynthesis.pending) { clearInterval(pollInterval); finish(); } }, 500); setTimeout(function() { if (!done) { clearInterval(pollInterval); finish(); } }, Math.max(5000, (text.length / 3) * (1000 / STATE.speed)) + 3000); }
  function stopSection() { if (sectionSpeaking) { speechSynthesis.cancel(); sectionSpeaking = false; document.querySelectorAll('.narrator-active-card').forEach(function(e) { e.classList.remove('narrator-active-card'); }); clearHighlights(); } }

  function injectSpeakButtons() {
    document.querySelectorAll('.narrator-speak-btn').forEach(function(b) { b.remove(); });
    ['.about-disclaimer','.about-author','.about-section','.principle-card','.anxiety-card','.habit-item','.daily-card'].forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(card) {
        if (card.querySelector('.narrator-speak-btn')) return;
        var btn = document.createElement('button'); btn.className = 'narrator-speak-btn'; btn.textContent = '\uD83D\uDD0A'; btn.title = nrT().page;
        btn.onclick = function(e) { e.stopPropagation(); if (sectionSpeaking) stopSection(); else speakSection(card); };
        card.style.position = 'relative'; card.appendChild(btn);
      });
    });
  }

  var origRenderAbout = window.renderAbout; if (origRenderAbout) window.renderAbout = function() { origRenderAbout(); setTimeout(injectSpeakButtons, 100); };
  var origRenderCards = window.renderCards; if (origRenderCards) window.renderCards = function() { origRenderCards(); setTimeout(injectSpeakButtons, 100); };
  var origRenderReflections = window.renderReflections; if (origRenderReflections) window.renderReflections = function() { origRenderReflections(); setTimeout(injectSpeakButtons, 100); };
  var origRenderHabits = window.renderHabits; if (origRenderHabits) window.renderHabits = function() { origRenderHabits(); setTimeout(injectSpeakButtons, 100); };
  var origRenderHome = window.renderHome; if (origRenderHome) window.renderHome = function() { origRenderHome(); setTimeout(injectSpeakButtons, 100); };

  function initNarrator() { loadSettings(); updateLabels(); setTimeout(injectSpeakButtons, 500); var lastLang = document.documentElement.lang || 'ar'; new MutationObserver(function() { var newLang = document.documentElement.lang || 'ar'; if (newLang !== lastLang) { lastLang = newLang; setTimeout(function() { populateVoiceSelect(); updateLabels(); injectSpeakButtons(); }, 100); if (STATE.playing) stopNarrator(); } }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] }); }

  window.narratorPlayPage = playPage; window.narratorPlayBook = playBook; window.narratorPause = pauseNarrator;
  window.narratorStop = stopNarrator; window.narratorNext = nextCard; window.narratorPrev = prevCard;
  window.narratorTogglePanel = toggleNarratorPanel; window.narratorSpeedChange = onSpeedChange; window.narratorPitchChange = onPitchChange;
  window.narratorLoopChange = onLoopChange; window.narratorSleepChange = onSleepChange;
  window.narratorKaraokeToggle = onKaraokeToggle; window.narratorAutoScrollToggle = onAutoScrollToggle;
  window.narratorDuoToggle = onDuoToggle; window.narratorVoiceChange = onVoiceChange; window.narratorPopulateVoices = populateVoiceSelect;

  document.addEventListener('DOMContentLoaded', initNarrator);
})();
