"use strict";
/* LEVEL 4 · MODULE 1 — Natural & Connected Speech   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 4", levelNo: LV.no, levelName: "Advanced Spoken\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Natural & Connected Speech",
    sub: "You are already understood. This level is about sounding like somebody who lives in the language — and that starts with what happens BETWEEN the words.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "B1 → B2", v: "LEVEL 4 BEGINS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by naming what changes at Level 4. Levels 1 to 3 built the language. This level is about how it is delivered — rhythm, register, argument and presence. Nothing here is about being understood; that was solved already.",
      tip: "Some learners will feel Level 4 is a luxury. It is not: at B2 the remaining barriers are almost entirely delivery, and delivery is what people judge in interviews, meetings and negotiations.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. None of them is new grammar.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Hear and produce connected speech", d: "Words join, sounds disappear, sounds change. All of it is systematic." },
      { t: "Use weak forms so your rhythm sounds English", d: "The small words almost vanish. That is what makes the beat." },
      { t: "Break speech into thought groups", d: "Where you pause is what makes you easy or hard to follow." },
      { t: "Use discourse markers like a native speaker", d: "“Right…” “Look…” “I mean…” “Anyway…” Each one does a job." },
      { t: "Know what to change — and what to leave alone", d: "Accent is not the target. Intelligibility and rhythm are." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 5 matters most and should be said early. This module is not about losing an Ethiopian accent, and learners deserve to hear that in the first three minutes.",
      tip: "Objective 1 is as much a listening skill as a speaking one. Learners who can produce connected speech suddenly start hearing it.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what still makes you sound foreign?", sub: "Not a criticism. A diagnosis.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaVolumeUp", title: "1 · Say it fast", desc: "“What are you going to do about it?”\nSay it at full natural speed. How many words did you keep?" },
      { icon: "FaHeadphones", title: "2 · Films", desc: "Can you follow an English film without subtitles? Where exactly does it break down?" },
      { icon: "FaComments", title: "3 · Being asked to repeat", desc: "Do people still ask you to repeat? On which kinds of word?" },
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Task 1 is the diagnostic. Most learners produce all nine words separately and clearly, which is exactly what makes it sound non-native. The natural version is closer to “Whatcha gonna do about it?”",
      mistakes: "Correct nothing. Note whether the class separates every word — that habit is the whole subject of this module.",
      tip: "Task 2 answers usually say “fast dialogue” or “when they mumble”. They are not mumbling; they are using connected speech, and slide 6 explains it.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Clear English is not English with every word pronounced separately.",
    sub: "Native speakers join words, drop sounds and change sounds — constantly, in every sentence, without noticing.\nSpeaking every word fully and separately is what marks you out, not what makes you clear.",
    chips: ["Join", "Drop", "Change"],
    notes: tn({
      time: "7 minutes.",
      how: "This reverses a belief learners have held since Level 1, where clear separate pronunciation was correctly the goal. Say the reversal explicitly or it feels like the rules have changed without warning.",
      mistakes: "Learners think connected speech is lazy or careless. It is neither. It is systematic, rule-governed, and used by every educated native speaker in every register.",
      extra: "Careful separated speech is what native speakers use for dictation, for a bad phone line, or when talking to someone they think will not understand. That last one is why it matters.",
      tip: "The three words on the chips — join, drop, change — are the whole module. Everything after this slide is detail.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.grid({
    sec: SEC.con, title: "The three things that happen between words", sub: "All three are systematic. None of them is careless.",
    cols: 3, color: C.green, titleSize: 20, descSize: 15.5, shadow: true, tint: C.white,
    items: [
      { icon: "FaLink", title: "1 · LINKING", desc: "Words JOIN together.\n\n“an apple” → “a-napple”\n“turn it off” → “tur-ni-toff”\n\nNothing is lost. It is joined." },
      { icon: "FaEraser", title: "2 · ELISION", desc: "Sounds DISAPPEAR.\n\n“next day” → “nex' day”\n“I don't know” → “I dunno”\n\nA sound is genuinely dropped." },
      { icon: "FaExchangeAlt", title: "3 · ASSIMILATION", desc: "Sounds CHANGE.\n\n“don't you” → “doncha”\n“would you” → “wouldja”\n\nTwo sounds become a new one." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Demonstrate each one three times: the careful version, then the natural version, then the careful version again. The contrast is what teaches, not the explanation.",
      mistakes: "Learners hear all three as one phenomenon — “fast speech”. Separating them makes each one learnable and predictable.",
      extra: "Linking is the most useful to produce; assimilation is the most useful to recognise. Prioritise accordingly if time is short.",
      tip: "None of these is optional or informal. They occur in news broadcasts, lectures and job interviews at exactly the same rate.",
      activity: "Three columns: give fifteen phrases and have learners sort each into linking, elision or assimilation.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — linking
  L.panelSide({
    sec: SEC.con, title: "Linking — three rules that cover almost everything", sub: "This is the one to produce, not just to recognise.",
    panelW: 6.8,
    panel: { label: "The three linking rules", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "1.  CONSONANT  →  VOWEL\n     “an apple”  →  “a-napple”\n     “turn it off”  →  “tur-ni-toff”\n\n2.  VOWEL  →  VOWEL   (add /w/ or /j/)\n     “go on”  →  “go-won”\n     “I am”  →  “I-yam”\n\n3.  SAME CONSONANT  →  say it ONCE, longer\n     “big game”  →  “bi-game”\n     “stop pushing”  →  “sto-pushing”" },
    side: { label: "Why this one matters most", color: C.green, size: 16, items: [
      "Rule 1 alone changes how a whole sentence sounds.",
      "It is the difference between “a napple” and “an … apple”.",
      "English is a language of syllables, not of words. The joins are where the rhythm lives.",
      "Produce it and you will start hearing it. The mouth teaches the ear.",
    ] },
    notes: tn({
      time: "16 minutes. The most important slide in the module.",
      how: "Drill rule 1 hardest. Write phrases with the linking marked — “tur_ni_toff” — and have the class chorus them. Seeing the join written down is what makes it producible.",
      mistakes: "Learners insert a small pause or a glottal stop between words. That pause is precisely what marks non-native speech in English.",
      extra: "Rule 3 surprises people: “big game” has one /g/, not two. Doubling the consonant sounds strange to a native ear.",
      tip: "The last side-panel point is the method for the whole module: producing connected speech is what makes you able to hear it.",
      activity: "Mark the links: give ten sentences and have learners draw the linking marks before saying each aloud.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — elision
  L.table({
    sec: SEC.con, title: "Elision — the sounds that disappear",
    sub: "Mostly /t/ and /d/, and mostly between two consonants.",
    table: {
      color: C.green, rowH: 0.48, fontSize: 17, headSize: 16, colW: [3.4, 3.8, 4.933],
      rows: [
        ["Written", "Actually said", "What disappeared"],
        ["next day", "“nex' day”", "the /t/, between two consonants"],
        ["last night", "“las' night”", "the /t/"],
        ["I don't know", "“I dunno”", "the /t/ and most of the vowel"],
        ["friends", "“frens”", "the /d/"],
        ["comfortable", "“comf-ta-ble”", "a whole syllable"],
      ],
    },
    note: "The /t/ and /d/ vanish when a consonant comes before AND after. “Next day” has three consonants in a row — English will not say all three.",
    notes: tn({
      time: "14 minutes.",
      how: "The rule in the note is genuinely predictive. Once learners know it, they can guess where elision happens in words they have never heard.",
      mistakes: "Learners pronounce the /t/ carefully to be clear. It makes them harder to follow, because the listener is expecting the elided form.",
      extra: "This is why “I don't know” sounds like three syllables and not four. The most frequent phrases elide the most.",
      tip: "Connect back to Level 3 Module 2's “comfortable”. That was taught as one exception; it is actually an example of a general rule.",
      activity: "Predict it: give twelve phrases with consonant clusters and have learners predict which sound will drop.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — weak forms
  L.compare({
    sec: SEC.con, title: "Weak forms — where English rhythm actually comes from",
    sub: "The small words almost disappear. That is the beat.",
    left: { h: "Written — all words equal", items: ["I can do it.", "a cup of tea", "fish and chips", "I was going to ask.", "Where have you been?", "→ Nine full words."] },
    right: { h: "Said — small words weak", items: ["“I c'n do it.”", "“a cup-a tea”", "“fish 'n' chips”", "“I w'z gonna ask.”", "“Where'v you bin?”", "→ The strong words carry the beat."] },
    note: "can · of · and · was · to · have · for · at.  These NEVER get their full sound in normal speech unless you are stressing them deliberately.",
    notes: tn({
      time: "16 minutes.",
      how: "This is the Level 2 Module 7 strong-word idea, now from the production side. Learners have been listening for strong words; now they must weaken the others themselves.",
      mistakes: "Giving every word its full value. It produces a flat, even rhythm that is intelligible but immediately marks the speaker as non-native.",
      extra: "The contrast pair to demonstrate: “I CAN do it” (stressed, meaning I am able) versus “I c'n do it” (normal, unstressed). The strong form carries emphasis.",
      tip: "Weak forms are the single biggest contributor to English rhythm. More than speed, more than intonation, more than accent.",
      activity: "Weaken them: give ten sentences and have learners say each twice — all-strong, then with correct weak forms.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — thought groups
  L.panelSide({
    sec: SEC.con, title: "Thought groups — where you pause decides everything", sub: "Not how often you pause. Where.",
    panelW: 6.8,
    panel: { label: "Same words, different meaning", color: C.green, tint: C.readTint, size: 17, lsm: 1.4,
      text: "“The manager said  /  the report is late.”\n     →  the manager said it\n\n“The manager,  /  said the report,  /  is late.”\n     →  the report said it\n\nSame nine words.\nThe PAUSES carry the meaning." },
    side: { label: "How to group", color: C.green, size: 16, items: [
      "One idea per group. Usually 3 to 7 words.",
      "Never break inside a phrase: not “the / manager said”.",
      "The last stressed word of each group carries the tune.",
      "A pause is also a gift to the listener — it gives them time to process.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The panel example is genuinely ambiguous and the pause alone resolves it. Say both versions aloud and let the class hear the meaning flip.",
      mistakes: "Pausing where you run out of plan rather than where the idea ends. That is the Level 3 Module 1 point, now with a name and a rule.",
      extra: "Thought groups are also how listeners chunk what they hear. Grouping badly makes you hard to follow even when every word is correct.",
      tip: "The last side-panel point is worth saying: pausing is generous, not hesitant. Fluent speakers pause about 20% of the time.",
      activity: "Mark the groups: give a paragraph and have learners mark the thought-group boundaries, then read it aloud.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — what not to change
  L.compare({
    sec: SEC.con, title: "What to change — and what to leave alone",
    sub: "An honest slide. Not everything about your English needs fixing.",
    left: { h: "Worth working on", items: ["Weak forms and rhythm", "Linking between words", "Word stress on long words", "Thought groups and pausing", "The six target sounds from Level 1", "→ These affect UNDERSTANDING."] },
    right: { h: "Leave it alone", items: ["Your accent", "Sounding “British” or “American”", "Copying idioms you would not use", "Speaking faster than you think", "→ These affect NOTHING that matters.", "→ Your accent is not a defect."] },
    note: "The goal is intelligibility and rhythm, not the removal of your accent. Millions of people speak excellent English with an Ethiopian accent, and always will.",
    notes: tn({
      time: "14 minutes.",
      how: "Say the note plainly and early. Some learners arrive at Level 4 believing the goal is to sound British, and that belief is both unachievable and unnecessary.",
      mistakes: "Chasing accent removal wastes years and produces anxiety. Chasing rhythm and linking produces audible results in weeks.",
      extra: "Research on intelligibility is consistent: word stress, rhythm and sound contrasts matter; accent does not, once those are in place.",
      tip: "This slide protects learners from bad advice they will meet elsewhere. It is worth the full fourteen minutes.",
      activity: "Sort it: give twelve features of a learner's English and have the class sort them into the two columns.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "roughly", ipa: "/ˈrʌfli/", pos: "adverb", icon: "FaPercent",
      meaning: "Approximately. Used constantly in spoken English.",
      example: "Roughly forty people came. It takes roughly two hours.",
      mistake: "In speech, “roughly” and “about” are far more natural than “approximately”. Save the long word for writing.",
      notes: tn({ time: "7 minutes.",
        how: "This is the Level 3 Module 6 point in reverse: spoken English prefers the short word. “Approximately” in conversation sounds like a written report read aloud.",
        mistakes: "The vowel is /ʌ/ as in “cup”, not /ɒ/. And the “gh” is silent — ROUGH-ly, two syllables.",
        extra: "The spoken family: roughly · about · around · give or take · more or less.",
        tip: "“Give or take” is worth teaching here: “two hours, give or take”. It is very natural and learners never produce it.",
        activity: "Round it: give ten exact figures and have learners approximate each using a different hedge." }) },

    { word: "apparently", ipa: "/əˈpærəntli/", pos: "adverb", icon: "FaEye",
      meaning: "I have heard this, but I am not confirming it myself.",
      example: "Apparently they're closing the office. He's apparently leaving in March.",
      mistake: "It distances you from the claim. Do not use it for something you know first-hand — that sounds evasive.",
      notes: tn({ time: "8 minutes.",
        how: "This word does social work, not just semantic work. It reports information while declining responsibility for it, which is exactly what conversation often needs.",
        mistakes: "Using it about your own knowledge. “Apparently I finished it” is odd unless you are being ironic.",
        extra: "Four syllables, stress on the second: a-PPAR-ent-ly. The last two are very weak.",
        tip: "Compare with “supposedly”, which adds doubt, and “evidently”, which adds confidence. Three words, three degrees of commitment.",
        activity: "Whose claim? Give ten statements and have learners decide whether “apparently” fits each." }) },

    { word: "basically", ipa: "/ˈbeɪsɪkli/", pos: "adverb", icon: "FaLayerGroup",
      meaning: "In simple terms, leaving out the detail.",
      example: "Basically, we ran out of time. It's basically the same system.",
      mistake: "Very over-used in real speech. One per conversation is natural; one per sentence is a verbal tic.",
      notes: tn({ time: "7 minutes.",
        how: "Teach the word and the warning together. It is genuinely useful for signalling a simplification, and it is the most over-used discourse marker in English.",
        mistakes: "Using it as a filler with no simplifying function at all. That is what makes it grating.",
        extra: "Alternatives that do the same job: “in short”, “put simply”, “the short version is”.",
        tip: "Record a learner speaking for two minutes and count the “basicallys”. It is usually a surprise.",
        activity: "Count the tic: pairs count each other's filler words over a two-minute turn." }) },

    { word: "presumably", ipa: "/prɪˈzjuːməbli/", pos: "adverb", icon: "FaLightbulb",
      meaning: "I assume this is true, based on what I know.",
      example: "Presumably they'll send it tomorrow. He's presumably still in Adama.",
      mistake: "Four syllables with a tricky cluster: pre-ZUME-ab-ly. It marks an assumption, not a fact.",
      notes: tn({ time: "8 minutes.",
        how: "This is a genuinely B2 word and learners rarely produce it. It marks reasoning rather than knowledge, which is a distinction advanced speakers make constantly.",
        mistakes: "The /zj/ cluster in the middle. Build it slowly: sume → zume → presume → presumably.",
        extra: "The certainty scale from Level 3, extended: definitely · presumably · probably · apparently · possibly · supposedly.",
        tip: "It is very useful in discussion and debate — Modules 2 and 3 — because it signals an inference rather than a claim.",
        activity: "Fact or assumption: give twelve statements and have learners mark each and add the right adverb." }) },

    { word: "arguably", ipa: "/ˈɑːɡjuəbli/", pos: "adverb", icon: "FaBalanceScale",
      meaning: "You could reasonably argue this. It signals an opinion you are prepared to defend.",
      example: "It's arguably the best solution. Arguably, we should have started earlier.",
      mistake: "Stress on the FIRST syllable: AR-gu-ably. It signals a defensible opinion, not a fact.",
      notes: tn({ time: "8 minutes.",
        how: "This is the most sophisticated word in the set and it points directly at Module 2. It stakes a claim while acknowledging that others might disagree.",
        mistakes: "Learners avoid it and state opinions flatly instead, which sounds more aggressive than they intend.",
        extra: "Compare: “It IS the best solution” (a claim) versus “It's arguably the best solution” (a defensible position). The second invites discussion.",
        tip: "Together, these five adverbs are the vocabulary of careful argument. They are what Module 2 is built on.",
        activity: "Five adverbs: give ten statements and have learners restate each with the most appropriate of the five." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Speech Language 1 of 5" }),
    title: "The weak forms you must know",
    sub: "Eight function words. They almost never get their full sound.",
    table: {
      color: C.gram, rowH: 0.44, fontSize: 17, headSize: 16, colW: [2.6, 3.4, 6.133],
      rows: [
        ["Word", "Weak form", "Example"],
        ["to", "/tə/", "“I want to go”  →  “I wanna go”"],
        ["of", "/əv/  or  /ə/", "“a cup of tea”  →  “a cup-a tea”"],
        ["and", "/ən/  or  /n/", "“fish and chips”  →  “fish 'n' chips”"],
        ["can", "/kən/", "“I can do it”  →  “I c'n do it”"],
        ["was", "/wəz/", "“I was going”  →  “I w'z going”"],
        ["have", "/həv/  or  /əv/", "“I have been”  →  “I've bin”"],
      ],
    },
    note: "Every weak form uses the SCHWA /ə/. It is the most common sound in English and it appears only in unstressed positions.",
    notes: tn({
      time: "15 minutes.",
      how: "The schwa is the unifying fact. Once learners hear that all six weak forms use the same lazy central vowel, the pattern becomes one rule rather than six.",
      mistakes: "Pronouncing “to” as /tuː/ everywhere. It only takes the full sound when stressed or at the end of a sentence.",
      extra: "Strong forms return when the word is stressed: “I DO want to” or “What are you looking AT?” at the end of a clause.",
      tip: "This connects to the Level 3 Module 2 schwa work. There it was inside words; here it is between them.",
      activity: "Schwa hunt: read a paragraph and have learners mark every schwa in the function words.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Speech Language 2 of 5" }),
    title: "Assimilation — when two sounds become a new one",
    sub: "Mostly /t/ and /d/ meeting /j/. Recognise it; you need not produce it.",
    table: {
      color: C.gram, rowH: 0.48, fontSize: 17, headSize: 16, colW: [3.6, 3.8, 4.733],
      rows: [
        ["Written", "Said", "What happened"],
        ["don't you", "“doncha”", "/t/ + /j/  →  /tʃ/"],
        ["would you", "“wouldja”", "/d/ + /j/  →  /dʒ/"],
        ["did you", "“didja”", "/d/ + /j/  →  /dʒ/"],
        ["what you", "“whatcha”", "/t/ + /j/  →  /tʃ/"],
        ["ten pounds", "“tem pounds”", "/n/ becomes /m/ before /p/"],
      ],
    },
    note: "You do NOT have to produce these. But if you cannot recognise them, half of natural conversation will sound like unknown words.",
    notes: tn({
      time: "14 minutes.",
      how: "Frame it as a listening priority. Production is optional; recognition is not, because these forms are everywhere in real speech.",
      mistakes: "Learners hear “didja” and search their vocabulary for an unknown word. Naming the pattern removes that confusion permanently.",
      extra: "The last row is different: it is the tongue moving early towards the /p/. Same mechanism, different sounds.",
      tip: "Say the written form and the spoken form back to back, ten times. Learners find it funny, and the recognition sticks.",
      activity: "Decode it: say twelve assimilated phrases and have learners write the full written form.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Speech Language 3 of 5" }),
    title: "Discourse markers — the traffic signals of conversation",
    sub: "Each one tells the listener what is coming next.",
    table: {
      color: C.gram, rowH: 0.44, fontSize: 17, headSize: 16, colW: [2.6, 4.2, 5.333],
      rows: [
        ["Marker", "It signals", "Example"],
        ["Right, …", "let's start / let's move on", "“Right, shall we begin?”"],
        ["Look, …", "I am about to be direct", "“Look, it isn't going to work.”"],
        ["Actually, …", "a correction or a surprise", "“Actually, I disagree.”"],
        ["I mean, …", "I am about to explain or repair", "“I mean, it's not far.”"],
        ["Anyway, …", "back to the main point", "“Anyway, as I was saying…”"],
        ["Mind you, …", "a qualification of what I just said", "“Mind you, it was cheap.”"],
      ],
    },
    note: "“Look” is stronger than learners expect — it signals impatience or firmness. Use it deliberately, not as a filler.",
    notes: tn({
      time: "15 minutes.",
      how: "These extend the Level 3 Module 1 chunks into genuinely native-sounding territory. “Mind you” in particular marks a very advanced speaker.",
      mistakes: "Using “Look” casually. It carries force, and used carelessly it sounds confrontational.",
      extra: "“Mind you” is the most sophisticated of the six. It adds a qualification that partly contradicts what you just said, and native speakers use it constantly.",
      tip: "Teach the force of each marker, not just the meaning. Getting the force wrong is a social error rather than a language one.",
      activity: "Which marker: give twelve conversational moments and have learners choose the right marker for each.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Speech Language 4 of 5" }),
    title: "Stress for meaning — the same sentence, six ways",
    sub: "Move the stress and the meaning moves with it.",
    left: { h: "Where the stress falls", items: ["I didn't say she took it.", "I DIDN'T say she took it.", "I didn't SAY she took it.", "I didn't say SHE took it.", "I didn't say she TOOK it.", "I didn't say she took IT."] },
    right: { h: "What it now means", items: ["( neutral )", "someone else said it", "I denied saying it at all", "I implied it, didn't say it", "someone else took it", "she borrowed it, didn't take it"] },
    note: "Six identical words. Six different meanings. Nothing changes except which word is loudest — and English does this constantly.",
    notes: tn({
      time: "16 minutes.",
      how: "Say all six aloud in order and let the class hear each meaning appear. This is one of the most striking demonstrations in the whole course.",
      mistakes: "Learners speak with even stress, so the listener has to guess the intended emphasis. That is a real loss of meaning, not a cosmetic issue.",
      extra: "Contrastive stress like this is how English marks the important part of a sentence. Many languages use word order or particles instead, which is why it transfers badly.",
      tip: "This slide is genuinely enjoyable and learners remember it for years. Give it the full sixteen minutes.",
      activity: "Six ways: learners say the same sentence six times and a partner names the meaning each time.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Speech Language 5 of 5" }),
    title: "Put it all together — five habits of natural speech", sub: "None of them is grammar. All of them are practice.",
    color: C.gram, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Link every consonant into the following vowel", d: "“tur-ni-toff”, not “turn … it … off”." },
      { t: "Weaken the small words", d: "to · of · and · can · was · have. All schwa, all quiet." },
      { t: "Group into ideas of 3 to 7 words, and pause between them", d: "Never pause inside a phrase." },
      { t: "Stress the word that carries the point", d: "The listener needs to know which word matters." },
      { t: "Use one discourse marker per turn — not six", d: "Right · look · actually · I mean · anyway · mind you." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Habit 1 is the highest-value single change. A learner who links consistently sounds dramatically more fluent within about two weeks.",
      mistakes: "Trying all five at once. Give the class one habit per week for five weeks.",
      extra: "Habits 1 and 2 together produce most of English rhythm. Habits 3 and 4 produce most of its clarity.",
      tip: "Print these five. They are the whole module and they will keep working for years.",
      activity: "One a week: learners choose one habit and record themselves before and after seven days.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — linking", sub: "Where do the words join?", items: [
      { q: "“turn it off” — where are the links?", a: "“tur-ni-toff”. Both consonants move into the following vowels.", why: "Rule 1. Consonant to vowel is the commonest join in English and the most useful to produce." },
      { q: "“go on” — what happens between the vowels?", a: "A small /w/ appears: “go-won”.", why: "Rule 2. English does not like two vowels meeting, so it inserts a /w/ or a /j/ to bridge them." },
      { q: "“big game” — how many /g/ sounds?", a: "One, held slightly longer.", why: "Rule 3. Saying two separate /g/ sounds is possible but marks the speaker immediately." },
    ] },
    { title: "Guided examples 2 — elision", sub: "Which sound disappears?", items: [
      { q: "“next day” — what is dropped?", a: "The /t/. “nex' day”.", why: "Three consonants in a row — /k/ /s/ /t/ then /d/. English drops the middle one." },
      { q: "Why does “I don't know” become “I dunno”?", a: "The /t/ elides and the vowel weakens.", why: "The most frequent phrases elide the most. Frequency drives reduction in every language." },
      { q: "Should YOU produce these?", a: "Recognising them matters more than producing them.", why: "If you never elide, you sound careful. If you cannot hear elision, you miss half of what is said." },
    ] },
    { title: "Guided examples 3 — weak forms", sub: "Which words go quiet?", items: [
      { q: "“I can do it.” Which word is weak?", a: "“can”, said /kən/ — “I c'n do it”.", why: "Function words weaken. Only the meaning words — I, do, it — carry any weight." },
      { q: "When does “can” get its full sound?", a: "When it is stressed: “I CAN do it.”", why: "Strong forms return under stress. That contrast is how English marks emphasis." },
      { q: "What single vowel do all weak forms use?", a: "The schwa /ə/.", why: "The commonest sound in English, and it only ever appears in unstressed positions." },
    ] },
    { title: "Guided examples 4 — thought groups", sub: "Where you pause is the meaning.", items: [
      { q: "“The manager said the report is late.” Who said it?", a: "The manager — if you pause after “said”.", why: "The pause marks where one idea ends. Move it and the subject of the reporting changes." },
      { q: "How long should a thought group be?", a: "About three to seven words. One idea.", why: "Longer than seven and the listener loses the shape; shorter and the speech sounds chopped." },
      { q: "Where must you NOT pause?", a: "Inside a phrase — “the / manager said”.", why: "Breaking inside a phrase is what makes a speaker sound hesitant even at normal speed." },
    ] },
    { title: "Guided examples 5 — stress for meaning", sub: "Which word is loudest?", items: [
      { q: "You want to say somebody else took it. Which word do you stress?", a: "“I didn't say SHE took it.”", why: "Contrastive stress on “she” implies a different person is responsible." },
      { q: "You want to deny saying anything at all. Which word?", a: "“I didn't SAY she took it.”", why: "Stressing the verb denies the act of saying, which is different from denying the content." },
      { q: "What happens if you stress nothing?", a: "The listener has to guess what you meant.", why: "Even stress is not neutral — it removes information the listener is expecting to receive." },
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
    title: "Natural speech in action",
    sub: "Read it written. Then hear how much of it actually joins.",
    turns: [
      { who: "BETHLEHEM", text: "Right — what are you going to do about the Adama contract?", side: "l" },
      { who: "YONAS", text: "Well, apparently they want it by Friday. Which is roughly impossible.", side: "r" },
      { who: "BETHLEHEM", text: "Look, could you not just send them the first half?", side: "l" },
      { who: "YONAS", text: "I mean, I could. Presumably they'd rather have half on time than all of it late.", side: "r" },
      { who: "BETHLEHEM", text: "Arguably that's better anyway. Mind you, they might not see it that way.", side: "l" },
      { who: "YONAS", text: "Anyway — I'll ask them. Basically I've got nothing to lose.", side: "r" },
    ],
    note: "Six discourse markers and all five vocabulary words, in six lines of completely ordinary conversation.",
    notes: tn({
      time: "16 minutes.",
      how: "Read it twice: once word by word, once at full natural speed with all the linking. The gap between the two readings is what the module is about.",
      mistakes: "Learners read this carefully and evenly. Push them to link, weaken and elide until it sounds conversational.",
      extra: "Have learners mark every linking point in Yonas's second line. There are at least four.",
      tip: "Point out that this is not slang or informal English. It is what an ordinary professional conversation sounds like.",
      activity: "Mark and perform: pairs mark every link and weak form, then perform it at natural speed twice.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "The same content, said badly",
    sub: "Every word correct. Every word separate. Compare it with slide 26.",
    turns: [
      { who: "SPEAKER A", text: "What. Are. You. Going. To. Do. About. The. Contract.", side: "l" },
      { who: "SPEAKER B", text: "They want it by Friday. It is not possible.", side: "r" },
      { who: "SPEAKER A", text: "Can you send them the first half?", side: "l" },
      { who: "SPEAKER B", text: "I can do that. They would prefer half on time.", side: "r" },
      { who: "SPEAKER A", text: "That is better. They might not agree.", side: "l" },
      { who: "SPEAKER B", text: "I will ask them. I have nothing to lose.", side: "r" },
    ],
    note: "Grammatically perfect. Completely intelligible. And nobody speaks like this — which is itself information the listener receives.",
    notes: tn({
      time: "14 minutes.",
      how: "Read this deliberately flat and separated. Then read slide 26 again. Ask which speaker they would rather work with — the answer is always the first.",
      mistakes: "Learners believe this version is “more correct”. It is equally correct and socially different, and that difference is what Level 4 addresses.",
      extra: "Note what is missing: no discourse markers, no contractions, no hedging. The content is identical and the relationship is not.",
      tip: "Do not let this become a criticism of careful speech. Careful speech is right on a bad phone line; it is wrong in a colleague's office.",
      activity: "Convert it: pairs rewrite this dialogue into natural speech with markers, contractions and hedges.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Six markers and what they really signal",
    sub: "Get the force wrong and it is a social error, not a language one.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaPlay", title: "“Right, …”", desc: "Let's begin, or let's move on. Brisk and neutral." },
      { icon: "FaExclamation", title: "“Look, …”", desc: "I'm being direct now. Carries real force — use with care." },
      { icon: "FaSync", title: "“Actually, …”", desc: "A correction or a mild surprise. Softens a disagreement." },
      { icon: "FaComment", title: "“I mean, …”", desc: "I'm explaining or repairing what I just said." },
      { icon: "FaUndo", title: "“Anyway, …”", desc: "Back to the main point after a digression." },
      { icon: "FaBalanceScale", title: "“Mind you, …”", desc: "A qualification. Marks a very advanced speaker." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Drill all six in chorus, then have learners use each in a sentence about their own work. The force is learned through use, not description.",
      mistakes: "“Look” used as a neutral filler. In English it signals impatience or firmness, and using it casually with a manager is a genuine misstep.",
      extra: "“Mind you” is the highest-value item here. It qualifies what you just said without withdrawing it, and almost no learner produces it.",
      tip: "Ask which marker each learner already uses. Most use “actually” and none use “mind you”.",
      activity: "Six turns: run a conversation where each learner must open a turn with a different marker.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap with a marker or an adverb. Answers are in the Answer Key.",
    turns: [
      { who: "A", text: "______ — how did the meeting go?", side: "l" },
      { who: "YOU", text: "______ they've agreed to everything. Which surprised me.", side: "r" },
      { who: "A", text: "Really? So what happens next?", side: "l" },
      { who: "YOU", text: "______ , we start in March. ______ two months earlier than planned.", side: "r" },
      { who: "A", text: "That's very fast.", side: "l" },
      { who: "YOU", text: "______ it's a good thing. ______ , we'll need more staff.", side: "r" },
    ],
    note: "Use these:  “Right”  ·  “Apparently”  ·  “Basically”  ·  “Roughly”  ·  “Arguably”  ·  “Mind you”",
    notes: tn({
      time: "13 minutes.",
      how: "Have pairs perform the completed version at full natural speed with linking. Filling the gaps is preparation; the delivery is the task.",
      answers: "1 Right · 2 Apparently · 3 Basically · 4 Roughly · 5 Arguably · 6 Mind you",
      mistakes: "Gap 6 is the hard one. “Mind you” qualifies the previous positive statement, which is exactly its function.",
      tip: "Gap 2 uses “apparently” correctly — reporting without confirming. Praise anyone who explains why it fits.",
      activity: "Do it again about a different meeting, keeping all six items.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — natural delivery", sub: "Four rounds. Three minutes each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Read slide 26 aloud with every link marked", d: "Partner listens for separated words." },
      { t: "Talk for 60 seconds using four weak forms deliberately", d: "to · of · and · can. Partner counts them." },
      { t: "Say one sentence six ways, moving the stress", d: "Partner names the meaning each time." },
      { t: "Two-minute conversation using all six markers", d: "Partner ticks each marker as it appears." },
    ],
    notes: tn({
      time: "14 minutes for all four rounds.",
      how: "Round 3 is the most enjoyable and the most memorable. Use the slide 19 sentence or one of the class's own.",
      mistakes: "In round 2 learners over-produce the weak forms and sound artificial. Weak forms should be quiet, not exaggerated.",
      tip: "Round 4 will produce over-use at first. That is fine — one marker per turn is the target, and over-use is easier to correct than absence.",
      activity: "Record round 1 and round 4 and compare the naturalness.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the linking drill", sub: "The highest-value ten minutes in this module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“turn it off”  →  “tur-ni-toff”", d: "Say it ten times, faster each time." },
      { t: "“an hour and a half”  →  “a-nour-an-a-half”", d: "Four links in five words." },
      { t: "“pick it up and put it away”", d: "Six links. Mark them first." },
      { t: "“What are you going to do about it?”", d: "The warm-up sentence. Now link it properly." },
      { t: "Read a whole paragraph with every link marked", d: "Partner listens for any separated word." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Write each phrase on the board with the links marked using hyphens. Seeing the join is what makes it producible — description alone does not work.",
      mistakes: "Learners produce the links slowly and separately, which defeats the purpose. Speed is part of the target.",
      extra: "Item 4 closes the loop with the warm-up. Compare their first attempt with this one.",
      tip: "This drill produces audible improvement within one lesson. It is the most immediately rewarding activity in the module.",
      activity: "Daily five: five minutes of linking practice at the start of every Level 4 lesson.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — shadowing at full speed", sub: "The single most effective technique for natural speech.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Listen to 30 seconds of English audio twice", d: "News, a podcast, a film scene. Anything real." },
      { t: "Now speak along, one second behind", d: "Do not stop when you lose it. Rejoin at the next phrase." },
      { t: "Do it five times with the same 30 seconds", d: "By the fifth time you will be close." },
      { t: "Record yourself on the fifth attempt", d: "Compare with the original." },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Shadowing works because it forces the rhythm, the linking and the weak forms simultaneously without any analysis. It is the closest thing to acquisition in a classroom.",
      mistakes: "Learners stop when they fall behind. Insist they rejoin at the next phrase and keep going — that is the whole discipline.",
      extra: "Thirty seconds repeated five times is far more effective than five minutes once. Repetition on the same audio is where the gain is.",
      tip: "This was introduced in Level 3 Module 1 as a solo technique. Here it becomes the core classroom activity of the module.",
      activity: "Class shadow: play the same thirty seconds five times and have the whole group shadow it together.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the schwa between words",
    sub: "Say the weak version. It should feel almost lazy.",
    left: { h: "Say it carefully — wrong", items: ["“I want TOO go.”", "“a cup OV tea”", "“fish AND chips”", "“I CAN do it.”", "“I WOZ going.”"] },
    right: { h: "Say it weakly — right", items: ["“I wanna go.”", "“a cup-a tea”", "“fish 'n' chips”", "“I c'n do it.”", "“I w'z going.”"] },
    note: "If it feels slightly lazy, you are probably doing it correctly. English rhythm depends on some words being genuinely quiet.",
    notes: tn({
      time: "14 minutes.",
      how: "The note is the key instruction. Learners have been trained since Level 1 to pronounce clearly, and weak forms feel wrong to them at first.",
      mistakes: "Refusing to weaken because it feels like bad English. It is not bad English — it is the only English that has correct rhythm.",
      extra: "The strong forms are still correct when the word is stressed. Nothing here is being unlearned; a second option is being added.",
      tip: "Exaggerate the weakness for a week. Over-correction settles into the right place far faster than under-correction.",
      activity: "Two versions: learners say ten sentences twice, all-strong then correctly weak, and hear the rhythm change.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — thought groups and meaning", sub: "In pairs. Where you pause is what you mean.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "“The manager said the report is late.” Say it both ways.", d: "Partner says who spoke." },
      { t: "Mark thought groups in a paragraph, then read it", d: "Three to seven words per group." },
      { t: "Read the same paragraph with the groups WRONG", d: "Partner says what went wrong." },
      { t: "Speak for 60 seconds with deliberate pausing", d: "Partner marks every pause that landed badly." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Task 3 is the one that teaches. Deliberately grouping badly makes learners hear what bad grouping does to a listener.",
      mistakes: "Learners pause where they run out of breath rather than where the idea ends. Planning one group ahead fixes it.",
      extra: "Good grouping also buys thinking time, which connects back to Level 3 Module 1. A pause between groups is invisible; a pause inside one is not.",
      tip: "Task 4 is the real skill. Sixty seconds of controlled pausing is harder than it sounds and it transforms how a speaker is perceived.",
      activity: "Read it badly: every learner reads one paragraph with deliberately wrong grouping, then correctly.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. This is the Level 4 baseline. Keep it.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Read a prepared paragraph with all links marked", d: "30 seconds. Partner checks for separated words." },
      { t: "Shadow 30 seconds of audio, fifth attempt", d: "Record the shadowing itself." },
      { t: "Say one sentence six ways, moving the stress", d: "Say what each version means." },
      { t: "Speak 60 seconds using all five new adverbs", d: "roughly · apparently · basically · presumably · arguably." },
      { t: "Use three discourse markers naturally", d: "Not six. Three, in the right places." },
    ],
    notes: tn({
      time: "18 minutes including listening back.",
      how: "This is the Level 4 baseline recording. Store it — the Module 8 comparison depends on it, and this level's gains are audible rather than grammatical.",
      mistakes: "Step 4 usually produces over-use. Five adverbs in sixty seconds is dense; the target is correct use, not maximum use.",
      answers: "SUCCESS CRITERIA: consistent linking with no separated words · a recognisable shadow of the original rhythm · six stress placements with six correct meanings · five adverbs used appropriately · three markers in natural positions.",
      tip: "Count the separated words in step 1 and write the number down. That is the number you will beat in Module 8.",
      activity: "Keep every recording for the Level 4 comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — write what you actually hear", sub: "Ten phrases at full speed. Write the FULL written form.",
    panelW: 7.2,
    panel: { label: "Audio script — read fast, fully connected", color: C.listen, tint: C.listenTint, size: 16, lsm: 1.3,
      text: "1.  “Whatcha gonna do about it?”\n2.  “D'you wanna cuppa tea?”\n3.  “I dunno, I'll ask 'em.”\n4.  “Didja see 'im las' night?”\n5.  “It's a cup-a coffee, innit?”\n6.  “Wouldja mind waitin'?”\n7.  “I c'n do it nex' week.”\n8.  “She's bin there fer years.”\n9.  “Turn-i-toff, wouldja?”\n10. “Fish 'n' chips an' a cuppa.”" },
    side: { label: "Your task", color: C.listen, size: 15.5, items: [
      "Write each one in FULL written English.",
      "Which are linking?",
      "Which are elision?",
      "Which are assimilation?",
      "Score yourself out of 10.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Read these at genuine natural speed, twice. Then a third time slowly for checking only. The difficulty is real and learners should be told so.",
      mistakes: "Learners hear “cuppa” and “innit” as unknown words. Naming the process removes the confusion permanently.",
      extra: "Item 5's “innit” is very informal and regional. Include it for recognition only and say so.",
      answers: "1 What are you going to do about it? · 2 Do you want a cup of tea? · 3 I don't know, I'll ask them. · 4 Did you see him last night? · 5 It's a cup of coffee, isn't it? · 6 Would you mind waiting? · 7 I can do it next week. · 8 She's been there for years. · 9 Turn it off, would you? · 10 Fish and chips and a cup of tea.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Nothing here is slang. It is ordinary connected speech.",
    size: 16.5,
    items: [
      { q: "1 — “Whatcha gonna do about it?”", a: "What are you going to do about it?", why: "Assimilation (what + you) plus reduction (going to → gonna). The warm-up sentence, said naturally." },
      { q: "3 — “I dunno, I'll ask 'em.”", a: "I don't know, I'll ask them.", why: "Elision of the /t/, and “them” reduced to /əm/ — one of the most frequent reductions in English." },
      { q: "4 — “Didja see 'im las' night?”", a: "Did you see him last night?", why: "Assimilation (did + you), /h/ dropped in “him”, and the /t/ elided in “last”. Three processes in five words." },
      { q: "7 — “I c'n do it nex' week.”", a: "I can do it next week.", why: "Weak form of “can”, and elision of the /t/ in “next”. Both entirely standard." },
      { q: "Is any of this bad English?", a: "None of it. This is how educated native speakers talk.", why: "News presenters, professors and CEOs all do this. Expecting separated words is what causes the difficulty." },
    ],
    notes: keyNotes("The final item is the one to say aloud. Learners often assume connected speech is uneducated. It is universal, and believing otherwise keeps them listening for the wrong thing."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — stress changes the meaning", sub: "Same sentence, five times. What changes?",
    panelW: 7.2,
    panel: { label: "Audio script — stress the CAPITAL word", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.34,
      text: "1.  “I never SAID he stole the money.”\n2.  “I never said HE stole the money.”\n3.  “I never said he STOLE the money.”\n4.  “I never said he stole the MONEY.”\n5.  “I NEVER said he stole the money.”\n\nSame eight words, five times.\nOnly the loudest word changes." },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. Which one denies saying anything?",
      "2. Which one suggests somebody else did it?",
      "3. Which one suggests he took something else?",
      "4. Which one suggests he borrowed it?",
      "5. Which is the strongest denial?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Read each version with genuinely exaggerated stress the first time, then naturally the second. Learners need the exaggeration to hear the pattern before they can hear it at normal volume.",
      mistakes: "Learners cannot hear the difference at first. That is expected — this is a contrast their first language may not use at all.",
      extra: "This is a listening skill as much as a speaking one. Missing contrastive stress means missing the speaker's actual point.",
      answers: "1 version 1 · 2 version 2 · 3 version 4 · 4 version 3 · 5 version 5.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Eight words. Five meanings.",
    size: 16.5,
    items: [
      { q: "1 — denies saying anything", a: "“I never SAID he stole it.” — stress on the verb.", why: "It denies the act of speaking, not the content. You may still believe it." },
      { q: "2 — somebody else did it", a: "“I never said HE stole it.” — stress on the person.", why: "Contrastive stress on a pronoun always implies a contrast with someone else." },
      { q: "3 — he took something else", a: "“…stole the MONEY.” — stress on the object.", why: "The contrast is with a different object: he stole something, but not the money." },
      { q: "4 — he borrowed it", a: "“…he STOLE the money.” — stress on the verb “stole”.", why: "The contrast is with a different action: he took it, but not by stealing." },
      { q: "Why does this matter?", a: "Missing the stress means missing the speaker's actual point.", why: "In English the loudest word IS the message. Even stress removes information the listener expects." },
    ],
    notes: keyNotes("Ask whether learners' own languages do this. Most mark emphasis with word order or particles instead, which is exactly why the English pattern is invisible at first."),
  });

  L.grid({
    sec: SEC.lis, title: "Why films are still hard", sub: "Four reasons — and what to do about each.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaFilm", title: "Overlapping speech", desc: "People interrupt and talk over each other. No classroom recording does this. Watch the same scene three times." },
      { icon: "FaVolumeDown", title: "Emotional, not clear", desc: "Actors mumble, whisper and shout because the character would. Clarity is not their goal — the scene is." },
      { icon: "FaGlobeAfrica", title: "Accents and slang", desc: "Regional accents, generational slang, and jokes about things you have not seen. None of this is a gap in your English." },
      { icon: "FaRedo", title: "The fix: narrow and repeat", desc: "One scene, three times, with English subtitles on the third. Not a whole film once." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "This slide prevents a lot of unnecessary discouragement. Learners at B2 who cannot follow a film conclude their English has failed; in fact films are simply a very hard listening genre.",
      mistakes: "Watching whole films with translated subtitles. The brain reads and switches off the listening entirely.",
      extra: "The recommended order: watch without subtitles, then with English subtitles, then without again. Same scene, three passes.",
      tip: "Documentaries and interviews are far easier than drama and a better place to start. Say so.",
      activity: "One scene, three ways: pick a two-minute scene and run all three passes in class.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — a text about accent", sub: "Read it, then decide whether you agree.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 15.5, lsm: 1.26,
      text: "DOES YOUR ACCENT MATTER?\n\nMost learners believe they should sound like a\nnative speaker. Researchers who study\nintelligibility disagree.\nWhat matters, they find, is word stress, rhythm\nand a few sound contrasts. A speaker who gets\nthose right is understood easily — with any\naccent at all.\nWhat does NOT predict it is how “native”\nsomebody sounds. Strong accents are often\neasier to follow than weak accents with poor\nrhythm. Arguably, then, the years spent chasing\nan accent are spent on the wrong problem." },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "What three things do matter?",
      "What does not predict intelligibility?",
      "Which is easier to follow, and why?",
      "What does “the wrong problem” mean here?",
      "Do you agree? Why or why not?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Question 5 should produce genuine disagreement, and it should. Some learners want a native accent for reasons that are personal rather than practical, and that is a legitimate position.",
      mistakes: "Do not present this as settled beyond argument. Present the evidence, then let the class decide what they want to work on.",
      extra: "Note the use of “arguably” in the last paragraph — the vocabulary from slide 15 doing exactly its job.",
      tip: "This text exists to protect learners from wasting years. But the choice is theirs, and framing it as a choice is what makes them listen.",
      activity: "Agree or disagree: a five-minute class discussion, previewing Module 2.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Content and argument.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "According to the text, what three things affect intelligibility?",
      "What does the text say does NOT predict it?",
      "Why might a strong accent be easier to follow than a weak one?",
      "What is the writer's opinion in the last paragraph?",
      "Which word signals that it is an opinion, not a fact?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Question 5 is the language point: “arguably” marks the last paragraph as a defensible opinion rather than a research finding. That distinction is Module 2's whole subject.",
      mistakes: "Learners read the last paragraph as another finding. The adverb tells you it is not.",
      tip: "Question 3 is the counter-intuitive one. Rhythm matters more than accent, so a rhythmically accurate strong accent beats a rhythmically flat weak one.",
      answers: "1 Word stress, rhythm and a small number of sound contrasts. · 2 How “native” somebody sounds. · 3 Because rhythm and stress matter more than accent. · 4 That chasing an accent is the wrong priority. · 5 “Arguably”.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Evidence, then opinion — and the word that separates them.",
    size: 16.5,
    items: [
      { q: "1 — the three things", a: "Word stress, rhythm, and a few sound contrasts.", why: "All three are exactly what this module trains. None of them is accent." },
      { q: "2 — what does not predict it", a: "How “native” a speaker sounds.", why: "A finding that contradicts what most learners have been told, which is why the text states it directly." },
      { q: "3 — why a strong accent can be easier", a: "Because rhythm and stress carry more of the meaning than accent does.", why: "A flat, evenly-stressed speaker is hard to follow whatever their accent." },
      { q: "4 and 5 — the opinion and its marker", a: "That chasing an accent is the wrong priority — marked by “arguably”.", why: "The adverb signals a defensible position rather than a research result. Facts and judgement kept apart." },
      { q: "What should you actually work on?", a: "Linking, weak forms, thought groups, word stress.", why: "The four habits from slide 20. All four produce audible results within weeks." },
    ],
    notes: keyNotes("Item 4 and 5 together repeat the Level 3 Module 8 discipline: separating fact from judgement, now inside a reading text rather than a report."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a transcript of real speech", sub: "This is what natural conversation looks like written down.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 15.5, lsm: 1.26,
      text: "“So — right — the thing is, we, um, we tried it\nlast year and it, it didn't really work? And I\nmean, obviously, the situation's different now,\nbut, you know, I'd be — I'd want to see some\nnumbers before we, before we commit to\nanything. Mind you, if the figures are good,\nthen, yeah, fine. Obviously.”\n\nA fluent, confident, native speaker.\nIn a meeting. Being taken seriously." },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Count the repetitions and false starts.",
      "Count the fillers.",
      "Is this person hard to follow?",
      "Would you call this bad English?",
      "What does this tell you about your own speech?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "This is a real transcript pattern and it is genuinely startling in writing. Learners hold themselves to a standard that no actual speaker meets.",
      mistakes: "Learners believe fluent speakers produce clean sentences. Transcribed speech is always full of repetition, repair and hesitation — and nobody notices in real time.",
      extra: "Count them: five fillers, three false starts, two repetitions, in about sixty words. And the speaker is entirely competent.",
      tip: "This slide relieves an enormous amount of pressure. Say clearly: your speech does not need to be cleaner than a native speaker's.",
      activity: "Transcribe yourself: learners transcribe thirty seconds of their own recording word for word, including every filler.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "The standard you are holding yourself to does not exist.",
    size: 16.5,
    items: [
      { q: "1 and 2 — how many?", a: "About three false starts, two repetitions and five fillers in sixty words.", why: "Entirely typical. Transcribed speech always looks like this, in every language." },
      { q: "3 — is it hard to follow?", a: "No. In real time nobody notices any of it.", why: "Listeners process meaning, not form. The repairs are invisible unless written down." },
      { q: "4 — is it bad English?", a: "No. It is a competent professional in a meeting.", why: "The repetitions are thinking time, and the fillers are signposts. Both do real work." },
      { q: "5 — what does it tell you?", a: "Your speech does not need to be cleaner than a native speaker's.", why: "Learners aim for a written standard in spoken form, which is impossible and unnecessary." },
      { q: "Vocabulary check", a: "roughly · apparently · basically · presumably · arguably", why: "All five are spoken hedges. They exist precisely because real speech is uncertain and negotiated." },
    ],
    notes: keyNotes("Item 5 is the one to end on. Many learners are held back by an impossible standard, and seeing a real transcript is the fastest way to dismantle it."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — write what you hear", sub: "Connected speech back into full English.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write each one in full written English.",
    items: [
      "1.  “Whatcha gonna do?”",
      "2.  “I dunno, ask 'em.”",
      "3.  “D'you wanna cuppa?”",
      "4.  “Didja see 'im las' night?”",
      "5.  “I c'n do it nex' week.”",
      "6.  “She's bin there fer years.”",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "This is a decoding exercise and it directly builds listening. Have learners say the connected version aloud after writing the full one.",
      answers: "1 What are you going to do? · 2 I don't know, ask them. · 3 Do you want a cup of tea? · 4 Did you see him last night? · 5 I can do it next week. · 6 She's been there for years.",
      mistakes: "Item 6's “fer” is “for” weakened to a schwa. Learners often guess “far”.",
      tip: "Ask which process each one uses. Most contain two or three at once, which is why real speech is hard.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — mark the linking", sub: "Where do the words join?",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Copy each sentence and mark every linking point with a hyphen.",
    items: [
      "1.  Turn it off and put it away.",
      "2.  I had an apple and an orange.",
      "3.  Pick up all of it.",
      "4.  She works at a big garage.",
      "5.  Go on, take it out of the box.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Marking the links on paper before saying them aloud is what makes them producible. Writing the join makes it visible.",
      answers: "1 Tur-ni-toff an-pu-ti-taway · 2 I ha-da-napple an-da-norange · 3 Picku-pall-ovit · 4 She work-sa-ta-big garage · 5 Go-won, tay-ki-tou-tuv the box.",
      mistakes: "Item 5's “go on” needs the /w/ from rule 2. Learners usually miss the vowel-to-vowel case.",
      tip: "Have learners read each marked sentence aloud three times, faster each time.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — transcribe yourself", sub: "The most uncomfortable and most useful task in this module.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Record 60 seconds of yourself speaking, then transcribe it exactly.",
    items: [
      "1.  Write down every word, including “um” and “er”.",
      "2.  Mark every repetition and every false start.",
      "3.  Mark every place you paused. Was it between ideas?",
      "4.  Count your filler words. Which do you over-use?",
      "5.  Compare with the transcript on slide 44.",
      "6.  Write three sentences on what you noticed.",
    ],
    notes: tn({
      time: "20 minutes.",
      how: "Step 5 is what makes this bearable. Learners are shocked by their own transcript until they compare it with a native speaker's, which looks much the same.",
      answers: "No fixed answers. The comparison in step 5 is the point of the exercise.",
      mistakes: "Learners tidy the transcript as they write it. Insist on every “um” — the untidiness is the data.",
      tip: "Step 4 usually finds one dominant filler. Naming it is enough to reduce it noticeably within a week.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — what to look for", sub: "Five things your transcript will show you.",
    size: 16.5,
    items: [
      { q: "1 — your filler count", a: "Expect three to eight in 60 seconds. That is normal.", why: "The transcript on slide 44 has five in about sixty words. Fillers are not the problem." },
      { q: "2 — where you paused", a: "Between ideas, or inside phrases?", why: "Pauses between thought groups are invisible. Pauses inside a phrase are what sound hesitant." },
      { q: "3 — one dominant filler", a: "Most people have one they over-use. Find yours.", why: "Naming it is usually enough to halve it within a week. You cannot reduce what you cannot hear." },
      { q: "4 — repetitions and false starts", a: "Two or three per minute is completely normal.", why: "Native transcripts show the same. This is thinking made audible, not a defect." },
      { q: "5 — separated words", a: "Look for places you did not link. That IS worth fixing.", why: "Linking is the one thing on this list that genuinely changes how natural you sound." },
    ],
    notes: keyNotes("Item 5 is the actionable one. Four of the five findings are normal and should be left alone; only the linking is worth working on."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your natural speech checklist", sub: "Five habits. One per week is enough.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Am I linking consonants into following vowels?", d: "“tur-ni-toff”, not “turn … it … off”." },
      { t: "Are my small words genuinely weak?", d: "to · of · and · can · was · have. All schwa." },
      { t: "Am I pausing between ideas, not inside phrases?", d: "Three to seven words per group." },
      { t: "Am I stressing the word that carries the point?", d: "The loudest word IS the message." },
      { t: "One discourse marker per turn — not six", d: "Right · look · actually · I mean · anyway · mind you." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "One habit per week for five weeks. Attempting all five at once produces self-consciousness and no improvement.",
      tip: "Print this. Habit 1 alone, done consistently, produces the largest audible change of anything in Level 4.",
      activity: "Habit of the week: name one habit at the start of each lesson and check it at the end.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. “an apple” is normally said as:", opts: "a) an … apple     b) a-napple     c) an-napple" },
      { q: "2. In “next day”, what happens to the /t/?", opts: "a) nothing     b) it disappears     c) it becomes /d/" },
      { q: "3. The weak form of “can” is:", opts: "a) /kæn/     b) /kən/     c) /keɪn/" },
      { q: "4. A thought group is usually:", opts: "a) 1–2 words     b) 3–7 words     c) 15–20 words" },
      { q: "5. Connected speech is:", opts: "a) lazy English     b) informal only     c) normal educated English" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 c",
      tip: "Question 5 is the belief this module exists to correct. Say the answer aloud twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — linking, elision or assimilation?", sub: "Name the process.",
    color: C.green, instruction: "Write L, E or A for each one.", size: 18,
    items: [
      "1.  “an apple”  →  “a-napple”",
      "2.  “next day”  →  “nex' day”",
      "3.  “don't you”  →  “doncha”",
      "4.  “go on”  →  “go-won”",
      "5.  “friends”  →  “frens”",
      "6.  “would you”  →  “wouldja”",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Naming the process is what makes it predictable. Learners who can classify these can predict new cases.",
      answers: "1 L · 2 E · 3 A · 4 L · 5 E · 6 A",
      mistakes: "Items 3 and 6 are the same process with different sounds — /t/+/j/ and /d/+/j/.",
      tip: "Ask for one more example of each process. That is the real test.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Markers, weak forms and processes.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the MARKER to its SIGNAL", opts: "1. “Look, …”     2. “Anyway, …”     3. “Mind you, …”     4. “I mean, …”" },
      { q: "a) back to the main point     b) I'm explaining", opts: "c) I'm being direct        d) a qualification" },
      { q: "Part 2 — match the WORD to its WEAK FORM", opts: "1. to     2. of     3. and     4. was          a) /ən/     b) /wəz/     c) /tə/     d) /əv/" },
      { q: "Part 3 — match the ADVERB to its MEANING", opts: "1. apparently     2. presumably     3. arguably          a) I assume     b) you could argue     c) I heard, but I'm not confirming" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–a, 3–d, 4–b.  ·  Part 2: 1–c, 2–d, 3–a, 4–b.  ·  Part 3: 1–c, 2–a, 3–b.",
      tip: "Part 3 is the Module 2 preview. These three adverbs mark three different degrees of commitment to a claim.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — choose the adverb", sub: "Five hedges, five situations.",
    color: C.green, instruction: "Write the best adverb for each gap.", size: 18,
    items: [
      "1.  ______ forty people came — I didn't count exactly.",
      "2.  ______ they're closing the office. Someone told me.",
      "3.  ______ , we ran out of time. That's the short version.",
      "4.  ______ they'll send it tomorrow — it's usually next day.",
      "5.  It's ______ the best solution, though others disagree.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Each gap has one clearly best answer because the second clause supplies the reason.",
      answers: "1 Roughly · 2 Apparently · 3 Basically · 4 Presumably · 5 arguably",
      mistakes: "Items 2 and 4 are close. “Apparently” reports what you heard; “presumably” reports what you infer.",
      tip: "The second clause in each item explains the choice. Point that out — it is how these adverbs are learned in context.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — where does the stress go?", sub: "The meaning tells you.",
    color: C.green, instruction: "Write which word you would stress, and why.", size: 17,
    items: [
      "1.  “I didn't say she took it.”  ( someone else said it )",
      "2.  “I didn't say she took it.”  ( I implied it, but didn't say it )",
      "3.  “I didn't say she took it.”  ( someone else took it )",
      "4.  “I didn't say she took it.”  ( she borrowed it )",
      "5.  “I never said he stole the money.”  ( he stole something else )",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Have learners say each one aloud after writing it. The stress must be produced, not just identified.",
      answers: "1 I · 2 SAY · 3 SHE · 4 TOOK · 5 MONEY",
      mistakes: "Item 2 catches people. Stressing “say” denies the speaking, not the content — a subtle and very useful distinction.",
      tip: "This is the most memorable exercise in the module. Take answers aloud rather than on paper.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  Connected speech is careless or lazy English.",
      "2.  All weak forms use the schwa /ə/.",
      "3.  You should pronounce every word separately to be clear.",
      "4.  A thought group is usually three to seven words.",
      "5.  Your accent is the main thing affecting intelligibility.",
      "6.  Native speakers' transcripts are full of repetition and fillers.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — it is normal educated English · 2 T · 3 F — that marks you as non-native · 4 T · 5 F — word stress and rhythm matter far more · 6 T",
      tip: "Items 1, 3 and 5 are the three beliefs this module exists to correct. Say each correction clearly.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own speech.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  Which filler word do you over-use? How do you know?",
      "2.  Do you link words, or say them separately? Be honest.",
      "3.  Where do you usually pause — between ideas or inside phrases?",
      "4.  Which of the five habits will you work on first?",
      "5.  Has this module changed what you think about your accent?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Question 1 should refer to the actual transcript from Writing 3. Evidence, not impression.",
      answers: "No fixed answers. Question 4 should name exactly one habit.",
      mistakes: "Question 4 answered with all five. One per week is the instruction.",
      tip: "Question 5 is worth reading aloud. The answers tell you whether slide 10 landed.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. Partner listens for one thing only.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner checks ONE feature per round.", size: 19,
    items: [
      "1.  Read a marked paragraph. Partner counts separated words.",
      "2.  Speak 60 seconds. Partner counts strong forms of to, of, and, can.",
      "3.  Say one sentence five ways. Partner names each meaning.",
      "4.  Shadow 30 seconds of audio. Partner rates the rhythm.",
    ],
    notes: tn({
      time: "14 minutes.",
      how: "One feature per round. A partner listening for everything hears nothing, which is the same principle as Level 3 Module 3.",
      answers: "SUCCESS CRITERIA: 1 fewer than three separated words · 2 no strong forms except under stress · 3 five correct meanings · 4 recognisable rhythm match.",
      tip: "Round 4 is the hardest to assess. “Does it sound like the original?” is a good enough criterion.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "Everything in the module together.",
    color: C.green, instruction: "Work in pairs. Speak more than you write.", size: 17,
    items: [
      { q: "1. Write ten connected phrases in full written English.", opts: "From the slide 36 list, from memory." },
      { q: "2. Mark all the linking in a paragraph, then read it at speed.", opts: "Partner counts separated words." },
      { q: "3. Say one sentence six ways with six meanings.", opts: "Partner names each." },
      { q: "4. Shadow 30 seconds of audio five times. Record the fifth.", opts: "Compare with the original." },
      { q: "5. Speak 90 seconds using all five adverbs and three markers.", opts: "Naturally, not mechanically." },
    ],
    notes: tn({
      time: "22 minutes.",
      how: "Question 5 is the assessment. Using the items naturally, at speed, in continuous speech is a genuinely different skill from using them in exercises.",
      answers: "1 the ten from slide 36 · 3 six placements, six meanings · 5 five adverbs and three markers, correctly placed.",
      tip: "Question 4's recording is the evidence. Play the original and the shadow back to back for the class.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why does speaking every word separately make you HARDER to follow?", opts: "What is the listener expecting?" },
      { q: "2. Should you try to lose your accent? Argue both sides.", opts: "Use the slide 41 text." },
      { q: "3. Why does producing connected speech improve your listening?", opts: "What does the mouth teach the ear?" },
      { q: "4. When IS careful separated speech the right choice?", opts: "Give three real situations." },
    ],
    notes: tn({
      time: "14 minutes. Discussion, not writing.",
      how: "Question 2 is the first real debate of Level 4 and previews Module 3. Require both sides to be argued, whatever the learner personally thinks.",
      answers: "1 Because the listener expects connected forms and has to work harder to process unexpected separation. 2 For: personal goals, some professions, confidence. Against: it takes years, it is not needed for intelligibility, and the effort is better spent on rhythm. 3 Because your ear learns to expect the patterns your mouth produces — you cannot hear what you have never made. 4 A bad phone line, a noisy room, dictating a number or an address, speaking to somebody at a much lower level, or a formal announcement.",
      tip: "Question 4 keeps the module honest. Connected speech is the default, not a universal rule, and knowing when to drop it is part of competence.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · The three processes", items: [
      { q: "1. Name the three things that happen between words.", opts: "Three answers." },
      { q: "2. “an apple” → “a-napple”. Which process?", opts: "One word." },
      { q: "3. “next day” → “nex' day”. Which process?", opts: "One word." },
      { q: "4. “don't you” → “doncha”. Which process?", opts: "One word." },
    ] },
    { part: "Part 2 · Linking and weak forms", items: [
      { q: "5. Name the three linking rules.", opts: "Three answers." },
      { q: "6. What is added between two vowels?", opts: "Two sounds." },
      { q: "7. What vowel do all weak forms use?", opts: "One answer." },
      { q: "8. Give the weak forms of: to · of · and · can.", opts: "Four answers." },
    ] },
    { part: "Part 3 · Groups and stress", items: [
      { q: "9. How long is a thought group?", opts: "One answer." },
      { q: "10. Where must you NOT pause?", opts: "One sentence." },
      { q: "11. “I didn't say SHE took it.” What does it mean?", opts: "One sentence." },
      { q: "12. Why does even stress lose information?", opts: "One sentence." },
    ] },
    { part: "Part 4 · Markers and adverbs", items: [
      { q: "13. What does “Look, …” signal?", opts: "One sentence." },
      { q: "14. What does “Mind you, …” signal?", opts: "One sentence." },
      { q: "15. Difference between “apparently” and “presumably”?", opts: "One sentence." },
      { q: "16. What does “arguably” signal?", opts: "One sentence." },
    ] },
    { part: "Part 5 · The honest questions", items: [
      { q: "17. What three things affect intelligibility most?", opts: "Three answers." },
      { q: "18. Does your accent affect intelligibility?", opts: "One sentence." },
      { q: "19. Name the five habits of natural speech.", opts: "Five answers." },
      { q: "20. SPEAKING: read a marked paragraph, then shadow 30 seconds.", opts: "Assessed live." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 1 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is spoken." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is assessed live: a marked paragraph read with consistent linking, then a shadowed 30 seconds. Marked on rhythm and linking, not on accent.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the three processes", a: "Linking (words join) · elision (sounds disappear) · assimilation (sounds change).", why: "All three are systematic and predictable. None of them is careless speech." },
      { q: "Q2 — “a-napple”", a: "Linking.", why: "Consonant into following vowel — rule 1, and the commonest join in English." },
      { q: "Q3 — “nex' day”", a: "Elision.", why: "The /t/ disappears between two consonants. Three consonants in a row is more than English will say." },
      { q: "Q4 — “doncha”", a: "Assimilation.", why: "/t/ + /j/ becomes /tʃ/. Two sounds merging into a new one." } ],
    [ { q: "Q5 — the three linking rules", a: "Consonant→vowel · vowel→vowel with /w/ or /j/ · same consonant said once.", why: "Rule 1 alone changes how a whole sentence sounds." },
      { q: "Q6 — between two vowels", a: "A small /w/ or /j/.", why: "“go-won”, “I-yam”. English bridges vowel-to-vowel rather than allowing a gap." },
      { q: "Q7 — the weak-form vowel", a: "The schwa /ə/.", why: "The commonest sound in English, and it appears only in unstressed positions." },
      { q: "Q8 — four weak forms", a: "to /tə/ · of /əv/ · and /ən/ · can /kən/.", why: "All four use the schwa. That is the single pattern behind all of them." } ],
    [ { q: "Q9 — thought group length", a: "About three to seven words. One idea.", why: "Longer and the listener loses the shape; shorter and the speech sounds chopped." },
      { q: "Q10 — where not to pause", a: "Inside a phrase — “the / manager said”.", why: "Breaking inside a phrase makes a speaker sound hesitant even at normal speed." },
      { q: "Q11 — “I didn't say SHE took it.”", a: "Someone else took it.", why: "Contrastive stress on a pronoun always implies a contrast with a different person." },
      { q: "Q12 — even stress", a: "The listener cannot tell which word carries the point.", why: "In English the loudest word IS the message. Even stress removes expected information." } ],
    [ { q: "Q13 — “Look, …”", a: "I am about to be direct. It carries real force.", why: "Used casually it sounds impatient or confrontational, which is a social error rather than a language one." },
      { q: "Q14 — “Mind you, …”", a: "A qualification of what I just said.", why: "It partly contradicts your own previous statement without withdrawing it. Marks a very advanced speaker." },
      { q: "Q15 — apparently vs presumably", a: "“Apparently” = I heard it. “Presumably” = I infer it.", why: "One reports somebody else's claim; the other reports your own reasoning." },
      { q: "Q16 — “arguably”", a: "A defensible opinion, not a fact.", why: "It stakes a claim while acknowledging that others might reasonably disagree." } ],
    [ { q: "Q17 — what affects intelligibility", a: "Word stress · rhythm · a small number of sound contrasts.", why: "All three are trainable, and all three produce audible results within weeks." },
      { q: "Q18 — does accent affect it?", a: "No, once stress, rhythm and the key contrasts are right.", why: "Speakers with strong accents are often easier to follow than speakers with flat rhythm." },
      { q: "Q19 — the five habits", a: "Link · weaken the small words · group into ideas · stress the key word · one marker per turn.", why: "One habit per week for five weeks. All five at once produces self-consciousness and no gain." },
      { q: "Q20 — the speaking task", a: "Marked on linking and rhythm, not on accent", why: "Fewer than three separated words in the paragraph, and a shadow that matches the original's rhythm." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q5, Q12 and Q18 are the diagnostic block: the linking rules, why even stress loses meaning, and the honest position on accent. Errors here need slides 6, 19 and 10 again."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Speaking and listening only.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Shadow the same 30 seconds five times", d: "Record the fifth attempt. Same audio all week." },
      { t: "Mark the linking in a paragraph and read it aloud", d: "Three times, faster each time." },
      { t: "Say ten sentences twice — all-strong, then weak", d: "Hear the rhythm change." },
      { t: "Watch one scene three times", d: "No subtitles · English subtitles · no subtitles." },
      { t: "Record 60 seconds and transcribe it exactly", d: "Count your fillers. Compare with Monday." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's task is the highest-value one and it must be the SAME thirty seconds all week. Repetition on identical audio is where the gain is.",
      tip: "Thursday's three-pass method is what makes films useful. One scene three times beats a whole film once, every time.",
      activity: "Ask learners to bring Monday's and Friday's recordings to compare.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "A paragraph with every linking point marked", d: "Plus a recording of you reading it at speed." },
      { t: "A full transcript of 60 seconds of your own speech", d: "Every “um”. Plus three sentences on what you noticed." },
      { t: "Record your two-minute speaking challenge", d: "Marked reading · shadowing · six stress placements · five adverbs · three markers." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 2 is the one learners resist and the one that changes most. Reassure them by pointing at slide 44 before they start.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording by voice, commenting on linking and rhythm only. Comment on accent and the module is undone.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaLink", title: "Marked paragraph — 8 marks", desc: "All linking points marked (4) · read with fewer than three separated words (4)." },
      { icon: "FaPen", title: "Transcript — 7 marks", desc: "Complete and honest, including fillers (4) · three observations about your own speech (3)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "Consistent linking (3) · recognisable shadow rhythm (2) · six stress placements (2) · five adverbs (2) · three markers (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → daily linking drill with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Note what is NOT marked: accent, speed and vocabulary range. Say so explicitly — it is the point of slide 10 made into a marking policy.",
      tip: "Give the mark privately with two comments, one on linking and one on rhythm.",
      mistakes: "Do not deduct for a strong accent under any circumstances. That would contradict the module's central claim.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaLink", title: "Linking", desc: "Three rules. Consonant→vowel is the one that matters most." },
      { icon: "FaEraser", title: "Elision and assimilation", desc: "Sounds vanish and sounds merge. Recognise both." },
      { icon: "FaVolumeDown", title: "Weak forms", desc: "to · of · and · can · was · have. All schwa, all quiet." },
      { icon: "FaAlignLeft", title: "Thought groups", desc: "Three to seven words. Never pause inside a phrase." },
      { icon: "FaBullseye", title: "Stress for meaning", desc: "Six words, six meanings. The loudest word is the message." },
      { icon: "FaComments", title: "Discourse markers", desc: "Right · look · actually · I mean · anyway · mind you." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to warm-up task 1 on slide 3 and have the class say “What are you going to do about it?” again at speed. Compare with their first attempt.",
      tip: "Also revisit task 3: do people still ask them to repeat? The honest answer usually changes within a few weeks of linking practice.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The natural speech toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaLink", title: "The three linking rules", desc: "1  consonant → vowel  —  “tur-ni-toff”\n2  vowel → vowel: add /w/ or /j/\n     “go-won”  ·  “I-yam”\n3  same consonant: say it ONCE\n     “bi-game”" },
      { icon: "FaVolumeDown", title: "The weak forms", desc: "to /tə/      ·  of /əv/\nand /ən/  ·  can /kən/\nwas /wəz/  ·  have /həv/\n\nAll schwa. All quiet." },
      { icon: "FaComments", title: "Six markers", desc: "Right — let's begin / move on\nLook — I'm being direct  (careful!)\nActually — a correction\nI mean — explaining\nAnyway — back to the point.  Mind you — a qualification" },
      { icon: "FaCheck", title: "Five habits", desc: "1 Link consonant into vowel\n2 Weaken the small words\n3 Group into 3–7 word ideas\n4 Stress the word that matters\n5 One marker per turn" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The first and fourth boxes are the ones to work from.",
      tip: "Print the fourth box. One habit per week for five weeks is the whole plan.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Welcome to Level 4",
    text: "Everything from here is about delivery — not about knowing more English.",
    sub: "You already have the grammar, the vocabulary and the accuracy.\nWhat changes now is rhythm, argument, presence and the ability to hold a room.",
    chips: ["NEXT — Module 2", "Opinions & Building an Argument", "Making a case that people cannot easily dismiss"],
    notes: tn({
      time: "5 minutes.",
      how: "Name the shift. Levels 1 to 3 built the language; Level 4 is about what you do with it. Learners who feel they have plateaued are usually not missing knowledge — they are missing delivery.",
      tip: "Preview Module 2 honestly: it moves from sounding natural to arguing well, which is where advanced English is actually judged.",
      activity: "Ask every learner to name the one habit from slide 20 they will work on this week.",
    }),
  });
};
