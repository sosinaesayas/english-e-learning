"use strict";
/* LEVEL 2 · MODULE 8 — Writing Everyday Texts   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 2", levelNo: LV.no, levelName: "Elementary\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Writing Everyday Texts",
    sub: "The last module of Level 2. Messages, notes, forms — and your first real paragraph in English.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "END OF", v: "LEVEL 2" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by saying this is the final module of Level 2. Everything learned in Modules 1–7 gets written down here. Nothing new is added — it is put together.",
      tip: "Learners write far less English than they speak or read, so they are less confident here. Say that writing is the easiest skill to improve, because you have time to think and time to correct.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all of them useful the day you leave this room.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Write a clear message or note", d: "Greeting, purpose, close. Three parts, every time." },
      { t: "Use capital letters, full stops and commas correctly", d: "The three marks that make writing readable." },
      { t: "Join short sentences into longer ones", d: "and · but · because · so. Your writing stops sounding like a child's." },
      { t: "Fill in a form in English", d: "Name, date of birth, address, signature — and what each word means." },
      { t: "Write a paragraph of 100–150 words", d: "One idea, a topic sentence, details, and a closing line." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 5 is the big one and the end-of-level test. Say so now so learners know what they are building towards.",
      tip: "Objective 4 is the most immediately practical. Forms in English appear at banks, schools, clinics and every job application.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what do you write?", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaMobileAlt", title: "1 · In one week", desc: "What do you write in one week? Messages? Notes? Lists? Nothing? Count them." },
      { icon: "FaPen", title: "2 · In English?", desc: "Have you ever written anything in English outside a classroom? What was it?" },
      { icon: "FaQuestion", title: "3 · What stops you?", desc: "What is hardest about writing English? Spelling? Grammar? Not knowing where to start?" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Task 3 is the diagnostic. Most learners say “I do not know where to start”, which is a structure problem, not a language problem — and structure is what this module gives them.",
      mistakes: "Correct nothing in the warm-up.",
      tip: "Write task 3 answers on the board and return to them in the summary.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Good writing is not long words. It is short sentences that a stranger can understand.",
    sub: "Everything you need is already in Modules 1 to 7.\nThis module gives you the SHAPE — where to put it on the page, and how to join it together.",
    chips: ["One idea per sentence", "One topic per paragraph", "Always read it back"],
    notes: tn({
      time: "5 minutes.",
      how: "Write one long confusing sentence on the board, then the same content as three short ones. Ask which is better English. Learners always assume the long one — say clearly that it is not.",
      mistakes: "Learners believe good English means complicated English. The opposite is true, and believing otherwise makes them write sentences they cannot control.",
      tip: "The third chip is the whole quality-control system. Reading your own writing back catches most errors before anybody else sees them.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.grid({
    sec: SEC.con, title: "Sentence · paragraph · text", sub: "Three sizes. Each one has a rule.",
    cols: 3, color: C.green, titleSize: 21, descSize: 16, shadow: true, tint: C.white,
    items: [
      { icon: "FaAlignLeft", title: "1 · SENTENCE", desc: "ONE idea.\n\nStarts with a CAPITAL letter.\nEnds with a FULL STOP.\nHas a subject and a verb.\n\n“Sara works in a shop.”" },
      { icon: "FaParagraph", title: "2 · PARAGRAPH", desc: "ONE topic.\n\n4 to 8 sentences.\nStarts with a topic sentence.\nLeave a blank line before the next one.\n\n100–150 words." },
      { icon: "FaFileAlt", title: "3 · TEXT", desc: "The whole thing.\n\nA message, a note, a letter, a form.\nMay be one paragraph or several.\n\nEach one has its own shape." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Show a real paragraph on the board and physically point at the capital, the full stop, the topic sentence and the blank line. Structure must be seen, not described.",
      mistakes: "Learners write one paragraph of twenty sentences with no breaks. Show what that looks like on the board — it is visibly unreadable.",
      extra: "The blank line between paragraphs is a real signal to the reader: “a new topic starts here”.",
      tip: "One idea per sentence is the single most useful writing rule at this level. Repeat it in every exercise.",
      activity: "Find the parts: give a printed paragraph and have learners mark capitals, full stops, the topic sentence and the paragraph break.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — punctuation
  L.table({
    sec: SEC.con, title: "The four marks you need",
    sub: "Get these right and your writing is readable. Get them wrong and it is not.",
    table: {
      color: C.green, rowH: 0.52, fontSize: 17.5, headSize: 16, colW: [2.2, 4.4, 5.533],
      rows: [
        ["Mark", "When to use it", "Example"],
        ["Capital  A", "start of a sentence · names · I · days · countries", "On Monday, Sara and I went to Adama."],
        ["Full stop  .", "end of a statement", "She works in a shop."],
        ["Question mark  ?", "end of a question", "Where do you work?"],
        ["Comma  ,", "in a list · after a joining word at the start", "I bought bread, milk and eggs."],
      ],
    },
    note: "The word “I” is ALWAYS a capital letter in English, anywhere in the sentence. No other language does this — so it is easy to forget.",
    notes: tn({
      time: "14 minutes.",
      how: "Write a paragraph on the board with no punctuation at all and have the class add it aloud. Doing it together is far more effective than explaining the rules.",
      mistakes: "Lower-case “i” is the commonest error in the whole course, because no other language capitalises it. Correct it every single time.",
      extra: "Also capitalised: months, languages, nationalities, and the first word of a title.",
      tip: "Days and months are capitalised in English but not in many other languages. Point that out — it is a rule, not a style choice.",
      activity: "Punctuate it: give a 60-word text with no capitals or stops. Learners restore all of them.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — joining
  L.compare({
    sec: SEC.con, title: "Joining sentences — the biggest single improvement",
    sub: "Short sentences are correct. But all-short sounds like a child.",
    left: { h: "Before — all short", items: ["Sara works in a shop.", "The shop is in Merkato.", "She starts at eight.", "She finishes at six.", "She likes her job.", "The pay is not good."] },
    right: { h: "After — joined", items: ["Sara works in a shop in Merkato.", "She starts at eight and finishes at six.", "She likes her job, but the pay is not good.", "", "Six sentences became three.", "Nothing was lost."] },
    note: "and · but · because · so.  Four words. They are the difference between elementary writing and good writing.",
    notes: tn({
      time: "14 minutes. This is the most valuable slide in the module.",
      how: "Do the transformation live on the board. Learners see six sentences become three and immediately hear the improvement.",
      mistakes: "Joining everything into one enormous sentence. Two or three ideas joined is good; six is not.",
      extra: "Note that “Sara works in a shop in Merkato” joins without any joining word at all — sometimes you just move the information.",
      tip: "This is the single change that most improves writing at this level. Spend the full fourteen minutes.",
      activity: "Six into three: give six short sentences and have learners join them into three. Compare versions on the board.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — paragraph shape
  L.panelSide({
    sec: SEC.con, title: "The shape of a paragraph", sub: "Four parts. Always the same order.",
    panelW: 6.9,
    panel: { label: "Example — 5 sentences", color: C.write, tint: C.writeTint, size: 17, lsm: 1.42,
      text: "My town is a good place to live.\n\nIt is not very big, but it has\neverything you need. There is a\nmarket, two schools and a small\nhospital. The people are friendly\nand the food is cheap.\n\nI am happy here." },
    side: { label: "The four parts", color: C.write, size: 16, items: [
      "1. TOPIC SENTENCE — says what the paragraph is about. Always first.",
      "2. DETAILS — two or three sentences that support it.",
      "3. EXAMPLES — “There is a market, two schools and…”",
      "4. CLOSING — one short sentence to finish.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Read the example and have learners label each sentence 1, 2, 3 or 4. Labelling makes the invisible structure visible.",
      mistakes: "Learners start with a detail instead of a topic sentence, and the reader has no idea what the paragraph is about until the end.",
      extra: "The topic sentence is also what makes SKIMMING work — connect this directly to Module 6. Writers put the main idea first, which is why readers can find it there.",
      tip: "Give the topic sentence and have learners write the rest. Providing the opening removes the “where do I start?” problem entirely.",
      activity: "Finish the paragraph: give three topic sentences and have learners write four more sentences for each.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — messages
  L.grid({
    sec: SEC.con, title: "A message has three parts", sub: "Greeting · purpose · close. Never more complicated than this.",
    cols: 3, color: C.write, tint: C.writeTint, line: "D9CBEE", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaHandPaper", title: "1 · GREETING", desc: "“Dear Mr Abel,”  — formal\n“Hello Sara,”  — friendly\n“Hi,”  — very informal\n\nUse a comma after it." },
      { icon: "FaCommentDots", title: "2 · PURPOSE", desc: "Why are you writing?\nSay it in the FIRST line.\n\n“I am writing about the meeting on Friday.”" },
      { icon: "FaSignature", title: "3 · CLOSE", desc: "“Thank you.”\n“See you on Friday.”\n\nThen your name on a new line." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "The rule that matters: say WHY you are writing in the first line. Long introductions before the point are the commonest fault in learner messages.",
      mistakes: "Writing three sentences of greeting before the purpose. In English, business messages get to the point immediately — this is a cultural difference worth naming.",
      extra: "Formality by relationship: “Dear Mr/Mrs + surname” for people you do not know, first names for people you do.",
      tip: "This same three-part shape works for a text message, an email and a note on a door. One structure, many uses.",
      activity: "Three messages: the same information written formally, friendly and very informally.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — checking
  L.list({
    sec: SEC.con, title: "Check your own writing — six questions", sub: "Two minutes of checking finds most of your mistakes.",
    color: C.green, size: 19, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "Does every sentence start with a capital and end with a full stop?", d: "Look only at the first and last character of each sentence." },
      { t: "Is every “I” a capital letter?", d: "The commonest error in the whole course." },
      { t: "Does every verb match its subject?", d: "He works, not he work. From Level 1." },
      { t: "Is there a plural -s where it is needed?", d: "Three books, not three book." },
      { t: "Are the past verbs right?", d: "went, not goed. From Module 3." },
      { t: "Read it aloud. Does it sound right?", d: "Your ear catches what your eye misses." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Give a text containing exactly these six error types and have learners find them using the list in order. Checking in order is more reliable than reading and hoping.",
      mistakes: "Learners re-read for meaning rather than for errors, and see nothing. Checking one error type at a time is what works.",
      extra: "Question 6 is the most powerful. Reading aloud slows you down and engages your ear, which knows things your eye does not.",
      tip: "Print this as a card and require it before every piece of written work for the rest of the course.",
      activity: "Find six errors: give a 60-word text containing one of each error type. Learners find all six.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "write", ipa: "/raɪt/", pos: "verb", icon: "FaPen",
      meaning: "To put words on paper or on a screen.",
      example: "I write to my sister every week. She wrote a message yesterday.",
      mistake: "The W is SILENT — say /raɪt/. And the past is WROTE, not “writed”. Irregular, from Module 3.",
      notes: tn({ time: "6 minutes.",
        how: "Cross out the W on the board. Then drill write / wrote / written as a set — irregular verbs are learned as sets, not as rules.",
        mistakes: "“Writed” is a regular-ending overgeneralisation and is very common. Correct it every time.",
        extra: "write · wrote · written.  Also: “write to somebody”, with the preposition.",
        tip: "Silent W also appears in “wrong” and “answer”. Group them — connect back to Module 6.",
        activity: "Silent letters: list write, wrong, answer, know and have learners cross out the silent letter in each." }) },

    { word: "send", ipa: "/send/", pos: "verb", icon: "FaPaperPlane",
      meaning: "To make something go to somebody else.",
      example: "I sent the message this morning. Please send me your address.",
      mistake: "The past is SENT, not “sended”. And it is “send me the message”, not “send to me”.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the two-object pattern: “send me the message” or “send the message to me”. Both are correct; “send to me the message” is not.",
        mistakes: "Word order with two objects is genuinely hard. Give the two correct patterns and drill them.",
        extra: "send a message · send an email · send money · send somebody a photograph.",
        tip: "“Send money” is a phrase almost every learner will need — remittances are part of daily life for many families.",
        activity: "Two ways: give five sentences and have learners write each in both correct patterns." }) },

    { word: "letter", ipa: "/ˈletə/", pos: "noun", icon: "FaEnvelope",
      meaning: "Two meanings: (1) a written message you send · (2) a, b, c — a written symbol.",
      example: "I got a letter from the school. The word “sign” has four letters.",
      mistake: "Both meanings are common and only the context tells you which. Do not confuse it with “message”, which is usually shorter.",
      notes: tn({ time: "6 minutes.",
        how: "Teach both meanings together with one example each. Learners meet both constantly and confusing them causes real misunderstandings.",
        mistakes: "The double T is said as one short /t/. And the ending is weak — LET-ter, stress on the first syllable.",
        extra: "capital letter · small letter · a letter from the bank · write a letter.",
        tip: "“Capital letter” is needed for the punctuation slides, so teach that phrase explicitly here.",
        activity: "Which meaning? Give six sentences and have learners say which meaning of “letter” each uses." }) },

    { word: "address", ipa: "/əˈdres/", pos: "noun", icon: "FaMapMarkerAlt",
      meaning: "Where somebody lives or where something is sent.",
      example: "What is your address? Please write your address here.",
      mistake: "Stress on the SECOND syllable: a-DRESS. And note the double D and double S in the spelling.",
      notes: tn({ time: "6 minutes.",
        how: "This word appears on every form in English. Teach it beside “name”, “date of birth” and “signature” — they always appear together.",
        mistakes: "Learners stress the first syllable. Clap on the second until it holds.",
        extra: "home address · email address · What is your address? · Could you write down your address?",
        tip: "Connect to Module 7: “Could you write it down?” is exactly the phrase used when somebody says an address too fast.",
        activity: "Form practice: learners write their own name, address and date of birth in English." }) },

    { word: "sentence", ipa: "/ˈsentəns/", pos: "noun", icon: "FaAlignLeft",
      meaning: "A group of words with one idea, a subject and a verb.",
      example: "Write three sentences about your town. This sentence has five words.",
      mistake: "Stress on the FIRST syllable: SEN-tence. Two syllables, not three.",
      notes: tn({ time: "6 minutes.",
        how: "This is a classroom word learners will hear in every writing instruction, so it earns its place. Teach it with “paragraph” and “word”.",
        mistakes: "Learners say “three syllables” — SEN-ten-ce. It is two: SEN-tence.",
        extra: "word · sentence · paragraph · text. Four sizes, teach them as a set.",
        tip: "Learners need to understand instructions like “write five sentences”. Without this word, every writing task is confusing.",
        activity: "Count them: give a short paragraph and have learners count the words, sentences and paragraphs." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Writing Language 1 of 5" }),
    title: "Capital letters — the full list",
    sub: "Seven places. Learn them all.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [3.8, 3.4, 4.933],
      rows: [
        ["Use a capital for", "Example", "Not"],
        ["the first word of a sentence", "She works here.", "she works here"],
        ["the word I — always", "Sara and I went.", "sara and i went"],
        ["names of people and places", "Dawit · Adama · Ethiopia", "dawit · adama"],
        ["days and months", "Monday · September", "monday · september"],
        ["languages and nationalities", "English · Amharic · Oromo", "english · amharic"],
      ],
    },
    note: "The word “I” is capital EVERYWHERE — at the start, in the middle, at the end. This is unique to English.",
    notes: tn({
      time: "12 minutes.",
      how: "Write a paragraph in all lower case and have the class correct it aloud. Correcting together is more effective than any explanation.",
      mistakes: "Lower-case “i” is the single most frequent error in learner writing. Mark it every time, in every piece of work.",
      extra: "Days, months, languages and nationalities are capitalised in English but not in most other languages, including Amharic. That is why they are forgotten.",
      tip: "Add the first word of a title. “Reading for Meaning” — the small words in the middle stay lower case.",
      activity: "All lower case: give a 70-word text with no capitals at all. Learners restore every one.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Writing Language 2 of 5" }),
    title: "The comma — three simple uses",
    sub: "Do not use it everywhere. Three places only, at this level.",
    table: {
      color: C.gram, rowH: 0.55, fontSize: 17.5, headSize: 16, colW: [3.6, 3.6, 4.933],
      rows: [
        ["Use", "Rule", "Example"],
        ["In a list", "between items, but NOT before the last “and”", "I bought bread, milk and eggs."],
        ["After a starting word", "First, Then, However, After that", "First, boil the water."],
        ["Before but", "when it joins two full ideas", "It is small, but it is clean."],
      ],
    },
    note: "A comma is NOT a full stop. “She works in a shop, she starts at eight” is WRONG. Use a full stop, or join with “and”.",
    notes: tn({
      time: "12 minutes.",
      how: "The note is the important part. Using a comma where a full stop belongs is extremely common and makes writing hard to read.",
      mistakes: "The comma splice — joining two complete sentences with a comma. Show it on the board and show the two correct fixes.",
      extra: "Three uses is enough at this level. Do not teach more — the risk is over-use, which is worse than under-use.",
      tip: "If in doubt, leave the comma out. A missing comma is rarely a problem; a wrong one usually is.",
      activity: "Comma or full stop: give ten sentence pairs and have learners choose between a comma and a full stop for each.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Writing Language 3 of 5" }),
    title: "Joining words — the four you need",
    sub: "The same four from Module 6. Now you WRITE them.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [2.4, 3.8, 5.933],
      rows: [
        ["Word", "It joins", "Example"],
        ["and", "two similar ideas", "She starts at eight and finishes at six."],
        ["but", "two opposite ideas", "She likes her job, but the pay is not good."],
        ["because", "an idea and its REASON", "I was late because the bus did not come."],
        ["so", "an idea and its RESULT", "The bus did not come, so I was late."],
      ],
    },
    note: "Join TWO ideas, or at most three. Six ideas in one sentence is not good English — it is a sentence you have lost control of.",
    notes: tn({
      time: "12 minutes.",
      how: "In Module 6 learners recognised these words. Here they produce them. Recognition always comes before production, and this is the production stage.",
      mistakes: "Over-joining. Once learners discover joining, they join everything. Set a limit of three ideas per sentence.",
      extra: "Comma before “but” when it joins two full ideas. No comma before “and” in a short join.",
      tip: "This is the single change that most improves writing at this level. Give it real practice time in Exercises B and C.",
      activity: "Join them: give twelve short sentences and have learners produce six joined ones.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Writing Language 4 of 5" }),
    title: "Formal or friendly?",
    sub: "Same information. Different reader.",
    left: { h: "Formal — people you do not know", items: ["Dear Mr Abel,", "I am writing about the meeting.", "I would like to change the time.", "Thank you very much.", "Yours sincerely,  Sara Tesfaye"] },
    right: { h: "Friendly — people you know", items: ["Hi Abel,", "About the meeting —", "Can we change the time?", "Thanks!", "Sara"] },
    note: "Formal is not “better”. It is for a different reader. Using formal English with a friend sounds cold; using informal English with a bank sounds careless.",
    notes: tn({
      time: "12 minutes.",
      how: "Point out the specific differences: full forms rather than contractions, “I would like” rather than “can we”, and a full name rather than a first name.",
      mistakes: "Learners write everything formally because it feels safer. It is not — it sounds strange to a friend.",
      extra: "“Yours sincerely” when you used the person's name; “Yours faithfully” when you wrote “Dear Sir or Madam”. Mention it, do not drill it.",
      tip: "Learners need formal English for job applications and banks, and friendly English for everything else. Both are required.",
      activity: "Change the register: give a formal message and have learners rewrite it for a friend, and the reverse.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Writing Language 5 of 5" }),
    title: "Put it all together — how to write anything", sub: "Five steps. Follow them in order, every time.",
    color: C.gram, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Decide WHO will read it", d: "It changes everything — the greeting, the words, the length." },
      { t: "Write your purpose in one sentence first", d: "That sentence becomes your topic sentence or your first line." },
      { t: "Add three or four details", d: "Short sentences. One idea each. Do not worry about style yet." },
      { t: "Join some of them with and, but, because, so", d: "Two or three ideas per sentence. Not six." },
      { t: "Check it with the six questions", d: "Capitals · I · verb agreement · plural -s · past verbs · read it aloud." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Do all five steps live on the board with one topic suggested by the class. Watching a text being built removes the “where do I start?” problem entirely.",
      mistakes: "Learners try to write perfect sentences immediately and freeze. Steps 3 and 4 separate getting the ideas down from making them sound good — that separation is the technique.",
      extra: "Steps 3 and 4 are the professional method: write badly first, improve second. Nobody writes a good first sentence.",
      tip: "Print these five steps. Learners who follow them produce work far better than learners who simply start writing.",
      activity: "Live writing: build one paragraph on the board using all five steps, taking suggestions from the class at each step.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — capital letters", sub: "Find and fix the error.", items: [
      { q: "“sara and i went to adama on monday.”", a: "Sara and I went to Adama on Monday.", why: "Four capitals: the first word, the name, the place, and the day. Plus “I”, which is always capital." },
      { q: "“i speak amharic and english.”", a: "I speak Amharic and English.", why: "Languages are capitalised in English. Most languages do not do this, which is why it is forgotten." },
      { q: "“my birthday is in september.”", a: "My birthday is in September.", why: "Months are capitalised, and so are days. Seasons are not: “in summer”, lower case." },
    ] },
    { title: "Guided examples 2 — commas", sub: "Comma, full stop, or nothing?", items: [
      { q: "“I bought bread milk and eggs.”", a: "I bought bread, milk and eggs.", why: "One comma between list items. No comma before the final “and” in British English." },
      { q: "“She works in a shop, she starts at eight.”", a: "She works in a shop. She starts at eight.  OR  …shop, and she starts at eight.", why: "A comma cannot join two complete sentences. Use a full stop, or add a joining word." },
      { q: "“First boil the water.”", a: "First, boil the water.", why: "A comma after a starting word like First, Then, However or After that." },
    ] },
    { title: "Guided examples 3 — joining", sub: "Which word joins these two ideas?", items: [
      { q: "“She likes her job. The pay is not good.”", a: "She likes her job, but the pay is not good.", why: "The two ideas are opposite, so “but” — with a comma before it, because both halves are complete sentences." },
      { q: "“I was late. The bus did not come.”", a: "I was late because the bus did not come.", why: "The second half is the reason for the first. Reason follows “because”, and no comma is needed." },
      { q: "“She starts at eight. She finishes at six.”", a: "She starts at eight and finishes at six.", why: "Two similar ideas, same subject. Note that “she” is not repeated after “and”." },
    ] },
    { title: "Guided examples 4 — the paragraph", sub: "Which sentence goes first?", items: [
      { q: "“There is a market. My town is a good place to live. The people are friendly.”", a: "“My town is a good place to live” goes first.", why: "It is the topic sentence — it says what the whole paragraph is about. The others are details." },
      { q: "How do you know which is the topic sentence?", a: "It is the most general. The others are examples of it.", why: "Details are specific; the topic sentence covers all of them." },
      { q: "How many sentences should a paragraph have?", a: "Four to eight. About 100 to 150 words.", why: "Fewer than four is a note, not a paragraph. More than eight usually means two topics that should be split." },
    ] },
    { title: "Guided examples 5 — messages", sub: "Formal or friendly?", items: [
      { q: "Writing to a bank manager you have never met. Which greeting?", a: "“Dear Mr / Mrs + surname,”", why: "Formal, because you do not know them and it is a professional matter. Use their surname, never their first name." },
      { q: "Writing to a classmate. Which greeting?", a: "“Hi Sara,” or “Hello Sara,”", why: "Friendly. “Dear Ms Tesfaye” to a classmate would sound cold or sarcastic." },
      { q: "Where do you say WHY you are writing?", a: "In the first line, straight after the greeting.", why: "English business writing gets to the point immediately. A long introduction before the purpose is not polite here — it is unclear." },
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
    title: "Filling in a form",
    sub: "Tolosa is opening a bank account. The clerk helps him.",
    turns: [
      { who: "CLERK", text: "Please fill in this form. Write your full name here.", side: "r" },
      { who: "TOLOSA", text: "Sorry, what does “surname” mean?", side: "l" },
      { who: "CLERK", text: "Your father's name — the second one.", side: "r" },
      { who: "TOLOSA", text: "And “date of birth”?", side: "l" },
      { who: "CLERK", text: "The day you were born. Day, month, year.", side: "r" },
      { who: "TOLOSA", text: "Thank you. And I sign at the bottom?", side: "l" },
    ],
    note: "“What does … mean?” from Module 5. Forms are full of words nobody teaches you — so ask.",
    notes: tn({
      time: "12 minutes.",
      how: "Bring a real form — a bank form, a school form, a job application. Real forms are far better than invented ones and learners take them seriously.",
      mistakes: "Form vocabulary is rarely taught and constantly needed. Teach it as a set: surname, first name, date of birth, address, signature, occupation.",
      extra: "Also: “please print” means write in clear separate letters, not joined handwriting.",
      tip: "This is one of the most practically useful dialogues in Level 2. Working adults meet English forms constantly.",
      activity: "Real form: hand out a real English form and have learners complete it, asking about any word they do not know.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Asking somebody to check your writing",
    sub: "Hana wrote a message. She asks Dawit to look at it.",
    turns: [
      { who: "HANA", text: "Could you check this message for me?", side: "l" },
      { who: "DAWIT", text: "Of course. It is good, but there is one mistake here.", side: "r" },
      { who: "HANA", text: "Where? I do not see it.", side: "l" },
      { who: "DAWIT", text: "This “i” — it should be a capital letter.", side: "r" },
      { who: "HANA", text: "Ah, thank you. Anything else?", side: "l" },
      { who: "DAWIT", text: "No, the rest is fine. It is clear.", side: "r" },
    ],
    note: "“Could you check this for me?” is one of the most useful sentences you will ever learn. Ask somebody. Always.",
    notes: tn({
      time: "11 minutes.",
      how: "Model how to give feedback kindly: say what is good first, then name one specific thing. Dawit does exactly that.",
      mistakes: "Learners either say nothing or correct everything. One specific correction is more useful than twenty.",
      extra: "“Anything else?” is a good general phrase and appears in shops, offices and conversations.",
      tip: "Build the habit of asking somebody to check. It is what good writers do in every language, including professionals.",
      activity: "Check my writing: pairs exchange work and each names one good thing and one correction.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Form words you will meet everywhere",
    sub: "Six words. They appear on every English form.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaUser", title: "Surname / Family name", desc: "Your father's name — the second one." },
      { icon: "FaIdCard", title: "First name / Given name", desc: "Your own name — the one people call you." },
      { icon: "FaBirthdayCake", title: "Date of birth", desc: "The day you were born. Often written DD/MM/YYYY." },
      { icon: "FaMapMarkerAlt", title: "Address", desc: "Where you live. Sometimes “residential address”." },
      { icon: "FaBriefcase", title: "Occupation", desc: "Your job. “Student”, “teacher”, “shopkeeper”." },
      { icon: "FaSignature", title: "Signature", desc: "Your own handwriting, at the bottom. Not printed." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Have learners write their own details for all six on paper. Doing it with real information makes it stick.",
      mistakes: "Surname and first name are frequently reversed, which causes real problems on official documents and tickets.",
      extra: "Also common: “Sex / Gender”, “Nationality”, “Marital status”, “Please print”.",
      tip: "Date format matters. DD/MM/YYYY is used in Ethiopia and Britain; MM/DD/YYYY in America. Point that out — it causes genuine confusion.",
      activity: "My details card: every learner writes all six items for themselves and keeps the card.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "CLERK", text: "Please fill in this form.", side: "r" },
      { who: "YOU", text: "Sorry, what ______ “occupation” ______ ?", side: "l" },
      { who: "CLERK", text: "Your job. What work do you do?", side: "r" },
      { who: "YOU", text: "I am a teacher. And where do I ______ my address?", side: "l" },
      { who: "CLERK", text: "In the third box. Then sign at the bottom.", side: "r" },
      { who: "YOU", text: "Could you ______ this for me before I sign?", side: "l" },
    ],
    note: "Use these:  “does … mean”  ·  “write”  ·  “check”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps, then three pairs perform before you reveal the answers.",
      answers: "1 does ... mean · 2 write · 3 check",
      mistakes: "Gap 1 needs the helper “does”, from Module 5. Deliberate revision.",
      tip: "The last line is the habit worth building: always ask somebody to check before you sign anything.",
      activity: "Do it again with a different form word and a different job.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — write and check", sub: "Four rounds. Three minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Write a three-line message to your partner", d: "Greeting, purpose, close. Swap and read." },
      { t: "Check your partner's message with the six questions", d: "Name one good thing and one correction." },
      { t: "Fill in a form for your partner by asking them", d: "All six form words. Do not look at their paper." },
      { t: "Write one sentence, then join it to another with “because”", d: "Read both versions aloud. Which sounds better?" },
    ],
    notes: tn({
      time: "13 minutes for all four rounds.",
      how: "Round 3 is genuinely useful: asking for somebody's details in English is a real workplace task.",
      mistakes: "In round 2 learners correct everything. Limit them to one correction — that constraint teaches them to prioritise.",
      tip: "Round 4 makes the improvement audible. Learners hear the difference joining makes, which is more convincing than being told.",
      activity: "Best message: read three messages aloud and let the class choose the clearest.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — say it before you write it", sub: "Speaking first makes writing much easier.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say four sentences about your town", d: "Do not write anything yet. Just say them." },
      { t: "Your partner writes down what you said", d: "They may ask you to repeat." },
      { t: "Read what they wrote. Is it what you meant?", d: "Correct it together." },
      { t: "Now join two of the sentences", d: "Use and, but, because or so. Say the joined version aloud." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Speaking before writing removes the blank-page problem completely. Learners always have more to say than they think they can write.",
      mistakes: "Learners try to speak in perfect sentences. Tell them to speak normally — the partner's writing catches the content.",
      extra: "This is a real technique, used by professional writers: say it, then write down what you said.",
      tip: "Learners who cannot write a paragraph can almost always say one. This activity proves that to them.",
      activity: "Speak and record: learners record four sentences on a phone, then write them down afterwards.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — dictation and correction", sub: "In pairs. One reads, one writes. Then swap.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Sara and I went to Adama on Monday.", d: "Four capital letters. Count them." },
      { t: "I bought bread, milk and eggs at the market.", d: "One comma. Where?" },
      { t: "She likes her job, but the pay is not good.", d: "A comma before “but”." },
      { t: "I was late because the bus did not come.", d: "No comma before “because”." },
      { t: "First, boil the water. Then add the coffee.", d: "A comma after “First”. Two sentences." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Read each sentence twice at natural speed. Learners write. Then reveal on the board and have them mark their own.",
      mistakes: "Punctuation is not heard, so learners must apply the rules rather than listen. That is exactly the skill being tested.",
      extra: "Item 3 and item 4 together teach the comma rule: comma before “but”, no comma before “because”.",
      tip: "Count the class errors and write the number on the board. Repeat at the end of the week to show improvement.",
      activity: "Peer marking: learners exchange papers and mark against the board version.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — spelling aloud",
    sub: "You will be asked to spell your name at every office in the world.",
    left: { h: "Letters people confuse", items: ["A  /eɪ/   ·   E  /iː/", "I  /aɪ/   ·   Y  /waɪ/", "G  /dʒiː/   ·   J  /dʒeɪ/", "M  /em/   ·   N  /en/", "B  /biː/   ·   V  /viː/   ·   P  /piː/"] },
    right: { h: "How to be clear", items: ["“B for Bahir Dar”", "“V for victory”", "“M for Merkato”", "“Double L” for two Ls.", "“Capital A, small b.”"] },
    note: "Practise spelling your own name and your address aloud. You will need both far sooner than you expect.",
    notes: tn({
      time: "12 minutes.",
      how: "Drill the confusable pairs hard: A/E, I/Y, G/J, M/N, B/V/P. These five pairs cause almost every spelling misunderstanding on the phone.",
      mistakes: "B, V and P are the hardest set for Ethiopian learners, connecting back to the /v/ and /p/ work in Level 1.",
      extra: "The “B for Bahir Dar” technique is what everybody uses on the phone. Teach it as a practical tool.",
      tip: "Connect to Module 7: “Could you spell that?” and “Could you write it down?” are the two ways round this problem.",
      activity: "Spell it: learners spell their own name and their partner writes it. Check for accuracy.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — explain your writing", sub: "In pairs. Two minutes per task.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Read your paragraph aloud to your partner", d: "Stop at every full stop. Did it sound right?" },
      { t: "Say which sentence is your topic sentence and why", d: "It should be the most general one." },
      { t: "Say which two sentences you joined and with what", d: "and · but · because · so." },
      { t: "Say one thing you would change if you wrote it again", d: "Be specific." },
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Task 1 is the most useful: reading aloud catches errors that reading silently never does, because your ear knows things your eye misses.",
      mistakes: "Learners read too fast to hear anything. Insist on stopping at every full stop.",
      extra: "Task 4 builds self-assessment, which is what turns a one-off correction into lasting improvement.",
      tip: "If a sentence is hard to read aloud, it is usually badly written. Say that — it is a reliable test learners can use alone.",
      activity: "Read-aloud test: any sentence that cannot be read aloud in one breath is probably too long.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this. The last one of Level 2.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Spell your full name and your address aloud", d: "Clearly enough for somebody to write it down." },
      { t: "Read your paragraph aloud", d: "Stop at every full stop." },
      { t: "Say which sentence is the topic sentence", d: "And why it is the most general one." },
      { t: "Say a message you would send to a friend", d: "Greeting, purpose, close." },
      { t: "Say the same message formally", d: "To somebody you do not know." },
    ],
    notes: tn({
      time: "15 minutes including listening back.",
      how: "This is the last recording of Level 2. Play the learner's Module 1 recording immediately afterwards. The comparison is the strongest motivation in the whole course.",
      mistakes: "Steps 4 and 5 test register. Listen for the difference between “Hi” and “Dear Mr”, and between “can we” and “I would like to”.",
      answers: "SUCCESS CRITERIA: a name and address spelled clearly enough to transcribe · a paragraph read with stops at full stops · the correct topic sentence identified · a three-part friendly message · the same message correctly made formal.",
      tip: "Do the Module 1 comparison in class if learners agree to it. Hearing eight modules of progress in two minutes changes how learners see themselves.",
      activity: "Then and now: play the first and last recordings side by side for any learner willing.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — a dictation", sub: "Listen and write. Punctuation is not said — you must add it.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads twice at natural speed", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.34,
      text: "“My name is Bethlehem and I live in Bahir Dar.\n\nI work in a small shop near the market.\nI start at eight and finish at six.\nI like my job, but the pay is not very good.\n\nOn Sunday I visit my sister.\nWe usually go to a café and talk for hours.”" },
    side: { label: "Your task", color: C.listen, size: 16.5, items: [
      "Write everything you hear.",
      "Add the capital letters yourself.",
      "Add the full stops yourself.",
      "Add ONE comma — where?",
      "How many sentences are there?",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "Read twice at natural speed, then a third time slowly for checking only. Punctuation is never spoken, so learners must apply the rules from slides 16 and 17.",
      mistakes: "The comma before “but” is the one they must find. And “I” must be capital in five places.",
      extra: "Ask how many capital letters there are in total. Counting makes them look carefully.",
      answers: "Six sentences. One comma, before “but”. Capitals: My, I (×6), Bethlehem, Bahir Dar, Sunday, We, On.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Punctuation you could not hear.",
    size: 17,
    items: [
      { q: "1 — how many sentences?", a: "Six.", why: "Each has one main idea. Counting sentences is how you check you heard the full stops." },
      { q: "2 — where is the comma?", a: "Before “but”: “I like my job, but the pay is not very good.”", why: "A comma goes before “but” when it joins two complete ideas. From slide 17." },
      { q: "3 — the capital letters", a: "My · I (six times) · Bethlehem · Bahir Dar · Sunday · On · We", why: "Sentence starts, the name, the place, the day, and every “I” — which is the one most people miss." },
      { q: "4 — “near the market”", a: "No capital on “market” — it is not a name here.", why: "“Merkato” is a name and takes a capital; “the market” is an ordinary noun and does not." },
      { q: "5 — the hardest part?", a: "The capital I, every time.", why: "It is the most frequent error in the whole course because no other language does it." },
    ],
    notes: keyNotes("Count how many learners got every capital I right. That single number tells you whether slide 16 needs repeating."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — details for a form", sub: "Listen and fill in the form. Two readings.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.32,
      text: "“My first name is Chaltu, C-H-A-L-T-U.\nMy surname is Bekele, B-E-K-E-L-E.\nI was born on the fifth of March,\nnineteen ninety-eight.\nI live at number twelve, Church Road, Adama.\nMy phone number is oh nine one one,\ntwo two three, four four five.\nI am a nurse.”" },
    side: { label: "Fill in the form", color: C.listen, size: 16, items: [
      "First name:  ____________",
      "Surname:  ____________",
      "Date of birth:  ____________",
      "Address:  ____________",
      "Phone:  ____________",
      "Occupation:  ____________",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "This is a real-life task: filling in a form from spoken details. Read at natural speed, twice, then once slowly for checking.",
      mistakes: "The spelled names must be caught letter by letter, connecting to the spelling drill on slide 33.",
      extra: "The date is said “the fifth of March” but written 05/03/1998. Point out that the spoken and written forms differ.",
      answers: "Chaltu · Bekele · 05/03/1998 · 12 Church Road, Adama · 0911 223 445 · nurse",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Every detail on a form must be exactly right.",
    size: 17,
    items: [
      { q: "1 and 2 — the names", a: "First name Chaltu. Surname Bekele.", why: "Both were spelled aloud, which is what people do with names on the phone. Catching letters is a real skill." },
      { q: "3 — the date of birth", a: "05/03/1998 — the fifth of March, 1998.", why: "Said as words, written as numbers. In Ethiopia and Britain the day comes first; in America the month does." },
      { q: "4 — the address", a: "12 Church Road, Adama.", why: "The number comes before the road name in English. A comma separates the road from the town." },
      { q: "5 — the phone number", a: "0911 223 445", why: "Digit by digit, in groups. From Module 7 — and this is why that drill mattered." },
      { q: "6 — the occupation", a: "Nurse.", why: "“Occupation” means job. One of the six form words from slide 28." },
    ],
    notes: keyNotes("Mark this strictly. On a real form, one wrong letter in a surname or one wrong digit in a phone number makes the whole document useless."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "Listening and writing together", sub: "Four everyday tasks that need both at once.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaEnvelope", title: "Taking a phone message", desc: "Listen, write, read it back. Who · when · why · what to do · the number. From Module 7." },
      { icon: "FaClipboardList", title: "Filling in a form from speech", desc: "A clerk reads the questions; you write the answers. Ask them to spell anything unclear." },
      { icon: "FaMapMarkerAlt", title: "Writing down directions", desc: "Listen, write the key words only — not full sentences. Straight · second left · opposite the bank." },
      { icon: "FaShoppingBasket", title: "Writing a list from speech", desc: "Somebody tells you what to buy. Write short: “2 kg tomatoes”, not a sentence." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "The common principle in all four: write KEY WORDS, not sentences. Trying to write full sentences while listening guarantees you fall behind.",
      mistakes: "Learners try to write everything and lose the thread. Teach short notes as a deliberate technique.",
      tip: "Reading back what you wrote is the check that catches errors before they matter. Do it every time.",
      activity: "Note taking: read a short set of directions and have learners write no more than eight words total.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.compare({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — two messages",
    sub: "Same information. Two different readers. Find the differences.",
    left: { h: "A — FORMAL", items: [
      "Dear Mr Bekele,",
      "I am writing about the meeting on Friday.",
      "I am afraid I cannot come at two o'clock.",
      "Could we change it to four o'clock?",
      "Thank you very much.",
      "Yours sincerely,   Sara Tesfaye",
    ] },
    right: { h: "B — FRIENDLY", items: [
      "Hi Abel,",
      "Sorry, I can't make two on Friday.",
      "Can we do four instead?",
      "Thanks!",
      "Sara",
      "→ Same three parts. Different words.",
    ] },
    note: "Your task:  What does Sara want?  ·  Which is for somebody she knows?  ·  Find three differences.  ·  Which parts are the SAME?",
    notes: tn({
      time: "13 minutes.",
      how: "Have learners mark the differences physically on the page. Comparing two versions teaches register far better than any explanation.",
      mistakes: "Learners assume the formal one is “better English”. It is not — it is for a different reader, and to a friend it would sound cold.",
      extra: "Point at the contractions: “can't” in B, “cannot” in A. Contractions are informal and should be avoided in formal writing.",
      tip: "Both messages have the same three parts — greeting, purpose, close. Only the words change, not the shape.",
      activity: "Third version: learners write the same message to a colleague they know slightly — between the two.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Compare the two messages carefully.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "What time was the meeting, and what time does Sara want?",
      "Which message uses the person's surname?",
      "Find one contraction in message B.",
      "How does Sara sign her name in each message?",
      "Which parts are the SAME in both messages?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Question 5 is the important one: the three-part shape is identical in both. Only the words change.",
      mistakes: "Learners look for differences and miss the structural similarity. Ask question 5 explicitly.",
      tip: "Point out that message B is shorter but not less polite. Short is not rude — unclear is.",
      answers: "1 It was at two, she wants four. · 2 Message A — “Mr Bekele”. · 3 “can't”. · 4 A: full name after “Yours sincerely”. B: first name only. · 5 Greeting, purpose in the first line, and a close — the same three parts.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "One shape. Two registers.",
    size: 17,
    items: [
      { q: "1 — the times", a: "The meeting was at two. Sara wants four.", why: "Both messages give both times. Any message asking for a change must state the old and the new." },
      { q: "2 — the surname", a: "Message A — “Dear Mr Bekele”.", why: "Title plus surname is formal. Message B uses “Hi Abel”, a first name, which is friendly." },
      { q: "3 — the contraction", a: "“can't” — short for cannot.", why: "Contractions are informal. In formal writing use the full form: cannot, I am, do not." },
      { q: "4 — the signature", a: "A: “Yours sincerely, Sara Tesfaye”. B: just “Sara”.", why: "Formal messages end with a closing phrase and a full name. Friendly ones need only a first name." },
      { q: "5 — what is the SAME?", a: "The three parts: greeting, purpose in the first line, and a close.", why: "The shape never changes. Only the words do. Learn one shape and you can write both." },
    ],
    notes: keyNotes("Item 5 is the transferable idea. If learners take one thing from this section, it should be that the three-part shape is constant."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a model paragraph", sub: "Read it, then find its four parts.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 17, lsm: 1.32,
      text: "MY WORK\n\nI have worked in a small shop in Merkato for three years. The shop sells clothes, and it is busy from morning until evening. I start at eight o'clock and finish at six, so the days are long.\n\nI like the work because I meet many people, and my English has improved a lot since I started. Some customers speak only English, and at first I was afraid. Now I can help them.\n\nThe pay is not very good, but I am learning every day. Next year I hope to work in a hotel." },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "How many paragraphs are there?",
      "Find the topic sentence of each one.",
      "Find three joining words.",
      "Find one sentence in the past tense.",
      "Find one sentence about the future.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "This paragraph deliberately uses grammar from Modules 1 to 7: present simple, past, present perfect, future, and joining words. Point each one out as you read.",
      mistakes: "Learners see three paragraphs as one text. The blank lines are the signal — point at them physically.",
      extra: "“I have worked… for three years” is the present perfect from Module 2 — an action that started in the past and continues now.",
      tip: "This is the model for the end-of-level writing task. Learners should study its shape, not memorise its content.",
      activity: "Label the parts: learners mark the topic sentence of each paragraph and circle every joining word.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Everything from Level 2 in one text.",
    size: 16.5,
    items: [
      { q: "1 — how many paragraphs?", a: "Three. The blank lines separate them.", why: "Each has one topic: what the job is, why she likes it, and what comes next." },
      { q: "2 — the topic sentences", a: "“I have worked in a small shop…” · “I like the work because…” · “The pay is not very good, but…”", why: "Each is the most general sentence of its paragraph and comes first." },
      { q: "3 — three joining words", a: "and · so · because · but — all four appear.", why: "This is what stops the writing sounding like a list of short sentences." },
      { q: "4 — past and present perfect", a: "“At first I was afraid.” · “I have worked… for three years.”", why: "Past for a finished time; present perfect for something continuing. From Modules 2 and 3." },
      { q: "5 — the future", a: "“Next year I hope to work in a hotel.”", why: "From Module 4. Note that a paragraph ending with a future plan feels complete." },
    ],
    notes: keyNotes("Point out that this one text uses grammar from every module of Level 2. That is what the level was building towards, and learners should be told so explicitly."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — correct the punctuation", sub: "Add capitals, full stops and commas.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each sentence correctly.",
    items: [
      "1.  sara and i went to bahir dar on friday",
      "2.  i bought bread milk and eggs at the market",
      "3.  she likes her job but the pay is not good",
      "4.  i speak amharic english and a little oromo",
      "5.  first boil the water then add the coffee",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Do item 1 together on the board, naming each correction. Then let learners work alone.",
      answers: "1 Sara and I went to Bahir Dar on Friday. · 2 I bought bread, milk and eggs at the market. · 3 She likes her job, but the pay is not good. · 4 I speak Amharic, English and a little Oromo. · 5 First, boil the water. Then add the coffee.",
      mistakes: "Item 5 needs two sentences, not one joined by a comma. That is the comma-splice error from slide 17.",
      tip: "Count the capital-I corrections. That number is your measure of whether slide 16 has landed.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — join the sentences", sub: "Turn eight short sentences into four.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Use and, but, because or so. Write four sentences.",
    items: [
      "1.  Dawit works in Adama.  He lives in Adama.",
      "2.  The shop is small.  It is always busy.",
      "3.  I was late.  The bus did not come.",
      "4.  She studied hard.  She passed the exam.",
      "5.  Now read all four aloud. Do they sound better than the eight?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Item 5 is the point of the exercise. Reading aloud makes the improvement audible, which is far more convincing than being told.",
      answers: "1 Dawit works and lives in Adama. · 2 The shop is small, but it is always busy. · 3 I was late because the bus did not come. · 4 She studied hard, so she passed the exam.",
      mistakes: "Item 1 can drop the repeated subject entirely: “works and lives”. That is the most elegant answer — praise it.",
      tip: "Items 3 and 4 are the reason-and-result pair. Both could be reversed with the other word — accept it if the order is changed correctly.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — the end-of-level task", sub: "Write 100–150 words. This is the Level 2 writing test.",
    panelW: 7.4,
    panel: { label: "Choose ONE topic", color: C.write, tint: C.writeTint, size: 18, lsm: 1.45,
      text: "1.  My town\n\n2.  My work or my studies\n\n3.  A day I will never forget\n\n4.  My plans for next year\n\n5.  My family",
      },
    side: { label: "Your paragraph must have", color: C.write, size: 15.5, items: [
      "100–150 words, in 2 or 3 paragraphs.",
      "A topic sentence to start each one.",
      "At least THREE joining words: and · but · because · so.",
      "At least one PAST sentence and one FUTURE sentence.",
      "Correct capitals, full stops and commas.",
      "Checked with the six questions from slide 10.",
    ] },
    notes: tn({
      time: "20 minutes writing, plus 5 minutes planning.",
      how: "Spend five minutes on step 1 and 2 from slide 20 before anybody writes: decide the reader, write the purpose sentence. Planning prevents the blank page.",
      mistakes: "Learners write one long block with no paragraph breaks. Remind them to leave a blank line between paragraphs.",
      answers: "MODEL: see slide 44 — the “My work” text is exactly the required length and shape, and uses all the required elements.",
      tip: "This is the culminating task of Level 2. Mark it properly, return it with comments, and let learners rewrite it once.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — how it is marked", sub: "25 marks. You know the standard before you start.",
    size: 17,
    items: [
      { q: "Length and shape — 5 marks", a: "100–150 words in 2 or 3 paragraphs, with blank lines between them.", why: "Shape is the first thing a reader sees. A block of text with no breaks is hard to read whatever it says." },
      { q: "Topic sentences — 5 marks", a: "Each paragraph starts with its most general sentence.", why: "This is what lets a reader skim your writing — the same idea as Module 6, from the writer's side." },
      { q: "Joining words — 5 marks", a: "At least three of: and · but · because · so.", why: "The single biggest difference between elementary and good writing at this level." },
      { q: "Tenses — 5 marks", a: "At least one past sentence and one future sentence, both correct.", why: "Proves you can use Modules 3 and 4 in real writing, not only in exercises." },
      { q: "Punctuation — 5 marks", a: "Capitals, full stops and commas correct. Every “I” capital.", why: "The capital I alone accounts for most lost marks here. Check it separately, before anything else." },
    ],
    notes: keyNotes("Give this rubric BEFORE the task, not after. Learners who know the standard hit it far more often — and 20+ out of 25 is a genuine Level 2 pass."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist", sub: "Six questions. Ask them before you hand in anything.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Capital at the start, full stop at the end — every sentence?", d: "Check the first and last character of each one." },
      { t: "Is every “I” a capital letter?", d: "Check this one separately. It is the commonest error." },
      { t: "Does every verb match its subject?", d: "He works, not he work." },
      { t: "Is the plural -s there where it is needed?", d: "Three books, not three book." },
      { t: "Are the past verbs correct?", d: "went, not goed. bought, not buyed." },
      { t: "Read it aloud — does it sound right?", d: "Your ear catches what your eye misses." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Require this checklist before every piece of written work for the rest of the course. It is the quality-control system.",
      tip: "Print it as a card. Two minutes of checking finds most errors, and finding your own errors is worth more than having them found for you.",
      activity: "Check it now: learners apply all six questions to the paragraph they just wrote and count their own corrections.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Which is correct?", opts: "a) sara and i went     b) Sara and I went     c) Sara and i went" },
      { q: "2. Which is correct?", opts: "a) I bought bread, milk and eggs.     b) I bought bread milk and eggs.     c) I bought, bread milk, and eggs." },
      { q: "3. “She likes her job ___ the pay is not good.”", opts: "a) and     b) but     c) so" },
      { q: "4. Where does the topic sentence go?", opts: "a) first     b) last     c) in the middle" },
      { q: "5. Which greeting is formal?", opts: "a) Hi Abel,     b) Dear Mr Bekele,     c) Hello," },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 a · 3 b · 4 a · 5 b",
      tip: "Question 1 tests both the name capital and the capital I. Anyone choosing c) needs slide 16 again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Joining words and form words.",
    color: C.green, instruction: "Write the missing word.", size: 18,
    items: [
      "1.  She starts at eight ______ finishes at six.",
      "2.  I was late ______ the bus did not come.",
      "3.  The road was bad, ______ the journey took ten hours.",
      "4.  The shop is small, ______ it is always busy.",
      "5.  Your father's name on a form is your ______ .",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Items 2 and 3 are the reason-and-result pair. Ask which half is the reason in each.",
      answers: "1 and · 2 because · 3 so · 4 but · 5 surname",
      mistakes: "Swapping because and so is the commonest error. Draw the direction of the logic on the board.",
      tip: "Item 5 revises the form vocabulary, which learners will need at a bank long before they need a paragraph.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Form words, punctuation and register.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the FORM WORD to its MEANING", opts: "1. surname     2. date of birth     3. occupation     4. signature" },
      { q: "a) your job        b) your own handwriting", opts: "c) your father's name        d) the day you were born" },
      { q: "Part 2 — match the MARK to its USE", opts: "1. capital letter     2. full stop     3. comma          a) end of a statement     b) in a list     c) names and the word I" },
      { q: "Part 3 — match the GREETING to the READER", opts: "1. Dear Mr Bekele,     2. Hi Abel,     3. Dear Sir or Madam,          a) a friend     b) somebody you know professionally     c) a name you do not know" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–d, 3–a, 4–b.  ·  Part 2: 1–c, 2–a, 3–b.  ·  Part 3: 1–b, 2–a, 3–c.",
      tip: "Part 3 item 3 is new: “Dear Sir or Madam” is what you write when you do not know the person's name at all. Very useful for job applications.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — put the sentences in order", sub: "One paragraph. Which sentence goes first?",
    color: C.green, instruction: "Write the numbers in the correct order.", size: 17,
    items: [
      "a)  There is a market, two schools and a small hospital.",
      "b)  I am happy here.",
      "c)  My town is a good place to live.",
      "d)  It is not very big, but it has everything you need.",
      "e)  The people are friendly and the food is cheap.",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Ask which sentence is most general. That one is the topic sentence and it always goes first.",
      answers: "c · d · a · e · b.  Topic sentence (c), details (d), examples (a and e), closing (b).",
      mistakes: "Learners often put b) somewhere in the middle. A closing sentence only works at the end.",
      tip: "This is slide 8's structure as a puzzle. If learners can order it, they can build one.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — error correction", sub: "One error in each sentence.",
    color: C.green, instruction: "Find the error and write the sentence correctly.", size: 17,
    items: [
      "1.  i live in adama.",
      "2.  She work in a shop.",
      "3.  I buyed three book yesterday.",
      "4.  She likes her job, the pay is not good.",
      "5.  My birthday is in september.",
      "6.  He go to the market every day.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Each error type appears in the six-question checklist. Have learners name which question would have caught each one.",
      answers: "1 I live in Adama. · 2 She works in a shop. · 3 I bought three books yesterday. · 4 She likes her job, but the pay is not good. (or a full stop) · 5 September. · 6 He goes to the market every day.",
      mistakes: "Item 3 has two errors — the past verb and the plural. Say so before they start, or accept either correction.",
      tip: "Items 2 and 6 are the third-person -s from Level 1. If these are still wrong after eight modules, they need dedicated revision.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  The word “i” only needs a capital at the start of a sentence.",
      "2.  A topic sentence goes first in a paragraph.",
      "3.  You can join two complete sentences with a comma.",
      "4.  Days and months take capital letters in English.",
      "5.  Formal writing is always better than friendly writing.",
      "6.  Reading your writing aloud helps you find mistakes.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — “I” is capital everywhere · 2 T · 3 F — use a full stop or a joining word · 4 T · 5 F — each is right for a different reader · 6 T",
      tip: "Item 5 matters. Learners default to formal because it feels safe, and then write cold, strange messages to friends.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Write real texts, not exercises.",
    color: C.green, instruction: "Write each one properly, with correct punctuation.", size: 18,
    items: [
      "1.  A note to your neighbour: you will be away for three days.",
      "2.  A message to your teacher: you cannot come on Thursday.",
      "3.  A shopping list of six things.",
      "4.  Your own name, address and date of birth as on a form.",
      "5.  One sentence about your plans for next year.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Item 2 needs the three-part shape and a slightly formal register. Item 1 can be informal.",
      answers: "MODELS: 1 “Dear Kebede, I will be away from Monday to Wednesday. Could you please take my post? Thank you. Sara.” · 2 “Dear Mr Abel, I am sorry but I cannot come to class on Thursday because I have to go to the clinic. I will do the homework at home. Thank you. Hana.”",
      mistakes: "A shopping list needs no full sentences — it is a list. Point out that not every text is a paragraph.",
      tip: "These are the texts learners will actually write. Mark them as real communication, not as grammar exercises.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Spell your full name and address aloud. Your partner writes them.",
      "2.  Say four sentences about your town. Your partner writes them.",
      "3.  Say a message to a friend, then the same message formally.",
      "4.  Read your paragraph aloud, stopping at every full stop.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Task 1 assesses the spelling drill from slide 33. Check the written version against the real name.",
      answers: "SUCCESS CRITERIA: 1 name and address written exactly right · 2 four complete sentences · 3 an audible difference in register between the two versions · 4 clear stops at every full stop.",
      tip: "Task 3 is the register test. Listen for “Hi” versus “Dear Mr”, and “can we” versus “I would like to”.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "Everything from Level 2 together.",
    color: C.green, instruction: "Work alone. This is close to the end-of-level test.", size: 17,
    items: [
      { q: "1. Write a formal message asking to change an appointment.", opts: "Greeting, purpose, close. About 50 words." },
      { q: "2. Write the same message to a friend.", opts: "About 25 words. Note the difference." },
      { q: "3. Write one paragraph of 100 words about your work or studies.", opts: "Topic sentence, three details, a closing line." },
      { q: "4. In your paragraph, mark the topic sentence and circle every joining word.", opts: "You should find at least three." },
      { q: "5. Check your paragraph with all six questions from slide 10.", opts: "Write down how many corrections you made." },
    ],
    notes: tn({
      time: "20 minutes.",
      how: "This is the rehearsal for the end-of-level task. Give the rubric from slide 49 before they start.",
      answers: "1 must have all three parts, a title plus surname, and no contractions · 2 same information, first name, contractions allowed · 3 must be 90–110 words with a clear topic sentence · 4 at least three joining words · 5 any honest number.",
      tip: "Question 5 is the most valuable. Learners who count their own corrections start finding errors before the teacher does.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why does the topic sentence go first?", opts: "Think about the reader, and about Module 6." },
      { q: "2. Why is joining sentences an improvement, if short sentences are correct?", opts: "Read six short sentences aloud, then three joined ones." },
      { q: "3. When would formal writing be the WRONG choice?", opts: "Give a real example." },
      { q: "4. Why does reading aloud find mistakes that reading silently does not?", opts: "What does your ear know?" },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Question 1 connects writing to reading directly: the topic sentence goes first because that is where skimming readers look. Writer and reader are two halves of the same system.",
      answers: "1 Because the reader wants to know the subject immediately, and skimming readers look at the first sentence — Module 6. 2 Because all-short sentences sound like a list and hide how the ideas relate; joining words show the relationship. 3 Writing formally to a close friend sounds cold, distant or even sarcastic. 4 Your ear has heard far more English than your eye has read; it notices wrong rhythm and missing words automatically.",
      tip: "Question 1 is the best question in the module. It ties Modules 6 and 8 into one idea.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Capitals and punctuation", items: [
      { q: "1. Which is correct?", opts: "a) sara and i     b) Sara and I     c) Sara and i" },
      { q: "2. When is the word “I” a capital letter?", opts: "One sentence." },
      { q: "3. Correct this: “i speak amharic and english.”", opts: "Write the full sentence." },
      { q: "4. Name two other things that take a capital letter.", opts: "Two answers." },
    ] },
    { part: "Part 2 · Commas and joining", items: [
      { q: "5. Put the comma in: “I bought bread milk and eggs.”", opts: "Write the sentence." },
      { q: "6. “She likes her job ___ the pay is not good.”", opts: "a) and     b) but     c) because" },
      { q: "7. “I was late ___ the bus did not come.”", opts: "a) so     b) but     c) because" },
      { q: "8. What is wrong with: “She works here, she starts at eight.”", opts: "One sentence." },
    ] },
    { part: "Part 3 · Paragraphs", items: [
      { q: "9. Where does the topic sentence go?", opts: "a) first     b) last     c) anywhere" },
      { q: "10. How many sentences should a paragraph have?", opts: "a) 1–2     b) 4–8     c) 15–20" },
      { q: "11. What separates one paragraph from the next?", opts: "One answer." },
      { q: "12. Name the four parts of a paragraph.", opts: "Four answers." },
    ] },
    { part: "Part 4 · Messages and forms", items: [
      { q: "13. Name the three parts of a message.", opts: "Three answers." },
      { q: "14. Which greeting is formal?", opts: "a) Hi Abel,     b) Dear Mr Bekele,     c) Hello," },
      { q: "15. What does “surname” mean on a form?", opts: "One sentence." },
      { q: "16. What does “occupation” mean?", opts: "One word." },
    ] },
    { part: "Part 5 · Writing", items: [
      { q: "17. Join: “The shop is small. It is always busy.”", opts: "Write one sentence." },
      { q: "18. Correct: “I buyed three book yesterday.”", opts: "Write the sentence." },
      { q: "19. Write a three-line message to a teacher saying you cannot come tomorrow.", opts: "Greeting, purpose, close." },
      { q: "20. WRITING: write a paragraph of 100 words about your town.", opts: "Topic sentence · three details · closing line." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 8 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is worth double." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nThis is the last quiz of Level 2. Question 20 is the end-of-level writing task — allow twenty minutes for it and mark it with the rubric from slide 49.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — which is correct?", a: "b) Sara and I", why: "Two capitals: the name and the word “I”, which is always capital in English." },
      { q: "Q2 — when is “I” capital?", a: "Always — at the start, in the middle and at the end.", why: "No other language does this, which is exactly why it is the commonest error in the course." },
      { q: "Q3 — correct the sentence", a: "I speak Amharic and English.", why: "Three capitals: the word I, and both language names. Languages take capitals in English." },
      { q: "Q4 — two more capitals", a: "Any two of: names of people · places · days · months · nationalities · the first word of a sentence.", why: "Days and months are the ones most often forgotten, because most languages do not capitalise them." } ],
    [ { q: "Q5 — the comma", a: "I bought bread, milk and eggs.", why: "One comma between list items. No comma before the final “and” in British English." },
      { q: "Q6 — “likes her job ___ pay is not good”", a: "b) but", why: "The two ideas are opposite. A comma goes before “but” when both halves are complete sentences." },
      { q: "Q7 — “I was late ___ the bus did not come”", a: "c) because", why: "The second half is the reason for the first. Reason follows “because”." },
      { q: "Q8 — what is wrong?", a: "A comma cannot join two complete sentences. Use a full stop, or add “and”.", why: "This is the comma splice, and it is the commonest punctuation error at this level." } ],
    [ { q: "Q9 — the topic sentence", a: "a) first", why: "The reader needs to know the subject immediately — and skimming readers look at the first sentence, from Module 6." },
      { q: "Q10 — how many sentences?", a: "b) 4–8", why: "Fewer is a note. More usually means two topics that should be separated." },
      { q: "Q11 — what separates paragraphs?", a: "A blank line.", why: "It is a signal to the reader: a new topic starts here. Without it, the text is a wall." },
      { q: "Q12 — the four parts", a: "Topic sentence · details · examples · closing sentence.", why: "Always in that order. The shape never changes, whatever the subject." } ],
    [ { q: "Q13 — the three parts of a message", a: "Greeting · purpose · close.", why: "The same three parts whether the message is formal or friendly. Only the words change." },
      { q: "Q14 — the formal greeting", a: "b) Dear Mr Bekele,", why: "Title plus surname. “Hi Abel” is friendly and “Hello,” alone is neutral but incomplete." },
      { q: "Q15 — “surname”", a: "Your family name — your father's name, the second one.", why: "Also called “family name”. Reversing it with the first name causes real problems on documents." },
      { q: "Q16 — “occupation”", a: "Your job.", why: "One of the six form words. It appears on almost every official form in English." } ],
    [ { q: "Q17 — join them", a: "The shop is small, but it is always busy.", why: "The two ideas are opposite, so “but” — with a comma, because both halves are complete." },
      { q: "Q18 — correct the sentence", a: "I bought three books yesterday.", why: "Two errors: “buyed” should be “bought” (Module 3) and “book” needs a plural -s." },
      { q: "Q19 — the message", a: "e.g. “Dear Mr Abel, I am sorry but I cannot come tomorrow because I am ill. Thank you. Hana.”", why: "All three parts, a reason given, and a slightly formal register for a teacher." },
      { q: "Q20 — the paragraph", a: "100 words · a topic sentence · three details · a closing line · at least three joining words", why: "Marked with the rubric from slide 49: shape, topic sentences, joining, tenses and punctuation, five marks each." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q2, Q8 and Q9 are the diagnostic block: the capital I, the comma splice, and the topic sentence. Errors in any of these need slides 16, 17 and 8 again before Level 3."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Write something real.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Write five sentences about your day", d: "Check every capital and full stop." },
      { t: "Join eight short sentences into four", d: "Use and, but, because and so — one each." },
      { t: "Write one message to a friend and one formal message", d: "The same information, two registers." },
      { t: "Fill in a form in English", d: "A real one if you can find it. Ask about any word you do not know." },
      { t: "Write your 100–150 word paragraph", d: "Then check it with the six questions." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "The week builds towards Friday's paragraph. Do not let learners write it on Monday — the earlier tasks are the preparation.",
      tip: "Wednesday's task is the register drill. Writing the same content twice makes the difference obvious in a way no explanation does.",
      activity: "Ask learners to bring one real English form they have seen — from a bank, a school or a clinic.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "This is your Level 2 final work. Bring it to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your 100–150 word paragraph", d: "Topic sentences · three joining words · one past and one future sentence." },
      { t: "One formal message and one friendly message", d: "The same information, written for two different readers." },
      { t: "Record your two-minute speaking challenge", d: "Spell your name · read your paragraph · name the topic sentence · both messages." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "This is the final work of Level 2. Mark it carefully with the slide 49 rubric, return it with written comments, and allow one rewrite.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Keep every paragraph. At the start of Level 3, hand them back — learners will see how much they have improved, and nothing motivates more than that.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaParagraph", title: "The paragraph — 25 marks", desc: "Length and shape (5) · topic sentences (5) · three joining words (5) · one past and one future sentence (5) · punctuation (5)." },
      { icon: "FaEnvelope", title: "Two messages — 10 marks", desc: "Three parts in each (4) · a clear difference in register (4) · correct punctuation (2)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "Name spelled clearly (2) · paragraph read with stops (3) · topic sentence identified (2) · both messages, audibly different (3)." },
      { icon: "FaStar", title: "Total — 45 marks", desc: "36+ excellent · 27–35 good · 18–26 keep practising · below 18 → revise Modules 6–8 before Level 3." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "This is the largest homework of Level 2 and it is the end-of-level assessment. Show this rubric before learners start writing.",
      tip: "Give the mark privately with two written comments: one thing done well, one thing to work on. Never read marks aloud.",
      mistakes: "Do not deduct for spelling errors in the paragraph beyond a couple of marks. Structure and joining are what this module taught.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaFont", title: "Capital letters", desc: "Sentence starts · names · places · days · months · languages · always I." },
      { icon: "FaEllipsisH", title: "Full stops and commas", desc: "One idea per sentence. Commas in lists, after First, and before but." },
      { icon: "FaLink", title: "Joining sentences", desc: "and · but · because · so. The biggest single improvement." },
      { icon: "FaParagraph", title: "The paragraph", desc: "Topic sentence · details · examples · closing. 100–150 words." },
      { icon: "FaEnvelope", title: "Messages and forms", desc: "Greeting · purpose · close. Surname · date of birth · occupation." },
      { icon: "FaCheckDouble", title: "Checking your own work", desc: "Six questions, then read it aloud. Two minutes finds most errors." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 3 and read warm-up task 3 again: what stops you writing? Most answers were “I do not know where to start” — and slide 20 answered that.",
      tip: "This is the last teaching summary of Level 2. Take a moment to name what learners have completed: eight modules, 608 slides, a full CEFR A1 to A2 course.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The writing toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.writeTint, line: "D9CBEE", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaCheckDouble", title: "The six checks", desc: "1  Capital start, full stop end?\n2  Is every “I” capital?\n3  Verb matches the subject?\n4  Plural -s where needed?\n5  Past verbs correct?  6  Read aloud." },
      { icon: "FaParagraph", title: "The paragraph shape", desc: "1  TOPIC SENTENCE — the general one\n2  DETAILS — two or three\n3  EXAMPLES\n4  CLOSING — one short line\n100–150 words. Blank line between." },
      { icon: "FaLink", title: "The four joining words", desc: "and  →  another similar idea\nbut  →  the opposite  (comma before)\nbecause  →  the reason\nso  →  the result\nTwo or three ideas. Not six." },
      { icon: "FaEnvelope", title: "Any message, three parts", desc: "1  GREETING  —  Dear Mr … / Hi …\n2  PURPOSE  —  in the FIRST line\n3  CLOSE  —  Thank you. / Thanks!\n\nThen your name." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. Better still, print all four boxes on one page as the Level 2 writing card.",
      tip: "Together with the reading card from Module 6 and the listening card from Module 7, this makes a three-page toolkit covering the whole second half of Level 2.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "You have finished Level 2",
    text: "Eight modules. You can now speak, read, listen and write in English about your real life.",
    sub: "You started Level 2 able to say a few sentences. You can now write a paragraph, follow directions,\nread a notice, take a phone message and hold a conversation. That is CEFR A2 — and it is real.",
    chips: ["NEXT — Level 3", "Intermediate English", "Fluency, accuracy and English for work"],
    notes: tn({
      time: "6 minutes. Do not rush this slide.",
      how: "Play each learner's Module 1 recording next to their Module 8 recording, if they agree. Eight modules of progress heard in four minutes is the most powerful thing you can do in this room.",
      mistakes: "Do not let learners leave thinking they are “not good yet”. A2 is a real, recognised, useful level — say so plainly.",
      tip: "Preview Level 3 honestly: it is where accuracy and fluency come together, and where English starts being used for work — interviews, presentations and the workplace.",
      activity: "Certificate moment: read every learner's name and say one specific thing each has improved at. It takes ten minutes and learners remember it for years.",
    }),
  });
};
