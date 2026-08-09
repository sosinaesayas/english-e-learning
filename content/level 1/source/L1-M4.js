"use strict";
/* LEVEL 1 · MODULE 4 — Everyday Vocabulary   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 1", levelNo: "1", levelName: "Beginner\nEnglish", cefr: "CEFR Pre-A1 → A1",
    moduleTag: "Module 4 of 6",
    title: "Everyday Vocabulary",
    sub: "Eight topics, over two hundred words: family, colours, animals, food, school, the body, jobs and weather. The words you need to talk about your own life.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "8", v: "TOPICS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons — but this is the biggest module in Level 1. Teach ONE topic per session and spread it over more lessons if you can.",
      how: "Say plainly: “This module has more words than any other. We do not learn them all today. We learn one group at a time, and we come back to each group again and again.”",
      tip: "Bring real objects: fruit, a school bag, coloured paper, photographs of family. Real things beat pictures, and pictures beat translation.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things, all about your own life.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Name over two hundred everyday things in English", d: "From a picture, or by pointing at the real thing." },
      { t: "Talk about your family", d: "“This is my mother. She is a farmer.”" },
      { t: "Describe things with colours and sizes", d: "“It is a big red bag.”" },
      { t: "Use “a” and “an” correctly, and make plurals", d: "a pen · an apple · three pens · two children." },
      { t: "Say what there is around you", d: "“There is a book on the table. There are ten students in the class.”" },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask “Can you do this now?” Objective 1 sounds enormous — say that two hundred words in four weeks is about ten words a day, which is very achievable.",
      tip: "Return to this slide at the end of the module and ask again.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: how many can you already name?", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaEye", title: "1 · Look around", desc: "Name five things you can see in this room. English if you can, Amharic if you cannot." },
      { icon: "FaUsers", title: "2 · Your family", desc: "How many people are in your family? Say the number in English — you learned it in Module 2." },
      { icon: "FaPalette", title: "3 · Colours", desc: "Point at something and say its colour. Any colour word you know." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Write every English word learners produce on the board. By the end of the warm-up there will be more than they expected, which is the point.",
      mistakes: "Correct nothing here.",
      tip: "Leave the board list up for the whole module and tick each word off as it is formally taught. Learners see they already had a head start.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Ten words a day is two hundred words in this module.",
    sub: "You do not need to remember two hundred words today. You need to meet ten, use them out loud, and see them again tomorrow.\nThat is how vocabulary is learned — a little, used often, and revisited.",
    chips: ["8 topics", "~25 words each", "Revisited every lesson"],
    notes: tn({
      time: "4 minutes.",
      how: "Adults panic at the size of a vocabulary list. Break it down out loud: eight topics, one per session, about twenty-five words each, ten of which they probably already half-know.",
      mistakes: "The commonest learner strategy is to write a long list and read it silently. Say clearly that this does not work — words are learned by being said out loud and used in a sentence.",
      tip: "Teach the rule now and repeat it all module: a word you have only read is not learned. A word you have said in a sentence about your own life is learned.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — the 8 topics
  L.grid({
    sec: SEC.con, title: "The eight topics in this module", sub: "One topic per session. Each one is about twenty-five words.",
    cols: 4, color: C.green, titleSize: 19, descSize: 14,
    items: [
      { icon: "FaUsers", title: "1 · Family", desc: "mother · father · sister · brother · grandmother · uncle · son · daughter" },
      { icon: "FaPalette", title: "2 · Colours", desc: "red · blue · green · yellow · black · white · brown · grey" },
      { icon: "FaPaw", title: "3 · Animals", desc: "dog · cat · cow · goat · donkey · hen · sheep · lion" },
      { icon: "FaUtensils", title: "4 · Food & drink", desc: "injera · bread · rice · meat · milk · coffee · water · egg" },
      { icon: "FaSchool", title: "5 · School items", desc: "pen · pencil · book · bag · chair · table · board · paper" },
      { icon: "FaHeartbeat", title: "6 · The body", desc: "head · hand · leg · eye · ear · mouth · nose · foot" },
      { icon: "FaBriefcase", title: "7 · Jobs", desc: "teacher · farmer · driver · nurse · student · trader · doctor · engineer" },
      { icon: "FaCloudSun", title: "8 · Weather", desc: "hot · cold · rain · sun · wind · cloud · dry · wet" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Read each topic aloud with its eight sample words. Do not teach them here — this slide is the map, not the journey. Ask which topic learners want first if you have flexibility.",
      mistakes: "Do not attempt more than one topic per session. Eight topics in one lesson produces recognition without recall, and none of it survives the week.",
      extra: "Each topic has about twenty-five words in the full list; these eight are the core of each.",
      tip: "Print the eight topic lists as eight separate handouts. Give out one per session — a single sheet feels achievable, a list of two hundred does not.",
      activity: "Topic vote: learners choose which topic to start with. Ownership raises effort noticeably in adult classes.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — family
  L.table({
    sec: SEC.con, title: "Topic 1 — family", sub: "The people closest to you. Start with these eight.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 17, headSize: 16, colW: [3.0, 3.0, 6.133],
      rows: [
        ["Woman / girl", "Man / boy", "Example sentence"],
        ["mother", "father", "This is my mother. She is a farmer."],
        ["sister", "brother", "I have two sisters and one brother."],
        ["daughter", "son", "She has a daughter and two sons."],
        ["grandmother", "grandfather", "My grandmother is eighty years old."],
        ["aunt", "uncle", "My uncle is a trader in Merkato."],
        ["wife", "husband", "His wife is a nurse."],
      ],
    },
    note: "Two words that cover everyone:  PARENTS = mother and father.   CHILDREN = sons and daughters.",
    notes: tn({
      time: "12 minutes.",
      how: "Draw your own family tree on the board and label it in English while you talk. Then have learners draw theirs and label it. Personal content is what makes vocabulary stick.",
      mistakes: "He/she errors return immediately here — “My sister, he is…”. This module is the best possible place to drill the pronouns from Module 3, because every family word is gendered.",
      extra: "Also useful: baby, cousin, friend, neighbour. Add them if the class is fast.",
      tip: "Family size and structure vary. Never assume a learner has both parents living or any particular arrangement. Ask “Who is in your family?” rather than “Do you have brothers and sisters?”",
      activity: "Family tree: every learner draws and labels their own, then describes three people on it to a partner using “This is my ___. He is a ___.”",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — colours
  L.grid({
    sec: SEC.con, title: "Topic 2 — colours", sub: "Say the colour BEFORE the thing: a red bag, not a bag red.",
    cols: 4, color: C.green, titleSize: 22, descSize: 15,
    items: [
      { icon: "FaPalette", title: "red", desc: "/red/\na red bag", color: "D64545" },
      { icon: "FaPalette", title: "blue", desc: "/bluː/\na blue pen", color: "2F80ED" },
      { icon: "FaPalette", title: "green", desc: "/ɡriːn/\na green door", color: "2E9E5B" },
      { icon: "FaPalette", title: "yellow", desc: "/ˈjeləʊ/\na yellow shirt", color: "F2A93B" },
      { icon: "FaPalette", title: "black", desc: "/blæk/\na black shoe", color: "12211B" },
      { icon: "FaPalette", title: "white", desc: "/waɪt/\na white paper", color: "6B7C71" },
      { icon: "FaPalette", title: "brown", desc: "/braʊn/\nbrown bread", color: "8C3B22" },
      { icon: "FaPalette", title: "grey", desc: "/ɡreɪ/\na grey cloud", color: "55635C" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Point at real things in the room and name the colour. Then point and ask. Coloured paper or pens make this much easier — bring some.",
      mistakes: "The word order is the teaching point: the colour comes before the thing. Say “a red bag” and “a bag red” aloud and ask which sounds right — most learners hear it immediately.",
      extra: "Three consonant clusters hide in these words: bl- in blue and black, gr- in green and grey, br- in brown. Drill them as clusters, no vowel inserted.",
      tip: "Colours combine with everything, so they are the fastest way to turn single words into sentences: a red bag, a black dog, a white shirt.",
      activity: "Colour hunt: learners find one thing of each colour in the room and say “This is a ___ ___.” Eight sentences each.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — food and school
  L.table({
    sec: SEC.con, title: "Topics 3 and 4 — food, drink and school items", sub: "The things around you every day.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 17, headSize: 16, colW: [2.6, 3.4, 3.0, 3.133],
      rows: [
        ["Food", "Example", "School", "Example"],
        ["injera", "I eat injera every day.", "pen", "This is my pen."],
        ["bread", "I want bread and tea.", "book", "My book is in my bag."],
        ["rice", "We have rice and meat.", "bag", "Her bag is blue."],
        ["meat", "The meat is hot.", "chair", "Sit on the chair."],
        ["milk", "I drink milk in the morning.", "table", "The book is on the table."],
        ["coffee", "Ethiopian coffee is famous.", "board", "Look at the board."],
      ],
    },
    note: "Careful:  some food words never take -s.  “I want rice” — not “rices”.  Also: “bread”, “meat”, “milk”, “coffee”, “water”.",
    notes: tn({
      time: "14 minutes — two topics, so allow more time or split across two sessions.",
      how: "Bring real objects for the school column and pictures or real items for food. Point, name, class repeats, then individuals point and name.",
      mistakes: "Uncountable food words taking a plural — “two rices”, “three breads”. Do not explain the grammar at this level. Say: “These words never take -s” and list them.",
      extra: "More food: egg, banana, onion, potato, tea, sugar, salt, oil. More school: pencil, paper, ruler, door, window, desk.",
      tip: "Food is the topic learners enjoy most and use fastest. If you are short of time, prioritise it over school items — learners already know most school words from Module 1.",
      activity: "Shopping list: learners write five food words and read the list to a partner, who writes it down. Then they check the spelling together.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — body and jobs
  L.table({
    sec: SEC.con, title: "Topics 5 and 6 — the body and jobs", sub: "Useful at the clinic, and useful at work.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 17, headSize: 16, colW: [2.4, 3.6, 2.8, 3.333],
      rows: [
        ["Body", "Example", "Job", "Example"],
        ["head", "My head hurts.", "teacher", "She is a teacher."],
        ["hand", "Wash your hands.", "farmer", "My father is a farmer."],
        ["leg", "My leg is painful.", "driver", "He is a bus driver."],
        ["eye", "I have two eyes.", "nurse", "Hana is a nurse."],
        ["mouth", "Open your mouth.", "trader", "My uncle is a trader."],
        ["foot", "My foot is cold.  (two = feet)", "engineer", "She is an engineer.  ← “an”"],
      ],
    },
    note: "Two irregular plurals to learn now:  one foot → two FEET   ·   one tooth → two TEETH.   And note “an engineer”, because it starts with a vowel sound.",
    notes: tn({
      time: "14 minutes — two topics.",
      how: "Body parts are best taught physically: touch your head, your hand, your eye and name each one, and have the class copy. It takes ninety seconds and everyone remembers.",
      mistakes: "“Foots” and “tooths” are the natural but wrong plurals. Teach foot/feet and tooth/teeth as pairs to memorise, not as a rule.",
      extra: "More body: ear, nose, arm, finger, back, stomach, tooth, hair. More jobs: doctor, shopkeeper, cook, guard, tailor, mechanic, waiter.",
      tip: "The body vocabulary is what a learner needs at a clinic — one of the highest-stakes situations a beginner faces. Give it real weight.",
      activity: "Simon says with body parts: “Touch your head.” “Touch your ear.” Fast, physical, and it drills listening as well as vocabulary.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — weather + method
  L.grid({
    sec: SEC.con, title: "Topic 7 — weather, and how to learn any word", sub: "Eight weather words, and the five steps that make a word stick.",
    cols: 2, color: C.green, titleSize: 20, descSize: 16, iconInline: true,
    items: [
      { icon: "FaCloudSun", title: "The eight weather words", desc: "hot · cold · rain · sun · wind · cloud · dry · wet\n\n“It is hot today.”  ·  “It is raining.”  ·  “The weather is cold in Gondar.”" },
      { icon: "FaRedo", title: "Five steps to learn any word", desc: "1 · Look at the picture or the real thing.\n2 · Say it three times out loud.\n3 · Use it in a sentence about YOUR life.\n4 · Write it once.\n5 · Say it again tomorrow." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Teach the weather words quickly — they are easy and learners half-know them. Then spend the real time on the five steps, because those apply to every remaining word in the course.",
      mistakes: "Step 3 is the one learners skip, and it is the one that matters. A word used in a sentence about your own life is remembered; a word on a list is not.",
      extra: "Weather questions: “What is the weather like today?” “Is it hot in Adama?” “Does it rain in June?”",
      tip: "Demonstrate the five steps live with one new word, start to finish, in ninety seconds. Then require all five steps for every word for the rest of the module.",
      activity: "Learn a word properly: give the class one new word and make them do all five steps out loud together. Then ask them to do it alone with a second word.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "mother", ipa: "/ˈmʌðə/", pos: "noun", icon: "FaFemale",
      meaning: "Your female parent.",
      example: "This is my mother. She is a farmer.",
      mistake: "The middle sound is “th” — tongue between the teeth, and it is the soft, voiced one. Not “moder” or “moza”. And remember: mother is “she”, never “he”.",
      notes: tn({ time: "6 minutes.",
        how: "Model the “th” with the tongue clearly visible. Say mo-ther slowly, then at speed. Then use it immediately in the example sentence with the correct pronoun.",
        mistakes: "Two errors at once here: the “th” sound and the he/she pronoun. Fix the sound first, then the pronoun.",
        extra: "Other voiced-th words: father, brother, this, that, they, the.",
        tip: "“Mother” and “father” differ by one sound, so teach them together and drill the pair.",
        activity: "Learners bring or describe a photograph and say three sentences about their mother." }) },

    { word: "red", ipa: "/red/", pos: "adjective", icon: "FaPalette",
      meaning: "The colour of blood, or of a tomato.",
      example: "This is a red bag. Her shoes are red.",
      mistake: "The colour goes BEFORE the thing: “a red bag”, never “a bag red”. And the vowel is short — /red/, not “raid”.",
      notes: tn({ time: "5 minutes.",
        how: "Hold up something red and say “a red bag”. Then deliberately say “a bag red” and ask the class if it sounds right. Their ear will tell them before any rule does.",
        mistakes: "Word order with adjectives. Many languages place the adjective after the noun, and learners transfer that pattern.",
        extra: "Combine with every noun learned so far: a red pen, a red door, a red car, a red shirt.",
        tip: "Colours are the fastest way to turn single words into sentences. Every noun in the room can now become a two-word phrase.",
        activity: "Colour and object: hold up items and have learners produce the full phrase with the correct article." }) },

    { word: "water", ipa: "/ˈwɔːtə/", pos: "noun", icon: "FaTint",
      meaning: "The clear liquid you drink.",
      example: "I want some water, please.",
      mistake: "Never say “a water” or “waters”. Water is uncountable — you say “some water” or “a bottle of water”. The first sound is /w/, made with rounded lips.",
      notes: tn({ time: "6 minutes.",
        how: "Hold a bottle and say “a bottle of water” and “some water”. Show that the container is countable but the water is not. That is far clearer than any grammatical explanation.",
        mistakes: "“Two waters” is the natural but wrong form. Give learners the safe phrase “a bottle of water” to use in a shop.",
        extra: "Other uncountable words from this module: rice, bread, milk, coffee, meat, money.",
        tip: "This is one of the most useful words in the module — a learner will ask for water far more often than for almost anything else.",
        activity: "Ordering practice: “Can I have some water, please?” Everyone says it once." }) },

    { word: "teacher", ipa: "/ˈtiːtʃə/", pos: "noun", icon: "FaChalkboardTeacher",
      meaning: "A person whose job is to teach.",
      example: "My teacher is from Bahir Dar. She is a good teacher.",
      mistake: "The first vowel is long — /tiː/, like “tea”. And do not forget the article: “She is A teacher”, never “She is teacher”.",
      notes: tn({ time: "5 minutes.",
        how: "Point at yourself and say “I am a teacher.” Then point at a learner and say “You are a student.” The contrast makes both the word and the article clear.",
        mistakes: "The missing article again — transfer error S3. It appears with every job word, so this module is where it is either fixed or set for good.",
        extra: "Other jobs with articles: a nurse, a driver, a farmer, a trader, AN engineer, AN artist.",
        tip: "Every learner uses this word to talk about you. Get the pronunciation and the article right on day one.",
        activity: "Job chain: each learner says the job of one family member with the correct article." }) },

    { word: "hot", ipa: "/hɒt/", pos: "adjective", icon: "FaSun",
      meaning: "With a high temperature. The opposite of cold.",
      example: "It is hot today. The coffee is hot.",
      mistake: "Say the /h/ clearly — breathe out at the start. Without it, “hot” sounds like “ot”. Also: “It is hot”, not “Is hot” — English always needs the subject “it”.",
      notes: tn({ time: "6 minutes.",
        how: "Use the hand-in-front-of-the-mouth test for /h/, as in Module 3. Then teach the whole sentence “It is hot today”, because the subject “it” is the real grammar point.",
        mistakes: "Dropping the subject — “Is hot today” — is a transfer error: Amharic does not need a dummy subject and English always does. Name the cause.",
        extra: "Weather sentences: It is cold. It is windy. It is raining. It is sunny.",
        tip: "Weather is the safest small talk in English and learners will use it constantly. It is worth the full six minutes.",
        activity: "Weather round: each learner says one true sentence about the weather today or in their home town." }) },
  ];
  VOCAB.forEach((v, i) => {
    L.vocab({
      sec: Object.assign({}, SEC.voc, { label: "Vocabulary " + (i + 1) + " of 5" }),
      title: "New word: " + v.word, sub: "Word · pronunciation · meaning · example · common mistake",
      word: v.word, ipa: v.ipa, pos: v.pos, icon: v.icon,
      meaning: v.meaning, example: v.example, mistake: v.mistake,
      color: C.vocab, tint: C.vocabTint, inkCol: C.vocabInk, notes: v.notes,
    });
  });

  // ============================================================ 16 · GRAMMAR 1
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 1 of 5" }),
    title: "Rule 1 — “a” and “an”",
    sub: "Use “an” before a vowel SOUND. Use “a” before everything else.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [3.0, 4.6, 4.533],
      rows: [
        ["Use", "Before", "Examples"],
        ["a", "a consonant sound", "a pen · a book · a teacher · a red bag"],
        ["an", "a vowel sound (a e i o u)", "an apple · an egg · an eye · an engineer"],
        ["a", "the word “university”", "a university  ← it starts with a “yoo” sound"],
        ["an", "the word “hour”", "an hour  ← the h is silent, so it starts with a vowel sound"],
      ],
    },
    note: "The rule is about the SOUND, not the letter. Say the word aloud and listen to how it starts — that is how you choose.",
    notes: tn({
      time: "10 minutes.",
      how: "Say the word aloud before writing the article. Learners who look at the letter get the last two rows wrong; learners who listen get them right.",
      mistakes: "Missing the article altogether is more common than choosing the wrong one. Both are errors, but the missing article is the one to prioritise.",
      extra: "Sort these aloud: pen · apple · orange · book · hour · umbrella · student · engineer · university.",
      tip: "Do not spend long on the two exceptions. Teach “a” and “an” with vowel sounds first, and mention the exceptions once.",
      activity: "A or an: teacher says a noun, class shouts the article. Thirty rounds in two minutes.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — plurals: adding -s",
    sub: "More than one? Add -s. A few words change completely.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [3.4, 4.0, 4.733],
      rows: [
        ["Rule", "One", "More than one"],
        ["Most words: add -s", "pen · book · dog", "pens · books · dogs"],
        ["After ch, sh, s, x: add -es", "watch · dish · bus", "watches · dishes · buses"],
        ["Consonant + y → -ies", "baby · city · country", "babies · cities · countries"],
        ["Irregular — learn these", "man · woman · child", "men · women · children"],
        ["Irregular — learn these", "foot · tooth · person", "feet · teeth · people"],
      ],
    },
    note: "And remember from Module 2: money, water, rice, bread and coffee NEVER take -s.",
    notes: tn({
      time: "12 minutes.",
      how: "Teach the first rule and drill it hard. Then mention rules 2 and 3 briefly. Then teach the irregulars as words to memorise, not as a rule — because they are not a rule.",
      mistakes: "Dropping the plural -s entirely is transfer error S7 and it persists for months. Correct it every time you hear it from now on.",
      extra: "Count real things: two pens, three chairs, five students, ten books.",
      tip: "The six irregulars in the last two rows cover almost everything a Level 1 learner will need. Do not add more.",
      activity: "Count and say: learners count objects in the room and report in full sentences: “There are twelve chairs.”",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — this, that, these, those",
    sub: "Near or far? One or more than one?",
    table: {
      color: C.gram, rowH: 0.58, fontSize: 18, headSize: 16, colW: [2.8, 2.8, 6.533],
      rows: [
        ["", "Near me", "Far from me"],
        ["One thing", "this", "that"],
        ["More than one", "these", "those"],
        ["Examples", "This is my pen.\nThese are my books.", "That is your bag.\nThose are their chairs."],
      ],
    },
    note: "Notice the verb changes too:  THIS IS  ·  THESE ARE  ·  THAT IS  ·  THOSE ARE.",
    notes: tn({
      time: "10 minutes.",
      how: "Teach it physically. Hold an object close and say “This is a pen.” Put it across the room and say “That is a pen.” Then two objects for these and those. Movement teaches this in a way a table cannot.",
      mistakes: "Learners use “this” for everything. It is understood, so nothing forces them to correct it — you have to.",
      extra: "Point around the room and produce ten sentences: this, that, these, those, mixed.",
      tip: "The verb agreement is the harder half. “These is” is a common error — drill “these ARE” and “those ARE” as fixed pairs.",
      activity: "Near and far: learners stand and point at objects, using all four words correctly. Ten sentences each.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — “There is” and “There are”",
    sub: "Use it to say what exists in a place.",
    left: { h: "Correct", items: ["There is a book on the table.", "There is one teacher in the class.", "There are ten students here.", "There are two windows."] },
    right: { h: "Wrong", items: ["There is ten students here.", "It has a book on the table.", "There are one teacher.", "Have two windows."] },
    note: "THERE IS + one thing.   THERE ARE + more than one thing.   The number decides which one you use.",
    notes: tn({
      time: "10 minutes.",
      how: "Describe the room yourself, out loud, using six “there is / there are” sentences. Then have learners describe it. Real surroundings make the structure obvious.",
      mistakes: "“It has” instead of “there is” is a direct translation pattern. Name it: “In English we do not say ‘it has’ for this — we say ‘there is’.”",
      extra: "Describe a picture of a market, a classroom or a kitchen using at least five sentences.",
      tip: "This structure lets learners describe any place, which makes the picture-description task in the speaking section possible. It is worth the full ten minutes.",
      activity: "Describe the room: in pairs, learners produce ten “there is / there are” sentences about the classroom. Then one pair reads theirs and the class checks.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — put it all together",
    sub: "Article, colour, noun, plural — in the right order.",
    left: { h: "Correct", items: ["This is a red bag.", "There are three green books.", "She is an engineer.", "Those are my children."] },
    right: { h: "Wrong", items: ["This is red bag.", "There is three green books.", "She is a engineer.", "Those are my childrens."] },
    note: "Four checks:  1 · is there an article (a / an)?   2 · a or an — listen to the sound.   3 · colour BEFORE the thing.   4 · plural -s where it belongs, and no double plural.",
    notes: tn({
      time: "9 minutes.",
      how: "Take each wrong sentence and ask the class to name the single error before you fix it. Every sentence here has exactly one — tell them that.",
      mistakes: "“Childrens” is a double plural: “children” is already plural. Learners over-apply the -s rule they have just learned.",
      extra: "Two more for pairs: “There is two chairs.” and “I have a apple.”",
      tip: "Add these four checks to the wall. The list is now fifteen points across four modules, and it covers everything a Level 1 learner writes.",
      activity: "Error auction: teams bid on how many errors they can find in a set of four sentences.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — a or an?", sub: "Say the word aloud, then choose.", items: [
      { q: "Complete: “I have ___ pen.”", a: "a pen", why: "“Pen” starts with the consonant sound /p/, so it takes “a”." },
      { q: "Complete: “She has ___ apple.”", a: "an apple", why: "“Apple” starts with a vowel sound /æ/, so it takes “an”. The two words run together when you say them: a-napple." },
      { q: "Complete: “He is ___ engineer.”", a: "an engineer", why: "“Engineer” starts with a vowel sound. Most job words take “a”, so this one catches learners out." },
    ] },
    { title: "Guided examples 2 — making plurals", sub: "Add -s, or learn the irregular form.", items: [
      { q: "One book. Two ______ ?", a: "books", why: "Most words simply add -s. Say the -s clearly — a listener needs it to know you mean more than one." },
      { q: "One child. Three ______ ?", a: "children", why: "This is irregular — it does not add -s. And never “childrens”, which would be a double plural." },
      { q: "One foot. Two ______ ?", a: "feet", why: "Also irregular. Learn foot/feet and tooth/teeth as pairs — there is no rule to work them out from." },
    ] },
    { title: "Guided examples 3 — this, that, these, those", sub: "Near or far? One or many?", items: [
      { q: "You are holding a pen. What do you say?", a: "This is a pen.", why: "The pen is near you and there is one, so “this”. The verb is “is”." },
      { q: "Two bags are across the room. What do you say?", a: "Those are bags.", why: "Far away and more than one, so “those” — and the verb changes to “are”." },
      { q: "Correct this: “These is my books.”", a: "These are my books.", why: "“These” is plural, so the verb must be “are”. The verb has to agree with the word before it." },
    ] },
    { title: "Guided examples 4 — there is / there are", sub: "Count first, then choose the verb.", items: [
      { q: "Complete: “______ a book on the table.”", a: "There is a book on the table.", why: "One book, so “there is”. The number of things decides the verb." },
      { q: "Complete: “______ twenty students in the class.”", a: "There are twenty students in the class.", why: "Twenty is more than one, so “there are” — and “students” takes the plural -s." },
      { q: "Correct this: “It has three windows in this room.”", a: "There are three windows in this room.", why: "English uses “there is / there are” to say what exists in a place, not “it has”. This is a direct-translation error." },
    ] },
    { title: "Guided examples 5 — describing things", sub: "Article, colour, noun — in that order.", items: [
      { q: "Describe a bag that is red.", a: "It is a red bag.", why: "The colour goes before the thing. “A bag red” is the word order from other languages, not from English." },
      { q: "Correct this: “I have a big bag red.”", a: "I have a big red bag.", why: "Both describing words come before the noun. Size usually comes before colour: a big red bag." },
      { q: "Describe three books that are green.", a: "There are three green books.", why: "Three checks at once: “there are” for plural, the colour before the noun, and the plural -s on books." },
    ] },
  ].forEach((g, i) => {
    L.answers({
      sec: Object.assign({}, SEC.gex, { label: "Guided Examples " + (i + 1) + " of 5" }),
      title: g.title, sub: g.sub, items: g.items, size: 19, notes: gexNotes(),
    });
  });

  // ============================================================ 26–30 · CONVERSATION
  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 1 of 5" }),
    title: "Talking about your family",
    sub: "Sara shows Hana a photograph.",
    turns: [
      { who: "HANA", text: "Who is this in the photograph?", side: "l" },
      { who: "SARA", text: "This is my mother. She is a farmer.", side: "r" },
      { who: "HANA", text: "And who are those two?", side: "l" },
      { who: "SARA", text: "Those are my brothers. They are students.", side: "r" },
      { who: "HANA", text: "How many people are in your family?", side: "l" },
      { who: "SARA", text: "There are six people in my family.", side: "r" },
    ],
    note: "Notice:  “This is” for one person near you  ·  “Those are” for two people further away  ·  “There are” for how many.",
    notes: tn({
      time: "12 minutes.",
      how: "Listen books closed, chorus repeat, pair reading, then perform with their own family. Step four is where it becomes theirs — a photograph or a drawing makes it real.",
      mistakes: "“Those is” and “There is six people” both appear here. Both are agreement errors from Grammar Rules 3 and 4 — this dialogue is where you check whether they landed.",
      extra: "Change the photograph to a picture of a market, a class or a football team.",
      tip: "Ask learners to bring a family photograph to the next lesson. Real photographs produce far more language than an imagined family.",
      activity: "Photograph swap: learners describe their own family to three different partners. Each time the listener asks two questions.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "At the shop — describing what you want",
    sub: "Abel is buying at a small shop in Merkato.",
    turns: [
      { who: "ABEL", text: "Good morning. I want a bag, please.", side: "l" },
      { who: "SHOPKEEPER", text: "What colour? There are black bags and brown bags.", side: "r" },
      { who: "ABEL", text: "I want a black bag. How much is it?", side: "l" },
      { who: "SHOPKEEPER", text: "It is one hundred and twenty birr.", side: "r" },
      { who: "ABEL", text: "And these two books? How much are they?", side: "l" },
      { who: "SHOPKEEPER", text: "They are forty birr. Thank you.", side: "r" },
    ],
    note: "This conversation uses everything so far: colours, plurals, this/these, prices from Module 2, and “How much is / are” from Module 2.",
    notes: tn({
      time: "12 minutes.",
      how: "After reading, ask learners to find one thing from each earlier module. They will spot the prices and the “How much are they?” — noticing recycled language is motivating.",
      mistakes: "“How much is they?” — the agreement error. Point at the correct line in the dialogue rather than explaining it again.",
      extra: "Swap the item: a shirt, a phone, shoes, a notebook. Change the colours and the prices each time.",
      tip: "Real objects and real notes make this role play far better. Ninety seconds of setup is worth it.",
      activity: "Market day: half the class are sellers with coloured objects and price cards, half are buyers. Everyone buys three things and must name the colour of each.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful phrases for describing things",
    sub: "Six phrases that let you talk about anything you can see.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 20, descSize: 15,
    items: [
      { icon: "FaQuestion", title: "“What is this?”", desc: "The answer: “It is a ___.” Ask it whenever you do not know a word." },
      { icon: "FaPalette", title: "“What colour is it?”", desc: "The answer: “It is red.” or “It is a red bag.”" },
      { icon: "FaHashtag", title: "“How many are there?”", desc: "The answer: “There are five.”" },
      { icon: "FaUsers", title: "“Who is this?”", desc: "For people. The answer: “This is my sister.”" },
      { icon: "FaComments", title: "“How do you say ___ in English?”", desc: "The most useful question for building vocabulary." },
      { icon: "FaEye", title: "“What does it mean?”", desc: "When you hear a word you do not know." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill all six in chorus, then in pairs. Phrases 5 and 6 are the vocabulary-building tools — they turn every conversation into a lesson.",
      mistakes: "“How do you say ___ in English?” is long and learners shorten it to “How to say?”. Drill the whole phrase; it is worth the effort.",
      extra: "Add “Can you show me?” and “Is this correct?” if the class is strong.",
      tip: "Make phrase 5 a class rule: nobody points and says the Amharic word. They ask the question in English instead.",
      activity: "Object bag: put ten objects in a bag. Learners take one out and must ask “How do you say this in English?” before you tell them the word.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "TEACHER", text: "______________________ this?", side: "l" },
      { who: "YOU", text: "It is ______ book.", side: "r" },
      { who: "TEACHER", text: "What ______________ is it?", side: "l" },
      { who: "YOU", text: "It is ______________.", side: "r" },
      { who: "TEACHER", text: "And how many books ______________ there on the table?", side: "l" },
      { who: "YOU", text: "There ______ five books.", side: "r" },
    ],
    note: "Use these:  “What is”  ·  “a”  ·  “colour”  ·  a colour word  ·  “are”  ·  “are”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps in writing, then three pairs perform before you reveal the answers.",
      answers: "1 What is  ·  2 a  ·  3 colour  ·  4 any colour word  ·  5 are  ·  6 are.",
      mistakes: "Gap 6 is the agreement test: five books is plural, so “There are”. Learners write “is”.",
      tip: "Have them perform holding a real book. The physical object makes “this” and “it” unambiguous.",
      activity: "Do it again with a different object and a different number.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — describe and guess", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Describe an object without naming it", d: "“It is red. It is small. It is in my bag.” Your partner guesses the word." },
      { t: "Describe a person in this room", d: "“She is a student. Her bag is black.” Your partner guesses who." },
      { t: "Describe a family member", d: "Three sentences. Your partner asks two questions." },
      { t: "Describe this room", d: "Five “there is / there are” sentences. Your partner checks the verb each time." },
    ],
    notes: tn({
      time: "8 minutes for all four rounds.",
      how: "Keep strictly to two minutes per round and announce each change loudly. Walk and listen — note errors, correct at the end.",
      mistakes: "Round 2 needs the possessives from Module 3. Expect “his bag” for a woman and correct it in the moment.",
      tip: "Round 1 is the most valuable because it forces learners to work around a word they do not know — which is exactly what real speaking demands.",
      activity: "Whole-class guessing: three learners describe an object to the room and the class guesses.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — name everything you can see", sub: "Three rounds, harder each time.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "Point and name", d: "Twenty things in this room. Just the word: “pen”, “chair”, “window”." },
      { t: "Point and say a full sentence", d: "“This is a pen.” “That is a black chair.” Twenty sentences." },
      { t: "Add a colour and a number", d: "“There are two green books on the table.” Ten sentences." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Part A is fast and builds confidence. Parts B and C are where the grammar is practised. Never stop at part A — single words are not the goal.",
      mistakes: "The missing article in part B. Correct it every time.",
      extra: "Take the class outside for two minutes if you can. A different environment forces different vocabulary and wakes everyone up.",
      tip: "Time each round and have the class try to beat their own count. Competition against themselves works better than against each other for anxious learners.",
      activity: "Object race: two learners at the front, teacher points at objects, first to name it correctly wins the point.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — describe your family", sub: "In pairs. Three minutes each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "How many people?", d: "“There are ___ people in my family.”" },
      { t: "Name three of them", d: "“This is my mother. This is my brother.”" },
      { t: "Say their jobs", d: "“She is a farmer. He is a student.” Do not forget “a”." },
      { t: "Say one thing about each", d: "“She is from Gondar.” “He is twenty years old.”" },
      { t: "Your partner asks two questions", d: "“How old is your brother?” “Where is your mother from?”" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Model it first with your own family, all five steps, in ninety seconds. Then pairs. Then two learners report their partner's family to the class.",
      mistakes: "He/she errors are guaranteed here because every family word is gendered. That is exactly why this activity is valuable — it surfaces the error so you can fix it.",
      extra: "Add: “Do you have brothers or sisters?” for classes that are moving fast.",
      tip: "Be sensitive: family situations vary and some learners have lost family members. Say “Tell me about the people in your family” rather than asking about parents specifically.",
      activity: "Report back: learners describe their PARTNER's family, which forces third-person pronouns throughout.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the plural -s ending",
    sub: "The -s at the end has two sounds. Both are correct — it depends on the word before it.",
    left: { h: "/s/ — after a quiet sound", items: ["books  /bʊks/", "cats  /kæts/", "shops  /ʃɒps/", "hats  /hæts/"] },
    right: { h: "/z/ — after a noisy sound", items: ["pens  /penz/", "dogs  /dɒɡz/", "bags  /bæɡz/", "eyes  /aɪz/"] },
    note: "Do not worry about which is which — your mouth will choose correctly if you say the word naturally. What matters is that the -s is THERE and can be heard.",
    notes: tn({
      time: "9 minutes.",
      how: "Say four pairs and let learners hear the two endings. Then make the real point: the difference between /s/ and /z/ does not matter much, but a MISSING -s does. Focus the drill on presence, not on which sound.",
      mistakes: "Dropping the -s completely is the error. Because it is at the end of a word, learners do not notice it is gone and listeners do.",
      extra: "Words ending in ch, sh, s, x add a whole extra syllable: watches, dishes, buses, boxes. Drill those three separately.",
      tip: "Ask learners to exaggerate the -s for a week. Over-pronouncing it now produces normal pronunciation later; under-pronouncing produces nothing.",
      activity: "Plural relay: teacher says a singular noun, learner says the plural with a clear -s. Thirty rounds in two minutes.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — describe a picture", sub: "The most useful speaking skill at this level.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say what you can see", d: "“There is a woman. There are two children.”" },
      { t: "Add colours", d: "“She has a blue dress. The bag is brown.”" },
      { t: "Add numbers", d: "“There are three chairs and one table.”" },
      { t: "Say one thing about a person", d: "“She is a teacher. He is a student.”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Use any picture: a market scene, a classroom, a family photograph, a page from a newspaper. Model six sentences yourself first, then hand over.",
      mistakes: "Learners produce single words. Insist on full sentences — the frame “There is / There are” makes that possible for everyone.",
      extra: "For a strong class add: “What is the weather in the picture?” and “What time of day is it?”",
      tip: "Picture description is the single best assessment task at Level 1: it generates fifteen sentences in five minutes and recycles every topic in the module.",
      activity: "No repeats: go around the class and each learner must say one sentence about the picture that nobody has said yet. That forces new vocabulary out of everyone.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "60 seconds. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Name five things around you", d: "“This is a ___.” Full sentences." },
      { t: "Describe three of them with colours", d: "“It is a red bag.”" },
      { t: "Say how many people are in your family", d: "“There are ___ people in my family.”" },
      { t: "Describe two family members", d: "Name, relationship and job. Check he and she." },
      { t: "Say what the weather is like today", d: "“It is hot today.” or “It is raining.”" },
    ],
    notes: tn({
      time: "12 minutes including listening back.",
      how: "Record on a phone, or perform live to a partner who ticks the five steps. Sixty seconds is short enough that nobody can refuse.",
      mistakes: "Step 4 is where he/she and the missing article both appear. That is what you are assessing.",
      answers: "SUCCESS CRITERIA: all five steps present · an article before every noun · colour before the noun · correct he or she in step 4 · a listener can draw what is being described.",
      tip: "Ask a partner to draw what they hear in steps 1 and 2. If the drawing matches, the description worked — which is a far better test than marking words.",
      activity: "Keep every recording for the end-of-level comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — what is in the bag?", sub: "Listen twice. Write what you hear.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 18, lsm: 1.4,
      text: "“In my bag there is a red book.\nThere are two black pens.\nThere is a blue bottle of water.\nThere are three white papers.\nAnd there is one small brown bag inside!”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write each thing and its colour.",
      "Write how many there are of each.",
      "Then draw the bag and everything in it.",
      "The teacher reads it twice, slowly.",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Read it twice at a natural pace. The drawing task is not decoration — it proves comprehension in a way that writing words does not, and it works for learners whose writing is still weak.",
      mistakes: "Learners catch the noun but miss the colour or the number. Tell them in advance that all three matter.",
      extra: "Add two more items if the class is strong: “There are four green pencils” and “There is a yellow phone.”",
      answers: "1 red book (1) · 2 black pens (2) · 3 blue bottle of water (1) · 4 white papers (3) · 5 small brown bag (1)",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check the number, the colour and the plural -s.",
    size: 17,
    items: [
      { q: "1 — “a red book”", a: "one red book", why: "“There is” tells you it is singular before you even hear the noun. The colour comes before the thing." },
      { q: "2 — “two black pens”", a: "two black pens", why: "“There are” signals plural, and “pens” has the -s. Both clues point the same way." },
      { q: "3 — “a blue bottle of water”", a: "one blue bottle of water", why: "The bottle is countable; the water is not. That is why it is “a bottle of water”, never “a water”." },
      { q: "4 — “three white papers”", a: "three white papers", why: "Here “papers” means separate sheets, so it takes the plural. Paper as a material is uncountable." },
      { q: "5 — “one small brown bag”", a: "one small brown bag", why: "Two describing words before the noun: size first, then colour — a small brown bag, not a brown small bag." },
    ],
    notes: keyNotes("If learners caught the nouns but missed the colours, the problem is listening stamina, not vocabulary. Replay the recording and have them listen only for colours the second time."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — Mimi's family", sub: "Listen twice, then answer the questions.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17.5, lsm: 1.38,
      text: "“There are five people in my family.\nMy father is a driver. He is fifty years old.\nMy mother is a teacher. She is from Jimma.\nI have one brother and one sister.\nMy brother is a student and my sister is a nurse.”" },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. How many people are in the family?",
      "2. What is the father's job?",
      "3. Where is the mother from?",
      "4. How many brothers and sisters are there?",
      "5. What is the sister's job?",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Read the whole text twice. Then read the questions aloud before learners write, so nobody is held up by reading.",
      mistakes: "Question 4 requires holding two facts at once. Learners answer “one” instead of “one brother and one sister”.",
      extra: "Add a sixth question: “How old is the father?” — it recycles the numbers from Module 2.",
      answers: "1 There are five. · 2 He is a driver. · 3 She is from Jimma. · 4 One brother and one sister. · 5 She is a nurse.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Full sentences. Correct pronouns. Articles before jobs.",
    size: 17,
    items: [
      { q: "1 — How many people?", a: "There are five people in the family.", why: "“There are” for a plural number. “People” is the irregular plural of “person”." },
      { q: "2 — The father's job", a: "He is a driver.", why: "“He” for a man, and “a” before the job. Both are errors waiting to happen." },
      { q: "3 — Where is the mother from?", a: "She is from Jimma.", why: "“She” for a woman, and Jimma takes a capital letter as a place name." },
      { q: "4 — Brothers and sisters", a: "There is one brother and one sister.", why: "Two facts in one answer. A complete answer gives both, not just the first one you heard." },
      { q: "5 — The sister's job", a: "She is a nurse.", why: "“She” because a sister is a woman. This is the pronoun error that persists longest." },
    ],
    notes: keyNotes("Questions 2 and 5 test the same two things — pronoun and article. If learners got one right and one wrong, they are guessing. Drill both before the practice exercises."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to learn vocabulary that lasts", sub: "Four habits. The difference between recognising a word and owning it.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaVolumeUp", title: "Say it, do not just read it", desc: "A word you have only seen is not learned. A word you have said ten times out loud is." },
      { icon: "FaUser", title: "Use it about your own life", desc: "“My mother is a farmer” sticks. “The woman is a farmer” does not. Your own life is the strongest memory hook there is." },
      { icon: "FaRedo", title: "Come back to it tomorrow", desc: "Ten words reviewed on five days beat fifty words read once. Spacing is what moves words into long-term memory." },
      { icon: "FaLayerGroup", title: "Learn words in groups", desc: "Eight family words together are easier than eight unrelated words. Your memory stores them as one set." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Read each habit and ask which one learners already do. Most do none of them — they write lists and read them silently. Say plainly that this is the least effective method available.",
      mistakes: "The long-list-read-silently strategy feels like work and produces almost nothing. Naming that directly saves learners months.",
      tip: "Give every learner a small notebook for vocabulary: word, a sentence about their own life, and the date. Check it every week.",
      activity: "Ten-word test: give the class ten words at the start of a lesson and test them at the end of the week. Learners see for themselves which method worked.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — my classroom", sub: "Read it aloud twice before you answer.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 21, lsm: 1.45,
      text: "This is my classroom.\nThere are twenty students here.\nThere is one teacher.\nThere are four windows and one door.\nThe door is brown. The windows are white.\nMy bag is under the table." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the whole text once.",
      "The class reads it together, in chorus.",
      "Then six learners read one line each.",
      "Find every “there is” and every “there are”. Why is each one used?",
    ] },
    notes: tn({
      time: "9 minutes.",
      how: "Teacher, chorus, individuals. Then the finding task, which turns reading into active noticing of the module's grammar.",
      mistakes: "Learners read “there are” as “there is” because they are used to the singular. Have the class read those lines twice.",
      extra: "New word here: “under”. Teach it by putting a bag under a table. Add “on” and “in” the same way.",
      tip: "Then have learners count the real windows and doors in your actual classroom and correct the text to match. Making the text true makes it memorable.",
      activity: "Rewrite it: learners write six sentences about the real room, with the real numbers and colours.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE, using “There is” or “There are”.",
    items: [
      "How many students are in the classroom?",
      "How many teachers are there?",
      "What colour is the door?",
      "How many windows are there?",
      "Where is the bag?",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Insist on full sentences with the correct form of “there is / there are”. That is what is being assessed, not the numbers.",
      mistakes: "Question 2 has the answer “one”, so it needs “There is”. Learners use “There are” because they have been drilling it.",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 There are twenty students. · 2 There is one teacher. · 3 The door is brown. · 4 There are four windows. · 5 The bag is under the table.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Check the verb agreement in every answer.",
    size: 17,
    items: [
      { q: "1 — How many students?", a: "There are twenty students.", why: "Twenty is more than one, so “there are”, and “students” takes the plural -s." },
      { q: "2 — How many teachers?", a: "There is one teacher.", why: "One teacher, so “there is” and no plural -s. This is the item most learners get wrong." },
      { q: "3 — What colour is the door?", a: "The door is brown.", why: "Here the colour comes AFTER the verb “is”. Before a noun it goes first: “a brown door”." },
      { q: "4 — How many windows?", a: "There are four windows.", why: "Plural number, plural verb, plural noun — all three agree." },
      { q: "5 — Where is the bag?", a: "The bag is under the table.", why: "“Under” tells you the position. The other position words are “on” and “in”." },
    ],
    notes: keyNotes("Question 2 is the diagnostic. A learner who wrote “There are one teacher” is applying the plural form automatically without checking the number."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — market day", sub: "A longer text. Read it aloud twice.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 19.5, lsm: 1.38,
      text: "On Saturday my mother goes to the market.\nThere are many people there.\nShe buys food for the family.\nToday she has two kilos of onions, three tomatoes and one big bag of rice.\nThe tomatoes are red and the onions are brown.\nIt is hot, so she buys a bottle of water too." },
    side: { label: "New words here", color: C.read, size: 16, items: [
      "market — where people buy and sell",
      "many — a large number",
      "buys — gets something with money",
      "kilo — a weight, from Module 2",
      "Find the four colours and the three numbers.",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Teacher, chorus, individuals. Teach the four new words with gesture and example. “Many” is best taught by contrast: one, two, three… many.",
      mistakes: "“Buys” has a third-person -s that learners have not formally met — it comes in Level 2. Do not explain it here; let them read it as a whole word.",
      extra: "The text uses “so” to join two ideas. Do not explain it — the meaning is clear from context, which is how function words should first be met.",
      tip: "This text recycles Module 2 (kilos, numbers) and Module 3 (she) inside Module 4 vocabulary. Point that out — learners are motivated by seeing old language reappear.",
      activity: "Learners write five sentences about a real market visit, using at least three colours and two numbers.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — questions, answers and vocabulary review", sub: "Answer first, then check.",
    size: 17,
    items: [
      { q: "1 — Which day does she go to the market?", a: "She goes on Saturday.", why: "ON for a day, from Module 2, and Saturday takes a capital letter." },
      { q: "2 — What does she buy?", a: "She buys onions, tomatoes and rice.", why: "Three things. Note that “rice” has no plural -s — it is one of the uncountable food words." },
      { q: "3 — What colour are the tomatoes?", a: "They are red.", why: "“They” because tomatoes are plural, and the verb changes to “are” to match." },
      { q: "4 — Why does she buy water?", a: "Because it is hot.", why: "The word “so” in the text shows the reason. When you answer a why question, use “because”." },
      { q: "5 — Vocabulary check: name the five words from this module.", a: "mother · red · water · teacher · hot", why: "All five appeared in this module. Four of them are in this text — find them again." },
    ],
    notes: keyNotes("Question 4 is inference plus a new word. Learners will answer “It is hot” without “because” — accept it, then model the fuller answer."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — a or an, and plurals", sub: "Write the correct form.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write “a” or “an”, then write the plural of each word.",
    items: [
      "1.  ___ pen        →  two ______",
      "2.  ___ apple      →  three ______",
      "3.  ___ child      →  five ______",
      "4.  ___ engineer   →  two ______",
      "5.  ___ watch      →  four ______",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Do item 1 together on the board, then let them work alone. Say each word aloud before choosing the article — the rule is about sound, not spelling.",
      answers: "1 a pen → two pens · 2 an apple → three apples · 3 a child → five children · 4 an engineer → two engineers · 5 a watch → four watches",
      mistakes: "Item 3 is the irregular plural and item 5 needs -es. Both catch learners who apply the simple -s rule everywhere.",
      tip: "Item 4 is the article trap: most job words take “a”, so “an engineer” feels wrong until they say it aloud.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — describe your family", sub: "Copy the frame. Fill in your own information.",
    panelW: 7.6,
    panel: { label: "Copy this frame and complete it", color: C.write, tint: C.writeTint, size: 21, lsm: 1.6,
      text: "There are ______ people in my family.\nThis is my ______________.\nHe / She is a ______________.\nHe / She is from ______________.\nMy favourite colour is ______________." },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Is it “There is” or “There are”? Count first.",
      "Did you choose the right one — he or she?",
      "Is there “a” or “an” before the job?",
      "Capital letters on names and places?",
      "A full stop at the end of every sentence?",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Write your own completed example on the board and leave it there. Beginners need a model in front of them.",
      mistakes: "The he/she choice in lines 3 and 4 must match line 2. Learners write “my mother” and then “he”.",
      extra: "Fast finishers add two more family members with the same three lines each.",
      tip: "Collect these and keep them for the end-of-level comparison.",
      activity: "Learners swap papers and mark their partner's work against the five checks.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — describe what you see", sub: "Look around this room and write.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write ONE full sentence for each. Check your four points.",
    items: [
      "1.  Write a sentence with “There is” about this room.",
      "2.  Write a sentence with “There are” about this room.",
      "3.  Write a sentence describing something with a colour.",
      "4.  Write a sentence using “this” and one using “those”.",
      "5.  Write a sentence about the weather today.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Do the first one together, then let them work alone. Circulate and check the verb agreement as they write.",
      mistakes: "Item 4 asks for two sentences — learners write one. Read the instruction aloud twice.",
      answers: "MODEL ANSWERS: 1 There is one door in this room. · 2 There are four windows. · 3 My bag is black. / This is a black bag. · 4 This is my pen. Those are their books. · 5 It is hot today.",
      tip: "Correct only the module's four points and the earlier eleven. Correcting everything discourages beginners into silence.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answers and why", sub: "Your sentences will be different. Check the rules, not the words.",
    size: 17,
    items: [
      { q: "1 — a “There is” sentence", a: "There is one door in this room.", why: "One thing, so “there is”, with no plural -s on “door”." },
      { q: "2 — a “There are” sentence", a: "There are four windows.", why: "More than one, so “there are”, and the noun takes the plural -s." },
      { q: "3 — describing with a colour", a: "This is a black bag.", why: "Article, then colour, then noun — in that order every time." },
      { q: "4 — “this” and “those”", a: "This is my pen. Those are their books.", why: "“This is” for one thing near you; “those are” for several things further away. The verb changes with the word." },
      { q: "5 — the weather", a: "It is hot today.", why: "English needs the subject “it” for weather. “Is hot today” has no subject and is not a sentence." },
    ],
    notes: keyNotes("Item 5 is the dummy-subject error and it is worth naming out loud: English always needs a subject, even when there is nothing real to name."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist for this module", sub: "Add these to the checks from Modules 1 to 3.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "Is there an article — a or an — before the noun?", d: "“I have a pen.” — not “I have pen.” Use “an” before a vowel sound." },
      { t: "Is the plural -s there where it belongs?", d: "“three books”, not “three book”. And never on rice, water, bread or money." },
      { t: "Does the verb match the number?", d: "There IS one book. There ARE two books. This IS. These ARE." },
      { t: "Is the colour before the thing?", d: "“a red bag” — not “a bag red”." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points, then have learners check their own writing from the previous slide against all four.",
      tip: "The wall now has fifteen checks across four modules. Refer to them by number when marking — it makes feedback fast and objective.",
      activity: "Deliberate error hunt: write four sentences on the board with exactly four errors, one of each type.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Which is correct?", opts: "a) a apple     b) an apple     c) apple" },
      { q: "2. One child, three ______", opts: "a) childs     b) childrens     c) children" },
      { q: "3. Complete: “______ two books on the table.”", opts: "a) There is     b) There are     c) It has" },
      { q: "4. Which is correct?", opts: "a) a bag red     b) a red bag     c) red a bag" },
      { q: "5. Your mother's sister is your …", opts: "a) uncle     b) aunt     c) daughter" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 c · 3 b · 4 b · 5 b",
      tip: "Question 4 is the word-order diagnostic. A learner choosing a) has transferred the pattern from their first language.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Write the missing word.",
    color: C.green, instruction: "Copy each sentence and fill the gap.", size: 18,
    items: [
      "1.  I have ___ egg for breakfast.",
      "2.  There ______ five students in the class.",
      "3.  My mother is ___ teacher.",
      "4.  ______ are my books.  (they are near me)",
      "5.  It is ______ today, so I want water.",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Items 1 and 3 test the article, item 2 the verb agreement, item 4 this/these, item 5 the module vocabulary.",
      answers: "1 an · 2 are · 3 a · 4 These · 5 hot",
      mistakes: "Item 4 needs a capital T because it starts the sentence, and “These” not “This” because “books” is plural.",
      tip: "Item 1 catches learners who look at the letter instead of listening to the sound.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Match the word to its topic, and the singular to the plural.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the WORD to its TOPIC", opts: "1. donkey     2. uncle     3. injera     4. nurse          a) family     b) job     c) animal     d) food" },
      { q: "Part 2 — match the SINGULAR to the PLURAL", opts: "1. man     2. foot     3. baby     4. bus          a) buses     b) feet     c) babies     d) men" },
      { q: "Part 3 — match the QUESTION to the ANSWER", opts: "1. What colour is it?     2. How many are there?     3. Who is this?     4. What is this?" },
      { q: "a) There are six.        b) It is a pen.", opts: "c) It is green.        d) This is my sister." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks, three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–c, 2–a, 3–d, 4–b.  ·  Part 2: 1–d, 2–b, 3–c, 4–a.  ·  Part 3: 1–c, 2–a, 3–d, 4–b.",
      tip: "Part 2 mixes all four plural patterns. A learner who gets all four has understood the whole rule.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — sort them into groups", sub: "Which topic does each word belong to?",
    color: C.green, instruction: "Write the words in four groups: FAMILY · FOOD · ANIMALS · JOBS", size: 18,
    items: [
      "1.  brother · goat · rice · driver",
      "2.  milk · sister · cow · nurse",
      "3.  farmer · bread · uncle · donkey",
      "4.  hen · teacher · meat · grandmother",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Sorting is a strong vocabulary activity because it forces learners to think about meaning rather than translation. Let pairs do it and then compare with another pair.",
      answers: "FAMILY: brother, sister, uncle, grandmother · FOOD: rice, milk, bread, meat · ANIMALS: goat, cow, donkey, hen · JOBS: driver, nurse, farmer, teacher",
      tip: "Grouping words is exactly how memory stores them, so this exercise is also teaching a study method. Say that out loud.",
      activity: "Add one more word to each group from your own knowledge. Fast finishers add three.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each sentence has one or more errors.",
    color: C.green, instruction: "Rewrite each sentence correctly.", size: 18,
    items: [
      "1.  I have a apple and a egg.",
      "2.  There is three chairs in the room.",
      "3.  My sister, he is a nurse.",
      "4.  This is a bag red.",
      "5.  I have two childrens.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each sentence. Sentence 1 has two.",
      answers: "1 I have an apple and an egg. (both need “an”) · 2 There are three chairs in the room. · 3 My sister, she is a nurse. · 4 This is a red bag. · 5 I have two children.",
      mistakes: "Sentence 5 is the double plural. “Children” is already plural, so adding -s is wrong twice over.",
      tip: "Have learners count the errors before correcting. Counting forces careful reading.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  We say “an” before a vowel sound.",
      "2.  The plural of “child” is “childs”.",
      "3.  In English the colour comes before the thing.",
      "4.  We say “There is” for more than one thing.",
      "5.  “Water” and “rice” never take -s.",
      "6.  Your father's brother is your uncle.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test.",
      answers: "1 T · 2 F — it is “children” · 3 T · 4 F — “There is” is for one thing; use “There are” for more than one · 5 T · 6 T",
      tip: "Item 4 is the agreement rule. If several learners get it wrong, redo the counting drill from slide 19.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Answer in a full sentence.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  How many people are in your family?",
      "2.  What is your favourite colour?",
      "3.  What is your mother's or father's job?",
      "4.  How many windows are there in this room?",
      "5.  What is the weather like today?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Every answer is personal except item 4. Personal answers are remembered; invented ones are not.",
      answers: "1 There are ___ people in my family. · 2 My favourite colour is ___. · 3 He/She is a ___. · 4 There are ___ windows. · 5 It is ___ today.",
      mistakes: "Item 3 needs both the right pronoun and the article. Both are the module's target errors.",
      tip: "Ask three learners to read their answers aloud. Real classmates' answers are more useful than model sentences.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Name ten things you can see, in full sentences.",
      "2.  Describe five things using a colour each time.",
      "3.  Describe your family in four sentences.",
      "4.  Describe this room using “there is” and “there are” — five sentences.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Give each partner a listening job: for task 2 they check the colour comes before the noun; for task 4 they check the verb agreement.",
      answers: "SUCCESS CRITERIA: 1 ten full sentences with articles · 2 colour before noun each time · 3 correct he/she and articles · 4 correct is/are for each number.",
      tip: "Task 4 is the assessment moment for the module's main grammar. Listen to as many pairs as you can.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These use everything from this module.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write five sentences describing this room. Use “there is” at least once and “there are” at least twice.", opts: "Count before you choose the verb." },
      { q: "2. Correct this and explain each change:  “There is two childrens. They have a apple and a orange.”", opts: "There are five things to fix." },
      { q: "3. Write four sentences about your family, using he, she, his and her at least once each.", opts: "Check every pronoun against the person." },
      { q: "4. Which of these never take -s?  book · water · child · rice · pen · money", opts: "Three of the six." },
      { q: "5. Describe one person in this room without saying their name. Use three sentences.", opts: "Colour, job, and one more fact." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard.",
      answers: "1 any five correct sentences · 2 “There are two children. They have an apple and an orange.” — “are” for plural, “children” not “childrens”, and “an” twice · 3 four correct sentences with matching pronouns · 4 water, rice and money · 5 any three correct sentences",
      tip: "Question 2 stacks five errors in two short sentences, which is much harder than one at a time. That is deliberate.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why do we say “an apple” but “a university”, when both start with a vowel letter?", opts: "Say both words aloud and listen." },
      { q: "2. Why is “I have two waters” wrong, but “I have two bottles of water” correct?", opts: "What can you count and what can you not?" },
      { q: "3. Your friend writes “a bag red”. How would you explain the mistake so they remember it?", opts: "How would you teach it?" },
      { q: "4. Which learns ten words better — writing them fifty times, or using each in a sentence about your life?", opts: "Why? Think about which you would still remember next month." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning if needed, then give the English phrase for what they said.",
      answers: "1 The rule is about SOUND, not the letter. “University” starts with a “yoo” sound, which is a consonant sound. 2 Water cannot be counted, but bottles can — so you count the container, not the liquid. 3 Any clear explanation; the strongest says the describing word always comes first in English and drills five examples aloud. 4 Using each word in a personal sentence, because meaning and personal connection are what memory stores — copying is mechanical and fades within days.",
      tip: "Question 4 is really about study method and it will change how some learners work. Give it real time.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Vocabulary", items: [
      { q: "1. Your father's sister is your …", opts: "a) aunt     b) uncle     c) cousin" },
      { q: "2. Which one is NOT a colour?", opts: "a) brown     b) grey     c) goat" },
      { q: "3. Which one is a job?", opts: "a) injera     b) engineer     c) elbow" },
      { q: "4. Write four words for parts of the body.", opts: "Any four." },
    ] },
    { part: "Part 2 · Articles and plurals", items: [
      { q: "5. Complete: “I want ___ orange.”", opts: "a) a     b) an     c) nothing" },
      { q: "6. The plural of “woman” is …", opts: "a) womans     b) women     c) womens" },
      { q: "7. Which word never takes -s?", opts: "a) book     b) rice     c) pen" },
      { q: "8. Write the plural: one bus → three ______", opts: "Careful with this one." },
    ] },
    { part: "Part 3 · There is / there are, this / these", items: [
      { q: "9. Complete: “______ six students in the class.”", opts: "a) There is     b) There are     c) It has" },
      { q: "10. Complete: “______ is my pen.”  (it is in my hand)", opts: "a) This     b) These     c) Those" },
      { q: "11. Correct this: “These is my books.”", opts: "Write the whole sentence." },
      { q: "12. Write one sentence about this room using “There is”.", opts: "Count first." },
    ] },
    { part: "Part 4 · Describing and listening", items: [
      { q: "13. Which is correct?", opts: "a) a shirt white     b) a white shirt     c) white a shirt" },
      { q: "14. Listen: what is in the bag, and what colour is it?", opts: "Write both." },
      { q: "15. Listen: how many are there?", opts: "Write the number." },
      { q: "16. Write a sentence about the weather today.", opts: "Do not forget the subject." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write two sentences about your family.", opts: "Check he/she and the articles." },
      { q: "18. Write a sentence with a number, a colour and a noun.", opts: "In the right order." },
      { q: "19. Sort into two groups:  cow · nurse · goat · driver · hen · teacher", opts: "Animals and jobs." },
      { q: "20. SPEAKING: describe this room in five sentences.", opts: "Your teacher or partner listens and checks." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 4 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nFOR QUESTIONS 14 AND 15, READ ALOUD: “In my bag there are three green books and one red pen.”",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — father's sister", a: "a) aunt", why: "Aunt is female, uncle is male. Learn them as a pair, like mother and father." },
      { q: "Q2 — not a colour", a: "c) goat", why: "A goat is an animal. Brown and grey are both colours." },
      { q: "Q3 — which is a job", a: "b) engineer", why: "Injera is food and elbow is a body part. Note that “engineer” takes “an”, not “a”." },
      { q: "Q4 — four body parts", a: "e.g. head · hand · leg · eye", why: "Any four from the topic list. Check the spelling, especially “eye”, which has three letters and one sound." } ],
    [ { q: "Q5 — “I want ___ orange.”", a: "b) an", why: "“Orange” starts with a vowel sound, so it takes “an”. Say it aloud and the two words run together." },
      { q: "Q6 — plural of “woman”", a: "b) women", why: "Irregular — the vowel changes and no -s is added. Never “womans” or “womens”." },
      { q: "Q7 — never takes -s", a: "b) rice", why: "Rice is uncountable, like water, bread, milk and money. Books and pens are countable." },
      { q: "Q8 — one bus → three ______", a: "buses", why: "Words ending in s, ch, sh or x add -es, which also adds a whole extra syllable when you say it." } ],
    [ { q: "Q9 — “______ six students.”", a: "b) There are", why: "Six is more than one, so “there are”. “It has” is a direct-translation error." },
      { q: "Q10 — “______ is my pen.”", a: "a) This", why: "One thing, near you, so “this”. “These” and “those” are both plural." },
      { q: "Q11 — correct “These is my books.”", a: "These are my books.", why: "“These” is plural, so the verb must be “are”. The verb agrees with the word before it." },
      { q: "Q12 — a “There is” sentence", a: "e.g. “There is one door in this room.”", why: "Any sentence is correct if the thing is singular and the verb matches it." } ],
    [ { q: "Q13 — which is correct?", a: "b) a white shirt", why: "The colour comes before the thing in English. “A shirt white” is the word order from other languages." },
      { q: "Q14 — what is in the bag?", a: "Three green books and one red pen.", why: "Both the colour and the noun are needed. The colour comes first in each phrase." },
      { q: "Q15 — how many?", a: "Three books and one pen — four things in total.", why: "“There are three” and “one red pen” — you have to hold both numbers to answer fully." },
      { q: "Q16 — the weather", a: "e.g. “It is hot today.”", why: "English needs the subject “it” for weather. “Is hot today” has no subject and is not a sentence." } ],
    [ { q: "Q17 — two sentences about your family", a: "e.g. “This is my mother. She is a farmer.”", why: "Marked on the pronoun matching the person and the article before the job." },
      { q: "Q18 — number, colour and noun", a: "e.g. “There are two black pens.”", why: "Number, then colour, then the noun with its plural -s — three rules in one short sentence." },
      { q: "Q19 — sort into two groups", a: "Animals: cow, goat, hen  ·  Jobs: nurse, driver, teacher", why: "Sorting by meaning is how your memory stores vocabulary — in groups, not in lists." },
      { q: "Q20 — speaking task", a: "Five sentences describing the room", why: "Marked on correct is/are agreement, an article before each noun, and being understood by a listener." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q9, Q11 and Q13 are the diagnostic questions. Q9 and Q11 show whether verb agreement has landed; Q13 shows whether the adjective word order is fixed. If the class failed those, drill them before Module 5."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "One topic each day. Ten minutes.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Family", d: "Say the eight family words. Then say one true sentence about each of three family members." },
      { t: "Colours and things", d: "Find ten objects at home. Say “This is a ___ ___.” with the colour." },
      { t: "Food and drink", d: "Name everything you eat and drink today, in English. Write the ones you do not know." },
      { t: "The body and jobs", d: "Touch and name eight body parts. Then name the jobs of five people you know." },
      { t: "Weather", d: "Say one sentence about the weather every morning this week." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "One topic per day is what makes this module manageable. Write it on the board as well as the slide.",
      tip: "Wednesday's task creates a personal vocabulary list from the learner's own life, which is far more valuable than any list you could give them. Collect those lists and teach from them.",
      activity: "Ask learners to photograph five objects at home and label them in English.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write forty words in four groups", d: "Ten family · ten food · ten jobs · ten colours and weather. Check the spelling." },
      { t: "Write eight sentences about your family", d: "Use “There are ___ people…”, then two sentences about each of three people. Check your fifteen points." },
      { t: "Record your 60-second speaking challenge", d: "Five objects · three colours · your family size · two family members · the weather. Send it, or perform it live." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Show your own completed example of task 2. Task 3 is required — the recording is the main assessment of this module.",
      mistakes: "Task 1 is long. Tell learners to do ten words a day rather than forty on Sunday.",
      tip: "Reply to every recording personally, by voice, within two days. Listen for the articles and the pronouns.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaCheck", title: "Forty words — 5 marks", desc: "Ten in each group (2) · spelling correct (2) · grouped correctly (1)." },
      { icon: "FaPencilAlt", title: "Eight sentences — 10 marks", desc: "Eight written (3) · correct he/she throughout (3) · article before every job (2) · correct is/are (2)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five steps (4) · articles used (2) · colour before noun (2) · correct he/she (2)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework, not after.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Mark only what has been taught in Modules 1 to 4.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaLayerGroup", title: "Eight topics of vocabulary", desc: "Family · colours · animals · food · school · body · jobs · weather." },
      { icon: "FaSitemap", title: "a and an", desc: "“An” before a vowel SOUND. The rule is about sound, not spelling." },
      { icon: "FaHashtag", title: "Plurals", desc: "Add -s · add -es · change -y to -ies · and six irregulars to memorise." },
      { icon: "FaEye", title: "this · that · these · those", desc: "Near or far, one or many — and the verb changes with them." },
      { icon: "FaUsers", title: "There is / There are", desc: "How to say what exists in a place. Count first, then choose the verb." },
      { icon: "FaPalette", title: "Describing things", desc: "Article, then size, then colour, then the noun: a big red bag." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2 and read the objectives again. Ask the same question you asked at the start.",
      tip: "Ask each learner which of the eight topics they found hardest. Re-teach that one at the start of Module 5.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaLanguage", title: "The five words", desc: "mother  /ˈmʌðə/     ·     red  /red/\nwater  /ˈwɔːtə/     ·     teacher  /ˈtiːtʃə/\nhot  /hɒt/" },
      { icon: "FaSitemap", title: "The plural rules", desc: "Most: + s  →  books\nch, sh, s, x: + es  →  buses\nconsonant + y: → ies  →  babies\nIrregular: men · women · children · feet · teeth · people" },
      { icon: "FaUsers", title: "There is / There are", desc: "There IS one book on the table.\nThere ARE five books on the table.\nCount first, then choose the verb." },
      { icon: "FaPalette", title: "Word order for describing", desc: "a  +  big  +  red  +  bag\narticle · size · colour · thing\nNever “a bag red”." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it.",
      tip: "Print it as an A4 poster beside the posters from Modules 1 to 3.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now describe your family, your room and the things around you — in English.",
    sub: "Over two hundred words, and the grammar to put them into sentences.\nFour modules ago you could not read an English word. Now you can talk about your own life.",
    chips: ["NEXT — Module 5", "Simple Sentences", "Put the words in the right order and build your own sentences"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the achievement specifically: over two hundred words, plus articles, plurals and “there is / there are”. Specific praise is believable; general praise is not.",
      tip: "Point out that Module 5 needs almost no new vocabulary — it teaches them to use what they already have. That is a genuine relief after this module.",
      activity: "Ask every learner to say one sentence describing something in the room before they leave.",
    }),
  });
};
