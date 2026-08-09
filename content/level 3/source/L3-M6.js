"use strict";
/* LEVEL 3 · MODULE 6 — Presentations   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 3", levelNo: LV.no, levelName: "Intermediate\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Presentations",
    sub: "Standing up in front of people and being clear. The structure, the signposts, the delivery — and the part everyone fears, which is the questions at the end.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5 MIN", v: "FINAL TALK" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Say at the start that everyone will give a five-minute presentation at the end of this module. Knowing that from lesson one changes how learners engage with everything in between.",
      tip: "Fear of presenting is almost never about English. It is about standing up. Separate the two early — the language part of this module is genuinely small.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. The fifth is the one people dread.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Structure a talk so people can follow it", d: "Three parts. Say what you will say, say it, say what you said." },
      { t: "Signpost — tell people where you are", d: "“First…”  “Moving on…”  “To sum up…” Ten phrases carry a whole talk." },
      { t: "Open and close strongly", d: "The first and last thirty seconds are what people remember." },
      { t: "Describe numbers and trends clearly", d: "“Sales rose sharply.” “There was a slight fall.”" },
      { t: "Handle questions — including ones you cannot answer", d: "The part everyone fears, and the part with the clearest technique." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 5 has the most reliable technique in the module. There are exactly four kinds of difficult question and a phrase for each.",
      tip: "Objective 2 is what makes a mediocre talk feel professional. Signposting costs nothing and changes everything.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what makes a talk bad?", sub: "Think of a presentation you have sat through.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaFrown", title: "1 · The worst talk", desc: "Think of a boring or confusing presentation. What exactly made it bad? Be specific." },
      { icon: "FaSmile", title: "2 · The best talk", desc: "Now think of a good one. What did the speaker do differently?" },
      { icon: "FaHeartbeat", title: "3 · What scares you?", desc: "What is the hardest part for you — starting? Being watched? The questions?" },
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Task 1 almost always produces “I couldn't follow it” and “too many slides”. Both are structure problems, not language problems — say so.",
      mistakes: "Correct nothing. Write the answers on the board; they become the criteria for the final presentation.",
      tip: "Task 3 answers usually name the questions at the end. Point forward to slide 10 and say the fear is well-founded and completely solvable.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "A good presentation is not good English. It is a clear structure, said simply.",
    sub: "The audience cannot go back and re-read. Everything they understand, they must understand the first time —\nwhich is why structure and signposting matter more than vocabulary.",
    chips: ["Structure over vocabulary", "Simple sentences", "Tell them where you are"],
    notes: tn({
      time: "7 minutes.",
      how: "The middle line is the key insight: a listener has no back button. That single constraint explains every technique in this module.",
      mistakes: "Learners try to use impressive vocabulary and produce sentences they cannot control. Short sentences delivered confidently beat long ones delivered badly.",
      extra: "The best presenters in any language use simpler sentences than they would in writing. That is a professional choice, not a limitation.",
      tip: "This connects to Module 1: a presentation is fluency work, not accuracy work. Nobody is marking your grammar while you stand up.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — structure
  L.panelSide({
    sec: SEC.con, title: "The three-part structure", sub: "Say it three times. That is not repetition — it is how listening works.",
    panelW: 6.8,
    panel: { label: "The shape of every good talk", color: C.green, tint: C.readTint, size: 17, lsm: 1.4,
      text: "1.  INTRODUCTION\n     Tell them WHAT you will say.\n     “Today I'll cover three things.”\n\n2.  BODY\n     Say it. Three points, no more.\n\n3.  CONCLUSION\n     Tell them what you SAID.\n     “So, to sum up — three points.”" },
    side: { label: "Why the repetition works", color: C.green, size: 16, items: [
      "The listener cannot go back. Repetition replaces re-reading.",
      "The introduction lets them build a mental shape to fill in.",
      "Three points is the limit. Nobody remembers five.",
      "The conclusion is what they will carry out of the room.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The three-point limit is real and worth enforcing. A five-minute talk with three points lands; the same talk with six points leaves nothing behind.",
      mistakes: "Learners cram in everything they know. Ask what they want the audience to remember tomorrow — the answer is never more than three things.",
      extra: "The introduction giving the shape is what allows listeners to relax. Without it they spend the whole talk wondering where it is going.",
      tip: "This is the paragraph structure from Level 2 Module 8 scaled up to a whole talk. Same principle: say the main idea first.",
      activity: "Three points: learners state the three points of their planned talk in one sentence each.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — signposting
  L.table({
    sec: SEC.con, title: "Signposting — telling people where you are",
    sub: "Ten phrases. They carry an entire presentation.",
    table: {
      color: C.green, rowH: 0.46, fontSize: 16.5, headSize: 15.5, colW: [3.4, 4.2, 4.533],
      rows: [
        ["Moment", "Say this", "What it does"],
        ["Starting", "“Today I'd like to talk about…”", "sets the topic"],
        ["Giving the shape", "“I'll cover three things.”", "gives them the map"],
        ["First point", "“Let's start with…”  ·  “Firstly…”", "opens point 1"],
        ["Moving on", "“Moving on to…”  ·  “That brings me to…”", "marks the change"],
        ["Last point", "“Finally…”  ·  “My last point is…”", "signals the end is near"],
        ["Concluding", "“So, to sum up…”", "starts the conclusion"],
        ["Questions", "“I'm happy to take any questions.”", "hands over"],
      ],
    },
    note: "Signposts are for the LISTENER, not for you. They are how the audience knows where they are in your talk.",
    notes: tn({
      time: "15 minutes.",
      how: "Drill these as chunks at speed. In front of an audience there is no capacity to construct a transition sentence — it must be automatic.",
      mistakes: "Learners move between points with silence, so the audience does not notice the change and loses the structure.",
      extra: "“That brings me to my second point” is the single most useful transition in English presentations. Drill it ten times.",
      tip: "A presentation with strong signposting feels professional even when the content is ordinary. It is the highest-value thing in this module.",
      activity: "Signpost only: learners deliver a one-minute talk using at least five signpost phrases.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — opening
  L.compare({
    sec: SEC.con, title: "The first thirty seconds",
    sub: "The audience decides whether to listen in the first half minute.",
    left: { h: "Weak openings", items: ["“Erm… hello… can you hear me?”", "“Sorry, my English is not very good.”", "“I don't really know much about this…”", "“So… yeah… I'm going to talk about…”", "→ You have lost them already."] },
    right: { h: "Strong openings", items: ["“Good morning. I'm Sara, from the finance team.”", "“Today I'd like to talk about our March results.”", "“I'll cover three things, and then take questions.”", "“Let's start with the headline figure.”", "→ Four sentences. Fully in control."] },
    note: "NEVER apologise for your English. It tells the audience to expect problems, and they will then hear problems that were not there.",
    notes: tn({
      time: "15 minutes.",
      how: "The note is the most important sentence in this module. Apologising for your English primes the audience to listen for errors instead of content.",
      mistakes: "The apology is almost universal among learners and it is always damaging. Ban it explicitly and enforce the ban in every practice round.",
      extra: "The right-hand column is four fixed sentences: greeting and name, topic, structure, first point. Learn them and any opening is covered.",
      tip: "Have every learner memorise those four sentences with their own content. A memorised opening removes most of the fear, because the hardest part is already handled.",
      activity: "Four sentences: every learner writes and delivers their own opening, twice.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — numbers and trends
  L.table({
    sec: SEC.con, title: "Describing numbers and trends",
    sub: "A verb for the direction, an adverb for the size.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 17, headSize: 16, colW: [3.0, 4.0, 4.933],
      rows: [
        ["Direction", "Verbs", "How much"],
        ["UP  ↗", "rose · increased · went up · grew", "sharply · significantly · slightly"],
        ["DOWN  ↘", "fell · dropped · decreased · went down", "sharply · slightly · gradually"],
        ["NO CHANGE  →", "stayed the same · remained stable", "roughly · more or less"],
        ["TOP / BOTTOM", "peaked at · reached a low of", "just over · just under · around"],
      ],
    },
    note: "“Sales rose sharply in March.”  Verb + adverb + when. Three parts, and every trend sentence you will ever need follows that shape.",
    notes: tn({
      time: "15 minutes.",
      how: "Draw a simple line on the board and have learners describe it. Physical shapes produce far better trend language than tables do.",
      mistakes: "Learners say only “it went up” with no size and no time. Adding the adverb and the period doubles the information.",
      extra: "Approximation words matter: “around 5,000”, “just over half”, “roughly a third”. Exact figures are rarely needed in speech.",
      tip: "“Rose” and “fell” are irregular — rise/rose/risen, fall/fell/fallen. Check them; they are used constantly in work presentations.",
      activity: "Describe the line: draw five different shapes on the board and have learners describe each in one sentence.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — delivery
  L.grid({
    sec: SEC.con, title: "Delivery — six things that are not language", sub: "All six are learnable in one lesson.",
    cols: 3, color: C.green, titleSize: 19, descSize: 15,
    items: [
      { icon: "FaEye", title: "Look at people", desc: "Not at your slides. Three seconds per person, moving around the room." },
      { icon: "FaWalking", title: "Stand still", desc: "Feet planted. Walking about while nervous is distracting." },
      { icon: "FaVolumeUp", title: "Louder than feels natural", desc: "A room absorbs sound. What feels loud to you is normal to them." },
      { icon: "FaPauseCircle", title: "Pause after each point", desc: "Two seconds of silence. It feels long to you and helpful to them." },
      { icon: "FaHandPaper", title: "Use your hands, then rest them", desc: "Gestures at the points, hands still in between." },
      { icon: "FaTachometerAlt", title: "Slower than conversation", desc: "Nerves speed you up. Deliberately slow down at the start." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Demonstrate each one badly, then well. The contrast teaches faster than description, and it makes the class laugh, which helps.",
      mistakes: "Reading from slides with the back to the audience. Say plainly: the slides support you, they are not the presentation.",
      extra: "The pause in item 4 is what most learners will not do. Two seconds feels like ten to the speaker and like nothing to the audience.",
      tip: "None of these six is English. That is worth saying — a large part of presenting well has nothing to do with language at all.",
      activity: "One at a time: learners give a one-minute talk focusing on one delivery point each round.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — questions
  L.table({
    sec: SEC.con, title: "Handling questions — four situations",
    sub: "The part everyone fears has the clearest technique in the module.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [3.6, 4.4, 4.333],
      rows: [
        ["Situation", "Say this", "Why it works"],
        ["You did not hear it", "“Sorry, could you repeat the question?”", "normal, and buys time"],
        ["You need thinking time", "“That's a good question. Let me think.”", "sounds confident, not stuck"],
        ["You do not know", "“I don't have that figure — I'll find out and email you.”", "honest, and offers an action"],
        ["The question is unclear", "“So you're asking about the March figures?”", "checks before answering"],
      ],
    },
    note: "“I don't know” with an offer to find out is a STRONG answer. Inventing an answer is the only real failure here.",
    notes: tn({
      time: "15 minutes.",
      how: "The note is the point learners least expect. Admitting you do not know, and offering to find out, is respected. Bluffing is discovered and remembered.",
      mistakes: "Guessing at a figure. It will be checked, and the whole presentation loses credibility with it.",
      extra: "Repeating the question aloud before answering serves two purposes: the room hears it, and you gain three seconds.",
      tip: "These four phrases come from Module 1's time-buying slide, now in the highest-pressure setting there is. Drill them as chunks.",
      activity: "Hard questions: after each practice talk, the class asks three questions including one deliberately impossible one.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "overview", ipa: "/ˈəʊvəvjuː/", pos: "noun", icon: "FaEye",
      meaning: "A short general description of something.",
      example: "Let me give you a brief overview. Here is an overview of the project.",
      mistake: "Stress on the FIRST syllable: O-ver-view. And it is countable — “an overview”.",
      notes: tn({ time: "7 minutes.",
        how: "“Let me give you a brief overview” is a presentation opener worth learning whole. It buys structure and time at once.",
        mistakes: "Confusing it with “review”, which means looking at something again. An overview is a first, broad look.",
        extra: "a brief overview · a quick overview · give an overview of…",
        tip: "This word signals to the audience that detail is coming later, which stops them worrying about what they are missing.",
        activity: "One-sentence overview: every learner gives a one-sentence overview of their planned talk." }) },

    { word: "figure", ipa: "/ˈfɪɡə/", pos: "noun", icon: "FaChartBar",
      meaning: "A number, especially in a report. Also a diagram.",
      example: "The March figures are not ready. As you can see in figure two…",
      mistake: "Two meanings: a number, and a labelled diagram in a document. The context always makes it clear.",
      notes: tn({ time: "7 minutes.",
        how: "“The figures” meaning the numbers is extremely common in work English. Teach that use first; the diagram sense is secondary.",
        mistakes: "The /ɡ/ is hard in British English: FIG-ə. Not “fi-jure”.",
        extra: "the latest figures · the sales figures · according to the figures · figure 1, figure 2.",
        tip: "“I don't have that figure to hand” is the polite professional way to say you do not know a number.",
        activity: "Quote a figure: learners each state one real number about their work using “the figures show…”" }) },

    { word: "increase", ipa: "/ˈɪŋkriːs/ · /ɪnˈkriːs/", pos: "noun and verb", icon: "FaChartLine",
      meaning: "To go up, or a rise in amount.",
      example: "Sales increased by 20%. There was a 20% increase in sales.",
      mistake: "Another stress pair from Module 2: IN-crease is the noun, in-CREASE is the verb.",
      notes: tn({ time: "8 minutes.",
        how: "The third stress pair in Level 3 — after update and record. Point out that the pattern is now familiar rather than new.",
        mistakes: "“Increase BY 20%” means it went up by that amount. “Increase TO 20%” means it reached that level. The prepositions matter.",
        extra: "increase · decrease · rise · fall. All four work as both nouns and verbs.",
        tip: "The by/to distinction causes real misunderstanding in financial presentations. Drill it with numbers.",
        activity: "By or to: give ten trend statements and have learners choose the correct preposition." }) },

    { word: "approximately", ipa: "/əˈprɒksɪmətli/", pos: "adverb", icon: "FaPercent",
      meaning: "About. Not exactly.",
      example: "Approximately 5,000 people. It took approximately two hours.",
      mistake: "Five syllables, stress on the SECOND: a-PPROX-i-mate-ly. Three of the vowels are schwas.",
      notes: tn({ time: "8 minutes.",
        how: "Build it backwards, as with “opportunity” in Module 2. Long words are learned from the end.",
        mistakes: "Learners avoid it and give false precision instead. Approximation is more honest and sounds more confident.",
        extra: "Simpler alternatives: about · around · roughly · just over · just under. All are shorter and equally professional.",
        tip: "In speech, “around 5,000” is more natural than “approximately 5,000”. Teach the long word for writing and the short ones for speaking.",
        activity: "Round it: give ten exact figures and have learners approximate each in speech." }) },

    { word: "summarise", ipa: "/ˈsʌməraɪz/", pos: "verb", icon: "FaCompressAlt",
      meaning: "To give the main points briefly.",
      example: "To summarise, we have three options. Let me summarise the main points.",
      mistake: "Stress on the FIRST syllable: SUM-ma-rise. The noun is “summary”, with the same stress.",
      notes: tn({ time: "7 minutes.",
        how: "“To summarise…” and “to sum up…” both open a conclusion. The second is more common in speech and the first in writing.",
        mistakes: "Summarising by repeating everything. A summary is the three points only, in one sentence each.",
        extra: "summarise · summary · in summary · to sum up · in short.",
        tip: "The conclusion is what the audience carries out of the room, so it must be the three points and nothing else.",
        activity: "Thirty-second summary: learners summarise a five-minute talk in three sentences." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Presentation Language 1 of 5" }),
    title: "Referring to slides and visuals",
    sub: "Six phrases. They cover every chart you will ever show.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17, headSize: 16, colW: [4.6, 3.4, 4.133],
      rows: [
        ["Say this", "When", "Note"],
        ["“As you can see here…”", "pointing at a chart", "the commonest one"],
        ["“This chart shows…”", "introducing a visual", "say what it shows first"],
        ["“If you look at the red line…”", "directing attention", "name the part"],
        ["“The key point here is…”", "after showing it", "tell them what to notice"],
        ["“I won't go through all of this…”", "a dense slide", "honest and welcome"],
      ],
    },
    note: "Always say what the chart SHOWS before you say what it MEANS. The audience needs a second to find it before they can follow you.",
    notes: tn({
      time: "13 minutes.",
      how: "The note is the technique nobody teaches: introduce, pause, then interpret. Speaking over a slide the audience has not yet read wastes both.",
      mistakes: "Showing a chart and immediately explaining. The audience is still reading the axis labels and hears nothing.",
      extra: "Row 4 is the most valuable. A chart without a stated key point leaves the audience to guess what mattered.",
      tip: "Row 5 is honest and appreciated. Acknowledging that a slide is dense is better than pretending it is not.",
      activity: "Show and explain: give learners a simple chart and have them use four of the six phrases.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Presentation Language 2 of 5" }),
    title: "Written English is not spoken English",
    sub: "A presentation is spoken. Write it that way.",
    left: { h: "Reads well — sounds terrible", items: ["“The implementation of the new system resulted in a significant increase in efficiency.”", "“Subsequent to the review…”", "“It is anticipated that…”", "→ Nobody can follow this by ear."] },
    right: { h: "Sounds right", items: ["“We brought in the new system, and it made us much faster.”", "“After the review…”", "“We expect that…”", "→ Same meaning. Short sentences."] },
    note: "One idea per sentence. Short words. If you cannot say it in one breath, it is too long for a presentation.",
    notes: tn({
      time: "14 minutes.",
      how: "The one-breath test is practical and immediate: read your sentence aloud, and if you run out of air it needs splitting.",
      mistakes: "Learners write a presentation like a report, then read it aloud, and it is impossible to follow. This is the commonest presentation failure of all.",
      extra: "Note that the right column uses simpler VERBS: “brought in” rather than “implementation”, “expect” rather than “it is anticipated”.",
      tip: "This reverses Level 2 Module 8, where learners learned to write more formally. Presentations go the other way, and that must be said explicitly.",
      activity: "Say it simply: give six formal written sentences and have learners produce the spoken version.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Presentation Language 3 of 5" }),
    title: "The passive — when the action matters more than who did it",
    sub: "Common in reports and presentations. Two parts: be + past participle.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17, headSize: 16, colW: [4.2, 4.0, 4.133],
      rows: [
        ["Active", "Passive", "Why use it"],
        ["We sent the report on Friday.", "The report was sent on Friday.", "who sent it does not matter"],
        ["Somebody made a mistake.", "A mistake was made.", "avoids naming a person"],
        ["We will finish it in March.", "It will be finished in March.", "focus on the work"],
        ["They are testing the system.", "The system is being tested.", "the system is the topic"],
      ],
    },
    note: "Do not over-use it. The active voice is clearer and shorter — use the passive only when the doer is unknown, obvious or deliberately not named.",
    notes: tn({
      time: "14 minutes.",
      how: "Row 2 is the honest one: the passive is often used to avoid assigning blame. That is a real professional use and learners should recognise it.",
      mistakes: "Over-using the passive because it sounds formal. It makes writing longer and vaguer, and audiences find it harder to follow.",
      extra: "The formula is always be + past participle, in any tense. The tense is carried by “be”, exactly as in Module 4.",
      tip: "In presentations use the active by default. The passive is a tool for specific moments, not a style to adopt.",
      activity: "Active to passive: give eight sentences and have learners convert each, then say which version is better.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Presentation Language 4 of 5" }),
    title: "Comparing — the language of “more” and “less”", sub: "Numbers are almost always compared with something.",
    panelW: 6.9,
    panel: { label: "Four comparison patterns", color: C.gram, tint: C.surf2, size: 17, lsm: 1.4,
      text: "1.  X is HIGHER THAN Y.\n     “March was higher than February.”\n\n2.  X is TWICE AS BIG AS Y.\n     “Sales were twice as high as last year.”\n\n3.  X rose BY 20%.   X rose TO 20%.\n     BY = the amount of change.\n     TO = the level reached.\n\n4.  The HIGHEST / LOWEST of all." },
    side: { label: "The traps", color: C.gram, size: 16, items: [
      "“Higher than”, never “higher from” or “more high”.",
      "BY and TO mean completely different things. Check which you need.",
      "“Twice as high as”, not “twice higher”.",
      "Superlatives take “the”: the highest, the lowest.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Pattern 3 is the one that causes real confusion in financial presentations. “Rose by 20%” and “rose to 20%” are entirely different claims.",
      mistakes: "“More high” instead of “higher”. One-syllable adjectives take -er, longer ones take “more”.",
      extra: "Also useful: “compared with last year”, “in comparison to March”, “as against 2024”.",
      tip: "Always compare a number with something. “Sales were 5 million” means nothing; “up 12% on last year” means something.",
      activity: "Compare it: give a small table of figures and have learners produce six comparison sentences.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Presentation Language 5 of 5" }),
    title: "Put it all together — the five-minute talk", sub: "A complete structure. Time it.",
    color: C.gram, size: 19, labels: ["30s", "60s", "2m", "60s", "30s"],
    items: [
      { t: "OPENING — greeting, name, topic, structure", d: "Four sentences, memorised. “I'll cover three things.”" },
      { t: "POINT 1 — with one example or figure", d: "“Let's start with…” Then the evidence." },
      { t: "POINTS 2 and 3 — with signposts between", d: "“That brings me to…” “Finally…”" },
      { t: "CONCLUSION — the three points again", d: "“So, to sum up…” One sentence each." },
      { t: "QUESTIONS — hand over clearly", d: "“I'm happy to take any questions.”" },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "The timings are deliberate. Most learners over-run because they have too many points — three points in five minutes is genuinely tight.",
      mistakes: "No conclusion, because they ran out of time. Tell them to cut a point rather than lose the conclusion, which is what the audience remembers.",
      extra: "The opening and the conclusion together are one minute of a five-minute talk. That proportion is right, not excessive.",
      tip: "Have learners write only the opening and the conclusion in full. The middle should be notes, so it does not get read aloud.",
      activity: "Time it: every learner delivers a five-minute talk with a visible timer.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — opening a talk", sub: "The first thirty seconds.", items: [
      { q: "“Sorry, my English is not very good.” Should you say this?", a: "Never.", why: "It tells the audience to expect problems, and they will then hear errors that were not there. Start with your name and topic instead." },
      { q: "What are the four sentences of a strong opening?", a: "Greeting and name · topic · structure · first point.", why: "Memorise these four with your own content and the hardest part of the talk is already handled." },
      { q: "Why give the structure at the start?", a: "The listener cannot go back, so they need a shape to fill in.", why: "Without it they spend the whole talk wondering where it is going instead of following the content." },
    ] },
    { title: "Guided examples 2 — signposting", sub: "Where are we?", items: [
      { q: "You are moving from point 1 to point 2. What do you say?", a: "“That brings me to my second point…”", why: "Silence between points means the audience does not notice the change and loses the structure." },
      { q: "You are starting the conclusion. What do you say?", a: "“So, to sum up…”", why: "It tells the audience to pay attention — this is the part they should carry out of the room." },
      { q: "Are signposts for you or for the audience?", a: "For the audience.", why: "They are how listeners know where they are. You already know; they do not." },
    ] },
    { title: "Guided examples 3 — describing numbers", sub: "Direction, size, time.", items: [
      { q: "Sales went from 100 to 150 in one month. How do you say it?", a: "“Sales rose sharply in March — up 50%.”", why: "Verb for direction, adverb for size, and the period. Three parts in one short sentence." },
      { q: "What is the difference between “rose by 20%” and “rose to 20%”?", a: "BY is the amount of change. TO is the level reached.", why: "Two completely different claims. This confusion causes real misunderstanding in financial presentations." },
      { q: "“Sales were 5 million.” What is missing?", a: "A comparison.", why: "A number alone means nothing. “Up 12% on last year” tells the audience whether it is good news." },
    ] },
    { title: "Guided examples 4 — handling questions", sub: "Including the ones you cannot answer.", items: [
      { q: "You are asked for a figure you do not have. What do you say?", a: "“I don't have that figure — I'll find out and email you.”", why: "Honest, and it offers an action. This is a strong answer, not a weak one." },
      { q: "Should you guess at the number instead?", a: "No. Never invent a figure.", why: "It will be checked, and when it is wrong the whole presentation loses credibility with it." },
      { q: "You need a moment to think. What do you say?", a: "“That's a good question. Let me think for a second.”", why: "Buys three seconds and sounds confident. Silence for the same three seconds sounds stuck." },
    ] },
    { title: "Guided examples 5 — spoken versus written", sub: "Say it, do not read it.", items: [
      { q: "“The implementation resulted in a significant increase in efficiency.” Is this good?", a: "Not for speech. Say “We brought in the new system and it made us faster.”", why: "The audience has no back button. Long noun phrases are impossible to follow by ear." },
      { q: "What is the one-breath test?", a: "If you cannot say the sentence in one breath, it is too long.", why: "A simple, physical test that catches almost every over-long presentation sentence." },
      { q: "Should you write the whole talk out and read it?", a: "No — write the opening and conclusion only.", why: "A read talk is flat and loses eye contact. Notes for the middle keep it alive." },
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
    title: "A complete short presentation",
    sub: "Bethlehem presents the March results. Watch the signposts.",
    turns: [
      { who: "BETHLEHEM", text: "Good morning. I'm Bethlehem, from the sales team.", side: "l" },
      { who: "BETHLEHEM", text: "Today I'd like to talk about our March results. I'll cover three things: sales, costs, and what we do next.", side: "l" },
      { who: "BETHLEHEM", text: "Let's start with sales. They rose sharply in March — up about 20% on February.", side: "l" },
      { who: "BETHLEHEM", text: "That brings me to costs. Costs stayed roughly the same, so the extra sales went straight to profit.", side: "l" },
      { who: "BETHLEHEM", text: "Finally, what next. We'd like to add two people to the team in June.", side: "l" },
      { who: "BETHLEHEM", text: "So, to sum up: sales up 20%, costs flat, and we're asking for two more staff. I'm happy to take any questions.", side: "l" },
    ],
    note: "Six sentences. Opening, three points with signposts, conclusion, hand over. That is a complete presentation.",
    notes: tn({
      time: "15 minutes.",
      how: "Have learners identify the signpost in every line. Then point out that the whole talk is six sentences and every one of them is short.",
      mistakes: "Learners believe a presentation must be long. This one takes ninety seconds and communicates everything.",
      extra: "The conclusion repeats the three points in nine words. That compression is what makes a conclusion memorable.",
      tip: "Have every learner deliver this exact script aloud before writing their own. Performing a good model first makes the writing far easier.",
      activity: "Same shape: learners write their own six-sentence talk using this exact structure.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "The questions afterwards",
    sub: "Three questions, including one Bethlehem cannot answer.",
    turns: [
      { who: "MANAGER", text: "You said sales rose 20%. Is that on last March or on February?", side: "r" },
      { who: "BETHLEHEM", text: "On February. Compared with last March it's about 8%.", side: "l" },
      { who: "TOLOSA", text: "What was the figure for the Adama branch specifically?", side: "r" },
      { who: "BETHLEHEM", text: "I don't have that to hand — I'll find out and email you today.", side: "l" },
      { who: "MIMI", text: "Sorry, so you're asking for two new people in June?", side: "r" },
      { who: "BETHLEHEM", text: "That's right. Two, starting in June.", side: "l" },
    ],
    note: "The second answer is the strongest one here. “I don't have that to hand” plus an action beats any guess.",
    notes: tn({
      time: "14 minutes.",
      how: "The first question shows why comparisons must be specified — 20% on what? Bethlehem answers both ways, which is the ideal response.",
      mistakes: "Learners expect the “I don't know” answer to be embarrassing. Ask the class how it sounded — the answer is always “fine”.",
      extra: "Mimi's question is a clarification, not a challenge. Bethlehem confirms in five words and moves on.",
      tip: "Practise the impossible question deliberately. A learner who has said “I'll find out and email you” once in class will say it under pressure.",
      activity: "Three questions: after every practice talk, the class asks three questions and one must be unanswerable.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "The six phrases that carry a presentation",
    sub: "Learn these as chunks. There is no time to build them on your feet.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaFlag", title: "“Today I'd like to talk about…”", desc: "The topic. Sentence two of your opening." },
      { icon: "FaSitemap", title: "“I'll cover three things.”", desc: "The map. Never more than three." },
      { icon: "FaPlay", title: "“Let's start with…”", desc: "Opens point one." },
      { icon: "FaArrowRight", title: "“That brings me to…”", desc: "The best transition in English." },
      { icon: "FaCompressAlt", title: "“Finally…”  ·  “So, to sum up…”", desc: "Last point, then the conclusion." },
      { icon: "FaComments", title: "“I'm happy to take questions.”", desc: "Hands over clearly at the end." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Drill all six in chorus at speed, twice. On your feet in front of an audience there is no spare capacity to construct these. Add three more from slide 16 for visuals.",
      mistakes: "Learners know the phrases and do not use them, because they were never made automatic. Chorus drilling fixes that.",
      extra: "“That brings me to…” is the highest-value phrase here. It makes any transition sound deliberate.",
      tip: "Print these six on a card. Learners can hold it during their first practice talk.",
      activity: "Six phrases: learners give a two-minute talk using all six of them.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the presentation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "YOU", text: "Good morning. Today I'd ______ to talk about our training programme.", side: "l" },
      { who: "YOU", text: "I'll ______ three things: what we did, what it cost, and what's next.", side: "l" },
      { who: "YOU", text: "Let's ______ with what we did. We trained 60 people in March.", side: "l" },
      { who: "YOU", text: "That ______ me to the cost. It was ______ 40,000 birr.", side: "l" },
      { who: "YOU", text: "______ , what's next. We'd like to run it again in September.", side: "l" },
      { who: "YOU", text: "So, to ______ up: 60 people trained, 40,000 birr, and we'd like to repeat it.", side: "l" },
    ],
    note: "Use these:  “like”  ·  “cover”  ·  “start”  ·  “brings”  ·  “approximately”  ·  “Finally”  ·  “sum”",
    notes: tn({
      time: "13 minutes.",
      how: "Have every learner deliver the completed version standing up. Filling gaps on paper is not the point — the delivery is.",
      answers: "1 like · 2 cover · 3 start · 4 brings · 5 approximately · 6 Finally · 7 sum",
      mistakes: "Learners read it flatly from the page. Insist on standing, looking up, and pausing between points.",
      tip: "This is a complete, correct, six-sentence presentation. Learners can substitute their own content directly into it.",
      activity: "Substitute: learners replace the content with their own work and deliver it twice.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — build it in stages", sub: "Four rounds. Build up to the full talk.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Deliver your four-sentence opening", d: "Standing. No apology for your English." },
      { t: "Add your three points with signposts between", d: "Partner listens for the transitions." },
      { t: "Add a conclusion that repeats the three points", d: "One sentence each. Nine words total if you can." },
      { t: "Partner asks three questions, one impossible", d: "Practise “I'll find out and email you.”" },
    ],
    notes: tn({
      time: "16 minutes for all four rounds.",
      how: "Building in stages removes the fear. Nobody delivers a whole talk cold; they add one layer at a time.",
      mistakes: "Skipping round 1 and going straight to the full talk. The memorised opening is what carries learners through the first thirty seconds.",
      tip: "Round 4 must include the impossible question. Learners who have practised the answer once will produce it under real pressure.",
      activity: "Stage by stage: run all four rounds with the same content, adding a layer each time.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the memorised opening", sub: "Four sentences. Everyone learns their own by heart.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "“Good morning. I'm ___, from ___.”", d: "Your name and where you work or study." },
      { t: "“Today I'd like to talk about ___.”", d: "Your topic, in six words or fewer." },
      { t: "“I'll cover three things: ___, ___ and ___.”", d: "Your three points. No more than three." },
      { t: "“Let's start with ___.”", d: "Point one. Then you are away." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Memorise, do not read. The first thirty seconds are where nerves are worst, and a memorised opening carries you through them.",
      mistakes: "Learners write six points. Enforce three — the limit is the teaching, not a formality.",
      extra: "Once the opening is automatic, the rest of the talk feels far easier. That is why it is drilled separately.",
      tip: "Have every learner deliver their opening to the whole class. Thirty seconds each, and everyone stands up once early in the module.",
      activity: "Round the room: every learner delivers their four sentences standing, twice.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — describing a chart", sub: "In pairs. One describes, one draws.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Describe a line that rises sharply then flattens", d: "Verb, adverb, period." },
      { t: "Describe a line that falls gradually all year", d: "“Fell gradually throughout the year.”" },
      { t: "Describe a peak and a low point", d: "“Peaked at… then reached a low of…”" },
      { t: "Compare two lines", d: "“Higher than…” “Twice as high as…”" },
      { t: "Your partner draws what you describe. Compare.", d: "If the drawing is wrong, the description was." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "The drawing in task 5 is the objective test. A wrong drawing means the description failed, whatever the grammar was like.",
      mistakes: "Describing direction without size or period. “It went up” could be any of a hundred lines.",
      extra: "Insist on the three-part sentence: verb, adverb, time. It becomes automatic within about ten repetitions.",
      tip: "This activity is directly transferable. Anyone presenting numbers at work does exactly this several times a month.",
      activity: "Draw what you hear: collect the drawings and compare them with the originals.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — projecting and pausing",
    sub: "Two delivery skills. Both are physical, not linguistic.",
    left: { h: "Practise projecting", items: ["Stand at the back of the room.", "Say your opening to the front wall.", "Breathe from low down, not the throat.", "If it feels loud, it is probably right."] },
    right: { h: "Practise pausing", items: ["Say a point. Then count two seconds.", "Do not fill the gap with “erm”.", "It feels long to you.", "It feels helpful to them.", "Pause before your conclusion too."] },
    note: "Nerves make you quieter and faster. Both fixes are the same: breathe, slow down, and pause where you would not naturally.",
    notes: tn({
      time: "14 minutes.",
      how: "Do the projection drill physically, with the speaker at the back of the room. Learners are always surprised how much louder they must be.",
      mistakes: "Filling every pause with a sound. Silence is a tool, and two seconds of it is worth more than any transition word.",
      extra: "This connects to Module 2's intonation work. A presentation delivered flatly is hard to follow however clear the structure.",
      tip: "Pausing before the conclusion is the strongest single delivery trick. Two seconds of silence, then “So, to sum up”, and the room comes back.",
      activity: "Back of the room: every learner delivers their opening from the back wall.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — the question round", sub: "The part everyone fears. Practise it until it is ordinary.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Your partner asks a question you can answer", d: "Repeat the question first, then answer." },
      { t: "…a question you cannot answer", d: "“I don't have that — I'll find out and email you.”" },
      { t: "…a question you did not hear", d: "“Sorry, could you repeat the question?”" },
      { t: "…an unclear question", d: "“So you're asking about…?”" },
      { t: "…a hostile question", d: "“That's a fair point. Let me explain the reasoning.”" },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Round 5 is the one nobody prepares for. The technique is the same as the Module 5 disagreement: acknowledge first, then respond.",
      mistakes: "Becoming defensive at a hostile question. Acknowledging it removes the heat and leaves you room to answer.",
      extra: "Repeating the question before answering is standard practice: the room hears it and you gain three seconds.",
      tip: "Practising the “I don't know” answer out loud is what makes it available under pressure. Do not skip round 2.",
      activity: "Five questions: every learner faces all five types after their practice talk.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — the five-minute presentation", sub: "The main assessment of this module. Everyone does it.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "OPENING — four sentences, memorised", d: "No apology for your English. 30 seconds." },
      { t: "THREE POINTS with signposts between", d: "One example or figure in each. 3 minutes." },
      { t: "At least one number, described properly", d: "Verb, adverb, period — and a comparison." },
      { t: "CONCLUSION — the three points again", d: "“So, to sum up…” 30 seconds." },
      { t: "QUESTIONS — three from the audience", d: "One of them will be unanswerable." },
    ],
    notes: tn({
      time: "A full lesson. Allow 8 minutes per learner including questions.",
      how: "Record every presentation if learners agree. Watching yourself present is uncomfortable and more useful than any feedback you can give.",
      mistakes: "Over-running because of too many points. Warn at four minutes and stop at six — the discipline is part of the skill.",
      answers: "SUCCESS CRITERIA: a memorised opening with no apology · three points with audible signposts between them · one number with direction, size and comparison · a conclusion repeating the three points · three questions handled, including one “I'll find out”.",
      tip: "Give feedback on structure and delivery only. Grammar corrections here would undo the whole module.",
      activity: "Audience role: every listener must ask one question and note one thing done well.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — follow the structure", sub: "Listen once. Write only the signposts.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads at presentation pace", color: C.listen, tint: C.listenTint, size: 16, lsm: 1.28,
      text: "“Good afternoon. I'm Yonas, from operations.\nToday I'd like to talk about our delivery times.\nI'll cover three things: where we are, why\nwe're slow, and what I suggest.\n\nLet's start with where we are. Average delivery\nis now six days. Last year it was four.\n\nThat brings me to why. Two of our three vans\nare over ten years old.\n\nFinally, what I suggest. We should replace one\nvan this year. So, to sum up: six days, old vans,\nreplace one. Happy to take questions.”" },
    side: { label: "Your task", color: C.listen, size: 15.5, items: [
      "Write every signpost phrase you hear.",
      "What are the three points?",
      "What are the two numbers?",
      "What does he suggest?",
      "How long is this talk?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Have learners write only the signposts on the first listening. They will find they can reconstruct the whole talk from those alone — which proves what signposting does.",
      mistakes: "Trying to write everything. This is the Level 2 Module 7 strategy: listen for the strong signals, not for every word.",
      extra: "The whole talk is under ninety seconds and contains a complete structure. Point that out to learners who think a presentation must be long.",
      answers: "Signposts: Today I'd like to talk about · I'll cover three things · Let's start with · That brings me to · Finally · So, to sum up · Happy to take questions. Points: where we are, why we're slow, what I suggest. Numbers: six days now, four last year.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Seven signposts in ninety seconds.",
    size: 16.5,
    items: [
      { q: "1 — the signposts", a: "Seven of them, from “Today I'd like to…” to “Happy to take questions.”", why: "Roughly one every twelve seconds. That is what makes a talk easy to follow." },
      { q: "2 — the three points", a: "Where we are now · why we're slow · what I suggest.", why: "Stated in the introduction and repeated in the conclusion. The audience hears them three times." },
      { q: "3 — the numbers", a: "Six days now, four days last year.", why: "The comparison is what makes the number meaningful. “Six days” alone says nothing." },
      { q: "4 — the suggestion", a: "Replace one van this year.", why: "One clear action. A presentation that asks for one specific thing is far more likely to get it." },
      { q: "5 — how long?", a: "Under ninety seconds.", why: "A complete presentation with a full structure. Length is not what makes a talk good." },
    ],
    notes: keyNotes("Ask learners to reconstruct the talk from their list of signposts alone. Most can do it almost completely — which is the strongest possible argument for signposting."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — the same talk without signposts", sub: "Same content. Listen and compare.",
    panelW: 7.2,
    panel: { label: "Audio script — read at the same pace", color: C.listen, tint: C.listenTint, size: 16, lsm: 1.28,
      text: "“Average delivery is now six days. Last year it\nwas four. Two of our three vans are over ten\nyears old. We should replace one van this year.\nThe cost would be about 900,000 birr. Delivery\nwould come back to about four days. The other\nvans are still working but they need more repairs\nnow than before. Any questions?”\n\nSame facts. Same speaker. Same speed.\nNo signposts and no structure." },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. What are the three main points?",
      "2. Was it harder to follow? Why?",
      "3. What is being asked for?",
      "4. Did you notice when the topic changed?",
      "5. Which version would you rather hear?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Read this at exactly the same pace as slide 36. The only variable is the signposting, and the difference in comprehension is dramatic.",
      mistakes: "Learners struggle to answer question 1 and assume they were not listening carefully. They were — the structure simply was not there.",
      extra: "This version actually contains MORE information than the first. More content, less understood, because there was no shape to hang it on.",
      answers: "1 Hard to say — the points are not marked. 2 Yes, because nothing signals the structure. 3 Replace one van, about 900,000 birr. 4 Most learners say no. 5 The first, universally.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "More information. Less understanding.",
    size: 16.5,
    items: [
      { q: "1 — the three points", a: "They are there, but nothing marks them.", why: "Without signposts the audience cannot tell where one idea ends and the next begins." },
      { q: "2 — was it harder?", a: "Yes — and the English was no more difficult.", why: "Same vocabulary, same speed, same speaker. Only the structure was removed." },
      { q: "3 — what is being asked for?", a: "Replace one van, about 900,000 birr.", why: "Buried in the middle. In the first version it was the whole of point three." },
      { q: "4 — more or less information?", a: "MORE — this version has extra detail.", why: "And it was understood less. Adding content without structure reduces what the audience takes away." },
      { q: "5 — which would you rather hear?", a: "The first, every time.", why: "That preference is the entire argument for signposting, and learners reach it themselves." },
    ],
    notes: keyNotes("Item 4 is the counter-intuitive one worth stating aloud: this version contains more facts and communicates less. Structure beats content."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "Listening to presentations — four tactics", sub: "You will be in the audience more often than on your feet.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaSitemap", title: "Catch the structure first", desc: "“I'll cover three things” tells you the shape. Write those three down and fill them in as you go." },
      { icon: "FaFlag", title: "Listen for the signposts", desc: "“That brings me to…” means a new point. If you were lost, this is where you rejoin." },
      { icon: "FaPen", title: "Write three things only", desc: "The three points, and any number that matters. Not every word." },
      { icon: "FaQuestion", title: "Prepare one question", desc: "Ask it. It shows you listened, and asking is far easier than presenting." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Tactic 2 is the recovery method. Even a lost listener can rejoin at the next signpost, which is why signposts help the audience most.",
      mistakes: "Trying to write everything. Three points and the key numbers are what will still matter tomorrow.",
      tip: "Tactic 4 is worth insisting on. Asking a question in English in front of a room is real practice at very low cost.",
      activity: "One question each: every learner asks one question after every practice presentation.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — presentation notes", sub: "This is what good notes look like. Not a script.",
    panelW: 7.2,
    panel: { label: "Read them", color: C.read, tint: C.readTint, size: 16, lsm: 1.3,
      text: "DELIVERY TIMES — 5 MIN\n\nOPEN  (memorised)\n     I'm Yonas, operations. 3 things:\n     where we are · why · what I suggest.\n1.  WHERE      6 days now / 4 last year\n2.  WHY           2 of 3 vans 10+ yrs old\n3.  SUGGEST   replace 1 van — 900,000 birr\nCLOSE  (memorised)\n     6 days · old vans · replace one.\n     Happy to take questions.\nQ: Adama figure? → “I'll find out.”" },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "Which parts are written in full? Why those?",
      "Which parts are only key words?",
      "Why is there a note at the bottom about a question?",
      "Could you deliver a talk from these notes?",
      "How long would this take to write?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Only the opening and closing are written in full. Everything else is key words, because reading the middle aloud is what kills a presentation.",
      mistakes: "Learners write the whole talk out and read it. The result is flat, has no eye contact, and takes three times as long to prepare.",
      extra: "The note at the bottom is preparation for an expected difficult question. Anticipating one or two is worth five minutes of preparation.",
      tip: "These notes took about ten minutes to write. Say so — good preparation is faster than bad preparation, not slower.",
      activity: "Write your notes: learners produce notes in exactly this format for their own talk.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Why these notes work.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "Why are the opening and closing written out in full?",
      "Why is the middle only key words?",
      "What does “6 days now / 4 last year” give the speaker?",
      "Why prepare an answer to a question in advance?",
      "What would happen if the whole talk were written out?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Question 5 is the important one. A fully scripted talk is read rather than delivered, and the audience can tell within ten seconds.",
      mistakes: "Learners believe a full script is safer. It is safer against forgetting and much worse for everything else.",
      tip: "Question 3: the notes carry the comparison, not just the number. That is what makes the figure meaningful.",
      answers: "1 Because nerves are worst at the start and the end matters most. · 2 So it is spoken, not read. · 3 The number AND the comparison. · 4 So the answer is ready under pressure. · 5 It would be read aloud, flat, with no eye contact.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Two written parts, three spoken parts.",
    size: 16.5,
    items: [
      { q: "1 — why write the opening in full?", a: "Nerves are worst in the first thirty seconds.", why: "A memorised opening carries you through the hardest moment. After that it gets easier." },
      { q: "2 — why key words in the middle?", a: "So you speak it rather than read it.", why: "Key words force you to form the sentence live, which is what keeps a talk sounding alive." },
      { q: "3 — the numbers", a: "The figure and the comparison together.", why: "“Six days” means nothing alone. “Six now, four last year” is the whole point." },
      { q: "4 — the prepared question", a: "So the answer is ready when you are under pressure.", why: "Anticipating one or two hard questions costs five minutes and removes most of the fear." },
      { q: "5 — a full script", a: "You would read it, flatly, with no eye contact.", why: "The audience can tell within ten seconds, and they stop listening shortly afterwards." },
    ],
    notes: keyNotes("Item 5 is worth demonstrating. Read a paragraph aloud from a script, then say the same thing from three key words. The class hears the difference immediately."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a slide that is too full", sub: "What is wrong with this slide?",
    panelW: 7.2,
    panel: { label: "A real bad slide", color: C.read, tint: C.readTint, size: 14.5, lsm: 1.24,
      text: "DELIVERY PERFORMANCE ANALYSIS Q1\n\nThe average delivery time across all three\nregional depots has increased from four days\nin the equivalent period last year to six days\nin the current quarter, which represents a\ndeterioration of fifty per cent. The primary\ncontributing factor appears to be the age of\nthe vehicle fleet, two of the three vans now\nbeing in excess of ten years old, resulting in\nincreased downtime for repairs and reduced\navailability during peak periods." },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "How many words are on this slide?",
      "Can you read it AND listen at the same time?",
      "Rewrite it as four short lines.",
      "What should the speaker SAY instead?",
      "What is the rule for words on a slide?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Have learners try to read it while you talk over it. They cannot do both, which is the entire lesson about slide density.",
      mistakes: "Putting the script on the slide. The audience then reads ahead, stops listening, and the speaker becomes unnecessary.",
      extra: "The rewrite should be four lines of about four words each. Everything else is said, not shown.",
      answers: "Roughly 90 words. REWRITE: “Delivery: 6 days · Last year: 4 days · 2 of 3 vans over 10 years old · Suggest: replace 1 van”. RULE: about six lines, six words each — and never full sentences.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "The slide supports you. It is not the presentation.",
    size: 16.5,
    items: [
      { q: "1 — how many words?", a: "About 90. Far too many.", why: "The audience reads instead of listening, and reading always wins — so the speaker is ignored." },
      { q: "2 — read and listen at once?", a: "No. Nobody can.", why: "The two compete for the same attention. A full slide silences the speaker." },
      { q: "3 — the rewrite", a: "“Delivery: 6 days · Last year: 4 · 2 of 3 vans 10+ years · Suggest: replace 1”", why: "Four lines. The detail is spoken, and the slide holds only what must be seen." },
      { q: "4 — what should the speaker say?", a: "Everything that was deleted.", why: "The words did not disappear — they moved from the slide to the speaker, which is where they belonged." },
      { q: "Vocabulary check", a: "overview · figure · increase · approximately · summarise", why: "All five belong to ordinary presentation language and appear in almost every work talk." },
    ],
    notes: keyNotes("Item 4 is the reframe: nothing is lost by cutting a slide down, because the content moves to the speaker. That is where an audience wants it."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — describe the trend", sub: "Verb, adverb, period. Then a comparison.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write one sentence for each. Use a verb, an adverb and a time period.",
    items: [
      "1.  Sales: 100 in February, 150 in March.",
      "2.  Costs: 80 in February, 79 in March.",
      "3.  Staff: 20 in January, falling slowly to 14 in June.",
      "4.  Deliveries: 4 days last year, 6 days now.",
      "5.  Highest point of the year: 210 in September.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Insist on all three parts every time. A trend sentence without a period is incomplete.",
      answers: "MODELS: 1 Sales rose sharply in March, up 50%. · 2 Costs stayed roughly the same. · 3 Staff numbers fell gradually from January to June. · 4 Delivery times have increased by two days since last year. · 5 Sales peaked at 210 in September.",
      mistakes: "Item 2 is the trap: a change from 80 to 79 is no change. Saying “fell slightly” would overstate it.",
      tip: "Item 4 takes the present perfect, because the situation continues. Module 4 doing work here.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — spoken, not written", sub: "Rewrite these for the ear.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each sentence so it can be said in one breath.",
    items: [
      "1.  The implementation of the new system resulted in a significant increase in efficiency.",
      "2.  Subsequent to the completion of the review, a decision will be taken.",
      "3.  It is anticipated that the delivery times will return to previous levels.",
      "4.  The primary contributing factor appears to be the age of the vehicle fleet.",
      "5.  A deterioration of fifty per cent was recorded in the current quarter.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Apply the one-breath test to every answer. Read each aloud and check.",
      answers: "MODELS: 1 We brought in the new system and it made us much faster. · 2 After the review, we'll decide. · 3 We expect delivery times to go back to normal. · 4 The main reason is that our vans are old. · 5 Things got 50% worse this quarter.",
      mistakes: "Keeping the long noun phrases. “The implementation of” becomes “we brought in” — a noun becomes a verb, and that is the main move.",
      tip: "Point out that every answer is shorter and uses commoner words. That is what spoken English does.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — your presentation notes", sub: "Not a script. Notes in the slide-41 format.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write notes for your five-minute presentation.",
    items: [
      "1.  OPENING — four sentences, written in FULL.",
      "2.  Your three points, in key words only.",
      "3.  One number per point, with its comparison.",
      "4.  CLOSING — the three points again, written in FULL.",
      "5.  Two questions you expect, with prepared answers.",
      "6.  Check: is anything else written in full sentences?",
    ],
    notes: tn({
      time: "18 minutes.",
      how: "Step 6 is the discipline. Anything written in full beyond the opening and closing will be read aloud, and reading kills a talk.",
      answers: "MODEL: see slide 41. Opening and closing in full, the middle in key words, one anticipated question with its answer.",
      mistakes: "Writing the middle in sentences. Take the notes away and have learners rewrite the middle in key words only.",
      tip: "Collect these notes before the presentations. Learners with proper notes perform visibly better than those with a script.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — what good notes contain", sub: "Five tests. Apply them to your own.",
    size: 16.5,
    items: [
      { q: "1 — is the opening written in full?", a: "It should be, and memorised.", why: "Nerves are worst in the first thirty seconds. A memorised opening carries you past them." },
      { q: "2 — is the middle in key words?", a: "Key words only. No sentences.", why: "Key words force you to speak live. Sentences get read aloud, and the audience notices immediately." },
      { q: "3 — does every number have a comparison?", a: "“6 days now / 4 last year”, not just “6 days”.", why: "A number alone tells the audience nothing about whether it is good or bad news." },
      { q: "4 — is the closing written in full?", a: "Yes — it is what they carry out of the room.", why: "The conclusion is the most important thirty seconds and the one most often lost to over-running." },
      { q: "5 — are hard questions prepared?", a: "One or two, with the answer noted.", why: "Five minutes of preparation removes most of the fear of the question round." },
    ],
    notes: keyNotes("Test 2 is the one to enforce. Have learners cover their notes and try to deliver point one — if they cannot, the notes are a script."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your presentation checklist", sub: "Six checks. Before you stand up.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Do I have exactly THREE points?", d: "Not five. Nobody remembers five." },
      { t: "Is my opening memorised — with no apology?", d: "Greeting, name, topic, structure." },
      { t: "Is there a signpost between every point?", d: "“That brings me to…”" },
      { t: "Does every number have a comparison?", d: "“Six days, against four last year.”" },
      { t: "Does my conclusion repeat the three points?", d: "One sentence each. Thirty seconds." },
      { t: "Are my slides under six lines each?", d: "The detail is spoken, not shown." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Run this checklist with every learner before their presentation. It catches most problems in two minutes.",
      tip: "Check 2 is the one to enforce hardest. The apology is almost universal and always damaging.",
      activity: "Six checks: learners check each other's notes against this list before presenting.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. How many points should a five-minute talk have?", opts: "a) one     b) three     c) six" },
      { q: "2. Should you apologise for your English at the start?", opts: "a) yes, it is polite     b) never     c) only if it is bad" },
      { q: "3. “That brings me to…” is used to:", opts: "a) open a talk     b) move between points     c) conclude" },
      { q: "4. You are asked a question you cannot answer. Best response?", opts: "a) guess     b) “I'll find out and email you”     c) change the subject" },
      { q: "5. “Sales rose ___ in March.”", opts: "a) sharp     b) sharply     c) more sharp" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 b",
      tip: "Question 2 is the one that changes behaviour. Say the answer aloud twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the signpost", sub: "Nine phrases, seven gaps.",
    color: C.green, instruction: "Write the missing signpost phrase.", size: 18,
    items: [
      "1.  “Today I'd ______ to talk about our results.”",
      "2.  “I'll ______ three things.”",
      "3.  “Let's ______ with sales.”",
      "4.  “That ______ me to costs.”",
      "5.  “______ , what we do next.”",
      "6.  “So, to ______ up…”",
      "7.  “I'm happy to take any ______ .”",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Take the answers orally at speed. These must be automatic — on your feet there is no time to construct them.",
      answers: "1 like · 2 cover · 3 start · 4 brings · 5 Finally · 6 sum · 7 questions",
      mistakes: "Item 4 is the one learners forget. Drill “that brings me to” ten times.",
      tip: "Read all seven in order and the class will hear a complete presentation skeleton.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Phrases, trends and questions.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the PHRASE to its MOMENT", opts: "1. “Let's start with…”     2. “That brings me to…”     3. “So, to sum up…”     4. “As you can see here…”" },
      { q: "a) transition     b) conclusion", opts: "c) first point     d) pointing at a chart" },
      { q: "Part 2 — match the TREND to its VERB", opts: "1. ↗ big     2. ↘ small     3. →          a) fell slightly     b) stayed the same     c) rose sharply" },
      { q: "Part 3 — match the QUESTION PROBLEM to the RESPONSE", opts: "1. did not hear it     2. do not know     3. unclear          a) “So you're asking about…?”     b) “Could you repeat the question?”     c) “I'll find out and email you.”" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–a, 3–b, 4–d.  ·  Part 2: 1–c, 2–a, 3–b.  ·  Part 3: 1–b, 2–c, 3–a.",
      tip: "Part 3 is the most useful. Three problems, three phrases, and the question round stops being frightening.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — write the opening", sub: "Four sentences. Your own content.",
    color: C.green, instruction: "Write your own four-sentence opening for a talk about your work.", size: 18,
    items: [
      "1.  Greeting, your name, and where you work.",
      "2.  “Today I'd like to talk about ___.”",
      "3.  “I'll cover three things: ___, ___ and ___.”",
      "4.  “Let's start with ___.”",
      "5.  Check: did you apologise for your English anywhere?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Item 5 is the check that matters. Learners insert the apology without noticing they have done it.",
      answers: "MODEL: “Good morning. I'm Hana, from the finance team. Today I'd like to talk about our March costs. I'll cover three things: what we spent, why it rose, and what I suggest. Let's start with what we spent.”",
      mistakes: "Topics that are too broad. “My work” is not a topic; “our March costs” is.",
      tip: "Have every learner say their four sentences aloud standing up before the lesson ends.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — fix the presentation sentences", sub: "Too long, too written, or missing a comparison.",
    color: C.green, instruction: "Rewrite each one for a spoken presentation.", size: 17,
    items: [
      "1.  Sales were 5 million birr.",
      "2.  The implementation of the training resulted in improved performance.",
      "3.  It went up.",
      "4.  There was a deterioration of fifty per cent in the current quarter.",
      "5.  Sorry, my English is not very good, so please be patient.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Each item breaks a different rule: no comparison, too written, no detail, too written again, and the apology.",
      answers: "MODELS: 1 Sales were 5 million — up 12% on last year. · 2 We ran the training, and people got better at the job. · 3 Sales rose sharply in March, up 20%. · 4 Things got 50% worse this quarter. · 5 Delete it entirely. Say “Good morning, I'm ___” instead.",
      mistakes: "Item 5 must be deleted, not softened. There is no acceptable version of the apology.",
      tip: "Item 3 shows what a bare direction statement loses: the size and the period are where the information is.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  A five-minute talk should have five or six points.",
      "2.  You should apologise for your English at the start.",
      "3.  Signposts are for the audience, not the speaker.",
      "4.  “I don't know, but I'll find out” is a weak answer.",
      "5.  A slide should contain the full text of what you say.",
      "6.  A number is more useful with a comparison.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — three · 2 F — never · 3 T · 4 F — it is a strong answer · 5 F — about six lines of six words · 6 T",
      tip: "Items 2 and 4 are the two beliefs that damage presentations most. Correct both firmly.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own presentation.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What are your three points? One sentence each.",
      "2.  What is the one number in your talk, and its comparison?",
      "3.  What is the hardest question you might be asked?",
      "4.  How will you answer it if you do not know?",
      "5.  Which delivery habit will you concentrate on?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Question 3 is the preparation that removes most of the fear. Anticipating a hard question costs two minutes.",
      answers: "No fixed answers. Question 4 should be “I'll find out and email you” or similar — never a guess.",
      mistakes: "Question 1 answered with five points. Enforce three.",
      tip: "Collect these before the presentations and use question 3 to generate the actual questions asked.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Standing up. Every round.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Stand and deliver. Your partner checks against the list.", size: 19,
    items: [
      "1.  Your four-sentence opening. No apology.",
      "2.  One point with a signposted transition into it.",
      "3.  Describe one number with a comparison.",
      "4.  Your conclusion, repeating three points in 30 seconds.",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Every round is done standing. Sitting practice does not transfer — the physical situation is part of what makes presenting hard.",
      answers: "SUCCESS CRITERIA: 1 four sentences, no apology · 2 an audible signpost · 3 direction, size, period and comparison · 4 three points in thirty seconds.",
      tip: "Round 4 is the one learners have least practised, because they always run out of time. Drill it separately.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full rehearsal", sub: "Everything together. Timed.",
    color: C.green, instruction: "In groups of four. Each person presents; the others are the audience.", size: 17,
    items: [
      { q: "1. Deliver your full five-minute presentation.", opts: "Timed. Warning at four minutes." },
      { q: "2. The audience asks three questions.", opts: "One must be unanswerable." },
      { q: "3. The audience names one thing done well.", opts: "Be specific." },
      { q: "4. The audience names one thing to improve.", opts: "One only. Specific." },
      { q: "5. Deliver the opening and conclusion again, improved.", opts: "Just those two parts." },
    ],
    notes: tn({
      time: "A full lesson in groups of four.",
      how: "Step 5 is what makes this a rehearsal rather than a test. Improving immediately after feedback is where the learning happens.",
      answers: "Assessed on the six checks from slide 50. Structure and delivery only — not grammar.",
      mistakes: "Feedback that is vague or excessive. One specific thing well and one specific thing to improve.",
      tip: "Groups of four keep the audience small enough that everyone gets a full round, and large enough to feel real.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why is apologising for your English so damaging?", opts: "What does it tell the audience to do?" },
      { q: "2. The slide 38 version had MORE information and was understood LESS. Why?", opts: "What was missing?" },
      { q: "3. Why is “I don't know, I'll find out” a strong answer?", opts: "Compare it with guessing." },
      { q: "4. Why write only the opening and closing in full?", opts: "What happens to the middle if you write it out?" },
    ],
    notes: tn({
      time: "13 minutes. Discussion, not writing.",
      how: "Question 2 refers back to a demonstration the class experienced, which makes the answer theirs rather than yours.",
      answers: "1 It tells the audience to listen for errors, and they will then hear errors that were not there. 2 There was no structure, so the extra content had nothing to attach to — the audience could not tell where one point ended and the next began. 3 It is honest and offers an action; a guess will be checked and, when wrong, costs the credibility of the whole talk. 4 Because anything written in full gets read aloud, and a read talk is flat and loses eye contact.",
      tip: "Question 1 is the one to end on. It is the single most common and most damaging habit among learner presenters.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Structure", items: [
      { q: "1. Name the three parts of a presentation.", opts: "Three answers." },
      { q: "2. How many points should a five-minute talk have?", opts: "a) one     b) three     c) six" },
      { q: "3. What are the four sentences of a strong opening?", opts: "Four answers." },
      { q: "4. Should you apologise for your English?", opts: "One word, and why." },
    ] },
    { part: "Part 2 · Signposting", items: [
      { q: "5. What do you say to move between points?", opts: "Write the phrase." },
      { q: "6. What do you say to start the conclusion?", opts: "Write the phrase." },
      { q: "7. Who are signposts for?", opts: "One answer." },
      { q: "8. Name three signpost phrases.", opts: "Three answers." },
    ] },
    { part: "Part 3 · Numbers", items: [
      { q: "9. “Sales rose ___ in March.”", opts: "a) sharp     b) sharply" },
      { q: "10. What three parts does a trend sentence need?", opts: "Three answers." },
      { q: "11. Difference between “rose by 20%” and “rose to 20%”?", opts: "One sentence." },
      { q: "12. What is missing from “Sales were 5 million”?", opts: "One word." },
    ] },
    { part: "Part 4 · Questions and delivery", items: [
      { q: "13. You cannot answer a question. What do you say?", opts: "Write the phrase." },
      { q: "14. Is that a weak answer?", opts: "Yes or no, and why." },
      { q: "15. Name three delivery habits that are not language.", opts: "Three answers." },
      { q: "16. How long should you pause after a point?", opts: "One answer." },
    ] },
    { part: "Part 5 · Doing it", items: [
      { q: "17. How many lines should a slide have?", opts: "One answer." },
      { q: "18. Which parts of your notes are written in full?", opts: "Two answers." },
      { q: "19. Rewrite for speech: “The implementation resulted in increased efficiency.”", opts: "One short sentence." },
      { q: "20. SPEAKING: deliver your five-minute presentation.", opts: "Assessed live, with three questions." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 6 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is the presentation itself." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is worth as much as the other nineteen together. Assess it with the six checks from slide 50 — structure and delivery, not grammar.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the three parts", a: "Introduction · body · conclusion.", why: "Tell them what you will say, say it, tell them what you said. Repetition replaces the re-reading a listener cannot do." },
      { q: "Q2 — how many points?", a: "b) three", why: "Nobody remembers five. Three is the limit for what an audience carries out of the room." },
      { q: "Q3 — the four opening sentences", a: "Greeting and name · topic · structure · first point.", why: "Memorise these with your own content and the hardest thirty seconds are already handled." },
      { q: "Q4 — apologising", a: "Never.", why: "It tells the audience to expect problems, and they will then hear errors that were not there." } ],
    [ { q: "Q5 — moving between points", a: "“That brings me to…”", why: "The best transition in English presentations. Silence between points loses the structure." },
      { q: "Q6 — starting the conclusion", a: "“So, to sum up…”", why: "It tells the audience this is the part to remember." },
      { q: "Q7 — who are signposts for?", a: "The audience.", why: "You already know where you are. They do not, and they cannot go back to check." },
      { q: "Q8 — three phrases", a: "Any three of the six from slide 28.", why: "Learn them as chunks. On your feet there is no capacity to construct a transition." } ],
    [ { q: "Q9 — “Sales rose ___”", a: "b) sharply", why: "An adverb describes the verb. “Sharp” is an adjective and cannot modify “rose”." },
      { q: "Q10 — the three parts of a trend sentence", a: "A verb for direction · an adverb for size · the time period.", why: "“Sales rose sharply in March.” All three, in one short sentence." },
      { q: "Q11 — by or to?", a: "BY is the amount of change. TO is the level reached.", why: "Two completely different claims, and the confusion causes real misunderstanding." },
      { q: "Q12 — what is missing?", a: "A comparison.", why: "A number alone tells the audience nothing about whether it is good or bad news." } ],
    [ { q: "Q13 — a question you cannot answer", a: "“I don't have that figure — I'll find out and email you.”", why: "Honest, and it offers an action. Never invent a number." },
      { q: "Q14 — is that weak?", a: "No — it is a strong answer.", why: "A guess will be checked. When it is wrong, the whole presentation loses credibility with it." },
      { q: "Q15 — three delivery habits", a: "Look at people · stand still · speak louder · pause · slow down.", why: "None of these is English. A large part of presenting well has nothing to do with language." },
      { q: "Q16 — how long to pause?", a: "About two seconds.", why: "It feels long to you and helpful to them. Do not fill it with “erm”." } ],
    [ { q: "Q17 — slide length", a: "About six lines of about six words. Never full sentences.", why: "The audience cannot read and listen at once, and reading always wins." },
      { q: "Q18 — what is written in full?", a: "The opening and the conclusion only.", why: "Nerves are worst at the start; the conclusion is what they carry away. Everything else is key words." },
      { q: "Q19 — rewrite for speech", a: "“We brought in the new system, and it made us faster.”", why: "Turn the long noun phrase into a verb. Shorter words, one idea per sentence, one breath." },
      { q: "Q20 — the presentation", a: "Assessed on structure and delivery, not grammar", why: "Six checks: three points, memorised opening with no apology, signposts, numbers with comparisons, a real conclusion, and sparse slides." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q4, Q7 and Q14 are the diagnostic block: never apologise, signposts serve the audience, and admitting ignorance is strength. All three are attitude as much as technique."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Build the talk in stages.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Choose your topic and your THREE points", d: "One sentence each. No more than three." },
      { t: "Write and memorise your four-sentence opening", d: "Say it aloud ten times. No apology." },
      { t: "Write your notes in the slide-41 format", d: "Opening and closing in full. Middle in key words." },
      { t: "Deliver the whole talk aloud, standing, and time it", d: "Alone in a room is fine. Standing is the point." },
      { t: "Deliver it again and record it", d: "Then watch it. That is the hard part." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Thursday's task must be done standing and aloud. Rehearsing in your head takes half the time and delivers none of the benefit.",
      tip: "Friday's recording is uncomfortable and more useful than any feedback a teacher can give. Most learners have never seen themselves present.",
      activity: "Ask learners to note one thing they noticed on the recording and bring it to the lesson.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your presentation notes", d: "Opening and closing in full, middle in key words, two prepared questions." },
      { t: "Three slides, maximum six lines each", d: "Or a single sheet of paper if you have no projector." },
      { t: "Deliver the five-minute presentation in class", d: "With three questions from the audience afterwards." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 3 is the assessment and it must happen in front of the class. A presentation delivered to one person is a different task.",
      mistakes: "Learners bring a script. Check the notes at the door and send scripts back for rewriting.",
      tip: "If there is no projector, three sheets of paper held up work perfectly well. Do not let equipment become an excuse.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your presentation will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaSitemap", title: "Structure — 10 marks", desc: "Memorised opening, no apology (3) · exactly three points (2) · a signpost between each (3) · conclusion repeating the points (2)." },
      { icon: "FaChartBar", title: "Content — 8 marks", desc: "One number per point (3) · every number compared (3) · slides under six lines (2)." },
      { icon: "FaMicrophone", title: "Delivery and questions — 7 marks", desc: "Eye contact and volume (2) · pauses between points (2) · three questions handled (3)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → rehearse the opening daily and present again." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Note what is NOT marked: grammar, vocabulary range and accent. Say so before they start — it removes a great deal of anxiety.",
      tip: "Give the mark privately with two comments: one thing done well and one to improve. Never critique publicly after a presentation.",
      mistakes: "Marking English accuracy. This module assesses structure and delivery, and mixing in grammar undoes the whole thing.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaSitemap", title: "Three-part structure", desc: "Say what you'll say, say it, say what you said." },
      { icon: "FaFlag", title: "Signposting", desc: "Nine phrases carry a whole talk. They are for the audience." },
      { icon: "FaPlay", title: "The first thirty seconds", desc: "Four memorised sentences. Never apologise for your English." },
      { icon: "FaChartLine", title: "Numbers and trends", desc: "Verb, adverb, period — and always a comparison." },
      { icon: "FaWalking", title: "Delivery", desc: "Look up, stand still, louder, slower, and pause." },
      { icon: "FaQuestion", title: "Handling questions", desc: "Four situations, four phrases. “I'll find out” is strong." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3. The answers the class gave about bad presentations should now map onto specific fixable techniques.",
      tip: "Ask who is less afraid of presenting than they were four lessons ago. The show of hands is the real result of this module.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The presentation toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaPlay", title: "The opening — four sentences", desc: "1  “Good morning. I'm ___, from ___.”\n2  “Today I'd like to talk about ___.”\n3  “I'll cover three things: ___.”\n4  “Let's start with ___.”\nNEVER apologise for your English." },
      { icon: "FaFlag", title: "The signposts", desc: "“Let's start with…”\n“That brings me to…”\n“Finally…”\n“So, to sum up…”\n“I'm happy to take questions.”" },
      { icon: "FaChartLine", title: "Describing numbers", desc: "VERB + ADVERB + PERIOD\n“Sales rose sharply in March.”\n\nAlways add the comparison:\n“…up 20% on February.”" },
      { icon: "FaQuestion", title: "Questions", desc: "Didn't hear → “Could you repeat that?”\nNeed time → “That's a good question.”\nDon't know → “I'll find out and email you.”\nUnclear → “So you're asking about…?”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The first and fourth boxes are what they will hold in their hand before a real presentation.",
      tip: "Print the first box. A memorised opening is the single thing that most reduces presentation fear.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You have stood up in front of a room and presented in English. That is further than most people ever get.",
    sub: "The structure is nine phrases, three points and a memorised opening.\nEverything else was nerves — and you have now done it once, which is what changes them.",
    chips: ["NEXT — Module 7", "Interviews & Employability", "CVs, cover letters and the questions you will be asked"],
    notes: tn({
      time: "5 minutes.",
      how: "Name what they have done. Presenting in a second language in front of peers is genuinely difficult and most people avoid it their whole careers.",
      tip: "Preview Module 7: it uses everything from Modules 1 to 6 — the fluency, the perfect tense, the workplace register and the question-handling — applied to a job interview and a CV.",
      activity: "Ask every learner to name one thing they will do differently in their next real presentation.",
    }),
  });
};
