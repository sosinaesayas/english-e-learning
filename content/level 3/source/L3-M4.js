"use strict";
/* LEVEL 3 · MODULE 4 — Tenses in Depth   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 3", levelNo: LV.no, levelName: "Intermediate\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Tenses in Depth",
    sub: "You have met the tenses one at a time across two levels. This module puts the whole system on one page — so you can see how the pieces fit instead of memorising them separately.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "8", v: "TENSES" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by saying that almost nothing here is new. Every tense has appeared before; what is new is seeing them as one system with two simple choices behind it.",
      tip: "Learners who find tenses overwhelming are usually holding eight unrelated rules. Slide 5 replaces those with two questions, and the relief is visible.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. The last one is the real goal.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "See all eight tenses as ONE system", d: "Two questions decide every tense you will ever need." },
      { t: "Choose between the past simple and the present perfect", d: "The single hardest choice in English for most learners." },
      { t: "Use the past continuous for interrupted actions", d: "“I was cooking when the phone rang.”" },
      { t: "Talk about the past that is finished, and the past that is not", d: "“I worked there” versus “I have worked there”." },
      { t: "Choose the right tense at SPEED, not on paper", d: "Knowing the rule and using it in real time are different skills." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 2 is where most of the module's time goes. It is the choice that separates B1 from A2 more than any other.",
      tip: "Objective 5 is the Module 1 lesson applied to grammar: a rule you cannot apply in two seconds is not yet usable.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: which one and why?", sub: "Three pairs. Both versions are grammatical. What changes?",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaBalanceScale", title: "1 · Past or perfect?", desc: "“I worked in Adama.”\n“I have worked in Adama.”\n\nWhat is the difference?" },
      { icon: "FaClock", title: "2 · Simple or continuous?", desc: "“I read a book last night.”\n“I was reading a book last night.”\n\nWhich one finished?" },
      { icon: "FaQuestion", title: "3 · Which is harder?", desc: "Which tense do you avoid because you are not sure? Be honest." },
      ],
    notes: tn({
      time: "9 minutes.",
      how: "Both versions in tasks 1 and 2 are correct English. That surprises learners who expect a right and a wrong answer, and it reframes tense as a choice about meaning rather than a rule to obey.",
      mistakes: "Correct nothing. Collect the explanations learners offer — they reveal which model of the tense system the class is carrying.",
      answers: "1 “worked” = finished, a specific past time. “Have worked” = connected to now, time unspecified. · 2 “read” = finished the book. “Was reading” = in the middle of it, maybe unfinished.",
      tip: "Task 3 usually produces “present perfect”. That answer tells you where to spend lessons two and three.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "There are not eight rules to memorise. There are two questions to answer.",
    sub: "WHEN — past, present or future?    HOW — is it finished, in progress, or connected to now?\nEvery English tense is one answer to the first question combined with one answer to the second.",
    chips: ["WHEN: past · present · future", "HOW: simple · continuous · perfect", "Two choices, one tense"],
    notes: tn({
      time: "7 minutes.",
      how: "Draw the two questions as a grid on the board before showing slide 5. Building it live is far more convincing than presenting it finished.",
      mistakes: "Learners have met tenses as eight separate lessons and assume eight separate systems. The grid is the correction, and it should be shown early and often.",
      extra: "The second question is the one nobody explains: simple means finished or general, continuous means in progress, perfect means connected to another time.",
      tip: "Say plainly that this module teaches almost no new forms. It teaches the map, and the map is what makes the forms usable.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — the grid
  L.table({
    sec: SEC.con, title: "The whole system on one page",
    sub: "Three times across. Three aspects down. That is all of it.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16.5, headSize: 15.5, colW: [2.5, 3.3, 3.6, 3.933],
      rows: [
        ["", "PAST", "PRESENT", "FUTURE"],
        ["SIMPLE\n(finished / general)", "I worked", "I work", "I will work"],
        ["CONTINUOUS\n(in progress)", "I was working", "I am working", "I will be working"],
        ["PERFECT\n(connected)", "I had worked", "I have worked", "I will have worked"],
      ],
    },
    note: "Nine boxes. You already know six of them. Photograph this slide — it is the map for the whole module.",
    notes: tn({
      time: "16 minutes. The most important slide in the module.",
      how: "Build it on the board box by box, asking the class to supply each form. They can fill most of it themselves, which is the point — the knowledge is there but unorganised.",
      mistakes: "Learners try to memorise nine forms. They should read the grid instead: pick the column for time, pick the row for aspect, and the form is at the intersection.",
      extra: "The forms are mechanical: continuous is always be + -ing, perfect is always have + past participle. Two patterns generate six of the nine boxes.",
      tip: "Leave this grid on the board for the entire module and point at it every time a tense comes up. Repetition against the map is what builds the system.",
      activity: "Fill the grid: give a different verb and have learners complete all nine boxes from memory.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — past vs perfect
  L.compare({
    sec: SEC.con, title: "The hardest choice — past simple or present perfect",
    sub: "Both are about the past. The difference is whether the time is finished.",
    left: { h: "PAST SIMPLE — finished time", items: ["I worked there in 2019.", "I saw him yesterday.", "She lived in Jimma for two years.", "( she does not live there now )", "→ WHEN is stated or known.", "→ The time period is over."] },
    right: { h: "PRESENT PERFECT — time not finished", items: ["I have worked there for two years.", "I have seen him three times.", "She has lived in Jimma since 2020.", "( she still lives there )", "→ WHEN is not stated.", "→ Connected to now."] },
    note: "If you say WHEN, you must use the past simple. “I have seen him yesterday” is wrong — “yesterday” is a finished time.",
    notes: tn({
      time: "16 minutes. Give this the time it needs.",
      how: "The note is the most usable test in the module: a stated past time forces the past simple. Apply it mechanically before discussing meaning.",
      mistakes: "“I have seen him yesterday” is the classic error. Once a finished time word appears, the perfect becomes impossible.",
      extra: "The Jimma pair is the clearest: “she lived” means she has left, “she has lived” means she is still there. The tense carries information no word in the sentence contains.",
      tip: "Many languages use one past tense for both. There is no equivalent to transfer, so this must be built from nothing — expect it to take weeks, not one lesson.",
      activity: "Finished or not: give twenty sentences and have learners decide from the time expression alone.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — for and since
  L.panelSide({
    sec: SEC.con, title: "For, since and the perfect", sub: "Two words that almost always signal the present perfect.",
    panelW: 6.8,
    panel: { label: "The difference in one line", color: C.green, tint: C.readTint, size: 17.5, lsm: 1.42,
      text: "FOR  +  a LENGTH of time\n     for two years\n     for six months\n     for a long time\n\nSINCE  +  a STARTING POINT\n     since 2020\n     since Monday\n     since I left school" },
    side: { label: "How to use them", color: C.green, size: 16, items: [
      "“I have worked here for three years.”  — how long.",
      "“I have worked here since 2023.”  — when it started.",
      "Both mean the same thing. Both need the present perfect.",
      "“I work here since 2023” is wrong — that is the commonest error with these two words.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "The test is mechanical: length of time takes “for”, starting point takes “since”. Learners can apply it without understanding the aspect at all, which is a useful foothold.",
      mistakes: "“I am working here since 2020” and “I work here since 2020” are both very common. Both need the present perfect.",
      extra: "“How long have you worked here?” is the question these answer, and it appears in every job interview. Module 7 depends on it.",
      tip: "Drill the question and answer together as a chunk: “How long have you…?” → “I have… for/since…”. Chunking beats analysis here.",
      activity: "For or since: give twenty time expressions and have learners sort them into two columns.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — past continuous
  L.compare({
    sec: SEC.con, title: "Past continuous — the background and the interruption",
    sub: "One long action, one short action that cuts into it.",
    left: { h: "The BACKGROUND — was / were + -ing", items: ["I was cooking…", "She was driving to work…", "They were having a meeting…", "→ Long. Already in progress.", "→ Sets the scene."] },
    right: { h: "The INTERRUPTION — past simple", items: ["…when the phone rang.", "…when the accident happened.", "…when I arrived.", "→ Short. Cuts in.", "→ Moves the story on."] },
    note: "The long action takes the continuous. The short one takes the simple. “While” goes with the long action; “when” usually goes with the short one.",
    notes: tn({
      time: "14 minutes.",
      how: "Draw it: a long line for the background action and an arrow cutting through it for the interruption. The picture explains it in five seconds.",
      mistakes: "Reversing them — “I cooked when the phone was ringing” — describes a completely different and rather odd scene. Point that out; the error is meaningful, not just wrong.",
      extra: "Two continuous actions at once take “while” for both: “I was cooking while she was studying.”",
      tip: "This is the tense that makes storytelling work. It connects directly to Level 2 Module 3 and forward to the narrative work in Module 8.",
      activity: "Interrupt me: give ten background actions and have learners supply an interruption for each.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — past perfect
  L.panelSide({
    sec: SEC.con, title: "Past perfect — the past before the past", sub: "Two past events. Which one happened first?",
    panelW: 6.8,
    panel: { label: "The order of events", color: C.green, tint: C.readTint, size: 17, lsm: 1.38,
      text: "“When I arrived, the meeting\n  had already started.”\n\n     1st  →  the meeting started\n     2nd  →  I arrived\n\nThe PAST PERFECT marks the\nEARLIER of two past events.\n\nhad + past participle" },
    side: { label: "When you actually need it", color: C.green, size: 16, items: [
      "Only when the ORDER matters and is not obvious.",
      "“The meeting had started when I arrived” — I missed the beginning.",
      "“The meeting started when I arrived” — I was on time.",
      "In everyday speech people often use the past simple for both. Use the past perfect when the order is the point.",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "The two versions in the side panel describe genuinely different events. That contrast is what justifies the tense — without it the past perfect looks like decoration.",
      mistakes: "Over-using it. Learners who have just learned it apply it to every past sentence. It is only needed when the sequence matters and is not already clear.",
      extra: "“Already”, “just” and “by the time” often signal it: “By the time I arrived, they had left.”",
      tip: "Be honest that spoken English often skips this tense. It matters most in writing and in careful narrative, which is where it will be assessed.",
      activity: "Which came first: give ten pairs of past events and have learners combine each into one sentence.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — choosing at speed
  L.list({
    sec: SEC.con, title: "Choosing the tense in two seconds", sub: "Three questions, in this order. It becomes automatic.",
    color: C.green, size: 19, labels: ["1", "2", "3"],
    items: [
      { t: "WHEN? Past, present or future.", d: "This picks the column. It is almost never difficult." },
      { t: "Is there a finished time word? — yesterday, in 2019, last week", d: "If yes, use the SIMPLE past. The choice is already made." },
      { t: "Is it still going on, or connected to now?", d: "Still in progress → continuous. Connected to now → perfect." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Question 2 resolves most of the difficulty before any thinking about aspect is needed. Teach it as a shortcut, because it genuinely is one.",
      mistakes: "Learners try to reason about aspect first, which is slow and error-prone. The time-word check is faster and settles the majority of cases.",
      extra: "This is the Module 1 principle applied to grammar. A rule you cannot run in two seconds will not survive a real conversation.",
      tip: "Drill it as a spoken procedure: say a time expression, learners name the tense, within two seconds. Twenty rounds.",
      activity: "Two-second tense: call out a sentence with a time expression and have learners name the required tense instantly.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "already", ipa: "/ɔːlˈredi/", pos: "adverb", icon: "FaCheckDouble",
      meaning: "Before now, or earlier than expected.",
      example: "I have already finished. The meeting had already started.",
      mistake: "Goes BETWEEN the helper and the main verb: “I have already finished”, not “I already have finished”.",
      notes: tn({ time: "7 minutes.",
        how: "Position is the whole lesson. Write “I have ___ finished” on the board and have learners place it. Middle position, every time.",
        mistakes: "Learners put it at the front or the end. Both are possible in some registers but the middle is the standard and the safest.",
        extra: "Already is a perfect-tense signal word, alongside just, yet and ever. All four sit in the same position.",
        tip: "Stress on the second syllable: al-REA-dy. Three syllables, not four.",
        activity: "Place the word: give ten perfect sentences and have learners insert “already” correctly in each." }) },

    { word: "yet", ipa: "/jet/", pos: "adverb", icon: "FaHourglassHalf",
      meaning: "Up to now. Used in questions and negatives only.",
      example: "Have you finished yet? I haven't finished yet.",
      mistake: "Goes at the END of the sentence, and only in questions and negatives. Never in a positive statement.",
      notes: tn({ time: "7 minutes.",
        how: "Teach it against “already”: already for positives in the middle, yet for questions and negatives at the end. The contrast is what fixes both.",
        mistakes: "“I have yet finished” is wrong. Positive statements take “already”.",
        extra: "“Not yet” is a complete answer on its own, and a very useful one at work.",
        tip: "“Have you finished yet?” can sound impatient. “Have you finished?” is more neutral — worth mentioning for workplace use.",
        activity: "Already or yet: give twelve sentences and have learners choose and place the right word." }) },

    { word: "since", ipa: "/sɪns/", pos: "preposition / conjunction", icon: "FaHistory",
      meaning: "From a point in the past until now.",
      example: "I have worked here since 2023. She has been ill since Monday.",
      mistake: "Takes a STARTING POINT, not a length. “Since two years” is wrong — say “for two years”.",
      notes: tn({ time: "8 minutes.",
        how: "Always teach it beside “for”. The two are only learnable as a contrast, because each is defined by what the other is not.",
        mistakes: "“Since two years” is one of the most persistent errors at this level and it appears in almost every learner CV.",
        extra: "“Since” also means “because” in formal writing: “Since the road was closed, we took another route.” Mention it briefly.",
        tip: "Pair the drill: “How long have you worked here?” answered both ways, with for and with since.",
        activity: "Both ways: learners answer five “how long” questions twice, once with for and once with since." }) },

    { word: "while", ipa: "/waɪl/", pos: "conjunction", icon: "FaExchangeAlt",
      meaning: "During the time that something else was happening.",
      example: "While I was cooking, the phone rang. She read while she waited.",
      mistake: "“While” goes with the LONG action — the continuous one. “When” usually goes with the short one.",
      notes: tn({ time: "7 minutes.",
        how: "This is the grammar of slide 8 carried by a single word. While marks the background; when marks the interruption.",
        mistakes: "“While the phone rang, I was cooking” reverses the roles and describes a strange scene.",
        extra: "Two long actions at once take “while” for both: “I was working while she was studying.”",
        tip: "The /w/ sound at the start needs rounded lips. It is not one of the six target sounds but it is worth ten seconds.",
        activity: "While or when: give twelve sentences and have learners choose the right conjunction." }) },

    { word: "recently", ipa: "/ˈriːsntli/", pos: "adverb", icon: "FaCalendarAlt",
      meaning: "Not long ago. In the near past.",
      example: "I have recently started a new job. Have you seen him recently?",
      mistake: "Usually takes the present perfect, because the time is not finished. Stress on the FIRST syllable: RE-cent-ly.",
      notes: tn({ time: "7 minutes.",
        how: "A useful bridge word: it signals the present perfect without naming a specific time, which is exactly the condition for that tense.",
        mistakes: "Learners avoid it and lose a natural way of talking about the near past. Drill it into the perfect frame.",
        extra: "Other perfect signals: lately · so far · up to now · in the last few months.",
        tip: "“Recently” is very useful in interviews for describing what you have been doing. Flag it forward to Module 7.",
        activity: "Recent news: every learner says three things they have recently done, using the perfect." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Tense Language 1 of 5" }),
    title: "How to build each tense",
    sub: "Two patterns generate almost everything.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17, headSize: 16, colW: [3.6, 3.8, 4.733],
      rows: [
        ["Tense", "Formula", "Example"],
        ["present continuous", "am / is / are + -ing", "She is working."],
        ["past continuous", "was / were + -ing", "She was working."],
        ["present perfect", "have / has + past participle", "She has worked."],
        ["past perfect", "had + past participle", "She had worked."],
        ["future simple", "will + base verb", "She will work."],
      ],
    },
    note: "CONTINUOUS is always be + -ing.   PERFECT is always have + past participle.   Learn two patterns, not six forms.",
    notes: tn({
      time: "13 minutes.",
      how: "Show that the aspect determines the formula and the tense determines only which form of be or have is used. Six forms collapse into two patterns.",
      mistakes: "The past participle is the weak point. Regular verbs add -ed; the irregular list must be learned, and it is worth a printed sheet.",
      extra: "The most common irregular participles: been · gone · done · seen · taken · made · written · spoken · given · known.",
      tip: "Learners who see the two patterns stop treating the tenses as six unrelated things to memorise.",
      activity: "Build it: give a verb and a tense and have learners produce the form within two seconds.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Tense Language 2 of 5" }),
    title: "Time words tell you the tense",
    sub: "Learn the signals and most of the choice disappears.",
    left: { h: "PAST SIMPLE signals", items: ["yesterday", "last week / month / year", "in 2019", "two days ago", "when I was young", "→ a FINISHED time"] },
    right: { h: "PRESENT PERFECT signals", items: ["for  ·  since", "already  ·  yet  ·  just", "ever  ·  never", "recently  ·  lately", "so far  ·  up to now", "→ time NOT finished"] },
    note: "This is the fastest route to the right tense. If a left-column word appears, the past simple is required — no thinking about aspect needed.",
    notes: tn({
      time: "14 minutes.",
      how: "Drill the signals until they trigger the tense automatically. This is pattern recognition, and it is far faster than reasoning about completion.",
      mistakes: "“I have seen him yesterday” combines a right-column tense with a left-column word. That combination is always wrong.",
      extra: "“Today”, “this week” and “this year” can take either, because the period includes now but is not over. Mention it only if the class is strong.",
      tip: "Print these two lists. Learners who know the signals get most tense choices right without any grammatical analysis.",
      activity: "Signal spotting: read twenty sentences and have learners name the required tense from the time word alone.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Tense Language 3 of 5" }),
    title: "Ever, never and life experience",
    sub: "The present perfect's most natural everyday use.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17, headSize: 16, colW: [3.8, 3.6, 4.733],
      rows: [
        ["Pattern", "Use", "Example"],
        ["Have you ever …?", "asking about any time in life", "Have you ever been to Lalibela?"],
        ["I have never …", "not once in my life", "I have never flown."],
        ["I have been to …", "went and came back", "I have been to Gondar twice."],
        ["I have gone to …", "went and is still there", "She has gone to Adama."],
      ],
    },
    note: "BEEN = went and returned.   GONE = went and is still there. This pair is small and it changes the meaning completely.",
    notes: tn({
      time: "13 minutes.",
      how: "The been/gone distinction is the sophisticated point and learners enjoy it. “She has been to Adama” means she is back; “she has gone to Adama” means she is not here.",
      mistakes: "Using “gone” when the person has returned. It tells the listener the opposite of what was meant.",
      extra: "Note that no time is ever stated with these. The moment a time appears, the past simple takes over.",
      tip: "“Have you ever…?” is the most natural conversation opener in the present perfect. It appears in Module 5 and Module 7.",
      activity: "Ever chain: learners ask each other “Have you ever…?” around the room, each with a different verb.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Tense Language 4 of 5" }),
    title: "Talking about the future — four ways", sub: "From Level 2 Module 4, now with the whole picture.",
    panelW: 6.9,
    panel: { label: "Which future, and when", color: C.gram, tint: C.surf2, size: 16.5, lsm: 1.34,
      text: "will          →  decided NOW, or a prediction\n                  “I'll help you.”\n\ngoing to  →  decided BEFORE, or evidence\n                  “I'm going to study medicine.”\n\npresent continuous  →  a fixed arrangement\n                  “I'm meeting her at four.”\n\npresent simple  →  a timetable\n                  “The bus leaves at six.”" },
    side: { label: "The test that works", color: C.gram, size: 16, items: [
      "Did you decide before this conversation? → going to.",
      "Are you deciding right now? → will.",
      "Is it in a diary with a person and a time? → present continuous.",
      "Is it a published schedule? → present simple.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "The decision-history test from Level 2 Module 4 is still the fastest route. Apply it before discussing anything else.",
      mistakes: "Using “will” for arrangements already made. “I will meet her at four” when it is already in the diary should be “I'm meeting her at four”.",
      extra: "The last two are the ones learners never produce, and they are what makes future talk sound natural rather than textbook.",
      tip: "In real speech the present continuous is used for the future constantly. Point that out — learners are often surprised it is not a mistake.",
      activity: "Four futures: give ten situations and have learners choose which of the four forms fits each.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Tense Language 5 of 5" }),
    title: "Put it all together — the tense decision", sub: "Four steps. Under two seconds once it is automatic.",
    color: C.gram, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Is there a finished time word?", d: "yesterday, in 2019, last week → past simple. Stop here." },
      { t: "Is there a perfect signal?", d: "for, since, already, yet, ever, never, recently → present perfect." },
      { t: "Is the action in progress at that moment?", d: "→ continuous. was working, am working." },
      { t: "Are two past events out of order?", d: "→ past perfect for the earlier one." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Steps 1 and 2 settle the great majority of real cases and both are pure pattern recognition. Steps 3 and 4 handle the rest.",
      mistakes: "Learners start at step 3 and reason about meaning, which is slow. The signal words are faster and more reliable.",
      extra: "This is the accuracy routine from Module 3 applied to tense: a mechanical procedure beats intuition until intuition is built.",
      tip: "Print these four steps. They fit on a card and they cover almost every tense decision at this level.",
      activity: "Run the steps: give fifteen sentences and have learners name the step that decided each one.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — past simple or present perfect?", sub: "Look for the time word first.", items: [
      { q: "“I ___ him yesterday.”  saw or have seen?", a: "saw.", why: "“Yesterday” is a finished time. A stated past time forces the past simple, with no exceptions." },
      { q: "“I ___ him three times this week.”  saw or have seen?", a: "have seen.", why: "“This week” is not finished — it is still going on — so the perfect connects it to now." },
      { q: "“She ___ in Jimma for two years.”  lived or has lived?", a: "has lived — if she still lives there.", why: "“For” plus the perfect means it continues. “She lived there for two years” means she has left." },
    ] },
    { title: "Guided examples 2 — for or since?", sub: "Length, or starting point?", items: [
      { q: "“I have worked here ___ three years.”", a: "for.", why: "Three years is a length of time. For measures duration; since marks a start." },
      { q: "“I have worked here ___ 2023.”", a: "since.", why: "2023 is a point where it started. Both sentences can mean the same thing, expressed differently." },
      { q: "Why is “I work here since 2023” wrong?", a: "“Since” requires the present perfect.", why: "The action started in the past and continues now, and only the perfect expresses both at once." },
    ] },
    { title: "Guided examples 3 — simple or continuous?", sub: "Which action is long?", items: [
      { q: "“I ___ when the phone rang.”  cooked or was cooking?", a: "was cooking.", why: "The cooking was long and already in progress; the ring was short and cut into it." },
      { q: "Why not “I cooked when the phone rang”?", a: "That means you started cooking because it rang.", why: "The error is not just grammatical — it describes a completely different sequence of events." },
      { q: "“I ___ a book last night.”  read or was reading?", a: "Both are correct — with different meanings.", why: "“Read” means you finished it. “Was reading” means you were in the middle and may not have finished." },
    ] },
    { title: "Guided examples 4 — been or gone?", sub: "Is the person back?", items: [
      { q: "“She has ___ to Adama. She'll be back on Friday.”", a: "gone.", why: "She is still there. “Gone” means departed and not yet returned." },
      { q: "“I have ___ to Lalibela twice.”", a: "been.", why: "You went and came back — twice. “Been” describes a completed visit within your life experience." },
      { q: "Why does “I have gone to Lalibela twice” sound wrong?", a: "It suggests you are still there — twice, which is impossible.", why: "Two small words, opposite meanings. It is worth learning as a fixed pair." },
    ] },
    { title: "Guided examples 5 — which future?", sub: "When did you decide?", items: [
      { q: "The phone rings. “I ___ get it.”  will or am going to?", a: "will.", why: "Decided at this instant. “Will” is the tense of a decision made while speaking." },
      { q: "“I ___ study medicine next year.” (decided months ago)", a: "am going to.", why: "A prior decision or intention. The decision existed before this conversation started." },
      { q: "“I ___ the manager at four.” (already in the diary)", a: "am meeting.", why: "A fixed arrangement with a person and a time takes the present continuous, not “will”." },
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
    title: "How long have you worked here?",
    sub: "The question that opens every interview and every new-colleague conversation.",
    turns: [
      { who: "MIMI", text: "How long have you worked here?", side: "l" },
      { who: "TOLOSA", text: "For about three years. Since March 2023, actually.", side: "r" },
      { who: "MIMI", text: "And what did you do before that?", side: "l" },
      { who: "TOLOSA", text: "I worked for an NGO in Hawassa for two years.", side: "r" },
      { who: "MIMI", text: "Have you ever worked outside Ethiopia?", side: "l" },
      { who: "TOLOSA", text: "No, never. But I've recently applied for a job in Kenya.", side: "r" },
    ],
    note: "Three tenses in six lines: present perfect for now, past simple for the finished job, present perfect again for recent news.",
    notes: tn({
      time: "14 minutes.",
      how: "Have learners label the tense of every verb. The switch in line 4 to the past simple is the key moment — that job is finished, so the perfect becomes impossible.",
      mistakes: "Learners answer “how long have you worked here” with the past simple. The question form dictates the answer form.",
      extra: "Tolosa gives both “for” and “since” for the same fact, which is natural and shows they are interchangeable.",
      tip: "This exact exchange opens most job interviews. Drill it until both the question and the answer are automatic.",
      activity: "Real answers: pairs ask each other all three questions about their actual work history.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Explaining what went wrong",
    sub: "Chaltu explains a delay. Notice the past continuous and the past perfect.",
    turns: [
      { who: "MANAGER", text: "Why didn't the report arrive on Friday?", side: "r" },
      { who: "CHALTU", text: "We were still waiting for the figures when the office closed.", side: "l" },
      { who: "MANAGER", text: "I thought you had them on Wednesday.", side: "r" },
      { who: "CHALTU", text: "We had asked for them on Wednesday, but they arrived on Friday afternoon.", side: "l" },
      { who: "MANAGER", text: "I see. So it wasn't your team.", side: "r" },
      { who: "CHALTU", text: "No. We've already finished it now — I sent it this morning.", side: "l" },
    ],
    note: "Past continuous for the background, past perfect for the earlier action, present perfect for the result that matters now.",
    notes: tn({
      time: "14 minutes.",
      how: "Line 4 is the past perfect doing real work: the asking happened before the arriving, and saying so is what clears Chaltu's team.",
      mistakes: "Learners would say “we asked for them on Wednesday”, which is understandable but loses the sequence that makes the defence work.",
      extra: "The last line switches to the present perfect because the relevant fact is the current state — it is finished now.",
      tip: "This is tense choice as professional communication, not as grammar. The tenses are carrying the argument.",
      activity: "Explain a delay: learners explain a real or invented delay using all three past forms.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Tense questions you will actually be asked",
    sub: "Six questions. Learn the tense of the answer with the question.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaClock", title: "“How long have you worked here?”", desc: "Answer with for or since + present perfect." },
      { icon: "FaHistory", title: "“What did you do before that?”", desc: "Past simple. That job is finished." },
      { icon: "FaGlobe", title: "“Have you ever worked abroad?”", desc: "Present perfect. Life experience, no time stated." },
      { icon: "FaCalendarAlt", title: "“What have you been doing recently?”", desc: "Present perfect. Recent, unfinished period." },
      { icon: "FaArrowRight", title: "“What are you doing next week?”", desc: "Present continuous — a fixed arrangement." },
      { icon: "FaBullseye", title: "“Where do you want to be in five years?”", desc: "going to, or would like to. A prior intention." },
    ],
    notes: tn({
      time: "11 minutes.",
      how: "The question form dictates the answer form. Teach each as a pair rather than teaching the tenses separately.",
      mistakes: "Answering a perfect question with the past simple is the commonest interview error and it sounds noticeably wrong.",
      extra: "All six of these appear in Module 7. Learners are rehearsing interview content while practising tense.",
      tip: "Drill question and answer together as chunks, in the Module 1 sense. Analysis is too slow for an interview.",
      activity: "Six questions: pairs ask and answer all six, then swap.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Choose the right tense for each gap. Answers are in the Answer Key.",
    turns: [
      { who: "A", text: "How long ______ you ______ in this office?  (work)", side: "l" },
      { who: "YOU", text: "______ two years. Before that I ______ in Bahir Dar.  (work)", side: "r" },
      { who: "A", text: "______ you ever ______ on a project like this?  (work)", side: "l" },
      { who: "YOU", text: "Yes, I ______ on one last year.  (work)", side: "r" },
      { who: "A", text: "Good. What ______ you ______ next Monday?  (do)", side: "l" },
      { who: "YOU", text: "I ______ the client at ten.  (meet)", side: "r" },
    ],
    note: "Five different tenses in six lines. Use the four steps from slide 20.",
    notes: tn({
      time: "13 minutes.",
      how: "Have learners name which of the four steps decided each gap. Naming the step is what makes the procedure transferable.",
      answers: "1 have ... worked · 2 For / worked · 3 Have ... worked · 4 worked · 5 are ... doing · 6 am meeting",
      mistakes: "Gap 4 is the trap — “last year” is a finished time, so the past simple is required even though the question was in the perfect.",
      tip: "Gap 6 catches almost everyone. A fixed arrangement takes the present continuous, not “will meet”.",
      activity: "Do it again with a different job and different times.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — tense under pressure", sub: "Four rounds. Two seconds per answer.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Answer ten “how long” questions with for and since", d: "Present perfect every time. Two seconds each." },
      { t: "Tell a story with one interruption", d: "“I was … when …” Partner checks both tenses." },
      { t: "Ask five “Have you ever…?” questions", d: "Partner answers with never or a past simple detail." },
      { t: "Describe next week using three different futures", d: "will · going to · present continuous." },
    ],
    notes: tn({
      time: "14 minutes for all four rounds.",
      how: "The two-second limit is what moves the rules from paper to speech. Slow correct answers do not transfer to conversation.",
      mistakes: "Round 3 has a built-in trap: “Have you ever been to Gondar?” “Yes, I went last year.” The switch to the past simple is correct and learners often resist it.",
      tip: "Round 2 is the storytelling skill from Level 2 Module 3, now with the correct tense pairing.",
      activity: "Speed tense: whole-class round where each learner answers a tense question within two seconds.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — your life in three tenses", sub: "The same topic, three ways.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say three things you did last year", d: "Past simple. Finished time." },
      { t: "Say three things you have done this year", d: "Present perfect. The year is not over." },
      { t: "Say three things you are going to do next year", d: "Going to. Prior intention." },
      { t: "Now say all nine without stopping", d: "60 seconds. Partner checks every tense." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "The contrast between tasks 1 and 2 is the entire past-versus-perfect lesson made personal. Same kind of fact, different tense, because of the time frame.",
      mistakes: "Learners use the past simple for task 2. Ask whether this year is finished — the question answers itself.",
      extra: "Task 4 combines fluency and accuracy, which is hard. Warn them and accept more errors in that round.",
      tip: "This activity is also interview preparation. Every one of these three questions appears in Module 7.",
      activity: "Nine facts: every learner delivers all nine to a partner within 60 seconds.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the interrupted story", sub: "Background and interruption. In pairs.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“I was walking to work when…”", d: "Finish it. Past continuous, then past simple." },
      { t: "“She was cooking dinner when…”", d: "Finish it." },
      { t: "“They were having a meeting when…”", d: "Finish it." },
      { t: "Now start your own with “While I was…”", d: "Partner supplies the interruption." },
      { t: "Tell a 60-second story with three interruptions", d: "Partner counts correct tense pairs." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Give the background and let learners supply the interruption. Providing half the sentence removes the planning load and focuses attention on the tense.",
      mistakes: "Learners give an interruption in the continuous — “when the phone was ringing”. The short action takes the simple.",
      extra: "Task 4 uses “while”, which must attach to the long action. That is the slide 8 rule in a single word.",
      tip: "Task 5 is the real storytelling test and it connects forward to the narrative writing in Module 8.",
      activity: "Story chain: each learner adds one interrupted sentence to a class story.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — contractions and weak forms",
    sub: "Perfect tenses almost always contract in speech.",
    left: { h: "Written in full", items: ["I have worked here.", "She has gone.", "They have already left.", "I had finished.", "We have not seen him.", "He will have arrived."] },
    right: { h: "Said like this", items: ["“I've worked here.”", "“She's gone.”", "“They've already left.”", "“I'd finished.”", "“We haven't seen him.”", "“He'll've arrived.”"] },
    note: "“I've” and “I'd” are very short and easy to miss — both when speaking and when listening. Practise both directions.",
    notes: tn({
      time: "13 minutes.",
      how: "This is why the present perfect is hard to hear as well as to produce. “I've worked” and “I worked” differ by a fraction of a second in real speech.",
      mistakes: "Learners say the full form, which is correct but sounds formal and effortful in conversation.",
      extra: "“She's” is ambiguous between “she is” and “she has”. Only the following word resolves it: “she's gone” is has, “she's going” is is.",
      tip: "This connects Module 2 and this module. The perfect is a listening problem as much as a grammar problem.",
      activity: "Contract it: give ten full sentences and have learners say each with the contraction, at speed.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — Have you ever…?", sub: "The most natural use of the present perfect.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Ask five “Have you ever…?” questions", d: "been to · worked in · tried · met · lost." },
      { t: "Answer “yes” and add ONE past simple detail", d: "“Yes, I went there in 2022.” Note the tense switch." },
      { t: "Answer “no” with never", d: "“No, I've never been there.”" },
      { t: "Find one thing nobody else in the class has done", d: "Ask around. Report back." },
      { t: "Report three findings about your partner", d: "“He has worked in Kenya. He went there in 2021.”" },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Task 2 contains the module's central pattern: the perfect opens the topic, and the past simple supplies the detail once a time is mentioned.",
      mistakes: "Staying in the perfect for the detail — “Yes, I have gone there in 2022”. Once a time appears, the past simple takes over.",
      extra: "Task 4 is genuinely enjoyable and produces a lot of unplanned language. It is worth the time.",
      tip: "Task 5 also practises the third-person -s from Module 3 — “he has worked”, “he went”. Two modules working together.",
      activity: "Class survey: collect the most unusual finding from task 4 and share it with the whole group.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this. Five tenses, one recording.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say how long you have done your current job or study", d: "Present perfect with for and since." },
      { t: "Say three things you did last year", d: "Past simple. Finished time." },
      { t: "Tell a 30-second story with one interruption", d: "Past continuous plus past simple." },
      { t: "Say two things you have never done", d: "Present perfect with never." },
      { t: "Say what you are doing next week and what you are going to do next year", d: "Present continuous and going to." },
    ],
    notes: tn({
      time: "16 minutes including listening back.",
      how: "Five tenses in one two-minute recording. Have learners label each section with the tense they intended before listening back.",
      mistakes: "Step 1 and step 2 together are the diagnostic: the switch from perfect to past simple is where errors appear.",
      answers: "SUCCESS CRITERIA: correct perfect with for/since · three accurate past simple sentences · one correct continuous-plus-simple pair · two correct never sentences · two different future forms used appropriately.",
      tip: "Compare with the Module 1 recording. Learners often find their fluency has held while their accuracy has risen, which is the ideal outcome.",
      activity: "Keep every recording for the Level 3 comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — which tense did you hear?", sub: "Eight sentences. Listen twice.",
    panelW: 7.2,
    panel: { label: "Audio script — read at natural speed, contracted", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.3,
      text: "1.  I've worked here for three years.\n2.  I worked there in 2019.\n3.  She's gone to Adama.\n4.  She went to Adama on Monday.\n5.  I was cooking when he arrived.\n6.  I'd already finished when he arrived.\n7.  Have you ever been to Lalibela?\n8.  I'm meeting the client at four." },
    side: { label: "Your task", color: C.listen, size: 15.5, items: [
      "Name the tense of each sentence.",
      "Which two sound almost the same?",
      "In 3, is she still in Adama?",
      "In 6, which happened first?",
      "In 8, is this present or future?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Read with natural contractions. “I've worked” and “I worked” are genuinely hard to tell apart at speed, and that is the point of items 1 and 2.",
      mistakes: "Learners cannot hear the contracted “'ve”. Read those two items three times and let them struggle — the difficulty is real, not a failure.",
      extra: "Item 8 is present continuous used for the future, which learners often mis-identify as present.",
      answers: "1 present perfect · 2 past simple · 3 present perfect (she is still there) · 4 past simple · 5 past continuous + past simple · 6 past perfect (finishing came first) · 7 present perfect · 8 present continuous, future meaning.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Two of these are almost impossible to hear.",
    size: 16.5,
    items: [
      { q: "1 and 2 — the hard pair", a: "“I've worked” (perfect) and “I worked” (past simple).", why: "The contracted 've is a fraction of a second. In real speech the time expression is what tells you which one." },
      { q: "3 — is she still in Adama?", a: "Yes. “Gone” means departed and not returned.", why: "“Has been” would mean she went and came back. Two small words, opposite meanings." },
      { q: "5 — what happened?", a: "The cooking was in progress; the arriving cut into it.", why: "Long action in the continuous, short action in the simple. The standard pairing from slide 8." },
      { q: "6 — which happened first?", a: "The finishing. “I'd already finished when he arrived.”", why: "The past perfect marks the earlier of two past events. “Already” is the usual signal." },
      { q: "8 — present or future?", a: "Future. A fixed arrangement.", why: "The present continuous is used for the future constantly in real speech, and learners rarely produce it." },
    ],
    notes: keyNotes("Items 1 and 2 are the honest lesson: even native listeners rely on the time expression rather than the contraction. Tell learners that — it removes the sense of failure."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — a job interview", sub: "Listen for the tense of every question and answer.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 16, lsm: 1.28,
      text: "INTERVIEWER:  How long have you worked in logistics?\nBETHLEHEM:  For about six years now.\nINTERVIEWER:  And what did you do before that?\nBETHLEHEM:  I worked in a warehouse in Adama for two years.\nINTERVIEWER:  Have you ever managed a team?\nBETHLEHEM:  Yes. I managed eight people in my last job.\nINTERVIEWER:  What have you been doing since you left?\nBETHLEHEM:  I've been studying, and I've recently finished a\ncourse in supply chain management." },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. How long in logistics?",
      "2. What did she do before?",
      "3. Has she managed a team?",
      "4. Why does she switch tense in that answer?",
      "5. What has she done since leaving?",
      "6. Which tense do the questions use most?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Question 4 is the key: the interviewer asks in the perfect and Bethlehem answers in the perfect, then switches to the past simple to give the specific finished detail.",
      mistakes: "Learners think the switch is an error. It is exactly right, and it is what a fluent speaker does.",
      extra: "Every question here appears in Module 7. Learners are rehearsing interview content while doing a listening task.",
      answers: "1 About six years. · 2 Worked in a warehouse in Adama for two years. · 3 Yes, eight people in her last job. · 4 The perfect opens it; the past simple gives the finished detail. · 5 Studying, and recently finished a course. · 6 The present perfect.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "This is how tense actually works in an interview.",
    size: 16.5,
    items: [
      { q: "1 — how long?", a: "For about six years. Present perfect with “for”.", why: "The job continues, so the perfect is required. “I worked for six years” would mean she has left." },
      { q: "2 — before that?", a: "She worked in a warehouse for two years. Past simple.", why: "That job is finished, so the perfect becomes impossible. The question itself used the past simple." },
      { q: "3 and 4 — the tense switch", a: "“Have you ever managed…?” → “Yes. I managed eight people in my last job.”", why: "The perfect asks about life experience; the past simple supplies the finished detail. This switch is correct and natural." },
      { q: "5 — since leaving", a: "“I've been studying, and I've recently finished a course.”", why: "“Since” forces the perfect. “Recently” is a perfect signal from slide 17." },
      { q: "6 — the dominant tense", a: "The present perfect.", why: "Interviews are largely about experience up to now, which is precisely what the present perfect expresses." },
    ],
    notes: keyNotes("Item 6 is worth saying explicitly: the present perfect is the tense of job interviews. A learner who avoids it will struggle in Module 7."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "Why the perfect is hard to HEAR", sub: "Four reasons. None of them is your fault.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaVolumeDown", title: "The contraction is tiny", desc: "“I've” is barely longer than “I”. At natural speed the difference from “I worked” is a fraction of a second." },
      { icon: "FaExchangeAlt", title: "“She's” is ambiguous", desc: "It can be “she is” or “she has”. Only the next word tells you: “she's gone” is has, “she's going” is is." },
      { icon: "FaLanguage", title: "Many languages have no equivalent", desc: "If your first language uses one past tense, there is no pattern to transfer. The whole distinction has to be built new." },
      { icon: "FaClock", title: "The time word carries the meaning", desc: "In practice, listeners use for, since, yesterday and already more than the verb form itself. So can you." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "The fourth point is genuinely useful advice: listen for the time expression rather than straining to hear the contraction. That is what fluent listeners do.",
      mistakes: "Learners blame their ears. The contraction really is very short, and even native listeners rely on context.",
      tip: "This reframes a frustration as a strategy. Learners leave with something to do rather than something to feel bad about.",
      activity: "Time-word listening: read ten sentences and have learners identify the tense from the time expression alone.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — a work history", sub: "Every tense in this module appears here.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 16, lsm: 1.28,
      text: "YONAS — SUPPLY CHAIN OFFICER\n\nYonas has worked for the same company since 2021. Before that he worked for two years at a small logistics firm in Adama.\n\nHe was studying at Bahir Dar University when he got his first job offer. He had already finished three years of his degree, so he decided to complete it part-time.\n\nHe has never worked outside Ethiopia, but he has recently applied for a position in Nairobi. He is meeting their team next month.\n\n“I have learned more in the last two years than in the five before that,” he says." },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "Find one present perfect and say why.",
      "Find one past simple and say why.",
      "Find the past continuous. What interrupted it?",
      "Find the past perfect. Which event came first?",
      "Find the future. Which form is it?",
      "Does Yonas still work for the same company?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "This passage is built to contain all eight tenses in a natural, non-artificial way. Work through it verb by verb, naming the tense and the reason.",
      mistakes: "Learners identify forms correctly and cannot say why. Push for the reason every time — the reason is the transferable part.",
      extra: "“He is meeting their team next month” is the present continuous with future meaning, which learners rarely spot.",
      answers: "Perfect: “has worked… since 2021” (continues). Past simple: “worked for two years” (finished). Past continuous: “was studying” interrupted by “got”. Past perfect: “had already finished” came before deciding. Future: “is meeting” — present continuous, an arrangement. Yes, he still works there.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Content and tense together.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence, using the correct tense.",
    items: [
      "How long has Yonas worked for his current company?",
      "What did he do before that, and for how long?",
      "What was he doing when he got his first job offer?",
      "Had he finished his degree at that point?",
      "Has he ever worked abroad?",
      "What is he doing next month?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Each question is asked in the tense the answer requires. That mirroring is how tense works in real conversation and it is worth naming.",
      mistakes: "Answering question 1 with the past simple. The question is in the perfect and the job continues, so the answer must be too.",
      tip: "Question 4 requires the past perfect in the answer: “No, he hadn't finished it yet.” Accept the past simple but point out the better version.",
      answers: "1 He has worked there since 2021. · 2 He worked at a logistics firm in Adama for two years. · 3 He was studying at Bahir Dar University. · 4 No — he had finished three years but not the degree. · 5 No, he has never worked abroad. · 6 He is meeting a team in Nairobi.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Every tense choice has a reason.",
    size: 16.5,
    items: [
      { q: "1 — how long?", a: "He has worked there since 2021. Present perfect.", why: "“Since” plus a job that continues. The past simple would mean he has left." },
      { q: "2 — before that", a: "He worked in Adama for two years. Past simple.", why: "That job is over. Note “for two years” with the past simple — “for” does not always force the perfect." },
      { q: "3 — when he got the offer", a: "He was studying at Bahir Dar. Past continuous.", why: "The studying was long and in progress; the offer was the short event that cut into it." },
      { q: "4 — had he finished?", a: "No — he had finished three years, not the degree. Past perfect.", why: "The finishing came before the offer, and the past perfect marks the earlier of two past events." },
      { q: "6 — next month", a: "He is meeting their team. Present continuous, future meaning.", why: "A fixed arrangement with a person and a time. “Will meet” would sound like a decision made just now." },
    ],
    notes: keyNotes("Item 2 is the important correction: “for” is a perfect signal only when the period continues. “I worked there for two years” is perfectly correct for a finished job."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — find the tense errors", sub: "This text has SIX tense errors. Find them.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 16, lsm: 1.3,
      text: "MY CAREER SO FAR\n\nI work in this office since 2022. Before that I have worked in Hawassa for three years.\n\nLast month I have attended a training course in Addis Ababa. While I attended it, I met several people from other regions.\n\nI have never been abroad, but I have applied for a position in Kenya last week. I will meet their team on Tuesday — it is already in my diary.\n\nI think I have learned a lot since I am starting this job." },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "Find all six tense errors.",
      "Write the correction for each.",
      "Which step from slide 20 catches each one?",
      "Two errors involve a stated past time.",
      "Rewrite the whole text correctly.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Use the four steps from slide 20 systematically. Most of these errors are caught by step 1 alone — a stated past time forcing the past simple.",
      mistakes: "The commonest pattern here is a perfect tense combined with a finished time word, which is always wrong.",
      extra: "The last sentence has two errors in one clause, which is realistic for learner writing at this level.",
      answers: "1 “I have worked in this office since 2022” · 2 “I worked in Hawassa” · 3 “Last month I attended” · 4 “While I was attending it” · 5 “I applied for a position… last week” · 6 “since I started this job”.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — the corrections", sub: "Six errors, and the rule behind each.",
    size: 16,
    items: [
      { q: "“I work in this office since 2022.”", a: "“I HAVE WORKED in this office since 2022.”", why: "“Since” requires the present perfect. This is the commonest error with for and since." },
      { q: "“Before that I have worked in Hawassa.”", a: "“Before that I WORKED in Hawassa.”", why: "A finished job in a finished period. Step 1 catches it — the perfect is impossible here." },
      { q: "“Last month I have attended a course.”", a: "“Last month I ATTENDED a course.”", why: "“Last month” is a finished time word, which forces the past simple every time." },
      { q: "“While I attended it, I met people.”", a: "“While I WAS ATTENDING it, I met people.”", why: "“While” attaches to the long background action, which takes the past continuous." },
      { q: "“I have applied… last week.” · “since I am starting”", a: "“I APPLIED… last week.” · “since I STARTED this job.”", why: "A stated time forces the past simple; and “since” takes a past simple for the starting point." },
    ],
    notes: keyNotes("Four of the six errors are the same one: a perfect tense with a finished time word. Point that out — one rule, correctly applied, would have fixed most of the text."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — past simple or present perfect?", sub: "Look for the time word first.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write each sentence with the correct tense.",
    items: [
      "1.  I (work) here since 2022.",
      "2.  I (work) in Hawassa from 2018 to 2020.",
      "3.  (you / ever / be) to Lalibela?",
      "4.  She (go) to Adama yesterday.",
      "5.  We (not / finish) the report yet.",
      "6.  He (live) in Jimma for three years, but he left in 2021.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Have learners circle the time expression before choosing. The time word decides most of these before any thinking about aspect.",
      answers: "1 have worked · 2 worked · 3 Have you ever been · 4 went · 5 haven't finished · 6 lived",
      mistakes: "Item 6 is the trap: “for three years” looks like a perfect signal, but “he left in 2021” makes it a finished period.",
      tip: "Item 6 is worth discussing as a class. It proves that “for” alone does not decide the tense — the whole context does.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — mixed tenses", sub: "All eight tenses. Use the four steps.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write each sentence with the correct tense.",
    items: [
      "1.  I (cook) when the phone (ring).",
      "2.  When I arrived, the meeting (already / start).",
      "3.  I (meet) the client at four tomorrow — it's in my diary.",
      "4.  She (study) at university when she (get) the job offer.",
      "5.  I (not / see) him since Monday.",
      "6.  The bus (leave) at six every morning.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Ask which of the four steps decided each sentence. Naming the step is what makes the procedure usable outside the exercise.",
      answers: "1 was cooking / rang · 2 had already started · 3 am meeting · 4 was studying / got · 5 haven't seen · 6 leaves",
      mistakes: "Item 3 catches almost everyone — a diary arrangement takes the present continuous, not “will meet”.",
      tip: "Item 6 is the present simple for a timetable, which is the fourth future from slide 19 and the one nobody produces.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — your work history", sub: "150 words. This is Module 7 preparation.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write about your work or study history. Use at least six different tenses.",
    items: [
      "1.  How long you have done your current job or course.  (present perfect)",
      "2.  What you did before that.  (past simple)",
      "3.  What you were doing when something changed.  (past continuous)",
      "4.  Something you had done before that point.  (past perfect)",
      "5.  Something you have never done, and something you have recently done.",
      "6.  What you are doing next month and going to do next year.",
    ],
    notes: tn({
      time: "20 minutes.",
      how: "This is a genuine interview answer as well as a tense exercise. Say so — it raises the effort considerably.",
      answers: "MODEL: see slide 41. The Yonas text is exactly this task done well, at the required length, using all six tenses naturally.",
      mistakes: "Learners write everything in the past simple and add a perfect at the end. Require all six elements as separate sentences.",
      tip: "Keep these. They become the basis of the interview answers in Module 7 and the CV work in Module 8.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answer and why", sub: "Six tenses, and the reason for each.",
    size: 16,
    items: [
      { q: "1 — present perfect", a: "“I have worked at the health centre since 2022.”", why: "The job continues, so the perfect connects it to now. “Since” gives the starting point." },
      { q: "2 — past simple", a: "“Before that I worked in a pharmacy for two years.”", why: "A finished job. Note that “for two years” sits happily with the past simple here." },
      { q: "3 — past continuous", a: "“I was studying part-time when the position came up.”", why: "The studying was the long background; the position appearing was the short event." },
      { q: "4 — past perfect", a: "“I had already passed my exams, so I could apply.”", why: "The passing came before the applying, and saying so explains why she was eligible." },
      { q: "5 and 6 — perfect and future", a: "“I have never worked in a hospital, but I've recently applied to one. I'm starting a course next month.”", why: "Never for life experience, recently for the near past, present continuous for a fixed arrangement." },
    ],
    notes: keyNotes("Read the model aloud and ask the class to name each tense as it passes. Then have learners check their own paragraph the same way."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your tense checklist", sub: "Four questions. Under two seconds once it is automatic.",
    check: true, color: C.write, size: 20,
    items: [
      { t: "Is there a finished time word?", d: "yesterday · last week · in 2019 · ago → past simple. Stop." },
      { t: "Is there a perfect signal?", d: "for · since · already · yet · ever · never · recently → present perfect." },
      { t: "Was the action in progress at that moment?", d: "→ continuous. was working · am working." },
      { t: "Are two past events out of order?", d: "→ past perfect for the earlier one." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Steps 1 and 2 settle most real cases and are pure pattern recognition. Teach them as the fast route.",
      tip: "Print this beside the nine-box grid from slide 5. Together they are the whole module on one page.",
      activity: "Run the steps on every written task for the rest of Level 3.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. “I ___ him yesterday.”", opts: "a) have seen     b) saw     c) had seen" },
      { q: "2. “I ___ here since 2022.”", opts: "a) work     b) worked     c) have worked" },
      { q: "3. “I ___ when the phone rang.”", opts: "a) cooked     b) was cooking     c) have cooked" },
      { q: "4. “She has ___ to Adama.” (still there)", opts: "a) been     b) gone     c) went" },
      { q: "5. “I ___ the client at four.” (in the diary)", opts: "a) will meet     b) am meeting     c) meet" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 c · 3 b · 4 b · 5 b",
      tip: "Question 5 is the one most classes get wrong. A diary arrangement takes the present continuous.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — for or since?", sub: "Length of time, or starting point?",
    color: C.green, instruction: "Write “for” or “since” in each gap.", size: 18,
    items: [
      "1.  I have worked here ___ three years.",
      "2.  I have worked here ___ 2022.",
      "3.  She has been ill ___ Monday.",
      "4.  We have known each other ___ a long time.",
      "5.  He hasn't called ___ he left.",
      "6.  They have lived in Jimma ___ six months.",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Ask for each one: is this a length or a starting point? The test is mechanical and reliable.",
      answers: "1 for · 2 since · 3 since · 4 for · 5 since · 6 for",
      mistakes: "Item 5 takes a clause after “since”, not just a noun. Point out that both are possible.",
      tip: "Items 1 and 2 say the same thing two ways. That equivalence is worth demonstrating.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Tenses, signals and formulas.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the TENSE to its FORMULA", opts: "1. present perfect     2. past continuous     3. past perfect     4. present continuous" },
      { q: "a) was/were + -ing     b) had + participle", opts: "c) have/has + participle     d) am/is/are + -ing" },
      { q: "Part 2 — match the SIGNAL to the TENSE", opts: "1. yesterday     2. since     3. while     4. already          a) present perfect     b) past simple     c) past continuous" },
      { q: "Part 3 — match the FUTURE FORM to its USE", opts: "1. will     2. going to     3. present continuous          a) fixed arrangement     b) decided now     c) prior intention" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–a, 3–b, 4–d.  ·  Part 2: 1–b, 2–a, 3–c, 4–a.  ·  Part 3: 1–b, 2–c, 3–a.",
      tip: "In Part 2 both “since” and “already” point to the present perfect, which is a useful reminder that signals cluster by tense.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — build the tense", sub: "Same verb, nine forms.",
    color: C.green, instruction: "Write the verb “study” with the subject “she” in each tense.", size: 18,
    items: [
      "1.  present simple",
      "2.  present continuous",
      "3.  present perfect",
      "4.  past simple",
      "5.  past continuous",
      "6.  past perfect",
      "7.  future with will",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "This tests the two formulas from slide 16. Learners who know be + -ing and have + participle can produce all seven mechanically.",
      answers: "1 she studies · 2 she is studying · 3 she has studied · 4 she studied · 5 she was studying · 6 she had studied · 7 she will study",
      mistakes: "Item 1 needs the third-person -s from Module 3. Check it — the two modules meet here.",
      tip: "Repeat with an irregular verb such as “go” or “write”. The participle is where the difficulty lies.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — correct the tense error", sub: "One error in each sentence.",
    color: C.green, instruction: "Rewrite each sentence correctly.", size: 17,
    items: [
      "1.  I have seen him yesterday.",
      "2.  I work here since 2022.",
      "3.  Last month I have attended a course.",
      "4.  While I attended the meeting, my phone rang.",
      "5.  She has gone to Gondar twice.",
      "6.  I will meet the client at four — it's in my diary.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Ask which of the four steps catches each error. Most are caught by step 1 or step 2.",
      answers: "1 I saw him yesterday. · 2 I have worked here since 2022. · 3 Last month I attended a course. · 4 While I was attending the meeting… · 5 She has been to Gondar twice. · 6 I am meeting the client at four.",
      mistakes: "Item 5 is the been/gone pair: “gone twice” would mean she is still there twice, which is impossible.",
      tip: "Items 1 and 3 are the same error — a perfect tense with a finished time word. Point out the repetition.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  “I have seen him yesterday” is correct.",
      "2.  “Since” is followed by a starting point.",
      "3.  “Been” means the person is still there.",
      "4.  The long action takes the past continuous.",
      "5.  The past perfect marks the later of two past events.",
      "6.  A diary arrangement takes the present continuous.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — “I saw him yesterday” · 2 T · 3 F — “gone” means still there; “been” means returned · 4 T · 5 F — the EARLIER of the two · 6 T",
      tip: "Item 3 catches almost everyone. Say the correct pair aloud twice: been = back, gone = still away.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About you. Correct tense required.",
    color: C.green, instruction: "Write a complete sentence for each. Tense will be marked.", size: 18,
    items: [
      "1.  How long have you studied English?",
      "2.  What did you do last weekend?",
      "3.  What were you doing at eight o'clock last night?",
      "4.  Name something you have never done.",
      "5.  What are you doing next weekend?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Each question is asked in the tense the answer requires. Point out the mirroring — it is how real conversation works.",
      answers: "1 for/since + present perfect · 2 past simple · 3 past continuous · 4 present perfect with never · 5 present continuous with future meaning.",
      mistakes: "Question 5 answered with “will”. If there is a plan, the present continuous is more natural.",
      tip: "These five questions cover five tenses and all of them appear in ordinary conversation. Drill them as a set.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Two seconds per answer. Partner checks the tense.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner names the tense you used and whether it was right.", size: 19,
    items: [
      "1.  Answer ten “how long” questions with for and since.",
      "2.  Tell a 30-second story with two interruptions.",
      "3.  Ask and answer five “Have you ever…?” questions.",
      "4.  Describe next week using three different future forms.",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "The two-second limit moves the rules from paper into speech, which is the whole point of this module.",
      answers: "SUCCESS CRITERIA: 1 present perfect every time · 2 continuous background plus simple interruption, twice · 3 perfect question, then past simple for the detail · 4 will, going to and present continuous used appropriately.",
      tip: "Round 3 is where the tense switch appears. Praise anyone who moves to the past simple for the detail — it is the mark of real control.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "Everything in the module together.",
    color: C.green, instruction: "Work alone, then compare with a partner.", size: 17,
    items: [
      { q: "1. Rewrite the slide 44 text with all six errors corrected.", opts: "From memory if you can." },
      { q: "2. Write the nine-box grid from memory with the verb “write”.", opts: "Subject: he." },
      { q: "3. Write six sentences, one in each of six different tenses.", opts: "Label each one." },
      { q: "4. Write a 100-word work history using at least five tenses.", opts: "Mark each tense in the margin." },
      { q: "5. Speak for 60 seconds about your career. Partner names every tense.", opts: "No preparation." },
    ],
    notes: tn({
      time: "20 minutes.",
      how: "Question 5 is the real assessment. Everything else can be done carefully; unprepared speech is where tense control is genuinely tested.",
      answers: "1 the six corrections from slide 45 · 2 he writes, is writing, has written, wrote, was writing, had written, will write, will be writing, will have written · 3 six correct labelled sentences · 4 five tenses marked.",
      tip: "Question 2 is a fair memory test because the grid is a system, not a list. Learners who understand it can reconstruct it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why can't you say “I have seen him yesterday”?", opts: "What does the perfect mean about time?" },
      { q: "2. “She lived in Jimma” and “She has lived in Jimma” — what changes?", opts: "Where is she now?" },
      { q: "3. Why do interviews use the present perfect so much?", opts: "What are interviewers asking about?" },
      { q: "4. Is the past perfect always necessary when two past events happen?", opts: "When can you leave it out?" },
    ],
    notes: tn({
      time: "13 minutes. Discussion, not writing.",
      how: "Question 4 keeps the module honest: the past perfect is often optional, and pretending otherwise makes learners over-use it.",
      answers: "1 The perfect means the time is not finished; “yesterday” is finished, so the two contradict each other. 2 “Lived” means she has left; “has lived” means she is still there. The tense carries information no word in the sentence contains. 3 Because they ask about experience up to now, which is exactly what the present perfect expresses. 4 No — when the order is already obvious from the words or from “then”, “after” and “before”, the past simple is enough.",
      tip: "Question 2 is the clearest single demonstration in the module. Use it as the summary if time runs short.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · The system", items: [
      { q: "1. What are the two questions that choose a tense?", opts: "Two answers." },
      { q: "2. What is the formula for the present perfect?", opts: "One answer." },
      { q: "3. What is the formula for the past continuous?", opts: "One answer." },
      { q: "4. Name the three aspects.", opts: "Three answers." },
    ] },
    { part: "Part 2 · Past or perfect?", items: [
      { q: "5. “I ___ him yesterday.”", opts: "a) have seen     b) saw" },
      { q: "6. “I ___ here since 2022.”", opts: "a) work     b) have worked" },
      { q: "7. Why is “I have seen him yesterday” wrong?", opts: "One sentence." },
      { q: "8. Name three present perfect signal words.", opts: "Three answers." },
    ] },
    { part: "Part 3 · Continuous and perfect", items: [
      { q: "9. “I ___ when the phone rang.”", opts: "a) cooked     b) was cooking" },
      { q: "10. Which action takes the continuous — long or short?", opts: "One word." },
      { q: "11. “When I arrived, the meeting ___.”", opts: "a) started     b) had already started" },
      { q: "12. Which event does the past perfect mark?", opts: "One sentence." },
    ] },
    { part: "Part 4 · Been, gone and the future", items: [
      { q: "13. “She has ___ to Adama.” (still there)", opts: "a) been     b) gone" },
      { q: "14. What is the difference between been and gone?", opts: "One sentence." },
      { q: "15. “I ___ the client at four.” (in the diary)", opts: "a) will meet     b) am meeting" },
      { q: "16. Name the four ways to talk about the future.", opts: "Four answers." },
    ] },
    { part: "Part 5 · Using it", items: [
      { q: "17. Correct: “I work here since 2022.”", opts: "Write the sentence." },
      { q: "18. Correct: “Last month I have attended a course.”", opts: "Write the sentence." },
      { q: "19. Correct: “While I attended the meeting, my phone rang.”", opts: "Write the sentence." },
      { q: "20. WRITING: 150 words on your work history, using six tenses.", opts: "Mark each tense in the margin." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 4 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is worth double." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is the Module 7 interview answer in draft form. Mark it on tense accuracy and keep it — learners will reuse it.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the two questions", a: "WHEN (past, present, future) and HOW (simple, continuous, perfect).", why: "Two choices generate all nine boxes. There are not eight separate rules to memorise." },
      { q: "Q2 — present perfect formula", a: "have / has + past participle.", why: "Perfect is always have + participle, in every tense. Only the form of “have” changes." },
      { q: "Q3 — past continuous formula", a: "was / were + -ing.", why: "Continuous is always be + -ing. Two formulas generate six of the nine boxes." },
      { q: "Q4 — the three aspects", a: "Simple (finished or general) · continuous (in progress) · perfect (connected).", why: "The aspect is the part nobody explains, and it is what the second question decides." } ],
    [ { q: "Q5 — “I ___ him yesterday.”", a: "b) saw", why: "“Yesterday” is a finished time, and a stated past time always forces the past simple." },
      { q: "Q6 — “I ___ here since 2022.”", a: "b) have worked", why: "“Since” marks a start that continues to now, which only the present perfect expresses." },
      { q: "Q7 — why is it wrong?", a: "The perfect means the time is not finished; “yesterday” is finished.", why: "The tense and the time word contradict each other, so the sentence cannot stand." },
      { q: "Q8 — three signals", a: "Any three of: for · since · already · yet · ever · never · recently · just.", why: "Learning the signals gets most tense choices right without any grammatical analysis." } ],
    [ { q: "Q9 — “I ___ when the phone rang.”", a: "b) was cooking", why: "The cooking was long and in progress; the ring was short and cut into it." },
      { q: "Q10 — long or short?", a: "Long.", why: "The long background action takes the continuous; the short interruption takes the simple." },
      { q: "Q11 — “the meeting ___”", a: "b) had already started", why: "The starting came before the arriving, and the past perfect marks the earlier event." },
      { q: "Q12 — what does the past perfect mark?", a: "The EARLIER of two past events.", why: "It is only needed when the order matters and is not already obvious." } ],
    [ { q: "Q13 — “She has ___ to Adama.”", a: "b) gone", why: "She is still there. “Been” would mean she went and came back." },
      { q: "Q14 — been or gone?", a: "BEEN = went and returned. GONE = went and is still there.", why: "Two small words with opposite meanings. Worth learning as a fixed pair." },
      { q: "Q15 — “I ___ the client at four.”", a: "b) am meeting", why: "A fixed arrangement with a person and a time takes the present continuous, not “will”." },
      { q: "Q16 — the four futures", a: "will · going to · present continuous · present simple (timetable).", why: "The last two are the ones learners never produce, and they are what sounds natural." } ],
    [ { q: "Q17 — “I work here since 2022.”", a: "“I have worked here since 2022.”", why: "“Since” requires the present perfect. This is the commonest error with for and since." },
      { q: "Q18 — “Last month I have attended…”", a: "“Last month I attended a course.”", why: "A finished time word forces the past simple. Step 1 catches it immediately." },
      { q: "Q19 — “While I attended…”", a: "“While I was attending the meeting, my phone rang.”", why: "“While” attaches to the long background action, which takes the past continuous." },
      { q: "Q20 — the writing task", a: "150 words, six tenses, each one marked", why: "Marked on tense accuracy. Keep it — this becomes your interview answer in Module 7." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q5, Q13 and Q15 are the diagnostic block: the finished-time rule, been versus gone, and the diary future. Errors here need slides 6, 18 and 19 again."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Copy the nine-box grid from memory", d: "Use a different verb each day. Check it against slide 5." },
      { t: "Answer ten “how long” questions aloud", d: "For and since. Two seconds each." },
      { t: "Tell three interrupted stories aloud", d: "“I was … when …” Record one of them." },
      { t: "Write ten sentences, one per tense, and check them", d: "Use the four steps from slide 20." },
      { t: "Record 60 seconds on your career", d: "Then listen back and name every tense you used." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's task is the most valuable. Reconstructing the grid daily turns eight separate rules into one system.",
      tip: "Friday's task is the assessment. Naming your own tenses on a recording is the skill that transfers to real speech.",
      activity: "Ask learners to bring Monday's grid and Friday's recording to the next lesson.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your 150-word work history", d: "At least six tenses, each marked in the margin." },
      { t: "The nine-box grid from memory", d: "One verb, all nine forms." },
      { t: "Record your two-minute speaking challenge", d: "Five tenses: perfect · past · continuous · never · two futures." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 1 is Module 7 preparation as much as a tense exercise. Tell learners they will reuse it in the interview module.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Mark task 1 for tense only. Vocabulary and style belong to Module 8.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaPencilAlt", title: "Work history — 10 marks", desc: "150 words (2) · six different tenses (4) · each tense marked (2) · all tenses used correctly (2)." },
      { icon: "FaTable", title: "The grid — 5 marks", desc: "Nine boxes (3) · all forms correct including the participle (2)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "Perfect with for/since (2) · three past simple (2) · one interruption pair (2) · two never sentences (2) · two futures (2)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → redo the four steps daily with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Mark tense only. Mixing in vocabulary or fluency criteria muddies the feedback and learners cannot act on it.",
      tip: "Give the mark privately, with two corrections — the Module 3 technique.",
      mistakes: "Do not penalise a learner who uses a simpler tense correctly rather than a complex one wrongly. Correct and simple beats ambitious and wrong.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaTable", title: "The nine-box grid", desc: "Three times, three aspects. Two questions choose any tense." },
      { icon: "FaBalanceScale", title: "Past or perfect", desc: "A stated finished time forces the past simple. Every time." },
      { icon: "FaClock", title: "For and since", desc: "Length of time, or starting point. Both take the perfect." },
      { icon: "FaExchangeAlt", title: "Interrupted actions", desc: "Long action continuous, short action simple." },
      { icon: "FaHistory", title: "The past before the past", desc: "Past perfect marks the earlier of two past events." },
      { icon: "FaArrowRight", title: "Four futures", desc: "will · going to · present continuous · timetable." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3 and ask the same three questions again. The class should now be able to explain both versions of each pair.",
      tip: "Ask which tense learners avoided at the start of the module. Most say the present perfect, and most can now use it.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The tense toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaTable", title: "Two formulas, six tenses", desc: "CONTINUOUS  =  be + -ing\nPERFECT  =  have + past participle\n\nwas working · am working\nhad worked · have worked" },
      { icon: "FaBullseye", title: "The four steps", desc: "1  Finished time word?  → past simple\n2  Perfect signal?  → present perfect\n3  In progress then?  → continuous\n4  Two events out of order?  → past perfect" },
      { icon: "FaClock", title: "The signal words", desc: "PAST SIMPLE:  yesterday · last week ·\nin 2019 · ago\n\nPERFECT:  for · since · already · yet ·\never · never · recently · just" },
      { icon: "FaArrowRight", title: "The four futures", desc: "will  →  decided now\ngoing to  →  decided before\npresent continuous  →  arrangement\npresent simple  →  timetable" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide alongside slide 5. The grid and these four boxes are the whole module.",
      tip: "The third box is the fastest route to a correct tense. Print it and keep it visible during writing tasks.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "Eight tenses stopped being eight rules and became one system with two questions.",
    sub: "You will still hesitate over the present perfect for a while. That is normal —\nit is the hardest choice in English for most learners, and you now know exactly what decides it.",
    chips: ["NEXT — Module 5", "Workplace English", "Meetings, emails, updates and polite disagreement"],
    notes: tn({
      time: "5 minutes.",
      how: "Be honest that the past-versus-perfect choice takes months to become automatic. Learners who expect instant mastery conclude they have failed.",
      tip: "Preview Module 5: from here Level 3 turns towards work. Everything built in Modules 1 to 4 — fluency, pronunciation, accuracy, tense — now gets used in meetings, emails and interviews.",
      activity: "Ask every learner to say one sentence about their career using the present perfect before they leave.",
    }),
  });
};
