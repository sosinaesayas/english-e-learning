"use strict";
/* LEVEL 4 · MODULE 3 — Debate & Persuasion   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 4", levelNo: LV.no, levelName: "Advanced Spoken\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Debate & Persuasion",
    sub: "Module 2 taught you to build an argument. This module puts one in front of somebody who has prepared against it — under time pressure, in public.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "FULL", v: "CLASS DEBATE" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Announce in lesson one that the module ends in a full class debate with assigned sides. Knowing that from the start changes how learners engage with everything before it.",
      tip: "Debate is uncomfortable for many learners and it is the fastest way to build argumentative fluency. Say both things honestly.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. Under pressure, against a prepared opponent.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Open a debate case in ninety seconds", d: "Position, three lines of argument, and what you will prove." },
      { t: "Rebut — attack the specific weak point, not everything", d: "Rebuttal is surgery, not demolition." },
      { t: "Answer a question you were not expecting", d: "The moment debates are actually won and lost." },
      { t: "Persuade, not just prove", d: "Being right and being convincing are different achievements." },
      { t: "Lose an exchange without losing the debate", d: "Nobody wins every point. The good ones know that." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 4 is the one learners underestimate. A logically watertight case delivered badly loses to a decent case delivered well, and that is worth knowing.",
      tip: "Objective 5 removes a lot of fear. Losing one exchange is normal; behaving as though it were fatal is what actually loses debates.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: sixty seconds, no preparation", sub: "You will be given a side. You do not choose it.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaRandom", title: "1 · Draw a side", desc: "“Homework should be abolished.” Your partner gives you FOR or AGAINST. No choosing." },
      { icon: "FaStopwatch", title: "2 · Sixty seconds", desc: "Argue it. Now. How far did you get before you stopped?" },
      { icon: "FaBolt", title: "3 · One question", desc: "Your partner asks one hard question. What did you do with it?" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Task 1 must be genuinely assigned, not chosen. Debating a side you did not pick is the whole discipline and learners should meet it in the first ten minutes.",
      mistakes: "Correct nothing. Note who froze at task 3 — the unexpected question is where most people fail and where slide 9 does its work.",
      tip: "Compare directly with the Module 2 warm-up. There they defended a view they held; here they defend one they may not.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Being right is not the same as being convincing. A debate rewards the second.",
    sub: "The best argument in the room loses regularly — to a worse argument that was clearer, better structured,\nand delivered by somebody who did not panic when challenged.",
    chips: ["Clear beats clever", "Structure beats volume", "Calm beats certain"],
    notes: tn({
      time: "7 minutes.",
      how: "This is uncomfortable and true. Learners who believe the strongest logic automatically wins are unprepared for what actually decides real discussions.",
      mistakes: "Do not let this become cynicism. The point is not that truth does not matter — it is that truth needs delivery to travel.",
      extra: "Everything in Module 2 still applies. This module adds what happens when somebody is actively looking for the hole in it.",
      tip: "The third chip is the most useful. A calm speaker who says “that's a fair point, let me answer it” beats a loud one every time.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — the shape of a debate
  L.panelSide({
    sec: SEC.con, title: "The shape of a debate", sub: "Four stages. Each one has a different job.",
    panelW: 6.8,
    panel: { label: "The four stages", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "1.  OPENING  —  90 seconds\n     Your position and three lines of argument.\n\n2.  REBUTTAL  —  60 seconds\n     Attack the ONE weakest point they made.\n\n3.  QUESTIONS  —  open\n     Where debates are actually decided.\n\n4.  CLOSING  —  60 seconds\n     What you proved. No new arguments." },
    side: { label: "The rules of each stage", color: C.green, size: 16, items: [
      "OPENING — tell them what you will prove. Three lines, no more.",
      "REBUTTAL — one target, properly destroyed. Not five, half-attacked.",
      "QUESTIONS — the unprepared moment. Slide 9 is the technique.",
      "CLOSING — remind, do not introduce. New material here looks desperate.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The rebuttal rule is the one learners get wrong. Attacking five points weakly achieves nothing; destroying one properly changes the debate.",
      mistakes: "Introducing new arguments in the closing. It signals that the case was incomplete and the other side gets no chance to answer, which audiences dislike.",
      extra: "Three lines of argument in the opening is the standard. Two feels thin; four is more than an audience will hold.",
      tip: "This is Level 3 Module 6's presentation structure, adapted for an opponent. The signposting principle is identical.",
      activity: "Four stages: run one short debate with strict timing on each stage.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the opening
  L.compare({
    sec: SEC.con, title: "The opening — ninety seconds that frame everything",
    sub: "Tell them what you will prove, then prove it.",
    left: { h: "Weak opening", items: ["“I think homework is bad because…”", "( straight into detail )", "“…and also… and another thing…”", "( no structure signalled )", "→ The audience has no map.", "→ They forget it by the rebuttal."] },
    right: { h: "Strong opening", items: ["“Our position is that homework should be reduced, not abolished.”", "“I'll show three things: it doesn't improve results, it widens inequality, and there is a better alternative.”", "“First, the results.”", "→ The audience knows the shape."] },
    note: "Define your position precisely in the first sentence. “Reduced, not abolished” is a narrower and far more defensible claim than “abolished”.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the strategic point. Narrowing your own claim before the debate starts removes the opposition's easiest attacks in advance.",
      mistakes: "Accepting the motion's most extreme reading. If the motion says “abolish”, you may still argue “reduce” — and you should say so first.",
      extra: "The three-line structure is what makes a case memorable. An audience that can repeat your three points has been persuaded of something.",
      tip: "Write and memorise the first two sentences. This is Level 3 Module 6's memorised opening in a higher-pressure setting.",
      activity: "Two sentences: every learner writes and delivers a position statement plus a three-line preview.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — rebuttal
  L.panelSide({
    sec: SEC.con, title: "Rebuttal — surgery, not demolition", sub: "One target, properly destroyed.",
    panelW: 6.9,
    panel: { label: "The four-step rebuttal", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.4,
      text: "1.  NAME IT\n     “Their main claim is that homework\n      builds discipline.”\n2.  CONCEDE WHAT IS TRUE\n     “Some homework probably does.”\n3.  ATTACK THE WEAK POINT\n     “But they offered no evidence that\n      three hours does more than one.”\n4.  SAY WHAT NOW FOLLOWS\n     “So their case supports OUR position,\n      not theirs.”" },
    side: { label: "Why one target", color: C.green, size: 16, items: [
      "Five weak attacks look like you found nothing.",
      "One destroyed point makes the audience doubt the rest.",
      "Step 2 is what stops it sounding like a personal attack.",
      "Step 4 is what most people forget — turn it to your advantage.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Step 4 is the move that separates a good rebutter from an adequate one. Do not just remove their point — show that it now helps you.",
      mistakes: "Attacking everything. Learners feel they must answer each point, and the result is that nothing lands.",
      extra: "Choosing the target is a judgement: attack the point their case most depends on, not the one that is easiest to hit.",
      tip: "This is Module 2's concession pattern in an adversarial setting. The concession makes the attack credible.",
      activity: "One target: give a three-point case and have learners choose and rebut only the load-bearing point.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — persuasion
  L.table({
    sec: SEC.con, title: "Persuasion — three things beyond being right",
    sub: "Audiences are people. This is not manipulation; it is communication.",
    table: {
      color: C.green, rowH: 0.52, fontSize: 16.5, headSize: 16, colW: [3.0, 4.4, 4.933],
      rows: [
        ["Tool", "What it does", "Example"],
        ["A concrete case", "makes an abstract point real", "“One student in Adama, three hours a night, no electricity.”"],
        ["A number they remember", "one figure, repeated", "“Forty per cent. Forty per cent left before week five.”"],
        ["A phrase they repeat", "gives them your words", "“Reduced, not abolished.”"],
      ],
    },
    note: "Give the audience ONE number and ONE phrase. If they leave repeating those, you have persuaded them. Six numbers and they remember none.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the practical rule. One number, one phrase, repeated three times. Learners instinctively supply many numbers and none survives.",
      mistakes: "Using a concrete case INSTEAD of evidence. It is an illustration of the evidence, not a replacement — one story proves nothing on its own.",
      extra: "The repeated phrase is how positions travel. “Reduced, not abolished” can be carried out of the room by someone who heard nothing else.",
      tip: "This is legitimate persuasion, not manipulation. You are making a true case memorable, which is a service to the audience.",
      activity: "One number, one phrase: every learner chooses both for their own case and repeats each three times.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — the hard question
  L.table({
    sec: SEC.con, title: "The question you were not expecting",
    sub: "Where debates are actually decided. Four situations, four techniques.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16, headSize: 15.5, colW: [3.4, 4.6, 4.333],
      rows: [
        ["Situation", "Say this", "Why"],
        ["You need three seconds", "“That's a fair question. Let me take it in two parts.”", "buys time and imposes structure"],
        ["It contains a false premise", "“That assumes X — and I'd question that.”", "answer the premise, not the question"],
        ["You genuinely don't know", "“I don't have that figure. It doesn't change the main point, which is…”", "honest, then redirect"],
        ["It is a trap", "“I think that's a different question. On the one you asked earlier…”", "decline it without appearing to dodge"],
      ],
    },
    note: "Never invent a figure. A fabricated number that is checked is the fastest way to lose a debate you were otherwise winning.",
    notes: tn({
      time: "16 minutes.",
      how: "Row 2 is the highest-value technique here. Many hard questions carry an unstated assumption, and answering the assumption is stronger than answering the question.",
      mistakes: "Row 3 feels like losing. It is not — Level 3 Module 6 made the same point about presentations, and it applies even more forcefully here.",
      extra: "Row 4 must be used carefully. Declining a question you simply do not like reads as evasion; declining one that is genuinely off the point does not.",
      tip: "Drill these four as chunks. In a debate there is no capacity to construct them and the pressure is highest exactly when you need them.",
      activity: "Hard questions: fire four unexpected questions at each learner and require a different technique for each.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — losing well
  L.compare({
    sec: SEC.con, title: "Losing an exchange without losing the debate",
    sub: "Nobody wins every point. What you do next decides the debate.",
    left: { h: "Losing badly", items: ["Repeating the same claim louder", "“That's not what I said” (when it was)", "Going silent and moving on", "Attacking the questioner", "→ The audience saw it happen.", "→ Now they doubt everything else."] },
    right: { h: "Losing well", items: ["“That's a good point and I don't have a full answer.”", "“You're right about that. It doesn't change my second argument, which is…”", "“I'll concede that one.”", "→ Costs one point.", "→ Protects the other two."] },
    note: "The audience already knows you lost that exchange. Pretending otherwise costs you the ones you actually won.",
    notes: tn({
      time: "15 minutes.",
      how: "The note is the whole slide. Audiences see a lost exchange regardless of what the speaker says, and denial is what converts one lost point into a lost debate.",
      mistakes: "The second left-hand item is the most damaging. Denying what you clearly said destroys trust in everything else.",
      extra: "The right-hand approach concedes the point and immediately redirects to surviving ground. That redirection is what keeps the case alive.",
      tip: "This is Module 2's concession skill under maximum pressure. Learners who practised it there can do it here.",
      activity: "Lose one deliberately: give each learner an unanswerable question and require a graceful concession plus redirect.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "refute", ipa: "/rɪˈfjuːt/", pos: "verb", icon: "FaTimesCircle",
      meaning: "To prove that something is wrong — with evidence, not just to deny it.",
      example: "The 2023 study refutes that claim. He refuted the figures point by point.",
      mistake: "“Refute” means DISPROVE, not “disagree with”. If you have no evidence, you have denied it, not refuted it.",
      notes: tn({ time: "8 minutes.",
        how: "The distinction between refuting and denying is a real one and it is widely muddled, including by native speakers.",
        mistakes: "“I refute that” meaning “I deny that” is very common and technically wrong. Teach the strict sense; it makes learners more precise than most.",
        extra: "Weaker alternatives when you lack evidence: dispute · question · challenge · take issue with.",
        tip: "Stress on the second syllable: re-FUTE. And the noun is “refutation”, stressed on the third.",
        activity: "Refute or dispute: give ten responses and have learners judge which verb is accurate." }) },

    { word: "premise", ipa: "/ˈpremɪs/", pos: "noun", icon: "FaCube",
      meaning: "A statement an argument assumes to be true, often without saying so.",
      example: "The whole argument rests on a false premise. I'd question that premise.",
      mistake: "Stress on the FIRST syllable: PREM-iss. And note the /s/ ending, not /z/.",
      notes: tn({ time: "8 minutes.",
        how: "This is the technical word for what Module 2 called an assumption. Having the precise term makes the move sharper: “that rests on a false premise.”",
        mistakes: "Confusing it with “premises” meaning a building. Same spelling in the plural, completely different meaning.",
        extra: "“The premise is sound but the conclusion doesn't follow” is a genuinely advanced observation and very usable.",
        tip: "Attacking a premise is usually stronger than attacking a conclusion, because the whole argument depends on it.",
        activity: "Find the premise: give six arguments and have learners state the unstated premise of each." }) },

    { word: "compelling", ipa: "/kəmˈpelɪŋ/", pos: "adjective", icon: "FaBolt",
      meaning: "So convincing that it is difficult to argue against.",
      example: "That's a compelling argument. The evidence isn't compelling.",
      mistake: "Stronger than “good” or “interesting”. Use it when something genuinely changes your view — otherwise it loses force.",
      notes: tn({ time: "7 minutes.",
        how: "This is the word for the module's central distinction: an argument can be valid without being compelling, and compelling without being valid.",
        mistakes: "Over-use. If everything is compelling, nothing is. Reserve it for arguments that genuinely moved you.",
        extra: "“A compelling case” · “compelling evidence” · “I don't find that compelling”. The last is a polite, precise rejection.",
        tip: "“I don't find that compelling” is a very useful debate phrase — it disputes the force of an argument without disputing its facts.",
        activity: "Valid or compelling: give six arguments and have learners rate each on both scales separately." }) },

    { word: "concede", ipa: "/kənˈsiːd/", pos: "verb", icon: "FaHandshake",
      meaning: "To admit a point is correct, especially one that does not help you.",
      example: "I'll concede that point. She conceded the figures were out of date.",
      mistake: "From Module 2 — and here it matters more. Conceding one point protects the others; denying it costs all of them.",
      notes: tn({ time: "7 minutes.",
        how: "This word appeared in Module 2 and is repeated deliberately. Under debate pressure it is the hardest word to say and the most valuable.",
        mistakes: "Learners still hear conceding as losing. Slide 10 exists to correct exactly this, and the repetition is intentional.",
        extra: "“I'll concede X, but that leaves Y and Z untouched” is the full debate formula. Concede, then bound the damage.",
        tip: "Teach the bounding clause. Conceding without bounding it invites the opponent to claim more than they won.",
        activity: "Concede and bound: give ten conceded points and have learners state exactly what remains standing." }) },

    { word: "at stake", ipa: "/ət ˈsteɪk/", pos: "phrase", icon: "FaExclamationCircle",
      meaning: "What could be gained or lost. What the argument is really about.",
      example: "What's at stake here is whether students finish at all. There's a lot at stake.",
      mistake: "“At stake”, never “on stake” or “in stake”. It names the consequences, which is the significance step from Module 2.",
      notes: tn({ time: "8 minutes.",
        how: "This phrase does the significance job in debate language. “What's at stake here is…” is one of the strongest closing openers available.",
        mistakes: "The preposition. “On stake” is a direct translation error and it is common.",
        extra: "“What's really at stake” raises the level of a debate from detail to principle, which is usually where a closing wants to be.",
        tip: "Reserve it for the closing. Used early it sounds inflated; used at the end it sounds like a summary of why any of it mattered.",
        activity: "What's at stake: every learner writes one sentence naming what their debate is really about." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Debate Language 1 of 5" }),
    title: "Opening and closing a case",
    sub: "Fixed phrases. Memorise them — there is no time to build them.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 16.5, headSize: 16, colW: [3.0, 4.6, 4.733],
      rows: [
        ["Moment", "Say this", "Note"],
        ["State position", "“Our position is that…”", "narrow it deliberately"],
        ["Preview", "“I'll show three things…”", "three, never five"],
        ["First point", "“First, …”", "then signpost each one"],
        ["Begin closing", "“Let me come back to where we started.”", "signals the end"],
        ["Final line", "“What's at stake here is…”", "principle, not detail"],
      ],
    },
    note: "Never introduce a new argument in the closing. Remind, do not add — new material there looks like a case that was incomplete.",
    notes: tn({
      time: "14 minutes.",
      how: "Drill all five as chunks. The opening and closing are the two moments a speaker can fully prepare, and they should be delivered from memory.",
      mistakes: "Previewing five points. An audience holds three; the fourth and fifth displace the first.",
      extra: "“Let me come back to where we started” is a strong closing opener because it signals a return to the frame the speaker chose.",
      tip: "This is Level 3 Module 6's signposting under adversarial conditions. The phrases differ; the principle does not.",
      activity: "Open and close: every learner delivers a 30-second opening and a 30-second closing on the same motion.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Debate Language 2 of 5" }),
    title: "Rebuttal language",
    sub: "Precise attacks. Name what fails and where.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 16, headSize: 15.5, colW: [4.6, 3.4, 4.333],
      rows: [
        ["Say this", "It attacks", "Strength"],
        ["“That rests on a false premise.”", "the hidden assumption", "strongest"],
        ["“The evidence doesn't support that conclusion.”", "the inference", "strong"],
        ["“That's true, but is it relevant here?”", "the relevance", "precise"],
        ["“They've given us no figures at all.”", "the absence of evidence", "simple, effective"],
        ["“That actually supports our case.”", "turns it around", "the best one"],
      ],
    },
    note: "The last one is the strongest move in debate. Taking their evidence and showing it helps you is worth more than removing it.",
    notes: tn({
      time: "15 minutes.",
      how: "The turnaround in row 5 is the most impressive rebuttal available and it is often possible: the same fact frequently supports either conclusion depending on the significance drawn.",
      mistakes: "Row 3 must be used honestly. Dismissing a true and relevant point as irrelevant is transparent and costly.",
      extra: "Row 4 is under-used. Simply pointing out that the other side gave no evidence at all is often decisive with an audience.",
      tip: "Rows 1 and 2 attack different things: one disputes what was assumed, the other disputes what was concluded. Learners should be able to tell them apart.",
      activity: "Five rebuttals: give one argument and have learners attack it five different ways.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Debate Language 3 of 5" }),
    title: "Emphasis and repetition",
    sub: "Persuasion is partly rhythm. This is legitimate technique.",
    left: { h: "Flat", items: ["“Forty per cent of students left early, which is a problem.”", "“We should reduce homework rather than abolishing it.”", "“The evidence is weak.”"] },
    right: { h: "With emphasis", items: ["“Forty per cent. Forty per cent left before week five.”", "“Reduced — not abolished. Reduced, not abolished.”", "“No figures. No study. No evidence at all.”"] },
    note: "The rule of three, and the repeated phrase. Both are ancient, both work, and both are entirely honest when what you are repeating is true.",
    notes: tn({
      time: "15 minutes.",
      how: "Say both columns aloud. The right-hand versions are the same claims with rhythm added, and the difference in impact is obvious.",
      mistakes: "Learners think this is manipulation. It is not — the content is identical. Making a true point memorable is a service to the listener.",
      extra: "The rule of three — “no figures, no study, no evidence” — is the oldest rhetorical device there is and it still works.",
      tip: "One repeated phrase per speech is enough. Two competes; three is a chant.",
      activity: "Add the rhythm: give six flat claims and have learners restate each with repetition or a rule of three.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Debate Language 4 of 5" }),
    title: "Handling the unexpected question", sub: "Four techniques, four phrases.",
    panelW: 6.9,
    panel: { label: "The four phrases", color: C.gram, tint: C.surf2, size: 16, lsm: 1.34,
      text: "BUY TIME\n  “That's a fair question. Let me take it\n   in two parts.”\n\nFALSE PREMISE\n  “That assumes X, and I'd question that.”\n\nDON'T KNOW\n  “I don't have that figure. It doesn't\n   change the main point, which is…”\n\nOFF THE POINT\n  “I think that's a different question.”" },
    side: { label: "The rules", color: C.gram, size: 16, items: [
      "Never invent a figure. Ever.",
      "Answer the premise before the question, when there is one.",
      "“I don't know” plus a redirect is a strong answer, not a weak one.",
      "Only decline a question that is genuinely off the point.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "These must be automatic. The moment they are needed is the moment there is least spare capacity to construct anything.",
      mistakes: "Inventing a number under pressure. It is checkable, it will be checked, and it costs the entire debate.",
      extra: "“Let me take it in two parts” is doing two jobs: it buys three seconds and it imposes a structure on a question that may not have had one.",
      tip: "The redirect after “I don't know” is what makes it strong. Without it, the admission simply stands.",
      activity: "Four questions: each learner faces one of each type and must use the matching technique.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Debate Language 5 of 5" }),
    title: "Put it all together — five habits of a good debater", sub: "All five are visible to an audience.",
    color: C.gram, size: 19, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Narrow your position in the first sentence", d: "“Reduced, not abolished.” Remove their easiest attacks in advance." },
      { t: "Rebut ONE point properly, not five weakly", d: "Attack what their case depends on." },
      { t: "Give the audience one number and one phrase", d: "Repeat each three times. They will carry those out." },
      { t: "Never invent a figure", d: "Say “I don't have that” and redirect." },
      { t: "Concede a lost point and bound the damage", d: "“You're right about that. It leaves my other two standing.”" },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Habit 1 is the strategic one and it happens before the debate starts. Choosing the version of your position that is easiest to defend is legitimate and effective.",
      mistakes: "Habit 5 is skipped under pressure. The audience has already seen the point land, so denial only adds a second loss.",
      extra: "Habits 3 and 5 together explain most of why some speakers seem convincing: memorable, and honest about what they lost.",
      tip: "Print these five. They apply to meetings and negotiations as much as to formal debate.",
      activity: "One habit each: assign each learner one habit to demonstrate in the class debate.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — the opening", sub: "Ninety seconds that frame everything.", items: [
      { q: "The motion is “Homework should be abolished.” Must you argue that?", a: "No — you may argue “reduced, not abolished”.", why: "Narrowing your own claim in the first sentence removes the opposition's easiest attacks before they can make them." },
      { q: "How many lines of argument should you preview?", a: "Three.", why: "Two feels thin. Four or five is more than an audience will hold, and the extra ones displace the first." },
      { q: "What should the first two sentences be?", a: "Your position, then your three-line preview.", why: "Memorise both. They are the only part of a debate you can fully prepare and deliver without pressure." },
    ] },
    { title: "Guided examples 2 — rebuttal", sub: "One target, properly destroyed.", items: [
      { q: "They made five points. How many do you attack?", a: "One — the one their case depends on.", why: "Five weak attacks look like you found nothing. One destroyed point makes the audience doubt everything else." },
      { q: "Why concede something before attacking?", a: "It stops the rebuttal sounding like a personal attack.", why: "Conceding what is true makes the attack on what is false far more credible." },
      { q: "What is the last step of a rebuttal?", a: "Say what now follows — ideally that it supports YOUR case.", why: "Removing their point is good. Turning it into your point is better, and it is often possible." },
    ] },
    { title: "Guided examples 3 — the hard question", sub: "Where debates are decided.", items: [
      { q: "You are asked for a figure you do not have. What do you say?", a: "“I don't have that figure. It doesn't change the main point, which is…”", why: "Honest, then redirect. Inventing a number is the fastest way to lose a debate you were winning." },
      { q: "The question contains a false assumption. What do you do?", a: "“That assumes X, and I'd question that.”", why: "Answer the premise, not the question. Answering the question accepts the assumption." },
      { q: "You need three seconds. What do you say?", a: "“That's a fair question. Let me take it in two parts.”", why: "It buys time and imposes a structure on the answer at the same time." },
    ] },
    { title: "Guided examples 4 — persuasion", sub: "Beyond being right.", items: [
      { q: "How many numbers should the audience leave with?", a: "One.", why: "Six numbers and they remember none. One number repeated three times travels out of the room." },
      { q: "Why repeat a phrase like “reduced, not abolished”?", a: "It gives the audience your words to carry.", why: "Positions travel in phrases. Someone who heard nothing else can still repeat that one." },
      { q: "Is a single story enough evidence?", a: "No — it illustrates evidence, it does not replace it.", why: "One case makes an abstract point real. It proves nothing on its own, and a good opponent will say so." },
    ] },
    { title: "Guided examples 5 — losing an exchange", sub: "It happens to everyone.", items: [
      { q: "You have clearly lost a point. What do you do?", a: "“You're right about that. It doesn't change my second argument, which is…”", why: "Concede and bound the damage. The audience saw it land; denial costs you the points you won." },
      { q: "Why not just move on quietly?", a: "Silence reads as being unable to answer.", why: "An unacknowledged loss grows in the audience's mind. A named and bounded one stops there." },
      { q: "Does conceding lose the debate?", a: "No. Denying an obvious loss does.", why: "One conceded point costs one point. A visible refusal to concede costs your credibility on everything." },
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
    title: "An opening and a rebuttal",
    sub: "The motion: homework should be abolished. Watch how Chaltu narrows it.",
    turns: [
      { who: "CHALTU", text: "Our position is that homework should be reduced — not abolished.", side: "l" },
      { who: "CHALTU", text: "I'll show three things: it doesn't help beyond an hour, it widens the rich–poor gap, and there's a better option.", side: "l" },
      { who: "TOLOSA", text: "But homework builds discipline. Every teacher knows that.", side: "r" },
      { who: "CHALTU", text: "Their main claim is that homework builds discipline. Some of it probably does.", side: "l" },
      { who: "CHALTU", text: "But they've given us no figures at all — and no evidence that three hours does more than one.", side: "l" },
      { who: "CHALTU", text: "Which means their own case supports ours: reduced, not abolished.", side: "l" },
    ],
    note: "Narrow the position · preview three · name their claim · concede · attack the weak point · turn it around.",
    notes: tn({
      time: "16 minutes.",
      how: "The final line is the turnaround from slide 17. Chaltu takes Tolosa's own point and shows it supports her narrower position, which is the strongest rebuttal available.",
      mistakes: "Tolosa's “every teacher knows that” is the “everybody knows” move from Module 2. Chaltu attacks exactly that absence.",
      extra: "Note the repeated phrase: “reduced, not abolished” appears twice in six lines and is the thing an audience would carry away.",
      tip: "Have learners identify all six moves. The structure is completely visible once labelled.",
      activity: "Same shape: pairs write their own opening plus rebuttal on a different motion.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Hard questions, handled",
    sub: "Three questions. Yonas uses three different techniques.",
    turns: [
      { who: "QUESTIONER", text: "What percentage of students actually have electricity at home?", side: "r" },
      { who: "YONAS", text: "I don't have that figure. It doesn't change the main point, which is that some don't — and homework assumes they all do.", side: "l" },
      { who: "QUESTIONER", text: "So you're saying teachers shouldn't set any work at all?", side: "r" },
      { who: "YONAS", text: "That assumes reducing means abolishing, and I'd question that. Our position has been reduced, not abolished.", side: "l" },
      { who: "QUESTIONER", text: "And what about exam results in private schools?", side: "r" },
      { who: "YONAS", text: "That's a fair question — let me take it in two parts.", side: "l" },
    ],
    note: "Don't know plus redirect · name the false premise · buy time and impose structure. Three questions, three techniques.",
    notes: tn({
      time: "16 minutes.",
      how: "The second question is the all-or-nothing move from Module 2. Yonas names the false premise rather than defending against a position he never held.",
      mistakes: "Learners would answer the second question as asked, which accepts the exaggeration. Naming the premise refuses it without appearing evasive.",
      extra: "The first answer is honest and strong. Note that he redirects immediately — the admission alone would leave the questioner in control.",
      tip: "Point out that Yonas never sounds defensive. That calm is the third chip from slide 4 in practice.",
      activity: "Three techniques: every learner faces three questions and must use a different technique for each.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "The phrases that carry a debate",
    sub: "Six chunks. Memorise them — there is no time to build them live.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaFlag", title: "“Our position is that…”", desc: "Narrow it deliberately in sentence one." },
      { icon: "FaCube", title: "“That rests on a false premise.”", desc: "The strongest precise attack." },
      { icon: "FaSync", title: "“That actually supports our case.”", desc: "The turnaround. The best rebuttal there is." },
      { icon: "FaClock", title: "“Let me take it in two parts.”", desc: "Buys time and imposes structure." },
      { icon: "FaHandshake", title: "“You're right about that. It leaves…”", desc: "Concede and bound the damage." },
      { icon: "FaExclamationCircle", title: "“What's at stake here is…”", desc: "For the closing. Principle, not detail." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Drill all six in chorus. A debate offers no thinking time, and these are exactly the moments when thinking time is shortest.",
      mistakes: "Phrase 5 without the bounding clause. Conceding and stopping lets the opponent claim more than they actually won.",
      extra: "Phrase 3 is the one learners never produce unprompted, and it is the most impressive move in the module.",
      tip: "Phrase 6 belongs at the end only. Used early it sounds inflated.",
      activity: "Six phrases: run a short debate in which every speaker must use at least four.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the debate exchange",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "YOU", text: "Our ______ is that the course should be shortened — not cancelled.", side: "l" },
      { who: "A", text: "But everyone says the long course is better.", side: "r" },
      { who: "YOU", text: "That ______ on a false ______ : that longer means better. They've given us no ______ at all.", side: "l" },
      { who: "A", text: "What about the 2023 review?", side: "r" },
      { who: "YOU", text: "That's a fair question. Let me take it in two ______ .", side: "l" },
      { who: "A", text: "And the cost?", side: "r" },
      { who: "YOU", text: "You're ______ about the cost. It ______ my other two arguments standing.", side: "l" },
    ],
    note: "Use these:  “position”  ·  “rests”  ·  “premise”  ·  “figures”  ·  “parts”  ·  “right”  ·  “leaves”",
    notes: tn({
      time: "14 minutes.",
      how: "Have pairs perform it at speed, standing. Debate language delivered slowly from a page is not the skill being trained.",
      answers: "1 position · 2 rests · 3 premise · 4 figures · 5 parts · 6 right · 7 leaves",
      mistakes: "The final line is the concede-and-bound move. Learners often concede and stop, which gives away more than was lost.",
      tip: "Gap 1 narrows the position — “shortened, not cancelled”. That is slide 6's strategic move.",
      activity: "Do it again with a motion from the class's own workplace or community.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — the four stages", sub: "Four rounds. Assigned sides, no choosing.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "90-second opening. Narrow your position, preview three lines.", d: "Partner checks both." },
      { t: "60-second rebuttal. ONE target only.", d: "Partner checks all four rebuttal steps." },
      { t: "Three hard questions. Three different techniques.", d: "Partner asks; one must be unanswerable." },
      { t: "60-second closing. No new arguments.", d: "One number, one phrase, what's at stake." },
    ],
    notes: tn({
      time: "16 minutes for all four rounds.",
      how: "Assign sides by coin toss. Debating a position you did not choose is the discipline, and choosing removes most of the value.",
      mistakes: "Round 2 attacking everything. Enforce the single target strictly.",
      tip: "Round 4 is where learners introduce new arguments. Stop them — the closing reminds, it does not add.",
      activity: "Swap sides: run the whole sequence again with the sides reversed.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the ninety-second opening", sub: "Memorise the first two sentences.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "“Our position is that…” — narrow it deliberately", d: "Choose the version easiest to defend." },
      { t: "“I'll show three things: …, … and …”", d: "Three. Never five." },
      { t: "“First, …” then each point with a signpost", d: "60 seconds for all three." },
      { t: "Deliver it three times — reading, glancing, from memory", d: "The third time is when it works." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "The opening is the only fully preparable part of a debate. Memorising the first two sentences carries a speaker through the moment of highest nerves.",
      mistakes: "Accepting the motion's most extreme form. Step 1 is a strategic decision and it happens before any argument is made.",
      extra: "This is Level 3 Module 6's memorised opening under adversarial pressure. Same technique, higher stakes.",
      tip: "Have every learner deliver their opening to the whole class. Ninety seconds each and everyone stands up early.",
      activity: "Round the room: every learner delivers a full opening on the same motion, with different narrowings.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the rebuttal drill", sub: "One target. Four steps. Sixty seconds.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Listen to a three-point case", d: "Write all three points down." },
      { t: "Choose the one their case DEPENDS on", d: "Not the easiest to hit. The load-bearing one." },
      { t: "Name it, then concede what is true in it", d: "“Their main claim is X. Some of that is right.”" },
      { t: "Attack the weak part with a reason", d: "“But they've given no evidence that…”" },
      { t: "Turn it around if you can", d: "“Which means it supports our case, not theirs.”" },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Step 2 is the judgement that matters. Choosing the load-bearing point rather than the easy one is what makes a rebuttal decisive.",
      mistakes: "Attacking all three points. Give a strict sixty seconds and it becomes physically impossible, which teaches the lesson faster than explanation.",
      extra: "Step 5 is not always available. When it is, it is the single most impressive move in a debate.",
      tip: "Run this repeatedly with different cases. Rebuttal is a reflex and reflexes need repetition.",
      activity: "Five cases: present five short cases and have learners rebut each in sixty seconds.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — emphasis and the rule of three",
    sub: "Say these with real rhythm. Persuasion is partly sound.",
    left: { h: "Practise the repetition", items: ["“Forty per cent. Forty per cent left before week five.”", "“Reduced — not abolished. Reduced, not abolished.”", "“No figures. No study. No evidence at all.”"] },
    right: { h: "How to say it", items: ["Pause before the repeat. Then say it slower.", "Stress “not”. Fall at the end of both halves.", "Three beats. Each one slightly stronger."] },
    note: "Say the repeated phrase SLOWER than the rest, not louder. Slowing down is what makes a phrase sound deliberate rather than nervous.",
    notes: tn({
      time: "15 minutes.",
      how: "The note is the technique. Learners instinctively get louder; slowing down is far more effective and far less aggressive.",
      mistakes: "Shouting the emphasis. Volume reads as loss of control; a slow, quiet repetition reads as certainty.",
      extra: "The rule of three needs a rising then falling pattern across the three items. Demonstrate it — learners hear it immediately.",
      tip: "This is Level 3 Module 2's intonation work applied to persuasion. Same tools, different purpose.",
      activity: "Slow, not loud: learners deliver the same repeated phrase both ways and the class judges which lands.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — the hard question round", sub: "Four questions. Four techniques. No preparation.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "A question you cannot answer", d: "“I don't have that figure… the main point is…”" },
      { t: "A question with a false premise", d: "“That assumes X, and I'd question that.”" },
      { t: "A question you need time for", d: "“Let me take it in two parts.”" },
      { t: "A question that is genuinely off the point", d: "“I think that's a different question.”" },
      { t: "Now all four, in a random order", d: "No warning which is which." },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Step 5 is the real test. Recognising which type of question you have been asked, under pressure, is the skill.",
      mistakes: "Using technique 4 on a question that is simply difficult. That reads as evasion and audiences punish it.",
      extra: "Have the questioner deliberately mix the four types with no pattern. The unpredictability is the point.",
      tip: "Learners who freeze here should default to technique 3. Buying three seconds solves most of it.",
      activity: "Random four: every learner faces all four types in an unpredictable order.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — the full debate", sub: "The main assessment. Sides are assigned, not chosen.",
    color: C.speak, size: 19, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "OPENING — 90 seconds. Narrowed position, three lines.", d: "Memorised first two sentences." },
      { t: "Listen and take notes on their three points", d: "Mark the load-bearing one." },
      { t: "REBUTTAL — 60 seconds, ONE target, four steps", d: "Turn it around if you can." },
      { t: "QUESTIONS — three from the floor", d: "One will be unanswerable." },
      { t: "CLOSING — 60 seconds. One number, one phrase.", d: "No new arguments. “What's at stake…”" },
      { t: "Concede at least one point during the debate", d: "And bound the damage." },
    ],
    notes: tn({
      time: "A full lesson. Allow 12 minutes per pair including questions.",
      how: "Assign sides by lot in front of the class. Learners must prepare both sides beforehand, which is the real work of the module.",
      mistakes: "Step 6 is the one that gets forgotten under pressure. Make it an explicit requirement and mark it.",
      answers: "SUCCESS CRITERIA: a narrowed position and three previewed lines · a single-target rebuttal with all four steps · three questions handled with three different techniques · a closing with one number and one repeated phrase and no new arguments · at least one bounded concession.",
      tip: "Record if learners agree. Watching your own debate is uncomfortable and more useful than any feedback.",
      activity: "Audience judges: the class votes on who was most convincing AND who was most correct. The two often differ, which is slide 4's point.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — two openings", sub: "Same side. Which one frames the debate better?",
    panelW: 7.2,
    panel: { label: "Audio script — read A, then B", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "A\n“I think homework is bad. Students are tired and\nthey don't have time and some of them work in\nthe evenings and it's not fair, and also the\nteachers don't even mark it properly half the\ntime, and…”\n\nB\n“Our position is that homework should be\nreduced — not abolished.\nI'll show three things: it doesn't improve results\nbeyond an hour a night, it widens the gap\nbetween rich and poor students, and there is a\nbetter alternative. First, the results.”" },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. What exactly is A arguing for?",
      "2. What exactly is B arguing for?",
      "3. How many points does A make?",
      "4. How many can you remember?",
      "5. What has B done that A has not?",
      "6. Which is easier to attack?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Question 4 is the demonstration. Read A once and ask learners to list its points — most manage two of four or five.",
      mistakes: "A is not badly informed; it is unstructured. The content may be equally good and none of it survives the delivery.",
      extra: "Question 6 is strategic: A is easier to attack because “homework is bad” is a broader claim than “reduced, not abolished”.",
      answers: "1 Unclear — “bad”, but not what should happen. · 2 Reduction, not abolition. · 3 Four or five, unnumbered. · 4 Usually two. · 5 Narrowed the position and previewed three lines. · 6 A, because the claim is broader.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Same side. One of them is defensible.",
    size: 16.5,
    items: [
      { q: "1 — what is A arguing for?", a: "Unclear. “Bad” is a judgement, not a position.", why: "A debate position must say what should HAPPEN. Without that, there is nothing to defend." },
      { q: "3 and 4 — points made and remembered", a: "Four or five made. Usually two remembered.", why: "Unnumbered, unsignposted points displace each other. The audience keeps almost none of them." },
      { q: "5 — what B did", a: "Narrowed the position and previewed exactly three lines.", why: "The audience now has a map, and B has chosen the ground the debate will be fought on." },
      { q: "6 — which is easier to attack?", a: "A. “Homework is bad” is a much broader claim.", why: "Every counter-example damages A. B only has to defend “more than an hour is unhelpful”." },
      { q: "What is the lesson?", a: "Narrowing your own claim is the first strategic move of a debate.", why: "It costs nothing, it happens in sentence one, and it removes the opposition's easiest attacks in advance." },
    ],
    notes: keyNotes("The final item is the module's most transferable idea. It applies to meetings and negotiations as much as to debate."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — a question round", sub: "Four questions. Judge each answer.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "Q:  How many students have no electricity?\nA:  About sixty per cent, I think.\n\nQ:  Where does that figure come from?\nA:  Well — I've seen it somewhere.\n\nQ:  So you'd abolish homework entirely?\nA:  That assumes reducing means abolishing.\nOur position has been reduced, not abolished.\n\nQ:  What about private schools?\nA:  That's a fair question. Let me take it in\ntwo parts." },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. What is wrong with the first answer?",
      "2. What happened in the second exchange?",
      "3. What should the first answer have been?",
      "4. Which technique is used third?",
      "5. Which technique is used fourth?",
      "6. Which answer cost the most?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The first two exchanges are one mistake with its consequence. An invented figure invites a source question, and there is no good answer to it.",
      mistakes: "Learners think “about sixty per cent, I think” is suitably hedged. It is not — the hedge does not protect an invented number.",
      extra: "The third and fourth answers are correct and confident. The contrast within one round is the lesson.",
      answers: "1 The figure is invented. · 2 The source question exposed it. · 3 “I don't have that figure — the main point is…” · 4 Naming the false premise. · 5 Buying time and imposing structure. · 6 The first, because it destroyed credibility for the rest.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "One invented number, and the whole round changes.",
    size: 16.5,
    items: [
      { q: "1 and 2 — the invented figure", a: "It was made up, and the next question exposed it.", why: "“Where does that come from?” is the obvious follow-up, and there is no good answer once the number is invented." },
      { q: "3 — what should have been said", a: "“I don't have that figure. It doesn't change the main point, which is…”", why: "Honest, then redirect. It costs nothing; the invented number cost the entire round." },
      { q: "4 — the third answer", a: "Naming the false premise.", why: "The question exaggerated the position. Answering it as asked would have accepted the exaggeration." },
      { q: "6 — which cost the most?", a: "The first. Everything after it is now doubted.", why: "Credibility is cumulative. One exposed invention discounts every later claim, including the true ones." },
      { q: "What is the rule?", a: "Never invent a figure. Ever.", why: "It is checkable, it will be checked, and the cost is not one answer but the whole debate." },
    ],
    notes: keyNotes("This is the sharpest single lesson in the module. Play the first two exchanges again at the end of the lesson."),
  });

  L.grid({
    sec: SEC.lis, title: "Listening as a judge", sub: "Four questions to ask while somebody debates.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaFlag", title: "What exactly are they claiming?", desc: "A narrow, precise position is defensible. A vague one is not — and often the vagueness is deliberate." },
      { icon: "FaSearch", title: "Where is the evidence?", desc: "Numbers with sources, or assertions? “Everybody knows” and invented figures both fail here." },
      { icon: "FaCube", title: "What are they assuming?", desc: "The premise is where most cases are weakest, and it is almost never stated aloud." },
      { icon: "FaHandshake", title: "Do they concede anything?", desc: "A speaker who concedes nothing across a whole debate is arguing to win, not to be right. Audiences notice." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "These four questions turn passive listening into judging, which is how the class should watch every debate in this module.",
      mistakes: "Judging on confidence alone. Confidence and correctness are independent, and separating them is what makes an audience useful.",
      tip: "Question 4 is the character test. It predicts how somebody will behave in a meeting far better than their argument does.",
      activity: "Judge sheet: the audience scores every debate on all four questions.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: SEC.rea, title: "Reading 1 — a full debate case", sub: "Opening, three lines, and a closing.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 14.5, lsm: 1.22,
      text: "MOTION: CANCEL SATURDAY CLASSES  —  OPPOSING\n\nOur position is that Saturday classes should be\nreformed — not cancelled.\nI'll show three things.\nFirst, the students who attend are the ones who\nneed it most: 70% are first-generation learners.\nSecond, cancelling saves 40,000 birr a year — but\nthe dropout it causes costs more than that.\nThird, there is a middle option nobody has\ncosted: two Saturdays a month.\nLet me come back to where we started. Reformed,\nnot cancelled. What's at stake is whether the\nstudents who need us most keep coming." },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "How is the position narrowed?",
      "What are the three lines?",
      "Find the one number they want you to remember.",
      "Find the repeated phrase.",
      "What is at stake, in their words?",
      "Where would you attack this?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Question 6 is the most useful. Having learners find the weakness in a well-built case is what prepares them to defend their own.",
      mistakes: "The third line — “nobody has costed it” — is both a strength and a vulnerability. If the other side HAS costed it, this collapses.",
      extra: "The repeated phrase “reformed, not cancelled” appears twice, and the closing returns to it deliberately.",
      answers: "Reformed not cancelled · who attends, the true cost, a middle option · 70% · “reformed, not cancelled” · whether the students who need it most keep coming.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Structure, then attack.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "How does the speaker narrow the motion, and why is that useful?",
      "What are the three lines of argument?",
      "Which number is meant to be remembered, and how do you know?",
      "How does the closing differ from the opening?",
      "Where is this case weakest?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 5 should produce several answers. The costing claim, the 70% figure's source, and whether reform is realistic are all legitimate targets.",
      mistakes: "Learners look for grammatical or stylistic faults. The question is about the argument, not the language.",
      tip: "Question 4 is worth dwelling on: the closing introduces no new argument and returns to the opening phrase. That is the rule from slide 16.",
      answers: "1 “Reformed, not cancelled” — a narrower claim is easier to defend. · 2 Who attends; the true cost; a middle option. · 3 70% — it is the only figure given a context. · 4 It adds nothing new and returns to the opening phrase. · 5 The claim that nobody has costed the middle option.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "A well-built case — and where it can still be hit.",
    size: 16.5,
    items: [
      { q: "1 — the narrowing", a: "“Reformed, not cancelled.” A much narrower claim.", why: "They now only have to defend reform, not the status quo. Every attack on the current arrangement misses." },
      { q: "3 — the memorable number", a: "70%. It is the only figure given context and weight.", why: "The 40,000 birr appears once and is immediately outweighed. One number is meant to survive." },
      { q: "4 — the closing", a: "No new arguments; it returns to the opening phrase.", why: "Remind, do not add. New material in a closing signals an incomplete case." },
      { q: "5 — the weakest point", a: "“Nobody has costed the middle option.”", why: "If the other side has costed it, the third line collapses entirely. It is the load-bearing claim." },
      { q: "How would you attack it?", a: "Cost the middle option yourself, and ask where the 70% comes from.", why: "Attack the load-bearing point and question the one number they want remembered." },
    ],
    notes: keyNotes("Item 5 is the rebuttal lesson from slide 7 applied to a real case. Choosing the load-bearing point is the judgement that decides a rebuttal."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — the same case, badly made", sub: "Find the four problems.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "Saturday classes are obviously important and\neverybody in the department agrees.\n\nThe people who want to cancel them have never\ntaught on a Saturday, so they don't really\nunderstand what happens.\n\nWhat they're actually saying is that poor\nstudents don't deserve extra help.\n\nSo either we keep Saturdays exactly as they are,\nor we accept that we've given up on the students\nwho need us most.",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Find “everybody knows”.",
      "Find the attack on people.",
      "Find the straw man.",
      "Find the all-or-nothing.",
      "Is there a single number?",
      "Is the position narrowed?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "All four weak moves from Module 2 appear again, one per paragraph. The repetition across modules is deliberate — these are the errors that persist.",
      mistakes: "This version argues the same side as slide 41 and is far less defensible. Same position, no case.",
      extra: "Note the last paragraph does the opposite of narrowing: “exactly as they are” is the widest, least defensible version of the claim.",
      answers: "Para 1: “obviously” and “everybody agrees”. Para 2: attacking people. Para 3: straw man. Para 4: all-or-nothing, and it WIDENS the position. No numbers anywhere.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Same side. No case at all.",
    size: 16.5,
    items: [
      { q: "1 — “obviously” and “everybody agrees”", a: "Claiming agreement instead of showing evidence.", why: "If it were obvious there would be no debate. It is the weakest opening available." },
      { q: "2 — the teaching claim", a: "Attacking the people rather than the argument.", why: "Whether they have taught on a Saturday does not determine whether the classes work." },
      { q: "3 — the straw man", a: "Nobody said poor students do not deserve help.", why: "It substitutes an indefensible position for the real one, and the audience can see the substitution." },
      { q: "4 and 6 — the false choice", a: "“Exactly as they are, or give up entirely.” And it WIDENS the position.", why: "The opposite of slide 6. It commits the speaker to defending the current arrangement in every detail." },
      { q: "Vocabulary check", a: "refute · premise · compelling · concede · at stake", why: "This version refutes nothing, examines no premise, and concedes nothing. It is emphatic and unpersuasive." },
    ],
    notes: keyNotes("Ask which version the class would rather defend in a real debate. The answer is unanimous, and it makes the case for structure better than any explanation."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — narrow the position", sub: "The first strategic move of a debate.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each motion as a narrower, more defensible position.",
    items: [
      "1.  Homework should be abolished.",
      "2.  Saturday classes should be cancelled.",
      "3.  English should be taught from grade one.",
      "4.  All exams should be online.",
      "5.  The office should open on Saturdays.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Every narrowing must still be a real position on the same side. Narrowing into meaninglessness is not the goal.",
      answers: "MODELS: 1 reduced, not abolished · 2 reformed, not cancelled · 3 introduced from grade four, not grade one · 4 written exams online, practical exams in person · 5 open two Saturdays a month, not every week.",
      mistakes: "Narrowing so far that it no longer opposes anything. The narrowed version must still be contested.",
      tip: "Ask which version each learner would rather defend. The narrowed one, every time — that is the whole point.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write the rebuttal", sub: "Four steps. One target.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Their case: “Saturday classes must be cancelled — attendance is 30%, we pay two staff, and students prefer weekdays.” Write a four-step rebuttal.",
    items: [
      "1.  Which of their three points does their case DEPEND on?",
      "2.  NAME it in one sentence.",
      "3.  CONCEDE what is true in it.",
      "4.  ATTACK the weak part, with a reason.",
      "5.  Turn it around: how does it now support YOUR case?",
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Step 1 is the judgement. The cost point is load-bearing; “students prefer weekdays” is soft and easy, which is exactly why it is the wrong target.",
      answers: "MODEL: “Their main point is the cost — two staff for six students. That is a real cost and I accept it. But they haven't costed the alternative: the dropout that follows costs more than 40,000 birr a year. Which means their own argument supports reform rather than cancellation.”",
      mistakes: "Attacking all three points. Sixty seconds makes it impossible; on paper learners must be told.",
      tip: "Step 5 is available here and it is what makes the rebuttal decisive rather than merely defensive.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — your full debate case", sub: "Both sides. You will be assigned one at random.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Take one motion. Prepare BOTH sides — you will not choose which you argue.",
    items: [
      "1.  FOR: narrowed position, three lines, one number, one phrase.",
      "2.  AGAINST: the same, from the other side.",
      "3.  For each side, name the load-bearing point of the OTHER.",
      "4.  For each side, write the rebuttal of that point.",
      "5.  Write three hard questions you might be asked on each side.",
      "6.  Write your answer to each of the six.",
    ],
    notes: tn({
      time: "30 minutes, finished at home.",
      how: "Preparing both sides is the real work of the module. It is also the reason learners will be able to argue an assigned side without difficulty.",
      answers: "MODEL: see slide 41 for one side. The other side follows the same structure.",
      mistakes: "Preparing the side they personally hold and neglecting the other. Assign sides by lot in front of them and the incentive corrects itself.",
      tip: "Step 6 is the highest-value part. Six prepared answers to hard questions is what makes the question round survivable.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — how it is marked", sub: "25 marks. Both sides, equally.",
    size: 16.5,
    items: [
      { q: "Both sides prepared — 6 marks", a: "Three marks each. A weak second side scores badly.", why: "Preparing only the side you believe is the commonest failure and it is heavily penalised here." },
      { q: "Narrowed positions — 4 marks", a: "Two each. The narrowing must still be a real position.", why: "Narrowing into meaninglessness scores nothing. It must still be contested." },
      { q: "Load-bearing points identified — 5 marks", a: "The point the other case DEPENDS on, not the easiest.", why: "This is the judgement that decides a rebuttal, and it is the hardest part to get right." },
      { q: "Rebuttals — 5 marks", a: "All four steps, with a turnaround where possible.", why: "Name, concede, attack, say what follows. The concession is what makes the attack credible." },
      { q: "Six hard questions and answers — 5 marks", a: "Genuinely hard ones, with real answers.", why: "Easy questions with easy answers score one or two. The difficulty of the question is what is marked." },
    ],
    notes: keyNotes("Give this rubric before the task. The both-sides requirement carries six marks and it is what makes the assigned-side debate possible."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your debate checklist", sub: "Six checks. Before you stand up.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Have I narrowed my position?", d: "“Reduced, not abolished.” Sentence one." },
      { t: "Do I have exactly three lines of argument?", d: "Not five. Three, previewed and signposted." },
      { t: "One number and one phrase for the audience?", d: "Repeated three times each." },
      { t: "Have I found their load-bearing point?", d: "The one their case depends on." },
      { t: "Do I have answers to three hard questions?", d: "Including one I cannot fully answer." },
      { t: "Am I ready to concede something?", d: "And to bound the damage when I do." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Run this with every learner before the class debate. It catches most problems in three minutes.",
      tip: "Check 6 is the one to enforce. A speaker who has decided in advance what they are willing to concede does it gracefully under pressure.",
      activity: "Six checks: learners check each other's prepared cases against this list.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. In a rebuttal you should attack:", opts: "a) every point they made     b) one load-bearing point     c) the speaker" },
      { q: "2. How many lines of argument in an opening?", opts: "a) one     b) three     c) six" },
      { q: "3. Asked for a figure you don't have, you should:", opts: "a) estimate     b) say you don't have it and redirect     c) change the subject" },
      { q: "4. In a closing you should:", opts: "a) add your best new argument     b) remind, not add     c) attack again" },
      { q: "5. “Refute” means:", opts: "a) disagree with     b) disprove with evidence     c) ignore" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 b",
      tip: "Question 3 is the rule that decides debates. Say the answer twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the phrase", sub: "Debate chunks.",
    color: C.green, instruction: "Write the missing word.", size: 18,
    items: [
      "1.  Our ______ is that it should be reduced, not abolished.",
      "2.  That rests on a false ______ .",
      "3.  That actually ______ our case.",
      "4.  Let me take it in two ______ .",
      "5.  You're right about that. It ______ my other two arguments standing.",
      "6.  What's ______ stake here is whether they finish at all.",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Take the answers orally at speed. In a debate these must be retrievable in under a second.",
      answers: "1 position · 2 premise · 3 supports · 4 parts · 5 leaves · 6 at",
      mistakes: "Item 6's preposition. “On stake” is a common transfer error.",
      tip: "Item 3 is the turnaround, the strongest move in the module. Drill it twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Stages, attacks and question types.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the STAGE to its JOB", opts: "1. opening     2. rebuttal     3. questions     4. closing" },
      { q: "a) attack one point properly     b) remind, don't add", opts: "c) frame the debate     d) the unprepared moment" },
      { q: "Part 2 — match the ATTACK to its TARGET", opts: "1. “That rests on a false premise.”     2. “The evidence doesn't support that.”     3. “That actually supports our case.”          a) the inference     b) the assumption     c) turns it around" },
      { q: "Part 3 — match the QUESTION TYPE to the TECHNIQUE", opts: "1. you don't know     2. false premise     3. need time          a) “That assumes X.”     b) “Let me take it in two parts.”     c) “I don't have that figure…”" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–a, 3–d, 4–b.  ·  Part 2: 1–b, 2–a, 3–c.  ·  Part 3: 1–c, 2–a, 3–b.",
      tip: "Part 2 distinguishes attacking a premise from attacking an inference. Learners who can tell them apart can rebut precisely.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — narrow it", sub: "Make each position more defensible.",
    color: C.green, instruction: "Rewrite each as a narrower claim on the same side.", size: 18,
    items: [
      "1.  Social media is bad for young people.",
      "2.  The bus service should be free.",
      "3.  All meetings are a waste of time.",
      "4.  Everyone should learn to code.",
      "5.  The course is too long.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Each narrowing must remain contested. If nobody would argue against it, it has been narrowed too far.",
      answers: "MODELS: 1 harmful for under-13s without limits · 2 free for students and over-65s · 3 meetings without an agenda waste time · 4 everyone should learn basic data skills · 5 the third module could be halved.",
      mistakes: "Narrowing until it is uncontroversial. Item 3's model is still genuinely arguable, which is the test.",
      tip: "Ask which version each learner would rather defend against a prepared opponent.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — choose the target", sub: "Which point does their case depend on?",
    color: C.green, instruction: "For each case, name the load-bearing point and say why.", size: 17,
    items: [
      "1.  “Cancel Saturdays: attendance is 30%, we pay two staff, students prefer weekdays.”",
      "2.  “Buy the new system: the old one fails weekly, staff dislike it, the new one is cheaper.”",
      "3.  “Extend the course: students ask for it, results are poor, other colleges are longer.”",
      "4.  “Move the start to January: dropout is 40%, September clashes with harvest, staff prefer it.”",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "The load-bearing point is the one that, if removed, collapses the case. The soft points — preferences — are rarely it.",
      answers: "1 the cost · 2 the weekly failures · 3 the poor results · 4 the 40% dropout. In each case the preference points are decorative.",
      mistakes: "Choosing the easiest target. “Staff prefer it” is easy to attack and removing it changes nothing.",
      tip: "Point out the pattern: in all four, the load-bearing point is the one with a number attached.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  In a rebuttal you should answer every point they made.",
      "2.  You may narrow the motion in your opening.",
      "3.  If you don't have a figure, a rough estimate is acceptable.",
      "4.  A closing may introduce a new argument.",
      "5.  Conceding a lost point protects your other arguments.",
      "6.  Being right is enough to win a debate.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — one load-bearing point, properly · 2 T · 3 F — never invent a figure · 4 F — remind, do not add · 5 T · 6 F — clear, structured delivery decides most debates",
      tip: "Item 6 is slide 4's uncomfortable claim. It is worth defending in discussion rather than simply asserting.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own debate.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  State your narrowed position in one sentence.",
      "2.  What are your three lines of argument?",
      "3.  What is your one number and your one phrase?",
      "4.  What is the load-bearing point of the other side?",
      "5.  What are you prepared to concede, and what does it leave standing?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 5 is the preparation that makes graceful concession possible under pressure. Deciding in advance is what makes it look easy.",
      answers: "No fixed answers. Question 3 must give exactly one of each; question 5 must include the bounding clause.",
      mistakes: "Question 3 answered with three numbers. One, repeated three times, is the instruction.",
      tip: "Collect these before the debate and use question 4 to check whether learners have identified the right target.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Assigned sides. No choosing.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner checks against the stage rules.", size: 19,
    items: [
      "1.  90-second opening: narrowed position, three previewed lines.",
      "2.  60-second rebuttal: one target, four steps.",
      "3.  Three hard questions, three different techniques.",
      "4.  60-second closing: one number, one phrase, no new arguments.",
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Assign sides by coin toss for every round. The discipline of arguing an assigned side is the module.",
      answers: "SUCCESS CRITERIA: 1 narrowed and previewed · 2 one target, all four steps · 3 three distinct techniques · 4 one number, one repeated phrase, nothing new.",
      tip: "Round 4 is where new arguments appear. Stop the speaker the moment one does — the rule matters.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full debate", sub: "Everything together. Sides assigned by lot.",
    color: C.green, instruction: "In fours: two speakers, two judges. Then swap.", size: 17,
    items: [
      { q: "1. Draw your side. You have five minutes to prepare.", opts: "You prepared both at home." },
      { q: "2. Opening 90s · rebuttal 60s · questions · closing 60s.", opts: "Strict timing." },
      { q: "3. Judges score on the four questions from slide 40.", opts: "Claim, evidence, premise, concession." },
      { q: "4. Judges vote twice: most convincing, and most correct.", opts: "They often differ." },
      { q: "5. Swap sides and run it again.", opts: "Same motion, opposite side." },
    ],
    notes: tn({
      time: "A full lesson in groups of four.",
      how: "Step 4 is the module's central lesson made visible. When the two votes differ, ask the class why — that discussion is worth more than the debate.",
      answers: "Judged with the six checks from slide 50 and the four questions from slide 40.",
      tip: "Step 5 is what proves the both-sides preparation worked. Learners who prepared properly find the second run easier than the first.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Is it dishonest to argue a side you don't believe?", opts: "Argue both ways." },
      { q: "2. Why does narrowing your own position make you stronger?", opts: "What does the opponent lose?" },
      { q: "3. Why is one invented figure worse than admitting ignorance?", opts: "Think about what happens next." },
      { q: "4. Should the most convincing speaker always win?", opts: "What if they are wrong?" },
    ],
    notes: tn({
      time: "14 minutes. Discussion, not writing.",
      how: "Question 4 is the honest one and it should not be resolved too neatly. Persuasion and truth can come apart, and knowing that is a defence against being persuaded badly.",
      answers: "1 For: it is a skill, and understanding the other side makes your own view more accurate. Against: it can train fluent advocacy detached from belief. Most people conclude it is legitimate as practice and dangerous as a habit. 2 The opponent's prepared attacks aim at a claim you are no longer making. 3 An invented figure invites a source question with no good answer, and it discounts every true thing you said. 4 No — which is exactly why audiences need the four judging questions from slide 40.",
      tip: "Question 4's answer is the reason slide 40 exists. Learning to judge arguments is protection, not just technique.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · The four stages", items: [
      { q: "1. Name the four stages of a debate.", opts: "Four answers." },
      { q: "2. How long is the opening, and what must it contain?", opts: "One sentence." },
      { q: "3. What must a closing NOT contain?", opts: "One answer." },
      { q: "4. Where are debates actually decided?", opts: "One answer." },
    ] },
    { part: "Part 2 · Opening and narrowing", items: [
      { q: "5. Why narrow your position?", opts: "One sentence." },
      { q: "6. Narrow this: “Homework should be abolished.”", opts: "Write the position." },
      { q: "7. How many lines of argument should you preview?", opts: "One number, and why." },
      { q: "8. Which two sentences should you memorise?", opts: "One sentence." },
    ] },
    { part: "Part 3 · Rebuttal", items: [
      { q: "9. How many points should you rebut?", opts: "One number, and why." },
      { q: "10. Name the four steps of a rebuttal.", opts: "Four answers." },
      { q: "11. What is the strongest rebuttal move?", opts: "One sentence." },
      { q: "12. Why concede before attacking?", opts: "One sentence." },
    ] },
    { part: "Part 4 · Questions and losing", items: [
      { q: "13. You are asked for a figure you don't have. What do you say?", opts: "Write the phrase." },
      { q: "14. Why never invent a figure?", opts: "One sentence." },
      { q: "15. The question has a false premise. What do you say?", opts: "Write the phrase." },
      { q: "16. You have clearly lost a point. What do you do?", opts: "One sentence." },
    ] },
    { part: "Part 5 · Persuasion", items: [
      { q: "17. How many numbers should the audience remember?", opts: "One number." },
      { q: "18. What does a repeated phrase do?", opts: "One sentence." },
      { q: "19. Is a single story enough evidence?", opts: "Yes or no, and why." },
      { q: "20. SPEAKING: a full debate, side assigned by lot.", opts: "Assessed live." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 3 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is the debate itself." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is worth as much as the other nineteen together. Sides are assigned by lot, and both sides must have been prepared.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the four stages", a: "Opening · rebuttal · questions · closing.", why: "Each has a different job. Confusing them — new arguments in a closing, for instance — is visible to an audience." },
      { q: "Q2 — the opening", a: "90 seconds: a narrowed position and three previewed lines of argument.", why: "It frames the whole debate and it is the only part you can fully prepare." },
      { q: "Q3 — what a closing must not contain", a: "New arguments.", why: "Remind, do not add. New material there signals a case that was incomplete." },
      { q: "Q4 — where debates are decided", a: "The question round.", why: "It is the only unprepared stage, which is why slide 9's four techniques matter more than anything else." } ],
    [ { q: "Q5 — why narrow", a: "Their prepared attacks aim at a claim you are no longer making.", why: "It costs nothing, happens in sentence one, and removes the easiest attacks in advance." },
      { q: "Q6 — narrow the motion", a: "“Reduced, not abolished.”", why: "Still a real position on the same side, and far easier to defend against counter-examples." },
      { q: "Q7 — how many lines?", a: "Three. Two feels thin; four or five displace each other.", why: "An audience holds three. The fourth costs you the first." },
      { q: "Q8 — which sentences to memorise", a: "The position statement and the three-line preview.", why: "Delivered from memory, they carry you through the moment of highest nerves." } ],
    [ { q: "Q9 — how many points to rebut", a: "One — the point their case depends on.", why: "Five weak attacks look like you found nothing. One destroyed point makes the audience doubt the rest." },
      { q: "Q10 — the four steps", a: "Name it · concede what is true · attack the weak part · say what now follows.", why: "The concession is what stops it sounding like a personal attack." },
      { q: "Q11 — the strongest move", a: "The turnaround: “That actually supports our case.”", why: "Taking their evidence and showing it helps you is worth more than removing it." },
      { q: "Q12 — why concede first", a: "It makes the attack on the false part credible.", why: "Denying what is obviously true costs you the whole rebuttal." } ],
    [ { q: "Q13 — a figure you don't have", a: "“I don't have that figure. It doesn't change the main point, which is…”", why: "Honest, then redirect. The redirect is what makes it strong rather than merely honest." },
      { q: "Q14 — why never invent", a: "It is checkable, it will be checked, and it discounts everything else you said.", why: "One exposed invention costs the debate, not just the answer." },
      { q: "Q15 — a false premise", a: "“That assumes X, and I'd question that.”", why: "Answer the premise, not the question. Answering as asked accepts the assumption." },
      { q: "Q16 — you have lost a point", a: "Concede it and bound the damage: “You're right. It leaves my other two standing.”", why: "The audience saw it land. Denial converts one lost point into a lost debate." } ],
    [ { q: "Q17 — how many numbers", a: "One, repeated three times.", why: "Six numbers and the audience remembers none. One travels out of the room." },
      { q: "Q18 — the repeated phrase", a: "It gives the audience your words to carry.", why: "Positions travel in phrases. Someone who heard nothing else can still repeat “reduced, not abolished”." },
      { q: "Q19 — is one story enough?", a: "No — it illustrates evidence, it does not replace it.", why: "A concrete case makes an abstract point real, and a good opponent will point out that it proves nothing alone." },
      { q: "Q20 — the debate", a: "Assessed on the four stages, the rebuttal target and the concession", why: "Six checks from slide 50, plus the four judging questions from slide 40." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q9, Q14 and Q16 are the diagnostic block: one rebuttal target, never inventing a figure, and conceding a lost point. All three separate a competent debater from a loud one."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Narrow five motions into defensible positions", d: "Each must still be contested." },
      { t: "Write and memorise your opening two sentences", d: "Both sides. Say each ten times." },
      { t: "Find the load-bearing point in three real arguments", d: "News, radio, a meeting you attended." },
      { t: "Write six hard questions — three per side", d: "And your answer to each." },
      { t: "Record a 90-second opening for each side", d: "Listen back. Which sounds more prepared?" },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Thursday's task is the one that makes the question round survivable. Six prepared answers is the difference between confidence and panic.",
      tip: "Friday's comparison is diagnostic. If one side sounds noticeably weaker, that is the side they will be assigned — and they should prepare it more.",
      activity: "Ask learners to bring both recordings and both prepared cases.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Both sides. You will be assigned one at random.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Both prepared cases — narrowed positions, three lines each", d: "One number and one phrase per side." },
      { t: "The load-bearing point of each side, plus a four-step rebuttal", d: "With a turnaround where possible." },
      { t: "Six hard questions with answers — three per side", d: "Including one you cannot fully answer." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Mark the weaker side as carefully as the stronger one. Learners neglect the side they disagree with, and that is exactly the side the lot may give them.",
      mistakes: "One side prepared thoroughly and the other in note form. Six of the twenty-five marks are for parity between them.",
      tip: "Draw the sides in front of the class the following lesson. The visible randomness is what enforces the both-sides preparation.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your debate will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaFlag", title: "Opening — 7 marks", desc: "Narrowed position (3) · exactly three lines previewed (2) · delivered from memory (2)." },
      { icon: "FaCrosshairs", title: "Rebuttal — 8 marks", desc: "Correct load-bearing target (3) · all four steps (3) · turnaround attempted (2)." },
      { icon: "FaQuestion", title: "Questions — 6 marks", desc: "Three different techniques (3) · no invented figures (2) · calm delivery (1)." },
      { icon: "FaStar", title: "Closing and concession — 4 marks", desc: "One number and one phrase, no new arguments (2) · at least one bounded concession (2).  TOTAL 25." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Note what is NOT marked: which side you were given, and whether the audience agreed with you. Say so — it removes the incentive to argue only what you believe.",
      tip: "Give the mark privately with two comments, one on the rebuttal target and one on the question round.",
      mistakes: "Do not mark grammar or accent. This is a debate assessment and mixing criteria makes the feedback unusable.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaSitemap", title: "The four stages", desc: "Opening · rebuttal · questions · closing." },
      { icon: "FaCompressArrowsAlt", title: "Narrowing your position", desc: "“Reduced, not abolished.” Sentence one." },
      { icon: "FaCrosshairs", title: "Rebuttal", desc: "One target. Name · concede · attack · turn it around." },
      { icon: "FaBolt", title: "Persuasion", desc: "One number, one phrase, repeated three times." },
      { icon: "FaQuestion", title: "The hard question", desc: "Four techniques. Never invent a figure." },
      { icon: "FaHandshake", title: "Losing well", desc: "Concede the point. Bound the damage. Keep the rest." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3. Assign sides again on the same motion and give sixty seconds. The difference from lesson one is usually striking.",
      tip: "Ask who could now argue either side of their own strongest belief. That capacity is what the module was for.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The debate toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaFlag", title: "The opening", desc: "“Our position is that…”  — NARROW it\n“I'll show three things: …”\n“First, …”\nMemorise the first two sentences." },
      { icon: "FaCrosshairs", title: "The four-step rebuttal", desc: "1  NAME their main claim\n2  CONCEDE what is true\n3  ATTACK the weak part, with a reason\n4  “Which means it supports OUR case.”" },
      { icon: "FaQuestion", title: "Hard questions", desc: "Need time → “Let me take it in two parts.”\nFalse premise → “That assumes X.”\nDon't know → “I don't have that figure…”\nNEVER invent a number." },
      { icon: "FaHandshake", title: "Losing an exchange", desc: "“You're right about that.\nIt leaves my other two arguments standing.”\n\nConcede · bound the damage · continue." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The third box is the one to read immediately before any question round.",
      tip: "Print the second box. The four-step rebuttal works in meetings and negotiations, not only in formal debate.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You have argued a side you did not choose, been challenged, and held your position.",
    sub: "You narrowed your claim, attacked one point properly, survived questions you had not prepared for,\nand conceded something without losing the room. That is a genuine skill, and most people never acquire it.",
    chips: ["NEXT — Module 4", "Discussion & Chairing", "Many voices, no winner — and somebody has to run it"],
    notes: tn({
      time: "5 minutes.",
      how: "Name what they did. Arguing an assigned side under public challenge is genuinely difficult and most people avoid it their whole lives.",
      tip: "Preview Module 4 as the opposite discipline: a discussion has no winner, several voices, and needs somebody to keep it moving. The skills are related and the goal is different.",
      activity: "Ask every learner to name one thing they will do differently in their next real disagreement.",
    }),
  });
};
