"use strict";
/* LEVEL 1 · MODULE 3 — Greetings & Introductions   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 1", levelNo: "1", levelName: "Beginner\nEnglish", cefr: "CEFR Pre-A1 → A1",
    moduleTag: "Module 3 of 6",
    title: "Greetings & Introductions",
    sub: "Meet someone, say who you are, and keep the conversation going. The first time you will hold a real exchange entirely in English.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5", v: "NEW WORDS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by shaking one learner's hand and saying “Good morning. My name is ___. What is your name?” Wait for the answer. Then say: “That is this module. By Friday everyone in this room will do that without thinking.”",
      tip: "This is the module learners tell their families about. It is the first time English becomes a social act rather than a school subject.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all of them social, all of them useful today.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Greet someone correctly for the time of day", d: "Good morning · good afternoon · good evening — and know which one to use." },
      { t: "Introduce yourself", d: "“My name is Sara. I am from Bahir Dar. I am a student.”" },
      { t: "Ask someone about themselves", d: "“What is your name?”  “Where are you from?”  “How are you?”" },
      { t: "Introduce another person", d: "“This is my friend Dawit. He is from Addis Ababa.”" },
      { t: "Use the verb “to be” correctly", d: "I am · you are · he is · she is · we are · they are. The most used verb in English." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask “Can you do this now?” Objective 5 is the grammar spine of the module — say that it is the verb they will use more than any other in English.",
      tip: "Return to this slide at the end of the module. Ask the same question. The change is the proof.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: how do you greet people?", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaHandPaper", title: "1 · In your language", desc: "How do you greet a friend in the morning? And how do you greet an older person? Are they different?" },
      { icon: "FaComments", title: "2 · English you know", desc: "Say any English greeting you already know. Hello? Hi? Good morning? Say it out loud." },
      { icon: "FaUsers", title: "3 · Turn and greet", desc: "Turn to the person beside you. Greet them any way you can. Shake hands." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Task 1 matters: in Amharic, greetings change for men and women and for age. Learners will notice this, which sets up the useful discovery that English greetings do not change at all.",
      mistakes: "Correct nothing in the warm-up.",
      tip: "Write the greetings learners already know on the board and leave them there. You will tick them off as the module covers each one.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "In English, one greeting works for everyone.",
    sub: "In Amharic you change the greeting for a man, a woman, an older person, a group.\nIn English you do not. “Good morning” is correct for your friend, your teacher, your manager and a stranger — all the same.",
    chips: ["No gender forms", "No age forms", "One word: “you” for everyone"],
    notes: tn({
      time: "5 minutes.",
      how: "Say this clearly — it is genuinely good news and it removes a fear. Learners coming from Amharic expect to choose between forms and worry about choosing wrongly. Tell them the choice does not exist.",
      mistakes: "The one thing that does change is formality of the WHOLE phrase, not the word: “Hi” to a friend, “Good morning” to a manager. Mention it now, teach it on slide 7.",
      tip: "Demonstrate: greet a male learner and a female learner with exactly the same words. Seeing it is more convincing than being told.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.table({
    sec: SEC.con, title: "Greetings by time of day", sub: "Three greetings, one goodbye. Choose by the clock.",
    table: {
      color: C.green, rowH: 0.62, fontSize: 18, headSize: 16, colW: [3.2, 3.2, 5.733],
      rows: [
        ["Time", "You say", "Notes"],
        ["Before 12:00", "Good morning.", "From waking up until midday."],
        ["12:00 – about 18:00", "Good afternoon.", "The whole afternoon, until it gets dark."],
        ["After about 18:00", "Good evening.", "A greeting when you ARRIVE in the evening."],
        ["When you LEAVE at night", "Good night.", "Not a greeting. Only for leaving or going to bed."],
      ],
    },
    note: "Careful:  “Good evening” = hello.   “Good night” = goodbye.   They sound similar but they do opposite jobs.",
    notes: tn({
      time: "10 minutes.",
      how: "Draw a clock or a timeline on the board and mark the three zones. Point at a zone and have the class say the greeting. Then say a time and ask for the greeting.",
      mistakes: "“Good night” used as a greeting is the classic error — learners arrive at an evening class and say “Good night” to the teacher. Teach the pair together and drill the difference.",
      extra: "Times to drill: 7 a.m., 11 a.m., 2 p.m., 5 p.m., 8 p.m., 11 p.m.",
      tip: "This module joins directly to Module 2. Use English clock times when you drill, and remind learners which clock you mean.",
      activity: "Time and greet: teacher calls a time, learners greet their partner with the correct greeting. Twelve rounds, two minutes.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2
  L.compare({
    sec: SEC.con, title: "Formal and informal — same meaning, different situation",
    sub: "Both are correct English. The difference is who you are speaking to.",
    left: { h: "Informal — friends, family", items: ["Hi!", "Hello.", "How are you?", "See you!", "Bye."] },
    right: { h: "Formal — teacher, manager, stranger", items: ["Good morning.", "Good afternoon.", "How are you today?", "Goodbye.", "Have a nice day."] },
    note: "When you are not sure which to use, choose the formal one. Nobody is ever offended by “Good morning”.",
    notes: tn({
      time: "10 minutes.",
      how: "Set up two situations physically: greet a learner as a friend, then greet the same learner as a job interviewer. Same person, different words. The contrast makes register visible without any explanation.",
      mistakes: "Learners often use “Hi” with everyone because it is short and easy. In a job interview that costs them. Give the safe default rule and repeat it.",
      extra: "Situations to sort: your brother · your teacher · a shopkeeper · a bank manager · a classmate · a hotel guest.",
      tip: "The safe-default rule — “when unsure, be formal” — is worth more than any list. Learners remember one rule; they forget ten examples.",
      activity: "Formal or informal: teacher names a person; learners say the right greeting. Do it fast, twelve rounds.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3
  L.table({
    sec: SEC.con, title: "“How are you?” — and how to answer", sub: "In English this is a greeting, not a real question about your health.",
    table: {
      color: C.green, rowH: 0.56, fontSize: 17.5, headSize: 16, colW: [3.6, 4.2, 4.333],
      rows: [
        ["They say", "You answer", "Then you ask back"],
        ["How are you?", "I am fine, thank you.", "And you?"],
        ["How are you?", "Very well, thank you.", "How are you?"],
        ["How are you today?", "I am good, thank you.", "And you?"],
        ["Are you well?", "Yes, I am fine.", "And you?"],
      ],
    },
    note: "The important part is the LAST column. Always ask back. A conversation that only goes one way stops immediately.",
    notes: tn({
      time: "10 minutes.",
      how: "Model the full three-part exchange yourself with a learner: greeting, answer, ask back. Then have the class do it in a chain around the room so everyone both answers and asks.",
      mistakes: "Learners answer and stop. The conversation dies and they conclude their English failed. Teach “And you?” as part of the answer, not as a separate skill — say it in the same breath.",
      extra: "“I am fine” is safe and always correct. “Not bad” and “I am tired” are natural too but keep them for later.",
      tip: "Tell learners the truth about this exchange: it is a ritual, not a real enquiry. Nobody expects a real answer about your health. Knowing that removes a lot of anxiety.",
      activity: "Greeting chain: learner 1 greets learner 2, who answers and greets learner 3, and so on around the whole class. Everyone speaks twice.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4
  L.grid({
    sec: SEC.con, title: "Introducing yourself — four sentences", sub: "This is the model. Learn it by heart, then change the words.",
    cols: 4, color: C.green, titleSize: 22, descSize: 16, shadow: true, tint: C.white,
    items: [
      { icon: "FaComments", title: "1 · Greet", desc: "“Good morning.”\n\nChoose by the time of day." },
      { icon: "FaUser", title: "2 · Your name", desc: "“My name is Sara.”\n\nOr: “I am Sara.” Both correct." },
      { icon: "FaMapMarkerAlt", title: "3 · Where you are from", desc: "“I am from Bahir Dar.”\n\nYour town, or your country." },
      { icon: "FaBriefcase", title: "4 · What you do", desc: "“I am a student.”\n\nDo not forget the small word “a”." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Say all four about yourself. Then have the class say all four in chorus, replacing your details with the word “blank”. Then individuals fill in their own details. Model, chorus, individual — always in that order.",
      mistakes: "The article in step 4 is dropped constantly: “I am student.” It is transfer error S3 — Amharic has no equivalent. Correct it every time from now on.",
      extra: "Jobs to teach alongside: student, teacher, farmer, driver, nurse, trader, engineer.",
      tip: "Memorising the four-sentence chunk gives beginners something to fall back on when they panic. Chunks are how fluency starts — do not skip the by-heart step.",
      activity: "Around the class, everyone gives all four sentences. Time it. Then do it again and beat the time.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5
  L.table({
    sec: SEC.con, title: "The questions that keep a conversation going", sub: "Five questions. Learn the answer to each one too.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [4.6, 4.2, 3.333],
      rows: [
        ["Question", "Answer", "Asks about"],
        ["What is your name?", "My name is Hana.", "Name"],
        ["Where are you from?", "I am from Gondar.", "Place"],
        ["How old are you?", "I am twenty years old.", "Age"],
        ["What do you do?", "I am a nurse.", "Job"],
        ["How are you?", "I am fine, thank you. And you?", "Wellbeing"],
      ],
    },
    note: "Every question starts with a question WORD, and every one ends with a question MARK. Your voice goes up at the end. ↗",
    notes: tn({
      time: "12 minutes.",
      how: "Drill the question and the answer as a pair, never separately. A learner who can only answer cannot start a conversation; a learner who can only ask cannot continue one.",
      mistakes: "“How old are you?” is answered by translation as “I have twenty years”. English uses the verb “to be” for age — say “I AM twenty years old” with emphasis on “am”.",
      extra: "“What do you do?” contains “do” twice and is grammatically complex. Teach it as one fixed phrase; the grammar comes in Level 2.",
      tip: "Write these five questions on a card for every learner. They are the entire content of a first conversation in any language.",
      activity: "Interview: every learner asks three classmates all five questions and writes the answers. Then reports one classmate to the room.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6
  L.grid({
    sec: SEC.con, title: "Introducing another person", sub: "“This is …” — then say something about them.",
    cols: 3, color: C.green, titleSize: 21, descSize: 16, shadow: true, tint: C.white,
    items: [
      { icon: "FaUserFriends", title: "This is my friend Dawit.", desc: "Use “this is” when the person is beside you." },
      { icon: "FaMale", title: "He is from Addis Ababa.", desc: "HE for a man or a boy." },
      { icon: "FaFemale", title: "She is a nurse.", desc: "SHE for a woman or a girl." },
    ],
    note: "Watch out: in Amharic “you” changes for men and women, but in English HE and SHE are what change. Saying “My sister, he is a nurse” is the mistake to avoid.",
    notes: tn({
      time: "12 minutes.",
      how: "Physically introduce two learners to the class, using “this is”, then “he is” or “she is”. Then have learners introduce their neighbour. Doing it with real people fixes the pronoun far better than a table does.",
      mistakes: "He/she confusion is transfer error S5 and it persists into Level 3 if it is not caught here. Correct it every single time, immediately, and name the cause: “In Amharic the verb tells us; in English the pronoun tells us.”",
      extra: "Practise with family members: my mother — she; my brother — he; my parents — they.",
      tip: "Point at a man and say “he”, point at a woman and say “she”, twenty times, fast. This drill feels childish for about ten seconds and then it works.",
      activity: "Introduce your neighbour: each learner introduces the person beside them to the class in two sentences. Every learner is both introducer and introduced.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "hello", ipa: "/həˈləʊ/", pos: "expression", icon: "FaHandPaper",
      meaning: "A greeting. You can use it at any time of day.",
      example: "Hello. My name is Sara.",
      mistake: "The stress is on the SECOND part: he-LLO. Not HE-llo. Also, “hello” works at any time — but “good morning” is better before midday in a formal situation.",
      notes: tn({ time: "5 minutes.",
        how: "Say it with exaggerated stress on the second syllable, twice. Class repeats three times, then five individuals alone.",
        mistakes: "Stress on the first syllable makes it sound like a different word to a listener. Clap the stress: he-CLAP.",
        extra: "Hi (informal) · Hello (neutral) · Good morning (formal). Three levels of the same act.",
        tip: "Learners already know this word. Use it to teach the idea of word stress, which is new.",
        activity: "Everyone greets three people in the room with “Hello” and the correct stress." }) },

    { word: "name", ipa: "/neɪm/", pos: "noun", icon: "FaUser",
      meaning: "What people call you.",
      example: "My name is Abel. What is your name?",
      mistake: "The vowel is /eɪ/ — the same sound as in “eight” and “day”. Not “nem”. Also: say “My name IS”, never “My name”.",
      notes: tn({ time: "5 minutes.",
        how: "Teach the word inside its two sentences immediately — “My name is…” and “What is your name?” The word alone is almost useless; the two sentences are the whole first conversation.",
        mistakes: "Dropping “is” is transfer error S2 and it is the grammar focus of this module. Correct it here, then teach the rule on slide 16.",
        extra: "first name · last name · full name — useful for forms at a bank or a clinic.",
        tip: "Ask five learners “What is your name?” and require the full sentence in reply. Do it again tomorrow.",
        activity: "Name badges: learners write their name and one learner reads out three names from the badges." }) },

    { word: "friend", ipa: "/frend/", pos: "noun", icon: "FaUserFriends",
      meaning: "A person you like and know well.",
      example: "This is my friend Hana. She is a student.",
      mistake: "Two traps: the “fr” cluster — say f and r joined, with no vowel between — and the spelling, which has an “i” you cannot hear.",
      notes: tn({ time: "6 minutes.",
        how: "Build the cluster: /f/ … /r/ … fr … friend. Forwards only. Then use it in the introduction sentence from slide 10.",
        mistakes: "An inserted vowel — “firend” — is the same pattern as “isukul” in Module 1. Drill the cluster alone first.",
        extra: "Other fr- and gr- clusters: from, free, Friday, green, great.",
        tip: "“Friend” is the word that turns an introduction into a social act. Pair it with “this is” every time.",
        activity: "Learners introduce their neighbour as their friend, using both new words in one sentence." }) },

    { word: "student", ipa: "/ˈstjuːdənt/", pos: "noun", icon: "FaGraduationCap",
      meaning: "A person who learns at a school, college or university.",
      example: "I am a student. She is a student too.",
      mistake: "Two things: “st” is a cluster — no vowel before it, so not “istudent” — and you must say “a student”, never “student” alone after “I am”.",
      notes: tn({ time: "6 minutes.",
        how: "Cluster first: /s/ /t/ joined, then st-udent. Then the article: hold up one finger and say “A student” to make the article visible.",
        mistakes: "Missing article is transfer error S3 and it is the single most frequent error in Level 1 speech. It needs correcting hundreds of times, starting now.",
        extra: "Other jobs with the article: a teacher · a nurse · a driver · a farmer · an engineer (note “an” before a vowel sound).",
        tip: "Everyone in the room is a student, so this word is used more than any other job word in the course. Get it right now.",
        activity: "Chain: “I am a student. She is a student. He is a student.” Around the class, changing the pronoun each time." }) },

    { word: "goodbye", ipa: "/ɡʊdˈbaɪ/", pos: "expression", icon: "FaHandPeace",
      meaning: "What you say when you leave.",
      example: "Goodbye. See you tomorrow.",
      mistake: "Stress on the second part: good-BYE. And remember: “Good night” is also a goodbye, not a greeting.",
      notes: tn({ time: "5 minutes.",
        how: "Teach the family together: Goodbye · Bye · See you · See you tomorrow · Have a nice day. Then sort them into formal and informal on the board.",
        mistakes: "The good evening / good night confusion returns here. Test it: “You arrive at class at 7 p.m. What do you say?”",
        extra: "See you later · See you on Monday · Have a good weekend.",
        tip: "End every lesson from now on with the class saying goodbye in English. Ritual repetition costs no lesson time at all.",
        activity: "Leaving line: learners form a line and say goodbye to each person as they pass. Everyone says it ten times in one minute." }) },
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
    title: "Rule 1 — the verb “to be”: am, is, are",
    sub: "The most used verb in English. Learn all six forms together.",
    table: {
      color: C.gram, rowH: 0.44, fontSize: 18, headSize: 16, colW: [2.6, 2.2, 3.6, 3.733],
      rows: [
        ["Person", "Form", "Example", "Short form"],
        ["I", "am", "I am a student.", "I'm"],
        ["you", "are", "You are my friend.", "you're"],
        ["he", "is", "He is from Adama.", "he's"],
        ["she", "is", "She is a nurse.", "she's"],
        ["it", "is", "It is my bag.", "it's"],
        ["we / they", "are", "They are students.", "they're"],
      ],
    },
    note: "English ALWAYS needs this verb. Amharic does not need a separate word here — that is why “He teacher” feels natural and is wrong.",
    notes: tn({
      time: "12 minutes. This is the grammar spine of the module.",
      how: "Chant it: “I am, you are, he is, she is, it is, we are, they are.” Three times in chorus, then individuals. It is a rhythm as much as a rule.",
      mistakes: "Dropping the verb entirely — “He teacher”, “I from Gondar” — is transfer error S2. Name the cause out loud: “In Amharic you do not need a separate word here. In English you always do.” Adults fix this much faster when they know why.",
      extra: "Point at people and objects: “He is a student.” “She is my friend.” “It is a pen.” Twenty repetitions with real referents.",
      tip: "Teach the short forms now, not later. Learners who only know “I am” cannot understand natural speech, where “I'm” is used almost always.",
      activity: "Am/is/are race: teacher says a subject, learner says the form. “She” → “is”. Thirty rounds in two minutes.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — questions with “to be”: swap the two words",
    sub: "To make a question, put the verb BEFORE the person.",
    left: { h: "Correct", items: ["Are you a student?", "Is she your friend?", "Is he from Gondar?", "Are they teachers?"] },
    right: { h: "Wrong", items: ["You are a student?", "She is your friend?", "He is from Gondar?", "They are teachers?"] },
    note: "Statement:  You  are  a student.      Question:  Are  you  a student?     Only the first two words swap places.",
    notes: tn({
      time: "10 minutes.",
      how: "Write “You are” on two cards and physically swap them to make “Are you”. Learners see the operation instead of memorising a rule. Do it five times with different subjects.",
      mistakes: "This is transfer error S4, the same problem that later produces “Where you are going?”. Fixing it here saves work in Level 2.",
      extra: "Short answers: “Yes, I am.” / “No, I am not.” / “Yes, she is.” / “No, he is not.” Teach these with the questions — a question with no answer pattern is only half a skill.",
      tip: "The wrong column is not wrong in speech if the voice rises — but it is wrong in writing and in an exam. Say that honestly rather than pretending learners will never hear it.",
      activity: "Card swap at the board: one learner writes a statement, another physically rearranges it into a question.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — my, your, his, her",
    sub: "These words show who something belongs to.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [2.6, 2.6, 6.933],
      rows: [
        ["Person", "Word", "Example"],
        ["I", "my", "My name is Sara.  ·  This is my bag."],
        ["you", "your", "What is your name?  ·  Is this your pen?"],
        ["he", "his", "His name is Dawit.  ·  This is his book."],
        ["she", "her", "Her name is Hana.  ·  This is her bag."],
      ],
    },
    note: "The word depends on the OWNER, not on the thing. “Her bag” and “her book” both use “her”, because Hana owns them.",
    notes: tn({
      time: "10 minutes.",
      how: "Hold up objects belonging to learners and say who owns them: “This is her pen.” “This is his book.” Real objects make ownership concrete.",
      mistakes: "Learners match the word to the object rather than the owner, producing “his bag” for a woman's bag. Point at the person, not the thing, every time you correct.",
      extra: "Combine with the module's vocabulary: “My friend is a student.” “Her name is Hana.” “His friend is from Adama.”",
      tip: "This pairs directly with he/she. Teach and test them together — a learner who confuses he and she will also confuse his and her.",
      activity: "Lost property: collect five objects from learners, hold each up and ask “Whose is this?” The class answers “It is his pen” or “It is her book.”",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — the negative: “not”",
    sub: "Put “not” after am, is or are.",
    left: { h: "Correct", items: ["I am not a teacher.", "She is not from Gondar.", "They are not students.", "It is not my bag."] },
    right: { h: "Wrong", items: ["I not a teacher.", "She not from Gondar.", "They not students.", "Not it is my bag."] },
    note: "Short forms:  is not → isn't  ·  are not → aren't  ·  I am not → I'm not.   There is no short form for “am not” on its own.",
    notes: tn({
      time: "9 minutes.",
      how: "Show it as a sandwich: person + am/is/are + NOT + the rest. Write it on the board in that order with boxes and fill it five times.",
      mistakes: "Dropping the verb and keeping only “not” — “I not a teacher” — is the same S2 error as before. Every negative sentence is another chance to drill the verb “to be”.",
      extra: "True sentences about the class: “I am not a nurse.” “We are not in Addis Ababa.” “Today is not Sunday.”",
      tip: "Ask learners to say two true negative sentences about themselves. True content is remembered; invented content is not.",
      activity: "Two truths and a lie: each learner says three sentences about themselves, one false. The class guesses which, using “You are not a driver.”",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — put it all together",
    sub: "The verb “to be”, the pronouns, the possessives and the capitals.",
    left: { h: "Correct", items: ["My name is Dawit.", "She is my friend.", "He is not a teacher.", "Are you from Adama?"] },
    right: { h: "Wrong", items: ["my name Dawit.", "She my friend.", "He not a teacher.", "You are from adama?"] },
    note: "Four checks for every sentence:  1 · is the verb am/is/are there?   2 · is the pronoun right for a man or a woman?   3 · capital letters on names and places?   4 · the right mark at the end?",
    notes: tn({
      time: "9 minutes.",
      how: "Take each wrong sentence and ask the class to name every error before you fix it. Sentences 1 and 4 have two errors each — say so in advance.",
      mistakes: "Learners find one error and stop. Tell them the number of errors in each sentence first.",
      extra: "Two more for pairs: “i am student.” and “She is my friend?” said as a statement.",
      tip: "Add these four checks to the wall next to the ones from Modules 1 and 2. The list is now eleven points, and it covers everything a Level 1 learner writes.",
      activity: "Error auction: teams bid on how many errors they can find in a set of four sentences.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — am, is or are?", sub: "Read the question, look at the answer, then read WHY.", items: [
      { q: "Complete: “She ___ my friend.”", a: "She is my friend.", why: "With he, she or it the form is “is”. The verb can never be left out in English." },
      { q: "Complete: “I ___ from Hawassa.”", a: "I am from Hawassa.", why: "With “I” the form is always “am”. “I is” and “I are” are never correct." },
      { q: "Correct this: “They is students.”", a: "They are students.", why: "“They” is more than one person, so the form is “are”. The plural -s on “students” is also correct here." },
    ] },
    { title: "Guided examples 2 — making questions", sub: "Swap the first two words.", items: [
      { q: "Make a question: “You are a teacher.”", a: "Are you a teacher?", why: "The verb “are” moves in front of “you”, and the full stop becomes a question mark." },
      { q: "Make a question: “She is from Gondar.”", a: "Is she from Gondar?", why: "“Is” comes first, then “she”. Nothing else in the sentence moves." },
      { q: "Answer this: “Are you a student?”", a: "Yes, I am.  /  No, I am not.", why: "A short answer keeps the verb. “Yes” alone is understood but is not yet a full English answer." },
    ] },
    { title: "Guided examples 3 — he, she, his, her", sub: "Look at the person, not the thing.", items: [
      { q: "Correct this: “My sister, he is a nurse.”", a: "My sister, she is a nurse.", why: "A sister is a woman, so the pronoun is “she”. In Amharic the verb carries this information; in English the pronoun does." },
      { q: "Complete: “Dawit is my friend. ___ name is Dawit.”", a: "His name is Dawit.", why: "Dawit is a man, so the possessive is “his”. It depends on the owner, not on the word “name”." },
      { q: "Complete: “This is Hana. ___ bag is red.”", a: "Her bag is red.", why: "Hana is a woman, so it is “her”, whatever the object is — her bag, her book, her pen." },
    ] },
    { title: "Guided examples 4 — greetings and goodbyes", sub: "Choose by the time and by the person.", items: [
      { q: "It is 9 in the morning and you meet your teacher. What do you say?", a: "Good morning.", why: "Before midday it is “good morning”, and with a teacher the formal greeting is the safe choice." },
      { q: "It is 8 in the evening and you ARRIVE at class. What do you say?", a: "Good evening.", why: "“Good evening” is a greeting for arriving. “Good night” is only used when leaving or going to bed." },
      { q: "Someone says “How are you?” Give a complete answer.", a: "I am fine, thank you. And you?", why: "Answer, then ask back. Without “And you?” the conversation stops after one exchange." },
    ] },
    { title: "Guided examples 5 — introducing people", sub: "Two sentences: who they are, then one fact.", items: [
      { q: "Introduce your friend Abel from Merkato.", a: "This is my friend Abel. He is from Merkato.", why: "“This is” for someone beside you, then “he” because Abel is a man, plus capital letters on Abel and Merkato." },
      { q: "Correct this: “This is my friend. She name is Hana.”", a: "This is my friend. Her name is Hana.", why: "“She” is the person; “her” is the possessive. Use “her” before a thing that belongs to her." },
      { q: "Introduce yourself in four sentences.", a: "Good morning. My name is ___. I am from ___. I am a ___.", why: "Greeting, name, place, job — the fixed four-part chunk. Learn it by heart and change only the details." },
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
    title: "Meeting someone for the first time",
    sub: "Sara meets Dawit outside the school gate in Bahir Dar.",
    turns: [
      { who: "DAWIT", text: "Good morning. My name is Dawit. What is your name?", side: "l" },
      { who: "SARA", text: "Good morning, Dawit. My name is Sara.", side: "r" },
      { who: "DAWIT", text: "Nice to meet you, Sara. Where are you from?", side: "l" },
      { who: "SARA", text: "I am from Bahir Dar. And you?", side: "r" },
      { who: "DAWIT", text: "I am from Addis Ababa. I am a student here.", side: "l" },
      { who: "SARA", text: "Nice to meet you too. See you tomorrow.", side: "r" },
    ],
    note: "Listen first. Then repeat each line. Then read it in pairs. Then use your OWN name and town.",
    notes: tn({
      time: "12 minutes.",
      how: "Four steps in order: listen books closed, chorus repeat, pair reading, then perform with their own details. Step four is where the language becomes theirs.",
      mistakes: "Watch for the dropped “am” in “I am from…” and for “Nice to meet you” answered without “too”.",
      extra: "Note that Sara says “And you?” — point at it. It is the single move that keeps a first conversation alive.",
      tip: "Make the class learn this dialogue by heart. A memorised chunk is what a beginner falls back on when they panic, and it is the fastest route to sounding fluent in a first meeting.",
      activity: "Mingle: everyone stands, meets five different people, and performs the whole dialogue with each. Five minutes, very noisy, extremely effective.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Introducing your friend",
    sub: "Sara introduces Dawit to her teacher, Chaltu.",
    turns: [
      { who: "SARA", text: "Good afternoon, teacher. This is my friend Dawit.", side: "l" },
      { who: "CHALTU", text: "Good afternoon, Dawit. Nice to meet you.", side: "r" },
      { who: "DAWIT", text: "Nice to meet you too. How are you?", side: "l" },
      { who: "CHALTU", text: "I am fine, thank you. Are you a student here?", side: "r" },
      { who: "DAWIT", text: "Yes, I am. I am from Addis Ababa.", side: "l" },
      { who: "CHALTU", text: "Welcome to Bahir Dar. See you in class.", side: "r" },
    ],
    note: "Three things to notice:  “This is my friend …”  ·  the short answer “Yes, I am.”  ·  the formal greeting to a teacher.",
    notes: tn({
      time: "12 minutes.",
      how: "After reading, ask learners to find the question and its short answer. “Yes, I am” is the pattern from Grammar Rule 2 appearing in real language — point at it so they see the rule working.",
      mistakes: "Learners answer “Yes” alone. Insist on “Yes, I am” for now; it reinforces the verb “to be”.",
      extra: "Swap the teacher for a manager, a nurse or a shopkeeper. The language does not change, which is the point of slide 4.",
      tip: "This dialogue is formal. Ask the class why Sara says “Good afternoon” and not “Hi”. They will get it, and the answer sticks better than being told.",
      activity: "Three-person role play: groups of three perform the whole dialogue, then rotate roles so each learner plays all three parts.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful phrases for meeting people",
    sub: "Six phrases. Learn them by heart — you will use them for the rest of your life.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 20, descSize: 15,
    items: [
      { icon: "FaComments", title: "“Nice to meet you.”", desc: "The reply is “Nice to meet you too.” Never forget “too”." },
      { icon: "FaUser", title: "“What is your name?”", desc: "Then listen — and be ready to ask how to spell it." },
      { icon: "FaMapMarkerAlt", title: "“Where are you from?”", desc: "Answer with your town or your country." },
      { icon: "FaHandPaper", title: "“How are you?”", desc: "Answer, then ask back: “And you?”" },
      { icon: "FaUserFriends", title: "“This is my friend …”", desc: "For introducing someone standing beside you." },
      { icon: "FaHandPeace", title: "“See you tomorrow.”", desc: "A warmer goodbye than “Goodbye” alone." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill all six in chorus, then in pairs, then individually. Insist on the complete phrase every time.",
      mistakes: "Half-phrases: “Nice meet you”, “Where you from”. Both are understood but neither is correct. Fix them now while there are only six phrases to manage.",
      extra: "Add “Welcome” and “Have a nice day” if the class is strong.",
      tip: "Print these six and put them on the wall beside the six from Module 1 and the six from Module 2. Eighteen phrases now cover a real first conversation, a shop and a clinic.",
      activity: "Phrase bingo: each learner takes three phrases and crosses them off as they use them naturally during the lesson.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "HANA", text: "Good morning. ______________________ ?", side: "l" },
      { who: "YOU", text: "My name is ______________. And you?", side: "r" },
      { who: "HANA", text: "My name is Hana. ______________________ you?", side: "l" },
      { who: "YOU", text: "I am fine, thank you. ______________________ are you from?", side: "r" },
      { who: "HANA", text: "I am from Gondar. Are you a student?", side: "l" },
      { who: "YOU", text: "______, I ______. ______________________ .", side: "r" },
    ],
    note: "Use these:  “What is your name”  ·  “How are”  ·  “Where”  ·  “Yes, I am”  ·  “Nice to meet you”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps in writing, then three pairs perform before you reveal the answers.",
      answers: "1 What is your name  ·  2 the learner's own name  ·  3 How are  ·  4 Where  ·  5 Yes, I am. Nice to meet you.",
      mistakes: "Gap 5 needs the short answer with the verb. Learners write “Yes” alone.",
      tip: "Have them perform it standing up and shaking hands. The physical action fixes the language better than reading seated.",
      activity: "Do it again with the roles reversed, so both learners produce every line.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — how to run it", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Read the first dialogue together", d: "Learner A is Dawit, learner B is Sara. Read it twice, then swap roles." },
      { t: "Close the book and try again", d: "Say as much as you remember. Gaps are fine." },
      { t: "Use your own name, town and job", d: "Everything else stays the same." },
      { t: "Meet a new partner", d: "Stand up, find someone you have not spoken to, and do it once more." },
    ],
    notes: tn({
      time: "8 minutes for all four rounds.",
      how: "Announce each round change loudly. Keep strictly to two minutes. Walk and listen — note errors, correct at the end, do not interrupt.",
      mistakes: "Do not let a confident learner speak for both. Give the quiet learner the first turn in the next round.",
      tip: "Round 4 is the one teachers skip when time is short, and it is the most valuable. Saying it to a new face is much closer to real life.",
      activity: "After round 4, ask three learners to tell the class one thing about their partner. That turns the drill into real communication.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the four-sentence introduction", sub: "Everyone. Standing up. Three rounds.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "Say it with the slide in front of you", d: "Greeting · name · town · job. Read it if you need to." },
      { t: "Say it with the slide hidden", d: "From memory. Gaps are fine — keep going and finish." },
      { t: "Say it to three different people", d: "Stand up and move. New face each time." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Everyone stands for part C. Standing changes the voice — learners speak louder and more confidently on their feet than seated.",
      mistakes: "The article in the job sentence — “I am student” instead of “I am a student”. Correct every occurrence you hear.",
      extra: "For learners who are not students: I am a driver · I am a farmer · I am a trader · I am a nurse · I work at home.",
      tip: "Give the class a target: everyone must complete all four sentences without stopping. Fluency here means finishing, not being perfect.",
      activity: "Speed introductions: 30 seconds per pair, then everyone rotates. Six rotations in three minutes.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — interview three classmates", sub: "Ask all five questions. Write the answers.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“What is your name?”", d: "Then: “How do you spell it?” — from Module 1." },
      { t: "“Where are you from?”", d: "Write the town with a capital letter." },
      { t: "“How old are you?”", d: "Numbers from Module 2. Answer: “I am ___ years old.”" },
      { t: "“What do you do?”", d: "Answer with “a” or “an”: a student, a nurse, an engineer." },
      { t: "“How are you?”", d: "And do not forget to ask back: “And you?”" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Three classmates each, all five questions. Learners write the answers, which gives you a written record to check and gives them something to report from.",
      mistakes: "Question 3 answered as “I have twenty years”. English uses “to be” for age. Correct it in the moment.",
      extra: "Add “What is your phone number?” from Module 2 if the class is fast.",
      tip: "This activity recycles Modules 1 and 2 inside Module 3 language. That is deliberate — say so, so learners notice their own progress.",
      activity: "Report back: three learners each report one classmate to the room, using “His name is…” and “She is from…”. That drills the pronouns from slide 10.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — /h/ at the start of a word",
    sub: "English needs the /h/ sound clearly. Breathe out at the start of the word.",
    left: { h: "Say the /h/", items: ["hello", "how", "he", "her", "his", "Hana"] },
    right: { h: "No /h/ — different word", items: ["ello  ✗", "ow  ✗", "e  ✗", "er  ✗", "is  ← a real word!", "Ana  ← a different name"] },
    note: "“His” and “is” are two different words. If you drop the /h/, a listener hears the wrong one. Put your hand in front of your mouth — you should feel warm air on /h/.",
    notes: tn({
      time: "9 minutes.",
      how: "Model the breath: hold your hand in front of your mouth and say “hello” so learners see the puff. Then have them test their own hand.",
      mistakes: "Dropping /h/ turns “his” into “is” and “he” into “e”. Because both results are real English words, the listener does not notice an error — they simply understand the wrong thing. That makes it worth drilling.",
      extra: "his–is, hair–air, hand–and, hat–at, heat–eat.",
      tip: "This module is full of /h/ words: hello, how, he, her, his, Hana. It is the natural place to drill the sound.",
      activity: "Hand test in pairs: learner A says a word from either column, learner B holds a hand up and says which column it came from.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — role plays", sub: "Work in pairs. Two minutes per situation.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Two students meet on the first day", d: "Informal. Use “Hi” and “Hello”. Exchange names and towns." },
      { t: "A student meets the head teacher", d: "Formal. Use “Good morning” and full sentences." },
      { t: "You introduce your friend to your neighbour", d: "Three people. Use “This is my friend…” and “He is…” or “She is…”." },
      { t: "You meet a foreign visitor at work", d: "Formal. Greet, introduce yourself, say what you do, ask where they are from." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Rearranging the furniture — a desk for the head teacher, chairs for the meeting — produces far more language than the same script read at a desk. It takes ninety seconds and is worth it.",
      mistakes: "Learners use the same register for all four situations. Stop after situation 2 and ask what changed between them.",
      extra: "Situation 4 is the one adults find most useful. Give it extra time if your class is working or job-seeking.",
      tip: "Give each pair one thing to listen for in the other pair's performance: the verb “to be”, the pronoun, or the greeting. Peer listening with a purpose is far more useful than watching.",
      activity: "Perform two of the four to the whole class and let the class name one thing that was done well.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "45 seconds. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Greet, correctly for the time of day", d: "“Good morning.” / “Good afternoon.” / “Good evening.”" },
      { t: "Introduce yourself in four sentences", d: "Name · town · job · age." },
      { t: "Introduce one other person", d: "“This is my friend ___. He is from ___.” or “She is a ___.”" },
      { t: "Ask three questions", d: "Name · where from · how are you." },
      { t: "Say goodbye", d: "“Goodbye.” or “See you tomorrow.”" },
    ],
    notes: tn({
      time: "12 minutes including listening back.",
      how: "Record on a phone, or perform live to a partner who ticks the five steps. Everyone does it — forty-five seconds is short enough that nobody can refuse.",
      mistakes: "Step 3 is where he/she errors appear. That is deliberate — it is what you are assessing.",
      answers: "SUCCESS CRITERIA: all five steps present · the verb am/is/are used correctly in every sentence · the pronoun matches the person in step 3 · a listener who does not know them understands every sentence.",
      tip: "Have them listen back once before submitting. Most learners hear their own missing “am” immediately.",
      activity: "Keep every recording. Play it beside the Module 1 recording at the end of Level 1.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — who is who?", sub: "Listen twice. Write the name, the town and the job.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 18, lsm: 1.4,
      text: "1.  “Good morning. My name is Hana. I am from Gondar. I am a nurse.”\n\n2.  “Hello. I am Abel. I am from Merkato. I am a trader.”\n\n3.  “Good afternoon. My name is Mimi. I am from Adama. I am a student.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "For each speaker write three things: NAME · TOWN · JOB.",
      "Use capital letters for the names and the towns.",
      "The teacher reads each one twice.",
      "Then write whether each speaker is “he” or “she”.",
    ] },
    notes: tn({
      time: "9 minutes.",
      how: "Read each speaker twice with a pause between. Read at natural speed — this is comprehension practice, not dictation.",
      mistakes: "The he/she task at the end is the real assessment. Learners must infer gender from the name, which is exactly what they will do in real life.",
      extra: "Add a fourth speaker if the class is strong: “Good evening. My name is Tolosa. I am from Jimma. I am a driver.”",
      answers: "1 Hana · Gondar · nurse · she  ·  2 Abel · Merkato · trader · he  ·  3 Mimi · Adama · student · she",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check the spelling, the capitals and the pronoun.",
    size: 18,
    items: [
      { q: "1 — the first speaker", a: "Hana · Gondar · a nurse · she", why: "“My name is Hana” gives the name; “I am from Gondar” gives the town. Hana is a woman, so the pronoun is “she”." },
      { q: "2 — the second speaker", a: "Abel · Merkato · a trader · he", why: "He says “I am Abel”, which is the short form of “My name is Abel”. Both are correct." },
      { q: "3 — the third speaker", a: "Mimi · Adama · a student · she", why: "Note the greeting: “Good afternoon” tells you the time of day as well." },
      { q: "Capital letters", a: "Hana · Gondar · Abel · Merkato · Mimi · Adama", why: "All six are names of people or places, so all six take a capital letter. Jobs do not." },
    ],
    notes: keyNotes("If learners wrote the jobs with a capital letter, that is the over-application error from Module 1. Point at the difference: names take capitals, ordinary words do not."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — a conversation", sub: "Listen twice, then answer the questions.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.35,
      text: "SARA:   Good afternoon. My name is Sara.\nYONAS:  Good afternoon, Sara. I am Yonas.\nSARA:   Nice to meet you. Are you a student?\nYONAS:  No, I am not. I am a bank teller.\nSARA:   Where are you from?\nYONAS:  I am from Dire Dawa. And you?\nSARA:   I am from Bahir Dar." },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. What time of day is it?",
      "2. Is Yonas a student?",
      "3. What is his job?",
      "4. Where is Yonas from?",
      "5. Where is Sara from?",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Read the whole conversation twice, changing your voice for the two speakers. Then read the questions aloud before learners write.",
      mistakes: "Question 2 requires hearing the negative “No, I am not”. Learners who miss the “not” answer yes — replay just that line if many get it wrong.",
      extra: "Ask a sixth question: “Which greeting do they use, and why?” The answer is “Good afternoon”, because it is after midday.",
      answers: "1 Afternoon.  2 No, he is not.  3 He is a bank teller.  4 He is from Dire Dawa.  5 She is from Bahir Dar.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Full sentences. Correct pronouns.",
    size: 17,
    items: [
      { q: "1 — What time of day is it?", a: "It is the afternoon.", why: "Both speakers say “Good afternoon”, which is used from midday until about six in the evening." },
      { q: "2 — Is Yonas a student?", a: "No, he is not.", why: "He says “No, I am not.” When you report it, “I” becomes “he”, because you are talking about him." },
      { q: "3 — What is his job?", a: "He is a bank teller.", why: "Do not forget the article “a” before the job. And “his” because Yonas is a man." },
      { q: "4 — Where is Yonas from?", a: "He is from Dire Dawa.", why: "Both words of the place name take a capital letter." },
      { q: "5 — Where is Sara from?", a: "She is from Bahir Dar.", why: "“She” because Sara is a woman. This is the pronoun error to watch for all through this module." },
    ],
    notes: keyNotes("Questions 2 and 5 are the diagnostic ones. If learners used the wrong pronoun, go back to slide 10 and drill he/she with real people before the practice exercises."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to listen when you meet someone new", sub: "Four habits for a real first conversation.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaUser", title: "Listen for the name first", desc: "Names are the hardest part because you cannot guess them. Ask “How do you spell it?” — this is completely normal." },
      { icon: "FaHandPaper", title: "Do not stop at one hard word", desc: "If you miss a word, keep listening. Stopping to think about it means missing the next five." },
      { icon: "FaComments", title: "Repeat the name back", desc: "“Nice to meet you, Dawit.” It is polite, it confirms you heard correctly, and it helps you remember." },
      { icon: "FaVolumeUp", title: "Listen for “he” and “she”", desc: "The pronoun tells you who is being talked about. It is one small word carrying a lot of meaning." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Read each habit and ask which one learners already do. Habit 3 is the one nobody does and everybody should — model it twice.",
      mistakes: "Learners nod without hearing the name and then cannot use it. Say plainly that asking for a name twice is normal in every language.",
      tip: "Habit 3 has a double benefit: it is polite AND it is memory practice. Point that out.",
      activity: "Name memory: go round the class, each learner says “Nice to meet you, [previous learner's name]” before giving their own.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — three people", sub: "Read it aloud twice before you answer.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 21, lsm: 1.42,
      text: "This is Hana.\nShe is from Gondar.\nShe is a nurse.\n\nThis is Abel.\nHe is from Addis Ababa.\nHe is not a student. He is a trader." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the whole text once.",
      "The class reads it together, in chorus.",
      "Then individuals read one line each.",
      "Find every “he” and every “she”. Why is each one used?",
    ] },
    notes: tn({
      time: "9 minutes.",
      how: "Teacher, chorus, individuals — always that order. Then the finding task, which turns reading into active noticing of the module's key grammar.",
      mistakes: "The negative sentence “He is not a student” is where learners stumble. Have the class read that line twice.",
      extra: "Ask learners to count: three “she” and three “he”. Counting forces careful reading.",
      tip: "Point at each word as the class reads. Beginners lose their place; your finger keeps everyone together.",
      activity: "Learners write the same six lines about two people they know, changing every detail.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE, and use “he” or “she” correctly.",
    items: [
      "Where is Hana from?",
      "What is her job?",
      "Where is Abel from?",
      "Is Abel a student?",
      "Who is a nurse — Hana or Abel?",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Insist on full sentences with the correct pronoun. That is what is being assessed here, not the facts.",
      mistakes: "Question 4 needs a negative answer. Learners say “No” alone; require “No, he is not.”",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 She is from Gondar. · 2 She is a nurse. · 3 He is from Addis Ababa. · 4 No, he is not. He is a trader. · 5 Hana is a nurse.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Check the pronoun in every answer.",
    size: 17,
    items: [
      { q: "1 — Where is Hana from?", a: "She is from Gondar.", why: "Hana is a woman, so “she”. Gondar takes a capital letter because it is a place." },
      { q: "2 — What is her job?", a: "She is a nurse.", why: "Note “a” before the job. “She is nurse” is the missing-article error." },
      { q: "3 — Where is Abel from?", a: "He is from Addis Ababa.", why: "Abel is a man, so “he”. Both words of the city name take capitals." },
      { q: "4 — Is Abel a student?", a: "No, he is not. He is a trader.", why: "A strong answer says no AND gives the real information. “No” alone answers the question but stops the conversation." },
      { q: "5 — Who is a nurse?", a: "Hana is a nurse.", why: "Here you name the person rather than using a pronoun, because the question asks which of the two it is." },
    ],
    notes: keyNotes("Question 5 is the interesting one: it is the only answer where a pronoun would be WRONG, because “she” would not tell you which of the two people it is."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a longer text", sub: "Six sentences about a new student.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 20, lsm: 1.4,
      text: "Good morning. My name is Mimi.\nI am twenty-one years old.\nI am from Adama, but I am a student in Addis Ababa.\nThis is my friend Sara. She is from Bahir Dar.\nSara is not from Adama. She is my classmate.\nWe are students at the university." },
    side: { label: "New words here", color: C.read, size: 16, items: [
      "but — joins two different ideas",
      "classmate — a person in your class",
      "we — you and one or more other people",
      "university — where you study after school",
      "Find every form of “to be”. There are six.",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Teacher, chorus, individuals. Teach the four new words with gesture and example, not translation. “We” is best taught by pointing at yourself and a learner together.",
      mistakes: "“We are” is the form learners meet least often and forget first. Drill it: point at yourself and two learners and say “We are students.”",
      extra: "The six forms of “to be”: My name IS, I AM, I AM, She IS, She IS not, She IS, We ARE. Ask learners to count them.",
      tip: "This text uses “but” for the first time. Do not explain it — the meaning is clear from context, which is exactly how new function words should be met.",
      activity: "Learners write six sentences about themselves and a classmate, using every form of “to be” at least once.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — questions, answers and vocabulary review", sub: "Answer first, then check.",
    size: 17,
    items: [
      { q: "1 — How old is Mimi?", a: "She is twenty-one years old.", why: "English uses “to be” for age, not “have”. Note the hyphen in “twenty-one”, from Module 2." },
      { q: "2 — Where is Mimi from, and where does she study?", a: "She is from Adama, but she is a student in Addis Ababa.", why: "The word “but” joins two ideas that are different from each other. Two places, one sentence." },
      { q: "3 — Is Sara from Adama?", a: "No, she is not. She is from Bahir Dar.", why: "The text says “Sara is not from Adama.” Give the negative and then the real information." },
      { q: "4 — Who is “we” in the last sentence?", a: "Mimi and Sara.", why: "“We” means the speaker plus at least one other person. Here it is Mimi speaking about herself and Sara." },
      { q: "5 — Vocabulary check: name the five words from this module.", a: "hello · name · friend · student · goodbye", why: "All five appeared in this module. Three of them are in this text — find them again." },
    ],
    notes: keyNotes("Question 4 is inference — “we” is never explained in the text, and learners must work out who it refers to. Give it extra time."),
  });

  // ============================================================ 46–50 · WRITING
  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — introduce yourself", sub: "Copy the frame. Fill in your own information.",
    panelW: 7.6,
    panel: { label: "Copy this frame and complete it", color: C.write, tint: C.writeTint, size: 22, lsm: 1.65,
      text: "Good ______________.\nMy name is ______________.\nI am ______ years old.\nI am from ______________.\nI am a ______________." },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Capital letter at the start of every sentence?",
      "Capital letters on your name and your town?",
      "Is “am” in every sentence that needs it?",
      "Did you write “a” before your job?",
      "A full stop at the end of every sentence?",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Write your own completed example on the board and leave it there. Beginners need a model in front of them; removing it does not build independence, it stops production.",
      mistakes: "The missing “a” before the job, and the missing “am”. The checklist exists for exactly these two.",
      extra: "Fast finishers add: “This is my friend ______. He is from ______.”",
      tip: "Collect these and keep them. Give them back at the end of Level 1 beside the new version.",
      activity: "Learners swap papers and mark their partner's work against the five checks.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — am, is or are?", sub: "Complete each sentence with the correct form.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Copy each sentence and write am, is or are in the gap.",
    items: [
      "1.  I ______ from Hawassa.",
      "2.  She ______ my friend.",
      "3.  They ______ students.",
      "4.  ______ you a teacher?",
      "5.  He ______ not from Gondar.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Do item 1 together on the board, then let them work alone. Circulate and check as they write.",
      answers: "1 am · 2 is · 3 are · 4 Are · 5 is",
      mistakes: "Item 4 needs a capital A because the question word starts the sentence. Learners write it small.",
      tip: "Item 5 combines the verb with the negative. If learners can do this one, they have understood the whole rule.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write full sentences", sub: "Use the language from this module.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write ONE full sentence for each. Check your four points.",
    items: [
      "1.  Write a sentence introducing yourself.",
      "2.  Write a sentence about where you are from.",
      "3.  Write a sentence introducing a friend, using “he” or “she”.",
      "4.  Write a NEGATIVE sentence about yourself.",
      "5.  Write a QUESTION asking someone where they are from.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Do the first one together so the standard is clear, then let them work alone. Check pronouns and the verb as they write, not after.",
      mistakes: "Item 5 is written as a statement by many learners. Remind them: the verb comes first in a question.",
      answers: "MODEL ANSWERS: 1 My name is Sara. · 2 I am from Bahir Dar. · 3 This is my friend Dawit. He is a student. · 4 I am not a teacher. · 5 Where are you from?",
      tip: "Correct only the verb “to be”, the pronouns, the capitals and the end marks. Correcting everything discourages beginners into silence.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answers and why", sub: "Your sentences will be different. Check the rules, not the words.",
    size: 17,
    items: [
      { q: "1 — introducing yourself", a: "My name is Sara.", why: "Capital M to start, capital S on the name, “is” between them, full stop at the end." },
      { q: "2 — where you are from", a: "I am from Bahir Dar.", why: "“I am”, never “I from”. Both words of the town name take capitals." },
      { q: "3 — introducing a friend", a: "This is my friend Dawit. He is a student.", why: "Two sentences: “this is” to present the person, then “he” because Dawit is a man." },
      { q: "4 — a negative sentence", a: "I am not a teacher.", why: "“Not” comes after “am”. The verb stays — it is never removed to make a negative." },
      { q: "5 — a question", a: "Where are you from?", why: "The verb “are” comes before “you”, and the sentence ends with a question mark, not a full stop." },
    ],
    notes: keyNotes("Item 5 is the diagnostic. A learner who wrote “Where you are from?” has the word-order error that will return in Level 2 — fix it now."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist for this module", sub: "Add these to the checks from Modules 1 and 2.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "Is am / is / are in every sentence?", d: "English always needs this verb. “He teacher” is never correct." },
      { t: "Does the pronoun match the person?", d: "He for a man. She for a woman. His and her follow the same rule." },
      { t: "Is there “a” before the job?", d: "“I am a student.” — not “I am student.”" },
      { t: "Does the question start with the verb?", d: "“Are you a student?” — not “You are a student?”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points, then have learners check their own writing from the previous slide against all four.",
      tip: "The wall now has eleven checks across three modules. Refer to them by number — it makes marking fast and makes feedback feel objective rather than personal.",
      activity: "Deliberate error hunt: write four sentences on the board with exactly four errors, one of each type.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. It is 9 in the morning. What do you say?", opts: "a) Good night     b) Good morning     c) Good evening" },
      { q: "2. Complete: “She ___ my friend.”", opts: "a) am     b) are     c) is" },
      { q: "3. Which is a question?", opts: "a) You are a student.     b) Are you a student?     c) You a student." },
      { q: "4. Complete: “This is Dawit. ___ is from Adama.”", opts: "a) She     b) He     c) It" },
      { q: "5. Someone says “Nice to meet you.” You say …", opts: "a) Nice to meet you too.     b) Yes.     c) Good night." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 c · 3 b · 4 b · 5 a",
      tip: "Question 4 is the diagnostic. A learner choosing a) has the he/she problem and needs slide 10 again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Write the missing word.",
    color: C.green, instruction: "Copy each sentence and fill the gap.", size: 18,
    items: [
      "1.  My name ______ Hana.",
      "2.  I ______ from Gondar.",
      "3.  ______ is my friend Dawit.",
      "4.  She is ______ nurse.",
      "5.  How ______ you?  —  I am fine, thank you.",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Items 1, 2 and 5 test the verb; item 3 tests “this”; item 4 tests the article. Do item 1 together, then leave them.",
      answers: "1 is · 2 am · 3 This · 4 a · 5 are",
      mistakes: "Item 4 is the article. Learners leave it blank because Amharic has no equivalent word — remind them it is always needed before a job.",
      tip: "Item 3 needs a capital T because it starts the sentence. Check for it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Match the question to the answer, and the person to the pronoun.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the QUESTION to the ANSWER", opts: "1. What is your name?     2. Where are you from?     3. How old are you?     4. How are you?" },
      { q: "a) I am from Jimma.        b) I am fine, thank you.", opts: "c) My name is Abel.        d) I am thirty years old." },
      { q: "Part 2 — match the PERSON to the PRONOUN", opts: "1. my brother     2. my sister     3. my bag     4. my parents          a) she     b) it     c) they     d) he" },
      { q: "Part 3 — match the GREETING to the TIME", opts: "1. Good morning     2. Good afternoon     3. Good evening          a) 8 p.m.     b) 8 a.m.     c) 2 p.m." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks give learners three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–c, 2–a, 3–d, 4–b.  ·  Part 2: 1–d, 2–a, 3–b, 4–c.  ·  Part 3: 1–b, 2–c, 3–a.",
      tip: "Part 2 introduces “they” and “it” for the first time in this module. If learners manage it, they are ready for Module 5.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — put the conversation in order", sub: "Number the lines from 1 to 6.",
    color: C.green, instruction: "Write the correct order of the six lines.", size: 18,
    items: [
      "a)  Nice to meet you too. Where are you from?",
      "b)  Good morning. My name is Sara. What is your name?",
      "c)  I am from Addis Ababa. And you?",
      "d)  Good morning, Sara. My name is Dawit. Nice to meet you.",
      "e)  I am from Bahir Dar. See you tomorrow.",
      "f)  Nice to meet you, Dawit.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Let pairs work it out and then perform their version. Performing reveals the errors faster than checking on paper does.",
      answers: "b → d → f → a → c → e",
      mistakes: "Learners often put e) before c). Point out that “And you?” must be answered before anyone says goodbye.",
      tip: "This exercise teaches conversation structure, not just vocabulary. Say that out loud — a conversation has an order, like a sentence.",
      activity: "Cut the six lines into strips and have pairs arrange them physically on the desk.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each sentence has one or more errors.",
    color: C.green, instruction: "Rewrite each sentence correctly.", size: 18,
    items: [
      "1.  I student.",
      "2.  My sister, he is a nurse.",
      "3.  she is from gondar.",
      "4.  You are a teacher?",
      "5.  He not from Adama.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each sentence before they start. Sentences 1 and 3 have two each.",
      answers: "1 I am a student. (missing verb + missing article) · 2 My sister, she is a nurse. (wrong pronoun) · 3 She is from Gondar. (two capitals) · 4 Are you a teacher? (word order) · 5 He is not from Adama. (missing verb)",
      mistakes: "Every one of these is a transfer error that will persist into Level 2 if not fixed here. Take the time.",
      tip: "Have learners count the errors before correcting. Counting forces careful reading.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  “Good night” is a greeting when you arrive.",
      "2.  In English, “you” is the same for men and women.",
      "3.  We say “I am a student”, not “I am student”.",
      "4.  “His” is used for a woman.",
      "5.  To make a question with “to be”, the verb comes first.",
      "6.  “Nice to meet you” is answered with “Nice to meet you too”.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test. Do not accept a bare T or F.",
      answers: "1 F — “Good night” is used when leaving · 2 T · 3 T · 4 F — “his” is for a man, “her” is for a woman · 5 T · 6 T",
      tip: "Item 1 is the greeting error to watch. If several get it wrong, drill the arrive/leave difference again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Answer in a full sentence.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What is your name?",
      "2.  Where are you from?",
      "3.  How old are you?",
      "4.  Are you a teacher?",
      "5.  Who is your friend in this class? Write two sentences about them.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Every answer will be different. Personal answers are remembered; invented ones are not.",
      answers: "1 My name is ___. · 2 I am from ___. · 3 I am ___ years old. · 4 No, I am not. I am a student. (or Yes, I am.) · 5 e.g. This is my friend ___. He is from ___.",
      mistakes: "Item 4 needs a short answer with the verb. “No” alone is not enough at this stage.",
      tip: "Item 5 is the one that shows whether the pronouns have landed. Read three of them aloud.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Introduce yourself in four sentences.",
      "2.  Ask your partner all five questions from slide 9.",
      "3.  Introduce your partner to the class in two sentences.",
      "4.  Greet three people correctly for the time of day right now.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Give each partner a listening job: for task 1 they check the verb “to be” appears in every sentence; for task 3 they check the pronoun.",
      answers: "SUCCESS CRITERIA: 1 four sentences, all with am · 2 five grammatically correct questions · 3 correct he or she · 4 the right greeting for the current time.",
      tip: "Task 3 is the assessment moment for he/she. Listen to as many as you can.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These use everything from this module.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write a conversation of six lines between two people meeting for the first time.", opts: "Use greetings, names, towns and a goodbye." },
      { q: "2. Correct this and explain each change:  “hello. i am sara. she is my friend dawit.”", opts: "There are five things to fix." },
      { q: "3. Write three sentences about a classmate using he or she, his or her.", opts: "Check the pronoun matches the person every time." },
      { q: "4. Turn these into questions:  “She is a nurse.”  ·  “They are from Jimma.”", opts: "Remember which two words swap." },
      { q: "5. Someone greets you at 8 p.m. as they ARRIVE. What do they say, and what do you say back?", opts: "Careful — this is the greeting trap." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard. Discuss the reasoning, not just the answers.",
      answers: "1 any correct six-line dialogue · 2 “Hello. I am Sara. He is my friend Dawit.” — capital H, capital I, “he” not “she” because Dawit is a man, capital D on Dawit, and the full stops were already right · 3 three correct sentences with matching pronouns · 4 “Is she a nurse?” and “Are they from Jimma?” · 5 They say “Good evening.” and you say “Good evening.” too — not “Good night”, which is for leaving.",
      tip: "Question 2 mixes three different error types in one sentence, which is much harder than one at a time. That is deliberate.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why is “He teacher” wrong in English but natural to say for an Amharic speaker?", opts: "What does English need that Amharic does not?" },
      { q: "2. Why is “And you?” so important in a conversation?", opts: "What happens if you leave it out?" },
      { q: "3. Your friend says “My mother, he is a nurse.” How would you explain the mistake?", opts: "Explain it so they remember, not just so they know." },
      { q: "4. When you are not sure whether to be formal or informal, what should you choose and why?", opts: "Think about the cost of choosing wrongly each way." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning at this level if a learner cannot yet express it in English — the thinking matters more than the language. Then give them the English phrase for what they said.",
      answers: "1 English always needs a separate verb (am/is/are) in this sentence; Amharic carries that meaning without a separate word, so the learner's ear does not miss it. 2 Without it the conversation stops after one exchange — the other person has nothing to answer. 3 Any clear explanation; the strongest points at the person and says English changes the pronoun for men and women, then drills five examples aloud. 4 Choose formal — nobody is ever offended by “Good morning”, but being too informal with a manager or a stranger can cost you.",
      tip: "Question 3 asks learners to teach, which is the strongest test of understanding there is. Give it real time.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Greetings", items: [
      { q: "1. It is 10 in the morning. What do you say?", opts: "a) Good evening     b) Good morning     c) Good night" },
      { q: "2. You ARRIVE at class at 7 p.m. What do you say?", opts: "a) Good evening     b) Good night     c) Good afternoon" },
      { q: "3. Someone says “How are you?” Write a complete answer.", opts: "Do not forget to ask back." },
      { q: "4. Which greeting is formal?", opts: "a) Hi     b) Hello     c) Good morning" },
    ] },
    { part: "Part 2 · The verb “to be”", items: [
      { q: "5. Complete: “I ___ a student.”", opts: "a) am     b) is     c) are" },
      { q: "6. Complete: “They ___ from Jimma.”", opts: "a) am     b) is     c) are" },
      { q: "7. Correct this: “He not a teacher.”", opts: "Write the whole sentence." },
      { q: "8. Make this a question: “She is your friend.”", opts: "Two words swap." },
    ] },
    { part: "Part 3 · Pronouns and possessives", items: [
      { q: "9. Complete: “This is Dawit. ___ is from Adama.”", opts: "a) She     b) He     c) It" },
      { q: "10. Complete: “This is Hana. ___ bag is red.”", opts: "a) His     b) Her     c) She" },
      { q: "11. Correct this: “My brother, she is a driver.”", opts: "Write the whole sentence." },
      { q: "12. Which word do you use for you and one other person?", opts: "a) they     b) we     c) he" },
    ] },
    { part: "Part 4 · Conversation and listening", items: [
      { q: "13. Someone says “Nice to meet you.” Write the reply.", opts: "One word is often forgotten." },
      { q: "14. Write the question that gets this answer: “I am from Bahir Dar.”", opts: "Check the word order." },
      { q: "15. Listen: your teacher introduces someone. Write the name and the town.", opts: "Capital letters." },
      { q: "16. Listen: is the speaker a student? Answer in a full sentence.", opts: "Listen for “not”." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write a sentence introducing yourself.", opts: "Check the verb and the capitals." },
      { q: "18. Write a NEGATIVE sentence about yourself.", opts: "Where does “not” go?" },
      { q: "19. Write two sentences introducing a friend.", opts: "Use “this is” and then “he” or “she”." },
      { q: "20. SPEAKING: introduce yourself in four sentences, then introduce your partner.", opts: "Your teacher or partner listens and checks." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 3 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nFOR QUESTIONS 15 AND 16, READ ALOUD: “Good morning. This is my friend Yonas. He is from Dire Dawa. He is not a student — he is a bank teller.”",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — 10 in the morning", a: "b) Good morning", why: "“Good morning” is used from waking until midday. “Good night” is for leaving, not arriving." },
      { q: "Q2 — arriving at 7 p.m.", a: "a) Good evening", why: "“Good evening” greets someone arriving. “Good night” says goodbye. This is the greeting trap of the module." },
      { q: "Q3 — answering “How are you?”", a: "I am fine, thank you. And you?", why: "Answer, then ask back. Without “And you?” the conversation stops after one exchange." },
      { q: "Q4 — which greeting is formal?", a: "c) Good morning", why: "“Hi” and “Hello” are informal to neutral. When you are unsure, choose the formal one — nobody is offended by it." } ],
    [ { q: "Q5 — “I ___ a student.”", a: "a) am", why: "With “I” the form is always “am”. Never “I is” or “I are”." },
      { q: "Q6 — “They ___ from Jimma.”", a: "c) are", why: "“They” is more than one person, so the form is “are”." },
      { q: "Q7 — correct “He not a teacher.”", a: "He is not a teacher.", why: "The verb “is” cannot be removed. “Not” goes after it, never instead of it." },
      { q: "Q8 — “She is your friend.” as a question", a: "Is she your friend?", why: "The first two words swap places, and the full stop becomes a question mark." } ],
    [ { q: "Q9 — “This is Dawit. ___ is from Adama.”", a: "b) He", why: "Dawit is a man, so the pronoun is “he”. In English the pronoun carries this information." },
      { q: "Q10 — “This is Hana. ___ bag is red.”", a: "b) Her", why: "“Her” is the possessive for a woman. “She” is the person; “her” goes before the thing she owns." },
      { q: "Q11 — correct “My brother, she is a driver.”", a: "My brother, he is a driver.", why: "A brother is a man, so “he”. This is the most persistent pronoun error for Ethiopian learners." },
      { q: "Q12 — you and one other person", a: "b) we", why: "“We” means the speaker plus at least one other. “They” means other people not including you." } ],
    [ { q: "Q13 — reply to “Nice to meet you.”", a: "Nice to meet you too.", why: "The word “too” is the one learners forget. Without it the reply sounds unfinished." },
      { q: "Q14 — question for “I am from Bahir Dar.”", a: "Where are you from?", why: "The verb “are” comes before “you”. “Where you are from?” is the word-order error." },
      { q: "Q15 — the name and the town", a: "Yonas · Dire Dawa", why: "Both take capital letters, and Dire Dawa is two words, both capitalised." },
      { q: "Q16 — is the speaker a student?", a: "No, he is not. He is a bank teller.", why: "The word “not” is the key. A strong answer gives the negative and then the real information." } ],
    [ { q: "Q17 — introducing yourself", a: "e.g. “My name is Sara.”", why: "Any name works. What is marked is the verb “is”, the two capitals and the full stop." },
      { q: "Q18 — a negative sentence", a: "e.g. “I am not a teacher.”", why: "“Not” comes after “am”. The verb is never removed to make a negative." },
      { q: "Q19 — introducing a friend", a: "This is my friend Dawit. He is from Adama.", why: "“This is” presents the person; the second sentence must use the pronoun that matches them." },
      { q: "Q20 — speaking task", a: "Four sentences about yourself, two about your partner", why: "Marked on being understood, on the verb appearing in every sentence, and on the correct pronoun for the partner." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q2, Q9 and Q11 are the diagnostic questions. Q2 shows whether the greeting trap has landed; Q9 and Q11 together show whether he/she is secure. If the class failed those, drill pronouns with real people before Module 4."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day is better than one hour on Sunday.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Say your four-sentence introduction out loud", d: "Five times. Standing up. Out loud, not in your head." },
      { t: "Chant the verb “to be”", d: "“I am, you are, he is, she is, it is, we are, they are.” Three times." },
      { t: "Point and say “he” or “she”", d: "Look at ten people — in the street, on TV, in a photo. Say “he” or “she” for each one." },
      { t: "Greet five people in English", d: "Use the right greeting for the time of day. Family counts." },
      { t: "Introduce one person to another", d: "In English if you can. “This is my friend ___.”" },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Write it on the board as well as the slide and say the due date. Beginners forget verbal instructions.",
      tip: "Tuesday's chant is the most valuable. The verb “to be” has to become automatic, and chanting is how rhythm becomes memory.",
      activity: "Ask learners to greet one classmate in English by message each evening.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write the verb “to be” in full", d: "All six forms with an example sentence for each: I am… · You are… · He is… · She is… · It is… · We are…" },
      { t: "Write a six-line conversation", d: "Two people meeting for the first time. Greeting, names, towns, and a goodbye. Check your eleven points before handing it in." },
      { t: "Record your 45-second speaking challenge", d: "Greet · introduce yourself · introduce someone else · ask three questions · say goodbye. Send it, or perform it live." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Show your own completed example of task 2. Task 3 is required — the recording is the main assessment of this module.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording personally, by voice, within two days. Listen specifically for the missing “am” and the pronouns.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaCheck", title: "The verb “to be” — 5 marks", desc: "Six forms correct (3) · six example sentences that make sense (2)." },
      { icon: "FaPencilAlt", title: "Six-line conversation — 10 marks", desc: "Six lines written (3) · the verb in every sentence (3) · capitals on names and places (2) · correct end marks (2)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five steps present (4) · the verb used correctly throughout (3) · correct he or she for the other person (3)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework. Learners who know what is measured produce better work.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Mark only what has been taught in Modules 1 to 3.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaComments", title: "Greetings by time", desc: "Good morning · good afternoon · good evening — and “good night” is a goodbye." },
      { icon: "FaUser", title: "Introducing yourself", desc: "Greeting · name · town · job. Four sentences, learned by heart." },
      { icon: "FaSitemap", title: "The verb “to be”", desc: "I am · you are · he is · she is · it is · we are · they are." },
      { icon: "FaQuestion", title: "Questions and negatives", desc: "“Are you a student?”  ·  “I am not a teacher.”" },
      { icon: "FaUserFriends", title: "He, she, his, her", desc: "The pronoun matches the person, not the thing." },
      { icon: "FaHandPeace", title: "Six useful phrases", desc: "Including “Nice to meet you” and “And you?” — the phrase that keeps a conversation alive." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2 and read the objectives again. Ask the same question you asked at the start: “Can you do this now?”",
      tip: "Ask each learner to name the one thing they found hardest. That list is your plan for the first ten minutes of Module 4.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaLanguage", title: "The five words", desc: "hello  /həˈləʊ/     ·     name  /neɪm/\nfriend  /frend/     ·     student  /ˈstjuːdənt/\ngoodbye  /ɡʊdˈbaɪ/" },
      { icon: "FaSitemap", title: "The verb “to be”", desc: "I am · you are · he is · she is\nit is · we are · they are\nShort: I'm · you're · he's · she's · we're" },
      { icon: "FaComments", title: "The four-sentence introduction", desc: "Good morning.\nMy name is ______.\nI am from ______.\nI am a ______." },
      { icon: "FaQuestion", title: "The five questions", desc: "What is your name?  ·  Where are you from?\nHow old are you?  ·  What do you do?\nHow are you?  →  I am fine, thank you. And you?" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it. This is the reference page for every conversation they will have.",
      tip: "Print it as an A4 poster beside the Module 1 and 2 posters.",
      activity: "Cover each box in turn and ask the class to say what was in it. Recall, not recognition.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now meet a stranger and hold a conversation — entirely in English.",
    sub: "Greeting, your name, where you are from, what you do, and a question back.\nThat is a real social exchange, and three modules ago you could not read an English word.",
    chips: ["NEXT — Module 4", "Everyday Vocabulary", "Family · colours · food · jobs · weather and more"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the achievement specifically: they can meet a stranger and keep a conversation going. That is the skill people actually mean when they say they “speak English”.",
      tip: "Set the challenge: everyone introduces themselves to one English speaker, or one person they have not met, before the next lesson — and reports back. Then actually ask about it.",
      activity: "Ask every learner to introduce themselves to the person beside them one last time before leaving. Everyone ends the module speaking English out loud.",
    }),
  });
};
