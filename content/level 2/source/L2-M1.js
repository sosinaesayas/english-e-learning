"use strict";
/* LEVEL 2 · MODULE 1 — Present Simple & Daily Routine   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 2", levelNo: LV.no, levelName: "Elementary\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Present Simple & Daily Routine",
    sub: "The tense you will use more than any other. Habits, routines and facts — and the one small letter that causes most of the trouble.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5", v: "NEW WORDS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by describing your own morning in six sentences, at natural speed. Then say: “Every sentence I just said was in one tense. By Friday you will use it without thinking.”",
      tip: "Welcome learners to Level 2. Say what changes: in Level 1 they learned words and simple sentences; from now on they learn to place actions in time. That is what a tense is.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all about your everyday life.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Describe your daily routine in English", d: "“I wake up at six. I go to work at seven.”" },
      { t: "Use the -s ending correctly with he, she and it", d: "“I work.” but “She works.” The most corrected error in the whole course." },
      { t: "Make negative sentences", d: "“I do not work on Sunday.”  “She does not like coffee.”" },
      { t: "Ask questions about routines", d: "“Do you work on Saturday?”  “Does he live in Adama?”" },
      { t: "Say how often you do something", d: "always · usually · often · sometimes · never" },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask “Can you do this now?” Objective 2 is the one to emphasise — tell them honestly that it is a small letter and a big problem.",
      tip: "Return to this slide at the end of the module and ask again.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: your morning", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaClock", title: "1 · What time?", desc: "What time do you wake up? Say it in English. Numbers and time come from Level 1, Module 2." },
      { icon: "FaWalking", title: "2 · Three actions", desc: "Say three things you do every morning. Any words you know." },
      { icon: "FaUsers", title: "3 · Your partner", desc: "Ask your partner one question about their morning. Any question at all." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Task 3 is the diagnostic. Listen for how learners form the question — most will say “You wake up what time?” or use a statement with rising intonation. Do not correct; note it, because it is exactly what slide 9 teaches.",
      mistakes: "Correct nothing in the warm-up.",
      tip: "Write two or three of the learners' own question attempts on the board and leave them there. You will return to them on slide 9 and fix them together.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "One tense covers everything you do regularly.",
    sub: "Not what is happening now — what happens every day, every week, always.\nIn Level 1 you said “I am a student.” Now you can say what a student actually does.",
    chips: ["Habits: I drink coffee every day", "Routines: she starts work at eight", "Facts: water boils at 100 degrees"],
    notes: tn({
      time: "4 minutes.",
      how: "Give one example of each of the three uses. Do not name them as categories yet — say the sentences and let learners hear that all three are about things that are generally true.",
      mistakes: "Learners who studied English at school often know the -s rule and still do not apply it in speech. Knowing is not the same as automating. Say that plainly — this module is mostly drilling, not explaining.",
      tip: "Warn them now: “There is one small letter in this module that causes more mistakes than anything else in English. We will spend four weeks on it.” Naming it early makes learners listen for it.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.grid({
    sec: SEC.con, title: "Three jobs the present simple does", sub: "All three are about things that are generally true.",
    cols: 3, color: C.green, titleSize: 21, descSize: 16, shadow: true, tint: C.white,
    items: [
      { icon: "FaRedo", title: "1 · Habits", desc: "Things you do again and again.\n\n“I drink coffee every morning.”\n“She goes to church on Sunday.”" },
      { icon: "FaClock", title: "2 · Routines", desc: "Fixed times and schedules.\n\n“The shop opens at seven.”\n“I start work at eight thirty.”" },
      { icon: "FaLightbulb", title: "3 · Facts", desc: "Things that are always true.\n\n“Water boils at 100 degrees.”\n“Ethiopia has thirteen months.”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Give three examples of each from the learners' own lives. Ask five learners for a habit, five for a routine time, and two for a fact about Ethiopia. Real sentences, not invented ones.",
      mistakes: "Learners confuse this with “now”. Say clearly: this tense is NOT for what is happening at this moment. That comes in Module 2, and teaching them separately makes both harder — so plant the contrast now.",
      extra: "Facts about Ethiopia work well: “Addis Ababa is the capital.” “The Blue Nile starts at Lake Tana.” “Coffee comes from Ethiopia.”",
      tip: "Do not spend long on the three categories. Learners do not need to name them — they need to produce the form. The categories are for you, not for the exam.",
      activity: "Habit round: every learner says one true habit. Nobody may repeat someone else's.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the form
  L.table({
    sec: SEC.con, title: "The form — and the one letter that changes",
    sub: "Five of the seven persons use the base verb. Three of them add -s.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 18, headSize: 16, colW: [2.6, 3.4, 6.133],
      rows: [
        ["Person", "Verb", "Example"],
        ["I", "work", "I work in Adama."],
        ["You", "work", "You work very hard."],
        ["He", "workS", "He works in a bank."],
        ["She", "workS", "She works at the clinic."],
        ["It", "workS", "It works well."],
        ["We / They", "work", "We work six days a week."],
      ],
    },
    note: "HE · SHE · IT add -s. Nothing else changes. Say it as a chant: “I work, you work, HE WORKS, SHE WORKS, IT WORKS, we work, they work.”",
    notes: tn({
      time: "14 minutes. This is the most important slide in the module.",
      how: "Chant the whole set three times in chorus, hitting the three -s forms hard. Then point at people in the room and have learners produce the right form. Thirty rounds, fast.",
      mistakes: "No language spoken in Ethiopia marks the verb this way, so the -s carries no meaning for learners and their ear does not miss it. That is why it survives into Level 3 unless it is drilled to automaticity here. Do not treat it as carelessness.",
      extra: "Drill with ten verbs: work, live, study, eat, drink, go, come, like, want, need.",
      tip: "The -s adds no meaning at all — the sentence is perfectly clear without it. Say that honestly, then say that native speakers notice its absence immediately. Learners drill it better when they know why it matters.",
      activity: "Pronoun-verb race: teacher says a pronoun and a verb, learner produces the correct form within two seconds. “She — go” → “She goes.” Forty rounds in three minutes.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — spelling
  L.table({
    sec: SEC.con, title: "The three spelling rules for -s", sub: "Most verbs just add -s. Two groups are different.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 18, headSize: 16, colW: [3.6, 3.6, 4.933],
      rows: [
        ["Rule", "Verbs", "He / she / it form"],
        ["Most verbs: add -s", "work · live · eat · read", "works · lives · eats · reads"],
        ["After ch, sh, s, x, o: add -es", "watch · wash · go · do", "watches · washes · goes · does"],
        ["Consonant + y: change to -ies", "study · carry · try", "studies · carries · tries"],
        ["Special: have → has", "have", "has  ← learn this one separately"],
      ],
    },
    note: "Careful: “play” keeps the y and just adds -s → “plays”, because the letter before the y is a vowel. The rule is consonant + y.",
    notes: tn({
      time: "12 minutes.",
      how: "Teach rule 1 and drill it hard — it covers most verbs. Then rules 2 and 3 with five examples each. Then “has” on its own, as a word to memorise.",
      mistakes: "“Gos” instead of “goes” and “studys” instead of “studies” are the two commonest spelling errors. Both come from applying rule 1 everywhere.",
      extra: "Sort these aloud: teach, finish, fly, buy, mix, say, cry, do.",
      tip: "Do not over-teach the spelling. In speech the -es and -s sound almost the same, so a learner who says it right will usually be understood even if they spell it wrong. Prioritise speaking accuracy over spelling.",
      activity: "Spelling relay: teacher says the base verb, learner writes the he/she form on the board. Ten verbs, two teams.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — negatives
  L.compare({
    sec: SEC.con, title: "Negatives — do not and does not",
    sub: "When you add “does not”, the -s moves off the main verb.",
    left: { h: "Correct", items: ["I do not work on Sunday.", "They do not live here.", "She does not like coffee.", "He does not go to school."] },
    right: { h: "Wrong", items: ["I not work on Sunday.", "They no live here.", "She does not likes coffee.", "He not goes to school."] },
    note: "The rule that surprises everyone:  “She likeS” but “She does not LIKE”.  “Does” already carries the -s, so the main verb loses it.",
    notes: tn({
      time: "12 minutes.",
      how: "Write “She likes coffee.” on the board, then transform it to the negative step by step, moving the -s physically from “likes” to “does”. Learners see the letter travel, which is far clearer than the rule stated.",
      mistakes: "“She does not likes” is the classic double-marking error. It is the same mistake pattern as “I didn't went” in Module 3 — the past is marked twice. Point that out when you reach it.",
      extra: "The short forms don't and doesn't are used almost always in speech. Teach both and say which is which.",
      tip: "Ask learners for three true negative sentences about themselves. True content is remembered; invented content is not.",
      activity: "Make it negative: teacher says a positive sentence, learners produce the negative. Twenty rounds, mixing all persons.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — questions
  L.table({
    sec: SEC.con, title: "Questions — do and does",
    sub: "Put DO or DOES at the front. The main verb loses its -s.",
    table: {
      color: C.green, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [2.4, 4.2, 5.533],
      rows: [
        ["Person", "Question", "Short answer"],
        ["I / you / we / they", "Do you work on Saturday?", "Yes, I do.  /  No, I do not."],
        ["He / she / it", "Does she live in Adama?", "Yes, she does.  /  No, she does not."],
        ["With a question word", "Where do you work?", "I work in a bank."],
        ["With a question word", "What time does he start?", "He starts at eight."],
      ],
    },
    note: "Word order:  (question word) + DO/DOES + person + base verb.   “Where do you work?” — never “Where you work?”",
    notes: tn({
      time: "14 minutes.",
      how: "Return to the learner attempts you wrote on the board in the warm-up. Fix them together, out loud, using this pattern. Correcting their own sentences is far more powerful than correcting invented ones.",
      mistakes: "Two errors at once here: the missing auxiliary (“Where you work?”) and the -s left on the main verb (“Does she lives?”). Both are transfer errors and both need separate drilling.",
      extra: "Ten questions to drill: Do you like coffee? Does he speak English? Where do you live? What time does the shop open? Do they work on Sunday?",
      tip: "Short answers matter. “Yes” alone is understood but “Yes, I do” carries the auxiliary and reinforces the whole system. Insist on it for now.",
      activity: "Interview: every learner writes five questions and asks three classmates. Then reports one answer to the room using “he” or “she”, which forces the -s.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — frequency
  L.table({
    sec: SEC.con, title: "How often? — frequency adverbs", sub: "Five words, and one rule about where they go.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 17.5, headSize: 16, colW: [2.6, 2.2, 3.0, 4.333],
      rows: [
        ["Word", "How often", "Position", "Example"],
        ["always", "100%", "before the verb", "I always drink coffee."],
        ["usually", "about 80%", "before the verb", "She usually walks to work."],
        ["often", "about 60%", "before the verb", "We often eat together."],
        ["sometimes", "about 40%", "before the verb", "He sometimes works late."],
        ["never", "0%", "before the verb", "They never eat meat."],
      ],
    },
    note: "The exception: with the verb “to be”, the word goes AFTER it.  “She is always late.” — not “She always is late.”",
    notes: tn({
      time: "12 minutes.",
      how: "Draw a line on the board from 0% to 100% and place the five words on it. Then drill the position with ten sentences. The line makes the meanings clear without translation.",
      mistakes: "Learners put the adverb at the end: “I drink coffee always.” It is understood but not natural. Also “never” is already negative — “I never don't eat meat” is a double negative and wrong.",
      extra: "Also useful: every day, once a week, twice a month, on Mondays. These go at the END, unlike the five adverbs.",
      tip: "The “to be” exception is worth teaching now because “She is always late” is such a common sentence. Teach it as a phrase, not as a rule.",
      activity: "Frequency line: learners stand in a line from “never” to “always” according to how often they do something you call out — drink coffee, watch football, speak English.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "wake up", ipa: "/weɪk ʌp/", pos: "verb", icon: "FaBed",
      meaning: "To stop sleeping.",
      example: "I wake up at six o'clock every day.",
      mistake: "It is two words and they stay together: “wake up”, not “wake”. And with he or she the -s goes on the FIRST word: “He wakes up”, never “He wake ups”.",
      notes: tn({ time: "6 minutes.",
        how: "Mime it, say it, then drill the third person immediately: “I wake up. He wakes up.” The -s placement is the whole teaching point.",
        mistakes: "“He wake ups” is a genuine and understandable error — learners put the -s at the end of the phrase. Correct it explicitly.",
        extra: "Other two-word verbs with the same pattern: get up, sit down, come back, go out.",
        tip: "Ask five learners what time they wake up. It recycles Module 2 times from Level 1 and produces the -s naturally when they report a partner.",
        activity: "Wake-up survey: find the person in the class who wakes up earliest." }) },

    { word: "breakfast", ipa: "/ˈbrekfəst/", pos: "noun", icon: "FaAppleAlt",
      meaning: "The first meal of the day.",
      example: "I have breakfast at seven. She eats breakfast at home.",
      mistake: "The stress is on the FIRST part: BREAK-fast. And you “have breakfast” or “eat breakfast” — never “drink breakfast” or “make breakfast at home” when you mean eat it.",
      notes: tn({ time: "5 minutes.",
        how: "Teach the whole phrase “have breakfast”, not the noun alone. The verb that goes with it is the useful part.",
        mistakes: "The “br” cluster and the stress. Say BREAK-fast with an exaggerated first syllable.",
        extra: "The three meals: breakfast · lunch · dinner. Teach all three now — they appear in every routine text.",
        tip: "“Have” is the most common verb with meals, and it becomes “has” in the third person. That gives you a natural drill.",
        activity: "Meal round: each learner says what time they have all three meals." }) },

    { word: "usually", ipa: "/ˈjuːʒuəli/", pos: "adverb", icon: "FaRedo",
      meaning: "Most of the time, but not always.",
      example: "I usually walk to work, but sometimes I take the bus.",
      mistake: "A long word — four syllables: U-SU-A-LLY. Stress on the first. And it goes BEFORE the verb: “I usually walk”, not “I walk usually”.",
      notes: tn({ time: "6 minutes.",
        how: "Break it into syllables and clap them: u-su-al-ly. Then say it at speed. Then drill the position with five sentences.",
        mistakes: "Learners avoid this word because it is hard to say and use “sometimes” instead. Give it the time it needs — it is far more useful than its difficulty suggests.",
        extra: "The example sentence contains both “usually” and “sometimes”, which teaches the contrast in one line.",
        tip: "This word makes a routine sound natural rather than robotic. A learner who says “I usually…” sounds much more fluent than one who says only “I…”.",
        activity: "True or false: learners say three sentences with “usually” about themselves; the class guesses which one is false." }) },

    { word: "never", ipa: "/ˈnevə/", pos: "adverb", icon: "FaTimes",
      meaning: "Not at any time. Zero times.",
      example: "I never eat meat on Wednesday. She never comes late.",
      mistake: "“Never” is already negative, so do NOT add another negative: “I never eat”, never “I don't never eat”. And the verb keeps its -s: “She never comeS.”",
      notes: tn({ time: "6 minutes.",
        how: "Teach the double-negative warning explicitly. Write “I don't never eat meat” on the board and cross out the “don't”.",
        mistakes: "Double negatives come from first-language patterns where two negatives strengthen each other. In standard English they cancel out. Say so plainly.",
        extra: "Note that the verb after “never” still takes -s in the third person: “He never works on Sunday.”",
        tip: "“Never” produces strong personal sentences and learners enjoy using it. Use it to make the -s drill feel like conversation.",
        activity: "Never round: each learner says one true “never” sentence about themselves." }) },

    { word: "finish", ipa: "/ˈfɪnɪʃ/", pos: "verb", icon: "FaCheck",
      meaning: "To come to the end of something.",
      example: "I finish work at five. She finishes school at three.",
      mistake: "It ends in “sh”, so the third person adds -ES and an extra syllable: “finishes” — three syllables, not two. Say it slowly.",
      notes: tn({ time: "6 minutes.",
        how: "This verb is the perfect example of spelling rule 2. Say “finish” and “finishes” side by side and clap the syllables: two, then three.",
        mistakes: "“Finishs” in writing and a missing extra syllable in speech. Both come from applying rule 1.",
        extra: "Other -es verbs with an extra syllable: watches, washes, teaches, catches, fixes.",
        tip: "Pair it with “start”: “I start at eight and finish at five.” That one sentence uses two routine verbs and two times.",
        activity: "Start and finish: every learner says what time they start and finish work or school, then reports a partner's using the -s." }) },
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
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 1 of 5" }),
    title: "Rule 1 — add -s for he, she and it",
    sub: "Only these three. Everything else uses the base verb.",
    left: { h: "Correct", items: ["I work in Adama.", "She works in a bank.", "He lives in Bole.", "They live in Gondar.", "It costs fifty birr."] },
    right: { h: "Wrong", items: ["I works in Adama.", "She work in a bank.", "He live in Bole.", "They lives in Gondar.", "It cost fifty birr."] },
    note: "The test: is the person HE, SHE or IT — one person or one thing, not you and not me? Then add -s.",
    notes: tn({
      time: "12 minutes.",
      how: "The test question is the tool learners take away. Practise it aloud on twenty sentences until they can run it in their heads while speaking.",
      mistakes: "The over-correction in the right column matters too: once learners learn the rule, some add -s everywhere. Show both errors so they see the rule has limits.",
      extra: "Careful with names: “Sara works” — a name is “she”. “My brothers live” — two people are “they”. Drill both.",
      tip: "Two minutes of the pronoun-verb race at the start of every lesson for the rest of Level 2. It costs nothing and it is the highest-value drill at this level.",
      activity: "Third-person chain: each learner says a sentence about the person on their left, which forces he or she and the -s every time.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — the spelling of the -s form",
    sub: "Three rules and one special verb.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [4.0, 3.6, 4.533],
      rows: [
        ["Ending", "Add", "Examples"],
        ["most verbs", "-s", "work → works · live → lives · eat → eats"],
        ["ch, sh, s, x, o", "-es", "watch → watches · go → goes · do → does"],
        ["consonant + y", "-ies", "study → studies · carry → carries"],
        ["vowel + y", "-s only", "play → plays · buy → buys · say → says"],
      ],
    },
    note: "And one to memorise on its own:  have → HAS.   “She has two children.”",
    notes: tn({
      time: "10 minutes.",
      how: "Drill rule 1 hardest — it covers most verbs. Then the -es group, which also adds a syllable in speech. Then the y rules together, because the contrast between them is the point.",
      mistakes: "“Studys” and “gos” are the two commonest. Both come from applying rule 1 without checking the ending.",
      extra: "Sort twenty verbs aloud into the four groups. Verbs to use: teach, fly, mix, say, wash, try, cry, buy, finish, do.",
      tip: "“Has” is irregular and very frequent. Teach it separately and drill it separately — do not bury it in the spelling rules.",
      activity: "Four corners: label the room with the four rules. Teacher says a verb, learners walk to the correct corner.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — negatives with do not and does not",
    sub: "The -s moves from the main verb onto “does”.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [2.8, 3.4, 5.933],
      rows: [
        ["Person", "Negative", "Example"],
        ["I / you / we / they", "do not  (don't)", "I do not work on Sunday."],
        ["he / she / it", "does not  (doesn't)", "She does not work on Sunday."],
        ["The rule", "base verb after do/does", "She does not WORK — never “does not works”."],
      ],
    },
    note: "Positive:  She workS.      Negative:  She doeS not work.      The -s is in the sentence exactly once.",
    notes: tn({
      time: "12 minutes.",
      how: "The “-s exactly once” idea is the clearest way to teach this. Write both sentences on the board and circle the single -s in each.",
      mistakes: "“She does not likes” is double-marking. It is the same error family as “I didn't went” later — the tense or person is marked twice. Naming that family helps learners see the pattern.",
      extra: "Have learners produce five true negatives about themselves and five about a family member, which forces both forms.",
      tip: "Teach don't and doesn't from the start. Learners who only know the full forms cannot follow natural speech.",
      activity: "Positive to negative: teacher says a positive sentence, learner produces the negative within three seconds. Twenty rounds mixing all persons.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — questions with do and does",
    sub: "The auxiliary goes first. The main verb keeps its base form.",
    left: { h: "Correct", items: ["Do you work here?", "Does she live in Adama?", "Where do you work?", "What time does he start?"] },
    right: { h: "Wrong", items: ["You work here?", "Does she lives in Adama?", "Where you work?", "What time he starts?"] },
    note: "Two things must happen:  1 · DO or DOES comes before the person.   2 · the main verb loses its -s.",
    notes: tn({
      time: "12 minutes.",
      how: "Build the question physically from the statement: “She lives in Adama.” → put DOES in front → move the -s off “lives”. Do it on the board five times with cards or coloured chalk.",
      mistakes: "Both errors in the right column are transfer errors and both are frequent. The missing auxiliary is the same problem as “Where you are going?” from Level 1 — say so, because learners have met it before.",
      extra: "Ten questions to drill, five with question words and five without.",
      tip: "This is the slide to link back to the warm-up. Fix the learners' own attempts from the board here.",
      activity: "Question relay: one learner makes a statement, the next turns it into a question, the third answers with a short answer.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — put it all together",
    sub: "The -s, the negative, the question and the frequency word.",
    left: { h: "Correct", items: ["She always drinks coffee.", "He does not work on Sunday.", "Do they live in Gondar?", "My sister never eats meat."] },
    right: { h: "Wrong", items: ["She always drink coffee.", "He does not works on Sunday.", "Do they lives in Gondar?", "My sister never eat meat."] },
    note: "Four checks:  1 · -s on he/she/it in positive sentences.   2 · NO -s after do, does, don't or doesn't.   3 · frequency word before the verb.   4 · auxiliary first in questions.",
    notes: tn({
      time: "10 minutes.",
      how: "Take each wrong sentence and ask the class to name the error before you fix it. Each has exactly one — say so in advance.",
      mistakes: "Sentence 4 is the subtle one: “never” is negative in meaning, but the verb still takes -s because the sentence is grammatically positive. Learners find that genuinely confusing.",
      extra: "Two more for pairs: “Does she likes tea?” and “He usually go to bed at ten.”",
      tip: "These four checks are the marking standard for the rest of Level 2. Put them on the wall.",
      activity: "Error auction: teams bid on how many errors they can find in a set of six sentences.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — the -s ending", sub: "Read the question, look at the answer, then read WHY.", items: [
      { q: "Complete: “My brother ___ in Adama.”  (live)", a: "My brother lives in Adama.", why: "“My brother” is one man, so it is “he” — and he, she and it add -s. The name of the person does not change the rule." },
      { q: "Complete: “They ___ English at school.”  (study)", a: "They study English at school.", why: "“They” is more than one person, so there is no -s. The -ies spelling rule only applies to the he/she/it form." },
      { q: "Correct this: “She go to church on Sunday.”", a: "She goes to church on Sunday.", why: "“She” needs the -s, and “go” ends in o, so it takes -es: goes, not gos." },
    ] },
    { title: "Guided examples 2 — spelling the -s form", sub: "Check the ending of the verb first.", items: [
      { q: "He + watch television", a: "He watches television.", why: "“Watch” ends in ch, so it takes -es. It also adds a whole extra syllable when you say it: watch-es." },
      { q: "She + study medicine", a: "She studies medicine.", why: "Consonant + y, so the y changes to -ies. Compare “play”, which has a vowel before the y and simply adds -s: plays." },
      { q: "It + cost fifty birr", a: "It costs fifty birr.", why: "“It” takes -s like he and she. Most verbs just add -s with no spelling change." },
    ] },
    { title: "Guided examples 3 — negatives", sub: "Where does the -s go?", items: [
      { q: "Make it negative: “She likes coffee.”", a: "She does not like coffee.", why: "The -s moves from “likes” onto “does”. It appears exactly once in the sentence — never twice." },
      { q: "Make it negative: “They work on Saturday.”", a: "They do not work on Saturday.", why: "“They” takes “do not”, not “does not”. There was no -s to move, so the verb is unchanged." },
      { q: "Correct this: “He doesn't works here.”", a: "He does not work here.  (or: He doesn't work here.)", why: "“Doesn't” already carries the -s, so the main verb goes back to its base form." },
    ] },
    { title: "Guided examples 4 — questions", sub: "Auxiliary first, base verb second.", items: [
      { q: "Make a question: “You live in Bahir Dar.”", a: "Do you live in Bahir Dar?", why: "“Do” goes in front of the person. The main verb does not change and the full stop becomes a question mark." },
      { q: "Make a question: “She works at the clinic.”", a: "Does she work at the clinic?", why: "“Does” goes first and takes the -s, so “works” goes back to “work”." },
      { q: "Ask about the time: “He starts at eight.”", a: "What time does he start?", why: "Question word, then does, then the person, then the base verb. Four parts, always in that order." },
    ] },
    { title: "Guided examples 5 — frequency words", sub: "Before the verb — except with “to be”.", items: [
      { q: "Add “always”: “I drink coffee in the morning.”", a: "I always drink coffee in the morning.", why: "The frequency word goes before the main verb, not at the end of the sentence." },
      { q: "Add “never”: “She eats meat.”", a: "She never eats meat.", why: "Before the verb — and the verb keeps its -s, because the sentence is grammatically positive even though the meaning is negative." },
      { q: "Add “always”: “He is late.”", a: "He is always late.", why: "This is the exception. With the verb “to be” the frequency word goes AFTER it, not before." },
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
    title: "Talking about your routine",
    sub: "Hana and Mimi talk about their working days.",
    turns: [
      { who: "MIMI", text: "What time do you start work, Hana?", side: "l" },
      { who: "HANA", text: "I start at seven. The clinic opens early.", side: "r" },
      { who: "MIMI", text: "Do you work on Saturday?", side: "l" },
      { who: "HANA", text: "Yes, I do. But I do not work on Sunday.", side: "r" },
      { who: "MIMI", text: "What time does the clinic close?", side: "l" },
      { who: "HANA", text: "It closes at five. I usually get home at six.", side: "r" },
    ],
    note: "Find them:  two questions with DO  ·  one question with DOES  ·  one negative  ·  one frequency word  ·  three -s endings.",
    notes: tn({
      time: "12 minutes.",
      how: "Listen books closed, chorus, pair reading, then perform with their own real times. The finding task afterwards makes the grammar visible inside real language.",
      mistakes: "“What time does the clinic close?” has the -s on “does” and not on “close”. Point at it — it is the module's whole rule in one line.",
      extra: "Change the job: a shop, a school, a bank, a hotel. Every learner has a different set of times.",
      tip: "Note that Hana answers “Yes, I do” with the short answer. Insist on that form in the pair practice.",
      activity: "Routine interview: everyone asks three classmates what time they start and finish, then reports one to the class using “she starts”.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Asking about someone else",
    sub: "Dawit asks Sara about her brother.",
    turns: [
      { who: "DAWIT", text: "Does your brother live in Addis Ababa?", side: "l" },
      { who: "SARA", text: "No, he does not. He lives in Bahir Dar.", side: "r" },
      { who: "DAWIT", text: "What does he do?", side: "l" },
      { who: "SARA", text: "He works in a hotel. He usually works at night.", side: "r" },
      { who: "DAWIT", text: "Does he like it?", side: "l" },
      { who: "SARA", text: "Yes, he does. But he never sees his friends!", side: "r" },
    ],
    note: "Every single line uses the third person. Count the -s endings: there are five.",
    notes: tn({
      time: "12 minutes.",
      how: "This dialogue is deliberately all third person, because that is where the errors are. After reading, have learners count the five -s endings and say which word each one is on.",
      mistakes: "“What does he do?” contains “do” twice — once as the auxiliary and once as the main verb. It confuses learners. Teach it as a fixed phrase.",
      extra: "Change the person: your sister, your mother, your friend. The form changes with the person, which is the point.",
      tip: "Talking about a third person is much harder than talking about yourself, and it is what the exam tests. Spend more time on this dialogue than on the first.",
      activity: "Tell me about them: pairs ask and answer about a family member for two minutes, using only third-person questions.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful questions about routines",
    sub: "Six questions. They open almost any conversation about someone's life.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaClock", title: "“What time do you start?”", desc: "The most useful routine question there is." },
      { icon: "FaBriefcase", title: "“What do you do?”", desc: "Asks about a job. The answer is “I am a…”." },
      { icon: "FaWalking", title: "“How do you get to work?”", desc: "“I walk.”  “I take the bus.”  “I drive.”" },
      { icon: "FaRedo", title: "“How often do you …?”", desc: "The answer uses a frequency word or “twice a week”." },
      { icon: "FaHeart", title: "“Do you like it?”", desc: "Turns a fact into a conversation. Always ask this." },
      { icon: "FaCalendarAlt", title: "“Do you work at weekends?”", desc: "Note “at weekends” — a fixed phrase in British English." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill all six in chorus, then in pairs. Insist on the auxiliary in every one — that is what learners drop under pressure.",
      mistakes: "“How often you go?” — the missing auxiliary again. It appears most in the longer questions.",
      extra: "Add “Do you enjoy it?” and “What time do you finish?” for a strong class.",
      tip: "Question 5 is the one that turns an interview into a conversation, exactly as “And you?” did in Level 1. Point out the parallel.",
      activity: "Question bingo: each learner takes three of the six and crosses them off when they use one naturally.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "ABEL", text: "______ you work every day?", side: "l" },
      { who: "YOU", text: "No, I ______ not. I ______ not work on Sunday.", side: "r" },
      { who: "ABEL", text: "What time ______ you start?", side: "l" },
      { who: "YOU", text: "I ______ at ______ o'clock. And you?", side: "r" },
      { who: "ABEL", text: "My shop ______ at seven. My son ______ me.", side: "l" },
      { who: "YOU", text: "______ he like the work?", side: "r" },
    ],
    note: "Use these:  “Do”  ·  “do”  ·  “do”  ·  “do”  ·  “start”  ·  a time  ·  “opens”  ·  “helps”  ·  “Does”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps in writing, then three pairs perform before you reveal the answers.",
      answers: "1 Do · 2 do · 3 do · 4 do · 5 start · 6 a time · 7 opens · 8 helps · 9 Does",
      mistakes: "Gaps 7 and 8 need the -s because the subjects are “my shop” and “my son”. Learners write the base form.",
      tip: "The last gap needs “Does”, not “Do”, because it asks about “he”. That single choice tests the whole module.",
      activity: "Do it again with the roles reversed so both learners produce every line.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — routines", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Describe your own day", d: "Six sentences, from waking up to going to bed. Your partner counts the verbs." },
      { t: "Ask your partner five questions", d: "Use DO in all five. Your partner answers with a short answer." },
      { t: "Describe your partner's day to them", d: "“You wake up at six. You start work at eight.” Check the facts." },
      { t: "Describe your partner to a new person", d: "“He wakes up at six. He starts work at eight.” Now every verb needs -s." },
    ],
    notes: tn({
      time: "9 minutes for all four rounds.",
      how: "Round 4 is the whole point of the module. Rounds 1 to 3 need no -s at all; round 4 needs it on every verb. Announce that before you start.",
      mistakes: "Round 4 is where the errors appear. Do not interrupt — note them and correct at the end.",
      tip: "The progression from “I” to “you” to “he/she” is deliberate. Each round is harder than the last, and learners feel the difficulty increase.",
      activity: "After round 4, ask three learners to describe their partner to the class. Everyone listens for the -s.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — my day in ten sentences", sub: "Everyone. Standing up. Three rounds.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "Ten sentences about your own day", d: "From waking up to going to bed. Use a time in at least five of them." },
      { t: "Add a frequency word to five of them", d: "always · usually · often · sometimes · never." },
      { t: "Say it again about your partner", d: "Every verb now needs -s. This is the hard one." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Round C is the assessment. Listen to as many learners as you can and note who drops the -s. That list is your teaching plan for the next lesson.",
      mistakes: "In round C learners start well and lose the -s after three or four sentences, as concentration fades. That is normal — the fix is more repetition, not more explanation.",
      extra: "For a strong class, add round D: describe your partner using three negatives.",
      tip: "Standing up genuinely changes the voice. Insist on it for round C.",
      activity: "Time it. Ten sentences in under sixty seconds is a good target for round A, ninety for round C.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the class survey", sub: "Ask five people. Report the results.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“What time do you wake up?”", d: "Write down the five answers." },
      { t: "“Do you drink coffee in the morning?”", d: "Count the yes answers." },
      { t: "“How do you get to work or school?”", d: "Walk · bus · bajaj · taxi · drive." },
      { t: "“Do you work at weekends?”", d: "Count the yes answers." },
      { t: "Report to the class", d: "“Three people walk to school. Two people take the bus. Sara wakes up at five.”" },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "The reporting step is where the grammar is tested: “three people walk” has no -s, but “Sara wakes up” does. That contrast in one report is the perfect end to the activity.",
      mistakes: "Learners report with the base verb everywhere. Remind them before they start that one-person answers need -s.",
      extra: "Add a sixth question of the learners' own choosing.",
      tip: "Surveys produce real data and learners are genuinely interested in the results. Write the class totals on the board.",
      activity: "Find the extremes: who wakes up earliest, who works most days, who never drinks coffee.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the three sounds of the -s ending",
    sub: "Same letter, three different sounds. Your mouth chooses automatically if you say the word naturally.",
    left: { h: "/s/ and /z/ — no extra syllable", items: ["works  /wɜːks/", "eats  /iːts/", "lives  /lɪvz/", "goes  /ɡəʊz/", "reads  /riːdz/"] },
    right: { h: "/ɪz/ — ADDS a syllable", items: ["watches  (watch-es)", "finishes  (fin-ish-es)", "washes  (wash-es)", "teaches  (teach-es)", "fixes  (fix-es)"] },
    note: "The right column adds a whole extra beat. Clap the syllables: “works” is one clap, “watches” is two.",
    notes: tn({
      time: "10 minutes.",
      how: "Clap the syllables for all ten words. The physical beat makes the difference obvious in a way that explanation does not.",
      mistakes: "Learners either drop the -s entirely or add a syllable where none belongs (“work-es”). Both are audible. The clapping drill fixes both.",
      extra: "Do not teach when to use /s/ and when /z/ — the mouth chooses correctly on its own. Focus only on presence and on the extra syllable.",
      tip: "What matters is that the -s is THERE and can be heard. Tell learners to exaggerate it for a week; over-pronouncing now produces normal pronunciation later.",
      activity: "One clap or two: teacher says a third-person verb, learners clap once or twice for the syllable count. Twenty rounds.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — role plays", sub: "Work in pairs. Two minutes per situation.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "A new colleague asks about your working day", d: "Times, days, what you do, whether you like it." },
      { t: "You ask a shopkeeper about opening hours", d: "“What time do you open?”  “Do you open on Sunday?”" },
      { t: "You describe a family member's job to a friend", d: "All third person. Every verb needs -s." },
      { t: "A visitor asks how people live in your town", d: "“People usually eat at seven.” “Most shops open at eight.”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Give each pair one thing to listen for: the auxiliary in questions, or the -s in statements.",
      mistakes: "Situation 4 uses plural subjects (“people”, “most shops”), which take no -s. Learners who have been drilling the -s over-apply it here. That contrast is useful.",
      extra: "Situation 2 is the most immediately usable outside class. Give it extra time.",
      tip: "Do situation 3 last and give it the most time — it is the exam task in disguise.",
      activity: "Perform two of the four to the class and let the class listen only for -s errors, kindly.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "90 seconds. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Describe your daily routine", d: "Six sentences with times, from waking up to going to bed." },
      { t: "Use three frequency words", d: "always · usually · sometimes · never." },
      { t: "Say two things you do NOT do", d: "“I do not work on Sunday.”" },
      { t: "Describe one family member's routine", d: "Four sentences. Every verb needs -s." },
      { t: "Ask two questions", d: "“What time do you start work?”  “Does your brother work here?”" },
    ],
    notes: tn({
      time: "14 minutes including listening back.",
      how: "Record on a phone, or perform live to a partner who ticks the five steps.",
      mistakes: "Step 4 is the assessment. Steps 1 to 3 use “I” and need no -s; step 4 needs it on every verb.",
      answers: "SUCCESS CRITERIA: all five steps present · -s on every third-person verb in step 4 · no -s after do or does in steps 3 and 5 · frequency words before the verb · a listener understands the whole routine.",
      tip: "Have learners listen back once, listening only for the -s. Most catch their own omissions immediately.",
      activity: "Keep every recording for the end-of-level comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — Dawit's day", sub: "Listen twice. Write the times and the activities.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17.5, lsm: 1.36,
      text: "“My name is Dawit. I wake up at five o'clock.\nI have breakfast at half past five.\nI start work at six thirty in the coffee shop.\nI usually finish at three in the afternoon.\nI study English in the evening.\nI never work on Sunday.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write the four times you hear.",
      "Write what he does at each time.",
      "Write the two frequency words.",
      "The teacher reads it twice, at natural speed.",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Read twice at natural pace. This recycles Level 1 Module 2 times inside the new tense — point that out afterwards.",
      mistakes: "“Half past five” requires converting to 5:30. Some learners write “half five”.",
      extra: "Add a fifth line if the class is strong: “I go to bed at nine.”",
      answers: "5:00 wake up · 5:30 breakfast · 6:30 start work · 3:00 finish. Frequency words: usually, never.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check the times and the verbs.",
    size: 17,
    items: [
      { q: "1 — five o'clock", a: "He wakes up at five o'clock.", why: "When you report it, “I wake up” becomes “he wakes up” — the -s appears as soon as you talk about him." },
      { q: "2 — half past five", a: "He has breakfast at half past five.", why: "“Have” becomes “has” in the third person. It is irregular and must be memorised." },
      { q: "3 — six thirty", a: "He starts work at six thirty.", why: "AT for a clock time, from Level 1. And the -s on “starts”." },
      { q: "4 — three in the afternoon", a: "He usually finishes at three.", why: "“Finish” ends in sh, so it takes -es and an extra syllable: fin-ish-es." },
      { q: "5 — the frequency words", a: "usually and never", why: "Both come before the verb: “usually finishes”, “never works”." },
    ],
    notes: keyNotes("Every answer here converts “I” to “he”, which is exactly the exam skill. If learners wrote the base verb throughout, that is the module's core error and needs another lesson."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — two people, two routines", sub: "Listen twice, then answer the questions.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.34,
      text: "HANA:  I work at the health centre. I start at seven and I finish at four.\nMIMI:  Do you work on Saturday?\nHANA:  Yes, I do. But I do not work on Sunday. Do you study every day?\nMIMI:  No, I do not. I study four days a week. My brother studies every day.\nHANA:  Does he like it?\nMIMI:  No, he does not! He never has free time." },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. What time does Hana start and finish?",
      "2. Which day does she not work?",
      "3. How often does Mimi study?",
      "4. Who studies every day?",
      "5. Does Mimi's brother like it?",
    ] },
    notes: tn({
      time: "11 minutes.",
      how: "Read the whole conversation twice, changing your voice for the two speakers. Then read the questions before learners write.",
      mistakes: "Question 5 needs a negative short answer: “No, he does not.” Learners answer “No” alone.",
      extra: "Ask a sixth: “How many -s endings can you hear?” There are four: studies, studies, does, has.",
      answers: "1 She starts at seven and finishes at four. · 2 Sunday. · 3 Four days a week. · 4 Mimi's brother. · 5 No, he does not.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Full sentences. Check the -s every time.",
    size: 17,
    items: [
      { q: "1 — Hana's hours", a: "She starts at seven and finishes at four.", why: "Two verbs, both third person, so both take the ending — and “finishes” adds a syllable." },
      { q: "2 — the day she does not work", a: "She does not work on Sunday.", why: "“Does not” carries the -s, so “work” stays in its base form. ON for a day." },
      { q: "3 — how often Mimi studies", a: "She studies four days a week.", why: "“Study” is consonant + y, so it becomes “studies”. “Four days a week” goes at the end." },
      { q: "4 — who studies every day", a: "Mimi's brother studies every day.", why: "One person, so -s. Note the possessive “Mimi's” with an apostrophe." },
      { q: "5 — does he like it?", a: "No, he does not. He never has free time.", why: "A short answer keeps the auxiliary. And “have” becomes “has” after “he”." },
    ],
    notes: keyNotes("Answers 1 and 2 sit side by side deliberately: “finishes” takes the -s, “does not work” does not. That contrast is the entire module in two lines."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to hear the -s", sub: "Four habits for catching the endings in fast speech.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaUser", title: "Listen for the person first", desc: "If you catch “he”, “she” or a name, you know an -s is coming. The subject predicts the ending." },
      { icon: "FaVolumeUp", title: "The -s is quiet — but it is there", desc: "It is a short hiss at the end of the word. Once you know to listen for it, you start hearing it everywhere." },
      { icon: "FaRedo", title: "Count the syllables", desc: "“Watches” has two beats, “watch” has one. The extra beat is easier to hear than the /s/ itself." },
      { icon: "FaHandPaper", title: "Listen for do or does", desc: "If you hear “does”, the main verb will NOT have an -s. The auxiliary tells you what to expect." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Read ten sentences at natural speed and have learners raise a hand every time they hear a third-person -s. It is harder than it sounds and it improves quickly with practice.",
      mistakes: "Learners who cannot hear the -s will not produce it. Listening practice is not optional for this grammar point — it is the foundation of it.",
      tip: "Habit 1 is the most useful: the subject predicts the ending, so learners can prepare their ear before the verb arrives.",
      activity: "Hand-up drill: read a short text and have the class raise a hand at every -s. Then read it again slowly and count together.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — a day at the coffee shop", sub: "Read it aloud twice before you answer.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 19, lsm: 1.38,
      text: "Dawit works in a coffee shop in Bole.\nHe wakes up at five o'clock every morning.\nHe walks to work because the shop is near his home.\nThe shop opens at six thirty.\nDawit usually serves fifty customers before nine o'clock.\nHe finishes at three and studies English in the evening.\nHe does not work on Sunday. On Sunday he visits his family." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the whole text once.",
      "The class reads it together, in chorus.",
      "Then seven learners read one line each.",
      "Underline every -s ending. There are eight.",
    ] },
    notes: tn({
      time: "11 minutes.",
      how: "Teacher, chorus, individuals, then the underlining task. Marking up the text makes the pattern visible and is far more active than answering questions alone.",
      mistakes: "The eight -s endings: works, wakes, walks, opens, serves, finishes, studies, visits. “Does not work” has no -s on the verb — check whether learners underlined it wrongly.",
      extra: "New word: “serves”. Teach it from context — he works in a coffee shop and serves customers.",
      tip: "Ask learners why “does not work” has no -s. If they can answer, the rule has landed.",
      activity: "Rewrite it as “I”: learners rewrite the whole text in the first person and see all eight endings disappear.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE. Check the -s on every verb.",
    items: [
      "What time does Dawit wake up?",
      "How does he get to work?",
      "What time does the shop open?",
      "What does he do in the evening?",
      "What does he do on Sunday?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Every answer needs a third-person verb. That is what is being assessed, not the facts.",
      mistakes: "Question 2 needs “He walks” — learners answer “walking” or “on foot”, which are understandable but avoid the grammar.",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 He wakes up at five o'clock. · 2 He walks to work. · 3 It opens at six thirty. · 4 He studies English. · 5 He visits his family.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Every answer has a third-person verb. Check yours.",
    size: 17,
    items: [
      { q: "1 — What time does he wake up?", a: "He wakes up at five o'clock.", why: "The -s goes on “wake”, the first word of the two-word verb — never “wake ups”." },
      { q: "2 — How does he get to work?", a: "He walks to work.", why: "A full verb, not just “on foot”. The question uses “does”, so the answer uses the -s form." },
      { q: "3 — What time does the shop open?", a: "It opens at six thirty.", why: "“The shop” is “it”, so it takes -s just like he and she." },
      { q: "4 — What does he do in the evening?", a: "He studies English.", why: "“Study” is consonant + y, so it becomes “studies”." },
      { q: "5 — What does he do on Sunday?", a: "He visits his family.", why: "ON for a day, and the -s on “visits”. Two Level 1 rules and one Level 2 rule in five words." },
    ],
    notes: keyNotes("Notice the pattern across all five: the question uses “does” with no -s, and the answer uses the -s with no “does”. Point that out — it is the module's whole system."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a family of routines", sub: "A longer text with several people.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 18, lsm: 1.34,
      text: "The Alemu family lives in Adama.\nAto Alemu drives a bus. He starts at five in the morning and finishes at seven at night.\nW/ro Alemu teaches at a primary school. She works from eight to four.\nTheir two sons go to school. They study every evening.\nThe family eats dinner together at eight o'clock.\nOn Sunday nobody works. They visit their grandmother." },
    side: { label: "New words here", color: C.read, size: 16, items: [
      "drives — the job of a driver",
      "teaches — the job of a teacher",
      "primary school — for young children",
      "together — with each other",
      "Which verbs have -s and which do not? Why?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "This text mixes singular and plural subjects deliberately. The finding task is the point: “drives, finishes, teaches, works, eats” take -s; “go, study, visit” do not, because the subjects are plural.",
      mistakes: "“Nobody works” takes -s even though it feels plural. Do not explain the grammar — just say it is one of the words that acts like “he”.",
      extra: "Ato and W/ro are the Ethiopian titles for Mr and Mrs. Point that out — it is correct and natural in an Ethiopian text.",
      tip: "This text is the best -s diagnostic in the module because the subject changes every line. Use it as your assessment.",
      activity: "Sort the verbs: two columns on the board, -s and no -s. Learners place all eight verbs and say why.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — questions, answers and vocabulary review", sub: "Answer first, then check.",
    size: 17,
    items: [
      { q: "1 — What does Ato Alemu do?", a: "He drives a bus.", why: "One person, so -s. The question uses “does” and the answer uses the -s form." },
      { q: "2 — What time does W/ro Alemu finish?", a: "She finishes at four.", why: "“Finish” ends in sh, so -es, and it adds a syllable: fin-ish-es." },
      { q: "3 — What do the two sons do?", a: "They go to school and they study every evening.", why: "“They” is plural, so NO -s on either verb. Note the question uses “do”, not “does”." },
      { q: "4 — When does the family eat dinner?", a: "They eat dinner at eight o'clock.", why: "“The family” can be treated as one unit — “the family eats” — or as “they eat”. Both are acceptable." },
      { q: "5 — Vocabulary check: name the five words from this module.", a: "wake up · breakfast · usually · never · finish", why: "All five appeared in this module. Three of them are in these two texts — find them again." },
    ],
    notes: keyNotes("Question 3 is the contrast question: plural subject, no -s, and the auxiliary is “do” not “does”. If learners get that right, they have understood the system rather than memorised a habit."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — put the verb in the right form", sub: "Add -s only where it belongs.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Copy each sentence and write the correct form of the verb.",
    items: [
      "1.  My sister ______ in a hospital.  (work)",
      "2.  They ______ English every evening.  (study)",
      "3.  He ______ television after dinner.  (watch)",
      "4.  I ______ coffee in the morning.  (drink)",
      "5.  The shop ______ at eight o'clock.  (open)",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Do item 1 together, asking the test question — is the subject he, she or it? — then let them work alone.",
      answers: "1 works · 2 study · 3 watches · 4 drink · 5 opens",
      mistakes: "Item 2 has a plural subject and item 4 has “I”, so neither takes -s. Learners who have just learned the rule add it everywhere.",
      tip: "Item 3 needs -es and an extra syllable. Item 5 has an “it” subject, which learners often miss because it is not a person.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — “My Day”", sub: "The Level 2 writing task. Eight sentences about your routine.",
    panelW: 7.6,
    panel: { label: "Write eight sentences using this frame", color: C.write, tint: C.writeTint, size: 19, lsm: 1.5,
      text: "I wake up at ______.\nI have breakfast at ______.\nI go to ______ at ______.\nI usually ______ in the morning.\nI finish at ______.\nIn the evening I ______.\nI never ______.\nOn Sunday I ______." },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Is there a capital letter and a full stop in every sentence?",
      "Are the times correct — at, on, in?",
      "Are the frequency words BEFORE the verb?",
      "Did you use “I”, so there is no -s anywhere?",
      "Now write it again about a family member — every verb needs -s.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "The last check on the right is the real task. Writing it about themselves is easy; rewriting it in the third person is where the learning happens. Insist on both versions.",
      mistakes: "In the rewritten version learners change the first two verbs and forget the rest. Tell them to underline every verb before they start.",
      extra: "Fast finishers add two negative sentences.",
      tip: "Collect both versions. Comparing them side by side is the clearest possible feedback on the -s.",
      activity: "Swap and check: partners underline every verb in each other's third-person version and tick or cross the ending.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — negatives and questions", sub: "Change each sentence as instructed.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write the full new sentence each time.",
    items: [
      "1.  Make it negative:  “She likes coffee.”",
      "2.  Make it negative:  “They work on Saturday.”",
      "3.  Make it a question:  “He lives in Adama.”",
      "4.  Make it a question:  “You study every day.”",
      "5.  Ask about the time:  “The shop opens at eight.”",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Do item 1 together, moving the -s physically from the verb to “does”. Then let them work alone.",
      answers: "1 She does not like coffee. · 2 They do not work on Saturday. · 3 Does he live in Adama? · 4 Do you study every day? · 5 What time does the shop open?",
      mistakes: "Items 1 and 3 both require removing the -s. That is the step learners forget.",
      tip: "Item 5 has three parts — question word, auxiliary, base verb. It is the hardest and the most useful.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — answers and why", sub: "Watch where the -s goes each time.",
    size: 17,
    items: [
      { q: "1 — negative of “She likes coffee.”", a: "She does not like coffee.", why: "The -s moves from “likes” to “does”. It appears exactly once in the sentence." },
      { q: "2 — negative of “They work on Saturday.”", a: "They do not work on Saturday.", why: "“They” takes “do not”. There was no -s to move, so nothing else changes." },
      { q: "3 — question from “He lives in Adama.”", a: "Does he live in Adama?", why: "“Does” goes first and takes the -s, so “lives” returns to “live”." },
      { q: "4 — question from “You study every day.”", a: "Do you study every day?", why: "“You” takes “do”. The main verb is unchanged and the full stop becomes a question mark." },
      { q: "5 — asking about the time", a: "What time does the shop open?", why: "Question word, then “does”, then the subject, then the base verb. Four parts in a fixed order." },
    ],
    notes: keyNotes("Items 1 and 3 are the diagnostic pair. A learner who wrote “does not likes” or “Does he lives” is double-marking, which is the module's central error."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist for this module", sub: "Add these to your Level 1 checks.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "Is there -s on the verb after he, she, it or one person's name?", d: "“My sister works.” — not “My sister work.”" },
      { t: "Is the -s spelled correctly?", d: "goes · studies · watches · has. Check the ending of the verb first." },
      { t: "Is the main verb WITHOUT -s after do, does, don't or doesn't?", d: "“She does not work.” — not “does not works”." },
      { t: "Is the frequency word before the verb?", d: "“I usually walk.” — not “I walk usually”." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points, then have learners check their “My Day” third-person version against all four.",
      tip: "These four checks are the marking standard for the whole of Level 2. Put them on the wall next to the Level 1 checks.",
      activity: "Deliberate error hunt: write four sentences on the board with exactly four errors, one of each type.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Which is correct?", opts: "a) She work here.     b) She works here.     c) She working here." },
      { q: "2. Complete: “They ___ in Gondar.”", opts: "a) lives     b) live     c) living" },
      { q: "3. Which is correct?", opts: "a) He doesn't works.     b) He doesn't work.     c) He don't work." },
      { q: "4. Complete: “___ she like coffee?”", opts: "a) Do     b) Does     c) Is" },
      { q: "5. Which is correct?", opts: "a) I always drink tea.     b) I drink always tea.     c) Always I drink tea." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 a",
      tip: "Question 3 is the diagnostic. A learner choosing a) is double-marking and needs slide 18 again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Write the correct form of the verb.",
    color: C.green, instruction: "Copy each sentence and fill the gap.", size: 18,
    items: [
      "1.  My father ______ a bus.  (drive)",
      "2.  We ______ English on Monday.  (study)",
      "3.  She ______ her homework every evening.  (finish)",
      "4.  The bank ______ at eight thirty.  (open)",
      "5.  My brothers ______ football at the weekend.  (play)",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Ask the test question aloud for each: is the subject he, she or it?",
      answers: "1 drives · 2 study · 3 finishes · 4 opens · 5 play",
      mistakes: "Items 2 and 5 have plural subjects and take no -s. Item 3 needs -es and an extra syllable.",
      tip: "Item 5 uses “play”, which has a vowel before the y — so it would be “plays” for one brother. Point out the contrast.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Match the subject to the verb, and the question to the answer.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the SUBJECT to the VERB FORM", opts: "1. I     2. My sister     3. They     4. The shop          a) opens     b) work     c) works     d) work" },
      { q: "Part 2 — match the QUESTION to the ANSWER", opts: "1. Do you work here?     2. Does she like tea?     3. What time do you start?     4. How often does he come?" },
      { q: "a) At seven o'clock.        b) Yes, I do.", opts: "c) Twice a week.        d) No, she does not." },
      { q: "Part 3 — match the VERB to its -s FORM", opts: "1. study     2. watch     3. have     4. go          a) has     b) studies     c) goes     d) watches" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks, three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–b, 2–c, 3–d, 4–a.  ·  Part 2: 1–b, 2–d, 3–a, 4–c.  ·  Part 3: 1–b, 2–d, 3–a, 4–c.",
      tip: "Part 3 covers all four spelling patterns in one task. A learner who gets all four has the spelling rules.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — write the -s form", sub: "Apply the spelling rules.",
    color: C.green, instruction: "Write the he/she/it form of each verb.", size: 19,
    items: [
      "1.  work · live · eat · read",
      "2.  watch · wash · fix · teach",
      "3.  study · carry · try · fly",
      "4.  play · buy · say · stay",
      "5.  go · do · have",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Each row is one spelling rule. Do row 1 together, then let them work alone. Then read all twenty aloud so learners hear the extra syllable in row 2.",
      answers: "1 works, lives, eats, reads · 2 watches, washes, fixes, teaches · 3 studies, carries, tries, flies · 4 plays, buys, says, stays · 5 goes, does, has",
      mistakes: "Row 4 is the trap: vowel + y, so just -s. Learners who have just done row 3 write “plaies”.",
      tip: "Row 5 is three irregulars in one line. Drill them separately and often.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each sentence has one or more errors.",
    color: C.green, instruction: "Rewrite each sentence correctly.", size: 18,
    items: [
      "1.  My mother work in a school.",
      "2.  He doesn't likes coffee.",
      "3.  Does she lives in Adama?",
      "4.  I drink always tea in the morning.",
      "5.  They studys English every day.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each sentence. Sentence 5 has two.",
      answers: "1 My mother works in a school. · 2 He does not like coffee. · 3 Does she live in Adama? · 4 I always drink tea in the morning. · 5 They study English every day.",
      mistakes: "Sentence 5 has two errors: the plural subject takes no -s, AND the spelling would be “studies” if it did. Learners fix one and stop.",
      tip: "These five are the four checks from slide 20 plus one spelling error. Every error here is one you will meet again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  We add -s to the verb after he, she and it.",
      "2.  “She doesn't works” is correct English.",
      "3.  The verb “have” becomes “haves” after he.",
      "4.  Frequency words go before the main verb.",
      "5.  “Do you like coffee?” is a correct question.",
      "6.  “Study” becomes “studys” after she.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test.",
      answers: "1 T · 2 F — “She doesn't work” · 3 F — it becomes “has” · 4 T · 5 T · 6 F — it becomes “studies”",
      tip: "Item 2 is the double-marking error. If several learners mark it true, redo slide 18 before the quiz.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Answer in a full sentence.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What time do you wake up?",
      "2.  How do you get to work or school?",
      "3.  What does your mother or father do?",
      "4.  How often do you speak English?",
      "5.  What do you never do?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Items 1, 2, 4 and 5 use “I” and need no -s. Item 3 needs it. That mix is deliberate.",
      answers: "1 I wake up at ___. · 2 I walk / take the bus / drive. · 3 He/She works as a ___. · 4 I speak English ___. · 5 I never ___.",
      mistakes: "Item 3 is the only third-person item. Learners answer with the base verb.",
      tip: "Ask three learners to read item 3 aloud. It is the quickest check of whether the module has landed.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Describe your day in eight sentences.",
      "2.  Describe your partner's day back to them — every verb needs -s.",
      "3.  Ask five questions with DO and DOES.",
      "4.  Say three things you never do and two you always do.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Give each partner a listening job: task 2 count the -s endings, task 3 check the auxiliary comes first.",
      answers: "SUCCESS CRITERIA: 1 eight sentences with times · 2 -s on every verb · 3 five correct questions with no -s on the main verb · 4 frequency words before the verb.",
      tip: "Task 2 is the module assessment. Listen to as many pairs as you can.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These use everything from this module.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write six sentences about a family member's routine. Every verb must be third person.", opts: "Check all six endings." },
      { q: "2. Correct this:  “My sister work in a bank. She don't work on Sunday. Does she likes it?”", opts: "There are four things to fix." },
      { q: "3. Write three questions with DO and three with DOES.", opts: "Six questions in total." },
      { q: "4. Write the -s form of:  go · study · watch · have · play · fix", opts: "Six verbs, four rules." },
      { q: "5. Write one sentence with a frequency word, one negative and one question — about the same person.", opts: "Three sentences." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard.",
      answers: "2 “My sister works in a bank. She does not work on Sunday. Does she like it?” — missing -s, wrong auxiliary (don't → doesn't), and the -s wrongly kept on “likes”. 4 goes, studies, watches, has, plays, fixes.",
      tip: "Question 2 stacks three different error types in three short sentences. That is much harder than one at a time, and it is deliberate.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. The -s adds no meaning at all. So why does it matter?", opts: "What happens when a listener does not hear it?" },
      { q: "2. Why do learners say “She doesn't likes”? What are they thinking?", opts: "It is a logical mistake, not a careless one." },
      { q: "3. Your friend says “Where you work?” How would you explain the missing word?", opts: "How would you teach it so they remember?" },
      { q: "4. Which is more useful to practise: the -s in writing, or the -s in speaking? Why?", opts: "Where do you use English most?" },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning, then give the English phrase for what they said.",
      answers: "1 It carries no meaning, but its absence is immediately noticeable to a listener and marks the speaker as a learner — it affects how the speaker is judged, not whether they are understood. 2 They are applying the rule they just learned — third person means -s — without noticing that “does” has already taken it. It is over-application, which is a sign of learning. 3 Any clear explanation; the strongest shows that English needs an auxiliary in questions and builds the question from the statement step by step. 4 Speaking, because that is where the -s is dropped under pressure, and because writing gives you time to check while speaking does not.",
      tip: "Question 2 matters emotionally: learners who understand that their error is a sign of learning rather than stupidity keep trying.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · The -s ending", items: [
      { q: "1. Which is correct?", opts: "a) She work here.     b) She works here.     c) She is work here." },
      { q: "2. Complete: “My brother ___ in Bahir Dar.”  (live)", opts: "Write the correct form." },
      { q: "3. Complete: “They ___ English every day.”  (study)", opts: "Write the correct form." },
      { q: "4. Which subjects take -s?", opts: "a) I, you, we     b) he, she, it     c) all of them" },
    ] },
    { part: "Part 2 · Spelling", items: [
      { q: "5. The he/she form of “go” is …", opts: "a) gos     b) goes     c) goies" },
      { q: "6. The he/she form of “study” is …", opts: "a) studys     b) studies     c) studyes" },
      { q: "7. The he/she form of “have” is …", opts: "a) haves     b) has     c) haves" },
      { q: "8. Write the he/she form of:  watch · play · finish", opts: "Three verbs, three rules." },
    ] },
    { part: "Part 3 · Negatives and questions", items: [
      { q: "9. Make it negative: “She likes tea.”", opts: "Write the full sentence." },
      { q: "10. Which is correct?", opts: "a) He doesn't works.     b) He doesn't work.     c) He don't works." },
      { q: "11. Make it a question: “They live in Gondar.”", opts: "Write the full sentence." },
      { q: "12. Complete: “___ your sister work here?”", opts: "a) Do     b) Does     c) Is" },
    ] },
    { part: "Part 4 · Frequency and listening", items: [
      { q: "13. Where does “always” go?", opts: "a) before the verb     b) at the end     c) at the start" },
      { q: "14. Correct this: “I drink never coffee.”", opts: "Write the full sentence." },
      { q: "15. Listen: what time does the speaker start work?", opts: "Write the time." },
      { q: "16. Listen: which day does the speaker NOT work?", opts: "Write the day." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write two sentences about your own routine.", opts: "Use a time in each." },
      { q: "18. Write two sentences about a family member's routine.", opts: "Every verb needs -s." },
      { q: "19. Write one negative sentence and one question.", opts: "Check the main verb has no -s." },
      { q: "20. SPEAKING: describe your day, then your partner's day.", opts: "Your teacher or partner listens and checks." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 1 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nFOR QUESTIONS 15 AND 16, READ ALOUD: “I start work at half past seven every morning. I never work on Friday.”",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — which is correct?", a: "b) She works here.", why: "“She” is third person singular, so the verb takes -s. Option c) mixes two tenses." },
      { q: "Q2 — “My brother ___ in Bahir Dar.”", a: "lives", why: "“My brother” is one man, so it behaves like “he”. The name or description does not change the rule." },
      { q: "Q3 — “They ___ English every day.”", a: "study", why: "“They” is plural, so there is no -s. The -ies spelling only applies to the third-person singular form." },
      { q: "Q4 — which subjects take -s?", a: "b) he, she, it", why: "Only these three, plus any single person or thing that can be replaced by one of them." } ],
    [ { q: "Q5 — “go”", a: "b) goes", why: "Verbs ending in o take -es. “Gos” is the commonest spelling error in this module." },
      { q: "Q6 — “study”", a: "b) studies", why: "Consonant + y becomes -ies. Compare “play”, which has a vowel before the y and takes only -s." },
      { q: "Q7 — “have”", a: "b) has", why: "Irregular. It follows no rule and must be memorised on its own." },
      { q: "Q8 — watch · play · finish", a: "watches · plays · finishes", why: "Three different rules: -es after ch, plain -s after a vowel + y, and -es after sh with an extra syllable." } ],
    [ { q: "Q9 — negative of “She likes tea.”", a: "She does not like tea.", why: "The -s moves from “likes” onto “does”. It appears exactly once in the sentence." },
      { q: "Q10 — which is correct?", a: "b) He doesn't work.", why: "“Doesn't” already carries the -s, so the main verb returns to its base form." },
      { q: "Q11 — question from “They live in Gondar.”", a: "Do they live in Gondar?", why: "“They” takes “do”. The main verb does not change and the full stop becomes a question mark." },
      { q: "Q12 — “___ your sister work here?”", a: "b) Does", why: "“Your sister” is one person, so it takes “does” — and “work” therefore has no -s." } ],
    [ { q: "Q13 — where does “always” go?", a: "a) before the verb", why: "“I always drink coffee.” The exception is with the verb “to be”, where it goes after: “He is always late.”" },
      { q: "Q14 — correct “I drink never coffee.”", a: "I never drink coffee.", why: "The frequency word goes before the main verb, not after it." },
      { q: "Q15 — what time?", a: "Half past seven.  (7:30)", why: "The speaker says “half past seven”. Both forms are acceptable in the answer." },
      { q: "Q16 — which day?", a: "Friday.", why: "“I never work on Friday.” ON for a day, and Friday takes a capital letter." } ],
    [ { q: "Q17 — your own routine", a: "e.g. “I wake up at six o'clock. I start work at eight.”", why: "With “I” there is no -s. Marked on the times and the sentence structure." },
      { q: "Q18 — a family member's routine", a: "e.g. “My mother wakes up at five. She works in a school.”", why: "Every verb needs -s. This is the item that carries the most marks." },
      { q: "Q19 — a negative and a question", a: "e.g. “He does not work on Sunday.”  “Do you like coffee?”", why: "In both, the main verb has no -s, because the auxiliary carries it." },
      { q: "Q20 — speaking task", a: "Your day, then your partner's day", why: "Marked on the -s in the second half. The first half needs none, the second needs it on every verb." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q1, Q10 and Q12 are the diagnostic questions. Q1 shows whether the -s is being added; Q10 and Q12 show whether it is being wrongly kept after the auxiliary. If the class failed those, drill slides 18 and 19 before Module 2."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Out loud.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Chant the verb forms", d: "“I work, you work, he works, she works, it works, we work, they work.” Five times." },
      { t: "Describe your day out loud", d: "Ten sentences, standing up. Then say it again about a family member." },
      { t: "Write the -s form of twenty verbs", d: "Five from each spelling rule. Check them against slide 17." },
      { t: "Ask five people a DO question", d: "In English if you can. Family counts." },
      { t: "Say five sentences with frequency words", d: "always · usually · often · sometimes · never." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's chant is the most valuable and takes sixty seconds. Insist on it daily.",
      tip: "Tuesday's second half — the third-person version — is where the learning is. Learners who only do the first half are practising the easy part.",
      activity: "Ask learners to send one classmate a third-person sentence in English each evening.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write “My Day” — eight sentences", d: "About yourself, with times and three frequency words." },
      { t: "Write the same eight sentences about someone else", d: "A family member or a friend. Every verb needs -s. Underline all eight endings." },
      { t: "Record your 90-second speaking challenge", d: "Your routine · three frequency words · two negatives · a family member's routine · two questions." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 2 is the real assessment. Show your own completed example of both versions side by side so the difference is visible.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording personally, by voice, within two days. Listen specifically for the -s in the third-person section.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaPencilAlt", title: "“My Day” — 5 marks", desc: "Eight sentences (2) · correct times with at/on/in (2) · three frequency words in the right position (1)." },
      { icon: "FaCheck", title: "Third-person version — 10 marks", desc: "Eight sentences (2) · -s on every verb (5) · correct spelling of the -s forms (3)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five parts (3) · -s throughout the third-person section (4) · no -s after do or does (2) · understandable (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework. Note that the -s carries the most marks — that tells learners exactly what matters.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Mark only what has been taught. Do not penalise Level 1 errors here unless they were on the Level 1 checklist.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaRedo", title: "The present simple", desc: "For habits, routines and facts — not for what is happening now." },
      { icon: "FaCheck", title: "The -s ending", desc: "He, she and it add -s. Nothing else does. The most corrected error in English." },
      { icon: "FaFont", title: "The spelling rules", desc: "-s · -es after ch, sh, s, x, o · -ies after consonant + y · and “has”." },
      { icon: "FaTimes", title: "Negatives", desc: "do not · does not — and the main verb loses its -s." },
      { icon: "FaQuestion", title: "Questions", desc: "Do · Does at the front, base verb after. “Does she work here?”" },
      { icon: "FaClock", title: "Frequency words", desc: "always · usually · often · sometimes · never — before the verb." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2 and read the objectives again. Ask the same question you asked at the start.",
      tip: "Ask each learner to name the one thing they found hardest. That list is your plan for the first ten minutes of Module 2.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaSitemap", title: "The full set", desc: "I work · you work · HE WORKS · SHE WORKS · IT WORKS\nwe work · they work" },
      { icon: "FaFont", title: "The spelling rules", desc: "most: + s  →  works\nch, sh, s, x, o: + es  →  goes, watches\nconsonant + y: → ies  →  studies\nhave  →  HAS" },
      { icon: "FaTimes", title: "Negative and question", desc: "She does not WORK.  (no -s on the verb)\nDoes she WORK here?  (no -s on the verb)\nThe -s appears exactly once." },
      { icon: "FaClock", title: "Frequency words", desc: "always · usually · often · sometimes · never\nBEFORE the main verb: “I always walk.”\nAFTER “to be”: “He is always late.”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it. It is the reference page for the whole of Level 2.",
      tip: "Print it as an A4 poster. You will point at it in every lesson for the next two months.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now describe a whole life — not just a moment.",
    sub: "What you do every day, what you never do, what someone else does, and how to ask about it.\nThe small letter -s will take a few more weeks to become automatic. That is normal, and it is worth the work.",
    chips: ["NEXT — Module 2", "Present Continuous", "What is happening RIGHT NOW — and how it differs from this module"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the achievement: they can now talk about routines, which is most of what people actually say about their lives. And be honest about the -s — it takes weeks, not days.",
      tip: "Preview Module 2 clearly: the next tense is for right now, and the two are taught together deliberately so learners never confuse them. That reassures anyone who is finding this one hard.",
      activity: "Ask every learner to say one sentence about a family member — with the -s — before they leave.",
    }),
  });
};
