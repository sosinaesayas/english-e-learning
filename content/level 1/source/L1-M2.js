"use strict";
/* LEVEL 1 · MODULE 2 — Numbers, Time & Money   (76 slides) */
const { C, G } = require("./theme");

module.exports = function (ctx, L) {
  const SEC = {
    obj:   { label: "Learning Objectives", color: C.green,  icon: "FaBullseye" },
    warm:  { label: "Warm-up",             color: C.gold,   icon: "FaFire" },
    intro: { label: "Introduction",        color: C.green,  icon: "FaFlag" },
    con:   { label: "Concept",             color: C.green,  icon: "FaLightbulb" },
    voc:   { label: "Vocabulary",          color: C.vocab,  icon: "FaLanguage" },
    gra:   { label: "Grammar",             color: C.gram,   icon: "FaSitemap" },
    gex:   { label: "Guided Examples",     color: C.gram,   icon: "FaChalkboardTeacher" },
    conv:  { label: "Conversation",        color: C.speak,  icon: "FaComments" },
    spk:   { label: "Speaking",            color: C.speak,  icon: "FaMicrophone" },
    lis:   { label: "Listening",           color: C.listen, icon: "FaHeadphones" },
    rea:   { label: "Reading",             color: C.read,   icon: "FaBookOpen" },
    wri:   { label: "Writing",             color: C.write,  icon: "FaPencilAlt" },
    pra:   { label: "Practice",            color: C.green,  icon: "FaDumbbell" },
    qui:   { label: "Quiz",                color: C.greenDark, icon: "FaClipboardCheck" },
    key:   { label: "Answer Key",          color: C.ok,     icon: "FaKey" },
    hw:    { label: "Homework",            color: C.gold,   icon: "FaHome" },
    sum:   { label: "Summary",             color: C.green,  icon: "FaListUl" },
  };

  function tn(o) {
    const p = [];
    if (o.time) p.push("TIME: " + o.time);
    if (o.how) p.push("HOW TO TEACH: " + o.how);
    if (o.mistakes) p.push("COMMON MISTAKES: " + o.mistakes);
    if (o.extra) p.push("EXTRA EXAMPLES: " + o.extra);
    if (o.tip) p.push("TIP: " + o.tip);
    if (o.activity) p.push("CLASSROOM ACTIVITY: " + o.activity);
    if (o.answers) p.push("ANSWERS: " + o.answers);
    return p.join("\n\n");
  }

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 1", levelNo: "1", levelName: "Beginner\nEnglish", cefr: "CEFR Pre-A1 → A1",
    moduleTag: "Module 2 of 6",
    title: "Numbers, Time & Money",
    sub: "Count to 100, tell the time, say a price in birr and give your phone number. The English you will use today, in a shop or on a bus.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5", v: "NEW WORDS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by asking one learner how much they paid for something today. Let them answer in Amharic. Then say: 'By Friday you will say that in English.' Numbers are the fastest-paying module in Level 1 because learners use them the same day.",
      tip: "Bring real birr notes and coins, a clock face, and a phone. Real objects beat pictures for this module.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things you will use outside this classroom today.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Count from 1 to 100 in English", d: "And hear the difference between 13 and 30 — the mistake that costs money." },
      { t: "Say the days of the week and the months of the year", d: "The twelve English months, and how they relate to the Ethiopian calendar." },
      { t: "Tell the time", d: "“It is half past eight.” — and know when someone means Ethiopian time." },
      { t: "Ask and say a price in birr", d: "“How much is it?”  “It is forty birr.”" },
      { t: "Give your phone number in English", d: "Digit by digit, the way English speakers say it." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask 'Can you do this now?' Objective 4 is the one adults care about most — say it with emphasis.",
      tip: "Return to this slide at the end of the module and ask again. The change is the proof the module worked.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: numbers you already know", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaPhone", title: "1 · Your phone number", desc: "Say your phone number out loud in any language. Count how many digits it has." },
      { icon: "FaMoneyBillWave", title: "2 · What did you pay?", desc: "Think of one thing you bought this week. How much was it? Say the number in English if you can." },
      { icon: "FaClock", title: "3 · What time is it?", desc: "Look at a clock or your phone. Say the time — Ethiopian time or English time, either is fine for now." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Run all three quickly. The third task will produce two different answers from different learners — that is exactly what you want, because it sets up the clock lesson later.",
      mistakes: "Do not correct anything in the warm-up. Not the numbers, not the pronunciation.",
      tip: "Write the two different times learners give for task 3 on the board and leave them there. You will come back to them on the clock slide.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Numbers are the English you will use first — and every day.",
    sub: "A price at Merkato. A bus fare. A phone number. The time of a meeting.\nYou do not need perfect grammar to do these things. You need numbers, said clearly.",
    chips: ["1 to 100", "7 days · 12 months", "Time and money in birr"],
    notes: tn({
      time: "4 minutes.",
      how: "Make the practical case plainly: a learner who knows numbers and five polite phrases can complete a real transaction in English today. That is a big motivator for adults who feel far from fluency.",
      tip: "Warn them once, now: 'One pair of numbers causes more trouble than anything else in English — thirteen and thirty. We will fix it in this module.' Naming it early makes learners listen for it.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — 1 to 10
  L.letters({
    sec: SEC.con, title: "Numbers 1 to 10", sub: "The foundation. Everything else is built from these ten words.",
    cols: 5, letterSize: 40,
    items: [
      { cap: "1", low: "", sub: "one /wʌn/" }, { cap: "2", low: "", sub: "two /tuː/" },
      { cap: "3", low: "", sub: "three /θriː/" }, { cap: "4", low: "", sub: "four /fɔː/" },
      { cap: "5", low: "", sub: "five /faɪv/" }, { cap: "6", low: "", sub: "six /sɪks/" },
      { cap: "7", low: "", sub: "seven /ˈsevən/" }, { cap: "8", low: "", sub: "eight /eɪt/" },
      { cap: "9", low: "", sub: "nine /naɪn/" }, { cap: "10", low: "", sub: "ten /ten/" },
    ],
    note: "Two hard ones:  THREE starts with the “th” sound — tongue between the teeth.  ·  SEVEN has the /v/ sound — teeth on lip.",
    notes: tn({
      time: "10 minutes.",
      how: "Count in chorus 1 to 10, three times: slowly, normally, then fast. Then count backwards from 10 — that proves they know the words, not just the sequence.",
      mistakes: "Three said as “tree” or “sree”, and seven said as “seben”. Both are first-language sound gaps, drilled in Module 1. Do the tongue-between-teeth model again for three, and the teeth-on-lip model for seven.",
      extra: "Count objects in the room: chairs, windows, learners, pens. Counting real things is far more memorable than reciting.",
      tip: "Silent counting on fingers while saying the words connects the sound to the quantity. Adults find it slightly silly and remember it anyway.",
      activity: "Clap and count: the class claps and counts together, then the teacher stops clapping at a random number and points at a learner, who must say the next three numbers alone.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — 11 to 20
  L.letters({
    sec: SEC.con, title: "Numbers 11 to 20", sub: "Watch numbers 13 to 19 — they all end in -TEEN.",
    cols: 5, letterSize: 40,
    items: [
      { cap: "11", low: "", sub: "eleven" }, { cap: "12", low: "", sub: "twelve" },
      { cap: "13", low: "", sub: "thirteen", hi: true }, { cap: "14", low: "", sub: "fourteen", hi: true },
      { cap: "15", low: "", sub: "fifteen", hi: true }, { cap: "16", low: "", sub: "sixteen", hi: true },
      { cap: "17", low: "", sub: "seventeen", hi: true }, { cap: "18", low: "", sub: "eighteen", hi: true },
      { cap: "19", low: "", sub: "nineteen", hi: true }, { cap: "20", low: "", sub: "twenty" },
    ],
    note: "11 and 12 are special words — eleven, twelve. From 13 to 19, every number ends in -TEEN, and the stress is ON the -TEEN: thir-TEEN.",
    notes: tn({
      time: "10 minutes.",
      how: "Teach 11 and 12 first as two words to memorise. Then show that 13–19 follow one rule. Say each -teen number with an exaggerated stress on the second syllable and have the class copy the stress, not just the word.",
      mistakes: "Learners often say “thir-teen” with equal stress on both syllables. English speakers hear that as ambiguous. The stress is what makes it clear, so drill the stress deliberately — it matters more than the vowel.",
      extra: "Note the spelling changes: three → thirteen (not threeteen), five → fifteen (not fiveteen), eight → eighteen (one t, not two).",
      tip: "Clap on the stressed syllable while the class says the number: thir-CLAP. Physical marking of stress works better than telling learners about it.",
      activity: "Count 11 to 20 around the class, then backwards from 20 to 11. Backwards is much harder and shows who has really learned them.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — the teen/ty trap
  L.compare({
    sec: SEC.con, title: "The most important pair in this module: -TEEN and -TY",
    sub: "Same letters at the start. Completely different numbers. The difference is the STRESS.",
    left: { h: "-TEEN — stress at the END", items: ["13  thir-TEEN", "14  four-TEEN", "15  fif-TEEN", "16  six-TEEN", "17  seven-TEEN"] },
    right: { h: "-TY — stress at the START", items: ["30  THIR-ty", "40  FOR-ty", "50  FIF-ty", "60  SIX-ty", "70  SEVEN-ty"] },
    note: "Say them out loud now:  “thirTEEN … THIRty.”   If you get this wrong at Merkato, you will pay the wrong price. This is the number-one number mistake in English.",
    notes: tn({
      time: "12 minutes. This is the most important slide in the module — do not rush it.",
      how: "Say each pair twice with heavily exaggerated stress. Then say ONE of the pair and ask learners to point left or right. Hearing the difference must come before saying it. Only when most of the class can hear it, ask them to produce it.",
      mistakes: "This is a stress problem, not a vowel problem — so it cannot be fixed by writing. It must be fixed with the voice and the ear. Learners who write it perfectly will still say it wrong.",
      extra: "18/80, 19/90 complete the set. Also practise in context: “It is fifteen birr.” “It is fifty birr.”",
      tip: "The real-world consequence makes this stick: fifteen birr and fifty birr are very different amounts. Say that out loud — adults remember rules that cost money.",
      activity: "Price game: hold up a card with 15 or 50 and say one of them. Learners write the number they hear. Then reverse — a learner says it and the class writes. Ten rounds, two minutes.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — tens to 100
  L.letters({
    sec: SEC.con, title: "Counting in tens to 100", sub: "Learn these nine words and you can say every number up to 100.",
    cols: 5, letterSize: 38,
    items: [
      { cap: "20", low: "", sub: "twenty" }, { cap: "30", low: "", sub: "thirty" },
      { cap: "40", low: "", sub: "forty" }, { cap: "50", low: "", sub: "fifty" },
      { cap: "60", low: "", sub: "sixty" }, { cap: "70", low: "", sub: "seventy" },
      { cap: "80", low: "", sub: "eighty" }, { cap: "90", low: "", sub: "ninety" },
      { cap: "100", low: "", sub: "one hundred", hi: true },
    ],
    note: "In between, join with a hyphen:  21 = twenty-one  ·  47 = forty-seven  ·  99 = ninety-nine.   Careful with the spelling of FORTY — there is no “u”, unlike four.",
    notes: tn({
      time: "10 minutes.",
      how: "Teach the nine tens first, then show the joining rule with three examples on the board: 21, 47, 99. Then ask learners for their own age, their house number, or a price they paid.",
      mistakes: "“Fourty” instead of “forty” is the commonest spelling error in English for everyone, not just Ethiopian learners. Point at it and say it is a trap.",
      extra: "Ages are the best practice because every learner has one: “I am twenty-three years old.”",
      tip: "For 100, British English says “one hundred” or “a hundred”. Both are correct. Teach “one hundred” and mention the other exists.",
      activity: "Count in tens around the class, then in fives, then in twos from 2 to 30. Changing the step keeps it from becoming a chant.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — days and months
  L.table({
    sec: SEC.con, title: "Days of the week and months of the year",
    sub: "Seven days, twelve months. All take a capital letter.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 15.5, headSize: 15, colW: [2.5, 4.8, 4.833],
      rows: [
        ["", "The 7 days", "The 12 months"],
        ["First four", "Monday · Tuesday · Wednesday · Thursday", "January · February · March · April"],
        ["Next four", "Friday · Saturday · Sunday", "May · June · July · August"],
        ["Last four", "The weekend = Saturday and Sunday", "September · October · November · December"],
        ["Capital letter?", "Yes — always", "Yes — always"],
        ["Short forms", "Mon · Tue · Wed · Thu · Fri · Sat · Sun", "Jan · Feb · Mar · Apr · … · Dec"],
      ],
    },
    note: "The Ethiopian calendar has 13 months. The English calendar has 12. These twelve English months are a separate list — learn them as new words, not as translations.",
    notes: tn({
      time: "12 minutes.",
      how: "Days first, months second, in two separate blocks. Chant the seven days in chorus until they are automatic. For months, teach in groups of four, not all twelve at once.",
      mistakes: "Wednesday is spelled with a silent d and said /ˈwenzdeɪ/ — two syllables, not three. February is often mispronounced; /ˈfebruəri/ is the careful form and /ˈfebjuəri/ is also widely used. Accept both.",
      extra: "Ask each learner for their birthday month. Personal information makes the month names stick.",
      tip: "The 13-month difference genuinely confuses learners. Say plainly: 'Do not try to match Ethiopian months to English months. They do not line up. Learn these twelve as new English words.' That instruction saves weeks of confusion.",
      activity: "Birthday line-up: learners arrange themselves in a line by birthday month, speaking only English. Noisy, physical, and it drills all twelve months at once.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — telling the time
  L.table({
    sec: SEC.con, title: "Telling the time", sub: "Four patterns cover almost every time you will need to say.",
    table: {
      color: C.green, rowH: 0.62, fontSize: 18, headSize: 16, colW: [2.4, 3.6, 6.133],
      rows: [
        ["Clock", "You say", "Example"],
        ["3:00", "… o'clock", "It is three o'clock."],
        ["3:30", "half past …", "It is half past three."],
        ["3:15", "quarter past …", "It is quarter past three."],
        ["3:45", "quarter to …", "It is quarter to four.  ← note: FOUR, not three"],
      ],
    },
    note: "IMPORTANT: 3 o'clock in English is NOT 3 o'clock on the Ethiopian clock. Ethiopian 3 o'clock is 9 in the morning in English. Always say which one you mean.",
    notes: tn({
      time: "14 minutes. Allow extra time for the Ethiopian clock comparison.",
      how: "Draw two clock faces side by side on the board and label one ENGLISH TIME and one ETHIOPIAN TIME. Show the same moment on both. This visual does in thirty seconds what five minutes of explanation cannot.",
      mistakes: "“Quarter to four” for 3:45 is counter-intuitive — learners say “quarter to three” because they see a three. Teach it as: you are looking forward to the next hour. Drill five examples.",
      extra: "Digital form is always acceptable and easier: 3:45 can be said “three forty-five”. Teach both, and tell learners the digital form is safe when they are unsure.",
      tip: "In a mixed group, agree a class convention: whenever anyone says a time, they add “English time” or “Ethiopian time”. Keep it for the whole level — it prevents real missed appointments.",
      activity: "Clock hands: use a paper clock with movable hands, or draw one. A learner sets a time, another says it. Then reverse.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "time", ipa: "/taɪm/", pos: "noun", icon: "FaClock",
      meaning: "The hours and minutes of the day.",
      example: "What time is it?  It is nine o'clock.",
      mistake: "Say /taɪm/ with the “eye” sound, like in “five” and “nine”. Not “teem”. And the question is “What time is it?” — not “What is the time?” (though both are correct, the first is far more common).",
      notes: tn({ time: "5 minutes.",
        how: "Point at a clock, ask “What time is it?”, and answer yourself. Then ask five learners in turn. The question and the answer must be drilled together — a learner who can only answer cannot start a conversation.",
        mistakes: "The vowel /aɪ/ is a diphthong, two sounds joined: ah-ee. Say it slowly, then at speed.",
        extra: "on time · in time · What time do you start work? · What time is the bus?",
        tip: "Ask the time at random moments for the rest of the module. Real repetition beats a drill.",
        activity: "Every learner asks the person on their right “What time is it?” around the whole class. One minute, everyone speaks." }) },

    { word: "money", ipa: "/ˈmʌni/", pos: "noun", icon: "FaMoneyBillWave",
      meaning: "What you use to buy things. In Ethiopia: birr.",
      example: "I do not have money today.",
      mistake: "The first sound is /ʌ/ as in “cup”, not “oh”. Say “MUH-nee”, not “moh-nee”. Also: money is uncountable — never say “moneys”.",
      notes: tn({ time: "5 minutes.",
        how: "Hold up a real birr note. Say the word, class repeats three times. Then teach the sentence “How much money?” which combines it with the next slide's grammar.",
        mistakes: "The spelling has an “o” but the sound is /ʌ/. English spelling and sound do not match here — say so plainly rather than letting learners guess.",
        extra: "Same /ʌ/ sound: cup, bus, sun, much, under. Group them and drill together.",
        tip: "Uncountable nouns are hard to explain at this level. Do not explain — just say “money” is always one word, never “moneys”, and move on.",
        activity: "Show three real amounts of birr and ask “How much money?” for each." }) },

    { word: "week", ipa: "/wiːk/", pos: "noun", icon: "FaCalendarWeek",
      meaning: "Seven days, from Monday to Sunday.",
      example: "I work six days a week.",
      mistake: "The vowel is long: /wiːk/. Keep it short and it becomes “wick” — a different word. Compare: week and wick, seat and sit, sheep and ship.",
      notes: tn({ time: "5 minutes.",
        how: "Model the long vowel by holding it for two seconds: wiiiik. Then say “wick” with a short vowel. Ask the class which one is seven days.",
        mistakes: "The long /iː/ and short /ɪ/ contrast is one of the six target sounds for Ethiopian learners. Drill the minimal pairs directly.",
        extra: "week–wick, seat–sit, sheep–ship, feet–fit, green–grin.",
        tip: "This word gives you a natural chance to teach “weekend” — Saturday and Sunday — which learners will need immediately.",
        activity: "Ask each learner: “How many days a week do you work or study?” Everyone answers in a full sentence." }) },

    { word: "month", ipa: "/mʌnθ/", pos: "noun", icon: "FaCalendarAlt",
      meaning: "About thirty days. January, February, March …",
      example: "There are twelve months in the English year.",
      mistake: "The word ends with the “th” sound — tongue between the teeth. Do not say “mont” or “mons”. The plural is “months” /mʌnθs/, which is genuinely difficult — say it slowly.",
      notes: tn({ time: "6 minutes. Allow extra time for the ending.",
        how: "Break it: /mʌn/ … then add /θ/ with the tongue visible. Join them slowly. Then add the plural /s/ — that three-consonant ending is one of the harder things in English, so practise it slowly and accept a good attempt.",
        mistakes: "Final “th” is dropped or becomes /t/ or /s/. Because it is at the end of the word, learners often do not notice they have dropped it.",
        extra: "Other final-th words: mouth, both, north, south, health. Drill three of them.",
        tip: "Tell the class the truth: “months” is hard for everyone learning English. Permission to find it difficult keeps people trying.",
        activity: "Each learner says: “My birthday is in ______.” Twelve months practised through twelve personal sentences." }) },

    { word: "price", ipa: "/praɪs/", pos: "noun", icon: "FaTag",
      meaning: "How much money something costs.",
      example: "What is the price of this bag?  It is eighty birr.",
      mistake: "Two things to watch: the /p/ needs a puff of air (not “brice”), and pr- is a consonant cluster — say p and r joined, with no vowel between them.",
      notes: tn({ time: "6 minutes.",
        how: "Build the cluster: /p/ … /r/ … pr … price. Forwards, never backwards. Use the paper test again to check the puff of air on /p/.",
        mistakes: "An inserted vowel — “pirice” — is the same first-language pattern as “isukul” from Module 1. Drill the cluster in isolation first.",
        extra: "Other pr- and br- clusters: print, promise, problem, bread, brother.",
        tip: "“What is the price?” and “How much is it?” mean the same thing. Teach both — learners will hear both in a shop.",
        activity: "Price tags: put real or drawn price labels on classroom objects. Learners walk around asking “What is the price of this?”" }) },
  ];
  VOCAB.forEach((v, i) => {
    L.vocab({
      sec: Object.assign({}, SEC.voc, { label: "Vocabulary " + (i + 1) + " of 5" }),
      title: "New word: " + v.word, sub: "Word · pronunciation · meaning · example · common mistake",
      word: v.word, ipa: v.ipa, pos: v.pos, icon: v.icon,
      meaning: v.meaning, example: v.example, mistake: v.mistake,
      color: C.vocab, tint: C.vocabTint, inkCol: C.vocabInk,
      notes: v.notes,
    });
  });

  // ============================================================ 16 · GRAMMAR 1
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 1 of 5" }),
    title: "Rule 1 — “How many …?” and the plural -s",
    sub: "When you can count something, add -s for more than one.",
    table: {
      color: C.gram, rowH: 0.56, fontSize: 18, headSize: 16, colW: [3.0, 4.4, 4.733],
      rows: [
        ["One", "More than one", "In a question"],
        ["one pen", "two pens", "How many pens do you have?"],
        ["one book", "ten books", "How many books are there?"],
        ["one birr", "fifty birr  ← no -s", "How much is it?"],
        ["one day", "seven days", "How many days in a week?"],
      ],
    },
    note: "Careful: currency does not take -s after a number. Say “fifty birr”, never “fifty birrs”. The same happens in English with some words.",
    notes: tn({
      time: "8 minutes.",
      how: "Hold up one pen, then three pens, and say both forms. The physical demonstration teaches the plural faster than the rule does. Then do the same with books and chairs.",
      mistakes: "Dropping the plural -s is transfer error S7 and it persists for months. Correct it every single time from now on — it is cheap to fix now and expensive later.",
      extra: "How many brothers do you have? How many days do you work? How many students are in this class?",
      tip: "The birr exception matters locally and learners get it wrong constantly. Drill five prices out loud: ten birr, twenty birr, fifty birr, one hundred birr.",
      activity: "Count and report: in pairs, learners count things in the room and report: “There are twelve chairs.” “There are two windows.”",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — “How much is it?” and “How much are they?”",
    sub: "One thing → is. More than one thing → are.",
    left: { h: "Correct", items: ["How much is it?", "How much is this bag?", "How much are they?", "How much are these books?"] },
    right: { h: "Wrong", items: ["How much it is?", "How much is these books?", "How much they are?", "How much are this bag?"] },
    note: "The word order is fixed: How much + is/are + the thing?  The verb comes BEFORE the thing, not after it.",
    notes: tn({
      time: "8 minutes.",
      how: "Write “How much  |  is  |  it?” in three separate boxes on the board and physically point to each as you say it. Then swap the last two boxes to make the wrong version and ask learners what changed.",
      mistakes: "“How much it is?” is transfer error S4 — the auxiliary should come before the subject in a question. This is the same problem that produces “Where you are going?” later in the course, so fixing it now pays twice.",
      extra: "How much is the ticket? How much are the tomatoes? How much is this phone?",
      tip: "Learners at a market need only ONE of these sentences to survive. Drill “How much is it?” until it is automatic before teaching the plural version.",
      activity: "Shop role play: put five objects on a desk with price tags. Learners queue and ask “How much is it?” for each one.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — “It is …” for time, price and day",
    sub: "One small phrase answers three different questions.",
    table: {
      color: C.gram, rowH: 0.62, fontSize: 18, headSize: 16, colW: [4.0, 4.0, 4.133],
      rows: [
        ["Question", "Answer", "Short form"],
        ["What time is it?", "It is nine o'clock.", "It's nine o'clock."],
        ["How much is it?", "It is forty birr.", "It's forty birr."],
        ["What day is it?", "It is Monday.", "It's Monday."],
      ],
    },
    note: "“It's” is the short form of “it is”. Both are correct. Speakers use the short form almost all the time, so you must be able to hear it.",
    notes: tn({
      time: "8 minutes.",
      how: "Drill the three questions and three answers as pairs. Then introduce the contraction and say both versions of each sentence so learners hear that they are the same thing.",
      mistakes: "Learners drop “it is” entirely and answer with just the number — “nine o'clock”, “forty birr”. That is understandable but it is not yet a full English answer. Insist on the whole sentence for now.",
      extra: "It is Tuesday. It is ten birr. It is half past six. It is January.",
      tip: "Learners who only ever hear the full form cannot understand natural speech, where “it's” is used almost always. Say the short form often from now on.",
      activity: "Rapid answers: teacher points at a clock, a price tag or a calendar; learners answer in a full sentence within three seconds.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — at, on, in for time",
    sub: "Three small words. One rule each. Learn them together.",
    table: {
      color: C.gram, rowH: 0.66, fontSize: 18, headSize: 16, colW: [2.0, 4.4, 5.733],
      rows: [
        ["Word", "Use it for", "Examples"],
        ["AT", "a clock time", "at three o'clock · at half past eight · at 6:15"],
        ["ON", "a day or a date", "on Monday · on Friday · on 12 September"],
        ["IN", "a month or a year", "in January · in September · in 2026"],
      ],
    },
    note: "Remember it by size: AT is the smallest (a moment) · ON is bigger (a day) · IN is the biggest (a month or a year).",
    notes: tn({
      time: "10 minutes.",
      how: "Teach the size idea — small to big — and draw three circles of increasing size on the board labelled AT, ON, IN. Learners remember the picture long after they forget the rule.",
      mistakes: "This is transfer error S9. Amharic does not divide time prepositions the same way, so learners produce “in Monday” and “at January”. It needs repeated drilling, not one explanation.",
      extra: "at seven o'clock · on Sunday · in December · on Tuesday morning · at night (an exception — teach it as a phrase).",
      tip: "Give a gap-fill of ten sentences every lesson for the next two weeks. Three prepositions cannot be learned in one sitting.",
      activity: "Preposition corners: label three corners AT, ON, IN. Teacher says a time expression; learners walk to the correct corner.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — put it all together",
    sub: "Numbers, prices, times and prepositions in one sentence.",
    left: { h: "Correct", items: ["The class starts at eight o'clock.", "I work on Monday and Tuesday.", "My birthday is in September.", "It is fifty birr."] },
    right: { h: "Wrong", items: ["The class starts in eight o'clock.", "I work in Monday and Tuesday.", "My birthday is on September.", "It is fifty birrs."] },
    note: "Four checks for every sentence:  1 · the right preposition   2 · plural -s where it belongs   3 · no -s after birr   4 · capital letters on days and months.",
    notes: tn({
      time: "8 minutes.",
      how: "Take each wrong sentence and ask the class to identify the single error before you fix it. Every sentence here has exactly one error, so tell them that.",
      mistakes: "Sentence 4 is the local one. Learners write “birrs” because they have just learned the plural rule and are applying it everywhere.",
      extra: "Two more for pairs: “I go to church in Sunday.” and “The shop opens on seven o'clock.”",
      tip: "These four checks become the marking standard for the rest of the module. Put them on the wall next to the three writing rules from Module 1.",
      activity: "Error auction, as in Module 1: teams bid on how many errors they can find in a set of four sentences.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  const GEX = [
    { title: "Guided examples 1 — saying numbers", sub: "Read the question, look at the answer, then read WHY.", items: [
      { q: "Write in words:  47", a: "forty-seven", why: "Say the tens first, then the units, joined with a hyphen. Careful with the spelling of “forty” — there is no “u” in it." },
      { q: "Which is bigger:  13 or 30?", a: "30 is bigger.", why: "13 is thir-TEEN with the stress at the end. 30 is THIR-ty with the stress at the start. The stress is the only difference when you hear them." },
      { q: "Say this phone number:  0912 345 678", a: "“oh nine one two, three four five, six seven eight”", why: "English says phone numbers digit by digit, not as whole numbers. Zero is usually said as “oh” in phone numbers." },
    ] },
    { title: "Guided examples 2 — telling the time", sub: "Look at the clock, choose the pattern.", items: [
      { q: "What time is it?  7:00", a: "It is seven o'clock.", why: "Use “o'clock” only for an exact hour with no minutes. Never say “seven o'clock fifteen”." },
      { q: "What time is it?  7:30", a: "It is half past seven.", why: "Half past means thirty minutes after the hour. The hour you name is the one that has already passed." },
      { q: "What time is it?  7:45", a: "It is quarter to eight.", why: "After half past, you look forward to the NEXT hour. 7:45 is fifteen minutes before eight, so it is “quarter to eight” — not seven." },
    ] },
    { title: "Guided examples 3 — money and prices", sub: "Asking, answering and getting the plural right.", items: [
      { q: "You want to know the cost of a bag. What do you ask?", a: "How much is it?  (or: How much is this bag?)", why: "The verb “is” comes before “it”. “How much it is?” puts the words in the wrong order." },
      { q: "The answer is 50 birr. Write the full sentence.", a: "It is fifty birr.", why: "Two things: use the full sentence “It is…”, and never add -s to birr after a number." },
      { q: "Correct this:  “How much are this book?”", a: "How much is this book?", why: "“This book” is one thing, so the verb must be “is”. Use “are” only for more than one: “How much are these books?”" },
    ] },
    { title: "Guided examples 4 — at, on, in", sub: "Think: is it a moment, a day, or a month?", items: [
      { q: "Fill the gap:  “The bus leaves ___ six o'clock.”", a: "at", why: "A clock time always takes AT. Think small: AT is the smallest of the three time words." },
      { q: "Fill the gap:  “I do not work ___ Sunday.”", a: "on", why: "A day of the week always takes ON. Note the capital S on Sunday." },
      { q: "Fill the gap:  “My birthday is ___ March.”", a: "in", why: "A month always takes IN. Think big: IN covers the largest period of the three." },
    ] },
    { title: "Guided examples 5 — days, months and capitals", sub: "Every day and every month takes a capital letter.", items: [
      { q: "Correct this:  “i work on monday and friday.”", a: "I work on Monday and Friday.", why: "Three capitals: I is always capital, and both Monday and Friday are days of the week." },
      { q: "How many months are in the English year?", a: "Twelve.", why: "The Ethiopian calendar has thirteen months. The English calendar has twelve. Do not try to match them — learn the twelve English names separately." },
      { q: "Which comes first:  September or November?", a: "September.", why: "The order is September, October, November, December — the last four months of the year. Learning them in groups of four is easier than all twelve at once." },
    ] },
  ];
  GEX.forEach((g, i) => {
    L.answers({
      sec: Object.assign({}, SEC.gex, { label: "Guided Examples " + (i + 1) + " of 5" }),
      title: g.title, sub: g.sub, items: g.items, size: 19,
      notes: tn({
        time: "6 minutes per slide.",
        how: "Cover the answer and ask the class first. Take answers from two learners before revealing. Then read the WHY aloud — the reason is the teaching, not the answer.",
        mistakes: "Do not let learners copy the answer without hearing the reason. A learner who knows the answer but not the reason cannot do the next one.",
        tip: "If most of the class gets an item wrong, go back to that concept slide before continuing. These examples are a diagnostic as much as a practice.",
        activity: "Ask a learner who answered correctly to explain the WHY in their own words before you read the slide.",
      }),
    });
  });

  // ============================================================ 26–30 · CONVERSATION
  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 1 of 5" }),
    title: "Buying something at the shop",
    sub: "Abel buys tomatoes at Merkato.",
    turns: [
      { who: "ABEL", text: "Good morning. How much are the tomatoes?", side: "l" },
      { who: "SELLER", text: "Forty birr a kilo.", side: "r" },
      { who: "ABEL", text: "Forty? That is expensive.", side: "l" },
      { who: "SELLER", text: "Thirty-five birr. How many kilos?", side: "r" },
      { who: "ABEL", text: "Two kilos, please. Here is seventy birr.", side: "l" },
      { who: "SELLER", text: "Thank you. Have a good day.", side: "r" },
    ],
    note: "Listen first. Then repeat each line. Then read it in pairs. Then change the item and the prices to your own.",
    notes: tn({
      time: "10 minutes.",
      how: "Four steps in order: listen with books closed, chorus repeat, pair reading, then pairs perform with different items and prices. Step four is where the language becomes theirs.",
      mistakes: "Watch for “How much are the tomatoes” said as “How much the tomatoes are”. Also watch the thirty-five: learners often say thirteen-five.",
      extra: "Change the item to onions, potatoes, bananas, or a phone card, and change the prices each time.",
      tip: "Bring real items and real notes if you can. A role play with actual objects and actual money produces far more language than a script read at a desk.",
      activity: "Market day: half the class are sellers with price cards, half are buyers with paper money. Everyone buys three things. Ten minutes, very noisy, extremely effective.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Asking the time and making a plan",
    sub: "Sara and Hana arrange to meet.",
    turns: [
      { who: "SARA", text: "Excuse me, what time is it?", side: "l" },
      { who: "HANA", text: "It is half past two.", side: "r" },
      { who: "SARA", text: "Thank you. What time does the class start?", side: "l" },
      { who: "HANA", text: "At three o'clock. English time.", side: "r" },
      { who: "SARA", text: "Good. See you on Monday.", side: "l" },
      { who: "HANA", text: "Yes — on Monday at nine. Goodbye.", side: "r" },
    ],
    note: "Notice the prepositions:  AT three o'clock  ·  ON Monday  ·  AT nine. Time takes AT. Days take ON.",
    notes: tn({
      time: "10 minutes.",
      how: "After reading, ask learners to find every AT and every ON in the dialogue and say why each one is used. Finding the rule inside real language is far stronger than being told the rule.",
      mistakes: "“What time does the class start?” contains “does”, which is not taught until Level 2. Do not explain it. Teach the whole question as one fixed phrase to memorise.",
      extra: "What time does the shop open? What time does the bus leave? What time do you finish work?",
      tip: "Notice Hana says “English time”. Point at it. Make it the class habit for the rest of the level.",
      activity: "Diary planning: in pairs, learners arrange three meetings, each with a day and a time. They write them down, then report one to the class.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful phrases for numbers, time and money",
    sub: "Six phrases you will use in a shop, on a bus, or at work.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 20, descSize: 15,
    items: [
      { icon: "FaMoneyBillWave", title: "“How much is it?”", desc: "The single most useful question in this module." },
      { icon: "FaClock", title: "“What time is it?”", desc: "Ask anyone, anywhere. Always polite with “Excuse me” first." },
      { icon: "FaTag", title: "“That is expensive.”", desc: "Polite way to begin bargaining at the market." },
      { icon: "FaCalculator", title: "“Can you write it, please?”", desc: "When you cannot catch a number, ask for it in writing." },
      { icon: "FaVolumeUp", title: "“Thirteen or thirty?”", desc: "Ask directly when you are not sure which one you heard." },
      { icon: "FaPhone", title: "“What is your phone number?”", desc: "The answer comes digit by digit — be ready to write." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill all six in chorus, then in pairs, then individually. Insist on the full phrase, including “Excuse me” before asking a stranger the time.",
      mistakes: "Learners say “How much?” alone. It is understandable but abrupt. Teach the full question, then mention the short form exists.",
      extra: "Add “Do you have change?” if the class is strong — very useful in real Ethiopian shops.",
      tip: "Phrase 5 is the practical solution to the teen/ty problem. A learner who cannot yet hear the difference can simply ask. Teach it as a survival strategy, not a failure.",
      activity: "Phrase bingo: each learner takes three of the six and crosses them off when they use one naturally during the lesson.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "YOU", text: "Good morning. ______________________ the bag?", side: "l" },
      { who: "SELLER", text: "It is eighty birr.", side: "r" },
      { who: "YOU", text: "Eighty or eighteen? ______________________ , please.", side: "l" },
      { who: "SELLER", text: "Eight-zero. Eighty birr.", side: "r" },
      { who: "YOU", text: "That is ______________. Can you reduce it?", side: "l" },
      { who: "SELLER", text: "Seventy birr. That is my last price.", side: "r" },
    ],
    note: "Use these:  “How much is …”  ·  “Can you write it”  ·  “expensive”",
    notes: tn({
      time: "8 minutes.",
      how: "Give pairs three minutes to fill the gaps in writing, then have three pairs perform it aloud before you show the answers.",
      answers: "Gap 1: How much is  ·  Gap 2: Can you write it  ·  Gap 3: expensive.",
      mistakes: "Gap 1 often comes out as “How much the bag is”. Correct the word order every time.",
      tip: "The eighty/eighteen exchange in this dialogue is the real-life version of the stress problem. Point at it and say: this happens to everyone, and asking is the right response.",
      activity: "Learners rewrite the dialogue with a different item and different prices, then perform their own version.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — how to run it", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Read the shop dialogue together", d: "Learner A is the buyer, learner B is the seller. Read twice, then swap roles." },
      { t: "Close the book and try again", d: "Say as much as you remember. Gaps are fine." },
      { t: "Change the item and the price", d: "Sell a phone, a shoe, a kilo of onions. Use different numbers each time." },
      { t: "Find a new partner and do it once more", d: "New face, same language. This is the closest to real life." },
    ],
    notes: tn({
      time: "8 minutes for all four rounds.",
      how: "Announce each round change loudly and keep strictly to two minutes. Walk between pairs and listen for teen/ty errors — note them, correct at the end, do not interrupt.",
      mistakes: "Do not let one confident learner do all the talking. If you see it, give the quiet learner the buyer role, which speaks first.",
      tip: "Round 3 is where you insist on new numbers. Repeating the same prices lets learners avoid the numbers they find hard.",
      activity: "After round 4, ask three learners what they “bought” and for how much. That turns the drill into real reporting.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — count out loud", sub: "Four ways. Each one is harder than the last.",
    color: C.speak, size: 21, labels: ["A", "B", "C", "D"],
    items: [
      { t: "1 to 20, with the class", d: "In chorus, twice. Slowly first, then fast." },
      { t: "In tens to 100", d: "Twenty, thirty, forty… around the class, one learner per number." },
      { t: "Backwards from 20", d: "Much harder. This proves you know the words, not just the order." },
      { t: "Random numbers", d: "The teacher writes a number on the board. You say it. No thinking time." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Always finish with part D. Counting in sequence is memory; saying a random number is knowledge. Only part D tells you who is ready.",
      mistakes: "Hesitation on the teens and the tens. If a learner pauses to work it out, they will not manage it at a market counter — keep drilling until it is instant.",
      extra: "Use real numbers: house numbers, ages, bus route numbers, prices from the market.",
      tip: "Sixty seconds of random-number practice at the start of every lesson for the rest of the level. It costs nothing to prepare.",
      activity: "Number race: two learners at the board, teacher says a number, first to write it correctly wins the point.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — say your phone number", sub: "In pairs. Speaker says, partner writes.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say each digit separately", d: "0912 345 678 → “oh nine one two, three four five, six seven eight.”" },
      { t: "Pause in groups", d: "Group the digits and pause between groups. It helps the listener enormously." },
      { t: "Your partner writes it down", d: "Then they read it back to you. Is it correct?" },
      { t: "Swap roles and repeat", d: "Now you write and your partner speaks." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Model it once at the front with a strong learner so the pace and the grouping are clear. Write the digits on the board as they are spoken.",
      mistakes: "Saying the number as whole numbers — “nine hundred and twelve” — instead of digit by digit. English says phone numbers one digit at a time.",
      extra: "Zero is said “oh” in phone numbers but “zero” in maths and sport. Mention it once; do not dwell on it.",
      tip: "Learners who are shy about giving a real number can invent one. The point is the digits, not the data.",
      activity: "Phone directory: learners collect three classmates' numbers by asking in English, then read one back to the class to check.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Stress drill — the teen/ty pair",
    sub: "The most valuable two minutes in this whole module. Say each pair five times.",
    left: { h: "-TEEN — stress at the END", items: ["thir-TEEN  (13)", "four-TEEN  (14)", "fif-TEEN  (15)", "eigh-TEEN  (18)", "nine-TEEN  (19)"] },
    right: { h: "-TY — stress at the START", items: ["THIR-ty  (30)", "FOR-ty  (40)", "FIF-ty  (50)", "EIGH-ty  (80)", "NINE-ty  (90)"] },
    note: "Clap on the stressed part. “thir-CLAP-teen”  ·  “CLAP-thir-ty”. Your hand teaches your mouth.",
    notes: tn({
      time: "10 minutes.",
      how: "Hearing before speaking. First say one number from a pair and have learners point left or right — twenty rounds. Only when most of the class hears the difference, move to production.",
      mistakes: "Learners who cannot yet hear the difference will not produce it, no matter how much they repeat. If pointing is still random after twenty rounds, slow down and exaggerate more.",
      extra: "Put them in real sentences: “It is fifteen birr.” / “It is fifty birr.” The context makes the stakes obvious.",
      tip: "Clapping works because stress is rhythm, not sound. Learners who cannot hear the difference can often clap it correctly, and the voice follows the hand.",
      activity: "Price dictation: teacher reads ten prices, learners write the figures. Mark it together. Any learner scoring under 8 needs this drill again tomorrow.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — times and prices out loud", sub: "Work in pairs. One minute per task.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say five times", d: "6:00 · 8:30 · 10:15 · 2:45 · 12:00 — in full sentences: “It is six o'clock.”" },
      { t: "Say five prices", d: "15 birr · 50 birr · 13 birr · 30 birr · 100 birr. Check your stress." },
      { t: "Ask your partner three questions", d: "“What time is it?”  “How much is your bag?”  “What day is it today?”" },
      { t: "Say your daily times", d: "“I wake up at ______. I start work at ______. I go home at ______.”" },
      { t: "Say three dates", d: "“My birthday is in ______.”  “The exam is on ______.”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Give each pair a listening job: while A speaks, B listens for one specific thing — the preposition, or the teen/ty stress. Listening with a purpose is much more useful than listening in general.",
      mistakes: "Task 4 is where the prepositions break down. Expect “I wake up in six o'clock” and correct it on the spot.",
      extra: "Extend task 4 with “I have lunch at…” and “I go to bed at…”.",
      tip: "Task 4 produces genuine personal information, so learners remember it. Ask two learners to report their partner's times to the class.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "40 seconds. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say the time now", d: "“It is ______ o'clock.” or “It is half past ______.”" },
      { t: "Say today's day and month", d: "“Today is ______. It is ______.”" },
      { t: "Count from 10 to 20", d: "Clearly, without stopping." },
      { t: "Say your phone number", d: "Digit by digit, with pauses between groups." },
      { t: "Say a price", d: "“This bag is ______ birr.”  Choose a number between 13 and 90." },
    ],
    notes: tn({
      time: "12 minutes including listening back.",
      how: "Learners record on a phone. No phone means performing live to a partner who ticks the five steps. Everyone does it — forty seconds is short enough that nobody can refuse.",
      mistakes: "Rushing step 3 and slurring the teens. Tell them to slow down; clarity is what is being marked, not speed.",
      tip: "Have them listen back once before submitting. Self-listening is the cheapest pronunciation fix available.",
      answers: "SUCCESS CRITERIA: all five steps present · a listener can write down the phone number correctly · the price in step 5 is unambiguous between the -teen and -ty forms.",
      activity: "Keep every recording. Play it back at the end of Level 1 next to the new one.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — numbers and prices", sub: "Listen twice. Write the number you hear.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 19, lsm: 1.4,
      text: "1.  “It is fifteen birr.”\n2.  “It is fifty birr.”\n3.  “I am nineteen years old.”\n4.  “There are ninety students.”\n5.  “The bus is number sixty-two.”\n6.  “My phone number is oh nine one one, two three four.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write the number in figures, not in words.",
      "For number 6, write all the digits.",
      "The teacher reads each item twice, at normal speed.",
      "Listen for the STRESS in items 1 to 4 — that is what tells you which number it is.",
    ] },
    notes: tn({
      time: "9 minutes.",
      how: "Read each item twice with a five-second pause. Use natural stress — do not over-exaggerate here, because this is the test of whether the drill worked.",
      mistakes: "Items 1 and 2 are the whole point. If more than a third of the class confuses them, do the stress drill again before moving on.",
      tip: "Read the whole list once before learners write anything, so they know what is coming, then read again for answers.",
      answers: "1  15  ·  2  50  ·  3  19  ·  4  90  ·  5  62  ·  6  0911 234",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check your answers. Read the reason for each one.",
    size: 18, cols: 2,
    items: [
      { q: "1 — “fifteen birr”", a: "15", why: "Stress at the end: fif-TEEN. If you wrote 50 you heard the stress in the wrong place." },
      { q: "2 — “fifty birr”", a: "50", why: "Stress at the start: FIF-ty. Same first syllable as 15 — only the stress differs." },
      { q: "3 — “nineteen years old”", a: "19", why: "nine-TEEN. Ages are a common place to hear this pair." },
      { q: "4 — “ninety students”", a: "90", why: "NINE-ty. A big difference from 19 — this is why the stress matters." },
      { q: "5 — “number sixty-two”", a: "62", why: "Tens first, then units, joined with a hyphen when written." },
      { q: "6 — the phone number", a: "0911 234", why: "Said digit by digit, with “oh” for zero. Never as whole numbers." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Read each answer and reason. Ask learners to raise a hand for each one they got wrong — you are collecting data on what to re-teach, not judging. Say that out loud.",
      tip: "Count how many in the class got items 1 and 2 both right, and say the number. If it is under half, spend five minutes on the stress drill before the next slide.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — times and days", sub: "Listen and write the time or the day.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 19, lsm: 1.45,
      text: "1.  “The class starts at nine o'clock.”\n2.  “It is half past four.”\n3.  “The shop opens at quarter past seven.”\n4.  “I do not work on Sunday.”\n5.  “My birthday is in November.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "For 1 to 3, write the time in figures: 9:00, and so on.",
      "For 4 and 5, write the day or the month with a CAPITAL letter.",
      "Also write the preposition you hear: at, on or in.",
      "The teacher reads each item twice.",
    ] },
    notes: tn({
      time: "9 minutes.",
      how: "This exercise tests three things at once: the time, the day or month, and the preposition. Mark all three — the preposition is the one learners will get wrong.",
      mistakes: "Item 3 requires converting “quarter past seven” to 7:15, which is a real comprehension step, not just transcription.",
      extra: "Add two harder items if the class is strong: “The bus leaves at quarter to six” and “The exam is on Thursday in January.”",
      answers: "1  9:00, at  ·  2  4:30  ·  3  7:15, at  ·  4  Sunday, on  ·  5  November, in",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Check the time, the capital letter and the preposition.",
    size: 17,
    items: [
      { q: "1 — “The class starts at nine o'clock.”", a: "9:00  ·  preposition: at", why: "A clock time always takes AT. “O'clock” means an exact hour with no minutes." },
      { q: "2 — “It is half past four.”", a: "4:30", why: "Half past means thirty minutes after the hour that has already passed — so four, not five." },
      { q: "3 — “The shop opens at quarter past seven.”", a: "7:15  ·  preposition: at", why: "Quarter past means fifteen minutes after the hour. Quarter TO would mean fifteen minutes before the next one." },
      { q: "4 — “I do not work on Sunday.”", a: "Sunday  ·  preposition: on", why: "Days take ON, and every day of the week takes a capital letter." },
      { q: "5 — “My birthday is in November.”", a: "November  ·  preposition: in", why: "Months take IN, and every month takes a capital letter." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Have learners swap papers and mark each other's. They must check three things per item: the figure, the capital letter and the preposition. Peer marking makes the capital rule stick.",
      tip: "The prepositions are the real content here. Count how many learners got all four prepositions right and say the number aloud.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to catch numbers when people speak fast", sub: "Four practical habits for real life.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaVolumeUp", title: "Listen for the stress, not the vowel", desc: "13 and 30 have almost the same sounds. The only reliable difference is which part is louder and longer." },
      { icon: "FaHandPaper", title: "Just ask", desc: "“Thirteen or thirty?” is a completely normal question. Native speakers ask each other this too." },
      { icon: "FaPencilAlt", title: "Ask them to write it", desc: "“Can you write it, please?” For money and phone numbers, this is the safest thing you can do." },
      { icon: "FaCalculator", title: "Repeat it back", desc: "“So, fifty birr?” Repeating what you heard gives the other person a chance to correct you." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Read each habit and ask which one learners already do. Most will admit they guess instead of asking. Make the point that asking is what confident speakers do, not what weak ones do.",
      mistakes: "The commonest real-world failure is nodding and guessing. That is how people pay the wrong price. Say it plainly.",
      tip: "Habit 4 — repeating it back — is the most useful and the least used. Drill it: teacher says a price, learner repeats it back as a question.",
      activity: "Confirm the price: teacher says a price quickly and unclearly on purpose. The learner must respond with “So, ______ birr?” Ten rounds.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — Sara's week", sub: "Read it aloud twice before you answer the questions.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 22, lsm: 1.45,
      text: "My name is Sara.\nI am seventeen years old.\nI go to school on Monday, Tuesday and Wednesday.\nSchool starts at eight o'clock.\nI do not go to school on Sunday.\nMy birthday is in September." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the whole text once.",
      "The class reads it together, in chorus.",
      "Then six learners read one line each.",
      "Find every number, every day, every month and every preposition.",
    ] },
    notes: tn({
      time: "9 minutes.",
      how: "Same routine as Module 1: teacher, chorus, individuals. Then the finding task — it turns reading into active noticing.",
      mistakes: "“Seventeen” will be read with the wrong stress by some learners. Correct it in the moment; it is the module's target error.",
      extra: "Ask learners to count: three days, two times, one month, three prepositions.",
      tip: "Point at each word as the class reads. Beginners lose their place, and following your finger keeps everyone together.",
      activity: "Learners rewrite the text about themselves, changing the age, the days, the time and the month. Six sentences, entirely their own.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE. Not “seventeen” — say “Sara is seventeen years old.”",
    items: [
      "How old is Sara?",
      "How many days a week does she go to school?",
      "What time does school start?",
      "Which day does she NOT go to school?",
      "When is her birthday?",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Insist on full sentences. One-word answers are the habit you are preventing, and it is far easier to prevent than to cure.",
      mistakes: "Question 2 requires counting, not copying — the text lists three days but does not say “three”. That is an inference step.",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 Sara is seventeen years old. · 2 She goes to school three days a week. · 3 School starts at eight o'clock. · 4 She does not go to school on Sunday. · 5 Her birthday is in September.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Full sentences. Correct prepositions. Capital letters.",
    size: 17,
    items: [
      { q: "1 — How old is Sara?", a: "Sara is seventeen years old.", why: "English says “I am seventeen years old”, using the verb “to be” — not “I have seventeen years”." },
      { q: "2 — How many days a week?", a: "She goes to school three days a week.", why: "The text lists Monday, Tuesday and Wednesday but never says “three”. You have to count them yourself." },
      { q: "3 — What time does school start?", a: "School starts at eight o'clock.", why: "A clock time takes AT. Copy the preposition from the text — it is already correct there." },
      { q: "4 — Which day does she not go?", a: "She does not go to school on Sunday.", why: "A day takes ON, and Sunday takes a capital letter." },
      { q: "5 — When is her birthday?", a: "Her birthday is in September.", why: "A month takes IN, and September takes a capital letter." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Read each answer, then the reason. Question 2 is the important one — it is inference, meaning the answer is not written directly in the text. Point that out.",
      tip: "Praise learners specifically for using the right preposition, not just for being right. It signals what you are measuring.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — at the shop", sub: "A longer text. Read it aloud twice.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 20, lsm: 1.4,
      text: "Abel has a shop in Merkato.\nThe shop opens at seven o'clock in the morning.\nIt closes at six o'clock in the evening.\nHe works six days a week.\nHe does not work on Sunday.\nToday a bag is eighty birr and a pen is fifteen birr.\nAbel says, “That is a good price.”" },
    side: { label: "New words here", color: C.read, size: 16, items: [
      "opens — starts the day",
      "closes — finishes the day",
      "morning — before midday",
      "evening — the end of the day",
      "Find the four numbers. Find the two prices. Find every preposition of time.",
    ] },
    notes: tn({
      time: "9 minutes.",
      how: "Teacher, chorus, individuals. Teach the four new words with gesture — open and close your hands, point at the window for morning and evening. Do not translate.",
      mistakes: "“Eighty” and “eighteen” both appear as risks here. Ask a learner to read the price line aloud and check the stress.",
      extra: "The four numbers are seven, six, six and the two prices. Ask learners to find them and say them aloud.",
      tip: "This text is about an adult with a business, not a child at school. Adult beginners need to see people like themselves in the material.",
      activity: "Learners write four sentences about a shop they know: when it opens, when it closes, which day it is closed, and one price.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — questions, answers and vocabulary review", sub: "Answer first, then check.",
    size: 17,
    items: [
      { q: "1 — What time does the shop open?", a: "It opens at seven o'clock in the morning.", why: "AT for the clock time, IN for the part of the day. Two different prepositions in one sentence." },
      { q: "2 — How many hours is the shop open?", a: "Eleven hours.", why: "From seven in the morning to six in the evening. You have to work this out — it is not written in the text." },
      { q: "3 — Which day is the shop closed?", a: "It is closed on Sunday.", why: "ON for a day, and Sunday takes a capital letter." },
      { q: "4 — How much are a bag and a pen together?", a: "Ninety-five birr.", why: "Eighty plus fifteen. Note: birr never takes an -s after a number." },
      { q: "5 — Vocabulary check: name the five words from this module.", a: "time · money · week · month · price", why: "All five appeared in this module. Three of them are in these two reading texts — find them again." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Questions 2 and 4 need arithmetic as well as reading. That is deliberate — it is exactly what a real shop conversation demands. Allow thinking time.",
      tip: "End by having the class say all five vocabulary words in chorus, then five individuals each use one in a sentence.",
    }),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — numbers in words", sub: "Write each number as a word. Watch the spelling.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write the word, not the figure. Check the hyphen and the spelling.",
    items: [
      "1.  13   ·   30",
      "2.  15   ·   50",
      "3.  40   ·   4",
      "4.  21   ·   99",
      "5.  100",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Do the first pair together on the board, showing both spellings side by side, then let them work alone.",
      mistakes: "“Fourty” for forty is the biggest trap — there is no “u”. Also “thirteen” has no “e” after thir, and “fifteen” is not “fiveteen”.",
      answers: "1 thirteen · thirty  ·  2 fifteen · fifty  ·  3 forty · four  ·  4 twenty-one · ninety-nine  ·  5 one hundred",
      tip: "Item 3 is the trap: four has a u, forty does not. Circle it on the board and leave it there.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write about your week", sub: "Copy the frame. Fill in your own information.",
    panelW: 7.6,
    panel: { label: "Copy this frame and complete it", color: C.write, tint: C.writeTint, size: 21, lsm: 1.6,
      text: "My name is ______________.\nI am ______ years old.\nI work on ______________.\nI start at ______ o'clock.\nMy birthday is in ______________." },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Capital letter at the start of every sentence?",
      "Capital letters on days and months?",
      "The right preposition: on a day, at a time, in a month?",
      "A full stop at the end of every sentence?",
      "Numbers spelled correctly?",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Write your own completed example on the board first and leave it there. Beginners need a model in front of them.",
      mistakes: "The three prepositions are the failure point. Expect “I work in Monday” and “I start on eight o'clock”. The checklist exists for exactly these.",
      extra: "Fast finishers add: “I finish at ______ o'clock.” and “I do not work on ______.”",
      tip: "Collect these and keep them. Give them back at the end of Level 1 — the visible difference is powerful.",
      activity: "Learners swap papers and use the five-point checklist to mark their partner's work.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write full sentences", sub: "Use numbers, times, days and prices.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write ONE full sentence for each. Check the preposition and the capital letters.",
    items: [
      "1.  Write a sentence about what time you wake up.",
      "2.  Write a sentence about which day you do not work or study.",
      "3.  Write a sentence with the price of something you bought.",
      "4.  Write a sentence about the month of your birthday.",
      "5.  Write a QUESTION asking someone the price of a bag.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Do the first one together on the board so the standard is clear, then let them work alone. Circulate and check prepositions as they write, not after.",
      mistakes: "Item 5 is the one they get wrong — many write it as a statement with a full stop, or use the wrong word order.",
      answers: "MODEL ANSWERS: 1 I wake up at six o'clock. · 2 I do not work on Sunday. · 3 The bag was eighty birr. · 4 My birthday is in September. · 5 How much is this bag?",
      tip: "Correct only prepositions, capitals, end marks and the module's numbers. Correcting everything discourages beginners into silence.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answers and why", sub: "Your sentences will be different. Check the rules, not the words.",
    size: 17,
    items: [
      { q: "1 — what time you wake up", a: "I wake up at six o'clock.", why: "AT for a clock time. Any hour is correct as long as the preposition is right." },
      { q: "2 — the day you do not work", a: "I do not work on Sunday.", why: "ON for a day, plus a capital S on Sunday. Two rules in one short sentence." },
      { q: "3 — the price of something", a: "The bag was eighty birr.", why: "No -s on birr after a number. “Was” is past — “is” is also acceptable at this level." },
      { q: "4 — your birthday month", a: "My birthday is in September.", why: "IN for a month, plus a capital S on September." },
      { q: "5 — a question about a price", a: "How much is this bag?", why: "The verb “is” comes before “this bag”, and the sentence ends with a question mark, never a full stop." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Make clear these are models, not the only right answers. Ask three learners to read their own sentence for item 3 — the variety shows the class that many answers are correct.",
      tip: "Mark against the four checks only. A learner who wrote “I wake up at five o'clock.” has succeeded completely.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist for this module", sub: "Use this with the three rules from Module 1.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "The right preposition of time", d: "AT a clock time · ON a day · IN a month. Check every one." },
      { t: "Capital letters on days and months", d: "Monday, Sunday, January, September — all capital." },
      { t: "Plural -s where it belongs — but never on birr", d: "“three books” yes. “fifty birrs” no." },
      { t: "Numbers spelled correctly", d: "forty (no u) · fifteen (not fiveteen) · thirteen (not threeteen)." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points, then have learners check their own writing from the previous slide against all four. Self-checking is a skill and must be taught.",
      tip: "Add this card to the one from Module 1. Refer to both by name — 'Check your seven points' — from now on.",
      activity: "Deliberate error hunt: write four sentences on the board containing exactly four errors, one of each type. Learners find all four.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. How many months are in the English year?", opts: "a) 12     b) 13     c) 7" },
      { q: "2. Which number is bigger?", opts: "a) fifteen     b) fifty     c) they are the same" },
      { q: "3. 7:30 in words is …", opts: "a) half past seven     b) half past eight     c) quarter past seven" },
      { q: "4. Complete: “The class starts ___ nine o'clock.”", opts: "a) in     b) on     c) at" },
      { q: "5. Which is correct?", opts: "a) It is fifty birrs.     b) It is fifty birr.     c) It is fiftys birr." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Let learners answer alone, then compare with a partner before you take answers. Comparing in pairs raises accuracy and lowers fear.",
      answers: "1 a (12) · 2 b (fifty) · 3 a (half past seven) · 4 c (at) · 5 b (It is fifty birr.)",
      tip: "Question 2 is the diagnostic. A learner who chooses c has not yet heard the stress difference and needs the drill again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Write the missing word.",
    color: C.green, instruction: "Copy each sentence and fill the gap.", size: 18,
    items: [
      "1.  I go to work ___ Monday.",
      "2.  The shop opens ___ seven o'clock.",
      "3.  My birthday is ___ July.",
      "4.  There are seven days in a ______.",
      "5.  How ______ is this bag?  —  It is forty birr.",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Items 1 to 3 test the prepositions, items 4 and 5 test the module vocabulary. Do item 1 together, then leave them to it.",
      answers: "1 on · 2 at · 3 in · 4 week · 5 much",
      mistakes: "Item 5 often comes back as “many”. Explain the difference quickly: HOW MANY for things you can count, HOW MUCH for money.",
      tip: "Items 1 to 3 are the whole preposition rule in three lines. If a learner gets all three right, they have understood it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Match the figure to the word, and the question to the answer.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the FIGURE to the WORD", opts: "1. 14     2. 40     3. 19     4. 90          a) ninety     b) fourteen     c) nineteen     d) forty" },
      { q: "Part 2 — match the QUESTION to the ANSWER", opts: "1. What time is it?     2. How much is it?     3. What day is it?     4. How many days in a week?" },
      { q: "a) It is Monday.        b) It is eighty birr.", opts: "c) There are seven.        d) It is half past three." },
      { q: "Part 3 — match the PREPOSITION to the time expression", opts: "1. at     2. on     3. in          a) Friday     b) six o'clock     c) December" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short matching tasks are better than one long one — learners get three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–b, 2–d, 3–c, 4–a.  ·  Part 2: 1–d, 2–b, 3–a, 4–c.  ·  Part 3: 1–b, 2–a, 3–c.",
      tip: "Part 1 is the teen/ty pair in written form. Learners who can do it on paper but not by ear need more listening, not more writing.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — put them in order", sub: "Order by size, by day and by month.",
    color: C.green, instruction: "Write each list in the correct order.", size: 19,
    items: [
      "1.  Smallest to biggest:  30, 13, 50, 15",
      "2.  Order the days:  Friday, Monday, Wednesday, Sunday",
      "3.  Order the months:  March, January, September, June",
      "4.  Order the times:  half past six, quarter past six, six o'clock, quarter to seven",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Item 4 is the hardest and the most useful — it makes learners think about what the time expressions actually mean rather than just translating them.",
      answers: "1  13, 15, 30, 50  ·  2  Monday, Wednesday, Friday, Sunday  ·  3  January, March, June, September  ·  4  six o'clock, quarter past six, half past six, quarter to seven",
      tip: "For item 4, draw a clock on the board and move the hand as learners call out the order. Seeing it move settles most arguments.",
      activity: "Human clock: four learners hold cards with the four times and arrange themselves in order at the front.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each sentence has one or more errors.",
    color: C.green, instruction: "Rewrite each sentence correctly.", size: 18,
    items: [
      "1.  I work in monday.",
      "2.  It is fifty birrs.",
      "3.  My birthday is on september.",
      "4.  The class starts on eight o'clock.",
      "5.  How much are this bag?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each sentence before they start. Sentences 1 and 3 have two each.",
      answers: "1 I work on Monday. (preposition + capital) · 2 It is fifty birr. (no -s on birr) · 3 My birthday is in September. (preposition + capital) · 4 The class starts at eight o'clock. (preposition) · 5 How much is this bag? (is, not are — one bag)",
      mistakes: "Sentence 5 is the singular/plural agreement. Learners who have just learned “are” for plurals over-apply it.",
      tip: "Have learners count the errors before correcting. Counting forces careful reading.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  There are seven days in a week.",
      "2.  “Thirteen” and “thirty” are the same number.",
      "3.  The English calendar has twelve months.",
      "4.  We say “at Monday”.",
      "5.  3:45 is “quarter to four”.",
      "6.  English phone numbers are said digit by digit.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "The instruction to correct every false statement is what makes this teach rather than just test. Do not accept bare T or F.",
      answers: "1 T · 2 F — thirteen is 13 and thirty is 30 · 3 T · 4 F — we say “on Monday” · 5 T · 6 T",
      tip: "Item 5 catches many learners because 3:45 shows a three. If several get it wrong, redraw the clock and count backwards from four.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Answer in a full sentence.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  How old are you?",
      "2.  What time do you wake up?",
      "3.  Which days do you work or study?",
      "4.  When is your birthday?",
      "5.  How much is a bottle of water where you live?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Every answer will be different. Personal answers are remembered; invented ones are not.",
      answers: "1 I am ___ years old. · 2 I wake up at ___ o'clock. · 3 I work on ___ and ___. · 4 My birthday is in ___. · 5 It is ___ birr.",
      mistakes: "Question 1 often comes out as “I have twenty years” by translation. English uses the verb “to be” for age.",
      tip: "Ask three learners to read their answers aloud. Real classmates' answers are more useful than any model sentence.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Count from 1 to 20 without stopping.",
      "2.  Say these five numbers clearly:  13 · 30 · 15 · 50 · 19",
      "3.  Say five times:  7:00 · 9:30 · 11:15 · 4:45 · 12:00",
      "4.  Ask your partner three questions using “How much”, “What time” and “What day”.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Give each pair a listening job: for task 2, the partner writes down the figures they hear and checks them against the slide. That makes the stress difference measurable, not just felt.",
      answers: "SUCCESS CRITERIA: 1 completed in under 20 seconds · 2 partner writes all five figures correctly · 3 all five times in full sentences · 4 three grammatically correct questions.",
      tip: "Task 2 is the module in miniature. A learner whose partner writes all five correctly has mastered the key skill.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These use everything from this module.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write a sentence with a time, a day AND a price in it.", opts: "Three prepositions to think about." },
      { q: "2. The shop opens at 8:00 and closes at 5:30. How long is it open?", opts: "Answer in a full sentence." },
      { q: "3. You buy two things: 45 birr and 30 birr. How much is that?", opts: "Say the total in words." },
      { q: "4. Correct this and explain each change:  “i work in monday and my birthday is on june”", opts: "There are five things to fix." },
      { q: "5. Someone says a price and you are not sure if it was 15 or 50. Write TWO things you could say.", opts: "Use the phrases from the Conversation section." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard. Discuss the reasoning, not just the answers.",
      answers: "1 e.g. “I start work at eight o'clock on Monday and the bus costs ten birr.” 2 It is open for nine and a half hours. 3 Seventy-five birr. 4 “I work on Monday and my birthday is in June.” — capital I, “on” not “in” for the day, capital M on Monday, “in” not “on” for the month, capital J on June, plus a full stop. 5 “Fifteen or fifty?” and “Can you write it, please?”",
      tip: "Question 2 needs real arithmetic across the half hour. Draw it on a clock if learners stall.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why is the difference between 13 and 30 more important than most pronunciation mistakes?", opts: "Think about what happens in a shop." },
      { q: "2. Someone says “Meet me at three o'clock.” What should you ask before you agree?", opts: "Think about the two clocks." },
      { q: "3. Why do you think English says phone numbers digit by digit?", opts: "Compare “oh nine one two” with “nine hundred and twelve”." },
      { q: "4. Your friend writes “fifty birrs”. Explain the mistake in a way they will remember.", opts: "How would you teach it?" },
    ],
    notes: tn({
      time: "12 minutes. This is discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning if a learner cannot yet express it in English — the thinking matters more than the language here. Then give them the English phrase for what they said.",
      answers: "1 Because it changes the amount of money, so the mistake has a real cost — most other errors are still understood from context. 2 “Ethiopian time or English time?” — the same words mean two different moments. 3 Because single digits are short, clear and hard to mishear, while large numbers are easily confused. 4 Any clear explanation is fine; the strongest is that currency stays singular after a number in English, like “fifty birr”, and giving three more examples aloud.",
      tip: "Question 4 asks learners to teach, which is the strongest test of understanding there is. Give it real time.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  const QUIZ = [
    { part: "Part 1 · Numbers", items: [
      { q: "1. Write 47 in words.", opts: "Careful with the spelling." },
      { q: "2. Which is 50?", opts: "a) fifteen     b) fifty     c) five" },
      { q: "3. Which number has the stress at the END?", opts: "a) THIR-ty     b) thir-TEEN     c) both" },
      { q: "4. Say this phone number in English:  0911 234 567", opts: "Write how you would say it." },
    ] },
    { part: "Part 2 · Time", items: [
      { q: "5. Write 4:30 in words.", opts: "Use the “half past” pattern." },
      { q: "6. Write 9:45 in words.", opts: "Careful — which hour do you name?" },
      { q: "7. Complete: “The bus leaves ___ six o'clock.”", opts: "a) in     b) on     c) at" },
      { q: "8. Ethiopian 3 o'clock is what time in English?", opts: "a) 3 in the afternoon     b) 9 in the morning     c) the same" },
    ] },
    { part: "Part 3 · Days, months and prepositions", items: [
      { q: "9. How many months are in the English year?", opts: "a) 12     b) 13     c) 7" },
      { q: "10. Complete: “I do not work ___ Sunday.”", opts: "a) in     b) on     c) at" },
      { q: "11. Complete: “My birthday is ___ August.”", opts: "a) in     b) on     c) at" },
      { q: "12. Correct this: “i work on monday.”", opts: "Write the whole sentence correctly." },
    ] },
    { part: "Part 4 · Money and listening", items: [
      { q: "13. Which is correct?", opts: "a) It is thirty birrs.     b) It is thirty birr.     c) It is thirtys birr." },
      { q: "14. How do you ask the price of one bag?", opts: "Write the full question." },
      { q: "15. Your teacher says “fifteen”. Write the figure.", opts: "Listen for the stress." },
      { q: "16. Your teacher says “ninety”. Write the figure.", opts: "Listen for the stress." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write a sentence about what time you start work or school.", opts: "Check the preposition." },
      { q: "18. Write a sentence about the month of your birthday.", opts: "Check the preposition and the capital letter." },
      { q: "19. Add up: 45 birr + 30 birr. Write the answer in words.", opts: "Then say it aloud." },
      { q: "20. SPEAKING: say the time now, today's day, and one price.", opts: "Your teacher or partner listens and checks." },
    ] },
  ];
  QUIZ.forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 2 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: tn({
        time: "4 minutes per quiz slide, 20 minutes for the whole quiz.",
        how: "Run the whole quiz before showing any answers. Questions 15 and 16 are read aloud by you — say them once each, at natural speed, with natural stress. Question 20 is spoken.",
        tip: "Pass mark is 16 out of 20. A learner below that should redo Exercises A to F, not repeat the whole module.",
        mistakes: "Do not let learners mark their own paper before the answer key. Collect the papers or have them swap.",
      }),
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  const KEY = [
    [ { q: "Q1 — 47 in words", a: "forty-seven", why: "Tens first, then units, joined with a hyphen. “Forty” has no “u” — unlike “four”." },
      { q: "Q2 — which is 50?", a: "b) fifty", why: "FIF-ty has the stress at the start. “Fifteen” is 15 and “five” is 5." },
      { q: "Q3 — stress at the end?", a: "b) thir-TEEN", why: "The -teen numbers stress the second syllable; the -ty numbers stress the first. This is the only reliable difference." },
      { q: "Q4 — the phone number", a: "“oh nine one one, two three four, five six seven”", why: "Digit by digit, with “oh” for zero and a pause between groups. Never as whole numbers." } ],
    [ { q: "Q5 — 4:30 in words", a: "half past four", why: "Half past means thirty minutes after the hour that has already passed — four, not five." },
      { q: "Q6 — 9:45 in words", a: "quarter to ten", why: "After half past you look forward to the NEXT hour. 9:45 is fifteen minutes before ten." },
      { q: "Q7 — “The bus leaves ___ six o'clock.”", a: "c) at", why: "A clock time always takes AT. Think small: AT is the smallest of the three time words." },
      { q: "Q8 — Ethiopian 3 o'clock", a: "b) 9 in the morning", why: "The Ethiopian clock starts at dawn, so it runs six hours ahead of the English clock. Always say which system you mean." } ],
    [ { q: "Q9 — months in the English year", a: "a) 12", why: "The Ethiopian calendar has thirteen months. The English calendar has twelve. Learn the English months as separate words." },
      { q: "Q10 — “I do not work ___ Sunday.”", a: "b) on", why: "Days of the week always take ON. Sunday also takes a capital letter." },
      { q: "Q11 — “My birthday is ___ August.”", a: "a) in", why: "Months always take IN. Think big: IN covers the largest period of the three." },
      { q: "Q12 — correct “i work on monday.”", a: "I work on Monday.", why: "Two capitals: I is always capital, and Monday is a day of the week." } ],
    [ { q: "Q13 — which is correct?", a: "b) It is thirty birr.", why: "Currency does not take -s after a number. Never “birrs”." },
      { q: "Q14 — asking the price of one bag", a: "How much is this bag?  (or: How much is it?)", why: "“Is” comes before “this bag”, and the sentence ends with a question mark." },
      { q: "Q15 — “fifteen”", a: "15", why: "Stress at the end: fif-TEEN. If you wrote 50 you placed the stress wrongly." },
      { q: "Q16 — “ninety”", a: "90", why: "Stress at the start: NINE-ty. If you wrote 19 you placed the stress wrongly." } ],
    [ { q: "Q17 — what time you start", a: "e.g. “I start work at eight o'clock.”", why: "Any time is correct if the preposition is AT and the sentence has a capital and a full stop." },
      { q: "Q18 — your birthday month", a: "e.g. “My birthday is in April.”", why: "IN for a month, plus a capital letter on the month name." },
      { q: "Q19 — 45 + 30", a: "seventy-five birr", why: "Add the figures, then write the word with a hyphen. No -s on birr." },
      { q: "Q20 — speaking task", a: "Time · day · price, all said clearly", why: "Marked on being understood. The price must be unmistakably a -teen or a -ty number." } ],
  ];
  KEY.forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: tn({
        time: "4 minutes per slide.",
        how: "Read the answer, then the WHY aloud. Ask learners to raise a hand for each one they got wrong — you are collecting data on what to re-teach. Say so.",
        tip: "Q3, Q15 and Q16 are the diagnostic ones. If the class failed those, the stress drill needs another lesson before Module 3. Q7, Q10 and Q11 together tell you whether the prepositions have landed.",
        mistakes: "Do not simply read the answers and move on. A learner who hears only “b” learns nothing.",
      }),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day is better than one hour on Sunday.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Count 1 to 100 out loud", d: "In tens first, then every number from 1 to 30." },
      { t: "Say the days and months", d: "Seven days in order, twelve months in order. Out loud." },
      { t: "Practise the teen/ty pairs", d: "13/30 · 14/40 · 15/50 · 16/60. Five times each, clapping the stress." },
      { t: "Say the time five times during the day", d: "Every time you look at a clock, say the time in English." },
      { t: "Ask one real price in English", d: "In a shop, at a kiosk, anywhere. Then write down what you paid." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Write the homework on the board as well as on the slide, and say the due date. Beginners forget verbal instructions.",
      tip: "Friday's task takes the language outside the classroom. Ask about it at the start of the next lesson — learners who know you will ask are far more likely to do it.",
      activity: "Ask learners to send one classmate a time or a price in English each evening by message.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write the numbers 1 to 20 in words", d: "Then write the tens: 20, 30, 40 … 100. Check the spelling of forty and fifteen." },
      { t: "Write six sentences about your week", d: "Use: I am ___ years old · I work on ___ · I start at ___ · My birthday is in ___ · plus two of your own. Check your seven points before handing it in." },
      { t: "Record your 40-second speaking challenge", d: "Time · day and month · count 10 to 20 · your phone number · one price. Send it to your teacher, or perform it live." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Show your own completed example of task 2 so the standard is visible. Say clearly that task 3 is required — the recording is the main assessment of this module.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly so nobody has to ask.",
      tip: "Reply to every recording personally, by voice, within two days. Listen specifically for the teen/ty numbers and name one thing they did well.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaCheck", title: "Numbers in words — 5 marks", desc: "1 to 20 correct (3) · the tens to 100 correct (1) · forty and fifteen spelled correctly (1)." },
      { icon: "FaPencilAlt", title: "Six sentences — 10 marks", desc: "Six sentences written (4) · correct preposition each time (3) · capitals on days and months (2) · full stops (1)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five steps present (4) · phone number written correctly by the listener (3) · the price unmistakably -teen or -ty (3)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework, not after. Learners who know what is measured produce better work and the marking becomes uncontroversial.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Mark only what has been taught in Modules 1 and 2. Marking everything teaches learners that English is impossible.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaHashtag", title: "Numbers 1 to 100", desc: "Ones, teens, tens, and how to join them: twenty-one, forty-seven, ninety-nine." },
      { icon: "FaVolumeUp", title: "The teen/ty stress", desc: "thirTEEN and THIRty. The most valuable sound difference in this module." },
      { icon: "FaCalendarAlt", title: "7 days · 12 months", desc: "All with capital letters. The English year has twelve months, not thirteen." },
      { icon: "FaClock", title: "Telling the time", desc: "o'clock · half past · quarter past · quarter to — plus the Ethiopian clock difference." },
      { icon: "FaMoneyBillWave", title: "Money and prices", desc: "“How much is it?”  “It is forty birr.”  Never “birrs”." },
      { icon: "FaSitemap", title: "at · on · in", desc: "AT a clock time · ON a day · IN a month. Small, bigger, biggest." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2, the objectives, and read them again. Ask the same question you asked at the start: 'Can you do this now?' The change in the room is the point of the slide.",
      tip: "Ask each learner to name the one thing they found hardest. That list is your plan for the first ten minutes of the next lesson.",
      activity: "Quick-fire recap: point at each of the six cards and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaLanguage", title: "The five words", desc: "time  /taɪm/     ·     money  /ˈmʌni/\nweek  /wiːk/     ·     month  /mʌnθ/\nprice  /praɪs/" },
      { icon: "FaComments", title: "The six phrases", desc: "“How much is it?”  ·  “What time is it?”  ·  “That is expensive.”  ·  “Can you write it, please?”  ·  “Thirteen or thirty?”  ·  “What is your phone number?”" },
      { icon: "FaSitemap", title: "The prepositions of time", desc: "AT six o'clock  (a clock time)\nON Monday  (a day)\nIN September  (a month)" },
      { icon: "FaClock", title: "The four time patterns", desc: "3:00  →  three o'clock\n3:15  →  quarter past three\n3:30  →  half past three\n3:45  →  quarter to four" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it. This is the reference page for numbers, time and money for the rest of the course.",
      tip: "Print this as an A4 poster next to the Module 1 poster. You will point at both for the next two months.",
      activity: "Cover each box in turn and ask the class to say what was in it. Recall, not recognition.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now buy something, ask the time and give your phone number — in English.",
    sub: "That is a real transaction, done entirely in a second language. Two modules ago you could not read a single English word.\nUse it today. Ask one real price in English before the next lesson.",
    chips: ["NEXT — Module 3", "Greetings & Introductions", "Meet someone · say who you are · start a conversation"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the achievement specifically: they can complete a market transaction in English. That is a concrete, checkable, real-world skill, and specific praise is believable in a way that general praise is not.",
      tip: "Set the challenge out loud: everyone asks one real price in English before the next lesson, and reports back. Then actually ask about it — a challenge nobody follows up on is not a challenge.",
      activity: "Ask each learner to say one number, one time or one price to the person next to them before leaving. Everyone ends the module speaking English out loud.",
    }),
  });
};
