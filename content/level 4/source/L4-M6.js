"use strict";
/* LEVEL 4 · MODULE 6 — Negotiation & Influence   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 4", levelNo: LV.no, levelName: "Advanced Spoken\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Negotiation & Influence",
    sub: "A debate has a winner. A discussion has none. A negotiation has two people who both want something — and neither can simply take it.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5", v: "REAL NEGOTIATIONS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by placing this beside Modules 3 and 4. Debate has a winner, discussion has none, and negotiation has an agreement that both sides must be able to live with.",
      tip: "Negotiation is the module with the most immediate financial value. Salary, deadlines, scope, price — learners will use this within weeks.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. All of them worth money or time.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Prepare properly — three numbers before you speak", d: "Your target, your limit, and what you do if there is no deal." },
      { t: "Find out what they actually want", d: "Which is rarely what they first asked for." },
      { t: "Trade instead of conceding", d: "“If you can do X, I can do Y.” Never give something for nothing." },
      { t: "Say no without ending the conversation", d: "And hear no without taking it personally." },
      { t: "Close an agreement so it is actually clear", d: "Who does what, by when, and confirmed in writing." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 1 is where most negotiations are decided. People who prepare three numbers beat people who improvise, almost regardless of language.",
      tip: "Objective 3 is the single most valuable habit here. Conceding without trading trains the other side to keep asking.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: ask for something", sub: "Ninety seconds. No preparation.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaHandHoldingUsd", title: "1 · Ask", desc: "Ask your partner for a 15% pay rise. They will resist. Ninety seconds." },
      { icon: "FaQuestion", title: "2 · What happened?", desc: "Did you give a number first? Did you concede anything? Did you get anything back?" },
      { icon: "FaTimesCircle", title: "3 · What if they say no?", desc: "What was your plan? Did you have one before you started?" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Task 3 is the diagnostic. Almost nobody has a plan for “no”, and that absence is what makes people accept bad outcomes.",
      mistakes: "Correct nothing. Note who conceded without asking for anything in return — that is the habit slide 8 addresses.",
      tip: "Ask how many prepared a specific number before speaking. Usually none, and it is the single strongest predictor of the outcome.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Negotiation is not persuasion. It is finding a deal both sides can live with.",
    sub: "You are not trying to win, and you are not trying to be liked.\nYou are trying to reach something better than no agreement — for both of you.",
    chips: ["Not winning", "Not being liked", "Better than no deal"],
    notes: tn({
      time: "7 minutes.",
      how: "The third chip is the definition. If the deal is worse than no deal, walking away is the correct outcome, not a failure.",
      mistakes: "Learners equate agreement with success. A bad agreement is worse than none, and knowing that changes how they behave.",
      extra: "The second chip matters culturally. Many learners negotiate to preserve the relationship and accept poor terms to do so.",
      tip: "Say plainly: a firm negotiator who trades fairly is respected more than an agreeable one who concedes everything.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — the three numbers
  L.panelSide({
    sec: SEC.con, title: "The three numbers — prepare before you speak", sub: "Most negotiations are decided here, not at the table.",
    panelW: 6.8,
    panel: { label: "Know all three before you start", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "1.  YOUR TARGET\n     What you are actually aiming for.\n     Ambitious, but justifiable.\n\n2.  YOUR LIMIT\n     The point where no deal is better\n     than this deal. Decide it in advance.\n\n3.  YOUR ALTERNATIVE\n     What you will do if there is no\n     agreement. This is your real power." },
    side: { label: "Why number 3 matters most", color: C.green, size: 16, items: [
      "A person with a good alternative can say no and mean it.",
      "A person with no alternative accepts whatever is offered.",
      "Improving your alternative before the meeting is worth more than any phrase.",
      "You never have to say what it is. You just have to have one.",
    ] },
    notes: tn({
      time: "17 minutes. The most important slide in the module.",
      how: "Number 3 is the concept that most changes outcomes. Spend real time on it — everything at the table follows from it.",
      mistakes: "Deciding the limit during the conversation. Under pressure it moves, which is exactly why it must be fixed beforehand.",
      extra: "Improving your alternative is often easier than improving your arguments: a second job offer, a second supplier, a second date that works.",
      tip: "The last side-panel point is practical. You never disclose your alternative — its value is that you know it exists.",
      activity: "Three numbers: every learner writes all three for a real negotiation they face.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — what they actually want
  L.compare({
    sec: SEC.con, title: "Position and interest",
    sub: "What they ASK for is rarely what they NEED.",
    left: { h: "The position", items: ["“We need it by Friday.”", "“I want 15% more.”", "“We can't go above 40,000.”", "→ What they say.", "→ Usually one specific solution."] },
    right: { h: "The interest behind it", items: ["“The board meets on Monday.”", "“My rent went up and I feel undervalued.”", "“My budget line is fixed this quarter.”", "→ What they actually need.", "→ Often several solutions fit."] },
    note: "Ask “why does that matter to you?” The answer opens options the position closed. Friday may not be needed — the board meeting is.",
    notes: tn({
      time: "17 minutes.",
      how: "The Friday example is the clearest: if the real need is the board meeting, a summary by Friday and the full report by Tuesday may satisfy both.",
      mistakes: "Negotiating position against position produces a split-the-difference result at best. Interests are where the value is found.",
      extra: "“Why does that matter to you?” must be asked with genuine curiosity. Asked aggressively it sounds like a challenge.",
      tip: "Most deadlocks are two positions that block each other, hiding two interests that do not.",
      activity: "Find the interest: give six positions and have learners guess three possible interests behind each.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — who goes first
  L.table({
    sec: SEC.con, title: "The first number",
    sub: "It matters more than almost anything else you say.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16, headSize: 15.5, colW: [3.4, 4.4, 4.533],
      rows: [
        ["Situation", "What to do", "Why"],
        ["You know the market well", "Go first, ambitiously but justifiably", "the first number anchors the whole discussion"],
        ["You have no idea of the range", "Ask them: “What did you have in mind?”", "going first blind can cost you badly"],
        ["They ask you first", "“What's the range for this role?”", "turns the question back without refusing"],
        ["They give a low number", "Do not react to it. Ask about interests.", "reacting anchors you to their number"],
      ],
    },
    note: "The first number said aloud shapes everything after it. That is why row 4 matters: reacting to a low offer accepts it as the starting point.",
    notes: tn({
      time: "16 minutes.",
      how: "Anchoring is real and powerful. Whichever number is said first becomes the reference point for every later move.",
      mistakes: "Going first with no information. If you do not know the range, asking is not weakness — it is avoiding a costly guess.",
      extra: "Row 3 is a genuinely useful move: answering a question with a question, politely, without appearing evasive.",
      tip: "Row 4 is the discipline. A visible reaction to a low number tells them exactly where you stand.",
      activity: "Who goes first: give eight situations and have learners decide and justify.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — trading
  L.panelSide({
    sec: SEC.con, title: "Trade, never concede", sub: "The single most valuable habit in this module.",
    panelW: 6.9,
    panel: { label: "The conditional trade", color: C.green, tint: C.readTint, size: 17, lsm: 1.4,
      text: "NEVER\n  “All right, I'll do it by Friday.”\n\nALWAYS\n  “If you can give me the figures by\n   Tuesday, I can do Friday.”\n\n“IF you can …, THEN I can …”\n\nEvery concession is attached to\nsomething you get in return." },
    side: { label: "Why this matters", color: C.green, size: 16, items: [
      "A free concession teaches them that asking works — so they ask again.",
      "A traded concession costs them something, so they ask less often.",
      "It also finds value: they may give up something cheap for them and valuable to you.",
      "And it protects the relationship — you are not refusing, you are pricing.",
    ] },
    notes: tn({
      time: "17 minutes.",
      how: "The IF–THEN structure is the whole technique. Drill it until it is automatic, because under pressure people concede reflexively.",
      mistakes: "Conceding to keep things pleasant. It feels cooperative and it trains the other side to keep pushing.",
      extra: "The third side-panel point is where deals get better: what is cheap for them may be valuable for you, and only trading reveals it.",
      tip: "This is not aggressive. “If you can do X, I can do Y” is friendlier than a flat refusal and far better than a free concession.",
      activity: "Turn it into a trade: give ten concessions and have learners rewrite each as an IF–THEN.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — saying and hearing no
  L.compare({
    sec: SEC.con, title: "Saying no, and hearing no",
    sub: "Neither should end the conversation.",
    left: { h: "Saying no", items: ["“I can't do that — but I could do X.”", "“That doesn't work for me. What about…?”", "“Not at that price. At 45,000 I could.”", "→ Always offer a direction.", "→ Never just refuse."] },
    right: { h: "Hearing no", items: ["“What would make it possible?”", "“Is it the price, or the timing?”", "“What could you do?”", "→ “No” is usually “not like that”.", "→ Ask what would change it."] },
    note: "“No” is rarely final. It usually means “not on those terms”. The question “what would make it possible?” reopens almost every closed door.",
    notes: tn({
      time: "16 minutes.",
      how: "The right-hand column is the more valuable. Most people hear “no” and stop; the question “what would make it possible?” costs nothing and often works.",
      mistakes: "Treating a refusal as final. It is a statement about the current terms, not about the whole matter.",
      extra: "“Is it the price, or the timing?” is diagnostic. It forces them to name which element is blocking, and that element can then be traded.",
      tip: "Taking a refusal personally is the commonest error. It is about the terms, and behaving as though it is about you weakens your position.",
      activity: "Reopen it: give eight refusals and have learners reopen each with a question.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — closing
  L.table({
    sec: SEC.con, title: "Closing the deal",
    sub: "Most agreements fail here, not in the negotiation.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [3.2, 4.6, 4.533],
      rows: [
        ["Step", "Say this", "Why"],
        ["Summarise", "“So, to be clear — you'll do X, I'll do Y.”", "you both hear the same deal"],
        ["Check", "“Have I got that right?”", "gives them a chance to correct it"],
        ["Timing", "“And that's by the 15th?”", "a deal with no date is not a deal"],
        ["Confirm", "“I'll send you two lines confirming it.”", "written, same day, always"],
      ],
    },
    note: "Send the confirmation yourself, within the hour. Whoever writes it down decides what was agreed — and usually nobody does.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the practical point. The person who sends the written summary controls the record, and in most negotiations nobody sends one.",
      mistakes: "Ending on a handshake and a vague understanding. Two weeks later the two sides remember different deals.",
      extra: "This is Level 3 Module 5's confirming habit in its highest-value application.",
      tip: "“Have I got that right?” is the step people skip. It invites correction while it is still cheap to correct.",
      activity: "Close it: after every practice negotiation, both sides write the two-line confirmation and compare them.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "negotiate", ipa: "/nɪˈɡəʊʃieɪt/", pos: "verb", icon: "FaHandshake",
      meaning: "To discuss terms in order to reach an agreement.",
      example: "We negotiated a longer deadline. The price is negotiable.",
      mistake: "Four syllables, stress on the SECOND: ne-GO-ti-ate. The “ti” is /ʃ/, like “sh”.",
      notes: tn({ time: "8 minutes.",
        how: "Build it backwards: ate → ti-ate → go-ti-ate → negotiate. Long words are learned from the end.",
        mistakes: "Pronouncing the “ti” as /t/. It is /ʃ/, the same sound as in “negotiation”.",
        extra: "negotiate WITH somebody, negotiate a price, a negotiable deadline, a non-negotiable requirement.",
        tip: "“Is that negotiable?” is a genuinely useful question and learners rarely produce it.",
        activity: "Negotiable or not: give ten items and have learners ask about each." }) },

    { word: "compromise", ipa: "/ˈkɒmprəmaɪz/", pos: "noun and verb", icon: "FaBalanceScale",
      meaning: "An agreement where each side gives up something.",
      example: "We reached a compromise. I'm willing to compromise on the date.",
      mistake: "Stress on the FIRST syllable for both noun and verb. And compromise ON something, not about.",
      notes: tn({ time: "7 minutes.",
        how: "Worth distinguishing from trading: a compromise splits the difference; a trade exchanges different things. The trade is usually better for both.",
        mistakes: "Treating compromise as the goal. Splitting the difference is the least creative outcome available.",
        extra: "reach a compromise · a workable compromise · compromise on the timing.",
        tip: "Point out that “compromise” has a second, negative sense — to compromise your position or your principles.",
        activity: "Trade or compromise: give six outcomes and have learners classify each." }) },

    { word: "leverage", ipa: "/ˈliːvərɪdʒ/", pos: "noun", icon: "FaBalanceScaleLeft",
      meaning: "The advantage that lets you influence the outcome.",
      example: "We have very little leverage here. Their deadline gives us leverage.",
      mistake: "British English uses /ˈliːvərɪdʒ/ with a long “ee”. Leverage comes from your ALTERNATIVE, not from your arguments.",
      notes: tn({ time: "8 minutes.",
        how: "The mistake line is the module's central insight restated. Leverage is structural — it comes from what you can do without them.",
        mistakes: "Believing leverage comes from being persuasive. It comes from having somewhere else to go.",
        extra: "have leverage · little leverage · leverage over somebody · their deadline is our leverage.",
        tip: "A deadline the other side has and you do not is leverage. Notice whose clock is running.",
        activity: "Who has leverage: give six situations and have learners say which side has more, and why." }) },

    { word: "concession", ipa: "/kənˈseʃn/", pos: "noun", icon: "FaGift",
      meaning: "Something you give up to move the deal forward.",
      example: "That's a significant concession. I'd want something in return.",
      mistake: "Stress on the SECOND syllable: con-CE-ssion. Never make one without asking for something back.",
      notes: tn({ time: "8 minutes.",
        how: "This is the noun for the habit in slide 8. Having the word makes the discipline explicit: name your concessions and price them.",
        mistakes: "Making concessions without noticing them. Small free concessions accumulate into a bad deal.",
        extra: "make a concession · a major concession · in return for that concession.",
        tip: "“That's a real concession on my side — what can you do on the timing?” makes the trade explicit and it works.",
        activity: "Name the concession: replay a negotiation and have learners list every concession each side made." }) },

    { word: "deadlock", ipa: "/ˈdedlɒk/", pos: "noun", icon: "FaLock",
      meaning: "A point where neither side will move.",
      example: "We reached a deadlock over the price. Let's break the deadlock.",
      mistake: "Stress on the FIRST syllable. A deadlock is usually two POSITIONS blocking, hiding two interests that do not.",
      notes: tn({ time: "8 minutes.",
        how: "The mistake line points straight back to slide 6. Almost every deadlock is positional, and asking about interests is what breaks it.",
        mistakes: "Treating a deadlock as the end. It is a signal to change level — from what they want to why they want it.",
        extra: "reach a deadlock · break a deadlock · a deadlock over the price.",
        tip: "“We seem to be stuck. Can I ask what's driving the deadline for you?” is the standard deadlock-breaker.",
        activity: "Break it: give five deadlocks and have learners find the interest behind each position." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Negotiation Language 1 of 5" }),
    title: "The conditional trade",
    sub: "One structure. It is the whole module.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [4.6, 3.4, 4.333],
      rows: [
        ["Say this", "Strength", "Note"],
        ["“If you can do X, I can do Y.”", "standard", "the workhorse"],
        ["“I could do X, provided that Y.”", "more formal", "for written terms"],
        ["“I'd be able to do X, as long as Y.”", "softer", "when the relationship matters"],
        ["“That would depend on Y.”", "exploratory", "before committing to anything"],
      ],
    },
    note: "Row 4 is how you test an idea without offering it. “That would depend on the timing” invites them to solve your problem for you.",
    notes: tn({
      time: "15 minutes.",
      how: "Row 4 is the subtle one. It signals a possible trade without naming your price, which keeps your options open.",
      mistakes: "Dropping the condition under pressure. “All right, I'll do Friday” is one sentence away from “if you can send the figures, I can do Friday.”",
      extra: "The grammar is the first conditional from Level 3 Module 4, now doing commercial work.",
      tip: "Drill the IF–THEN until it is reflexive. The moment you need it is the moment you have least spare capacity.",
      activity: "Ten trades: give ten requests and have learners respond with a conditional trade each time.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Negotiation Language 2 of 5" }),
    title: "Questions that open a negotiation up",
    sub: "The questions do more work than the statements.",
    left: { h: "Closed — gets you a yes or no", items: ["“Can you do Friday?”", "“Is 40,000 your final offer?”", "“Will you agree to that?”", "→ One answer. Usually no.", "→ Nothing is learned."] },
    right: { h: "Open — gets you information", items: ["“What's driving the Friday deadline?”", "“How did you arrive at 40,000?”", "“What would make this work for you?”", "→ Tells you the interest.", "→ Opens options the position closed."] },
    note: "“What would make this work for you?” is the most useful sentence in negotiation. It asks them to solve the problem with you.",
    notes: tn({
      time: "16 minutes.",
      how: "The note names the single highest-value question. It converts an adversarial exchange into a joint problem, and it is very hard to refuse.",
      mistakes: "Asking closed questions and receiving refusals. A “no” to a closed question tells you almost nothing.",
      extra: "“How did you arrive at that?” is diagnostic. Numbers with no reasoning behind them tend to move; numbers with a calculation behind them do not.",
      tip: "Ask these with genuine curiosity. The same words asked aggressively become an interrogation.",
      activity: "Open it up: give ten closed questions and have learners rewrite each as an open one.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Negotiation Language 3 of 5" }),
    title: "Saying no, and reopening a no",
    sub: "Eight phrases. Four each way.",
    table: {
      color: C.gram, rowH: 0.44, fontSize: 16.5, headSize: 16, colW: [4.6, 3.4, 4.333],
      rows: [
        ["Saying no", "Force", "Always add"],
        ["“I can't do that — but I could do X.”", "firm, open", "an alternative"],
        ["“That doesn't work for me. What about…?”", "neutral", "a question"],
        ["“Not at that price. At 45,000 I could.”", "precise", "your number"],
        ["“I'd struggle with that, to be honest.”", "soft", "then a condition"],
      ],
    },
    note: "REOPENING a no: “What would make it possible?” · “Is it the price or the timing?” · “What could you do?” · “Under what circumstances would that work?”",
    notes: tn({
      time: "15 minutes.",
      how: "The note carries the four reopening questions and they are the more valuable half. Most people stop at a refusal.",
      mistakes: "Refusing without an alternative. It ends the conversation, which is rarely what you want.",
      extra: "Row 3 is the strongest form: refuse the number, name yours, and keep the deal alive in one sentence.",
      tip: "“Under what circumstances would that work?” is the most powerful of the four reopeners. It presumes conditions exist.",
      activity: "Refuse and reopen: pairs alternate refusing and reopening ten times.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Negotiation Language 4 of 5" }),
    title: "Buying time, and the language of limits", sub: "Two things you will need under pressure.",
    panelW: 6.9,
    panel: { label: "Time and limits", color: C.gram, tint: C.surf2, size: 16, lsm: 1.34,
      text: "BUYING TIME\n  “Let me think about that overnight.”\n  “I'd need to check that with my team.”\n  “Can I come back to you tomorrow?”\n\nSTATING A LIMIT\n  “That's below what I can accept.”\n  “I'm afraid that's not something\n   I can agree to.”\n  “That would have to be my final position.”" },
    side: { label: "The rules", color: C.gram, size: 16, items: [
      "Never agree to a significant deal on the spot. Sleep on it.",
      "“I'd need to check with my team” is legitimate and buys real time.",
      "State a limit once, calmly, and do not repeat it louder.",
      "If you say “final” and then move, nothing you say afterwards is believed.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The first side-panel rule is worth insisting on. Almost every regretted agreement was made on the spot under mild social pressure.",
      mistakes: "Saying “that's my final offer” and then conceding. It destroys credibility for the rest of the negotiation and any future one.",
      extra: "“I'd need to check with my team” works even for people with no team. It is a normal and expected move.",
      tip: "The calm single statement of a limit is far more convincing than repetition. Volume signals uncertainty.",
      activity: "Buy time: give eight on-the-spot offers and have learners defer each one gracefully.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Negotiation Language 5 of 5" }),
    title: "Put it all together — five habits", sub: "All five are worth money.",
    color: C.gram, size: 19, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Know your three numbers before you speak", d: "Target · limit · alternative. Especially the alternative." },
      { t: "Ask why before you argue", d: "“What's driving that deadline?” The interest is where the options are." },
      { t: "Never concede without trading", d: "“If you can do X, I can do Y.” Every time." },
      { t: "Treat “no” as “not on those terms”", d: "“What would make it possible?”" },
      { t: "Confirm in writing, within the hour", d: "Whoever writes it down decides what was agreed." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Habit 3 is the one that transfers fastest. A learner who trades instead of conceding sees a different outcome in their first real negotiation.",
      mistakes: "Habit 5 skipped because it feels distrustful. It is not — it is how professionals prevent honest misunderstandings.",
      extra: "Habits 1 and 2 happen before and at the start; 3 and 4 during; 5 after. Together they cover the whole event.",
      tip: "Print these five. They are worth more money to a working adult than anything else in this course.",
      activity: "One habit each: assign each learner one habit to demonstrate in the practice negotiation.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — preparation", sub: "Three numbers before you speak.", items: [
      { q: "What are the three numbers?", a: "Your target, your limit, and your alternative.", why: "Decided in advance. Under pressure a limit decided at the table always moves." },
      { q: "Which one gives you real power?", a: "The alternative.", why: "A person with somewhere else to go can say no and mean it. A person without one accepts what is offered." },
      { q: "Do you tell them your alternative?", a: "No. You just have to have one.", why: "Its value is that it changes how you behave, not what you say." },
    ] },
    { title: "Guided examples 2 — position and interest", sub: "Ask why.", items: [
      { q: "They say “we need it by Friday”. What is the position?", a: "Friday. The interest may be something else entirely.", why: "Ask: “what's driving Friday?” The answer might be a Monday board meeting." },
      { q: "Why does that help?", a: "A summary by Friday and the full report by Tuesday may satisfy both.", why: "Positions block each other. Interests often do not, and only a question reveals them." },
      { q: "How do you ask without sounding aggressive?", a: "With curiosity: “Can I ask what's driving that?”", why: "The same words asked sharply become an interrogation and close the conversation." },
    ] },
    { title: "Guided examples 3 — trading", sub: "Never give something for nothing.", items: [
      { q: "They ask you to move the deadline to Friday. What do you say?", a: "“If you can get me the figures by Tuesday, I can do Friday.”", why: "The concession is priced. A free one teaches them that asking works." },
      { q: "What is wrong with just agreeing?", a: "It trains them to ask again.", why: "Free concessions accumulate, and each one makes the next request more likely." },
      { q: "What else does trading do?", a: "It finds value — they may give up something cheap for them and valuable to you.", why: "That is how a deal becomes better for both sides rather than merely split." },
    ] },
    { title: "Guided examples 4 — no", sub: "Rarely final.", items: [
      { q: "They say no to your price. What do you ask?", a: "“What would make it possible?”", why: "“No” usually means “not on those terms”. The question asks which term." },
      { q: "How do you say no without ending it?", a: "“Not at that price. At 45,000 I could.”", why: "Refuse the number, name yours, keep the deal alive — all in one sentence." },
      { q: "They make a very low first offer. What do you do?", a: "Do not react. Ask how they arrived at it.", why: "Reacting anchors you to their number. The question moves the discussion to reasoning." },
    ] },
    { title: "Guided examples 5 — closing", sub: "Most deals fail here.", items: [
      { q: "You have agreed. What are the four closing steps?", a: "Summarise · check · confirm the date · send it in writing.", why: "Two minutes, and it prevents two people remembering different agreements." },
      { q: "Who should send the written confirmation?", a: "You. Within the hour.", why: "Whoever writes it down decides what was agreed — and usually nobody does." },
      { q: "Why say “have I got that right?”", a: "It invites correction while it is still cheap.", why: "A misunderstanding caught in the room costs nothing. Caught in three weeks it costs the deal." },
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
    title: "Finding the interest",
    sub: "Chaltu is asked for something impossible. Watch her second line.",
    turns: [
      { who: "MANAGER", text: "I need the full report by Friday.", side: "r" },
      { who: "CHALTU", text: "Can I ask what's driving Friday?", side: "l" },
      { who: "MANAGER", text: "The board meets on Monday morning.", side: "r" },
      { who: "CHALTU", text: "Right. If I get you a two-page summary by Friday, would that cover the board?", side: "l" },
      { who: "MANAGER", text: "That would probably do it, actually.", side: "r" },
      { who: "CHALTU", text: "Then I can do that — and the full report by the following Tuesday.", side: "l" },
    ],
    note: "One question moved the deadline from impossible to comfortable. The position was Friday; the interest was the board meeting.",
    notes: tn({
      time: "16 minutes.",
      how: "Chaltu's second line is the whole module in six words. Without it she would have agreed to Friday or refused it, and both are worse.",
      mistakes: "Learners argue against the deadline instead of asking about it. Arguing produces a compromise; asking produces a better deal.",
      extra: "Her fourth line is a conditional trade in question form — it proposes without committing.",
      tip: "Ask what would have happened without line 2. Either an impossible deadline or a refusal, and neither serves anybody.",
      activity: "Ask why: pairs role-play five impossible requests, each answered first with a why question.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Trading, not conceding",
    sub: "Yonas is pushed three times. He trades every time.",
    turns: [
      { who: "SUPPLIER", text: "We can do 50,000, but we'd need payment in advance.", side: "r" },
      { who: "YONAS", text: "Advance payment is difficult. If we pay half up front, could you do 46,000?", side: "l" },
      { who: "SUPPLIER", text: "46 is below our line. 48 with half up front.", side: "r" },
      { who: "YONAS", text: "48 works if delivery is before the 20th. Is that possible?", side: "l" },
      { who: "SUPPLIER", text: "The 22nd is realistic. The 20th would be tight.", side: "r" },
      { who: "YONAS", text: "Then 48, half up front, delivery by the 22nd. Have I got that right?", side: "l" },
    ],
    note: "Three trades, no free concessions, and a closing check. Every move Yonas makes is attached to something he gets back.",
    notes: tn({
      time: "16 minutes.",
      how: "Have learners mark each trade. Yonas concedes on price and on date, and both are priced against something he receives.",
      mistakes: "The supplier's “48 is below our line” is a limit stated calmly and once. Note that they do not repeat it or raise their voice.",
      extra: "The final line is the closing summary and check from slide 10, compressed into one sentence.",
      tip: "Neither side wins. Both get a deal they can live with, which is the definition from slide 4.",
      activity: "Count the trades: learners identify each IF–THEN and what was exchanged.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "The phrases that carry a negotiation",
    sub: "Six chunks. Memorise them — pressure removes your capacity to build them.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaQuestion", title: "“What's driving that?”", desc: "Finds the interest behind the position." },
      { icon: "FaExchangeAlt", title: "“If you can X, I can Y.”", desc: "The trade. Never concede without one." },
      { icon: "FaKey", title: "“What would make it possible?”", desc: "Reopens almost any no." },
      { icon: "FaClock", title: "“Let me think about that overnight.”", desc: "Never agree to a big deal on the spot." },
      { icon: "FaBan", title: "“That's below what I can accept.”", desc: "Say it once. Calmly. Do not repeat it louder." },
      { icon: "FaCheckDouble", title: "“Have I got that right?”", desc: "The closing check. Invites correction cheaply." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Drill all six as chunks. Phrases 1, 2 and 3 do most of the work and should be automatic.",
      mistakes: "Phrase 5 said twice, louder. Repetition signals uncertainty; a single calm statement signals a real limit.",
      extra: "Phrase 4 is the one learners most need permission to use. Deferring a decision is normal and expected.",
      tip: "Phrase 3 is the highest-value sentence. It costs nothing and reopens doors that looked closed.",
      activity: "Six phrases: run a ten-minute negotiation in which each learner must use at least four.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the negotiation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "OTHER", text: "We need it finished by the end of the month.", side: "r" },
      { who: "YOU", text: "Can I ask what's ______ that date?", side: "l" },
      { who: "OTHER", text: "The funding report goes in on the 3rd. And we'd want the full document.", side: "r" },
      { who: "YOU", text: "______ I get you the figures by the 28th, would that cover the report?", side: "l" },
      { who: "OTHER", text: "It might. But the document is ______ what I can move on this month.", side: "r" },
      { who: "YOU", text: "What ______ make it possible? Then figures by the 28th, document by the 10th?", side: "l" },
    ],
    note: "Use these:  “driving”  ·  “If”  ·  “below”  ·  “would”  ·  “Have”",
    notes: tn({
      time: "14 minutes.",
      how: "Have pairs perform it twice, the second time at natural speed. Negotiation language delivered slowly from a page is not the skill.",
      answers: "1 driving · 2 If · 3 below · 4 would · 5 Have",
      mistakes: "Gap 4 is the reopener. Without it the negotiation stops at the refusal and nobody gets anything.",
      tip: "The last line is the closing check. Praise anyone who notices the deal is now better for both sides than the opening position.",
      activity: "Do it again with a different constraint — price instead of time.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — five negotiations", sub: "Three minutes each. Swap roles each time.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "A deadline you cannot meet", d: "Find the interest before you argue." },
      { t: "A price that is too low", d: "Do not react. Ask how they arrived at it." },
      { t: "Extra work you were not asked about", d: "Trade. Never simply accept it." },
      { t: "A refusal you want to reopen", d: "“What would make it possible?”" },
      { t: "Close one of them properly", d: "Summarise · check · date · confirm in writing." },
    ],
    notes: tn({
      time: "18 minutes for all five rounds.",
      how: "Round 2 is where learners react visibly to a low number. Have the partner report on the reaction — it is usually unmistakable.",
      mistakes: "Round 3 accepted without a trade. That is the reflex the module exists to break.",
      tip: "Round 5 must include the written confirmation. Have both sides write it separately and compare — the differences are instructive.",
      activity: "Compare confirmations: both sides write two lines and check whether they describe the same deal.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — prepare the three numbers", sub: "Ten minutes of preparation beats an hour of talking.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "TARGET — what are you actually aiming for?", d: "Ambitious but justifiable. Write the justification too." },
      { t: "LIMIT — where is no deal better than this deal?", d: "Decide it now. It will move if you decide it later." },
      { t: "ALTERNATIVE — what will you do if there's no agreement?", d: "Be specific. “Look elsewhere” is not an alternative." },
      { t: "Can you improve your alternative before the meeting?", d: "This is usually the highest-value hour you can spend." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Step 4 is the strategic one. A second quotation, a second offer or a second workable date changes the whole negotiation before it starts.",
      mistakes: "Vague alternatives. “I'd look for something else” is not an alternative; “I have a written offer from X” is.",
      extra: "The justification for the target matters. A number you can explain holds; a number you cannot explain collapses under one question.",
      tip: "Have learners do this for a real negotiation they actually face. Invented ones produce vague numbers.",
      activity: "Three numbers: every learner writes all three for something real, then reads the alternative aloud.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the trading drill", sub: "Ten requests. Trade every one.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“Can you finish it a week early?”", d: "“If you can…, I can…”" },
      { t: "“Can you drop the price by 10%?”", d: "Price it. What do you get?" },
      { t: "“Can you take on this extra task?”", d: "Trade, do not accept." },
      { t: "“Can you work on Saturday?”", d: "What comes back?" },
      { t: "“Can you start two weeks earlier?”", d: "Every concession has a price." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Ten repetitions in five minutes. The IF–THEN must become reflexive, because the moment you need it is the moment you have least capacity.",
      mistakes: "Agreeing to the easy ones. Every request gets a trade, including the ones that seem small — that is the discipline.",
      extra: "What you ask for need not be large. Information, a date, a decision, a name — all are legitimate returns.",
      tip: "Learners find this uncomfortable at first and then find it easy. Push through the first three.",
      activity: "Rapid fire: ten requests in five minutes, each answered with an IF–THEN.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the calm limit",
    sub: "The same sentence, and only one version is believed.",
    left: { h: "Say these once, calmly, falling", items: ["“That's below what I can accept.”", "“I'm afraid that's not something I can agree to.”", "“That would have to be my final position.”", "“No — but I could do X.”"] },
    right: { h: "Now say them louder, or twice", items: ["→ sounds like a bluff", "→ sounds defensive", "→ nobody believes “final” said twice", "→ sounds like an argument, not a limit"] },
    note: "A real limit is stated once, quietly, and not repeated. Volume and repetition both signal that you expect to move.",
    notes: tn({
      time: "15 minutes.",
      how: "Demonstrate both. The loud version of “that's my final position” is transparently a bluff and learners hear it instantly.",
      mistakes: "Repeating a limit to reinforce it. Repetition weakens it — it signals that the first statement was not believed and you know it.",
      extra: "The falling intonation is the Level 3 Module 2 rule. A limit stated with rising intonation sounds negotiable, because it is being asked.",
      tip: "This is one of the clearest cases where delivery, not vocabulary, decides the outcome.",
      activity: "Once, quietly: learners state a limit both ways and the partner says which they would test.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — reopen the no", sub: "Five refusals. Reopen every one.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“No, we can't go above 40,000.”", d: "“How did you arrive at 40?”" },
      { t: "“That deadline isn't possible.”", d: "“What would make it possible?”" },
      { t: "“We don't do that for new clients.”", d: "“Under what circumstances would you?”" },
      { t: "“I can't authorise that.”", d: "“Who could? And what would they need?”" },
      { t: "“That's not our policy.”", d: "“Is it the amount, or the precedent?”" },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Item 4 is the practical one: a refusal from someone without authority is not a refusal at all, and asking who can decide often solves it.",
      mistakes: "Accepting the first no. It is usually a statement about the current terms, not about the whole matter.",
      extra: "Item 5's question is diagnostic. If the objection is precedent rather than money, a one-off framing may work where a discount will not.",
      tip: "All five reopeners are questions. None of them argues, and that is why none of them provokes resistance.",
      activity: "Five reopeners: partners refuse five times each and the other reopens every one.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — a full negotiation", sub: "Ten minutes. Real stakes. Both sides prepared.",
    color: C.speak, size: 19, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "Prepare your three numbers privately", d: "Target · limit · alternative. Do not show your partner." },
      { t: "Open by asking about their interest", d: "“What's driving that for you?”" },
      { t: "Make at least three conditional trades", d: "“If you can X, I can Y.” Never a free concession." },
      { t: "State one limit — once, calmly", d: "And do not repeat it." },
      { t: "Reopen one refusal with a question", d: "“What would make it possible?”" },
      { t: "Close: summarise, check, date, and write it down", d: "Both sides write it. Then compare." },
    ],
    notes: tn({
      time: "A full lesson. Allow 15 minutes per pair including the comparison.",
      how: "Step 6's comparison is the assessment nobody expects. Two people who just agreed often write two different deals.",
      mistakes: "Free concessions in step 3. Have the observer count them — every uncounted concession is a lost trade.",
      answers: "SUCCESS CRITERIA: three numbers prepared in advance · an interest question in the first minute · three conditional trades · one calm limit, stated once · one reopened refusal · two written confirmations that match.",
      tip: "Give each pair genuinely conflicting briefs with a real zone of agreement. Without that the exercise is theatre.",
      activity: "Compare the confirmations: read both aloud. Differences are the lesson.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — count the concessions", sub: "One side trades. One side gives things away.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "BUYER:  Can you do it for 45,000?\nSELLER:  All right, 45,000.\nBUYER:  And delivery by the 15th?\nSELLER:  Yes, we can manage the 15th.\nBUYER:  And could you include the installation?\nSELLER:  I suppose we could, yes.\nBUYER:  And a three-month warranty rather than one?\nSELLER:  …all right. Three months.\nBUYER:  Good. Let's do that then." },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. How many concessions did the seller make?",
      "2. How many did the buyer make?",
      "3. What did the seller get in return?",
      "4. Why did the buyer keep asking?",
      "5. What should the seller have said at concession 2?",
      "6. Who negotiated better?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Question 4 is the mechanism. Each free concession told the buyer that asking works, so they asked again — four times.",
      mistakes: "Learners see the seller as cooperative. They gave away four things and received nothing, which is not cooperation.",
      extra: "The buyer is not being unfair. They asked, and the answer was yes each time — anybody would keep asking.",
      answers: "1 Four. · 2 None. · 3 Nothing. · 4 Because each yes made the next ask more likely. · 5 “If you can pay within 14 days, I can do the 15th.” · 6 The buyer, comfortably.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Four concessions. Nothing back.",
    size: 16.5,
    items: [
      { q: "1 and 2 — the count", a: "Four from the seller, none from the buyer.", why: "Price, date, installation and warranty. Every one of them free." },
      { q: "4 — why did the buyer keep asking?", a: "Because every ask worked.", why: "The buyer is not being unreasonable. Four yeses in a row is an invitation to ask a fifth time." },
      { q: "5 — the fix", a: "“If you can pay within 14 days, I can do the 15th.”", why: "One conditional turns a free concession into a trade, and it slows the asking immediately." },
      { q: "6 — who negotiated better?", a: "The buyer, comfortably.", why: "Not because they were aggressive — because the seller priced nothing." },
      { q: "What is the lesson?", a: "A free concession is not generosity. It is training.", why: "It teaches the other side that asking works, and they will keep asking until it stops." },
    ],
    notes: keyNotes("The final item is the module's central discipline. Read the script again and have the class insert one IF–THEN at each of the seller's four turns."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — the same deal, traded", sub: "Same opening. Completely different outcome.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "BUYER:  Can you do it for 45,000?\nSELLER:  Can I ask how you arrived at 45?\nBUYER:  It's what we paid last year.\nSELLER:  Costs have moved since then. At 48 I could\ninclude installation.\nBUYER:  And delivery by the 15th?\nSELLER:  If you can pay within 14 days, yes.\nBUYER:  We could do 21 days.\nSELLER:  Then the 18th. 48, installation included,\ndelivery the 18th. Have I got that right?" },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. What does the seller ask first, and why?",
      "2. What does the seller trade for 48?",
      "3. What does the seller ask for the 15th?",
      "4. What happens when the buyer counters?",
      "5. How does it close?",
      "6. Is the buyer worse off than in version 1?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Question 6 is the important one. The buyer gets installation included and a firm date — this is not a worse deal for them, it is a fairer one.",
      mistakes: "Learners assume trading means the other side loses. Both sides here get something they wanted.",
      extra: "The opening question — “how did you arrive at 45?” — reveals that the number is historical rather than calculated, which makes it movable.",
      answers: "1 How they arrived at 45 — to test whether the number is reasoned. · 2 Installation. · 3 Payment within 14 days. · 4 The seller adjusts the date rather than conceding. · 5 Summary and check. · 6 No — they gain installation and a firm date.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Trading made the deal better for both.",
    size: 16.5,
    items: [
      { q: "1 — the opening question", a: "“How did you arrive at 45?” — to test the number.", why: "It turns out to be last year's price, not a calculation. Historical numbers move; calculated ones do not." },
      { q: "2 and 3 — the trades", a: "48 in exchange for installation; the 15th in exchange for 14-day payment.", why: "Every movement is priced. Nothing is given away." },
      { q: "4 — the counter", a: "The buyer offers 21 days, so the seller moves the date to the 18th.", why: "A smaller return means a smaller concession. The proportions are maintained." },
      { q: "6 — is the buyer worse off?", a: "No. They gain installation and a firm date.", why: "Trading is not winning. Both sides ended with something they did not have in version 1." },
      { q: "What is the difference?", a: "One question at the start, and four conditionals.", why: "Same opening offer, same people, and a materially better outcome for both." },
    ],
    notes: keyNotes("Play both scripts back to back. Same opening line, and the difference is entirely in whether the seller priced anything."),
  });

  L.grid({
    sec: SEC.lis, title: "Listening in a negotiation", sub: "Four things to track while they talk.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaSearch", title: "Position or interest?", desc: "Are they telling you what they want, or why? If only what, ask why — the options are hidden there." },
      { icon: "FaCalculator", title: "Is the number calculated or historical?", desc: "“It's what we paid last year” moves. “It's 12% of our budget line” does not. Ask how they arrived at it." },
      { icon: "FaExchangeAlt", title: "What have they conceded?", desc: "Count it. If they have conceded three times and you have conceded three times, you are even. If not, you are not." },
      { icon: "FaBan", title: "Is that limit real?", desc: "Stated once and calmly, it usually is. Repeated loudly, it usually is not." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Item 2 is genuinely useful. A number with reasoning behind it is hard to move; a number with a habit behind it is not.",
      mistakes: "Not counting concessions. Memory over-weights your own and under-weights theirs, in both directions.",
      tip: "Item 4 uses the slide 33 lesson from the listening side. How a limit is delivered tells you whether to test it.",
      activity: "Track four things: an observer in each negotiation notes all four and reports afterwards.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: SEC.rea, title: "Reading 1 — a salary negotiation", sub: "Find the three numbers, the trades and the close.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 14.5, lsm: 1.22,
      text: "MANAGER:  We can offer 18,000.\nBETHLEHEM:  Can I ask how that was arrived at?\nMANAGER:  It's the standard for the grade.\nBETHLEHEM:  I understand. I'd been aiming for 22.\nI've run the Adama route for two years and cut\ndelivery times by a third.\nMANAGER:  22 is above the grade ceiling.\nBETHLEHEM:  What would make it possible?\nMANAGER:  A grade change would need a review.\nBETHLEHEM:  Then could we do 18 now, with a\nreview in six months?\nMANAGER:  I could commit to that, yes.\nBETHLEHEM:  Then 18 now, review in October.\nI'll send two lines confirming that.",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "What does she ask first, and why?",
      "What is her target? Her evidence?",
      "How does she respond to the ceiling?",
      "What does she trade for accepting 18?",
      "How does she close?",
      "Did she get her target?",
    ] },
    notes: tn({
      time: "17 minutes.",
      how: "Question 6 is the honest one. She did not get 22 — she got 18 plus a committed review, which is better than 18 alone.",
      mistakes: "Learners judge this a failure because the target was missed. Compare it with accepting 18 in silence, which is what most people do.",
      extra: "Her evidence — two years, a third off delivery times — is the Module 2 rule: a number makes the claim checkable.",
      answers: "How the number was arrived at · 22, supported by a measurable result · asks what would make it possible · accepts 18 in exchange for a committed review · summarises and confirms in writing · no, but she got more than was offered.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Technique, not outcome.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "Why does she ask how the number was arrived at?",
      "What evidence does she give for her target, and why is it strong?",
      "What does she do when told 22 is impossible?",
      "What does she get in exchange for accepting 18?",
      "Why does she offer to send the confirmation herself?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 3 is the pivot. “What would make it possible?” turns a closed door into a question about conditions, and the answer produces the review.",
      mistakes: "Learners think she should have pushed harder on 22. The grade ceiling is a structural limit, and pushing would have produced nothing.",
      tip: "Question 5: whoever writes it down decides what was agreed. A verbal promise of a review in six months is easy to forget.",
      answers: "1 To test whether it is calculated or standard. · 2 Two years and a third off delivery times — checkable. · 3 Asks what would make it possible. · 4 A committed review in six months. · 5 Because whoever writes it down decides what was agreed.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "She missed her target and still negotiated well.",
    size: 16.5,
    items: [
      { q: "1 — the opening question", a: "To find out whether the number is calculated or just standard.", why: "“Standard for the grade” signals a structural limit, which tells her to trade rather than push." },
      { q: "2 — the evidence", a: "Two years on the route, a third off delivery times.", why: "Checkable and specific — the Module 2 evidence rule, doing commercial work." },
      { q: "3 — the pivot", a: "“What would make it possible?”", why: "It converts a refusal into a question about conditions, and the answer is what produces the review." },
      { q: "4 — the trade", a: "She accepts 18 in exchange for a committed review in six months.", why: "Not a free concession. She priced her acceptance." },
      { q: "6 — did she succeed?", a: "She missed her target and beat the offer.", why: "Compare with accepting 18 in silence, which is what most people do. That is the real benchmark." },
    ],
    notes: keyNotes("Item 6 is the honest measure. Judge a negotiation against what you would otherwise have got, not against your ideal."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — the same conversation, badly", sub: "Find the five errors.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "MANAGER:  We can offer 18,000.\nTOLOSA:  Oh. I was hoping for more, really.\nMANAGER:  That's the standard for the grade.\nTOLOSA:  Right. I mean, I've worked hard, and I've\nbeen here two years, and I do a lot, so…\nMANAGER:  I understand, but the grade is fixed.\nTOLOSA:  OK. That's fine. I'll take it.\nMANAGER:  Good. Welcome aboard.\nTOLOSA:  Thanks. Sorry for asking.",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Did he name a target?",
      "Did he give any evidence?",
      "Did he ask any questions?",
      "Did he trade anything?",
      "What is wrong with the last line?",
      "What could he have got?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The last line is the most damaging. Apologising for negotiating tells the other side that asking was inappropriate, which affects every future conversation.",
      mistakes: "“I've worked hard and I do a lot” is unverifiable. Compare with “two years on the Adama route, a third off delivery times”.",
      extra: "He never names a number. Without a target there is nothing to negotiate towards and no way to measure the outcome.",
      answers: "No target. No checkable evidence. No questions. No trade. The apology undermines everything. He could have had the review, at minimum.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Five errors, one outcome.",
    size: 16.5,
    items: [
      { q: "1 — no target", a: "“I was hoping for more” is not a number.", why: "Without a target there is nothing to negotiate towards and no way to know whether you did well." },
      { q: "2 — no evidence", a: "“I've worked hard and I do a lot.”", why: "Unverifiable. Compare with two years and a third off delivery times — one is checkable, the other is not." },
      { q: "3 and 4 — no questions, no trade", a: "He accepted the first number without asking anything.", why: "One question — “what would make it possible?” — was worth a six-month review." },
      { q: "5 — the apology", a: "“Sorry for asking.”", why: "It tells the other side that asking was inappropriate, which affects every future conversation with them." },
      { q: "Vocabulary check", a: "negotiate · compromise · leverage · concession · deadlock", why: "He did not negotiate. He accepted — and then apologised for having considered not accepting." },
    ],
    notes: keyNotes("Item 5 is worth dwelling on. Many learners apologise for negotiating, and that single habit costs more than any language gap."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — turn it into a trade", sub: "Never concede for nothing.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each concession as a conditional trade.",
    items: [
      "1.  “All right, I'll do it by Friday.”",
      "2.  “Fine, we can drop the price to 45.”",
      "3.  “Yes, I can take on the extra report.”",
      "4.  “OK, I'll work on Saturday.”",
      "5.  “We'll include the installation.”",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "What you ask for need not be large. Information, a date, a decision or a name are all legitimate returns.",
      answers: "MODELS: 1 “If you can get me the figures by Tuesday, I can do Friday.” · 2 “At 45 I'd need payment within 14 days.” · 3 “I could take that on if the Adama report moves to next month.” · 4 “I can do Saturday if I can take Monday off.” · 5 “We can include installation at 48.”",
      mistakes: "Asking for something unrelated and implausible. The return should be something they can actually give.",
      tip: "Read several aloud. Learners notice that none of them sounds aggressive — they sound organised.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — find the interest", sub: "What do they actually need?",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "For each position, write the question you would ask and two possible interests.",
    items: [
      "1.  “We need the full report by Friday.”",
      "2.  “We can't go above 40,000.”",
      "3.  “It has to be done in Adama, not Hawassa.”",
      "4.  “I need an answer today.”",
      "5.  “We want a two-year contract, not one.”",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Two possible interests each. The point is that a position usually has several possible drivers, and only a question reveals which.",
      answers: "MODELS: 1 a board meeting, or a funding deadline · 2 a fixed budget line, or a comparison quote · 3 a client requirement, or staff availability · 4 their own deadline, or a competing offer · 5 continuity of staff, or a lower annual rate.",
      mistakes: "Guessing one interest and treating it as fact. The question must still be asked.",
      tip: "Item 4 is the interesting one: “I need an answer today” often means somebody else is waiting, and that is negotiable.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — prepare a real negotiation", sub: "Something you actually face.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Prepare fully in writing before you go anywhere near the conversation.",
    items: [
      "1.  THE THREE NUMBERS — target, limit, alternative.",
      "2.  Your justification for the target — with evidence.",
      "3.  Three things you could TRADE, and what you would want back.",
      "4.  Their likely position, and two possible interests behind it.",
      "5.  Two questions you will ask in the first two minutes.",
      "6.  The two-line confirmation you will send afterwards.",
    ],
    notes: tn({
      time: "25 minutes.",
      how: "Step 6 written in advance is unusual and effective. Drafting the confirmation before the meeting clarifies exactly what you are trying to agree.",
      answers: "MODEL: see slide 41 for a worked negotiation with all six elements visible.",
      mistakes: "Step 1's alternative left vague. “Look elsewhere” is not an alternative; a specific option is.",
      tip: "Step 3 is where value is created. Three things you could trade is usually more than learners think they have.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — how it is marked", sub: "25 marks. Preparation is most of it.",
    size: 16.5,
    items: [
      { q: "The three numbers — 6 marks", a: "Target, limit and a SPECIFIC alternative.", why: "A vague alternative scores one mark. “I have a written offer from X” scores full." },
      { q: "Justification — 5 marks", a: "Evidence for the target: a number or a checkable result.", why: "“I've worked hard” scores nothing. Module 2's evidence rule applies here too." },
      { q: "Three tradeables — 6 marks", a: "Three things you could give, each with what you want back.", why: "This is where deals get better. Three is usually more than learners believe they have." },
      { q: "Their interests — 4 marks", a: "Their likely position, plus two possible interests behind it.", why: "Two, because guessing one and treating it as fact is the commonest preparation error." },
      { q: "The confirmation — 4 marks", a: "Two lines, drafted in advance.", why: "Writing it beforehand clarifies what you are actually trying to agree." },
    ],
    notes: keyNotes("Give this rubric before the task. Twelve of the twenty-five marks are for the numbers and the tradeables, which is where preparation pays."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your negotiation checklist", sub: "Six checks. Before, during and after.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Do I know my target, my limit and my alternative?", d: "All three, decided before I speak." },
      { t: "Have I asked WHY before I argue?", d: "“What's driving that for you?”" },
      { t: "Is every concession attached to something I get back?", d: "“If you can X, I can Y.” Every time." },
      { t: "Have I treated their “no” as “not on those terms”?", d: "“What would make it possible?”" },
      { t: "Did I state my limit once, calmly, without repeating it?", d: "Volume and repetition both signal a bluff." },
      { t: "Have I sent the written confirmation — within the hour?", d: "Whoever writes it down decides what was agreed." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Check 1 is done before, checks 2 to 5 during, and check 6 after. Together they cover the whole event.",
      tip: "Print this. It is worth more money to a working adult than anything else in this course.",
      activity: "Six checks: apply this after every practice negotiation and before every real one.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Your real power in a negotiation comes from:", opts: "a) your arguments     b) your alternative     c) your confidence" },
      { q: "2. When they make a concession request, you should:", opts: "a) agree if reasonable     b) trade     c) always refuse" },
      { q: "3. “No” usually means:", opts: "a) final     b) not on those terms     c) they dislike you" },
      { q: "4. A limit should be stated:", opts: "a) once, calmly     b) twice, firmly     c) loudly" },
      { q: "5. Who should send the written confirmation?", opts: "a) them     b) you, within the hour     c) nobody needs to" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 a · 5 b",
      tip: "Question 1 is the module's central claim. Leverage is structural, not rhetorical.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the phrase", sub: "Negotiation chunks.",
    color: C.green, instruction: "Write the missing word.", size: 18,
    items: [
      "1.  Can I ask what's ______ that deadline?",
      "2.  ______ you can pay within 14 days, I can do the 15th.",
      "3.  What would make it ______ ?",
      "4.  That's ______ what I can accept.",
      "5.  Let me think about that ______ .",
      "6.  ______ I got that right?",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Take the answers orally at speed. Under real pressure these must be available without construction.",
      answers: "1 driving · 2 If · 3 possible · 4 below · 5 overnight · 6 Have",
      mistakes: "Item 2 is the trade. Learners often write “Because” — which concedes rather than trades.",
      tip: "Item 3 is the highest-value sentence in the module. Drill it twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Numbers, questions and moves.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the TERM to its MEANING", opts: "1. target     2. limit     3. alternative     4. leverage" },
      { q: "a) what you do if there's no deal     b) where no deal beats this deal", opts: "c) what you're aiming for     d) the advantage that comes from your alternative" },
      { q: "Part 2 — match the SITUATION to the MOVE", opts: "1. they say no     2. they ask for something     3. they make a low offer          a) trade     b) don't react — ask how they got there     c) “What would make it possible?”" },
      { q: "Part 3 — match the STAGE to the PHRASE", opts: "1. opening     2. trading     3. closing          a) “If you can X, I can Y.”     b) “Have I got that right?”     c) “What's driving that?”" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–b, 3–a, 4–d.  ·  Part 2: 1–c, 2–a, 3–b.  ·  Part 3: 1–c, 2–a, 3–b.",
      tip: "Part 1 item 4 makes the structural point: leverage is not a personal quality, it is a consequence of your alternative.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — reopen the no", sub: "Five refusals. Ask one question each.",
    color: C.green, instruction: "Write the question you would ask.", size: 18,
    items: [
      "1.  “We can't go above 40,000.”",
      "2.  “That deadline isn't possible.”",
      "3.  “We don't offer that to new clients.”",
      "4.  “I can't authorise that.”",
      "5.  “That's not our policy.”",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "All five answers are questions. None of them argues, which is why none provokes resistance.",
      answers: "MODELS: 1 “How did you arrive at 40?” · 2 “What would make it possible?” · 3 “Under what circumstances would you?” · 4 “Who could, and what would they need?” · 5 “Is it the amount, or the precedent?”",
      mistakes: "Arguing instead of asking. “But that's too low” invites a defence; “how did you arrive at it?” invites an explanation.",
      tip: "Item 4 is the practical one. A refusal from somebody without authority is not a refusal.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — count the concessions", sub: "Who gave what?",
    color: C.green, instruction: "For each exchange, say who conceded and what they got back.", size: 17,
    items: [
      "1.  “Can you do 45?”  “All right, 45.”",
      "2.  “Can you do 45?”  “At 45 I'd need payment in 14 days.”",
      "3.  “Delivery by the 15th?”  “Yes, we can manage that.”",
      "4.  “Delivery by the 15th?”  “If installation is included, yes.”",
      "5.  “Can you include the warranty?”  “I suppose so.”",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "The odd-numbered items are free concessions; the even ones are trades. The pattern is deliberate and learners spot it quickly.",
      answers: "1 free concession, nothing back · 2 traded for 14-day payment · 3 free concession · 4 traded for installation · 5 free concession, and the hesitation invites another ask.",
      mistakes: "Item 5's “I suppose so” is the worst of the five. It concedes AND signals that more asking will work.",
      tip: "Have learners rewrite items 1, 3 and 5 as trades. Three sentences, and the whole deal changes.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  Your power comes from how well you argue.",
      "2.  You should decide your limit during the conversation.",
      "3.  A free concession is a friendly move.",
      "4.  “No” is usually final.",
      "5.  You should never agree to a big deal on the spot.",
      "6.  Whoever writes the confirmation decides what was agreed.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — from your alternative · 2 F — decide it before; under pressure it moves · 3 F — it trains them to ask again · 4 F — usually “not on those terms” · 5 T · 6 T",
      tip: "Item 3 is the belief this module exists to correct. Say the correction twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About a real negotiation you face.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What is your target, and what evidence supports it?",
      "2.  What is your limit, and why is it there?",
      "3.  What is your alternative — specifically?",
      "4.  Name three things you could trade.",
      "5.  What will you ask in the first two minutes?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 3 must be specific. “Look elsewhere” scores nothing; a named option scores everything.",
      answers: "No fixed answers. Question 1's evidence must be checkable; question 4 must name three genuine items.",
      mistakes: "Question 2 answered with a number and no reason. A limit with no reasoning behind it will move under pressure.",
      tip: "Question 5 should be an interest question. Collect the answers and check.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "In pairs. Observer counts.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. A third person counts concessions on both sides.", size: 19,
    items: [
      "1.  Ask an interest question in the first thirty seconds.",
      "2.  Make three conditional trades. Observer counts free concessions.",
      "3.  State one limit — once, calmly. Partner says if they believed it.",
      "4.  Reopen one refusal with a question.",
    ],
    notes: tn({
      time: "15 minutes in groups of three.",
      how: "The observer counting free concessions is the key mechanic. Speakers rarely notice their own.",
      answers: "SUCCESS CRITERIA: 1 an interest question early · 2 three trades and zero free concessions · 3 a limit the partner reports believing · 4 a refusal reopened with a question, not an argument.",
      tip: "Round 3's feedback is the useful part. Ask the partner: would you have tested that limit?",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full negotiation", sub: "Ten minutes. Conflicting briefs. Real zone of agreement.",
    color: C.green, instruction: "In threes: two negotiate, one observes and counts.", size: 17,
    items: [
      { q: "1. Prepare your three numbers privately. Five minutes.", opts: "Do not show your partner." },
      { q: "2. Negotiate for ten minutes.", opts: "Observer counts concessions and trades on both sides." },
      { q: "3. Both sides write the two-line confirmation separately.", opts: "Do not confer." },
      { q: "4. Compare the two confirmations.", opts: "Do they describe the same deal?" },
      { q: "5. The observer reports the concession count.", opts: "Who traded? Who gave things away?" },
    ],
    notes: tn({
      time: "A full lesson in groups of three.",
      how: "Step 4 is the assessment that surprises everybody. Two people who just shook hands frequently write two different deals.",
      answers: "Assessed with the six checks from slide 50, plus the observer's concession count.",
      tip: "Write the briefs so that a genuinely better joint outcome exists but is only reachable by asking about interests. Otherwise it becomes haggling.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why does a free concession make things worse, not better?", opts: "What does it teach the other side?" },
      { q: "2. Is trading aggressive or cooperative?", opts: "Compare slides 36 and 38." },
      { q: "3. Why is your alternative worth more than your arguments?", opts: "What can you do with each?" },
      { q: "4. When should you walk away from a negotiation?", opts: "Give a real example." },
    ],
    notes: tn({
      time: "14 minutes. Discussion, not writing.",
      how: "Question 2 is answered by the two listening scripts. The traded version produced a better deal for BOTH sides, which settles it empirically.",
      answers: "1 It teaches them that asking works, so they ask again — and each yes makes the next request more likely. 2 Cooperative — slide 38's buyer ended up better off than slide 36's, because trading found value that conceding did not. 3 An argument can be answered; an alternative cannot. It changes what you are able to do, not what you are able to say. 4 When the deal on the table is worse than your alternative — that is the definition of the limit, and it is the one moment where walking away is the correct outcome.",
      tip: "Question 4's answer is the module's honest position: not every negotiation should end in agreement.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Preparation", items: [
      { q: "1. Name the three numbers you prepare.", opts: "Three answers." },
      { q: "2. Which one gives you real power, and why?", opts: "One sentence." },
      { q: "3. When should you decide your limit?", opts: "One sentence." },
      { q: "4. Do you tell them your alternative?", opts: "Yes or no, and why." },
    ] },
    { part: "Part 2 · Positions and interests", items: [
      { q: "5. What is the difference between a position and an interest?", opts: "One sentence." },
      { q: "6. What question finds the interest?", opts: "Write the question." },
      { q: "7. “We need it by Friday.” What might the interest be?", opts: "One example." },
      { q: "8. Why does this break deadlocks?", opts: "One sentence." },
    ] },
    { part: "Part 3 · Trading", items: [
      { q: "9. What is the structure of a trade?", opts: "Write it." },
      { q: "10. Why is a free concession damaging?", opts: "One sentence." },
      { q: "11. Turn this into a trade: “All right, I'll do Friday.”", opts: "Write the sentence." },
      { q: "12. What else does trading achieve, besides protecting you?", opts: "One sentence." },
    ] },
    { part: "Part 4 · No, and limits", items: [
      { q: "13. What does “no” usually mean?", opts: "One sentence." },
      { q: "14. Name two questions that reopen a refusal.", opts: "Two answers." },
      { q: "15. How should a limit be stated?", opts: "One sentence." },
      { q: "16. What happens if you say “final” and then move?", opts: "One sentence." },
    ] },
    { part: "Part 5 · Closing", items: [
      { q: "17. Name the four closing steps.", opts: "Four answers." },
      { q: "18. Who sends the confirmation, and when?", opts: "One sentence." },
      { q: "19. Why does that matter?", opts: "One sentence." },
      { q: "20. SPEAKING: a full ten-minute negotiation.", opts: "Assessed live, with a concession count." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 6 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is the negotiation itself." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is worth as much as the other nineteen. The observer's concession count is part of the mark.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the three numbers", a: "Target · limit · alternative.", why: "All decided before you speak. Most negotiations are settled in preparation, not at the table." },
      { q: "Q2 — real power", a: "The alternative — it lets you say no and mean it.", why: "A person with somewhere else to go behaves differently from one who has nowhere." },
      { q: "Q3 — when to decide the limit", a: "Before the conversation.", why: "A limit decided under pressure always moves, which means it was never a limit." },
      { q: "Q4 — telling them your alternative", a: "No. You just have to have one.", why: "Its value is that it changes how you behave, not what you disclose." } ],
    [ { q: "Q5 — position and interest", a: "The position is what they ask for; the interest is why they need it.", why: "Positions block each other. Interests often do not." },
      { q: "Q6 — the question", a: "“What's driving that for you?”", why: "Asked with curiosity. The same words asked sharply become an interrogation." },
      { q: "Q7 — the Friday interest", a: "A board meeting on Monday, for example.", why: "In which case a summary by Friday and the full report later satisfies both sides." },
      { q: "Q8 — why it breaks deadlocks", a: "Two positions can block while the interests behind them do not.", why: "Almost every deadlock is positional, and a question is what reveals that." } ],
    [ { q: "Q9 — the trade structure", a: "“If you can X, I can Y.”", why: "Every concession attached to something you get back. The workhorse of the module." },
      { q: "Q10 — why free concessions damage", a: "They teach the other side that asking works.", why: "Each yes makes the next request more likely, and they accumulate into a bad deal." },
      { q: "Q11 — turn it into a trade", a: "“If you can get me the figures by Tuesday, I can do Friday.”", why: "The concession is now priced, and the asking slows immediately." },
      { q: "Q12 — what else trading achieves", a: "It finds value — they may give up something cheap for them and valuable to you.", why: "That is how a deal becomes better for both rather than merely split down the middle." } ],
    [ { q: "Q13 — what “no” means", a: "Usually “not on those terms”.", why: "It is a statement about the current offer, not about the whole matter." },
      { q: "Q14 — two reopeners", a: "“What would make it possible?” · “Under what circumstances would that work?”", why: "Both are questions. Neither argues, so neither provokes resistance." },
      { q: "Q15 — stating a limit", a: "Once, calmly, without repeating it.", why: "Volume and repetition both signal that you expect to move." },
      { q: "Q16 — saying “final” and moving", a: "Nothing you say afterwards is believed.", why: "Credibility in a negotiation is spent once. It does not come back." } ],
    [ { q: "Q17 — the four closing steps", a: "Summarise · check · confirm the date · send it in writing.", why: "Two minutes, and it prevents two people remembering different agreements." },
      { q: "Q18 — the confirmation", a: "You send it, within the hour.", why: "Same day, two lines. Waiting until tomorrow means details are already remembered differently." },
      { q: "Q19 — why it matters", a: "Whoever writes it down decides what was agreed.", why: "And in most negotiations nobody writes anything down at all." },
      { q: "Q20 — the negotiation", a: "Assessed on trades, limits, questions and the concession count", why: "Six checks from slide 50, plus whether the two written confirmations match." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q2, Q10 and Q13 are the diagnostic block: the alternative as power, the cost of free concessions, and “no” as a statement about terms. All three change outcomes immediately."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Use it for real.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Write the three numbers for a real negotiation you face", d: "Especially the alternative. Be specific." },
      { t: "Spend an hour improving your alternative", d: "A second quote, a second option, a second date." },
      { t: "Ask “what's driving that?” once, for real", d: "Note what you learned that you did not know." },
      { t: "Make one conditional trade instead of conceding", d: "“If you can…, I can…” Note what happened." },
      { t: "Send one written confirmation after a verbal agreement", d: "Two lines, same day." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Tuesday's task is the highest-value hour of the week. Improving the alternative changes the negotiation before it begins.",
      tip: "Thursday's task is where learners feel the difference. The first conditional trade is uncomfortable and then it is not.",
      activity: "Report back: three learners describe what happened on Wednesday and Thursday.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "A full written preparation for a real negotiation", d: "Three numbers, justification, three tradeables, their interests." },
      { t: "The two questions you will ask in the first two minutes", d: "Both must be interest questions." },
      { t: "Record a ten-minute practice negotiation", d: "Then count your own free concessions." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 3's self-count is the assessment. Learners consistently under-count their own concessions until they hear the recording.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option with an observer instead.",
      tip: "If any learner has a real negotiation this week, prioritise their preparation and go through it in detail.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your negotiation will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaClipboardList", title: "Preparation — 10 marks", desc: "Three numbers (4) · a specific alternative (3) · three tradeables with returns (3)." },
      { icon: "FaExchangeAlt", title: "Trading — 8 marks", desc: "Three conditional trades (5) · zero free concessions (3)." },
      { icon: "FaCheckDouble", title: "Questions and close — 7 marks", desc: "An interest question early (2) · one reopened refusal (2) · a four-step close with written confirmation (3)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → redo the trading drill weekly." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Preparation carries ten marks, which is deliberate. Most of a negotiation is decided before anybody speaks.",
      tip: "Give the mark privately with the observer's concession count attached. That number is more useful than any comment.",
      mistakes: "Do not mark the outcome. A learner may negotiate excellently and still not get the deal, because the zone of agreement was small.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaClipboardList", title: "The three numbers", desc: "Target · limit · alternative. Prepared before you speak." },
      { icon: "FaSearch", title: "Position and interest", desc: "What they ask for is rarely what they need." },
      { icon: "FaExchangeAlt", title: "Trade, never concede", desc: "“If you can X, I can Y.” Every single time." },
      { icon: "FaKey", title: "Reopening a no", desc: "“What would make it possible?”" },
      { icon: "FaBan", title: "The calm limit", desc: "Once. Quietly. Never repeated louder." },
      { icon: "FaCheckDouble", title: "Closing properly", desc: "Summarise · check · date · confirm in writing." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3. Run the pay-rise negotiation again with preparation and compare the outcome.",
      tip: "Ask who used a conditional trade in a real conversation this week. Those reports are the best summary available.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The negotiation toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaClipboardList", title: "Before you speak", desc: "1  TARGET — what you're aiming for\n2  LIMIT — where no deal beats this deal\n3  ALTERNATIVE — what you'll do instead\nImprove the alternative if you can." },
      { icon: "FaExchangeAlt", title: "The trade", desc: "“If you can ___ , I can ___ .”\n\nNEVER a free concession.\nEvery concession has a price." },
      { icon: "FaKey", title: "Questions that work", desc: "“What's driving that for you?”\n“How did you arrive at that number?”\n“What would make it possible?”\n“Under what circumstances would that work?”" },
      { icon: "FaCheckDouble", title: "The close", desc: "1  Summarise:  “You'll do X, I'll do Y.”\n2  Check:  “Have I got that right?”\n3  Date:  “And that's by the 15th?”\n4  Confirm in writing, within the hour." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The second box is the one to read immediately before any real negotiation.",
      tip: "Print the third box. Four questions, and they do more work than any argument.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now trade instead of conceding — which is worth real money, every year, for the rest of your career.",
    sub: "Three numbers before you speak, one question about what they actually need,\nand a written confirmation within the hour. Most people do none of the three.",
    chips: ["NEXT — Module 7", "Idiom, Humour & Register", "The last things that mark you as an outsider"],
    notes: tn({
      time: "5 minutes.",
      how: "Name the value plainly. Salary, deadlines, scope and price are negotiated repeatedly across a career, and small habits compound.",
      tip: "Preview Module 7: idiom, humour and register are the remaining markers. Not barriers to being understood — markers of not being inside the language.",
      activity: "Ask every learner to name one negotiation they will prepare properly this month.",
    }),
  });
};
