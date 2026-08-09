"use strict";
/* LEVEL 4 · MODULE 8 — Difficult Conversations   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 4", levelNo: LV.no, levelName: "Advanced Spoken\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Difficult Conversations",
    sub: "The last module of the course. Bad news, criticism, conflict and apology — hard in your first language, and harder in your second.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "END OF", v: "THE COURSE" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open honestly: these conversations are difficult for everybody, in every language. What a second language adds is the fear of getting the words wrong at the worst possible moment — and that is what structure fixes.",
      tip: "This is the final module of the whole course. Say so, and say what learners will have completed: four levels, thirty modules, pre-A1 to B2.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five conversations most people avoid.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Give bad news clearly and kindly", d: "Four steps. Warning, fact, consequence, next step." },
      { t: "Give criticism that can actually be acted on", d: "Behaviour, effect, request. Never character." },
      { t: "Receive criticism without defending or collapsing", d: "The hardest of the five, and the most valuable." },
      { t: "Apologise properly — and know when not to", d: "Over-apologising is its own problem." },
      { t: "Raise a problem with somebody more senior", d: "Which most people never learn to do at all." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 3 is the one that changes careers. Most people either argue with criticism or accept it silently, and both close the conversation.",
      tip: "Objective 5 is culturally loaded and worth naming. Raising a problem upwards is difficult everywhere and the structure makes it possible.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: the conversation you are avoiding", sub: "You do not have to say what it is.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaExclamationTriangle", title: "1 · Name it privately", desc: "Think of one conversation you have been putting off. Write one line about it. Nobody reads it." },
      { icon: "FaClock", title: "2 · How long?", desc: "How long have you been avoiding it? What has that cost so far?" },
      { icon: "FaQuestion", title: "3 · What stops you?", desc: "The English? Or the conversation itself? Be honest — they are different problems." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Task 3 is the diagnostic and it usually surprises learners. Most avoided conversations are avoided for human reasons, not linguistic ones.",
      mistakes: "Do not ask anybody to share their conversation. The privacy is what makes the honesty possible.",
      tip: "Task 2 makes the cost visible. A conversation avoided for six months has usually cost more than having it would have.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "A difficult conversation avoided does not stay the same size.",
    sub: "It grows. The other person carries on not knowing, you carry on resenting it,\nand what would have been a two-minute conversation becomes a serious one.",
    chips: ["Early is easier", "Structure removes fear", "Clear is kind"],
    notes: tn({
      time: "7 minutes.",
      how: "The third chip is the module's ethic. Vagueness feels kind and is not — it leaves the other person to discover the problem later and worse.",
      mistakes: "Learners equate directness with unkindness. The unkind option is usually silence followed by a much harder conversation.",
      extra: "The second chip is the practical promise: every conversation in this module has a four-step structure, and having one removes most of the fear.",
      tip: "Say plainly that these are hard for native speakers too. Learners often assume their difficulty is a language problem.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — bad news
  L.panelSide({
    sec: SEC.con, title: "Giving bad news — four steps", sub: "Do not bury it. Do not soften it into invisibility.",
    panelW: 6.8,
    panel: { label: "The four steps", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "1.  A SHORT WARNING\n     “I'm afraid I've got some bad news.”\n\n2.  THE FACT — plainly, in one sentence\n     “We haven't got the funding.”\n\n3.  THE CONSEQUENCE\n     “Which means the March course\n      can't run as planned.”\n\n4.  THE NEXT STEP\n     “Here's what I think we do now.”" },
    side: { label: "Why this order", color: C.green, size: 16, items: [
      "Step 1 lets them prepare. Two seconds, and it changes how they hear step 2.",
      "Step 2 must be ONE sentence. Long explanations before the fact are cruel.",
      "Step 3 answers the question they are already asking.",
      "Step 4 is what stops it being a disaster and makes it a problem.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Step 2 is the discipline. Learners want to explain the background first, and the listener cannot process any of it until they know the fact.",
      mistakes: "Burying the news in the middle of an explanation. The listener spends the whole preamble waiting and hears none of it.",
      extra: "Step 1 matters more than it looks. Two seconds of warning genuinely changes how the news lands.",
      tip: "Step 4 is what separates bad news from a crisis. Arriving with a next step, however partial, changes the whole conversation.",
      activity: "Four steps: every learner delivers a piece of real bad news in exactly four sentences.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — giving criticism
  L.compare({
    sec: SEC.con, title: "Criticism that can be acted on",
    sub: "Behaviour and effect. Never character.",
    left: { h: "Cannot be acted on", items: ["“You're careless.”", "“You're not a team player.”", "“You've got a bad attitude.”", "“You always do this.”", "→ About who they ARE.", "→ Nothing to change."] },
    right: { h: "Can be acted on", items: ["“The last two reports had the wrong figures.”", "“In Tuesday's meeting you spoke over Mimi twice.”", "“The last three deadlines moved without warning.”", "→ About what they DID.", "→ Specific. Checkable. Fixable."] },
    note: "Behaviour · effect · request. “The figures were wrong twice. It meant the board saw bad data. Could you check them with Sara before sending?”",
    notes: tn({
      time: "17 minutes.",
      how: "The note carries the full three-part structure. Behaviour is checkable, effect explains why it matters, and the request says what to do instead.",
      mistakes: "“You always” and “you never” are almost never true and they invite a factual argument about frequency instead of a discussion about the problem.",
      extra: "Character criticism cannot be acted on even by somebody who wants to. “Be less careless” is not a instruction anyone can follow.",
      tip: "The request in step 3 is what learners omit. Criticism without a request is a complaint.",
      activity: "Three parts: give ten character criticisms and have learners rewrite each as behaviour, effect and request.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — receiving criticism
  L.panelSide({
    sec: SEC.con, title: "Receiving criticism", sub: "The hardest of the five. Four steps.",
    panelW: 6.9,
    panel: { label: "What to do when it arrives", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "1.  SAY NOTHING FOR TWO SECONDS\n     The instinct is to defend. Do not.\n\n2.  ASK FOR THE SPECIFIC\n     “Can you give me an example?”\n\n3.  ACKNOWLEDGE WHAT IS TRUE\n     “You're right about the figures.”\n\n4.  ASK WHAT WOULD BE BETTER\n     “What would you like me to do\n      differently?”" },
    side: { label: "Why each step", color: C.green, size: 16, items: [
      "Step 1 is the whole discipline. Two seconds prevents most bad outcomes.",
      "Step 2 turns a vague complaint into something you can act on.",
      "Step 3 does not mean accepting all of it — only the true part.",
      "Step 4 ends it constructively and shows you took it seriously.",
    ] },
    notes: tn({
      time: "17 minutes. The centre of the module.",
      how: "Step 1 is genuinely difficult and it is the whole skill. Two seconds of silence prevents the defensive sentence that makes everything worse.",
      mistakes: "Defending immediately. Even when the defence is correct, it signals that criticism will always be argued with, and people stop giving it.",
      extra: "Step 2 is also protective. Vague criticism cannot be acted on and asking for an example is entirely reasonable.",
      tip: "Step 3 is partial by design. “You're right about the figures” concedes one thing without accepting an unfair whole.",
      activity: "Two seconds: give each learner a criticism and require two full seconds of silence before any reply.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — apology
  L.table({
    sec: SEC.con, title: "Apologising — and over-apologising",
    sub: "Both matter. Most people do one of them badly.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16, headSize: 15.5, colW: [3.2, 4.6, 4.333],
      rows: [
        ["Type", "Example", "Note"],
        ["A real apology", "“I'm sorry. I sent the wrong figures and it cost you a day.”", "name what you did and its effect"],
        ["A non-apology", "“I'm sorry you feel that way.”", "apologises for their reaction, not your act"],
        ["Over-apologising", "“Sorry!” five times an hour", "it stops meaning anything"],
        ["The reflex sorry", "“Sorry, could I just ask…”", "harmless once; a habit that undercuts you"],
      ],
    },
    note: "A real apology has three parts: what you did · its effect · what you will do differently. No “but” anywhere in it.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the structure. The absence of “but” is the test — “I'm sorry, but I was very busy” is not an apology.",
      mistakes: "Row 2 is common and corrosive. “I'm sorry you feel that way” apologises for their emotion and accepts nothing.",
      extra: "Row 4 matters for learners specifically. Beginning every sentence with “sorry” is common in second-language speakers and it quietly signals a lack of standing.",
      tip: "Say it plainly: apologise fully when you are wrong, and stop apologising for existing. They are different problems with opposite fixes.",
      activity: "Count the sorries: learners count their own reflex apologies for one day and report back.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — upwards
  L.panelSide({
    sec: SEC.con, title: "Raising a problem with somebody senior", sub: "Most people never learn to do this at all.",
    panelW: 6.9,
    panel: { label: "The four moves", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.36,
      text: "1.  ASK FOR THE TIME\n     “Could I have ten minutes about\n      the Adama contract?”\n\n2.  STATE IT AS A SHARED PROBLEM\n     “I think we may have an issue with…”\n\n3.  BRING EVIDENCE, NOT FEELINGS\n     “The last three deliveries were late.”\n\n4.  BRING A PROPOSED SOLUTION\n     “I'd suggest we…  What do you think?”" },
    side: { label: "Why this works", color: C.green, size: 16, items: [
      "Step 1 means they are not ambushed, which changes how they listen.",
      "Step 2 — “we” not “you” — makes it a problem to solve, not an accusation.",
      "Step 3 protects you. Evidence is arguable; feelings are dismissible.",
      "Step 4 is what makes you useful rather than merely complaining.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Step 4 is what distinguishes raising a problem from complaining. Arriving with a proposal is what makes the conversation welcome.",
      mistakes: "Raising it in a corridor, without warning and without a proposal. That combination guarantees a defensive response.",
      extra: "Step 2's “we” is doing real work. “We may have an issue” invites collaboration; “you have a problem” invites defence.",
      tip: "This is Module 2's argument structure and Module 6's preparation, applied upwards. Nothing here is new; the application is.",
      activity: "Raise it: every learner rehearses raising a real problem with a real senior person, in four moves.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — conflict
  L.compare({
    sec: SEC.con, title: "When it becomes heated",
    sub: "Four moves that lower the temperature without conceding anything.",
    left: { h: "What escalates it", items: ["Matching their volume", "“Calm down.”", "“You always…”  “You never…”", "Winning the exchange", "→ Now it is about the argument, not the problem."] },
    right: { h: "What lowers it", items: ["Speaking more slowly and more quietly", "“I can see this matters to you.”", "“Let me make sure I've understood…”", "“Can we come back to this tomorrow?”", "→ The problem is still there. The heat is not."] },
    note: "Never say “calm down”. It has never once worked. “I can see this matters to you” does the same job and does not insult anybody.",
    notes: tn({
      time: "16 minutes.",
      how: "The first right-hand item is the most reliable. Lowering your own volume and pace pulls the other person's down within about thirty seconds.",
      mistakes: "“Calm down” is heard as a judgement about their behaviour and it reliably makes things worse. Ban it explicitly.",
      extra: "The fourth item — postponing — is legitimate and under-used. A conversation that has become heated rarely produces a good outcome that day.",
      tip: "The note is the practical rule to remember. One phrase to avoid entirely, and one that does the same job safely.",
      activity: "Lower it: role-play four heated exchanges and have the partner practise all four de-escalating moves.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "raise", ipa: "/reɪz/", pos: "verb", icon: "FaHandPaper",
      meaning: "To bring a subject up for discussion, especially a difficult one.",
      example: "I'd like to raise something about the deadlines. She raised it with her manager.",
      mistake: "“Raise something WITH somebody.” And it is neutral — raising an issue is not complaining about it.",
      notes: tn({ time: "7 minutes.",
        how: "This is the professional verb for starting a difficult conversation. “Can I raise something?” is neutral and gives no offence.",
        mistakes: "Confusing raise with rise. Raise takes an object; rise does not.",
        extra: "raise an issue · raise a concern · raise it with somebody · I'd like to raise…",
        tip: "“Can I raise something with you?” is a complete, safe opener for almost any difficult conversation.",
        activity: "Raise five: every learner opens five difficult topics using the verb." }) },

    { word: "misunderstanding", ipa: "/ˌmɪsʌndəˈstændɪŋ/", pos: "noun", icon: "FaExchangeAlt",
      meaning: "A failure to understand something correctly — with no blame attached.",
      example: "I think there's been a misunderstanding about the dates.",
      mistake: "Six syllables, stress on the FOURTH: mis-un-der-STAND-ing. It is deliberately blame-free.",
      notes: tn({ time: "8 minutes.",
        how: "This word is a de-escalation tool. Framing a dispute as a misunderstanding lets both sides move without either admitting fault.",
        mistakes: "The stress placement on a six-syllable word. Build it backwards from “standing”.",
        extra: "“I think there's been a misunderstanding” is one of the most useful sentences in conflict. It blames nobody and reopens everything.",
        tip: "It is sometimes a polite fiction — and a useful one. It gives both sides a way out that costs neither of them anything.",
        activity: "Reframe it: give six disputes and have learners reframe each as a misunderstanding." }) },

    { word: "defensive", ipa: "/dɪˈfensɪv/", pos: "adjective", icon: "FaShieldAlt",
      meaning: "Reacting to criticism by protecting yourself instead of listening.",
      example: "I got defensive, which didn't help. Try not to sound defensive.",
      mistake: "Stress on the SECOND syllable: de-FEN-sive. Being defensive is a reaction, not a character trait.",
      notes: tn({ time: "7 minutes.",
        how: "Naming the reaction is what makes it controllable. A learner who can say “I got defensive” can notice it happening next time.",
        mistakes: "Treating defensiveness as a personality flaw. It is a normal reflex and the two-second pause is the fix.",
        extra: "“Sorry, I'm being defensive — let me start again” is an unusually mature thing to say and it works.",
        tip: "This word connects directly to slide 7 step 1. The pause exists precisely to prevent this reaction.",
        activity: "Notice it: learners recall one time they became defensive and what they would do now." }) },

    { word: "acknowledge", ipa: "/əkˈnɒlɪdʒ/", pos: "verb", icon: "FaCheckCircle",
      meaning: "To accept publicly that something is true.",
      example: "I acknowledge the figures were wrong. She acknowledged the delay.",
      mistake: "Silent W. From Module 2 — and here it does harder work: acknowledging a fault, not just a point.",
      notes: tn({ time: "7 minutes.",
        how: "This word appears in Module 2 and returns deliberately. There it conceded an argument; here it concedes a mistake, which is harder.",
        mistakes: "The silent W and the /dʒ/ ending. Four syllables, stress on the second.",
        extra: "“I acknowledge that…” is more formal than “you're right about…” and both do the job.",
        tip: "Acknowledging the true part of an unfair criticism is the skill in slide 7 step 3. It is partial, and that is legitimate.",
        activity: "Acknowledge one thing: in every role-play, the receiver must acknowledge at least one true element." }) },

    { word: "constructive", ipa: "/kənˈstrʌktɪv/", pos: "adjective", icon: "FaTools",
      meaning: "Intended to help improve something, rather than simply to criticise.",
      example: "That's constructive feedback. Let's keep this constructive.",
      mistake: "Stress on the SECOND syllable. Criticism is constructive only if it names what to do differently.",
      notes: tn({ time: "8 minutes.",
        how: "The mistake line is the test. “Constructive criticism” with no request attached is just criticism with a nicer label.",
        mistakes: "Calling any criticism constructive. The word requires a route forward, not merely a polite tone.",
        extra: "“Can we keep this constructive?” is a legitimate move when a conversation is turning into complaint.",
        tip: "Applied to slide 6: behaviour and effect are the criticism; the request is what makes it constructive.",
        activity: "Constructive or not: give eight pieces of feedback and have learners judge each against the test." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Difficult Language 1 of 5" }),
    title: "Opening a difficult conversation",
    sub: "Five openers. All of them give warning.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 16.5, headSize: 16, colW: [4.6, 3.4, 4.333],
      rows: [
        ["Say this", "For", "Note"],
        ["“Can I raise something with you?”", "anything", "the safest general opener"],
        ["“I'm afraid I've got some bad news.”", "bad news", "two seconds of warning"],
        ["“Could I give you some feedback?”", "criticism", "asks permission first"],
        ["“I think there's been a misunderstanding.”", "conflict", "blames nobody"],
        ["“Could I have ten minutes about X?”", "raising it upwards", "no ambush"],
      ],
    },
    note: "Every one of these gives the other person a moment to prepare. That moment changes how everything after it is heard.",
    notes: tn({
      time: "15 minutes.",
      how: "The common feature is warning. A difficult conversation that begins without one puts the listener on the back foot immediately.",
      mistakes: "Starting with the content. “Your figures were wrong” with no opener is heard as an attack even when it is a fact.",
      extra: "Row 3 asking permission is unusually effective. Very few people say no, and asking changes the register of what follows.",
      tip: "Drill all five as chunks. The moment you need them is the moment you least want to construct a sentence.",
      activity: "Five openers: every learner uses all five for five different real situations.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Difficult Language 2 of 5" }),
    title: "“You” and “I” — the same fact, two effects",
    sub: "Who the sentence is about decides how it lands.",
    left: { h: "“You” — sounds like an accusation", items: ["“You didn't tell me.”", "“You made a mistake in the figures.”", "“You're always late with these.”", "→ They defend themselves.", "→ Now you are arguing about them."] },
    right: { h: "“I” — sounds like information", items: ["“I didn't know about the change.”", "“I found two errors in the figures.”", "“I've had three late submissions.”", "→ Same facts.", "→ Nothing to defend against."] },
    note: "This is not softening — the facts are identical. It changes what the sentence is ABOUT: the problem rather than the person.",
    notes: tn({
      time: "16 minutes.",
      how: "The note prevents the usual objection. Nothing is being hidden; the subject of the sentence has moved from the person to the problem.",
      mistakes: "Over-using it until it sounds evasive. “I feel that mistakes may have occurred” is worse than either version.",
      extra: "The right column is still specific and still uncomfortable. It is not a way of avoiding the conversation.",
      tip: "This works in every language and most people never learn it. It is one of the highest-value slides in the module.",
      activity: "Switch the subject: give ten “you” statements and have learners rewrite each as “I”.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Difficult Language 3 of 5" }),
    title: "The three-part criticism",
    sub: "Behaviour · effect · request. Never fewer than three.",
    table: {
      color: C.gram, rowH: 0.52, fontSize: 16.5, headSize: 16, colW: [3.0, 4.6, 4.533],
      rows: [
        ["Part", "Example", "Test"],
        ["BEHAVIOUR", "“The last two reports had wrong figures.”", "could a camera have seen it?"],
        ["EFFECT", "“The board saw bad data.”", "why does it matter?"],
        ["REQUEST", "“Could you check with Sara before sending?”", "what should happen now?"],
      ],
    },
    note: "The camera test: if a camera could not have recorded it, it is not behaviour. “You were careless” fails; “the figures were wrong twice” passes.",
    notes: tn({
      time: "16 minutes.",
      how: "The camera test is the sharpest tool here. It converts vague criticism into something specific in one question.",
      mistakes: "Stopping after two parts. Behaviour and effect without a request leaves the person knowing they failed and not what to do.",
      extra: "The request should be small and concrete. “Be more careful” fails the same test as “you're careless”.",
      tip: "Three parts, three sentences, about fifteen seconds. Difficult conversations are short when they are structured.",
      activity: "Camera test: give twelve criticisms and have learners judge which would pass.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Difficult Language 4 of 5" }),
    title: "The real apology", sub: "Three parts, and no “but”.",
    panelW: 6.9,
    panel: { label: "What a full apology contains", color: C.gram, tint: C.surf2, size: 16.5, lsm: 1.38,
      text: "1.  WHAT YOU DID\n     “I sent the wrong version.”\n\n2.  ITS EFFECT ON THEM\n     “It cost you most of a day.”\n\n3.  WHAT YOU'LL DO DIFFERENTLY\n     “I'll check the file name before\n      I send anything now.”\n\nNo “but”. Anywhere." },
    side: { label: "The tests", color: C.gram, size: 16, items: [
      "Does it name what YOU did, not what happened?",
      "Does it name the effect on THEM, not on the project?",
      "Is there a “but” in it? Then it is not an apology.",
      "“I'm sorry you feel that way” apologises for their reaction, not your act.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The no-“but” rule is the single clearest test. “I'm sorry, but I was very busy” withdraws the apology in the same sentence.",
      mistakes: "Naming the effect on the project rather than on the person. “It delayed the report” is weaker than “it cost you a day”.",
      extra: "Part 3 is what makes it credible. An apology with no change attached is a performance.",
      tip: "Three sentences. A long apology is usually an explanation wearing an apology's clothes.",
      activity: "Fix the apology: give eight flawed apologies and have learners repair each.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Difficult Language 5 of 5" }),
    title: "Put it all together — five habits", sub: "The last five habits of the course.",
    color: C.gram, size: 19, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Have it early, while it is still small", d: "An avoided conversation grows. Two minutes now beats an hour later." },
      { t: "Give warning before you give the content", d: "One sentence. It changes how everything after it lands." },
      { t: "Behaviour and effect — never character", d: "Could a camera have seen it? Then it is usable." },
      { t: "Two seconds of silence before you respond to criticism", d: "The single most valuable pause in this course." },
      { t: "Apologise fully, or not at all — and stop the reflex sorry", d: "Three parts, no “but”. And not for existing." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Habit 4 is the one to enforce in every role-play. It is difficult, it is learnable, and it prevents most bad outcomes.",
      mistakes: "Habit 1 is skipped out of hope. Almost no difficult conversation resolves itself by being left.",
      extra: "Habits 2, 3 and 5 are all structural. Structure is what makes these conversations possible when you are nervous.",
      tip: "Print these five. They are the last habits of the course and among the most transferable.",
      activity: "One habit each: assign each learner one habit to apply in a real conversation this week.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — bad news", sub: "Four steps. Do not bury it.", items: [
      { q: "Where does the fact go?", a: "Second — straight after a one-sentence warning.", why: "Explaining the background first is cruel. The listener cannot process any of it until they know the news." },
      { q: "Why give a warning at all?", a: "Two seconds lets them prepare, and it changes how they hear the fact.", why: "“I'm afraid I've got some bad news” costs nothing and makes the rest land better." },
      { q: "What is the fourth step, and why does it matter?", a: "The next step. It turns a disaster into a problem.", why: "Arriving with even a partial plan changes the whole conversation." },
    ] },
    { title: "Guided examples 2 — giving criticism", sub: "Could a camera have seen it?", items: [
      { q: "“You're careless.” Does that pass the camera test?", a: "No. A camera cannot record carelessness.", why: "It describes a person, not an event, so there is nothing specific to change." },
      { q: "Rewrite it so it passes.", a: "“The last two reports had the wrong figures.”", why: "Checkable, specific, and about an event rather than a character." },
      { q: "What must come after behaviour and effect?", a: "A request — what to do instead.", why: "Without it, the person knows they failed and does not know what would count as succeeding." },
    ] },
    { title: "Guided examples 3 — receiving criticism", sub: "Two seconds first.", items: [
      { q: "Somebody criticises you. What do you do first?", a: "Nothing, for two seconds.", why: "The instinct is to defend. The pause prevents the sentence that makes everything worse." },
      { q: "The criticism is vague. What do you ask?", a: "“Can you give me an example?”", why: "Vague criticism cannot be acted on, and asking for the specific is entirely reasonable." },
      { q: "Half of it is unfair. What do you do?", a: "Acknowledge the true half. “You're right about the figures.”", why: "Partial acknowledgement is legitimate. It concedes what is true without accepting what is not." },
    ] },
    { title: "Guided examples 4 — apology", sub: "Three parts, no “but”.", items: [
      { q: "“I'm sorry, but I was very busy.” Is that an apology?", a: "No. The “but” withdraws it.", why: "An apology with a justification attached is an explanation, and the listener hears the second half." },
      { q: "“I'm sorry you feel that way.” Is that an apology?", a: "No. It apologises for their reaction.", why: "It accepts nothing about what you did, and most people hear that clearly." },
      { q: "What are the three parts?", a: "What you did · its effect on them · what you'll do differently.", why: "Three sentences. Part three is what makes it credible rather than performed." },
    ] },
    { title: "Guided examples 5 — heat", sub: "Lower it without conceding.", items: [
      { q: "They are getting loud. What do you do?", a: "Speak more slowly and more quietly.", why: "It pulls their volume down within about thirty seconds, and it concedes nothing." },
      { q: "Should you say “calm down”?", a: "Never. It has never worked.", why: "It is heard as a judgement about their behaviour and it reliably escalates." },
      { q: "What can you say instead?", a: "“I can see this matters to you.”", why: "Same function — acknowledging the heat — and it insults nobody." },
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
    title: "Giving bad news",
    sub: "Four steps, four sentences. Ninety seconds.",
    turns: [
      { who: "BETHLEHEM", text: "Tolosa — I'm afraid I've got some bad news.", side: "l" },
      { who: "TOLOSA", text: "Go on.", side: "r" },
      { who: "BETHLEHEM", text: "We haven't got the funding for the March course.", side: "l" },
      { who: "TOLOSA", text: "Right. That's a problem.", side: "r" },
      { who: "BETHLEHEM", text: "It means March can't run as planned. But I've found two options, and I'd like to go through them with you now.", side: "l" },
      { who: "TOLOSA", text: "All right. Let's look at them.", side: "r" },
    ],
    note: "Warning · fact in one sentence · consequence · next step. She never explains the background, and he never has to ask.",
    notes: tn({
      time: "16 minutes.",
      how: "Note what is absent: no explanation of why the funding failed. That comes later if he asks. The news comes first.",
      mistakes: "Learners want to explain first. Ask how Tolosa would feel through a two-minute preamble about the funding committee.",
      extra: "The last turn — “let's look at them” — happens because she arrived with options. Without step 4 the conversation stops at the bad news.",
      tip: "Time it. This whole exchange takes about forty seconds and it is complete.",
      activity: "Four sentences: every learner delivers real bad news in exactly four sentences.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Receiving criticism well",
    sub: "Yonas is criticised, partly unfairly. Watch the first two seconds.",
    turns: [
      { who: "MANAGER", text: "Yonas, the reports have been sloppy lately.", side: "r" },
      { who: "YONAS", text: "…Can you give me an example?", side: "l" },
      { who: "MANAGER", text: "The March figures were wrong, and the April one came in two days late.", side: "r" },
      { who: "YONAS", text: "You're right about the March figures — I didn't check them against the source.", side: "l" },
      { who: "YONAS", text: "The April one was late because I was waiting on Adama, but I should have told you that at the time.", side: "l" },
      { who: "YONAS", text: "What would you like me to do differently?", side: "l" },
    ],
    note: "Pause · ask for the specific · acknowledge what is true · explain without excusing · ask what would be better.",
    notes: tn({
      time: "17 minutes.",
      how: "The fifth line is the sophisticated move. He explains the delay AND acknowledges his own failure inside it, which is not a defence.",
      mistakes: "“Sloppy” is character criticism and it fails the camera test. Yonas's question converts it into two specific events.",
      extra: "He does not accept “sloppy”. He accepts one error and one communication failure, which is accurate rather than submissive.",
      tip: "The ellipsis in line 2 is the two-second pause. Point it out — it is the hardest and most important part.",
      activity: "Receive it: every learner is criticised and must pause, ask, acknowledge and ask what would be better.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "The phrases that make a hard conversation possible",
    sub: "Six chunks. Learn them before you need them.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaHandPaper", title: "“Can I raise something with you?”", desc: "The safest opener for anything." },
      { icon: "FaExclamationCircle", title: "“I'm afraid I've got some bad news.”", desc: "Two seconds of warning." },
      { icon: "FaSearch", title: "“Can you give me an example?”", desc: "Turns vague criticism into something usable." },
      { icon: "FaCheckCircle", title: "“You're right about that.”", desc: "Acknowledge the true part. Not all of it." },
      { icon: "FaExchangeAlt", title: "“I think there's been a misunderstanding.”", desc: "De-escalates without blaming anyone." },
      { icon: "FaClock", title: "“Can we come back to this tomorrow?”", desc: "Legitimate. Heat rarely produces good outcomes." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Drill all six as chunks. These are needed at the exact moments when constructing a sentence is hardest.",
      mistakes: "Phrase 4 used to accept everything. It is deliberately partial — “about that”, not “about all of it”.",
      extra: "Phrase 6 is under-used. Postponing a heated conversation is not avoidance if a time is named.",
      tip: "Phrase 3 is protective as well as constructive. Vague criticism is unactionable and asking is entirely reasonable.",
      activity: "Six phrases: run six short role-plays, one per phrase.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "A", text: "Your work on this has been quite disappointing.", side: "r" },
      { who: "YOU", text: "…Can you give me an ______ ?", side: "l" },
      { who: "A", text: "The figures in the last two reports were wrong.", side: "r" },
      { who: "YOU", text: "You're ______ about that — I didn't check them against the source.", side: "l" },
      { who: "A", text: "It meant the board saw bad data.", side: "r" },
      { who: "YOU", text: "I'm sorry. That cost you a difficult meeting. What would you like me to do ______ ?", side: "l" },
    ],
    note: "Use these:  “example”  ·  “right”  ·  “differently”",
    notes: tn({
      time: "13 minutes.",
      how: "The ellipsis in line 2 must be performed as a real two-second silence. Have pairs do it properly — it feels much longer than it is.",
      answers: "1 example · 2 right · 3 differently",
      mistakes: "Learners fill the pause. Insist on the full two seconds; it is the point of the exercise.",
      tip: "The last line contains a real apology: what happened, its effect on them, and then a question. No “but” anywhere.",
      activity: "Do it again with a criticism the learner has actually received.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — five hard conversations", sub: "Three minutes each. Swap roles.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Give real bad news in four sentences", d: "Warning · fact · consequence · next step." },
      { t: "Give criticism in three parts", d: "Behaviour · effect · request. Camera test." },
      { t: "Receive criticism. Pause two seconds first.", d: "Partner times the pause." },
      { t: "Apologise properly for something real", d: "Three parts. No “but”." },
      { t: "Raise a problem with somebody senior", d: "Time · shared problem · evidence · proposal." },
    ],
    notes: tn({
      time: "18 minutes for all five rounds.",
      how: "Round 3's timing is essential. Two seconds feels enormous to the person receiving criticism and it is what makes the rest possible.",
      mistakes: "Round 4 containing a “but”. Have the partner listen for it specifically — it appears more often than learners expect.",
      tip: "Round 5 is the one learners most need and most avoid. Every learner should do it with a real situation.",
      activity: "Real situations: use the conversation each learner named privately in the warm-up.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — bad news in four sentences", sub: "No more than four. Time it.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "WARNING — one sentence", d: "“I'm afraid I've got some bad news.”" },
      { t: "THE FACT — one sentence, plainly", d: "No background. No explanation yet." },
      { t: "THE CONSEQUENCE — one sentence", d: "What it means for them." },
      { t: "THE NEXT STEP — one sentence", d: "Even a partial plan changes everything." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "The four-sentence limit is the discipline. Learners want to explain, and the explanation belongs after the news if it is wanted at all.",
      mistakes: "Explaining before the fact. Have the partner report how it felt waiting through a preamble.",
      extra: "Step 4 is what most people omit. Bad news with no next step leaves the other person with nothing to do but react.",
      tip: "Forty seconds is enough for all four. Difficult conversations are short when they are structured.",
      activity: "Four sentences: every learner delivers three different pieces of bad news in four sentences each.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the two-second pause", sub: "The hardest thing in this module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Your partner criticises you. Say nothing for two seconds.", d: "They count aloud afterwards." },
      { t: "Then ask for an example", d: "“Can you give me an example?”" },
      { t: "Acknowledge only what is true", d: "“You're right about X.”" },
      { t: "Explain without excusing, if you need to", d: "“…but I should have told you at the time.”" },
      { t: "Ask what would be better", d: "“What would you like me to do differently?”" },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Step 1 is genuinely hard and it must be timed. Learners consistently produce half a second and believe it was two.",
      mistakes: "Defending during the pause with facial expression. The silence should be genuine, not visibly impatient.",
      extra: "Step 4's structure is the model: acknowledge your own part inside the explanation, and it stops being a defence.",
      tip: "Have the criticism be slightly unfair. Learning to acknowledge the true part of an unfair criticism is the real skill.",
      activity: "Five criticisms each: every learner receives five and pauses two seconds every time.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — lowering the temperature",
    sub: "Volume and pace do more than words.",
    left: { h: "What escalates", items: ["Matching their volume", "Speaking faster", "Rising intonation at the end", "Filling every pause"] },
    right: { h: "What de-escalates", items: ["Speaking more quietly than them", "Speaking more slowly", "Falling intonation, always", "Leaving two seconds after they finish"] },
    note: "Speak more quietly than the other person and they will lower their voice within about thirty seconds. It works almost every time, and it concedes nothing.",
    notes: tn({
      time: "15 minutes.",
      how: "Demonstrate it. Have a learner raise their voice and respond progressively more quietly — the effect is visible within half a minute.",
      mistakes: "Matching volume. It feels like holding your ground and it guarantees escalation.",
      extra: "Falling intonation matters here as much as anywhere in the course. A rising sentence in a tense exchange sounds like a challenge.",
      tip: "This is the last sound drill of the course and one of the most practically useful. It works in any language.",
      activity: "Quieter, slower: pairs practise responding to raised voices with lowered ones.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — raising it upwards", sub: "Four moves. With a real situation.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Ask for the time. “Could I have ten minutes about X?”", d: "No ambush. No corridor." },
      { t: "State it as a shared problem", d: "“I think we may have an issue with…” — we, not you." },
      { t: "Bring evidence, not feelings", d: "“The last three deliveries were late.”" },
      { t: "Bring a proposed solution", d: "“I'd suggest… What do you think?”" },
      { t: "Deliver all four in ninety seconds", d: "Partner checks each move." },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Step 4 is what makes this welcome rather than resented. Somebody who brings problems with proposals is valuable; somebody who brings only problems is not.",
      mistakes: "Step 2 as “you have a problem”. The shared framing is what prevents an immediate defence.",
      extra: "Step 3 protects the speaker. Evidence can be discussed; feelings can be dismissed as personal.",
      tip: "Use real situations. Every learner has something they have been meaning to raise and this is the rehearsal.",
      activity: "Real problems: every learner rehearses one genuine upward conversation.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — the final recording of the course", sub: "3 minutes. Then compare with Level 4 Module 1.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Give bad news in four sentences", d: "Warning · fact · consequence · next step." },
      { t: "Give criticism in three parts", d: "Behaviour · effect · request. Camera test." },
      { t: "Receive a criticism — with a real two-second pause", d: "Then ask, acknowledge and ask what's better." },
      { t: "Apologise properly for something real", d: "Three parts. No “but”." },
      { t: "Speak for 60 seconds about your work", d: "The same task as Level 4 Module 1. Compare them." },
    ],
    notes: tn({
      time: "20 minutes including the comparison.",
      how: "Step 5 is the last measurement of the course. Play the Module 1 recording immediately afterwards, and if the learner still has their Level 1 recording, play that too.",
      mistakes: "Step 3's pause cut short under pressure. Time it — the recording makes the real duration undeniable.",
      answers: "SUCCESS CRITERIA: four sentences of bad news with a next step · criticism passing the camera test with a request · a genuine two-second pause · an apology with three parts and no “but” · sixty seconds of fluent speech with audibly fewer long pauses than in Module 1.",
      tip: "This is the final recording of the whole course. Treat it as such — the comparison across four levels is what learners will remember.",
      activity: "Then and now: play Level 1, Level 3 and Level 4 recordings for any learner willing.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — two ways to give the same criticism", sub: "Which one could be acted on?",
    panelW: 7.2,
    panel: { label: "Audio script — read A, then B", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "A\n“Honestly, your work's been pretty sloppy lately.\nYou don't seem to care much, and it's starting to\naffect the whole team. You need to sort it out.”\n\nB\n“The March figures had two errors and the April\nreport came in two days late.\nThe board saw incorrect data, which put Chaltu in\na difficult position.\nCould you check figures against the source before\nsending, and tell me early if a deadline is slipping?”" },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. What exactly should the person do after A?",
      "2. What exactly should they do after B?",
      "3. Which parts of A pass the camera test?",
      "4. What are B's three parts?",
      "5. Which one is kinder?",
      "6. Which one is harder to say?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Question 5 usually produces disagreement and then agreement. A feels softer and leaves the person with nothing; B is specific and gives a route.",
      mistakes: "Learners initially judge B as harsher. Ask which they would rather receive from their own manager.",
      extra: "Question 6 is honest: B is harder to say because it requires preparation. A can be said without thinking.",
      answers: "1 Nothing specific. 2 Check figures against the source; flag slipping deadlines early. 3 None — “sloppy”, “don't care” and “sort it out” are all uncheckable. 4 Behaviour, effect, request. 5 B. 6 B.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "The specific version is the kind one.",
    size: 16.5,
    items: [
      { q: "1 — what to do after A", a: "Nothing specific. “Sort it out” is not an instruction.", why: "Even somebody who wants to improve cannot act on it, which makes it useless as well as unpleasant." },
      { q: "3 — the camera test", a: "Nothing in A passes. Everything in B does.", why: "“Sloppy” and “doesn't care” describe a person. “Two errors” and “two days late” describe events." },
      { q: "4 — B's three parts", a: "Behaviour · effect · request.", why: "Fifteen seconds, and the person leaves knowing exactly what to do differently." },
      { q: "5 — which is kinder?", a: "B, clearly — once you ask which you would rather receive.", why: "A feels softer and leaves somebody knowing they have failed without knowing how to succeed." },
      { q: "6 — which is harder to say?", a: "B — it requires preparation.", why: "A can be said without thinking, which is precisely why it gets said." },
    ],
    notes: keyNotes("Item 5 is the module's ethic in one question. Ask the class which they would rather receive and the disagreement resolves itself."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — four apologies", sub: "Only one of them is real.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "1.  “I'm sorry you feel that way.”\n\n2.  “I'm sorry, but I was under a lot of pressure\nand nobody told me the deadline had moved.”\n\n3.  “Sorry. Sorry. Really sorry. I'm so sorry.”\n\n4.  “I'm sorry. I sent the old version, and it cost\nyou most of Tuesday. I'll check the file name\nagainst the date before I send anything now.”" },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. What is wrong with number 1?",
      "2. What is wrong with number 2?",
      "3. What is wrong with number 3?",
      "4. What does number 4 contain?",
      "5. Which word ruins number 2?",
      "6. Which would you accept?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Number 3 is worth discussing. Repeated apology is common in second-language speakers and it reads as distress rather than accountability.",
      mistakes: "Number 2's “but” is the classic. The listener hears only the second half, which is a justification.",
      extra: "Number 4 is three sentences: act, effect on the person, and the change. Nothing else is needed.",
      answers: "1 It apologises for their reaction, not the act. 2 The “but” withdraws it. 3 Repetition without content. 4 Act, effect, change. 5 “But”. 6 Number 4.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Three failures, one real apology.",
    size: 16.5,
    items: [
      { q: "1 — “I'm sorry you feel that way”", a: "It apologises for their reaction, not for what you did.", why: "It accepts nothing, and most people hear that immediately." },
      { q: "2 and 5 — the “but”", a: "It withdraws the apology in the same sentence.", why: "The listener hears the justification and discards the apology in front of it." },
      { q: "3 — repetition", a: "Four apologies with no content.", why: "It reads as distress rather than accountability, and it asks the other person to comfort you." },
      { q: "4 — the real one", a: "What you did · its effect on them · what you'll change.", why: "Three sentences. Nothing else is needed and nothing may be added." },
      { q: "6 — which would you accept?", a: "Only number 4.", why: "It is the only one that names the act, the harm and the change." },
    ],
    notes: keyNotes("Number 3 is worth naming gently. Repeated apologising is common among second-language speakers and it costs standing without buying forgiveness."),
  });

  L.grid({
    sec: SEC.lis, title: "Listening in a difficult conversation", sub: "Four things to catch while under pressure.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaSearch", title: "Is it behaviour or character?", desc: "If they said “you're careless”, ask for the example. You cannot act on a character judgement." },
      { icon: "FaCheckCircle", title: "What part of it is true?", desc: "There is almost always one. Find it before you respond to the rest." },
      { icon: "FaVolumeDown", title: "Is the heat rising?", desc: "Volume and pace tell you before the words do. Lower yours." },
      { icon: "FaQuestion", title: "What do they actually want?", desc: "An apology? A change? To be heard? Answering the wrong one prolongs it." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Item 4 is the sophisticated one. Somebody who wants to be heard is not asking for a solution, and offering one makes it worse.",
      mistakes: "Solving a problem when the person wanted acknowledgement. It is well-intentioned and it reliably escalates.",
      tip: "Item 2 is the two-second pause put to use. The pause exists so that you can do this before responding.",
      activity: "What do they want: read six complaints and have learners identify what each person actually wanted.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: SEC.rea, title: "Reading 1 — raising a problem upwards", sub: "Four moves, in writing.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "Dear Chaltu,\n\nCould I have ten minutes this week about the\nAdama deliveries?\nI think we may have an issue building up. The\nlast three deliveries were late — by two, four\nand six days — and the pattern is worsening.\nI've spoken to the depot and the delay is at\ntheir end, not ours.\nI'd suggest we move to the Bishoftu supplier for\nthe next quarter and review in March. They can\ntake the volume — I've checked.\nHappy to be told I'm wrong on this.\nYonas",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Find the four moves.",
      "Why “we may have an issue”?",
      "What evidence is given?",
      "What does the last line do?",
      "Is he complaining?",
      "Would you welcome this email?",
    ] },
    notes: tn({
      time: "17 minutes.",
      how: "The final line is the sophisticated move. It signals confidence rather than doubt and it makes disagreement easy, which makes agreement more likely.",
      mistakes: "Learners read the last line as weakness. Ask how it would read without it — considerably more confrontational.",
      extra: "The evidence is three specific numbers and a worsening pattern. That is Module 2's evidence rule applied upwards.",
      answers: "Time · shared problem · evidence · proposal. “We” makes it collaborative. Two, four and six days. It invites correction and lowers the stakes. No — he proposes. Yes.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Every choice is deliberate.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "Why does he ask for ten minutes rather than just raising it?",
      "Why “we may have an issue” rather than “there is a problem”?",
      "What evidence does he bring, and why three numbers?",
      "What does “happy to be told I'm wrong” achieve?",
      "What makes this different from a complaint?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 5 is the summary. He brings a problem, evidence and a proposal — which is a contribution rather than a complaint.",
      mistakes: "Learners think the hedging weakens it. The hedges make it easy to engage with, and the evidence makes it hard to dismiss.",
      tip: "Question 3: three numbers showing a worsening trend is far stronger than one late delivery.",
      answers: "1 So she is not ambushed and can prepare. · 2 It makes it a shared problem rather than an accusation. · 3 Two, four and six days — three points show a trend. · 4 It invites correction and lowers the stakes for both. · 5 He brings a proposed solution.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "A problem raised well is a contribution.",
    size: 16.5,
    items: [
      { q: "1 — asking for time", a: "So she is not ambushed and can think before responding.", why: "A problem raised in a corridor gets a defensive answer almost every time." },
      { q: "2 — “we may have an issue”", a: "It frames it as shared rather than as an accusation.", why: "“You have a problem” invites defence. “We may have an issue” invites collaboration." },
      { q: "3 — three numbers", a: "Two, four and six days — a worsening trend.", why: "One late delivery is an incident. Three showing a pattern is a problem worth acting on." },
      { q: "4 — “happy to be told I'm wrong”", a: "It lowers the stakes and makes disagreement easy.", why: "Which makes agreement more likely. It signals confidence, not doubt." },
      { q: "5 — complaint or contribution?", a: "A contribution — he brings a proposal.", why: "Somebody who brings problems with solutions is valuable; somebody who brings only problems is not." },
    ],
    notes: keyNotes("Item 4 is worth dwelling on. Learners read the closing hedge as weakness; it is the line that makes the whole email easy to accept."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — the same problem, badly raised", sub: "Find the five errors.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "Chaltu,\n\nI have to say I'm getting really frustrated with\nthe Adama situation. It's been going on for ages\nand nobody seems to be doing anything about it.\n\nThe deliveries are always late and it's making my\njob impossible. I don't think it's fair that I'm\nthe one dealing with this.\n\nSomething needs to be done.\n\nYonas",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Is there any evidence?",
      "Find the word “always”. Is it true?",
      "Who is blamed?",
      "Is there a proposal?",
      "What is “something needs to be done”?",
      "How would you react to this?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "This is the same genuine problem, and it will not be acted on. That is the lesson: being right is not enough if the raising is done badly.",
      mistakes: "“Always” is almost certainly false and it invites an argument about frequency instead of about the deliveries.",
      extra: "“Nobody seems to be doing anything” includes Chaltu, which makes it an accusation dressed as an observation.",
      answers: "No evidence. “Always” is untrue and arguable. Chaltu, by implication. No proposal. A demand with no content. Defensively.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Same problem. It will not get solved.",
    size: 16.5,
    items: [
      { q: "1 — the evidence", a: "None. “Ages” and “always” are not evidence.", why: "Module 2's rule: if it is not checkable it can be waved away, however true it is." },
      { q: "2 — “always”", a: "Almost certainly false, and now arguable.", why: "One on-time delivery disproves it, and the conversation becomes about frequency instead of the problem." },
      { q: "3 — who is blamed", a: "Chaltu, by implication — “nobody seems to be doing anything”.", why: "An accusation dressed as an observation, which is harder to answer than a direct one." },
      { q: "4 and 5 — the proposal", a: "There isn't one. “Something needs to be done” is a demand with no content.", why: "It asks the reader to do the thinking and take the risk." },
      { q: "Vocabulary check", a: "raise · misunderstanding · defensive · acknowledge · constructive", why: "This email is not constructive: it raises nothing usable and it will produce a defensive reply." },
    ],
    notes: keyNotes("Compare the two emails directly. Same problem, same person, same facts — and only one of them will result in anything changing."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — the camera test", sub: "Rewrite each as behaviour, effect and request.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Three sentences each. Nothing about character.",
    items: [
      "1.  “You're careless.”",
      "2.  “You're not a team player.”",
      "3.  “You've got a bad attitude about deadlines.”",
      "4.  “You never listen in meetings.”",
      "5.  “Your work has been disappointing.”",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "The rewrites require inventing plausible specifics, which is the point: real criticism needs real examples and they must be gathered beforehand.",
      answers: "MODELS: 1 “The last two reports had wrong figures. The board saw bad data. Could you check against the source before sending?” · 4 “In the last two meetings you spoke over Mimi. She stopped contributing. Could you let people finish?”",
      mistakes: "Keeping “always” or “never”. Both are nearly always false and both invite an argument about frequency.",
      tip: "If a learner cannot invent a specific example, that is informative — the criticism may not be well-founded.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — fix the apology", sub: "Three parts. No “but”.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each as a real apology.",
    items: [
      "1.  “I'm sorry you feel that way.”",
      "2.  “I'm sorry, but nobody told me the date had changed.”",
      "3.  “Sorry. Sorry. I'm really sorry.”",
      "4.  “Sorry if I upset anyone.”",
      "5.  “Mistakes were made.”",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Item 5 is the passive hiding the doer, from Level 3 Module 8. Here it hides responsibility, which is its usual purpose.",
      answers: "MODELS: 1 “I'm sorry. I dismissed your point in the meeting and it made you look ignored. I'll ask for your view before I respond next time.” · 2 “I'm sorry. I missed the new date and it delayed your report by a day. I'll confirm dates in writing from now on.”",
      mistakes: "Item 4's “if” makes it conditional. It suggests you are not sure anybody was upset, which is worse than saying nothing.",
      tip: "Item 5 has no subject. Ask who made the mistakes — the sentence exists specifically to avoid answering that.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — the conversation you have been avoiding", sub: "The one you named in the warm-up.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Plan it fully in writing. You do not have to show anybody.",
    items: [
      "1.  What EXACTLY do you want to say? One sentence.",
      "2.  What is the behaviour — could a camera have seen it?",
      "3.  What is the effect, on you or on the work?",
      "4.  What is your request — what should happen instead?",
      "5.  What is the strongest thing they might say back? Your answer?",
      "6.  When and where will you have it? Be specific.",
    ],
    notes: tn({
      time: "22 minutes.",
      how: "Step 6 is what turns preparation into action. A conversation without a time and place stays avoided.",
      answers: "No fixed answers. Step 2 must pass the camera test; step 5 must name a genuinely strong response.",
      mistakes: "Step 1 longer than one sentence. If it cannot be said in one, it is not yet clear enough to say at all.",
      tip: "This is the most personally useful task in the course. Give it the full twenty-two minutes and do not rush step 5.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — how it is marked", sub: "25 marks. And one thing that is not marked.",
    size: 16.5,
    items: [
      { q: "The one sentence — 5 marks", a: "What you want to say, in one sentence.", why: "If it takes three, the conversation is not yet clear enough in your own mind to have." },
      { q: "Behaviour — 6 marks", a: "Passes the camera test. Specific and checkable.", why: "“Careless”, “always” and “attitude” all score zero here." },
      { q: "Effect — 4 marks", a: "On you or on the work, stated plainly.", why: "This is why it matters. Without it the request sounds arbitrary." },
      { q: "Request — 5 marks", a: "Small, concrete, and something they can actually do.", why: "“Be more careful” fails. “Check with Sara before sending” passes." },
      { q: "Their strongest reply — 5 marks", a: "A genuinely strong objection, with your answer.", why: "Anticipating it is Module 2's concession work, applied to a conversation that matters to you." },
    ],
    notes: keyNotes("What is NOT marked: whether you actually have the conversation. That is the learner's decision and it should not be graded — but ask about it in a month."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your difficult conversation checklist", sub: "Six checks. Before you open your mouth.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Can I say the point in ONE sentence?", d: "If not, I am not ready to have it." },
      { t: "Could a camera have seen the behaviour?", d: "No character. No “always”. No “never”." },
      { t: "Have I named the effect, and a request?", d: "Behaviour and effect without a request is a complaint." },
      { t: "Have I given warning before the content?", d: "One sentence. It changes how the rest lands." },
      { t: "If I am apologising — three parts, and no “but”?", d: "Act · effect on them · what I'll change." },
      { t: "Am I about to say “calm down”?", d: "Don't. Say “I can see this matters to you.”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Check 1 is the readiness test. A learner who cannot state the point in one sentence should prepare further before having the conversation.",
      tip: "Print this. It is the last checklist of the course and it applies to conversations in any language.",
      activity: "Six checks: apply this to the conversation you named in the warm-up.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. When giving bad news, the fact should come:", opts: "a) after a full explanation     b) second, after a short warning     c) last" },
      { q: "2. “You're careless” fails because:", opts: "a) it's rude     b) a camera couldn't have seen it     c) it's too short" },
      { q: "3. When criticised, you should first:", opts: "a) explain     b) say nothing for two seconds     c) apologise" },
      { q: "4. A real apology contains:", opts: "a) a “but”     b) act, effect, change     c) repetition" },
      { q: "5. When somebody is angry, you should:", opts: "a) match their volume     b) say “calm down”     c) speak more quietly" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 c",
      tip: "Question 3 is the module's hardest habit. Say the answer twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — camera test", sub: "Which of these could a camera have recorded?",
    color: C.green, instruction: "Write PASS or FAIL for each.", size: 18,
    items: [
      "1.  “You've got a bad attitude.”",
      "2.  “The last two reports had wrong figures.”",
      "3.  “You don't care about quality.”",
      "4.  “You spoke over Mimi twice in Tuesday's meeting.”",
      "5.  “You're always late.”",
      "6.  “The April report came in two days after the deadline.”",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "The test is mechanical and that is its value. It converts a judgement about somebody into a question about evidence.",
      answers: "1 FAIL · 2 PASS · 3 FAIL · 4 PASS · 5 FAIL · 6 PASS",
      mistakes: "Item 5 feels factual. “Always” cannot be recorded and one counter-example destroys it.",
      tip: "Have learners rewrite the three failures. That is where the learning is.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Steps, structures and moves.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the CONVERSATION to its FIRST move", opts: "1. bad news     2. criticism     3. receiving criticism     4. raising it upwards" },
      { q: "a) ask permission to give feedback     b) two seconds of silence", opts: "c) a short warning     d) ask for ten minutes" },
      { q: "Part 2 — match the APOLOGY PART to the EXAMPLE", opts: "1. what you did     2. the effect     3. the change          a) “It cost you most of a day.”     b) “I sent the wrong version.”     c) “I'll check the file name first.”" },
      { q: "Part 3 — match the SITUATION to the MOVE", opts: "1. they're shouting     2. criticism is vague     3. half of it is unfair          a) “Can you give me an example?”     b) speak more quietly     c) acknowledge the true part" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–a, 3–b, 4–d.  ·  Part 2: 1–b, 2–a, 3–c.  ·  Part 3: 1–b, 2–a, 3–c.",
      tip: "Part 3 item 3 is the sophisticated one. Partial acknowledgement is legitimate and most people do not know that.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — “you” to “I”", sub: "Same facts. Different subject.",
    color: C.green, instruction: "Rewrite each with “I” as the subject.", size: 18,
    items: [
      "1.  “You didn't tell me about the change.”",
      "2.  “You made two errors in the figures.”",
      "3.  “You're always changing the deadline.”",
      "4.  “You interrupted me twice.”",
      "5.  “You haven't answered my email.”",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Nothing is softened — the facts are identical. What changes is what the sentence is about.",
      answers: "MODELS: 1 “I didn't know about the change.” · 2 “I found two errors in the figures.” · 3 “I've had three deadline changes this month.” · 4 “I lost my thread a couple of times.” · 5 “I haven't had a reply to my email yet.”",
      mistakes: "Item 3 keeping “always”. The rewrite also has to replace it with a countable fact.",
      tip: "Ask which version they would rather receive. The answer is consistent and it is the argument.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — what would you say?", sub: "Five real situations.",
    color: C.green, instruction: "Write exactly what you would say.", size: 17,
    items: [
      "1.  You must tell a colleague their project has been cancelled.",
      "2.  A team member has missed three deadlines without warning you.",
      "3.  Your manager criticises you unfairly in front of others.",
      "4.  You sent the wrong file and it cost somebody a day.",
      "5.  A supplier has been late three times and it is getting worse.",
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Item 3 is the hardest. The public setting means the immediate response should be brief, with the substance raised privately afterwards.",
      answers: "MODELS: 3 “Can we talk about this after the meeting?” — then privately: the two-second pause, ask for the example, acknowledge what is true, and raise the public setting as its own issue. 4 A three-part apology with no “but”.",
      mistakes: "Item 3 answered by arguing publicly. That is the outcome the module exists to prevent.",
      tip: "Item 5 is the upward conversation from slide 9. Four moves, with evidence and a proposal.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  You should explain the background before giving bad news.",
      "2.  “You're careless” is acceptable if it is true.",
      "3.  You should pause for two seconds before answering criticism.",
      "4.  “I'm sorry, but…” is a valid apology.",
      "5.  Saying “calm down” helps in a heated conversation.",
      "6.  A difficult conversation gets easier if you leave it.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — the fact comes second, after a short warning · 2 F — it cannot be acted on, true or not · 3 T · 4 F — the “but” withdraws it · 5 F — it has never worked; say “I can see this matters to you” · 6 F — it grows",
      tip: "Item 6 is the module's opening claim. End the exercise on it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own conversations.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What conversation are you avoiding, and for how long?",
      "2.  What is the behaviour — in camera-test terms?",
      "3.  What is your request?",
      "4.  What is the strongest thing they might say back?",
      "5.  When exactly will you have it?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 5 is the one that matters. Without a specific time the conversation stays avoided regardless of how well it is planned.",
      answers: "No fixed answers. Question 2 must pass the camera test; question 5 must name a day.",
      mistakes: "Question 5 answered with “soon”. Push for a date.",
      tip: "Do not ask learners to share these. Ask in a month whether they had the conversation.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "In pairs. Partner times the pause.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner checks each structure.", size: 19,
    items: [
      "1.  Bad news in four sentences. Partner checks all four.",
      "2.  Criticism in three parts. Partner applies the camera test.",
      "3.  Receive criticism. Partner times your pause.",
      "4.  Apologise in three parts. Partner listens for “but”.",
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Round 3's timing is the critical one. Learners produce half a second and are convinced it was two.",
      answers: "SUCCESS CRITERIA: 1 four sentences with a next step · 2 behaviour passing the camera test, plus effect and request · 3 a genuine two-second pause · 4 three parts and no “but”.",
      tip: "Round 4's “but” appears more often than anybody expects. Have the partner listen for nothing else.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full conversation", sub: "The real one. Rehearsed properly.",
    color: C.green, instruction: "In pairs. Use the conversation you have been avoiding.", size: 17,
    items: [
      { q: "1. Brief your partner on the other person.", opts: "How they usually react." },
      { q: "2. Have the conversation. Five minutes.", opts: "Your partner plays them, realistically." },
      { q: "3. Your partner responds as that person would.", opts: "Including the difficult response." },
      { q: "4. Stop. What went differently from what you expected?", opts: "Be specific." },
      { q: "5. Do it again, improved.", opts: "Same conversation, second attempt." },
    ],
    notes: tn({
      time: "A full lesson in pairs.",
      how: "Step 5 is what makes this a rehearsal. The second attempt is almost always noticeably better and that is what gives learners the confidence to have it for real.",
      answers: "Assessed with the six checks from slide 50.",
      tip: "Step 1 matters. A partner who plays the other person realistically, including their difficult reactions, makes this genuinely useful.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "The last discussion of the course.",
    color: C.green, instruction: "Answer in English. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why is a specific criticism kinder than a vague one?", opts: "What can the person do with each?" },
      { q: "2. Why is the two-second pause so hard?", opts: "What is the instinct fighting it?" },
      { q: "3. When should you NOT have a difficult conversation?", opts: "Give a real example." },
      { q: "4. Is it ever right to leave something unsaid?", opts: "Argue both sides honestly." },
    ],
    notes: tn({
      time: "15 minutes. Discussion, not writing.",
      how: "Questions 3 and 4 keep the module honest. Not every difficult conversation should be had, and pretending otherwise is bad advice.",
      answers: "1 A specific criticism can be acted on; a vague one leaves somebody knowing they failed without knowing how to succeed. 2 The instinct is to defend, and defending feels like protecting yourself when it is actually closing the conversation. 3 When you are angry, when the other person is in crisis, when you have no evidence yet, or when it is genuinely not yours to raise. 4 Sometimes — if it is small, unrepeated, and not yours to manage, saying nothing is a legitimate choice. But most things left unsaid were left because it was uncomfortable, not because it was right.",
      tip: "Question 4's second half is the honest caution. Learners should be able to distinguish a considered silence from an avoided conversation.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Bad news", items: [
      { q: "1. Name the four steps of giving bad news.", opts: "Four answers." },
      { q: "2. Where does the fact go, and why?", opts: "One sentence." },
      { q: "3. Why give a warning first?", opts: "One sentence." },
      { q: "4. What does the fourth step achieve?", opts: "One sentence." },
    ] },
    { part: "Part 2 · Giving criticism", items: [
      { q: "5. Name the three parts of a criticism.", opts: "Three answers." },
      { q: "6. What is the camera test?", opts: "One sentence." },
      { q: "7. Why is “you always” a problem?", opts: "One sentence." },
      { q: "8. What happens if you leave out the request?", opts: "One sentence." },
    ] },
    { part: "Part 3 · Receiving criticism", items: [
      { q: "9. What do you do first?", opts: "One answer." },
      { q: "10. The criticism is vague. What do you ask?", opts: "Write the question." },
      { q: "11. Half of it is unfair. What do you do?", opts: "One sentence." },
      { q: "12. How do you end it constructively?", opts: "Write the question." },
    ] },
    { part: "Part 4 · Apology and heat", items: [
      { q: "13. Name the three parts of a real apology.", opts: "Three answers." },
      { q: "14. Which word must never appear in one?", opts: "One word." },
      { q: "15. What is wrong with “I'm sorry you feel that way”?", opts: "One sentence." },
      { q: "16. What should you never say to an angry person?", opts: "Two words, and what to say instead." },
    ] },
    { part: "Part 5 · Raising it upwards", items: [
      { q: "17. Name the four moves.", opts: "Four answers." },
      { q: "18. Why “we may have an issue” rather than “you have a problem”?", opts: "One sentence." },
      { q: "19. Why bring a proposed solution?", opts: "One sentence." },
      { q: "20. SPEAKING: four conversations — bad news, criticism, receiving, apology.", opts: "Assessed live." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 8 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. This is the last quiz of the course." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nThis is the final quiz of the entire course. Question 20 is assessed live and the two-second pause is timed.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the four steps", a: "Warning · the fact · the consequence · the next step.", why: "Four sentences, about forty seconds. Structured conversations are short." },
      { q: "Q2 — where the fact goes", a: "Second, straight after the warning.", why: "Explaining the background first is cruel — the listener cannot process any of it until they know the news." },
      { q: "Q3 — why warn first", a: "Two seconds lets them prepare, which changes how they hear the fact.", why: "It costs nothing and it measurably improves how the news lands." },
      { q: "Q4 — the fourth step", a: "It turns a disaster into a problem.", why: "Arriving with even a partial plan changes the entire conversation." } ],
    [ { q: "Q5 — the three parts", a: "Behaviour · effect · request.", why: "Fifteen seconds, and the person leaves knowing exactly what to do differently." },
      { q: "Q6 — the camera test", a: "Could a camera have recorded it?", why: "If not, it is character rather than behaviour, and nobody can act on it." },
      { q: "Q7 — “you always”", a: "It is almost never true, and one counter-example destroys it.", why: "The conversation then becomes an argument about frequency instead of about the problem." },
      { q: "Q8 — no request", a: "It becomes a complaint.", why: "The person knows they failed and does not know what would count as succeeding." } ],
    [ { q: "Q9 — what to do first", a: "Say nothing for two seconds.", why: "The instinct is to defend, and the defence is what closes the conversation." },
      { q: "Q10 — vague criticism", a: "“Can you give me an example?”", why: "Vague criticism cannot be acted on. Asking for the specific is entirely reasonable." },
      { q: "Q11 — half unfair", a: "Acknowledge the true part only.", why: "Partial acknowledgement is legitimate and it is more accurate than accepting or rejecting all of it." },
      { q: "Q12 — ending it", a: "“What would you like me to do differently?”", why: "It ends constructively and shows you took it seriously rather than merely absorbing it." } ],
    [ { q: "Q13 — the three parts", a: "What you did · its effect on them · what you'll change.", why: "Three sentences. Part three is what makes it credible rather than performed." },
      { q: "Q14 — the forbidden word", a: "“But”.", why: "It withdraws the apology in the same sentence, and the listener hears the justification." },
      { q: "Q15 — “I'm sorry you feel that way”", a: "It apologises for their reaction, not for what you did.", why: "It accepts nothing, and most people hear that immediately." },
      { q: "Q16 — never say", a: "“Calm down.” Say “I can see this matters to you.”", why: "The first is heard as a judgement and reliably escalates; the second does the same job safely." } ],
    [ { q: "Q17 — the four moves", a: "Ask for time · state it as shared · bring evidence · bring a proposal.", why: "In that order. Each one prevents a specific defensive reaction." },
      { q: "Q18 — “we” not “you”", a: "It makes it a problem to solve rather than an accusation.", why: "“You have a problem” invites defence; “we may have an issue” invites collaboration." },
      { q: "Q19 — why a proposal", a: "It makes you useful rather than merely complaining.", why: "Somebody who brings problems with solutions is valued; somebody who brings only problems is not." },
      { q: "Q20 — the four conversations", a: "Assessed on structure, the camera test and a timed two-second pause", why: "Six checks from slide 50. The pause is timed because learners consistently over-estimate it." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q6, Q9 and Q14 are the diagnostic block: the camera test, the two-second pause, and the forbidden “but”. All three are simple rules that prevent most bad outcomes."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. And one real conversation.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Rewrite five character criticisms as behaviour", d: "Apply the camera test to each." },
      { t: "Practise the two-second pause five times", d: "Have somebody criticise you. Time it." },
      { t: "Count your reflex apologies for one day", d: "How many “sorry”s were not for anything?" },
      { t: "Write your four-move upward conversation", d: "Time · shared problem · evidence · proposal." },
      { t: "Have ONE of the conversations you have been avoiding", d: "The small one. Not the biggest." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Friday's task should be the smallest avoided conversation, not the largest. Success on a small one is what makes the large one possible.",
      tip: "Wednesday's count is usually a surprise. Reflex apologies are invisible to the person making them.",
      activity: "Ask three learners to report on Friday's conversation at the next lesson — voluntarily.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "The last work of the course.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your written plan for the avoided conversation", d: "One sentence · behaviour · effect · request · their reply · when." },
      { t: "Five character criticisms rewritten as behaviour", d: "All five passing the camera test." },
      { t: "Record your three-minute speaking challenge", d: "Bad news · criticism · receiving · apology · 60 seconds on your work." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 3's final element is the last measurement of the course. Store it beside the Level 1, Level 3 and Module 1 recordings.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Do not require task 1 to be shared. Mark it privately, and return it with one comment.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "The last rubric of the course.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaClipboardList", title: "The plan — 12 marks", desc: "One sentence (3) · behaviour passes the camera test (4) · effect and request (3) · their strongest reply anticipated (2)." },
      { icon: "FaVideo", title: "Five rewrites — 5 marks", desc: "All five specific, checkable and free of “always” and “never”." },
      { icon: "FaMicrophone", title: "Recording — 8 marks", desc: "Bad news in four sentences (2) · criticism in three parts (2) · a timed two-second pause (2) · apology with no “but” (2)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → rehearse the four structures with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Note what is not marked: whether the conversation actually happened. That is the learner's decision and grading it would be wrong.",
      tip: "Return this with one personal comment. It is the last piece of work in the course and it deserves more than a number.",
      mistakes: "Do not mark grammar anywhere in this module. Structure and specificity are what is being assessed.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaExclamationCircle", title: "Bad news", desc: "Warning · fact · consequence · next step. Four sentences." },
      { icon: "FaVideo", title: "The camera test", desc: "Behaviour, not character. Then effect, then request." },
      { icon: "FaPauseCircle", title: "Two seconds", desc: "Before you answer any criticism. The hardest habit here." },
      { icon: "FaCheckCircle", title: "Acknowledge the true part", desc: "Not all of it. Partial is accurate and legitimate." },
      { icon: "FaHandshake", title: "The real apology", desc: "Act · effect · change. No “but”, anywhere." },
      { icon: "FaArrowUp", title: "Raising it upwards", desc: "Time · shared problem · evidence · proposal." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3. Ask task 3 again: is it the English, or the conversation? Most learners now separate the two clearly.",
      tip: "Ask who has already had one of these conversations this week. Those reports are the module's real result.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The last toolkit of the course. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaExclamationCircle", title: "Bad news — four sentences", desc: "1  “I'm afraid I've got some bad news.”\n2  The fact. One sentence. No preamble.\n3  What it means for them.\n4  What we do now." },
      { icon: "FaVideo", title: "Criticism — three parts", desc: "1  BEHAVIOUR — could a camera see it?\n2  EFFECT — why it matters\n3  REQUEST — what to do instead\nNo “always”. No “never”. No character." },
      { icon: "FaPauseCircle", title: "Receiving criticism", desc: "1  Two seconds of silence\n2  “Can you give me an example?”\n3  “You're right about that.”\n4  “What would you like me to do differently?”" },
      { icon: "FaHandshake", title: "The real apology", desc: "1  What you did\n2  Its effect on THEM\n3  What you'll do differently\nNo “but”. Anywhere." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The third box is the one to read before any conversation where they expect criticism.",
      tip: "Print all four. This is the last card of the course and arguably the most useful in ordinary life.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "You have finished the course",
    text: "Four levels. Thirty modules. From the alphabet to a difficult conversation held well in a second language.",
    sub: "You started unable to introduce yourself. You can now argue a case, chair a meeting, hold a room,\nnegotiate a deal and tell somebody something they do not want to hear — clearly, and kindly.",
    chips: ["CEFR B2", "30 modules", "Keep the recordings"],
    notes: tn({
      time: "10 minutes. Do not rush this slide. It is the last one.",
      how: "Play the recordings. Level 1 Module 1, Level 3 Module 1, Level 4 Module 1, and today's. Four points across the whole course, in about six minutes. Nothing you say will match what learners hear.",
      mistakes: "Do not let anybody leave thinking they have finished learning English. They have finished this course, which is different, and B2 is a working professional level.",
      extra: "Name specifically what they can do now that they could not: introduce themselves, hold a meeting, present to a room, handle an interview, argue a case, negotiate, and have a difficult conversation without avoiding it.",
      tip: "Tell them what comes next honestly: no more modules, just use. B2 to C1 happens through working in the language, not through another course.",
      activity: "Final round: read every learner's name and say one specific thing each can now do that they could not at the start. It takes twenty minutes and they will remember it for years.",
    }),
  });
};
