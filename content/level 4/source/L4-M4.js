"use strict";
/* LEVEL 4 · MODULE 4 — Discussion & Chairing   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 4", levelNo: LV.no, levelName: "Advanced Spoken\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Discussion & Chairing",
    sub: "A debate has two sides and a winner. A discussion has five voices and no winner — and somebody has to keep it moving. This module teaches both roles.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "2", v: "ROLES TO LEARN" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by separating the two roles. Every learner will practise both being a participant and chairing, and the second is far rarer and more valuable.",
      tip: "Chairing well is a career skill that almost nobody is taught. Say so — it raises the seriousness of the room immediately.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. Two roles.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Get into a discussion that is already moving", d: "The single hardest thing for a second-language speaker." },
      { t: "Hold the floor long enough to finish a thought", d: "And hand it over deliberately rather than trailing off." },
      { t: "Chair a discussion — six moves", d: "Open · bring in · manage · park · summarise · close." },
      { t: "Bring in the quiet and manage the dominant", d: "Both, without embarrassing anyone." },
      { t: "Reach a decision — or say clearly that you have not", d: "An unresolved discussion is fine. An undeclared one is not." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 1 is the one learners most need. Many competent speakers say nothing in meetings simply because they cannot find the door.",
      tip: "Objective 5 is the chair's real responsibility. Ending without naming what was and was not decided is the commonest failure in real meetings.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: three minutes, five people", sub: "No chair. Just talk.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaComments", title: "1 · Discuss", desc: "“Should the working week be four days?” Three minutes. Nobody is in charge." },
      { icon: "FaUserClock", title: "2 · Count", desc: "Who spoke most? Who spoke least? Who did not speak at all?" },
      { icon: "FaQuestion", title: "3 · What was decided?", desc: "Anything? Could you say in one sentence where the group got to?" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "An unchaired discussion nearly always produces two dominant speakers, two quiet ones, and no conclusion. Let that happen — it is the diagnosis.",
      mistakes: "Do not intervene. The failure is the teaching, and rescuing it removes the lesson.",
      tip: "Task 3 usually produces silence. That silence is the argument for slide 7 and learners will remember it.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "A discussion has no winner. That changes everything about how you speak in one.",
    sub: "In a debate you defend a position. In a discussion you are trying to find the best answer with other people —\nwhich means listening is a contribution and changing your mind is a success.",
    chips: ["No sides", "Listening is contributing", "Somebody must steer"],
    notes: tn({
      time: "7 minutes.",
      how: "The contrast with Module 3 is the frame for the whole module. Debate skills used in a discussion make somebody exhausting to work with.",
      mistakes: "Learners who have just finished the debate module arrive in argument mode. Name the switch explicitly.",
      extra: "The second chip is worth defending: a good question or an accurate summary contributes more than another opinion.",
      tip: "The third chip previews the chair role. Discussions without steering produce what the warm-up just produced.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — debate vs discussion
  L.compare({
    sec: SEC.con, title: "Debate and discussion are different games",
    sub: "Same language, opposite purposes.",
    left: { h: "DEBATE", items: ["Two sides, assigned", "Goal: win", "Concede as little as possible", "Silence is losing", "Your position is fixed", "→ Module 3"] },
    right: { h: "DISCUSSION", items: ["Many voices, no sides", "Goal: find the best answer", "Concede freely — it speeds things up", "Listening is contributing", "Your position may change", "→ This module"] },
    note: "Using debate behaviour in a discussion makes you exhausting. Using discussion behaviour in a debate makes you lose. Know which room you are in.",
    notes: tn({
      time: "15 minutes.",
      how: "The note is the practical point. Both skill sets are legitimate and applying the wrong one is a common and costly error at work.",
      mistakes: "Treating every meeting as a debate to be won. It produces short-term wins and long-term isolation.",
      extra: "Most workplace conversations are discussions with occasional debate inside them. Recognising the switch mid-meeting is an advanced skill.",
      tip: "Ask which mode the learners' own workplaces default to. The answers are usually revealing and often uncomfortable.",
      activity: "Which room: describe eight situations and have learners name debate or discussion for each.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — turn-taking
  L.panelSide({
    sec: SEC.con, title: "Getting in, holding, handing over", sub: "The mechanics nobody teaches.",
    panelW: 6.8,
    panel: { label: "The three moves", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "GETTING IN\n  “Can I come in on that?”\n  “Just to add to what Sara said…”\n  “Sorry — can I just say something?”\n\nHOLDING\n  “There are two things here. First…”\n  “Let me just finish that thought.”\n\nHANDING OVER\n  “What do you think, Tolosa?”\n  “That's my view — what's yours?”" },
    side: { label: "Why this is hard", color: C.green, size: 16, items: [
      "English has almost no pauses in a live discussion. You must enter, not wait.",
      "“There are two things here” buys you a longer turn legitimately.",
      "Handing over deliberately is what stops you being interrupted.",
      "Waiting for a gap that never comes is why competent speakers say nothing.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The last side-panel point is the diagnosis for most silent participants. They are waiting politely for an opening that English discussions do not provide.",
      mistakes: "Learners believe interrupting is rude. Entering with “can I come in on that?” is not interrupting — it is the normal mechanism.",
      extra: "“There are two things here” is a genuine floor-holding device. Announcing two points buys you time for both.",
      tip: "Handing over by name is the most generous move in a discussion and it also protects your own turn — you decide when it ends.",
      activity: "Get in five times: run a fast discussion where every learner must enter five times using a different phrase.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — the chair
  L.table({
    sec: SEC.con, title: "The chair — six moves",
    sub: "Almost nobody is taught this. It is a career skill.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 16.5, headSize: 16, colW: [2.8, 4.2, 5.133],
      rows: [
        ["Move", "Say this", "When"],
        ["OPEN", "“We've got twenty minutes and one decision to make.”", "first thirty seconds"],
        ["BRING IN", "“Mimi, you've worked on this — what do you think?”", "when someone is silent"],
        ["MANAGE", "“Let's hear from someone who hasn't spoken.”", "when one voice dominates"],
        ["PARK", "“That's important but it's a different question. Let's note it.”", "when the topic drifts"],
        ["SUMMARISE", "“So far we agree on X, and we're split on Y.”", "every five minutes"],
        ["CLOSE", "“We've decided X. Y is unresolved — Tolosa will look at it.”", "the last two minutes"],
      ],
    },
    note: "The SUMMARISE move is the one that changes a discussion most. Every five minutes, name what is agreed and what is not.",
    notes: tn({
      time: "17 minutes. The centre of the module.",
      how: "The summarise move is the highest-value one and the most neglected. A discussion that is summarised every five minutes cannot circle.",
      mistakes: "Chairs who only open and close. The four moves in the middle are where the work happens.",
      extra: "The PARK move needs the note to be real. “Let's note it” without writing it down is heard as a dismissal.",
      tip: "The OPEN move — time and purpose in the first thirty seconds — prevents most of what goes wrong later.",
      activity: "Six moves: every learner chairs a five-minute discussion and must use all six.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — quiet and dominant
  L.compare({
    sec: SEC.con, title: "The quiet one and the dominant one",
    sub: "Both are the chair's responsibility. Neither should be embarrassed.",
    left: { h: "Bringing in the quiet", items: ["“Mimi, you've worked on this — what do you think?”", "“Has anyone got a different view?”", "“Let's hear from someone who hasn't spoken.”", "→ Name a REASON they are worth hearing.", "→ Never “you're very quiet”."] },
    right: { h: "Managing the dominant", items: ["“That's useful — let me bring Tolosa in.”", "“Hold that thought — Sara, you were about to say something.”", "“I want to make sure we hear everyone.”", "→ Never “you're talking too much”.", "→ Redirect, do not rebuke."] },
    note: "Give the quiet person a reason: “you've worked on this”. Naming why they are worth hearing is what makes it easy for them to speak.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the technique. “What do you think?” puts someone on the spot; “you've worked on this, what do you think?” gives them ground to stand on.",
      mistakes: "“You're very quiet today” embarrasses somebody publicly and rarely produces speech. It is the commonest well-meant error.",
      extra: "The right-hand column redirects rather than rebukes. “That's useful — let me bring Tolosa in” takes the floor without criticising anyone.",
      tip: "Both columns protect the person's face. That is what makes them usable by a chair who has no authority over the room.",
      activity: "Bring them in: run a discussion with two deliberately silent participants and have the chair bring both in.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — when it goes wrong
  L.table({
    sec: SEC.con, title: "Four ways a discussion fails",
    sub: "All four are fixable — by the chair, or by anyone.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16, headSize: 15.5, colW: [3.0, 4.4, 4.933],
      rows: [
        ["The failure", "What it looks like", "The fix"],
        ["Circling", "the same three points, three times", "“We've been round this. What would change anyone's mind?”"],
        ["Drifting", "twenty minutes on a side issue", "“That's a different question — let's park it.”"],
        ["Two people only", "a private argument with an audience", "“Let's hear from someone else on this.”"],
        ["No decision", "the meeting ends and nothing was agreed", "“Before we finish — what did we decide?”"],
      ],
    },
    note: "Any participant can use all four of these, not only the chair. In a badly run meeting, being the person who says them is genuinely valuable.",
    notes: tn({
      time: "16 minutes.",
      how: "The note matters: these are not only chair's tools. A participant who names the circling in a drifting meeting is doing everyone a service.",
      mistakes: "Waiting for the chair to fix it. In most real meetings nobody is formally chairing, and the fixes still work.",
      extra: "Row 1's question — “what would change anyone's mind?” — is the most powerful. It usually reveals that the disagreement is about values, not facts.",
      tip: "Row 4 rescues more meetings than anything else. Two minutes before the end, ask what was decided.",
      activity: "Name the failure: run four short discussions each designed to fail differently, and have learners diagnose each.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — closing
  L.panelSide({
    sec: SEC.con, title: "Closing a discussion", sub: "Name what was decided AND what was not.",
    panelW: 6.8,
    panel: { label: "The four-part close", color: C.green, tint: C.readTint, size: 17, lsm: 1.4,
      text: "1.  WHAT WE AGREED\n     “We've agreed to move to two Saturdays.”\n\n2.  WHAT WE DIDN'T\n     “We haven't settled the staffing.”\n\n3.  WHO DOES WHAT, BY WHEN\n     “Tolosa will cost it by Friday.”\n\n4.  WHEN WE COME BACK TO IT\n     “We'll finish this next Tuesday.”" },
    side: { label: "Why part 2 matters most", color: C.green, size: 16, items: [
      "An unresolved question is fine. An UNDECLARED one is not.",
      "People leave believing different things were decided.",
      "Naming the gap prevents the argument happening again next month.",
      "It also tells everyone the chair was listening.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Part 2 is the one nobody does. Meetings end on what was agreed, and the unresolved items reappear as a surprise weeks later.",
      mistakes: "Closing on a vague note of agreement. Everyone leaves with a different understanding and nobody discovers it until it matters.",
      extra: "This is Level 3 Module 5's minutes structure, delivered aloud in the last two minutes rather than written afterwards.",
      tip: "Two minutes of closing saves an entire repeated meeting. Say that — it is the strongest argument for the discipline.",
      activity: "Close it properly: every learner closes a discussion using all four parts.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "clarify", ipa: "/ˈklærɪfaɪ/", pos: "verb", icon: "FaQuestion",
      meaning: "To make something clearer, or to ask somebody to.",
      example: "Could you clarify what you mean by “soon”? Let me clarify my position.",
      mistake: "Stress on the FIRST syllable: CLAR-i-fy. And you clarify a POINT, not a person.",
      notes: tn({ time: "7 minutes.",
        how: "“Could you clarify…?” is the politest possible way to say you did not understand. It puts the ambiguity in the statement rather than in your comprehension.",
        mistakes: "“Can you clarify me?” — the object is the thing said, not the person.",
        extra: "clarification · to seek clarification · just to clarify… The last is a very useful opener before restating your own point.",
        tip: "“Just to clarify — are you saying X?” is the repeat-back technique from Level 2 Module 7, in professional form.",
        activity: "Clarify it: give ten vague statements and have learners ask a clarifying question about each." }) },

    { word: "digress", ipa: "/daɪˈɡres/", pos: "verb", icon: "FaRandom",
      meaning: "To move away from the main subject.",
      example: "Sorry, I'm digressing. Let's not digress — we've got ten minutes.",
      mistake: "Stress on the SECOND syllable: di-GRESS. The noun is “digression”.",
      notes: tn({ time: "7 minutes.",
        how: "This is the vocabulary for slide 9's drifting failure. Naming it politely — “I think we're digressing” — is far easier than saying somebody is off topic.",
        mistakes: "Learners avoid it and let meetings drift because they have no polite word for it.",
        extra: "“Sorry, I'm digressing” about yourself is a graceful way to cut your own tangent short.",
        tip: "Applying it to yourself first makes it usable about the group later. Model that order.",
        activity: "Cut the tangent: run a discussion with a deliberate digression and have learners name it politely." }) },

    { word: "consensus", ipa: "/kənˈsensəs/", pos: "noun", icon: "FaHandshake",
      meaning: "General agreement, though not necessarily everyone's first choice.",
      example: "Is there a consensus on this? We reached a consensus after an hour.",
      mistake: "Consensus does NOT mean everyone agrees completely. It means everyone can live with it.",
      notes: tn({ time: "8 minutes.",
        how: "The distinction in the mistake line is genuinely useful. Groups waiting for unanimity never decide anything.",
        mistakes: "Spelling and stress: con-SEN-sus, and no “c” in the middle. It is a frequently misspelt word.",
        extra: "“Is there a consensus?” · “We have a rough consensus.” · “There's no consensus yet.” All are useful chair phrases.",
        tip: "“Can everyone live with this?” is the plain-English version and is often more effective than asking for agreement.",
        activity: "Test for consensus: after each discussion, the chair asks whether everyone can live with the outcome." }) },

    { word: "recap", ipa: "/ˈriːkæp/", pos: "verb and noun", icon: "FaUndo",
      meaning: "To go back over the main points briefly.",
      example: "Let me recap where we've got to. Just a quick recap before we finish.",
      mistake: "Stress on the FIRST syllable for both noun and verb. Short for “recapitulate”, which nobody says.",
      notes: tn({ time: "7 minutes.",
        how: "This is the vocabulary for the chair's summarise move — the highest-value move in the module.",
        mistakes: "Recapping everything. A recap is what is agreed and what is not, in two sentences.",
        extra: "“Let me recap where we've got to” is the standard five-minute intervention. Drill it as a chunk.",
        tip: "A participant can recap too. In an unchaired meeting, the person who recaps effectively becomes the chair.",
        activity: "Five-minute recap: during a fifteen-minute discussion, three different learners recap at five-minute intervals." }) },

    { word: "input", ipa: "/ˈɪnpʊt/", pos: "noun", icon: "FaComments",
      meaning: "A contribution to a discussion — ideas, information or opinion.",
      example: "I'd like your input on this. Thanks for your input.",
      mistake: "Uncountable in this sense — “some input”, never “an input” or “inputs” when you mean contributions.",
      notes: tn({ time: "7 minutes.",
        how: "“I'd like your input on this” is the most natural way to bring somebody into a discussion, and it treats them as an expert rather than a spare voice.",
        mistakes: "“Your inputs” is common in some varieties and sounds odd in British English when it means contributions.",
        extra: "have input · give input · ask for input · value somebody's input.",
        tip: "Pair it with slide 8's technique: “Mimi, I'd like your input — you've worked on this.” Reason plus invitation.",
        activity: "Ask for input: every learner invites two different people into a discussion using the word." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Discussion Language 1 of 5" }),
    title: "Getting into a discussion",
    sub: "Five ways in. All of them are normal, none of them is rude.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17, headSize: 16, colW: [4.2, 3.6, 4.533],
      rows: [
        ["Say this", "Force", "When"],
        ["“Can I come in on that?”", "neutral", "the standard entry"],
        ["“Just to add to what Sara said…”", "gentle", "builds on someone — very safe"],
        ["“Sorry — can I just say something?”", "slightly urgent", "when the moment is passing"],
        ["“Can I go back to something?”", "reopening", "a point that was dropped too fast"],
        ["“Actually, on that…”", "quick", "very natural, needs speed"],
      ],
    },
    note: "Row 2 is the safest entry in any meeting. Attaching yourself to somebody else's point makes the interruption feel cooperative rather than competitive.",
    notes: tn({
      time: "15 minutes.",
      how: "Drill these as chunks at speed. The moment to enter lasts about a second, and a phrase that needs constructing arrives too late.",
      mistakes: "Waiting for silence. English discussions have almost no gaps; the entry phrase IS the gap you make.",
      extra: "Row 4 is under-used and valuable. Reopening a point that was passed over too quickly is often the most useful contribution available.",
      tip: "Learners who say nothing in meetings almost always lack row 1, not ideas. Give it to them and the rest follows.",
      activity: "Five entries: run a fast discussion where each learner must enter using all five, one at a time.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Discussion Language 2 of 5" }),
    title: "Holding the floor and handing it over",
    sub: "Two skills. Most people have neither.",
    left: { h: "Holding it", items: ["“There are two things here. First…”", "“Let me just finish that thought.”", "“I'll come to that in a second.”", "→ Announce a number and you get time for both.", "→ Trailing off invites interruption."] },
    right: { h: "Handing it over", items: ["“What do you think, Tolosa?”", "“That's my view — what's yours?”", "“I'd be interested in Mimi's take on this.”", "→ You decide when your turn ends.", "→ And you give somebody else the floor."] },
    note: "Handing over deliberately is what stops you being interrupted. A turn that ends in a question cannot be taken from you — you gave it away.",
    notes: tn({
      time: "15 minutes.",
      how: "The note is the counter-intuitive point: giving the floor away protects your turn better than defending it does.",
      mistakes: "Trailing off — “…so, yeah, that's it, I suppose” — invites somebody to jump in over the end of your point.",
      extra: "“There are two things here” is a genuine device. Once you announce two, the group waits for the second.",
      tip: "Handing over by name is also generous, and generous participants get brought in more often themselves.",
      activity: "Hold and hand: every learner takes a 45-second turn using one holding device and one hand-over.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Discussion Language 3 of 5" }),
    title: "The chair's phrases",
    sub: "Six moves, six phrases. Memorise them.",
    table: {
      color: C.gram, rowH: 0.44, fontSize: 16.5, headSize: 16, colW: [2.6, 5.0, 4.533],
      rows: [
        ["Move", "Say this", "Note"],
        ["OPEN", "“We've got twenty minutes and one decision.”", "time AND purpose"],
        ["BRING IN", "“Mimi — you've worked on this. Your thoughts?”", "give them a reason"],
        ["MANAGE", "“That's useful. Let me bring Tolosa in.”", "redirect, don't rebuke"],
        ["PARK", "“Different question — let's note it and move on.”", "and actually note it"],
        ["RECAP", "“So we agree on X, and we're split on Y.”", "every five minutes"],
        ["CLOSE", "“We decided X. Y is open. Tolosa by Friday.”", "agreed AND not agreed"],
      ],
    },
    note: "The RECAP is the one that transforms a meeting. It is also the one a participant can do without any authority at all.",
    notes: tn({
      time: "16 minutes.",
      how: "Drill all six as chunks. A chair who has to construct these mid-meeting is not chairing, they are thinking.",
      mistakes: "The OPEN without a time. “We've got twenty minutes” changes how everybody uses them.",
      extra: "The PARK phrase must be followed by writing it down. An unwritten park is heard as a refusal.",
      tip: "The RECAP can be used by anyone. In an unchaired meeting, whoever recaps effectively takes the chair.",
      activity: "Six phrases: every learner chairs five minutes and must use all six.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Discussion Language 4 of 5" }),
    title: "Disagreeing in a discussion — softer than in a debate", sub: "You are not trying to win.",
    panelW: 6.9,
    panel: { label: "Discussion register", color: C.gram, tint: C.surf2, size: 16, lsm: 1.34,
      text: "“I'm not sure I see it that way —\n  can you say more?”\n\n“I might be missing something, but…”\n\n“That's interesting. My worry would be…”\n\n“Could I offer a different angle?”\n\n“I'd want to understand X better\n  before I'd be comfortable with that.”" },
    side: { label: "Why softer here", color: C.gram, size: 16, items: [
      "In a debate, disagreement is the job. In a discussion, it is one contribution among many.",
      "“Can you say more?” invites development instead of defence.",
      "“My worry would be…” names a concern without rejecting the idea.",
      "You may be about to change your own mind. Leave room for it.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The first panel phrase does two jobs: it disagrees and it asks for more. That combination is what keeps a discussion productive.",
      mistakes: "Importing debate language. “That rests on a false premise” is correct in a debate and abrasive in a team meeting.",
      extra: "“My worry would be…” is the most useful of the five. It raises an objection as a concern rather than a verdict.",
      tip: "The last side-panel point matters. Softer disagreement leaves you room to change your mind without it looking like a reversal.",
      activity: "Same objection, two registers: give five objections and have learners phrase each for a debate and for a discussion.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Discussion Language 5 of 5" }),
    title: "Put it all together — five habits", sub: "Three for participants, two for chairs.",
    color: C.gram, size: 19, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Enter with a phrase — do not wait for a gap", d: "“Can I come in on that?” The gap is not coming." },
      { t: "Hand over by name when you finish", d: "It protects your turn and brings somebody in." },
      { t: "Recap every five minutes, even if you are not the chair", d: "“So we agree on X, and we're split on Y.”" },
      { t: "Bring in the quiet person with a REASON", d: "“You've worked on this — what do you think?”" },
      { t: "Close by naming what was NOT decided", d: "The undeclared gap is what causes the repeat meeting." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Habit 3 is available to everybody and it is the one that most improves a bad meeting. Emphasise that no authority is required.",
      mistakes: "Habit 5 skipped because time runs out. It takes thirty seconds and saves an hour later.",
      extra: "Habits 1 and 2 together solve the participation problem: enter deliberately, exit deliberately.",
      tip: "Print these five. They apply to every meeting a learner will attend for the rest of their working life.",
      activity: "One habit each: assign each learner one habit to demonstrate in the next discussion.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — getting in", sub: "The gap is not coming.", items: [
      { q: "The discussion is fast and nobody pauses. What do you say?", a: "“Can I come in on that?”", why: "You make the gap. English discussions have almost none, and waiting politely means never speaking." },
      { q: "You want to support what Sara just said and add to it. How?", a: "“Just to add to what Sara said…”", why: "The safest entry in any meeting. Attaching to somebody else makes the interruption cooperative." },
      { q: "Is interrupting rude in English discussions?", a: "Entering with a phrase is not interrupting — it is the mechanism.", why: "Everyone does it. The phrase is what marks it as an entry rather than a cut-off." },
    ] },
    { title: "Guided examples 2 — holding and handing over", sub: "Both ends of your turn.", items: [
      { q: "You have two points and expect to be cut off. What do you say?", a: "“There are two things here. First…”", why: "Announcing a number buys you time for both. The group waits for the second." },
      { q: "How should you end your turn?", a: "By handing over: “What do you think, Tolosa?”", why: "A turn that ends in a question cannot be taken from you — you gave it away deliberately." },
      { q: "Why not just trail off?", a: "Trailing off invites somebody to talk over your ending.", why: "“…so, yeah, that's it” signals you have lost control of your own turn." },
    ] },
    { title: "Guided examples 3 — chairing", sub: "Six moves. Which one?", items: [
      { q: "One person has spoken for four minutes. Which move?", a: "MANAGE: “That's useful — let me bring Tolosa in.”", why: "Redirect, do not rebuke. “You're talking too much” embarrasses somebody and rarely works." },
      { q: "The group has spent ten minutes on a side issue. Which move?", a: "PARK: “That's a different question — let's note it.”", why: "And actually write it down. An unwritten park is heard as a dismissal." },
      { q: "Which move should happen every five minutes?", a: "RECAP: “So we agree on X, and we're split on Y.”", why: "It is the move that most changes a discussion, and anyone can do it." },
    ] },
    { title: "Guided examples 4 — the quiet person", sub: "Give them ground to stand on.", items: [
      { q: "Mimi has said nothing for ten minutes. What do you say?", a: "“Mimi, you've worked on this — what do you think?”", why: "The reason is the technique. It tells her why she is worth hearing and makes speaking easy." },
      { q: "Why not “you're very quiet today”?", a: "It embarrasses her publicly and rarely produces speech.", why: "It comments on her behaviour rather than inviting her expertise." },
      { q: "What if you have no reason to give?", a: "“Has anyone got a different view?” — an open invitation.", why: "It creates space without naming anybody, which lets a quiet person enter on their own terms." },
    ] },
    { title: "Guided examples 5 — closing", sub: "Name what was NOT decided.", items: [
      { q: "The meeting is ending. What four things do you say?", a: "What we agreed · what we didn't · who does what by when · when we return to it.", why: "Two minutes, and it prevents the whole discussion happening again next month." },
      { q: "Why name what was NOT decided?", a: "Otherwise people leave believing different things were settled.", why: "An unresolved question is fine. An undeclared one causes the repeat meeting." },
      { q: "Nothing was decided at all. What do you say?", a: "“We haven't reached a decision. Let's come back to it on Tuesday with the figures.”", why: "Naming the failure honestly is far better than ending on a vague note of agreement." },
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
    title: "A chaired discussion",
    sub: "Five moves in six lines. Watch what Bethlehem does.",
    turns: [
      { who: "BETHLEHEM", text: "We've got twenty minutes and one decision: whether to keep Saturday classes.", side: "l" },
      { who: "TOLOSA", text: "Attendance is 30%. That settles it for me.", side: "r" },
      { who: "BETHLEHEM", text: "Mimi — you've taught those classes. What's your take?", side: "l" },
      { who: "MIMI", text: "The 30% who come are the ones with nowhere else to study.", side: "r" },
      { who: "BETHLEHEM", text: "So we agree the cost is real, and we're split on whether attendance is the right measure.", side: "l" },
      { who: "BETHLEHEM", text: "That's a different question — let's park the timetable and come back to it.", side: "l" },
    ],
    note: "Open with time and purpose · bring in with a reason · recap the split · park the drift. Four moves, ninety seconds.",
    notes: tn({
      time: "16 minutes.",
      how: "Have learners label each of Bethlehem's turns with the move from slide 7. All four are visible and none of them takes more than a sentence.",
      mistakes: "Her recap does not resolve the disagreement — it names it. That is the correct function and learners often expect a chair to decide.",
      extra: "The bring-in gives Mimi a reason: “you've taught those classes”. Without it the question would have put her on the spot.",
      tip: "Note that Bethlehem never gives her own opinion. A chair who argues stops being able to manage the room.",
      activity: "Label the moves: learners mark each turn with its move, then chair five minutes themselves.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Getting in, and being managed",
    sub: "Yonas enters twice. Watch how, and watch how he is handled.",
    turns: [
      { who: "TOLOSA", text: "…and the cost is really the whole issue, because if you look at the staffing, and then the rooms, and…", side: "r" },
      { who: "YONAS", text: "Can I come in on that?", side: "l" },
      { who: "TOLOSA", text: "…sorry, go on.", side: "r" },
      { who: "YONAS", text: "There are two things here. First, the cost is real. Second, we haven't costed the alternative at all.", side: "l" },
      { who: "BETHLEHEM", text: "That's useful. Sara — you were about to say something?", side: "l" },
      { who: "YONAS", text: "Sorry, let me just finish that thought — then I'm done.", side: "l" },
    ],
    note: "“Can I come in on that?” · “There are two things here” · “Let me just finish that thought.” Enter, hold, and close cleanly.",
    notes: tn({
      time: "16 minutes.",
      how: "Yonas's last line is the polite reclaim. He asks for a few more seconds and signals that he will then stop, which almost always works.",
      mistakes: "Learners either surrender the floor immediately or refuse to yield. The middle move — finish the thought, then stop — is what is missing.",
      extra: "Bethlehem's redirect is gentle and does not criticise Yonas. She simply moves the floor.",
      tip: "“Then I'm done” is what makes the reclaim acceptable. It bounds the request.",
      activity: "Enter and reclaim: run a fast discussion where every learner must enter and then reclaim once.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "The phrases that run a discussion",
    sub: "Six chunks. Three for participants, three for the chair.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaDoorOpen", title: "“Can I come in on that?”", desc: "The standard entry. Make the gap." },
      { icon: "FaLayerGroup", title: "“There are two things here.”", desc: "Buys you a longer turn, legitimately." },
      { icon: "FaArrowRight", title: "“What do you think, Tolosa?”", desc: "Hand over by name. Protects your turn." },
      { icon: "FaUserPlus", title: "“You've worked on this — your thoughts?”", desc: "Bring somebody in WITH a reason." },
      { icon: "FaUndo", title: "“So we agree on X, split on Y.”", desc: "The recap. Anyone can do it." },
      { icon: "FaFlagCheckered", title: "“What did we actually decide?”", desc: "Two minutes before the end. Always." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Drill all six as chunks. Phrases 5 and 6 need no authority and rescue most badly-run meetings.",
      mistakes: "Learners assume phrases 4 to 6 are only for chairs. Say clearly that any participant can use all three.",
      extra: "Phrase 6 is the highest-value sentence in the module. Asked two minutes before the end, it prevents the repeat meeting.",
      tip: "Ask which of the six learners already use. Usually phrase 1, sometimes phrase 3, and almost never phrase 5.",
      activity: "Six phrases: run a fifteen-minute discussion in which every learner uses at least four.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the discussion",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "CHAIR", text: "We've got fifteen minutes and one decision to make.", side: "l" },
      { who: "YOU", text: "Can I ______ in on that? There are two ______ here.", side: "r" },
      { who: "CHAIR", text: "Go ahead.", side: "l" },
      { who: "YOU", text: "First, the cost. Second, nobody has ______ the alternative.", side: "r" },
      { who: "CHAIR", text: "Mimi — you've worked on this. Your ______ ?", side: "l" },
      { who: "CHAIR", text: "So we ______ on the cost and we're ______ on the timing.", side: "l" },
      { who: "CHAIR", text: "That's a different question. Let's ______ it and come back.", side: "l" },
    ],
    note: "Use these:  “come”  ·  “things”  ·  “costed”  ·  “thoughts”  ·  “agree”  ·  “split”  ·  “park”",
    notes: tn({
      time: "13 minutes.",
      how: "Have pairs perform it standing, at natural speed. Discussion language delivered slowly from a page is not the skill.",
      answers: "1 come · 2 things · 3 costed · 4 thoughts · 5 agree · 6 split · 7 park",
      mistakes: "Gaps 5 and 6 are the recap. Learners often write “decided” — but a recap names the split as well as the agreement.",
      tip: "Gap 4 is the bring-in with a reason. Praise anyone who notices that “you've worked on this” is doing the real work.",
      activity: "Do it again with a real decision from the class's own workplace.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — both roles", sub: "Four rounds. Swap roles each time.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Enter a fast discussion five times, five different ways", d: "Partner counts and checks the phrases." },
      { t: "Take a 45-second turn: hold it, then hand over by name", d: "Partner checks both ends." },
      { t: "Chair five minutes. Use all six moves.", d: "Partner ticks each move as it appears." },
      { t: "Close a discussion in four parts", d: "Agreed · not agreed · who by when · when we return." },
    ],
    notes: tn({
      time: "16 minutes for all four rounds.",
      how: "Round 3 needs at least three other people. Combine pairs into groups of four for that round.",
      mistakes: "Round 4 stopping after part one. Naming what was NOT decided is the part that gets skipped and the part that matters.",
      tip: "Round 1 is the one silent learners need most. Five forced entries in three minutes breaks the habit of waiting.",
      activity: "Swap chairs: every learner chairs at least once before the module ends.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the entry drill", sub: "Five entries in three minutes. The gap is not coming.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“Can I come in on that?”", d: "The standard. Use it first." },
      { t: "“Just to add to what ___ said…”", d: "The safest. Attach to somebody." },
      { t: "“Sorry — can I just say something?”", d: "When the moment is passing." },
      { t: "“Can I go back to something?”", d: "Reopen a point dropped too fast." },
      { t: "“Actually, on that…”", d: "Quick. Needs speed." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Run a genuinely fast discussion where the others are told not to leave gaps. Learners must make their own openings, which is the whole point.",
      mistakes: "Waiting for a pause. Tell the group explicitly not to pause — the artificial pressure produces the real skill.",
      extra: "Entry 4 is under-used and often the most valuable contribution: reopening something the group passed over too quickly.",
      tip: "This activity changes quiet learners more than anything else in Level 4. Do not shorten it.",
      activity: "Five in three: every learner must enter five times in a three-minute discussion.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — chairing practice", sub: "Five minutes each. All six moves.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "OPEN with time and purpose", d: "“We've got five minutes and one question.”" },
      { t: "BRING IN somebody with a reason", d: "“You've worked on this — your thoughts?”" },
      { t: "MANAGE the dominant speaker", d: "“That's useful — let me bring ___ in.”" },
      { t: "PARK a digression", d: "“Different question — let's note it.”" },
      { t: "RECAP at the halfway point", d: "“So we agree on X, split on Y.”" },
      { t: "CLOSE in four parts", d: "Agreed · not agreed · who by when · when we return." },
    ],
    notes: tn({
      time: "20 minutes in groups of four or five.",
      how: "Plant a dominant speaker and a silent one deliberately, without telling the chair. The moves are only real when the problems are real.",
      mistakes: "Chairs who join the argument. Remind them: the chair manages the room and does not compete in it.",
      extra: "The RECAP is the hardest under pressure. It requires listening while managing, which is genuinely difficult.",
      tip: "Every learner must chair at least once. It is the rarest skill in the module and the most transferable.",
      activity: "Rotate the chair: five-minute rounds until everybody has chaired once.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — entering without sounding aggressive",
    sub: "The same phrase, two completely different effects.",
    left: { h: "Say these with a RISING, light tone", items: ["“Can I come in on that?”", "“Sorry — can I just say something?”", "“Can I go back to something?”", "“That's useful — let me bring Tolosa in.”"] },
    right: { h: "Now say them FLAT and low", items: ["→ sounds like a demand", "→ sounds irritated", "→ sounds like a complaint", "→ sounds like a reprimand"] },
    note: "Entry phrases must RISE. A falling entry sounds like taking the floor by force rather than asking for it.",
    notes: tn({
      time: "14 minutes.",
      how: "Demonstrate both. The flat version of “can I come in on that” is genuinely aggressive and learners are usually surprised.",
      mistakes: "Nervous speakers go flat and low, which is heard as annoyance rather than nerves. The intonation says something they did not mean.",
      extra: "The chair's manage phrase is the most sensitive. Flat delivery turns a redirect into a public rebuke.",
      tip: "This is Level 3 Module 2's intonation work in its most socially consequential form.",
      activity: "Rise or fall: say each phrase both ways and have the class judge how it landed.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — rescue a failing discussion", sub: "Four failures. Fix each one as a participant, not a chair.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "The group is circling the same three points", d: "“We've been round this. What would change anyone's mind?”" },
      { t: "Twenty minutes on a side issue", d: "“I think we're digressing — can we come back to the decision?”" },
      { t: "Two people are arguing and nobody else has spoken", d: "“Can we hear from someone else on this?”" },
      { t: "Two minutes left and nothing decided", d: "“Before we finish — what have we actually decided?”" },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "The key constraint is that learners are NOT the chair. These fixes work without any authority, and knowing that changes how they behave in real meetings.",
      mistakes: "Waiting for permission. In most real meetings nobody is formally chairing and the fixes still work.",
      extra: "Task 1's question is the strongest. It usually reveals that the disagreement is about values rather than facts, which changes the conversation.",
      tip: "Task 4 rescues more meetings than anything else in this course. Thirty seconds, and the meeting produces a result.",
      activity: "Four rescues: stage four failing discussions and have a different learner rescue each.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — chair a real discussion", sub: "The main assessment. Ten minutes, four or five people.",
    color: C.speak, size: 19, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "OPEN with time and purpose in 30 seconds", d: "“We've got ten minutes and one decision.”" },
      { t: "BRING IN at least two people with a reason", d: "Including anyone who has not spoken." },
      { t: "MANAGE the dominant speaker at least once", d: "Redirect, do not rebuke." },
      { t: "PARK one digression — and write it down", d: "“Different question. Noted.”" },
      { t: "RECAP at the five-minute mark", d: "Agreed and split, in one sentence each." },
      { t: "CLOSE in four parts in the last two minutes", d: "Including what was NOT decided." },
    ],
    notes: tn({
      time: "A full lesson. Allow 15 minutes per chair including feedback.",
      how: "Plant a dominant speaker and a silent one in every group without telling the chair. Assess how they handle what actually happens.",
      mistakes: "Step 6 skipped because time runs out. Warn at eight minutes — protecting the close is part of chairing.",
      answers: "SUCCESS CRITERIA: open with time and purpose · two bring-ins with reasons · one redirect without rebuke · one parked digression, written down · a recap naming agreement and split · a four-part close including what was unresolved.",
      tip: "Ask the group afterwards whether they felt heard. That answer assesses the chair better than any checklist.",
      activity: "Group verdict: after each turn, the group says one thing the chair did well and one thing missing.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — an unchaired discussion", sub: "Listen once. Then answer question 6.",
    panelW: 7.2,
    panel: { label: "Audio script — read fast, overlapping", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "TOLOSA:  The cost is the issue, obviously — two staff\nfor six students, and the rooms as well, and…\nDAWIT:  Well I've always said the timetable was\nwrong, going back years, and nobody listened —\nTOLOSA:  — but that's not the point, the point is\nthe money, and if you look at last year —\nDAWIT:  Last year was different though, the whole\nsituation, the staffing, everything —\nTOLOSA:  Exactly, so we can't compare, which is\nwhy I said at the start —\nDAWIT:  Right, but going back to the timetable…" },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. How many people spoke?",
      "2. What is the actual question?",
      "3. Which of the four failures is this?",
      "4. What was decided?",
      "5. What could a THIRD person have said?",
      "6. Could you summarise this in one sentence?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Question 6 is the demonstration. Nobody can summarise it, because nothing was said that could be summarised.",
      mistakes: "Learners assume they missed something because it was fast. They did not — there is nothing there to catch.",
      extra: "This is failure 3 from slide 9: two people arguing with an audience. It is the commonest meeting failure of all.",
      answers: "1 Two. · 2 Never clearly stated. · 3 Two people only, and circling. · 4 Nothing. · 5 “Can we hear from someone else?” or “What are we actually deciding?” · 6 No.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Two voices, eight turns, nothing decided.",
    size: 16.5,
    items: [
      { q: "1 and 3 — what kind of failure?", a: "Two people only — with everyone else silent.", why: "Failure 3 from slide 9, and the commonest of the four in real meetings." },
      { q: "2 — what is the question?", a: "It is never stated.", why: "No OPEN move. Nobody said what was being decided, so nobody could decide it." },
      { q: "5 — what could a third person say?", a: "“Can we hear from someone else?” or “What are we actually deciding?”", why: "Both work without any authority. Any participant could have rescued this." },
      { q: "6 — can you summarise it?", a: "No. Nothing summarisable was said.", why: "That is the test of a failed discussion, and it is the same test the warm-up applied." },
      { q: "What one move would have fixed it?", a: "The OPEN: time and purpose in the first thirty seconds.", why: "Almost everything that went wrong here follows from nobody stating the question." },
    ],
    notes: keyNotes("Compare directly with the warm-up on slide 3. The class produced this same failure themselves, which makes the diagnosis theirs rather than yours."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — the same discussion, chaired", sub: "Same people. Same topic. Listen for the six moves.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "CHAIR:  Ten minutes, one question: do we keep\nSaturday classes?\nTOLOSA:  The cost is the issue — two staff, six\nstudents.\nCHAIR:  Mimi, you've taught them. Your thoughts?\nMIMI:  The six who come have nowhere else.\nDAWIT:  The timetable's always been wrong —\nCHAIR:  Different question. Let's note the\ntimetable and come back to it.\nCHAIR:  So we agree the cost is real, and we're\nsplit on whether attendance is the right measure.\nCHAIR:  We haven't decided. Tolosa will cost the\nmiddle option by Friday. We finish this Tuesday." },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. Which six moves do you hear?",
      "2. How is Mimi brought in?",
      "3. What happens to Dawit's point?",
      "4. What is agreed, and what is not?",
      "5. Was a decision reached?",
      "6. Is that a failure?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Question 6 is the important one. No decision was reached and the discussion still succeeded, because the gap was named and a next step assigned.",
      mistakes: "Learners assume a discussion without a decision failed. An undeclared gap is the failure; a declared one is a result.",
      extra: "Dawit's point is parked rather than dismissed, and the chair says it will be returned to. That is what makes parking acceptable.",
      answers: "1 Open, bring in, park, recap, close — five of six. · 2 With a reason: “you've taught them”. · 3 Parked, and noted. · 4 Cost agreed; measure disputed. · 5 No. · 6 No — the gap was named and an action assigned.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "No decision. And it worked.",
    size: 16.5,
    items: [
      { q: "1 — the moves", a: "Open · bring in · park · recap · close.", why: "Five moves in nine lines. Each takes one sentence and none of them slows the discussion down." },
      { q: "2 — bringing Mimi in", a: "“You've taught them” — a reason before the question.", why: "It gives her ground to stand on. “What do you think?” alone puts somebody on the spot." },
      { q: "3 — Dawit's point", a: "Parked and noted, with a promise to return.", why: "Parking without the note or the promise is heard as dismissal, which is worse than ignoring it." },
      { q: "5 and 6 — no decision", a: "None reached — and that is not a failure.", why: "The gap was named, an action was assigned with a date, and a return was scheduled." },
      { q: "What made this work?", a: "The open and the close. Purpose at the start, honesty at the end.", why: "Compare with slide 36: same people, same topic, and the difference is entirely the chairing." },
    ],
    notes: keyNotes("Play both scripts back to back at the end of the lesson. Same people, same topic, and the contrast makes the case for chairing better than any argument."),
  });

  L.grid({
    sec: SEC.lis, title: "Listening while chairing", sub: "The hardest listening task in this course.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaBalanceScale", title: "Track agreement and disagreement", desc: "Not the content — the SHAPE. What has the group settled, and where is it split? That is what you will recap." },
      { icon: "FaUserClock", title: "Track who has spoken", desc: "Literally count. You will not remember otherwise, and the quiet person is invisible until you look." },
      { icon: "FaRandom", title: "Notice drift early", desc: "The first sentence of a digression is easy to park. Ten minutes in, it feels rude to stop." },
      { icon: "FaClock", title: "Watch the clock, not the argument", desc: "The chair is the only person responsible for finishing. Nobody else is watching the time." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Tactic 1 is what makes the recap possible. A chair listening for content cannot recap; a chair listening for shape can do it in one sentence.",
      mistakes: "Chairs who get drawn into the argument stop tracking all four of these. That is why a chair should not also advocate.",
      tip: "Tactic 2 is literal. Make marks on paper. Memory reliably over-counts the loud and under-counts the quiet.",
      activity: "Chair's notepad: every chair keeps a tally of speakers and a two-column agreed/split list.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: SEC.rea, title: "Reading 1 — a discussion transcript", sub: "Mark every move you can find.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 14.5, lsm: 1.22,
      text: "CHAIR:  Fifteen minutes. One question: do we\nmove the start date to January?\nSARA:  Yes. Dropout is 40% in September.\nYONAS:  Can I come in? There are two things\nhere. The dropout is real. But January clashes\nwith marking.\nCHAIR:  Chaltu — you did the rota. Your input?\nCHALTU:  Only the first two weeks. We'd start\nin the third.\nYONAS:  I hadn't realised. I'll concede that.\nCHAIR:  So we agree on January, and we're split\non whether to tell parents first.\nCHAIR:  Date decided. Parent question open —\nSara drafts options by Friday. Finish Tuesday.",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Find the OPEN. What two things does it give?",
      "Find Yonas's entry and his holding device.",
      "How is Chaltu brought in?",
      "Find the recap. What does it name?",
      "Find the four parts of the close.",
      "Was a decision reached?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "This transcript contains every move in the module. Have learners annotate it completely before discussing.",
      mistakes: "Yonas's concession is from Module 2 and it speeds the discussion up enormously. Point out that it costs him nothing.",
      extra: "The close names one decision AND one open question with an owner and a date. That is the full four-part structure.",
      answers: "Open: time and purpose. Yonas: “Can I come in on that?” plus “there are two things here”. Chaltu: brought in with a reason. Recap: agreement on January, split on parents. Close: decided, open, who by when, when we return. Yes — partly.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Moves and effects.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "What two things does the chair's opening give the group?",
      "What does “there are two things here” do for Yonas?",
      "Why does the chair say “you did the marking rota”?",
      "What does Yonas's concession do to the discussion?",
      "What is left unresolved, and what happens to it?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Question 4 is the important one. The concession ends a disagreement in one line and lets the group move on — that is its practical value.",
      mistakes: "Learners see the concession as Yonas losing. Ask what it cost him: nothing, and it saved the group five minutes.",
      tip: "Question 5 shows the four-part close working: an open question with an owner, a date and a return.",
      answers: "1 A time limit and a single clear question. · 2 It buys him a longer turn for both points. · 3 It gives Chaltu a reason why her view matters. · 4 It ends the disagreement immediately and moves the group on. · 5 The parent question — Sara drafts two options by Friday, finished Tuesday.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Every move, doing visible work.",
    size: 16.5,
    items: [
      { q: "1 — the opening", a: "A time limit and one clear question.", why: "Both change behaviour immediately. People argue differently when they know they have fifteen minutes." },
      { q: "2 — “there are two things here”", a: "It buys Yonas a longer turn, legitimately.", why: "Once he announces two points, the group waits for the second rather than interrupting after the first." },
      { q: "3 — “you did the marking rota”", a: "It gives Chaltu a reason why her view matters.", why: "Without it the question puts her on the spot. With it, she has expertise to offer." },
      { q: "4 — the concession", a: "It ends the disagreement in one line.", why: "Yonas loses nothing and the group gains five minutes. That is why conceding is efficient, not weak." },
      { q: "5 — the unresolved question", a: "Sara drafts two options by Friday; the group returns on Tuesday.", why: "Owner, date, return. An open question handled this way is a result, not a failure." },
    ],
    notes: keyNotes("Item 4 connects Module 2 to this one. Conceding in a debate protects your case; conceding in a discussion saves the group's time."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a chair doing it badly", sub: "Find the six mistakes.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "CHAIR:  Right, shall we start? So, Saturday classes.\nTOLOSA:  The cost is the issue.\nCHAIR:  I agree, it's far too expensive. I've said so\nfor months.\nDAWIT:  What about the timetable?\nCHAIR:  Well, that's a whole other thing, but yes,\nthe timetable is a disaster, isn't it, and if you\nlook at last year…\nMIMI:  ( says nothing for eleven minutes )\nCHAIR:  Anyway, we're out of time. Good\ndiscussion, everyone. Same time next month.",
      },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "What is missing from the opening?",
      "What does the chair do in turn 3?",
      "What happens to Dawit's digression?",
      "What happens to Mimi?",
      "What is wrong with the close?",
      "What was decided?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Turn 3 is the fatal error: the chair takes a side. Once that happens they can no longer manage the room, and everything after it follows.",
      mistakes: "Learners spot the missing close first. Push them to the third turn — that is where the chairing actually ended.",
      extra: "The chair does not park Dawit's digression; they join it and extend it. That is worse than ignoring it.",
      answers: "No time, no question. Takes a side. The digression is joined and extended. Mimi is never brought in. The close names nothing and no owner. Nothing was decided.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Six failures, one root cause.",
    size: 16.5,
    items: [
      { q: "1 — the opening", a: "No time limit and no question. Just a topic.", why: "“So, Saturday classes” gives the group nothing to decide and no reason to finish." },
      { q: "2 — turn 3", a: "The chair takes a side.", why: "The fatal error. A chair who advocates can no longer manage the room, and everything after follows from this." },
      { q: "3 — the digression", a: "The chair joins it and extends it.", why: "Worse than ignoring it. The one person who could park it instead made it longer." },
      { q: "4 — Mimi", a: "Silent for eleven minutes and never brought in.", why: "Nobody was tracking who had spoken, which is tactic 2 from slide 40." },
      { q: "Vocabulary check", a: "clarify · digress · consensus · recap · input", why: "This chair never clarifies, never names the digression, never recaps and never asks for anyone's input." },
    ],
    notes: keyNotes("The vocabulary point is the neatest summary: five words, none of them used, and the meeting failed in exactly the five ways they describe."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — write the move", sub: "Six situations. Write what the chair says.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write one sentence for each situation.",
    items: [
      "1.  Opening a fifteen-minute meeting with one decision to make.",
      "2.  Mimi has said nothing and worked on the project.",
      "3.  Tolosa has spoken for four minutes without stopping.",
      "4.  The group has drifted onto the timetable.",
      "5.  Five minutes in — you need to recap.",
      "6.  Two minutes left and nothing is settled.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Take several versions of each and compare. Item 3 is the one where learners produce something rebuking rather than redirecting.",
      answers: "MODELS: 1 “We've got fifteen minutes and one decision.” · 2 “Mimi, you've worked on this — your thoughts?” · 3 “That's useful — let me bring Sara in.” · 4 “Different question. Let's note the timetable and come back.” · 5 “So we agree on X, and we're split on Y.” · 6 “Before we finish — what have we actually decided?”",
      mistakes: "Item 3 written as “Tolosa, you've said enough”. Redirect, never rebuke.",
      tip: "Item 6 is the highest-value sentence in the module and any participant can say it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — rescue it as a participant", sub: "You are not the chair. Fix it anyway.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write what YOU would say. You have no authority.",
    items: [
      "1.  The group has made the same three points three times.",
      "2.  Two people are arguing and nobody else has spoken.",
      "3.  Twenty minutes on a side issue.",
      "4.  You did not understand what somebody just proposed.",
      "5.  The meeting is ending and nothing has been agreed.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "The constraint matters: no authority. All five fixes work anyway, and learners are usually surprised by that.",
      answers: "MODELS: 1 “We've been round this — what would change anyone's mind?” · 2 “Can we hear from someone else on this?” · 3 “I think we're digressing — can we come back to the decision?” · 4 “Could you clarify what you mean by that?” · 5 “Before we finish — what have we decided?”",
      mistakes: "Item 3 phrased as an accusation. “I think we're digressing” includes the speaker, which is what makes it acceptable.",
      tip: "Item 1's question is the strongest of the five. It usually reveals the disagreement is about values, not facts.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — plan and minute a discussion", sub: "Before and after. Both matter.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Take a real decision from your work or community.",
    items: [
      "1.  BEFORE — write your opening: time, purpose, one question.",
      "2.  Write the names of who must be brought in, and why each.",
      "3.  Write two digressions you expect, and how you will park them.",
      "4.  AFTER — write the recap you would give at the halfway point.",
      "5.  Write the four-part close: agreed · not agreed · who by when · return.",
      "6.  Check: does the close name something that was NOT decided?",
    ],
    notes: tn({
      time: "22 minutes.",
      how: "Steps 1 to 3 are preparation and they are what makes chairing look effortless. A chair who has predicted the digressions parks them in one sentence.",
      answers: "MODEL: see slide 41. Every element appears there in a real transcript.",
      mistakes: "Step 6 is the check that matters. A close naming only agreements is incomplete.",
      tip: "Step 2 is the highest-value preparation. Deciding in advance who must be heard, and why, prevents the silent-participant failure entirely.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — how it is marked", sub: "25 marks. Preparation and delivery.",
    size: 16.5,
    items: [
      { q: "The opening — 5 marks", a: "A time limit AND one clear question.", why: "A topic is not a question. “Saturday classes” gives the group nothing to decide." },
      { q: "Bring-ins planned — 5 marks", a: "Names, each with a REASON.", why: "The reason is the technique. Without it the invitation puts somebody on the spot." },
      { q: "Digressions anticipated — 4 marks", a: "Two predicted, each with a parking phrase.", why: "A predicted digression is parked in one sentence. An unpredicted one takes ten minutes." },
      { q: "The recap — 5 marks", a: "Names what is agreed AND what is split.", why: "A recap of agreement only hides the disagreement, which then reappears at the end." },
      { q: "The four-part close — 6 marks", a: "Agreed · not agreed · who by when · when we return.", why: "The second part carries the most weight. An undeclared gap causes the repeat meeting." },
    ],
    notes: keyNotes("Give this rubric before the task. The close carries six marks and the “not agreed” element is what most learners omit."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your discussion checklist", sub: "Six checks. Three as participant, three as chair.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Did I enter with a phrase, not wait for a gap?", d: "“Can I come in on that?”" },
      { t: "Did I hand over by name when I finished?", d: "It protects your turn and brings somebody in." },
      { t: "Did I recap once, even though I wasn't chairing?", d: "“So we agree on X, split on Y.”" },
      { t: "Did I open with a time AND a question?", d: "A topic is not a question." },
      { t: "Did I bring somebody in with a REASON?", d: "“You've worked on this…”" },
      { t: "Did I close by naming what was NOT decided?", d: "The undeclared gap causes the repeat meeting." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Run this after every discussion in the module. Six questions, ninety seconds, and it makes the habits conscious.",
      tip: "Print it. Checks 1 to 3 work in any meeting, whether or not there is a chair.",
      activity: "Six checks: learners self-assess after every discussion for the rest of Level 4.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. In an English discussion you should:", opts: "a) wait for a gap     b) enter with a phrase     c) speak only if asked" },
      { q: "2. To bring in a quiet person you should:", opts: "a) say “you're very quiet”     b) give them a reason     c) ignore it" },
      { q: "3. The chair's most valuable move is:", opts: "a) opening     b) recapping every five minutes     c) closing" },
      { q: "4. A discussion with no decision is:", opts: "a) always a failure     b) fine if the gap is named     c) the chair's fault" },
      { q: "5. Should a chair give their own opinion?", opts: "a) yes, first     b) no — they manage the room     c) only at the end" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 b",
      tip: "Question 5 is the error in slide 44. A chair who advocates cannot manage.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the phrase", sub: "Discussion chunks.",
    color: C.green, instruction: "Write the missing word.", size: 18,
    items: [
      "1.  Can I ______ in on that?",
      "2.  There are two ______ here. First…",
      "3.  Mimi — you've worked on this. Your ______ ?",
      "4.  So we ______ on the cost and we're ______ on the timing.",
      "5.  That's a different question — let's ______ it.",
      "6.  Before we finish — what did we actually ______ ?",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Take the answers orally at speed. In a live discussion these must be available in under a second.",
      answers: "1 come · 2 things · 3 thoughts (or input) · 4 agree / split · 5 park · 6 decide",
      mistakes: "Item 4 needs both halves. A recap that names only the agreement is incomplete.",
      tip: "Item 6 is the sentence that rescues most real meetings. Drill it twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Moves, failures and fixes.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the MOVE to its PHRASE", opts: "1. OPEN     2. BRING IN     3. PARK     4. RECAP" },
      { q: "a) “Different question — let's note it.”     b) “Ten minutes, one decision.”", opts: "c) “So we agree on X, split on Y.”     d) “You've worked on this — your thoughts?”" },
      { q: "Part 2 — match the FAILURE to its FIX", opts: "1. circling     2. drifting     3. two people only          a) “Can we hear from someone else?”     b) “What would change anyone's mind?”     c) “Let's park that.”" },
      { q: "Part 3 — match the ROLE to the BEHAVIOUR", opts: "1. debate     2. discussion          a) concede freely, listening contributes     b) defend the position, concede as little as possible" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–b, 2–d, 3–a, 4–c.  ·  Part 2: 1–b, 2–c, 3–a.  ·  Part 3: 1–b, 2–a.",
      tip: "Part 3 is the module's frame. Learners who get it can tell which room they are in.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — bring them in", sub: "Give each person a reason.",
    color: C.green, instruction: "Write a bring-in sentence for each person.", size: 17,
    items: [
      "1.  Mimi taught the Saturday classes for two years.",
      "2.  Tolosa manages the budget.",
      "3.  Dawit was a student on this course himself.",
      "4.  Chaltu wrote the report everybody is quoting.",
      "5.  Sara has said nothing and you know nothing about her work.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Item 5 is the hard one: no reason is available, so the open invitation — “has anyone got a different view?” — is the right tool.",
      answers: "MODELS: 1 “Mimi, you taught these for two years — what's your view?” · 2 “Tolosa, you manage the budget — is that figure right?” · 3 “Dawit, you were a student here — how did it feel?” · 4 “Chaltu, it's your report — have we understood it?” · 5 “Has anyone got a different view?”",
      mistakes: "Item 5 answered with “Sara, you're very quiet”. That is the error from slide 8.",
      tip: "The pattern is: reason, then question. Never question alone.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — diagnose and fix", sub: "Which failure, and what do you say?",
    color: C.green, instruction: "Name the failure, then write the fix.", size: 17,
    items: [
      "1.  Forty minutes in, the same two objections keep returning.",
      "2.  The group is now discussing the car park.",
      "3.  Tolosa and Dawit have spoken; three others have not.",
      "4.  The chair says “good discussion” and ends the meeting.",
      "5.  Somebody proposed something and you did not follow it.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Item 4 is the one to dwell on. The meeting is over and the fix must be delivered in the last thirty seconds by a participant.",
      answers: "1 circling → “What would change anyone's mind?” · 2 drifting → “I think we're digressing — can we come back?” · 3 two people only → “Can we hear from someone else?” · 4 no decision → “Before we go — what did we decide?” · 5 not a failure → “Could you clarify what you mean?”",
      mistakes: "Item 5 is not a group failure. It is an individual not understanding, and clarifying is the fix.",
      tip: "All five fixes can be said by anybody. Say that again — it is the module's most transferable point.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  In an English discussion you should wait for a pause before speaking.",
      "2.  A chair should give their opinion first to start things off.",
      "3.  Consensus means everybody agrees completely.",
      "4.  A discussion that reaches no decision has failed.",
      "5.  Only the chair can recap.",
      "6.  Handing over by name protects your own turn.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — enter with a phrase; the gap is not coming · 2 F — a chair who advocates cannot manage · 3 F — it means everyone can live with it · 4 F — fine if the gap is named with an owner and a date · 5 F — anyone can · 6 T",
      tip: "Item 5 is the one to emphasise. It is the module's most useful piece of permission.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own meetings.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  In your meetings, which of the four failures happens most?",
      "2.  Do you enter discussions, or wait? Be honest.",
      "3.  Who is the quiet person in your team, and what could you say to bring them in?",
      "4.  When did a meeting you attended last end without a decision being named?",
      "5.  Which of the six chair moves will you use this week?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 3 is the actionable one. Have learners write the actual sentence they would use, with the actual reason.",
      answers: "No fixed answers. Question 3 must contain a real reason, not just an invitation.",
      mistakes: "Question 2 answered optimistically. Push for honesty — most learners wait, and naming that is the first step.",
      tip: "Question 5 should name exactly one move. Collect the answers and ask about them next lesson.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "In groups of four. Rotate the chair.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. The group checks each move as it appears.", size: 19,
    items: [
      "1.  Enter a fast discussion five times, five different phrases.",
      "2.  Take a 45-second turn: hold it, then hand over by name.",
      "3.  Chair five minutes using all six moves.",
      "4.  Close a discussion in four parts, including what was NOT decided.",
    ],
    notes: tn({
      time: "18 minutes in groups of four.",
      how: "Round 3 needs a planted dominant speaker and a planted silent one. Do not tell the chair.",
      answers: "SUCCESS CRITERIA: 1 five entries, five phrases · 2 one holding device and one named hand-over · 3 all six moves visible · 4 all four parts, with the unresolved item named.",
      tip: "Round 4 is where learners stop after part one. The group should refuse to accept an incomplete close.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full meeting", sub: "Fifteen minutes. Real decision. Rotating chair.",
    color: C.green, instruction: "In groups of five. One chairs, four participate, then swap.", size: 17,
    items: [
      { q: "1. The chair opens with time and one question.", opts: "Thirty seconds." },
      { q: "2. Two participants are told secretly to dominate or stay silent.", opts: "The chair does not know which." },
      { q: "3. One participant is told to introduce a digression at minute six.", opts: "The chair must park it." },
      { q: "4. The chair recaps at the halfway point and closes in four parts.", opts: "Including what was NOT decided." },
      { q: "5. The group scores the chair on all six moves.", opts: "And says whether they felt heard." },
    ],
    notes: tn({
      time: "A full lesson in groups of five.",
      how: "The planted behaviours in steps 2 and 3 are what make this real. A chair managing an easy room learns nothing.",
      answers: "Scored with the six checks from slide 50 and the six moves from slide 7.",
      tip: "Step 5's second question — did you feel heard? — is the best single measure of a chair and it takes ten seconds.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why should a chair not give their own opinion?", opts: "What do they lose?" },
      { q: "2. Is a discussion with no decision a failure?", opts: "When is it, and when is it not?" },
      { q: "3. Why does “you're very quiet” fail?", opts: "What does it ask the person to do?" },
      { q: "4. When should a discussion become a debate?", opts: "Give a real example." },
    ],
    notes: tn({
      time: "14 minutes. Discussion, not writing.",
      how: "Question 4 is the sophisticated one. Some questions genuinely have two sides and pretending otherwise wastes everybody's time.",
      answers: "1 They lose the ability to manage: once they have a side, every intervention looks partisan. 2 It fails only if the gap is undeclared. With an owner, a date and a return, it is a result. 3 It comments on their behaviour and asks them to justify it, rather than inviting their expertise. 4 When a real choice must be made between two incompatible options — then arguing both sides properly is more useful than seeking a consensus that does not exist.",
      tip: "Question 4's answer protects learners from forcing agreement where there genuinely is none.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Debate and discussion", items: [
      { q: "1. Name two differences between a debate and a discussion.", opts: "Two answers." },
      { q: "2. In a discussion, what is the goal?", opts: "One sentence." },
      { q: "3. Is listening a contribution?", opts: "Yes or no, and why." },
      { q: "4. What happens if you use debate behaviour in a discussion?", opts: "One sentence." },
    ] },
    { part: "Part 2 · Turn-taking", items: [
      { q: "5. Name three ways to enter a discussion.", opts: "Three phrases." },
      { q: "6. Why can't you wait for a gap?", opts: "One sentence." },
      { q: "7. What does “There are two things here” do?", opts: "One sentence." },
      { q: "8. Why hand over by name?", opts: "One sentence." },
    ] },
    { part: "Part 3 · Chairing", items: [
      { q: "9. Name the six chair moves.", opts: "Six answers." },
      { q: "10. What must the OPEN contain?", opts: "Two things." },
      { q: "11. Which move is most valuable, and how often?", opts: "One sentence." },
      { q: "12. Should a chair give their opinion?", opts: "Yes or no, and why." },
    ] },
    { part: "Part 4 · People and failures", items: [
      { q: "13. How do you bring in a quiet person?", opts: "One sentence." },
      { q: "14. Why not say “you're very quiet”?", opts: "One sentence." },
      { q: "15. Name the four ways a discussion fails.", opts: "Four answers." },
      { q: "16. Can a participant fix them, or only the chair?", opts: "One sentence." },
    ] },
    { part: "Part 5 · Closing", items: [
      { q: "17. Name the four parts of a close.", opts: "Four answers." },
      { q: "18. Which part is most often missed?", opts: "One answer." },
      { q: "19. Is a discussion without a decision a failure?", opts: "One sentence." },
      { q: "20. SPEAKING: chair a ten-minute discussion using all six moves.", opts: "Assessed live." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 4 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is the chairing task." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is worth as much as the other nineteen together. Plant a dominant speaker and a silent one without telling the chair.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — two differences", a: "A debate has sides and a winner; a discussion has many voices and no winner.", why: "Which changes everything: conceding is efficient rather than costly." },
      { q: "Q2 — the goal", a: "To find the best answer together.", why: "Not to win. That is why listening and changing your mind both count as contributions." },
      { q: "Q3 — is listening a contribution?", a: "Yes — a good question or an accurate recap is worth more than another opinion.", why: "In a discussion the group's thinking is the product, not any one person's position." },
      { q: "Q4 — debate behaviour in a discussion", a: "It makes you exhausting to work with.", why: "Defending a fixed position in a room trying to find an answer slows everybody down." } ],
    [ { q: "Q5 — three entries", a: "“Can I come in on that?” · “Just to add to what X said…” · “Sorry, can I just say something?”", why: "All three are normal and none is rude. The phrase is what marks it as an entry." },
      { q: "Q6 — why not wait", a: "English discussions have almost no gaps.", why: "Waiting politely is why competent speakers say nothing in meetings for years." },
      { q: "Q7 — “There are two things here”", a: "It buys you a longer turn legitimately.", why: "Once you announce two points, the group waits for the second." },
      { q: "Q8 — handing over by name", a: "It protects your turn and brings somebody in.", why: "A turn that ends in a question cannot be taken from you — you gave it away." } ],
    [ { q: "Q9 — the six moves", a: "Open · bring in · manage · park · recap · close.", why: "Each takes one sentence. Chairs who only open and close miss where the work happens." },
      { q: "Q10 — the OPEN", a: "A time limit AND one clear question.", why: "A topic is not a question. Both change how the group behaves immediately." },
      { q: "Q11 — the most valuable move", a: "The recap, every five minutes.", why: "A discussion that is recapped regularly cannot circle, and anyone can do it." },
      { q: "Q12 — should a chair give an opinion?", a: "No — once they take a side they can no longer manage the room.", why: "Every later intervention then looks partisan, however fair it is." } ],
    [ { q: "Q13 — bringing in a quiet person", a: "Give them a reason: “You've worked on this — what do you think?”", why: "The reason gives them ground to stand on. The question alone puts them on the spot." },
      { q: "Q14 — why not “you're very quiet”", a: "It comments on their behaviour instead of inviting their expertise.", why: "It embarrasses somebody publicly and rarely produces speech." },
      { q: "Q15 — the four failures", a: "Circling · drifting · two people only · no decision.", why: "All four are fixable in one sentence, and all four are common." },
      { q: "Q16 — who can fix them?", a: "Anyone. No authority is needed.", why: "In most real meetings nobody is formally chairing, and the fixes work regardless." } ],
    [ { q: "Q17 — the four parts of a close", a: "What we agreed · what we didn't · who does what by when · when we return.", why: "Two minutes, and it prevents the whole discussion happening again next month." },
      { q: "Q18 — the missed part", a: "What was NOT decided.", why: "People leave believing different things were settled, and nobody discovers it until it matters." },
      { q: "Q19 — no decision", a: "Not a failure — if the gap is named with an owner and a date.", why: "An unresolved question is fine. An undeclared one causes the repeat meeting." },
      { q: "Q20 — the chairing task", a: "Assessed on all six moves and whether the group felt heard", why: "The second measure is the better one, and it takes ten seconds to collect." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q11, Q16 and Q18 are the diagnostic block: the recap, the fact that anyone can fix a meeting, and naming what was not decided. All three transfer directly to real work."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. In real meetings.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Enter a real discussion twice using a phrase", d: "Do not wait for a gap. Note what happened." },
      { t: "Hand over by name once", d: "“What do you think, ___?” Notice the effect." },
      { t: "Recap once in a meeting you are not chairing", d: "“So we agree on X, split on Y.”" },
      { t: "Bring one quiet person in, with a reason", d: "Write down what you said and what they said." },
      { t: "Ask “what did we decide?” before a meeting ends", d: "Note whether anybody could answer." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "These are real tasks in real meetings. Friday's is the most revealing — often nobody can answer, which proves the point.",
      tip: "Wednesday's task is the one that changes how learners are seen at work. Recapping accurately marks somebody as useful very quickly.",
      activity: "Report back: three learners describe what happened on Friday.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "A written chair plan for a real meeting", d: "Opening, bring-ins with reasons, two expected digressions." },
      { t: "A written four-part close for that meeting", d: "Including something that will NOT be decided." },
      { t: "Record yourself chairing five minutes", d: "All six moves. Note where the recap fell." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 1 is the preparation that makes chairing look effortless. Predicting the digressions is what lets you park them in one sentence.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "If any learner chairs a real meeting this week, prioritise their plan and give detailed feedback.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your chairing will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaPlay", title: "Open and bring in — 8 marks", desc: "Time and question in 30 seconds (3) · two bring-ins with reasons (5)." },
      { icon: "FaBalanceScale", title: "Manage and park — 7 marks", desc: "Redirect without rebuke (4) · one digression parked and noted (3)." },
      { icon: "FaUndo", title: "Recap and close — 10 marks", desc: "Recap names agreement AND split (4) · four-part close (4) · unresolved item named (2)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → chair five minutes weekly with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "The recap and close carry ten of twenty-five marks. That is deliberate — they are the two moves that most change a meeting.",
      tip: "Give the mark privately and add the group's answer to “did you feel heard?”. That comment matters more than the number.",
      mistakes: "Do not mark the chair on the quality of the decision. They are assessed on running the room, not on its conclusions.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaBalanceScale", title: "Debate vs discussion", desc: "Different games. Know which room you are in." },
      { icon: "FaDoorOpen", title: "Getting in", desc: "Five phrases. The gap is not coming — make one." },
      { icon: "FaExchangeAlt", title: "Holding and handing over", desc: "“Two things here.” Then hand over by name." },
      { icon: "FaUsers", title: "The six chair moves", desc: "Open · bring in · manage · park · recap · close." },
      { icon: "FaTools", title: "Four failures, four fixes", desc: "Circling · drifting · two people · no decision." },
      { icon: "FaFlagCheckered", title: "The four-part close", desc: "Agreed · NOT agreed · who by when · when we return." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3. Run the same three-minute discussion, now with a chair, and ask task 3 again. The difference is the module.",
      tip: "Ask who spoke this time who did not speak in lesson one. That change is the most meaningful result.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The discussion toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaDoorOpen", title: "Getting in", desc: "“Can I come in on that?”\n“Just to add to what ___ said…”\n“Sorry — can I just say something?”\n“Can I go back to something?”\nThe gap is not coming. Make one." },
      { icon: "FaUsers", title: "The six chair moves", desc: "OPEN — time AND question\nBRING IN — with a reason\nMANAGE — redirect, don't rebuke\nPARK — and write it down\nRECAP — every 5 min.   CLOSE — 4 parts" },
      { icon: "FaTools", title: "Four fixes — anyone can use them", desc: "Circling → “What would change your mind?”\nDrifting → “I think we're digressing.”\nTwo people → “Can we hear from someone else?”\nNo decision → “What did we decide?”" },
      { icon: "FaFlagCheckered", title: "The close", desc: "1  What we AGREED\n2  What we did NOT agree\n3  Who does what, by when\n4  When we come back to it" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The third box needs no authority and works in any meeting.",
      tip: "Print the second and fourth boxes on one card. They are the whole chairing role.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now run a room — and speak in one that nobody is running.",
    sub: "Six moves as a chair, five ways in as a participant, and four fixes that need no authority at all.\nChairing well is a career skill, and almost nobody is ever taught it.",
    chips: ["NEXT — Module 5", "Public Speaking & Storytelling", "One voice, a room, and no interruptions to hide behind"],
    notes: tn({
      time: "5 minutes.",
      how: "Name what is rare here. Most people attend meetings their whole careers without ever being taught how to enter one or how to run one.",
      tip: "Preview Module 5: public speaking removes the other voices. There is nobody to hand over to and nothing to react to, which is a different kind of difficulty.",
      activity: "Ask every learner to name one meeting this week where they will use one of the six moves.",
    }),
  });
};
