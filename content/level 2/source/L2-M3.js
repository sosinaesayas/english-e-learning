"use strict";
/* LEVEL 2 · MODULE 3 — Past Simple & Telling a Story   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 2", levelNo: LV.no, levelName: "Elementary\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Past Simple & Telling a Story",
    sub: "Everything that already happened. Two systems to learn: regular verbs with -ed, and forty irregular verbs that must be memorised.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "40", v: "IRREGULAR VERBS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons. This is the largest module in Level 2 — allow five if you can.",
      how: "Open by telling a true 45-second story about your own yesterday, at natural speed. Then say: “Everything I just said was in one tense. It is the tense you use whenever you tell anyone anything that already happened.”",
      tip: "Be honest at the start: this module has more memory work than any other in Level 2. Forty irregular verbs cannot be worked out from a rule — they have to be learned. Say so, and give the schedule: ten a week.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all about what already happened.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Talk about yesterday, last week and last year", d: "“I travelled to Bahir Dar last year.”" },
      { t: "Use regular past verbs with -ed", d: "work → worked · travel → travelled · visit → visited." },
      { t: "Use the forty most common irregular verbs", d: "go → went · eat → ate · see → saw · buy → bought." },
      { t: "Make negatives and questions with “did”", d: "“I did not go.”  “Did you see her?”" },
      { t: "Tell a story from beginning to end", d: "Six sentences about a real journey, holiday or day." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask “Can you do this now?” Objective 3 is the memory work — say the number out loud so nobody is surprised later.",
      tip: "Return to this slide at the end of the module and ask again.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: yesterday", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaClock", title: "1 · What time?", desc: "What time did you wake up yesterday? Say it any way you can." },
      { icon: "FaUtensils", title: "2 · What did you eat?", desc: "Say what you ate yesterday. Any words you know." },
      { icon: "FaMapMarkedAlt", title: "3 · Where did you go?", desc: "Name one place you went yesterday or last week." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Every question is deliberately in the past. Most learners will answer in the present because they do not yet have the forms. Do not correct — note what they produce, because it shows you exactly where to start.",
      mistakes: "Correct nothing in the warm-up.",
      tip: "Write two or three of the learners' present-tense answers on the board and leave them there. You will convert them together on slide 6, which is far more powerful than correcting invented sentences.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "One tense covers everything that already happened.",
    sub: "One minute ago or one hundred years ago — English uses the same past simple for both.\nThe only difficulty is the verbs themselves: some follow a rule, and forty do not.",
    chips: ["Regular: + ed  →  worked", "Irregular: new word  →  went", "Negative and question: DID"],
    notes: tn({
      time: "5 minutes.",
      how: "Give one example of each of the three chips. Make the point that the tense itself is simple — there is only one form for every person, unlike the present simple with its -s. The difficulty is vocabulary, not grammar.",
      mistakes: "Learners expect the past to be harder than the present. In one way it is easier: “I went, you went, he went, we went, they went” — no changes at all. Say that; it is genuinely encouraging.",
      tip: "Set the memory schedule now: ten irregular verbs a week for four weeks. A schedule makes forty verbs feel possible; a list of forty does not.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.grid({
    sec: SEC.con, title: "The good news about the past simple", sub: "One form for every person. Nothing changes.",
    cols: 2, color: C.green, titleSize: 22, descSize: 17, shadow: true, tint: C.white,
    items: [
      { icon: "FaCheck", title: "Present simple — the form changes", desc: "I work · you work\nHE WORKS · SHE WORKS · IT WORKS\nwe work · they work\n\nYou have to think about the person." },
      { icon: "FaStar", title: "Past simple — nothing changes", desc: "I worked · you worked\nhe worked · she worked · it worked\nwe worked · they worked\n\nOne form. No -s. No thinking." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Chant both sets. The contrast is striking and it removes the fear that the past will be harder. Say the past set three times in chorus — it is identical seven times over.",
      mistakes: "Some learners add -s to the past form — “she workeds” — by over-applying Module 1. It disappears quickly once they hear the chant.",
      extra: "Do the same with “went”: I went, you went, he went, she went, we went, they went.",
      tip: "This is the easiest slide in the module and it should come first. Learners who start a module with a win engage better with the hard part that follows.",
      activity: "Person swap: teacher says a person, learners say the same past verb. Twenty rounds, and it never changes.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — regular
  L.table({
    sec: SEC.con, title: "Regular verbs — add -ed", sub: "Four small spelling rules, then it is automatic.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 18, headSize: 16, colW: [4.0, 3.4, 4.733],
      rows: [
        ["Rule", "Add", "Examples"],
        ["most verbs", "-ed", "work → worked · visit → visited"],
        ["ends in -e", "-d only", "live → lived · like → liked"],
        ["consonant + y", "-ied", "study → studied · carry → carried"],
        ["one vowel + one consonant", "double + ed", "stop → stopped · travel → travelled"],
      ],
    },
    note: "Now convert the sentences on the board from the warm-up. “I wake up” → “I woke up.” “I eat” → “I ate.” Some are regular, some are not.",
    notes: tn({
      time: "12 minutes.",
      how: "Teach rule 1 and drill it hard. Rules 2 and 3 are the same shape as the rules learners already met in Modules 1 and 2 — point that out, because it makes them feel familiar rather than new.",
      mistakes: "“Studyed” and “likeed” are the two commonest. Both come from applying rule 1 without checking the ending.",
      extra: "Sort twenty verbs aloud: play, cry, hope, plan, watch, try, arrive, stop, finish, travel.",
      tip: "Return to the warm-up sentences here and convert them together. Correcting the learners' own language is far more effective than correcting invented examples.",
      activity: "Four columns: learners place twenty verbs into the four rules and write the past form.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — -ed sounds
  L.compare({
    sec: SEC.con, title: "The three sounds of -ed",
    sub: "Same letters, three different sounds. Only one of them adds a syllable.",
    left: { h: "One syllable — /t/ and /d/", items: ["worked  /wɜːkt/", "walked  /wɔːkt/", "lived  /lɪvd/", "played  /pleɪd/", "travelled  /ˈtrævəld/"] },
    right: { h: "Two syllables — /ɪd/", items: ["wanted  (want-ed)", "visited  (vis-it-ed)", "needed  (need-ed)", "started  (start-ed)", "waited  (wait-ed)"] },
    note: "Only verbs ending in T or D add the extra syllable. Everything else does NOT. “Walked” is one beat, “wanted” is two.",
    notes: tn({
      time: "12 minutes.",
      how: "Clap the syllables for all ten words. The physical beat makes the rule obvious in a way that explanation does not. Then say a verb and have learners clap once or twice.",
      mistakes: "Pronouncing every -ed as a separate syllable — “walk-ed”, “play-ed” — is extremely common and immediately marks a speaker as a learner. It is also easy to fix once the rule is clear.",
      extra: "Do not teach the /t/ versus /d/ difference. The mouth chooses correctly on its own. Only the extra syllable matters.",
      tip: "The rule is simple enough to state in one line: if the verb already ends in a t or d sound, you need the extra syllable. Otherwise you do not.",
      activity: "One clap or two: twenty regular past verbs, whole class, no writing. Fast and diagnostic.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — irregular
  L.table({
    sec: SEC.con, title: "The 40 irregular verbs — part 1", sub: "These do not follow any rule. Learn ten a week.",
    table: {
      color: C.green, rowH: 0.4, fontSize: 16.5, headSize: 15.5, colW: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.633],
      rows: [
        ["Base", "Past", "Base", "Past", "Base", "Past", "Base", "Past"],
        ["be", "was/were", "have", "had", "do", "did", "go", "went"],
        ["say", "said", "get", "got", "make", "made", "know", "knew"],
        ["think", "thought", "take", "took", "see", "saw", "come", "came"],
        ["want", "wanted ✓", "give", "gave", "find", "found", "tell", "told"],
        ["become", "became", "leave", "left", "feel", "felt", "put", "put"],
      ],
    },
    note: "One trap in this table: “want” is REGULAR — wanted. It is here so you notice that not every common verb is irregular.",
    notes: tn({
      time: "14 minutes.",
      how: "Do not try to teach twenty verbs in one lesson. Take the first row, drill it until it is automatic, then the second row in the next lesson. Ten per week is the schedule.",
      mistakes: "“Be” has two past forms — was and were — and it is the only verb that does. Teach it separately: I was, you were, he was, we were, they were.",
      extra: "The chant drill: teacher says the base form, class shouts the past form. Ten verbs, thirty seconds. Do it at the start of every lesson for the rest of Level 2.",
      tip: "Give learners this table printed on a card. Testing themselves against a card they carry is worth more than any classroom exercise.",
      activity: "Verb tennis: two learners face each other; one says a base form, the other says the past, then reverses. Ten exchanges each.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — irregular part 2
  L.table({
    sec: SEC.con, title: "The 40 irregular verbs — part 2", sub: "The second twenty. Same schedule: ten a week.",
    table: {
      color: C.green, rowH: 0.4, fontSize: 16.5, headSize: 15.5, colW: [1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.5, 1.633],
      rows: [
        ["Base", "Past", "Base", "Past", "Base", "Past", "Base", "Past"],
        ["eat", "ate", "drink", "drank", "buy", "bought", "bring", "brought"],
        ["run", "ran", "write", "wrote", "read", "read", "meet", "met"],
        ["sit", "sat", "stand", "stood", "sleep", "slept", "speak", "spoke"],
        ["pay", "paid", "sell", "sold", "send", "sent", "lose", "lost"],
        ["begin", "began", "break", "broke", "understand", "understood", "wear", "wore"],
      ],
    },
    note: "Three traps here:  “read” looks the same but is said /red/ in the past.  ·  “put” never changes.  ·  “pay” becomes “paid”, not “payed”.",
    notes: tn({
      time: "14 minutes.",
      how: "Same method as part 1: one row per lesson, drilled to automaticity. Do not present all twenty at once.",
      mistakes: "“Readed”, “buyed”, “bringed” — learners apply the -ed rule to irregular verbs. That is a sign of learning, not carelessness: they have understood the rule and are over-applying it.",
      extra: "Group them by pattern to make memorising easier: bought/brought/thought · spoke/wrote/broke · sat/ran/began.",
      tip: "The pattern groups genuinely help. Six verbs sharing a shape are easier to remember than six unrelated ones.",
      activity: "Pattern hunt: learners find three verbs in the two tables that rhyme in the past form.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — did
  L.table({
    sec: SEC.con, title: "Negatives and questions — “did”", sub: "The magic word. And it takes the past away from the main verb.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 18, headSize: 16, colW: [3.0, 4.2, 4.933],
      rows: [
        ["Type", "Pattern", "Example"],
        ["Positive", "subject + past verb", "I went to Bahir Dar."],
        ["Negative", "did not + BASE verb", "I did not go to Bahir Dar."],
        ["Question", "Did + subject + BASE verb", "Did you go to Bahir Dar?"],
        ["Short answer", "Yes, I did. / No, I did not.", "“Did you see her?”  “Yes, I did.”"],
      ],
    },
    note: "The rule that catches everyone:  after DID, the verb goes back to its BASE form.  “I did not GO”, never “I did not went”.",
    notes: tn({
      time: "14 minutes.",
      how: "Show it physically: write “I went” and transform it, moving the past marker from “went” onto “did”. The past is marked exactly once, and “did” has taken the job.",
      mistakes: "“I didn't went” is the single commonest past-tense error in the world, not just in Ethiopia. It is double-marking, exactly like “She doesn't likes” in Module 1. Name that connection — learners who see the pattern fix both.",
      extra: "Ten transformations: “She ate injera” → negative and question. “They bought a car” → negative and question.",
      tip: "Good news to share: “did” works for every person and every verb, regular or irregular. One word covers all forty irregulars in questions and negatives.",
      activity: "Three-way drill: teacher says a positive sentence, one learner makes it negative, the next makes it a question, the third gives a short answer.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "travel", ipa: "/ˈtrævəl/", pos: "verb", icon: "FaMapMarkedAlt",
      meaning: "To go from one place to another, usually a long way.",
      example: "I travelled to Bahir Dar last year. We travel by bus.",
      mistake: "The past doubles the l: travelLED. And you travel TO a place — “I travelled Bahir Dar” is wrong.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the base and the past together, and the preposition with both. “Travel to” is one chunk.",
        mistakes: "The doubled l is the British spelling; American English uses one. Teach the doubled form and mention the other exists.",
        extra: "travel by bus · travel by plane · travel to Gondar · travel with my family.",
        tip: "This verb opens the whole travel-and-holiday vocabulary set, which is the theme of this module's stories.",
        activity: "Where have you travelled? Each learner names one place and how they got there." }) },

    { word: "arrive", ipa: "/əˈraɪv/", pos: "verb", icon: "FaFlag",
      meaning: "To reach the place you were going to.",
      example: "We arrived at six o'clock. The bus arrived late.",
      mistake: "It ends in -e, so the past adds only -d: arrived. And the preposition matters: arrive AT a place, arrive IN a city.",
      notes: tn({ time: "6 minutes.",
        how: "Teach it against “leave”, its opposite: “We left at six and arrived at ten.” The pair is far more useful than either verb alone.",
        mistakes: "“Arrive to” is a very common error. It is “arrive at” or “arrive in”, never “to”.",
        extra: "arrive at the station · arrive in Addis Ababa · arrive home  ← no preposition with “home”.",
        tip: "“Leave” is irregular — left — and “arrive” is regular. Teaching them together gives one of each in a natural pair.",
        activity: "Journey times: learners say what time they left home and arrived at class today." }) },

    { word: "buy", ipa: "/baɪ/", pos: "verb", icon: "FaShoppingBag",
      meaning: "To get something by paying money for it.",
      example: "I bought a bag at Merkato. She buys vegetables every Saturday.",
      mistake: "Irregular: buy → BOUGHT, not “buyed”. The past is said /bɔːt/ — the gh is completely silent.",
      notes: tn({ time: "7 minutes.",
        how: "Teach the sound first — /bɔːt/ — before showing the spelling, which is genuinely strange. Then show the written form and cross out the gh.",
        mistakes: "“Buyed” is over-application of the regular rule. It is the most predictable error in the module.",
        extra: "Three verbs share this pattern: buy → bought, bring → brought, think → thought. Teach them as a family of three.",
        tip: "The silent gh appears in several common words. Mention it once — bought, thought, brought, night, light — and move on.",
        activity: "Shopping story: each learner says three things they bought last week and where." }) },

    { word: "yesterday", ipa: "/ˈjestədeɪ/", pos: "adverb", icon: "FaCalendarAlt",
      meaning: "The day before today.",
      example: "I went to the market yesterday. Yesterday was Monday.",
      mistake: "Three syllables: YES-ter-day, with the stress at the front. And it usually goes at the END of the sentence, or at the very beginning with a comma.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the whole family of past time words together: yesterday · last night · last week · last year · two days ago · in 2019.",
        mistakes: "Learners put it in the middle: “I yesterday went to the market.” It is understood but not natural.",
        extra: "“Ago” is worth ten seconds: two days ago, three weeks ago, a year ago — always after the amount of time.",
        tip: "Past time words are the strongest signal that the past tense is needed. Learners who spot them choose the tense correctly.",
        activity: "Time line: write six past time expressions on the board and have learners order them from most recent to longest ago." }) },

    { word: "story", ipa: "/ˈstɔːri/", pos: "noun", icon: "FaBookOpen",
      meaning: "An account of something that happened.",
      example: "He told me a story about his journey. I have a good story.",
      mistake: "The plural is “stories”, with -ies. And you TELL a story — never “say a story” or “speak a story”.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the verb that goes with it — “tell a story” — because the noun alone is not usable. Note that “tell” is irregular: told.",
        mistakes: "“Say a story” is a direct translation error. The correct verb is “tell”.",
        extra: "tell a story · tell the truth · tell someone your name — all use “tell”, which always needs a person or a thing after it.",
        tip: "This word names what the whole module is for. Point at it: by the end of the module every learner tells a six-sentence story.",
        activity: "One-sentence stories: each learner says one true past sentence, and together the class builds a chain story." }) },
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
    title: "Rule 1 — regular verbs add -ed",
    sub: "Four spelling rules, and the same form for every person.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [4.0, 3.4, 4.733],
      rows: [
        ["Ending", "Add", "Examples"],
        ["most verbs", "-ed", "work → worked · watch → watched · finish → finished"],
        ["ends in -e", "-d", "live → lived · arrive → arrived · like → liked"],
        ["consonant + y", "-ied", "study → studied · carry → carried · try → tried"],
        ["one vowel + one consonant", "double + -ed", "stop → stopped · plan → planned · travel → travelled"],
      ],
    },
    note: "And remember: NO -s ever, for any person.  “She worked”, not “she workeds”.",
    notes: tn({
      time: "10 minutes.",
      how: "Drill rule 1 hardest. Rules 2 and 3 are familiar shapes from earlier modules. Rule 4 is the same doubling rule as -ing in Module 2 — say so.",
      mistakes: "Applying -ed to irregular verbs is not a spelling error, it is a vocabulary gap. If a learner writes “goed”, they need the irregular list, not the spelling rules.",
      extra: "Sort twenty verbs aloud, mixing regular and irregular, and have learners say which need -ed and which need a new word.",
      tip: "The connection to Module 2's doubling rule is worth making explicitly. Learners like discovering that a rule they already know applies again.",
      activity: "Regular or irregular: teacher says a verb, learners shout “ed” or “new word”. Thirty rounds.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — irregular verbs are a new word",
    sub: "No rule can help you. These must be memorised.",
    left: { h: "Correct", items: ["I went to Gondar.", "She ate injera.", "They bought a car.", "He saw his friend.", "We had lunch at two."] },
    right: { h: "Wrong", items: ["I goed to Gondar.", "She eated injera.", "They buyed a car.", "He seed his friend.", "We haved lunch at two."] },
    note: "Every wrong sentence is the -ed rule applied to an irregular verb. It is a logical mistake — but the verb simply has a different word.",
    notes: tn({
      time: "10 minutes.",
      how: "Say each wrong sentence aloud and ask the class for the right one. They will know most of them, which is encouraging.",
      mistakes: "Tell learners plainly that these errors are a sign of learning: they show the learner has understood the -ed rule and is applying it. The fix is memory, not understanding.",
      extra: "The forty verbs are on slides 8 and 9. Ten a week, tested at the start of every lesson.",
      tip: "Never give learners a list of a hundred irregular verbs. Forty high-frequency verbs cover the great majority of what they will actually say.",
      activity: "Chant drill: teacher says the base, class shouts the past. Ten verbs, thirty seconds, every lesson.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — negatives with “did not”",
    sub: "After “did”, the verb returns to its base form.",
    left: { h: "Correct", items: ["I did not go to school.", "She did not eat breakfast.", "They did not buy it.", "He did not see me."] },
    right: { h: "Wrong", items: ["I did not went to school.", "She did not ate breakfast.", "They did not bought it.", "He not saw me."] },
    note: "The past is marked exactly ONCE. “Did” has taken it, so the main verb gives it back. Short form: didn't.",
    notes: tn({
      time: "12 minutes.",
      how: "Move the past marker physically on the board: write “went”, cross it out, write “did … go”. Learners see the past travel from one word to the other.",
      mistakes: "“I didn't went” is the same double-marking error as “She doesn't likes” from Module 1. Say so — learners who recognise the family fix both at once.",
      extra: "Ten transformations, mixing regular and irregular verbs, so learners see that “did” works for both.",
      tip: "Here is the relief: after “did”, learners do not need to know the irregular form at all. That makes negatives and questions the EASIEST part of this module.",
      activity: "Positive to negative: teacher says a positive past sentence, learner produces the negative within three seconds. Twenty rounds.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — questions with “did”",
    sub: "Did + person + base verb. The same rule as the negative.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [3.6, 4.0, 4.533],
      rows: [
        ["Type", "Pattern", "Example"],
        ["Yes / no question", "Did + person + base verb", "Did you go to the market?"],
        ["With a question word", "Question word + did + person + base", "Where did you go?"],
        ["Short answer", "Yes, I did. / No, I did not.", "“Did she come?”  “No, she did not.”"],
        ["The exception", "the verb “to be” needs no “did”", "Were you at home?  ·  Was it expensive?"],
      ],
    },
    note: "Note the exception in the last row. “Was” and “were” make their own questions, exactly like “is” and “are” in Level 1.",
    notes: tn({
      time: "12 minutes.",
      how: "Build questions from statements on the board, five times. Then teach the “to be” exception separately — it behaves like Level 1 and learners already know the operation.",
      mistakes: "“Did you were at home?” mixes the two systems. Show them side by side so the difference is visible.",
      extra: "Ten questions: five with “did”, five with “was” or “were”. Mixing them is the real test.",
      tip: "The six question words from Level 1 all work here: what, where, when, who, why, how. Combine them with “did” and learners can ask about anything in the past.",
      activity: "Interview about yesterday: every learner asks three classmates five past questions and notes the answers.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — put it all together",
    sub: "The right form, the right ending, and “did” where it belongs.",
    left: { h: "Correct", items: ["I travelled to Adama last week.", "She did not come to class.", "Did you see the film?", "We were at home yesterday."] },
    right: { h: "Wrong", items: ["I travel to Adama last week.", "She did not came to class.", "Did you saw the film?", "We did be at home yesterday."] },
    note: "Four checks:  1 · is the verb in the past at all?   2 · -ed or the irregular form?   3 · BASE verb after did?   4 · was/were instead of did, for the verb “to be”?",
    notes: tn({
      time: "10 minutes.",
      how: "Take each wrong sentence and ask the class to name the error. Each has exactly one — say so in advance.",
      mistakes: "The first is the most serious: the learner has not marked the past at all. The time expression “last week” is the clue they missed.",
      extra: "Two more for pairs: “I didn't ate” and “Where you went?”",
      tip: "These four checks are the marking standard for this module. Add them to the wall beside the Module 1 and 2 checks.",
      activity: "Error auction: teams bid on how many errors they can find in a set of six sentences.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — regular verbs", sub: "Check the ending of the verb first.", items: [
      { q: "Past of “work”:  “I ___ yesterday.”", a: "I worked yesterday.", why: "Most verbs simply add -ed. And there is no -s ever, for any person." },
      { q: "Past of “live”:  “She ___ in Gondar.”", a: "She lived in Gondar.", why: "The verb already ends in -e, so only -d is added. Never “liveed”." },
      { q: "Past of “study”:  “They ___ all night.”", a: "They studied all night.", why: "Consonant + y becomes -ied. The same shape as the -ies rule from Module 1." },
    ] },
    { title: "Guided examples 2 — irregular verbs", sub: "There is no rule. These are memory.", items: [
      { q: "Past of “go”:  “I ___ to Bahir Dar.”", a: "I went to Bahir Dar.", why: "Irregular — a completely different word. “Goed” is a logical guess but it does not exist." },
      { q: "Past of “buy”:  “She ___ a new phone.”", a: "She bought a new phone.", why: "Irregular, said /bɔːt/ with a silent gh. Three verbs share this pattern: buy, bring, think." },
      { q: "Past of “eat”:  “We ___ injera and shiro.”", a: "We ate injera and shiro.", why: "Irregular. “Ate” is said /eɪt/ — the same sound as the number eight." },
    ] },
    { title: "Guided examples 3 — the -ed sound", sub: "One syllable or two?", items: [
      { q: "How many syllables in “walked”?", a: "One.  /wɔːkt/", why: "The verb does not end in t or d, so the -ed adds no syllable. It is one beat: walkt." },
      { q: "How many syllables in “wanted”?", a: "Two.  want-ed", why: "The verb ends in t, so the -ed becomes a separate syllable. You cannot say two t sounds together." },
      { q: "How many syllables in “played”?", a: "One.  /pleɪd/", why: "No t or d at the end of the base verb, so no extra syllable. “Play-ed” is a very common learner error." },
    ] },
    { title: "Guided examples 4 — negatives and questions", sub: "After “did”, the verb goes back to base.", items: [
      { q: "Make it negative: “I went to school.”", a: "I did not go to school.", why: "“Did” takes the past, so “went” returns to “go”. The past is marked exactly once." },
      { q: "Make it a question: “She bought a bag.”", a: "Did she buy a bag?", why: "“Did” goes first and “bought” returns to “buy”. You do not need the irregular form at all here." },
      { q: "Correct this: “Did you saw the film?”", a: "Did you see the film?", why: "Double-marking. “Did” already carries the past, so “saw” must go back to “see”." },
    ] },
    { title: "Guided examples 5 — was and were", sub: "The verb “to be” does not use “did”.", items: [
      { q: "Complete: “I ___ at home yesterday.”", a: "I was at home yesterday.", why: "“Be” is the only verb with two past forms. I, he, she and it take “was”." },
      { q: "Complete: “They ___ very tired.”", a: "They were very tired.", why: "You, we and they take “were”. This is the only verb in English that changes for the person in the past." },
      { q: "Make it a question: “She was late.”", a: "Was she late?", why: "No “did” needed. “Was” moves in front of the subject, exactly like “is” in Level 1." },
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
    title: "Talking about the weekend",
    sub: "Sara and Mimi meet on Monday morning.",
    turns: [
      { who: "MIMI", text: "Good morning, Sara. What did you do at the weekend?", side: "l" },
      { who: "SARA", text: "I went to Bahir Dar with my family.", side: "r" },
      { who: "MIMI", text: "Really? Did you enjoy it?", side: "l" },
      { who: "SARA", text: "Yes, I did. We saw the lake and we ate fish.", side: "r" },
      { who: "MIMI", text: "Did you travel by bus?", side: "l" },
      { who: "SARA", text: "No, we did not. My uncle drove us in his car.", side: "r" },
    ],
    note: "Find them:  three questions with DID  ·  two short answers  ·  four irregular past verbs  ·  one regular one.",
    notes: tn({
      time: "12 minutes.",
      how: "Listen books closed, chorus, pair reading, then perform with their own real weekend. The finding task makes the grammar visible inside real language.",
      mistakes: "Note that every question uses the base verb — “did you enjoy”, “did you travel” — while the answers use the past forms. That contrast is the module in one dialogue.",
      extra: "The irregulars here: went, saw, ate, drove. The regular: enjoyed. Ask learners to identify which is which.",
      tip: "“What did you do at the weekend?” is the most useful question in the module and learners will be asked it every Monday. Drill it separately.",
      activity: "Monday morning: everyone asks three classmates what they did at the weekend and reports one answer to the class.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Something went wrong",
    sub: "Abel tells Dawit about a bad day at Merkato.",
    turns: [
      { who: "DAWIT", text: "You look tired. What happened yesterday?", side: "l" },
      { who: "ABEL", text: "It was a very bad day. I lost my phone.", side: "r" },
      { who: "DAWIT", text: "Oh no. Where did you lose it?", side: "l" },
      { who: "ABEL", text: "I do not know. I went to the market and then it was not in my bag.", side: "r" },
      { who: "DAWIT", text: "Did you call the number?", side: "l" },
      { who: "ABEL", text: "Yes, I did. But nobody answered.", side: "r" },
    ],
    note: "This is a STORY: something happened, then something else happened. Notice “and then” — it moves the story forward.",
    notes: tn({
      time: "12 minutes.",
      how: "After reading, ask the class to put the events in order. Sequencing is the skill that turns separate sentences into a story.",
      mistakes: "“What happened?” has no “did” because “happened” is already the past — the question word “what” is the subject. Do not explain that at this level; teach it as a fixed phrase.",
      extra: "Story connectors to teach here: then · after that · so · but · finally.",
      tip: "Bad-day stories produce far more language than good-day stories, because something goes wrong and there is a reason to keep talking.",
      activity: "Tell a bad day: pairs tell each other about a day when something went wrong. Six sentences each.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful phrases for telling a story",
    sub: "Six phrases that hold a story together.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaQuestion", title: "“What happened?”", desc: "The question that starts every story." },
      { icon: "FaArrowRight", title: "“First … then … after that …”", desc: "Puts the events in order for your listener." },
      { icon: "FaExclamationTriangle", title: "“Suddenly …”", desc: "Signals the surprise. Every good story has one." },
      { icon: "FaComments", title: "“Really? What did you do?”", desc: "Shows you are listening. Keeps the story going." },
      { icon: "FaCheck", title: "“In the end …”", desc: "Signals the finish so your listener knows you are closing." },
      { icon: "FaStar", title: "“It was a good / bad day.”", desc: "One sentence that sums up the whole story." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill all six in chorus. Then tell a 30-second story yourself using all six and have learners raise a hand each time they hear one.",
      mistakes: "Learners tell stories as unconnected sentences. The connectors are what make it a story rather than a list.",
      extra: "Add “luckily” and “unfortunately” for a strong class.",
      tip: "Phrase 4 is the listener's phrase, and it matters as much as the speaker's. A story needs someone reacting to it.",
      activity: "Story with connectors: pairs tell a story and the listener must use phrase 4 at least twice.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "HANA", text: "What ______ you ______ last weekend?", side: "l" },
      { who: "YOU", text: "I ______ to ______________ with my friend.", side: "r" },
      { who: "HANA", text: "______ you enjoy it?", side: "l" },
      { who: "YOU", text: "Yes, I ______ . We ______ a lot of photographs.", side: "r" },
      { who: "HANA", text: "______ you travel by bus?", side: "l" },
      { who: "YOU", text: "No, we ______ not. We ______ .", side: "r" },
    ],
    note: "Use these:  did · do · went · a place · Did · did · took · Did · did · walked (or drove)",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps in writing, then three pairs perform before you reveal the answers.",
      answers: "1 did ... do · 2 went + a place · 3 Did · 4 did · 5 took · 6 Did · 7 did · 8 walked or drove",
      mistakes: "Gap 1 needs the base verb “do” after “did”, which looks strange written down. Point at it.",
      tip: "Have learners perform it with their own real weekend. The frame stays; the content is theirs.",
      activity: "Do it again with a different weekend and different transport.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — tell a story", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Tell your partner about yesterday", d: "Six sentences. Your partner counts the past verbs." },
      { t: "Tell them about a journey you made", d: "Where, when, how, who with, what happened." },
      { t: "Your partner asks you five questions with DID", d: "Answer with short answers first, then add detail." },
      { t: "Tell the story again to a new partner", d: "It will be faster and better the second time." },
    ],
    notes: tn({
      time: "9 minutes for all four rounds.",
      how: "Round 4 is the one teachers skip and the most valuable. Telling the same story twice produces noticeably better language the second time, and learners feel it.",
      mistakes: "Round 3 is where “Did you went?” appears. Note it and correct at the end, not during.",
      tip: "Give a story-telling target: at least six past verbs and at least two connectors.",
      activity: "Best story: after round 4, three learners tell their story to the whole class and the class votes on the most interesting.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the irregular verb chant", sub: "Sixty seconds, every lesson, for the rest of Level 2.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "Teacher says the base, class says the past", d: "go — went · eat — ate · buy — bought. Ten verbs, thirty seconds." },
      { t: "Reverse it", d: "Teacher says the past, class says the base. Much harder." },
      { t: "Use it", d: "Each learner makes one true past sentence with one of the ten verbs." },
    ],
    notes: tn({
      time: "8 minutes the first time, 60 seconds thereafter.",
      how: "Part B is where the real learning is. Recognising “went” is easy; producing “go” from it proves the pair is genuinely known.",
      mistakes: "Learners who hesitate for more than two seconds do not know the verb yet. Note which ones stall and re-drill those.",
      extra: "Ten new verbs each week, and always re-drill the previous ten as well.",
      tip: "This is the single highest-value routine in Level 2. It costs sixty seconds and it is the difference between knowing the list and using it.",
      activity: "Verb tennis in pairs, thirty seconds each way, at the start of every lesson.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — my yesterday in ten sentences", sub: "Everyone. Standing up.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "What time did you wake up?", d: "“I woke up at ___.”  Irregular: wake → woke." },
      { t: "What did you eat?", d: "“I ate ___ for breakfast.”  Irregular: eat → ate." },
      { t: "Where did you go?", d: "“I went to ___.”  Irregular: go → went." },
      { t: "What did you do there?", d: "Two or three sentences. Mix regular and irregular verbs." },
      { t: "What time did you go home?", d: "“I got home at ___.”  Irregular: get → got." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Four of the five prompts contain an irregular verb, deliberately. Learners produce them naturally rather than reciting a list.",
      mistakes: "Learners revert to the present after two or three sentences. Remind them at the start: every verb must be in the past.",
      extra: "For a strong class, add: “What did you NOT do yesterday?” which forces the negative.",
      tip: "Standing up genuinely changes the voice and the fluency. Insist on it.",
      activity: "Report a partner: after speaking, each learner tells the class one thing their partner did yesterday.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the -ed ending",
    sub: "Only verbs ending in T or D add a syllable. All the others do not.",
    left: { h: "One syllable — no extra beat", items: ["worked", "walked", "watched", "played", "lived", "travelled"] },
    right: { h: "Two syllables — extra beat", items: ["wanted  (want-ed)", "started  (start-ed)", "needed  (need-ed)", "visited  (vis-it-ed)", "waited  (wait-ed)", "decided  (de-cid-ed)"] },
    note: "Say them and clap: “worked” is ONE clap. “wanted” is TWO. If the base verb ends in t or d, you get the extra beat.",
    notes: tn({
      time: "10 minutes.",
      how: "Clap all twelve. Then say one at random and have learners clap the syllable count. Twenty rounds. The clapping does the teaching.",
      mistakes: "Adding a syllable everywhere — “walk-ed”, “play-ed” — is the commonest error and it makes speech sound noticeably non-native. It is also very easy to fix.",
      extra: "Put them in sentences: “I worked yesterday.” “I wanted to go.” The difference is clearer inside a sentence than in isolation.",
      tip: "The rule fits in one line: t or d at the end of the base verb means an extra beat. Nothing else does.",
      activity: "Clap the story: read a short past text and have the class clap on every -ed verb, once or twice as appropriate.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — role plays", sub: "Work in pairs. Two minutes per situation.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "A friend asks about your weekend", d: "Five questions with DID, five answers in the past." },
      { t: "You explain why you were late", d: "“The bus did not come. I waited for an hour.”" },
      { t: "You tell a story about a journey", d: "Where you went, how you travelled, what happened, how it ended." },
      { t: "You report a lost item at a shop", d: "“I was here yesterday. I lost my bag. It was black.”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Situation 2 is the most immediately useful — explaining a delay is something every learner needs. Situation 4 practises “was” and “were” alongside “did”.",
      mistakes: "Situation 4 mixes the two past systems: “I was here” and “I lost my bag”. That mix is what makes it valuable.",
      extra: "Situation 3 is the module capstone in miniature. Give it the most time.",
      tip: "Give each pair one thing to listen for: the base verb after “did”, or the past form in statements.",
      activity: "Perform two situations to the class and let the class count the correct past forms.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — tell your story", sub: "2 minutes. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say when and where", d: "“Last year I travelled to ___.”" },
      { t: "Say who you were with and how you went", d: "“I went with my family. We travelled by bus.”" },
      { t: "Say three things you did", d: "Three past verbs. At least one irregular." },
      { t: "Say one thing that went wrong or surprised you", d: "“Suddenly it started to rain.”" },
      { t: "Say how it ended and how you felt", d: "“In the end it was a very good day.”" },
    ],
    notes: tn({
      time: "15 minutes including listening back.",
      how: "This is a real story with a beginning, a middle and an end. Model it yourself first — two minutes, true, from your own life.",
      mistakes: "Learners produce a list of facts rather than a story. Steps 4 and 5 are what make it a story; insist on both.",
      answers: "SUCCESS CRITERIA: at least eight past verbs · at least three irregular · at least two connectors (then, after that, in the end) · a listener can retell the story afterwards.",
      tip: "Ask a partner to retell the story afterwards. If they can, the story worked. That is a better test than counting verbs.",
      activity: "Keep every recording. This one is the best evidence of Level 2 progress you will collect.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — a journey", sub: "Listen twice. Write the six things that happened, in order.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.34,
      text: "“Last year I travelled to Lalibela with my sister.\nWe left Addis Ababa at six in the morning.\nThe journey took twelve hours by bus.\nWe arrived at six in the evening and we were very tired.\nThe next day we saw the churches. They were beautiful.\nWe stayed for three days and then we came home.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write the six events in the order you hear them.",
      "Write the three times you hear.",
      "Which verbs were irregular? There are five.",
      "The teacher reads it twice, at natural speed.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Read twice at natural pace. The ordering task is the real exercise — sequencing is what turns comprehension into story understanding.",
      mistakes: "Learners catch the events but miss the times. Tell them both matter before they start.",
      extra: "The five irregular verbs: left, took, saw, were, came. “Travelled”, “arrived” and “stayed” are regular.",
      answers: "1 travelled to Lalibela · 2 left at six in the morning · 3 the journey took twelve hours · 4 arrived at six in the evening · 5 saw the churches the next day · 6 stayed three days and came home.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check the verb forms and the times.",
    size: 17,
    items: [
      { q: "1 — the journey", a: "She travelled to Lalibela with her sister.", why: "“Travel” is regular and doubles the l: travelled. When you report it, “I” becomes “she”." },
      { q: "2 — the departure", a: "They left Addis Ababa at six in the morning.", why: "“Leave” is irregular: left. AT for a clock time, from Level 1." },
      { q: "3 — how long", a: "The journey took twelve hours.", why: "“Take” is irregular: took. Used here for the length of a journey." },
      { q: "4 — the arrival", a: "They arrived at six in the evening.", why: "“Arrive” ends in -e, so only -d is added. And it is “arrive at”, never “arrive to”." },
      { q: "5 — the irregular verbs", a: "left · took · saw · were · came", why: "Five of the eight verbs were irregular. That proportion is normal in everyday speech, which is why the forty verbs matter so much." },
    ],
    notes: keyNotes("Answer 5 makes an important point: most of the verbs people actually use in past-tense speech are irregular. That is why the memory work is worth it."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — questions and answers", sub: "Listen for the base verb after “did”.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.32,
      text: "MIMI:   Did you go to the wedding on Saturday?\nDAWIT:  Yes, I did. It was very good.\nMIMI:   Who did you go with?\nDAWIT:  I went with my brother. We arrived at four.\nMIMI:   Did you eat there?\nDAWIT:  Yes, we did. We ate doro wot and injera.\nMIMI:   Did you dance?\nDAWIT:  No, I did not! But my brother danced all night." },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. Where did Dawit go on Saturday?",
      "2. Who did he go with?",
      "3. What time did they arrive?",
      "4. What did they eat?",
      "5. Did Dawit dance?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Read twice, changing your voice for the two speakers. Then ask learners to notice that every question has a BASE verb and every answer has a PAST verb.",
      mistakes: "Question 5 needs a negative short answer with a contrast: “No, he did not, but his brother did.” A complete answer includes the contrast.",
      extra: "Count the “did” questions: there are four. Count the past verbs in the answers: there are six.",
      answers: "1 To a wedding. · 2 With his brother. · 3 At four o'clock. · 4 Doro wot and injera. · 5 No, he did not, but his brother danced.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Notice: base verb in questions, past verb in answers.",
    size: 17,
    items: [
      { q: "1 — Where did he go?", a: "He went to a wedding.", why: "The question used the base “go”; the answer uses the past “went”. That swap is the module's core pattern." },
      { q: "2 — Who did he go with?", a: "He went with his brother.", why: "“Go with” — the preposition stays at the end of the question in natural English." },
      { q: "3 — What time did they arrive?", a: "They arrived at four o'clock.", why: "“Arrive” is regular, ending in -e, so just -d. AT for a clock time." },
      { q: "4 — What did they eat?", a: "They ate doro wot and injera.", why: "The question has “eat”, the answer has “ate”. Irregular verbs only appear in the answer." },
      { q: "5 — Did he dance?", a: "No, he did not. But his brother danced all night.", why: "A full answer gives the negative and the contrast. “Dance” is regular: danced, one syllable." },
    ],
    notes: keyNotes("The base-in-question, past-in-answer pattern is worth naming explicitly. It is why learners can ask past questions long before they have memorised all forty irregular forms."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to follow a story in English", sub: "Four habits for listening to something that already happened.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaClock", title: "Listen for the time word first", desc: "“Yesterday”, “last week”, “in 2019” tell you the story is in the past before any verb arrives." },
      { icon: "FaArrowRight", title: "Listen for the connectors", desc: "“Then”, “after that”, “suddenly”, “in the end” tell you where you are in the story." },
      { icon: "FaVolumeUp", title: "Do not stop at an unknown verb", desc: "If you miss one irregular verb you can still follow the story. Keep going." },
      { icon: "FaUsers", title: "Listen for who did what", desc: "In a story the people change. Catching the subject matters more than catching every verb." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Read a short story and have learners raise a hand only at the connectors. It shows them how much structure they can catch without understanding every word.",
      mistakes: "Learners freeze on an unknown irregular verb and lose the next three sentences. Habit 3 is the fix and it needs saying explicitly.",
      tip: "Habit 1 is the most useful: the time expression usually comes early and it sets the tense for everything that follows.",
      activity: "Connector hunt: read a two-minute story and have learners list every connector they hear.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — a day at Merkato", sub: "Read it aloud twice before you answer.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 18, lsm: 1.34,
      text: "Last Saturday Abel went to Merkato early.\nHe wanted to buy vegetables for the week.\nHe walked to the market because the bus did not come.\nHe bought two kilos of tomatoes and some onions.\nThen he met his friend Yonas and they drank coffee together.\nHe arrived home at twelve o'clock. He was very tired but he was happy." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the whole text once.",
      "The class reads it together, in chorus.",
      "Then six learners read one line each.",
      "Underline every past verb. Circle the irregular ones.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Teacher, chorus, individuals, then the marking task. Sorting the verbs into regular and irregular is the point of the exercise.",
      mistakes: "The verbs: went, wanted, walked, did not come, bought, met, drank, arrived, was, was. Irregular: went, come, bought, met, drank, was. Regular: wanted, walked, arrived.",
      extra: "Ask why “come” appears in its base form. Because it follows “did not” — the module's key rule, appearing inside a real text.",
      tip: "Point at “did not come”. It is the clearest possible example of the base verb after “did”, and it is in the middle of a normal story.",
      activity: "Rewrite it: learners rewrite the story about themselves, changing the day, the place and the purchases.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE, using the past tense.",
    items: [
      "When did Abel go to Merkato?",
      "Why did he walk?",
      "What did he buy?",
      "Who did he meet?",
      "How did he feel at the end?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Every answer needs a past verb. That is what is being assessed, not the facts.",
      mistakes: "Question 5 needs “was”, not “did”. It tests whether learners can switch between the two past systems.",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 He went last Saturday. · 2 Because the bus did not come. · 3 He bought tomatoes and onions. · 4 He met his friend Yonas. · 5 He was tired but happy.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Check the past form in every answer.",
    size: 17,
    items: [
      { q: "1 — When did he go?", a: "He went last Saturday.", why: "The question uses the base “go”, the answer uses the past “went”. That is the pattern throughout." },
      { q: "2 — Why did he walk?", a: "Because the bus did not come.", why: "“Did not” is followed by the base “come”, not “came”. This is the module's central rule." },
      { q: "3 — What did he buy?", a: "He bought tomatoes and onions.", why: "“Buy” is irregular: bought, with a silent gh, said /bɔːt/." },
      { q: "4 — Who did he meet?", a: "He met his friend Yonas.", why: "“Meet” is irregular: met. Note the single t in the past form." },
      { q: "5 — How did he feel?", a: "He was tired but happy.", why: "This uses “was”, not “did”. The verb “to be” has its own past and never takes “did”." },
    ],
    notes: keyNotes("Question 5 is the diagnostic: it requires switching from the “did” system to the “was/were” system. Learners who answer “He did tired” have not separated the two."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a story with a problem", sub: "A longer text. Read it aloud twice.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 17.5, lsm: 1.32,
      text: "Two years ago Mimi travelled to Lalibela for the first time.\nShe left Adama at five in the morning and took a bus.\nThe journey was long and the road was very bad.\nAfter eight hours the bus stopped. Something was wrong with the engine.\nEverybody got off and waited by the road.\nSuddenly a lorry came. The driver helped them and took them to the next town.\nMimi arrived in Lalibela at midnight. In the end she saw the churches — and she never forgot that journey." },
    side: { label: "New words here", color: C.read, size: 16, items: [
      "engine — the part that makes a bus move",
      "got off — left the bus",
      "lorry — a large vehicle for goods",
      "forgot — past of “forget”",
      "Find the four story connectors.",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "Teacher, chorus, individuals. Then the connector-finding task: after, suddenly, in the end, and “and” linking events.",
      mistakes: "“Got off” is a two-word verb and its past is irregular. Teach it as one item.",
      extra: "This text has a proper story shape: setting, journey, problem, solution, ending. Point out each part — that shape is what learners must reproduce in their own capstone.",
      tip: "This is the model for the two-minute speaking challenge. Ask learners to identify the five parts, then use the same five parts in their own story.",
      activity: "Story map: learners draw five boxes — setting, journey, problem, solution, ending — and fill them from the text. Then fill the same five boxes with their own story.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — questions, answers and vocabulary review", sub: "Answer first, then check.",
    size: 17,
    items: [
      { q: "1 — When did Mimi travel to Lalibela?", a: "She travelled two years ago.", why: "“Ago” comes after the amount of time: two years ago, not ago two years." },
      { q: "2 — What was the problem?", a: "The bus stopped. Something was wrong with the engine.", why: "“Stop” doubles its p: stopped. And “was” for the state, not “did”." },
      { q: "3 — Who helped them?", a: "A lorry driver helped them.", why: "“Help” is regular: helped, one syllable — the base does not end in t or d." },
      { q: "4 — What time did she arrive?", a: "She arrived at midnight.", why: "“Arrive” takes only -d. And the preposition is “arrive in” for a town or city." },
      { q: "5 — Vocabulary check: name the five words from this module.", a: "travel · arrive · buy · yesterday · story", why: "All five appeared in this module. Three of them are in this text — find them again." },
    ],
    notes: keyNotes("Question 2 needs both past systems in one answer: “stopped” with “did”-style past and “was” for the state. It is the best single comprehension item in the module."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — write the past form", sub: "Regular or irregular? Check each one.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write the past form of each verb. Mark R for regular or I for irregular.",
    items: [
      "1.  work · live · study · stop",
      "2.  go · eat · buy · see",
      "3.  travel · arrive · want · finish",
      "4.  take · come · meet · drink",
      "5.  be  (two forms) · have · do · get",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Rows 1 and 3 are regular, rows 2 and 4 are irregular, row 5 is the hardest. Do row 1 together, then let them work alone.",
      answers: "1 worked, lived, studied, stopped (all R) · 2 went, ate, bought, saw (all I) · 3 travelled, arrived, wanted, finished (all R) · 4 took, came, met, drank (all I) · 5 was/were, had, did, got (all I)",
      mistakes: "Row 5 contains the four most common verbs in English, and all four are irregular. That is worth pointing out.",
      tip: "The R and I marking matters: learners who can predict which system a verb uses make far fewer errors than those who guess.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — “What I did yesterday”", sub: "The Level 2 writing task. Eight sentences.",
    panelW: 7.6,
    panel: { label: "Write eight sentences using this frame", color: C.write, tint: C.writeTint, size: 18.5, lsm: 1.44,
      text: "Yesterday I woke up at ______.\nI had ______________ for breakfast.\nThen I went to ______________.\nI ______________ there.\nAt ______ o'clock I ______________.\nI did not ______________.\nIn the evening I ______________.\nIt was a ______________ day." },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Is every verb in the past?",
      "Are the irregular forms correct?",
      "Is the verb after “did not” in its BASE form?",
      "Did you use “was” for the last sentence, not “did”?",
      "Capital letters and full stops?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Write your own completed example on the board and leave it there. The frame contains four irregulars deliberately — woke, had, went, was.",
      mistakes: "The sixth line is the trap: after “did not” the verb must be in its base form. Learners write the past form.",
      extra: "Fast finishers add two more sentences with connectors — “after that” and “finally”.",
      tip: "Collect these and keep them. The same task appears in the Level 2 exam.",
      activity: "Swap and check: partners underline every verb and tick or cross the form.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — negatives and questions", sub: "Change each sentence as instructed.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write the full new sentence each time.",
    items: [
      "1.  Make it negative:  “I went to school.”",
      "2.  Make it negative:  “She bought a new phone.”",
      "3.  Make it a question:  “They travelled by bus.”",
      "4.  Make it a question:  “He ate injera.”",
      "5.  Make it a question:  “You were at home.”",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Do item 1 together, moving the past marker onto “did”. Then let them work alone.",
      answers: "1 I did not go to school. · 2 She did not buy a new phone. · 3 Did they travel by bus? · 4 Did he eat injera? · 5 Were you at home?",
      mistakes: "Items 1 to 4 all require removing the past from the main verb. Item 5 is the exception and uses “were” instead of “did”.",
      tip: "Item 5 is the diagnostic. A learner who wrote “Did you were at home?” has mixed the two systems.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — answers and why", sub: "The past is marked exactly once.",
    size: 17,
    items: [
      { q: "1 — negative of “I went to school.”", a: "I did not go to school.", why: "“Did” takes the past, so “went” returns to “go”. Never “did not went”." },
      { q: "2 — negative of “She bought a new phone.”", a: "She did not buy a new phone.", why: "Same rule with an irregular verb — and notice you do not need to know “bought” at all here." },
      { q: "3 — question from “They travelled by bus.”", a: "Did they travel by bus?", why: "“Did” goes first and the -ed comes off. Regular verbs follow exactly the same rule." },
      { q: "4 — question from “He ate injera.”", a: "Did he eat injera?", why: "“Ate” returns to “eat”. The base form after “did”, every time." },
      { q: "5 — question from “You were at home.”", a: "Were you at home?", why: "The verb “to be” makes its own question. No “did” — “were” simply moves to the front." },
    ],
    notes: keyNotes("Items 1–4 use the “did” system and item 5 uses the “was/were” system. Learners must be able to tell which verb they are dealing with — that is the real skill."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist for this module", sub: "Add these to your Module 1 and 2 checks.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "Is every verb in the past?", d: "Look for the time word — yesterday, last week, in 2019 — and check every verb matches it." },
      { t: "Is the irregular form correct?", d: "went, not goed. bought, not buyed. Check against the forty-verb card." },
      { t: "Is the verb after “did” in its BASE form?", d: "“I did not go.” — never “I did not went.”" },
      { t: "Did you use “was” or “were” instead of “did” for the verb “to be”?", d: "“Was it good?” — not “Did it be good?”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points, then have learners check their “What I did yesterday” against all four.",
      tip: "The wall now has twelve checks across three Level 2 modules. Refer to them by number when marking.",
      activity: "Deliberate error hunt: write four sentences on the board with exactly four errors, one of each type.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. The past of “go” is …", opts: "a) goed     b) went     c) gone" },
      { q: "2. Which is correct?", opts: "a) I didn't went.     b) I didn't go.     c) I didn't gone." },
      { q: "3. The past of “study” is …", opts: "a) studyed     b) studied     c) studed" },
      { q: "4. Which is correct?", opts: "a) Did you saw her?     b) Did you see her?     c) Did you seen her?" },
      { q: "5. Complete: “I ___ at home yesterday.”", opts: "a) was     b) were     c) did" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 a",
      tip: "Questions 2 and 4 test the same rule from two directions. A learner who gets one right and one wrong is guessing.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Write the past form of the verb.",
    color: C.green, instruction: "Copy each sentence and fill the gap.", size: 18,
    items: [
      "1.  Yesterday I ______ to the market.  (go)",
      "2.  She ______ a new dress last week.  (buy)",
      "3.  We ______ English for two hours.  (study)",
      "4.  They ______ at six o'clock.  (arrive)",
      "5.  He ______ very tired after the journey.  (be)",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Items 1, 2 and 5 are irregular; 3 and 4 are regular. Ask learners to mark which is which as they go.",
      answers: "1 went · 2 bought · 3 studied · 4 arrived · 5 was",
      mistakes: "Item 5 needs “was”, and learners sometimes write “were” for a singular subject.",
      tip: "Item 3 uses the -ied rule and item 4 uses the -d rule. Both are spelling rules learners have met before in other endings.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Base forms, past forms and sounds.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the BASE to the PAST", opts: "1. see     2. take     3. drink     4. write          a) took     b) wrote     c) saw     d) drank" },
      { q: "Part 2 — match the VERB to the -ed SOUND", opts: "1. worked     2. wanted     3. played     4. visited          a) two syllables     b) one syllable     c) two syllables     d) one syllable" },
      { q: "Part 3 — match the SENTENCE to the CORRECTION", opts: "1. I didn't went.     2. Did you saw?     3. She buyed it.     4. We was late." },
      { q: "a) She bought it.        b) I didn't go.", opts: "c) We were late.        d) Did you see?" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks, three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–c, 2–a, 3–d, 4–b.  ·  Part 2: 1–b, 2–a, 3–d, 4–c.  ·  Part 3: 1–b, 2–d, 3–a, 4–c.",
      tip: "Part 3 covers the four commonest past-tense errors. If learners can match them, they can self-correct.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — the forty verbs", sub: "Write the past form. Ten at a time.",
    color: C.green, instruction: "Write the past form of each verb.", size: 18,
    items: [
      "1.  go · eat · see · buy · take",
      "2.  come · give · get · make · know",
      "3.  drink · run · write · read · meet",
      "4.  sit · sleep · speak · pay · sell",
      "5.  begin · break · understand · wear · lose",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Twenty-five verbs is a lot. Give five minutes, then mark it together, then have learners re-test only the ones they got wrong.",
      answers: "1 went, ate, saw, bought, took · 2 came, gave, got, made, knew · 3 drank, ran, wrote, read (/red/), met · 4 sat, slept, spoke, paid, sold · 5 began, broke, understood, wore, lost",
      mistakes: "“Read” is the trap — spelled the same, said /red/. “Pay” becomes “paid”, not “payed”.",
      tip: "Have learners keep this exercise and re-do it every week. Their own improving score is the best motivation for the memory work.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each sentence has one or more errors.",
    color: C.green, instruction: "Rewrite each sentence correctly.", size: 18,
    items: [
      "1.  I goed to Gondar last year.",
      "2.  She didn't came to class.",
      "3.  Did you bought the tickets?",
      "4.  We was very tired.",
      "5.  He study English yesterday.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each. All have one except sentence 5, which has one that is easy to miss.",
      answers: "1 I went to Gondar last year. · 2 She did not come to class. · 3 Did you buy the tickets? · 4 We were very tired. · 5 He studied English yesterday.",
      mistakes: "Sentence 5 is the subtle one: the verb is not marked for the past at all, and the only clue is “yesterday”.",
      tip: "These five are the four checks from slide 20 plus the over-application error. Every one will appear again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  The past simple has the same form for every person.",
      "2.  “I didn't went” is correct English.",
      "3.  The past of “buy” is “buyed”.",
      "4.  “Walked” has two syllables.",
      "5.  The verb “to be” uses “did” to make questions.",
      "6.  “Arrive” becomes “arrived” in the past.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test.",
      answers: "1 T (except “be”, which has was and were) · 2 F — “I didn't go” · 3 F — it is “bought” · 4 F — one syllable · 5 F — it uses “was” and “were” · 6 T",
      tip: "Item 1 is worth a discussion: it is true for every verb except “be”, which is the only exception in the whole tense.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Answer in a full sentence.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What did you do yesterday?",
      "2.  Where did you go last weekend?",
      "3.  What did you eat this morning?",
      "4.  What did you NOT do yesterday?",
      "5.  Where were you at eight o'clock last night?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Every answer is personal. Item 4 forces the negative and item 5 forces “was”, so the set covers all three systems.",
      answers: "1 I ___ yesterday. · 2 I went to ___. · 3 I ate/had ___. · 4 I did not ___. · 5 I was at ___.",
      mistakes: "Item 4 needs the base verb after “did not”. Item 5 needs “was”, not “did”.",
      tip: "Ask three learners to read items 4 and 5 aloud. Those two carry the module's hardest rules.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Say eight sentences about yesterday. At least four irregular verbs.",
      "2.  Ask your partner five questions with DID. Check the base verb.",
      "3.  Say three things you did NOT do last week.",
      "4.  Tell a 60-second story about a journey.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Give each partner a listening job: task 2 check the base verb after “did”, task 1 count the irregular verbs.",
      answers: "SUCCESS CRITERIA: 1 eight past verbs, four irregular · 2 five questions with base verbs · 3 three correct negatives · 4 a story with a beginning, a problem and an ending.",
      tip: "Task 4 is the module capstone in miniature. Listen to as many as you can.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These use everything from this module.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write a six-sentence story about a journey you made.", opts: "Use at least two connectors." },
      { q: "2. Correct this:  “Last week I goed to Adama. I didn't took the bus. Was very expensive.”", opts: "There are four things to fix." },
      { q: "3. Write five questions with DID about someone's weekend.", opts: "Check every main verb is in its base form." },
      { q: "4. Write the past of:  think · bring · leave · lose · understand · pay", opts: "Six irregular verbs." },
      { q: "5. Write three sentences with “was” or “were”, and three with “did not”.", opts: "Six sentences in total." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard.",
      answers: "2 “Last week I went to Adama. I did not take the bus. It was very expensive.” — goed → went, took → take after didn't, missing subject “it”, and the capital. 4 thought, brought, left, lost, understood, paid.",
      tip: "Question 2 contains a missing-subject error from Level 1 alongside two Level 2 errors. That mix is realistic — real learner writing contains errors from every level.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why do learners say “I didn't went”? What are they thinking?", opts: "It is a logical mistake, not a careless one." },
      { q: "2. Why is it good news that “did” takes the base verb?", opts: "Think about the forty irregular verbs." },
      { q: "3. Your friend says “I buyed a car.” How would you explain the mistake?", opts: "How would you teach it so they remember?" },
      { q: "4. What is the best way to learn forty irregular verbs? Why?", opts: "Think about what has worked for you so far." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning, then give the English phrase for what they said.",
      answers: "1 They are marking the past twice — once on “did” and once on the verb — because they know the sentence is about the past and want to show it. 2 Because you do not need to know any irregular form to ask a question or make a negative — “did” handles all forty. 3 Any clear explanation; the strongest says some verbs have their own past word and gives three more examples from the same pattern. 4 Ten a week, chanted aloud, tested at the start of every lesson, and used in real sentences about your own life — little and often beats one long list.",
      tip: "Question 2 is genuinely encouraging and learners rarely notice it themselves. Point it out clearly.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Regular verbs", items: [
      { q: "1. The past of “work” is …", opts: "a) worked     b) workd     c) working" },
      { q: "2. The past of “study” is …", opts: "a) studyed     b) studied     c) studed" },
      { q: "3. The past of “stop” is …", opts: "a) stoped     b) stopped     c) stopt" },
      { q: "4. Write the past of:  live · travel · finish", opts: "Three verbs, three rules." },
    ] },
    { part: "Part 2 · Irregular verbs", items: [
      { q: "5. The past of “go” is …", opts: "a) goed     b) went     c) gone" },
      { q: "6. The past of “buy” is …", opts: "a) buyed     b) bought     c) buied" },
      { q: "7. Write the past of:  eat · see · take · come", opts: "Four irregular verbs." },
      { q: "8. The past of “be” has TWO forms. What are they?", opts: "Write both." },
    ] },
    { part: "Part 3 · Negatives and questions", items: [
      { q: "9. Which is correct?", opts: "a) I didn't went.     b) I didn't go.     c) I not went." },
      { q: "10. Make it a question: “She bought a bag.”", opts: "Write the full sentence." },
      { q: "11. Make it negative: “They travelled by bus.”", opts: "Write the full sentence." },
      { q: "12. Make it a question: “You were at home.”", opts: "Careful — no “did” here." },
    ] },
    { part: "Part 4 · Sounds and listening", items: [
      { q: "13. How many syllables in “walked”?", opts: "a) one     b) two" },
      { q: "14. How many syllables in “wanted”?", opts: "a) one     b) two" },
      { q: "15. Listen: where did the speaker go, and when?", opts: "Full sentence." },
      { q: "16. Listen: how did they travel?", opts: "Full sentence." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write three sentences about yesterday.", opts: "At least one irregular verb." },
      { q: "18. Write one negative sentence in the past.", opts: "Check the base verb." },
      { q: "19. Write one question in the past with a question word.", opts: "Where, what, when or who." },
      { q: "20. SPEAKING: tell a 60-second story about something that happened to you.", opts: "Your teacher or partner listens and checks." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 3 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nFOR QUESTIONS 15 AND 16, READ ALOUD: “Last year I went to Lalibela with my sister. We travelled by bus and the journey took twelve hours.”",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — past of “work”", a: "a) worked", why: "Most regular verbs simply add -ed. And there is no -s for any person in the past." },
      { q: "Q2 — past of “study”", a: "b) studied", why: "Consonant + y becomes -ied — the same shape as the -ies rule from Module 1." },
      { q: "Q3 — past of “stop”", a: "b) stopped", why: "One vowel and one consonant at the end, so the consonant doubles — the same rule as -ing in Module 2." },
      { q: "Q4 — live · travel · finish", a: "lived · travelled · finished", why: "Three rules: -d after e, doubling, and plain -ed." } ],
    [ { q: "Q5 — past of “go”", a: "b) went", why: "Irregular — a completely different word. Option c) “gone” is a different form used with “have”, which comes in Level 3." },
      { q: "Q6 — past of “buy”", a: "b) bought", why: "Irregular, said /bɔːt/ with a silent gh. Same family as bring → brought and think → thought." },
      { q: "Q7 — eat · see · take · come", a: "ate · saw · took · came", why: "All four irregular, and all four are among the twenty most common verbs in English." },
      { q: "Q8 — the two past forms of “be”", a: "was and were", why: "I, he, she, it → was.  You, we, they → were. The only verb in English that changes for the person in the past." } ],
    [ { q: "Q9 — which is correct?", a: "b) I didn't go.", why: "“Didn't” carries the past, so the main verb returns to its base form. The past is marked exactly once." },
      { q: "Q10 — question from “She bought a bag.”", a: "Did she buy a bag?", why: "“Did” goes first and “bought” returns to “buy”. You do not need the irregular form in a question." },
      { q: "Q11 — negative of “They travelled by bus.”", a: "They did not travel by bus.", why: "The -ed comes off. Regular verbs follow exactly the same rule as irregular ones here." },
      { q: "Q12 — question from “You were at home.”", a: "Were you at home?", why: "The verb “to be” makes its own question. No “did” — “were” simply moves to the front." } ],
    [ { q: "Q13 — syllables in “walked”", a: "a) one", why: "The base verb does not end in t or d, so the -ed adds no syllable: /wɔːkt/." },
      { q: "Q14 — syllables in “wanted”", a: "b) two", why: "“Want” ends in t, so the -ed becomes a separate syllable: want-ed." },
      { q: "Q15 — where and when?", a: "He/She went to Lalibela last year.", why: "“Go” is irregular: went. “Last year” is the past time expression." },
      { q: "Q16 — how did they travel?", a: "They travelled by bus.", why: "“Travel” is regular and doubles the l. “By bus” is the fixed phrase for transport." } ],
    [ { q: "Q17 — three sentences about yesterday", a: "e.g. “I woke up at six. I went to work. I ate injera.”", why: "Marked on every verb being in the past, and on at least one irregular form being correct." },
      { q: "Q18 — a negative past sentence", a: "e.g. “I did not go to the market.”", why: "The base verb after “did not”. This is the item learners most often get wrong." },
      { q: "Q19 — a past question with a question word", a: "e.g. “Where did you go yesterday?”", why: "Question word, then “did”, then the person, then the base verb — four parts in a fixed order." },
      { q: "Q20 — speaking task", a: "A 60-second story with a beginning, middle and end", why: "Marked on the number of correct past verbs, the use of connectors, and whether a listener could retell it." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q9, Q10 and Q12 are the diagnostic questions. Q9 and Q10 show whether the base-verb-after-did rule has landed; Q12 shows whether learners can separate the “did” system from the “was/were” system. If the class failed those, drill slides 18 to 19 before Module 4."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. The verbs need daily repetition.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Chant ten irregular verbs", d: "Base and past, out loud, five times. Then reverse it." },
      { t: "Tell your day in the past, out loud", d: "Ten sentences about yesterday. Standing up." },
      { t: "Write the past of twenty verbs", d: "Ten regular, ten irregular. Check them against slides 8 and 9." },
      { t: "Practise the -ed sounds", d: "Ten verbs, clapping one or two syllables for each." },
      { t: "Ask three people about their day", d: "Five DID questions each. In English if you can." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's chant is the single most important habit in this module. Sixty seconds a day, every day, for four weeks.",
      tip: "Tuesday's task turns the verbs into real language. A verb chanted but never used in a sentence is only half learned.",
      activity: "Ask learners to send one classmate a past-tense sentence about their day each evening.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write the forty irregular verbs from memory", d: "Base and past. Then check against slides 8 and 9 and mark your own score." },
      { t: "Write “What I did yesterday” — eight sentences", d: "Use the frame from slide 47. At least three irregular verbs and one negative." },
      { t: "Record your two-minute story", d: "When and where · who with and how · three things you did · one problem · how it ended." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 1 is self-marked, which is deliberate — learners see their own score and know exactly which verbs to re-learn.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording personally, by voice. The story task is the best evidence of progress in the whole level — comment on the story, not only on the grammar.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaCheck", title: "Forty verbs — 5 marks", desc: "30+ correct (5) · 25–29 (4) · 20–24 (3) · 15–19 (2) · below 15 (1)." },
      { icon: "FaPencilAlt", title: "Eight sentences — 10 marks", desc: "Eight written (2) · every verb in the past (4) · irregular forms correct (2) · base verb after “did not” (2)." },
      { icon: "FaMicrophone", title: "Story recording — 10 marks", desc: "All five parts (3) · eight or more past verbs (3) · two connectors (2) · a listener can retell it (2)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat the verb drills daily with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework. The verb test is self-marked and honest self-marking is worth teaching in itself.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Mark only what has been taught. Do not penalise present-tense errors here.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaClock", title: "The past simple", desc: "For everything that already happened. One form for every person." },
      { icon: "FaFont", title: "Regular verbs", desc: "-ed · -d · -ied · double + ed. Four small spelling rules." },
      { icon: "FaLayerGroup", title: "40 irregular verbs", desc: "went · ate · bought · saw · took · came — memory, not rules." },
      { icon: "FaVolumeUp", title: "The three -ed sounds", desc: "Only verbs ending in t or d add a syllable: want-ed." },
      { icon: "FaQuestion", title: "did / did not", desc: "And the main verb goes back to its BASE form." },
      { icon: "FaBookOpen", title: "Telling a story", desc: "Beginning · problem · ending, joined with then, suddenly, in the end." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2 and read the objectives again. Ask the same question you asked at the start.",
      tip: "Ask each learner how many of the forty verbs they now know. The number itself is motivating and it is honest.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaFont", title: "Regular past — four rules", desc: "most: + ed  →  worked\nends in -e: + d  →  lived\nconsonant + y: + ied  →  studied\n1 vowel + 1 consonant: double  →  stopped" },
      { icon: "FaLayerGroup", title: "The ten most useful irregulars", desc: "go → went · have → had · do → did\nsay → said · get → got · make → made\nsee → saw · come → came · take → took\nbe → was / were" },
      { icon: "FaQuestion", title: "did / did not", desc: "I did not GO.  (base verb)\nDid you GO?  (base verb)\nBut: WAS it good?  ·  WERE you there?\n— “to be” never uses “did”." },
      { icon: "FaVolumeUp", title: "The -ed sound", desc: "Base verb ends in t or d  →  EXTRA syllable\nwant-ed · need-ed · visit-ed\nEverything else  →  no extra syllable\nworked · played · lived" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it. Together with the forty-verb card it is the whole module.",
      tip: "Print it as an A4 poster beside the Module 1 and 2 posters. Three tenses on the wall is the core of Level 2.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now tell anyone what happened — and that is what most conversation actually is.",
    sub: "Three tenses now: what you do, what you are doing, and what you did.\nThe forty irregular verbs will take a few more weeks to become automatic. Keep chanting them.",
    chips: ["NEXT — Module 4", "Future & Making Plans", "will · going to · what you will do next"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the achievement: three tenses is the point at which learners can hold a real conversation about their lives. Most of what people say is about what they do, what they are doing, or what they did.",
      tip: "Be honest about the irregular verbs: four weeks in, most learners will know twenty-five of the forty. That is normal and it is fine. Keep the daily chant going through Module 4.",
      activity: "Ask every learner to say one true past sentence about their day before they leave.",
    }),
  });
};
