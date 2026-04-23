/* نحو تفسير موضوعي لسور القرآن الكريم — TOWARD THEMATIC QURAN INTERPRETATION — app.js v1.0 */
/* Based on "Nahwa Tafsir Mawdu'i li-Suwar al-Quran al-Karim" by Sheikh Mohammed al-Ghazali (1917-1996) */

// ═══════════════ TRILINGUAL DATA ═══════════════
const T = {
  ar: {
    appTitle: 'نحو تفسير موضوعي',
    splashSub: 'رحلة في فهم سور القرآن الكريم للنشء',
    splashHint: 'اضغط للتخطي',
    sacredRef: 'سورة ص ٣٨: ٢٩',
    tabHome: 'الرئيسية', tabTraits: 'الدروس', tabQuiz: 'المسابقة',
    tabProgress: 'تقدمي', tabAbout: 'الكتاب',
    traitsTitle: 'دروس التفسير الموضوعي',
    traitsDesc: '١٥ درساً من كتاب الشيخ محمد الغزالي — كل درس بآية وحكمة وتطبيق عملي',
    quizTitle: '🏆 من سيصبح مفسراً؟',
    quizDesc: 'اختبر معلوماتك عن سور القرآن — ٤ خيارات لكل سؤال',
    progressTitle: 'رحلتي مع السور',
    progressDesc: 'تقدمك وإنجازاتك في فهم سور القرآن',
    helpTitle: '❓ مساعدة',
    duaPanelTitle: '🤲 أدعية لفهم القرآن',
    dailyLabel: '✨ درس اليوم',
    searchPlaceholder: 'ابحث في الدروس...',
    share: 'مشاركة',
    verse: 'الآية',
    hadith: 'الحكمة',
    apply: '💡 طبّق الآن',
    youngMode: '🌟 مستكشف صغير',
    teenMode: '📖 باحث شاب',
    xpLabel: 'نقاط الخبرة',
    levelLabel: 'المستوى',
    streakMsg: 'يوم متتالي!',
    readMore: 'اقرأ المزيد',
    nextQ: 'السؤال التالي',
    lifeline5050: '50/50',
    lifelineHint: '💡 تلميح',
    lifelineQuran: '📖 مرجع قرآني',
    correct: 'أحسنت! إجابة صحيحة! 🎉',
    wrong: 'حاول مرة أخرى 💪',
    quizComplete: 'انتهت المسابقة!',
    score: 'النتيجة',
    tryAgain: 'أعد المسابقة',
    badge_beginner: 'مبتدئ',
    badge_reader: 'قارئ',
    badge_scholar: 'عالم',
    badge_persistent: 'مثابر',
    badge_expert: 'خبير',
    splashFeatures: [
      '١٥ درساً من كتاب نحو تفسير موضوعي',
      'مسابقة "من سيصبح مفسراً" بالمكافآت',
      'نظام النقاط والشارات والمستويات',
      'وضع مستكشف صغير ووضع باحث شاب'
    ],
  },
  en: {
    appTitle: 'Thematic Quran Interpretation',
    splashSub: 'A journey through understanding Quran surahs for young minds',
    splashHint: 'tap to skip',
    sacredRef: 'Surah Sad 38:29',
    tabHome: 'Home', tabTraits: 'Lessons', tabQuiz: 'Quiz',
    tabProgress: 'Progress', tabAbout: 'Book',
    traitsTitle: 'Thematic Tafsir Lessons',
    traitsDesc: '15 lessons from Sheikh al-Ghazali — each with a verse, wisdom, and practical application',
    quizTitle: '🏆 Who Wants to Be a Mufassir?',
    quizDesc: 'Test your knowledge about Quran surahs — 4 choices per question',
    progressTitle: 'My Surah Journey',
    progressDesc: 'Your progress and achievements in understanding Quran surahs',
    helpTitle: '❓ Help',
    duaPanelTitle: '🤲 Duas for Understanding the Quran',
    dailyLabel: "✨ Today's Lesson",
    searchPlaceholder: 'Search lessons...',
    share: 'Share',
    verse: 'Verse',
    hadith: 'Wisdom',
    apply: '💡 Apply Now',
    youngMode: '🌟 Young Explorer',
    teenMode: '📖 Teen Scholar',
    xpLabel: 'Experience Points',
    levelLabel: 'Level',
    streakMsg: 'day streak!',
    readMore: 'Read More',
    nextQ: 'Next Question',
    lifeline5050: '50/50',
    lifelineHint: '💡 Hint',
    lifelineQuran: '📖 Quran Ref',
    correct: 'Well done! Correct answer! 🎉',
    wrong: 'Try again next time 💪',
    quizComplete: 'Quiz Complete!',
    score: 'Score',
    tryAgain: 'Retry Quiz',
    badge_beginner: 'Beginner',
    badge_reader: 'Reader',
    badge_scholar: 'Scholar',
    badge_persistent: 'Persistent',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 lessons from Thematic Quran Interpretation',
      '"Who Wants to Be a Mufassir?" quiz with rewards',
      'Points, badges, and level system',
      'Young Explorer and Teen Scholar modes'
    ],
  },
  fr: {
    appTitle: 'Interpretation Thematique du Coran',
    splashSub: "Un voyage dans la comprehension des sourates du Coran pour les jeunes",
    splashHint: 'appuyez pour passer',
    sacredRef: 'Sourate Sad 38:29',
    tabHome: 'Accueil', tabTraits: 'Lecons', tabQuiz: 'Quiz',
    tabProgress: 'Progres', tabAbout: 'Livre',
    traitsTitle: 'Lecons de Tafsir Thematique',
    traitsDesc: "15 lecons du livre du Sheikh al-Ghazali — chacune avec un verset, une sagesse et une application pratique",
    quizTitle: '🏆 Qui Veut Devenir Mufassir ?',
    quizDesc: 'Testez vos connaissances sur les sourates du Coran — 4 choix par question',
    progressTitle: 'Mon Parcours des Sourates',
    progressDesc: 'Vos progres et realisations dans la comprehension des sourates',
    helpTitle: '❓ Aide',
    duaPanelTitle: '🤲 Duas pour Comprendre le Coran',
    dailyLabel: '✨ Lecon du Jour',
    searchPlaceholder: 'Rechercher les lecons...',
    share: 'Partager',
    verse: 'Verset',
    hadith: 'Sagesse',
    apply: '💡 Appliquez Maintenant',
    youngMode: '🌟 Jeune Explorateur',
    teenMode: '📖 Jeune Chercheur',
    xpLabel: "Points d'Experience",
    levelLabel: 'Niveau',
    streakMsg: 'jours consecutifs !',
    readMore: 'Lire Plus',
    nextQ: 'Question Suivante',
    lifeline5050: '50/50',
    lifelineHint: '💡 Indice',
    lifelineQuran: '📖 Ref. Coran',
    correct: 'Bravo ! Bonne reponse ! 🎉',
    wrong: 'Reessayez la prochaine fois 💪',
    quizComplete: 'Quiz Termine !',
    score: 'Score',
    tryAgain: 'Refaire le Quiz',
    badge_beginner: 'Debutant',
    badge_reader: 'Lecteur',
    badge_scholar: 'Savant',
    badge_persistent: 'Perseverant',
    badge_expert: 'Expert',
    splashFeatures: [
      '15 lecons du livre Interpretation Thematique du Coran',
      'Quiz « Qui Veut Devenir Mufassir ? » avec recompenses',
      'Systeme de points, badges et niveaux',
      'Modes Jeune Explorateur et Jeune Chercheur'
    ],
  }
};

// ═══════════════ 15 THEMATIC TAFSIR LESSONS DATA ═══════════════
const TRAITS = [
  {
    id:1, emoji:'🔬',
    ar:{title:'ما هو التفسير الموضوعي؟',desc:'يفرّق الغزالي بين التفسير الموضعي (شرح الآيات فرادى) والتفسير الموضوعي (فهم السورة كوحدة متكاملة). منهجه: كل سورة لها محور مركزي وخيط ناظم يربط آياتها رغم تعدد موضوعاتها. يكمّل التفسير التقليدي ولا يلغيه.',verse:'أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ وَلَوْ كَانَ مِنْ عِندِ غَيْرِ اللَّهِ لَوَجَدُوا فِيهِ اخْتِلَافًا كَثِيرًا',verseRef:'النساء ٨٢',hadith:'الغزالي: التفسير الموضوعي يلتقط صورة شمسية للسورة كلها — لا لآية واحدة',action:'اقرأ سورة كاملة اليوم وحاول أن تجد الخيط الذي يربط آياتها',young:'كل سورة في القرآن لها موضوع رئيسي! حاول اكتشافه 🔬'},
    en:{title:'What Is Thematic Tafsir?',desc:'Al-Ghazali distinguishes between positional tafsir (explaining verses individually) and thematic tafsir (understanding the surah as a coherent unit). His method: every surah has a central axis and a hidden thread binding its verses despite multiplicity of topics. It complements traditional tafsir.',verse:'Do they not reflect upon the Quran? Had it been from other than God, they would have found much discrepancy in it.',verseRef:'An-Nisa 82',hadith:'Al-Ghazali: Thematic tafsir captures a photograph of the entire surah — not just one verse',action:'Read a complete surah today and try to find the thread connecting its verses',young:'Every surah in the Quran has a main theme! Try to discover it 🔬'},
    fr:{title:'Qu\'est-ce que le Tafsir Thématique ?',desc:'Al-Ghazali distingue entre le tafsir positionnel (expliquer les versets individuellement) et le tafsir thématique (comprendre la sourate comme unité cohérente). Sa méthode : chaque sourate a un axe central et un fil caché liant ses versets.',verse:'Ne méditent-ils pas sur le Coran ? S\'il provenait d\'un autre que Dieu, ils y trouveraient beaucoup de contradictions.',verseRef:'An-Nisa 82',hadith:'Al-Ghazali : Le tafsir thématique capture une photographie de toute la sourate — pas d\'un seul verset',action:'Lisez une sourate entière et essayez de trouver le fil reliant ses versets',young:'Chaque sourate du Coran a un thème principal ! Essaie de le découvrir 🔬'}
  },
  {
    id:2, emoji:'🌟',
    ar:{title:'سورة الفاتحة: التأمل والسكينة',desc:'يرى الغزالي أن محور الفاتحة هو التأمل في أسماء الله وصفاته والإقرار بأنه وحده المستحق للعبادة. هي خلاصة القرآن كله في سبع آيات.',verse:'الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ',verseRef:'الفاتحة ٢',hadith:'الفاتحة أم القرآن — تجمع معانيه كلها في سبع آيات',action:'صلِّ اليوم وتأمل في كل آية من الفاتحة — اشعر بمعناها',young:'الفاتحة فيها كل القرآن مختصراً! تأمل معناها وأنت تصلي 🌟'},
    en:{title:'Al-Fatihah: Contemplation and Serenity',desc:'Al-Ghazali sees the axis of Al-Fatihah as contemplation of God\'s Names and Attributes, and acknowledging Him alone as worthy of worship. It is the essence of the entire Quran in seven verses.',verse:'All praise is due to God, Lord of the worlds.',verseRef:'Al-Fatihah 2',hadith:'Al-Fatihah is the Mother of the Quran — it gathers all its meanings in seven verses',action:'Pray today and reflect on each verse of Al-Fatihah — feel its meaning',young:'Al-Fatihah contains all the Quran summarized! Reflect on its meaning when you pray 🌟'},
    fr:{title:'Al-Fatihah : Contemplation et Sérénité',desc:'Al-Ghazali voit l\'axe d\'Al-Fatihah comme la contemplation des Noms et Attributs de Dieu, et Le reconnaître seul comme digne d\'adoration. C\'est l\'essence de tout le Coran en sept versets.',verse:'Louange à Dieu, Seigneur des mondes.',verseRef:'Al-Fatihah 2',hadith:'Al-Fatihah est la Mère du Coran — elle rassemble tous ses sens en sept versets',action:'Priez aujourd\'hui et méditez sur chaque verset d\'Al-Fatihah — ressentez son sens',young:'Al-Fatihah contient tout le Coran résumé ! Médite son sens quand tu pries 🌟'}
  },
  {
    id:3, emoji:'📚',
    ar:{title:'سورة البقرة: الوحدة في التنوع',desc:'يتبع الغزالي منهج الشيخ محمد عبد الله دراز الذي أثبت أن أطول سورة في القرآن ذات وحدة موضوعية رغم تنوع مواضيعها الهائل — من التشريع إلى القصص إلى العقيدة.',verse:'ذَٰلِكَ الْكِتَابُ لَا رَيْبَ فِيهِ هُدًى لِّلْمُتَّقِينَ',verseRef:'البقرة ٢',hadith:'الغزالي يقتدي بدراز في كتابه "النبأ العظيم" — أول تفسير موضوعي لسورة كاملة',action:'اقرأ سورة البقرة بنظرة شاملة — ما الخيط الذي يربط بدايتها بنهايتها؟',young:'سورة البقرة أطول سورة! لكن كلها مترابطة — حاول أن تكتشف كيف 📚'},
    en:{title:'Al-Baqarah: Unity in Diversity',desc:'Al-Ghazali follows Sheikh Muhammad Abdullah Draz who proved that the longest surah has thematic unity despite its enormous topical diversity — from legislation to narrative to theology.',verse:'This is the Book about which there is no doubt, a guidance for the righteous.',verseRef:'Al-Baqarah 2',hadith:'Al-Ghazali follows Draz\'s "The Great News" — the first thematic tafsir of a complete surah',action:'Read Surah Al-Baqarah with a holistic view — what thread connects its beginning to its end?',young:'Surah Al-Baqarah is the longest surah! But it\'s all connected — try to discover how 📚'},
    fr:{title:'Al-Baqarah : Unité dans la Diversité',desc:'Al-Ghazali suit Sheikh Muhammad Abdullah Draz qui a prouvé que la plus longue sourate a une unité thématique malgré son énorme diversité — de la législation au récit à la théologie.',verse:'C\'est le Livre au sujet duquel il n\'y a aucun doute, un guide pour les pieux.',verseRef:'Al-Baqarah 2',hadith:'Al-Ghazali suit Draz dans « La Grande Nouvelle » — le premier tafsir thématique d\'une sourate complète',action:'Lisez la Sourate Al-Baqarah avec une vue d\'ensemble — quel fil relie son début à sa fin ?',young:'La Sourate Al-Baqarah est la plus longue ! Mais tout est connecté — essaie de découvrir comment 📚'}
  },
  {
    id:4, emoji:'🤝',
    ar:{title:'آل عمران: المسلمون وأهل الكتاب',desc:'يرى الغزالي أن محور سورة آل عمران هو الديناميات الاجتماعية والسياسية بين المسلمين وأهل الكتاب. تعالج العلاقة مع المسيحيين خاصة وتؤسس لمبادئ الحوار.',verse:'قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ',verseRef:'آل عمران ٦٤',hadith:'السورة تؤسس لأدب الحوار مع الآخر — على قاعدة الكلمة السواء',action:'تعامل اليوم مع من يختلف معك بأدب الحوار القرآني',young:'القرآن يعلمنا كيف نتحاور مع الآخرين باحترام! 🤝'},
    en:{title:'Aal-Imran: Muslims and People of the Book',desc:'Al-Ghazali sees the axis of Surah Aal-Imran as the social and political dynamics between Muslims and the People of the Book. It addresses the relationship with Christians especially and establishes principles of dialogue.',verse:'Say: O People of the Book, come to a word common between us and you.',verseRef:'Aal-Imran 64',hadith:'The surah establishes the etiquette of dialogue with others — on the basis of common ground',action:'Engage today with someone who disagrees with you using Quranic dialogue etiquette',young:'The Quran teaches us how to have respectful dialogue with others! 🤝'},
    fr:{title:'Aal-Imran : Musulmans et Gens du Livre',desc:'Al-Ghazali voit l\'axe de la Sourate Aal-Imran comme les dynamiques sociales et politiques entre musulmans et Gens du Livre. Elle aborde la relation avec les chrétiens et établit les principes du dialogue.',verse:'Dis : Ô Gens du Livre, venez à une parole commune entre nous et vous.',verseRef:'Aal-Imran 64',hadith:'La sourate établit l\'étiquette du dialogue avec l\'autre — sur la base d\'un terrain commun',action:'Dialoguez avec quelqu\'un qui n\'est pas d\'accord avec vous en utilisant l\'étiquette coranique',young:'Le Coran nous apprend à dialoguer avec les autres avec respect ! 🤝'}
  },
  {
    id:5, emoji:'👨‍👩‍👧‍👦',
    ar:{title:'سورة النساء: من الأسرة إلى المجتمع',desc:'يرسم الغزالي مسار سورة النساء: تبدأ من الالتزامات الأسرية وتنتقل إلى العدالة المجتمعية ثم إلى العقيدة ثم الدفاع ثم التطهير الداخلي. ينتقد الغزالي التقاليد الثقافية المنسوبة خطأً للإسلام.',verse:'يَا أَيُّهَا النَّاسُ اتَّقُوا رَبَّكُمُ الَّذِي خَلَقَكُم مِّن نَّفْسٍ وَاحِدَةٍ',verseRef:'النساء ١',hadith:'السورة ترسم مساراً من الأسرة إلى العدالة إلى العقيدة إلى الدفاع',action:'اقرأ سورة النساء وتتبع تطور الموضوعات من البداية للنهاية',young:'سورة النساء تحمي حقوق الجميع — الرجال والنساء والأطفال! 👨‍👩‍👧‍👦'},
    en:{title:'An-Nisa: From Family to Society',desc:'Al-Ghazali traces Surah An-Nisa\'s trajectory: from familial obligations to communal justice to theology to defense to internal purification. He critiques cultural traditions wrongly attributed to Islam.',verse:'O mankind, fear your Lord, who created you from a single soul.',verseRef:'An-Nisa 1',hadith:'The surah traces a path from family to justice to creed to defense',action:'Read Surah An-Nisa and follow how its topics evolve from beginning to end',young:'Surah An-Nisa protects the rights of everyone — men, women, and children! 👨‍👩‍👧‍👦'},
    fr:{title:'An-Nisa : De la Famille à la Société',desc:'Al-Ghazali trace la trajectoire de la Sourate An-Nisa : des obligations familiales à la justice communautaire puis à la théologie puis à la défense puis à la purification intérieure.',verse:'Ô humanité, craignez votre Seigneur qui vous a créés d\'une seule âme.',verseRef:'An-Nisa 1',hadith:'La sourate trace un chemin de la famille à la justice à la croyance à la défense',action:'Lisez la Sourate An-Nisa et suivez l\'évolution des sujets du début à la fin',young:'La Sourate An-Nisa protège les droits de tous — hommes, femmes et enfants ! 👨‍👩‍👧‍👦'}
  },
  {
    id:6, emoji:'📖',
    ar:{title:'السور المكية والمدنية',desc:'يوضح الغزالي الفرق بين السور المكية (تركز على العقيدة والتوحيد والآخرة) والسور المدنية (تركز على التشريع وبناء المجتمع). فهم هذا الفرق ضروري لفهم سياق كل سورة.',verse:'اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ',verseRef:'العلق ١',hadith:'السور المكية بنت الإيمان في النفوس — والمدنية بنت المجتمع على أساسه',action:'عند قراءة سورة، اسأل أولاً: هل هي مكية أم مدنية؟ ما السياق؟',young:'بعض السور نزلت في مكة وبعضها في المدينة — ولكل منها طابعها الخاص! 📖'},
    en:{title:'Meccan and Medinan Surahs',desc:'Al-Ghazali explains the difference between Meccan surahs (focusing on creed, monotheism, and the afterlife) and Medinan surahs (focusing on legislation and society-building). Understanding this distinction is essential for context.',verse:'Read in the name of your Lord who created.',verseRef:'Al-Alaq 1',hadith:'Meccan surahs built faith in souls — Medinan surahs built society on that foundation',action:'When reading a surah, first ask: is it Meccan or Medinan? What is the context?',young:'Some surahs were revealed in Mecca and some in Medina — each has its own character! 📖'},
    fr:{title:'Sourates Mecquoises et Médinoises',desc:'Al-Ghazali explique la différence entre les sourates mecquoises (axées sur la croyance et l\'au-delà) et médinoises (axées sur la législation et la construction sociale).',verse:'Lis au nom de ton Seigneur qui a créé.',verseRef:'Al-Alaq 1',hadith:'Les sourates mecquoises ont construit la foi — les médinoises ont construit la société sur cette base',action:'En lisant une sourate, demandez d\'abord : est-elle mecquoise ou médinoise ? Quel est le contexte ?',young:'Certaines sourates sont descendues à la Mecque et d\'autres à Médine — chacune a son caractère ! 📖'}
  },
  {
    id:7, emoji:'🏔️',
    ar:{title:'سورة الكهف: أربع قصص ومحور واحد',desc:'يربط الغزالي بين قصص سورة الكهف الأربع (أهل الكهف، صاحب الجنتين، موسى والخضر، ذو القرنين) بمحور واحد: الابتلاء — بالإيمان والمال والعلم والسلطة.',verse:'أَمْ حَسِبْتَ أَنَّ أَصْحَابَ الْكَهْفِ وَالرَّقِيمِ كَانُوا مِنْ آيَاتِنَا عَجَبًا',verseRef:'الكهف ٩',hadith:'أربع قصص — أربعة ابتلاءات: الإيمان، المال، العلم، السلطة',action:'اقرأ سورة الكهف يوم الجمعة واكتشف الرابط بين قصصها',young:'سورة الكهف فيها ٤ قصص مذهلة! كلها عن الامتحان — بالإيمان والمال والعلم والقوة 🏔️'},
    en:{title:'Al-Kahf: Four Stories, One Axis',desc:'Al-Ghazali connects the four stories of Surah Al-Kahf (Sleepers of the Cave, Owner of Two Gardens, Moses and Khidr, Dhul-Qarnayn) with one axis: trials — of faith, wealth, knowledge, and power.',verse:'Or did you think that the companions of the cave and the inscription were among Our wondrous signs?',verseRef:'Al-Kahf 9',hadith:'Four stories — four trials: faith, wealth, knowledge, power',action:'Read Surah Al-Kahf on Friday and discover the link between its stories',young:'Surah Al-Kahf has 4 amazing stories! All about being tested — in faith, wealth, knowledge, and power 🏔️'},
    fr:{title:'Al-Kahf : Quatre Histoires, Un Axe',desc:'Al-Ghazali relie les quatre histoires de la Sourate Al-Kahf (Dormants de la Caverne, Propriétaire des Deux Jardins, Moïse et Khidr, Dhul-Qarnayn) avec un seul axe : les épreuves — de foi, richesse, savoir et pouvoir.',verse:'Pensais-tu que les gens de la caverne et l\'inscription étaient parmi Nos signes étonnants ?',verseRef:'Al-Kahf 9',hadith:'Quatre histoires — quatre épreuves : foi, richesse, savoir, pouvoir',action:'Lisez la Sourate Al-Kahf le vendredi et découvrez le lien entre ses histoires',young:'La Sourate Al-Kahf a 4 histoires incroyables ! Toutes sur les épreuves — de foi, richesse, savoir et pouvoir 🏔️'}
  },
  {
    id:8, emoji:'⚖️',
    ar:{title:'العدالة الاجتماعية في القرآن',desc:'يبرز الغزالي عبر تفسيره موضوعات العدالة الاجتماعية: الظروف المعيشية العادلة، مقاومة الاستبداد، حقوق المستضعفين. هذه ليست هوامش في القرآن بل محاور رئيسية.',verse:'يَا أَيُّهَا الَّذِينَ آمَنُوا كُونُوا قَوَّامِينَ بِالْقِسْطِ',verseRef:'النساء ١٣٥',hadith:'العدل في القرآن ليس ترفاً — بل شرط حضاري للنهوض',action:'ابحث عن آية تتحدث عن العدل وطبّقها في حياتك اليوم',young:'القرآن يأمرنا بالعدل مع الجميع — حتى مع من لا نحبهم! ⚖️'},
    en:{title:'Social Justice in the Quran',desc:'Throughout his commentary, Al-Ghazali highlights themes of social justice: equitable living conditions, opposing authoritarianism, rights of the vulnerable. These are not margins in the Quran but central themes.',verse:'O you who believe, be persistently standing firm in justice.',verseRef:'An-Nisa 135',hadith:'Justice in the Quran is not a luxury — it is a civilizational condition for progress',action:'Find a verse about justice and apply it in your life today',young:'The Quran commands us to be just with everyone — even with those we don\'t like! ⚖️'},
    fr:{title:'La Justice Sociale dans le Coran',desc:'À travers son commentaire, Al-Ghazali met en lumière les thèmes de justice sociale : conditions de vie équitables, opposition à l\'autoritarisme, droits des vulnérables. Ce ne sont pas des marges mais des thèmes centraux.',verse:'Ô vous qui croyez, soyez fermement établis dans la justice.',verseRef:'An-Nisa 135',hadith:'La justice dans le Coran n\'est pas un luxe — c\'est une condition civilisationnelle pour le progrès',action:'Trouvez un verset sur la justice et appliquez-le dans votre vie aujourd\'hui',young:'Le Coran nous ordonne d\'être justes avec tout le monde — même avec ceux qu\'on n\'aime pas ! ⚖️'}
  },
  {
    id:9, emoji:'🌊',
    ar:{title:'سورة الرحمن: نعم الله',desc:'يقدم الغزالي سورة الرحمن كسورة تُحصي نعم الله على الإنسان في تناسق فني بديع. تكرار "فبأي آلاء ربكما تكذبان" يشكل إيقاعاً يدعو للتأمل والشكر.',verse:'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ',verseRef:'الرحمن ١٣',hadith:'السورة حوار مع الإنسان والجن: أي نعمة من نعم ربكما تنكرون؟',action:'عدّ ثلاث نعم لله عليك اليوم — وقل: الحمد لله',young:'كم نعمة أعطاك الله! الشمس، الماء، الطعام، العائلة... قل الحمد لله! 🌊'},
    en:{title:'Ar-Rahman: God\'s Blessings',desc:'Al-Ghazali presents Surah Ar-Rahman as an enumeration of God\'s blessings in exquisite artistic harmony. The repetition of "Which of your Lord\'s blessings will you deny?" creates a rhythm inviting contemplation and gratitude.',verse:'Which of your Lord\'s blessings will you deny?',verseRef:'Ar-Rahman 13',hadith:'The surah is a dialogue with humans and jinn: which of your Lord\'s blessings do you deny?',action:'Count three of God\'s blessings upon you today — and say: Praise be to God',young:'How many blessings has God given you! The sun, water, food, family... say Praise be to God! 🌊'},
    fr:{title:'Ar-Rahman : Les Bienfaits de Dieu',desc:'Al-Ghazali présente la Sourate Ar-Rahman comme une énumération des bienfaits de Dieu en harmonie artistique exquise. La répétition de « Lequel des bienfaits de votre Seigneur nierez-vous ? » crée un rythme invitant à la contemplation.',verse:'Lequel des bienfaits de votre Seigneur nierez-vous ?',verseRef:'Ar-Rahman 13',hadith:'La sourate est un dialogue avec les humains et les djinns : lequel des bienfaits de votre Seigneur niez-vous ?',action:'Comptez trois bienfaits de Dieu sur vous aujourd\'hui — et dites : Louange à Dieu',young:'Combien de bienfaits Dieu t\'a donnés ! Le soleil, l\'eau, la nourriture, la famille... dis Louange à Dieu ! 🌊'}
  },
  {
    id:10, emoji:'👑',
    ar:{title:'سورة الملك: التأمل في الخلق',desc:'يرى الغزالي محور سورة الملك في دعوة الإنسان للتأمل في دقة الخلق كدليل على عظمة الخالق. السورة تجمع بين التوحيد والتفكر والاستعداد للآخرة.',verse:'الَّذِي خَلَقَ سَبْعَ سَمَاوَاتٍ طِبَاقًا مَّا تَرَىٰ فِي خَلْقِ الرَّحْمَٰنِ مِن تَفَاوُتٍ',verseRef:'الملك ٣',hadith:'السورة تدعو للنظر في الكون: هل ترى أي خلل؟ لا! الكون بديع التصميم',action:'انظر في السماء الليلة وتأمل: هل ترى أي خلل في خلق الله؟',young:'انظر للسماء الليلة! لا خلل فيها — هذا دليل على عظمة الله! 👑'},
    en:{title:'Al-Mulk: Contemplating Creation',desc:'Al-Ghazali sees the axis of Surah Al-Mulk in calling humans to contemplate the precision of creation as evidence of the Creator\'s greatness. The surah combines monotheism, reflection, and preparation for the afterlife.',verse:'He who created seven heavens in layers. You do not see in the creation of the Most Merciful any inconsistency.',verseRef:'Al-Mulk 3',hadith:'The surah calls us to look at the cosmos: do you see any flaw? No! The universe is perfectly designed',action:'Look at the sky tonight and reflect: do you see any flaw in God\'s creation?',young:'Look at the sky tonight! No flaw in it — this is evidence of God\'s greatness! 👑'},
    fr:{title:'Al-Mulk : Contempler la Création',desc:'Al-Ghazali voit l\'axe de la Sourate Al-Mulk dans l\'appel à contempler la précision de la création comme preuve de la grandeur du Créateur. La sourate combine monothéisme, réflexion et préparation pour l\'au-delà.',verse:'Celui qui a créé sept cieux superposés. Tu ne vois dans la création du Tout Miséricordieux aucune discordance.',verseRef:'Al-Mulk 3',hadith:'La sourate nous appelle à regarder le cosmos : voyez-vous un défaut ? Non ! L\'univers est parfaitement conçu',action:'Regardez le ciel ce soir et réfléchissez : voyez-vous un défaut dans la création de Dieu ?',young:'Regarde le ciel ce soir ! Aucun défaut — c\'est la preuve de la grandeur de Dieu ! 👑'}
  },
  {
    id:11, emoji:'🎨',
    ar:{title:'أثر الشيخ دراز',desc:'يعترف الغزالي بفضل الشيخ محمد عبد الله دراز الذي أسّس منهج التفسير الموضوعي في كتابه "النبأ العظيم". دراز أثبت أن سورة البقرة — رغم طولها — وحدة موضوعية متكاملة. الغزالي امتد بهذا المنهج ليشمل كل السور.',verse:'وَلَقَدْ آتَيْنَاكَ سَبْعًا مِّنَ الْمَثَانِي وَالْقُرْآنَ الْعَظِيمَ',verseRef:'الحجر ٨٧',hadith:'دراز فتح الباب — والغزالي مدّ المنهج لـ ١١٤ سورة كاملة',action:'اقرأ عن منهج الشيخ دراز في "النبأ العظيم" — المصدر الأول للتفسير الموضوعي',young:'الشيخ دراز اكتشف أن كل سورة لها موضوع رئيسي — والغزالي طبّق ذلك على كل القرآن! 🎨'},
    en:{title:'Sheikh Draz\'s Influence',desc:'Al-Ghazali credits Sheikh Muhammad Abdullah Draz who pioneered thematic tafsir in his book "The Great News." Draz proved that Surah Al-Baqarah — despite its length — is a thematically unified composition. Al-Ghazali extended this method to cover all 114 surahs.',verse:'And We have certainly given you seven of the often repeated and the great Quran.',verseRef:'Al-Hijr 87',hadith:'Draz opened the door — Al-Ghazali extended the method to all 114 surahs',action:'Read about Sheikh Draz\'s methodology in "The Great News" — the first source of thematic tafsir',young:'Sheikh Draz discovered that every surah has a main theme — and Al-Ghazali applied it to the whole Quran! 🎨'},
    fr:{title:'L\'Influence de Sheikh Draz',desc:'Al-Ghazali reconnaît le mérite de Sheikh Muhammad Abdullah Draz qui a fondé le tafsir thématique dans « La Grande Nouvelle ». Draz a prouvé que la Sourate Al-Baqarah est une composition thématiquement unifiée. Al-Ghazali a étendu cette méthode aux 114 sourates.',verse:'Et Nous t\'avons certes donné les sept souvent répétés et le grand Coran.',verseRef:'Al-Hijr 87',hadith:'Draz a ouvert la porte — Al-Ghazali a étendu la méthode aux 114 sourates',action:'Lisez sur la méthodologie de Sheikh Draz dans « La Grande Nouvelle »',young:'Sheikh Draz a découvert que chaque sourate a un thème principal — et Al-Ghazali l\'a appliqué à tout le Coran ! 🎨'}
  },
  {
    id:12, emoji:'🔗',
    ar:{title:'الربط بين السور',desc:'يكشف الغزالي الروابط الخفية بين السور المتتالية. كل سورة تمهّد لما بعدها وتبني على ما قبلها. ترتيب المصحف ليس عشوائياً بل فيه حكمة إلهية.',verse:'اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا مُّتَشَابِهًا مَّثَانِيَ',verseRef:'الزمر ٢٣',hadith:'ترتيب السور في المصحف توقيفي — وفيه حكم لم نكتشفها كلها بعد',action:'اقرأ سورتين متتاليتين وابحث عن الرابط بينهما',young:'القرآن مرتّب بحكمة! كل سورة مرتبطة بما قبلها وما بعدها 🔗'},
    en:{title:'Connections Between Surahs',desc:'Al-Ghazali reveals the hidden connections between consecutive surahs. Each surah prepares for what follows and builds on what precedes. The Mushaf\'s order is not random but contains divine wisdom.',verse:'God has sent down the best statement: a consistent Book with repeated passages.',verseRef:'Az-Zumar 23',hadith:'The order of surahs in the Mushaf is divinely ordained — with wisdom we haven\'t fully discovered yet',action:'Read two consecutive surahs and search for the link between them',young:'The Quran is wisely arranged! Every surah is connected to what comes before and after 🔗'},
    fr:{title:'Les Connexions Entre Sourates',desc:'Al-Ghazali révèle les connexions cachées entre les sourates consécutives. Chaque sourate prépare ce qui suit et construit sur ce qui précède. L\'ordre du Mushaf n\'est pas aléatoire mais contient une sagesse divine.',verse:'Dieu a fait descendre le plus beau discours : un Livre cohérent avec des passages répétés.',verseRef:'Az-Zumar 23',hadith:'L\'ordre des sourates dans le Mushaf est divinement ordonné — avec des sagesses non encore toutes découvertes',action:'Lisez deux sourates consécutives et cherchez le lien entre elles',young:'Le Coran est sagement arrangé ! Chaque sourate est liée à ce qui vient avant et après 🔗'}
  },
  {
    id:13, emoji:'🌅',
    ar:{title:'جزء عمّ: رسائل قصيرة قوية',desc:'السور القصيرة في آخر القرآن (جزء عمّ) تحمل رسائل قوية مكثفة. يعالجها الغزالي بإيجاز لكن يبرز محور كل منها. هي أول ما يتعلمه الطفل المسلم.',verse:'وَالْعَصْرِ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ',verseRef:'العصر ١-٢',hadith:'سورة العصر وحدها لو تدبرها الناس لكفتهم — قال الشافعي',action:'احفظ سورة قصيرة اليوم وتأمل في معناها العميق',young:'السور القصيرة سهلة الحفظ لكنها عميقة المعنى! احفظ واحدة وافهمها 🌅'},
    en:{title:'Juz Amma: Short Powerful Messages',desc:'The short surahs at the end of the Quran (Juz Amma) carry powerful concentrated messages. Al-Ghazali treats them briefly but highlights each one\'s axis. They are the first thing a Muslim child learns.',verse:'By time, indeed mankind is in loss.',verseRef:'Al-Asr 1-2',hadith:'Surah Al-Asr alone, if people reflected on it, would suffice them — Imam al-Shafi\'i said',action:'Memorize a short surah today and contemplate its deep meaning',young:'Short surahs are easy to memorize but deep in meaning! Memorize one and understand it 🌅'},
    fr:{title:'Juz Amma : Messages Courts et Puissants',desc:'Les courtes sourates à la fin du Coran (Juz Amma) portent des messages puissants et concentrés. Al-Ghazali les traite brièvement mais met en lumière l\'axe de chacune.',verse:'Par le temps, l\'homme est certes en perdition.',verseRef:'Al-Asr 1-2',hadith:'La Sourate Al-Asr seule, si les gens y méditaient, leur suffirait — a dit l\'Imam al-Shafi\'i',action:'Mémorisez une courte sourate aujourd\'hui et contemplez son sens profond',young:'Les courtes sourates sont faciles à mémoriser mais profondes ! Mémorise-en une et comprends-la 🌅'}
  },
  {
    id:14, emoji:'🧭',
    ar:{title:'القرآن هداية لا قانون فقط',desc:'يعامل الغزالي القرآن بوصفه كتاب هداية للحياة لا مجرد قانون. تفسيره يربط تعاليم القرآن بالقضايا الأخلاقية والاجتماعية المعاصرة بدل التركيز على الاستنباط القانوني فقط.',verse:'إِنَّ هَٰذَا الْقُرْآنَ يَهْدِي لِلَّتِي هِيَ أَقْوَمُ',verseRef:'الإسراء ٩',hadith:'القرآن كتاب حياة شاملة — لا مجرد كتاب أحكام',action:'اقرأ آية اليوم واسأل: كيف تهديني في حياتي العملية؟',young:'القرآن دليل لحياتك كلها — ليس فقط للصلاة! 🧭'},
    en:{title:'Quran as Guidance, Not Just Law',desc:'Al-Ghazali treats the Quran primarily as a book of guidance for living, not just a legal code. His commentary consistently connects Quranic teachings to contemporary moral and social concerns rather than focusing solely on legal extraction.',verse:'Indeed, this Quran guides to that which is most suitable.',verseRef:'Al-Isra 9',hadith:'The Quran is a comprehensive book of life — not merely a book of rulings',action:'Read a verse today and ask: how does this guide me in my practical life?',young:'The Quran is a guide for your whole life — not just for prayer! 🧭'},
    fr:{title:'Le Coran : Guide, Pas Seulement Loi',desc:'Al-Ghazali traite le Coran principalement comme un livre de guidance pour la vie, pas juste un code juridique. Son commentaire relie les enseignements coraniques aux préoccupations morales et sociales contemporaines.',verse:'Certes, ce Coran guide vers ce qui est le plus droit.',verseRef:'Al-Isra 9',hadith:'Le Coran est un livre de vie complet — pas seulement un livre de règles',action:'Lisez un verset aujourd\'hui et demandez : comment cela me guide dans ma vie pratique ?',young:'Le Coran est un guide pour toute ta vie — pas seulement pour la prière ! 🧭'}
  },
  {
    id:15, emoji:'🌐',
    ar:{title:'القرآن للعالم كله',desc:'يغطي الكتاب كل ١١٤ سورة — من الفاتحة إلى الناس. رسالة القرآن عالمية شاملة لكل البشر. الغزالي يقدمه كمشروع حضاري لا كطقوس دينية مغلقة.',verse:'وَمَا أَرْسَلْنَاكَ إِلَّا رَحْمَةً لِّلْعَالَمِينَ',verseRef:'الأنبياء ١٠٧',hadith:'الغزالي فسّر ١١٤ سورة موضوعياً — مشروع فريد في تاريخ التفسير',action:'ابدأ مشروعك الشخصي: اقرأ سورة كل يوم واكتب محورها المركزي',young:'الغزالي قرأ كل ١١٤ سورة واكتشف موضوع كل واحدة — هل يمكنك فعل ذلك؟ 🌐'},
    en:{title:'The Quran for All the World',desc:'The book covers all 114 surahs — from Al-Fatihah to An-Nas. The Quran\'s message is universal for all humanity. Al-Ghazali presents it as a civilizational project, not closed religious rituals.',verse:'And We have not sent you except as a mercy to the worlds.',verseRef:'Al-Anbiya 107',hadith:'Al-Ghazali thematically interpreted all 114 surahs — a unique project in the history of tafsir',action:'Start your personal project: read a surah daily and write its central theme',young:'Al-Ghazali read all 114 surahs and discovered each one\'s theme — can you do that? 🌐'},
    fr:{title:'Le Coran pour le Monde Entier',desc:'Le livre couvre les 114 sourates — d\'Al-Fatihah à An-Nas. Le message du Coran est universel pour toute l\'humanité. Al-Ghazali le présente comme un projet civilisationnel.',verse:'Et Nous ne t\'avons envoyé qu\'en miséricorde pour les mondes.',verseRef:'Al-Anbiya 107',hadith:'Al-Ghazali a interprété thématiquement les 114 sourates — un projet unique dans l\'histoire du tafsir',action:'Commencez votre projet personnel : lisez une sourate par jour et notez son thème central',young:'Al-Ghazali a lu les 114 sourates et découvert le thème de chacune — peux-tu faire pareil ? 🌐'}
  }
];

const QUIZ = [
  {
    ar:{q:'ما هو التفسير الموضوعي؟',opts:['تفسير كل آية على حدة','دراسة السورة كوحدة متكاملة ذات محور واحد','تفسير القرآن بالحديث فقط','ترجمة القرآن إلى لغات أخرى'],correct:1,hint:'هذا المنهج ينظر إلى السورة كاملة لا إلى آيات مفردة',quran:'ص ٢٩'},
    en:{q:'What is thematic tafsir?',opts:['Interpreting each verse separately','Studying the surah as a complete unit with one theme','Interpreting the Quran by hadith only','Translating the Quran to other languages'],correct:1,hint:'This approach looks at the whole surah, not individual verses',quran:'Sad 29'},
    fr:{q:'Qu\'est-ce que le tafsir thematique ?',opts:['Interpreter chaque verset separement','Etudier la sourate comme une unite complete avec un theme','Interpreter le Coran par le hadith uniquement','Traduire le Coran dans d\'autres langues'],correct:1,hint:'Cette approche regarde la sourate entiere, pas des versets individuels',quran:'Sad 29'}
  },
  {
    ar:{q:'ما المحور الأساسي لسورة الفاتحة؟',opts:['قصص الأنبياء','أحكام الصلاة','العلاقة بين العبد وربه','أحكام الصيام'],correct:2,hint:'هذه السورة تبدأ بالحمد وتنتهي بطلب الهداية',quran:'الفاتحة ١-٧'},
    en:{q:'What is the central theme of Al-Fatihah?',opts:['Stories of prophets','Rulings on prayer','The relationship between servant and Lord','Fasting rulings'],correct:2,hint:'This surah starts with praise and ends with asking for guidance',quran:'Al-Fatihah 1-7'},
    fr:{q:'Quel est le theme central d\'Al-Fatihah ?',opts:['Les recits des prophetes','Les regles de la priere','La relation entre le serviteur et son Seigneur','Les regles du jeune'],correct:2,hint:'Cette sourate commence par la louange et se termine par la demande de guidance',quran:'Al-Fatihah 1-7'}
  },
  {
    ar:{q:'ما الموضوع الرئيسي لسورة البقرة؟',opts:['قصة موسى فقط','بناء الأمة المسلمة','أحكام الحج','قصة عيسى'],correct:1,hint:'هذه أطول سورة في القرآن وتتناول تأسيس المجتمع',quran:'البقرة ١٤٣'},
    en:{q:'What is the main theme of Surah Al-Baqarah?',opts:['The story of Musa only','Building the Muslim nation','Hajj rulings','The story of Isa'],correct:1,hint:'This is the longest surah and addresses establishing the community',quran:'Al-Baqarah 143'},
    fr:{q:'Quel est le theme principal de la sourate Al-Baqarah ?',opts:['L\'histoire de Moussa uniquement','La construction de la nation musulmane','Les regles du Hajj','L\'histoire d\'Isa'],correct:1,hint:'C\'est la plus longue sourate et elle traite de l\'etablissement de la communaute',quran:'Al-Baqarah 143'}
  },
  {
    ar:{q:'ما الفتنة التي تعالجها قصة أصحاب الكهف؟',opts:['فتنة المال','فتنة العلم','فتنة الدين','فتنة السلطة'],correct:2,hint:'هؤلاء الشباب فروا بدينهم من الاضطهاد',quran:'الكهف ١٣'},
    en:{q:'What trial does the story of the Sleepers of the Cave address?',opts:['Trial of wealth','Trial of knowledge','Trial of religion','Trial of power'],correct:2,hint:'These young men fled with their faith from persecution',quran:'Al-Kahf 13'},
    fr:{q:'Quelle epreuve l\'histoire des Dormants de la Grotte traite-t-elle ?',opts:['L\'epreuve de la richesse','L\'epreuve du savoir','L\'epreuve de la religion','L\'epreuve du pouvoir'],correct:2,hint:'Ces jeunes hommes ont fui avec leur foi face a la persecution',quran:'Al-Kahf 13'}
  },
  {
    ar:{q:'ما الآية المتكررة في سورة الرحمن؟',opts:['إن مع العسر يسراً','فبأي آلاء ربكما تكذبان','قل هو الله أحد','والعصر إن الإنسان لفي خسر'],correct:1,hint:'هذه الآية تسأل عن إنكار النعم',quran:'الرحمن ١٣'},
    en:{q:'What verse is repeated in Surah Ar-Rahman?',opts:['With hardship comes ease','Which of the favors of your Lord will you deny?','Say: He is Allah, the One','By time, mankind is in loss'],correct:1,hint:'This verse asks about denying blessings',quran:'Ar-Rahman 13'},
    fr:{q:'Quel verset est repete dans la sourate Ar-Rahman ?',opts:['Avec la difficulte vient la facilite','Lequel des bienfaits de votre Seigneur nierez-vous ?','Dis : Il est Allah, l\'Unique','Par le Temps, l\'homme est en perdition'],correct:1,hint:'Ce verset interroge sur le deni des bienfaits',quran:'Ar-Rahman 13'}
  },
  {
    ar:{q:'كم قصة رئيسية تحتوي سورة الكهف؟',opts:['قصتان','ثلاث قصص','أربع قصص','خمس قصص'],correct:2,hint:'كل قصة تعالج فتنة مختلفة من فتن الحياة',quran:'الكهف'},
    en:{q:'How many main stories does Surah Al-Kahf contain?',opts:['Two stories','Three stories','Four stories','Five stories'],correct:2,hint:'Each story addresses a different trial of life',quran:'Al-Kahf'},
    fr:{q:'Combien de recits principaux la sourate Al-Kahf contient-elle ?',opts:['Deux recits','Trois recits','Quatre recits','Cinq recits'],correct:2,hint:'Chaque recit traite une epreuve differente de la vie',quran:'Al-Kahf'}
  },
  {
    ar:{q:'ماذا تساوي سورة الإخلاص من القرآن؟',opts:['ربع القرآن','نصف القرآن','ثلث القرآن','عشر القرآن'],correct:2,hint:'هذه السورة تلخص العقيدة الإسلامية كاملة',quran:'الإخلاص'},
    en:{q:'How much of the Quran does Surah Al-Ikhlas equal?',opts:['A quarter','Half','A third','A tenth'],correct:2,hint:'This surah summarizes the entire Islamic creed',quran:'Al-Ikhlas'},
    fr:{q:'A combien du Coran la sourate Al-Ikhlas equivaut-elle ?',opts:['Un quart','La moitie','Un tiers','Un dixieme'],correct:2,hint:'Cette sourate resume le credo islamique entier',quran:'Al-Ikhlas'}
  },
  {
    ar:{q:'ما الفرق بين السور المكية والمدنية في المحتوى؟',opts:['المكية أطول والمدنية أقصر','المكية تركز على العقيدة والمدنية على التشريع','المكية بالعربية والمدنية بالعبرية','لا فرق بينهما'],correct:1,hint:'مكة كانت مرحلة بناء الإيمان والمدينة مرحلة بناء الدولة',quran:'المائدة ٤٨'},
    en:{q:'What is the content difference between Meccan and Medinan surahs?',opts:['Meccan are longer, Medinan shorter','Meccan focus on belief, Medinan on legislation','Meccan in Arabic, Medinan in Hebrew','No difference'],correct:1,hint:'Mecca was the phase of building faith, Medina was building the state',quran:'Al-Ma\'idah 48'},
    fr:{q:'Quelle est la difference de contenu entre les sourates mecquoises et medinoises ?',opts:['Les mecquoises sont plus longues, les medinoises plus courtes','Les mecquoises se concentrent sur la croyance, les medinoises sur la legislation','Les mecquoises en arabe, les medinoises en hebreu','Aucune difference'],correct:1,hint:'La Mecque etait la phase de construction de la foi, Medine celle de l\'Etat',quran:'Al-Ma\'idah 48'}
  },
  {
    ar:{q:'أكمل الآية: "وَلَقَدْ يَسَّرْنَا الْقُرْآنَ لِلذِّكْرِ فَهَلْ مِنْ ..."',opts:['تائب','مُدَّكِر','قارئ','حافظ'],correct:1,hint:'هذه الكلمة تعني: من يتذكر ويتعظ',quran:'القمر ١٧'},
    en:{q:'Complete the verse: "We have made the Quran easy for remembrance, so is there any who will..."',opts:['Repent','Remember','Read','Memorize'],correct:1,hint:'This word means: one who reflects and takes heed',quran:'Al-Qamar 17'},
    fr:{q:'Completez le verset : « Nous avons rendu le Coran facile pour la meditation. Y a-t-il quelqu\'un pour... »',opts:['Se repentir','Reflechir','Lire','Memoriser'],correct:1,hint:'Ce mot signifie : celui qui reflechit et tire des lecons',quran:'Al-Qamar 17'}
  },
  {
    ar:{q:'ما الدرس الرئيسي من سورة يوسف حسب الشيخ الغزالي؟',opts:['أحكام البيع والشراء','الصبر ينتهي بالنصر والتمكين','قصة الطوفان','أحكام الزواج'],correct:1,hint:'يوسف انتقل من الجب إلى العرش بفضل صبره',quran:'يوسف ٩٠'},
    en:{q:'What is the main lesson of Surah Yusuf according to Sheikh al-Ghazali?',opts:['Rulings on buying and selling','Patience leads to victory and empowerment','The story of the flood','Marriage rulings'],correct:1,hint:'Yusuf went from the well to the throne through his patience',quran:'Yusuf 90'},
    fr:{q:'Quelle est la lecon principale de la sourate Yusuf selon le Sheikh al-Ghazali ?',opts:['Les regles d\'achat et de vente','La patience mene a la victoire et a l\'autonomisation','L\'histoire du deluge','Les regles du mariage'],correct:1,hint:'Yusuf est passe du puits au trone grace a sa patience',quran:'Yusuf 90'}
  }
];

// ═══════════════ DUAS DATA ═══════════════
const DUAS = [
  { ar:{label:'دعاء فهم القرآن',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',tr:'دعاء مأثور'},
    en:{label:'Dua for Understanding the Quran',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',tr:'O Allah, open for us Your wisdom and spread upon us Your mercy, O Possessor of majesty and honor'},
    fr:{label:'Dua pour Comprendre le Coran',text:'اللَّهُمَّ افْتَحْ عَلَيْنَا حِكْمَتَكَ وَانْشُرْ عَلَيْنَا رَحْمَتَكَ يَا ذَا الْجَلَالِ وَالْإِكْرَامِ',tr:'O Allah, ouvre-nous Ta sagesse et repands sur nous Ta misericorde, O Possesseur de la majeste et de la generosite'} },
  { ar:{label:'دعاء التدبر',text:'اللَّهُمَّ اجْعَلْنِي مِمَّنْ يَتَدَبَّرُ كِتَابَكَ وَيَعْمَلُ بِمَا فِيهِ',tr:'دعاء مأثور'},
    en:{label:'Dua for Contemplation',text:'اللَّهُمَّ اجْعَلْنِي مِمَّنْ يَتَدَبَّرُ كِتَابَكَ وَيَعْمَلُ بِمَا فِيهِ',tr:'O Allah, make me among those who reflect on Your Book and act upon what is in it'},
    fr:{label:'Dua pour la Contemplation',text:'اللَّهُمَّ اجْعَلْنِي مِمَّنْ يَتَدَبَّرُ كِتَابَكَ وَيَعْمَلُ بِمَا فِيهِ',tr:'O Allah, fais de moi parmi ceux qui meditent Ton Livre et agissent selon ce qu\'il contient'} },
  { ar:{label:'دعاء زيادة العلم',text:'رَبِّ زِدْنِي عِلْمًا',tr:'طه ١١٤'},
    en:{label:'Dua for Increasing Knowledge',text:'رَبِّ زِدْنِي عِلْمًا',tr:'My Lord, increase me in knowledge — Taha 114'},
    fr:{label:'Dua pour Augmenter le Savoir',text:'رَبِّ زِدْنِي عِلْمًا',tr:'Mon Seigneur, augmente-moi en savoir — Taha 114'} },
  { ar:{label:'دعاء الانتفاع بالقرآن',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا',tr:'رواه الترمذي'},
    en:{label:'Dua for Benefiting from the Quran',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا',tr:'O Allah, benefit me with what You have taught me, teach me what will benefit me, and increase me in knowledge — Tirmidhi'},
    fr:{label:'Dua pour Beneficier du Coran',text:'اللَّهُمَّ انْفَعْنِي بِمَا عَلَّمْتَنِي وَعَلِّمْنِي مَا يَنْفَعُنِي وَزِدْنِي عِلْمًا',tr:'O Allah, fais-moi profiter de ce que Tu m\'as appris, apprends-moi ce qui me sera utile et augmente-moi en savoir — Tirmidhi'} },
  { ar:{label:'دعاء القرآن ربيع القلب',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'رواه أحمد'},
    en:{label:'Dua: Quran as Spring of the Heart',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'O Allah, make the Quran the spring of my heart, the light of my chest, the remover of my sadness and the dispeller of my worry — Ahmad'},
    fr:{label:'Dua : Le Coran Printemps du Coeur',text:'اللَّهُمَّ اجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِي وَنُورَ صَدْرِي وَجَلَاءَ حُزْنِي وَذَهَابَ هَمِّي',tr:'O Allah, fais du Coran le printemps de mon coeur, la lumiere de ma poitrine, le dissipateur de ma tristesse et le chasseur de mon souci — Ahmad'} }
];

// ═══════════════ XP / BADGE SYSTEM ═══════════════
const XP_KEY = 'tafsir-mawdui-xp';
const BADGES_KEY = 'tafsir-mawdui-badges';
const READ_KEY = 'tafsir-mawdui-read';
const STREAK_KEY = 'tafsir-mawdui-streak';
const MODE_KEY = 'tafsir-mawdui-mode';
const QUIZ_BEST_KEY = 'tafsir-mawdui-quiz-best';

const BADGE_DEFS = [
  { id:'beginner', emoji:'🌱', xp:0, ar:'مبتدئ', en:'Beginner', fr:'Debutant' },
  { id:'reader', emoji:'📖', xp:100, ar:'قارئ', en:'Reader', fr:'Lecteur' },
  { id:'scholar', emoji:'🎓', xp:300, ar:'عالم', en:'Scholar', fr:'Savant' },
  { id:'persistent', emoji:'🔥', xp:500, ar:'مثابر', en:'Persistent', fr:'Perseverant' },
  { id:'expert', emoji:'🏆', xp:1000, ar:'خبير', en:'Expert', fr:'Expert' }
];

function getXP() { return parseInt(localStorage.getItem(XP_KEY) || '0'); }
function addXP(pts) {
  const xp = getXP() + pts;
  localStorage.setItem(XP_KEY, xp);
  checkBadges(xp);
  updateXPDisplay();
  return xp;
}
function getLevel(xp) {
  if (xp >= 1000) return 5;
  if (xp >= 500) return 4;
  if (xp >= 300) return 3;
  if (xp >= 100) return 2;
  return 1;
}
function getEarnedBadges() { return JSON.parse(localStorage.getItem(BADGES_KEY) || '[]'); }
function checkBadges(xp) {
  const earned = getEarnedBadges();
  BADGE_DEFS.forEach(b => {
    if (xp >= b.xp && !earned.includes(b.id)) {
      earned.push(b.id);
      localStorage.setItem(BADGES_KEY, JSON.stringify(earned));
      showToast(`${b.emoji} ${b[lang]}!`);
      playSound('success');
    }
  });
}
function getReadTraits() { return JSON.parse(localStorage.getItem(READ_KEY) || '[]'); }
function markTraitRead(id) {
  const read = getReadTraits();
  if (!read.includes(id)) {
    read.push(id);
    localStorage.setItem(READ_KEY, JSON.stringify(read));
    addXP(10);
  }
}

// ═══════════════ STREAK ═══════════════
function getStreak() { return JSON.parse(localStorage.getItem(STREAK_KEY) || '{"count":0,"lastDate":""}'); }
function updateStreak() {
  const today = new Date().toDateString();
  const s = getStreak();
  if (s.lastDate === today) return s.count;
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate()-1);
  if (s.lastDate === yesterday.toDateString()) { s.count++; } else if (s.lastDate !== today) { s.count = 1; }
  s.lastDate = today;
  localStorage.setItem(STREAK_KEY, JSON.stringify(s));
  return s.count;
}

// ═══════════════ AGE MODE ═══════════════
let ageMode = localStorage.getItem(MODE_KEY) || 'teen';
function toggleAgeMode() {
  ageMode = ageMode === 'young' ? 'teen' : 'young';
  localStorage.setItem(MODE_KEY, ageMode);
  document.body.classList.toggle('young-mode', ageMode === 'young');
  renderAll();
  showToast(ageMode === 'young' ? T[lang].youngMode : T[lang].teenMode);
  playSound('theme');
}

// ═══════════════ LANGUAGE & THEME ═══════════════
let lang = document.documentElement.lang || 'ar';
let currentTheme = document.documentElement.dataset.theme || 'nature';
const THEMES = ['nature','night','ocean'];
const THEME_ICONS = { nature:'🌿', night:'🌙', ocean:'🌊' };
let currentPrincipleIdx = -1;

function setLang(l) {
  lang = l;
  document.documentElement.lang = l;
  document.documentElement.dir = l === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('.lang-opt').forEach(b => b.classList.toggle('active', b.dataset.lang === l));
  renderAll();
}

function cycleTheme() {
  const idx = (THEMES.indexOf(currentTheme) + 1) % THEMES.length;
  currentTheme = THEMES[idx];
  document.documentElement.dataset.theme = currentTheme;
  { const _e=document.getElementById('themeIcon'); if(_e) _e.textContent=THEME_ICONS[currentTheme]; }
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  { const _e=document.getElementById('appTitle'); if(_e) _e.textContent=t.appTitle; }
  { const _e=document.getElementById('splashSub'); if(_e) _e.textContent=t.splashSub; }
  { const _e=document.getElementById('splashHint'); if(_e) _e.textContent=t.splashHint; }
  { const _e=document.getElementById('tabHome'); if(_e) _e.textContent=t.tabHome; }
  { const _e=document.getElementById('tabTraits'); if(_e) _e.textContent=t.tabTraits; }
  { const _e=document.getElementById('tabQuiz'); if(_e) _e.textContent=t.tabQuiz; }
  { const _e=document.getElementById('tabProgress'); if(_e) _e.textContent=t.tabProgress; }
  { const _e=document.getElementById('tabAbout'); if(_e) _e.textContent=t.tabAbout; }
  { const _e=(document.getElementById('traitsTitle') || document.getElementById('cardsTitle')); if(_e) _e.textContent=t.traitsTitle; }
  { const _e=(document.getElementById('traitsDesc') || document.getElementById('cardsDesc')); if(_e) _e.textContent=t.traitsDesc; }
  { const _e=document.getElementById('quizTitle'); if(_e) _e.textContent=t.quizTitle; }
  { const _e=document.getElementById('quizDesc'); if(_e) _e.textContent=t.quizDesc; }
  { const _e=document.getElementById('progressTitle'); if(_e) _e.textContent=t.progressTitle; }
  { const _e=document.getElementById('progressDesc'); if(_e) _e.textContent=t.progressDesc; }
  { const _e=document.getElementById('helpTitle'); if(_e) _e.textContent=t.helpTitle; }
  { const _e=document.getElementById('duaPanelTitle'); if(_e) _e.textContent=t.duaPanelTitle; }
  { const _e=document.getElementById('ageModeBtn'); if(_e) _e.textContent=ageMode === 'young' ? t.youngMode : t.teenMode; }
  // Render sections
  renderHome();
  renderTraits();
  renderProgress();
  renderAbout();
  renderHelp();
  renderDuas();
  renderTicker();
}

// ═══════════════ RENDER: HOME ═══════════════
function renderHome() {
  const t = T[lang];
  const dayIdx = new Date().getDate() % TRAITS.length;
  const trait = TRAITS[dayIdx];
  const d = trait[lang];
  (document.getElementById('dailyCard')||{}).innerHTML= `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  (document.getElementById('homeGrid')||{}).innerHTML= TRAITS.map(tr => {
    const dd = tr[lang];
    return `<div class="home-card" onclick="switchTab('traits');toggleCard('trait-${tr.id}')">
      <span class="hc-icon">${tr.emoji}</span>
      <div class="hc-title">${dd.title}</div>
    </div>`;
  }).join('');
}

// ═══════════════ RENDER: TRAITS ═══════════════
function renderTraits() {
  const t = T[lang];
  const readTraits = getReadTraits();
  const container = (document.getElementById('traitsContainer') || document.getElementById('cardsContainer'));
  // Search bar
  const searchHTML = `<div class="search-bar"><span class="search-icon">🔍</span><input class="search-input" id="traitsSearch" placeholder="${t.searchPlaceholder}" oninput="filterTraits(this.value)"></div>`;
  container.innerHTML = searchHTML + TRAITS.map(tr => {
    const d = tr[lang];
    const isRead = readTraits.includes(tr.id);
    return `
    <div class="trait-card scroll-reveal ${isRead ? 'read' : ''}" id="trait-${tr.id}">
      <div class="trait-head" onclick="toggleCard('trait-${tr.id}');markTraitRead(${tr.id})">
        <span class="trait-num">${tr.id}</span>
        <span class="trait-emoji">${tr.emoji}</span>
        <span class="trait-title">${d.title}</span>
        ${isRead ? '<span class="trait-read-badge">&#10003;</span>' : ''}
        <span class="trait-chev">&#9660;</span>
      </div>
      <div class="trait-body">
        <div class="trait-inner">
          <div class="trait-desc">${ageMode === 'young' ? d.young : d.desc}</div>
          <div class="verse-box">
            <div class="verse-arabic">${d.verse}</div>
            <div class="verse-ref">${d.verseRef}</div>
          </div>
          <div class="hadith-box">
            <span class="hadith-label">📜 ${t.hadith}</span>
            <div class="hadith-text">${d.hadith}</div>
          </div>
          <div class="action-box">
            <span class="action-icon">💡</span>
            <span>${d.action}</span>
          </div>
          <button class="share-btn" onclick="shareTrait(${tr.id})"><span class="share-icon">📤</span> ${t.share}</button>
        </div>
      </div>
    </div>`;
  }).join('');
}

function filterTraits(query) {
  const cards = document.querySelectorAll('.trait-card');
  const q = query.toLowerCase();
  cards.forEach(card => {
    const title = card.querySelector('.trait-title').textContent.toLowerCase();
    const desc = card.querySelector('.trait-desc') ? card.querySelector('.trait-desc').textContent.toLowerCase() : '';
    card.style.display = (!q || title.includes(q) || desc.includes(q)) ? '' : 'none';
  });
}

function shareTrait(id) {
  const trait = TRAITS.find(t => t.id === id);
  if (!trait) return;
  const d = trait[lang];
  const text = `${trait.emoji} ${d.title}\n${d.desc}\n\n${d.verse} — ${d.verseRef}`;
  if (navigator.share) { navigator.share({ title: d.title, text }); }
  else { navigator.clipboard.writeText(text).then(() => showToast(lang==='ar'?'تم النسخ':'Copied!')); }
}

// ═══════════════ RENDER: QUIZ (Who Wants to Be a Mufassir?) ═══════════════
let quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: false };

function renderQuiz() {
  quizState = { current: 0, score: 0, answers: [], lifelines: { fifty: true, hint: true, quran: true }, active: true };
  showQuizQuestion();
}

function showQuizQuestion() {
  const t = T[lang];
  const container = document.getElementById('quizContainer');
  if (!container) return;
  const result = document.getElementById('quizResult');
  result.classList.add('hidden');
  if (quizState.current >= QUIZ.length) {
    showQuizResult();
    return;
  }
  const q = QUIZ[quizState.current][lang];
  const total = QUIZ.length;
  const num = quizState.current + 1;
  container.innerHTML = `
    <div class="quiz-progress-bar"><div class="quiz-progress-fill" style="width:${num/total*100}%"></div></div>
    <div class="quiz-counter">${num} / ${total}</div>
    <div class="quiz-question-card scroll-reveal">
      <div class="quiz-q-text">${q.q}</div>
      <div class="quiz-options" id="quizOpts">
        ${q.opts.map((opt, i) => `<button class="quiz-opt" id="qopt-${i}" onclick="answerQuiz(${i})">${opt}</button>`).join('')}
      </div>
      <div class="quiz-lifelines">
        <button class="lifeline-btn ${quizState.lifelines.fifty?'':'used'}" onclick="useFiftyFifty()" ${quizState.lifelines.fifty?'':'disabled'}>${t.lifeline5050}</button>
        <button class="lifeline-btn ${quizState.lifelines.hint?'':'used'}" onclick="useHint()" ${quizState.lifelines.hint?'':'disabled'}>${t.lifelineHint}</button>
        <button class="lifeline-btn ${quizState.lifelines.quran?'':'used'}" onclick="useQuranRef()" ${quizState.lifelines.quran?'':'disabled'}>${t.lifelineQuran}</button>
      </div>
      <div id="quizFeedback" class="quiz-feedback hidden"></div>
    </div>`;
}

function answerQuiz(idx) {
  if (!quizState.active) return;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const opts = document.querySelectorAll('.quiz-opt');
  opts.forEach((o, i) => {
    o.disabled = true;
    if (i === correct) o.classList.add('correct');
    if (i === idx && i !== correct) o.classList.add('wrong');
  });
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  if (idx === correct) {
    quizState.score++;
    addXP(5);
    feedback.innerHTML = `<span class="fb-correct">${T[lang].correct}</span>`;
    playSound('success');
  } else {
    feedback.innerHTML = `<span class="fb-wrong">${T[lang].wrong}</span>`;
    playSound('click');
  }
  quizState.answers.push(idx);
  quizState.current++;
  setTimeout(() => showQuizQuestion(), 1800);
}

function useFiftyFifty() {
  if (!quizState.lifelines.fifty) return;
  quizState.lifelines.fifty = false;
  const q = QUIZ[quizState.current][lang];
  const correct = q.correct;
  const wrongIdxs = [0,1,2,3].filter(i => i !== correct);
  const toHide = wrongIdxs.sort(() => Math.random() - 0.5).slice(0, 2);
  toHide.forEach(i => { const el = document.getElementById('qopt-'+i); if(el) { el.style.visibility='hidden'; el.disabled=true; }});
  document.querySelector('.lifeline-btn').classList.add('used');
  playSound('click');
}

function useHint() {
  if (!quizState.lifelines.hint) return;
  quizState.lifelines.hint = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-hint">💡 ${q.hint}</span>`;
  playSound('click');
}

function useQuranRef() {
  if (!quizState.lifelines.quran) return;
  quizState.lifelines.quran = false;
  const q = QUIZ[quizState.current][lang];
  const feedback = document.getElementById('quizFeedback');
  feedback.classList.remove('hidden');
  feedback.innerHTML = `<span class="fb-quran">📖 ${q.quran}</span>`;
  playSound('click');
}

function showQuizResult() {
  const t = T[lang];
  const total = QUIZ.length;
  const pct = Math.round(quizState.score / total * 100);
  // Save best score
  const best = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  if (pct > best) localStorage.setItem(QUIZ_BEST_KEY, pct);
  addXP(20); // bonus for completing
  let emoji, title;
  if (pct >= 80) { emoji = '🏆'; title = lang==='ar'?'مفسر حقيقي!':lang==='fr'?'Un vrai Mufassir !':'A True Mufassir!'; }
  else if (pct >= 50) { emoji = '📖'; title = lang==='ar'?'جيد جداً!':lang==='fr'?'Tres bien !':'Very Good!'; }
  else { emoji = '🌱'; title = lang==='ar'?'واصل التعلم!':lang==='fr'?'Continue d\'apprendre !':'Keep Learning!'; }
  (document.getElementById('quizContainer')||{}).innerHTML= '';
  const result = document.getElementById('quizResult');
  result.classList.remove('hidden');
  result.innerHTML = `
    <div class="qr-emoji">${emoji}</div>
    <div class="qr-score">${quizState.score}/${total}</div>
    <div class="qr-title">${title}</div>
    <div class="qr-desc">${pct}%</div>
    <button class="quiz-submit" onclick="renderQuiz()">${t.tryAgain}</button>`;
  result.scrollIntoView({ behavior: 'smooth' });
  if (pct >= 80) launchConfetti();
  quizState.active = false;
}

// ═══════════════ RENDER: PROGRESS ═══════════════
function renderProgress() {
  const t = T[lang];
  const xp = getXP();
  const level = getLevel(xp);
  const streak = getStreak().count;
  const readTraits = getReadTraits();
  const earned = getEarnedBadges();
  const bestQuiz = parseInt(localStorage.getItem(QUIZ_BEST_KEY) || '0');
  const nextBadge = BADGE_DEFS.find(b => !earned.includes(b.id));
  const nextXP = nextBadge ? nextBadge.xp : 1000;
  const progressPct = Math.min(100, (xp / nextXP) * 100);

  (document.getElementById('progressContainer')||{}).innerHTML= `
    <div class="progress-xp-card">
      <div class="xp-header">
        <span class="xp-icon">⭐</span>
        <span class="xp-amount">${xp} ${t.xpLabel}</span>
      </div>
      <div class="xp-bar-wrap">
        <div class="xp-bar"><div class="xp-bar-fill" style="width:${progressPct}%"></div></div>
        <span class="xp-level">${t.levelLabel} ${level}</span>
      </div>
      ${nextBadge ? `<div class="xp-next">${lang==='ar'?'التالي:':lang==='fr'?'Suivant:':'Next:'} ${nextBadge.emoji} ${nextBadge[lang]} (${nextBadge.xp} XP)</div>` : ''}
    </div>
    ${streak > 0 ? `<div class="streak-badge">🔥 ${streak} ${t.streakMsg}</div>` : ''}
    <div class="progress-stats">
      <div class="stat-card"><span class="stat-num">${readTraits.length}</span><span class="stat-label">${lang==='ar'?'درس مقروء':lang==='fr'?'Lecons lues':'Lessons Read'}</span><span class="stat-total">/ ${TRAITS.length}</span></div>
      <div class="stat-card"><span class="stat-num">${bestQuiz}%</span><span class="stat-label">${lang==='ar'?'أفضل نتيجة':lang==='fr'?'Meilleur score':'Best Quiz'}</span></div>
      <div class="stat-card"><span class="stat-num">${earned.length}</span><span class="stat-label">${lang==='ar'?'شارات':lang==='fr'?'Badges':'Badges'}</span><span class="stat-total">/ ${BADGE_DEFS.length}</span></div>
    </div>
    <div class="badges-section">
      <h3 class="badges-title">${lang==='ar'?'🏅 الشارات':lang==='fr'?'🏅 Badges':'🏅 Badges'}</h3>
      <div class="badges-grid">
        ${BADGE_DEFS.map(b => `<div class="badge-item ${earned.includes(b.id)?'earned':'locked'}"><span class="badge-emoji">${b.emoji}</span><span class="badge-name">${b[lang]}</span><span class="badge-xp">${b.xp} XP</span></div>`).join('')}
      </div>
    </div>`;
}

function updateXPDisplay() {
  // Quick update if progress panel is visible
  const panel = document.getElementById('panel-progress');
  if (panel && panel.classList.contains('active')) renderProgress();
}

// ═══════════════ RENDER: ABOUT ═══════════════
function renderAbout() {
  const about = {
    ar: {
      disclaimerTitle: '⚠️ تنبيه مهم',
      disclaimer: 'هذا التطبيق مستوحى من كتاب الشيخ محمد الغزالي رحمه الله، وليس بديلاً عن قراءة الكتاب الأصلي. المحتوى ملخصات تعليمية مبسطة وليست نقلاً حرفياً. قد تحتوي على تبسيط لأفكار المؤلف. يُرجى الرجوع للكتاب الأصلي وللعلماء المتخصصين.',
      authorName: 'الشيخ محمد الغزالي',
      authorDates: '١٩١٧ — ١٩٩٦',
      authorBio: 'عالم ومفكر إسلامي مصري، لُقب بـ"أديب الدعوة". ألّف أكثر من ٩٤ كتاباً. درس في الأزهر، ودرّس في جامعة الأمير عبد القادر بقسنطينة (الجزائر). حاصل على جائزة الملك فيصل. عُرف بالتجديد ومحاربة الجمود والتشدد.',
      bookTitle: 'عن الكتاب',
      bookDesc: '«نحو تفسير موضوعي لسور القرآن الكريم» كتاب يقدم منهجاً جديداً في فهم القرآن. يتناول الشيخ الغزالي كل سورة كوحدة موضوعية متكاملة، يكشف محورها المركزي والروابط بين آياتها. يهدف الكتاب إلى تجاوز التفسير التجزيئي إلى رؤية شاملة تربط السورة بسياقها وبالسور الأخرى.',
      sourcesTitle: 'المصادر',
      sources: ['كتاب "نحو تفسير موضوعي لسور القرآن الكريم" — الشيخ محمد الغزالي','القرآن الكريم','صحيح البخاري ومسلم','أقوال العلماء والمفسرين'],
      contact: 'تواصل: abdelhak.bourdim@gmail.com'
    },
    en: {
      disclaimerTitle: '⚠️ Important Notice',
      disclaimer: 'I am not a scholar or mufti. This is a humble effort by a Muslim who loves Sheikh al-Ghazali\'s books. Content is derived from the book and trusted Islamic sources. This is not a fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Egyptian Islamic scholar and thinker, nicknamed "The Literary Preacher." Author of 94+ books. Studied at Al-Azhar, taught at the University of Emir Abdelkader in Constantine, Algeria. King Faisal Award winner. Known for renewal, fighting rigidity, and defending rational engagement with Islam.',
      bookTitle: 'About the Book',
      bookDesc: '"Toward Thematic Quran Interpretation" presents a new methodology for understanding the Quran. Sheikh al-Ghazali approaches each surah as a complete thematic unit, revealing its central axis and the connections between its verses. The book aims to move beyond fragmented interpretation toward a comprehensive vision linking each surah to its context and to other surahs.',
      sourcesTitle: 'Sources',
      sources: ['"Toward Thematic Quran Interpretation" (Nahwa Tafsir Mawdu\'i) — Sheikh Mohammed al-Ghazali','The Holy Quran','Sahih al-Bukhari and Muslim','Sayings of scholars and commentators'],
      contact: 'Contact: abdelhak.bourdim@gmail.com'
    },
    fr: {
      disclaimerTitle: '⚠️ Avis Important',
      disclaimer: 'Je ne suis ni savant ni mufti. C\'est un effort humble d\'un musulman qui aime les livres du Sheikh al-Ghazali. Le contenu est tire du livre et de sources islamiques fiables. Ce n\'est pas une fatwa.',
      authorName: 'Sheikh Mohammed al-Ghazali',
      authorDates: '1917 — 1996',
      authorBio: 'Savant et penseur islamique egyptien, surnomme "Le Litteraire de la Predication". Auteur de plus de 94 livres. Diplome d\'Al-Azhar, professeur a l\'Universite Emir Abdelkader de Constantine (Algerie). Laureat du Prix Roi Faysal.',
      bookTitle: 'A Propos du Livre',
      bookDesc: '"Vers une Interpretation Thematique du Coran" presente une nouvelle methodologie pour comprendre le Coran. Le Sheikh al-Ghazali aborde chaque sourate comme une unite thematique complete, revelant son axe central et les liens entre ses versets. Le livre vise a depasser l\'interpretation fragmentee vers une vision globale reliant chaque sourate a son contexte et aux autres sourates.',
      sourcesTitle: 'Sources',
      sources: ['"Vers une Interpretation Thematique du Coran" (Nahwa Tafsir Mawdu\'i) — Sheikh Mohammed al-Ghazali','Le Saint Coran','Sahih al-Bukhari et Muslim','Paroles de savants et commentateurs'],
      contact: 'Contact : abdelhak.bourdim@gmail.com'
    }
  };
  const a = about[lang];
  (document.getElementById('aboutContainer')||{}).innerHTML= `
    <div class="about-disclaimer">
      <div class="about-disclaimer-title">${a.disclaimerTitle}</div>
      <p>${a.disclaimer}</p>
    </div>
    <div class="about-author">
      <span class="about-author-icon">📚</span>
      <div class="about-author-info">
        <div class="about-author-name">${a.authorName}</div>
        <div class="about-author-dates">${a.authorDates}</div>
        <div class="about-author-bio">${a.authorBio}</div>
      </div>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.bookTitle}</div>
      <p class="about-text">${a.bookDesc}</p>
    </div>
    <div class="about-section">
      <div class="about-section-title">${a.sourcesTitle}</div>
      ${a.sources.map(s => `<p class="about-text">&#8226; ${s}</p>`).join('')}
    </div>
    <div class="about-section">
      <p class="about-text">${a.contact}</p>
    </div>`;
}

// ═══════════════ RENDER: HELP ═══════════════
function renderHelp() {
  const help = {
    ar: [
      {title:'⚠️ تنبيه',body:'لست عالماً. هذا جهد متواضع لنشر حكمة الشيخ الغزالي في التفسير الموضوعي بطريقة تفاعلية.'},
      {title:'📚 المصادر',body:'كتاب "نحو تفسير موضوعي لسور القرآن الكريم" للشيخ محمد الغزالي، القرآن الكريم.'},
      {title:'✨ المميزات',body:'ثلاث لغات (عربي/إنجليزي/فرنسي)، ٣ أنماط، ١٥ درساً، مسابقة تفاعلية، نظام نقاط وشارات، وضعان للأعمار.'},
      {title:'🌟 وضع مستكشف صغير',body:'للأطفال ٧-١٢ سنة — نصوص مبسطة بالإيموجي، خط أكبر.'},
      {title:'📖 وضع باحث شاب',body:'للشباب ١٣+ — نصوص كاملة مع آيات وحكم وتحليل.'},
      {title:'🤝 المساهمة',body:'GitHub: github.com/abourdim/nahwa-tafsir-mawdui'},
    ],
    en: [
      {title:'⚠️ Disclaimer',body:'I am not a scholar. This is a humble effort to share Sheikh al-Ghazali\'s wisdom on thematic Quran interpretation interactively.'},
      {title:'📚 Sources',body:'"Toward Thematic Quran Interpretation" by Sheikh Mohammed al-Ghazali, the Holy Quran.'},
      {title:'✨ Features',body:'Three languages (AR/EN/FR), 3 themes, 15 lessons, interactive quiz, XP and badges system, 2 age modes.'},
      {title:'🌟 Young Explorer',body:'For kids 7-12 — simplified text with emojis, larger font.'},
      {title:'📖 Teen Scholar',body:'For teens 13+ — full text with verses, wisdom, and analysis.'},
      {title:'🤝 Contributing',body:'GitHub: github.com/abourdim/nahwa-tafsir-mawdui'},
    ],
    fr: [
      {title:'⚠️ Avertissement',body:'Je ne suis pas un savant. C\'est un effort humble pour partager la sagesse du Sheikh al-Ghazali sur l\'interpretation thematique du Coran.'},
      {title:'📚 Sources',body:'"Vers une Interpretation Thematique du Coran" par Sheikh Mohammed al-Ghazali, le Saint Coran.'},
      {title:'✨ Fonctionnalites',body:'Trois langues (AR/EN/FR), 3 themes, 15 lecons, quiz interactif, systeme XP et badges, 2 modes d\'age.'},
      {title:'🌟 Jeune Explorateur',body:'Pour enfants 7-12 ans — texte simplifie avec emojis, police plus grande.'},
      {title:'📖 Jeune Chercheur',body:'Pour ados 13+ — texte complet avec versets, sagesses et analyse.'},
      {title:'🤝 Contribuer',body:'GitHub : github.com/abourdim/nahwa-tafsir-mawdui'},
    ]
  };
  (document.getElementById('helpBody')||{}).innerHTML= help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  (document.getElementById('duaPanelContent')||{}).innerHTML= DUAS.map(d => {
    const dd = d[lang];
    return `<div class="dua-item">
      <div class="dua-item-label">${dd.label}</div>
      <div class="dua-item-ar">${dd.text}</div>
      <div class="dua-item-tr">${dd.tr}</div>
    </div>`;
  }).join('');
}

// ═══════════════ TICKER ═══════════════
function renderTicker() {
  const tips = {
    ar: ['📖 اقرأ درساً جديداً كل يوم','🏆 اجمع النقاط واربح الشارات','🌟 جرب وضع المستكشف الصغير','🤲 لا تنسَ الدعاء عند قراءة القرآن','⭐ أكمل ١٥ درساً لتصبح خبيراً'],
    en: ['📖 Read a new lesson every day','🏆 Collect points and earn badges','🌟 Try Young Explorer mode','🤲 Don\'t forget to make dua when reading the Quran','⭐ Complete all 15 lessons to become an Expert'],
    fr: ['📖 Lisez une nouvelle lecon chaque jour','🏆 Collectez des points et gagnez des badges','🌟 Essayez le mode Jeune Explorateur','🤲 N\'oubliez pas les duas en lisant le Coran','⭐ Completez les 15 lecons pour devenir Expert']
  };
  const items = tips[lang];
  const doubled = [...items, ...items];
  const ticker = document.getElementById('tickerText');
  ticker.innerHTML = doubled.map(t => `<span class="tc">&nbsp;&nbsp;${t}&nbsp;&nbsp;•</span>`).join('');
  ticker.style.animation = `tickerMarquee ${items.length * 6}s linear infinite`;
}

// ═══════════════ SPLASH SCREEN ═══════════════
let splashTimer;
function initSplash() {
  const features = document.getElementById('splashFeatures');
  if (features) {
    features.innerHTML = T[lang].splashFeatures.map((f, i) =>
      `<div class="splash-feature" style="animation-delay:${0.3+i*0.3}s">${f}</div>`
    ).join('');
  }
  let count = 5;
  const counter = document.getElementById('splashCount');
  splashTimer = setInterval(() => {
    count--;
    if (counter) counter.textContent = count;
    if (count <= 0) dismissSplash();
  }, 1000);
}
function dismissSplash() {
  clearInterval(splashTimer);
  const splash = document.getElementById('splash');
  if (splash) { splash.classList.add('hidden'); setTimeout(() => splash.remove(), 600); }
}

// ═══════════════ TAB SWITCHING ═══════════════
function initTabs() {
  document.querySelectorAll('.tab').forEach(tab => {
    tab.addEventListener('click', () => {
      const name = tab.dataset.tab;
      switchTab(name);
    });
  });
}
function switchTab(name) {
  document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  const panel = document.getElementById('panel-' + name);
  const tabBtn = document.querySelector(`.tab[data-tab="${name}"]`);
  if (panel) panel.classList.add('active');
  if (tabBtn) tabBtn.classList.add('active');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  playSound('click');
  // Re-init scroll reveal
  setTimeout(() => {
    document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => {
      if (window._scrollObserver) window._scrollObserver.observe(el);
    });
    initTypewriter();
  }, 100);
  // Auto-render quiz when switching to quiz tab
  if (name === 'quiz' && document.getElementById('quizContainer') && !document.getElementById('quizContainer').innerHTML.trim()) {
    renderQuiz();
  }
}

// ═══════════════ SCROLL REVEAL ═══════════════
function initScrollReveal() {
  if (!('IntersectionObserver' in window)) return;
  window._scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        window._scrollObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.scroll-reveal:not(.revealed)').forEach(el => window._scrollObserver.observe(el));
}

// ═══════════════ KEYBOARD NAVIGATION ═══════════════
function initKeyboardNav() {
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      const hp = document.getElementById('helpPanel');
      if (!hp.classList.contains('hidden')) { toggleHelp(); return; }
      const dp = document.getElementById('duaPanel');
      if (!dp.classList.contains('hidden')) { toggleDuaPanel(); return; }
      document.querySelectorAll('.trait-card.open').forEach(c => c.classList.remove('open'));
    }
    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft') {
      const panel = document.getElementById('panel-traits');
      if (!panel || !panel.classList.contains('active')) return;
      if (document.activeElement && document.activeElement.id === 'traitsSearch') return;
      e.preventDefault();
      const cards = Array.from(document.querySelectorAll('.trait-card')).filter(c => c.style.display !== 'none');
      if (!cards.length) return;
      if (currentPrincipleIdx >= 0 && currentPrincipleIdx < cards.length) cards[currentPrincipleIdx].classList.remove('open');
      const dir = document.documentElement.dir === 'rtl' ? (e.key==='ArrowRight'?-1:1) : (e.key==='ArrowRight'?1:-1);
      currentPrincipleIdx = Math.max(0, Math.min(cards.length-1, currentPrincipleIdx+dir));
      cards[currentPrincipleIdx].classList.add('open');
      cards[currentPrincipleIdx].scrollIntoView({ behavior:'smooth', block:'center' });
      playSound('click');
    }
  });
}

// ═══════════════ UTILITIES ═══════════════
function toggleCard(id) {
  const card = document.getElementById(id);
  if (card) { card.classList.toggle('open'); playSound('click'); }
}
function toggleHelp() { document.getElementById('helpPanel').classList.toggle('hidden'); playSound('click'); }
function toggleDuaPanel() { document.getElementById('duaPanel').classList.toggle('hidden'); playSound('click'); }
function showToast(msg) {
  const t = document.getElementById('toast');
  const m = document.getElementById('toastMsg');
  if (t && m) { m.textContent = msg; t.style.display = 'block'; setTimeout(() => t.style.display = 'none', 2500); }
}
function initScrollTop() {
  const btn = document.getElementById('scrollTop');
  window.addEventListener('scroll', () => { if (btn) btn.classList.toggle('visible', window.scrollY > 300); });
}

// ═══════════════ SOUND EFFECTS ═══════════════
const AudioCtx = window.AudioContext || window.webkitAudioContext;
let audioCtx;
function playSound(type) {
  try {
    if (!audioCtx) audioCtx = new AudioCtx();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain); gain.connect(audioCtx.destination);
    gain.gain.value = 0.06;
    if (type==='click') { osc.frequency.value=800; osc.type='sine'; gain.gain.value=0.04; }
    else if (type==='success') { osc.frequency.value=523; osc.type='sine'; gain.gain.value=0.06; }
    else if (type==='theme') { osc.frequency.value=440; osc.type='triangle'; gain.gain.value=0.05; }
    osc.start(); osc.stop(audioCtx.currentTime + 0.1);
  } catch(e) {}
}

// ═══════════════ CONFETTI ═══════════════
function launchConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  canvas.style.display = 'block';
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth; canvas.height = window.innerHeight;
  const particles = [];
  const colors = ['#1B5E20','#388E3C','#66BB6A','#A5D6A7','#FFD54F','#FF8A65','#4FC3F7'];
  for (let i = 0; i < 120; i++) {
    particles.push({ x:Math.random()*canvas.width, y:Math.random()*canvas.height-canvas.height, w:Math.random()*10+5, h:Math.random()*6+3, color:colors[Math.floor(Math.random()*colors.length)], vx:(Math.random()-0.5)*4, vy:Math.random()*3+2, rot:Math.random()*360, rotSpeed:(Math.random()-0.5)*10 });
  }
  let frame = 0;
  function draw() {
    ctx.clearRect(0,0,canvas.width,canvas.height);
    particles.forEach(p => { p.x+=p.vx; p.y+=p.vy; p.rot+=p.rotSpeed; ctx.save(); ctx.translate(p.x,p.y); ctx.rotate(p.rot*Math.PI/180); ctx.fillStyle=p.color; ctx.fillRect(-p.w/2,-p.h/2,p.w,p.h); ctx.restore(); });
    frame++;
    if (frame < 120) requestAnimationFrame(draw);
    else { ctx.clearRect(0,0,canvas.width,canvas.height); canvas.style.display='none'; }
  }
  draw();
}

// ═══════════════ TYPEWRITER ═══════════════
function initTypewriter() {
  const dailyTitle = document.querySelector('.daily-card .daily-title');
  if (!dailyTitle || dailyTitle.dataset.twDone) return;
  const fullText = dailyTitle.textContent;
  dailyTitle.textContent = '';
  dailyTitle.classList.add('typewriter-text');
  dailyTitle.dataset.twDone = '1';
  let i = 0;
  const speed = Math.max(30, 2000 / fullText.length);
  function typeChar() {
    if (i < fullText.length) { dailyTitle.textContent += fullText.charAt(i); i++; setTimeout(typeChar, speed); }
    else { setTimeout(() => dailyTitle.classList.add('tw-done'), 1500); }
  }
  setTimeout(typeChar, 500);
}

// ═══════════════ SWIPE GESTURES ═══════════════
function initSwipeGestures() {
  let touchStartX = 0, touchStartY = 0;
  const tabOrder = ['home','traits','quiz','progress','about'];
  document.addEventListener('touchstart', e => { touchStartX = e.changedTouches[0].screenX; touchStartY = e.changedTouches[0].screenY; }, { passive: true });
  document.addEventListener('touchend', e => {
    const dx = e.changedTouches[0].screenX - touchStartX;
    const dy = e.changedTouches[0].screenY - touchStartY;
    if (Math.abs(dx) < 80 || Math.abs(dy) > Math.abs(dx) * 0.5) return;
    const current = tabOrder.findIndex(t => { const p = document.getElementById('panel-'+t); return p && p.classList.contains('active'); });
    if (current < 0) return;
    const isRTL = document.documentElement.dir === 'rtl';
    let next;
    if ((dx > 0 && !isRTL) || (dx < 0 && isRTL)) next = current - 1; else next = current + 1;
    if (next >= 0 && next < tabOrder.length) switchTab(tabOrder[next]);
  }, { passive: true });
}

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
  // Set age mode class
  document.body.classList.toggle('young-mode', ageMode === 'young');
  // Update streak
  updateStreak();
  // Init
  initSplash();
  renderAll();
  initTabs();
  initScrollReveal();
  initScrollTop();
  initKeyboardNav();
  initSwipeGestures();
  initTypewriter();
});
