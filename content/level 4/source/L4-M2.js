"use strict";
/* LEVEL 4 · MODULE 2 — Opinions & Building an Argument   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 4", levelNo: LV.no, levelName: "Advanced Spoken\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Opinions & Building an Argument",
    sub: "Anyone can state an opinion. This module is about making one that a competent person cannot easily dismiss — and about knowing when yours is weak.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "4", v: "PARTS OF AN ARGUMENT" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by separating two things learners usually merge: having an opinion, and being able to defend it. This module is entirely about the second.",
      tip: "The skills here are not English-specific — they are argument skills, in English. Say so; it raises the seriousness of the room.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. The last one is the hardest.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Build an argument with four parts", d: "Claim · reason · evidence · significance. Every strong argument has all four." },
      { t: "Signal exactly how strongly you hold a view", d: "From “arguably” to “I'm certain”. Precision about certainty is a skill." },
      { t: "Anticipate the objection before it is made", d: "“Some would say… but…” It is the mark of a serious speaker." },
      { t: "Tell a strong argument from a weak one", d: "Including your own. Especially your own." },
      { t: "Change your mind out loud without losing face", d: "The rarest and most respected move in any discussion." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 5 is genuinely rare and worth flagging early. Most people defend a position past the point of believing it, because they have no language for withdrawing.",
      tip: "Objective 3 is what separates a good argument from an average one. Answering the objection before it arrives removes its force.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: state a view and defend it", sub: "Sixty seconds. No preparation.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaComment", title: "1 · State it", desc: "“English should be taught from grade one.” Agree or disagree, in one sentence." },
      { icon: "FaQuestion", title: "2 · Now defend it", desc: "Your partner says “Why?” three times. Can you keep going?" },
      { icon: "FaBalanceScale", title: "3 · The other side", desc: "Now argue the OPPOSITE view for thirty seconds. How did that feel?" },
    ],
    notes: tn({
      time: "12 minutes. Task 2 needs real time.",
      how: "The three “whys” in task 2 are the diagnostic. Most people run out after one or two, which shows the argument was a preference rather than a case.",
      mistakes: "Correct nothing. Note who could survive three “whys” — that is the skill this module builds.",
      tip: "Task 3 is uncomfortable and important. Anyone who cannot argue the other side does not yet understand their own position well enough to defend it.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "An opinion is what you think. An argument is why anyone else should care.",
    sub: "“I think we should start earlier” is an opinion. It becomes an argument only when you say why,\nshow evidence, and explain what follows from it.",
    chips: ["Claim", "Reason", "Evidence", "So what?"],
    notes: tn({
      time: "7 minutes.",
      how: "The four chips are the module's spine. Write them on the board and leave them there for four lessons.",
      mistakes: "Learners state a claim and stop, then feel dismissed when nobody agrees. The claim was never the argument.",
      extra: "The fourth part — “so what?” — is the one almost everybody omits. An argument that does not say what follows from it invites the reply “yes, and?”",
      tip: "This is not a cultural point about English. It is how argument works in any language; what this module adds is the English to do it.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — the four parts
  L.panelSide({
    sec: SEC.con, title: "The four parts of an argument", sub: "Miss one and the argument has a hole in it.",
    panelW: 6.8,
    panel: { label: "The structure", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "1.  CLAIM  —  what you think\n     “We should start the course earlier.”\n\n2.  REASON  —  why\n     “Because most learners drop out\n      in the first month.”\n\n3.  EVIDENCE  —  how you know\n     “Last year 40% left before week five.”\n\n4.  SIGNIFICANCE  —  so what?\n     “Which means we lose our best\n      students before we ever teach them.”" },
    side: { label: "The test for each part", color: C.green, size: 16, items: [
      "CLAIM — could somebody reasonably disagree? If not, it is not a claim.",
      "REASON — does it actually support the claim, or just restate it?",
      "EVIDENCE — is it checkable, or is it your impression?",
      "SIGNIFICANCE — if I accept all of this, what should change?",
    ] },
    notes: tn({
      time: "16 minutes. The spine of the module.",
      how: "Take one claim from the class and build all four parts on the board together. Building it live is far more convincing than presenting it finished.",
      mistakes: "Part 2 restating part 1 is extremely common: “We should start earlier because it would be better to begin sooner.” That is one idea said twice.",
      extra: "Part 3 is where most learner arguments fail. An impression is not evidence, and saying “everybody knows” is not either.",
      tip: "The side-panel tests are what learners should apply to their own arguments before speaking. Print them.",
      activity: "Build four parts: give three claims and have learners construct all four parts for each.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — strength of claim
  L.table({
    sec: SEC.con, title: "How strongly do you actually believe it?",
    sub: "Precision about your own certainty is an advanced skill.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 16.5, headSize: 16, colW: [4.2, 2.8, 5.133],
      rows: [
        ["Phrase", "Strength", "When to use it"],
        ["“It's arguably…”", "50%", "a defensible view, others may differ"],
        ["“I'd say…”  ·  “I tend to think…”", "60%", "a personal view, held lightly"],
        ["“I'm fairly confident that…”", "75%", "you have reasons but not proof"],
        ["“I'm convinced that…”", "90%", "you would need real evidence to move"],
        ["“It's simply not true that…”", "100%", "only when you can prove it"],
      ],
    },
    note: "Overclaiming is the commonest error. If you say “definitely” and are then shown to be wrong, every later claim you make is discounted.",
    notes: tn({
      time: "15 minutes.",
      how: "The note is the practical point. Credibility is cumulative: a speaker who overclaims once is discounted afterwards, even when right.",
      mistakes: "Learners state everything at 100% because hedged language feels weak. It is the opposite — calibrated language sounds more competent, not less.",
      extra: "Also useful downwards: “I could be wrong, but…” and “I'm not sure about this, but…”. Both protect a claim you want to test.",
      tip: "This extends the Level 3 Module 5 hedging work into argument. There it was politeness; here it is accuracy about your own state of knowledge.",
      activity: "Calibrate it: give ten claims and have learners assign each the right strength phrase.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — evidence
  L.compare({
    sec: SEC.con, title: "What counts as evidence — and what does not",
    sub: "The part where most arguments quietly fail.",
    left: { h: "Not evidence", items: ["“Everybody knows that…”", "“It's obvious.”", "“In my experience…” (once)", "“I read it somewhere.”", "“My friend said…”", "→ Unverifiable. Easy to dismiss."] },
    right: { h: "Evidence", items: ["“Last year 40% left before week five.”", "“Three of the five departments reported it.”", "“The 2024 review found…”", "“I've seen it in every course I've run — about twelve so far.”", "→ Checkable. Harder to dismiss."] },
    note: "“In my experience” becomes evidence when you say HOW MUCH experience. Once is an anecdote; twelve times with a consistent pattern is data.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the most useful distinction here. Personal experience is legitimate evidence when quantified and illegitimate when vague.",
      mistakes: "“It's obvious” is the weakest move in argument. If it were obvious, there would be nothing to argue about.",
      extra: "Numbers do not have to be precise. “About forty per cent” and “most of the departments” are both usable if honestly held.",
      tip: "This connects to Level 3 Module 7: the CV lesson was the same principle — a number turns a claim into evidence.",
      activity: "Upgrade it: give eight weak supports and have learners turn each into something checkable.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — anticipating objections
  L.panelSide({
    sec: SEC.con, title: "Answer the objection before it is made", sub: "The single move that most improves an argument.",
    panelW: 6.9,
    panel: { label: "The concession pattern", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.4,
      text: "“Some would say the cost is too high.\n\n  And it is significant — about\n  200,000 birr in the first year.\n\n  But the current dropout rate\n  costs us more than that, and we\n  are paying it every year.”\n\nName it  ·  concede what is true  ·  answer it" },
    side: { label: "Why it works", color: C.green, size: 16, items: [
      "It shows you have thought about the other side, which makes you credible.",
      "It removes the objection's force — it has already been aired.",
      "Conceding a real point costs nothing and buys a lot of trust.",
      "If you cannot name the strongest objection, you do not understand your own position.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The three-step pattern — name, concede, answer — is what makes this usable. Without the concession it becomes a straw man and it is worse than nothing.",
      mistakes: "Naming a weak objection and demolishing it. Listeners notice, and it damages credibility more than saying nothing.",
      extra: "The last side-panel point is the real test. Ask learners to state the strongest argument against their own position; many cannot.",
      tip: "This is the highest-value move in the module. A speaker who does this consistently is treated as serious even when disagreed with.",
      activity: "Strongest objection: every learner states the best argument AGAINST their own view.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — weak arguments
  L.table({
    sec: SEC.con, title: "Four weak moves — and what to do instead",
    sub: "Recognise them in others. Then stop making them yourself.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16, headSize: 15.5, colW: [3.4, 4.4, 4.533],
      rows: [
        ["The weak move", "What it looks like", "Do this instead"],
        ["Attacking the person", "“He would say that — he's new.”", "answer the argument, not the speaker"],
        ["The straw man", "arguing against a weaker version", "state their view as THEY would"],
        ["“Everybody knows”", "claiming agreement you have not shown", "give one checkable fact"],
        ["All-or-nothing", "“So you want to change nothing?”", "accept the middle position exists"],
      ],
    },
    note: "These work briefly and cost you credibility permanently. In a room of competent people, all four are noticed.",
    notes: tn({
      time: "16 minutes.",
      how: "Row 2 deserves the most time. Restating an opponent's view better than they stated it is the strongest possible signal that you understood it.",
      mistakes: "Row 4 is common in heated discussion. It forces a false choice and the other person simply denies it, which wastes the exchange.",
      extra: "Row 1 is sometimes legitimate: if somebody has a financial interest in the outcome, that is relevant. The test is whether it bears on the argument.",
      tip: "Teach these for recognition first. Learners will hear them in meetings this week, and naming them is the beginning of not using them.",
      activity: "Name the move: read eight short exchanges and have learners identify which weak move each contains.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — changing your mind
  L.compare({
    sec: SEC.con, title: "Changing your mind out loud",
    sub: "The rarest move in any discussion — and the most respected.",
    left: { h: "Defending past the point", items: ["“That's not what I meant.”", "“Well, in a sense I still think…”", "“You're missing my point.”", "( repeating the same claim louder )", "→ Everyone can see it.", "→ It costs more than conceding."] },
    right: { h: "Moving position cleanly", items: ["“That's a fair point — I hadn't considered it.”", "“All right, you've changed my mind on that part.”", "“I still think X, but I accept Y.”", "→ Costs nothing.", "→ Almost nobody does it.", "→ It makes your other claims stronger."] },
    note: "Conceding one part of an argument makes the rest of it more credible, not less. A speaker who never concedes anything is not listened to.",
    notes: tn({
      time: "15 minutes.",
      how: "The third right-hand item is the most useful formula: concede the specific part, keep the rest. Most disagreements are partial and this language makes that sayable.",
      mistakes: "Learners think conceding is losing. In a discussion among competent people it is the opposite — total consistency reads as not listening.",
      extra: "There is a difference between changing your mind and abandoning your position under pressure. The first names what changed it; the second does not.",
      tip: "Practise it deliberately. Learners who have said “you've changed my mind on that” once in class can say it in a meeting.",
      activity: "Concede one thing: in every discussion this module, each learner must concede at least one point.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "assume", ipa: "/əˈsjuːm/", pos: "verb", icon: "FaLightbulb",
      meaning: "To accept something as true without proof.",
      example: "You're assuming the figures are accurate. I assumed she knew.",
      mistake: "“Assume that…”, not “assume about”. And naming somebody's assumption is a strong move — it exposes a hidden step in their argument.",
      notes: tn({ time: "8 minutes.",
        how: "This is a genuinely powerful discussion verb. “You're assuming that…” points at an unstated premise, which is often where an argument is weakest.",
        mistakes: "The noun is “assumption” with the stress on the second syllable — a-SUMP-tion.",
        extra: "Useful frames: “That assumes…”, “What are we assuming here?”, “I may be assuming too much, but…”",
        tip: "Teach it as a polite challenge. “You're assuming X” is far less confrontational than “that's wrong” and much more precise.",
        activity: "Find the assumption: give six arguments and have learners name the unstated premise in each." }) },

    { word: "evidence", ipa: "/ˈevɪdəns/", pos: "noun — uncountable", icon: "FaSearch",
      meaning: "Facts that support a claim.",
      example: "There's no evidence for that. The evidence suggests otherwise.",
      mistake: "UNCOUNTABLE — never “evidences”, never “an evidence”. Say “a piece of evidence” or “some evidence”.",
      notes: tn({ time: "8 minutes.",
        how: "This joins the Level 3 Module 3 uncountable family — information, advice, research, equipment. Same rule, and this one appears constantly in argument.",
        mistakes: "“Evidences” is very persistent and highly visible in academic and professional settings.",
        extra: "evidence FOR a claim · evidence OF something · the evidence suggests · there is no evidence that…",
        tip: "“The evidence suggests” is a useful hedge: it attributes the claim to the data rather than to you.",
        activity: "Some or a: give twelve nouns and have learners sort countable from uncountable." }) },

    { word: "acknowledge", ipa: "/əkˈnɒlɪdʒ/", pos: "verb", icon: "FaHandPaper",
      meaning: "To accept publicly that something is true, especially when it does not help you.",
      example: "I acknowledge the cost is high. She acknowledged that the plan had failed.",
      mistake: "Silent W — say /əkˈnɒlɪdʒ/. It is the concession verb, and using it makes you more credible, not less.",
      notes: tn({ time: "8 minutes.",
        how: "This is the verb of slide 8's concession step. Naming what is true on the other side is what makes an argument trustworthy.",
        mistakes: "The silent W and the /dʒ/ ending. Four syllables, stress on the second: ac-KNOW-ledge.",
        extra: "“I acknowledge that…” is more formal than “I accept that…” and both are stronger than “OK, but…”",
        tip: "Learners avoid this word because conceding feels like losing. Slide 10 exists to correct exactly that belief.",
        activity: "Acknowledge one thing: every learner uses it once in the next discussion." }) },

    { word: "undermine", ipa: "/ˌʌndəˈmaɪn/", pos: "verb", icon: "FaExclamationTriangle",
      meaning: "To weaken something gradually, often indirectly.",
      example: "That undermines the whole argument. It undermines trust in the process.",
      mistake: "Stress on the THIRD syllable: un-der-MINE. It means weaken, not destroy — the damage is gradual.",
      notes: tn({ time: "7 minutes.",
        how: "A precise verb for describing what a counter-argument does. “That undermines your second point” is more exact than “that's wrong”.",
        mistakes: "Confusing it with “destroy” or “disprove”. Undermining is partial and gradual, which is usually what actually happens.",
        extra: "undermine an argument · undermine confidence · undermine somebody's position.",
        tip: "It is also useful in workplace English: “that would undermine the team” names a real cost without accusing anyone.",
        activity: "Which verb: give ten situations and have learners choose between weaken, undermine, disprove and contradict." }) },

    { word: "concede", ipa: "/kənˈsiːd/", pos: "verb", icon: "FaHandshake",
      meaning: "To admit that something is true, especially in an argument.",
      example: "I'll concede that point. She conceded the cost was higher than expected.",
      mistake: "Stress on the SECOND syllable: con-CEDE. Conceding one point does not mean losing the argument.",
      notes: tn({ time: "8 minutes.",
        how: "This is the exact verb for slide 10. Having the word makes the move sayable, and learners who lack the word rarely make the move.",
        mistakes: "Learners think conceding is surrender. Teach the phrase “I'll concede X, but I still think Y” — the partial concession is the professional form.",
        extra: "concede a point · concede that… · I'll grant you that… (more informal, same job).",
        tip: "“I'll grant you that” is worth teaching alongside it — same function, more conversational, very natural in discussion.",
        activity: "Partial concession: give ten arguments and have learners concede one part while holding the rest." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Argument Language 1 of 5" }),
    title: "Signalling the four parts",
    sub: "The listener needs to know which part you are on.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17, headSize: 16, colW: [3.2, 4.4, 4.533],
      rows: [
        ["Part", "Say this", "Note"],
        ["CLAIM", "“My view is that…”  ·  “I'd argue that…”", "state it in ONE sentence"],
        ["REASON", "“The reason is…”  ·  “This is because…”", "must not restate the claim"],
        ["EVIDENCE", "“The figures show…”  ·  “Last year…”", "checkable, with a number"],
        ["SIGNIFICANCE", "“Which means…”  ·  “The upshot is…”", "the part everyone forgets"],
      ],
    },
    note: "“Which means…” is the most under-used phrase in this module. It answers the question the listener is silently asking: so what?",
    notes: tn({
      time: "14 minutes.",
      how: "Drill the four openers as chunks. In a real discussion there is no time to construct them, and the signposting is what makes an argument followable.",
      mistakes: "Skipping the significance. An argument that stops at evidence invites the reply “yes, and?” which is a wasted turn.",
      extra: "“I'd argue that…” is a useful claim opener because it signals that reasons are coming, which buys you the floor for longer.",
      tip: "This is Level 3 Module 6's signposting applied to argument rather than to a talk. Same principle, higher stakes.",
      activity: "Four openers: give three claims and have learners deliver all four parts with the right signal each time.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Argument Language 2 of 5" }),
    title: "Conditionals for arguing",
    sub: "The grammar of consequences and hypotheticals.",
    left: { h: "Real — likely or possible", items: ["“If we start earlier, we'll lose fewer students.”", "“If the figures are right, this is urgent.”", "→ if + present, will + base", "→ You think it may happen."] },
    right: { h: "Hypothetical — unlikely or imagined", items: ["“If we had started earlier, we'd have kept them.”", "“If I were in charge, I'd change it.”", "→ if + past perfect, would have", "→ It did not happen, or you doubt it will."] },
    note: "The hypothetical is how you discuss what SHOULD have happened without accusing anyone. “If we had known” is far safer than “you didn't tell us”.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the practical point. The third conditional lets you analyse a past failure without assigning blame, which is exactly what a professional discussion needs.",
      mistakes: "“If I would be in charge” — the conditional clause never takes “would”. It is “if I were” or “if I was”.",
      extra: "“If I were you, I'd…” is the standard advice formula and worth drilling as a chunk.",
      tip: "This is the only substantial new grammar in Level 4. It earns its place because argument about causes and consequences is impossible without it.",
      activity: "Two conditionals: give ten situations and have learners produce both a real and a hypothetical version.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Argument Language 3 of 5" }),
    title: "The concession structures",
    sub: "Four ways to accept a point without abandoning your position.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [4.2, 3.8, 4.133],
      rows: [
        ["Structure", "Example", "Strength"],
        ["“Admittedly, … but …”", "“Admittedly it's expensive, but…”", "concedes, then continues"],
        ["“I accept that … However, …”", "“I accept that. However, the cost…”", "more formal"],
        ["“Even if …, …”", "“Even if that's true, we still…”", "concedes hypothetically"],
        ["“Granted. That said, …”", "“Granted. That said, the timing…”", "conversational, very natural"],
      ],
    },
    note: "All four concede something real and then continue. Conceding nothing at all is what makes a speaker sound unreasonable.",
    notes: tn({
      time: "15 minutes.",
      how: "Row 3 is the most useful in a difficult exchange: “even if that's true” concedes without committing you to accepting it.",
      mistakes: "Conceding and then stopping. The concession must be followed by the continuation or you have simply agreed.",
      extra: "“That said” is very natural in spoken English and learners rarely produce it. Drill it as a chunk.",
      tip: "These four structures are what make slide 8's concession step sayable. Without them learners either fight or fold.",
      activity: "Concede and continue: give ten objections and have learners respond using all four structures.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Argument Language 4 of 5" }),
    title: "Attacking an argument, not a person", sub: "Precise language for disagreement.",
    panelW: 6.9,
    panel: { label: "Name what is wrong, exactly", color: C.gram, tint: C.surf2, size: 16, lsm: 1.34,
      text: "“I think that assumes X, which\n  I'm not sure we can take for granted.”\n\n“The evidence doesn't quite support\n  that conclusion.”\n\n“That undermines your second point,\n  though not the first.”\n\n“I'd question whether that follows.”\n\n“That's true, but is it relevant here?”" },
    side: { label: "Why precision matters", color: C.gram, size: 16, items: [
      "“That's wrong” gives the other person nothing to respond to.",
      "Naming WHICH part is wrong keeps the discussion moving.",
      "It also shows you listened carefully enough to locate the problem.",
      "And it leaves their other points standing, which is usually accurate.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The third panel line — “that undermines your second point, though not the first” — is the model. It is precise, limited, and impossible to take personally.",
      mistakes: "Blanket rejection. “That's completely wrong” is almost never accurate and it forces the other person to defend everything at once.",
      extra: "“Does that follow?” is a very economical challenge. It questions the logic without disputing any fact.",
      tip: "This is Level 3 Module 5's disagreement structure, now with the precision that advanced discussion requires.",
      activity: "Locate the fault: give six arguments and have learners name exactly which part fails.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Argument Language 5 of 5" }),
    title: "Put it all together — five habits of a strong arguer", sub: "All five are noticed by competent listeners.",
    color: C.gram, size: 19, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Always finish with “which means…”", d: "Answer the “so what?” before anybody asks it." },
      { t: "State your certainty accurately", d: "Arguably · I'd say · I'm fairly confident · I'm convinced." },
      { t: "Name the strongest objection yourself", d: "Then concede what is true in it and answer the rest." },
      { t: "Attack the argument, never the person", d: "And name which part, not the whole thing." },
      { t: "Concede one point in every discussion", d: "It makes everything else you say more credible." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Habit 5 is the one to enforce in every activity for the rest of the level. It is a discipline, not a technique.",
      mistakes: "Habit 2 is skipped because hedging feels weak. Calibrated certainty is what competent listeners actually respect.",
      extra: "Habits 3 and 5 together are what separate a discussion from an argument. Both signal that you are trying to get it right rather than to win.",
      tip: "Print these five. They transfer directly to Modules 3, 4 and 6 — debate, discussion and negotiation.",
      activity: "One habit each: assign each learner one habit to demonstrate in the next discussion.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — is it an argument?", sub: "Claim, reason, evidence, significance.", items: [
      { q: "“I think we should start earlier.” Is that an argument?", a: "No — it is a claim with no reason.", why: "A claim alone invites “why?” and nothing else. It is the beginning of an argument, not one." },
      { q: "“We should start earlier because it would be better to begin sooner.” Better?", a: "No — the reason restates the claim.", why: "One idea said twice. A reason must add information the claim did not contain." },
      { q: "What is the part almost everybody omits?", a: "The significance — “which means…”", why: "Without it the listener is left asking “so what?”, which wastes the argument you just made." },
    ] },
    { title: "Guided examples 2 — evidence or not?", sub: "Is it checkable?", items: [
      { q: "“Everybody knows the course is too short.” Evidence?", a: "No. It claims agreement without showing any.", why: "If everybody knew it, there would be nothing to argue about. It is the weakest support available." },
      { q: "“In my experience it doesn't work.” Evidence?", a: "Only if you say how much experience.", why: "Once is an anecdote. “In twelve courses I've run, every time” is genuinely evidence." },
      { q: "“Last year 40% left before week five.” Evidence?", a: "Yes — it is checkable.", why: "Somebody could verify it, which is exactly what makes it hard to dismiss." },
    ] },
    { title: "Guided examples 3 — conceding", sub: "Accepting a point without folding.", items: [
      { q: "Someone says your plan is expensive, and it is. What do you say?", a: "“Admittedly it's expensive, but the current cost is higher.”", why: "Concede what is true, then continue. Denying an obvious truth costs you the whole argument." },
      { q: "Does conceding weaken your position?", a: "No — it strengthens everything else you say.", why: "A speaker who concedes nothing is heard as not listening, and is discounted accordingly." },
      { q: "You are shown to be wrong on one point. What do you say?", a: "“That's a fair point — I'll concede that. I still think the main issue stands.”", why: "Partial concession. It is accurate, it costs nothing, and almost nobody does it." },
    ] },
    { title: "Guided examples 4 — weak moves", sub: "Name what went wrong.", items: [
      { q: "“He would say that — he's new here.” What is wrong?", a: "It attacks the person, not the argument.", why: "Whether he is new has no bearing on whether his point is correct. Competent listeners notice." },
      { q: "“So you want to change nothing at all?” What is wrong?", a: "All-or-nothing. It invents an extreme position.", why: "Almost nobody holds the extreme version, so the other person simply denies it and the turn is wasted." },
      { q: "Somebody restates your view more weakly than you did. What is that?", a: "A straw man.", why: "Arguing against a weaker version proves nothing, and the audience can see the substitution." },
    ] },
    { title: "Guided examples 5 — calibrating certainty", sub: "How sure are you, really?", items: [
      { q: "You have reasons but no proof. Which phrase?", a: "“I'm fairly confident that…”", why: "It signals about 75% — reasons without proof, which is where most real claims sit." },
      { q: "You could argue it, but so could the other side. Which phrase?", a: "“It's arguably…”", why: "About 50%. It stakes a defensible position while acknowledging that others may reasonably differ." },
      { q: "Why not just say “definitely” every time?", a: "Because being wrong once discounts everything you say afterwards.", why: "Credibility is cumulative. Calibrated language sounds more competent, not less." },
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
    title: "A complete argument",
    sub: "Bethlehem makes a case. All four parts, in six lines.",
    turns: [
      { who: "BETHLEHEM", text: "I'd argue we should move the course start to January.", side: "l" },
      { who: "TOLOSA", text: "Why January specifically?", side: "r" },
      { who: "BETHLEHEM", text: "Because most of our dropouts happen in the first month, and September clashes with harvest.", side: "l" },
      { who: "TOLOSA", text: "Do we know that?", side: "r" },
      { who: "BETHLEHEM", text: "Last year 40% left before week five, and three quarters of those were from farming families.", side: "l" },
      { who: "BETHLEHEM", text: "Which means we're losing our best students before we ever teach them anything.", side: "l" },
    ],
    note: "Claim · reason · evidence · significance. Tolosa's two questions are exactly the ones a listener asks silently.",
    notes: tn({
      time: "15 minutes.",
      how: "Point out that Tolosa's questions — “why?” and “do we know that?” — are the reason and evidence steps being requested. A strong arguer supplies them unprompted.",
      mistakes: "Bethlehem's final line is the one learners omit. Without it, Tolosa's next line would be “yes, and?”",
      extra: "The evidence is specific and checkable: 40%, three quarters, farming families. None of it is “everybody knows”.",
      tip: "Have learners label each turn with its part. The structure becomes visible immediately.",
      activity: "Four parts: every learner builds a complete argument about something real in their own work.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Conceding, and changing a mind",
    sub: "Yonas disagrees, concedes, and then moves. Watch the last line.",
    turns: [
      { who: "YONAS", text: "Admittedly the dropout figure is high. But January has its own problems.", side: "l" },
      { who: "BETHLEHEM", text: "Such as?", side: "r" },
      { who: "YONAS", text: "The exam period. Half the staff are marking in January.", side: "l" },
      { who: "BETHLEHEM", text: "That's true for the first two weeks. We'd start in the third.", side: "r" },
      { who: "YONAS", text: "I hadn't realised the marking finished that early.", side: "l" },
      { who: "YONAS", text: "All right — you've changed my mind on the timing. I still think the cost needs looking at.", side: "l" },
    ],
    note: "Yonas concedes the timing and holds the cost. Partial concession — accurate, and almost nobody does it.",
    notes: tn({
      time: "15 minutes.",
      how: "The last line is the module's rarest move. Yonas names exactly what changed his mind and exactly what did not, which is both honest and precise.",
      mistakes: "Learners expect conceding to feel like defeat. Ask how Yonas comes across — the answer is always “reasonable” and “credible”.",
      extra: "Note that he opened with “admittedly” — conceding at the START of his own argument, which is slide 8's pattern.",
      tip: "Have learners perform this and then say how each speaker came across. Both come out well, which is the point.",
      activity: "Change your mind: run a discussion in which every learner must concede at least one specific point.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Phrases for building and challenging",
    sub: "Six phrases. Three build, three challenge.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaComment", title: "“I'd argue that…”", desc: "Opens a claim and signals reasons are coming." },
      { icon: "FaArrowRight", title: "“Which means…”", desc: "The significance. The most under-used phrase here." },
      { icon: "FaHandPaper", title: "“Admittedly …, but …”", desc: "Concede, then continue. Never concede and stop." },
      { icon: "FaQuestion", title: "“That assumes…”", desc: "Names a hidden step. Polite and very precise." },
      { icon: "FaSearch", title: "“I'd question whether that follows.”", desc: "Challenges the logic, not the facts." },
      { icon: "FaHandshake", title: "“I'll concede that.”", desc: "Costs nothing. Makes everything else credible." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Drill all six as chunks. In a live discussion there is no capacity to construct them, and these are exactly the moments when capacity is lowest.",
      mistakes: "Phrase 5 is the most sophisticated. It separates the facts from the inference, which is a distinction most speakers never make explicitly.",
      extra: "Phrase 4 is the most useful challenge in the module. It exposes an unstated premise without disputing anything said aloud.",
      tip: "Ask which of the six learners already use. Usually one or two — and never “which means”.",
      activity: "Six phrases: run a ten-minute discussion where every learner must use at least four.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the argument",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "YOU", text: "I'd ______ that we should train the staff before we buy the system.", side: "l" },
      { who: "A", text: "Why that order?", side: "r" },
      { who: "YOU", text: "Because the last two systems failed for the same reason. The ______ is in the 2024 review.", side: "l" },
      { who: "A", text: "That's expensive though.", side: "r" },
      { who: "YOU", text: "______ it is. But that ______ we'd be paying twice if it failed again.", side: "l" },
      { who: "A", text: "Fair point.", side: "r" },
      { who: "YOU", text: "I'll ______ the timing is difficult. That ______ , the risk is worse.", side: "l" },
    ],
    note: "Use these:  “argue”  ·  “evidence”  ·  “Admittedly”  ·  “means”  ·  “concede”  ·  “said”",
    notes: tn({
      time: "13 minutes.",
      how: "Have pairs perform it twice, the second time at natural speed with Module 1's linking. Argument at speed is the real skill.",
      answers: "1 argue · 2 evidence · 3 Admittedly · 4 means · 5 concede · 6 said",
      mistakes: "Gap 4 is the significance step. Learners often write “shows” — accept it, but point out that “means” answers “so what?” more directly.",
      tip: "The final line is a partial concession — conceding the timing while holding the risk. That is the slide 10 move.",
      activity: "Do it again with a different proposal from the class's own workplace.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — build and defend", sub: "Four rounds. Three minutes each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Make a four-part argument about something real", d: "Partner checks all four parts are present." },
      { t: "Partner asks “why?” three times. Keep going.", d: "The warm-up task, now with the structure." },
      { t: "Name the strongest objection to your own view", d: "Then concede what is true and answer the rest." },
      { t: "Argue the OPPOSITE of what you believe", d: "Sixty seconds. Partner rates how convincing it was." },
    ],
    notes: tn({
      time: "14 minutes for all four rounds.",
      how: "Round 2 repeats the warm-up. Learners who ran out after one “why” should now survive all three — that difference is the module working.",
      mistakes: "Round 3 with a weak objection. Insist on the strongest one; a demolished weak objection proves nothing.",
      tip: "Round 4 is the hardest and the most valuable. Anyone who can argue the other side genuinely understands the question.",
      activity: "Compare with the warm-up: ask who lasted longer this time.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the four-part drill", sub: "Ninety seconds. All four parts, every time.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "CLAIM — one sentence. “I'd argue that…”", d: "It must be something a reasonable person could dispute." },
      { t: "REASON — “The reason is…”", d: "It must add information the claim did not contain." },
      { t: "EVIDENCE — “The figures show…”", d: "Checkable. With a number if you have one." },
      { t: "SIGNIFICANCE — “Which means…”", d: "What should change if I accept all of this?" },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Insist on all four every time, in order, out loud. The order becomes automatic within about six repetitions.",
      mistakes: "Step 2 restating step 1 is the commonest failure. Have the partner check specifically for it.",
      extra: "Step 1's test matters: if nobody could disagree, it is not a claim and there is nothing to argue.",
      tip: "Do this drill at the start of every Level 4 lesson. Ninety seconds per learner and it builds fast.",
      activity: "Round the room: every learner delivers a four-part argument on a topic drawn at random.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the three whys", sub: "In pairs. Can your argument survive?",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "State a claim. Partner asks “Why?”", d: "Give a reason." },
      { t: "Partner asks “Why?” again", d: "Give the reason behind the reason." },
      { t: "Partner asks “Why?” a third time", d: "Now you are at the value underneath." },
      { t: "Swap. Then discuss where each of you ran out.", d: "Running out is information, not failure." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Three whys usually reaches a value rather than a fact — “because we should not waste public money”. That is the bottom of an argument and it is worth reaching.",
      mistakes: "Learners get frustrated by the third why. Frame it as diagnosis: where you run out is where the argument needs work.",
      extra: "Sometimes the third why exposes that two people agree on facts and differ on values. That is a genuinely useful discovery.",
      tip: "This is the warm-up task with a purpose. Compare directly with slide 3.",
      activity: "Where did you stop: pairs report which why defeated them and why.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the tone of disagreement",
    sub: "The same words, two completely different effects.",
    left: { h: "Say these WARMLY, falling at the end", items: ["“I'd question whether that follows.”", "“That assumes something we haven't checked.”", "“I'll concede that point.”", "“Admittedly, you're right about the cost.”"] },
    right: { h: "Now say them FLAT or rising", items: ["→ sounds sarcastic", "→ sounds like an accusation", "→ sounds grudging", "→ sounds insincere"] },
    note: "Precise disagreement delivered badly is worse than blunt disagreement delivered warmly. The tune carries more than the words.",
    notes: tn({
      time: "14 minutes.",
      how: "Demonstrate both columns yourself. The sarcastic version of “I'll concede that point” is genuinely unpleasant and learners never forget it.",
      mistakes: "This is the Level 3 Module 5 tone problem in its highest-stakes setting. Careful argument language delivered flatly reads as contempt.",
      extra: "Falling intonation on a concession makes it sound genuine. Rising makes it sound conditional or ironic.",
      tip: "Record learners saying these four lines and play them back. Most are surprised at how grudging they sound.",
      activity: "Warm or flat: say a concession either way and have the class judge how it landed.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — argue the other side", sub: "The hardest thing in this module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Write down what you actually believe about a topic", d: "One sentence. Keep it." },
      { t: "Now build a full four-part argument for the OPPOSITE", d: "Ninety seconds. Make it genuinely good." },
      { t: "Your partner rates it: convincing or obviously fake?", d: "Be honest." },
      { t: "Now say which part of the opposite case is actually right", d: "There is almost always one." },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Step 4 is where this becomes valuable rather than merely difficult. Finding the true part of the opposing case is what makes your own position accurate.",
      mistakes: "Building a deliberately weak opposite argument. That is a straw man and it teaches nothing — insist it be genuinely strong.",
      extra: "This is standard preparation in law, policy and debate. Say so; learners take it more seriously when they know it is a real practice.",
      tip: "Anyone who cannot argue the other side does not yet understand the question. That is not a criticism — it is a diagnosis with a remedy.",
      activity: "Best opposite: two learners present the strongest case against their own view, and the class judges.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "3 minutes. The main assessment of this module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "A full four-part argument on something real", d: "90 seconds. Claim · reason · evidence · significance." },
      { t: "Name the strongest objection to it", d: "Genuinely the strongest, not a weak one." },
      { t: "Concede what is true in that objection", d: "“Admittedly…” Then answer the rest." },
      { t: "State your certainty accurately", d: "Arguably · I'd say · I'm fairly confident · I'm convinced." },
      { t: "Say one thing you would concede in this debate", d: "And why it does not change your conclusion." },
    ],
    notes: tn({
      time: "18 minutes including listening back.",
      how: "Listen for step 1's fourth part. The significance is the part that is omitted under pressure, even by learners who know the structure.",
      mistakes: "Step 2 with a weak objection is the commonest failure. Ask whether an opponent would actually make that argument.",
      answers: "SUCCESS CRITERIA: all four parts present and distinct · a genuinely strong objection named · a real concession followed by a continuation · a calibrated certainty phrase · a partial concession with a reason.",
      tip: "Compare with the warm-up on slide 3. Most learners will have moved from a bare opinion to a defensible case in four lessons.",
      activity: "Keep every recording for the Level 4 comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — find the missing part", sub: "Four short arguments. Each is missing something.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 15.5, lsm: 1.28,
      text: "1.  “We should extend the course. It would be\nbetter if it were longer.”\n\n2.  “We should extend the course, because\nstudents need more practice time.”\n\n3.  “We should extend it. Students need more\npractice — last year 60% asked for it.”\n\n4.  “We should extend it. Students need practice.\nLast year 60% asked. Which means we're sending\npeople out before they're ready.”" },
    side: { label: "Your task", color: C.listen, size: 15.5, items: [
      "Which parts does each one have?",
      "Which is missing a reason?",
      "Which is missing evidence?",
      "Which is missing significance?",
      "Which one is complete?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The four build cumulatively, one part at a time. Play them in order and the structure becomes audible.",
      mistakes: "Item 1's second sentence restates the first. Learners often accept it as a reason — ask what new information it adds.",
      extra: "Item 4 is the complete argument and it is only one sentence longer than item 3. Completeness is cheap.",
      answers: "1 claim only (the “reason” restates it) · 2 claim + reason · 3 claim + reason + evidence · 4 all four.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Four arguments, built one part at a time.",
    size: 16.5,
    items: [
      { q: "1 — what is missing?", a: "Everything. The second sentence restates the claim.", why: "“It would be better if it were longer” adds no information. One idea said twice is not a reason." },
      { q: "2 — what is missing?", a: "Evidence and significance.", why: "It now has a real reason, but nothing checkable and no answer to “so what?”" },
      { q: "3 — what is missing?", a: "Significance only.", why: "Good argument, and it still invites the reply “yes, and?” The listener has to supply the conclusion." },
      { q: "4 — is it complete?", a: "Yes. All four parts.", why: "And it is only one sentence longer than item 3. The complete version costs almost nothing." },
      { q: "What is the lesson?", a: "The last sentence is the one that does the work.", why: "“Which means…” converts information into an argument for doing something." },
    ],
    notes: keyNotes("The final item is worth stating aloud: the significance step costs one sentence and it is the difference between reporting and arguing."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — a real disagreement", sub: "Listen for concessions, assumptions and weak moves.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 15.5, lsm: 1.28,
      text: "CHALTU:  I'd argue we should drop the Saturday\nclass. Attendance is under 30%.\nMIMI:  That assumes attendance is the right\nmeasure. The ones who come need it most.\nCHALTU:  Admittedly that's true. But we're\npaying two staff for six students.\nMIMI:  So you'd rather those six had nothing?\nCHALTU:  That's not quite what I said. I'd\nquestion whether Saturday is the only way.\nMIMI:  All right — that's fair. I'll concede the\ncost is hard to defend." },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. What is Chaltu's claim and evidence?",
      "2. What assumption does Mimi name?",
      "3. Where does Chaltu concede?",
      "4. Which of Mimi's turns is a weak move?",
      "5. How does Chaltu handle it?",
      "6. What does Mimi do at the end?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Mimi's fourth turn — “so you'd rather those six had nothing?” — is the all-or-nothing move from slide 9. Chaltu declines it without escalating, which is the model response.",
      mistakes: "Learners think Chaltu should have defended herself harder. “That's not quite what I said” is enough; over-defending would have taken the bait.",
      extra: "Both speakers concede once. That is what makes this a discussion rather than a fight.",
      answers: "1 Drop the Saturday class; attendance under 30%. · 2 That attendance is the right measure. · 3 “Admittedly that's true.” · 4 “So you'd rather those six had nothing?” — all-or-nothing. · 5 “That's not quite what I said” and reframes. · 6 Concedes the cost point.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Two competent people, disagreeing well.",
    size: 16.5,
    items: [
      { q: "2 — the assumption", a: "That attendance is the right measure of value.", why: "Naming a hidden premise is the most precise challenge available. It disputes no stated fact." },
      { q: "3 — Chaltu's concession", a: "“Admittedly that's true.” Then she continues with cost.", why: "Concede and continue. Denying an obvious truth would have cost her the exchange." },
      { q: "4 — the weak move", a: "“So you'd rather those six had nothing?” — all-or-nothing.", why: "It invents an extreme position Chaltu never held, forcing a false choice." },
      { q: "5 — how Chaltu responds", a: "“That's not quite what I said” — then reframes the question.", why: "She declines the false choice without escalating. Over-defending would have accepted the frame." },
      { q: "6 — Mimi's last turn", a: "She concedes the cost point.", why: "Both speakers concede once. That is the difference between a discussion and an argument." },
    ],
    notes: keyNotes("Ask the class who won. The honest answer is that both moved, which is what a good disagreement produces — and neither lost anything by it."),
  });

  L.grid({
    sec: SEC.lis, title: "Listening critically — four questions", sub: "What to ask silently while somebody argues.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaSitemap", title: "Which part is missing?", desc: "Claim, reason, evidence, significance. The missing one is where the argument is weakest." },
      { icon: "FaLightbulb", title: "What is being assumed?", desc: "The unstated premise is usually the real disagreement, and naming it moves the discussion forward." },
      { icon: "FaSearch", title: "Is the evidence checkable?", desc: "“Everybody knows” and “it's obvious” are not evidence. Ask how they know." },
      { icon: "FaArrowRight", title: "Does the conclusion follow?", desc: "The facts can all be right and the conclusion still not follow from them." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Question 4 is the sophisticated one. True premises do not guarantee a valid conclusion, and separating the two is what critical listening means.",
      mistakes: "Disputing facts when the real problem is the inference. Ask “does that follow?” before disputing anything stated.",
      tip: "These four questions also work on your own arguments before you make them. That is their highest use.",
      activity: "Four questions: after every argument in class, one learner applies all four aloud.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: SEC.rea, title: "Reading 1 — an argument in writing", sub: "Find the four parts.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "SHOULD ENGLISH BE TAUGHT FROM GRADE ONE?\n\nI'd argue that it should not.\nThe reason is that children who begin a second\nlanguage before they read fluently in their first\ntend to do worse in both.\nThe 2023 regional study found that pupils who\nstarted English in grade four scored higher by\ngrade eight than those who started in grade one.\nWhich means the earlier start is not just\nineffective — it is costing us literacy in both\nlanguages.\nAdmittedly the early start is popular, and that\nmatters. But popularity is not evidence.",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Find the claim.",
      "Find the reason.",
      "Find the evidence.",
      "Find the significance.",
      "Find the concession.",
      "Is the evidence checkable?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Have learners mark all five elements on the page. Seeing the structure laid out is what makes it reproducible.",
      mistakes: "Learners find the claim and the evidence easily and miss the significance, which is the sentence beginning “Which means”.",
      extra: "The final concession is the slide 8 pattern: name the objection, concede what is true, answer it.",
      tip: "Ask whether they agree with the conclusion. The structure can be excellent and the conclusion still disputable — that is worth separating.",
      activity: "Mark the parts: learners label all five elements, then write a counter-argument with the same structure.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Structure first, then judgement.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "What is the writer's claim, in one sentence?",
      "What reason is given?",
      "What is the evidence, and is it checkable?",
      "What does the writer say follows from it?",
      "What objection does the writer concede, and how is it answered?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Question 5 is the sophisticated one. The writer concedes that popularity matters and then denies that it is evidence — conceding without giving ground.",
      mistakes: "Learners summarise the whole text instead of isolating each part. Insist on one sentence per answer.",
      tip: "Question 3 should prompt a real discussion: a named study with a year and a finding is checkable, which is exactly what makes it usable.",
      answers: "1 English should not be taught from grade one. · 2 Children who start before reading fluently in their first language do worse in both. · 3 The 2023 regional study — yes, it is named and datable. · 4 The early start is costing literacy in both languages. · 5 That it is popular with parents — answered by saying popularity is not evidence.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "A complete argument, with the concession at the end.",
    size: 16.5,
    items: [
      { q: "1 and 2 — claim and reason", a: "It should not be taught from grade one, because early starters do worse in both languages.", why: "The reason adds information the claim did not contain. That is the test from slide 5." },
      { q: "3 — the evidence", a: "The 2023 regional study, with a specific comparison by grade eight.", why: "Named, dated and checkable. Somebody could look it up and dispute it — which is what makes it evidence." },
      { q: "4 — the significance", a: "The early start is actively costing literacy in both languages.", why: "It converts the finding into a reason to change something. Without it the study is just information." },
      { q: "5 — the concession", a: "That it is popular with parents — conceded, then answered.", why: "“Popularity is not evidence” concedes the fact while denying its relevance. Conceding without giving ground." },
      { q: "Do you have to agree?", a: "No. A well-built argument can still be wrong.", why: "Structure and truth are separate. Recognising a strong structure is not the same as accepting the conclusion." },
    ],
    notes: keyNotes("The last item matters. Learners sometimes assume a well-structured argument must be correct. Separating form from truth is the whole point of critical listening."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — the same view, badly argued", sub: "Find the four weak moves.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "Everybody knows that teaching English from\ngrade one is a mistake. It's obvious.\n\nThe people who support it are mostly consultants\nwho are paid by the programme, so of course they\ndefend it.\n\nWhat they're really saying is that our own\nlanguages don't matter — which is an insult to\nevery family in the country.\n\nSo either we stop this now, or we accept that\nthe next generation will not be able to write\nproperly in any language at all.",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Find the “everybody knows”.",
      "Find the attack on people.",
      "Find the straw man.",
      "Find the all-or-nothing.",
      "Is there any evidence at all?",
      "Which text would persuade you?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "All four weak moves from slide 9 appear in order, one per paragraph. Have learners label each paragraph.",
      mistakes: "This text is more emotionally forceful than slide 41 and less persuasive to a careful reader. That contrast is the lesson.",
      extra: "Note that both texts argue the SAME position. The conclusion may well be right; this version simply gives no reason to believe it.",
      answers: "Para 1: “everybody knows” and “it's obvious”. Para 2: attacking the people. Para 3: straw man — nobody said other languages do not matter. Para 4: all-or-nothing. No evidence anywhere.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Same conclusion. No argument at all.",
    size: 16.5,
    items: [
      { q: "1 — “everybody knows” and “it's obvious”", a: "Claims agreement without showing any.", why: "If it were obvious there would be nothing to argue. It is the weakest support available." },
      { q: "2 — the consultants", a: "Attacking the people rather than the argument.", why: "Their payment might be relevant, but it is offered INSTEAD of a reason, not alongside one." },
      { q: "3 — the straw man", a: "Nobody said other languages do not matter.", why: "Arguing against a weaker invented version proves nothing, and careful readers see the substitution." },
      { q: "4 — the false choice", a: "“Either we stop now, or the next generation cannot write.”", why: "All-or-nothing. It excludes every middle position, and almost every real option is a middle position." },
      { q: "Vocabulary check", a: "assume · evidence · acknowledge · undermine · concede", why: "This text acknowledges nothing and concedes nothing — which is precisely why it does not persuade." },
    ],
    notes: keyNotes("End on the vocabulary point. The five words of this module are the vocabulary of good-faith argument, and the second text uses none of them."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — find the missing part", sub: "Claim, reason, evidence, significance.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "For each argument, say which part is missing and supply it.",
    items: [
      "1.  We should buy the new system. It would be an improvement.",
      "2.  We should buy it, because the old one fails twice a week.",
      "3.  We should buy it. The old one fails twice a week — 34 times last year.",
      "4.  Attendance is under 30%. So we should cancel the class.",
      "5.  The training worked. Test scores rose from 54% to 78%.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Item 4 is the interesting one: it has evidence and a conclusion but no reason connecting them. Why does low attendance mean cancellation?",
      answers: "1 reason and evidence and significance — only a claim · 2 evidence and significance · 3 significance only · 4 the reason linking the evidence to the conclusion · 5 the significance — so what?",
      mistakes: "Item 1's second sentence restates the first. Learners often accept it.",
      tip: "Item 5 has claim and evidence but no significance. Adding “which means we should run it again” converts a report into an argument.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — evidence or not?", sub: "Is it checkable?",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write E for evidence or N for not. For every N, rewrite it as evidence.",
    items: [
      "1.  Everybody knows the course is too short.",
      "2.  Last year 40% left before week five.",
      "3.  In my experience it doesn't work.",
      "4.  The 2023 review found no improvement.",
      "5.  It's obvious that we need more staff.",
      "6.  I read somewhere that it's common.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "The rewrites are the teaching. Turning “in my experience” into “in twelve courses I've run” takes five words and changes it completely.",
      answers: "1 N → “In the last three intakes, 60% said it was too short.” · 2 E · 3 N → “In the twelve courses I've run, it has failed each time.” · 4 E · 5 N → “Two of five departments are short-staffed.” · 6 N → name the source.",
      mistakes: "Item 3 is the subtle one. Personal experience is legitimate evidence when quantified and worthless when vague.",
      tip: "Item 6's fix is simply naming the source. “I read somewhere” becomes usable the moment it becomes “the 2024 report”.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write a full argument", sub: "200 words. All four parts, plus a concession.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Choose a real issue from your work, your studies or your community.",
    items: [
      "1.  CLAIM — one sentence. Something a reasonable person could dispute.",
      "2.  REASON — why. It must add information the claim did not contain.",
      "3.  EVIDENCE — checkable. With a number or a named source.",
      "4.  SIGNIFICANCE — “which means…” What should change?",
      "5.  CONCESSION — name the strongest objection, concede what is true, answer it.",
      "6.  Check: could this be dismissed with one question? Which one?",
    ],
    notes: tn({
      time: "25 minutes.",
      how: "Step 6 is the self-test and the most valuable step. If one question defeats the argument, that question needs answering before it is made.",
      answers: "MODEL: see slide 41. Four parts plus a concession, in about 130 words.",
      mistakes: "Step 5 with a weak objection. Ask whether a genuine opponent would raise that one.",
      tip: "Collect these. They become the positions learners argue in Module 3's debates.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — how it is marked", sub: "25 marks. You know the standard before you start.",
    size: 16.5,
    items: [
      { q: "Claim — 4 marks", a: "One sentence, and genuinely disputable.", why: "If nobody could disagree, there is no argument to make. That is the test from slide 5." },
      { q: "Reason — 5 marks", a: "Adds information the claim did not contain.", why: "A restated claim scores zero here. It is the commonest failure in the whole module." },
      { q: "Evidence — 6 marks", a: "Checkable: a number, a named source, or quantified experience.", why: "“Everybody knows” scores nothing. This section carries the most marks for a reason." },
      { q: "Significance — 5 marks", a: "“Which means…” — what should change.", why: "The part most often omitted, and the part that converts information into an argument." },
      { q: "Concession — 5 marks", a: "The strongest objection, conceded honestly, then answered.", why: "A weak objection demolished scores one or two. The strength of the objection is what is marked." },
    ],
    notes: keyNotes("Give this rubric BEFORE the task. The evidence and concession sections carry eleven of the twenty-five marks, which is where the real work is."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your argument checklist", sub: "Six checks. Before you speak, and before you send.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Have I got all four parts?", d: "Claim · reason · evidence · significance." },
      { t: "Does my reason add anything, or just restate the claim?", d: "The commonest hole in an argument." },
      { t: "Is my evidence checkable?", d: "A number, a named source, or quantified experience." },
      { t: "Have I said “which means…”?", d: "Answer “so what?” before anyone asks it." },
      { t: "Have I named the STRONGEST objection?", d: "Not a weak one. Conceded honestly, then answered." },
      { t: "Could one question destroy this?", d: "If so, answer it before you are asked." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Check 6 is the professional habit. Anticipating the one fatal question is what separates a prepared position from an opinion.",
      tip: "Print this. It applies to every meeting, proposal and debate for the rest of a career.",
      activity: "Six checks: apply this before every argument in Modules 3, 4 and 6.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Name the four parts of an argument.", opts: "a) claim, reason, evidence, significance     b) point, proof, plan     c) topic, body, end" },
      { q: "2. “Everybody knows it” is:", opts: "a) strong evidence     b) not evidence     c) a reason" },
      { q: "3. Conceding a point:", opts: "a) loses the argument     b) makes you more credible     c) should be avoided" },
      { q: "4. “So you want to change nothing?” is:", opts: "a) a fair question     b) all-or-nothing     c) evidence" },
      { q: "5. “Arguably” signals roughly:", opts: "a) 100% certain     b) 50% — a defensible view     c) 0%" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 a · 2 b · 3 b · 4 b · 5 b",
      tip: "Question 3 is the belief this module exists to correct. Say the answer twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the phrase", sub: "Argument chunks.",
    color: C.green, instruction: "Write the missing word.", size: 18,
    items: [
      "1.  I'd ______ that we should start earlier.",
      "2.  ______ it's expensive, but the alternative costs more.",
      "3.  That ______ something we haven't checked.",
      "4.  ______ we're losing our best students.",
      "5.  I'll ______ that point, but I still think the main issue stands.",
      "6.  I'd ______ whether that follows.",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Take the answers orally at speed. These must be retrievable instantly in a live discussion.",
      answers: "1 argue · 2 Admittedly · 3 assumes · 4 Which means · 5 concede · 6 question",
      mistakes: "Item 4 is the significance step. It is the phrase learners are least likely to produce unprompted.",
      tip: "Item 3 is the most precise challenge in the module. Drill it twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Parts, moves and strength.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the PART to its OPENER", opts: "1. claim     2. reason     3. evidence     4. significance" },
      { q: "a) “The figures show…”     b) “Which means…”", opts: "c) “I'd argue that…”     d) “This is because…”" },
      { q: "Part 2 — match the WEAK MOVE to its NAME", opts: "1. “He's new, so he'd say that.”     2. “So you want nothing to change?”     3. “Everybody knows.”          a) all-or-nothing     b) attacking the person     c) claiming agreement" },
      { q: "Part 3 — match the PHRASE to its STRENGTH", opts: "1. “It's arguably…”     2. “I'm convinced that…”     3. “I'd say…”          a) 60%     b) 50%     c) 90%" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–d, 3–a, 4–b.  ·  Part 2: 1–b, 2–a, 3–c.  ·  Part 3: 1–b, 2–c, 3–a.",
      tip: "Part 3 is the calibration exercise. Learners who get all three can state their certainty accurately.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — supply the significance", sub: "Answer the “so what?”",
    color: C.green, instruction: "Add a “Which means…” sentence to each.", size: 17,
    items: [
      "1.  Last year 40% of students left before week five.",
      "2.  Two of our three vans are over ten years old.",
      "3.  Test scores rose from 54% to 78% after the training.",
      "4.  Attendance on Saturday is under 30%.",
      "5.  The 2023 review found no improvement in grade eight.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "This drills the one part learners always omit. Every item is a fact; the task is to say what follows from it.",
      answers: "MODELS: 1 …which means we lose our best students before we teach them. · 2 …which means breakdowns will get more frequent, not less. · 3 …which means the programme is worth repeating. · 4 …which means we are paying two staff for six students. · 5 …which means the early start is not delivering what was promised.",
      mistakes: "Learners restate the fact instead of drawing a conclusion. Ask “so what should we DO?” each time.",
      tip: "Note that several items could support opposite conclusions. That is legitimate — the significance is an argument, not a fact.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — name the weak move", sub: "Four weak moves. Which is which?",
    color: C.green, instruction: "Name the move, then say what should have been said instead.", size: 17,
    items: [
      "1.  “She's only been here a year, so she wouldn't understand.”",
      "2.  “So you're saying we should just do nothing?”",
      "3.  “Everyone in the department agrees with me.”",
      "4.  “He wants to abolish the whole programme.”  (he suggested reducing it)",
      "5.  “It's obvious this won't work.”",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Naming the move is half the skill; supplying the replacement is the other half. Require both.",
      answers: "1 attacking the person → answer her argument · 2 all-or-nothing → accept the middle position exists · 3 claiming agreement → name who and how many · 4 straw man → state his actual proposal · 5 “it's obvious” → give one checkable fact",
      mistakes: "Item 3 is subtle. Claiming departmental agreement may be true — but it must be shown, not asserted.",
      tip: "Learners will hear all five of these in meetings this week. Naming them is the beginning of not using them.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  An opinion and an argument are the same thing.",
      "2.  Conceding a point weakens your position.",
      "3.  “In my experience” is evidence if you say how much experience.",
      "4.  A well-structured argument must be correct.",
      "5.  Naming the strongest objection yourself makes you credible.",
      "6.  Saying “definitely” about everything makes you sound confident.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — an argument is an opinion plus reason, evidence and significance · 2 F — it strengthens everything else · 3 T · 4 F — form and truth are separate · 5 T · 6 F — being wrong once discounts everything after",
      tip: "Item 4 is the sophisticated one. A beautifully built argument can still be wrong, and recognising that is critical listening.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own arguments.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  State a claim you actually hold, in one sentence.",
      "2.  What is your evidence, and is it checkable?",
      "3.  What is the strongest objection to it?",
      "4.  What part of that objection is actually right?",
      "5.  Which weak move do you catch yourself using?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 4 is the hardest and most valuable. There is almost always a true part in the opposing case, and finding it makes your own position more accurate.",
      answers: "No fixed answers. Question 3 must name a genuine objection; question 5 requires honest self-assessment.",
      mistakes: "Question 3 answered with a weak objection. Ask whether a real opponent would say that.",
      tip: "Question 5's answers tell you what to watch for in the class's discussions for the rest of the level.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "In pairs. Partner checks the structure.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner checks that every part is present.", size: 19,
    items: [
      "1.  A 90-second four-part argument. Partner checks all four.",
      "2.  Survive three “whys”. Partner asks them.",
      "3.  Name and answer the strongest objection to your own view.",
      "4.  Argue the opposite of what you believe, for 60 seconds.",
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Round 1's partner should specifically check whether the reason restates the claim. That is the failure to catch.",
      answers: "SUCCESS CRITERIA: 1 four distinct parts · 2 three reasons, each behind the last · 3 a genuinely strong objection, conceded then answered · 4 an opposite case a listener rates as convincing.",
      tip: "Round 4 is the assessment. If the partner can tell it is fake, the learner has not understood the other side.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full case", sub: "One real issue. Everything in the module.",
    color: C.green, instruction: "Choose something you genuinely care about at work or in your community.", size: 17,
    items: [
      { q: "1. Write the four-part argument in 150 words.", opts: "Claim · reason · evidence · significance." },
      { q: "2. Write the strongest objection — as its supporters would state it.", opts: "Not a weaker version." },
      { q: "3. Concede what is true in it, then answer the rest.", opts: "Use two of the four concession structures." },
      { q: "4. Identify one assumption in your OWN argument.", opts: "Everybody has at least one." },
      { q: "5. Deliver the whole thing in 3 minutes. Partner challenges you.", opts: "No notes." },
    ],
    notes: tn({
      time: "25 minutes.",
      how: "Question 4 is the most demanding. Every argument rests on unstated premises, and finding your own is genuinely difficult.",
      answers: "Assessed with the six checks from slide 50. Evidence and concession carry the most weight.",
      tip: "Question 2 is the test of understanding. If they cannot state the opposition's case in its strongest form, they have not understood it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why does conceding a point make you MORE credible?", opts: "What does never conceding signal?" },
      { q: "2. Can a well-structured argument be wrong? How?", opts: "Separate form from truth." },
      { q: "3. Why is the straw man tempting — and why does it fail?", opts: "Who notices, and when?" },
      { q: "4. Is there ever a case for the weak moves on slide 9?", opts: "Argue both sides honestly." },
    ],
    notes: tn({
      time: "14 minutes. Discussion, not writing.",
      how: "Question 4 keeps the module honest. Some weak moves are occasionally legitimate — noting a financial interest, for example — and the class should work out where the line is.",
      answers: "1 Never conceding signals you are not listening and are arguing to win rather than to get it right. 2 Yes — the premises can be false, or the evidence can be true and the inference invalid. 3 It is tempting because a weaker version is easier to defeat; it fails because the audience can compare it with what was actually said. 4 Pointing at somebody's financial interest can be legitimate when it bears on reliability — but only alongside a real argument, never instead of one.",
      tip: "Question 2 is the intellectual heart of the module: structure and truth are independent, and confusing them is how good arguments mislead.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · The four parts", items: [
      { q: "1. Name the four parts of an argument.", opts: "Four answers." },
      { q: "2. What is the test of a good CLAIM?", opts: "One sentence." },
      { q: "3. What is the commonest failure in the REASON?", opts: "One sentence." },
      { q: "4. Which part do most people omit?", opts: "One answer." },
    ] },
    { part: "Part 2 · Evidence", items: [
      { q: "5. Is “everybody knows” evidence?", opts: "Yes or no, and why." },
      { q: "6. When does “in my experience” become evidence?", opts: "One sentence." },
      { q: "7. What is the test of evidence?", opts: "One word." },
      { q: "8. Is “evidence” countable?", opts: "One sentence." },
    ] },
    { part: "Part 3 · Concession", items: [
      { q: "9. Does conceding weaken your position?", opts: "One sentence." },
      { q: "10. Name two concession structures.", opts: "Two answers." },
      { q: "11. Why name the strongest objection yourself?", opts: "One sentence." },
      { q: "12. What is a partial concession?", opts: "One sentence." },
    ] },
    { part: "Part 4 · Weak moves", items: [
      { q: "13. Name the four weak moves.", opts: "Four answers." },
      { q: "14. “So you want to change nothing?” — which move?", opts: "One answer." },
      { q: "15. What is a straw man?", opts: "One sentence." },
      { q: "16. Why do these moves cost you credibility?", opts: "One sentence." },
    ] },
    { part: "Part 5 · Using it", items: [
      { q: "17. Rewrite as evidence: “Everybody knows the course is too short.”", opts: "Write the sentence." },
      { q: "18. Add a significance step: “Attendance is under 30%.”", opts: "Write the sentence." },
      { q: "19. Concede and continue: “Your plan is expensive.”", opts: "Write the reply." },
      { q: "20. SPEAKING: a 3-minute argument with a concession, challenged live.", opts: "Assessed live." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 2 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is spoken." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is assessed live and is worth as much as the other nineteen. Use the six checks from slide 50.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the four parts", a: "Claim · reason · evidence · significance.", why: "Miss one and the argument has a hole a competent listener will find." },
      { q: "Q2 — the test of a claim", a: "Could somebody reasonably disagree with it?", why: "If not, it is not a claim and there is nothing to argue about." },
      { q: "Q3 — the commonest reason failure", a: "It restates the claim instead of supporting it.", why: "“We should start earlier because it would be better to begin sooner” is one idea said twice." },
      { q: "Q4 — the omitted part", a: "The significance — “which means…”", why: "Without it the listener asks “so what?” and the argument is wasted." } ],
    [ { q: "Q5 — “everybody knows”", a: "No. It claims agreement without showing any.", why: "If everybody knew it, there would be nothing to argue about." },
      { q: "Q6 — “in my experience”", a: "When you say HOW MUCH experience.", why: "Once is an anecdote. Twelve times with a consistent pattern is data." },
      { q: "Q7 — the test of evidence", a: "Checkable.", why: "Somebody else could verify or dispute it, which is exactly what makes it hard to wave away." },
      { q: "Q8 — is “evidence” countable?", a: "No — uncountable. Never “evidences”.", why: "Say “some evidence” or “a piece of evidence”, like information and advice." } ],
    [ { q: "Q9 — does conceding weaken you?", a: "No — it makes everything else you say more credible.", why: "A speaker who concedes nothing is heard as not listening, and is discounted." },
      { q: "Q10 — two concession structures", a: "Any two of: “Admittedly …, but …” · “I accept that. However, …” · “Even if …” · “Granted. That said, …”", why: "All four concede something real and then continue. Conceding and stopping is just agreeing." },
      { q: "Q11 — why name the strongest objection", a: "It shows you have thought about the other side, and removes its force.", why: "If you cannot name it, you do not yet understand your own position." },
      { q: "Q12 — a partial concession", a: "Accepting one part while holding the rest: “I'll concede X, but I still think Y.”", why: "Accurate, because most disagreements really are partial. And almost nobody does it." } ],
    [ { q: "Q13 — the four weak moves", a: "Attacking the person · straw man · “everybody knows” · all-or-nothing.", why: "All four work briefly and cost you credibility permanently in a room of competent people." },
      { q: "Q14 — “So you want to change nothing?”", a: "All-or-nothing.", why: "It invents an extreme position the other person does not hold, forcing a false choice." },
      { q: "Q15 — a straw man", a: "Arguing against a weaker version of somebody's view.", why: "It proves nothing, and the audience can compare it with what was actually said." },
      { q: "Q16 — why they cost credibility", a: "Competent listeners notice all four.", why: "The short-term gain in the exchange is paid for in every later exchange." } ],
    [ { q: "Q17 — rewrite as evidence", a: "e.g. “In the last three intakes, 60% said the course was too short.”", why: "A number and a source. Checkable, and therefore usable." },
      { q: "Q18 — add the significance", a: "“…which means we're paying two staff for six students.”", why: "It converts a fact into a reason to do something. That is what the fourth part is for." },
      { q: "Q19 — concede and continue", a: "“Admittedly it's expensive, but the current arrangement costs more.”", why: "Concede what is true, then continue. Denying an obvious truth costs the whole argument." },
      { q: "Q20 — the spoken argument", a: "Assessed on the four parts, the evidence and the concession", why: "Six checks from slide 50, with the strength of the objection carrying the most weight." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q4, Q9 and Q11 are the diagnostic block: the missing significance, the value of conceding, and naming the strongest objection. All three separate an argument from an opinion."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Build one four-part argument aloud", d: "About anything. 90 seconds. All four parts." },
      { t: "Find three claims in the news and name the missing part", d: "Most public arguments are missing one." },
      { t: "Write the strongest objection to something you believe", d: "As its supporters would state it." },
      { t: "Concede one point in a real conversation", d: "Notice what happens. Write one line about it." },
      { t: "Record a 3-minute argument with a concession", d: "Listen back for the significance step." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Thursday's task is the behavioural one and the most valuable. Conceding once in a real conversation changes how learners experience disagreement.",
      tip: "Tuesday's task is easy and eye-opening. Most public argument omits either the evidence or the significance.",
      activity: "Ask three learners to report what happened when they conceded a point on Thursday.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your 200-word written argument", d: "Four parts plus a concession. Real issue." },
      { t: "The strongest objection, stated as its supporters would", d: "Plus your answer to it." },
      { t: "Record your 3-minute spoken argument", d: "Four parts · objection · concession · calibrated certainty." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 2 is marked on the strength of the objection, not on the answer. A weak objection scores badly however well it is dismantled.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Keep these arguments. They become the debate positions in Module 3.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaSitemap", title: "Written argument — 12 marks", desc: "Disputable claim (2) · reason that adds information (3) · checkable evidence (4) · significance stated (3)." },
      { icon: "FaHandPaper", title: "The objection — 6 marks", desc: "Genuinely the strongest (4) · stated as its supporters would (2)." },
      { icon: "FaMicrophone", title: "Recording — 7 marks", desc: "Four parts audible (3) · concession then continuation (2) · calibrated certainty (2)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → rebuild the argument with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Note that the objection carries six marks on its own. That is deliberate — anticipating opposition is the module's most valuable skill.",
      tip: "Give the mark privately with two comments: one on the evidence, one on the concession.",
      mistakes: "Do not mark the CONCLUSION. A learner may argue a position you disagree with and score full marks.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaSitemap", title: "The four parts", desc: "Claim · reason · evidence · significance." },
      { icon: "FaSearch", title: "What counts as evidence", desc: "Checkable. A number, a source, or quantified experience." },
      { icon: "FaPercent", title: "Calibrated certainty", desc: "Arguably · I'd say · fairly confident · convinced." },
      { icon: "FaHandPaper", title: "Anticipating objections", desc: "Name it · concede what is true · answer the rest." },
      { icon: "FaExclamationTriangle", title: "Four weak moves", desc: "Person · straw man · everybody knows · all-or-nothing." },
      { icon: "FaHandshake", title: "Changing your mind", desc: "The rarest move, and the most respected." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3. Have learners defend the same claim again against three “whys” and compare with their first attempt.",
      tip: "Ask who conceded something in a real conversation this week. Those reports are the best summary of the module.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The argument toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaSitemap", title: "The four parts", desc: "1  CLAIM  —  “I'd argue that…”\n2  REASON  —  “This is because…”\n3  EVIDENCE  —  “The figures show…”\n4  SIGNIFICANCE  —  “Which means…”" },
      { icon: "FaSearch", title: "Evidence or not?", desc: "NOT:  everybody knows · it's obvious ·\nI read somewhere · my friend said\nYES:  a number · a named source ·\nquantified experience" },
      { icon: "FaHandPaper", title: "Conceding", desc: "“Admittedly …, but …”\n“I accept that. However, …”\n“Even if that's true, …”\n“Granted. That said, …”" },
      { icon: "FaExclamationTriangle", title: "The four weak moves", desc: "Attacking the person\nThe straw man\n“Everybody knows”\nAll-or-nothing" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The first and third boxes are the ones to use; the fourth is the one to avoid.",
      tip: "Print the first box. Four parts, four openers — it fits on a card and it works in any meeting.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now make a case that a competent person cannot wave away.",
    sub: "Four parts, checkable evidence, and the strongest objection answered before it is raised.\nAnd — rarest of all — you can concede a point without losing anything.",
    chips: ["NEXT — Module 3", "Debate & Persuasion", "Arguing under pressure, against somebody who has prepared too"],
    notes: tn({
      time: "5 minutes.",
      how: "Name what has changed: learners arrived able to state opinions and leave able to defend positions. That is a different capability.",
      tip: "Preview Module 3: debate adds time pressure and a prepared opponent. Everything from this module still applies, but now with somebody actively looking for the hole.",
      activity: "Ask every learner to name the one habit from slide 20 they will use this week.",
    }),
  });
};
