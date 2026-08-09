"use strict";
/* LEVEL 3 · MODULE 1 — Fluency Foundations   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 3", levelNo: LV.no, levelName: "Intermediate\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Fluency Foundations",
    sub: "You already know enough English to say what you mean. This module is about saying it WITHOUT STOPPING — and about the habit that is slowing you down.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "A2 → B1", v: "LEVEL 3 BEGINS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by naming the change. Levels 1 and 2 asked “do you know it?” Level 3 asks “can you USE it, at speed, under pressure?” The knowledge is mostly there already; the delivery is not.",
      tip: "Most learners at this point can pass a grammar test but freeze in a real conversation. Say that out loud in the first minute — learners are relieved to hear the problem named.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — none of them require new grammar.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Speak for 60 seconds without stopping", d: "The measurable goal of this module. Everyone reaches it." },
      { t: "Stop translating in your head", d: "The single biggest thing slowing you down." },
      { t: "Use chunks instead of building every sentence from zero", d: "Fluent speakers reuse ready-made phrases. So can you." },
      { t: "Buy thinking time in English, not silence", d: "“Well…”  “Let me think.”  “That's a good question.”" },
      { t: "Correct yourself without losing the sentence", d: "Repair, not restart. Fluent speakers make mistakes constantly." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 1 is measurable and it is what learners will remember. Time them in the first lesson and again in the last — the improvement is usually dramatic.",
      tip: "Objective 5 removes a lot of fear. Learners believe fluent speakers do not make mistakes. They make them constantly and simply carry on.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what happens when you speak?", sub: "Be honest. This is a diagnosis, not a test.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaBrain", title: "1 · In your head", desc: "When you speak English, do you think in Amharic or Oromo first, then translate? Be honest." },
      { icon: "FaPauseCircle", title: "2 · When you stop", desc: "What makes you stop mid-sentence? A missing word? Grammar? Fear of a mistake?" },
      { icon: "FaStopwatch", title: "3 · Sixty seconds", desc: "Could you speak about your work for one minute without stopping? Try it now. Time it." },
    ],
    notes: tn({
      time: "8 minutes. Task 3 needs real time.",
      how: "Do task 3 properly with a timer. Most learners stop between fifteen and thirty seconds. Write the class average on the board and keep it — you will beat it by the end of the module.",
      mistakes: "Correct nothing. The point is to measure the starting position, not to improve it yet.",
      tip: "Almost every hand goes up for task 1. Naming translation as the shared problem makes the rest of the module feel like a solution rather than a criticism.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Fluency is not speed, and it is not perfect grammar. It is keeping going.",
    sub: "A fluent speaker with twenty mistakes is easier to talk to than a perfect speaker who stops every eight seconds.\nFrom now on, finishing the sentence matters more than getting it right.",
    chips: ["Keep going", "Repair, do not restart", "Mistakes are not the problem"],
    notes: tn({
      time: "6 minutes.",
      how: "This reverses everything learners were taught in Levels 1 and 2, where accuracy was the goal. Say the reversal explicitly — otherwise it feels like the rules have changed without warning.",
      mistakes: "Learners hear “mistakes do not matter” and worry that standards have dropped. They have not: Module 3 is entirely about accuracy. The two are trained separately because training both at once trains neither.",
      tip: "Give the analogy: you do not learn to drive by stopping the car every time you make a small error. You keep driving and improve the errors afterwards.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.grid({
    sec: SEC.con, title: "What fluency is actually made of", sub: "Four parts. Only one of them is speed.",
    cols: 4, color: C.green, titleSize: 19, descSize: 15,
    items: [
      { icon: "FaTachometerAlt", title: "1 · SPEED", desc: "Fast enough that the listener does not get bored.\n\nNOT as fast as possible." },
      { icon: "FaPauseCircle", title: "2 · PAUSES", desc: "In the right PLACE — between ideas, not in the middle of a phrase.\n\nWhere you pause matters more than how often." },
      { icon: "FaBrain", title: "3 · NO TRANSLATING", desc: "Going straight from idea to English.\n\nThis is the part that takes practice, and it is the biggest one." },
      { icon: "FaTools", title: "4 · REPAIR", desc: "Fixing a mistake and carrying on in the same sentence.\n\n“I go— I went there yesterday.”" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Demonstrate part 2 physically. Say one sentence pausing in the wrong places (“I went to… the market with… my”) and then the same sentence pausing between ideas. Learners hear immediately that the second sounds fluent even at the same speed.",
      mistakes: "Learners equate fluency with speed and try to talk fast, which produces stress and more errors. Speed is the least important of the four.",
      extra: "Native speakers pause for about 20% of their speaking time. Pausing is not a failure — pausing in the wrong place is.",
      tip: "Part 4 is the most freeing. Show that a repaired mistake barely registers with a listener, while a full restart does.",
      activity: "Right and wrong pauses: read a paragraph twice, once pausing mid-phrase and once between ideas. Ask which sounded fluent.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the translation trap
  L.compare({
    sec: SEC.con, title: "The translation trap",
    sub: "This is why you stop. It is not vocabulary and it is not grammar.",
    left: { h: "What you do now — 4 steps", items: ["1.  Have the idea in Amharic or Oromo", "2.  Find the Amharic or Oromo words", "3.  Translate each word into English", "4.  Fix the English word order", "→  Four steps. Far too slow."] },
    right: { h: "What fluent speakers do — 2 steps", items: ["1.  Have the idea", "2.  Say it in English", "", "→  Two steps.", "The idea goes STRAIGHT to English.", "No first language in the middle."] },
    note: "You cannot translate fast enough to be fluent. Nobody can. The route has to change, not the speed.",
    notes: tn({
      time: "14 minutes. This is the most important slide in the module.",
      how: "Draw both routes on the board as arrows. The visual makes it obvious that the problem is structural, not a lack of effort.",
      mistakes: "Learners believe they translate because their English is weak, so they study more vocabulary and stay just as slow. Translation is a habit, and habits are broken by practice under time pressure, not by more study.",
      extra: "You cannot stop translating by deciding to. You stop by speaking so fast that there is no time to translate — which is why every activity in this module is timed.",
      tip: "Learners already have hundreds of English chunks that come out without translation: “How are you?”, “Thank you”, “Excuse me”. Point that out. The route already exists; it just needs widening.",
      activity: "Straight to English: name an object and have learners say a sentence about it within two seconds. The time limit blocks translation.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — chunks
  L.panelSide({
    sec: SEC.con, title: "Chunks — stop building every sentence from zero", sub: "Learn phrases, not single words.",
    panelW: 6.9,
    panel: { label: "Twelve chunks worth more than 200 words", color: C.green, tint: C.readTint, size: 17, lsm: 1.36,
      text: "I'd like to …            I'm not sure, but …\nWould you mind …?     As far as I know …\nI was wondering …      It depends on …\nThe thing is …            To be honest …\nWhat I mean is …        In my opinion …\nI'd rather …                It turns out that …" },
    side: { label: "Why chunks make you fluent", color: C.green, size: 16, items: [
      "You say them as ONE unit — no building, no grammar decisions.",
      "They come out at full speed, like “How are you?” already does.",
      "They buy you a second to plan the rest of the sentence.",
      "The grammar inside them is always correct, because you never assemble it.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Drill these as whole sounds, not as grammar. “I was wondering” must come out in one piece, the way “Excuse me” already does. Chorus each one five times at speed.",
      mistakes: "Learners want to analyse the grammar inside a chunk — “why is it wondering?” Postpone that. Analysis at this stage slows the chunk down and defeats its purpose.",
      extra: "Note what “The thing is…” and “To be honest…” actually do: they give you a full second of thinking time while sounding completely natural.",
      tip: "Twelve chunks used automatically will do more for a learner's fluency this month than two hundred new words. Say that plainly.",
      activity: "Chunk race: call out a situation and learners must respond starting with one of the twelve chunks, within two seconds.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — thinking time
  L.table({
    sec: SEC.con, title: "Buying thinking time — in English, not in silence",
    sub: "Silence sounds like failure. These sound like thinking.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [3.9, 3.6, 4.633],
      rows: [
        ["Say this", "It buys you", "When to use it"],
        ["“Well…”  ·  “Right…”", "half a second", "before almost any answer"],
        ["“Let me think for a second.”", "two or three seconds", "a question you were not expecting"],
        ["“That's a good question.”", "two seconds", "an interview or a meeting"],
        ["“How can I put this…”", "two seconds", "something difficult to say"],
      ],
    },
    note: "Native speakers do this constantly. It is not a trick and it is not cheating — it is how real conversation works.",
    notes: tn({
      time: "12 minutes.",
      how: "Contrast the two versions yourself. Ask a question, stay silent for three seconds, then answer. Then ask another, say “That's a good question”, pause the same three seconds, and answer. The second sounds confident; the first sounds stuck.",
      mistakes: "Learners fill silence with “eh”, “mmm” or a word from their own language, which instantly signals struggle. Replacing those with English fillers changes how the listener judges them.",
      extra: "Add: “I suppose…”, “Actually…”, “You know…”. All are natural and all buy time.",
      tip: "This is the highest-value slide for job interviews, which is Module 7. Flag it forward now.",
      activity: "Never be silent: fire quick questions at learners. They must begin answering within one second, using a filler if needed.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — repair
  L.compare({
    sec: SEC.con, title: "Repair — fixing a mistake without losing the sentence",
    sub: "Fluent speakers make mistakes constantly. You never notice, because they repair.",
    left: { h: "Restarting — sounds broken", items: ["“I go to… no, sorry.”", "“I… sorry, let me start again.”", "“Yesterday I go— …”", "( long silence )", "The listener loses the thread.", "You lose your confidence."] },
    right: { h: "Repairing — sounds fluent", items: ["“I go— I went there yesterday.”", "“She don't— she doesn't work here.”", "“It's on Monday, sorry, Tuesday.”", "“…or rather, on Tuesday.”", "The sentence keeps moving.", "Nobody notices."] },
    note: "Repair words:  “sorry”  ·  “I mean”  ·  “or rather”  ·  “that is”.  Say the correction and keep going. Do not apologise twice.",
    notes: tn({
      time: "13 minutes.",
      how: "Model it repeatedly in your own speech for the rest of the module: make a small error on purpose, repair it in the same breath, and carry on. Learners copy what they see far more than what they are told.",
      mistakes: "Over-apologising. One “sorry” is natural; three makes a small slip into an event.",
      extra: "“I mean” is the most useful repair word in English and works for words, facts and whole ideas.",
      tip: "The rule is: correct it inside the sentence, never outside it. Restarting is what makes a speaker sound weak, not the original error.",
      activity: "Deliberate error: learners speak for thirty seconds and must make and repair at least two errors without stopping.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — fluency vs accuracy
  L.panelSide({
    sec: SEC.con, title: "Fluency or accuracy? Both — but not at the same moment", sub: "Trying to do both at once is why you freeze.",
    panelW: 6.6,
    panel: { label: "Two different jobs", color: C.green, tint: C.readTint, size: 18, lsm: 1.44,
      text: "SPEAKING TIME\nGoal: keep going.\nMistakes: ignore them.\nRepair only, never restart.\n\nCHECKING TIME\nGoal: get it right.\nGo slowly. Correct everything.\nThis is Module 3's job." },
    side: { label: "When each one applies", color: C.green, size: 16, items: [
      "Conversation, meetings, interviews → fluency. Nobody is marking you.",
      "Writing, exams, documents → accuracy. You have time, so use it.",
      "In class: speaking activities are fluency time. Written exercises are accuracy time.",
      "Trying to be perfect while speaking produces silence, not correctness.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Be explicit about your own correction policy: during a speaking activity you will not interrupt, and you will give feedback afterwards. Learners speak far more freely once they know they will not be stopped.",
      mistakes: "Teachers correcting every error during fluency work is the commonest way to destroy fluency in a classroom. Note the errors and deal with them at the end.",
      extra: "Both matter. This module builds fluency; Module 3 rebuilds accuracy on top of it. Neither is optional.",
      tip: "Tell learners which mode every activity is in, every time. The ambiguity is what causes the freezing.",
      activity: "Name the mode: before each activity for the rest of the level, say “this is fluency time” or “this is accuracy time”.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "actually", ipa: "/ˈæktʃuəli/", pos: "adverb", icon: "FaExclamation",
      meaning: "In fact. Used to correct something, or to say something surprising.",
      example: "It looks expensive, but actually it is quite cheap.",
      mistake: "It does NOT mean “now” or “currently”. That is a false friend from other languages. “Actually I work here” means “in fact”, not “at the moment”.",
      notes: tn({ time: "7 minutes.",
        how: "The false-friend warning is the whole lesson here. In French, Spanish, Amharic-influenced English and many others the similar word means “currently”, and the error survives to advanced level.",
        mistakes: "“Actually I am working in Adama” to mean “at the moment”. The correct word is “currently” or “at the moment”.",
        extra: "Four syllables: AC-tu-al-ly, stress on the first. Often reduced to three in fast speech.",
        tip: "“Actually” is also a first-class filler — it buys half a second and sounds completely natural.",
        activity: "Correct me: make five wrong statements about the class and have learners correct each with “Actually, …”" }) },

    { word: "anyway", ipa: "/ˈeniweɪ/", pos: "adverb", icon: "FaExchangeAlt",
      meaning: "Used to return to the main point after going off it, or to close a topic.",
      example: "…anyway, as I was saying, the meeting is on Friday.",
      mistake: "One word, not two. And “anyways” is very informal — avoid it at work.",
      notes: tn({ time: "6 minutes.",
        how: "Teach it as a navigation word. It tells the listener “I am returning to the main point”, which is exactly what a speaker needs after a digression.",
        mistakes: "Learners never use it and so cannot get back to their point after wandering. It is one of the most useful discourse words in English.",
        extra: "“Anyway” also closes a conversation politely: “Anyway, I should go. Nice to see you.”",
        tip: "Pair it with “as I was saying”. Together they recover any lost thread in a meeting.",
        activity: "Wander and return: learners speak, deliberately go off topic, then return using “Anyway, as I was saying…”" }) },

    { word: "probably", ipa: "/ˈprɒbəbli/", pos: "adverb", icon: "FaPercent",
      meaning: "Very likely, but not certain. About 80% sure.",
      example: "He is probably at the office. It will probably rain.",
      mistake: "Position: BEFORE the main verb, but AFTER “be”. “He probably works there” but “He is probably tired”.",
      notes: tn({ time: "7 minutes.",
        how: "The position rule catches almost everyone. Write both patterns on the board and drill them separately — this same rule governs always, often, never and usually.",
        mistakes: "“He works probably there” is a word-order transfer error and is very persistent.",
        extra: "The certainty scale: definitely (100%) · probably (80%) · maybe / perhaps (50%) · probably not (20%) · definitely not (0%).",
        tip: "Hedging words like this are what make an intermediate speaker sound careful rather than blunt. They matter at work.",
        activity: "How sure are you? Make ten statements and have learners restate each with the right certainty word." }) },

    { word: "although", ipa: "/ɔːlˈðəʊ/", pos: "conjunction", icon: "FaBalanceScale",
      meaning: "Despite the fact that. Joins two opposite ideas.",
      example: "Although it was raining, we walked. The room is small, although it is comfortable.",
      mistake: "Never use “but” in the same sentence. “Although it was late, BUT we went” is wrong — choose one.",
      notes: tn({ time: "7 minutes.",
        how: "The double-marking error is a direct transfer pattern and it is extremely common. Write the wrong version on the board, cross out the “but”, and repeat it three times.",
        mistakes: "Although + but in one sentence. Also the /ð/ sound in the middle, which is one of the six target sounds from Level 1.",
        extra: "“Though” means the same and is more informal. It can also go at the end: “It's small. It's comfortable, though.”",
        tip: "“Although” at the start of a sentence needs a comma before the second half. No comma when it comes in the middle.",
        activity: "One word only: give ten sentences containing both although and but, and have learners delete the wrong one." }) },

    { word: "instead", ipa: "/ɪnˈsted/", pos: "adverb", icon: "FaRandom",
      meaning: "In place of that. Doing a different thing.",
      example: "The bus was full, so I walked instead. Let's meet on Tuesday instead of Monday.",
      mistake: "“Instead of” + noun or -ing.  “Instead” ALONE goes at the end of the sentence. Do not say “instead of walk”.",
      notes: tn({ time: "7 minutes.",
        how: "Two patterns, taught separately: “instead” at the end alone, and “instead of” followed by a noun or an -ing form.",
        mistakes: "“Instead of walk” — after “of” you need “walking”. This is the same -ing rule that follows every preposition in English.",
        extra: "instead of going · instead of the bus · instead of him. And alone: “I walked instead.”",
        tip: "This word is essential for talking about plans that changed, which comes up constantly in work English.",
        activity: "Plan B: give five situations where the first plan failed and have learners say what they did instead, using both patterns." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Fluency Language 1 of 5" }),
    title: "Chunk frames — say the start, then fill the end",
    sub: "The first half is automatic. That gives you time to plan the second half.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [4.2, 3.4, 4.533],
      rows: [
        ["The frame", "What follows", "Example"],
        ["I'd like to …", "base verb", "I'd like to ask a question."],
        ["Would you mind …?", "verb + ing", "Would you mind waiting?"],
        ["I was wondering if …", "you could / we could", "I was wondering if you could help."],
        ["It depends on …", "noun or verb + ing", "It depends on the weather."],
      ],
    },
    note: "Learn the frame as ONE sound. Never assemble “would”, “you”, “mind” separately — that is the slow route again.",
    notes: tn({
      time: "13 minutes.",
      how: "Drill the frame alone first, twenty times at speed, before adding any ending. The frame must be automatic before it is useful.",
      mistakes: "“Would you mind to wait” — after “mind” English needs the -ing form. Teach it as part of the chunk rather than as a rule.",
      extra: "“I was wondering if…” is the politest request form in English and it is worth its weight in gold at work.",
      tip: "Frames are how fluent speakers actually operate. Nobody builds “would you mind” from grammar rules in real time — there is not enough time.",
      activity: "Frame drill: call out an ending and learners must attach the right frame within two seconds.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Fluency Language 2 of 5" }),
    title: "Fillers — the English sounds of thinking",
    sub: "Not laziness. Every fluent speaker uses these constantly.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [3.4, 4.2, 4.533],
      rows: [
        ["Filler", "What it signals", "Example"],
        ["Well, …", "I am starting my answer", "Well, it depends."],
        ["Actually, …", "a correction or a surprise", "Actually, I think you're right."],
        ["You know, …", "we share this idea", "It's expensive, you know."],
        ["I mean, …", "I am explaining or repairing", "I mean, it's not far."],
        ["Sort of  ·  kind of", "approximately, not exactly", "It's sort of complicated."],
      ],
    },
    note: "These are not filler in the bad sense. They are signposts telling the listener what is coming — and they buy you time while doing it.",
    notes: tn({
      time: "12 minutes.",
      how: "Point out that these carry real meaning as well as buying time, which is why they never sound empty when used correctly.",
      mistakes: "Over-use. Three “you know”s in one sentence is a habit worth avoiding. One per sentence is natural.",
      extra: "In English the hesitation sound is “er” or “um”. Sounds from a first language mark you instantly as translating.",
      tip: "Give learners permission to use these. Many were taught that fillers are bad English, which leaves them with silence as their only option.",
      activity: "Filler swap: learners speak for thirty seconds and must replace every silence with an English filler.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Fluency Language 3 of 5" }),
    title: "Repair words — correcting inside the sentence",
    sub: "Four words. They keep the sentence alive.",
    table: {
      color: C.gram, rowH: 0.52, fontSize: 17.5, headSize: 16, colW: [2.8, 4.0, 5.333],
      rows: [
        ["Word", "Use it to fix", "Example"],
        ["I mean", "a word or a whole idea", "It's on Monday — I mean Tuesday."],
        ["or rather", "make something more precise", "He's a manager, or rather a director."],
        ["sorry", "any quick slip", "She don't— sorry, she doesn't work here."],
        ["that is", "explain what you just said", "Next week, that is, after the holiday."],
      ],
    },
    note: "Say the repair and keep going in the SAME breath. Do not stop, do not apologise twice, do not start the sentence again.",
    notes: tn({
      time: "12 minutes.",
      how: "Practise the rhythm rather than the words. The repair must happen inside the flow of speech, and that is a timing skill, not a vocabulary one.",
      mistakes: "Stopping completely to apologise. That turns a half-second slip into a five-second break and undoes all the fluency work.",
      extra: "“Or rather” is the most sophisticated of the four and makes a speaker sound genuinely advanced.",
      tip: "Model this in your own English constantly. Learners will copy the behaviour long before they remember the rule.",
      activity: "Repair chain: learners speak while a partner signals an error by tapping the desk. They must repair without stopping.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Fluency Language 4 of 5" }),
    title: "Softening — sounding careful, not blunt",
    sub: "Direct English can sound rude to English ears. These words fix it.",
    left: { h: "Blunt — often sounds rude", items: ["That's wrong.", "I don't like it.", "You are late.", "No.", "It's expensive.", "I disagree."] },
    right: { h: "Softened — sounds professional", items: ["I'm not sure that's right.", "It's not really my kind of thing.", "I think you might be a bit late.", "I'm afraid not.", "It's a bit expensive.", "I see what you mean, but…"] },
    note: "“a bit”  ·  “I think”  ·  “might”  ·  “I'm afraid”  ·  “not really”.  Five softeners that work almost everywhere.",
    notes: tn({
      time: "14 minutes.",
      how: "This is a cultural point as much as a language one. Direct translation from Amharic or Oromo can land as blunt in English, and speakers are judged on it without ever being told.",
      mistakes: "Learners think softening is dishonest or weak. Explain that in English it signals respect for the other person, not uncertainty about the fact.",
      extra: "“I'm afraid” has nothing to do with fear. It means “I am sorry to tell you” and is standard in professional English.",
      tip: "This slide matters enormously for Modules 5 and 7 — meetings and interviews. Flag it forward.",
      activity: "Soften it: give ten blunt sentences and have learners soften each one.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Fluency Language 5 of 5" }),
    title: "Put it all together — the five fluency habits", sub: "None of them is grammar. All of them are practice.",
    color: C.gram, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Start speaking within one second", d: "Use a filler if you must. Silence is the enemy, not error." },
      { t: "Use a chunk instead of building from zero", d: "Twelve frames cover most of what you need to say." },
      { t: "Never stop for a missing word — go around it", d: "“The thing you cook with” is fine. The listener understands." },
      { t: "Repair inside the sentence, never restart", d: "“I go— I went.” Then keep moving." },
      { t: "Finish the sentence, whatever happens", d: "An imperfect finished sentence beats a perfect abandoned one." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Habit 3 deserves its own demonstration. Describing a word you cannot remember — “the thing you cook with” — is a real strategy called paraphrase, and it prevents most conversation breakdowns.",
      mistakes: "Learners stop dead at a missing noun. Show that a five-word description costs one second and keeps the conversation alive.",
      extra: "Paraphrase openers: “the thing you use for…”, “a kind of…”, “it's like a…”, “the person who…”.",
      tip: "Print these five habits as a card. They are the whole module and they fit on one side of paper.",
      activity: "Go around it: name ten objects learners do not know the English for and have them describe each in one sentence.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — keep going or stop?", sub: "What should the speaker do?", items: [
      { q: "You cannot remember the word “screwdriver” mid-sentence. What do you do?", a: "Describe it: “the thing you use to fix things with”.", why: "Paraphrase costs one second. Stopping to search your memory costs ten and often fails anyway." },
      { q: "You said “I go” but meant “I went”. What do you do?", a: "“I go— I went there yesterday.” Repair and continue.", why: "The repair takes half a second and the listener barely registers it. A full restart is what sounds broken." },
      { q: "You are asked a question you were not expecting. What do you say first?", a: "“That's a good question — let me think for a second.”", why: "It buys three seconds and sounds confident. Silence for the same three seconds sounds stuck." },
    ] },
    { title: "Guided examples 2 — chunk or build?", sub: "Which is faster?", items: [
      { q: "You want to ask somebody politely to wait. Build it or chunk it?", a: "Chunk: “Would you mind waiting?”", why: "Said as one unit, it comes out instantly and the grammar inside is automatically right." },
      { q: "Why is “Would you mind to wait” wrong?", a: "After “mind” English uses the -ing form: waiting.", why: "Learn the chunk whole and this error never occurs. Building from rules is what produces it." },
      { q: "You need a second to think before a request. Which frame?", a: "“I was wondering if you could…”", why: "It is polite and long, and its length is the point — it buys you a full second of planning time." },
    ] },
    { title: "Guided examples 3 — word order with adverbs", sub: "Where does “probably” go?", items: [
      { q: "“He ___ works in Adama.”  Where does “probably” go?", a: "He probably works in Adama.", why: "Before the main verb. This is the same position as always, often, never and usually." },
      { q: "“He ___ tired.”  Where does “probably” go?", a: "He is probably tired.", why: "AFTER the verb “be”. “Be” is the exception to the rule, and it always has been." },
      { q: "Why is “He works probably there” wrong?", a: "The adverb cannot come between the verb and its place.", why: "This is a word-order transfer error and it is very persistent. Drill the two correct patterns instead of explaining." },
    ] },
    { title: "Guided examples 4 — although and but", sub: "Choose ONE, never both.", items: [
      { q: "“Although it was raining, but we went out.” What is wrong?", a: "Remove “but”: “Although it was raining, we went out.”", why: "Both words mark the same contrast. English allows only one of them per sentence." },
      { q: "Can you write it with “but” instead?", a: "Yes: “It was raining, but we went out.”", why: "Same meaning. “Although” goes at the start of the first half; “but” goes between the two halves." },
      { q: "Which sounds more formal?", a: "“Although.”", why: "It is preferred in writing and in professional speech. “But” is fine everywhere but is less formal." },
    ] },
    { title: "Guided examples 5 — softening", sub: "Same fact. Different effect.", items: [
      { q: "Your colleague's report has an error. “That's wrong” — is that acceptable?", a: "No. Say “I'm not sure that's quite right.”", why: "Same information, but it leaves the person room to respond. Blunt correction damages working relationships in English-speaking settings." },
      { q: "Somebody asks you to work on Sunday and you cannot. What do you say?", a: "“I'm afraid I can't, sorry.”", why: "“I'm afraid” means “I am sorry to tell you”. It is the standard professional refusal and has nothing to do with fear." },
      { q: "Is softening dishonest?", a: "No — the fact does not change, only the delivery.", why: "In English, softening signals respect for the other person. Directness without it is often heard as aggression." },
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
    title: "A fluent conversation — watch the chunks",
    sub: "Yonas and Bethlehem talk about a job. Every chunk is doing work.",
    turns: [
      { who: "YONAS", text: "So, how's the new job going?", side: "l" },
      { who: "BETHLEHEM", text: "Well, it's going quite well, actually. Busier than I expected.", side: "r" },
      { who: "YONAS", text: "I was wondering — do you have to work at weekends?", side: "l" },
      { who: "BETHLEHEM", text: "Sometimes. It depends on the month. December is the worst.", side: "r" },
      { who: "YONAS", text: "That sounds tough. Although the pay is good, I suppose?", side: "l" },
      { who: "BETHLEHEM", text: "To be honest, it's not bad. I'd rather have the experience anyway.", side: "r" },
    ],
    note: "Count them: Well · actually · I was wondering · It depends on · Although · To be honest · I'd rather · anyway.  Eight chunks in six lines.",
    notes: tn({
      time: "14 minutes.",
      how: "Read it once, then have learners underline every chunk from slides 7, 17 and 16. Seeing eight of them in six natural lines proves the point better than any argument.",
      mistakes: "Learners assume this is unusually chunky. It is not — it is ordinary conversational English. Real speech is mostly prefabricated.",
      extra: "Note that Bethlehem never builds a complex sentence from zero. Every turn starts with a ready-made opener.",
      tip: "Have pairs perform it twice, the second time at full natural speed. Speed is what makes the chunks feel automatic.",
      activity: "Chunk count: learners write their own six-line dialogue containing at least five chunks.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Repair and thinking time in action",
    sub: "Chaltu is asked something difficult. Watch what she does.",
    turns: [
      { who: "MANAGER", text: "Chaltu, why was the report late?", side: "r" },
      { who: "CHALTU", text: "Well… that's a fair question. Let me explain.", side: "l" },
      { who: "MANAGER", text: "Please do.", side: "r" },
      { who: "CHALTU", text: "We got the numbers on Monday — I mean Tuesday, sorry. So we lost a day.", side: "l" },
      { who: "MANAGER", text: "I see. And next month?", side: "r" },
      { who: "CHALTU", text: "It should be fine, although I'd rather get the numbers earlier if possible.", side: "l" },
    ],
    note: "Chaltu buys time, repairs a mistake mid-sentence, and softens a request — all without stopping once.",
    notes: tn({
      time: "13 minutes.",
      how: "This is a pressure situation, which is where fluency actually matters. Ask what Chaltu does in each turn and name the technique.",
      mistakes: "Her repair — “Monday — I mean Tuesday, sorry” — is exactly the right length. Point out that she does not restart the sentence.",
      extra: "Her last line makes a request without demanding: “I'd rather… if possible”. That is Module 5 workplace English arriving early.",
      tip: "Being questioned by a manager is where learners freeze most. Rehearsing it in class removes much of the fear.",
      activity: "Under pressure: ask learners a difficult question and require them to begin within one second, using a time-buying phrase.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Phrases that keep you speaking",
    sub: "Six phrases. All of them buy time or recover a lost thread.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaClock", title: "“Let me think for a second.”", desc: "Buys three seconds and sounds confident." },
      { icon: "FaCommentDots", title: "“What I mean is…”", desc: "Restart an explanation without restarting the sentence." },
      { icon: "FaExchangeAlt", title: "“Anyway, as I was saying…”", desc: "Recovers the main point after a digression." },
      { icon: "FaSearch", title: "“What's the word…”", desc: "Says the word is missing while you keep talking." },
      { icon: "FaHandPaper", title: "“How can I put this…”", desc: "For something difficult or sensitive." },
      { icon: "FaQuestion", title: "“Do you know what I mean?”", desc: "Checks the listener and buys a second." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Drill all six in chorus at speed. They must come out automatically, because the moment you need them is the moment you have no spare thinking capacity.",
      mistakes: "Learners save these for emergencies and so never make them automatic. They should be used in every conversation, not only in difficulty.",
      extra: "Phrase 4 is very useful: saying “what's the word…” keeps you talking while you search, instead of going silent.",
      tip: "Phrase 3 is the one nobody has. Without it, a learner who wanders off topic simply never gets back.",
      activity: "Six in a row: learners hold a two-minute conversation and must use all six phrases at least once.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap with a chunk. Answers are in the Answer Key.",
    turns: [
      { who: "A", text: "How's the course going?", side: "l" },
      { who: "YOU", text: "______ , it's going well ______ . Harder than I expected.", side: "r" },
      { who: "A", text: "Do you have much homework?", side: "l" },
      { who: "YOU", text: "It ______ the week. Some weeks are quiet.", side: "r" },
      { who: "A", text: "And are you enjoying it?", side: "l" },
      { who: "YOU", text: "______ , yes. ______ I'd rather have more speaking practice.", side: "r" },
    ],
    note: "Use these:  “Well”  ·  “actually”  ·  “depends on”  ·  “To be honest”  ·  “Although”",
    notes: tn({
      time: "10 minutes.",
      how: "Three minutes to fill the gaps, then three pairs perform. Insist the second performance is at natural speed.",
      answers: "1 Well · 2 actually · 3 depends on · 4 To be honest · 5 Although",
      mistakes: "Learners fill the gaps correctly but then read slowly. The chunks only work at speed — make them perform it twice.",
      tip: "Gap 5 could also be “though” at the end of the sentence. Accept it and praise it — it is a more advanced choice.",
      activity: "Do it again about a different topic, keeping all five chunks.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — no stopping allowed", sub: "Four rounds. The rule is the same in all four: do not stop.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Speak for 60 seconds about your work or studies", d: "Your partner times you and counts every full stop of more than 3 seconds." },
      { t: "Same again, but you must use four chunks", d: "Your partner ticks each chunk as it appears." },
      { t: "Your partner interrupts with questions. Do not lose the thread.", d: "Use “Anyway, as I was saying…” to recover." },
      { t: "Speak for 60 seconds, making two deliberate errors", d: "Repair both without stopping. Your partner checks." },
    ],
    notes: tn({
      time: "14 minutes for all four rounds.",
      how: "Round 1 sets the baseline and round 4 shows the improvement. Record the pause count each round and read the numbers out at the end.",
      mistakes: "Partners correct grammar during the rounds. Forbid that explicitly — this is fluency time, and correcting destroys it.",
      tip: "Round 3 is the hardest and the most realistic. Real conversations interrupt constantly, and recovering the thread is a genuine skill.",
      activity: "Pause count: write the class average pause count on the board after round 1 and again after round 4.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the 60-second challenge", sub: "The core activity of this module. Do it every lesson.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Choose a topic you know well", d: "Your work, your town, your family, your studies." },
      { t: "Speak for 60 seconds without stopping", d: "Fillers are allowed. Silence over 3 seconds is not." },
      { t: "Your partner counts long pauses", d: "Write the number down. That is your score." },
      { t: "Do it again on the SAME topic", d: "The second attempt is always better. Always." },
      { t: "Compare your two scores", d: "The drop between attempt 1 and attempt 2 is the point of the exercise." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Step 4 is what makes this work. Repeating the same topic frees the speaker from planning content, so all their attention goes to delivery — and the improvement is immediate and visible.",
      mistakes: "Changing the topic between attempts. That removes the whole effect. Same topic, same speaker, twice.",
      extra: "This technique is called the 4/3/2 method: speak for four minutes, then three, then two on the same topic. Fluency rises each time.",
      tip: "Do this at the start of every Level 3 lesson. Five minutes a day beats an hour once a week.",
      activity: "Track the scores across the module. Learners seeing their own pause count fall is the strongest motivation available.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — go around the word", sub: "You will never know every word. Learn to work without it.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Your partner names an object. Describe it without its name.", d: "“It's the thing you use for…”" },
      { t: "Describe a job without naming it", d: "“It's a person who…” Your partner guesses." },
      { t: "Explain a word from this module without saying it", d: "actually · anyway · probably · although · instead." },
      { t: "Describe something from your work in three sentences", d: "Assume your partner knows nothing about it." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "This is paraphrase practice and it is the most practical fluency skill there is. Nobody ever knows every word, in any language.",
      mistakes: "Learners give up and say the word in Amharic or Oromo. Forbid it — the whole exercise is about staying in English.",
      extra: "The four openers: “the thing you use for…” · “a person who…” · “it's like a…” · “it's a kind of…”",
      tip: "Task 4 is real work English. Explaining your own job to somebody outside it is an interview skill and a meeting skill both.",
      activity: "Twenty objects: fast rounds, ten seconds each. Speed is what builds the reflex.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — where to pause",
    sub: "Pause between ideas. Never inside a phrase.",
    left: { h: "Wrong — pausing inside phrases", items: ["“I went to the… market with… my”", "“She works… in a… big office in”", "“Although it… was raining we…”", "→ Sounds broken, even when slow."] },
    right: { h: "Right — pausing between ideas", items: ["“I went to the market  /  with my sister.”", "“She works in a big office  /  in Bole.”", "“Although it was raining,  /  we went out.”", "→ Sounds fluent, even when slow."] },
    note: "You do not have to speak faster. You have to pause in different places. Same speed, completely different effect.",
    notes: tn({
      time: "13 minutes.",
      how: "Read both columns aloud at exactly the same speed. Learners hear that fluency is about pause placement, not about pace — which is a genuine relief to slower speakers.",
      mistakes: "Learners pause where they run out of plan, which is mid-phrase. Teaching them to plan one idea ahead fixes it.",
      extra: "The natural units are: subject + verb / place / time. “I went to the market / with my sister / on Saturday.”",
      tip: "This slide helps slow speakers enormously. It tells them they can stay slow and still sound fluent.",
      activity: "Mark the pauses: give a printed paragraph and have learners mark where they would pause, then read it aloud.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — chunk under pressure", sub: "In pairs. Two seconds to respond. No more.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Ask your partner politely to close the door", d: "Use “Would you mind…?”" },
      { t: "Ask for help with something at work", d: "Use “I was wondering if you could…”" },
      { t: "Say you are not certain about something", d: "Use “I'm not sure, but…” or “As far as I know…”" },
      { t: "Disagree with your partner politely", d: "Use “I see what you mean, but…”" },
      { t: "Say something honest that is hard to say", d: "Use “To be honest…”" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "The two-second limit is the teaching. It makes translation impossible and forces the chunk to be retrieved whole.",
      mistakes: "Learners exceed the limit and construct the sentence. Enforce the two seconds strictly — the pressure is the method.",
      extra: "Run each round twice. The second time is faster and that is exactly the effect you are training.",
      tip: "Task 4 — polite disagreement — is the single most valuable phrase for meetings. It comes back in Module 5.",
      activity: "Speed round: all five tasks in ninety seconds, then repeat in sixty.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this. Keep it — you will compare it in Module 8.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Speak for 60 seconds about your work or studies", d: "No stopping. Fillers allowed." },
      { t: "Use at least four chunks from slide 7", d: "Say which four afterwards." },
      { t: "Make and repair one deliberate mistake", d: "“I go— I went.” Do not restart." },
      { t: "Use one time-buying phrase", d: "“Let me think for a second.”" },
      { t: "Say one thing about your English that has improved", d: "Use “although” or “instead” correctly." },
    ],
    notes: tn({
      time: "15 minutes including listening back.",
      how: "This is the Level 3 baseline recording. Store it carefully — the Module 8 comparison is the strongest evidence of progress in the whole level.",
      mistakes: "Step 3 feels artificial and learners resist it. Insist: rehearsing repair is what makes it automatic when a real error happens.",
      answers: "SUCCESS CRITERIA: 60 seconds with no silence over 3 seconds · four identifiable chunks · one repair inside a sentence · one time-buying phrase · one correct use of although or instead.",
      tip: "Count the long pauses in this recording and write the number on the learner's sheet. It is the number you will beat in Module 8.",
      activity: "Keep every recording for the Level 3 comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — fluent speech is full of chunks", sub: "Listen twice. Count the chunks, not the words.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads at natural speed", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.32,
      text: "“Well, to be honest, the first year was hard.\nI mean, I could read English quite well,\nbut speaking was — how can I put this —\nit was almost impossible. I'd start a sentence\nand then, you know, just stop.\n\nAnyway, what changed was that I stopped\ntranslating. It depends on the person, I suppose,\nbut for me that was the thing.”" },
    side: { label: "Your task", color: C.listen, size: 16, items: [
      "Count the chunks you hear.",
      "What was easy for the speaker?",
      "What was almost impossible?",
      "What changed for them?",
      "Find one time-buying phrase.",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "Read at genuinely natural speed. Then read it again while learners raise a hand at every chunk. There are eight.",
      mistakes: "Learners think this speaker sounds hesitant. Ask whether they sound fluent — they do, and the hesitation devices are exactly why.",
      extra: "“How can I put this” appears mid-sentence, inside dashes. That is very natural placement and worth pointing out.",
      answers: "Eight chunks: Well · to be honest · I mean · how can I put this · you know · Anyway · It depends on · I suppose.  Reading was easy · speaking was almost impossible · they stopped translating.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Hesitation devices are what make this sound fluent.",
    size: 17,
    items: [
      { q: "1 — how many chunks?", a: "Eight.", why: "Well · to be honest · I mean · how can I put this · you know · Anyway · It depends on · I suppose." },
      { q: "2 — what was easy?", a: "Reading English.", why: "A very common pattern: reading develops fastest because it has no time pressure." },
      { q: "3 — what was almost impossible?", a: "Speaking.", why: "Speaking is the only skill with no thinking time, which is why it lags behind the other three." },
      { q: "4 — what changed?", a: "They stopped translating in their head.", why: "The same point as slide 6. It is the change that matters most and it is a habit, not knowledge." },
      { q: "5 — a time-buying phrase", a: "“How can I put this” — or “I suppose”.", why: "Both buy about two seconds while sounding thoughtful rather than stuck." },
    ],
    notes: keyNotes("Ask whether the speaker sounded fluent or hesitant. Most learners say fluent — then show that the passage contains eight hesitation devices. That contradiction is the lesson."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — an interview answer", sub: "Listen for time-buying, softening and repair.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.3,
      text: "INTERVIEWER:  Why did you leave your last job?\n\nTOLOSA:  That's a fair question. Well, I was there\nfor three years — I mean nearly four — and I'd\nlearned a lot. But the company was quite small,\nso there wasn't really anywhere to go.\n\nI'd rather work somewhere I can keep growing.\nAlthough I enjoyed it, I felt it was time." },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. How long was Tolosa there?",
      "2. What did he repair, and how?",
      "3. Why did he leave?",
      "4. Find one softening word.",
      "5. Does he say anything negative about the company?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Question 5 is the important one. Tolosa gives a real reason for leaving without criticising anyone — that is an interview skill and it comes back in Module 7.",
      mistakes: "Learners hear “the company was quite small” as criticism. It is a fact with a softener attached, which is precisely the technique.",
      extra: "“I'd rather work somewhere I can keep growing” is a model answer to this question. Have learners write their own version.",
      answers: "1 Nearly four years. · 2 “three years — I mean nearly four”, repaired inside the sentence. · 3 No room to grow in a small company. · 4 “quite”, “really”, “I'd rather”. · 5 No — he states a fact and softens it.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Everything Tolosa does here is deliberate.",
    size: 16.5,
    items: [
      { q: "1 — how long?", a: "Nearly four years.", why: "He first said three, then corrected himself. The corrected figure is the right answer." },
      { q: "2 — the repair", a: "“three years — I mean nearly four”.", why: "Inside the sentence, using “I mean”, with no restart and no second apology." },
      { q: "3 — why did he leave?", a: "The company was small, so there was nowhere to progress.", why: "A real reason, stated as a fact about the situation rather than a complaint about people." },
      { q: "4 — a softening word", a: "“quite” · “really” · “I'd rather”.", why: "Each one lowers the force of the statement without changing its content." },
      { q: "5 — anything negative?", a: "No. He gives a reason without blaming anyone.", why: "Criticising a former employer is the commonest way to lose an interview. Tolosa avoids it while still answering honestly." },
    ],
    notes: keyNotes("Item 5 is the one to dwell on. Learners often believe honesty requires bluntness; this shows a full, honest answer that criticises nobody."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to practise fluency alone", sub: "You do not need a partner for any of these.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaStopwatch", title: "The 60-second habit", desc: "One topic, 60 seconds, out loud, every day. Then the same topic again. Five minutes total." },
      { icon: "FaRedo", title: "Shadowing", desc: "Play any English audio and speak along about one second behind. It trains rhythm and chunks at the same time." },
      { icon: "FaBrain", title: "Narrate your day silently", desc: "In English, in your head, as you do things. “I'm making coffee. I'll leave at eight.” This kills translation." },
      { icon: "FaMicrophone", title: "Record and count pauses", desc: "You cannot hear your own pauses while speaking. You can hear every one of them on a recording." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Shadowing is the most effective technique here and the least known. Demonstrate it for thirty seconds — learners need to see it to understand it.",
      mistakes: "Narrating in your head feels pointless, so learners skip it. It is the single best way to break the translation habit, because it removes the audience and the fear.",
      tip: "None of these needs a partner, a class or the internet. Learners with irregular schedules can still do all four.",
      activity: "Shadow together: play or read thirty seconds of English and have the whole class shadow it aloud.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — how one learner became fluent", sub: "Skim it in 30 seconds first. Then read it properly.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 16, lsm: 1.28,
      text: "MIMI'S FIRST YEAR\n\nMimi finished an English course three years ago with good marks. She could do every exercise in the book. But when a hotel guest asked her a simple question, she froze.\n\n“I knew the words,” she says. “I was building every sentence from nothing, in Amharic first.”\n\nHer teacher gave her twenty phrases and told her to use them until they were automatic. She practised while walking to work. Within two months the phrases started coming out before she had decided to say them.\n\n“I still make mistakes — more than before, actually, because now I say much more. But nobody minds.”" },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "Skim: what is this about?",
      "Why did Mimi freeze?",
      "What did her teacher tell her to do?",
      "How long did the change take?",
      "Does she make more or fewer mistakes now?",
      "Why does that not matter?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "The last paragraph is the important one. More mistakes and more communication is progress, not decline — and that is counter-intuitive to almost every learner.",
      mistakes: "Learners equate more errors with getting worse. Mimi makes more errors because she says three times as much. Make that arithmetic explicit.",
      extra: "“Something changed — the phrases started coming out before she had decided to say them.” That is exactly what automaticity feels like.",
      tip: "Ask whether anyone recognises Mimi's situation. Almost every hand goes up, and the recognition does more than the text does.",
      activity: "Your twenty phrases: learners choose twenty chunks from this module to make automatic over the next month.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Two are inference questions. Which two?",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence. Mark each answer D (direct) or I (inference).",
    items: [
      "Was Mimi bad at English when she finished her course?",
      "What was actually stopping her from speaking?",
      "Where did she practise her phrases?",
      "Why does she make more mistakes now than before?",
      "Is Mimi's English better or worse than three years ago?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Questions 1 and 5 are inferences. The text never says “she was good” or “her English is better” — both must be worked out.",
      mistakes: "Learners answer question 5 with “worse” because of the mistakes. Push them back to the evidence: she says much more, and nobody minds.",
      tip: "This revises the direct-versus-inference distinction from Level 2 Module 6, now applied to a harder text.",
      answers: "1 No — she had good marks and could do every exercise (I). · 2 Translating in her head (D). · 3 Walking to work (D). · 4 Because she says much more now (D). · 5 Better — she communicates far more (I).",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "The last answer is the point of the whole module.",
    size: 16.5,
    items: [
      { q: "1 — was she bad at English?", a: "No — good marks, every exercise correct. (Inference)", why: "The text never says “she was good”. You work it out from the marks and the exercises." },
      { q: "2 — what stopped her?", a: "Building every sentence in her head in Amharic first. (Direct)", why: "She says it herself. It is the translation trap from slide 6, in her own words." },
      { q: "3 — where did she practise?", a: "Walking to work. (Direct)", why: "No class, no partner, no materials. Fluency practice needs none of those." },
      { q: "4 — why more mistakes?", a: "Because she says much more now. (Direct)", why: "More output means more errors in total, even when the error RATE has fallen." },
      { q: "5 — better or worse?", a: "Better. She communicates far more, and nobody minds the errors. (Inference)", why: "This is the module's whole argument, and the text makes you reach it yourself." },
    ],
    notes: keyNotes("Question 4 is worth writing on the board as arithmetic: 5 errors in 20 words is worse than 8 errors in 100 words. Learners judge themselves on the wrong number."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — spoken English is not written English", sub: "Two versions of the same message.",
    panelW: 7.0,
    panel: { label: "Read both aloud", color: C.read, tint: C.readTint, size: 16, lsm: 1.3,
      text: "SPOKEN\n“Well, the thing is, we're a bit behind.\nI mean, it's not serious, but we'll probably\nneed another week. Would you mind if we\nmoved the meeting?”\n\nWRITTEN\n“We are slightly behind schedule and will\nrequire an additional week. Could we\npostpone the meeting to Friday?”" },
    side: { label: "What changed", color: C.read, size: 15.5, items: [
      "Spoken uses chunks and fillers. Written does not.",
      "Spoken repeats and softens. Written is compressed.",
      "Written uses longer words: require, additional, postpone.",
      "Written has no “Well”, no “I mean”, no “the thing is”.",
      "Both are correct — for their own medium.",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "Both versions are good English. The mistake is using the wrong one for the medium — spoken fillers in a report, or written formality in a conversation.",
      mistakes: "Learners write as they speak, filling emails with “well” and “you know”. Or they speak as they write and sound like a textbook.",
      extra: "The written version is about 40% shorter. Writing removes hesitation because the reader cannot see you thinking.",
      tip: "This previews Module 8, Reading and Writing for Work. Flag it forward.",
      activity: "Convert it: give three spoken sentences and have learners write the written equivalent, and the reverse.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "One message. Two correct forms.",
    size: 16.5,
    items: [
      { q: "1 — which is more correct?", a: "Neither. Each is right for its own medium.", why: "The spoken version in an email looks careless. The written version in conversation sounds cold and strange." },
      { q: "2 — three chunks in the spoken version", a: "“the thing is” · “I mean” · “Would you mind if…”", why: "All three buy time or soften. None of them survives into the written version, because writing needs neither." },
      { q: "3 — the formal words", a: "require · additional · postpone · slightly.", why: "Written English prefers single precise words where speech uses common ones plus a softener." },
      { q: "4 — which is shorter?", a: "The written version, by about 40%.", why: "Writing removes hesitation devices entirely, because the reader cannot see you thinking." },
      { q: "Vocabulary check", a: "actually · anyway · probably · although · instead", why: "All five belong to speech AND writing — which is why they were chosen for this module." },
    ],
    notes: keyNotes("Ask which version learners would send to a manager and which they would say to a colleague. That question makes the distinction practical rather than theoretical."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — although, instead, probably", sub: "Word order and word choice.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each sentence correctly.",
    items: [
      "1.  Although it was late, but we went out.",
      "2.  He works probably in Adama.",
      "3.  The bus was full so I took a taxi instead of.",
      "4.  Actually I am working in Bahir Dar this month.  (meaning: currently)",
      "5.  She is probably tired.  →  Is this correct?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Item 5 is deliberately already correct. Learners who “fix” it have not understood that “be” takes the adverb after it.",
      answers: "1 Although it was late, we went out. · 2 He probably works in Adama. · 3 …so I took a taxi instead. · 4 At the moment I am working in Bahir Dar. · 5 Correct — after “be”, the adverb follows.",
      mistakes: "Item 4 is the false-friend trap. “Actually” means “in fact”, never “currently”.",
      tip: "Include a correct sentence in every error-correction exercise from now on. It stops learners from changing things at random.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — spoken to written", sub: "Same message, different medium.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each spoken sentence as written English. Remove the fillers.",
    items: [
      "1.  “Well, the thing is, we're a bit behind.”",
      "2.  “I mean, we'll probably need another week or so.”",
      "3.  “Would you mind if we moved the meeting?”",
      "4.  “To be honest, it's not really working.”",
      "5.  “Anyway, I'd rather start again, if that's OK.”",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "The method: remove the filler, then replace the common word with a precise one. Two steps, applied every time.",
      answers: "1 We are slightly behind schedule. · 2 We will require approximately one additional week. · 3 Could we postpone the meeting? · 4 This approach is not proving effective. · 5 I would prefer to start again, if acceptable.",
      mistakes: "Learners keep “well” and “I mean” in the written version. Those belong to speech only and look careless in writing.",
      tip: "Point out that every written version is shorter. Compression is what makes writing look professional.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — your fluency plan", sub: "Write it down. A plan on paper gets done.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write six sentences. Use although, instead, probably and actually at least once each.",
    items: [
      "1.  What stops you speaking fluently now? Be specific.",
      "2.  Which five chunks from slide 7 will you make automatic first?",
      "3.  When exactly will you do your 60 seconds each day?",
      "4.  Which of the four solo techniques will you use?  (slide 40)",
      "5.  What will you do instead of stopping when a word is missing?",
      "6.  How will you measure whether it worked?",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Question 3 must be specific — a time and a place, not “every day”. Vague plans are not carried out.",
      answers: "MODEL for 6: “I will record 60 seconds now and again in Module 8, and count the long pauses in both. Although I will probably still make mistakes, the pauses should be fewer.”",
      mistakes: "Question 5 should name paraphrase: describing the word instead of stopping. Anyone who writes “look it up” has missed the point.",
      tip: "Collect these plans and hand them back at Module 8. Learners who wrote a specific time in question 3 will have done the practice.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answers and why", sub: "Specific beats ambitious.",
    size: 16.5,
    items: [
      { q: "1 — what stops you?", a: "“I translate from Amharic first, so I am always two seconds behind.”", why: "Specific and accurate. “My English is bad” is neither, and cannot be acted on." },
      { q: "2 — five chunks", a: "“I'd like to · It depends on · To be honest · I was wondering if · Would you mind.”", why: "Five is achievable in a month. Twelve at once is not, and failing at twelve stops the habit entirely." },
      { q: "3 — when exactly?", a: "“Walking to work, every morning, about eight o'clock.”", why: "A time and a place. “Every day when I have time” means never — that is not pessimism, it is how habits work." },
      { q: "4 — solo technique", a: "“Narrating my day silently in English.”", why: "No partner, no materials, no fixed time. It fits around any schedule, which is why it survives." },
      { q: "5 — instead of stopping", a: "“I will describe the word: the thing you use for…”", why: "Paraphrase. It costs one second and keeps the conversation alive." },
    ],
    notes: keyNotes("Read two learners' answers to question 3 aloud. The specific ones and the vague ones sound completely different, and the class hears it immediately."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your fluency checklist", sub: "Five habits. Use them every time you speak.",
    check: true, color: C.write, size: 20,
    items: [
      { t: "Start within one second — use a filler if you must", d: "“Well…”  “Let me think.”  Silence is the enemy." },
      { t: "Reach for a chunk before building a sentence", d: "Twelve frames cover most of what you need." },
      { t: "Go around a missing word, never stop for it", d: "“The thing you use for…”" },
      { t: "Repair inside the sentence, never restart", d: "“I go— I went.”" },
      { t: "Finish the sentence, whatever happens", d: "Imperfect and finished beats perfect and abandoned." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the five and connect each to the activity where it was practised.",
      tip: "Print this as a card. It is the whole module on one side of paper and learners will actually carry it.",
      activity: "Habit check: after every speaking activity in Level 3, ask which of the five habits learners used.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Fluency mainly means …", opts: "a) speaking fast     b) keeping going     c) no mistakes" },
      { q: "2. “Actually” means …", opts: "a) currently     b) in fact     c) probably" },
      { q: "3. Which is correct?", opts: "a) He probably works there     b) He works probably there     c) Probably he works there is best" },
      { q: "4. You forget a word mid-sentence. Best action?", opts: "a) stop and think     b) describe it     c) say it in Amharic" },
      { q: "5. Which is correct?", opts: "a) Although it rained, but we went     b) Although it rained, we went     c) both" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 a · 4 b · 5 b",
      tip: "Question 1 is the module's central claim. Anyone choosing a) or c) needs slide 4 again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the chunk", sub: "One chunk per gap.",
    color: C.green, instruction: "Write the missing chunk.", size: 18,
    items: [
      "1.  ______ waiting a moment?   (a polite request)",
      "2.  ______ you could help me with this.   (very polite)",
      "3.  It ______ the weather.   (it is not certain)",
      "4.  ______ , I don't really agree.   (honest, softened)",
      "5.  ______ , as I was saying, the meeting is Friday.   (returning to the point)",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Take the answers orally at speed. These must be retrievable in under two seconds to be useful.",
      answers: "1 Would you mind · 2 I was wondering if · 3 depends on · 4 To be honest · 5 Anyway",
      mistakes: "Item 1 must be followed by -ing. If a learner writes “Would you mind to wait”, the chunk was not learned whole.",
      tip: "Run this again as a spoken drill next lesson. Written recall is far easier than spoken recall.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Chunks, purposes and repairs.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the PHRASE to its JOB", opts: "1. “Let me think.”     2. “I mean…”     3. “Anyway…”     4. “I'm afraid…”" },
      { q: "a) repair something     b) buy time", opts: "c) soften bad news     d) return to the main point" },
      { q: "Part 2 — match the BLUNT sentence to the SOFTENED one", opts: "1. That's wrong.     2. No.     3. It's expensive.          a) I'm afraid not.     b) It's a bit expensive.     c) I'm not sure that's right." },
      { q: "Part 3 — match the WORD to its MEANING", opts: "1. actually     2. instead     3. although     4. probably          a) despite that     b) in fact     c) very likely     d) in place of that" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–b, 2–a, 3–d, 4–c.  ·  Part 2: 1–c, 2–a, 3–b.  ·  Part 3: 1–b, 2–d, 3–a, 4–c.",
      tip: "Part 2 is the professional-English test. Learners who get all three are ready for Module 5.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — go around the word", sub: "Describe each thing without naming it.",
    color: C.green, instruction: "Write one sentence for each. Do not use the word itself.", size: 18,
    items: [
      "1.  a screwdriver",
      "2.  a nurse",
      "3.  an umbrella",
      "4.  a dictionary",
      "5.  a receipt",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Insist on the four openers: “the thing you use for…”, “a person who…”, “it's like a…”, “it's a kind of…”.",
      answers: "MODELS: 1 the thing you use to fix things with · 2 a person who looks after people in a hospital · 3 the thing you use when it rains · 4 a book that tells you what words mean · 5 the paper you get after you pay for something",
      mistakes: "Learners try to give the exact definition and get stuck. A rough description is not only acceptable, it is the skill being taught.",
      tip: "Do this orally afterwards with a ten-second limit per item. Speed is what turns it into a reflex.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — soften it", sub: "Same fact. Professional delivery.",
    color: C.green, instruction: "Rewrite each sentence so it does not sound blunt.", size: 18,
    items: [
      "1.  Your report is wrong.",
      "2.  I don't want to do that.",
      "3.  You are late again.",
      "4.  That idea won't work.",
      "5.  No, I can't come on Sunday.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Take several versions for each. There is no single right answer, only more and less blunt ones.",
      answers: "MODELS: 1 I'm not sure this part is quite right. · 2 I'd rather not, if that's OK. · 3 I think you might be a bit late again. · 4 I see what you mean, but I'm not sure it would work. · 5 I'm afraid I can't make Sunday, sorry.",
      mistakes: "Learners soften so much the meaning disappears. The fact must survive — only the delivery changes.",
      tip: "Ask which version learners would want to receive from their own manager. That question settles the argument quickly.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  Fluent speakers do not make mistakes.",
      "2.  “Actually” means “currently”.",
      "3.  You should stop and restart when you make an error.",
      "4.  Fillers like “well” and “you know” are bad English.",
      "5.  “Although” and “but” can be used in the same sentence.",
      "6.  Pausing between ideas sounds fluent; pausing inside a phrase does not.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — they make errors constantly and repair them · 2 F — it means “in fact” · 3 F — repair inside the sentence · 4 F — every fluent speaker uses them · 5 F — choose one · 6 T",
      tip: "Items 1 and 4 are beliefs, not facts, and they are what keep learners silent. Correct them out loud and firmly.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own speaking.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  Do you translate in your head? When is it worst?",
      "2.  How long can you speak without stopping now?",
      "3.  Which five chunks will you make automatic this month?",
      "4.  What will you say instead of going silent?",
      "5.  Which is harder for you — fluency or accuracy? Why?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Question 2 should be answered with the real number from the warm-up. Compare it with the figure at the end of the module.",
      answers: "No fixed answers. Question 4 should name a specific English filler, not a general intention.",
      mistakes: "Question 5 has no right answer, but it tells you how to teach the rest of Level 3 for this class. Read the answers carefully.",
      tip: "Question 1 asks when translation is worst. Most say “under pressure” — which is exactly why the drills are timed.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. Strict time limits.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner times and counts.", size: 19,
    items: [
      "1.  60 seconds on your work. Partner counts pauses over 3 seconds.",
      "2.  Same topic again. Compare the two pause counts.",
      "3.  Describe five objects without naming them. 10 seconds each.",
      "4.  Answer five sudden questions. You must start within 1 second.",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Task 2 is where the improvement shows. Almost every learner's pause count falls on the second attempt at the same topic.",
      answers: "SUCCESS CRITERIA: 1 a baseline number · 2 a lower number than task 1 · 3 five recognisable descriptions · 4 five starts within one second, fillers permitted.",
      tip: "Write the class average pause count for tasks 1 and 2 on the board. The drop is usually 40% or more and it convinces everyone.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "Everything in the module together.",
    color: C.green, instruction: "Work in pairs. Take your time on the written parts.", size: 17,
    items: [
      { q: "1. Write the twelve chunks from slide 7 from memory.", opts: "Eight or more is a good score." },
      { q: "2. Write a six-line dialogue containing at least five chunks.", opts: "Mark each chunk." },
      { q: "3. Rewrite this spoken sentence as written English.", opts: "“Well, the thing is, we'll probably need a bit more time, if that's OK.”" },
      { q: "4. Soften these three: “That's wrong.” “No.” “I don't like it.”", opts: "Three sentences." },
      { q: "5. Speak for 90 seconds on a topic your partner chooses.", opts: "No preparation. Partner counts pauses." },
    ],
    notes: tn({
      time: "18 minutes.",
      how: "Question 5 is the real test: an unprepared topic, chosen by somebody else, is the closest thing in class to a real conversation.",
      answers: "1 the twelve from slide 7 · 3 “We will require slightly more time, if that is acceptable.” · 4 I'm not sure that's right · I'm afraid not · It's not really my kind of thing.",
      tip: "Question 1 tells you which chunks have stuck. Whatever the class misses, drill it again next lesson.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why can't you become fluent by translating faster?", opts: "Think about how many steps each route has." },
      { q: "2. Why does saying the SAME topic twice make you more fluent?", opts: "What is your brain free to do the second time?" },
      { q: "3. Mimi makes more mistakes now. Is her English worse?", opts: "Think about what else changed." },
      { q: "4. When would fluency be the WRONG priority?", opts: "Give a real example." },
    ],
    notes: tn({
      time: "13 minutes. Discussion, not writing.",
      how: "Question 4 keeps the module honest. Fluency is not always the priority, and saying so builds trust.",
      answers: "1 Translation has four steps and speech has time for two; no amount of speed fixes a route that is twice as long. 2 The content is already decided, so all your attention goes to delivery. 3 No — she says far more, so more errors in total but a lower error rate. 4 A legal document, a medical instruction, a written exam, a safety notice — anywhere a small error changes the meaning and you have time to be careful.",
      tip: "Question 4's answer is Module 3's job. Use it to preview accuracy work so learners do not think errors have stopped mattering.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · What fluency is", items: [
      { q: "1. Fluency mainly means …", opts: "a) speaking fast     b) keeping going     c) making no mistakes" },
      { q: "2. Name the four parts of fluency.", opts: "Four answers." },
      { q: "3. Where should you pause?", opts: "a) inside phrases     b) between ideas     c) never" },
      { q: "4. Why can't you be fluent by translating?", opts: "One sentence." },
    ] },
    { part: "Part 2 · Chunks and fillers", items: [
      { q: "5. Complete: “______ waiting a moment?”", opts: "A polite request." },
      { q: "6. Complete: “I ______ if you could help.”", opts: "Very polite." },
      { q: "7. Name two English fillers.", opts: "Two answers." },
      { q: "8. What does a filler give you?", opts: "One sentence." },
    ] },
    { part: "Part 3 · Repair and softening", items: [
      { q: "9. You said “I go” but meant “I went”. What do you do?", opts: "a) restart     b) repair and continue     c) apologise and stop" },
      { q: "10. Name two repair words.", opts: "Two answers." },
      { q: "11. Soften this: “That's wrong.”", opts: "Write the sentence." },
      { q: "12. What does “I'm afraid” mean here?", opts: "One sentence." },
    ] },
    { part: "Part 4 · Vocabulary", items: [
      { q: "13. “Actually” means …", opts: "a) currently     b) in fact     c) probably" },
      { q: "14. Correct: “He works probably in Adama.”", opts: "Write the sentence." },
      { q: "15. Correct: “Although it rained, but we went.”", opts: "Write the sentence." },
      { q: "16. Complete: “The bus was full so I walked ______.”", opts: "One word." },
    ] },
    { part: "Part 5 · Doing it", items: [
      { q: "17. You forget a word mid-sentence. What do you do?", opts: "One sentence." },
      { q: "18. Rewrite as written English: “Well, we'll probably need a bit more time.”", opts: "One sentence." },
      { q: "19. Name two ways to practise fluency alone.", opts: "Two answers." },
      { q: "20. SPEAKING: speak for 60 seconds on a topic given now.", opts: "No preparation. Pauses counted." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 1 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is spoken." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is assessed live: 60 seconds, unprepared topic, marked on pauses over three seconds rather than on grammar.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — what fluency means", a: "b) keeping going", why: "Not speed and not perfection. A speaker with errors who keeps going is easier to talk to than a perfect speaker who stops." },
      { q: "Q2 — the four parts", a: "Speed · pauses in the right place · not translating · repair.", why: "Only one of the four is speed, and it is the least important of them." },
      { q: "Q3 — where to pause", a: "b) between ideas", why: "Pausing inside a phrase sounds broken. Between ideas it sounds thoughtful — at exactly the same speed." },
      { q: "Q4 — why translating fails", a: "It has four steps; speech only has time for two.", why: "The route is the problem, not the speed. No amount of practice makes a four-step route fit into a two-step gap." } ],
    [ { q: "Q5 — the polite request", a: "“Would you mind waiting a moment?”", why: "After “mind” English needs the -ing form. Learn the chunk whole and the error never happens." },
      { q: "Q6 — the very polite request", a: "“I was wondering if you could help.”", why: "The politest request form in English. Its length is a feature — it buys you planning time." },
      { q: "Q7 — two fillers", a: "Any two of: well · actually · you know · I mean · sort of.", why: "All carry meaning as well as buying time, which is why they never sound empty." },
      { q: "Q8 — what a filler gives you", a: "Half a second to two seconds of thinking time, in English.", why: "The alternative is silence, which the listener reads as being stuck." } ],
    [ { q: "Q9 — you said “I go”", a: "b) repair and continue", why: "“I go— I went there yesterday.” Half a second, inside the sentence, and nobody notices." },
      { q: "Q10 — two repair words", a: "Any two of: I mean · or rather · sorry · that is.", why: "Say the repair and keep going in the same breath. Never apologise twice." },
      { q: "Q11 — soften “That's wrong”", a: "“I'm not sure that's quite right.”", why: "Same information, but it leaves the other person room to respond." },
      { q: "Q12 — “I'm afraid”", a: "It means “I am sorry to tell you”. Nothing to do with fear.", why: "It is the standard professional way to deliver bad news or refuse a request in English." } ],
    [ { q: "Q13 — “actually”", a: "b) in fact", why: "A false friend. It never means “currently” — for that, use “at the moment”." },
      { q: "Q14 — correct the sentence", a: "He probably works in Adama.", why: "The adverb goes before the main verb. It cannot come between the verb and its place." },
      { q: "Q15 — correct the sentence", a: "Although it rained, we went.", why: "“Although” and “but” both mark the contrast. English allows only one of them." },
      { q: "Q16 — “so I walked ___”", a: "instead", why: "“Instead” alone goes at the end. “Instead of” needs a noun or an -ing form after it." } ],
    [ { q: "Q17 — a forgotten word", a: "Describe it and keep going: “the thing you use for…”", why: "Paraphrase costs one second. Searching your memory costs ten and often fails anyway." },
      { q: "Q18 — as written English", a: "“We will require slightly more time.”", why: "Remove the filler, then replace common words with precise ones. Written English is about 40% shorter." },
      { q: "Q19 — two solo methods", a: "Any two of: the 60-second habit · shadowing · narrating your day silently · recording and counting pauses.", why: "None needs a partner, a class or the internet." },
      { q: "Q20 — the speaking task", a: "60 seconds with no silence longer than 3 seconds", why: "Marked on pauses, not grammar. This is fluency time, and errors are not counted against you." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q1, Q9 and Q13 are the diagnostic block: what fluency is, repair versus restart, and the “actually” false friend. Errors here need slides 4, 9 and 11 again."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Speaking only.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "60 seconds on one topic, twice", d: "Same topic both times. Count your long pauses each time." },
      { t: "Shadow five minutes of English audio", d: "Speak along, one second behind. Anything will do." },
      { t: "Narrate your morning silently in English", d: "“I'm making coffee. I'll leave at eight.” No translation." },
      { t: "Practise five chunks until they are automatic", d: "Say each one twenty times, out loud, at speed." },
      { t: "Record 60 seconds and count the pauses", d: "Compare with Monday's number." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Wednesday's task is the one that breaks translation, and it is the one learners skip because it feels pointless. Insist on it and explain why.",
      tip: "Friday against Monday is the measurement. One week of ten minutes a day produces a visible drop in pause count — which is what keeps learners doing it.",
      activity: "Ask learners to bring both pause counts to the next lesson.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your written fluency plan", d: "Six sentences, using although, instead, probably and actually." },
      { t: "A six-line dialogue with at least five chunks", d: "Mark each chunk you used." },
      { t: "Record your two-minute speaking challenge", d: "60 seconds · four chunks · one repair · one time-buying phrase." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 3 is the Level 3 baseline recording. Store it — the Module 8 comparison depends on having it.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording by voice, and comment on pauses rather than on grammar. Commenting on grammar here undoes the module.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaPencilAlt", title: "Fluency plan — 8 marks", desc: "Six sentences (2) · specific time and place in Q3 (2) · all four target words used correctly (4)." },
      { icon: "FaComments", title: "Dialogue — 7 marks", desc: "Six lines (2) · five chunks present (3) · chunks marked and correct (2)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "60 seconds with no silence over 3s (4) · four chunks (2) · one repair, not a restart (2) · a time-buying phrase (2)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat the 60-second drill daily with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Note what is NOT marked: grammar and vocabulary range. This is a fluency module and marking accuracy here would contradict everything taught.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Teachers instinctively deduct for grammar errors in the recording. Do not — Module 3 is where accuracy is assessed.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaTachometerAlt", title: "What fluency is", desc: "Speed · pauses in the right place · no translating · repair. Not perfection." },
      { icon: "FaBrain", title: "The translation trap", desc: "Four steps against two. The route has to change, not the speed." },
      { icon: "FaPuzzlePiece", title: "Twelve chunks", desc: "Say them as one unit. Worth more than 200 single words." },
      { icon: "FaClock", title: "Buying thinking time", desc: "“Well…”  “Let me think.”  “That's a good question.”" },
      { icon: "FaTools", title: "Repair, not restart", desc: "“I go— I went.” Inside the sentence, in one breath." },
      { icon: "FaBalanceScale", title: "Softening", desc: "a bit · I think · might · I'm afraid · not really." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Go back to slide 3 and redo warm-up task 3 with the timer. Compare with the number you wrote on the board at the start. The improvement in one module is usually large.",
      tip: "That comparison takes two minutes and is the best evidence you have that the module worked.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The fluency toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaPuzzlePiece", title: "Six chunks to start with", desc: "I'd like to …        It depends on …\nWould you mind …?   To be honest …\nI was wondering if …   I'd rather …" },
      { icon: "FaClock", title: "Buying time", desc: "“Well…”\n“Let me think for a second.”\n“That's a good question.”\n“How can I put this…”" },
      { icon: "FaTools", title: "Repair words", desc: "I mean  ·  or rather  ·  sorry  ·  that is\n\nSay it INSIDE the sentence.\nNever restart. Never apologise twice." },
      { icon: "FaCheck", title: "Five fluency habits", desc: "1 Start within one second\n2 Reach for a chunk\n3 Go around a missing word\n4 Repair, never restart\n5 Finish the sentence" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide, or print the fourth box as a card. The five habits are the whole module.",
      tip: "Learners who carry the card use it. Learners who saw the slide once do not. Print it.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Welcome to Level 3",
    text: "You are no longer learning what to say. You are learning to say it without stopping.",
    sub: "The grammar you need is mostly already in your head. What changes now is speed, confidence and repair —\nand those come from practice under time pressure, not from more study.",
    chips: ["NEXT — Module 2", "Pronunciation Mastery", "Being understood the first time, every time"],
    notes: tn({
      time: "5 minutes.",
      how: "Name the shift: Levels 1 and 2 built the knowledge, Level 3 builds the delivery. Learners who feel stuck are usually not missing knowledge — they are missing automaticity, and that is a different problem with a different solution.",
      tip: "Preview Module 2 honestly: pronunciation is where learners get judged fastest and unfairly, and where a small amount of targeted work produces a disproportionate result.",
      activity: "Ask every learner to name the one chunk they will make automatic before the next lesson.",
    }),
  });
};
