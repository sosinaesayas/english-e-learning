"use strict";
/* LEVEL 2 · MODULE 7 — Listening in Real Life   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 2", levelNo: LV.no, levelName: "Elementary\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Listening in Real Life",
    sub: "Real English is fast, joined together, and does not wait for you. This module teaches you what to listen FOR — and what to do when you miss something.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "6", v: "LISTENING SCRIPTS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by speaking one sentence at natural speed and asking who understood it. Then say it again slowly. The gap between the two is what this module is about.",
      tip: "This is the module learners find hardest and value most. Say at the start that struggling here is normal and not a sign of weak English.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all about real speech, not classroom speech.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Catch numbers, prices and times in fast speech", d: "The information people actually need." },
      { t: "Understand and give directions", d: "Go straight · turn left · it is opposite the bank." },
      { t: "Understand announcements and phone calls", d: "Where speech is fast and you cannot see the speaker's face." },
      { t: "Ask somebody to repeat or slow down — politely", d: "Four phrases. They save every conversation." },
      { t: "Keep listening when you miss a word", d: "The most important skill of all. You cannot go back." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 5 is the real one. In reading you can re-read; in listening you cannot, so stopping to think means missing the next sentence too.",
      tip: "Objective 4 is what learners will use most in the first week outside class.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what is hard about listening?", sub: "Be honest. Everybody finds this difficult.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaVolumeUp", title: "1 · What is hardest?", desc: "Speed? Accent? Not knowing the words? Not seeing the person? Say which." },
      { icon: "FaPhone", title: "2 · On the phone", desc: "Is English on the phone harder than face to face? Why do you think that is?" },
      { icon: "FaQuestion", title: "3 · What do you say?", desc: "When you do not understand somebody, what do you say? What do you WANT to say?" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Task 3 is the diagnostic. Most learners say nothing at all and simply nod — which makes the conversation worse. Name that habit honestly.",
      mistakes: "Correct nothing in the warm-up.",
      tip: "Write task 1 answers on the board. Almost everyone says “speed”, and slide 5 explains why speed is not really the problem.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Nobody understands every word — not even in their own language.",
    sub: "Good listeners are not people who hear everything. They are people who catch the important parts\nand keep going past the rest without panicking.",
    chips: ["Catch the key words", "Guess the rest", "Never stop to think"],
    notes: tn({
      time: "5 minutes.",
      how: "Point out that in Amharic or Oromo they miss words constantly — on a noisy bus, in a crowd — and it does not worry them. The difference in English is fear, not ability.",
      mistakes: "Learners believe missing a word means failure. That belief causes them to stop and think, which makes them miss the next three words as well.",
      tip: "This connects directly to Module 6. The same idea — do not stop at one unknown word — but harder, because you cannot go back.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.compare({
    sec: SEC.con, title: "Why real English sounds so fast",
    sub: "It is not really faster. The words are JOINED.",
    left: { h: "What is written", items: ["What are you doing?", "Do you want a coffee?", "I am going to go.", "What is his name?", "Did you eat?"] },
    right: { h: "What you hear", items: ["“Whatcha doing?”", "“D'you wanna coffee?”", "“I'm gonna go.”", "“What's-is-name?”", "“Dijeat?”"] },
    note: "The speaker is not being lazy. This is normal, correct, educated English. Every native speaker does it, all the time.",
    notes: tn({
      time: "12 minutes.",
      how: "Say each sentence twice: once word by word, once at natural speed. The difference is dramatic and learners will laugh — which is exactly the reaction you want.",
      mistakes: "Learners think they are being spoken to carelessly, or that this is “bad English”. Say plainly that it is normal and that news readers and professors do it too.",
      extra: "The commonest joins: want to → wanna · going to → gonna · what are you → whatcha · did you → didja · got to → gotta.",
      tip: "This single slide relieves a lot of anxiety. Learners realise their ears are fine — they were listening for the wrong sounds.",
      activity: "Fast then slow: read ten sentences at natural speed and have learners write what they think they heard, then reveal the written form.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — key words
  L.panelSide({
    sec: SEC.con, title: "Listen for the STRONG words", sub: "English does not say every word with the same strength.",
    panelW: 6.9,
    panel: { label: "One sentence, two kinds of word", color: C.listen, tint: C.listenTint, size: 18.5, lsm: 1.45,
      text: "“I went to the MARKET\n  and bought some TOMATOES\n  for TWENTY birr.”\n\nSTRONG and clear:\n     market · bought · tomatoes · twenty\n\nWeak and fast:\n     I · to · the · and · some · for" },
    side: { label: "The rule", color: C.listen, size: 16.5, items: [
      "Words that carry MEANING are said strongly: nouns, main verbs, numbers, names.",
      "Small grammar words are swallowed: a, the, to, and, of, for, some.",
      "You do not need the small words — you can guess them.",
      "Listen only for the strong words. That is the whole information.",
    ] },
    notes: tn({
      time: "14 minutes. This is the most important slide in the module.",
      how: "Read the sentence and beat the table on the strong words only. Learners hear the rhythm immediately. Then read a longer sentence and have them raise a hand on every strong word.",
      mistakes: "Learners try to hear every word equally, so they exhaust themselves on “to” and “the” and miss the number. Retrain the target.",
      extra: "This is why English sounds like a drum: strong-weak-weak-strong-weak-strong. Amharic and Oromo do not work this way, which is why the rhythm feels foreign.",
      tip: "If learners take one thing from this module, it should be this slide. Come back to it in every listening exercise.",
      activity: "Beat the rhythm: read five sentences while learners tap the desk only on the strong words.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — numbers
  L.table({
    sec: SEC.con, title: "Catching numbers — the information that matters most",
    sub: "Prices, times, phone numbers and dates are said in fixed ways. Learn the ways.",
    table: {
      color: C.listen, rowH: 0.52, fontSize: 17, headSize: 16, colW: [2.7, 4.5, 4.933],
      rows: [
        ["Kind", "How it is said", "Watch out for"],
        ["Price", "“fifty birr”  ·  “two fifty” = 2.50", "“fifteen” and “fifty” sound very similar"],
        ["Time", "“half past two”  ·  “quarter to nine”", "“to” means before, “past” means after"],
        ["Phone", "digit by digit: “oh nine one one…”", "0 is said “oh” or “zero”, never “nothing”"],
        ["Date", "“the fifth of May”  ·  “May the fifth”", "both orders are correct and both are used"],
      ],
    },
    note: "THIRTEEN or THIRTY?  Listen to the END: -TEEN is long and stressed. -ty is short and weak. Say them aloud until you hear the difference.",
    notes: tn({
      time: "14 minutes.",
      how: "Drill the teen/ty pair hard: 13/30, 14/40, 15/50, 16/60. Say one, learners write it. This confusion costs real money in real markets.",
      mistakes: "The teen/ty confusion is the single most expensive listening error learners make. Give it five full minutes of drilling.",
      extra: "In a market, if you are unsure, ask: “One five or five zero?” Everybody understands and nobody minds.",
      tip: "Phone numbers said digit by digit revise Level 1 Module 2 — but here they are said fast, which is the new difficulty.",
      activity: "Number dictation: read twenty numbers, prices and times. Learners write them. Mark together.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — directions
  L.grid({
    sec: SEC.con, title: "Directions — six phrases cover almost everything", sub: "Learn to understand them first. Saying them comes next.",
    cols: 3, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 20, descSize: 15.5,
    items: [
      { icon: "FaArrowUp", title: "Go straight on", desc: "Continue. Do not turn.\n“Go straight for two minutes.”" },
      { icon: "FaUndo", title: "Turn left / right", desc: "“Turn left at the bank.”\n“Take the second right.”" },
      { icon: "FaExchangeAlt", title: "It is opposite …", desc: "On the other side, facing it.\n“It is opposite the school.”" },
      { icon: "FaMapMarkerAlt", title: "It is next to …", desc: "Beside it, touching it.\n“Next to the pharmacy.”" },
      { icon: "FaColumns", title: "It is between … and …", desc: "One thing on each side.\n“Between the bank and the café.”" },
      { icon: "FaWalking", title: "It is on the corner", desc: "Where two roads meet.\n“On the corner of the main road.”" },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Use the classroom. “The door is opposite the window.” “Sara is between Dawit and Hana.” Physical demonstration teaches position words far faster than translation.",
      mistakes: "“Opposite” and “in front of” are confused. Opposite means facing, across a space. In front of means before it, on the same side.",
      extra: "Add: “at the end of the road” · “on the left-hand side” · “you will see it on your right”.",
      tip: "Learners will be given directions in English by taxi drivers, hotel staff and strangers. Understanding is more urgent than producing.",
      activity: "Classroom map: draw a simple street on the board and give directions. Learners point to the destination.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — asking for help
  L.table({
    sec: SEC.con, title: "When you miss something — four phrases",
    sub: "Say something. Silence and nodding make it worse.",
    table: {
      color: C.listen, rowH: 0.52, fontSize: 17.5, headSize: 16, colW: [4.4, 3.5, 4.233],
      rows: [
        ["Say this", "When", "Why it works"],
        ["“Sorry, could you repeat that?”", "you missed all of it", "polite, and everyone understands it"],
        ["“Could you speak more slowly, please?”", "it was too fast", "asks for a change, not a repeat"],
        ["“Sorry, did you say fifteen or fifty?”", "you missed ONE thing", "precise — you get the exact answer"],
        ["“What does … mean?”", "one word blocked you", "from Module 5. Still the best question."],
      ],
    },
    note: "The third one is the best. Naming exactly what you missed gets you a one-second answer instead of the whole sentence again.",
    notes: tn({
      time: "12 minutes.",
      how: "Drill all four in chorus. Then role-play: you speak too fast on purpose and learners must stop you with one of the phrases.",
      mistakes: "Learners nod and say “yes” when they have understood nothing. That is the habit to break — it leads to missed appointments and wrong prices.",
      extra: "“Sorry?” alone, with a rising voice, is what native speakers say most often. Teach it as the shortest option.",
      tip: "Say clearly: asking somebody to repeat is not rude and is not a sign of weak English. Native speakers do it constantly.",
      activity: "Interrupt me: read a text far too fast and refuse to stop until a learner uses one of the four phrases correctly.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — strategy
  L.list({
    sec: SEC.con, title: "What to do when you miss a word", sub: "Four steps, in order. The first is the hardest.",
    color: C.listen, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "KEEP LISTENING. Do not stop to think.", d: "If you stop, you miss the next three words too. That is how a whole conversation is lost." },
      { t: "Wait — the next sentence often explains it", d: "People repeat themselves. The information usually comes twice." },
      { t: "Guess from the situation", d: "You are in a bank. The word is probably about money. Context narrows it enormously." },
      { t: "Only then, ask — and be precise", d: "“Sorry, did you say fifteen or fifty?” beats “Sorry, I do not understand.”" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Step 1 is a discipline, not knowledge. Practise it: read a text containing a nonsense word and insist learners keep listening rather than stopping.",
      mistakes: "Stopping to translate is the commonest and most damaging listening habit. Name it, demonstrate it, and practise the alternative.",
      extra: "Step 3 is powerful and underused. Situation tells you most of the meaning before a single word is spoken.",
      tip: "Compare to Module 6: in reading you may go back, in listening you may not. That is the only real difference between the two skills.",
      activity: "Nonsense word: read a short story containing an invented word three times. Learners must report the story and guess the word.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "message", ipa: "/ˈmesɪdʒ/", pos: "noun", icon: "FaEnvelope",
      meaning: "Information you send or leave for somebody.",
      example: "She left a message for you. I got your message.",
      mistake: "You LEAVE a message and you GET a message. Do not say “I heard a message” for one that was left for you.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the two verbs that go with it — leave and get — as fixed pairs. Verb collocations must be taught with the noun, never separately.",
        mistakes: "Stress on the FIRST syllable: MES-sage. And the ending is /ɪdʒ/, a soft j sound.",
        extra: "leave a message · take a message · get a message · a text message.",
        tip: "“Can I leave a message?” and “Can I take a message?” are the two phone phrases everyone needs.",
        activity: "Phone role play: one learner calls, the person is out, the other takes a message." }) },

    { word: "announcement", ipa: "/əˈnaʊnsmənt/", pos: "noun", icon: "FaBullhorn",
      meaning: "Important information said aloud to many people.",
      example: "There was an announcement about the bus. Listen to the announcement.",
      mistake: "Stress on the SECOND syllable: an-NOUNCE-ment. It is a long word — say it slowly at first.",
      notes: tn({ time: "6 minutes.",
        how: "Break it into three beats and build it up: nounce → announce → announcement. Long words are learned by building, not by repeating whole.",
        mistakes: "Learners stress the first syllable. Clap on the second beat until it sticks.",
        extra: "Announcements are heard at bus stations, airports, banks and schools — all fast, all through loudspeakers, all difficult.",
        tip: "Announcements are the hardest listening of all because the sound quality is poor. Warn learners so they do not blame their English.",
        activity: "Station announcement: read one announcement twice through cupped hands to imitate a loudspeaker." }) },

    { word: "straight", ipa: "/streɪt/", pos: "adverb / adjective", icon: "FaArrowUp",
      meaning: "Not turning. Continuing in the same direction.",
      example: "Go straight on for two minutes. The road is straight.",
      mistake: "Three consonants at the start — “str”. Do not add a vowel: /streɪt/, not “se-traight”. And the GH is silent.",
      notes: tn({ time: "6 minutes.",
        how: "This is the initial-cluster problem from Level 1. Build it: ate → rate → straight. Adding a vowel before the cluster is the transfer error.",
        mistakes: "“Se-traight” or “is-traight”. Drill the cluster slowly then at speed.",
        extra: "“Go straight on” and “Go straight ahead” mean exactly the same thing.",
        tip: "Also useful: “straight away” meaning immediately. Mention it but do not drill it now.",
        activity: "Direction chain: each learner adds one instruction, starting with “Go straight on”." }) },

    { word: "turn", ipa: "/tɜːn/", pos: "verb", icon: "FaUndo",
      meaning: "To change direction.",
      example: "Turn left at the bank. Turn right after the school.",
      mistake: "“Turn left”, not “turn to left”. No preposition before the direction.",
      notes: tn({ time: "6 minutes.",
        how: "Teach it as an imperative — the form used for directions. Demonstrate physically: everyone stands and turns as you call it.",
        mistakes: "Adding “to” is a transfer error. Drill the correct form ten times with movement.",
        extra: "turn left · turn right · turn around · take the first left · take the second right.",
        tip: "“Take the first left” is more common than “turn left at the first road”. Teach both.",
        activity: "Simon says: give direction commands and learners move. Fast, physical and effective." }) },

    { word: "opposite", ipa: "/ˈɒpəzɪt/", pos: "preposition", icon: "FaExchangeAlt",
      meaning: "On the other side, facing it.",
      example: "The bank is opposite the school. It is opposite the market.",
      mistake: "“Opposite the bank”, not “opposite TO the bank”. And opposite is NOT the same as next to.",
      notes: tn({ time: "6 minutes.",
        how: "Demonstrate with two learners facing each other across the room, then two sitting side by side. Opposite versus next to becomes obvious in five seconds.",
        mistakes: "Adding “to” after opposite. English does not use one here.",
        extra: "opposite · next to · between · behind · in front of · on the corner — six position words that cover most directions.",
        tip: "Stress the FIRST syllable: OP-posite. Three syllables, not four.",
        activity: "Where is it? Learners describe positions of objects in the room using the six position words." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Listening Language 1 of 5" }),
    title: "The imperative — the form used for directions",
    sub: "No person, no helper. Just the verb.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [4.0, 4.0, 4.133],
      rows: [
        ["Positive", "Negative", "Where you hear it"],
        ["Go straight on.", "Do not turn here.", "directions"],
        ["Turn left at the bank.", "Do not cross the road.", "directions"],
        ["Wait here, please.", "Do not wait outside.", "notices and instructions"],
        ["Press the button.", "Do not touch the screen.", "machines and signs"],
      ],
    },
    note: "The imperative is the SIMPLEST form in English — just the base verb. Add “please” to make it polite.",
    notes: tn({
      time: "10 minutes.",
      how: "Point out how easy this is: no I/you/he, no -s, no helper. After five modules of grammar, learners will be relieved.",
      mistakes: "“You go straight on” is not wrong but is not what people say. Directions drop the “you”.",
      extra: "The negative always uses “do not” or “don't”, even though the positive has no helper. That asymmetry surprises learners.",
      tip: "Imperatives appear on every sign in Module 6 — “Please wait here”, “Pay at the counter”. Connect the two modules explicitly.",
      activity: "Give me directions: learners direct you around the classroom using imperatives only. Follow them exactly, including mistakes.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Listening Language 2 of 5" }),
    title: "Position words — where things are",
    sub: "Six words. Get these right and you will never be lost.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [3.2, 4.4, 4.533],
      rows: [
        ["Word", "It means", "Example"],
        ["next to", "beside it, touching", "The bank is next to the pharmacy."],
        ["opposite", "facing it, across the road", "The school is opposite the bank."],
        ["between … and …", "one thing on each side", "It is between the bank and the café."],
        ["behind", "at the back of it", "The car park is behind the hotel."],
        ["in front of", "before it, on the same side", "There is a tree in front of the shop."],
      ],
    },
    note: "“Opposite” and “in front of” are NOT the same. Opposite = across a road, facing. In front of = before it, same side.",
    notes: tn({
      time: "12 minutes.",
      how: "Demonstrate every one physically in the classroom. Position words are learned through the body, not through translation.",
      mistakes: "The opposite / in front of confusion is universal at this level. Demonstrate the difference with two chairs and repeat it three times.",
      extra: "“Between … and …” needs both parts. “It is between the bank” is incomplete.",
      tip: "Add “on the corner of” — extremely common in real directions and not obvious from its parts.",
      activity: "Blind directions: one learner closes their eyes and a partner directs them to an object using position words only.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Listening Language 3 of 5" }),
    title: "Numbers you must not confuse",
    sub: "The difference is at the END of the word.",
    left: { h: "-TEEN  ·  long, stressed", items: ["thirTEEN  =  13", "fourTEEN  =  14", "fifTEEN  =  15", "sixTEEN  =  16", "The stress is on the END."] },
    right: { h: "-ty  ·  short, weak", items: ["THIRty  =  30", "FORty  =  40", "FIFty  =  50", "SIXty  =  60", "The stress is at the START."] },
    note: "If you are not sure, ASK: “Sorry, one five or five zero?”  Nobody minds, and it is better than paying the wrong price.",
    notes: tn({
      time: "12 minutes. Do not shorten this.",
      how: "Say one number, learners write it. Twenty rounds. Then swap: a learner says one and you write it on the board. The competition keeps attention high.",
      mistakes: "This error costs real money in markets and real appointments in offices. Treat it as a practical matter, not a pronunciation nicety.",
      extra: "The same pattern holds for 17/70, 18/80, 19/90.",
      tip: "The digit-by-digit check — “one five or five zero?” — is the practical solution learners will actually use. Drill it as a phrase.",
      activity: "Price war: call out fifteen prices mixing teens and tens. Learners write. Mark together and count errors.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Listening Language 4 of 5" }),
    title: "Telling the time by ear",
    sub: "Two systems. You will hear both.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [2.6, 4.6, 4.933],
      rows: [
        ["Time", "The common way", "The simple way"],
        ["2:15", "“quarter past two”", "“two fifteen”"],
        ["2:30", "“half past two”", "“two thirty”"],
        ["2:45", "“quarter to three”", "“two forty-five”"],
        ["2:10", "“ten past two”", "“two ten”"],
        ["2:50", "“ten to three”", "“two fifty”"],
      ],
    },
    note: "PAST = after the hour.   TO = before the NEXT hour.  “Quarter to three” is 2:45 — the hour you hear is the hour that is COMING.",
    notes: tn({
      time: "12 minutes.",
      how: "The “to” form is the trap: “quarter to three” contains the word three but means 2:45. Draw a clock and show it twice.",
      mistakes: "Hearing “three” in “quarter to three” and writing 3:00. That is a missed appointment in real life.",
      extra: "Learners may use the simple way when speaking. But they must understand the common way, because that is what they will hear.",
      tip: "Say clearly: for producing, use “two forty-five” — it is always correct and never confusing. For listening, you need both.",
      activity: "Clock dictation: say fifteen times in the common way. Learners write them in digits.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Listening Language 5 of 5" }),
    title: "Put it all together — how a good listener listens", sub: "Five things fluent listeners do automatically.",
    color: C.gram, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Knows what to listen FOR before it starts", d: "A time? A price? A place? Deciding first cuts the work in half." },
      { t: "Listens for the STRONG words only", d: "Nouns, main verbs, numbers, names. Ignores a, the, to, and." },
      { t: "Never stops to think about a missed word", d: "Stopping costs the next three words as well. Keep going." },
      { t: "Uses the situation to guess", d: "You are in a bank. The word is about money. Context does most of the work." },
      { t: "Asks precisely when it matters", d: "“Did you say fifteen or fifty?” — one second, exact answer." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Model it aloud: play or read a short piece and narrate your own listening. “I did not catch that word — but it is about the bus, so I keep going.”",
      mistakes: "All five are habits requiring practice. Explaining them once achieves nothing.",
      extra: "Apply all five to every listening exercise for the rest of the level, naming which one you are using.",
      tip: "Print these five as a card. Learners who see them before every listening task use them.",
      activity: "Think aloud: read a text and pause three times to ask what learners did when they missed something.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — teens and tens", sub: "Listen to the end of the word.", items: [
      { q: "You hear “fifTEEN birr”. Is it 15 or 50?", a: "15.", why: "The stress is at the END — fif-TEEN. The -teen ending is long and strong." },
      { q: "You hear “FIFty birr”. Is it 15 or 50?", a: "50.", why: "The stress is at the START — FIF-ty. The ending is short and weak." },
      { q: "You are not sure. What do you say?", a: "“Sorry, one five or five zero?”", why: "Digit by digit removes all doubt in one second. Nobody minds being asked." },
    ] },
    { title: "Guided examples 2 — telling the time", sub: "“To” means before the next hour.", items: [
      { q: "“Quarter past four.” What time is it?", a: "4:15.", why: "Past means after. A quarter of an hour after four." },
      { q: "“Quarter to four.” What time is it?", a: "3:45.", why: "To means before. Fifteen minutes BEFORE four — so the hour is still three." },
      { q: "“Half past six.” What time is it?", a: "6:30.", why: "Half an hour after six. Note English says “half past six”, never “half six thirty”." },
    ] },
    { title: "Guided examples 3 — directions", sub: "Position words tell you exactly where.", items: [
      { q: "“The bank is opposite the school.” Are they on the same side of the road?", a: "No — opposite means across the road, facing.", why: "Opposite always means a space between them, usually a road." },
      { q: "“It is next to the pharmacy.” How far away is it?", a: "Right beside it — they are touching.", why: "Next to means immediately beside, with nothing between." },
      { q: "“Turn left at the bank.” When do you turn?", a: "When you reach the bank.", why: "“At” marks the point where you turn — the bank is the landmark, not the destination." },
    ] },
    { title: "Guided examples 4 — missing a word", sub: "What do you do?", items: [
      { q: "You miss one word in the middle of a sentence. What do you do?", a: "Keep listening. Do not stop.", why: "If you stop to think about it, you miss the next three words too — and then the sentence is lost, not just the word." },
      { q: "You are in a bank and hear a word you do not know. What helps?", a: "The situation. It is probably about money, an account or a form.", why: "Context narrows the possibilities enormously before a single word is analysed." },
      { q: "You missed the price only. What do you say?", a: "“Sorry, how much was that?”", why: "Precise. You get a two-word answer instead of the whole sentence repeated." },
    ] },
    { title: "Guided examples 5 — joined speech", sub: "The words are joined, not missing.", items: [
      { q: "You hear “D'you wanna coffee?” What was said?", a: "“Do you want a coffee?”", why: "Do you → d'you, want a → wanna. Nothing is missing — the words are joined." },
      { q: "You hear “I'm gonna go.” What was said?", a: "“I am going to go.”", why: "Going to → gonna. This is the future from Module 4, said at natural speed." },
      { q: "Is this bad or careless English?", a: "No. It is normal, correct, educated English.", why: "Every native speaker joins words this way, including news readers and teachers. Expecting separated words is what causes the difficulty." },
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
    title: "Asking for directions",
    sub: "Bethlehem is looking for the post office in Bahir Dar.",
    turns: [
      { who: "BETHLEHEM", text: "Excuse me. Where is the post office, please?", side: "l" },
      { who: "MAN", text: "Go straight on for about two minutes, then turn left.", side: "r" },
      { who: "BETHLEHEM", text: "Sorry, could you repeat that?", side: "l" },
      { who: "MAN", text: "Straight on, then left. It is opposite the bank.", side: "r" },
      { who: "BETHLEHEM", text: "Opposite the bank. Is it far?", side: "l" },
      { who: "MAN", text: "No, five minutes on foot.", side: "r" },
    ],
    note: "Bethlehem does two clever things: she asks for a repeat, and she repeats the key words back to check.",
    notes: tn({
      time: "12 minutes.",
      how: "Books closed for the first listening, then chorus, then pairs. Draw the route on the board so the directions become visual.",
      mistakes: "Point out that Bethlehem repeating “opposite the bank” is a real strategy — it confirms understanding and gives the speaker a chance to correct her.",
      extra: "“Is it far?” and “How long does it take?” are the two follow-up questions everyone needs.",
      tip: "Learners are embarrassed to ask for a repeat. This dialogue shows a competent speaker doing it without any awkwardness.",
      activity: "Real directions: pairs give each other directions to real places in your town.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "A phone call — taking a message",
    sub: "Yonas calls the office. Chaltu answers.",
    turns: [
      { who: "CHALTU", text: "Good morning, Adama Trading. How can I help you?", side: "r" },
      { who: "YONAS", text: "Hello. Can I speak to Mr Abel, please?", side: "l" },
      { who: "CHALTU", text: "I am sorry, he is not here. Can I take a message?", side: "r" },
      { who: "YONAS", text: "Yes, please. My name is Yonas. Could you ask him to call me?", side: "l" },
      { who: "CHALTU", text: "Of course. What is your number?", side: "r" },
      { who: "YONAS", text: "Zero nine one one, two three four, five six seven.", side: "l" },
    ],
    note: "Phone English is fixed. Learn these six lines and you can handle most calls.",
    notes: tn({
      time: "13 minutes.",
      how: "Sit the pairs back to back so they cannot see each other's faces. That single change makes it a genuine phone call and much harder.",
      mistakes: "“Can I speak TO…” — the preposition is required. And the number is said digit by digit, in groups of three or four.",
      extra: "Also teach: “Who is calling, please?” · “Could you spell that?” · “I will call back later.”",
      tip: "The phone is the hardest listening situation because there are no faces and the sound is poor. Practise it back to back every time.",
      activity: "Back-to-back calls: three rounds, changing the name, the number and the message each time.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Phrases for when you do not understand",
    sub: "Six phrases. Learn them all — you will use them every day.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaRedo", title: "“Sorry, could you repeat that?”", desc: "You missed all of it. Polite and universal." },
      { icon: "FaClock", title: "“Could you speak more slowly?”", desc: "Add “please”. Asks for a change, not a repeat." },
      { icon: "FaQuestion", title: "“Sorry?”", desc: "One word, rising voice. What people say most often." },
      { icon: "FaHashtag", title: "“Did you say fifteen or fifty?”", desc: "The best one. Names exactly what you missed." },
      { icon: "FaPen", title: "“Could you write it down?”", desc: "For addresses, names and numbers. Very effective." },
      { icon: "FaCheck", title: "“So, straight on and then left?”", desc: "Repeat it back to check. Confirms you understood." },
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Drill all six in chorus, then run a role play where you speak deliberately too fast until a learner stops you correctly.",
      mistakes: "“Repeat again” is wrong — “repeat” already means again. Just “could you repeat that”.",
      extra: "Phrase 5 is the practical one for addresses and names. Native speakers use it constantly.",
      tip: "Phrase 6 is the most advanced and the most useful. Repeating back catches errors before they matter.",
      activity: "Too fast: read an announcement at high speed. Learners must use a different phrase each time to slow you down.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "YOU", text: "Excuse me. ______ is the bus station, please?", side: "l" },
      { who: "WOMAN", text: "Go straight on and take the second right.", side: "r" },
      { who: "YOU", text: "Sorry, could you ______ that?", side: "l" },
      { who: "WOMAN", text: "Straight on, then the second right. It is ______ the hospital.", side: "r" },
      { who: "YOU", text: "So, straight on and second right. Is it ______ ?", side: "l" },
      { who: "WOMAN", text: "No, about ten minutes on foot.", side: "r" },
    ],
    note: "Use these:  “Where”  ·  “repeat”  ·  “opposite”  ·  “far”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps, then three pairs perform before you reveal the answers.",
      answers: "1 Where · 2 repeat · 3 opposite · 4 far",
      mistakes: "Learners write “repeat again” in gap 2. Correct it once for the whole class.",
      tip: "The line before gap 4 shows repeating back to check. Praise any pair that does it naturally.",
      activity: "Do it again with a different destination and a different landmark.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — listen and respond", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Your partner gives directions. Draw the route.", d: "Do not speak until they finish." },
      { t: "Your partner says five prices fast. Write them.", d: "Mix teens and tens deliberately." },
      { t: "Make a phone call back to back and take a message", d: "Name, number and reason for calling." },
      { t: "Your partner speaks too fast on purpose. Stop them.", d: "Use a different phrase each time." },
    ],
    notes: tn({
      time: "11 minutes for all four rounds.",
      how: "Round 3 back to back is the most valuable and the most realistic. Do not let pairs face each other.",
      mistakes: "In round 1 learners interrupt constantly. Insist they listen to the whole thing first — that is the skill.",
      tip: "Round 4 is enjoyable and removes the embarrassment attached to asking for a repeat.",
      activity: "Message relay: a message is passed by phone through four learners. Compare the first and last versions.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — give directions", sub: "To a real place. Your partner must draw the route.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "From this classroom to the nearest shop", d: "Use: go straight · turn left · turn right · it is opposite …" },
      { t: "From here to your home", d: "Three or four steps only. Keep it simple." },
      { t: "From the bus station to the market", d: "Include one landmark: a bank, a school, a church." },
      { t: "From here to somewhere secret — your partner guesses", d: "Give the directions. They name the place." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Task 4 is a game and produces the most language. Do it last so the energy peaks at the end.",
      mistakes: "“Turn to left” — no preposition. And “opposite to the bank” — also no preposition. Correct both on the spot.",
      extra: "Encourage landmarks. Directions with landmarks are far easier to follow than directions with distances.",
      tip: "Have partners draw the route rather than repeat it. Drawing proves comprehension in a way that repeating does not.",
      activity: "Route drawing: collect the drawings and compare them with the intended routes.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the phone role play", sub: "Back to back. No faces. Three calls.",
    color: C.speak, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Call a shop and ask if they have something", d: "Ask the price. Ask the opening hours. Write both down." },
      { t: "Call an office. The person is out. Leave a message.", d: "Your name, your number, and why you called." },
      { t: "Answer a call. The person is out. Take a message.", d: "Write the name, the number and the reason. Read it back to check." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Back to back is essential — it removes the face, which is where learners get half their information. This is what makes phone English hard.",
      mistakes: "Numbers are the failure point. Insist that every number is read back to confirm.",
      extra: "Give each pair a card with the name, number and message so the content is fixed and only the language is being practised.",
      tip: "Reading a number back is a professional habit, not a sign of weakness. Say that explicitly to working adults.",
      activity: "Accuracy check: compare the written message with the card. Count how many were exactly right.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the joins",
    sub: "Say it joined. Then you will hear it joined.",
    left: { h: "Say it slowly", items: ["What are you doing?", "Do you want a coffee?", "I am going to go.", "Did you eat?", "I have got to go."] },
    right: { h: "Now say it fast", items: ["“Whatcha doing?”", "“D'you wanna coffee?”", "“I'm gonna go.”", "“Dijeat?”", "“I've gotta go.”"] },
    note: "You do not have to SPEAK like this. But if you can say it, you will recognise it — and that is what matters.",
    notes: tn({
      time: "11 minutes.",
      how: "Producing joined speech is the fastest way to learn to hear it. The mouth teaches the ear. Insist everyone tries, even if it feels strange.",
      mistakes: "Learners resist, thinking it is bad English. Repeat that this is how educated native speakers speak all the time.",
      extra: "More joins: “kind of” → kinda · “lots of” → lotsa · “let me” → lemme.",
      tip: "Make it fun. Exaggerate. The laughter removes the embarrassment and the sounds stick.",
      activity: "Fast and slow: give ten sentences. Learners say each one slowly then fast.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — dictation both ways", sub: "In pairs. One speaks, one writes. Then swap.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Five prices, mixing teens and tens", d: "15, 50, 14, 40, 16. Say them naturally, not slowly." },
      { t: "Five times, using past and to", d: "Half past two · quarter to nine · ten past six." },
      { t: "Two phone numbers", d: "Digit by digit, in groups. Read them back to check." },
      { t: "One set of directions with three steps", d: "The listener draws it rather than writing it." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Insist the speaker uses natural speed. Slow, careful speech defeats the purpose of the whole module.",
      mistakes: "Task 1 will produce errors. That is the point — count them and repeat until they fall.",
      extra: "Have pairs record their error count and compare it after the homework week.",
      tip: "Task 3 practises reading back, which is the professional habit that prevents costly mistakes.",
      activity: "Error count: total the class errors on task 1 and write the number on the board. Repeat at the end of the module.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Give directions from your home to the nearest market", d: "At least four steps. Use two position words." },
      { t: "Say five prices, mixing teens and tens", d: "Clearly enough that a listener could write them." },
      { t: "Say three times using “past” and “to”", d: "Half past · quarter to · ten past." },
      { t: "Leave a phone message", d: "Your name, your number, and why you called." },
      { t: "Say two phrases for when you do not understand", d: "Any two of the six from slide 28." },
    ],
    notes: tn({
      time: "14 minutes including listening back.",
      how: "Record on a phone or perform live to a partner. Step 4 should be done facing away from the listener.",
      mistakes: "Step 2 is where the teen/ty distinction is assessed. Listen carefully for the stress placement.",
      answers: "SUCCESS CRITERIA: four clear direction steps with two position words · five prices distinguishable as teens or tens · three times correctly using past and to · a complete phone message with a readable number · two correct repair phrases.",
      tip: "Keep every recording. Comparing the first and last recordings across the level is the strongest motivator learners have.",
      activity: "Keep every recording for the end-of-level comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — directions to the hospital", sub: "Listen twice. Draw the route, do not write words.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads at natural speed", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.34,
      text: "“Go out of the school and turn right.\nGo straight on for about five minutes,\npast the market on your left.\nThen take the second left, after the bank.\nThe hospital is at the end of that road,\nopposite a small church.\nIt takes about ten minutes on foot.”" },
    side: { label: "Your task", color: C.listen, size: 16.5, items: [
      "Draw the route on paper.",
      "Which way do you turn first?",
      "What is on your left as you walk?",
      "What is opposite the hospital?",
      "How long does it take?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Read at natural speed, not slowly. Twice only. Drawing rather than writing forces real comprehension.",
      mistakes: "“The second left” is the hard part — learners hear “left” and turn at the first one. Say it clearly and check.",
      extra: "Add a third reading for weaker groups, but never read slowly — read again at the same speed.",
      answers: "Right · the market · a small church · about ten minutes on foot.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check the route against your drawing.",
    size: 17,
    items: [
      { q: "1 — the first turn", a: "Right, coming out of the school.", why: "The first instruction. Learners who missed it usually stopped to think about “out of”." },
      { q: "2 — what is on your left?", a: "The market.", why: "“Past the market on your left” — “past” means you walk by it without turning." },
      { q: "3 — which left do you take?", a: "The SECOND left, after the bank.", why: "The commonest error. Learners hear “left” and stop listening to the word before it." },
      { q: "4 — what is opposite the hospital?", a: "A small church.", why: "Opposite means facing it, across the road — from slide 17." },
      { q: "5 — how long?", a: "About ten minutes on foot.", why: "“On foot” means walking. “About” means approximately — a useful hedge word." },
    ],
    notes: keyNotes("Question 3 is the diagnostic. Missing the word “second” means the learner was listening word by word instead of listening for the whole instruction."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — an announcement", sub: "Fast, and through a loudspeaker. Listen three times.",
    panelW: 7.4,
    panel: { label: "Audio script — read fast, through cupped hands", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.34,
      text: "“Good afternoon. Attention, please.\nThe bus to Hawassa will leave at fifteen\nminutes past three, from platform four,\nnot platform two.\nPassengers for Hawassa, please go to\nplatform four. The bus to Adama is delayed\nby thirty minutes. Thank you.”" },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. What time does the Hawassa bus leave?",
      "2. Which platform?",
      "3. Which platform was it before?",
      "4. What happened to the Adama bus?",
      "5. How long is the delay?",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "Read fast and through cupped hands to imitate a loudspeaker. This is deliberately the hardest listening in the module and learners should be told so.",
      mistakes: "The platform change is the trap: they hear “platform two” at the end of the sentence and write it. Listening for “not” is the skill.",
      extra: "“Delayed” is new. Teach it before the third reading if the class is struggling — it is the key word in the last sentence.",
      answers: "1 3:15 · 2 Platform four · 3 Platform two · 4 It is delayed. · 5 Thirty minutes.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Announcements are the hardest listening there is.",
    size: 17,
    items: [
      { q: "1 — the departure time", a: "3:15 — “fifteen minutes past three”.", why: "Past means after. Note the announcement says “fifteen minutes past”, not “quarter past” — both are used." },
      { q: "2 — the platform", a: "Platform four.", why: "Said twice, which is normal in announcements. Important information is always repeated." },
      { q: "3 — the old platform", a: "Platform two.", why: "The word “not” carries the whole meaning. Missing one small word reverses the instruction." },
      { q: "4 — the Adama bus", a: "It is delayed — it will come later than planned.", why: "“Delayed” is the key word of the last sentence and is heard in every station." },
      { q: "5 — the delay", a: "Thirty minutes, not thirteen.", why: "THIR-ty, stress at the start. If you heard “thirteen” you were listening to the beginning of the word only." },
    ],
    notes: keyNotes("Questions 3 and 5 are the diagnostic pair: one tests catching a small but reversing word, the other tests the teen/ty distinction under real conditions."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "Where to practise listening for free", sub: "Ten minutes a day beats two hours once a week.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaBullhorn", title: "Announcements around you", desc: "Bus stations, the airport, banks, supermarkets. Free, real, and difficult — which is exactly what you need." },
      { icon: "FaMusic", title: "Songs with the words in front of you", desc: "Listen once without the words, then again with them. You will hear the joins clearly." },
      { icon: "FaFilm", title: "Films with English subtitles", desc: "English subtitles, not Amharic. Reading and listening together builds both at once." },
      { icon: "FaPodcast", title: "Radio and podcasts for learners", desc: "Ten minutes a day. Do not stop when you miss something — that is the practice." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Insist on English subtitles rather than translated ones. Translated subtitles let the brain switch off the listening entirely.",
      mistakes: "Learners choose material that is far too hard and give up. Recommend material for learners for the first month.",
      tip: "Songs are the best value: repetition is built in, the words are available, and learners return to them voluntarily.",
      activity: "Class song: choose one English song, listen twice, then hand out the words with ten gaps.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — written directions", sub: "Read, then draw the route.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 17, lsm: 1.32,
      text: "HOW TO FIND OUR OFFICE\n\nCome out of Bole airport and take a taxi to Meskel Square. From the square, go straight on along the main road for about ten minutes.\n\nYou will pass a big hotel on your right. Take the first left after the hotel.\n\nOur office is the third building on the left, opposite a pharmacy. There is a blue sign on the door.\n\nIf you cannot find us, call 0911 234 567 and we will come and meet you." },
    side: { label: "Your task", color: C.read, size: 16, items: [
      "Draw the route from Meskel Square.",
      "What do you pass on your right?",
      "Which left do you take?",
      "What is opposite the office?",
      "What should you do if you are lost?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Compare with the listening version. The same information in writing is far easier because you can go back — say so explicitly.",
      mistakes: "“The third building on the left” requires counting, which is a common trap in written directions.",
      extra: "This is a real text type. Businesses send directions like this by message every day.",
      tip: "Point out that written directions repeat the landmark — hotel, pharmacy, blue sign — because landmarks are what people actually navigate by.",
      activity: "Write your own: learners write directions from a known landmark to their home in five sentences.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Read again if you need to. In listening you could not.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "Where do you take a taxi from?",
      "How long do you walk along the main road?",
      "What is on your right before you turn?",
      "How many buildings do you pass on the left?",
      "What is on the door?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Question 4 needs care: the office is the third building, so you pass two before it. Accept either answer if the learner explains.",
      mistakes: "Learners answer question 2 with “ten minutes” without “about”. Accept it, but point out that “about” means approximately.",
      tip: "Ask afterwards which was easier — the listening or the reading — and why. The answer teaches the module's main point.",
      answers: "1 From Bole airport. · 2 About ten minutes. · 3 A big hotel. · 4 Two — the office is the third. · 5 A blue sign.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Notice which parts you would have missed by ear.",
    size: 17,
    items: [
      { q: "1 — where do you take a taxi?", a: "From Bole airport.", why: "The first sentence. In a listening you would need to catch it immediately or lose it." },
      { q: "2 — how long along the main road?", a: "About ten minutes.", why: "“About” means approximately. Directions are rarely exact and “about” signals that." },
      { q: "3 — on your right", a: "A big hotel.", why: "The landmark before the turn. Landmarks are how people actually navigate." },
      { q: "4 — how many buildings?", a: "Two — the office is the third.", why: "This requires counting, which is hard by ear and easy on paper. That is the whole difference." },
      { q: "5 — on the door", a: "A blue sign.", why: "The final confirmation. Good directions always end with something you can see." },
    ],
    notes: keyNotes("Ask the class which of these five they would have caught if the text had been spoken once at natural speed. Question 4 is the one almost nobody would get."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — phone messages", sub: "Four messages taken by an office assistant.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 16.5, lsm: 1.3,
      text: "1.  Mr Yonas called at 10:15. Please call him\n     back on 0911 234 567. It is about Friday.\n\n2.  Hana from the bank rang. She will call again\n     at half past two. No message.\n\n3.  Chaltu called about the meeting. It is now at\n     quarter to four, not three o'clock.\n\n4.  A man called at 9:30 but did not leave his\n     name. He said he would call back tomorrow." },
    side: { label: "Your task", color: C.read, size: 16, items: [
      "Who must you call back?",
      "Who will call you?",
      "What time is the meeting now?",
      "What time was it before?",
      "Which message is least useful? Why?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "This is a real work text type. Ask what a good phone message must contain: who, when, why and a number.",
      mistakes: "Message 3 has two times and learners mix them. “Now at” and “not” mark the new and the old.",
      extra: "Message 4 is the teaching point: no name, so nothing can be done. A message without a name is almost useless.",
      tip: "Connect to slide 32 — this is exactly what learners produced in the phone role play.",
      activity: "Improve message 4: learners rewrite it saying what the assistant should have asked.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "What makes a phone message useful?",
    size: 17,
    items: [
      { q: "1 — who must you call back?", a: "Mr Yonas, on 0911 234 567.", why: "Message 1 gives a name, a number and a reason. That is a complete message." },
      { q: "2 — who will call you?", a: "Hana from the bank, at half past two.", why: "She is calling you, so no action is needed. The distinction matters." },
      { q: "3 and 4 — the meeting time", a: "Now quarter to four (3:45). Before, three o'clock.", why: "“Now at” marks the new time and “not” marks the old — the same pattern as the platform announcement." },
      { q: "5 — the least useful message", a: "Message 4 — no name, so you cannot call back.", why: "The assistant should have asked “Who is calling, please?” A message without a name cannot be acted on." },
      { q: "Vocabulary check", a: "message · announcement · straight · turn · opposite", why: "All five appeared in the listening scripts, which is where you will meet them again." },
    ],
    notes: keyNotes("Item 5 is the practical lesson. Ask learners what one question would have fixed message 4 — the answer is “Who is calling, please?”"),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — write the numbers", sub: "Your teacher reads. You write.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write each one in digits. Listen carefully to the end of the word.",
    items: [
      "1.  A price:  fifteen birr  /  fifty birr",
      "2.  A time:  quarter past six  /  quarter to six",
      "3.  A number:  oh nine one one, three four five, six seven eight",
      "4.  A price:  two hundred and thirty birr",
      "5.  A time:  half past eight in the morning",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Read each one twice at natural speed. Choose one of the two options in items 1 and 2 without telling learners which.",
      answers: "1 15 or 50 — as read · 2 6:15 or 5:45 — as read · 3 0911 345 678 · 4 230 birr · 5 8:30 a.m.",
      mistakes: "Item 2: “quarter to six” is 5:45, not 6:45. The hour you hear is the hour that is coming.",
      tip: "Do this again at the end of the week and compare the error counts. The improvement is usually large and visible.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write a phone message", sub: "Four things every message needs.",
    panelW: 7.6,
    panel: { label: "Write a message for each call", color: C.write, tint: C.writeTint, size: 17.5, lsm: 1.42,
      text: "1.  Dawit called at 11:00 about the delivery.\n     Call him on 0911 111 222.\n\n2.  Sara from Hawassa rang. She will call\n     again tomorrow morning.\n\n3.  The meeting moved from 2:00 to 3:30.\n\n4.  Somebody called about a job. They will\n     send an email." },
    side: { label: "Every message needs", color: C.write, size: 16.5, items: [
      "WHO called — the full name.",
      "WHEN they called — the time.",
      "WHY they called — one line.",
      "WHAT to do — call back, or nothing.",
      "A NUMBER if a call back is needed.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "The five-point checklist is the teaching. Have learners check their own messages against it before handing them in.",
      mistakes: "Learners omit the time, which matters more than they expect — a message from three days ago is treated differently from one from ten minutes ago.",
      answers: "MODEL for 1: “Dawit called at 11:00 about the delivery. Please call him back on 0911 111 222.”",
      tip: "Message 4 is deliberately incomplete — no name. Ask what is missing and what question would have got it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write directions", sub: "From here to somewhere real.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write five sentences. Somebody who does not know the place must be able to follow them.",
    items: [
      "1.  Start with where you begin.  “Come out of the school and …”",
      "2.  Use “go straight on” at least once.",
      "3.  Use “turn left” or “turn right” at least once.",
      "4.  Name at least one landmark: a bank, a hotel, a school.",
      "5.  End with a position word: opposite · next to · between.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Collect the directions, redistribute them, and have learners draw somebody else's route. If the drawing is wrong, the directions were unclear.",
      answers: "MODEL: “Come out of the school and turn right. Go straight on for five minutes. You will pass a bank on your left. Take the second right after the bank. The market is at the end of the road, opposite a small church.”",
      mistakes: "“Turn to left” and “opposite to the bank” — neither takes a preposition. Correct these on every paper.",
      tip: "Swapping and drawing is the best possible feedback. It shows immediately whose directions worked.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answer and why", sub: "Five sentences. Clear enough to follow.",
    size: 17,
    items: [
      { q: "Sentence 1 — the start", a: "Come out of the school and turn right.", why: "Directions must start from a place both people know. Without a starting point the rest is useless." },
      { q: "Sentence 2 — go straight", a: "Go straight on for five minutes.", why: "Time is better than distance. Nobody knows what two hundred metres feels like; everybody knows five minutes." },
      { q: "Sentence 3 — the landmark", a: "You will pass a bank on your left.", why: "Landmarks tell the listener they are on the right road. Include one every few steps." },
      { q: "Sentence 4 — the turn", a: "Take the second right after the bank.", why: "“Second” and “after the bank” together make the turn unmistakable." },
      { q: "Sentence 5 — the destination", a: "The market is at the end of the road, opposite a small church.", why: "End with something visible. A position word plus a landmark confirms arrival." },
    ],
    notes: keyNotes("Read the model and then two learners' versions. Ask which the class could follow most easily and why — usually it is the one with the most landmarks."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your listening checklist", sub: "Five habits. Use them every time you listen.",
    check: true, color: C.write, size: 20,
    items: [
      { t: "Decide what you are listening FOR before it starts", d: "A time? A price? A place? It halves the work." },
      { t: "Listen for the STRONG words only", d: "Nouns, verbs, numbers, names. Ignore a, the, to, and." },
      { t: "Never stop to think about a missed word", d: "Stopping costs the next three words too." },
      { t: "Use the situation to guess", d: "You are in a bank — the word is about money." },
      { t: "Ask precisely when it matters", d: "“Did you say fifteen or fifty?” — one second, exact answer." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the five points and connect each one back to the exercise where it was practised.",
      tip: "Print these as a card. The listening card and the reading card from Module 6 fit on two sides of one page.",
      activity: "Habit check: after every listening for the rest of the level, ask which habit learners used.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. “Quarter to three” means …", opts: "a) 3:15     b) 2:45     c) 3:45" },
      { q: "2. Which is 15?", opts: "a) FIF-ty     b) fif-TEEN     c) both" },
      { q: "3. “The bank is opposite the school.” They are …", opts: "a) beside each other     b) facing each other     c) the same building" },
      { q: "4. Which words are said STRONGLY in English?", opts: "a) a, the, to, and     b) nouns, verbs, numbers     c) all words equally" },
      { q: "5. You miss one word. What should you do first?", opts: "a) stop and think     b) keep listening     c) ask immediately" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 b",
      tip: "Question 5 is the module's central idea. Anyone answering a) needs slide 10 again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Directions and position words.",
    color: C.green, instruction: "Write the missing word.", size: 18,
    items: [
      "1.  Go ______ on for two minutes.  (do not turn)",
      "2.  ______ left at the bank.",
      "3.  The post office is ______ the school.  (across the road, facing)",
      "4.  The café is ______ to the pharmacy.  (beside it)",
      "5.  It is ______ the bank and the hotel.  (one on each side)",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "The hint in brackets makes this accessible to everyone. Take the answers orally.",
      answers: "1 straight · 2 Turn · 3 opposite · 4 next · 5 between",
      mistakes: "Item 5 needs “and” later in the sentence to be complete. Point that out.",
      tip: "Item 2 begins the sentence, so it needs a capital letter. Mention it once.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Times, phrases and position words.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the SPOKEN TIME to the DIGITS", opts: "1. half past four     2. quarter to seven     3. ten past nine     4. quarter past two" },
      { q: "a) 6:45        b) 4:30", opts: "c) 2:15        d) 9:10" },
      { q: "Part 2 — match the PROBLEM to the PHRASE", opts: "1. missed everything     2. missed one number     3. too fast          a) “Did you say fifteen or fifty?”     b) “Could you repeat that?”     c) “Could you speak more slowly?”" },
      { q: "Part 3 — match the POSITION WORD to its MEANING", opts: "1. opposite     2. next to     3. between     4. behind          a) beside     b) at the back     c) facing     d) one on each side" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–b, 2–a, 3–d, 4–c.  ·  Part 2: 1–b, 2–a, 3–c.  ·  Part 3: 1–c, 2–a, 3–d, 4–b.",
      tip: "Part 2 is the practical one. If learners get all three, they can repair any conversation.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — number dictation", sub: "Your teacher reads. Write the digits.",
    color: C.green, instruction: "Write each answer in numbers only.", size: 18,
    items: [
      "1.  A price in birr",
      "2.  A time",
      "3.  A phone number",
      "4.  A second price",
      "5.  A second time",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Read these twice each at natural speed: 1) forty-five birr · 2) quarter to eight · 3) 0911 456 789 · 4) fifteen birr · 5) half past eleven.",
      answers: "1 45 birr · 2 7:45 · 3 0911 456 789 · 4 15 birr · 5 11:30",
      mistakes: "Items 1 and 4 test the teen/ty distinction directly. Count the class errors and write the number on the board.",
      tip: "Repeat this exact exercise at the end of the module and compare error counts. The improvement is measurable and motivating.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — what do you say?", sub: "Choose the best repair phrase.",
    color: C.green, instruction: "Write the phrase you would use in each situation.", size: 17,
    items: [
      "1.  Somebody gave you directions but you understood nothing.",
      "2.  You heard the price but you are not sure if it was 15 or 50.",
      "3.  The person is speaking far too fast for you.",
      "4.  They said an address and you could not catch the name of the road.",
      "5.  You think you understood, but you want to be sure.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Take answers orally and accept any reasonable phrase. Then point out which is most precise for each situation.",
      answers: "1 “Sorry, could you repeat that?” · 2 “Sorry, one five or five zero?” · 3 “Could you speak more slowly, please?” · 4 “Could you write it down?” · 5 “So, straight on and then left?” — repeat it back.",
      mistakes: "Learners use the general repeat phrase for everything. Item 2 and item 4 show that precise questions get faster, better answers.",
      tip: "Item 5 is the most advanced. Repeating back catches errors before they cost anything.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  “Quarter to nine” means 9:15.",
      "2.  In English, all words are said with the same strength.",
      "3.  “Opposite” and “next to” mean the same thing.",
      "4.  If you miss a word, you should stop and think about it.",
      "5.  Asking somebody to repeat is rude.",
      "6.  Phone numbers in English are said digit by digit.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — it means 8:45 · 2 F — meaning words are strong, grammar words are weak · 3 F — opposite means facing across a space · 4 F — keep listening; stopping costs more · 5 F — it is completely normal and polite · 6 T",
      tip: "Item 5 matters socially. Learners avoid asking out of embarrassment, and that single hesitation causes most of their communication failures.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own listening.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What is hardest for you about listening to English?",
      "2.  Where could you hear English near your home?",
      "3.  What do you say now when you do not understand?",
      "4.  Give directions from your home to the nearest shop, in two sentences.",
      "5.  Which of the five listening habits is hardest for you?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Question 3 is the same as warm-up task 3. Compare the answers — they should have changed from “nothing” to a real phrase.",
      answers: "No fixed answers. Question 3 should now name one of the six repair phrases.",
      mistakes: "Question 5 needs honest self-assessment. Use the class results to plan revision.",
      tip: "Read three answers to question 3 aloud beside the warm-up answers. That comparison is the evidence the module worked.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Give directions to a real place. Your partner draws the route.",
      "2.  Say five prices mixing teens and tens. Your partner writes them.",
      "3.  Make a phone call back to back and leave a message.",
      "4.  Speak too fast on purpose. Your partner must stop you politely.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Task 3 must be back to back. Removing the face is what makes it a real phone call.",
      answers: "SUCCESS CRITERIA: 1 a correct drawing · 2 five prices written correctly · 3 a complete message with name, number and reason · 4 a correct repair phrase used naturally.",
      tip: "Task 4 is enjoyable and removes the embarrassment of asking for a repeat, which is the point.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "Everything in the module together.",
    color: C.green, instruction: "Work in pairs. Take your time.", size: 17,
    items: [
      { q: "1. Write out these joined forms in full: whatcha · wanna · gonna · dijeat · gotta.", opts: "Five full sentences." },
      { q: "2. Write six times in words using “past” and “to”.", opts: "Include at least two using “to”." },
      { q: "3. Write directions from the school to the market in five sentences.", opts: "Two landmarks, two position words." },
      { q: "4. Write a complete phone message with all five required parts.", opts: "Who · when · why · what to do · number." },
      { q: "5. Write the six repair phrases from memory.", opts: "No looking back at slide 28." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "This is the bridge to the quiz. Expect it to be genuinely hard and let learners work in pairs.",
      answers: "1 What are you doing? · Do you want …? · I am going to … · Did you eat? · I have got to … · 2 any six, at least two with “to” · 3 must include two landmarks and two position words · 4 must contain all five parts · 5 the six phrases from slide 28.",
      tip: "Question 5 tests recall of the phrases that matter most in real life. Anyone who can write four of the six is well prepared.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why is listening harder than reading?", opts: "Think about speed and going back." },
      { q: "2. Why is the phone harder than face to face?", opts: "What do you lose when you cannot see somebody?" },
      { q: "3. Your friend says “I understand nothing when people speak fast.” What advice would you give?", opts: "Be specific and practical." },
      { q: "4. Why is it better to ask “fifteen or fifty?” than “could you repeat that?”", opts: "Think about what answer each question gets." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Question 1 draws out the module's central point: in reading you control the speed, in listening you do not.",
      answers: "1 You cannot control the speed and you cannot go back, so a missed word is gone. 2 No face, no gestures, no lip movement, and poor sound quality. 3 Listen for the strong words only, decide what you want before it starts, never stop at a missed word, and practise ten minutes a day. 4 The precise question gets a two-word answer; the general one gets the whole sentence again, which you may miss again.",
      tip: "Question 4 is the most practical thing in the module. Precision in asking saves the whole conversation.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Numbers and times", items: [
      { q: "1. “Quarter to five” is …", opts: "a) 5:15     b) 4:45     c) 5:45" },
      { q: "2. “Half past nine” is …", opts: "a) 9:30     b) 8:30     c) 9:15" },
      { q: "3. Which one is 40?", opts: "a) four-TEEN     b) FOR-ty     c) both" },
      { q: "4. How are phone numbers said in English?", opts: "One sentence." },
    ] },
    { part: "Part 2 · Directions", items: [
      { q: "5. Complete: “Go ______ on for two minutes.”", opts: "a) straight     b) direct     c) forward" },
      { q: "6. “Opposite the bank” means …", opts: "a) beside it     b) facing it across the road     c) behind it" },
      { q: "7. Correct this: “Turn to left at the school.”", opts: "Write the correct sentence." },
      { q: "8. Name two position words other than opposite.", opts: "Two words." },
    ] },
    { part: "Part 3 · Real speech", items: [
      { q: "9. Which words are said STRONGLY in English?", opts: "a) a, the, to     b) nouns, verbs, numbers     c) all equally" },
      { q: "10. Write “I'm gonna go” in full.", opts: "Full sentence." },
      { q: "11. Write “D'you wanna coffee?” in full.", opts: "Full sentence." },
      { q: "12. Is joined speech bad English?", opts: "Yes or no, and why." },
    ] },
    { part: "Part 4 · When you miss something", items: [
      { q: "13. You miss ONE word. What should you do FIRST?", opts: "a) stop and think     b) keep listening     c) ask at once" },
      { q: "14. You are not sure if it was 15 or 50. What do you say?", opts: "Write the exact words." },
      { q: "15. Write two other repair phrases.", opts: "Two phrases." },
      { q: "16. Why is a precise question better than a general one?", opts: "One sentence." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write a phone message: Dawit called at 11:00, call back on 0911 111 222.", opts: "One or two sentences." },
      { q: "18. Write directions from here to the nearest shop in three sentences.", opts: "Use one position word." },
      { q: "19. Write three times in words, using “past” and “to”.", opts: "At least one with “to”." },
      { q: "20. SPEAKING: give directions to a real place in four steps.", opts: "Your partner draws the route." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 7 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes(),
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — quarter to five", a: "b) 4:45", why: "“To” means before the next hour. The hour you hear is the one that is coming, not the one you are in." },
      { q: "Q2 — half past nine", a: "a) 9:30", why: "“Past” means after. English says “half past nine”, never “half nine thirty”." },
      { q: "Q3 — which is 40?", a: "b) FOR-ty", why: "Stress at the START and a short weak ending. -TEEN is long and stressed at the end." },
      { q: "Q4 — phone numbers", a: "Digit by digit, usually in groups of three or four. 0 is “oh” or “zero”.", why: "Never as whole numbers. “Nine hundred and eleven” is not how a phone number is said." } ],
    [ { q: "Q5 — go ___ on", a: "a) straight", why: "“Go straight on” or “go straight ahead”. Both are correct and both are common." },
      { q: "Q6 — opposite", a: "b) facing it across the road", why: "Opposite means there is a space between, usually a road. Next to means touching." },
      { q: "Q7 — correct the sentence", a: "Turn left at the school.", why: "No preposition before the direction. “Turn to left” is a direct translation and is wrong." },
      { q: "Q8 — two position words", a: "Any two of: next to · between · behind · in front of · on the corner.", why: "Six position words cover almost every direction you will ever be given." } ],
    [ { q: "Q9 — strong words", a: "b) nouns, verbs, numbers", why: "Meaning words are strong; grammar words are weak and fast. Listen only for the strong ones." },
      { q: "Q10 — “I'm gonna go”", a: "I am going to go.", why: "Going to → gonna. This is the future from Module 4 at natural speed." },
      { q: "Q11 — “D'you wanna coffee?”", a: "Do you want a coffee?", why: "Do you → d'you, want a → wanna. Nothing is missing — the words are joined." },
      { q: "Q12 — is it bad English?", a: "No — it is normal, correct, educated English.", why: "Every native speaker joins words, including news readers and professors. Expecting separated words is what causes the difficulty." } ],
    [ { q: "Q13 — you miss one word", a: "b) keep listening", why: "Stopping to think costs the next three words as well. That is how a whole conversation is lost over one word." },
      { q: "Q14 — 15 or 50?", a: "“Sorry, one five or five zero?”", why: "Digit by digit removes all doubt in one second. Nobody minds being asked." },
      { q: "Q15 — two more phrases", a: "Any two of: “Sorry?” · “Could you repeat that?” · “Could you speak more slowly?” · “Could you write it down?”", why: "Six phrases repair almost any conversation. Learn all six — see slide 28." },
      { q: "Q16 — why precise?", a: "You get a two-word answer instead of the whole sentence again.", why: "And you may miss the whole sentence a second time. Precision saves the conversation." } ],
    [ { q: "Q17 — the phone message", a: "“Dawit called at 11:00. Please call him back on 0911 111 222.”", why: "Who, when, what to do, and the number. Four of the five required parts, and the reason may be added." },
      { q: "Q18 — the directions", a: "e.g. “Come out of the school and turn left. Go straight on for two minutes. The shop is opposite the bank.”", why: "Marked on clarity: a starting point, at least one turn, and a position word at the end." },
      { q: "Q19 — three times", a: "e.g. half past six · quarter to nine · ten past four.", why: "At least one must use “to”, because that is the form learners avoid and mishear." },
      { q: "Q20 — speaking task", a: "Four clear steps that a partner can draw correctly", why: "Marked on whether the drawing matches. If the route is wrong, the directions were unclear — however good the grammar." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q1, Q3 and Q13 are the diagnostic block: the “to” form of times, the teen/ty distinction, and the habit of not stopping at a missed word. Errors here need slides 18, 19 and 10 again."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Listening only.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Listen to one English song twice", d: "Once without the words, once with them. Write three joined forms you heard." },
      { t: "Practise teens and tens with a partner", d: "Twenty numbers each. Count your errors." },
      { t: "Watch ten minutes with English subtitles", d: "English, not Amharic. Write five sentences you caught." },
      { t: "Listen for one English announcement", d: "A bus station, a bank, a shop. Write what it said." },
      { t: "Say the six repair phrases aloud five times", d: "Until you can say them without thinking." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's task is the most enjoyable and the most effective. Songs have built-in repetition and learners return to them voluntarily.",
      tip: "Friday's task matters most: the repair phrases must be automatic, because you have no time to think when somebody is speaking to you.",
      activity: "Choose one song as a class so everyone can compare what they heard.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Written directions from your home to a place near you", d: "Five sentences. Two landmarks, two position words." },
      { t: "One phone message with all five parts", d: "Who · when · why · what to do · number." },
      { t: "Record your two-minute speaking challenge", d: "Directions · five prices · three times · a phone message · two repair phrases." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Redistribute task 1 in the next lesson and have learners draw each other's routes. Whose directions work is immediately visible.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording by voice. Comment specifically on the prices and times — that is where the measurable improvement is.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaMapSigns", title: "Directions — 8 marks", desc: "Five sentences (2) · a clear starting point (1) · two landmarks (2) · two position words (2) · a partner can follow it (1)." },
      { icon: "FaEnvelope", title: "Phone message — 7 marks", desc: "Who (2) · when (1) · why (2) · what to do (1) · the number written correctly (1)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five parts (3) · prices distinguishable (2) · times correct with past and to (2) · complete phone message (2) · two repair phrases (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework. Note that the directions are marked on whether a partner can follow them, not on perfect grammar.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Do not deduct marks for accent in the recording. Assess whether the information is clear, not whether it sounds native.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaVolumeUp", title: "Why speech sounds fast", desc: "The words are joined, not missing. Wanna · gonna · whatcha." },
      { icon: "FaBullseye", title: "Listening for strong words", desc: "Nouns, verbs, numbers, names. Ignore a, the, to, and." },
      { icon: "FaHashtag", title: "Numbers and times", desc: "Fifteen or fifty · quarter to versus quarter past · digit by digit." },
      { icon: "FaMapMarkerAlt", title: "Directions", desc: "Straight on · turn left · opposite · next to · between." },
      { icon: "FaPhone", title: "Phone calls and messages", desc: "Who · when · why · what to do · the number." },
      { icon: "FaRedo", title: "Six repair phrases", desc: "For when you miss something. Precise beats general." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 3 and ask warm-up task 3 again: what do you say when you do not understand? The answers should now be real phrases rather than silence.",
      tip: "Also repeat the Exercise D dictation and compare the error count. Measurable improvement in one week is powerful evidence.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The listening toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.listenTint, line: "BEE2E2", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaRedo", title: "Six repair phrases", desc: "“Sorry?”  ·  “Could you repeat that?”\n“Could you speak more slowly?”\n“Did you say fifteen or fifty?”\n“Could you write it down?”\n“So, straight on, then left?”" },
      { icon: "FaHashtag", title: "Numbers and times", desc: "-TEEN  =  long, stress at the END  =  15\n-ty  =  short, stress at the START  =  50\n\nPAST  =  after the hour\nTO  =  before the NEXT hour" },
      { icon: "FaMapMarkerAlt", title: "Directions", desc: "Go straight on  ·  Turn left / right\nTake the second right\n\nopposite  =  facing, across\nnext to  =  beside  ·  between … and …" },
      { icon: "FaCheck", title: "Five listening habits", desc: "1 Know what you are listening for\n2 Listen for the strong words only\n3 Never stop at a missed word\n4 Use the situation to guess\n5 Ask precisely when it matters" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. Better still, print the first box on a card small enough to keep in a wallet.",
      tip: "The six repair phrases are the highest-value thing in the module. A learner who has them ready never gets stuck in a conversation.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You now know what to listen FOR — and what to say when you miss it.",
    sub: "Real English will still sound fast. But it will no longer sound impossible,\nbecause you know it is joined, not missing, and you have six phrases that repair any conversation.",
    chips: ["NEXT — Module 8", "Writing Everyday Texts", "Messages, notes, forms and your first paragraph"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the change: learners now have something to DO when they miss a word, instead of freezing. That is the module's real achievement.",
      tip: "Preview Module 8 as the last module of Level 2 — the one that puts everything on paper. After it, learners will have completed the whole level.",
      activity: "Ask every learner to name one place they will listen for English before the next lesson.",
    }),
  });
};
