"use strict";
/* LEVEL 4 · MODULE 7 — Idiom, Humour & Register   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 4", levelNo: LV.no, levelName: "Advanced Spoken\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Idiom, Humour & Register",
    sub: "The last things that mark somebody as outside the language. Not barriers to being understood — markers of not yet being inside it.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "40", v: "USEFUL IDIOMS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open with the module's honest position: none of this is needed to be understood. All of it affects how easily you fit into an English-speaking room.",
      tip: "This module is more about recognition than production. Say so early — learners fear they must start telling jokes, and they do not.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. Mostly about recognising, not performing.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Understand idioms you have never heard before", d: "From context, in real time. You cannot learn them all." },
      { t: "Use about forty idioms confidently", d: "The ones that appear constantly. Not the colourful ones in phrasebooks." },
      { t: "Move between four registers deliberately", d: "Formal · neutral · friendly · very informal." },
      { t: "Recognise British understatement and irony", d: "The thing that most confuses competent speakers." },
      { t: "Know when NOT to be funny", d: "The most valuable judgement in the module." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 1 is the important one. There are thousands of idioms and learning them individually is not a strategy.",
      tip: "Objective 5 protects learners. Humour that misfires in a second language costs more than no humour at all.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what do these actually mean?", sub: "Guess. You will be right more often than you expect.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaQuestion", title: "1 · Three idioms", desc: "“Let's touch base.”\n“That ship has sailed.”\n“I'm on the fence.”\nWhat do they mean?" },
      { icon: "FaSmile", title: "2 · Was that a joke?", desc: "“Well, that went well.” — said after a disaster. What does the speaker mean?" },
      { icon: "FaExclamationTriangle", title: "3 · Have you misread one?", desc: "Has an English speaker ever said something you took the wrong way? What happened?" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Task 1's idioms are all guessable from their images. Learners will get two of three, which makes the point of slide 5 before you teach it.",
      mistakes: "Correct nothing. Note which ones were guessed and which were not — the pattern is informative.",
      tip: "Task 2 is the irony diagnostic. Learners who take it literally need slide 8 most.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "You cannot learn every idiom. You can learn how to guess, and about forty that matter.",
    sub: "English has thousands. Native speakers do not know them all either.\nWhat they have is a method for working out the ones they meet — and so can you.",
    chips: ["Guess the rest", "Forty that matter", "Recognition before production"],
    notes: tn({
      time: "7 minutes.",
      how: "The third chip is the module's frame. Understanding an idiom is worth far more than using it, and using one wrongly is worse than not using it.",
      mistakes: "Learners try to memorise long idiom lists. Most such idioms are rare, regional or dated, and using them marks you out as much as not knowing them.",
      extra: "This is the Level 2 Module 6 guessing strategy applied to a harder target. The four clues still work.",
      tip: "Reassure the class: nobody expects a second-language speaker to produce idioms fluently. Understanding them is the realistic goal.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — guessing idioms
  L.panelSide({
    sec: SEC.con, title: "How to guess an idiom you have never met", sub: "Four clues. They work most of the time.",
    panelW: 6.8,
    panel: { label: "The four clues", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "1.  THE PICTURE\n     “That ship has sailed.” — the chance\n     has gone. The image tells you.\n\n2.  IS IT POSITIVE OR NEGATIVE?\n     Tone and context usually settle it.\n\n3.  WHAT WOULD FIT HERE?\n     What would a normal sentence say\n     at this point?\n\n4.  ASK — it is completely normal.\n     “Sorry, what does that mean?”" },
    side: { label: "Why this beats memorising", color: C.green, size: 16, items: [
      "There are thousands. You will always meet new ones.",
      "The image works for most idioms — they were pictures once.",
      "Native speakers guess unfamiliar idioms constantly, from the same clues.",
      "Clue 4 costs nothing. Asking about an idiom is not a sign of weak English.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "This is the Level 2 Module 6 guessing method, now applied to idioms. Say the connection — learners already own the technique.",
      mistakes: "Freezing at an unfamiliar idiom and losing the next three sentences. Same error as an unknown word, same fix.",
      extra: "Clue 1 works because idioms are dead metaphors. “The ball is in your court” still carries its picture.",
      tip: "Clue 4 needs permission. Learners believe asking exposes them; native speakers ask each other about idioms regularly.",
      activity: "Guess ten: give ten unfamiliar idioms in context and have learners guess each and name the clue used.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the forty that matter
  L.table({
    sec: SEC.con, title: "The idioms that actually appear at work",
    sub: "Not colourful. Just constant.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 16.5, headSize: 16, colW: [3.6, 4.0, 4.533],
      rows: [
        ["Idiom", "Means", "Used when"],
        ["touch base", "make brief contact", "“Let's touch base on Friday.”"],
        ["the ball is in their court", "it's their decision now", "after you have done your part"],
        ["that ship has sailed", "the chance has gone", "closing off an option"],
        ["on the fence", "undecided", "“I'm still on the fence about it.”"],
        ["a long shot", "unlikely but worth trying", "proposing something risky"],
        ["back to the drawing board", "start again", "when a plan has failed"],
      ],
    },
    note: "These six appear weekly in professional English. The colourful ones in phrasebooks — “raining cats and dogs” — appear almost never.",
    notes: tn({
      time: "16 minutes.",
      how: "The note matters. Learners are often taught vivid, rare idioms and then use them, which marks them out more than silence would.",
      mistakes: "Producing dated idioms learned from old textbooks. “It's raining cats and dogs” is understood and nobody says it.",
      extra: "The full forty are in the homework. These six are the highest-frequency ones and worth memorising today.",
      tip: "Frequency is the test. If you have not heard it from a real person in the last month, do not use it.",
      activity: "Six sentences: every learner uses all six idioms in a sentence about their own work.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — register
  L.table({
    sec: SEC.con, title: "Four registers — the same message, four ways",
    sub: "Choosing wrongly is more visible than a grammar error.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [2.8, 5.0, 4.333],
      rows: [
        ["Register", "Example", "Use it with"],
        ["Formal", "“I regret that I am unable to attend.”", "writing, officials, strangers"],
        ["Neutral", "“I'm afraid I can't make it.”", "most professional situations"],
        ["Friendly", "“Sorry, I can't come.”", "colleagues you know"],
        ["Very informal", "“Can't make it, sorry!”", "close friends, quick messages"],
      ],
    },
    note: "Neutral is the safe default and covers most of working life. Formal used with a colleague sounds cold; very informal used with a stranger sounds careless.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the practical rule. Learners over-use formal register because it feels safer, and it makes them sound distant.",
      mistakes: "Register errors are more noticeable than grammar errors and nobody corrects them. Same problem as Level 3 Module 5.",
      extra: "Register is carried by vocabulary — regret/afraid/sorry — and by contractions. Formal English avoids them; informal English requires them.",
      tip: "If unsure, use neutral. It is never badly wrong in either direction.",
      activity: "Four versions: give five messages and have learners write all four registers of each.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — understatement and irony
  L.compare({
    sec: SEC.con, title: "Understatement and irony",
    sub: "What confuses competent speakers most — especially in British English.",
    left: { h: "What they say", items: ["“That's not ideal.”", "“It's a bit of a problem.”", "“Well, that went well.”  (after a disaster)", "“I'm not entirely convinced.”", "“It could be worse.”"] },
    right: { h: "What they mean", items: ["This is bad.", "This is a serious problem.", "That was a catastrophe.", "I strongly disagree.", "This is quite bad, but I'm being cheerful."] },
    note: "The rule: the more serious the problem, the milder the language. “Not ideal” from a British colleague can mean something has gone badly wrong.",
    notes: tn({
      time: "17 minutes. The most useful slide in the module.",
      how: "The inverse relationship in the note is the key. Mild language does not mean a mild problem — often the opposite.",
      mistakes: "Taking understatement literally and under-reacting. A learner who hears “that's not ideal” and does nothing has misread a serious signal.",
      extra: "Item 3 is irony: saying the opposite with a tone that marks it. Tone is the only clue, which is why it is hard in a second language.",
      tip: "This is not universal. American English uses less understatement. But learners in international settings will meet plenty of it.",
      activity: "Translate the understatement: give ten mild statements and have learners say what is actually meant.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — humour
  L.panelSide({
    sec: SEC.con, title: "Humour — and when not to try", sub: "The most valuable judgement in this module.",
    panelW: 6.9,
    panel: { label: "Safe and unsafe", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "USUALLY SAFE\n  ·  gentle self-deprecation\n     “I've been here a week and I'm\n      already lost.”\n  ·  agreeing with a shared complaint\n     “Tell me about it.”\n\nRISKY IN A SECOND LANGUAGE\n  ·  sarcasm — tone carries it\n  ·  wordplay and puns\n  ·  anything about a person present" },
    side: { label: "The judgement", color: C.green, size: 16, items: [
      "You do not need to be funny. Nobody is judging you on it.",
      "Understanding a joke and laughing is full participation.",
      "Sarcasm delivered without native intonation reads as rudeness.",
      "If in doubt, do not. A failed joke costs more than no joke.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The side panel's first two points relieve real pressure. Learners feel obliged to be funny and are not.",
      mistakes: "Attempting sarcasm. It depends entirely on intonation, and delivered flatly it sounds like an insult.",
      extra: "Self-deprecation is safe almost everywhere and it also signals confidence, which is why it works.",
      tip: "“Tell me about it” meaning “I know exactly” is a very useful piece of shared-complaint humour and it is low-risk.",
      activity: "Safe or risky: give ten attempted jokes and have learners classify each.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — small talk
  L.table({
    sec: SEC.con, title: "Small talk — the part with rules nobody states",
    sub: "It is not meaningless. It is how relationships open.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16, headSize: 15.5, colW: [3.2, 4.4, 4.533],
      rows: [
        ["Safe topics", "Risky topics", "Why"],
        ["weather · travel · food", "salary · religion · politics", "the first three ask nothing of anyone"],
        ["weekend · sport · the journey", "age · marital status · weight", "the second group is personal"],
        ["work in general terms", "specific criticism of people", "criticism travels"],
        ["asking THEM a question", "talking only about yourself", "small talk is turn-taking"],
      ],
    },
    note: "The rule of small talk: ask a question back. A statement without a return question ends the exchange, whatever the topic.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the mechanism. Small talk is a turn-taking ritual, and the return question is what keeps it going.",
      mistakes: "Answering fully and stopping. “Fine, thanks” with no return question closes the conversation politely and completely.",
      extra: "Salary and age are normal topics in some cultures and awkward in most English-speaking professional settings. Worth naming plainly.",
      tip: "Small talk is not trivial. It is how people decide whether to work with you, which makes it professionally serious.",
      activity: "Three exchanges: every learner holds a two-minute small-talk conversation with a return question every turn.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "get the hang of", ipa: "/ɡet ðə ˈhæŋ əv/", pos: "idiom", icon: "FaTools",
      meaning: "To learn how to do something after some practice.",
      example: "I'm starting to get the hang of the new system.",
      mistake: "“Get the hang OF something” — the preposition is fixed. And it implies practice, not instruction.",
      notes: tn({ time: "7 minutes.",
        how: "One of the most frequent idioms in workplace English and completely safe to produce. Learners understand it before they use it.",
        mistakes: "“Get the hang on” or “get hang of”. The article and preposition are both fixed.",
        extra: "“I'm still getting the hang of it” is a very useful, modest, accurate thing to say in a new job.",
        tip: "It signals progress without claiming mastery, which is exactly right for somebody new.",
        activity: "Three things: every learner says three things they are still getting the hang of." }) },

    { word: "on the same page", ipa: "/ɒn ðə seɪm ˈpeɪdʒ/", pos: "idiom", icon: "FaCheckDouble",
      meaning: "In agreement, with the same understanding.",
      example: "Let's make sure we're on the same page before we start.",
      mistake: "“ON the same page”, not “in”. It means shared understanding, not agreement with a decision.",
      notes: tn({ time: "7 minutes.",
        how: "This is the Level 3 Module 5 confirming habit as an idiom. “Are we on the same page?” is a very natural closing check.",
        mistakes: "Using it to mean “we agree”. It means we understand the same thing, which may include agreeing to disagree.",
        extra: "get on the same page · make sure we're on the same page · we're not on the same page.",
        tip: "It is a softer alternative to “have I got that right?” and does the same job.",
        activity: "Check understanding: pairs end five short exchanges with an on-the-same-page check." }) },

    { word: "touch base", ipa: "/tʌtʃ ˈbeɪs/", pos: "idiom", icon: "FaPhone",
      meaning: "To make brief contact, usually to check progress.",
      example: "Let's touch base on Friday. I'll touch base with the team.",
      mistake: "It means a SHORT contact, not a meeting. “Let's touch base” and then talking for an hour is a small social error.",
      notes: tn({ time: "7 minutes.",
        how: "Extremely frequent in professional English and completely safe. It comes from baseball, which nobody needs to know.",
        mistakes: "Treating it as a request for a long meeting. It implies five or ten minutes.",
        extra: "touch base with somebody · touch base on something · let's touch base next week.",
        tip: "It is a useful low-commitment way to keep something alive without asking for real time.",
        activity: "Arrange it: learners arrange five brief check-ins using the phrase." }) },

    { word: "a long shot", ipa: "/ə lɒŋ ˈʃɒt/", pos: "idiom", icon: "FaBullseye",
      meaning: "Unlikely to succeed, but worth attempting.",
      example: "It's a long shot, but could you ask them?",
      mistake: "It softens a request by admitting it may fail — which makes refusing easy and asking safe.",
      notes: tn({ time: "8 minutes.",
        how: "This is a politeness device as much as an idiom. “It's a long shot, but…” gives the other person permission to say no.",
        mistakes: "Learners avoid asking for unlikely things at all. This phrase makes the ask cost nothing.",
        extra: "“I know it's a long shot, but…” is the full frame and it is very natural.",
        tip: "It connects to Module 6: an ask that is easy to refuse is easier to make, and sometimes it succeeds.",
        activity: "Long shots: every learner makes three unlikely requests using the frame." }) },

    { word: "not ideal", ipa: "/nɒt aɪˈdɪəl/", pos: "understatement", icon: "FaExclamationTriangle",
      meaning: "Literally “not perfect”. In practice, often “this is bad”.",
      example: "“The server's been down since Monday.” “That's not ideal.”",
      mistake: "This is understatement. The milder the words, the more serious the problem often is.",
      notes: tn({ time: "8 minutes.",
        how: "This is the key to slide 8. It is worth teaching as vocabulary because learners will hear it constantly and mis-read it.",
        mistakes: "Hearing “not ideal” and concluding the problem is minor. From a British colleague it frequently means something serious.",
        extra: "The family: not ideal · a bit of a problem · slightly awkward · less than helpful. All are stronger than they sound.",
        tip: "Teach learners to check: “When you say not ideal — how bad is it?” That question is completely acceptable.",
        activity: "How bad? Give eight understatements and have learners rate the real severity." }) },
  ];
  VOCAB.forEach((v, i) => {
    L.vocab({
      sec: Object.assign({}, SEC.voc, { label: "Vocabulary " + (i + 1) + " of 5" }),
      title: "New item: " + v.word, sub: "Item · pronunciation · meaning · example · common mistake",
      word: v.word, ipa: v.ipa, pos: v.pos, icon: v.icon,
      meaning: v.meaning, example: v.example, mistake: v.mistake,
      color: C.vocab, tint: C.vocabTint, inkCol: C.vocabInk, notes: v.notes,
    });
  });

  // ============================================================ 16 · GRAMMAR 1
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Register Language 1 of 5" }),
    title: "What carries register",
    sub: "Four things. Change them and the register changes.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 16.5, headSize: 16, colW: [3.2, 4.4, 4.533],
      rows: [
        ["Carrier", "Formal", "Informal"],
        ["Contractions", "I am unable to", "I can't"],
        ["Vocabulary", "require · commence · assist", "need · start · help"],
        ["Sentence length", "long, with subordinate clauses", "short"],
        ["Directness", "“I wonder whether it might be…”", "“How about…?”"],
      ],
    },
    note: "Contractions are the quickest signal. Writing “I am unable to attend” to a colleague sounds cold; “I can't make it” to a ministry sounds careless.",
    notes: tn({
      time: "15 minutes.",
      how: "Contractions are the fastest lever. Changing only those moves a message a whole register in either direction.",
      mistakes: "Formal vocabulary with informal structure, or the reverse. Mixed register is more noticeable than consistently wrong register.",
      extra: "This connects directly to Level 3 Module 8's plain English work. There the target was clarity; here it is appropriateness.",
      tip: "Have learners take one message and change only the contractions. The register shift is audible.",
      activity: "Move the register: give five neutral messages and have learners make each formal and then very informal.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Register Language 2 of 5" }),
    title: "The understatement family",
    sub: "Learn to hear the real meaning.",
    left: { h: "You hear", items: ["“That's not ideal.”", "“I'm not entirely sure about that.”", "“It's a bit awkward.”", "“That's one way of doing it.”", "“I might have a slight concern.”"] },
    right: { h: "They mean", items: ["This is bad.", "I disagree.", "This is a real problem.", "I think that's wrong.", "I have a serious objection."] },
    note: "When you are unsure, ask: “When you say not ideal — how serious is it?” Nobody minds being asked, and mis-reading it costs far more.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the practical safeguard. Learners cannot always read the strength, and asking is completely acceptable.",
      mistakes: "Row 4 — “that's one way of doing it” — is the most commonly missed. It sounds neutral and it is not.",
      extra: "Understatement is not dishonesty. It is a politeness system that assumes the listener will decode it.",
      tip: "Learners from more direct cultures find this genuinely irritating. Acknowledge that — and then teach the decoding anyway.",
      activity: "Decode ten: read ten understatements and have learners give the real meaning.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Register Language 3 of 5" }),
    title: "Twelve more idioms that earn their place",
    sub: "All frequent. All safe to produce.",
    table: {
      color: C.gram, rowH: 0.4, fontSize: 16, headSize: 15.5, colW: [4.0, 3.8, 4.333],
      rows: [
        ["Idiom", "Means", "Register"],
        ["in the loop", "kept informed", "neutral"],
        ["a heads-up", "advance warning", "neutral"],
        ["run something by somebody", "get their view first", "neutral"],
        ["on the back burner", "postponed, not cancelled", "neutral"],
        ["a grey area", "unclear, not covered by the rules", "neutral"],
        ["cut corners", "do it badly to save time", "slightly negative"],
        ["bite the bullet", "accept something unpleasant", "neutral"],
      ],
    },
    note: "All of these are safe in professional English. None of them is colourful enough to sound like a phrasebook.",
    notes: tn({
      time: "15 minutes.",
      how: "Frequency is the selection criterion. Every one of these appears in ordinary meetings and none marks the speaker out.",
      mistakes: "Learners want the vivid ones. Vivid usually means rare, and rare means noticeable.",
      extra: "“Can I run something by you?” is one of the most useful phrases here and connects to Level 3 Module 5.",
      tip: "“Keep me in the loop” and “give me a heads-up” are both requests. Teach them as functional, not decorative.",
      activity: "Seven in context: every learner uses all seven in sentences about real work.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Register Language 4 of 5" }),
    title: "Small talk — the mechanics", sub: "Answer, add, ask back.",
    panelW: 6.9,
    panel: { label: "The three-part turn", color: C.gram, tint: C.surf2, size: 16.5, lsm: 1.38,
      text: "“How was your weekend?”\n\n1.  ANSWER\n     “Good, thanks.”\n\n2.  ADD ONE DETAIL\n     “I went to my sister's in Adama.”\n\n3.  ASK BACK\n     “How about you?”\n\nWithout part 3, the conversation ends." },
    side: { label: "Why part 3 is the rule", color: C.gram, size: 16, items: [
      "Small talk is turn-taking. A turn that does not return closes it.",
      "Part 2 gives them something to ask about — it opens a door.",
      "“Good, thanks.” alone is polite and final.",
      "Three parts, ten seconds, and the relationship is open.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Part 2 is the one learners omit and it is what makes the exchange usable. The detail gives the other person something to respond to.",
      mistakes: "Answering only. “Good, thanks” is polite and it ends the conversation completely, which is rarely what was intended.",
      extra: "This is the hand-over move from Module 4, in its social form. The same principle: end your turn by giving it away.",
      tip: "Ten seconds of small talk done properly is how colleagues become people who help you. It is not trivial.",
      activity: "Answer, add, ask: pairs run ten small-talk exchanges using all three parts each time.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Register Language 5 of 5" }),
    title: "Put it all together — five habits", sub: "Mostly about listening, not performing.",
    color: C.gram, size: 19, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Guess unfamiliar idioms from the picture — do not stop", d: "And ask if it matters. Asking is normal." },
      { t: "Use only idioms you have heard a real person say", d: "If it is not in your last month, do not produce it." },
      { t: "Default to neutral register", d: "Formal to a colleague is cold; informal to a stranger is careless." },
      { t: "Assume understatement means more than it says", d: "“Not ideal” is often serious. Ask how serious." },
      { t: "Answer, add a detail, ask back", d: "Every small-talk turn. Without part three it ends." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Habit 2 is the protective one. It stops learners deploying dated idioms from textbooks, which is a real and common problem.",
      mistakes: "Habit 4 skipped because the language sounds mild. That is exactly the trap understatement sets.",
      extra: "Four of the five are about receiving rather than producing, which is the module's honest emphasis.",
      tip: "Print these five. Habit 5 alone changes how quickly somebody settles into an English-speaking workplace.",
      activity: "One habit each: assign each learner one habit to apply for a week and report back.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — guessing idioms", sub: "Use the picture.", items: [
      { q: "“That ship has sailed.” What does it mean?", a: "The chance has gone. It is too late.", why: "The image does the work — a ship that has left cannot be boarded. Most idioms are dead metaphors." },
      { q: "“The ball is in your court.” What does it mean?", a: "It is your decision now.", why: "From tennis. You do not need to know the sport — the picture of waiting for someone to act is enough." },
      { q: "You cannot guess one and it matters. What do you do?", a: "Ask. “Sorry, what does that mean?”", why: "Completely normal. Native speakers ask each other about unfamiliar idioms regularly." },
    ] },
    { title: "Guided examples 2 — which idioms to use", sub: "Frequency is the test.", items: [
      { q: "Should you say “it's raining cats and dogs”?", a: "No. It is understood and nobody says it.", why: "Using a dated idiom marks you out more than not using one at all." },
      { q: "What is the test for whether to use an idiom?", a: "Have you heard a real person say it in the last month?", why: "Frequency, not colour. The useful idioms are the boring ones." },
      { q: "Is “let's touch base” safe?", a: "Yes — it appears weekly in professional English.", why: "Frequent, neutral and completely unremarkable, which is exactly what you want." },
    ] },
    { title: "Guided examples 3 — register", sub: "Neutral is the default.", items: [
      { q: "You are emailing a ministry official you have never met. Which register?", a: "Formal.", why: "Stranger, official context, written. All three point the same way." },
      { q: "You are messaging a colleague you sit next to. Which register?", a: "Friendly, or very informal.", why: "Formal here reads as cold or sarcastic. Register is about the relationship, not about correctness." },
      { q: "You are not sure. Which do you choose?", a: "Neutral.", why: "It is never badly wrong in either direction, and it covers most of working life." },
    ] },
    { title: "Guided examples 4 — understatement", sub: "Milder words, bigger problem.", items: [
      { q: "A colleague says “that's not ideal”. How bad is it?", a: "Possibly quite bad. Ask.", why: "The milder the language, the more serious the problem often is — especially in British English." },
      { q: "“I'm not entirely sure about that.” What do they mean?", a: "They disagree.", why: "It is a full disagreement expressed at about a quarter of its strength." },
      { q: "How do you check?", a: "“When you say not ideal — how serious is it?”", why: "Completely acceptable to ask, and far cheaper than mis-reading it." },
    ] },
    { title: "Guided examples 5 — humour and small talk", sub: "Know when not to.", items: [
      { q: "Should you attempt sarcasm in English?", a: "Usually not. It depends entirely on intonation.", why: "Delivered without native intonation it reads as rudeness rather than as a joke." },
      { q: "What kind of humour is safe?", a: "Gentle self-deprecation.", why: "“I've been here a week and I'm already lost” is safe everywhere and signals confidence." },
      { q: "“How was your weekend?” “Good, thanks.” What is missing?", a: "A detail and a return question.", why: "Answer, add, ask back. Without part three the conversation politely ends." },
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
    title: "A meeting full of idioms",
    sub: "Eight idioms in six lines. All of them ordinary.",
    turns: [
      { who: "BETHLEHEM", text: "Before we start — are we all on the same page about the March deadline?", side: "l" },
      { who: "TOLOSA", text: "I think so. Although the funding question is still a bit of a grey area.", side: "r" },
      { who: "BETHLEHEM", text: "Let's put that on the back burner and touch base on Friday.", side: "l" },
      { who: "MIMI", text: "Can I run something by you first? It's a long shot, but could we ask Adama to cover it?", side: "r" },
      { who: "BETHLEHEM", text: "That ship has sailed, I'm afraid — they closed their budget in January.", side: "l" },
      { who: "MIMI", text: "Fair enough. Keep me in the loop when you hear back.", side: "r" },
    ],
    note: "On the same page · a grey area · on the back burner · touch base · run something by · a long shot · that ship has sailed · in the loop.",
    notes: tn({
      time: "16 minutes.",
      how: "Have learners find all eight. Then point out that none of them is colourful — this is completely ordinary professional English.",
      mistakes: "Learners expect idiomatic English to sound exotic. It sounds like this: unremarkable, frequent and invisible to native speakers.",
      extra: "“Fair enough” is a small but very useful item: it accepts something without fully agreeing.",
      tip: "Ask how much of this they already understood. Usually most of it, which is encouraging and accurate.",
      activity: "Eight idioms: pairs write their own six-line meeting using at least six of the eight.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Understatement in action",
    sub: "Read it literally, then read it properly.",
    turns: [
      { who: "MANAGER", text: "How's the Adama report coming along?", side: "r" },
      { who: "YONAS", text: "It's… coming. We've had a few small issues with the data.", side: "l" },
      { who: "MANAGER", text: "Right. Nothing we need to worry about?", side: "r" },
      { who: "YONAS", text: "Well — it's not ideal. Two of the three datasets are missing.", side: "l" },
      { who: "MANAGER", text: "Ah. That's slightly more than a small issue, then.", side: "r" },
      { who: "YONAS", text: "It's a bit of a problem, yes.", side: "l" },
    ],
    note: "“A few small issues” = two thirds of the data is missing. Both speakers are understating, and both understand each other perfectly.",
    notes: tn({
      time: "16 minutes.",
      how: "Read it once literally, then explain what each line actually means. The gap between the two readings is the whole slide.",
      mistakes: "A learner hearing this would conclude the report is nearly fine. It is not — two thirds of the data is gone.",
      extra: "The manager's “slightly more than a small issue” is itself an understatement, and it is a gentle correction of Yonas's framing.",
      tip: "Ask what a direct version would sound like. “Two of three datasets are missing and we cannot finish” — and note it would sound alarming in a way the speakers are avoiding.",
      activity: "Translate it: pairs rewrite the whole dialogue in direct language and compare the effect.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Phrases that make you sound inside the language",
    sub: "Six small items. All frequent, all safe.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaCheck", title: "“Fair enough.”", desc: "Accepts something without fully agreeing." },
      { icon: "FaCommentDots", title: "“Tell me about it.”", desc: "“I know exactly.” Agreeing with a complaint." },
      { icon: "FaQuestion", title: "“Can I run something by you?”", desc: "Asks for a view before committing." },
      { icon: "FaBell", title: "“Give me a heads-up.”", desc: "Asks for advance warning." },
      { icon: "FaHandPaper", title: "“It's a long shot, but…”", desc: "Makes an unlikely ask easy to refuse." },
      { icon: "FaSyncAlt", title: "“Keep me in the loop.”", desc: "Asks to stay informed." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "All six are functional rather than decorative. Each one does a job that plain language does less economically.",
      mistakes: "“Tell me about it” said with the wrong intonation sounds like a genuine request. It needs a falling, weary tone.",
      extra: "“Fair enough” is the most useful of the six. It closes a disagreement without conceding, which is often exactly right.",
      tip: "These six are safe in any professional setting and none of them will mark a speaker as trying too hard.",
      activity: "Six in a meeting: run a ten-minute discussion where every learner uses at least four.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "A", text: "Are we all on the same ______ about Friday?", side: "l" },
      { who: "YOU", text: "I think so. Though the budget is still a bit of a ______ area.", side: "r" },
      { who: "A", text: "Let's put that on the back ______ for now.", side: "l" },
      { who: "YOU", text: "Can I ______ something by you? It's a long ______ , but could we ask Adama?", side: "r" },
      { who: "A", text: "That ship has ______ , I'm afraid.", side: "l" },
      { who: "YOU", text: "Fair enough. Keep me in the ______ .", side: "r" },
    ],
    note: "Use these:  “page”  ·  “grey”  ·  “burner”  ·  “run”  ·  “shot”  ·  “sailed”  ·  “loop”",
    notes: tn({
      time: "13 minutes.",
      how: "Have pairs perform it at natural speed with Module 1's linking. Idioms delivered slowly and separately sound learned rather than owned.",
      answers: "1 page · 2 grey · 3 burner · 4 run · 5 shot · 6 sailed · 7 loop",
      mistakes: "Learners hesitate before each idiom, which marks them as retrieved rather than natural. Speed is part of the target.",
      tip: "Run it three times. By the third the idioms come out as single units, which is the point.",
      activity: "Do it again about a different project.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — register and small talk", sub: "Four rounds. Three minutes each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say the same message in all four registers", d: "Formal · neutral · friendly · very informal." },
      { t: "Small talk: answer, add a detail, ask back — ten times", d: "Partner checks all three parts every turn." },
      { t: "Use six idioms naturally in a work conversation", d: "Partner ticks each one. No hesitation before them." },
      { t: "Your partner understates. You check how serious it is.", d: "“When you say not ideal — how bad?”" },
    ],
    notes: tn({
      time: "14 minutes for all four rounds.",
      how: "Round 2 is the highest-value one. Ten repetitions of answer-add-ask makes the three-part turn automatic.",
      mistakes: "Round 3 with hesitation. An idiom retrieved slowly sounds studied; the target is producing it as one unit.",
      tip: "Round 4 gives learners permission to check. Most never ask, and mis-reading understatement is expensive.",
      activity: "Ten turns: count the return questions in round 2 — the target is ten out of ten.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — guess the idiom", sub: "Ten you have never met. Use the four clues.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Your partner reads an idiom in a sentence", d: "You have never heard it. Guess." },
      { t: "Say which clue you used", d: "Picture · positive or negative · what would fit · ask." },
      { t: "Score yourself out of ten", d: "Most people get six or seven." },
      { t: "For the ones you missed — ask", d: "“Sorry, what does that mean?” Practise saying it." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Step 3 is encouraging and accurate. Six or seven out of ten from pure guessing is a genuinely useful hit rate.",
      mistakes: "Refusing to guess. The instruction is to guess even when unsure — a wrong guess costs nothing here.",
      extra: "The picture clue works for most. Idioms that resist it — “by and large” — are usually the older ones.",
      tip: "Step 4 normalises asking. Learners who have said “what does that mean?” once in class will say it at work.",
      activity: "Ten idioms: prepare ten genuinely unfamiliar ones in context.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — four registers", sub: "Same message. Four ways. Say them all.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“I can't come to the meeting.”", d: "All four registers." },
      { t: "“I need this by Friday.”", d: "All four." },
      { t: "“Your figures are wrong.”", d: "All four. Notice how hard formal is." },
      { t: "“I don't agree.”", d: "All four." },
      { t: "Partner names the register each time", d: "Without being told which you intended." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Step 5 is the test. If the partner cannot identify the intended register, the markers were not clear enough.",
      mistakes: "Producing two registers and calling it four. Formal and neutral often collapse together — push for a real difference.",
      extra: "Item 3 is the hard one. Telling somebody their figures are wrong in formal register requires real circumlocution.",
      tip: "Contractions are the fastest lever. Have learners change only those and hear the shift.",
      activity: "Twenty versions: five messages, four registers each.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the tone of understatement",
    sub: "The words are mild. The tone tells you how serious it is.",
    left: { h: "Say these FLAT and level", items: ["“That's not ideal.”", "“It's a bit of a problem.”", "“I'm not entirely convinced.”", "→ Sounds genuinely mild."] },
    right: { h: "Now say them SLOWER, with a fall", items: ["“That's… not ideal.”", "“It's a bit of a problem.”  ( falling )", "“I'm not entirely convinced.”  ( slow )", "→ Now it sounds serious."] },
    note: "The same words carry different weight depending on pace and fall. Slowing down is how English speakers signal that mild words mean something serious.",
    notes: tn({
      time: "15 minutes.",
      how: "Demonstrate both. Learners can usually hear the difference immediately even if they could not have described it.",
      mistakes: "Listening only to the words. In understatement the words are deliberately misleading and the tone carries the truth.",
      extra: "A pause before the understatement — “That's… not ideal” — is a strong signal that it is serious.",
      tip: "This is a listening skill more than a speaking one. Learners need to decode it far more often than produce it.",
      activity: "How serious: say ten understatements at two different paces and have learners rate the severity.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — small talk that goes somewhere", sub: "Answer, add, ask back. Ten turns.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“How was your weekend?”", d: "Answer · one detail · ask back." },
      { t: "“Have you been busy?”", d: "All three parts." },
      { t: "“How's the new job going?”", d: "All three parts." },
      { t: "“Did you have far to come?”", d: "All three parts." },
      { t: "Keep one exchange going for two minutes", d: "Partner counts your return questions." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Step 5 is the real test. Two minutes of small talk requires roughly six return questions and it feels long to learners at first.",
      mistakes: "Answering fully and stopping. “Good thanks” is polite and it closes the exchange completely.",
      extra: "The added detail is what makes it work: it gives the other person something to ask about.",
      tip: "Small talk determines who helps you at work. Say that plainly — it stops learners treating it as a waste of time.",
      activity: "Two minutes: every learner sustains one small-talk exchange for a full two minutes.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "3 minutes. Mostly recognition, some production.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Use six idioms from this module naturally", d: "No hesitation before them. Say which six." },
      { t: "Say one message in all four registers", d: "Name each register as you go." },
      { t: "Decode five understatements aloud", d: "“When they say X, they mean Y.”" },
      { t: "Hold a 90-second small-talk exchange", d: "Answer, add, ask back — every turn." },
      { t: "Say one thing you would NOT joke about, and why", d: "The judgement from slide 9." },
    ],
    notes: tn({
      time: "18 minutes including listening back.",
      how: "Step 1 is assessed on fluency of delivery, not on how many idioms are used. Six delivered smoothly beats twelve delivered haltingly.",
      mistakes: "Step 2 producing two distinguishable registers rather than four. Listen specifically for contractions.",
      answers: "SUCCESS CRITERIA: six idioms with no hesitation · four audibly distinct registers · five correct decodings · a 90-second exchange with a return question every turn · a reasoned judgement about humour.",
      tip: "Step 5 has no right answer. What is being assessed is whether the learner has a rule, not which rule.",
      activity: "Keep every recording for the Level 4 comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — what did they actually mean?", sub: "Eight understatements. Write the real meaning.",
    panelW: 7.2,
    panel: { label: "Audio script — read slowly, with falls", color: C.listen, tint: C.listenTint, size: 15.5, lsm: 1.26,
      text: "1.  “That's not ideal.”\n2.  “I'm not entirely convinced.”\n3.  “It's a bit of a problem, to be honest.”\n4.  “Well, that's one way of doing it.”\n5.  “I might have a slight concern about the timing.”\n6.  “It could be worse.”\n7.  “That's certainly one option.”\n8.  “I'd have thought there might be a better way.”" },
    side: { label: "Your task", color: C.listen, size: 15.5, items: [
      "Write what each one really means.",
      "Rate each 1–5 for how serious it is.",
      "Which two are the most negative?",
      "Which one sounds most neutral but isn't?",
      "How would you check?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Items 4 and 7 are the traps. Both sound neutral or even positive and both are polite rejections.",
      mistakes: "Rating item 5 as mild. “A slight concern” from a British colleague frequently means a serious objection.",
      extra: "Item 6 is different: genuinely cheerful, and it does mean things are bad but survivable.",
      answers: "1 This is bad. 2 I disagree. 3 This is a serious problem. 4 I think that's wrong. 5 I have a real objection. 6 This is bad but survivable. 7 I don't think that will work. 8 That's the wrong approach.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "The mildest ones are often the most negative.",
    size: 16.5,
    items: [
      { q: "1 and 3 — “not ideal” and “a bit of a problem”", a: "This is bad; this is a serious problem.", why: "The inverse rule: the milder the wording, the more serious the situation often is." },
      { q: "4 and 7 — “one way” and “one option”", a: "Both mean “I don't think that will work.”", why: "The traps. Both sound neutral or even accepting and both are polite rejections." },
      { q: "5 — “a slight concern”", a: "A serious objection.", why: "“Slight” is doing the opposite of its literal job. It marks politeness, not size." },
      { q: "6 — “it could be worse”", a: "This is bad but survivable.", why: "The one genuinely cheerful item. Context and tone separate it from the others." },
      { q: "How do you check?", a: "“When you say not ideal — how serious is it?”", why: "Completely acceptable to ask. Mis-reading costs far more than asking does." },
    ],
    notes: keyNotes("Items 4 and 7 are worth repeating aloud. Learners who accept them as agreement will proceed with a plan the other person has just rejected."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — register mismatch", sub: "Three messages. Which register is wrong, and why?",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 15.5, lsm: 1.26,
      text: "A  —  to a colleague you sit next to:\n“I regret to inform you that I shall be unable to\nattend this afternoon's meeting.”\n\nB  —  to a government official you've never met:\n“Hi! Can't make Thursday, sorry! Let me know\nwhat works.”\n\nC  —  to a manager you know well:\n“I'm afraid I can't make Thursday — could we\nmove it to Friday?”" },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. Which register is A, and is it right?",
      "2. Which register is B, and is it right?",
      "3. Which register is C?",
      "4. How does A come across?",
      "5. How does B come across?",
      "6. Which one is safe almost anywhere?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "A is the more common learner error. Over-formality feels safe and reads as cold or even sarcastic between colleagues.",
      mistakes: "Learners assume formal is always safer. To somebody you sit next to it is a small social error every time.",
      extra: "C is neutral and it would be acceptable in all three situations, which is the argument for the default.",
      answers: "1 Formal — wrong, too distant. 2 Very informal — wrong, too casual. 3 Neutral. 4 Cold or sarcastic. 5 Careless. 6 C.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Both errors are invisible to the person making them.",
    size: 16.5,
    items: [
      { q: "1 and 4 — message A", a: "Formal, to somebody you sit next to. It reads as cold or sarcastic.", why: "The commoner learner error. Formality feels safe and creates distance you did not intend." },
      { q: "2 and 5 — message B", a: "Very informal, to an official. It reads as careless.", why: "Exclamation marks and contractions to a stranger in an official context signal that you have not taken it seriously." },
      { q: "3 and 6 — message C", a: "Neutral — and acceptable in all three situations.", why: "This is the argument for defaulting to neutral. It is never badly wrong in either direction." },
      { q: "Will anyone tell you?", a: "No. Nobody corrects register.", why: "Exactly like Level 3 Module 5. The cost is real and the feedback never comes." },
      { q: "What carries the difference?", a: "Contractions, vocabulary and directness.", why: "Change the contractions alone and a message moves a whole register." },
    ],
    notes: keyNotes("The fourth item is the important one. Register errors are invisible to the speaker and consequential — which is why the default matters."),
  });

  L.grid({
    sec: SEC.lis, title: "Listening for what is not said", sub: "Four signals worth catching.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaVolumeDown", title: "Mild words, slow delivery", desc: "“That's… not ideal.” The pause and the fall mean it is serious. The words alone would mislead you." },
      { icon: "FaBalanceScale", title: "“That's certainly one option.”", desc: "A polite rejection dressed as acceptance. If somebody has not said yes, they have not said yes." },
      { icon: "FaSmile", title: "Laughter with no joke", desc: "Often discomfort rather than humour. Something has been said that somebody wants to move past." },
      { icon: "FaQuestion", title: "A question that isn't one", desc: "“Have you thought about doing it the other way?” is usually advice, not curiosity." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Item 4 is very common in management. “Have you thought about…?” is almost always an instruction expressed politely.",
      mistakes: "Answering item 4's question literally — “yes, I did consider it” — and continuing as before. The suggestion was not optional.",
      tip: "Item 2's test is practical: if you did not hear a yes, do not record one.",
      activity: "Spot the signal: read eight short exchanges and have learners identify which of the four is happening.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: SEC.rea, title: "Reading 1 — an email full of understatement", sub: "Read it literally. Then read it properly.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "Dear Yonas,\n\nThanks for sending the draft. It's certainly a\nstart, and I can see a lot of work has gone in.\nI did have one or two small thoughts. The data\nsection might benefit from a second look — I'm\nnot entirely sure the figures are all current.\nAlso, the recommendation is perhaps slightly\nbolder than we might want at this stage.\nIt would be helpful to have another version by\nThursday if that's manageable.\n\nBest,  Chaltu",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "How positive is “certainly a start”?",
      "What does “one or two small thoughts” mean?",
      "What is wrong with the data?",
      "What does she think of the recommendation?",
      "Is Thursday optional?",
      "How much work is actually needed?",
    ] },
    notes: tn({
      time: "17 minutes.",
      how: "This email is entirely negative and contains no negative word. Work through it line by line — learners are often startled.",
      mistakes: "Reading it as broadly positive with minor notes. It says the figures are wrong, the recommendation is unacceptable, and it needs rewriting by Thursday.",
      extra: "“If that's manageable” is not optional. It is a deadline expressed politely.",
      answers: "“A start” means not finished. “One or two small thoughts” means significant problems. The figures are out of date. The recommendation is too strong. Thursday is a deadline. Substantial rewriting is needed.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Decode every line.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence, saying what is really meant.",
    items: [
      "What does “it's certainly a start” actually say about the draft?",
      "What does “one or two small thoughts” usually mean in practice?",
      "What is she saying about the figures?",
      "What is she saying about the recommendation?",
      "Is “by Thursday if that's manageable” a request or a deadline?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 5 is the practically important one. Learners who read it as optional will miss a real deadline.",
      mistakes: "Softening the decoding. The email is polite and its content is entirely critical, and both things are true at once.",
      tip: "Ask whether Chaltu is being dishonest. She is not — she is using a politeness system that assumes decoding.",
      answers: "1 It is not finished. · 2 Significant problems. · 3 They are out of date. · 4 It is too strong and must be softened. · 5 A deadline.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "A completely negative email with no negative word in it.",
    size: 16.5,
    items: [
      { q: "1 — “certainly a start”", a: "It is not finished, and not close.", why: "“A start” names the beginning of something. It is faint praise doing the work of criticism." },
      { q: "2 — “one or two small thoughts”", a: "Significant problems.", why: "The quantity is understated exactly as the severity is. Two thoughts about a draft are rarely small." },
      { q: "3 and 4 — data and recommendation", a: "The figures are out of date; the recommendation is unacceptable as written.", why: "“Not entirely sure” and “perhaps slightly bolder” are both full objections at a quarter strength." },
      { q: "5 — “if that's manageable”", a: "A deadline, politely expressed.", why: "The conditional is a courtesy. Reading it as optional would be a serious error." },
      { q: "Is Chaltu being dishonest?", a: "No — she is using a politeness system that assumes you will decode it.", why: "Everything she says is literally true. The convention is that severity is understated." },
    ],
    notes: keyNotes("Have learners rewrite this email directly. The direct version sounds brutal, which is precisely why the convention exists."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — the same email, four registers", sub: "Same content. Which would you send, and to whom?",
    panelW: 7.2,
    panel: { label: "Read all four", color: C.read, tint: C.readTint, size: 14.5, lsm: 1.22,
      text: "FORMAL\n“I should be grateful if you would revise the\ndata and moderate the recommendation.”\nNEUTRAL\n“Could you take another look at the data and\nsoften the recommendation a little?”\nFRIENDLY\n“Could you have another go at the data? And\nmaybe tone the recommendation down a bit?”\nVERY INFORMAL\n“Data needs another look — and the rec's a bit\nstrong. Thursday OK?”",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Which markers change between them?",
      "Which would you send to a minister?",
      "Which to a colleague you sit beside?",
      "Which is safe almost anywhere?",
      "Which would sound sarcastic to a friend?",
      "Is any of them clearer than the others?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Question 6 is the interesting one. The very informal version is arguably the clearest, which shows that register is not about clarity.",
      mistakes: "Assuming formal means clearer. It usually means longer, and it is chosen for the relationship rather than for comprehension.",
      extra: "The markers: contractions, vocabulary (revise/look/go), sentence length and directness. All four move together.",
      answers: "Contractions, vocabulary, length, directness. Formal to a minister. Friendly or very informal to a neighbour. Neutral almost anywhere. Formal would sound sarcastic to a friend. The very informal one is arguably clearest.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Register is about the relationship, not about clarity.",
    size: 16.5,
    items: [
      { q: "1 — what changes", a: "Contractions, vocabulary, sentence length and directness.", why: "All four move together. Changing only the contractions shifts a message most of a register." },
      { q: "4 — the safe default", a: "Neutral. It works in all four situations.", why: "Never badly wrong in either direction, which is why it should be the default when unsure." },
      { q: "5 — formal to a friend", a: "It would sound sarcastic or cold.", why: "Register signals distance. Choosing more distance than the relationship has is itself a message." },
      { q: "6 — which is clearest?", a: "Arguably the very informal one.", why: "Which proves register is not about clarity. It is about matching the relationship." },
      { q: "Vocabulary check", a: "get the hang of · on the same page · touch base · a long shot · not ideal", why: "All five are frequent, safe and neutral — the register that covers most of working life." },
    ],
    notes: keyNotes("Item 6 is the counter-intuitive point worth stating: the most informal version communicates the content most efficiently and is still wrong for a minister."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — decode the understatement", sub: "Write what is really meant.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write the direct version of each.",
    items: [
      "1.  “That's not ideal.”",
      "2.  “I'm not entirely convinced.”",
      "3.  “That's certainly one option.”",
      "4.  “I did have one or two small thoughts.”",
      "5.  “It would be helpful to have it by Thursday if that's manageable.”",
      "6.  “Have you thought about doing it the other way?”",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Item 6 is the one learners most often read literally. It is advice or an instruction, not a question about their thinking.",
      answers: "1 This is bad. · 2 I disagree. · 3 I don't think that will work. · 4 There are significant problems. · 5 I need it by Thursday. · 6 Do it the other way.",
      mistakes: "Softening the decoding. The point of the exercise is to see how far the literal and intended meanings diverge.",
      tip: "Item 5's conditional is a courtesy, not an option. Reading it as optional misses a deadline.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — four registers", sub: "One message. Four versions.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write all four registers of this message: you cannot attend Thursday's meeting and want to move it to Friday.",
    items: [
      "1.  FORMAL — to a ministry official you have never met.",
      "2.  NEUTRAL — to a manager in another department.",
      "3.  FRIENDLY — to a colleague you know well.",
      "4.  VERY INFORMAL — to somebody you sit next to.",
      "5.  Mark the contractions in each. What do you notice?",
      "6.  Which one would you send if you were unsure?",
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Step 5 is the discovery. Formal has none; very informal has several. Contractions alone carry most of the register signal.",
      answers: "MODELS: 1 “I regret that I am unable to attend on Thursday and should be grateful if the meeting could be moved to Friday.” · 2 “I'm afraid I can't make Thursday — could we move it to Friday?” · 3 “Sorry, can't do Thursday. Friday any good?” · 4 “Can't make Thu — Fri instead?”",
      mistakes: "Producing two distinguishable versions rather than four. Push for real separation.",
      tip: "Step 6's answer is neutral, every time. It is the version that is never badly wrong.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — your idiom notebook", sub: "The forty that matter. Build your own list.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Over this week, collect idioms you actually HEAR — not ones from a book.",
    items: [
      "1.  Write down every idiom you hear a real person use.",
      "2.  For each: what it means, and who said it.",
      "3.  Mark the register: formal · neutral · friendly · very informal.",
      "4.  Mark whether YOU would use it, or only understand it.",
      "5.  Aim for twenty by the end of the week.",
      "6.  Which three will you start using?",
    ],
    notes: tn({
      time: "12 minutes to set up, then a week of collection.",
      how: "Step 4 is the key distinction. Most idioms belong in the understand-only column, and that is the correct outcome.",
      answers: "No fixed answers. Twenty heard idioms in a week is realistic for anybody working in English.",
      mistakes: "Copying idioms from lists. The whole point is frequency in the learner's own environment.",
      tip: "Step 6 is the production target: three, not twenty. A small number used naturally beats a long list used awkwardly.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — how it is marked", sub: "25 marks. Heard, not copied.",
    size: 16.5,
    items: [
      { q: "Twenty collected — 8 marks", a: "Heard from real people, with who said them.", why: "Idioms copied from a list score nothing. The attribution is what proves they were heard." },
      { q: "Meanings — 6 marks", a: "In your own words, not dictionary definitions.", why: "A definition you have written yourself is one you have understood." },
      { q: "Register marked — 5 marks", a: "Each one placed in one of the four registers.", why: "An idiom used at the wrong register is worse than one not used at all." },
      { q: "Use or understand — 4 marks", a: "Honest classification. Most should be understand-only.", why: "If most are marked “use”, the learner has not understood the module's emphasis." },
      { q: "Three chosen to use — 2 marks", a: "Three, with a reason for each.", why: "Three used naturally is worth more than twenty produced haltingly." },
    ],
    notes: keyNotes("The fourth criterion is the diagnostic. A list where everything is marked “I would use this” shows the recognition-before-production point has not landed."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your idiom and register checklist", sub: "Six checks. Mostly about restraint.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Have I heard a real person say this idiom recently?", d: "If not, do not use it." },
      { t: "Am I at the right register for this relationship?", d: "If unsure, neutral." },
      { t: "Did I check my contractions?", d: "They carry most of the register signal." },
      { t: "Did mild words mean something serious?", d: "“Not ideal” often does. Ask how serious." },
      { t: "Did I answer, add and ask back?", d: "Every small-talk turn." },
      { t: "Am I about to attempt sarcasm?", d: "Don't. It depends entirely on intonation." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Check 1 is the protective one. It prevents the phrasebook-idiom problem entirely.",
      tip: "Print this. Checks 2 and 3 apply to every email a learner sends for the rest of their career.",
      activity: "Six checks: apply this to the next five real messages you send.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. “That ship has sailed” means:", opts: "a) it's on the way     b) the chance has gone     c) it's late" },
      { q: "2. “That's not ideal” usually means:", opts: "a) it's slightly imperfect     b) this is bad     c) it's fine" },
      { q: "3. If unsure of register, choose:", opts: "a) formal     b) neutral     c) informal" },
      { q: "4. Sarcasm in a second language is:", opts: "a) a good way to fit in     b) risky — tone carries it     c) always fine" },
      { q: "5. A small-talk turn needs:", opts: "a) an answer     b) answer, detail, return question     c) a long story" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 b",
      tip: "Question 2 is the module's most practically useful item. Say the answer twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — what does it mean?", sub: "Guess from the picture.",
    color: C.green, instruction: "Write the meaning of each idiom.", size: 18,
    items: [
      "1.  on the back burner",
      "2.  the ball is in their court",
      "3.  a grey area",
      "4.  cut corners",
      "5.  in the loop",
      "6.  bite the bullet",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "All six are guessable from their images. Have learners name the picture as well as the meaning.",
      answers: "1 postponed, not cancelled · 2 it's their decision now · 3 unclear, not covered by rules · 4 do it badly to save time · 5 kept informed · 6 accept something unpleasant",
      mistakes: "Item 1 confused with “cancelled”. The back burner is still on the stove — it is postponed.",
      tip: "Item 4 is slightly negative. Using it about somebody's work is a criticism, not a neutral description.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Idioms, registers and understatement.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the IDIOM to its MEANING", opts: "1. touch base     2. a long shot     3. on the fence     4. in the loop" },
      { q: "a) undecided     b) unlikely but worth trying", opts: "c) make brief contact     d) kept informed" },
      { q: "Part 2 — match the REGISTER to the EXAMPLE", opts: "1. formal     2. neutral     3. very informal          a) “Can't make it, sorry!”     b) “I regret that I am unable to attend.”     c) “I'm afraid I can't make it.”" },
      { q: "Part 3 — match the UNDERSTATEMENT to its MEANING", opts: "1. “not ideal”     2. “one way of doing it”     3. “a slight concern”          a) I think that's wrong     b) this is bad     c) a serious objection" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–b, 3–a, 4–d.  ·  Part 2: 1–b, 2–c, 3–a.  ·  Part 3: 1–b, 2–a, 3–c.",
      tip: "Part 3 is the highest-value section. All three are heard weekly and all three are mis-read.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — small talk", sub: "Answer, add a detail, ask back.",
    color: C.green, instruction: "Write a complete three-part reply to each.", size: 18,
    items: [
      "1.  “How was your weekend?”",
      "2.  “Have you been busy?”",
      "3.  “How's the new role going?”",
      "4.  “Did you have far to come?”",
      "5.  “Have you worked here long?”",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "All three parts every time. The return question is what learners omit and it is what keeps the exchange alive.",
      answers: "MODEL for 1: “Good, thanks. I went to my sister's in Adama. How about you?”",
      mistakes: "Two parts only. “Good thanks, I went to Adama” is friendly and it still ends the conversation.",
      tip: "The detail is what gives them something to ask about. Without it the return question is the only thread.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — fix the register", sub: "Each one is wrong for its situation.",
    color: C.green, instruction: "Rewrite each at the right register.", size: 17,
    items: [
      "1.  To a colleague you sit beside: “I regret to inform you that I shall be unavailable.”",
      "2.  To a ministry official: “Hi! Can't do Thursday, sorry! What works?”",
      "3.  To your manager: “Yeah nah, that won't work.”",
      "4.  To a close friend: “I should be most grateful if you could advise me.”",
      "5.  To a new client: “Give us a shout when you've had a look.”",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Items 1 and 4 are over-formal; 2, 3 and 5 are over-informal. Both directions are errors and both are invisible to the writer.",
      answers: "MODELS: 1 “Sorry, I can't make it this afternoon.” · 2 “I am afraid I am unable to attend on Thursday. Could an alternative date be arranged?” · 3 “I'm not sure that would work — could we look at another option?” · 4 “Could you give me some advice?” · 5 “Do let me know once you've had a chance to review it.”",
      mistakes: "Item 3's “yeah nah” is very informal and would be a real misstep with a manager.",
      tip: "Ask which direction each learner tends to err in. Most over-formalise, and knowing that is actionable.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  You should learn as many idioms as possible and use them all.",
      "2.  Formal register is always the safest choice.",
      "3.  “That's not ideal” usually means something is seriously wrong.",
      "4.  Understanding a joke without making one is full participation.",
      "5.  Asking what an idiom means shows weak English.",
      "6.  Small talk needs a return question to continue.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — use only ones you have heard recently · 2 F — neutral is safest; formal can sound cold · 3 T · 4 T · 5 F — native speakers ask each other regularly · 6 T",
      tip: "Item 5 is the permission-giving one. Say the correction clearly — many learners never ask.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own English.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  Which three idioms will you actually start using? Why those three?",
      "2.  Do you over-formalise or over-informalise? Which?",
      "3.  Has an understatement ever misled you? What happened?",
      "4.  What would you never joke about at work, and why?",
      "5.  Which small-talk question do you find hardest to answer?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 2 requires honesty and most learners over-formalise. Naming the tendency is what makes it correctable.",
      answers: "No fixed answers. Question 1 must name exactly three, with reasons.",
      mistakes: "Question 1 answered with ten idioms. Three is the instruction and the number matters.",
      tip: "Question 3's answers are usually the best discussion in the module. Real misreadings are memorable.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "In pairs. Partner checks.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner checks against the criteria.", size: 19,
    items: [
      "1.  Use six idioms in a work conversation. No hesitation before them.",
      "2.  Say one message in four registers. Partner names each.",
      "3.  Decode five understatements aloud.",
      "4.  Sustain a small-talk exchange for 90 seconds.",
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Round 1's criterion is fluency of delivery, not quantity. Six smooth beats twelve halting.",
      answers: "SUCCESS CRITERIA: 1 six idioms with no pause before them · 2 four registers the partner can name unprompted · 3 five correct decodings · 4 90 seconds with a return question every turn.",
      tip: "Round 4 is harder than it sounds. Ninety seconds requires about six return questions.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full scenario", sub: "A whole working day in English.",
    color: C.green, instruction: "Work in pairs, swapping roles at each stage.", size: 17,
    items: [
      { q: "1. Arrive and make small talk with a colleague. Two minutes.", opts: "Three parts every turn." },
      { q: "2. A meeting: use six idioms naturally.", opts: "Partner ticks each." },
      { q: "3. Your partner gives feedback using understatement. Decode it.", opts: "Then check: “how serious?”" },
      { q: "4. Write the same follow-up email in two registers.", opts: "To a colleague and to a client." },
      { q: "5. Say one thing you would not joke about here, and why.", opts: "Explain the judgement." },
    ],
    notes: tn({
      time: "A full lesson in pairs.",
      how: "Step 3 is the assessment that matters. Decoding understatement correctly and then checking is the module's highest-value skill.",
      answers: "Assessed with the six checks from slide 50.",
      tip: "Step 4 shows whether register is genuinely under control. Two versions that differ only slightly means it is not.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why is understatement useful rather than just confusing?", opts: "What does it let the speaker do?" },
      { q: "2. Should you try to use idioms at all, or just understand them?", opts: "Argue both sides." },
      { q: "3. Why do register errors matter more than grammar errors?", opts: "Who corrects each?" },
      { q: "4. Is small talk a waste of time?", opts: "Argue both sides honestly." },
    ],
    notes: tn({
      time: "14 minutes. Discussion, not writing.",
      how: "Question 1 is worth defending. Understatement lets a speaker deliver criticism without forcing the other person to defend themselves.",
      answers: "1 It lets you criticise without humiliating, and leaves the other person room to respond. 2 Understand all; use a few you have genuinely heard — using rare ones marks you out more than using none. 3 Because somebody will correct your grammar, and nobody will ever tell you your email sounded cold. 4 For: it decides who helps you and who trusts you. Against: it can be time spent avoiding the actual work. Most people conclude ten seconds of it is a good investment and ten minutes is not.",
      tip: "Question 3's answer connects back to Level 3 Module 5. Invisible errors with real costs are the hardest kind to fix.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Guessing idioms", items: [
      { q: "1. Name the four clues for guessing an idiom.", opts: "Four answers." },
      { q: "2. Why not just memorise idiom lists?", opts: "One sentence." },
      { q: "3. “That ship has sailed” means what?", opts: "One sentence." },
      { q: "4. Is asking what an idiom means acceptable?", opts: "Yes or no, and why." },
    ] },
    { part: "Part 2 · Which idioms to use", items: [
      { q: "5. What is the test for whether to use an idiom?", opts: "One sentence." },
      { q: "6. Why avoid “raining cats and dogs”?", opts: "One sentence." },
      { q: "7. What does “touch base” mean, and how long is it?", opts: "One sentence." },
      { q: "8. What does “on the back burner” mean?", opts: "One sentence." },
    ] },
    { part: "Part 3 · Register", items: [
      { q: "9. Name the four registers.", opts: "Four answers." },
      { q: "10. Which is the safe default?", opts: "One word, and why." },
      { q: "11. What four things carry register?", opts: "Four answers." },
      { q: "12. How does formal sound to a close colleague?", opts: "One word." },
    ] },
    { part: "Part 4 · Understatement and humour", items: [
      { q: "13. What does “not ideal” usually mean?", opts: "One sentence." },
      { q: "14. What is the understatement rule?", opts: "One sentence." },
      { q: "15. How do you check how serious something is?", opts: "Write the question." },
      { q: "16. Why is sarcasm risky in a second language?", opts: "One sentence." },
    ] },
    { part: "Part 5 · Small talk", items: [
      { q: "17. Name the three parts of a small-talk turn.", opts: "Three answers." },
      { q: "18. What happens without the third part?", opts: "One sentence." },
      { q: "19. Name two safe topics and two risky ones.", opts: "Four answers." },
      { q: "20. SPEAKING: six idioms, four registers, five decodings, 90s small talk.", opts: "Assessed live." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 7 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is spoken." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is assessed live. Idioms are marked on fluency of delivery, not on quantity.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the four clues", a: "The picture · positive or negative · what would fit · ask.", why: "Most idioms are dead metaphors, so the image usually still carries the meaning." },
      { q: "Q2 — why not memorise lists", a: "There are thousands, and you will always meet new ones.", why: "A method for guessing is worth more than any finite list." },
      { q: "Q3 — “that ship has sailed”", a: "The chance has gone; it is too late.", why: "The image does the work — a departed ship cannot be boarded." },
      { q: "Q4 — asking about an idiom", a: "Completely acceptable. Native speakers ask each other.", why: "It costs nothing, and mis-reading an idiom can cost a great deal." } ],
    [ { q: "Q5 — the test", a: "Have you heard a real person say it in the last month?", why: "Frequency, not colour. The useful idioms are the unremarkable ones." },
      { q: "Q6 — “raining cats and dogs”", a: "It is understood and nobody says it.", why: "Using a dated idiom marks you out more than using none at all." },
      { q: "Q7 — “touch base”", a: "Brief contact — five or ten minutes, not a meeting.", why: "Treating it as a request for an hour is a small but real social error." },
      { q: "Q8 — “on the back burner”", a: "Postponed, not cancelled.", why: "The back burner is still on the stove. It will come back." } ],
    [ { q: "Q9 — the four registers", a: "Formal · neutral · friendly · very informal.", why: "Register signals the relationship, not the importance of the message." },
      { q: "Q10 — the default", a: "Neutral — it is never badly wrong in either direction.", why: "It covers most of working life and works when you cannot judge the relationship." },
      { q: "Q11 — what carries register", a: "Contractions · vocabulary · sentence length · directness.", why: "Contractions are the fastest lever: changing only those moves a message a whole register." },
      { q: "Q12 — formal to a close colleague", a: "Cold. Sometimes sarcastic.", why: "Choosing more distance than the relationship has is itself a message, and rarely the one intended." } ],
    [ { q: "Q13 — “not ideal”", a: "Often “this is bad”.", why: "Especially in British English. The literal reading will mislead you." },
      { q: "Q14 — the understatement rule", a: "The more serious the problem, the milder the language.", why: "An inverse relationship, and it is counter-intuitive to most learners." },
      { q: "Q15 — how to check", a: "“When you say not ideal — how serious is it?”", why: "Completely acceptable to ask, and far cheaper than mis-reading it." },
      { q: "Q16 — sarcasm", a: "It depends entirely on intonation.", why: "Delivered without native intonation it reads as rudeness rather than as a joke." } ],
    [ { q: "Q17 — the three parts", a: "Answer · add a detail · ask back.", why: "Ten seconds, and the relationship is open rather than politely closed." },
      { q: "Q18 — without the third part", a: "The conversation ends.", why: "Small talk is turn-taking. A turn that does not return closes it, however friendly it was." },
      { q: "Q19 — safe and risky topics", a: "Safe: weather, travel, food, the weekend. Risky: salary, religion, politics, age.", why: "The safe ones ask nothing of anybody; the risky ones are personal or divisive." },
      { q: "Q20 — the spoken task", a: "Assessed on delivery, not quantity", why: "Six idioms said smoothly beats twelve said haltingly. Fluency is the criterion." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q5, Q13 and Q14 are the diagnostic block: the frequency test, what “not ideal” means, and the inverse rule. All three prevent real and costly misreadings."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Mostly listening.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Collect four idioms you actually HEAR", d: "Write who said them and what they meant." },
      { t: "Notice one understatement and decode it", d: "Write what was said and what was meant." },
      { t: "Send one message in a deliberately chosen register", d: "Note which and why." },
      { t: "Have three small-talk exchanges with all three parts", d: "Answer · detail · ask back." },
      { t: "Ask somebody what an idiom means", d: "Once. Note how they reacted." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Friday's task is the permission-giving one. Learners discover that asking produces a friendly explanation, not judgement.",
      tip: "Tuesday's task is the highest-value one. One decoded understatement a day builds the skill faster than any exercise.",
      activity: "Ask three learners to report Friday's reaction.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your idiom notebook — twenty heard idioms", d: "Meaning, who said it, register, and use-or-understand." },
      { t: "One message written in all four registers", d: "With the contractions marked in each." },
      { t: "Record your three-minute speaking challenge", d: "Six idioms · four registers · five decodings · 90s small talk." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "The notebook is marked on whether the idioms were heard, not on how many there are. Attribution is the evidence.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Read three notebooks aloud. The overlap between learners shows which idioms are genuinely frequent in their environment.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaBook", title: "Idiom notebook — 12 marks", desc: "Twenty heard, with attribution (6) · meanings in your own words (3) · register marked (2) · use-or-understand honest (1)." },
      { icon: "FaLayerGroup", title: "Four registers — 6 marks", desc: "Four genuinely distinct versions (4) · contractions marked (2)." },
      { icon: "FaMicrophone", title: "Recording — 7 marks", desc: "Six idioms, no hesitation (3) · four registers audible (2) · five decodings (1) · 90s small talk (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep collecting · below 10 → restart the notebook for a second week." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "The notebook carries twelve marks because collection is the transferable habit. It continues working long after the module ends.",
      tip: "Give the mark privately. Add one comment on register, since nobody else will ever give them that feedback.",
      mistakes: "Do not reward long idiom lists copied from the internet. Attribution is what is being marked.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaSearch", title: "Guessing idioms", desc: "Four clues. The picture does most of the work." },
      { icon: "FaFilter", title: "Which ones to use", desc: "Only the ones you have actually heard recently." },
      { icon: "FaLayerGroup", title: "Four registers", desc: "Formal · neutral · friendly · very informal. Default neutral." },
      { icon: "FaVolumeDown", title: "Understatement", desc: "The milder the words, the more serious the problem." },
      { icon: "FaSmile", title: "Humour", desc: "Self-deprecation is safe. Sarcasm is not. Know when not to." },
      { icon: "FaComments", title: "Small talk", desc: "Answer · add a detail · ask back. Every turn." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3 and ask task 3 again: has an English speaker ever said something you took the wrong way? Learners can now usually explain what happened.",
      tip: "Ask how many idioms they collected. Twenty in a week surprises most of them and proves how common these are.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The register toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaLayerGroup", title: "The four registers", desc: "FORMAL — “I regret that I am unable to…”\nNEUTRAL — “I'm afraid I can't…”\nFRIENDLY — “Sorry, I can't…”\nVERY INFORMAL — “Can't make it, sorry!”\nIf unsure: NEUTRAL." },
      { icon: "FaVolumeDown", title: "Understatement decoder", desc: "“not ideal” → this is bad\n“a bit of a problem” → serious\n“one way of doing it” → that's wrong\n“a slight concern” → real objection\nAsk: “How serious is it?”" },
      { icon: "FaCheck", title: "Ten idioms worth using", desc: "touch base · in the loop · a heads-up\non the back burner · a grey area\na long shot · on the same page\nrun it by you · that ship has sailed\nget the hang of" },
      { icon: "FaComments", title: "Small talk", desc: "1  ANSWER  —  “Good, thanks.”\n2  ADD A DETAIL  —  “I went to Adama.”\n3  ASK BACK  —  “How about you?”\nWithout part 3 it ends." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The second box is the one that prevents costly misreadings.",
      tip: "Print the second and fourth boxes. One prevents misunderstanding; the other opens relationships.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now hear what people mean, not only what they say.",
    sub: "Forty idioms, four registers, and the ability to tell that “not ideal” means something has gone badly wrong.\nNone of it was needed to be understood. All of it changes how easily you fit in.",
    chips: ["NEXT — Module 8", "Difficult Conversations", "The last module — and the hardest thing to do in any language"],
    notes: tn({
      time: "5 minutes.",
      how: "Name the shift: from being understood to understanding. Most of this module was about receiving, and that is where the real gains were.",
      tip: "Preview Module 8 as the course's final module: giving bad news, handling conflict, receiving criticism and apologising. Difficult in a first language and harder in a second.",
      activity: "Ask every learner to name the three idioms they will start using.",
    }),
  });
};
