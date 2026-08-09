"use strict";
/* LEVEL 1 · MODULE 6 — First Conversations & Review   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 1", levelNo: "1", levelName: "Beginner\nEnglish", cefr: "CEFR Pre-A1 → A1",
    moduleTag: "Module 6 of 6 · Final module",
    title: "First Conversations & Review",
    sub: "No new grammar. Everything from Modules 1 to 5, put together into real conversations — and the Level 1 exam.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "LEVEL 1", v: "COMPLETE" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons, plus one session for the Level 1 exam.",
      how: "Open by saying what is different: “There is no new grammar in this module. Everything here you already know. This month we put it together and finish the level.” After five demanding modules that is genuinely welcome news.",
      tip: "This module is where learners see how far they have come. Plan to play their Module 1 recordings back at the end — it is the most motivating thing you will do all level.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — and then you have finished Level 1.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Hold a complete conversation with a stranger", d: "Ten turns, from hello to goodbye, without stopping." },
      { t: "Keep a conversation going with follow-up questions", d: "“And you?”  “Really?”  “Where in Gondar?”" },
      { t: "Be polite in English", d: "please · thank you · sorry · excuse me — and know when to use each one." },
      { t: "Say what to do when you do not understand", d: "Four phrases that keep you in English instead of giving up." },
      { t: "Pass the Level 1 exam", d: "Listening · speaking · reading · writing. You know everything on it." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective. Objective 1 is the real test of Level 1 — say that a ten-turn conversation is what people mean when they say someone “speaks English”.",
      tip: "Show the exam structure early — on slide 10 — so nobody is anxious about the unknown. Beginners fear exams far more than the content warrants.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what can you say now?", sub: "No wrong answers. Two minutes each.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaComments", title: "1 · One minute of English", desc: "Talk to your partner for one whole minute. Any topic. Do not stop, even if you make mistakes." },
      { icon: "FaTrophy", title: "2 · Count your sentences", desc: "How many different sentences did you say? Tell your partner the number." },
      { icon: "FaRedo", title: "3 · Think back", desc: "Five months ago, could you do that? What is the biggest change?" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Task 1 is harder than it sounds and every learner will manage it — which is the point. Do not correct anything. Task 3 is where the realisation lands; give it real time.",
      mistakes: "Some learners will stop after fifteen seconds. Encourage them to repeat themselves rather than fall silent — keeping going is the skill being practised.",
      tip: "Write the sentence counts on the board. Seeing that the class produced two hundred sentences in one minute is a powerful, concrete fact.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "You already know everything you need. This module puts it together.",
    sub: "Five modules of letters, numbers, greetings, words and sentences.\nThis month you use all of it at the same time — which is what a real conversation actually is.",
    chips: ["No new grammar", "26 letters · 200+ words · 5 structures", "One goal: a real conversation"],
    notes: tn({
      time: "4 minutes.",
      how: "Say clearly that using several things at once is a different skill from learning them one at a time, and it is harder. Learners who make mistakes this month are not going backwards — they are doing something more demanding.",
      mistakes: "Expect accuracy to drop in free conversation compared with controlled exercises. That is normal and expected. Do not treat it as a failure of the earlier modules.",
      tip: "Set the rule for this module: fluency first, accuracy second. Correct after the speaker finishes, never during.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — review map
  L.grid({
    sec: SEC.con, title: "Everything you learned in Level 1", sub: "Five modules. Check each one — can you still do it?",
    cols: 5, color: C.green, titleSize: 18, descSize: 14,
    items: [
      { icon: "FaFont", title: "Module 1", desc: "26 letters · letter names and sounds · capitals · full stops and question marks · blending sounds into words" },
      { icon: "FaHashtag", title: "Module 2", desc: "Numbers 1–100 · the teen/ty stress · days and months · telling the time · prices in birr · at, on, in" },
      { icon: "FaComments", title: "Module 3", desc: "Greetings by time of day · introducing yourself · the verb “to be” · questions and negatives · he, she, his, her" },
      { icon: "FaLanguage", title: "Module 4", desc: "Eight topics of vocabulary · a and an · plurals · this, that, these, those · there is / there are" },
      { icon: "FaLayerGroup", title: "Module 5", desc: "Subject + verb + object · subject and object pronouns · can and cannot · joining with and and but" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Go module by module and ask the class for one example from each. Do not re-teach — this is retrieval, and pulling the knowledge out is what strengthens it.",
      mistakes: "Whatever the class cannot produce here is what to re-teach this month. Write the gaps on the board as you find them.",
      extra: "For each module, ask one learner to produce a sentence that uses it. Five learners, five sentences, five modules.",
      tip: "This slide doubles as your revision plan. The gaps you find in ten minutes tell you exactly how to spend the rest of the module.",
      activity: "Module quiz-off: five teams, one module each. Each team writes three questions and asks another team.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the six moves
  L.list({
    sec: SEC.con, title: "A complete conversation has six moves", sub: "Learn the shape, and you can talk to anyone.",
    color: C.green, size: 20, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "Greet", d: "“Good morning.”  Choose by the time of day." },
      { t: "Introduce yourself", d: "“My name is ___. I am from ___.”" },
      { t: "Ask about them", d: "“What is your name?”  “Where are you from?”" },
      { t: "Say something more", d: "“I am a student.”  “I work in a shop.”  Give them something to respond to." },
      { t: "Ask a follow-up question", d: "“And you?”  “Do you like it?”  This is what keeps it going." },
      { t: "Close politely", d: "“Nice to meet you. See you tomorrow.”" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Demonstrate the whole six-move shape with one learner, in front of the class, twice — once quickly and once slowly with the moves named as you go.",
      mistakes: "Most beginners do moves 1 to 3 and then stop. Move 5 is the one that separates a real conversation from an exchange of facts, and it is the whole focus of this module.",
      extra: "Have learners identify the six moves in the dialogues from Module 3 — they are all there.",
      tip: "Write the six moves on a card for every learner to keep. In the exam and in real life, having the shape in front of you removes most of the panic.",
      activity: "Six-move race: pairs perform the whole shape in under sixty seconds. Then do it again with a different partner.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — follow-up questions
  L.table({
    sec: SEC.con, title: "How to keep a conversation going", sub: "Five short questions that ask for more.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [3.0, 4.4, 4.733],
      rows: [
        ["They say", "You ask", "Why it works"],
        ["“I am from Gondar.”", "“Where in Gondar?”", "Asks for detail on what they just said."],
        ["“I am a nurse.”", "“Do you like it?”", "Asks for an opinion, not a fact."],
        ["“I have two children.”", "“How old are they?”", "Uses a number question from Module 2."],
        ["“I work in a shop.”", "“Which shop?”", "Short, easy, and it always works."],
        ["Anything at all", "“And you?”", "The simplest of all. Never fails."],
      ],
    },
    note: "A follow-up question is the difference between an interview and a conversation. Ask one after every answer you receive.",
    notes: tn({
      time: "12 minutes.",
      how: "Model a bad conversation first — ask three questions with no follow-ups and let it die awkwardly. Then do it again with follow-ups. The contrast teaches this better than any explanation.",
      mistakes: "Learners think they need complicated questions. They do not. “And you?” and “Really?” carry most conversations.",
      extra: "Add “Really?” and “That is interesting.” — both are short, easy and buy thinking time.",
      tip: "Set a rule for the rest of the module: nobody may answer a question without asking one back. Enforce it in every pair activity.",
      activity: "Keep it alive: pairs must talk for two minutes without a silence longer than three seconds. Follow-up questions are the only way to manage it.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — politeness
  L.table({
    sec: SEC.con, title: "Being polite in English", sub: "Four words. Each one has a specific job.",
    table: {
      color: C.green, rowH: 0.54, fontSize: 17.5, headSize: 16, colW: [2.8, 4.4, 4.933],
      rows: [
        ["Word", "Use it when", "Example"],
        ["please", "you ask for something", "Can I have some water, please?"],
        ["thank you", "someone gives or does something", "Thank you very much."],
        ["sorry", "you make a mistake or cause a problem", "Sorry, I am late."],
        ["excuse me", "you START speaking to a stranger, or pass someone", "Excuse me, what time is it?"],
      ],
    },
    note: "The one learners mix up:  SORRY is for apologising.  EXCUSE ME is for getting attention.  “Sorry, what time is it?” sounds like you did something wrong.",
    notes: tn({
      time: "12 minutes.",
      how: "Act out all four situations physically: ask for something, receive something, bump into someone, approach a stranger. Learners see the difference in one minute.",
      mistakes: "“Sorry” used to open a conversation with a stranger. It is understood, but “Excuse me” is correct and sounds much better in a shop, an office or an interview.",
      extra: "Also useful: “You are welcome” as the reply to thank you, and “No problem” as the informal version.",
      tip: "In English, politeness is carried by these small words rather than by special verb forms. Say that — it is a real structural difference from Amharic and it explains why they matter so much.",
      activity: "Politeness situations: call out ten situations; learners say which of the four words fits. Fast, ten rounds.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — when you don't understand
  L.grid({
    sec: SEC.con, title: "When you do not understand", sub: "Four phrases. Use them instead of switching to Amharic.",
    cols: 2, color: C.green, titleSize: 22, descSize: 16, shadow: true, tint: C.white,
    items: [
      { icon: "FaQuestion", title: "“Sorry, I do not understand.”", desc: "Honest and polite. The other person will simply say it again more simply." },
      { icon: "FaVolumeUp", title: "“Please speak slowly.”", desc: "The most useful request a learner can make. Nobody minds being asked." },
      { icon: "FaRedo", title: "“Can you repeat, please?”", desc: "Politer than “What?”. Use this one with strangers and at work." },
      { icon: "FaPencilAlt", title: "“Can you write it, please?”", desc: "For names, numbers and prices. This one saves money." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "These four were introduced in Modules 1 and 2. This is a deliberate return to them, because by now learners have had real situations where they needed them. Ask who has actually used one — the stories are the best teaching.",
      mistakes: "The failure is not using them. Learners go silent or switch language, and each time that happens the habit gets stronger.",
      extra: "Add “How do you say ___ in English?” — it turns any gap into a lesson.",
      tip: "Say plainly that fluent speakers of any second language use these phrases every day. Asking for repetition is a sign of a competent speaker, not a weak one.",
      activity: "Deliberate confusion: speak too fast about an unfamiliar topic. Learners must interrupt with one of the four phrases. Repeat five times.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — the exam
  L.table({
    sec: SEC.con, title: "The Level 1 exam — what to expect", sub: "Four papers. Nothing on it is new.",
    table: {
      color: C.green, rowH: 0.54, fontSize: 17, headSize: 16, colW: [2.8, 1.6, 3.2, 4.533],
      rows: [
        ["Paper", "Marks", "How long", "What is in it"],
        ["Listening", "25", "20 minutes", "Letters, numbers, times, prices, and two short conversations."],
        ["Speaking", "25", "5 minutes each", "One to one with the teacher: name, spelling, family, a picture, a greeting."],
        ["Reading aloud", "25", "2 minutes each", "Eight prepared sentences. Marked on sounds and stopping at full stops."],
        ["Vocabulary & writing", "25", "30 minutes", "40 picture-word items, plus five sentences about yourself."],
      ],
    },
    note: "Pass mark: 60 out of 100 — and at least 13 out of 25 in speaking. Speaking is never averaged away.",
    notes: tn({
      time: "10 minutes.",
      how: "Show the whole structure now, four weeks before the exam. Beginners fear the unknown far more than the content; removing the mystery removes most of the anxiety.",
      mistakes: "Do not let learners believe there is anything new on the exam. Say explicitly: every item comes from Modules 1 to 6.",
      extra: "The five speaking questions are the same ones from Module 1: name and spelling, age and town, family, a picture, a greeting.",
      tip: "Explain the speaking floor honestly: a learner can pass on paper and still fail the level. That rule exists so the certificate means something — say so, rather than letting it feel arbitrary.",
      activity: "Practise one paper each week from now until the exam. Four weeks, four papers, no surprises.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "please", ipa: "/pliːz/", pos: "expression", icon: "FaHandsHelping",
      meaning: "A polite word used when you ask for something.",
      example: "Can I have some water, please?",
      mistake: "Two things: “pl” is a cluster — no vowel between p and l — and the vowel is long, /pliːz/. Also, “please” usually goes at the END of the question in English.",
      notes: tn({ time: "5 minutes.",
        how: "Build the cluster: /p/ … /l/ … pl … please. Then drill the position: ask five requests, each ending with “please”.",
        mistakes: "An inserted vowel — “pilease” — is the same pattern as “isukul”. Drill the cluster alone first.",
        extra: "Requests to practise: “Can I have a pen, please?” “Can you help me, please?” “Two kilos, please.”",
        tip: "In English, “please” does a lot of work. A request without it can sound like an order, even when the words are otherwise correct.",
        activity: "Request round: each learner asks the person beside them for something, using please correctly." }) },

    { word: "thank you", ipa: "/ˈθæŋk juː/", pos: "expression", icon: "FaThumbsUp",
      meaning: "What you say when someone gives you something or helps you.",
      example: "Thank you very much. — You are welcome.",
      mistake: "It starts with the “th” sound — tongue between the teeth. Not “tank you” or “sank you”. And learn the reply too: “You are welcome.”",
      notes: tn({ time: "6 minutes.",
        how: "Model the “th” with the tongue clearly visible, then the whole phrase, then the reply. Always teach the pair together — a phrase with no reply is only half usable.",
        mistakes: "“Tank you” is very common and very noticeable to a listener. It is the /θ/ from Module 1 appearing in the most frequently used phrase in English.",
        extra: "Thanks (informal) · Thank you (neutral) · Thank you very much (warm). Three levels of the same act.",
        tip: "This is probably the phrase learners will say most often in their lives. The “th” is worth the six minutes.",
        activity: "Give and thank: pass an object around the class. Each learner says “Thank you” and the giver replies “You are welcome.”" }) },

    { word: "sorry", ipa: "/ˈsɒri/", pos: "expression", icon: "FaRegSmile",
      meaning: "What you say when you make a mistake or cause a problem.",
      example: "Sorry, I am late. — Sorry, I do not understand.",
      mistake: "Do not use “sorry” to start a conversation with a stranger — use “excuse me”. “Sorry” means you did something wrong.",
      notes: tn({ time: "5 minutes.",
        how: "Contrast the two directly: bump into a learner and say “Sorry”, then approach a different learner and say “Excuse me”. Two actions, two words, instantly clear.",
        mistakes: "The sorry/excuse me confusion is the commonest politeness error and it makes learners sound apologetic when they have done nothing wrong.",
        extra: "“Sorry, I do not understand” is the one place where “sorry” IS correct to open with, because you are apologising for the difficulty.",
        tip: "Point out the difference gently: over-apologising is very common in second-language speakers and it undermines how confident they sound.",
        activity: "Sorry or excuse me: call out ten situations and learners say which word fits." }) },

    { word: "excuse me", ipa: "/ɪkˈskjuːz miː/", pos: "expression", icon: "FaHandPaper",
      meaning: "What you say to get someone's attention, or to pass someone.",
      example: "Excuse me, what time is it?  ·  Excuse me, can I pass?",
      mistake: "It is two words and it has a difficult cluster: ks-kj. Say it slowly first. And remember it is for getting attention, not for apologising.",
      notes: tn({ time: "6 minutes.",
        how: "Break it: ex-cuse me. The middle cluster is genuinely hard, so slow it right down before speeding up. Then drill it as the opener for the questions from Module 2.",
        mistakes: "Learners avoid this phrase because it is hard to say, and use “sorry” instead. Give it the time it needs — it is the correct opener for every interaction with a stranger.",
        extra: "Excuse me, where is the bus station? · Excuse me, how much is this? · Excuse me, can you help me?",
        tip: "Pair it with every question learners already know. It converts a bare question into a polite one instantly.",
        activity: "Stranger practice: learners must approach three classmates with “Excuse me” before asking a question." }) },

    { word: "welcome", ipa: "/ˈwelkəm/", pos: "expression", icon: "FaHome",
      meaning: "A friendly word for someone arriving — and part of the reply to thank you.",
      example: "Welcome to Bahir Dar!  ·  Thank you. — You are welcome.",
      mistake: "It has two uses and they are different. “Welcome!” greets an arrival. “You are welcome” replies to thank you. Do not say “Welcome” alone as a reply.",
      notes: tn({ time: "5 minutes.",
        how: "Teach both uses side by side, because learners meet both and confuse them. Act out an arrival, then act out a thank-you exchange.",
        mistakes: "“Welcome” alone as a reply to “thank you” is understood but not correct. The full phrase is “You are welcome.”",
        extra: "Welcome to Ethiopia · Welcome to our class · Welcome home.",
        tip: "The first use is genuinely useful for anyone working with visitors — hotel staff, guides, drivers, shopkeepers. Point that out to working adults.",
        activity: "Arrivals: two learners leave and re-enter the room. The class welcomes them properly in English." }) },
  ];
  VOCAB.forEach((v, i) => {
    L.vocab({
      sec: Object.assign({}, SEC.voc, { label: "Vocabulary " + (i + 1) + " of 5" }),
      title: "New phrase: " + v.word, sub: "Word · pronunciation · meaning · example · common mistake",
      word: v.word, ipa: v.ipa, pos: v.pos, icon: v.icon,
      meaning: v.meaning, example: v.example, mistake: v.mistake,
      color: C.vocab, tint: C.vocabTint, inkCol: C.vocabInk, notes: v.notes,
    });
  });

  // ============================================================ 16 · GRAMMAR 1 (review)
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Review 1 of 5" }),
    title: "Review 1 — the verb “to be” and word order",
    sub: "The two structures that everything else is built on.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [3.4, 4.2, 4.533],
      rows: [
        ["Structure", "Pattern", "Example"],
        ["The verb “to be”", "subject + am / is / are", "I am a student.  ·  She is a nurse."],
        ["Word order", "subject + verb + object", "I eat injera.  ·  She reads a book."],
        ["Negative with “to be”", "subject + am/is/are + not", "He is not a teacher."],
        ["Question with “to be”", "am/is/are + subject", "Are you from Adama?"],
        ["Ability", "subject + can / cannot + verb", "I can read.  ·  She cannot drive."],
      ],
    },
    note: "Five patterns. Every sentence you make in Level 1 uses one of them.",
    notes: tn({
      time: "10 minutes.",
      how: "Do not re-teach — test. Give the pattern and ask the class for an example, five times. Then give an example and ask which pattern it is.",
      mistakes: "Under conversational pressure learners still drop “am/is/are” and revert to first-language word order. That is normal at this stage and it is what this module's practice is for.",
      extra: "Ask each learner for one sentence using each pattern. Five sentences per learner covers the whole of Level 1 grammar.",
      tip: "This table is the entire grammar of Level 1 on one slide. Photograph it and use it as the revision sheet for the exam.",
      activity: "Pattern bingo: learners draw a grid with the five patterns and cross one off each time they hear it used correctly in the lesson.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2 (review)
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Review 2 of 5" }),
    title: "Review 2 — all the questions you know",
    sub: "Six question types. Between them they open any conversation.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [3.6, 4.0, 4.533],
      rows: [
        ["Question", "Asks about", "Answer"],
        ["What is your name?", "name", "My name is Sara."],
        ["Where are you from?", "place", "I am from Bahir Dar."],
        ["How old are you?", "age", "I am twenty years old."],
        ["What do you do?", "job", "I am a student."],
        ["How much is it?", "price", "It is forty birr."],
        ["What time is it?", "time", "It is half past three."],
      ],
    },
    note: "Add “Can you …?” for ability and “Are you …?” for yes/no. That is eight ways to ask — enough for any first conversation.",
    notes: tn({
      time: "10 minutes.",
      how: "Drill the questions, not the answers — learners are far better at answering than asking. Go round the class with each learner asking a different question of the person beside them.",
      mistakes: "Word order in questions. “Where you are from?” still appears under pressure. Correct it every time.",
      extra: "Add follow-ups from slide 7 after each answer, so every exchange becomes two turns instead of one.",
      tip: "These six questions are exactly what the speaking exam asks. Say that — it turns revision into exam preparation.",
      activity: "Question chain: learner 1 asks learner 2 a question, learner 2 answers and asks learner 3 a DIFFERENT question. Around the whole class without repeating.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3 (review)
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Review 3 of 5" }),
    title: "Review 3 — articles, plurals and “there is / there are”",
    sub: "The small words that make English sound correct.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [3.2, 4.2, 4.733],
      rows: [
        ["Rule", "Remember", "Example"],
        ["a / an", "“an” before a vowel SOUND", "a pen · an apple · an engineer"],
        ["Plural -s", "add -s, -es, or -ies", "books · buses · babies"],
        ["Irregular plurals", "six to memorise", "men · women · children · feet · teeth · people"],
        ["Uncountable", "never take -s", "water · rice · bread · money · coffee"],
        ["there is / there are", "count first, then choose", "There is one door. There are four windows."],
      ],
    },
    note: "These are the rules that native speakers notice most. Getting them right makes a big difference to how correct you sound.",
    notes: tn({
      time: "10 minutes.",
      how: "Test rather than teach. Say a noun and ask for the article; say a number and a noun and ask for the full “there is / there are” sentence.",
      mistakes: "The missing article and the missing plural -s are the two most persistent Level 1 errors and they will follow learners into Level 2. Keep correcting.",
      extra: "Rapid round: pen, apple, water, children, engineer, rice, bus, money — article or no article, plural or not?",
      tip: "Tell learners the truth: these small words carry almost no meaning, which is why they are easy to drop — and why dropping them is so noticeable to a listener.",
      activity: "Small-word hunt: read a short text aloud and have learners raise a hand every time they hear “a”, “an” or a plural -s.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4 (review)
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Review 4 of 5" }),
    title: "Review 4 — all three sets of pronouns",
    sub: "Same people, three different jobs in the sentence.",
    table: {
      color: C.gram, rowH: 0.42, fontSize: 17.5, headSize: 16, colW: [3.0, 3.0, 3.0, 3.133],
      rows: [
        ["Subject (before verb)", "Object (after verb)", "Possessive (before thing)", "Example"],
        ["I", "me", "my", "I know her. She is my friend."],
        ["you", "you", "your", "What is your name?"],
        ["he", "him", "his", "He is here. I see him. This is his bag."],
        ["she", "her", "her", "She is here. I see her. This is her bag."],
        ["we", "us", "our", "We help them. They help us."],
        ["they", "them", "their", "They are students. Their books are here."],
      ],
    },
    note: "The test is position:  BEFORE the verb → column 1.  AFTER the verb → column 2.  BEFORE a thing → column 3.",
    notes: tn({
      time: "12 minutes.",
      how: "Read the example column aloud — each one contains two or three forms of the same person, which shows the system working. Then give sentences with gaps and have learners choose.",
      mistakes: "He/she confusion is still the single most persistent error for Ethiopian learners, five modules in. Keep drilling it — it does eventually become automatic.",
      extra: "Note that “her” appears twice, as object and as possessive. That is genuinely confusing and worth pointing out explicitly.",
      tip: "Read the row for “she” aloud slowly: “She is here. I see her. This is her bag.” One person, three forms, one sentence each.",
      activity: "Three-form challenge: learners write three sentences about the same person, using all three forms.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5 — top mistakes
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Review 5 of 5" }),
    title: "The eight mistakes to check before the exam",
    sub: "These are the errors that cost the most marks — and the easiest to fix.",
    left: { h: "Correct", items: ["I am a student.", "She goes to school.", "My sister, she is a nurse.", "I eat injera.", "Are you from Adama?", "It is fifty birr.", "There are four windows.", "I go to school."] },
    right: { h: "Wrong", items: ["I student.", "She go to school.", "My sister, he is a nurse.", "I injera eat.", "You are from Adama?", "It is fifty birrs.", "There is four windows.", "I go school."] },
    size: 16, bulletGap: 3, min: 12,
    note: "Check all eight in every sentence you write in the exam. Most learners lose more marks to these eight than to anything else.",
    notes: tn({
      time: "12 minutes.",
      how: "Go through all eight pairs, saying both versions aloud. Ask the class which module each one came from — they will recognise every single one, which is reassuring.",
      mistakes: "These eight are the Ethiopian first-language transfer errors this whole level has been drilling. Naming them as a set, one final time, is the most efficient revision you can do.",
      extra: "Give eight sentences with one error each and have learners identify which of the eight it is.",
      tip: "Print this slide as the exam revision card. Eight checks is short enough to actually remember under exam pressure — nineteen is not.",
      activity: "Eight-error hunt: write a short paragraph on the board containing all eight errors. Pairs race to find them all.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — the six-move conversation", sub: "What comes next in the conversation?", items: [
      { q: "They say: “Good morning.” What is your move 1?", a: "“Good morning.”  Then move 2: “My name is ___.”", why: "Match their greeting, then introduce yourself. Do not wait to be asked — offering your name first is normal and friendly." },
      { q: "They say: “My name is Hana.” What is your move 3?", a: "“Nice to meet you, Hana. Where are you from?”", why: "Repeat their name — it is polite and it helps you remember it — then ask a question about them." },
      { q: "They say: “I am from Gondar.” What is your move 5?", a: "“Where in Gondar?”  or  “I am from Bahir Dar. And you like Gondar?”", why: "A follow-up asks for detail on what they just said. Without it the conversation stops after three moves." },
    ] },
    { title: "Guided examples 2 — polite words", sub: "Which word fits the situation?", items: [
      { q: "You want to ask a stranger the time. How do you start?", a: "“Excuse me, what time is it?”", why: "“Excuse me” gets attention. “Sorry” would suggest you have done something wrong." },
      { q: "Someone gives you a pen. What do you say, and what do they reply?", a: "“Thank you.” — “You are welcome.”", why: "Always teach the pair. A phrase with no reply is only half usable in a real exchange." },
      { q: "You arrive fifteen minutes late to class. What do you say?", a: "“Sorry, I am late.”", why: "Here you HAVE caused a problem, so “sorry” is correct. This is the one situation where it opens the exchange." },
    ] },
    { title: "Guided examples 3 — fixing the eight mistakes", sub: "Find the error and correct it.", items: [
      { q: "Correct: “I student.”", a: "I am a student.", why: "Two errors: the missing verb “am” and the missing article “a”. Both are the top Level 1 errors." },
      { q: "Correct: “My brother, she is a driver.”", a: "My brother, he is a driver.", why: "A brother is a man, so “he”. English marks gender in the pronoun; Amharic marks it elsewhere." },
      { q: "Correct: “There is five students.”", a: "There are five students.", why: "Five is more than one, so “there are”. Count first, then choose the verb." },
    ] },
    { title: "Guided examples 4 — exam questions", sub: "The five speaking questions, with model answers.", items: [
      { q: "“What is your name? Please spell it.”", a: "“My name is Sara. S – A – R – A.”", why: "Full sentence first, then the letters slowly with a small pause between each one." },
      { q: "“Tell me about your family.”", a: "“There are five people in my family. My mother is a farmer. My brother is a student.”", why: "Three sentences is enough. Start with the number, then say something about two people." },
      { q: "“What can you see in this picture?”", a: "“There is a woman. There are two children. The bag is red.”", why: "Use “there is / there are” plus a colour. Five sentences is a strong answer." },
    ] },
    { title: "Guided examples 5 — keeping going when you get stuck", sub: "What to say instead of stopping.", items: [
      { q: "You forget the English word for something. What do you say?", a: "“How do you say ___ in English?”  or describe it: “It is a thing for writing.”", why: "Describing what you mean is what fluent speakers do. Stopping is what beginners do — and it is a habit, not an ability." },
      { q: "The other person speaks too fast. What do you say?", a: "“Please speak slowly.”  or  “Can you repeat, please?”", why: "Both are polite and completely normal. Nobody minds being asked to slow down." },
      { q: "You do not understand a price. What do you say?", a: "“Can you write it, please?”  or  “Fifteen or fifty?”", why: "For money, always check. Asking directly is what confident speakers do, not what weak ones do." },
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
    title: "A complete conversation — part 1",
    sub: "Sara meets Yonas at the bank. All six moves.",
    turns: [
      { who: "SARA", text: "Excuse me. Is this the queue for the bank?", side: "l" },
      { who: "YONAS", text: "Yes, it is. Good morning.", side: "r" },
      { who: "SARA", text: "Good morning. My name is Sara.", side: "l" },
      { who: "YONAS", text: "Nice to meet you, Sara. I am Yonas. I work here.", side: "r" },
      { who: "SARA", text: "Nice to meet you too. Are you a bank teller?", side: "l" },
      { who: "YONAS", text: "Yes, I am. And you? What do you do?", side: "r" },
    ],
    note: "Count the moves:  excuse me · greet · introduce · introduce back · ask · ask back. Six moves in six lines.",
    notes: tn({
      time: "10 minutes.",
      how: "Listen books closed, chorus, pair reading. Then have the class name which move each line is — that connects the dialogue to slide 6.",
      mistakes: "The opening with “Excuse me” is the new part. Learners skip it and start with “Good morning”, which is fine but less natural when approaching a stranger.",
      extra: "Notice Yonas asks “And you?” at the end — the follow-up move that makes it a conversation rather than an interview.",
      tip: "This dialogue continues on the next slide. Do not tell learners that yet — the break makes them curious.",
      activity: "Pairs perform it, then perform it again changing the place from a bank to a shop, a clinic or a bus station.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "A complete conversation — part 2",
    sub: "The same conversation continues. Now they keep it going.",
    turns: [
      { who: "SARA", text: "I am a student. I study English.", side: "l" },
      { who: "YONAS", text: "Really? Is it difficult?", side: "r" },
      { who: "SARA", text: "A little. I can read, but I cannot speak fast.", side: "l" },
      { who: "YONAS", text: "Your English is good. Where do you study?", side: "r" },
      { who: "SARA", text: "At a school near Piassa. Sorry, what time does the bank open?", side: "l" },
      { who: "YONAS", text: "At eight thirty. Nice to meet you, Sara. Have a good day.", side: "r" },
    ],
    note: "The follow-ups keep it alive:  “Really?”  ·  “Is it difficult?”  ·  “Where do you study?”  Each one asks for more.",
    notes: tn({
      time: "12 minutes.",
      how: "After reading, ask learners to find the three follow-up questions. Then ask what would have happened without them — the conversation would have ended four lines earlier.",
      mistakes: "Sara says “Sorry” before changing the subject, which is correct here because she is interrupting the flow. Point out that this is a third correct use of “sorry”.",
      extra: "Note that Sara admits she cannot speak fast, and Yonas is encouraging. Model that exchange — learners need permission to be honest about their level.",
      tip: "Perform the whole twelve-line conversation, parts 1 and 2 together. Twelve turns is a real conversation and every learner can now manage it.",
      activity: "Full performance: three pairs perform the whole twelve-line conversation to the class, from memory if possible.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "All eighteen phrases from Level 1",
    sub: "Six from Module 1, six from Module 2, six from Module 3 — plus this module's four.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18, descSize: 14,
    items: [
      { icon: "FaComments", title: "Meeting people", desc: "“What is your name?”  ·  “Nice to meet you.”  ·  “Where are you from?”  ·  “How are you?”  ·  “And you?”" },
      { icon: "FaMoneyBillWave", title: "Shopping and time", desc: "“How much is it?”  ·  “What time is it?”  ·  “That is expensive.”  ·  “Thirteen or thirty?”" },
      { icon: "FaQuestion", title: "When you do not understand", desc: "“Sorry, I do not understand.”  ·  “Please speak slowly.”  ·  “Can you repeat, please?”  ·  “Can you write it?”" },
      { icon: "FaHandsHelping", title: "Being polite", desc: "“please”  ·  “thank you”  ·  “sorry”  ·  “excuse me”  ·  “You are welcome.”" },
      { icon: "FaPencilAlt", title: "Learning more", desc: "“How do you spell it?”  ·  “How do you say ___ in English?”  ·  “What does it mean?”" },
      { icon: "FaHandPeace", title: "Leaving", desc: "“Goodbye.”  ·  “See you tomorrow.”  ·  “Have a nice day.”  ·  “Welcome!”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Go through all six groups and have the class say each phrase in chorus. Twenty-two phrases takes four minutes and it is the single best revision activity in the module.",
      mistakes: "Learners will have forgotten some from Modules 1 and 2. That is exactly why this slide exists — retrieval after a gap is what makes memory durable.",
      extra: "Ask which phrase each learner has actually used outside class. The stories are worth more than the drilling.",
      tip: "Print this as one A4 sheet. It is the complete functional language of Level 1 and it fits on one page.",
      activity: "Phrase auction: teams bid on how many of the twenty-two phrases they can say from memory in one minute.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "YOU", text: "______________ me. Is this the bus to Piassa?", side: "l" },
      { who: "STRANGER", text: "Yes, it is. It comes at nine o'clock.", side: "r" },
      { who: "YOU", text: "______________ you. How much is the ticket?", side: "l" },
      { who: "STRANGER", text: "Fifteen birr.", side: "r" },
      { who: "YOU", text: "Fifteen or fifty? Can you ______________ it, please?", side: "l" },
      { who: "STRANGER", text: "One–five. Fifteen birr.", side: "r" },
    ],
    note: "Use these:  “Excuse”  ·  “Thank”  ·  “write”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps, then three pairs perform before revealing the answers.",
      answers: "1 Excuse  ·  2 Thank  ·  3 write",
      mistakes: "Gap 1 often comes back as “Sorry”. It is understandable but “Excuse me” is correct for getting a stranger's attention.",
      tip: "This dialogue recycles the teen/ty problem from Module 2 and shows the correct response to it. Point that out — the survival phrase solves the pronunciation problem.",
      activity: "Change the destination, the time and the price, then perform it again.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "The two-minute conversation challenge", sub: "The real test of Level 1. Four rounds.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Two minutes with your partner", d: "Use all six moves. Do not stop for more than three seconds." },
      { t: "Two minutes with a new partner", d: "Same six moves, different person. It gets easier each time." },
      { t: "Two minutes with your teacher", d: "This is what the speaking exam feels like." },
      { t: "Two minutes with your eyes on the six-move card only", d: "No script. Just the shape." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "This is the central activity of the module. Time each round strictly. Silences are allowed — falling back into Amharic is not.",
      mistakes: "The first round will feel hard and the fourth will feel easy. Point that out afterwards: the improvement in eight minutes is real evidence that practice works.",
      tip: "Round 3, with you, is the most valuable because it is exam practice. Try to get to every learner over two lessons.",
      activity: "After round 4, ask learners to raise a hand if it was easier than round 1. Almost every hand goes up.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Exam practice 1 — the five speaking questions", sub: "These are the actual exam questions. Practise them until they are automatic.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“What is your name? Please spell it.”", d: "Full sentence, then the letters slowly with pauses." },
      { t: "“How old are you? Where are you from?”", d: "Two full sentences. Do not answer with just a number." },
      { t: "“Tell me about your family.”", d: "Three sentences. Start with how many people." },
      { t: "“What can you see in this picture?”", d: "Five sentences using “there is” and “there are” plus colours." },
      { t: "“It is morning and we have just met. Greet me.”", d: "Greet, introduce yourself, and ask one question." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Practise all five with every learner over the next two lessons. Use the real marking scale from Module 1 so both you and the learner know where they stand before the exam.",
      mistakes: "Question 3 is where learners produce one sentence and stop. Set the standard clearly: three sentences minimum.",
      extra: "Use a different picture each time so learners do not memorise one answer.",
      tip: "Tell them the questions in advance. This is not cheating — a beginner who knows the questions produces far better language, and the exam measures language, not surprise.",
      activity: "Mock interview: learners interview each other with all five questions and give a mark out of four using the Module 1 scale.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Exam practice 2 — reading aloud", sub: "Eight sentences. Marked on sounds and on stopping at full stops.",
    color: C.speak, size: 19, labels: ["1", "2", "3", "4", "5", "6", "7", "8"],
    items: [
      { t: "My name is Sara and I am a student." },
      { t: "There are five people in my family." },
      { t: "I go to school at eight o'clock every day." },
      { t: "My mother is a nurse. She works in Gondar." },
      { t: "This is my bag. It is black." },
      { t: "I can read English, but I cannot speak fast." },
      { t: "How much is the bag? It is fifty birr." },
      { t: "Thank you very much. See you tomorrow." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Model all eight yourself first at a natural pace. Then chorus. Then individuals read two each. Mark for the six target sounds and for stopping at full stops.",
      mistakes: "The target sounds appear deliberately: /p/ in people, /v/ in five, “th” in thank, the cluster in school and student, and the teen/ty risk in fifty.",
      extra: "Have learners mark the full stops with a pencil before reading. Seeing them helps them stop.",
      tip: "Learners who read without stopping are decoding word by word rather than reading sentences. If you hear that, slow them down and mark the stops together.",
      activity: "Record two learners reading all eight and play them back for the class to comment on — kindly, and with volunteers only.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Final sound check — the six Level 1 sounds",
    sub: "Every one of these appears in the exam. Two minutes each.",
    left: { h: "Say these correctly", items: ["/p/  pen · people · please", "/v/  van · five · seven", "/th/  thank · three · this", "/h/  hello · how · his"] },
    right: { h: "Do not say these", items: ["Ben · beople · blease", "ban · fibe · seben", "tank · tree · dis", "ello · ow · is"] },
    note: "Also: the long and short vowels — seat/sit, bad/bed — and no extra vowel before school, street or student.",
    notes: tn({
      time: "12 minutes.",
      how: "Two minutes on each of the four pairs, using the physical tests from earlier modules: paper for /p/, teeth on lip for /v/, tongue between teeth for “th”, hand for /h/.",
      mistakes: "All six sounds were taught in Modules 1 to 3. This is the final check before they are assessed, so find out now who still needs work.",
      extra: "Put them all in one sentence: “Please thank the five people.” It contains /p/, “th”, /v/ and /h/.",
      tip: "Do not expect perfection. The exam standard is intelligibility, not a native accent — say that clearly so nobody panics about their accent.",
      activity: "Sound circuit: four corners of the room, one sound each. Learners rotate every two minutes and drill the pairs at each corner.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Exam practice 3 — describing a picture", sub: "Five sentences. This is worth a quarter of the speaking mark.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say what there is", d: "“There is a woman. There are two children.”" },
      { t: "Add a colour", d: "“The bag is red.” or “She has a blue dress.”" },
      { t: "Add a number", d: "“There are three chairs.”" },
      { t: "Say what someone is", d: "“She is a teacher.” “He is a student.”" },
      { t: "Say one more thing", d: "The weather, the place, or what you can see at the back." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Use a different picture every time you practise, so learners learn the method rather than memorising one answer. Any photograph or magazine page works.",
      mistakes: "Learners produce single words when they are nervous. The five-step frame is what prevents that — it gives them something to hold on to.",
      extra: "For a strong learner, add: “What is the weather in the picture?” and “What time of day is it?”",
      tip: "Five sentences is the target. Tell learners to count on their fingers as they speak — it stops them finishing after two.",
      activity: "Picture pass: five different pictures around the room. Learners rotate and give five sentences on each.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Final speaking challenge — record yourself", sub: "90 seconds. This is the Level 1 capstone. Keep it forever.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Greet and introduce yourself", d: "Greeting · name · spell it · town · job." },
      { t: "Talk about your family", d: "How many people, and two sentences about two of them." },
      { t: "Say what you do every day", d: "Three SVO sentences with times." },
      { t: "Say what you can and cannot do", d: "Two of each." },
      { t: "Close politely", d: "“Thank you. Nice to meet you. Goodbye.”" },
    ],
    notes: tn({
      time: "15 minutes including listening back.",
      how: "This is the recording that goes beside their Module 1 attempt. Give it proper time and let learners record twice if they want to.",
      mistakes: "Nerves make people rush. Tell them ninety seconds is a long time and they should slow down.",
      answers: "SUCCESS CRITERIA: all five parts present · the verb “to be” correct throughout · correct word order · correct he/she · a listener who has never met them understands everything.",
      tip: "PLAY THEIR MODULE 1 RECORDING IMMEDIATELY AFTER. This is the single most motivating five minutes in the whole level — do not skip it, and do not tell them in advance.",
      activity: "With permission, play one learner's Module 1 and Module 6 recordings back to back for the class. The difference is always striking.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — a full conversation", sub: "Listen twice, then answer the questions.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.3,
      text: "MIMI:  Excuse me. Good afternoon.\nABEL:  Good afternoon.\nMIMI:  My name is Mimi. What is your name?\nABEL:  I am Abel. Nice to meet you.\nMIMI:  Nice to meet you too. Do you work here?\nABEL:  Yes, I do. I have a shop. I sell bags.\nMIMI:  How much is this black bag?\nABEL:  It is ninety birr.\nMIMI:  Ninety or nineteen?\nABEL:  Nine–zero. Ninety birr." },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. What time of day is it?",
      "2. What are the two names?",
      "3. What is Abel's job?",
      "4. What colour is the bag?",
      "5. How much is it, and why did Mimi ask again?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Read the whole conversation twice, changing your voice for the two speakers. Then read the questions before learners write.",
      mistakes: "Question 5 has two parts. Learners answer only the price. Say “two parts” before they start.",
      extra: "Ask a sixth question: “How many of the six conversation moves can you find?” All six are there.",
      answers: "1 Afternoon. · 2 Mimi and Abel. · 3 He has a shop and sells bags. · 4 It is black. · 5 It is ninety birr. She asked again because ninety and nineteen sound similar.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Full sentences. Correct pronouns.",
    size: 17,
    items: [
      { q: "1 — What time of day?", a: "It is the afternoon.", why: "Both speakers say “Good afternoon”, which is used from midday until about six." },
      { q: "2 — The two names", a: "Mimi and Abel.", why: "Both take capital letters. Mimi gives her name in a full sentence; Abel uses the short form “I am Abel”." },
      { q: "3 — Abel's job", a: "He has a shop. He sells bags.", why: "“He” for a man. Two sentences give a fuller answer than one." },
      { q: "4 — The colour", a: "It is black.", why: "“It” for a thing. In the conversation the colour comes before the noun: “this black bag”." },
      { q: "5 — The price, and why she asked", a: "It is ninety birr. She asked again because ninety and nineteen sound similar.", why: "This is the teen/ty problem from Module 2, and asking again is exactly the right response." },
    ],
    notes: keyNotes("Question 5 is the most important item in the module: it shows learners that checking a number is normal, skilled behaviour — not a sign of weak English."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — exam practice", sub: "Ten short items, like the Level 1 listening exam.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 16, lsm: 1.28,
      text: "1.  “aitch”\n2.  the sound /v/\n3.  “It is forty birr.”\n4.  “It is quarter past six.”\n5.  “My name is D–A–W–I–T.”\n6.  “I do not work on Sunday.”\n7.  “There are twelve students.”\n8.  “She is a nurse in Gondar.”\n9.  “I cannot drive a car.”\n10. “Thank you very much.”" },
    side: { label: "Your task", color: C.listen, size: 16, items: [
      "1–2: write the letter, and a word with that sound.",
      "3–4: write the number and the time.",
      "5: write the name with a capital letter.",
      "6–9: write one fact from each sentence.",
      "10: write what you would reply.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Read each item twice, at natural speed. This is a full rehearsal of the listening paper — run it under exam conditions so learners know what it feels like.",
      mistakes: "Item 3 is the teen/ty test. Item 5 is the capital letter test. Both are deliberate.",
      extra: "Mark it together immediately afterwards so learners see their score while it still matters.",
      answers: "1 H · 2 any /v/ word · 3 40 birr · 4 6:15 · 5 Dawit · 6 She/he does not work on Sunday · 7 twelve students · 8 she is a nurse in Gondar · 9 he/she cannot drive · 10 “You are welcome.”",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "This is the exam standard. Check yours carefully.",
    // 10 items in a 2-column grid: three lines per card will not fit above 10pt.
    // This is the only sub-11pt content slide in the course; the shorter text below
    // buys back half a point over the original.
    size: 15, cols: 2, gap: 0.07, min: 10.5, minPart: 10,
    items: [
      { q: "1 — “aitch”", a: "H", why: "No /h/ in its name." },
      { q: "2 — the /v/ sound", a: "van · very · five", why: "A /v/ word, not /b/." },
      { q: "3 — “forty birr”", a: "40 birr", why: "FOR-ty — stress first." },
      { q: "4 — “quarter past six”", a: "6:15", why: "Fifteen past the hour." },
      { q: "5 — “D–A–W–I–T”", a: "Dawit", why: "A name takes a capital." },
      { q: "6 — “I do not work…”", a: "no work on Sunday", why: "ON for a day." },
      { q: "7 — “There are twelve…”", a: "12 students", why: "“There are” = plural." },
      { q: "8 — “She is a nurse…”", a: "a nurse in Gondar", why: "“She” + “a” + capital G." },
      { q: "9 — “I cannot drive…”", a: "cannot drive", why: "No -s after “cannot”." },
      { q: "10 — “Thank you…”", a: "“You are welcome.”", why: "The standard reply." },
    ],
    notes: keyNotes("Score this out of 10 and tell each learner their number. Anyone scoring 6 or below needs targeted listening practice in the weeks before the exam."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to do well in the listening exam", sub: "Four things that gain marks without any extra English.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaEye", title: "Read the questions first", desc: "You get time before the audio starts. Use it. Knowing what to listen for doubles what you catch." },
      { icon: "FaHandPaper", title: "Never leave a blank", desc: "A guess might be right. A blank is always wrong. Write something for every item." },
      { icon: "FaVolumeUp", title: "The second listening is for detail", desc: "First time, get the general idea. Second time, fill the gaps. Do not panic on the first pass." },
      { icon: "FaPencilAlt", title: "Check your capitals at the end", desc: "Names, places, days and months. Two minutes of checking can gain several marks." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "These four are exam technique, not English. They are worth several marks to every learner in the room and take five minutes to teach.",
      mistakes: "Learners freeze on the first listening and stop writing. Tell them the first pass is only for the general idea.",
      tip: "Practise habit 1 explicitly in the next mock: give thirty seconds of reading time and insist nobody writes until the audio starts.",
      activity: "Run the Listening 2 items again with the four habits applied, and compare scores. The improvement is usually obvious.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — a letter from a friend", sub: "The longest text in Level 1. Read it aloud twice.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 18, lsm: 1.35,
      text: "Dear Sara,\n\nHello! My name is Bethlehem. I am your new classmate.\nI am nineteen years old and I am from Hawassa.\nThere are four people in my family. My father is a driver and my mother is a teacher.\nI go to school every day at eight o'clock.\nI can speak Amharic and a little English, but I cannot write well.\nCan you help me?\n\nSee you on Monday,\nBethlehem" },
    side: { label: "How to read it", color: C.read, size: 16, items: [
      "The teacher reads the whole letter once.",
      "The class reads it together, in chorus.",
      "Then eight learners read one line each.",
      "Find one thing from every module of Level 1 in this letter.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "The finding task is the point: this letter deliberately contains something from all five earlier modules. Learners spotting that themselves is far more motivating than being told.",
      mistakes: "The letter format — “Dear” and the closing — is new. Do not teach it as grammar; just point out where each part goes.",
      extra: "Module 1: capitals and full stops. Module 2: nineteen, eight o'clock, Monday. Module 3: the verb “to be”, introductions. Module 4: family, jobs, “there are”. Module 5: SVO, can and cannot.",
      tip: "This is the first text that feels like real English rather than a classroom exercise. Say so — learners notice and it matters to them.",
      activity: "Write a reply: every learner writes a short letter back to Bethlehem, using the same shape.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE, using the correct pronoun.",
    items: [
      "How old is Bethlehem?",
      "Where is she from?",
      "How many people are in her family?",
      "What is her father's job?",
      "What can she NOT do, and what does she ask for?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Insist on full sentences with “she” and “her”. Question 5 has two parts — say so before they start.",
      mistakes: "Question 4 needs the possessive “her father”, then “he” for the father. Two pronouns for two different people in one answer.",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 She is nineteen years old. · 2 She is from Hawassa. · 3 There are four people in her family. · 4 Her father is a driver. · 5 She cannot write well, and she asks Sara for help.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Check the pronouns, the articles and the word order.",
    size: 17,
    items: [
      { q: "1 — How old is Bethlehem?", a: "She is nineteen years old.", why: "English uses “to be” for age. Note nine-TEEN, with the stress at the end." },
      { q: "2 — Where is she from?", a: "She is from Hawassa.", why: "“She” for a woman, and Hawassa takes a capital letter as a place name." },
      { q: "3 — How many people?", a: "There are four people in her family.", why: "“There are” for a plural, “people” is the irregular plural of person, and “her” is the possessive." },
      { q: "4 — Her father's job", a: "Her father is a driver.", why: "“Her” before the person because Bethlehem owns the relationship, then “a” before the job." },
      { q: "5 — What can she not do?", a: "She cannot write well, and she asks Sara for help.", why: "Two parts. “Cannot” for ability, and no -s on “write” after it." },
    ],
    notes: keyNotes("Question 3 packs three Level 1 rules into one short answer: there are, an irregular plural, and a possessive. If a learner gets all three, they are ready for the exam."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — exam practice", sub: "A short text with the kind of questions the exam asks.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 19, lsm: 1.36,
      text: "This is Yonas. He is thirty years old.\nHe works in a bank in Addis Ababa.\nThe bank opens at eight thirty and closes at five o'clock.\nYonas does not work on Sunday.\nHe has one sister. She is a nurse in Dire Dawa.\nYonas can speak three languages, but he cannot speak French." },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. How old is Yonas?",
      "2. What time does the bank open?",
      "3. Which day does he not work?",
      "4. What is his sister's job?",
      "5. Which language can he not speak?",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Run this under exam conditions: silent reading, then written answers, then mark together. Learners need to experience the format before the day.",
      mistakes: "Question 4 needs “his sister” then “she”. Two pronouns for two people in one answer — the same pattern as the previous text.",
      extra: "Ask a sixth: “Is Yonas a student?” The answer is no — he works in a bank.",
      answers: "1 He is thirty years old. · 2 It opens at half past eight. · 3 He does not work on Sunday. · 4 She is a nurse. · 5 He cannot speak French.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers, and the Level 1 vocabulary review", sub: "Twenty-five words from five modules.",
    size: 16,
    items: [
      { q: "1 — How old is Yonas?", a: "He is thirty years old.", why: "THIR-ty, stress at the start. Thirteen would be thir-TEEN." },
      { q: "2 — What time does the bank open?", a: "It opens at half past eight.  (or: at eight thirty)", why: "Both forms are correct. AT for a clock time." },
      { q: "3 — Which day does he not work?", a: "He does not work on Sunday.", why: "ON for a day, capital S on Sunday." },
      { q: "4 — His sister's job", a: "She is a nurse.", why: "“His” for the relationship, then “she” for the sister. Two people, two pronouns." },
      { q: "5 — Vocabulary review", a: "Five core words from each of the five modules — 25 in total.", why: "Your teacher will read all 25 aloud now. Say each one after them, then use five in sentences." },
    ],
    notes: keyNotes("Item 5 is the complete Level 1 core vocabulary. Read all twenty-five aloud together — it takes ninety seconds and it is the best possible final revision.")
      + "\n\nTHE 25 WORDS TO READ ALOUD:\nModule 1: pen · book · bag · van · school\nModule 2: time · money · week · month · price\nModule 3: hello · name · friend · student · goodbye\nModule 4: mother · red · water · teacher · hot\nModule 5: eat · work · like · have · go",
  });

  // ============================================================ 46–50 · WRITING
  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — the Level 1 writing task", sub: "Five sentences about yourself. This is the exam task.",
    panelW: 7.6,
    panel: { label: "Write five sentences using this frame", color: C.write, tint: C.writeTint, size: 19.5, lsm: 1.5,
      text: "My name is ______________.\nI am ______ years old and I am from ______________.\nThere are ______ people in my family.\nI go to ______________ every day.\nI can ______________, but I cannot ______________." },
    side: { label: "The eight checks", color: C.write, size: 15.5, items: [
      "1. Capital letter at the start of every sentence?",
      "2. Capitals on names and places?",
      "3. Is am / is / are in every sentence that needs it?",
      "4. Is there “a” or “an” before the job?",
      "5. Subject, then verb, then object?",
      "6. Correct he or she?",
      "7. “to” after “go”?",
      "8. Full stop at the end of every sentence?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "This is the exam writing task, exactly. Have learners write it, then check it against all eight points themselves, then swap and check a partner's.",
      mistakes: "The eight checks are the eight errors from slide 20. Everything connects — say so.",
      extra: "Fast finishers write three more sentences without the frame.",
      tip: "Learners who self-check gain marks. Teach checking as a skill in its own right — two minutes of checking is worth more than two minutes of extra writing.",
      activity: "Mark a sample: put an anonymous piece of writing on the board with four errors and have the class mark it using the eight checks.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write a short letter", sub: "Reply to Bethlehem from the reading text.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write six lines. Use the shape from the reading text.",
    items: [
      "1.  Start:  “Dear Bethlehem,”",
      "2.  Greet her and say who you are.",
      "3.  Say your age and where you are from.",
      "4.  Say something about your family.",
      "5.  Say one thing you can do and one you cannot.",
      "6.  Close:  “See you on Monday,” and your name.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Show the shape on the board first — the greeting line, the body, the closing line. Then let them write. The content is entirely revision; only the format is new.",
      mistakes: "Learners forget the comma after “Dear Bethlehem” and after the closing. Mention it once and do not make it a focus.",
      answers: "MODEL: “Dear Bethlehem, / Hello! My name is Sara. I am seventeen years old and I am from Bahir Dar. There are six people in my family. My mother is a farmer. I can read English, but I cannot speak fast. / See you on Monday, / Sara”",
      tip: "This is the first real piece of writing in the course — a whole text with a beginning and an end, not a set of sentences. Say that, and display the best three on the wall.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — correct the whole paragraph", sub: "Eight errors. Find and fix them all.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite the whole paragraph correctly. There are eight errors.",
    items: [
      "my name is dawit. i am student.",
      "I from addis ababa. My sister, he is a nurse.",
      "I injera eat every day.",
      "There is five people in my family.",
      "I go school at eight o'clock. It is fifty birrs for the bus.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "This is the eight-mistake slide in paragraph form. Let pairs work on it, then correct it together on the board line by line.",
      answers: "“My name is Dawit. I am a student. I am from Addis Ababa. My sister, she is a nurse. I eat injera every day. There are five people in my family. I go to school at eight o'clock. It is fifty birr for the bus.” — the eight errors: missing capitals, missing “a”, missing “am”, wrong pronoun, word order, there is/are, missing “to”, and “birrs”.",
      mistakes: "Learners find four or five and stop. Tell them there are exactly eight so they keep looking.",
      tip: "This single exercise revises the entire level. If a learner can fix all eight, they will pass the writing paper.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — the eight corrections and why", sub: "One error from each module. All of Level 1 in one paragraph.",
    size: 16, cols: 2,
    items: [
      { q: "“my name is dawit”", a: "My name is Dawit.", why: "Capital at the sentence start, capital on the name. Module 1." },
      { q: "“i am student”", a: "I am a student.", why: "Capital I always, and “a” before the job. Modules 1 and 4." },
      { q: "“I from addis ababa”", a: "I am from Addis Ababa.", why: "The verb “am” cannot be dropped, and both words of the place take capitals. Module 3." },
      { q: "“My sister, he is a nurse”", a: "My sister, she is a nurse.", why: "A sister is a woman, so “she”. Module 3." },
      { q: "“I injera eat”", a: "I eat injera.", why: "Subject, verb, object. The verb comes second. Module 5." },
      { q: "“There is five people”", a: "There are five people.", why: "Five is plural, so “there are”. Module 4." },
      { q: "“I go school”", a: "I go to school.", why: "“Go” always needs “to” before a place. Module 5." },
      { q: "“fifty birrs”", a: "fifty birr", why: "Currency never takes -s after a number. Module 2." },
    ],
    notes: keyNotes("Print this slide as the final revision card. Eight errors, one from each part of the level, with the module named — it is the most efficient revision sheet in the course."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your complete Level 1 writing checklist", sub: "Eight checks. Use them on every sentence in the exam.",
    check: true, color: C.write, size: 20,
    items: [
      { t: "Capital letters — sentence start, names, places, days, months, and “I”", d: "Modules 1 and 2." },
      { t: "Full stop or question mark at the end", d: "Module 1." },
      { t: "am / is / are in every sentence that needs it", d: "Module 3." },
      { t: "Correct he or she, his or her", d: "Module 3." },
      { t: "“a” or “an” before a job or a thing, and plural -s where it belongs", d: "Module 4." },
      { t: "Subject, then verb, then object — and “to” after “go”", d: "Module 5." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Read all six, then have learners check their letter from slide 47 against every one.",
      tip: "Six checks is short enough to remember under exam pressure. Give every learner a printed card and tell them to use it in the exam itself — checking is allowed and it gains marks.",
      activity: "Speed check: give learners two minutes to check a partner's letter against all six points and count the errors found.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — Level 1 review, multiple choice", sub: "One question from each module.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. What is the NAME of the letter G?  (Module 1)", opts: "a) “jee”     b) /g/     c) “jay”" },
      { q: "2. Which is 15?  (Module 2)", opts: "a) fifty     b) fifteen     c) five" },
      { q: "3. Complete: “She ___ my friend.”  (Module 3)", opts: "a) am     b) is     c) are" },
      { q: "4. Which is correct?  (Module 4)", opts: "a) a apple     b) an apple     c) apple" },
      { q: "5. Which is correct?  (Module 5)", opts: "a) I injera eat.     b) I eat injera.     c) Eat I injera." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "One item per module makes this a quick diagnostic. Note which module each learner fails on and target your revision there.",
      answers: "1 a · 2 b · 3 b · 4 b · 5 b",
      tip: "Record the class results per module. That tells you exactly which module to revise most in the remaining lessons.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "All five modules mixed together.",
    color: C.green, instruction: "Copy each sentence and fill the gap.", size: 18,
    items: [
      "1.  My name ______ Hana and I ______ a nurse.",
      "2.  I go ______ school at eight o'clock.",
      "3.  There ______ four people in my family.",
      "4.  I can read, ______ I cannot write well.",
      "5.  Excuse ______, how much ______ this bag?",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Each item has two gaps, which makes it harder than earlier fill-in exercises. That is deliberate at this stage.",
      answers: "1 is / am · 2 to · 3 are · 4 but · 5 me / is",
      mistakes: "Item 1 needs two different forms of the same verb. Learners often write “is” twice.",
      tip: "Item 5 mixes politeness with a question. It is the most exam-like item on the slide.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Situations, replies and modules.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the SITUATION to the WORD", opts: "1. You ask for something     2. Someone helps you     3. You are late     4. You stop a stranger          a) sorry     b) excuse me     c) please     d) thank you" },
      { q: "Part 2 — match the QUESTION to the ANSWER", opts: "1. How much is it?     2. What time is it?     3. What is your name?     4. Where are you from?" },
      { q: "a) It is half past four.        b) My name is Abel.", opts: "c) I am from Jimma.        d) It is forty birr." },
      { q: "Part 3 — match the ERROR to the CORRECTION", opts: "1. I student.     2. She go.     3. I go school.     4. fifty birrs          a) fifty birr     b) I go to school.     c) I am a student.     d) She goes." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Part 3 is the most valuable: matching errors to corrections is exam revision disguised as a puzzle.",
      answers: "Part 1: 1–c, 2–d, 3–a, 4–b.  ·  Part 2: 1–d, 2–a, 3–b, 4–c.  ·  Part 3: 1–c, 2–d, 3–b, 4–a.",
      tip: "Ask learners which module each Part 3 error comes from. Connecting the error to its lesson makes it much easier to remember.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — put the conversation in order", sub: "Ten lines. Number them 1 to 10.",
    color: C.green, instruction: "Write the correct order.", size: 17,
    items: [
      "a) Nice to meet you too. Where are you from?      f) Excuse me. Good morning.",
      "b) I am from Adama. And you?                      g) Good morning.",
      "c) Yes, I am. Nice to meet you.                   h) My name is Mimi. What is your name?",
      "d) I am from Bahir Dar. Are you a student?        i) I am Dawit. Nice to meet you.",
      "e) Thank you. Goodbye.                            j) See you tomorrow, Mimi.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Let pairs work it out and then perform their version. Performing reveals errors faster than checking on paper.",
      answers: "f → g → h → i → a → b → d → c → j → e",
      mistakes: "Several orders are arguably possible. Accept any order that produces a sensible conversation and ask learners to justify it — that discussion is worth more than the single right answer.",
      tip: "Cut the ten lines into strips so pairs can arrange them physically. It is much easier than working from the slide.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "One error from each module.",
    color: C.green, instruction: "Rewrite each sentence correctly. Say which module the rule comes from.", size: 17,
    items: [
      "1.  what is your name.",
      "2.  It is fifteen birrs.",
      "3.  My mother, he is a teacher.",
      "4.  There is six students in the class.",
      "5.  She can drives a car.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Asking which module each rule comes from is what makes this revision rather than testing. Learners connect the error to the lesson.",
      answers: "1 What is your name? (capital + question mark — Module 1) · 2 It is fifteen birr. (no -s on birr — Module 2) · 3 My mother, she is a teacher. (pronoun — Module 3) · 4 There are six students. (agreement — Module 4) · 5 She can drive a car. (no -s after can — Module 5)",
      tip: "Five errors, five modules, in order. Point that out — the structure of the exercise is itself a revision map.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Everything from Level 1.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  The English alphabet has 26 letters.",
      "2.  “Good night” is used when you arrive.",
      "3.  We say “I go to school”, not “I go school”.",
      "4.  “Excuse me” is used to get someone's attention.",
      "5.  In English the verb comes at the end of the sentence.",
      "6.  Water and rice never take -s.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test.",
      answers: "1 T · 2 F — it is used when leaving · 3 T · 4 T · 5 F — the verb comes after the subject, second in the sentence · 6 T",
      tip: "Item 5 is the whole of Module 5 in one line. If any learner marks it true, they need the three-column drill again before the exam.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "The exam questions, in writing.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What is your name and how do you spell it?",
      "2.  How old are you and where are you from?",
      "3.  How many people are in your family?",
      "4.  What do you do every day?",
      "5.  What can you do, and what can you not do?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "These are the speaking exam questions in written form. Doing them on paper first makes the spoken version much easier.",
      answers: "1 My name is ___. It is spelled ___. · 2 I am ___ years old and I am from ___. · 3 There are ___ people in my family. · 4 I go to ___ and I ___. · 5 I can ___, but I cannot ___.",
      mistakes: "Items 2 and 5 each need two parts. Learners answer only the first half.",
      tip: "Have learners keep these answers and use them to rehearse the speaking exam at home.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Full exam rehearsal. Work in pairs.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "One learner is the examiner, one is the candidate. Then swap.", size: 19,
    items: [
      "1.  Ask all five exam questions and mark your partner out of four for each.",
      "2.  Have your partner read the eight sentences aloud. Listen for the six sounds.",
      "3.  Describe a picture to your partner in five sentences.",
      "4.  Hold a two-minute conversation using all six moves.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Peer examining is unexpectedly effective: learners are stricter than teachers and they learn the criteria by applying them. Give them the four-point scale from Module 1.",
      answers: "SUCCESS CRITERIA: 1 five full-sentence answers · 2 the six target sounds clear and a stop at every full stop · 3 five sentences with “there is / there are” and a colour · 4 all six moves, no silence longer than three seconds.",
      tip: "This is the best exam preparation in the module. Run it twice — once this week and once the week before the exam.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the whole level in one exercise", sub: "Everything from Modules 1 to 5.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write eight sentences about yourself, using something from each of the five modules.", opts: "Letters, numbers, greetings, vocabulary, sentences." },
      { q: "2. Correct and name the module:  “i am student. i go school. there is five people.”", opts: "Six things to fix." },
      { q: "3. Write a ten-line conversation between two people meeting for the first time.", opts: "Use all six conversation moves." },
      { q: "4. Someone says a price and you are not sure. Write THREE things you could say.", opts: "All three are from Level 1." },
      { q: "5. Write the eight checks you will use in the exam, from memory.", opts: "No looking back at slide 50." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "This is the final revision exercise of Level 1. Let learners work in pairs and take the full fifteen minutes.",
      answers: "2 “I am a student. I go to school. There are five people in my family.” — capital I twice (M1), missing “a” (M4), missing “to” (M5), there is/are (M4), plus capital at each sentence start (M1). 4 “Fifteen or fifty?” · “Can you write it, please?” · “Can you repeat, please?” 5 the six checks from slide 50.",
      tip: "Question 5 is the best predictor of exam performance. A learner who can list the checks from memory will use them in the exam.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "Look back at the whole level.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Which was the hardest thing in Level 1 for you, and why?", opts: "Be honest. Your teacher needs to know." },
      { q: "2. Which English mistake do you still make most often? What will you do about it?", opts: "Name one, and name one action." },
      { q: "3. You meet a new learner starting Level 1 tomorrow. What is the ONE thing you would tell them?", opts: "From your own experience." },
      { q: "4. What can you say in English today that you could not say five months ago?", opts: "Give three examples." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally and accept Amharic where needed. Question 4 is the emotional close of the level — give it real time and let several learners answer.",
      answers: "No fixed answers. Question 2 should produce a specific error and a specific action, not a general wish to improve.",
      tip: "Write the class's answers to question 3 on the board and photograph them. Give them to the next Level 1 group — advice from learners who have just done it is far more persuasive than advice from a teacher.",
      activity: "Round the room: every learner gives one answer to question 4. Nobody may repeat someone else's.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Letters, numbers and time", items: [
      { q: "1. What is the SOUND of the letter C in “cat”?", opts: "a) /s/     b) /k/     c) “see”" },
      { q: "2. Write 47 in words.", opts: "Check the spelling." },
      { q: "3. Write 8:45 in words.", opts: "Which hour do you name?" },
      { q: "4. Complete: “The class starts ___ nine o'clock.”", opts: "a) in     b) on     c) at" },
    ] },
    { part: "Part 2 · Greetings and the verb “to be”", items: [
      { q: "5. You ARRIVE at class at 7 p.m. What do you say?", opts: "a) Good night     b) Good evening     c) Good afternoon" },
      { q: "6. Correct this: “He not a teacher.”", opts: "Write the full sentence." },
      { q: "7. Make it a question: “She is your friend.”", opts: "Two words swap." },
      { q: "8. Complete: “This is Hana. ___ bag is red.”", opts: "a) His     b) Her     c) She" },
    ] },
    { part: "Part 3 · Vocabulary and articles", items: [
      { q: "9. Complete: “I want ___ apple.”", opts: "a) a     b) an     c) nothing" },
      { q: "10. The plural of “child” is …", opts: "a) childs     b) children     c) childrens" },
      { q: "11. Complete: “______ six students in the class.”", opts: "a) There is     b) There are     c) It has" },
      { q: "12. Which is correct?", opts: "a) a bag red     b) a red bag     c) red a bag" },
    ] },
    { part: "Part 4 · Sentences and politeness", items: [
      { q: "13. Rearrange:  coffee · drinks · my mother", opts: "Write the full sentence." },
      { q: "14. Complete: “She likes ___.”  (me)", opts: "a) I     b) me     c) my" },
      { q: "15. Which is correct?", opts: "a) He can drives.     b) He can drive.     c) He cans drive." },
      { q: "16. You want to stop a stranger and ask a question. What do you say first?", opts: "a) Sorry     b) Excuse me     c) Please" },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write two sentences introducing yourself.", opts: "Check all eight points." },
      { q: "18. Write a sentence about your family with “There are”.", opts: "Count first." },
      { q: "19. Write one thing you can do and one you cannot, in one sentence.", opts: "Join them with “but”." },
      { q: "20. SPEAKING: greet your teacher, introduce yourself, and ask two questions.", opts: "This is the exam speaking task." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Level 1 final quiz — " + p.part, sub: "20 questions covering all six modules. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "This quiz covers the WHOLE of Level 1. Write your answers on paper." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nThis is the final quiz of Level 1 and it is the best predictor of the exam result. Mark it carefully and give every learner their score before the exam, so they know exactly where they stand.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — sound of C in “cat”", a: "b) /k/", why: "The NAME of C is “see”, but its usual SOUND is /k/. Name for spelling, sound for reading. Module 1." },
      { q: "Q2 — 47 in words", a: "forty-seven", why: "Tens first, then units, with a hyphen. “Forty” has no “u”. Module 2." },
      { q: "Q3 — 8:45 in words", a: "quarter to nine", why: "After half past you look forward to the next hour. Module 2." },
      { q: "Q4 — “starts ___ nine o'clock”", a: "c) at", why: "AT for a clock time, ON for a day, IN for a month. Module 2." } ],
    [ { q: "Q5 — arriving at 7 p.m.", a: "b) Good evening", why: "“Good evening” greets someone arriving; “Good night” says goodbye. Module 3." },
      { q: "Q6 — correct “He not a teacher.”", a: "He is not a teacher.", why: "The verb “is” cannot be removed. “Not” goes after it. Module 3." },
      { q: "Q7 — “She is your friend.” as a question", a: "Is she your friend?", why: "The first two words swap and the full stop becomes a question mark. Module 3." },
      { q: "Q8 — “This is Hana. ___ bag is red.”", a: "b) Her", why: "“Her” is the possessive for a woman; “she” is the subject form. Module 3." } ],
    [ { q: "Q9 — “I want ___ apple.”", a: "b) an", why: "“Apple” starts with a vowel sound. The rule is about sound, not spelling. Module 4." },
      { q: "Q10 — plural of “child”", a: "b) children", why: "Irregular — no -s is added, and “childrens” would be a double plural. Module 4." },
      { q: "Q11 — “______ six students.”", a: "b) There are", why: "Six is more than one. “It has” is a direct-translation error. Module 4." },
      { q: "Q12 — which is correct?", a: "b) a red bag", why: "The colour comes before the thing in English. Module 4." } ],
    [ { q: "Q13 — coffee · drinks · my mother", a: "My mother drinks coffee.", why: "Subject, verb, object. Who does it, what they do, what to. Module 5." },
      { q: "Q14 — “She likes ___.”", a: "b) me", why: "After the verb, use the object form. Before the verb, the subject form. Module 5." },
      { q: "Q15 — which is correct?", a: "b) He can drive.", why: "“Can” never changes and the verb after it never takes -s. Module 5." },
      { q: "Q16 — stopping a stranger", a: "b) Excuse me", why: "“Excuse me” gets attention; “sorry” means you did something wrong. Module 6." } ],
    [ { q: "Q17 — two sentences introducing yourself", a: "e.g. “My name is Sara. I am from Bahir Dar.”", why: "Marked on capitals, the verb “to be”, and full stops — the core of Level 1." },
      { q: "Q18 — a “There are” sentence", a: "e.g. “There are six people in my family.”", why: "Plural number, plural verb, plural noun — all three must agree." },
      { q: "Q19 — can and cannot in one sentence", a: "e.g. “I can read English, but I cannot speak fast.”", why: "Both halves are complete sentences joined by “but”, and no -s after can or cannot." },
      { q: "Q20 — speaking task", a: "Greeting · introduction · two questions", why: "Marked on being understood, on the verb appearing in every sentence, and on asking real questions rather than only answering." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Final quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer names the module it came from. Use it to plan your last revision.",
      items: items, start: i * 4 + 1, size: 16.5,
      notes: keyNotes("Record each learner's score out of 20 and tell them. A learner scoring 16 or above is ready for the exam. Below 12, spend the remaining lessons on the specific modules they failed — the module name is on every answer."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — the week before the exam", sub: "One paper each day. Twenty minutes.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Practise the five speaking questions", d: "Out loud, standing up, five times each. Record yourself once." },
      { t: "Read the eight sentences aloud", d: "Check the six sounds and stop at every full stop." },
      { t: "Write the five-sentence writing task", d: "Then check it against all eight points." },
      { t: "Say the 25 Level 1 words", d: "Five from each module. Out loud, with a sentence for each." },
      { t: "Do the eight-error paragraph again", d: "From slide 48. Find all eight without looking at the answers." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Give this out one full week before the exam. Write the exam date on the board and leave it there.",
      tip: "Friday's task is the best single predictor of the writing paper. If a learner can fix all eight errors unaided, they will pass.",
      activity: "Ask learners to practise the speaking questions with a family member, even one who speaks no English. Saying it aloud to a person is different from saying it alone.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the lesson before the exam.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write your letter to Bethlehem", d: "Six lines, correctly formatted, checked against the eight points." },
      { t: "Write the corrected paragraph", d: "The eight-error paragraph from slide 48, fully corrected, with the module named for each error." },
      { t: "Record your 90-second Level 1 capstone", d: "Greet and introduce · your family · your daily life · can and cannot · close politely. This one is kept forever." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 3 is the capstone recording and it matters. Tell learners it will be played beside their Module 1 recording, and that they will keep both.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every capstone recording personally and at length. This is the end of a level and a personal message from you is what learners remember about finishing it.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How the Level 1 exam is marked", sub: "One hundred marks. You know everything on it.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaHeadphones", title: "Listening — 25 marks", desc: "Letters and sounds (5) · numbers and prices (5) · times and days (5) · two short conversations (10)." },
      { icon: "FaMicrophone", title: "Speaking — 25 marks", desc: "Five questions, 5 marks each. Marked on being understood, not on being perfect. You must score at least 13." },
      { icon: "FaBookOpen", title: "Reading aloud — 25 marks", desc: "Eight sentences. The six target sounds (12) · stopping at full stops (8) · overall clarity (5)." },
      { icon: "FaPencilAlt", title: "Vocabulary & writing — 25 marks", desc: "40 picture-word items (15) · five sentences about yourself, checked against the eight points (10)." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Show this a full week before the exam. Explain the speaking floor plainly: 13 out of 25 in speaking is required regardless of the total, because the certificate says the learner can speak English.",
      tip: "Learners who know the mark scheme perform better. There is nothing to gain from keeping it secret.",
      mistakes: "Reassure the anxious ones: every single item on this exam comes from the six modules they have completed. There is nothing new.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "You have completed Level 1", sub: "Six modules. Here is everything you can now do.",
    cols: 3, color: C.green, titleSize: 19, descSize: 15,
    items: [
      { icon: "FaFont", title: "Read and write", desc: "26 letters, their sounds, capitals, full stops and question marks. You can read simple English." },
      { icon: "FaHashtag", title: "Numbers and time", desc: "Count to 100, tell the time, say a price in birr, give your phone number." },
      { icon: "FaComments", title: "Meet people", desc: "Greet anyone, introduce yourself, ask five questions, and keep a conversation going." },
      { icon: "FaLanguage", title: "Over 200 words", desc: "Family, colours, animals, food, school, the body, jobs and weather." },
      { icon: "FaLayerGroup", title: "Build sentences", desc: "Subject, verb, object. Pronouns. Can and cannot. And and but." },
      { icon: "FaTrophy", title: "Hold a conversation", desc: "Ten turns with a stranger, from hello to goodbye, entirely in English." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Read all six aloud slowly. Then go back to slide 2 of Module 1 and read those first objectives again. The distance between them is the whole point of this slide.",
      tip: "This is the moment to play the Module 1 recordings. Do it now, not at the very end — you want the learners to hear the difference and then have time to talk about it.",
      activity: "Each learner says one thing from this slide that they are most proud of. Nobody may repeat someone else's.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "The complete Level 1 reference card", sub: "Everything that matters, on one slide. Photograph it.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 19, descSize: 15.5, iconInline: true,
    items: [
      { icon: "FaSitemap", title: "The five sentence patterns", desc: "I am a student.  (to be)\nI eat injera.  (subject + verb + object)\nHe is not a teacher.  (negative)\nAre you from Adama?  (question)\nI can read.  ·  I cannot swim.  (ability)" },
      { icon: "FaExchangeAlt", title: "The three pronoun sets", desc: "Before the verb:  I · you · he · she · it · we · they\nAfter the verb:  me · you · him · her · it · us · them\nBefore a thing:  my · your · his · her · our · their" },
      { icon: "FaCheck", title: "The eight exam checks", desc: "Capitals · full stops · am/is/are · he or she · a/an · plural -s · subject-verb-object · “to” after go" },
      { icon: "FaComments", title: "The six conversation moves", desc: "1 Greet  ·  2 Introduce yourself  ·  3 Ask about them\n4 Say something more  ·  5 Ask a follow-up  ·  6 Close politely" },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "This is the single most useful page in Level 1. Print it for every learner and tell them to keep it in their bag for the exam and for Level 2.",
      tip: "Print it as an A3 poster for the classroom wall and leave it up through Level 2 — you will point at it constantly.",
      activity: "Cover each box in turn and ask the class to reproduce it from memory. Anyone who can do all four is ready.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Level 1 complete",
    text: "Six months ago you could not read an English word. Today you can hold a conversation.",
    sub: "26 letters. 200 words. 5 sentence patterns. 22 phrases. And a real conversation with a stranger, from hello to goodbye.\nListen to your first recording again. That is how far you have come.",
    chips: ["NEXT — LEVEL 2", "Elementary English", "Present · past · future · questions · real situations"],
    notes: tn({
      time: "8 minutes. Do not rush the end of a level.",
      how: "Play the Module 1 recordings beside the Module 6 capstone recordings, with permission. Then say the numbers out loud: 26 letters, 200 words, 5 patterns, 22 phrases. Specific facts are believable; general praise is not.",
      tip: "Hand out the Level 1 certificates in front of the class if you can. For many adult learners this is the first certificate they have received in years, and it matters far more than the marks on it.",
      activity: "Every learner introduces themselves to the class one final time, in English, standing up. Then applaud. Then tell them Level 2 starts with the present simple — and that they already know half of it.",
    }),
  });
};
