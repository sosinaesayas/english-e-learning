"use strict";
/* LEVEL 2 · MODULE 6 — Reading for Meaning   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 2", levelNo: LV.no, levelName: "Elementary\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Reading for Meaning",
    sub: "No new grammar. This module teaches you HOW to read — the three different ways, and what to do when you meet a word you do not know.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "3", v: "READING SKILLS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by holding up a page of English text and asking: “How long would it take you to read this?” Then say: “It depends why you are reading. Today you learn three different ways, and one of them takes thirty seconds.”",
      tip: "Learners believe reading means understanding every word. That belief is what makes them slow and anxious. Breaking it is the whole purpose of this module.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all about reading faster and with less fear.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Get the general idea of a text in thirty seconds", d: "Skimming. You do not read every word." },
      { t: "Find one piece of information quickly", d: "Scanning. A price, a time, a name — without reading the rest." },
      { t: "Guess the meaning of a word you do not know", d: "From the words around it. You will be right most of the time." },
      { t: "Read signs and notices in English", d: "The reading you will do most often in real life." },
      { t: "Answer a question the text does not answer directly", d: "Inference — working it out from what IS written." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask “Can you do this now?” Objective 3 is the one that changes how learners feel about reading — say so.",
      tip: "Return to this slide at the end of the module and ask again.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: how do you read?", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaEye", title: "1 · What do you do?", desc: "When you meet an English word you do not know, what do you do? Stop? Guess? Use a dictionary? Give up?" },
      { icon: "FaClock", title: "2 · How long?", desc: "How long does it take you to read one page of English? Be honest." },
      { icon: "FaMapSigns", title: "3 · English around you", desc: "Where do you see English writing every day? Name three places." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Task 1 is the diagnostic. Most learners will say they stop or use a dictionary. Both are slow, and both are what this module replaces.",
      mistakes: "Correct nothing in the warm-up.",
      tip: "Write the answers to task 1 on the board. At the end of the module, ask again — the answers should be different.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "You do not have to understand every word to understand the text.",
    sub: "Native speakers skip words constantly. They guess. They read some parts fast and some parts slowly.\nReading is not one skill — it is three, and you choose which one you need.",
    chips: ["Skim  —  the general idea", "Scan  —  one piece of information", "Read closely  —  every detail"],
    notes: tn({
      time: "5 minutes.",
      how: "Demonstrate it. Hold up a newspaper: “If I want to know if there is football news, I skim. If I want the score, I scan. If I want to understand an argument, I read closely. Same page, three different ways.”",
      mistakes: "The belief that every word must be understood is the single biggest barrier to reading fluency. Attack it directly and repeatedly.",
      tip: "Say plainly: a learner who stops at every unknown word will never read a page. A learner who keeps going will finish it and understand most of it.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.grid({
    sec: SEC.con, title: "Three ways to read", sub: "Choose the one that matches your purpose.",
    cols: 3, color: C.green, titleSize: 21, descSize: 16, shadow: true, tint: C.white,
    items: [
      { icon: "FaEye", title: "1 · SKIM", desc: "For the general idea.\n\nRead the title, the first line of each paragraph, and any big words. Ignore the rest.\n\nTime: 30 seconds." },
      { icon: "FaSearch", title: "2 · SCAN", desc: "For one piece of information.\n\nMove your eyes quickly, looking only for the thing you want — a number, a name, a time.\n\nTime: 15 seconds." },
      { icon: "FaBookOpen", title: "3 · READ CLOSELY", desc: "For every detail.\n\nRead every word, in order, slowly. Only do this when you really need to.\n\nTime: as long as it takes." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Demonstrate all three with the same short text: skim it aloud in thirty seconds, scan it for one number, then read one paragraph closely. Learners see that the text has not changed but the method has.",
      mistakes: "Learners use method 3 for everything, which is why reading feels impossible. Method 1 and 2 must be practised deliberately or they will never be used.",
      extra: "Match the method to the purpose: a menu is scanned, a news headline is skimmed, a medicine label is read closely.",
      tip: "Ask which method they would use for: a bus timetable, a text message, a job advert, a contract. The answers make the idea concrete.",
      activity: "Three purposes: give the same text three times with three different questions, one for each method. Time each round.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — skimming
  L.panelSide({
    sec: SEC.con, title: "Skimming — thirty seconds for the general idea", sub: "Read only these four things. Ignore everything else.",
    panelW: 6.8,
    panel: { label: "Where to look when you skim", color: C.green, tint: C.readTint, size: 19, lsm: 1.5,
      text: "1.  The TITLE.\n2.  The FIRST sentence of each paragraph.\n3.  Any names, numbers or dates.\n4.  The LAST sentence.\n\nThen ask yourself:\n“What is this text about?”" },
    side: { label: "Why it works", color: C.green, size: 16.5, items: [
      "Writers put the main idea in the first sentence of a paragraph. That is a rule of English writing.",
      "Names and numbers stand out on the page — your eye finds them without effort.",
      "The last sentence usually repeats the main point.",
      "Thirty seconds gives you enough to decide whether to read the rest at all.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Give a text and exactly thirty seconds. Then close the books and ask “What is it about?” Learners are always surprised at how much they got.",
      mistakes: "Learners cannot resist reading everything. Enforce the time limit strictly — the constraint is the teaching.",
      extra: "The first-sentence rule is genuine and useful. Point it out in every reading text for the rest of the level.",
      tip: "Skimming is a habit, not knowledge. It needs doing ten times, not explaining once.",
      activity: "Thirty-second challenge: three texts, thirty seconds each, one question each. Learners score themselves.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — scanning
  L.panelSide({
    sec: SEC.con, title: "Scanning — fifteen seconds for one fact", sub: "You are not reading. You are searching.",
    panelW: 6.8,
    panel: { label: "How to scan", color: C.green, tint: C.readTint, size: 19, lsm: 1.5,
      text: "1.  Know EXACTLY what you want.\n     A price? A time? A name?\n2.  Picture what it looks like.\n     Numbers look like numbers.\n3.  Move your eyes fast\n     down the page, not across.\n4.  Stop when you find it.\n     Do not read anything else." },
    side: { label: "When you scan in real life", color: C.green, size: 16.5, items: [
      "A bus or plane timetable — you want one time.",
      "A price list or a menu — you want one price.",
      "A phone contact list — you want one name.",
      "A form — you want the box you must fill in.",
      "A notice on a door — you want the opening hours.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Give a timetable or price list and call out one item. First learner to find it wins. Repeat ten times — it becomes a game and the skill builds fast.",
      mistakes: "Learners start at the top and read every line. Teach the eye movement explicitly: down the page, not across the lines.",
      extra: "Scanning is easiest with numbers and names because they look different from ordinary words. Point that out.",
      tip: "This is the reading skill learners will use most often outside class, and it is the easiest to teach. Do not skip it.",
      activity: "Scanning race: a price list on the board and ten questions. Fastest correct answer wins each round.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — guessing
  L.table({
    sec: SEC.con, title: "Guessing a word you do not know", sub: "Four clues that are almost always there.",
    table: {
      color: C.green, rowH: 0.54, fontSize: 17.5, headSize: 16, colW: [2.8, 4.2, 5.133],
      rows: [
        ["Clue", "Ask yourself", "Example"],
        ["The other words", "What would make sense here?", "“He was exhausted after the long journey.” — tired?"],
        ["The kind of word", "Is it a thing, an action or a describing word?", "“a heavy suitcase” — suitcase must be a thing you carry"],
        ["Is it positive or negative?", "Do the other words sound good or bad?", "“The road was terrible.” — something bad"],
        ["Does it look like another word?", "Do you know part of it?", "“unhappy” — you know “happy”, and “un” makes it opposite"],
      ],
    },
    note: "You do not need the exact meaning. “Something bad about the road” is enough to keep reading. Perfect understanding is not the goal.",
    notes: tn({
      time: "14 minutes. This is the most important slide in the module.",
      how: "Give five sentences with a nonsense word in each and have learners guess. They will be right most of the time, which proves the point better than any explanation.",
      mistakes: "Learners believe guessing is cheating. Say clearly: guessing from context is what fluent readers do constantly, in every language, including their own.",
      extra: "Prefixes worth knowing now: un- (not), re- (again). Two prefixes explain hundreds of words.",
      tip: "The last row is powerful. Learners already know thousands of word parts — showing them that “unhappy” contains “happy” unlocks a lot of vocabulary at once.",
      activity: "Nonsense words: give six sentences containing invented words and have learners guess each meaning and say which clue they used.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — signs and notices
  L.grid({
    sec: SEC.con, title: "Signs and notices — the reading you do every day", sub: "Short, everywhere, and they matter.",
    cols: 4, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaDoorOpen", title: "OPEN · CLOSED", desc: "“Open 8:00 – 18:00”\n“Closed on Sunday”\n“Closed for lunch”" },
      { icon: "FaExclamationTriangle", title: "Warnings", desc: "“Careful!”\n“Wet floor”\n“No entry”\n“Do not touch”" },
      { icon: "FaMapSigns", title: "Directions", desc: "“Entrance”  ·  “Exit”\n“Way in”  ·  “Way out”\n“Toilets  →”" },
      { icon: "FaClipboardList", title: "Information", desc: "“Please wait here”\n“Pay at the counter”\n“Free”  ·  “Full”" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Signs use very few words and often no verbs. Teach them as whole images rather than sentences — that is how they are read in real life.",
      mistakes: "Learners try to translate signs word by word. “No entry” has no verb and cannot be translated literally. Teach the meaning, not the grammar.",
      extra: "Bring photographs of real English signs from Bole airport, a hotel, a bank or a supermarket. Real signs are far better than invented ones.",
      tip: "This is the most immediately useful slide in the module. A learner who can read signs is safer and more independent the same day.",
      activity: "Sign hunt: learners photograph or list five English signs they see before the next lesson and explain what each means.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — inference
  L.compare({
    sec: SEC.con, title: "Inference — what the text does NOT say",
    sub: "Some answers are in the text. Some you have to work out.",
    left: { h: "Written directly", items: ["“The shop opens at eight.”", "→ What time does it open?", "The answer is IN the text.", "You only have to find it."] },
    right: { h: "You work it out", items: ["“The shop opens at eight. Abel arrived at seven thirty.”", "→ Did Abel wait?", "The text never says “he waited”.", "But you know he did."] },
    note: "Inference is using what IS written to answer what is NOT. Exams always ask at least one of these — and so does real life.",
    notes: tn({
      time: "12 minutes.",
      how: "Give five short texts, each with one direct question and one inference question. Learners quickly see the difference between finding and working out.",
      mistakes: "Learners look for the answer in the text and, not finding it, say there is no answer. Teach them to ask “what does this tell me?” rather than “where does it say?”",
      extra: "Inference questions often start with “Why…?”, “How does he feel?” or “What kind of person is…?”",
      tip: "Say clearly that an inference answer must still be based on the text. A guess with no evidence is not inference — it is invention.",
      activity: "Two questions: for every reading text from now on, ask one direct question and one inference question, and name which is which.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "sign", ipa: "/saɪn/", pos: "noun", icon: "FaMapSigns",
      meaning: "A board with words or a picture that tells you something.",
      example: "The sign says the shop is closed.",
      mistake: "The G is SILENT — say /saɪn/, like “fine”. Not “sig-n”. Careful: “signal” and “signature” DO pronounce the g.",
      notes: tn({ time: "6 minutes.",
        how: "Write the word and cross out the g. Then say it three times. Silent letters must be shown on the board, not explained.",
        mistakes: "The silent g is unpredictable and learners rightly find it strange. Just teach it and move on.",
        extra: "“The sign says…” is the natural way to report what a sign tells you. Drill that phrase.",
        tip: "Signs are the reading learners meet most often in daily life, so this word earns its place.",
        activity: "What does the sign say? Show five signs and have learners report each with the fixed phrase." }) },

    { word: "notice", ipa: "/ˈnəʊtɪs/", pos: "noun and verb", icon: "FaClipboardList",
      meaning: "A short written message on a wall or door. Also the verb: to see something.",
      example: "There is a notice on the door. Did you notice the sign?",
      mistake: "Two meanings, two uses. As a noun it is a piece of paper; as a verb it means to see or become aware of something.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the noun first, since that is the reading use, then mention the verb briefly with one example.",
        mistakes: "Learners confuse “notice” with “note”. A note is something you write for yourself; a notice is for other people.",
        extra: "notice board · put up a notice · Did you notice…?",
        tip: "A notice board in the classroom, used in English, gives daily reading practice for free.",
        activity: "Class notice board: learners write and post three notices in English." }) },

    { word: "closed", ipa: "/kləʊzd/", pos: "adjective", icon: "FaLock",
      meaning: "Not open. You cannot go in.",
      example: "The bank is closed on Sunday. Closed for lunch, 12:00 – 14:00.",
      mistake: "One syllable — /kləʊzd/, not “clo-sed”. The -ed does not add a beat, because the base does not end in t or d.",
      notes: tn({ time: "6 minutes.",
        how: "This is a perfect chance to revise the -ed sound rule from Module 3: “closed” is one syllable, “wanted” is two.",
        mistakes: "Saying “clo-sed” with two syllables. Clap it once and the error disappears.",
        extra: "open · closed · full · free · busy — five adjectives that appear on signs constantly.",
        tip: "Pair it with “open”. The two words together let learners read most shop doors in the country.",
        activity: "Opening hours: give five real opening-hours notices and ask whether the shop is open at a given time." }) },

    { word: "entrance", ipa: "/ˈentrəns/", pos: "noun", icon: "FaDoorOpen",
      meaning: "The way into a building.",
      example: "The entrance is at the front. Use the side entrance.",
      mistake: "Stress on the FIRST syllable: EN-trance. And the opposite is “exit”, not “outrance”.",
      notes: tn({ time: "6 minutes.",
        how: "Teach it with its opposite, “exit”, and with the simpler signs “way in” and “way out” which mean the same thing.",
        mistakes: "The “tr” cluster and the stress. Drill the first syllable hard.",
        extra: "entrance · exit · way in · way out · push · pull — six words that get you through any door.",
        tip: "“Push” and “pull” are worth thirty seconds here. Learners meet them on every glass door and getting them wrong is publicly embarrassing.",
        activity: "Door signs: teach push, pull, entrance, exit and test them with mimes." }) },

    { word: "careful", ipa: "/ˈkeəfʊl/", pos: "adjective", icon: "FaExclamationTriangle",
      meaning: "Giving attention so nothing bad happens.",
      example: "Careful! The floor is wet. Be careful on the road.",
      mistake: "On a sign it appears alone — “Careful!” In a sentence you need “be”: “Be careful.” Do not say “Do careful.”",
      notes: tn({ time: "6 minutes.",
        how: "Show the sign form and the sentence form together. Signs drop words; sentences do not.",
        mistakes: "“Do careful” is a transfer error. English uses “be” with adjectives, as learned in Level 1.",
        extra: "Careful · Danger · Warning · Wet floor · No entry — the five most common warning signs.",
        tip: "Warning signs carry real safety information. Say that plainly — this is one place where reading English matters immediately.",
        activity: "Safety signs: show five warning signs and have learners explain each in a full sentence." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Reading Language 1 of 5" }),
    title: "Joining words — and, but, so, because",
    sub: "These four words tell you how two ideas are connected.",
    table: {
      color: C.gram, rowH: 0.52, fontSize: 17.5, headSize: 16, colW: [2.4, 3.6, 6.133],
      rows: [
        ["Word", "It tells you", "Example"],
        ["and", "another similar idea is coming", "The shop is open and the bank is open."],
        ["but", "the opposite is coming", "The shop is open but the bank is closed."],
        ["because", "the REASON is coming", "I was late because the bus did not come."],
        ["so", "the RESULT is coming", "The bus did not come, so I was late."],
      ],
    },
    note: "Notice “because” and “so” give the same information in the opposite order.  Reason + so + result.   Result + because + reason.",
    notes: tn({
      time: "12 minutes.",
      how: "These words are signposts. When a reader sees “but”, they know something opposite is coming before they read it. Teach them as prediction tools, not just as grammar.",
      mistakes: "“Because” and “so” are frequently swapped. Draw an arrow on the board showing the direction of the logic in each.",
      extra: "Give ten sentence halves and have learners join them with the right word.",
      tip: "This is genuinely a reading skill: recognising these four words lets a reader follow an argument without understanding every word between them.",
      activity: "Predict the ending: read half a sentence up to the joining word and have learners guess how it ends.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Reading Language 2 of 5" }),
    title: "Sequence words — the order of events",
    sub: "These words tell you where you are in a story or a set of instructions.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [3.2, 3.4, 5.533],
      rows: [
        ["Word", "Position", "Example"],
        ["First · At first", "the beginning", "First, boil the water."],
        ["Then · Next · After that", "the middle", "Then add the coffee."],
        ["Finally · In the end · At last", "the end", "Finally, pour it into the cups."],
        ["Before · After", "relative order", "Wash your hands before you eat."],
      ],
    },
    note: "In instructions these words are the map. If you catch only the sequence words, you already know the shape of the whole text.",
    notes: tn({
      time: "10 minutes.",
      how: "Read a set of instructions aloud and have learners raise a hand only at the sequence words. They will catch the structure without catching every word.",
      mistakes: "“At last” and “finally” are close in meaning but “at last” suggests relief after a long wait. Mention it once.",
      extra: "Recipes, medicine instructions and directions all use these words. Bring one real example of each.",
      tip: "This connects directly to Module 3's story-telling. The same words that structure a story structure a set of instructions.",
      activity: "Jumbled instructions: give six steps out of order and have learners use the sequence words to reorder them.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Reading Language 3 of 5" }),
    title: "Who is “he”? — following pronouns",
    sub: "A pronoun always points back to somebody already named. Find who.",
    left: { h: "Clear — you can follow it", items: ["Sara went to the market.", "She bought tomatoes.", "→ “She” = Sara.", "Abel has a shop. It is in Merkato.", "→ “It” = the shop."] },
    right: { h: "Harder — two possibilities", items: ["Sara met Hana. She was late.", "→ Who was late?", "You must read on to find out.", "Good writers avoid this.", "Good readers notice it."] },
    note: "When you read “he”, “she”, “it” or “they”, stop for one second and ask WHO. If you lose track of that, you lose the whole text.",
    notes: tn({
      time: "12 minutes.",
      how: "Take a short text and have learners draw an arrow from every pronoun back to the person it refers to. It is a visual, physical task and it makes the skill obvious.",
      mistakes: "Learners read pronouns without checking, then become confused three sentences later and blame their vocabulary. The real problem is lost reference.",
      extra: "“They” is the hardest because it can refer to two people mentioned separately.",
      tip: "This is one of the highest-value reading skills at this level and it is almost never taught. Give it the full twelve minutes.",
      activity: "Arrow drill: give a ten-line text and have pairs draw arrows from every pronoun to its noun. Count how many they find.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Reading Language 4 of 5" }),
    title: "Words that add or contrast",
    sub: "Four small words that change the direction of a text.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [2.8, 3.6, 5.533],
      rows: [
        ["Word", "It means", "Example"],
        ["also · too", "one more thing, the same direction", "She speaks English. She also speaks Oromo."],
        ["however · but", "the opposite is coming", "The room was small. However, it was clean."],
        ["for example", "an example is coming", "Some fruits are cheap — for example, bananas."],
        ["that is why", "the result of what came before", "It rained. That is why the road was bad."],
      ],
    },
    note: "“Too” goes at the END of the sentence. “Also” goes in the MIDDLE, before the main verb.",
    notes: tn({
      time: "10 minutes.",
      how: "Focus on the position rule for “also” and “too”, which is the only new grammar in the module. Everything else is recognition.",
      mistakes: "“She speaks also Oromo” — wrong position. And “She speaks Oromo also” at the end should be “too”.",
      extra: "“However” is more formal than “but” and usually starts a new sentence. Learners will meet it in reading long before they use it.",
      tip: "Teach these for recognition, not production. Learners need to understand them when reading; producing them comes in Level 3.",
      activity: "Direction change: read a text aloud and have learners raise a hand every time the direction changes at “however” or “but”.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Reading Language 5 of 5" }),
    title: "Put it all together — how a good reader reads", sub: "Five things a fluent reader does automatically.",
    color: C.gram, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Decides WHY they are reading first", d: "General idea? One fact? Every detail? The purpose chooses the method." },
      { t: "Reads the title and the first line before anything else", d: "Thirty seconds of skimming saves five minutes of confusion." },
      { t: "Does not stop at unknown words", d: "Guesses from the four clues and keeps going. Comes back later only if it matters." },
      { t: "Follows the joining and sequence words", d: "and · but · because · so · then · finally. These carry the shape of the text." },
      { t: "Checks who “he”, “she” and “they” refer to", d: "One second each time. Losing the reference loses the text." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Read a text aloud and narrate your own thinking as you go: “I do not know that word — but it is something about the road, and it sounds bad, so I keep going.” Modelling the internal process is the most useful thing you can do here.",
      mistakes: "All five are habits. None can be learned by explanation alone — they need repeated practice with a time limit.",
      extra: "Apply all five to every reading text for the rest of the level, naming which one you are using.",
      tip: "Print these five as a bookmark. Learners who have them in front of them use them; learners who heard them once do not.",
      activity: "Think aloud: a volunteer reads a short text and says out loud what they are doing at each step.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — which method?", sub: "The purpose chooses the method.", items: [
      { q: "You want to know if a shop is open on Sunday. Which method?", a: "Scan.", why: "You want one piece of information and you know exactly what it looks like — a day of the week on a notice." },
      { q: "A friend sends a long message. You want to know if it is good news. Which method?", a: "Skim.", why: "You want the general idea only. Read the first line and any obvious words, and decide from there." },
      { q: "You have medicine and need to know how many tablets to take. Which method?", a: "Read closely.", why: "Every detail matters and a mistake is dangerous. This is one of the few times close reading is essential." },
    ] },
    { title: "Guided examples 2 — guessing a word", sub: "Use the four clues.", items: [
      { q: "“The road was terrible, so the journey took ten hours.” What does “terrible” mean?", a: "Very bad.", why: "The result — ten hours — tells you it was bad. You did not need to know the word to understand the sentence." },
      { q: "“He carried a heavy suitcase to the bus.” What is a suitcase?", a: "A bag for clothes when you travel.", why: "It is carried, it is heavy and it goes on a bus. It must be a thing you take on a journey." },
      { q: "“She was unhappy with the price.” What does “unhappy” mean?", a: "Not happy.", why: "You already know “happy”, and “un-” at the front makes it the opposite. One prefix explains hundreds of words." },
    ] },
    { title: "Guided examples 3 — joining words", sub: "The word tells you what is coming.", items: [
      { q: "“The shop is open ___ the bank is closed.”", a: "but", why: "The two ideas are opposite — one open, one closed — so “but”." },
      { q: "“I was late ___ the bus did not come.”", a: "because", why: "The second half is the REASON for the first. Reason comes after “because”." },
      { q: "“The bus did not come, ___ I was late.”", a: "so", why: "Same two facts, opposite order. The result comes after “so”." },
    ] },
    { title: "Guided examples 4 — following pronouns", sub: "Ask WHO every time.", items: [
      { q: "“Abel went to Merkato. He bought onions.” Who bought onions?", a: "Abel.", why: "“He” points back to the last man named. Only one person is mentioned, so there is no doubt." },
      { q: "“Sara has a shop. It is in Piassa.” What is in Piassa?", a: "The shop.", why: "“It” refers to a thing, not a person — so it must be the shop, not Sara." },
      { q: "“Hana met Mimi. She was tired.” Who was tired?", a: "It is not clear — you must read on.", why: "Both are women, so “she” could be either. Noticing that the text is unclear is itself a reading skill." },
    ] },
    { title: "Guided examples 5 — inference", sub: "The answer is not written, but it is there.", items: [
      { q: "“The shop opens at eight. Abel arrived at seven thirty.” Did Abel wait?", a: "Yes, he waited for thirty minutes.", why: "The text never says “he waited”. You worked it out from two times." },
      { q: "“Sara looked at the price and put the bag back.” Why did she put it back?", a: "It was too expensive.", why: "The text does not say “expensive”. But looking at a price and then putting something back tells you." },
      { q: "“He opened his umbrella and walked quickly.” What was the weather?", a: "It was raining.", why: "Rain is never mentioned. The umbrella and the quick walking are the evidence." },
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
    title: "Asking about a notice",
    sub: "Mimi cannot understand a sign at the bank.",
    turns: [
      { who: "MIMI", text: "Excuse me. What does this notice say?", side: "l" },
      { who: "CLERK", text: "It says the bank is closed on Saturday afternoon.", side: "r" },
      { who: "MIMI", text: "So it is open on Saturday morning?", side: "l" },
      { who: "CLERK", text: "Yes, until twelve o'clock.", side: "r" },
      { who: "MIMI", text: "And what does this word mean — “counter”?", side: "l" },
      { who: "CLERK", text: "It is the desk where you pay. Over there.", side: "r" },
    ],
    note: "Two useful questions:  “What does this notice say?”  and  “What does this word mean?”  Both are from Module 5.",
    notes: tn({
      time: "12 minutes.",
      how: "Listen books closed, chorus, pair reading, then perform with a real sign or notice you have brought.",
      mistakes: "Mimi's third line is an inference stated as a question — she works out the opposite from what the notice says. Point that out; it is inference in a real conversation.",
      extra: "Bring three real notices in English and have pairs act out this dialogue with each one.",
      tip: "Asking about a notice is a normal, everyday act. Learners avoid it out of embarrassment; this dialogue makes it routine.",
      activity: "Notice role play: one learner holds a notice, the other asks the two questions and reports back to the class.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Talking about something you read",
    sub: "Dawit tells Sara about a job advertisement.",
    turns: [
      { who: "DAWIT", text: "I read an advertisement for a job at the hotel.", side: "l" },
      { who: "SARA", text: "Really? What does it say?", side: "r" },
      { who: "DAWIT", text: "They want somebody with good English. The hours are eight to four.", side: "l" },
      { who: "SARA", text: "Did it say how much they pay?", side: "r" },
      { who: "DAWIT", text: "No, it did not. But it says “good salary”.", side: "l" },
      { who: "SARA", text: "So it is probably a good job. Are you going to apply?", side: "r" },
    ],
    note: "Sara's last line is inference: the advertisement never says “good job”. She worked it out.",
    notes: tn({
      time: "12 minutes.",
      how: "After reading, ask which parts Dawit scanned for and which he skimmed. The hours and the salary are scanned; the general sense is skimmed.",
      mistakes: "“Did it say…?” is a past question about a text. Learners find that odd because a text does not speak. Teach it as a fixed phrase.",
      extra: "“Probably” is new and very useful for inference. Teach it here: it means you are not certain but you think so.",
      tip: "This dialogue models reporting what you read, which is a real skill for work and for study. Point that out to working adults.",
      activity: "Report an advert: bring three job advertisements and have pairs report each other's in the same way.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful phrases for talking about texts",
    sub: "Six phrases for asking about and reporting what you read.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaQuestion", title: "“What does it say?”", desc: "About a notice, a message or an advert." },
      { icon: "FaBookOpen", title: "“It says …”", desc: "The natural way to report a text. Not “it is written”." },
      { icon: "FaEye", title: "“What does this word mean?”", desc: "From Module 5. The most useful question for reading." },
      { icon: "FaLightbulb", title: "“I think it means …”", desc: "For when you have guessed. Honest and useful." },
      { icon: "FaExclamationTriangle", title: "“I do not understand this part.”", desc: "Precise — it shows exactly where the problem is." },
      { icon: "FaStar", title: "“So it is probably …”", desc: "For stating what you worked out." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill all six in chorus, then in pairs. Phrase 5 is the precise one: naming which part you do not understand gets far better help than saying you understand nothing.",
      mistakes: "“It is written that…” is a direct translation. English says “It says…”.",
      extra: "Add “Can you read this for me?” which learners will use in real life more than any of the others.",
      tip: "Phrase 4 gives learners permission to guess out loud, which is what this whole module is trying to teach.",
      activity: "Notice pass: pass one real notice around and each learner must use a different one of the six phrases about it.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "YOU", text: "Excuse me. What ______ this notice ______ ?", side: "l" },
      { who: "GUARD", text: "It says the office is closed today.", side: "r" },
      { who: "YOU", text: "______ it is open tomorrow?", side: "l" },
      { who: "GUARD", text: "Yes, from eight o'clock.", side: "r" },
      { who: "YOU", text: "What ______ this word ______ — “appointment”?", side: "l" },
      { who: "GUARD", text: "It is the time they agree to see you.", side: "r" },
    ],
    note: "Use these:  “does … say”  ·  “So”  ·  “does … mean”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps, then three pairs perform before you reveal the answers.",
      answers: "1 does ... say · 2 So · 3 does ... mean",
      mistakes: "Both question forms are from Module 5 and both need the helper “does”. That is deliberate revision.",
      tip: "Gap 2 is an inference. The notice does not say the office is open tomorrow — the learner works it out.",
      activity: "Do it again with a different notice and a different unknown word.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — read and report", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Skim a text for thirty seconds, then tell your partner what it is about", d: "One sentence only." },
      { t: "Scan a timetable and answer your partner's three questions", d: "Fifteen seconds each." },
      { t: "Find three words you do not know and guess them aloud", d: "Say which clue you used each time." },
      { t: "Read a short text and ask your partner one inference question", d: "The answer must not be written in the text." },
    ],
    notes: tn({
      time: "10 minutes for all four rounds.",
      how: "Time each round strictly. The time limit is what forces the skill — without it learners revert to reading every word.",
      mistakes: "Round 4 is the hardest to set up. Model one inference question yourself before pairs try.",
      tip: "Round 3 is the most valuable. Saying the guess and the clue aloud makes the strategy conscious and repeatable.",
      activity: "Best guess: after round 3, three learners share their best guess and the class judges whether the clue was good.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the thirty-second skim", sub: "Three texts. Thirty seconds each. Speak, do not write.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "Skim and say what it is about", d: "One sentence. “It is about a job at a hotel.”" },
      { t: "Skim and say where you would find it", d: "A newspaper? A door? A phone? A school?" },
      { t: "Skim and say whether you need to read it properly", d: "Yes or no, and why. That is the real purpose of skimming." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Round C is the point of skimming in real life: deciding whether a text is worth your time. Say so.",
      mistakes: "Learners exceed the time limit. Use a visible timer and stop them firmly.",
      extra: "Use real texts: a newspaper page, a leaflet, a job advert, a message, a notice.",
      tip: "Skimming feels wrong to learners because it feels lazy. Reframe it: it is what allows you to read ten texts instead of one.",
      activity: "Speed round: six texts, thirty seconds each, one sentence each. Six minutes total.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the scanning race", sub: "In pairs. Fifteen seconds per question.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "What time does the first bus leave?", d: "From a timetable." },
      { t: "How much is a kilo of tomatoes?", d: "From a price list." },
      { t: "Which day is the office closed?", d: "From a notice." },
      { t: "What is the phone number?", d: "From an advertisement." },
      { t: "Who wrote the message?", d: "From a message." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Prepare five real documents. Learners work in pairs and race. The competition removes the temptation to read everything.",
      mistakes: "Learners start reading from the top. Remind them: eyes down the page, looking only for the shape of the thing they want.",
      extra: "Numbers and names are easiest to scan for because they look different from ordinary words.",
      tip: "This is the reading skill learners will use most often outside class. Practise it until it is fast.",
      activity: "Fastest finder: keep score across the five rounds and announce the winning pair.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — silent letters",
    sub: "Some letters are written but never said. You must know which.",
    left: { h: "Say the word like this", items: ["sign  /saɪn/", "listen  /ˈlɪsən/", "answer  /ˈɑːnsə/", "write  /raɪt/", "hour  /aʊə/", "half  /hɑːf/"] },
    right: { h: "The silent letter", items: ["the G is silent", "the T is silent", "the W is silent", "the W is silent", "the H is silent", "the L is silent"] },
    note: "You cannot guess these. They must be learned one by one — but there are not many, and you already know most of them.",
    notes: tn({
      time: "10 minutes.",
      how: "Write each word on the board and physically cross out the silent letter. Seeing the letter crossed out is far more memorable than being told.",
      mistakes: "Learners pronounce silent letters because they are reading, not listening. This module is about reading, so the error appears here more than anywhere else.",
      extra: "More silent letters: know, knee, walk, talk, could, would, island.",
      tip: "All six words on this slide have already appeared in the course. Point that out — learners have been saying most of them correctly.",
      activity: "Cross it out: give ten words and have learners cross out the silent letter in each, then say the word.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — read aloud and explain", sub: "Work in pairs. Two minutes per task.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Read a short text aloud, stopping at every full stop", d: "Your partner listens for the stops." },
      { t: "Explain in your own words what it said", d: "Three sentences. Do not read it again." },
      { t: "Explain one word you guessed and how you guessed it", d: "Name the clue you used." },
      { t: "Ask your partner one inference question about the text", d: "The answer must not be written in it." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Task 2 is the real comprehension test: explaining in your own words proves understanding in a way that answering questions does not.",
      mistakes: "Learners re-read the text instead of explaining from memory. Take the text away for task 2.",
      extra: "Task 1 also revises the reading-aloud skill from Level 1: stopping at full stops.",
      tip: "Task 3 makes the guessing strategy visible and repeatable. Do not skip it.",
      activity: "Explain to the class: two learners explain their text to the whole group without looking at it.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Read a short text aloud", d: "Thirty seconds. Stop at every full stop." },
      { t: "Say what it is about in one sentence", d: "The skimming skill." },
      { t: "Give three facts from the text", d: "The scanning skill." },
      { t: "Say one word you did not know and what you think it means", d: "Name the clue you used." },
      { t: "Answer one inference question about it", d: "Something the text does not say directly." },
    ],
    notes: tn({
      time: "14 minutes including listening back.",
      how: "Give every learner the same short text so the recordings are comparable. Record on a phone, or perform live to a partner.",
      mistakes: "Step 4 is where learners say “I do not know” instead of guessing. Insist on a guess — a wrong guess with a clue is worth more than silence.",
      answers: "SUCCESS CRITERIA: reading aloud with stops at full stops · a one-sentence summary · three correct facts · a reasonable guess with a named clue · an inference supported by the text.",
      tip: "Step 5 is the exam skill. Every reading paper in Level 2 and Level 3 contains at least one inference question.",
      activity: "Keep every recording for the end-of-level comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — someone reads a notice aloud", sub: "Listen twice. Write the information.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17.5, lsm: 1.36,
      text: "“The health centre is open from Monday to Friday,\neight o'clock in the morning until five in the evening.\nOn Saturday it is open from eight until twelve.\nIt is closed on Sunday.\nFor an appointment, please call zero nine one one,\ntwo three four, five six seven.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write the opening hours for the week.",
      "Write the Saturday hours.",
      "Which day is it closed?",
      "Write the phone number.",
    ] },
    notes: tn({
      time: "11 minutes.",
      how: "This is a scanning task done by ear. Read twice at natural speed and tell learners in advance exactly what to listen for.",
      mistakes: "The phone number is said digit by digit, as in Level 1 Module 2. Learners who try to hear whole numbers will fail.",
      extra: "Add a fifth item if the class is strong: “Closed on public holidays.”",
      answers: "Mon–Fri 8:00–17:00 · Saturday 8:00–12:00 · closed Sunday · 0911 234 567",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check the times and the number.",
    size: 17,
    items: [
      { q: "1 — the weekday hours", a: "Monday to Friday, 8:00 to 17:00.", why: "“Five in the evening” is 17:00 or 5 p.m. Both ways of writing it are correct." },
      { q: "2 — Saturday", a: "8:00 to 12:00.", why: "Half a day. Notice the pattern: many Ethiopian offices work Saturday mornings only." },
      { q: "3 — the closed day", a: "Sunday.", why: "The notice says it directly. This is a scanning answer, not an inference." },
      { q: "4 — the phone number", a: "0911 234 567", why: "Said digit by digit, with “zero” or “oh” for 0. Never as whole numbers." },
      { q: "5 — Could you go at 3 p.m. on Saturday?", a: "No — it closes at twelve on Saturday.", why: "This one is inference. The notice never says “closed at three”; you work it out from the hours." },
    ],
    notes: keyNotes("Item 5 is the inference item and it is deliberately not in the original task. Ask it after marking — learners who can answer it have the skill."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — a message about a text", sub: "Listen twice, then answer the questions.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.34,
      text: "SARA:  Did you read the notice on the door?\nABEL:  No, I did not. What does it say?\nSARA:  It says the water will be off on Thursday.\nABEL:  All day?\nSARA:  From eight in the morning until four in the afternoon.\nABEL:  So we should fill the containers on Wednesday night.\nSARA:  Yes. And it says they are sorry for the problem." },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. Where was the notice?",
      "2. What will happen on Thursday?",
      "3. What time will the water come back?",
      "4. What does Abel decide to do?",
      "5. Is Abel's decision written in the notice?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Read twice, changing your voice for the two speakers. Question 5 is the key one and it teaches the difference between the text and the reader's own thinking.",
      mistakes: "Question 4 requires holding Abel's line, which is the only place his decision appears. Learners look for it in the notice.",
      extra: "Ask a sixth question: “How do you know they are sorry?” The answer is that the notice says so, reported by Sara.",
      answers: "1 On the door. · 2 The water will be off. · 3 At four in the afternoon. · 4 Fill the containers on Wednesday night. · 5 No — it is his own idea.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Which answers are in the text, and which are worked out?",
    size: 17,
    items: [
      { q: "1 — where was the notice?", a: "On the door.", why: "Sara says it directly in her first line. A finding answer." },
      { q: "2 — what will happen?", a: "The water will be off.", why: "“Will be off” is the future from Module 4, used for a scheduled event." },
      { q: "3 — when will it come back?", a: "At four in the afternoon.", why: "The notice gives the end time, so the water returns then. A small inference from a stated fact." },
      { q: "4 — what does Abel decide?", a: "To fill the containers on Wednesday night.", why: "He says it himself. It is in the conversation but NOT in the notice." },
      { q: "5 — is it in the notice?", a: "No. It is Abel's own idea, based on what the notice says.", why: "This is the difference between what a text says and what a reader does with it. Both matter." },
    ],
    notes: keyNotes("Questions 4 and 5 together teach the most important idea in the module: a good reader adds their own thinking to the text without confusing the two."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "Reading and listening use the same skills", sub: "Four strategies that work for both.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaEye", title: "Know your purpose first", desc: "Are you listening for the general idea or for one fact? It changes what you pay attention to." },
      { icon: "FaHandPaper", title: "Do not stop at one unknown word", desc: "In reading you can go back. In listening you cannot — so keeping going matters even more." },
      { icon: "FaLightbulb", title: "Guess from what is around it", desc: "The same four clues work: the other words, the kind of word, positive or negative, and word parts." },
      { icon: "FaComments", title: "Check who “he” and “they” are", desc: "In a conversation with several people, losing track of who is who loses the whole meaning." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Make the connection explicit: everything learned in this module about reading applies to listening too, which doubles its value.",
      mistakes: "Learners treat the two skills as unrelated. Naming the overlap makes the strategies transfer.",
      tip: "The difference that matters: in reading you control the speed; in listening you do not. That is why the strategies matter more in listening, which is Module 7.",
      activity: "Same text, two ways: read a text aloud and then give it to learners in writing. Ask which was easier and why.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — signs and notices", sub: "Six real signs. What does each one tell you?",
    panelW: 7.4,
    panel: { label: "Read them", color: C.read, tint: C.readTint, size: 20, lsm: 1.55,
      text: "1.  OPEN  ·  Monday – Saturday  ·  8:00 – 18:00\n2.  CLOSED FOR LUNCH  12:00 – 14:00\n3.  NO ENTRY\n4.  PLEASE WAIT HERE\n5.  PAY AT THE COUNTER\n6.  CAREFUL — WET FLOOR" },
    side: { label: "Your task", color: C.read, size: 17, items: [
      "For each sign, say in ONE sentence what it means.",
      "Which two signs tell you what NOT to do?",
      "Which sign would you see in a shop?",
      "Which sign is about your safety?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Signs have very few words and often no verbs. Teach learners to expand each one into a full sentence — that is how you check they have understood it.",
      mistakes: "“No entry” has no verb and cannot be translated word by word. Teach the meaning as a whole.",
      extra: "Bring real photographs if you can. Signs from Bole airport, a bank or a supermarket are ideal.",
      tip: "This is the most immediately useful reading in the whole course. A learner who can read these six signs is more independent from today.",
      activity: "Expand the sign: every learner turns three signs into full sentences and reads them aloud.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Use scanning. You have fifteen seconds for each.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence. Look back at the signs.",
    items: [
      "Can you go to the shop at seven in the morning?",
      "Can you go at one o'clock in the afternoon?",
      "It is Sunday. Is the shop open?",
      "Which sign tells you the floor is dangerous?",
      "Where do you pay?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Questions 1, 2 and 3 are all inference: none of the signs says “no”. Learners must work each one out from the hours.",
      mistakes: "Learners look for the word “no” and, not finding it, say the answer is not there. That is exactly the habit this module breaks.",
      tip: "Time them. Fifteen seconds per question forces scanning rather than reading.",
      answers: "1 No — it opens at eight. · 2 No — it is closed for lunch until two. · 3 No — it is open Monday to Saturday only. · 4 “Careful — wet floor.” · 5 At the counter.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Notice how many answers were NOT written directly.",
    size: 17,
    items: [
      { q: "1 — seven in the morning?", a: "No — it opens at eight.", why: "The sign never says “closed at seven”. You worked it out from the opening time. That is inference." },
      { q: "2 — one o'clock?", a: "No — it is closed for lunch from twelve until two.", why: "Two signs together give the answer. You had to combine them." },
      { q: "3 — Sunday?", a: "No — it is open Monday to Saturday.", why: "Sunday is not in the list, so it is closed. The absence of information IS the information." },
      { q: "4 — the dangerous floor", a: "“Careful — wet floor.”", why: "A direct scanning answer. The sign says it in three words." },
      { q: "5 — where do you pay?", a: "At the counter.", why: "Also direct. Note “counter” was the unknown word in the Conversation section." },
    ],
    notes: keyNotes("Three of these five answers are inferences, and none of them is difficult. Point that out — learners already do this in their own language constantly."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a longer text", sub: "First skim it for thirty seconds. Then read it properly.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 17, lsm: 1.3,
      text: "THE NEW LIBRARY IN ADAMA\n\nA new public library opened in Adama last month. It is open from Monday to Saturday, from nine in the morning until seven in the evening.\n\nThe library has more than five thousand books in Amharic, Oromo and English. There is also a room with computers, but you must book a computer before you use it.\n\nMembership is free for students. Other people pay fifty birr a year. You need one photograph and an identity card to join.\n\n“We were very busy in the first week,” said the manager. “More than three hundred people joined.”" },
    side: { label: "Your task", color: C.read, size: 16, items: [
      "Skim for 30 seconds. What is it about?",
      "Scan: what time does it close?",
      "Scan: how much is membership?",
      "Guess: what does “membership” mean?",
      "Inference: is the library popular? How do you know?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Run the four skills in order on one text: skim, scan, guess, infer. Doing all four on the same text is what shows learners they are different activities.",
      mistakes: "Learners want to read closely from the start. Enforce the thirty-second skim first, with books closed afterwards.",
      extra: "“Membership” contains “member”, which learners may know. The -ship ending makes it the state of being a member.",
      tip: "The last question is the inference: “popular” never appears, but three hundred people in one week tells you.",
      activity: "Four skills, one text: give the four tasks in order with a timer for each.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "One text, four different reading skills.",
    size: 17,
    items: [
      { q: "1 — SKIM: what is it about?", a: "A new library in Adama.", why: "The title alone gives you this. Thirty seconds was more than enough." },
      { q: "2 — SCAN: what time does it close?", a: "At seven in the evening.", why: "You found one number without reading the rest. That is scanning." },
      { q: "3 — SCAN: how much is membership?", a: "Free for students, fifty birr a year for others.", why: "Two facts, both scanned. A complete answer gives both." },
      { q: "4 — GUESS: what is “membership”?", a: "Being a member — belonging to the library so you can use it.", why: "You know “member”. The rest of the paragraph is about joining, which confirms it." },
      { q: "5 — INFERENCE: is it popular?", a: "Yes — three hundred people joined in the first week.", why: "The word “popular” never appears. The number is the evidence." },
    ],
    notes: keyNotes("Point out that the learner used four different skills on one text in under ten minutes. That is the whole module demonstrated in a single exercise."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — join the ideas", sub: "Use and, but, because or so.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Join each pair into one sentence with the correct word.",
    items: [
      "1.  The shop is open.  The bank is closed.",
      "2.  I was late.  The bus did not come.",
      "3.  It rained all night.  The road was very bad.",
      "4.  She speaks English.  She speaks Oromo.",
      "5.  The library is free for students.  Other people pay fifty birr.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Do item 1 together and ask which word signals the relationship. Then let them work alone.",
      answers: "1 but · 2 because · 3 so · 4 and · 5 but",
      mistakes: "Items 2 and 3 both involve cause and effect but in opposite orders, so they need different words. That contrast is the test.",
      tip: "Item 3 could also be “because”, with the halves reversed. Accept it if the learner reorders correctly — that shows real understanding.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write a notice", sub: "Short, clear, and only the necessary words.",
    panelW: 7.6,
    panel: { label: "Write a notice for each situation", color: C.write, tint: C.writeTint, size: 18.5, lsm: 1.5,
      text: "1.  Your shop is closed on Sunday.\n\n2.  The office is closed for lunch\n     from 12 to 2.\n\n3.  People must wait outside.\n\n4.  There is no water on Thursday\n     from 8 until 4.\n\n5.  The floor is wet." },
    side: { label: "Rules for writing a notice", color: C.write, size: 16, items: [
      "Use as FEW words as possible.",
      "Capital letters make it easier to read.",
      "Put the most important word first.",
      "Times and days must be exact.",
      "“Please” makes an instruction politer.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Notices are the opposite of everything else in writing: fewer words is better. That reversal is the lesson.",
      mistakes: "Learners write full sentences: “Our shop will be closed on Sunday because…”. A notice says “CLOSED ON SUNDAY”.",
      answers: "MODELS: 1 CLOSED ON SUNDAY · 2 CLOSED FOR LUNCH 12:00–14:00 · 3 PLEASE WAIT OUTSIDE · 4 NO WATER — THURSDAY 8:00–16:00 · 5 CAREFUL — WET FLOOR",
      tip: "Display the best notices on the classroom wall in English. Real notices in the room give daily reading practice for free.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write what a text said", sub: "Report a text in your own words.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write three sentences about the library text from slide 44. Do not copy it.",
    items: [
      "1.  Write one sentence saying what the text is about.",
      "2.  Write one sentence with two facts from it.",
      "3.  Write one sentence saying what YOU think about it.",
      "4.  Use “and”, “but” or “so” at least once.",
      "5.  Do not use more than 40 words in total.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "The word limit is the teaching. Summarising is choosing what to leave out, and a limit forces that choice.",
      mistakes: "Learners copy sentences directly from the text. Take the text away after two minutes of re-reading.",
      answers: "MODEL: “The text is about a new library in Adama. It has five thousand books and it is open six days a week, but you must pay fifty birr a year. I think it is a good idea because many people cannot buy books.”  (39 words)",
      tip: "Summarising in your own words is the strongest possible proof of comprehension. It is also a Level 3 skill introduced early here.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answer and why", sub: "Thirty-nine words. Three sentences. One opinion.",
    size: 17,
    items: [
      { q: "Sentence 1 — what it is about", a: "The text is about a new library in Adama.", why: "One sentence, from the title. This is the skimming skill written down." },
      { q: "Sentence 2 — two facts", a: "It has five thousand books and it is open six days a week, but you must pay fifty birr a year.", why: "Two facts joined with “and”, then a contrast with “but”. Three ideas in one sentence." },
      { q: "Sentence 3 — your opinion", a: "I think it is a good idea because many people cannot buy books.", why: "“I think” marks it as opinion, and “because” gives a reason. Opinions without reasons are weak." },
      { q: "The word count", a: "39 words — under the limit.", why: "The limit forces you to choose. Choosing what to leave out is what summarising actually is." },
      { q: "Vocabulary check", a: "sign · notice · closed · entrance · careful", why: "All five appeared in this module, mostly on real signs — which is where you will meet them again." },
    ],
    notes: keyNotes("Read two learners' summaries aloud beside the model. The variety shows there is no single right answer, only a right method."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your reading checklist", sub: "Five habits. Use them on every text from now on.",
    check: true, color: C.write, size: 20,
    items: [
      { t: "Decide WHY you are reading before you start", d: "General idea, one fact, or every detail? The purpose chooses the method." },
      { t: "Read the title and the first line first", d: "Thirty seconds of skimming saves five minutes of confusion." },
      { t: "Do not stop at a word you do not know", d: "Guess from the four clues and keep going." },
      { t: "Follow the joining words", d: "and · but · because · so · then · finally. They carry the shape of the text." },
      { t: "Check who “he”, “she” and “they” are", d: "One second each time. Losing the reference loses the text." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the five points, then apply them to any text on the wall as a demonstration.",
      tip: "Print these five as a bookmark for every learner. A bookmark is used; a slide is forgotten.",
      activity: "Habit check: after every reading text for the rest of the level, ask which of the five habits learners used.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. You want to know a bus time. Which method?", opts: "a) skim     b) scan     c) read closely" },
      { q: "2. “CLOSED FOR LUNCH 12:00 – 14:00.” Can you go at 13:00?", opts: "a) yes     b) no     c) the sign does not say" },
      { q: "3. “He was exhausted after the journey.” “Exhausted” probably means …", opts: "a) very happy     b) very tired     c) very fast" },
      { q: "4. Which word tells you the opposite is coming?", opts: "a) and     b) but     c) so" },
      { q: "5. “Sara went to Merkato. She bought onions.” Who bought onions?", opts: "a) Sara     b) Merkato     c) we do not know" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 a",
      tip: "Question 2 is inference: the sign does not say “no”, so learners must work it out. Anyone choosing c) has not understood the skill.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — guess the word", sub: "You do not know the word. Guess from the sentence.",
    color: C.green, instruction: "Write what you think each word means, and say which clue you used.", size: 17,
    items: [
      "1.  The suitcase was too heavy, so he could not lift it.  →  suitcase?",
      "2.  She was delighted with her exam result.  →  delighted?",
      "3.  The road was impassable after the rain.  →  impassable?",
      "4.  He is unemployed and looking for work.  →  unemployed?",
      "5.  The shop sells stationery — pens, paper and books.  →  stationery?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Insist that learners name the clue as well as the guess. The clue is the transferable skill; the word is not.",
      answers: "1 a bag for travelling (it is heavy and lifted) · 2 very pleased (an exam result you are happy about) · 3 impossible to travel on (im- means not, and the rain caused it) · 4 without a job (un- means not, plus “looking for work”) · 5 things you write with (the examples are listed after the dash)",
      mistakes: "Learners guess and then dismiss their own answer as wrong. Item 5 shows how often the text simply tells you, with examples after a dash.",
      tip: "Items 3 and 4 both use a negative prefix. Point out that “im-” and “un-” both mean “not”.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Signs, methods and joining words.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the SIGN to its MEANING", opts: "1. NO ENTRY     2. PAY AT THE COUNTER     3. WET FLOOR     4. ENTRANCE" },
      { q: "a) be careful, you may fall        b) the way in", opts: "c) do not go in        d) give your money at the desk" },
      { q: "Part 2 — match the PURPOSE to the METHOD", opts: "1. Find a phone number     2. Decide if an article is interesting     3. Follow medicine instructions          a) skim     b) read closely     c) scan" },
      { q: "Part 3 — match the JOINING WORD to its JOB", opts: "1. but     2. because     3. so     4. and          a) reason     b) result     c) opposite     d) addition" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks, three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–c, 2–d, 3–a, 4–b.  ·  Part 2: 1–c, 2–a, 3–b.  ·  Part 3: 1–c, 2–a, 3–b, 4–d.",
      tip: "Part 2 is the whole module in three lines. If learners get all three, the method idea has landed.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — scan for the answer", sub: "Use the library text from slide 44. Fifteen seconds each.",
    color: C.green, instruction: "Write short answers. Do not read the whole text.", size: 18,
    items: [
      "1.  When did the library open?",
      "2.  How many books does it have?",
      "3.  What languages are the books in?",
      "4.  How much do students pay?",
      "5.  What do you need to join?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Time them strictly at fifteen seconds per question. The time limit is what forces scanning rather than reading.",
      answers: "1 Last month. · 2 More than five thousand. · 3 Amharic, Oromo and English. · 4 Nothing — it is free for students. · 5 One photograph and an identity card.",
      mistakes: "Learners re-read from the beginning each time. Remind them: eyes down the page, looking for the shape of the answer.",
      tip: "Short answers are fine here. Scanning is about finding, not about producing full sentences.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — direct or inference?", sub: "Is the answer written, or do you work it out?",
    color: C.green, instruction: "Answer each question, then write D (direct) or I (inference).", size: 17,
    items: [
      "1.  “The shop opens at eight.” What time does it open?",
      "2.  “The shop opens at eight. Sara arrived at seven.” Did Sara wait?",
      "3.  “The library is open Monday to Saturday.” Is it open on Sunday?",
      "4.  “He put on his coat and closed the window.” Was it cold?",
      "5.  “Membership is fifty birr a year, but free for students.” Does a student pay?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Labelling each answer D or I is what makes learners conscious of the difference. That awareness is the skill.",
      answers: "1 Eight o'clock — D · 2 Yes, for an hour — I · 3 No — I (Sunday is not listed) · 4 Yes, probably — I · 5 No — D (the text says free for students)",
      mistakes: "Item 3 is the interesting one: the absence of Sunday from the list is the evidence. Absence of information can be information.",
      tip: "Exams always contain at least one inference question. Learners who can label them can prepare for them.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  You must understand every word to understand a text.",
      "2.  Skimming means reading for the general idea.",
      "3.  Scanning means reading every word slowly.",
      "4.  “Un-” at the start of a word usually means “not”.",
      "5.  An inference answer is written directly in the text.",
      "6.  The first sentence of a paragraph usually gives the main idea.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test.",
      answers: "1 F — you do not; good readers skip and guess · 2 T · 3 F — scanning is searching fast for one fact · 4 T · 5 F — you work it out from what IS written · 6 T",
      tip: "Item 1 is the belief this whole module exists to break. If anyone still marks it true, say the correction out loud twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own reading.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  Where do you see English writing every day?",
      "2.  Which method would you use to read a menu? Why?",
      "3.  What do you do now when you meet a word you do not know?",
      "4.  Write one sign you have seen in English and what it means.",
      "5.  Which of the five reading habits is hardest for you?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Question 3 is the same question as the warm-up. Compare the answers — most learners will have changed them.",
      answers: "No fixed answers. Question 3 should now say “guess and keep going” rather than “stop” or “use a dictionary”.",
      mistakes: "Question 5 requires honest self-assessment. Accept any answer and use the class results to plan revision.",
      tip: "Read three answers to question 3 aloud beside the warm-up answers from slide 3. The change is the evidence the module worked.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Skim a text for thirty seconds and say what it is about.",
      "2.  Scan for three facts and say them.",
      "3.  Guess two unknown words aloud and name the clue for each.",
      "4.  Ask your partner one direct and one inference question about the text.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Give each pair the same text so they can compare. Time every round.",
      answers: "SUCCESS CRITERIA: 1 one accurate sentence in thirty seconds · 2 three correct facts · 3 two reasonable guesses with named clues · 4 one of each question type, correctly labelled.",
      tip: "Task 4 is the assessment. A learner who can write an inference question has fully understood the idea.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "All the reading skills together.",
    color: C.green, instruction: "Use the library text from slide 44 unless told otherwise.", size: 17,
    items: [
      { q: "1. Summarise the library text in exactly 25 words.", opts: "Count them." },
      { q: "2. Write three inference questions about the text.", opts: "None may be answerable directly." },
      { q: "3. Guess these words from the text: membership · book (a computer) · identity card.", opts: "Name the clue for each." },
      { q: "4. Write five signs you might see in a library.", opts: "Use as few words as possible." },
      { q: "5. Which reading method did you use for each question above? Why?", opts: "Skim, scan or read closely." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard.",
      answers: "1 any accurate 25-word summary · 2 e.g. “Is the library popular?” “Do many people speak English in Adama?” “Why is it free for students?” · 3 membership = being a member · book = reserve in advance · identity card = a card that proves who you are · 4 e.g. QUIET PLEASE · NO FOOD · RETURN BOOKS HERE · COMPUTERS — BOOK FIRST · OPEN 9:00–19:00",
      tip: "Question 5 asks learners to name their own method. That metacognitive step is what makes the skills transferable.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why is stopping at every unknown word a bad habit?", opts: "What happens to the rest of the text while you stop?" },
      { q: "2. Is guessing a word “cheating”? Why or why not?", opts: "What do fluent readers do in their own language?" },
      { q: "3. Your friend reads every text slowly and word by word. What advice would you give?", opts: "Be specific and practical." },
      { q: "4. When is it dangerous NOT to read every word?", opts: "Think of a real situation." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Question 4 is important: skimming has limits and learners should know where they are.",
      answers: "1 You lose the meaning of the sentences around it, and reading becomes so slow that you stop. 2 No — fluent readers guess constantly in their own language without noticing. 3 Decide the purpose first, skim before reading, guess and keep going, and set a time limit. 4 Medicine instructions, a contract, a legal document, safety information, an exam question — anywhere a small detail changes everything.",
      tip: "Question 4 keeps the module honest. Skimming is a tool, not a universal method, and saying so builds trust.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Reading methods", items: [
      { q: "1. You want the general idea of an article. Which method?", opts: "a) skim     b) scan     c) read closely" },
      { q: "2. You want one bus time from a timetable. Which method?", opts: "a) skim     b) scan     c) read closely" },
      { q: "3. You are reading medicine instructions. Which method?", opts: "a) skim     b) scan     c) read closely" },
      { q: "4. When you skim, which four things do you read?", opts: "Name them." },
    ] },
    { part: "Part 2 · Guessing words", items: [
      { q: "5. “The road was impassable after the rain.” What does it mean?", opts: "Guess and say why." },
      { q: "6. What does “un-” at the start of a word usually mean?", opts: "One word." },
      { q: "7. “He was delighted with the news.” Is “delighted” positive or negative?", opts: "a) positive     b) negative" },
      { q: "8. Name two of the four clues for guessing a word.", opts: "Two of four." },
    ] },
    { part: "Part 3 · Signs and joining words", items: [
      { q: "9. What does “NO ENTRY” mean?", opts: "One sentence." },
      { q: "10. Complete: “The shop is open ___ the bank is closed.”", opts: "a) and     b) but     c) so" },
      { q: "11. Complete: “I was late ___ the bus did not come.”", opts: "a) but     b) because     c) and" },
      { q: "12. Which word signals a RESULT?", opts: "a) because     b) so     c) but" },
    ] },
    { part: "Part 4 · Reading a text", items: [
      { q: "13. “Sara met Hana. She was tired.” Who was tired?", opts: "a) Sara     b) Hana     c) it is not clear" },
      { q: "14. “The shop opens at eight. Abel came at seven thirty.” Did he wait?", opts: "Answer and say how you know." },
      { q: "15. “Open Monday to Saturday.” Is it open on Sunday?", opts: "Answer and say how you know." },
      { q: "16. Is question 15 a direct answer or an inference?", opts: "a) direct     b) inference" },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write a notice: the office is closed on Friday.", opts: "As few words as possible." },
      { q: "18. Join with the right word: “It rained. The road was bad.”", opts: "Write the full sentence." },
      { q: "19. Write one inference question about any text you have read.", opts: "It must not be answerable directly." },
      { q: "20. SPEAKING: skim a text and say what it is about in one sentence.", opts: "Thirty seconds only." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 6 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. You may look at the reading texts, but not at the teaching slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nThis quiz allows learners to consult the reading texts, because reading skills are being tested rather than memory. Do not allow the teaching slides.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — general idea", a: "a) skim", why: "Skimming gives you the general idea in about thirty seconds without reading every word." },
      { q: "Q2 — one bus time", a: "b) scan", why: "You want one specific piece of information and you know what it looks like — a number." },
      { q: "Q3 — medicine instructions", a: "c) read closely", why: "Every detail matters and a mistake could be dangerous. This is when close reading is essential." },
      { q: "Q4 — the four things", a: "The title · the first sentence of each paragraph · names and numbers · the last sentence.", why: "Writers put the main idea in the first sentence, which is why skimming works at all." } ],
    [ { q: "Q5 — “impassable”", a: "Impossible to travel on. “Im-” means not, and the rain caused it.", why: "Two clues at once: the word part and the sentence around it." },
      { q: "Q6 — “un-”", a: "Not.", why: "unhappy = not happy · unemployed = not employed. One prefix explains hundreds of words." },
      { q: "Q7 — “delighted”", a: "a) positive", why: "You do not need the exact meaning. Knowing it is positive is enough to keep reading." },
      { q: "Q8 — two of the four clues", a: "Any two of: the other words · the kind of word · positive or negative · word parts you know.", why: "All four are usually available at once, which is why guessing works so often." } ],
    [ { q: "Q9 — “NO ENTRY”", a: "You cannot go in. / Do not go in.", why: "Signs drop the verb. You must expand them into a full sentence to check you understood." },
      { q: "Q10 — “open ___ closed”", a: "b) but", why: "The two ideas are opposite, so “but”." },
      { q: "Q11 — “I was late ___ the bus did not come.”", a: "b) because", why: "The second half is the reason for the first. Reason follows “because”." },
      { q: "Q12 — which signals a result?", a: "b) so", why: "“So” introduces the result. “Because” introduces the reason — the same logic in the opposite order." } ],
    [ { q: "Q13 — who was tired?", a: "c) it is not clear", why: "Both are women, so “she” could be either. Noticing that a text is unclear is itself a reading skill." },
      { q: "Q14 — did Abel wait?", a: "Yes, for thirty minutes — he arrived at 7:30 and it opened at 8:00.", why: "The text never says “he waited”. You worked it out from two times." },
      { q: "Q15 — open on Sunday?", a: "No — the notice lists Monday to Saturday only.", why: "The absence of Sunday from the list is the evidence. Absence of information can be information." },
      { q: "Q16 — direct or inference?", a: "b) inference", why: "The notice never says “closed on Sunday”. You worked it out from what was listed." } ],
    [ { q: "Q17 — the notice", a: "CLOSED ON FRIDAY", why: "Three words. A notice uses as few words as possible and puts the important word first." },
      { q: "Q18 — join the sentences", a: "It rained, so the road was bad.  (or: The road was bad because it rained.)", why: "Both are correct. “So” gives the result; “because” gives the reason, with the halves reversed." },
      { q: "Q19 — an inference question", a: "e.g. “Was the library busy?” about a text that gives visitor numbers but never says “busy”.", why: "A good inference question has evidence in the text but no direct answer." },
      { q: "Q20 — speaking task", a: "One accurate sentence within thirty seconds", why: "Marked on accuracy and on staying within the time. Reading everything is a fail, even if the answer is right." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q13, Q15 and Q16 are the diagnostic block: they test whether learners can tell a direct answer from an inference, and whether they notice when a text is genuinely unclear."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Read something real.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Find and read five English signs", d: "Write each one down and what it means." },
      { t: "Skim one English text for thirty seconds", d: "Then write one sentence saying what it was about." },
      { t: "Scan something for one fact", d: "A price, a time, a phone number. Time yourself." },
      { t: "Guess five unknown words", d: "Write the word, your guess, and the clue you used." },
      { t: "Read one short text and write one inference question", d: "Bring it to class for a classmate to answer." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's task is the easiest and most useful. English signs are everywhere and learners who start noticing them read several every day without effort.",
      tip: "Thursday's task builds the guessing habit, which is the module's central skill. Insist on the clue being written down.",
      activity: "Ask learners to photograph three English signs and bring them to the next lesson.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "A list of ten English signs you have seen", d: "Where you saw each one and what it means, in a full sentence." },
      { t: "A 40-word summary of any English text", d: "What it is about, two facts, and your opinion. Use “and”, “but” or “so”." },
      { t: "Record your two-minute speaking challenge", d: "Read aloud · skim · three facts · one guess with its clue · one inference." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 1 gets learners reading English in the real world, which is the whole point of the module. Task 2 is the exam task.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording personally, by voice. Comment on the guess and the inference specifically — those are the new skills.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaMapSigns", title: "Ten signs — 5 marks", desc: "Ten found (2) · meaning explained in a full sentence (2) · where you saw each one (1)." },
      { icon: "FaPencilAlt", title: "The 40-word summary — 10 marks", desc: "Under 40 words (2) · main idea correct (3) · two accurate facts (3) · an opinion with a reason (2)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five parts (3) · accurate one-sentence summary (2) · three correct facts (2) · a guess with a named clue (2) · a supported inference (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework. The summary carries the most marks because it proves comprehension better than any question.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Do not mark grammar heavily in the summary. This module assesses reading, not writing accuracy.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaEye", title: "Skimming", desc: "The general idea in thirty seconds. Title, first lines, names and numbers." },
      { icon: "FaSearch", title: "Scanning", desc: "One fact in fifteen seconds. Eyes down the page, not across." },
      { icon: "FaLightbulb", title: "Guessing words", desc: "Four clues: other words · kind of word · positive or negative · word parts." },
      { icon: "FaMapSigns", title: "Signs and notices", desc: "The reading you do most often in real life — and the shortest." },
      { icon: "FaSitemap", title: "Joining and sequence words", desc: "and · but · because · so · then · finally. They carry the shape." },
      { icon: "FaBookOpen", title: "Inference", desc: "Answering what the text does not say, using what it does." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 3 and read the warm-up answers again. Ask task 1 once more: what do you do when you meet an unknown word? The answers should have changed.",
      tip: "That comparison is the best evidence the module worked, and it takes ninety seconds.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The reading toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaEye", title: "Three methods", desc: "SKIM  →  the general idea, 30 seconds\nSCAN  →  one fact, 15 seconds\nREAD CLOSELY  →  every detail\n\nDecide WHY you are reading first." },
      { icon: "FaLightbulb", title: "Four clues for guessing", desc: "1  What would make sense here?\n2  Is it a thing, an action or a describing word?\n3  Does it sound good or bad?\n4  Do you know part of the word?  (un- = not)" },
      { icon: "FaSitemap", title: "Signpost words", desc: "and  →  another similar idea\nbut / however  →  the opposite\nbecause  →  the reason\nso / that is why  →  the result\nfirst · then · finally  →  the order" },
      { icon: "FaCheck", title: "Five reading habits", desc: "1 Know why you are reading\n2 Read the title and first line first\n3 Never stop at one unknown word\n4 Follow the joining words\n5 Check who “he” and “they” are" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide or photograph it. Better still, print the fourth box as a bookmark for every learner.",
      tip: "A bookmark is used every time they read. A slide is seen once. Print it.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now read English without understanding every word — which is how reading actually works.",
    sub: "Three methods, four clues for guessing, and the confidence to keep going past a word you do not know.\nThat confidence is worth more than a thousand new words.",
    chips: ["NEXT — Module 7", "Listening in Real Life", "Numbers, directions, phone calls and fast speech"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the change: they no longer need to understand every word. That belief shift is the module's real achievement and it will speed up everything they read from now on.",
      tip: "Preview Module 7 honestly: listening is harder than reading because you cannot control the speed or go back. But the strategies are the same ones learned here.",
      activity: "Ask every learner to name one English sign they will look for before the next lesson.",
    }),
  });
};
