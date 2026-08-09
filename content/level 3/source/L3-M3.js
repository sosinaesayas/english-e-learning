"use strict";
/* LEVEL 3 · MODULE 3 — Accuracy & Common Errors   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 3", levelNo: LV.no, levelName: "Intermediate\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Accuracy & Common Errors",
    sub: "Ten errors survive all the way to advanced level — not because they are hard, but because nobody ever corrects them. This module hunts them down.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "10", v: "TARGET ERRORS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by naming the switch. Module 1 said ignore your errors and keep going. This module says stop and fix them. Both are correct — at different moments — and learners must be told which mode they are in.",
      tip: "These ten errors do not stop you being understood, which is exactly why they survive. Listeners understand and move on, so nobody ever tells you. That is the whole problem.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. All of them are about noticing.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Fix the third-person -s for good", d: "He works. She goes. It costs. The most persistent error in English." },
      { t: "Use a, an, the and no article with a system", d: "Not by feel. There is an actual decision you can make." },
      { t: "Get in, on and at right for time and place", d: "Three prepositions cover most of what you need." },
      { t: "Build questions and negatives correctly, at speed", d: "The helper rule, and why word order changes." },
      { t: "Find your OWN errors before anyone else does", d: "The skill that keeps working after this course ends." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 5 is the real one. Learners who can self-edit continue improving for years; learners who depend on a teacher stop the day the course ends.",
      tip: "Objective 1 is the flagship. If a learner leaves Level 3 with the third-person -s automatic, this module has paid for itself.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: find the errors", sub: "Five sentences. Each has exactly one error.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaSearch", title: "1 · Find them", desc: "“He work in Adama.”\n“I need a information.”\n“She is teacher.”\n“Where you are going?”\n“I didn't went.”" },
      { icon: "FaClock", title: "2 · Time yourself", desc: "How long did it take to find all five? Did you find all five?" },
      { icon: "FaQuestion", title: "3 · Be honest", desc: "Do YOU make any of these? Which one? Nobody is judging — this is a diagnosis." },
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Most classes find three or four quickly and miss one. Whichever one the class misses is the one to teach hardest — that is your real curriculum for this module.",
      mistakes: "Correct nothing yet. Note which errors went unnoticed.",
      answers: "He workS · I need SOME information (no article, uncountable) · She is A teacher · Where ARE YOU going · I didn't GO.",
      tip: "Task 3 usually reveals that learners know the rule and still make the error. Name that gap — it is what fossilisation means, and slide 5 explains it.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "You already know these rules. Knowing them was never the problem.",
    sub: "These errors survive because they do not stop communication. The listener understands and says nothing,\nso the wrong version gets practised thousands of times until it feels correct.",
    chips: ["Knowing ≠ doing", "Nobody corrects you", "Notice it to fix it"],
    notes: tn({
      time: "6 minutes.",
      how: "Ask who knows that “he” takes an -s. Every hand goes up. Then ask who still says “he work” under pressure. Most hands stay up. That gap is the entire subject of this module.",
      mistakes: "Teaching the rule again is the standard response and it does not work — the rule is already known. What is missing is noticing, which is a different skill entirely.",
      extra: "In language teaching this is called fossilisation: an error that has stopped improving because it never causes a problem.",
      tip: "Say clearly that this module will feel repetitive. It is meant to. Un-learning a habit takes far more repetition than learning a rule did.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.panelSide({
    sec: SEC.con, title: "Why these errors survive", sub: "Understand the mechanism and the fix becomes obvious.",
    panelW: 6.7,
    panel: { label: "How an error becomes permanent", color: C.green, tint: C.readTint, size: 17.5, lsm: 1.42,
      text: "1.  You say “he work”.\n2.  The listener understands perfectly.\n3.  Nobody corrects you.\n4.  You say it again. And again.\n5.  After 5,000 times it FEELS right.\n6.  Now the correct form feels wrong.\n\nThat is why knowing the rule\nchanges nothing on its own." },
    side: { label: "What actually breaks it", color: C.green, size: 16, items: [
      "NOTICING it as you say it — not afterwards.",
      "Slow, deliberate practice where you cannot hide.",
      "Someone or something that corrects you every time.",
      "Enough repetition that the correct form becomes the automatic one.",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "Step 6 is the important one. The correct form feels wrong to a learner who has said the incorrect one for years, and if they are not warned they will assume the correction is wrong.",
      mistakes: "Learners get discouraged when the right version feels unnatural. Tell them in advance that it will, and that the feeling passes in a few weeks.",
      extra: "This is exactly why Module 1 and this module are separated. You cannot notice errors and speak fluently at the same time — attention is finite.",
      tip: "Say the estimate honestly: about three weeks of daily attention to un-learn one fossilised error. That is achievable, and knowing the timescale stops people giving up in week one.",
      activity: "Which is yours? Every learner names the one error they know they still make.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the ten errors
  L.table({
    sec: SEC.con, title: "The ten errors — the full list",
    sub: "These ten account for most intermediate mistakes. All ten are fixable.",
    table: {
      color: C.green, rowH: 0.42, fontSize: 16, headSize: 15.5, colW: [4.6, 3.6, 3.933],
      rows: [
        ["Error", "Wrong", "Right"],
        ["1. Third-person -s missing", "he work", "he workS"],
        ["2. Article missing or wrong", "She is teacher", "She is A teacher"],
        ["3. Uncountable made plural", "informations", "information"],
        ["4. Question not inverted", "Where you are going?", "Where ARE YOU going?"],
        ["5. Past marked twice", "I didn't went", "I didn't GO"],
        ["6. Plural -s missing", "three book", "three bookS"],
        ["7. He / she confused", "My sister… he said", "…SHE said"],
        ["8. Wrong preposition", "in Monday", "ON Monday"],
        ["9. “Be” dropped", "She very tired", "She IS very tired"],
        ["10. Adverb in wrong place", "He works probably here", "He PROBABLY works here"],
      ],
    },
    notes: tn({
      time: "14 minutes.",
      how: "Read all ten aloud, wrong version then right version. Ask the class to raise a hand on any they recognise in their own English. The show of hands tells you where to spend the module.",
      mistakes: "Do not try to fix all ten. Slides 7 to 10 take the four hardest; the rest are covered in the practice section.",
      extra: "Errors 1, 6 and 9 all come from the same source: English marks grammar with small sounds at the ends of words, and those sounds are easy to drop.",
      tip: "Connect this to Module 2 slide 18. Half of these are pronunciation problems as much as grammar problems — the -s is missing from the mouth, not from the knowledge.",
      activity: "Own it: every learner writes down their top three from this list and keeps the paper.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — third person -s
  L.compare({
    sec: SEC.con, title: "Error 1 — the third-person -s",
    sub: "One person, one letter, and it survives to advanced level.",
    left: { h: "NO -s", items: ["I work", "you work", "we work", "they work", "Sara and Dawit work", "the teachers work"] },
    right: { h: "ADD -s", items: ["he workS", "she workS", "it workS", "Sara workS", "the teacher workS", "everybody workS"] },
    note: "Only he, she and it. Everything else takes no -s. If you can replace the subject with he, she or it — add the -s.",
    notes: tn({
      time: "14 minutes.",
      how: "Give the replacement test as a physical procedure: point at the subject, ask “is it he, she or it?”, then add the -s. Applied mechanically it works every time.",
      mistakes: "“Everybody”, “everyone” and “nobody” all take the -s, which surprises learners because they feel plural. Drill those three separately.",
      extra: "Irregular forms: have → has · do → does · go → goes · be → is. These four are the most frequent verbs in English, which is why the error is so visible.",
      tip: "Under pressure the -s is the first thing to go. That is a speed problem, not a knowledge problem, and it needs drilling at speed rather than more explanation.",
      activity: "Subject swap: give a sentence with “they” and have learners repeat it with “he”, adding the -s. Twenty rounds, fast.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — articles
  L.panelSide({
    sec: SEC.con, title: "Errors 2 and 3 — articles, as a decision not a feeling", sub: "Ask three questions in order. The answer comes out.",
    panelW: 7.0,
    panel: { label: "The article decision", color: C.green, tint: C.readTint, size: 17, lsm: 1.38,
      text: "Q1.  Can you count it?\n        NO  →  no article.  (information, advice)\n\nQ2.  Does the listener know WHICH one?\n        YES →  the.  (the report I sent you)\n\nQ3.  Is it the first time you mention it?\n        YES →  a / an.  (I wrote a report)\n\nJobs ALWAYS take a / an:  She is A teacher." },
    side: { label: "The three commonest slips", color: C.green, size: 16, items: [
      "“She is teacher.” — jobs always need a or an.",
      "“I need an information.” — uncountable, so no article at all.",
      "“I saw the car yesterday” when the listener does not know which car.",
      "Rule of thumb: first mention a, second mention the.",
    ] },
    notes: tn({
      time: "16 minutes. The longest concept slide, and articles deserve it.",
      how: "Work the three questions as a flowchart on the board with a real sentence. Learners have usually been told articles are a matter of feel; showing them a decision procedure changes that.",
      mistakes: "Many first languages have no articles at all, so there is no equivalent to transfer and the whole system has to be built new.",
      extra: "The first-mention / second-mention pattern is the clearest demonstration: “I bought a car. The car is red.” Same object, different article, and the reason is obvious.",
      tip: "Do not attempt every article rule. These three questions plus the job rule cover the great majority of real cases.",
      activity: "Three questions: give twenty nouns in context and have learners work the flowchart aloud for each.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — questions
  L.compare({
    sec: SEC.con, title: "Errors 4 and 5 — questions and negatives",
    sub: "English moves the helper to the front. Nothing else changes.",
    left: { h: "Wrong", items: ["Where you are going?", "You like coffee?", "What time it starts?", "I didn't went.", "She don't work here.", "Why he is late?"] },
    right: { h: "Right", items: ["Where ARE you going?", "DO you like coffee?", "What time DOES it start?", "I didn't GO.", "She DOESN'T work here.", "Why IS he late?"] },
    note: "Once the helper is there, the MAIN verb goes back to base form. “Didn't went” marks the past twice — only the helper carries it.",
    notes: tn({
      time: "14 minutes.",
      how: "The double-past error is the interesting one. Once “did” carries the past, the main verb must return to base form. Show it as a rule about who carries the tense.",
      mistakes: "“What time it starts?” has no helper at all. “Does” must be added and “starts” loses its -s, because “does” has taken it.",
      extra: "The same logic runs through negatives: “She doesn't works” is wrong for exactly the same reason. One marker, one place.",
      tip: "Connect it to Level 2 Module 5, where question forms were first taught. Here it is a speed problem, not a new rule.",
      activity: "Fix it fast: give fifteen wrong questions and have learners correct each within three seconds.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — self-editing
  L.list({
    sec: SEC.con, title: "The skill that outlasts this course — self-editing", sub: "Six checks, in order. Two minutes finds most of your errors.",
    color: C.green, size: 19, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "Every he/she/it verb — is the -s there?", d: "Check this one alone, first, before anything else." },
      { t: "Every noun — does it need a, an, the or nothing?", d: "Run the three questions from slide 8." },
      { t: "Every plural — is the -s there?", d: "three books, many people, some problems." },
      { t: "Every question — is the helper at the front?", d: "And is the main verb in base form?" },
      { t: "Every “to be” — is it actually written?", d: "“She very tired” is missing a word." },
      { t: "Read it aloud — does anything sound wrong?", d: "Your ear catches what six checks miss." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Check ONE error type at a time, all the way through. Reading through looking for “any errors” finds almost nothing — the attention has nowhere to focus.",
      mistakes: "Learners re-read for meaning and see nothing wrong. Meaning is not what they are checking for, and their brain repairs the text automatically.",
      extra: "This extends the six-question checklist from Level 2 Module 8, now aimed at the specific errors of this level.",
      tip: "Give a text with exactly six errors, one of each type, and have learners find them using the list in order. The method proves itself.",
      activity: "One pass per error: learners check their own writing six times, once per item.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "information", ipa: "/ˌɪnfəˈmeɪʃn/", pos: "noun — uncountable", icon: "FaInfoCircle",
      meaning: "Facts and details about something.",
      example: "I need some information about the course. That is useful information.",
      mistake: "NEVER “informations” and never “an information”. Say “some information” or “a piece of information”.",
      notes: tn({ time: "8 minutes.",
        how: "Teach the whole uncountable family together — information, advice, research, equipment, furniture, news. One rule covers all of them and the pattern is what sticks.",
        mistakes: "“Informations” is one of the most persistent errors in professional English and it appears in almost every learner report.",
        extra: "To count it, use a counter: “a piece of information”, “two pieces of information”. That is how English counts uncountable nouns.",
        tip: "Stress is on the fourth syllable — in-for-MA-tion — the -tion rule from Module 2. Two modules working together.",
        activity: "Some or a? Give fifteen nouns and have learners choose between “some” and “a/an” for each." }) },

    { word: "advice", ipa: "/ədˈvaɪs/", pos: "noun — uncountable", icon: "FaComments",
      meaning: "An opinion about what somebody should do.",
      example: "She gave me some good advice. Can I ask your advice?",
      mistake: "Two traps. “Advices” does not exist. And ADVICE is the noun /ədˈvaɪs/; ADVISE is the verb /ədˈvaɪz/ — c for the noun, s for the verb.",
      notes: tn({ time: "8 minutes.",
        how: "The noun/verb pair is a spelling and sound distinction at once: advice ends in an /s/ sound, advise ends in a /z/. Write both and say both.",
        mistakes: "“He adviced me” — should be “advised”. And “give me an advice” — should be “some advice”.",
        extra: "The same c/s pattern appears in practice/practise and licence/license in British English.",
        tip: "“Can I ask your advice?” is a genuinely useful workplace phrase. Teach it as a chunk, in the Module 1 sense.",
        activity: "Noun or verb: give ten sentences and have learners choose advice or advise for each." }) },

    { word: "research", ipa: "/rɪˈsɜːtʃ/", pos: "noun — uncountable", icon: "FaFlask",
      meaning: "Careful study to find out new facts.",
      example: "We did some research on the market. Her research took two years.",
      mistake: "“Researches” is wrong as a plural. And the stress can move: re-SEARCH as a verb, RE-search or re-SEARCH as a noun.",
      notes: tn({ time: "7 minutes.",
        how: "Another uncountable, and a common one in professional and academic writing. Reinforce the family pattern rather than teaching it as a separate fact.",
        mistakes: "“I did researches about it.” Should be “I did some research on it” — note the preposition changes too.",
        extra: "research ON or INTO a topic, not “about”. Prepositions with nouns must be learned with the noun.",
        tip: "This word matters for anyone applying to study or working with NGOs, which is a large share of professional English use in Ethiopia.",
        activity: "Collocations: teach do research · carry out research · research on. Three fixed pairings." }) },

    { word: "equipment", ipa: "/ɪˈkwɪpmənt/", pos: "noun — uncountable", icon: "FaTools",
      meaning: "The tools or machines needed for a job.",
      example: "The office needs new equipment. We bought three pieces of equipment.",
      mistake: "Never “equipments”. To count it: “a piece of equipment”, “two pieces of equipment”.",
      notes: tn({ time: "7 minutes.",
        how: "By now the pattern should be recognised rather than taught. Ask the class what the plural is and let them answer.",
        mistakes: "The /kw/ cluster in the middle is also a pronunciation point — e-QUIP-ment, stress on the second syllable.",
        extra: "Also uncountable: furniture, luggage, machinery, software, staff. Same rule, same counter.",
        tip: "This is a common word in every workplace inventory, order form and report. Getting it wrong in writing is highly visible.",
        activity: "Count it: give six uncountable nouns and have learners write a countable version using a counter word." }) },

    { word: "staff", ipa: "/stɑːf/", pos: "noun — collective", icon: "FaUsers",
      meaning: "All the people who work in an organisation.",
      example: "The staff are very helpful. We have twenty staff.",
      mistake: "No -s. “Staffs” is wrong. And it takes a PLURAL verb in British English: “the staff ARE”, not “the staff is”.",
      notes: tn({ time: "8 minutes.",
        how: "This one is different from the others: it is uncountable in form but plural in agreement, which is why it belongs at the end of the set.",
        mistakes: "“The staffs is helpful” contains two errors — the false plural and the wrong verb agreement.",
        extra: "Other collectives: team, family, government, company. British English treats them as plural; American English often as singular.",
        tip: "For one person: “a member of staff” or “a staff member”. Never “a staff”.",
        activity: "Collective agreement: give eight sentences with team, family and staff and have learners choose is or are." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Accuracy Language 1 of 5" }),
    title: "Subject–verb agreement — the tricky subjects",
    sub: "The rule is easy. Finding the real subject is not.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17, headSize: 16, colW: [4.4, 3.4, 4.733],
      rows: [
        ["Subject", "Verb", "Why"],
        ["everybody · everyone · nobody", "workS", "singular, even though it feels plural"],
        ["the staff · the team", "work  (are)", "collective — plural in British English"],
        ["one of the teachers", "workS", "the subject is “one”, not “teachers”"],
        ["the price of the books", "IS high", "the subject is “price”, not “books”"],
        ["Sara and Dawit", "work", "two people — plural"],
      ],
    },
    note: "Find the real subject first. Words between the subject and the verb are there to distract you, and they usually succeed.",
    notes: tn({
      time: "13 minutes.",
      how: "Rows 3 and 4 are the hard ones. Have learners cross out the phrase between the subject and the verb — the agreement then becomes obvious.",
      mistakes: "“One of the teachers work here” is extremely common. The subject is “one”, which is singular, and the plural noun in between is a distractor.",
      extra: "The crossing-out technique works reliably: “the price ~~of the books~~ is high”.",
      tip: "This is where the -s error survives even in learners who have fixed the simple cases. Give it real time.",
      activity: "Cross it out: give twelve sentences with long subjects and have learners delete the middle before choosing the verb.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Accuracy Language 2 of 5" }),
    title: "Prepositions of time — in, on, at",
    sub: "Three words. A clear rule for each.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [2.2, 4.4, 5.533],
      rows: [
        ["Word", "Use it for", "Examples"],
        ["at", "a POINT of time", "at six o'clock · at night · at the weekend"],
        ["on", "a DAY or a date", "on Monday · on 5 May · on my birthday"],
        ["in", "a LONGER period", "in May · in 2026 · in the morning · in summer"],
      ],
    },
    note: "NO preposition at all with: today · tomorrow · yesterday · next week · last year · every day.",
    notes: tn({
      time: "13 minutes.",
      how: "The size rule makes it memorable: at is a point, on is a day, in is a container. Draw the three as shapes on the board.",
      mistakes: "“In Monday” and “on May” are the two commonest errors. Also “in the weekend” — British English uses “at the weekend”.",
      extra: "The note is as important as the table. “I will see you on next week” is wrong, and it is a very frequent error.",
      tip: "“At night” but “in the morning” looks inconsistent because it is. Teach it as a fixed exception rather than trying to justify it.",
      activity: "Sort them: give twenty time expressions and have learners put each into the at, on, in or nothing column.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Accuracy Language 3 of 5" }),
    title: "Prepositions of place — in, on, at",
    sub: "Same three words. Different logic.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [2.2, 4.4, 5.533],
      rows: [
        ["Word", "Use it for", "Examples"],
        ["at", "a POINT or a place with a purpose", "at the bus stop · at work · at home · at school"],
        ["on", "a SURFACE or a line", "on the table · on the wall · on the second floor"],
        ["in", "INSIDE something with edges", "in the room · in Adama · in the car · in my bag"],
      ],
    },
    note: "“at school” = there to study.   “in the school” = physically inside the building. The same word, two different meanings.",
    notes: tn({
      time: "13 minutes.",
      how: "The note is the sophisticated point and learners find it satisfying: “at” carries purpose, “in” carries location. “At work” means working; “in the office” means inside a room.",
      mistakes: "“I am in work” instead of “at work”. And “on the bus” but “in the car” — a genuine irregularity worth flagging as one.",
      extra: "Transport: on a bus, on a train, on a plane, but IN a car, IN a taxi. Big vehicles you walk in take “on”.",
      tip: "Prepositions are the last thing to become accurate in any language. Progress here is slow and that is normal — say so.",
      activity: "Where am I? Describe five locations and have learners supply the preposition for each.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Accuracy Language 4 of 5" }),
    title: "The helper rule — questions and negatives", sub: "One marker, one place. Never two.",
    panelW: 6.9,
    panel: { label: "Who carries the grammar?", color: C.gram, tint: C.surf2, size: 17, lsm: 1.4,
      text: "STATEMENT\n     She workS here.\n\nQUESTION\n     DOES she work here?\n     ( does has taken the -s )\n\nNEGATIVE\n     She DOESN'T work here.\n\nPAST\n     DID she work?  ·  She DIDN'T work." },
    side: { label: "The rule in one line", color: C.gram, size: 16, items: [
      "Once a helper appears, the MAIN verb goes to base form.",
      "“Does she works” is wrong — the -s has already been used.",
      "“I didn't went” is wrong — “did” already marks the past.",
      "One grammar marker, in one place, every time.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Frame it as a transfer of responsibility: the helper takes over the grammar and the main verb is released. That single image explains both errors at once.",
      mistakes: "“Does she works here?” and “I didn't went” are the same error in two tenses. Teaching them together is more efficient than separately.",
      extra: "The verb “be” is the exception and needs no helper: “Is she tired?”, “She isn't tired”. It moves itself.",
      tip: "This connects Level 2 Modules 1, 3 and 5 into one principle. Learners who see the pattern stop treating them as three separate rules.",
      activity: "Transform: give fifteen statements and have learners produce the question and the negative for each, at speed.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Accuracy Language 5 of 5" }),
    title: "Put it all together — the accuracy routine", sub: "Five steps. Use them on everything you write.",
    color: C.gram, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Write first. Do not check anything.", d: "Checking while writing produces short, safe, empty sentences." },
      { t: "Then check ONE error type all the way through", d: "Third-person -s first. Only that, nothing else." },
      { t: "Then the next type, all the way through again", d: "Articles. Then plurals. Then questions. One pass each." },
      { t: "Read it aloud", d: "Your ear finds what the checks missed." },
      { t: "Note which error you found most", d: "That is the one to notice while SPEAKING next week." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Step 1 matters as much as the rest. Learners who edit while composing write badly and slowly, and still miss errors.",
      mistakes: "Doing all the checks in one pass. Attention cannot split across six error types simultaneously — that is why the single-pass method fails.",
      extra: "Step 5 is the bridge from writing to speaking. An error noticed in writing is the one you can begin to catch in speech.",
      tip: "This is a genuine professional editing method, not a classroom exercise. Say so — adults take it more seriously when they know it is real practice.",
      activity: "Six passes: learners edit one piece of their own writing with six separate passes and count what each pass found.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — the third-person -s", sub: "Can you replace the subject with he, she or it?", items: [
      { q: "“One of my friends ___ in Bahir Dar.”  live or lives?", a: "lives.", why: "The subject is “one”, not “friends”. Cross out “of my friends” and it becomes obvious." },
      { q: "“Everybody ___ the answer.”  know or knows?", a: "knows.", why: "“Everybody” is singular in English, even though it refers to many people. So are everyone and nobody." },
      { q: "“The price of the tickets ___ high.”  is or are?", a: "is.", why: "The subject is “price”, which is singular. “Of the tickets” is a distractor sitting between them." },
    ] },
    { title: "Guided examples 2 — articles", sub: "Run the three questions from slide 8.", items: [
      { q: "“She is ___ teacher.”", a: "a teacher.", why: "Jobs always take a or an. This has no exceptions and is worth memorising as a fixed rule." },
      { q: "“I need ___ information about the course.”", a: "some information — or no word at all.", why: "Information is uncountable, so it can never take “a” or “an”, and it has no plural." },
      { q: "“I bought a car. ___ car is red.”", a: "The car.", why: "Second mention. The listener now knows which car, so it takes “the”." },
    ] },
    { title: "Guided examples 3 — questions and negatives", sub: "Where does the grammar live?", items: [
      { q: "“Where you are going?” — what is wrong?", a: "“Where ARE you going?” — the helper comes before the subject.", why: "English inverts the helper and the subject in questions. The statement order is not a question." },
      { q: "“Does she works here?” — what is wrong?", a: "“Does she WORK here?”", why: "“Does” has already taken the -s. The main verb returns to base form." },
      { q: "“I didn't went.” — what is wrong?", a: "“I didn't GO.”", why: "“Did” already marks the past. Marking it twice is the same error as “does she works”." },
    ] },
    { title: "Guided examples 4 — prepositions", sub: "Point, day, or longer period?", items: [
      { q: "“The meeting is ___ Monday.”", a: "on Monday.", why: "Days always take “on”. “In Monday” is one of the two commonest preposition errors." },
      { q: "“I will see you ___ next week.”", a: "No preposition at all. “I will see you next week.”", why: "Next, last, this and every take no preposition. Adding one is a very frequent error." },
      { q: "“She is ___ work at the moment.”", a: "at work.", why: "“At” carries purpose — she is there to work. “In work” is wrong; “in the office” would be about location." },
    ] },
    { title: "Guided examples 5 — uncountable nouns", sub: "Can you count it?", items: [
      { q: "“He gave me three ___.”  advices or pieces of advice?", a: "three pieces of advice.", why: "Advice is uncountable. To count it you need a counter word, exactly like information and equipment." },
      { q: "“The staff ___ very helpful.”  is or are?", a: "are.", why: "Collective nouns take a plural verb in British English. And “staffs” does not exist." },
      { q: "Name three more uncountable nouns.", a: "equipment · research · furniture · news · luggage.", why: "Same rule for all of them: no plural -s, no a/an, and a counter word to count them." },
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
    title: "Asking to be corrected",
    sub: "Tolosa asks a colleague for something most people never ask for.",
    turns: [
      { who: "TOLOSA", text: "Can I ask your advice about something?", side: "l" },
      { who: "SARA", text: "Of course.", side: "r" },
      { who: "TOLOSA", text: "When I make a mistake in English, would you tell me?", side: "l" },
      { who: "SARA", text: "Really? Most people don't want that.", side: "r" },
      { who: "TOLOSA", text: "I know. But nobody corrects me, so I never improve.", side: "l" },
      { who: "SARA", text: "All right. You just said “nobody correct me” — it's “corrects”.", side: "r" },
    ],
    note: "Sara's last line is the whole module in one exchange: the error, noticed, named, and fixed in three seconds.",
    notes: tn({
      time: "13 minutes.",
      how: "This dialogue solves the fossilisation problem from slide 5. If nobody ever corrects you, ask somebody to. It is the single most effective thing a learner can do outside class.",
      mistakes: "Learners find asking for correction embarrassing. Point out that Tolosa gives a reason, which makes it a professional request rather than a personal one.",
      extra: "“Can I ask your advice?” uses the uncountable noun correctly, and it is a genuinely useful workplace opener.",
      tip: "Set this up as a real arrangement in class: every learner asks one person outside class to correct one specific error for two weeks.",
      activity: "Find a corrector: each learner names who they will ask and which error they will ask about.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Correcting somebody without embarrassing them",
    sub: "Bethlehem checks a colleague's email. Watch how she does it.",
    turns: [
      { who: "BETHLEHEM", text: "This is good. Clear and short. Two small things?", side: "l" },
      { who: "ABEL", text: "Please.", side: "r" },
      { who: "BETHLEHEM", text: "“Informations” — no -s. It's always just “information”.", side: "l" },
      { who: "ABEL", text: "Ah. I do that a lot.", side: "r" },
      { who: "BETHLEHEM", text: "And “the staff is” — in British English it's “the staff are”.", side: "l" },
      { who: "ABEL", text: "Thanks. Two things I can actually remember.", side: "r" },
    ],
    note: "Say what is good first. Then TWO corrections, not twenty. Abel's last line explains why two is the right number.",
    notes: tn({
      time: "13 minutes.",
      how: "Model the technique explicitly: praise first, then a small named number of specific corrections. Twenty corrections produce nothing but discouragement.",
      mistakes: "Correcting everything. It feels thorough and it teaches nothing, because the learner cannot hold twenty items.",
      extra: "Bethlehem names the rule each time rather than just marking the error. “No -s, always” is far more useful than a red line.",
      tip: "Use exactly this method when you return written work. Two corrections per piece, chosen from the learner's own top-three list.",
      activity: "Two things: pairs exchange writing and each gives one piece of praise and exactly two corrections.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Language for correcting and being corrected",
    sub: "Six phrases. Three for each side of the exchange.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaQuestion", title: "“Can I ask your advice?”", desc: "Opens the conversation. Uncountable — no “an”." },
      { icon: "FaCheck", title: "“Is this right?”", desc: "Ask about one specific sentence, not everything." },
      { icon: "FaRedo", title: "“How do you say this properly?”", desc: "Asks for the correct form, not just a judgement." },
      { icon: "FaThumbsUp", title: "“This is good. Two small things?”", desc: "Praise first, then a named number." },
      { icon: "FaComment", title: "“We usually say…”", desc: "Softer than “that's wrong”. Gives the right form." },
      { icon: "FaLightbulb", title: "“Thanks — I do that a lot.”", desc: "Accept it without apology. Move on." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Phrase 5 is the professional one: “we usually say…” corrects without judging, and it is what colleagues actually use.",
      mistakes: "Learners over-apologise when corrected, which makes the corrector reluctant to do it again. Phrase 6 is the right response.",
      extra: "Phrase 2 is more useful than it looks. Asking about one sentence gets a real answer; asking “is my English OK?” gets a polite nothing.",
      tip: "The goal is to make correction a normal, low-cost exchange between colleagues. That is what keeps it happening after this course.",
      activity: "Both sides: pairs practise all six phrases, swapping roles halfway.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Find and fix the errors",
    sub: "Work in pairs. This dialogue has SIX errors. Find them all.",
    turns: [
      { who: "A", text: "Where you are going on Monday?", side: "l" },
      { who: "B", text: "I go to Adama. My brother work there.", side: "r" },
      { who: "A", text: "Is he engineer?", side: "l" },
      { who: "B", text: "Yes. He didn't went last month, but he goes now.", side: "r" },
      { who: "A", text: "Can you give me some informations about the road?", side: "l" },
      { who: "B", text: "The staff at the office is very helpful. Ask them.", side: "r" },
    ],
    note: "Six errors. All six are on the list from slide 6. Find them, then say each line correctly.",
    notes: tn({
      time: "13 minutes.",
      how: "Give five minutes to find them, then take the corrections line by line. Ask which numbered error from slide 6 each one is.",
      answers: "1 “Where ARE YOU going” · 2 “My brother workS” · 3 “Is he AN engineer” · 4 “he didn't GO” · 5 “some information” (no -s) · 6 “The staff ARE very helpful”.",
      mistakes: "“I go to Adama” for a future plan is arguably a seventh error — “I'm going” is more natural. Mention it if the class is strong.",
      tip: "Have pairs perform the corrected version aloud. Saying it right immediately after seeing it wrong is what makes it stick.",
      activity: "Write your own: pairs write a six-line dialogue containing three deliberate errors for another pair to find.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — notice it as you say it", sub: "Four rounds. Accuracy time, not fluency time.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Talk about a friend for 60 seconds using he or she", d: "Partner counts every missing third-person -s." },
      { t: "Ask your partner ten questions", d: "Partner checks the helper is at the front every time." },
      { t: "Describe your workplace using in, on and at", d: "Partner notes every preposition and checks it." },
      { t: "Talk about last weekend in the past tense", d: "Partner listens for “didn't went” and plural -s." },
    ],
    notes: tn({
      time: "14 minutes for all four rounds.",
      how: "This is accuracy time and must be announced as such. Slow deliberate speech is correct here — it is the opposite of Module 1 and learners need telling.",
      mistakes: "Partners stay silent to be polite. The whole point is to be corrected — insist that every error is flagged.",
      tip: "Round 1 is the flagship. Sixty seconds of forced he/she speech surfaces the -s error more reliably than any written exercise.",
      activity: "Error count: each learner records their own count for round 1 and repeats the round at the end of the module.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the he/she drill", sub: "The most valuable ten minutes in this module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say twenty sentences about one person, all starting “He” or “She”", d: "Partner taps the desk on every missing -s." },
      { t: "Now say them faster", d: "The error returns at speed. That is the real test." },
      { t: "Swap the subject: “They work” → “He works”", d: "Twenty rounds. Fast. No thinking time." },
      { t: "Describe a colleague for 60 seconds", d: "Count your own errors afterwards." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Task 2 is the diagnostic. Almost everyone is accurate when slow and loses the -s at speed, which shows the problem is automaticity rather than knowledge.",
      mistakes: "Learners conclude they have fixed it after task 1. Task 2 proves otherwise and is essential.",
      extra: "The tap is better than a spoken correction: it flags the error without interrupting the sentence.",
      tip: "Do this drill for five minutes at the start of every lesson for the rest of Level 3. Fossilised errors need frequency, not duration.",
      activity: "Daily five: five minutes of he/she drilling at the start of every lesson from now on.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — articles out loud", sub: "Run the three questions before every noun.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Describe this room. Every noun needs a decision.", d: "a, an, the, or nothing. Say the decision aloud first." },
      { t: "Say what five people do for a living", d: "“She is a nurse.” Jobs always take a or an." },
      { t: "Tell a two-sentence story introducing something new", d: "“I saw a dog. The dog was very big.”" },
      { t: "Use five uncountable nouns in sentences", d: "information · advice · research · equipment · staff." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Task 1 is slow and deliberate on purpose. Saying the decision aloud — “can I count it? yes. first mention? yes. so, a” — is what builds the habit.",
      mistakes: "Learners guess by feel and are right about half the time. The procedure is slower at first and far more reliable.",
      extra: "Task 3 is the clearest demonstration of first-mention and second-mention in the whole module.",
      tip: "Articles improve slowly. Expect months, not weeks, and tell learners so — otherwise they conclude the method has failed.",
      activity: "Narrate the room: one learner describes the room aloud while the class flags every article error.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the endings that carry grammar",
    sub: "From Module 2. Now it is grammar, not just sound.",
    left: { h: "Say the -s clearly", items: ["He workS here.", "She goeS at six.", "It costS too much.", "Three bookS.", "Many problemS.", "The price riseS."] },
    right: { h: "Say the -ed clearly", items: ["I workED there.", "She askED me.", "They finishED it.", "We wantED to go.  (2 beats)", "He needED help.  (2 beats)", "It happenED fast."] },
    note: "If the ending disappears, the grammar disappears with it. This is a mouth problem, not a knowledge problem.",
    notes: tn({
      time: "13 minutes.",
      how: "Drill it as pronunciation, not grammar. Learners know the rule; what fails is the physical production of a final consonant under speed.",
      mistakes: "The last two on the right add a syllable because the base ends in t or d. Everything else does not — this is the rule from Level 2 Module 3.",
      extra: "This is where Module 2 and Module 3 meet. The same missing sound is a pronunciation error and a grammar error simultaneously.",
      tip: "Exaggerate first, then normalise. Over-producing the ending for a week is a reasonable price for making it automatic.",
      activity: "Ending hunt: learners read a paragraph aloud while a partner counts every dropped -s and -ed.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — questions at speed", sub: "In pairs. Three seconds per question.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Ask five questions with “do” or “does”", d: "“Does she work here?” — no -s on the main verb." },
      { t: "Ask five questions with “did”", d: "“Did you go?” — base form after did." },
      { t: "Ask five wh- questions", d: "Helper straight after the question word." },
      { t: "Make five negatives", d: "“She doesn't work here.” “I didn't go.”" },
      { t: "Your partner asks; you answer in a full sentence", d: "Both sides get checked." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "The three-second limit is the method. Question formation is a speed skill by this level, and slow practice does not transfer to real conversation.",
      mistakes: "Under time pressure learners revert to statement word order — “Where you are going?”. That is the error to catch.",
      extra: "Task 4 catches the double-marking error: “She doesn't works” and “I didn't went”.",
      tip: "Run this as a whole-class fast round too. Public speed pressure surfaces the error more reliably than pair work.",
      activity: "Question chain: each learner asks the next one a question within three seconds. Any error means starting again.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this. You will count your own errors.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Describe a colleague for 45 seconds using he or she", d: "Every third-person verb needs its -s." },
      { t: "Ask five questions aloud", d: "Helper at the front, base form after it." },
      { t: "Say five sentences about last weekend", d: "Past tense. No double marking." },
      { t: "Use all five uncountable nouns correctly", d: "information · advice · research · equipment · staff." },
      { t: "Listen back and count your OWN errors", d: "Write the number down. This is the real task." },
    ],
    notes: tn({
      time: "16 minutes including listening back.",
      how: "Step 5 is the assessment. Finding your own errors on a recording is the skill this module exists to build, and it is what continues working after the course.",
      mistakes: "Learners cannot hear their own errors on the first listen. Have them listen three times, checking one error type each time.",
      answers: "SUCCESS CRITERIA: fewer than three missing -s in 45 seconds · five correctly formed questions · five past sentences with no double marking · all five uncountables correct · an honest self-count.",
      tip: "The self-count matters more than the error count. A learner who finds four of their five errors is in better shape than one who made three and noticed none.",
      activity: "Keep every recording. Repeat this exact task at the end of Level 3.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — spot the error", sub: "Eight sentences. Some are correct. Listen twice.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads at normal speed", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.32,
      text: "1.  My brother work in Adama.\n2.  She is a nurse at the hospital.\n3.  Where you are going tomorrow?\n4.  I need some information, please.\n5.  He didn't went to the meeting.\n6.  The staff are very helpful.\n7.  One of my friends live in Jimma.\n8.  I will see you next week." },
    side: { label: "Your task", color: C.listen, size: 16, items: [
      "Write C for correct, or X for an error.",
      "For every X, write the correction.",
      "Which slide-6 error is each one?",
      "Score yourself out of 8.",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "Read at normal conversational speed. Reading slowly makes the errors obvious and tests nothing.",
      mistakes: "Item 7 is the hardest — “one of my friends” takes a singular verb and almost everyone misses it.",
      extra: "Items 2, 4, 6 and 8 are correct. Learners who “correct” them are guessing rather than listening.",
      answers: "1 X — workS · 2 C · 3 X — Where ARE YOU going · 4 C · 5 X — didn't GO · 6 C · 7 X — liveS · 8 C.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Four wrong, four right. Did you change a correct one?",
    size: 16.5,
    items: [
      { q: "1 — “My brother work in Adama.”", a: "X — “works”. Brother = he.", why: "Error 1 from slide 6. The commonest error in intermediate English and the first to check." },
      { q: "3 — “Where you are going tomorrow?”", a: "X — “Where are you going?”", why: "Error 4. The helper must come before the subject. Statement order is not a question." },
      { q: "5 — “He didn't went to the meeting.”", a: "X — “didn't go”.", why: "Error 5. “Did” already carries the past, so the main verb returns to base form." },
      { q: "7 — “One of my friends live in Jimma.”", a: "X — “lives”. The subject is “one”.", why: "The hardest item. “Of my friends” sits between the subject and the verb purely as a distractor." },
      { q: "2, 4, 6, 8", a: "All CORRECT.", why: "If you changed any of these, you were pattern-matching rather than listening. Correct English must be recognised too." },
    ],
    notes: keyNotes("Ask how many learners marked a correct sentence as wrong. That over-correction is common and worth naming — accuracy work should not turn into suspicion of everything."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — a workplace conversation", sub: "Listen for content first, then for errors.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.3,
      text: "CHALTU:  Does Yonas work on Saturdays?\nMIMI:  He works two Saturdays a month.\nCHALTU:  I need some advice about the new system.\nMIMI:  Ask the IT staff — they are very good.\nCHALTU:  Where are they? On the second floor?\nMIMI:  At the end of the corridor, in room twelve.\nCHALTU:  Thanks. I'll go on Monday morning." },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. How often does Yonas work on Saturday?",
      "2. What does Chaltu need?",
      "3. Where is the IT office?",
      "4. Find three prepositions of place.",
      "5. Find one preposition of time.",
      "6. Are there any errors in this conversation?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Question 6 is the trick: this conversation is entirely correct. Learners primed to hunt errors will invent some, which is worth demonstrating.",
      mistakes: "After a whole module of error-hunting, learners over-correct. Hearing a fully correct model is a necessary counterweight.",
      extra: "Note the prepositions: on Saturdays, on the second floor, at the end, in room twelve, on Monday morning. Five correct uses in seven lines.",
      answers: "1 Two Saturdays a month. · 2 Advice about the new system. · 3 At the end of the corridor, room 12, second floor. · 4 on the second floor, at the end, in room twelve. · 5 on Monday morning. · 6 No — it is all correct.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "A correct model, deliberately.",
    size: 16.5,
    items: [
      { q: "1 — how often?", a: "Two Saturdays a month.", why: "“He works” — the -s is there, correctly, because Yonas is “he”." },
      { q: "2 — what does Chaltu need?", a: "Some advice about the new system.", why: "“Some advice”, not “an advice”. Uncountable, used correctly." },
      { q: "3 — where is IT?", a: "At the end of the corridor, in room twelve, on the second floor.", why: "Three different prepositions, each following the rule from slide 18." },
      { q: "6 — are there errors?", a: "No. Every sentence is correct.", why: "After a module of error-hunting you must also be able to recognise correct English. Suspicion is not accuracy." },
      { q: "Why does this matter?", a: "Your ear needs correct models, not only wrong ones.", why: "Learners who only ever analyse errors start to distrust forms that are perfectly fine." },
    ],
    notes: keyNotes("Read this conversation again at the end of the lesson as a correct model. Hearing seven accurate lines in a row is worth as much as finding seven errors."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to fix a fossilised error", sub: "Four steps. Expect about three weeks per error.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaBullseye", title: "1 · Choose ONE error", desc: "Not three, not ten. One. Trying to fix several at once fixes none of them, because noticing is what costs attention." },
      { icon: "FaEye", title: "2 · Notice it, even after the fact", desc: "For the first week you will catch it a second too late. That is progress, not failure — noticing comes before controlling." },
      { icon: "FaUserCheck", title: "3 · Ask somebody to flag it", desc: "One person, one error, two weeks. A tap on the desk is enough. Nobody corrects you unless you ask." },
      { icon: "FaRedo", title: "4 · Drill it daily at speed", desc: "Five minutes a day. The error returns under pressure, so the practice has to happen under pressure too." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Step 2 is the one that keeps people going. Catching the error a second late feels like failing; it is actually the first real sign of progress.",
      mistakes: "Choosing several errors at once. Say the number out loud: one.",
      tip: "Three weeks is an honest estimate for one fossilised error with daily attention. Learners who expect three days give up on day four.",
      activity: "Name it: every learner writes down their one error, their corrector's name, and the date they will review it.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — find the errors", sub: "This text has EIGHT errors. Find them all.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 16, lsm: 1.3,
      text: "MY BROTHER'S WORK\n\nMy brother work for a construction company in Adama. He is engineer. He started there in 2019, and he like it very much.\n\nEvery day he leave the house at six o'clock. The traffic is bad, so the journey take almost an hour.\n\nLast year he didn't went on holiday because the company was very busy. This year he will take three week off.\n\nHe says the staff is friendly and the equipments are good. I want to ask him some advices about my own career." },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "Find all eight errors.",
      "Write the correction for each.",
      "Say which slide-6 error each one is.",
      "Which error appears most often?",
      "Rewrite the whole text correctly.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Use the single-pass method from slide 20: check for missing -s all the way through first, then articles, then the rest. Learners who read looking for “errors” in general find four or five; learners using single passes find all eight.",
      mistakes: "Four of the eight are the third-person -s. That repetition is deliberate — it shows learners how often one error can appear in a short text.",
      extra: "The last paragraph contains three uncountable errors in two sentences, which is realistic for learner writing.",
      answers: "workS · AN engineer · likeS · leaveS · takeS · didn't GO · three weekS · staff ARE · equipment IS (no -s) · some ADVICE. Eight distinct error points.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Content first, then accuracy.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full, CORRECT sentence. Your answer will be checked for accuracy too.",
    items: [
      "What does his brother do, and where?",
      "What time does he leave the house?",
      "Why didn't he go on holiday last year?",
      "How much holiday will he take this year?",
      "Which error appeared four times in the text?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "The instruction matters: answers are marked for accuracy as well as content. That forces learners to apply the module while answering.",
      mistakes: "Learners answer correctly in content and reproduce the text's errors in their answers. Point that out — it shows how contagious a wrong form is.",
      tip: "Question 5 is the metacognitive one. Recognising which error dominates a text is exactly the self-editing skill from slide 10.",
      answers: "1 He works for a construction company in Adama. He is an engineer. · 2 He leaves at six o'clock. · 3 Because the company was very busy. · 4 Three weeks. · 5 The third-person -s.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — the corrections", sub: "Eight errors, and which type each one is.",
    size: 16.5,
    items: [
      { q: "“My brother work” · “he like” · “he leave” · “the journey take”", a: "All need the -s: works, likes, leaves, takes.", why: "Error 1, four times in one short text. This is how a single fossilised error dominates a piece of writing." },
      { q: "“He is engineer.”", a: "“He is AN engineer.”", why: "Error 2. Jobs always take a or an — and “engineer” starts with a vowel sound, so it takes “an”." },
      { q: "“he didn't went”", a: "“he didn't GO”.", why: "Error 5. “Did” carries the past; the main verb returns to base form." },
      { q: "“three week off”", a: "“three weekS off”.", why: "Error 6. A number greater than one requires the plural -s." },
      { q: "“the staff is” · “the equipments are” · “some advices”", a: "staff ARE · equipment IS · some ADVICE.", why: "Error 3 and collective agreement. Note that “equipment” takes a singular verb while “staff” takes a plural one." },
    ],
    notes: keyNotes("The four -s errors in one text is the lesson. Ask learners to count how many times their own most frequent error appears in a page of their writing."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — the same text, corrected", sub: "Read it aloud. Notice how small each change was.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 16, lsm: 1.3,
      text: "MY BROTHER'S WORK\n\nMy brother works for a construction company in Adama. He is an engineer. He started there in 2019, and he likes it very much.\n\nEvery day he leaves the house at six o'clock. The traffic is bad, so the journey takes almost an hour.\n\nLast year he didn't go on holiday because the company was very busy. This year he will take three weeks off.\n\nHe says the staff are friendly and the equipment is good. I want to ask him some advice about my own career." },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "Read it aloud, saying every -s clearly.",
      "How many letters changed in total?",
      "Did the MEANING change anywhere?",
      "Would a listener have understood the first version?",
      "So why does it matter?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Questions 4 and 5 are the honest heart of the module. The first version was perfectly understandable — which is exactly why the errors survived — and the answer to “why does it matter” is professional, not communicative.",
      mistakes: "Do not pretend these errors block communication. They do not. The real reason is that written English is judged, especially in job applications and reports.",
      extra: "About a dozen letters separate the two versions. The change is tiny and the impression is completely different.",
      tip: "Answer question 5 honestly: it matters because people judge you on it, in writing, when applying for work. That is a better reason than pretending nobody understood you.",
      activity: "Count the letters: learners count exactly how many characters differ between the two versions.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Small changes. Large difference in impression.",
    size: 16.5,
    items: [
      { q: "1 — how much changed?", a: "About a dozen letters in a 100-word text.", why: "Accuracy at this level is not about rewriting. It is about very small marks in the right places." },
      { q: "2 — did the meaning change?", a: "No. Not once.", why: "Every error was grammatical, not communicative. That is precisely why nobody ever corrected them." },
      { q: "3 — would a listener understand version 1?", a: "Yes, completely.", why: "Which is the mechanism from slide 5 — understood, uncorrected, repeated, fossilised." },
      { q: "4 — so why does it matter?", a: "Because written English is judged, especially in job applications.", why: "The honest answer. Not because you were misunderstood, but because a reader forms a judgement about you." },
      { q: "Vocabulary check", a: "information · advice · research · equipment · staff", why: "All five are uncountable, all five appear constantly at work, and all five are usually wrong in learner writing." },
    ],
    notes: keyNotes("Item 4 is the one to say out loud. Learners deserve the real reason, and the real reason is more motivating than a pretended communication breakdown."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — error correction", sub: "One error in each sentence.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each sentence correctly. One of them is already correct.",
    items: [
      "1.  My sister work in a bank.",
      "2.  Can you give me an advice?",
      "3.  Where you are going?",
      "4.  She is a very good teacher.",
      "5.  I didn't went to the meeting.",
      "6.  One of my colleagues speak French.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Item 4 is correct. Including a correct sentence stops learners from changing things at random.",
      answers: "1 works · 2 some advice (or “your advice”) · 3 Where are you going? · 4 CORRECT · 5 didn't go · 6 speaks",
      mistakes: "Item 6 is the hardest — the subject is “one”, not “colleagues”.",
      tip: "Ask which numbered error from slide 6 each one is. Naming the error type is what makes it findable next time.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — articles and prepositions", sub: "Two error types, together.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Fill each gap. Some gaps need NO word — write X.",
    items: [
      "1.  She is ___ engineer at ___ construction company.",
      "2.  The meeting is ___ Monday ___ ten o'clock.",
      "3.  I will see you ___ next week.",
      "4.  He lives ___ Adama, ___ a small house.",
      "5.  I need ___ information about ___ course you mentioned.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Take each gap separately and ask which rule applies. Working the procedure aloud is what transfers to real use.",
      answers: "1 an / a · 2 on / at · 3 X (no preposition) · 4 in / in · 5 X or “some” / the",
      mistakes: "Item 3 is the trap — “next week” takes no preposition. Item 5's second gap takes “the” because the course was already mentioned.",
      tip: "Item 5 combines an uncountable noun and a second-mention article in one sentence. Anyone who gets both has understood slide 8.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write, then edit in six passes", sub: "The real task is the editing, not the writing.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write 120 words about a person you work with. Then edit it six times.",
    items: [
      "1.  Write first. Do not check anything. Eight minutes.",
      "2.  Pass 1 — every he/she/it verb. Is the -s there?",
      "3.  Pass 2 — every noun. a, an, the, or nothing?",
      "4.  Pass 3 — every plural. Is the -s there?",
      "5.  Pass 4 — every preposition. in, on, at?",
      "6.  Pass 5 — read it aloud. Pass 6 — count what each pass found.",
    ],
    notes: tn({
      time: "20 minutes.",
      how: "Enforce step 1 strictly. Learners who edit while writing produce four safe sentences and learn nothing about their own error patterns.",
      answers: "MODEL: a 120-word description in the present simple, which forces the third-person -s roughly ten times. That is the point of the topic.",
      mistakes: "Learners do all the passes at once and find two errors. Six separate passes typically find five or six.",
      tip: "The topic is chosen deliberately: describing a colleague in the present tense makes the target error unavoidable.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — what each pass should find", sub: "The count per pass is the real result.",
    size: 16.5,
    items: [
      { q: "Pass 1 — third-person -s", a: "In a 120-word description of one person, expect 8 to 12 chances.", why: "The topic was chosen to force this error. A high count here is normal and useful information." },
      { q: "Pass 2 — articles", a: "Expect 10 to 15 nouns, each needing a decision.", why: "Jobs need a or an. Second mentions need “the”. Uncountables need nothing." },
      { q: "Pass 3 — plurals", a: "Check every noun after a number or “many”, “some”, “few”.", why: "“Three year” and “many problem” are easy to miss because the number already signals plural." },
      { q: "Pass 4 — prepositions", a: "Every time and place phrase. in, on, at, or nothing.", why: "“In Monday” and “on next week” are the two to watch for." },
      { q: "Pass 6 — the count", a: "Write down what each pass found. That is your error profile.", why: "The pass that found the most is your one error to work on for the next three weeks." },
    ],
    notes: keyNotes("Collect the per-pass counts for the whole class. The pattern tells you exactly what to drill for the rest of Level 3, with real numbers behind it."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your accuracy checklist", sub: "Six checks. One pass each. Never all at once.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Every he/she/it verb — is the -s there?", d: "Check this alone, first. It is the most frequent error." },
      { t: "Every noun — a, an, the, or nothing?", d: "Can you count it? Does the listener know which one?" },
      { t: "Every plural — is the -s there?", d: "three books · many people · some problems." },
      { t: "Every question — helper at the front, base form after?", d: "“Does she work”, not “does she works”." },
      { t: "Every “to be” — is it actually there?", d: "“She very tired” is missing a word." },
      { t: "Read it aloud", d: "Your ear finds what the five checks missed." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Print this and require it before every piece of written work for the rest of the course.",
      tip: "The order matters. Most frequent error first, so the highest-value pass happens while attention is freshest.",
      activity: "Six passes, always: apply this to every written task in Modules 4 to 8.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Which is correct?", opts: "a) He work here     b) He works here     c) He working here" },
      { q: "2. Which is correct?", opts: "a) She is teacher     b) She is a teacher     c) She is the teacher (first mention)" },
      { q: "3. Which is correct?", opts: "a) an information     b) some information     c) three informations" },
      { q: "4. Which is correct?", opts: "a) Where you are going?     b) Where are you going?     c) Where you go?" },
      { q: "5. Which is correct?", opts: "a) I didn't went     b) I didn't go     c) I didn't goed" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 b",
      tip: "These five are errors 1, 2, 3, 4 and 5 from slide 6. Anyone scoring below four should keep slide 6 in front of them.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — add the -s where needed", sub: "Some verbs need it. Some do not.",
    color: C.green, instruction: "Write each sentence with the correct verb form.", size: 18,
    items: [
      "1.  My sister (work) in Hawassa.",
      "2.  My parents (live) in Jimma.",
      "3.  Everybody (know) the answer.",
      "4.  One of the teachers (speak) French.",
      "5.  Sara and Dawit (study) together.",
      "6.  The price of the books (be) too high.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Have learners identify the real subject first, out loud, before writing the verb.",
      answers: "1 works · 2 live · 3 knows · 4 speaks · 5 study · 6 is",
      mistakes: "Items 3, 4 and 6 are the tricky subjects from slide 16. Items 2 and 5 are genuine plurals and need no -s.",
      tip: "Items 4 and 6 both hide the subject behind a phrase. Have learners cross the phrase out before choosing.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Errors, rules and prepositions.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the ERROR to its CORRECTION", opts: "1. he work     2. an information     3. I didn't went     4. she is teacher" },
      { q: "a) some information     b) she is a teacher", opts: "c) he works        d) I didn't go" },
      { q: "Part 2 — match the TIME WORD to its PREPOSITION", opts: "1. Monday     2. six o'clock     3. May     4. next week          a) at     b) in     c) on     d) no preposition" },
      { q: "Part 3 — match the NOUN to its VERB", opts: "1. the staff     2. the equipment     3. everybody          a) is     b) are     c) knows" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–a, 3–d, 4–b.  ·  Part 2: 1–c, 2–a, 3–b, 4–d.  ·  Part 3: 1–b, 2–a, 3–c.",
      tip: "Part 3 is the subtle one: staff takes a plural verb, equipment takes a singular one, and both are uncountable.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — in, on or at?", sub: "Time and place together.",
    color: C.green, instruction: "Write the correct preposition, or X if none is needed.", size: 18,
    items: [
      "1.  The meeting is ___ Friday ___ nine o'clock.",
      "2.  I live ___ Adama, ___ a small house near the market.",
      "3.  She works ___ a bank ___ the second floor.",
      "4.  I will call you ___ tomorrow.",
      "5.  He was born ___ 1998, ___ May.",
      "6.  We usually meet ___ the weekend.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Ask which rule applies for each gap: point, day, longer period, surface, or inside.",
      answers: "1 on / at · 2 in / in · 3 in (or at) / on · 4 X · 5 in / in · 6 at",
      mistakes: "Item 4 takes no preposition. Item 6 is “at the weekend” in British English — a fixed expression rather than a rule.",
      tip: "Item 3 accepts both “in a bank” and “at a bank”. “At” emphasises the workplace, “in” the building. Both are correct.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — error correction", sub: "Some sentences have TWO errors.",
    color: C.green, instruction: "Rewrite each sentence correctly. Say how many errors you found.", size: 17,
    items: [
      "1.  My brother work in a office in Adama.",
      "2.  Where she is going in Monday?",
      "3.  He didn't went because he don't have time.",
      "4.  The staffs is very helpful and give good advices.",
      "5.  One of my friend live in Bahir Dar.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Have learners count the errors before correcting. Counting first forces a careful pass instead of a quick guess.",
      answers: "1 works / an office (2) · 2 Where IS SHE going ON Monday (2) · 3 didn't GO / doesn't have (2) · 4 The staff ARE / good ADVICE (3, with staffs→staff) · 5 friendS / liveS (2)",
      mistakes: "Item 4 has three errors in one short sentence, which is realistic. Item 1's “a office” needs “an” because of the vowel sound.",
      tip: "This is the hardest exercise in the module. Let pairs work together and take the corrections publicly.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  “Everybody” takes a plural verb.",
      "2.  Jobs always need “a” or “an”.",
      "3.  “Information” has a plural form.",
      "4.  After “did”, the main verb goes back to base form.",
      "5.  “Next week” needs the preposition “on”.",
      "6.  “The staff are” is correct in British English.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — singular: everybody knows · 2 T · 3 F — uncountable, no plural · 4 T · 5 F — no preposition · 6 T",
      tip: "Item 1 catches almost everyone because “everybody” feels plural. Say the correct form aloud three times.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own errors.",
    color: C.green, instruction: "Write a complete, CORRECT sentence for each question.", size: 18,
    items: [
      "1.  Which error from slide 6 do you make most? How do you know?",
      "2.  Who could correct you regularly? Will you ask them?",
      "3.  What did your six editing passes find most often?",
      "4.  Write one sentence using “advice” correctly.",
      "5.  Write one sentence using “staff” with the correct verb.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Question 3 should refer to the actual counts from Writing 3. Evidence, not impression.",
      answers: "No fixed answers for 1 to 3. 4 and 5 must be grammatically correct — mark them strictly, since they are the point.",
      mistakes: "Question 2 is often skipped. Push for a real name and a real commitment — that arrangement is what fixes fossilised errors.",
      tip: "Answers are marked for accuracy as well as content. Say so before they start.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Accuracy time. Slow and correct beats fast and wrong.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner counts errors of ONE type only.", size: 19,
    items: [
      "1.  Describe a colleague for 60 seconds. Partner counts missing -s.",
      "2.  Ask ten questions. Partner checks the helper each time.",
      "3.  Describe your route to work. Partner checks in, on and at.",
      "4.  Talk about last month. Partner listens for double-marked past.",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "One error type per round is the method. A partner listening for everything catches almost nothing.",
      answers: "SUCCESS CRITERIA: 1 fewer than three missing -s · 2 ten correctly formed questions · 3 all prepositions correct · 4 no double marking.",
      tip: "Round 1 repeats the slide 30 baseline. Compare the two counts and show the class the difference.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "Everything in the module together.",
    color: C.green, instruction: "Work alone. Then compare with a partner.", size: 17,
    items: [
      { q: "1. Rewrite the slide 41 text correctly from memory.", opts: "All eight errors." },
      { q: "2. Write ten sentences about a colleague in the present simple.", opts: "Every verb needs the -s. Check it." },
      { q: "3. Write five questions and five negatives.", opts: "Helper at the front, base form after." },
      { q: "4. Write five sentences using the five uncountable nouns.", opts: "information · advice · research · equipment · staff." },
      { q: "5. Edit everything above using the six passes. Count what each finds.", opts: "Write the six numbers down." },
    ],
    notes: tn({
      time: "20 minutes.",
      how: "Question 5 is the assessment. The six numbers are a personal error profile and they are more useful than a mark.",
      answers: "2 ten verbs, all with -s · 3 helper first, base form after, no double marking · 4 no plural -s on any of the five, and “staff are” · 5 six honest counts.",
      tip: "Collect the six-number profiles. They tell you precisely what to drill for the rest of Level 3.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why do these errors survive when you already know the rules?", opts: "Think about who corrects you, and how often." },
      { q: "2. Would a listener misunderstand “He work here”? So why fix it?", opts: "Give the honest reason." },
      { q: "3. Why fix ONE error at a time instead of all ten?", opts: "What does noticing cost?" },
      { q: "4. Module 1 said ignore errors. This module says fix them. Both correct?", opts: "When does each apply?" },
    ],
    notes: tn({
      time: "13 minutes. Discussion, not writing.",
      how: "Question 4 resolves the apparent contradiction between the two modules and is worth the most time.",
      answers: "1 They never block communication, so nobody corrects them, so the wrong form gets practised until it feels right. 2 No, they would understand — you fix it because written English is judged, especially in job applications. 3 Noticing costs attention, and attention is limited; watching for ten errors means catching none. 4 Yes — fluency time while speaking, accuracy time while writing and drilling. Trying to do both at once produces neither.",
      tip: "Question 2 deserves an honest answer. Do not claim these errors cause misunderstanding when they do not — learners know better and will trust you less.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Verbs and subjects", items: [
      { q: "1. Which is correct?", opts: "a) He work here     b) He works here     c) He working here" },
      { q: "2. “Everybody ___ the answer.”", opts: "a) know     b) knows" },
      { q: "3. “One of my friends ___ in Jimma.”", opts: "a) live     b) lives" },
      { q: "4. When do you add the -s to a verb?", opts: "One sentence." },
    ] },
    { part: "Part 2 · Articles and nouns", items: [
      { q: "5. “She is ___ engineer.”", opts: "a) X     b) a     c) an" },
      { q: "6. “Can you give me ___ advice?”", opts: "a) an     b) some     c) a" },
      { q: "7. What is the plural of “information”?", opts: "One answer." },
      { q: "8. Name three uncountable nouns.", opts: "Three answers." },
    ] },
    { part: "Part 3 · Questions and negatives", items: [
      { q: "9. Correct: “Where you are going?”", opts: "Write the sentence." },
      { q: "10. Correct: “Does she works here?”", opts: "Write the sentence." },
      { q: "11. Correct: “I didn't went.”", opts: "Write the sentence." },
      { q: "12. What happens to the main verb after a helper?", opts: "One sentence." },
    ] },
    { part: "Part 4 · Prepositions", items: [
      { q: "13. “The meeting is ___ Monday.”", opts: "a) in     b) on     c) at" },
      { q: "14. “I'll see you ___ next week.”", opts: "a) in     b) on     c) no preposition" },
      { q: "15. “She is ___ work at the moment.”", opts: "a) in     b) at     c) on" },
      { q: "16. Which preposition is for a point of time?", opts: "One word." },
    ] },
    { part: "Part 5 · Finding your own errors", items: [
      { q: "17. Name the six editing passes, in order.", opts: "Six answers." },
      { q: "18. Why check ONE error type at a time?", opts: "One sentence." },
      { q: "19. Why do fossilised errors survive?", opts: "One sentence." },
      { q: "20. WRITING: 120 words about a colleague, then edit in six passes.", opts: "Hand in both versions." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 3 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is worth double." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is marked on the EDITING, not the writing. Hand in both the first draft and the edited version so the corrections are visible.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — which is correct?", a: "b) He works here", why: "He, she and it take the -s. Everything else takes none." },
      { q: "Q2 — “Everybody ___ the answer.”", a: "b) knows", why: "Everybody, everyone and nobody are singular in English, even though they feel plural." },
      { q: "Q3 — “One of my friends ___ in Jimma.”", a: "b) lives", why: "The subject is “one”. Cross out “of my friends” and the agreement is obvious." },
      { q: "Q4 — when do you add the -s?", a: "When the subject is he, she or it — or can be replaced by one of them.", why: "The replacement test works mechanically every time, which is why it beats intuition." } ],
    [ { q: "Q5 — “She is ___ engineer.”", a: "c) an", why: "Jobs always take a or an, and “engineer” begins with a vowel sound, so it takes “an”." },
      { q: "Q6 — “Can you give me ___ advice?”", a: "b) some", why: "Advice is uncountable, so it can never take “a” or “an”." },
      { q: "Q7 — plural of “information”", a: "There isn't one. Use “some information” or “pieces of information”.", why: "Uncountable nouns have no plural. “Informations” does not exist in English." },
      { q: "Q8 — three uncountable nouns", a: "Any three of: information · advice · research · equipment · furniture · news · staff.", why: "Same rule for all: no plural -s, no a/an, and a counter word to count them." } ],
    [ { q: "Q9 — “Where you are going?”", a: "“Where are you going?”", why: "The helper comes before the subject in a question. Statement order is not a question." },
      { q: "Q10 — “Does she works here?”", a: "“Does she work here?”", why: "“Does” has already taken the -s, so the main verb returns to base form." },
      { q: "Q11 — “I didn't went.”", a: "“I didn't go.”", why: "“Did” already marks the past. Marking it twice is the same error as Q10 in a different tense." },
      { q: "Q12 — the main verb after a helper", a: "It goes back to base form.", why: "One grammar marker, in one place. The helper takes over and the main verb is released." } ],
    [ { q: "Q13 — “The meeting is ___ Monday.”", a: "b) on", why: "Days and dates always take “on”. “In Monday” is one of the two commonest preposition errors." },
      { q: "Q14 — “I'll see you ___ next week.”", a: "c) no preposition", why: "Next, last, this and every take none. Adding one is very frequent and always wrong." },
      { q: "Q15 — “She is ___ work.”", a: "b) at", why: "“At” carries purpose — she is there to work. “In the office” would be about location instead." },
      { q: "Q16 — a point of time", a: "at", why: "at six o'clock · at night · at the weekend. On is for days, in is for longer periods." } ],
    [ { q: "Q17 — the six passes", a: "1 third-person -s · 2 articles · 3 plurals · 4 questions · 5 “to be” · 6 read aloud.", why: "Most frequent error first, so the highest-value pass happens while your attention is freshest." },
      { q: "Q18 — why one type at a time?", a: "Attention is limited. Watching for six errors at once catches almost none.", why: "Single passes typically find five or six errors where a general read-through finds two." },
      { q: "Q19 — why do they survive?", a: "They never block communication, so nobody corrects them.", why: "The wrong form then gets practised thousands of times until it feels like the right one." },
      { q: "Q20 — the writing task", a: "Marked on the editing, not the writing", why: "Hand in both drafts. What the six passes caught is the evidence that the method was used." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q3, Q10 and Q14 are the diagnostic block: hidden subjects, double marking, and the no-preposition rule. Errors here need slides 16, 19 and 17 again."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. ONE error only.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Choose your ONE error and write it on paper", d: "Put the paper where you will see it every day." },
      { t: "Say twenty he/she sentences aloud, slowly", d: "Every -s clearly audible. Twice through." },
      { t: "Ask one person to flag that error for two weeks", d: "A tap or a word is enough. Ask them today." },
      { t: "Write ten sentences and edit them in six passes", d: "Write down what each pass found." },
      { t: "Record 60 seconds and count that ONE error", d: "Compare with Monday." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's task is the whole week's discipline: one error, written down, visible. Learners who choose three make no measurable progress on any.",
      tip: "Wednesday's task is the one that actually breaks fossilisation. Nobody corrects an adult's English unless they are asked, so the asking is the intervention.",
      activity: "Ask learners to report on Wednesday's conversation at the next lesson — who they asked and what happened.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "120 words about a colleague — BOTH drafts", d: "The first draft and the edited version, with corrections visible." },
      { t: "Your six-pass error profile", d: "Six numbers: what each pass found." },
      { t: "Record your two-minute speaking challenge", d: "45 seconds he/she · five questions · five past sentences · five uncountables · your own error count." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 1 requires both drafts. The corrections between them are what is being assessed, not the quality of the writing.",
      mistakes: "Learners hand in only the clean version. Insist on both — without the first draft there is no evidence of editing.",
      tip: "Task 3's final element is the self-count. Compare it with your own count of their errors: the gap tells you how well they can hear themselves.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaPencilAlt", title: "Both drafts — 10 marks", desc: "120 words (2) · both drafts handed in (2) · corrections visible (3) · final version accurate (3)." },
      { icon: "FaListUl", title: "Error profile — 5 marks", desc: "Six numbers given (3) · one error chosen to work on (2)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "Fewer than 3 missing -s (3) · five correct questions (2) · no double-marked past (2) · five uncountables correct (2) · honest self-count (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → drill your one error daily with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Note that the editing carries more marks than the writing. That is deliberate and learners should know it before they start.",
      tip: "Give the mark privately, with exactly two corrections — the technique from slide 27. Twenty corrections teach nothing.",
      mistakes: "Do not mark fluency or vocabulary range here. This is the accuracy module and mixing the criteria confuses the message.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaHistory", title: "Why errors survive", desc: "Understood, uncorrected, repeated — until wrong feels right." },
      { icon: "FaListOl", title: "The ten errors", desc: "The full list. You know which ones are yours." },
      { icon: "FaFont", title: "The third-person -s", desc: "He, she, it — and the hidden subjects that fool you." },
      { icon: "FaCube", title: "Articles", desc: "Three questions, in order. Jobs always take a or an." },
      { icon: "FaMapMarkerAlt", title: "In, on, at", desc: "Point, day, longer period. And sometimes nothing at all." },
      { icon: "FaSearch", title: "Six-pass self-editing", desc: "One error type per pass. The skill that outlasts this course." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Repeat the warm-up from slide 3 with the same five sentences. Compare how fast the class finds all five now.",
      tip: "Also repeat the round-1 speaking drill from slide 30 and compare the -s error count. A visible drop in one module is strong evidence.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The accuracy toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaSearch", title: "The six passes", desc: "1  he/she/it verbs — is the -s there?\n2  every noun — a, an, the, nothing?\n3  every plural — is the -s there?\n4  questions — helper at the front?\n5  “to be” there?   6  read it aloud" },
      { icon: "FaCube", title: "Articles — three questions", desc: "1  Can you count it?  NO → no article\n2  Does the listener know which?  YES → the\n3  First mention?  YES → a / an\n\nJobs ALWAYS take a / an." },
      { icon: "FaMapMarkerAlt", title: "In, on, at", desc: "at  →  a point  (six o'clock, work)\non  →  a day or surface  (Monday, table)\nin  →  longer or inside  (May, the room)\nNOTHING  →  next week, tomorrow" },
      { icon: "FaExclamation", title: "The four worst", desc: "he workS  —  not “he work”\nSHE IS A teacher  —  not “is teacher”\nWhere ARE YOU going  —  not “where you are”\nI didn't GO  —  not “didn't went”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The fourth box is the emergency version — four errors, four corrections, one card.",
      tip: "Print the first box and require it before every written task for the rest of the course.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now find your own errors — which means you can keep improving without a teacher.",
    sub: "You will not fix ten errors this month. You will fix one, and then another.\nThat is how it actually works, and it is faster than it sounds.",
    chips: ["NEXT — Module 4", "Tenses in Depth", "The whole English tense system, finally in one place"],
    notes: tn({
      time: "5 minutes.",
      how: "Close on the honest promise: one error at a time, about three weeks each. Learners who expect to fix everything at once give up; learners who expect one at a time succeed.",
      tip: "Preview Module 4: after fixing the small errors, Module 4 puts the whole tense system in one place — present, past, future and perfect — so learners can see how the pieces relate instead of meeting them one at a time.",
      activity: "Ask every learner to say their one target error and their corrector's name out loud before they leave.",
    }),
  });
};
