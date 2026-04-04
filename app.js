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
    id:1, emoji:'🔭',
    ar:{title:'ما هو التفسير الموضوعي؟',desc:'التفسير الموضوعي هو دراسة السورة القرآنية كوحدة متكاملة ذات محور واحد. بدلاً من تفسير كل آية على حدة، ننظر إلى السورة كلها لنكتشف الموضوع الجامع الذي تدور حوله آياتها. الشيخ الغزالي رأى أن كل سورة لها شخصية مستقلة ورسالة واضحة تربط أولها بآخرها.',verse:'كِتَابٌ أَنْزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ',verseRef:'ص ٢٩',hadith:'كل سورة في القرآن لها محور تدور حوله آياتها، وفهم هذا المحور هو مفتاح فهم السورة — الشيخ الغزالي',action:'اختر سورة قصيرة واقرأها كاملة — ثم اكتب في جملة واحدة: ما الموضوع الرئيسي لهذه السورة؟',young:'كل سورة في القرآن لها فكرة كبيرة واحدة! اقرأ سورة كاملة وحاول تكتشف فكرتها 🔭'},
    en:{title:'What is Thematic Tafsir?',desc:'Thematic tafsir studies each Quran surah as a complete unit with one central theme. Instead of interpreting each verse separately, we look at the entire surah to discover the unifying topic around which all its verses revolve. Sheikh al-Ghazali believed every surah has its own personality and a clear message connecting its beginning to its end.',verse:'A blessed Book We have revealed to you so that they may reflect upon its verses and that those of understanding may remember',verseRef:'Sad 29',hadith:'Every surah in the Quran has a central axis around which its verses revolve, and understanding this axis is the key to understanding the surah — Sheikh al-Ghazali',action:'Choose a short surah and read it completely — then write in one sentence: what is this surah mainly about?',young:'Every surah in the Quran has one big idea! Read a whole surah and try to discover its main idea 🔭'},
    fr:{title:"Qu'est-ce que le Tafsir Thematique ?",desc:"Le tafsir thematique etudie chaque sourate du Coran comme une unite complete avec un theme central. Au lieu d'interpreter chaque verset separement, on regarde la sourate entiere pour decouvrir le sujet unificateur autour duquel tournent tous ses versets. Le Sheikh al-Ghazali croyait que chaque sourate a sa propre personnalite et un message clair reliant son debut a sa fin.",verse:'Un Livre beni que Nous avons fait descendre vers toi, afin qu\'ils meditent ses versets et que les doues d\'intelligence reflechissent',verseRef:'Sad 29',hadith:'Chaque sourate du Coran a un axe central autour duquel tournent ses versets, et comprendre cet axe est la cle pour comprendre la sourate — Sheikh al-Ghazali',action:"Choisissez une courte sourate et lisez-la entierement — puis ecrivez en une phrase : quel est le sujet principal de cette sourate ?",young:"Chaque sourate du Coran a une grande idee ! Lis une sourate entiere et essaie de decouvrir son idee principale 🔭"}
  },
  {
    id:2, emoji:'🌅',
    ar:{title:'المحور المركزي لسورة الفاتحة',desc:'سورة الفاتحة هي أم القرآن وخلاصته. محورها الأساسي هو العلاقة بين العبد وربه: الحمد والعبادة والاستعانة وطلب الهداية. هي خارطة طريق للقرآن كله، فكل ما في القرآن تفصيل لما أجملته الفاتحة من توحيد وعبادة وتشريع وقصص.',verse:'اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ',verseRef:'الفاتحة ٦',hadith:'الفاتحة هي القرآن المختصر، وبقية السور هي التفصيل — الشيخ الغزالي',action:'اقرأ الفاتحة اليوم ببطء وتأمل كل آية: كيف تبني علاقتك مع الله؟',young:'الفاتحة هي ملخص القرآن كله! كل آية فيها تعلمك شيئاً عن علاقتك بالله 🌅'},
    en:{title:'The Central Theme of Al-Fatihah',desc:'Al-Fatihah is the Mother of the Quran and its summary. Its central theme is the relationship between the servant and their Lord: praise, worship, seeking help, and asking for guidance. It is a roadmap for the entire Quran — everything in the Quran is a detailed explanation of what Al-Fatihah summarized in terms of monotheism, worship, legislation, and stories.',verse:'Guide us to the straight path',verseRef:'Al-Fatihah 6',hadith:'Al-Fatihah is the Quran in summary, and the rest of the surahs are the details — Sheikh al-Ghazali',action:'Read Al-Fatihah slowly today and reflect on each verse: how does it build your relationship with Allah?',young:'Al-Fatihah is a summary of the whole Quran! Every verse teaches you something about your bond with Allah 🌅'},
    fr:{title:"Le Theme Central d'Al-Fatihah",desc:"Al-Fatihah est la Mere du Coran et son resume. Son theme central est la relation entre le serviteur et son Seigneur : la louange, l'adoration, la demande d'aide et la demande de guidance. C'est une feuille de route pour tout le Coran — tout ce qui s'y trouve est une explication detaillee de ce qu'Al-Fatihah a resume en termes de monotheisme, d'adoration, de legislation et de recits.",verse:'Guide-nous vers le droit chemin',verseRef:'Al-Fatihah 6',hadith:'Al-Fatihah est le Coran en resume, et le reste des sourates en sont les details — Sheikh al-Ghazali',action:"Lisez Al-Fatihah lentement aujourd'hui et reflechissez a chaque verset : comment construit-il votre relation avec Allah ?",young:"Al-Fatihah est un resume de tout le Coran ! Chaque verset t'apprend quelque chose sur ton lien avec Allah 🌅"}
  },
  {
    id:3, emoji:'🏛️',
    ar:{title:'رسالة سورة البقرة',desc:'سورة البقرة هي أطول سور القرآن ومحورها بناء الأمة المسلمة. تتناول التشريعات الأساسية والقصص التي تبني مجتمعاً قوياً: من أحكام العبادات إلى المعاملات المالية، ومن قصة آدم إلى قصة بني إسرائيل. كلها تصب في تأسيس أمة قائمة على منهج الله.',verse:'وَكَذَلِكَ جَعَلْنَاكُمْ أُمَّةً وَسَطًا لِتَكُونُوا شُهَدَاءَ عَلَى النَّاسِ',verseRef:'البقرة ١٤٣',hadith:'سورة البقرة فسطاط القرآن، فيها أحكام الأمة وتشريعاتها الكبرى — الشيخ الغزالي',action:'اقرأ صفحتين من سورة البقرة اليوم ولاحظ كيف تبني كل آية لبنة في صرح الأمة',young:'سورة البقرة تعلمنا كيف نبني مجتمعاً قوياً! فيها قواعد وقصص مهمة جداً 🏛️'},
    en:{title:"Al-Baqarah's Message",desc:'Al-Baqarah is the longest surah in the Quran and its central theme is building the Muslim nation. It covers foundational legislation and stories that build a strong community: from rulings on worship to financial dealings, from the story of Adam to the story of the Children of Israel. All of it serves to establish a nation based on divine guidance.',verse:'And thus We have made you a just nation that you will be witnesses over the people',verseRef:'Al-Baqarah 143',hadith:'Surah Al-Baqarah is the tent of the Quran, containing the major rulings and laws of the Ummah — Sheikh al-Ghazali',action:'Read two pages of Surah Al-Baqarah today and notice how each verse builds a brick in the structure of the Ummah',young:'Surah Al-Baqarah teaches us how to build a strong community! It has very important rules and stories 🏛️'},
    fr:{title:'Le Message d\'Al-Baqarah',desc:"Al-Baqarah est la plus longue sourate du Coran et son theme central est la construction de la nation musulmane. Elle couvre les legislations fondamentales et les recits qui batissent une communaute forte : des regles du culte aux transactions financieres, de l'histoire d'Adam a celle des Enfants d'Israel. Tout cela sert a etablir une nation basee sur la guidance divine.",verse:'Et ainsi Nous avons fait de vous une communaute du juste milieu pour que vous soyez temoins sur les gens',verseRef:'Al-Baqarah 143',hadith:"La sourate Al-Baqarah est la tente du Coran, contenant les grandes lois et legislations de la Oumma — Sheikh al-Ghazali",action:"Lisez deux pages de la sourate Al-Baqarah aujourd'hui et remarquez comment chaque verset batit une brique dans l'edifice de la Oumma",young:"La sourate Al-Baqarah nous apprend comment batir une communaute forte ! Elle contient des regles et des recits tres importants 🏛️"}
  },
  {
    id:4, emoji:'⚔️',
    ar:{title:'دروس آل عمران',desc:'سورة آل عمران تدور حول الثبات على الحق في مواجهة التحديات. بعد غزوة أحد، نزلت آياتها لتعالج الهزيمة وتبني الثقة من جديد. تعلّم المسلمين أن النصر والهزيمة سنن إلهية، وأن الصبر والتوكل والمراجعة هي أسلحة المؤمن الحقيقية.',verse:'وَلَا تَهِنُوا وَلَا تَحْزَنُوا وَأَنْتُمُ الْأَعْلَوْنَ إِنْ كُنْتُمْ مُؤْمِنِينَ',verseRef:'آل عمران ١٣٩',hadith:'آل عمران سورة الصمود والثبات، تعلمك كيف تقوم بعد السقوط — الشيخ الغزالي',action:'عندما تواجه فشلاً اليوم، تذكر آل عمران: الهزيمة درس وليست نهاية!',young:'سورة آل عمران تعلمنا: لا تحزن إذا خسرت! قم وحاول مرة أخرى بقوة ⚔️'},
    en:{title:'Aal-Imran Lessons',desc:'Surah Aal-Imran revolves around standing firm on truth in the face of challenges. After the Battle of Uhud, its verses came down to address defeat and rebuild confidence. It teaches Muslims that victory and defeat are divine patterns, and that patience, trust in Allah, and self-review are the true weapons of a believer.',verse:'So do not weaken and do not grieve, for you will be superior if you are believers',verseRef:'Aal-Imran 139',hadith:'Aal-Imran is the surah of steadfastness and resilience, teaching you how to rise after falling — Sheikh al-Ghazali',action:'When you face failure today, remember Aal-Imran: defeat is a lesson, not an ending!',young:'Surah Aal-Imran teaches us: do not be sad if you lose! Get up and try again with strength ⚔️'},
    fr:{title:"Les Lecons d'Aal-Imran",desc:"La sourate Aal-Imran tourne autour de la fermete sur la verite face aux defis. Apres la bataille d'Uhud, ses versets sont descendus pour traiter la defaite et reconstruire la confiance. Elle enseigne aux musulmans que la victoire et la defaite sont des lois divines, et que la patience, la confiance en Allah et l'auto-evaluation sont les vraies armes du croyant.",verse:'Ne vous laissez pas abattre et ne soyez pas affliges alors que vous etes les superieurs, si vous etes croyants',verseRef:'Aal-Imran 139',hadith:"Aal-Imran est la sourate de la fermete et de la resilience, qui vous apprend comment se relever apres une chute — Sheikh al-Ghazali",action:"Quand vous faites face a un echec aujourd'hui, rappelez-vous Aal-Imran : la defaite est une lecon, pas une fin !",young:"La sourate Aal-Imran nous apprend : ne sois pas triste si tu perds ! Leve-toi et reessaie avec force ⚔️"}
  },
  {
    id:5, emoji:'🌟',
    ar:{title:'حكمة سورة يوسف',desc:'سورة يوسف هي أحسن القصص كما وصفها القرآن. محورها أن الصبر على البلاء ينتهي بالنصر والتمكين. من الجُبّ إلى السجن إلى العرش، تعلمنا أن الله يدبر الأمور حتى لو لم نفهم الحكمة في وقتها. اليأس ممنوع والأمل واجب.',verse:'إِنَّهُ مَنْ يَتَّقِ وَيَصْبِرْ فَإِنَّ اللَّهَ لَا يُضِيعُ أَجْرَ الْمُحْسِنِينَ',verseRef:'يوسف ٩٠',hadith:'سورة يوسف دليل على أن الصبر مفتاح الفرج، وأن التدبير الإلهي أعظم من تدبير البشر — الشيخ الغزالي',action:'إذا كنت تمر بوقت صعب، اقرأ سورة يوسف واستخرج منها ٣ دروس للصبر',young:'سورة يوسف تعلمنا: اصبر ولا تيأس! الله يدبر أمورك حتى لو لم تفهم الآن 🌟'},
    en:{title:'Surah Yusuf Wisdom',desc:'Surah Yusuf is described by the Quran itself as the best of stories. Its central theme is that patience through trials leads to victory and empowerment. From the well to prison to the throne, it teaches us that Allah plans even when we cannot see the wisdom at the time. Despair is forbidden and hope is an obligation.',verse:'Indeed, he who fears Allah and is patient — then indeed, Allah does not waste the reward of those who do good',verseRef:'Yusuf 90',hadith:'Surah Yusuf is proof that patience is the key to relief, and that divine planning is greater than human planning — Sheikh al-Ghazali',action:'If you are going through a hard time, read Surah Yusuf and extract 3 lessons about patience',young:'Surah Yusuf teaches us: be patient and never give up! Allah plans for you even when you do not understand 🌟'},
    fr:{title:'La Sagesse de la Sourate Yusuf',desc:"La sourate Yusuf est decrite par le Coran lui-meme comme le plus beau des recits. Son theme central est que la patience face aux epreuves mene a la victoire et a l'autonomisation. Du puits a la prison jusqu'au trone, elle nous enseigne qu'Allah planifie meme quand nous ne voyons pas la sagesse sur le moment. Le desespoir est interdit et l'espoir est un devoir.",verse:'Quiconque craint Allah et patiente... Allah ne laisse pas perdre la recompense des bienfaisants',verseRef:'Yusuf 90',hadith:'La sourate Yusuf est la preuve que la patience est la cle du soulagement, et que le plan divin est plus grand que le plan humain — Sheikh al-Ghazali',action:"Si vous traversez un moment difficile, lisez la sourate Yusuf et tirez-en 3 lecons sur la patience",young:"La sourate Yusuf nous apprend : sois patient et n'abandonne jamais ! Allah planifie pour toi meme quand tu ne comprends pas 🌟"}
  },
  {
    id:6, emoji:'📍',
    ar:{title:'الفرق بين السور المكية والمدنية',desc:'السور المكية نزلت قبل الهجرة وتركز على العقيدة والتوحيد وبناء الإيمان في القلوب. السور المدنية نزلت بعد الهجرة وتركز على التشريعات وبناء المجتمع والدولة. فهم هذا الفرق يساعدنا على فهم لماذا نزلت كل آية ومتى وكيف.',verse:'لِكُلٍّ جَعَلْنَا مِنْكُمْ شِرْعَةً وَمِنْهَاجًا',verseRef:'المائدة ٤٨',hadith:'معرفة المكي والمدني تفتح لك أبواب الفهم: العقيدة أولاً ثم التشريع — الشيخ الغزالي',action:'قارن اليوم بين سورة مكية (مثل الشمس) وسورة مدنية (مثل المائدة) ولاحظ الفرق في الأسلوب',young:'السور المكية تعلمك عن الله والإيمان، والمدنية تعلمك القواعد والأحكام! لاحظ الفرق 📍'},
    en:{title:'Meccan vs Medinan Surahs',desc:'Meccan surahs were revealed before the migration and focus on belief, monotheism, and building faith in hearts. Medinan surahs were revealed after the migration and focus on legislation, building society and the state. Understanding this difference helps us grasp why each verse was revealed, when, and how.',verse:'To each among you We have prescribed a law and a clear way',verseRef:'Al-Ma\'idah 48',hadith:'Knowing which surahs are Meccan and which are Medinan opens doors of understanding: belief first, then legislation — Sheikh al-Ghazali',action:'Compare a Meccan surah (like Ash-Shams) with a Medinan one (like Al-Ma\'idah) today and notice the difference in style',young:'Meccan surahs teach you about Allah and faith, while Medinan surahs teach you rules and laws! Notice the difference 📍'},
    fr:{title:'Sourates Mecquoises vs Medinoises',desc:"Les sourates mecquoises ont ete revelees avant l'emigration et se concentrent sur la croyance, le monotheisme et la construction de la foi dans les coeurs. Les sourates medinoises ont ete revelees apres l'emigration et se concentrent sur la legislation, la construction de la societe et de l'Etat. Comprendre cette difference nous aide a saisir pourquoi chaque verset a ete revele, quand et comment.",verse:'A chacun de vous Nous avons assigne une legislation et un programme',verseRef:"Al-Ma'idah 48",hadith:'Connaitre les sourates mecquoises et medinoises ouvre les portes de la comprehension : la croyance d\'abord, puis la legislation — Sheikh al-Ghazali',action:"Comparez aujourd'hui une sourate mecquoise (comme Ash-Shams) avec une medinoise (comme Al-Ma'idah) et remarquez la difference de style",young:"Les sourates mecquoises t'apprennent sur Allah et la foi, les medinoises t'apprennent les regles et les lois ! Remarque la difference 📍"}
  },
  {
    id:7, emoji:'🔗',
    ar:{title:'الربط بين السور',desc:'السور القرآنية ليست مرتبة عشوائياً بل بينها روابط عميقة. سورة البقرة تبني الأمة، وآل عمران تثبتها. النساء ترعى حقوق الضعفاء، والمائدة تكمل التشريعات. الشيخ الغزالي يكشف هذه الروابط ليرينا أن ترتيب المصحف ليس صدفة بل حكمة إلهية.',verse:'اللَّهُ نَزَّلَ أَحْسَنَ الْحَدِيثِ كِتَابًا مُتَشَابِهًا مَثَانِيَ',verseRef:'الزمر ٢٣',hadith:'ترتيب السور في المصحف ليس عبثاً، بل كل سورة تمهد لما بعدها وتكمل ما قبلها — الشيخ الغزالي',action:'اقرأ آخر آية من سورة وأول آية من السورة التي تليها — هل تجد رابطاً بينهما؟',young:'السور في القرآن مرتبة بحكمة! كل سورة مرتبطة بالتي قبلها والتي بعدها 🔗'},
    en:{title:'Connecting Surahs Together',desc:'Quranic surahs are not randomly ordered — deep connections exist between them. Al-Baqarah builds the nation, Aal-Imran fortifies it. An-Nisa protects the rights of the weak, Al-Ma\'idah completes the legislation. Sheikh al-Ghazali reveals these connections to show us that the order of the Mushaf is not coincidence but divine wisdom.',verse:'Allah has sent down the best discourse, a Book consistent with itself, repeating',verseRef:'Az-Zumar 23',hadith:'The order of surahs in the Mushaf is not random; each surah paves the way for what follows and completes what precedes it — Sheikh al-Ghazali',action:'Read the last verse of a surah and the first verse of the next one — can you find a connection between them?',young:'The surahs in the Quran are arranged wisely! Each surah is connected to the one before it and after it 🔗'},
    fr:{title:'Relier les Sourates entre Elles',desc:"Les sourates coraniques ne sont pas ordonnees au hasard — des liens profonds existent entre elles. Al-Baqarah batit la nation, Aal-Imran la fortifie. An-Nisa protege les droits des faibles, Al-Ma'idah complete la legislation. Le Sheikh al-Ghazali revele ces liens pour montrer que l'ordre du Mushaf n'est pas une coincidence mais une sagesse divine.",verse:'Allah a fait descendre le plus beau des recits, un Livre dont les parties se ressemblent et se repetent',verseRef:'Az-Zumar 23',hadith:"L'ordre des sourates dans le Mushaf n'est pas aleatoire ; chaque sourate ouvre la voie a ce qui suit et complete ce qui precede — Sheikh al-Ghazali",action:"Lisez le dernier verset d'une sourate et le premier verset de la suivante — trouvez-vous un lien entre eux ?",young:"Les sourates du Coran sont rangees avec sagesse ! Chaque sourate est liee a celle d'avant et celle d'apres 🔗"}
  },
  {
    id:8, emoji:'🏔️',
    ar:{title:'القصص الأربع في سورة الكهف',desc:'سورة الكهف تحتوي أربع قصص عظيمة، كل واحدة تعالج فتنة من فتن الحياة. أصحاب الكهف: فتنة الدين. صاحب الجنتين: فتنة المال. موسى والخضر: فتنة العلم. ذو القرنين: فتنة السلطة. المحور الجامع هو كيف يواجه المؤمن فتن الحياة الأربع الكبرى.',verse:'وَاصْبِرْ نَفْسَكَ مَعَ الَّذِينَ يَدْعُونَ رَبَّهُمْ بِالْغَدَاةِ وَالْعَشِيِّ يُرِيدُونَ وَجْهَهُ',verseRef:'الكهف ٢٨',hadith:'سورة الكهف صيدلية المؤمن: فيها علاج لأربع فتن تهدد كل إنسان — الشيخ الغزالي',action:'اقرأ سورة الكهف يوم الجمعة وحدد الفتنة الأربع وكيف عالجها القرآن',young:'سورة الكهف فيها ٤ قصص مثيرة! كل قصة تعلمك كيف تواجه تحدياً كبيراً في الحياة 🏔️'},
    en:{title:"Surah Al-Kahf's 4 Stories",desc:'Surah Al-Kahf contains four great stories, each addressing a major trial of life. The Sleepers of the Cave: the trial of religion. The Owner of Two Gardens: the trial of wealth. Musa and Al-Khidr: the trial of knowledge. Dhul-Qarnayn: the trial of power. The unifying theme is how a believer faces the four greatest temptations of life.',verse:'And keep yourself patient with those who call upon their Lord in the morning and the evening, seeking His face',verseRef:'Al-Kahf 28',hadith:'Surah Al-Kahf is the believer\'s pharmacy: it contains treatment for four trials that threaten every person — Sheikh al-Ghazali',action:'Read Surah Al-Kahf on Friday and identify the four trials and how the Quran addressed them',young:'Surah Al-Kahf has 4 exciting stories! Each story teaches you how to face a big challenge in life 🏔️'},
    fr:{title:'Les 4 Recits de la Sourate Al-Kahf',desc:"La sourate Al-Kahf contient quatre grands recits, chacun traitant une epreuve majeure de la vie. Les Dormants de la Grotte : l'epreuve de la religion. Le Proprietaire des Deux Jardins : l'epreuve de la richesse. Moussa et Al-Khidr : l'epreuve du savoir. Dhul-Qarnayn : l'epreuve du pouvoir. Le theme unificateur est comment le croyant fait face aux quatre grandes tentations de la vie.",verse:'Et reste patient avec ceux qui invoquent leur Seigneur matin et soir, desirant Son visage',verseRef:'Al-Kahf 28',hadith:'La sourate Al-Kahf est la pharmacie du croyant : elle contient le remede aux quatre epreuves qui menacent chaque personne — Sheikh al-Ghazali',action:"Lisez la sourate Al-Kahf le vendredi et identifiez les quatre epreuves et comment le Coran les a traitees",young:"La sourate Al-Kahf a 4 histoires passionnantes ! Chaque histoire t'apprend comment faire face a un grand defi dans la vie 🏔️"}
  },
  {
    id:9, emoji:'⚡',
    ar:{title:'تحديات التفسير المعاصر',desc:'يواجه التفسير المعاصر تحديات كثيرة: الجمود على تفاسير قديمة دون تجديد، والتفسير بلا علم، وإسقاط المفاهيم الغربية على القرآن. الشيخ الغزالي يدعو إلى تفسير يحترم التراث ويتفاعل مع الواقع، يجمع بين الأصالة والمعاصرة.',verse:'وَأَنَّ هَذَا صِرَاطِي مُسْتَقِيمًا فَاتَّبِعُوهُ وَلَا تَتَّبِعُوا السُّبُلَ فَتَفَرَّقَ بِكُمْ عَنْ سَبِيلِهِ',verseRef:'الأنعام ١٥٣',hadith:'التفسير الحقيقي يجمع بين فهم السلف وحاجات العصر، لا يتجمد ولا ينحرف — الشيخ الغزالي',action:'اقرأ تفسيرين مختلفين لنفس الآية اليوم وقارن بينهما — تعلّم التنوع في الفهم',young:'فهم القرآن يحتاج تعلماً مستمراً! اسأل عالماً عن معنى آية لا تفهمها ⚡'},
    en:{title:'Modern Tafsir Challenges',desc:'Modern tafsir faces many challenges: rigidity with old interpretations without renewal, interpreting without knowledge, and imposing Western concepts onto the Quran. Sheikh al-Ghazali calls for an interpretation that respects tradition while engaging with reality, combining authenticity with contemporaneity.',verse:'And this is My path, which is straight, so follow it; and do not follow other ways, for you will be separated from His way',verseRef:'Al-An\'am 153',hadith:'True tafsir combines the understanding of the predecessors with the needs of the age — it neither freezes nor deviates — Sheikh al-Ghazali',action:'Read two different interpretations of the same verse today and compare them — learn the diversity of understanding',young:'Understanding the Quran needs continuous learning! Ask a scholar about the meaning of a verse you do not understand ⚡'},
    fr:{title:'Les Defis du Tafsir Moderne',desc:"Le tafsir moderne fait face a de nombreux defis : la rigidite avec les anciennes interpretations sans renouvellement, l'interpretation sans savoir, et l'imposition de concepts occidentaux sur le Coran. Le Sheikh al-Ghazali appelle a une interpretation qui respecte la tradition tout en s'engageant avec la realite, combinant authenticite et contemporaneite.",verse:'Et voici Mon chemin dans toute sa rectitude, suivez-le donc ; et ne suivez pas les sentiers qui vous ecartent de Sa voie',verseRef:"Al-An'am 153",hadith:'Le vrai tafsir combine la comprehension des predecesseurs avec les besoins de l\'epoque — il ne se fige ni ne devie — Sheikh al-Ghazali',action:"Lisez deux interpretations differentes du meme verset aujourd'hui et comparez-les — apprenez la diversite de la comprehension",young:"Comprendre le Coran necessite un apprentissage continu ! Demande a un savant le sens d'un verset que tu ne comprends pas ⚡"}
  },
  {
    id:10, emoji:'🌹',
    ar:{title:'جمال سورة الرحمن',desc:'سورة الرحمن هي عروس القرآن كما وصفها النبي صلى الله عليه وسلم. محورها تعداد نعم الله على الإنسان والجن مع السؤال المتكرر: فبأي آلاء ربكما تكذبان؟ تنتقل من نعم الدنيا إلى نعم الآخرة في تسلسل بديع يشعرك بعظمة الخالق.',verse:'فَبِأَيِّ آلَاءِ رَبِّكُمَا تُكَذِّبَانِ',verseRef:'الرحمن ١٣',hadith:'سورة الرحمن تفتح عينيك على النعم التي تمر بها كل يوم دون أن تلاحظها — الشيخ الغزالي',action:'اقرأ سورة الرحمن واكتب ٥ نعم في حياتك لم تكن تنتبه لها',young:'سورة الرحمن تذكّرك بنعم الله الكثيرة! اكتب ٥ نعم جميلة في حياتك اليوم 🌹'},
    en:{title:'Surah Ar-Rahman Beauty',desc:'Surah Ar-Rahman is the Bride of the Quran as described by the Prophet (peace be upon him). Its central theme is listing the blessings of Allah upon humans and jinn with the recurring question: Then which of the favors of your Lord will you deny? It moves from worldly blessings to blessings of the Hereafter in a magnificent sequence that fills you with awe of the Creator.',verse:'Then which of the favors of your Lord will you deny?',verseRef:'Ar-Rahman 13',hadith:'Surah Ar-Rahman opens your eyes to blessings you pass by every day without noticing — Sheikh al-Ghazali',action:'Read Surah Ar-Rahman and write down 5 blessings in your life you had not been paying attention to',young:'Surah Ar-Rahman reminds you of Allah\'s many blessings! Write down 5 beautiful blessings in your life today 🌹'},
    fr:{title:'La Beaute de la Sourate Ar-Rahman',desc:"La sourate Ar-Rahman est la Mariee du Coran comme l'a decrite le Prophete (paix sur lui). Son theme central est l'enumeration des bienfaits d'Allah sur les humains et les djinns avec la question recurrente : Lequel des bienfaits de votre Seigneur nierez-vous ? Elle passe des bienfaits de ce monde a ceux de l'au-dela dans une sequence magnifique qui vous remplit d'emerveillement devant le Createur.",verse:'Lequel des bienfaits de votre Seigneur nierez-vous ?',verseRef:'Ar-Rahman 13',hadith:'La sourate Ar-Rahman ouvre vos yeux sur les bienfaits que vous croisez chaque jour sans les remarquer — Sheikh al-Ghazali',action:"Lisez la sourate Ar-Rahman et notez 5 bienfaits dans votre vie auxquels vous ne faisiez pas attention",young:"La sourate Ar-Rahman te rappelle les nombreux bienfaits d'Allah ! Note 5 beaux bienfaits dans ta vie aujourd'hui 🌹"}
  },
  {
    id:11, emoji:'👑',
    ar:{title:'رسالة سورة الملك',desc:'سورة الملك تدور حول عظمة ملك الله وقدرته المطلقة. تبدأ بتعريف الله كمالك الملك، ثم تنتقل لآيات الكون كدلائل على قدرته، وتنتهي بتحذير المعرضين. هي سورة تنجي من عذاب القبر وتفتح أبواب التفكر في ملكوت السماوات والأرض.',verse:'تَبَارَكَ الَّذِي بِيَدِهِ الْمُلْكُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',verseRef:'الملك ١',hadith:'سورة الملك تأخذك في رحلة عبر الكون لتعرف عظمة من خلقه — الشيخ الغزالي',action:'اقرأ سورة الملك قبل النوم اليوم وتأمل عظمة الله في كل آية',young:'سورة الملك تعلمك عن عظمة الله! اقرأها قبل النوم كل ليلة 👑'},
    en:{title:'Surah Al-Mulk Message',desc:'Surah Al-Mulk revolves around the greatness of Allah\'s sovereignty and His absolute power. It begins by defining Allah as the Owner of all dominion, then moves to cosmic signs as proofs of His power, and ends with warning those who turn away. It is a surah that saves from the torment of the grave and opens doors to reflection on the kingdom of the heavens and earth.',verse:'Blessed is He in Whose hand is the dominion, and He has power over all things',verseRef:'Al-Mulk 1',hadith:'Surah Al-Mulk takes you on a journey through the universe to know the greatness of its Creator — Sheikh al-Ghazali',action:'Read Surah Al-Mulk before bed tonight and contemplate the greatness of Allah in every verse',young:'Surah Al-Mulk teaches you about the greatness of Allah! Read it before sleeping every night 👑'},
    fr:{title:'Le Message de la Sourate Al-Mulk',desc:"La sourate Al-Mulk tourne autour de la grandeur de la souverainete d'Allah et de Son pouvoir absolu. Elle commence par definir Allah comme le Proprietaire de toute la royaute, puis passe aux signes cosmiques comme preuves de Son pouvoir, et se termine par un avertissement a ceux qui se detournent. C'est une sourate qui sauve du chatiment de la tombe et ouvre les portes de la reflexion sur le royaume des cieux et de la terre.",verse:'Beni soit Celui dans la main de Qui est la royaute, et Il est omnipotent',verseRef:'Al-Mulk 1',hadith:'La sourate Al-Mulk vous emmene dans un voyage a travers l\'univers pour connaitre la grandeur de son Createur — Sheikh al-Ghazali',action:"Lisez la sourate Al-Mulk avant de dormir ce soir et contemplez la grandeur d'Allah dans chaque verset",young:"La sourate Al-Mulk t'apprend la grandeur d'Allah ! Lis-la avant de dormir chaque nuit 👑"}
  },
  {
    id:12, emoji:'💎',
    ar:{title:'معانٍ عميقة في السور القصيرة',desc:'السور القصيرة ليست بسيطة كما يظنها البعض. سورة الإخلاص تساوي ثلث القرآن لأنها تلخص العقيدة كلها. سورة العصر فيها منهج حياة كامل في ثلاث آيات. سورة الكوثر أقصر سورة لكنها تحمل بشارة عظيمة. كل كلمة في السور القصيرة تحمل بحراً من المعاني.',verse:'وَالْعَصْرِ إِنَّ الْإِنْسَانَ لَفِي خُسْرٍ إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ',verseRef:'العصر ١-٣',hadith:'لو لم ينزل من القرآن إلا سورة العصر لكفت الناس — الإمام الشافعي',action:'اختر سورة قصيرة اليوم واقضِ ١٠ دقائق في تأمل كل كلمة فيها',young:'السور القصيرة فيها كنوز! سورة العصر ثلاث آيات فقط لكنها تعلمك كل شيء عن النجاح 💎'},
    en:{title:'Short Surahs Deep Meanings',desc:'Short surahs are not as simple as some think. Surah Al-Ikhlas equals a third of the Quran because it summarizes the entire creed. Surah Al-Asr contains a complete life program in three verses. Surah Al-Kawthar is the shortest surah yet carries great glad tidings. Every word in the short surahs carries an ocean of meaning.',verse:'By time. Indeed, mankind is in loss. Except those who believe and do righteous deeds and advise each other to truth and advise each other to patience',verseRef:'Al-Asr 1-3',hadith:'If nothing of the Quran had been revealed except Surah Al-Asr, it would have been sufficient for the people — Imam al-Shafi\'i',action:'Choose a short surah today and spend 10 minutes contemplating every word in it',young:'Short surahs have treasures! Surah Al-Asr is only three verses but teaches you everything about success 💎'},
    fr:{title:'Sens Profonds des Courtes Sourates',desc:"Les courtes sourates ne sont pas aussi simples que certains le pensent. La sourate Al-Ikhlas equivaut a un tiers du Coran car elle resume tout le credo. La sourate Al-Asr contient un programme de vie complet en trois versets. La sourate Al-Kawthar est la plus courte mais porte de grandes bonnes nouvelles. Chaque mot dans les courtes sourates porte un ocean de sens.",verse:'Par le Temps. L\'homme est certes en perdition. Sauf ceux qui croient et font les bonnes oeuvres et s\'enjoignent mutuellement la verite et la patience',verseRef:'Al-Asr 1-3',hadith:'Si rien du Coran n\'avait ete revele sauf la sourate Al-Asr, cela aurait suffi aux gens — Imam al-Shafi\'i',action:"Choisissez une courte sourate aujourd'hui et passez 10 minutes a contempler chaque mot",young:"Les courtes sourates ont des tresors ! La sourate Al-Asr n'a que trois versets mais t'apprend tout sur la reussite 💎"}
  },
  {
    id:13, emoji:'🧒',
    ar:{title:'جزء عمّ وتعليم الأطفال',desc:'جزء عمّ هو بوابة الأطفال إلى القرآن. سوره القصيرة سهلة الحفظ لكنها عميقة المعنى. يجب أن نعلم أطفالنا ليس فقط حفظ هذه السور بل فهم موضوعاتها: التوحيد في الإخلاص، والعمل الصالح في العصر، وعظمة الله في التكوير والانفطار.',verse:'فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ',verseRef:'النحل ٩٨',hadith:'ابدأ بتعليم أطفالك جزء عمّ مع الشرح، لا تجعلهم يحفظون بلا فهم — الشيخ الغزالي',action:'اجلس مع طفل اليوم واشرح له سورة من جزء عمّ بطريقة ممتعة ومبسطة',young:'جزء عمّ مليء بالسور الرائعة! احفظ سورة جديدة كل أسبوع وافهم معناها 🧒'},
    en:{title:'Juz Amma for Children',desc:'Juz Amma is the gateway for children to the Quran. Its short surahs are easy to memorize but deep in meaning. We must teach our children not just to memorize these surahs but to understand their themes: monotheism in Al-Ikhlas, good deeds in Al-Asr, and the greatness of Allah in At-Takwir and Al-Infitar.',verse:'So when you recite the Quran, seek refuge in Allah from Satan the expelled',verseRef:'An-Nahl 98',hadith:'Start teaching your children Juz Amma with explanation — do not let them memorize without understanding — Sheikh al-Ghazali',action:'Sit with a child today and explain a surah from Juz Amma in a fun and simple way',young:'Juz Amma is full of amazing surahs! Memorize a new surah every week and understand its meaning 🧒'},
    fr:{title:'Juz Amma pour les Enfants',desc:"Juz Amma est la porte d'entree des enfants vers le Coran. Ses courtes sourates sont faciles a memoriser mais profondes de sens. Nous devons enseigner a nos enfants non seulement la memorisation de ces sourates mais la comprehension de leurs themes : le monotheisme dans Al-Ikhlas, les bonnes oeuvres dans Al-Asr, et la grandeur d'Allah dans At-Takwir et Al-Infitar.",verse:'Lorsque tu lis le Coran, cherche la protection d\'Allah contre le Diable banni',verseRef:'An-Nahl 98',hadith:'Commencez par enseigner Juz Amma a vos enfants avec des explications — ne les laissez pas memoriser sans comprendre — Sheikh al-Ghazali',action:"Asseyez-vous avec un enfant aujourd'hui et expliquez-lui une sourate de Juz Amma de facon amusante et simple",young:"Juz Amma est plein de sourates magnifiques ! Memorise une nouvelle sourate chaque semaine et comprends son sens 🧒"}
  },
  {
    id:14, emoji:'🚫',
    ar:{title:'تجنب القراءة الحرفية فقط',desc:'القراءة الحرفية للقرآن دون فهم السياق والمقاصد خطر كبير. الشيخ الغزالي يحذر من أخذ الآيات بمعزل عن سياقها، أو تطبيقها دون فهم ظروف نزولها ومقاصدها الشرعية. الفهم السليم يجمع بين ظاهر النص وروح التشريع ومقاصد الشريعة الكبرى.',verse:'هُوَ الَّذِي أَنْزَلَ عَلَيْكَ الْكِتَابَ مِنْهُ آيَاتٌ مُحْكَمَاتٌ هُنَّ أُمُّ الْكِتَابِ وَأُخَرُ مُتَشَابِهَاتٌ',verseRef:'آل عمران ٧',hadith:'من فسّر القرآن برأيه المجرد فقد أخطأ ولو أصاب — لأنه لم يسلك الطريق الصحيح — الشيخ الغزالي',action:'عندما تقرأ آية لا تفهمها، ارجع إلى تفسير موثوق قبل أن تستنتج معناها بنفسك',young:'لا تفسّر القرآن وحدك! اسأل العلماء والمعلمين عن معنى الآيات الصعبة 🚫'},
    en:{title:'Avoiding Literal-Only Reading',desc:'A literal-only reading of the Quran without understanding context and objectives is a great danger. Sheikh al-Ghazali warns against taking verses out of their context, or applying them without understanding the circumstances of their revelation and legislative purposes. Sound understanding combines the apparent text with the spirit of legislation and the major objectives of Sharia.',verse:'It is He Who has sent down to you the Book; in it are verses precise — they are the foundation of the Book — and others unspecific',verseRef:'Aal-Imran 7',hadith:'Whoever interprets the Quran by mere personal opinion has erred even if correct — because he did not follow the right path — Sheikh al-Ghazali',action:'When you read a verse you do not understand, go back to a reliable tafsir before drawing your own conclusion',young:'Do not interpret the Quran alone! Ask scholars and teachers about the meaning of difficult verses 🚫'},
    fr:{title:'Eviter la Lecture Uniquement Litterale',desc:"Une lecture purement litterale du Coran sans comprendre le contexte et les objectifs est un grand danger. Le Sheikh al-Ghazali met en garde contre le fait de sortir les versets de leur contexte, ou de les appliquer sans comprendre les circonstances de leur revelation et leurs objectifs legislatifs. La bonne comprehension combine le texte apparent avec l'esprit de la legislation et les grands objectifs de la Charia.",verse:'C\'est Lui qui a fait descendre sur toi le Livre : il s\'y trouve des versets sans equivoque qui sont la base du Livre, et d\'autres qui pretent a interpretation',verseRef:'Aal-Imran 7',hadith:'Quiconque interprete le Coran par simple opinion personnelle a erre meme s\'il a raison — car il n\'a pas suivi le bon chemin — Sheikh al-Ghazali',action:"Quand vous lisez un verset que vous ne comprenez pas, consultez un tafsir fiable avant de tirer vos propres conclusions",young:"N'interprete pas le Coran tout seul ! Demande aux savants et aux enseignants le sens des versets difficiles 🚫"}
  },
  {
    id:15, emoji:'🕊️',
    ar:{title:'العيش بموضوعات القرآن',desc:'الهدف النهائي من التفسير الموضوعي ليس المعرفة النظرية بل العيش بقيم القرآن. كل سورة تحمل رسالة عملية لحياتنا: العدل والرحمة والصبر والتوكل والإحسان. الشيخ الغزالي يدعو إلى تحويل كل سورة نقرأها إلى منهج حياة يومي نعيشه بأفعالنا لا بألسنتنا فقط.',verse:'وَنَزَّلْنَا عَلَيْكَ الْكِتَابَ تِبْيَانًا لِكُلِّ شَيْءٍ وَهُدًى وَرَحْمَةً وَبُشْرَى لِلْمُسْلِمِينَ',verseRef:'النحل ٨٩',hadith:'القرآن ليس للقراءة وحدها بل للعيش — حوّل كل سورة إلى منهج عملي في حياتك — الشيخ الغزالي',action:'اختر سورة قرأتها مؤخراً واستخرج منها ٣ قيم طبّقها في حياتك هذا الأسبوع',young:'القرآن ليس فقط للقراءة بل للعمل! اختر قيمة من سورة وطبّقها كل يوم 🕊️'},
    en:{title:'Living by the Quran\'s Themes',desc:'The ultimate goal of thematic tafsir is not theoretical knowledge but living by the values of the Quran. Every surah carries a practical message for our lives: justice, mercy, patience, trust in Allah, and excellence. Sheikh al-Ghazali calls for transforming every surah we read into a daily life program we live through our actions, not just our tongues.',verse:'And We have sent down to you the Book as clarification for all things and as guidance and mercy and good tidings for the Muslims',verseRef:'An-Nahl 89',hadith:'The Quran is not just for reading but for living — turn every surah into a practical program in your life — Sheikh al-Ghazali',action:'Choose a surah you read recently and extract 3 values from it to apply in your life this week',young:'The Quran is not just for reading but for action! Choose a value from a surah and apply it every day 🕊️'},
    fr:{title:'Vivre selon les Themes du Coran',desc:"L'objectif ultime du tafsir thematique n'est pas la connaissance theorique mais de vivre selon les valeurs du Coran. Chaque sourate porte un message pratique pour nos vies : la justice, la misericorde, la patience, la confiance en Allah et l'excellence. Le Sheikh al-Ghazali appelle a transformer chaque sourate que nous lisons en un programme de vie quotidien que nous vivons par nos actes, pas seulement par nos langues.",verse:'Et Nous avons fait descendre sur toi le Livre, comme un eclaircissement de toute chose, ainsi qu\'un guide, une grace et une bonne annonce pour les musulmans',verseRef:'An-Nahl 89',hadith:'Le Coran n\'est pas seulement pour la lecture mais pour la vie — transformez chaque sourate en un programme pratique dans votre vie — Sheikh al-Ghazali',action:"Choisissez une sourate que vous avez lue recemment et tirez-en 3 valeurs a appliquer dans votre vie cette semaine",young:"Le Coran n'est pas que pour la lecture mais pour l'action ! Choisis une valeur d'une sourate et applique-la chaque jour 🕊️"}
  }
];

// ═══════════════ QUIZ DATA (Who Wants to Be a Mufassir?) ═══════════════
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
  document.getElementById('themeIcon').textContent = THEME_ICONS[currentTheme];
  playSound('theme');
}

// ═══════════════ RENDER ALL ═══════════════
function renderAll() {
  const t = T[lang];
  document.getElementById('appTitle').textContent = t.appTitle;
  document.getElementById('splashSub').textContent = t.splashSub;
  document.getElementById('splashHint').textContent = t.splashHint;
  document.getElementById('tabHome').textContent = t.tabHome;
  document.getElementById('tabTraits').textContent = t.tabTraits;
  document.getElementById('tabQuiz').textContent = t.tabQuiz;
  document.getElementById('tabProgress').textContent = t.tabProgress;
  document.getElementById('tabAbout').textContent = t.tabAbout;
  document.getElementById('traitsTitle').textContent = t.traitsTitle;
  document.getElementById('traitsDesc').textContent = t.traitsDesc;
  document.getElementById('quizTitle').textContent = t.quizTitle;
  document.getElementById('quizDesc').textContent = t.quizDesc;
  document.getElementById('progressTitle').textContent = t.progressTitle;
  document.getElementById('progressDesc').textContent = t.progressDesc;
  document.getElementById('helpTitle').textContent = t.helpTitle;
  document.getElementById('duaPanelTitle').textContent = t.duaPanelTitle;
  document.getElementById('ageModeBtn').textContent = ageMode === 'young' ? t.youngMode : t.teenMode;
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
  document.getElementById('dailyCard').innerHTML = `
    <div class="daily-label">${t.dailyLabel}</div>
    <div class="daily-title">${trait.emoji} ${d.title}</div>
    <div class="daily-body">${ageMode === 'young' ? d.young : d.desc}</div>
    <div class="daily-action" onclick="switchTab('traits');toggleCard('trait-${trait.id}')">${t.readMore} &#8594;</div>`;
  // Grid
  document.getElementById('homeGrid').innerHTML = TRAITS.map(tr => {
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
  const container = document.getElementById('traitsContainer');
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
  document.getElementById('quizContainer').innerHTML = '';
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

  document.getElementById('progressContainer').innerHTML = `
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
  document.getElementById('aboutContainer').innerHTML = `
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
  document.getElementById('helpBody').innerHTML = help[lang].map(h => `
    <div class="help-item">
      <div class="help-item-title">${h.title}</div>
      <div>${h.body}</div>
    </div>`).join('');
}

// ═══════════════ RENDER: DUAS ═══════════════
function renderDuas() {
  document.getElementById('duaPanelContent').innerHTML = DUAS.map(d => {
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
  if (!canvas) return;
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
