"use strict";
/* LEVEL 4 · MODULE 5 — Public Speaking & Storytelling   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 4", levelNo: LV.no, levelName: "Advanced Spoken\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Public Speaking & Storytelling",
    sub: "Level 3 taught you to give a clear presentation. This module is about being worth listening to — which is a different problem, and stories are most of the answer.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "7 MIN", v: "FINAL TALK" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by naming the difference from Level 3 Module 6. That module made learners clear. This one makes them memorable, and clarity alone does not do it.",
      tip: "Every learner gives a seven-minute talk at the end. Say so in lesson one — it changes how they engage with everything before it.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. None of them is about slides.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Tell a story that makes a point", d: "Five parts. It is the oldest tool there is and the most reliable." },
      { t: "Open without notes and without an apology", d: "Three ways in that are not “Today I'd like to talk about…”" },
      { t: "Use silence deliberately", d: "The most under-used tool in public speaking." },
      { t: "Speak from notes, not from a script", d: "And know exactly what belongs on the card." },
      { t: "Close so that people remember one thing", d: "If they remember one thing, you succeeded." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 3 surprises people. Silence feels like failure to a nervous speaker and reads as confidence to an audience.",
      tip: "Objective 5 is the standard for the whole module. One thing remembered is a success; five things half-remembered is not.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: tell us something that happened", sub: "Ninety seconds. No preparation.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaBookOpen", title: "1 · A real story", desc: "Something that happened to you at work or in your life. 90 seconds. Start now." },
      { icon: "FaQuestion", title: "2 · What was the point?", desc: "Your partner says what they think the point was. Were they right?" },
      { icon: "FaBrain", title: "3 · Yesterday's talk", desc: "Think of a talk you heard this year. What do you remember? Anything?" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Task 2 is the diagnostic. Most learners tell a story with no point, or with a point the listener cannot recover. Naming that gap is the module's starting position.",
      mistakes: "Correct nothing. Note whether the stories had endings — most stop rather than finish.",
      tip: "Task 3 almost always produces “nothing” or one image. That is the honest evidence for slide 5.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Nobody remembers your structure. They remember one story and one sentence.",
    sub: "A clear talk is the minimum. A memorable one gives the audience something they can repeat to somebody else the next day —\nand that is almost always a story or a phrase, never a bullet point.",
    chips: ["One story", "One sentence", "That is the whole target"],
    notes: tn({
      time: "7 minutes.",
      how: "Connect back to warm-up task 3. Whatever learners remembered from a talk this year was almost certainly a story or an image, not a list.",
      mistakes: "Learners aim to cover material. Coverage is not the goal — transfer is, and transfer happens through story.",
      extra: "This does not replace Level 3 Module 6. Structure and signposting are still required; they are the floor, not the ceiling.",
      tip: "The two chips are the module's whole standard. Everything else serves them.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — why stories
  L.compare({
    sec: SEC.con, title: "Why a story beats a statistic",
    sub: "Both are true. Only one survives the walk to the car park.",
    left: { h: "The statistic", items: ["“Forty per cent of students leave before week five.”", "→ Accurate.", "→ Important.", "→ Forgotten by tomorrow.", "→ Nobody repeats it."] },
    right: { h: "The story", items: ["“Mimi came to the first class with her sister's textbook. By week four she'd stopped coming — she was walking two hours each way.”", "→ Same point.", "→ Remembered for months.", "→ People repeat it."] },
    note: "Use BOTH. The story makes them feel it; the number proves it is not just one person. Either alone is weaker than the pair.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the professional position. A story without a number is an anecdote; a number without a story is forgettable. The pair is what persuades.",
      mistakes: "Replacing evidence with story. Module 2 was explicit that one case proves nothing — this module adds that one case is what carries the proof.",
      extra: "The story is specific: a name, a textbook, two hours. Specificity is what makes a story stick, not length.",
      tip: "Ask which of the two the class would repeat at home tonight. The answer is unanimous and it makes the argument for you.",
      activity: "Pair them up: give five statistics and have learners invent a matching one-sentence story for each.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the five parts
  L.panelSide({
    sec: SEC.con, title: "The five parts of a story", sub: "Ninety seconds. It works every time.",
    panelW: 6.8,
    panel: { label: "The structure", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "1.  WHO and WHERE  —  one line\n     “A student called Mimi, in Adama.”\n2.  WHAT WAS NORMAL  —  one line\n     “She came every class for three weeks.”\n3.  WHAT CHANGED  —  the turn\n     “Then she stopped.”\n4.  WHAT HAPPENED  —  two or three lines\n     “She was walking two hours each way.”\n5.  THE POINT  —  one line\n     “We weren't losing weak students.\n      We were losing distant ones.”" },
    side: { label: "The rules", color: C.green, size: 16, items: [
      "Part 3 is the hinge. Without a change, it is a description, not a story.",
      "Part 5 must be SAID. Do not leave the audience to work it out.",
      "Ninety seconds total. Longer and it becomes an anecdote.",
      "One name, one place, one detail. Specificity is what makes it stick.",
    ] },
    notes: tn({
      time: "17 minutes. The centre of the module.",
      how: "Part 3 is what learners omit. A story with no turn is a description, and descriptions are not remembered.",
      mistakes: "Leaving part 5 implicit. Speakers fear it is patronising to state the point; audiences reliably take away the wrong one if you do not.",
      extra: "The specificity rule matters more than length. “A student” is forgettable; “Mimi, with her sister's textbook” is not.",
      tip: "Time it. Ninety seconds is short and the discipline is what keeps it a story rather than a ramble.",
      activity: "Five parts: every learner tells a real ninety-second story with all five parts labelled.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — openings
  L.table({
    sec: SEC.con, title: "Three ways to open that are not “Today I'd like to talk about…”",
    sub: "Level 3's opening is safe. These are better.",
    table: {
      color: C.green, rowH: 0.52, fontSize: 16.5, headSize: 16, colW: [2.8, 4.6, 4.933],
      rows: [
        ["Type", "Example", "Why it works"],
        ["A story, cold", "“Last March a student came to my class with her sister's textbook.”", "they are listening before they know the topic"],
        ["A question", "“How many of our students finish the course? Have a guess.”", "makes them commit to an answer"],
        ["A number", "“Forty per cent. That's how many leave before week five.”", "a fact with no context demands one"],
      ],
    },
    note: "Then, after the hook, do the Level 3 opening: your name, the topic, and the three things you will cover. Hook first, structure second.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is important. This does not replace Level 3's four-sentence opening — it comes fifteen seconds before it.",
      mistakes: "Hooking and never getting to the structure. The audience needs both: a reason to listen, then a map.",
      extra: "Row 1 is the strongest and the most uncomfortable. Starting cold with a story, before saying who you are, feels wrong and works.",
      tip: "Row 2 must be a real question with a pause. Asking and answering it yourself immediately wastes it.",
      activity: "Three hooks: every learner writes all three openings for the same talk, then delivers the best one.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — silence
  L.compare({
    sec: SEC.con, title: "Silence — the most under-used tool",
    sub: "Two seconds feels like ten to you and like nothing to them.",
    left: { h: "Where to pause", items: ["After the hook — let it land", "Before the point of a story", "After a number", "Before the conclusion", "After a question to the audience"] },
    right: { h: "What it does", items: ["They realise you are in control", "It marks what is coming as important", "It gives them time to absorb it", "It signals “this is the part to remember”", "It forces them to actually think"] },
    note: "A nervous speaker fills every gap. A confident one creates them. Silence is the difference an audience notices without being able to name it.",
    notes: tn({
      time: "15 minutes.",
      how: "Demonstrate it. Deliver a sentence, pause for a full two seconds, then continue. The room becomes noticeably more attentive and learners feel it happen.",
      mistakes: "Filling pauses with “erm” or “so”. That converts a tool into a tic.",
      extra: "The pause before a conclusion is the highest-value one. Two seconds of silence, then “So what does this mean?” and the room comes back.",
      tip: "Count in your head. Nervous speakers consistently under-estimate a pause by half.",
      activity: "Two seconds: learners deliver a 60-second piece with three deliberate two-second pauses.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — notes not scripts
  L.panelSide({
    sec: SEC.con, title: "What belongs on the card", sub: "A script gets read. A card gets spoken.",
    panelW: 6.8,
    panel: { label: "One card. That is all.", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "WRITTEN IN FULL  (2 things only)\n     ·  the first sentence\n     ·  the last sentence\n\nKEY WORDS ONLY\n     ·  the three points\n     ·  the story: name · turn · point\n     ·  the one number\n\nNOT ON THE CARD\n     ·  anything you can say without it" },
    side: { label: "Why this works", color: C.green, size: 16, items: [
      "The first and last sentences are where nerves are worst. Memorise both.",
      "Key words force you to form the sentence live, which is what keeps it alive.",
      "One card means you cannot read it. That is the point.",
      "If you need two cards, you have too much material.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The one-card rule is the discipline. A speaker with three pages will read them; a speaker with one card cannot.",
      mistakes: "Writing the middle in sentences. Anything written in full gets read aloud, and read talks are flat.",
      extra: "This extends Level 3 Module 6's note format. The addition here is the story's three anchors: name, turn, point.",
      tip: "Take a learner's card away mid-rehearsal. If they can continue, the card was right; if they stop, it was a script.",
      activity: "One card: every learner reduces their talk to a single card and rehearses from it.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — the close
  L.table({
    sec: SEC.con, title: "Closing so that one thing survives",
    sub: "Four ways to end. All of them leave one sentence behind.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [3.2, 4.6, 4.533],
      rows: [
        ["Type", "Example", "When to use it"],
        ["Return to the story", "“Mimi never came back. The next one might.”", "if you opened with a story"],
        ["The one sentence", "“We're not losing weak students. We're losing distant ones.”", "when the point is sharp"],
        ["The ask", "“I'm asking for one thing: move the start to January.”", "when you want a decision"],
        ["The question", "“So what would it take to keep the next Mimi?”", "when you want them thinking"],
      ],
    },
    note: "Never end with “That's all, thank you” and nothing else. Say your last sentence, pause, THEN say thank you. The pause is what makes it land.",
    notes: tn({
      time: "16 minutes.",
      how: "The note is the practical detail everybody gets wrong. Running the final sentence into “thank you” removes its weight entirely.",
      mistakes: "Trailing off. A talk that ends with “…so, yeah, that's it” loses everything the previous six minutes built.",
      extra: "Row 1 is the most satisfying. Returning to the opening story closes a loop the audience did not know was open.",
      tip: "Memorise the last sentence exactly. It is the one thing you want repeated, so it should not be improvised.",
      activity: "Four closes: every learner writes all four endings for the same talk and delivers two.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "anecdote", ipa: "/ˈænɪkdəʊt/", pos: "noun", icon: "FaBookOpen",
      meaning: "A short true story about something that happened.",
      example: "Let me give you an anecdote. She opened with an anecdote about her first job.",
      mistake: "Stress on the FIRST syllable: AN-ec-dote. An anecdote illustrates a point — it does not prove one.",
      notes: tn({ time: "7 minutes.",
        how: "The distinction in the mistake line is the Module 2 evidence rule again. An anecdote carries the proof; it is not the proof.",
        mistakes: "“Anecdotal evidence” means evidence that is only stories — and it is usually said critically. Worth knowing.",
        extra: "Three syllables, and the “c” is a hard /k/. Learners often add a syllable.",
        tip: "“Let me give you an anecdote” is a useful signal: it tells the audience a story is coming and to listen differently.",
        activity: "Anecdote or evidence: give ten supports and have learners classify each." }) },

    { word: "resonate", ipa: "/ˈrezəneɪt/", pos: "verb", icon: "FaBroadcastTower",
      meaning: "To connect with somebody so that it stays with them.",
      example: "That story really resonated with the audience. The message didn't resonate.",
      mistake: "“Resonate WITH somebody”. Stress on the FIRST syllable: RES-o-nate.",
      notes: tn({ time: "7 minutes.",
        how: "This is the exact word for what this module is trying to achieve. A talk can be clear, correct and fail to resonate.",
        mistakes: "Learners use “interesting” where “resonated” is meant. The second names an effect on the listener, not a property of the content.",
        extra: "resonate with · a message that resonates · it resonated deeply.",
        tip: "Ask what has resonated with them in this course. The answers are almost always stories or single sentences.",
        activity: "What resonated: after each practice talk, listeners say which part resonated and why." }) },

    { word: "vivid", ipa: "/ˈvɪvɪd/", pos: "adjective", icon: "FaEye",
      meaning: "So clear and detailed that you can picture it.",
      example: "A vivid description. She gave a vivid account of the first day.",
      mistake: "Contains the /v/ sound twice — one of the six target sounds from Level 1. VIV-id, stress on the first.",
      notes: tn({ time: "7 minutes.",
        how: "The word names the technique from slide 6: specificity is what makes a story vivid, not length or emotion.",
        mistakes: "The double /v/ is a genuine pronunciation test. Drill it against “bib” and “bid”.",
        extra: "vivid detail · a vivid memory · vividly. The adverb is useful: “I remember it vividly.”",
        tip: "Vivid comes from detail, not from adjectives. “Her sister's textbook” is vivid; “a very difficult situation” is not.",
        activity: "Make it vivid: give five vague statements and have learners add one specific detail to each." }) },

    { word: "pause", ipa: "/pɔːz/", pos: "noun and verb", icon: "FaPauseCircle",
      meaning: "A short silence, used deliberately.",
      example: "Pause after the number. A two-second pause is enough.",
      mistake: "The “au” is /ɔː/, as in “more”. And a pause is DELIBERATE — hesitating is not pausing.",
      notes: tn({ time: "7 minutes.",
        how: "The distinction between a pause and a hesitation is the whole of slide 8. Same silence, opposite effect, and the difference is intention.",
        mistakes: "Confusing it with “pose”. The vowel is long and rounded.",
        extra: "pause for effect · a pregnant pause · pause before the point.",
        tip: "“Pause for effect” is worth teaching as a phrase. It names something learners can then deliberately do.",
        activity: "Pause or hesitate: listen to five clips and have learners judge which each was." }) },

    { word: "takeaway", ipa: "/ˈteɪkəweɪ/", pos: "noun", icon: "FaBullseye",
      meaning: "The one thing you want people to remember and repeat.",
      example: "The takeaway is that we're losing distant students, not weak ones.",
      mistake: "One word as a noun. Stress on the FIRST syllable. And there should be ONE takeaway, not five.",
      notes: tn({ time: "8 minutes.",
        how: "This word gives learners the vocabulary for the module's standard. “What is your takeaway?” is the question to ask about every talk.",
        mistakes: "Listing three takeaways. If there are three, the audience keeps none.",
        extra: "“The key takeaway is…” is a standard closing phrase in professional English and very usable.",
        tip: "Ask every learner to write their takeaway in one sentence BEFORE they write the talk. It shapes everything else.",
        activity: "One sentence: every learner writes their takeaway before planning anything else." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Speaking Language 1 of 5" }),
    title: "Narrative tenses — telling a story",
    sub: "Three tenses do all the work.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [3.6, 3.8, 4.733],
      rows: [
        ["Tense", "What it does", "Example"],
        ["past simple", "the events, in order", "She came. She stopped. I asked."],
        ["past continuous", "the background", "She was walking two hours each way."],
        ["past perfect", "what happened before", "She had borrowed her sister's book."],
      ],
    },
    note: "The past continuous is what makes a story feel like a scene rather than a list. “She was walking” places you there; “she walked” does not.",
    notes: tn({
      time: "14 minutes.",
      how: "This is Level 3 Module 4 doing storytelling work. The tenses were learned there; here they earn their keep.",
      mistakes: "Telling the whole story in the past simple. It becomes a list of events with no atmosphere.",
      extra: "The past perfect is what lets you fill in background without breaking the order. “She had borrowed the book” explains without rewinding.",
      tip: "One continuous and one perfect in a ninety-second story is about right. More and it becomes heavy.",
      activity: "Add the scene: give a story told entirely in past simple and have learners add continuous and perfect.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Speaking Language 2 of 5" }),
    title: "Vague and vivid",
    sub: "Specificity is the whole technique.",
    left: { h: "Vague", items: ["“A student had difficulties.”", "“It was quite far.”", "“Many people were affected.”", "“She had problems with materials.”", "→ Nothing to picture."] },
    right: { h: "Vivid", items: ["“Mimi stopped coming in week four.”", "“Two hours each way, on foot.”", "“Sixty of the hundred and forty.”", "“She was using her sister's textbook.”", "→ You can see it."] },
    note: "Vivid does not mean emotional or long. It means SPECIFIC: a name, a number, an object. Three details are enough for a whole story.",
    notes: tn({
      time: "15 minutes.",
      how: "The note corrects the commonest misunderstanding. Learners try to be vivid by adding adjectives; the technique is detail, not description.",
      mistakes: "“A very difficult and challenging situation” is longer and less vivid than “two hours each way, on foot”.",
      extra: "The three details that matter: a name, a number, an object. Anything else is usually decoration.",
      tip: "This is Level 3 Module 8's plain English principle applied to narrative: concrete beats abstract, short beats long.",
      activity: "Three details: give five vague stories and have learners add exactly three specific details to each.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Speaking Language 3 of 5" }),
    title: "The language of a hook",
    sub: "The first fifteen seconds. Three ways in.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 16, headSize: 15.5, colW: [3.0, 4.8, 4.533],
      rows: [
        ["Type", "How to say it", "Then"],
        ["Story", "“Last March, a student walked into my class with her sister's textbook.”", "pause, then say who you are"],
        ["Question", "“How many of our students finish? Have a guess.”", "PAUSE. Let them guess."],
        ["Number", "“Forty per cent.”  ( pause )  “That's how many leave before week five.”", "pause between the two halves"],
      ],
    },
    note: "All three need a PAUSE immediately after. The hook does not work if you rush past it into your introduction.",
    notes: tn({
      time: "15 minutes.",
      how: "The pause is what makes the hook function. Delivered and then immediately explained, it is just a sentence.",
      mistakes: "Asking a question and answering it half a second later. The audience must be given time to actually guess.",
      extra: "Row 3's split — the number, then the pause, then the meaning — is the strongest of the three and the easiest to deliver.",
      tip: "Learners find the cold story opening hardest because it delays saying who they are. That delay is exactly why it works.",
      activity: "Fifteen seconds: every learner delivers all three hooks for their talk and the class picks the best.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Speaking Language 4 of 5" }),
    title: "Rhythm devices that work", sub: "Ancient, effective, and entirely honest when what you say is true.",
    panelW: 6.9,
    panel: { label: "Four devices", color: C.gram, tint: C.surf2, size: 16, lsm: 1.34,
      text: "THE RULE OF THREE\n  “No books. No light. No time.”\n\nCONTRAST\n  “We're not losing weak students.\n   We're losing distant ones.”\n\nREPETITION\n  “Two hours there. Two hours back.”\n\nTHE SHORT SENTENCE AFTER A LONG ONE\n  “…and she never came back again.\n   Not once.”" },
    side: { label: "How to use them", color: C.gram, size: 16, items: [
      "One or two per talk. Four in seven minutes is too many.",
      "Save them for the sentence you want repeated.",
      "Contrast is the strongest — it gives the audience your takeaway in one line.",
      "Say them SLOWER than the rest, not louder.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The contrast device is the most valuable. “Not X — Y” is how a takeaway travels, and it fits on one line.",
      mistakes: "Over-use. A talk full of rhetorical devices sounds like a performance and audiences stop trusting it.",
      extra: "The short sentence after a long one is the least known and very effective. It works because the rhythm breaks.",
      tip: "Say them slower, never louder — the same rule as Module 3 slide 33.",
      activity: "One device: every learner picks ONE device for their key sentence and drills it.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Speaking Language 5 of 5" }),
    title: "Put it all together — the seven-minute talk", sub: "A complete shape. Time each section.",
    color: C.gram, size: 18, labels: ["15s", "30s", "90s", "3m", "60s", "45s"],
    items: [
      { t: "HOOK — a story, a question or a number. Then PAUSE.", d: "Before you say who you are." },
      { t: "WHO YOU ARE and the three things you'll cover", d: "The Level 3 opening, delivered second." },
      { t: "THE STORY — five parts, ninety seconds", d: "Who · normal · the turn · what happened · the point." },
      { t: "THE THREE POINTS with evidence", d: "One number per point. Signposts between." },
      { t: "THE TAKEAWAY — one sentence, using contrast", d: "“We're not losing weak students. We're losing distant ones.”" },
      { t: "CLOSE — return to the story, pause, then thank you", d: "Memorise the last sentence exactly." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "The timings are deliberate. The story and the takeaway together take under two minutes and carry most of what the audience will retain.",
      mistakes: "Cutting the story when time runs short. Cut a point instead — the story is what survives.",
      extra: "Sections 1 and 6 are the only fully memorised parts. Everything else comes from key words.",
      tip: "Print this shape. It is the whole module on one slide and it scales from three minutes to twenty.",
      activity: "Time each section: learners rehearse with a stopwatch and mark where they over-run.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — story or statistic?", sub: "Use both, in the right order.", items: [
      { q: "You have a strong number. Do you still need a story?", a: "Yes — the number proves it, the story makes them feel it.", why: "Either alone is weaker. The pair is what people repeat the next day." },
      { q: "Is a story enough evidence on its own?", a: "No. One case proves nothing.", why: "Module 2 was explicit about this. The story carries the proof; it is not the proof." },
      { q: "Which comes first?", a: "Usually the story, then the number.", why: "The story makes them care; the number then tells them it is not just one person." },
    ] },
    { title: "Guided examples 2 — the five parts", sub: "Which part is missing?", items: [
      { q: "“A student in Adama came to class every week and worked hard.” What is missing?", a: "The turn. Nothing changed.", why: "Part 3 is the hinge. Without a change it is a description, not a story." },
      { q: "“…she stopped coming. She was walking two hours each way.” What is missing now?", a: "The point. Say it out loud.", why: "Audiences reliably take away the wrong point if you leave them to work it out." },
      { q: "How long should the whole thing be?", a: "About ninety seconds.", why: "Longer and it becomes an anecdote with no shape. The discipline is what keeps it a story." },
    ] },
    { title: "Guided examples 3 — hooks", sub: "The first fifteen seconds.", items: [
      { q: "What is wrong with “Today I'd like to talk about student retention”?", a: "Nothing — but it gives them no reason to listen yet.", why: "It is the correct second move. The hook should come fifteen seconds before it." },
      { q: "You open with a question. What must you do next?", a: "Pause. Let them actually guess.", why: "Answering it yourself half a second later wastes the whole device." },
      { q: "Why open with a story before saying who you are?", a: "They are listening before they know the topic.", why: "It feels wrong to the speaker and works on the audience. The delay is the point." },
    ] },
    { title: "Guided examples 4 — silence", sub: "Two seconds, deliberately.", items: [
      { q: "Where is the most valuable pause in a talk?", a: "Immediately before the conclusion.", why: "Two seconds of silence, then “So what does this mean?” — and the room comes back to you." },
      { q: "What is the difference between a pause and a hesitation?", a: "Intention. Same silence, opposite effect.", why: "A hesitation is filled with “erm”. A pause is empty and deliberate, and audiences read it as control." },
      { q: "How long does two seconds feel to the speaker?", a: "About ten.", why: "Which is why nervous speakers cut every pause in half. Count deliberately." },
    ] },
    { title: "Guided examples 5 — the close", sub: "Leave one sentence behind.", items: [
      { q: "You opened with a story. How should you close?", a: "Return to it: “Mimi never came back. The next one might.”", why: "It closes a loop the audience did not know was open, which is deeply satisfying to hear." },
      { q: "What is wrong with “That's all, thank you”?", a: "It throws away the last sentence.", why: "Say your final line, PAUSE, then say thank you. The pause is what makes it land." },
      { q: "Should you memorise the last sentence?", a: "Yes — exactly.", why: "It is the one thing you want repeated, so it should not be improvised at the moment you are most tired." },
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
    title: "A complete short talk",
    sub: "Two minutes. Hook, story, point, takeaway, close.",
    turns: [
      { who: "BETHLEHEM", text: "Last March a student walked into my class carrying her sister's textbook.   ( pause )", side: "l" },
      { who: "BETHLEHEM", text: "I'm Bethlehem, from the Adama centre. I want to tell you why we're losing students — and it isn't what we thought.", side: "l" },
      { who: "BETHLEHEM", text: "Mimi came every week for three weeks. Then she stopped. When I asked, she said she'd been walking two hours each way.", side: "l" },
      { who: "BETHLEHEM", text: "Forty per cent leave before week five.   ( pause )   Three quarters of them live more than an hour away.", side: "l" },
      { who: "BETHLEHEM", text: "We're not losing weak students. We're losing distant ones.", side: "l" },
      { who: "BETHLEHEM", text: "Mimi never came back.   ( pause )   The next one might.", side: "l" },
    ],
    note: "Cold story hook · who she is · the five-part story · the number · the contrast takeaway · return to the story. Two minutes.",
    notes: tn({
      time: "16 minutes.",
      how: "Read it aloud with the pauses genuinely held for two seconds. Learners will feel the difference the silences make.",
      mistakes: "Note that the takeaway is a contrast — “not X, but Y”. That is the device from slide 19 doing the module's central job.",
      extra: "The close returns to Mimi and adds four words. “The next one might” is the sentence people would repeat.",
      tip: "Have every learner deliver this script before writing their own. Performing a good model first makes the writing far easier.",
      activity: "Same shape: learners write their own six-line talk on this exact structure.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "The same talk, without the technique",
    sub: "Same facts. Same speaker. Compare it with slide 26.",
    turns: [
      { who: "SPEAKER", text: "Good morning. I'm Bethlehem and today I'd like to talk about student retention at the Adama centre.", side: "l" },
      { who: "SPEAKER", text: "I'll cover three things: the dropout rate, the causes, and some recommendations.", side: "l" },
      { who: "SPEAKER", text: "Our dropout rate is forty per cent before week five, which is higher than the regional average of thirty-two.", side: "l" },
      { who: "SPEAKER", text: "The main cause appears to be distance. Three quarters of those leaving live more than an hour away.", side: "l" },
      { who: "SPEAKER", text: "So in conclusion, distance is a significant factor in retention and should be considered.", side: "l" },
      { who: "SPEAKER", text: "That's all. Thank you.", side: "l" },
    ],
    note: "Clear, correct, well structured — and completely forgettable. No story, no pause, no takeaway sentence, and a thrown-away ending.",
    notes: tn({
      time: "15 minutes.",
      how: "This version is a good Level 3 presentation. It is not bad; it is the floor. Say that — learners should not conclude their earlier training was wrong.",
      mistakes: "This version actually contains MORE data than slide 26. More information, less remembered — the same lesson as Level 3 Module 6.",
      extra: "Ask learners to repeat one sentence from each version tomorrow. Only slide 26 produces one.",
      tip: "The last line is the specific failure from slide 10. “That's all, thank you” throws away the ending entirely.",
      activity: "Upgrade it: pairs rewrite this version with a hook, a story, a pause and a takeaway.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "The phrases that carry a talk",
    sub: "Six chunks. Memorise them.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaBookOpen", title: "“Last March, a student…”", desc: "The cold story hook. Then pause." },
      { icon: "FaQuestion", title: "“Have a guess.”", desc: "After a question. Then actually wait." },
      { icon: "FaHashtag", title: "“Forty per cent.”  ( pause )", desc: "The number, alone, before its meaning." },
      { icon: "FaLightbulb", title: "“Here's what I didn't expect.”", desc: "Marks the turn in a story." },
      { icon: "FaBullseye", title: "“We're not X. We're Y.”", desc: "The contrast takeaway. One line." },
      { icon: "FaFlagCheckered", title: "“…and she never came back.”", desc: "The return. Then pause, then thank you." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Drill all six. Phrases 1, 5 and 6 should be memorised word for word by every learner with their own content.",
      mistakes: "Phrase 3 rushed. The number must stand alone for two seconds before its meaning arrives.",
      extra: "Phrase 4 is the story's hinge announced aloud. It tells the audience the turn is coming and they lean in.",
      tip: "Phrase 5 is the takeaway machine. If learners produce nothing else from this module, that one line is worth the four lessons.",
      activity: "Six phrases: every learner writes their own version of all six for their talk.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the talk",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "YOU", text: "Last year a driver arrived at six in the morning with a broken windscreen.   ( ______ )", side: "l" },
      { who: "YOU", text: "I'm ___, from operations. I want to tell you why our deliveries are slow.", side: "l" },
      { who: "YOU", text: "He'd been driving that van for nine years. That morning it finally ______ .", side: "l" },
      { who: "YOU", text: "Sixty per cent.   ( pause )   That's how many of our delays come from ______ vans.", side: "l" },
      { who: "YOU", text: "We're not slow because of our drivers. We're slow because of our ______ .", side: "l" },
      { who: "YOU", text: "That driver is still with us.   ( pause )   The van ______ .", side: "l" },
    ],
    note: "Use these:  “pause”  ·  “stopped”  ·  “two”  ·  “vans”  ·  “isn't”",
    notes: tn({
      time: "14 minutes.",
      how: "Have learners deliver it standing, holding both pauses for a full two seconds. The pauses are the exercise as much as the words.",
      answers: "1 pause · 2 stopped · 3 two · 4 vans · 5 isn't",
      mistakes: "Gap 5 completes the return: “That driver is still with us. The van isn't.” Two words, and it closes the loop.",
      tip: "Gap 4 is the contrast takeaway — “not X, but Y”. Praise anyone who spots the device.",
      activity: "Your own version: learners replace the content with a real story from their own work.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — build it in layers", sub: "Four rounds. Add one layer each time.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Tell your ninety-second story. Five parts.", d: "Partner names the turn and the point." },
      { t: "Add a hook before it and pause after", d: "Partner times the pause. Two full seconds." },
      { t: "Add your takeaway sentence using contrast", d: "“We're not X. We're Y.”" },
      { t: "Add the close: return to the story, pause, thank you", d: "Partner says what they will remember tomorrow." },
    ],
    notes: tn({
      time: "16 minutes for all four rounds.",
      how: "Building in layers removes the fear. Nobody delivers a whole talk cold; each round adds one element to something already working.",
      mistakes: "Round 2's pause cut short. Have the partner count aloud afterwards — speakers consistently halve it.",
      tip: "Round 4's question is the real assessment. If the partner cannot name one thing they will remember, the talk has not landed.",
      activity: "What will you remember: ask the question after every practice talk for the rest of the module.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the ninety-second story", sub: "Five parts. Real story. Do it three times.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "WHO and WHERE — one line, with a name", d: "“A driver called Abel, in Adama.”" },
      { t: "WHAT WAS NORMAL — one line", d: "“He'd driven the same van for nine years.”" },
      { t: "THE TURN — one line. The hinge.", d: "“Then one morning it stopped.”" },
      { t: "WHAT HAPPENED — two or three lines", d: "Three specific details. A name, a number, an object." },
      { t: "THE POINT — one line, said aloud", d: "Do not leave them to work it out." },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Three deliveries: once reading, once glancing, once from memory. The third is when it becomes a story rather than a recitation.",
      mistakes: "No turn in step 3. Without a change it is a description, and descriptions are not remembered.",
      extra: "Step 4's three details are the whole of vividness. More than three and the story slows down.",
      tip: "Insist on a real story. Invented ones are always vaguer and learners cannot deliver them convincingly.",
      activity: "Three tellings: every learner tells the same story three times, the last from memory.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the pause drill", sub: "Two seconds. It will feel like ten.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say your hook. Then count two full seconds.", d: "Partner counts aloud afterwards. Were you close?" },
      { t: "Say a number. Pause. Then say what it means.", d: "“Forty per cent.  ( pause )  That's how many leave.”" },
      { t: "Pause before your takeaway sentence", d: "Two seconds, then the one line you want repeated." },
      { t: "Say your last sentence. Pause. Then “thank you”.", d: "Never run them together." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "The partner counting aloud is essential. Speakers consistently produce half the pause they intended and cannot tell.",
      mistakes: "Filling the pause with “erm” or “so”. That converts the tool into a tic and the effect is lost.",
      extra: "Task 2's split is the easiest to deliver and the most reliably effective of the four.",
      tip: "Task 4 is the one everybody gets wrong in real talks. Practise it separately until it is automatic.",
      activity: "Count it out: partners count every pause aloud and report the real duration.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — delivering the takeaway",
    sub: "One sentence. It must be said differently from everything around it.",
    left: { h: "How to deliver it", items: ["Pause two seconds before it", "Say it SLOWER than the rest", "Fall at the end of both halves", "Pause again after it", "Then move on, or stop"] },
    right: { h: "What goes wrong", items: ["Running into it from the previous sentence", "Speeding up because you are nervous", "Rising at the end — sounds unsure", "Explaining it immediately afterwards", "→ The one line you needed is lost."] },
    note: "“We're not losing weak students.  ( fall )   We're losing distant ones.  ( fall, then pause )”  Slower, lower, and then silence.",
    notes: tn({
      time: "15 minutes.",
      how: "Demonstrate the wrong version first — rushed, rising, immediately explained. Then the right one. The contrast is unmistakable.",
      mistakes: "Explaining the takeaway after saying it. If it needs explaining it is not a takeaway; if it does not, the explanation destroys it.",
      extra: "The falling intonation on both halves is the Level 3 Module 2 rule. A rising takeaway sounds like a question.",
      tip: "This is the single most important thirty seconds of any talk. Drill it until it is automatic.",
      activity: "Ten deliveries: every learner says their takeaway ten times until the rhythm is right.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — one card only", sub: "Reduce your talk to a single card. Then rehearse from it.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Write your first sentence IN FULL", d: "The hook. Memorise it." },
      { t: "Write your last sentence IN FULL", d: "The close. Memorise it too." },
      { t: "Three points — key words only", d: "Three or four words each. No sentences." },
      { t: "The story — three anchors only", d: "Name · turn · point." },
      { t: "Rehearse. Then have somebody take the card away.", d: "Can you still do it? Then the card is right." },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Step 5 is the test. If a learner stops when the card is removed, they wrote a script and it needs cutting.",
      mistakes: "Two cards. If it does not fit on one, there is too much material — cut a point, not the story.",
      extra: "This extends Level 3 Module 6's note format with the story's three anchors, which are all a story needs.",
      tip: "Collect the cards before the final talks. Cards with sentences on them should be sent back for rewriting.",
      activity: "Card check: pairs inspect each other's cards for any full sentence outside the first and last.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — the seven-minute talk", sub: "The main assessment. One card, no script.",
    color: C.speak, size: 19, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "HOOK — story, question or number. Then a two-second pause.", d: "Before you say who you are." },
      { t: "WHO YOU ARE and the three things you'll cover", d: "No apology for your English." },
      { t: "THE STORY — five parts, ninety seconds", d: "One name, one number, one object." },
      { t: "THREE POINTS with one number each", d: "Signposts between them." },
      { t: "THE TAKEAWAY — one sentence, contrast, slower", d: "Pause before AND after it." },
      { t: "CLOSE — return to the story. Pause. Thank you.", d: "Memorised exactly." },
    ],
    notes: tn({
      time: "A full lesson. Allow 10 minutes per learner including feedback.",
      how: "Record every talk if learners agree. Watching your own pauses is the fastest way to discover how short they really were.",
      mistakes: "Over-running and cutting the close. Warn at six minutes. If something must go, cut a point — never the story or the takeaway.",
      answers: "SUCCESS CRITERIA: a hook with a real two-second pause · no apology · a five-part story with three specific details · three points with a number each · a contrast takeaway delivered slower with pauses either side · a memorised close with a pause before thank you.",
      tip: "After every talk, ask the audience: what will you remember tomorrow? That single question assesses the whole module.",
      activity: "One thing: every listener writes down the one thing they will remember, and the speaker reads them afterwards.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — three openings", sub: "Same talk. Which one makes you listen?",
    panelW: 7.2,
    panel: { label: "Audio script — read all three, with pauses", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "A\n“Good morning. Today I'd like to talk about our\ndelivery times. I'll cover three things.”\n\nB\n“How long do you think our average delivery\ntakes?   ( pause )   Have a guess.”\n\nC\n“Last year a driver arrived at six in the morning\nwith a broken windscreen.   ( pause )   He'd been\ndriving that van for nine years.”" },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. Which one tells you the topic first?",
      "2. Which one makes you think?",
      "3. Which one makes you picture something?",
      "4. Which is the safest?",
      "5. Which would you remember?",
      "6. What must come AFTER B and C?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Question 6 is the important one. B and C are hooks, not openings — the Level 3 introduction must still follow within fifteen seconds.",
      mistakes: "Learners conclude A is wrong. It is not wrong; it is incomplete. It is the second move delivered first.",
      extra: "C is the strongest and the most uncomfortable to deliver, because it delays saying who you are.",
      answers: "1 A. · 2 B. · 3 C. · 4 A. · 5 C, usually. · 6 The Level 3 opening — name, topic, three things.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "A is not wrong. It is incomplete.",
    size: 16.5,
    items: [
      { q: "1 and 4 — the safe opening", a: "A. Topic first, no risk.", why: "It is the correct SECOND move. As a first move it gives the audience no reason to listen yet." },
      { q: "2 — the question", a: "B. It makes the audience commit to an answer.", why: "Only if you actually pause. Answering it yourself immediately wastes the device entirely." },
      { q: "3 and 5 — the story", a: "C. A windscreen, six in the morning, nine years.", why: "Three specific details in two sentences. That is what makes it picturable and repeatable." },
      { q: "6 — what must follow?", a: "The Level 3 opening: name, topic, three things.", why: "A hook is not an opening. Without the structure the audience has a picture and no map." },
      { q: "What is the right order?", a: "Hook · pause · then the standard opening.", why: "Fifteen seconds of hook buys you the attention that the structure then organises." },
    ],
    notes: keyNotes("The final item protects Level 3's training. Nothing there is being discarded — a fifteen-second hook is being added in front of it."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — a story with a part missing", sub: "Three versions. What is wrong with the first two?",
    panelW: 7.2,
    panel: { label: "Audio script — read all three", color: C.listen, tint: C.listenTint, size: 15, lsm: 1.24,
      text: "VERSION 1\n“A driver in Adama had been driving the same van\nfor nine years. He was very experienced and he\nworked hard every day.”\n\nVERSION 2\n“A driver had driven the same van for nine years.\nThen one morning it stopped. He waited four\nhours for a replacement.”\n\nVERSION 3\n“…He waited four hours. We're not slow because\nof our drivers. We're slow because of our vans.”" },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. What is missing from version 1?",
      "2. What is missing from version 2?",
      "3. What does version 3 add?",
      "4. Which part is the hinge?",
      "5. Why can't you leave the point unsaid?",
      "6. How long is the complete version?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The three versions add one part at a time. Play them in order and the structure becomes audible.",
      mistakes: "Version 1 has no turn, so it is a description. Learners often think it is fine because it contains detail.",
      extra: "Version 3's addition is the contrast takeaway — twelve words that carry the whole point.",
      answers: "1 The turn — nothing changes. 2 The point — it is left implicit. 3 The point, as a contrast. 4 “Then one morning it stopped.” 5 Audiences take away the wrong point. 6 About ninety seconds.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "A story needs a turn AND a stated point.",
    size: 16.5,
    items: [
      { q: "1 — version 1", a: "No turn. Nothing changes, so it is a description.", why: "Part 3 is the hinge. Detail without change is not a story and is not remembered." },
      { q: "2 — version 2", a: "No point. The audience must work it out.", why: "They will — and often the wrong one. Leaving it implicit is a gamble you do not need to take." },
      { q: "3 — version 3", a: "The point, delivered as a contrast.", why: "“Not X, but Y” in twelve words. That is what the audience repeats." },
      { q: "5 — why say the point?", a: "Because audiences reliably take away a different one.", why: "Speakers fear it sounds patronising. It does not — it sounds clear." },
      { q: "What is the minimum a story needs?", a: "A turn, and a stated point.", why: "Everything else — names, numbers, objects — makes it vivid. These two make it a story." },
    ],
    notes: keyNotes("Play version 1 and version 3 back to back at the end. Same driver, same van, and only one of them is worth listening to."),
  });

  L.grid({
    sec: SEC.lis, title: "Listening to talks — what to steal", sub: "Four things to notice in every talk you hear.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaBookOpen", title: "Where is the story?", desc: "Most memorable talks have exactly one, in the first third. Note where it sits and how long it takes." },
      { icon: "FaPauseCircle", title: "Count the pauses", desc: "Good speakers pause more than you think and longer than you think. Time one." },
      { icon: "FaBullseye", title: "What is the one sentence?", desc: "If you cannot name it afterwards, there wasn't one — and that is the commonest failure." },
      { icon: "FaFlagCheckered", title: "How did they end?", desc: "Did they return to something? Or did they just stop? Steal whatever worked." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "This turns every talk learners hear into a lesson. Four things to notice, and all four are stealable.",
      mistakes: "Listening only for content. The delivery is what they are trying to learn, and it is invisible unless you look for it.",
      tip: "Item 3 is the honest test. Most talks fail it, including good ones, and noticing that is instructive.",
      activity: "Steal one thing: after any talk they hear this month, learners note one technique to use.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: SEC.rea, title: "Reading 1 — a talk in full", sub: "Seven minutes, written out. Find every technique.",
    panelW: 7.2,
    panel: { label: "Read aloud, with the pauses", color: C.read, tint: C.readTint, size: 14.5, lsm: 1.22,
      text: "“Last year a driver arrived at six in the morning\nwith a broken windscreen.   ( pause )\nI'm Yonas, from operations. Three things: where\nwe are, why, and what I'm asking for.\nAbel had driven that van for nine years. Same\nroute, same van. Then one morning it stopped —\non the Adama road, with a full load. He waited\nfour hours.\nSixty per cent.   ( pause )   That's how many of\nour delays start with a van, not a driver.\nWe're not slow because of our people. We're\nslow because of our vehicles.   ( pause )\nI'm asking for one thing: replace one van.\nAbel is still with us.   ( pause )   The van isn't.”" },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Find the hook. What type is it?",
      "Find the five parts of the story.",
      "Find the number and its pause.",
      "Find the takeaway. Which device?",
      "Find the ask.",
      "How does it close?",
    ] },
    notes: tn({
      time: "17 minutes.",
      how: "Have learners annotate every technique. Every element of the module appears here in about 150 words.",
      mistakes: "The story's turn — “Then one morning it stopped” — is one short sentence after three longer ones. That is the rhythm device from slide 19.",
      extra: "The close returns to Abel and adds three words. “The van isn't” is the sentence people repeat.",
      answers: "Cold story hook · Abel/nine years/it stopped/four hours/the point · 60% with a pause · contrast takeaway · replace one van · returns to Abel.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Technique, not content.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "Why does the talk start with the windscreen rather than with “I'm Yonas”?",
      "Which sentence is the turn in the story, and how is it delivered?",
      "Why is “Sixty per cent” said alone before its meaning?",
      "Which rhetorical device carries the takeaway?",
      "How does the last line work, and why is it only three words?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 5 is worth real time. “The van isn't” works because it completes a sentence pattern the audience is already holding.",
      mistakes: "Learners describe the content instead of the technique. Push them back to how, not what.",
      tip: "Question 2: the turn is a short sentence after three longer ones. The rhythm break marks it without any signposting word.",
      answers: "1 They are listening before they know the topic. · 2 “Then one morning it stopped” — short, after longer sentences. · 3 So it lands alone; the meaning arrives after they have absorbed it. · 4 Contrast — not X, but Y. · 5 It completes the pattern of “Abel is still with us” and closes the loop.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Every technique, doing visible work.",
    size: 16.5,
    items: [
      { q: "1 — the cold opening", a: "They are listening before they know the topic.", why: "It feels wrong to the speaker and works on the audience. The delay in identifying yourself is the point." },
      { q: "2 — the turn", a: "“Then one morning it stopped.” Short, after three longer sentences.", why: "The rhythm break marks it. No signposting word is needed — the length does the work." },
      { q: "3 — the isolated number", a: "It lands alone; the meaning arrives after they have absorbed it.", why: "A number said inside a sentence is heard. A number said alone is registered." },
      { q: "4 — the takeaway", a: "Contrast: “not our people — our vehicles”.", why: "Twelve words. It is the sentence somebody could repeat to a colleague tomorrow." },
      { q: "5 — the last line", a: "“The van isn't.” It completes the pattern and closes the loop.", why: "Three words, and it only works because “Abel is still with us” came immediately before it." },
    ],
    notes: keyNotes("Item 5 is the most elegant moment in the talk. Point out that the whole close is nine words and it depends entirely on the opening story."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — the same talk, flattened", sub: "Same facts. Find what was lost.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "“Good morning. I'm Yonas from operations and\ntoday I'd like to talk about our delivery\nperformance and the vehicle fleet.\nOur analysis indicates that approximately sixty\nper cent of delivery delays are attributable to\nvehicle failure rather than driver performance.\nThe average age of the fleet is nine years, which\nis significantly above the recommended\nreplacement threshold.\nOne incident last year involved a four-hour delay\ndue to a windscreen failure.\nIn conclusion, I would recommend consideration\nof a vehicle replacement programme.\nThat's all. Thank you.”" },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Where is the story now?",
      "Is there a hook?",
      "Is there a takeaway sentence?",
      "Find four inflated words.",
      "What happened to the ask?",
      "Which version would you act on?",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The story is still there — reduced to one clause in the middle, stripped of Abel's name and every detail. That reduction is what kills it.",
      mistakes: "Learners say the story is missing. It is not; it has been summarised into invisibility, which is the more common real-world failure.",
      extra: "The ask has become “consideration of a programme”. Nobody can act on that, which is the Level 3 Module 8 lesson repeating.",
      answers: "Reduced to one clause, no name. No hook. No takeaway. Approximately, attributable, significantly, consideration. The ask became vague. Version 1, unanimously.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Same facts. Nothing survives.",
    size: 16.5,
    items: [
      { q: "1 — where is the story?", a: "Reduced to one clause, with no name and no detail.", why: "Not deleted — summarised into invisibility. That is the commonest real-world failure." },
      { q: "3 — the takeaway", a: "There isn't one. “I would recommend consideration” is not a sentence anybody repeats.", why: "Without a takeaway the audience constructs their own, and it will not be yours." },
      { q: "4 — the inflated words", a: "approximately · attributable · significantly · consideration.", why: "Level 3 Module 8's plain English rule. Each one slows the listener down for no gain." },
      { q: "5 — the ask", a: "“Consideration of a programme” — nobody can act on it.", why: "Compare with “replace one van this year”. One is a decision; the other is a wish." },
      { q: "Vocabulary check", a: "anecdote · resonate · vivid · pause · takeaway", why: "This version has no anecdote, nothing vivid, no pause and no takeaway. It cannot resonate." },
    ],
    notes: keyNotes("The vocabulary point is the cleanest summary of the module: five words naming five things, none of which this version has."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — make it vivid", sub: "Add exactly three specific details.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each with a name, a number and an object.",
    items: [
      "1.  A student had difficulties getting to class.",
      "2.  A driver experienced a vehicle problem.",
      "3.  Some staff found the new system hard.",
      "4.  A customer complained about a delay.",
      "5.  A colleague helped me when I started.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Exactly three details. More is not better — the constraint is what teaches the technique.",
      answers: "MODELS: 1 “Mimi walked two hours each way, carrying her sister's textbook.” · 2 “Abel's windscreen broke on the Adama road with a full load.” · 3 “Three of the eight kept a paper copy for six months.” · 4 “A customer waited four hours for a delivery of two boxes.” · 5 “Chaltu gave me her own notes on my first Monday.”",
      mistakes: "Adding adjectives instead of details. “Very difficult” is not vivid; “two hours each way” is.",
      tip: "Ask which version they could picture. Detail creates the picture; adjectives do not.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write the takeaway", sub: "One sentence, using contrast.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write a “not X — Y” takeaway for each situation.",
    items: [
      "1.  Students leave because of distance, not ability.",
      "2.  Deliveries are slow because of vans, not drivers.",
      "3.  The training failed because of timing, not content.",
      "4.  People don't read the report because it's too long, not too technical.",
      "5.  A situation from your own work.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "The contrast form is the takeaway machine. Once learners have the pattern they can build one for anything.",
      answers: "MODELS: 1 “We're not losing weak students. We're losing distant ones.” · 2 “We're not slow because of our people. We're slow because of our vehicles.” · 3 “The training wasn't wrong. The month was.” · 4 “Nobody's confused by the report. They just haven't finished it.” · 5 learner's own.",
      mistakes: "Takeaways longer than about fifteen words. If it does not fit in one breath it will not be repeated.",
      tip: "Read several aloud. The class will immediately identify which ones they could repeat tomorrow.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — your seven-minute talk", sub: "One card. Two sentences in full. Everything else in key words.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Plan a real talk about something you actually care about.",
    items: [
      "1.  TAKEAWAY first — one sentence, contrast form. Write it before anything else.",
      "2.  THE STORY — five parts, three specific details, ninety seconds.",
      "3.  HOOK — write all three types, then choose one.",
      "4.  THREE POINTS — key words only, one number each.",
      "5.  CLOSE — return to the story. Write it in full and memorise it.",
      "6.  Fit all of it on ONE card. If it doesn't fit, cut a point.",
    ],
    notes: tn({
      time: "25 minutes.",
      how: "Step 1 first is the discipline. A talk written before its takeaway is decided ends up with three half-points and no line worth repeating.",
      answers: "MODEL: see slide 41. Every element on one card, about 150 words spoken.",
      mistakes: "Step 6 producing two cards. Cut a point, never the story or the takeaway.",
      tip: "Collect the cards. Any card with sentences on it outside steps 1 and 5 should be sent back.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — how it is marked", sub: "25 marks. The story and the takeaway carry half.",
    size: 16.5,
    items: [
      { q: "The takeaway — 6 marks", a: "One sentence, contrast form, under fifteen words.", why: "If the audience remembers one thing, this is it. It is written first for that reason." },
      { q: "The story — 6 marks", a: "Five parts, including a clear turn and a stated point.", why: "Three specific details: a name, a number, an object. Not adjectives." },
      { q: "The hook — 4 marks", a: "One of the three types, followed by a real pause.", why: "The pause is marked. A hook rushed into the introduction is not a hook." },
      { q: "The close — 5 marks", a: "Returns to the story, memorised, with a pause before thank you.", why: "The most commonly thrown-away part of a talk, and the most easily fixed." },
      { q: "One card — 4 marks", a: "Two sentences in full, everything else in key words.", why: "If it does not fit on one card there is too much material, and the talk will be read." },
    ],
    notes: keyNotes("Give this rubric before the task. The story and takeaway carry twelve of twenty-five marks, which tells learners exactly where to spend their preparation."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your public speaking checklist", sub: "Six checks. Before you stand up.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Can I say my takeaway in one breath?", d: "Under fifteen words. Contrast form." },
      { t: "Does my story have a TURN and a STATED point?", d: "Without both it is a description." },
      { t: "Three specific details — a name, a number, an object?", d: "Not adjectives. Details." },
      { t: "Does my hook have a two-second pause after it?", d: "Rushing past it wastes it." },
      { t: "Is my last sentence memorised — with a pause before thank you?", d: "Never run them together." },
      { t: "Does it all fit on ONE card?", d: "If not, cut a point. Never the story." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Run this with every learner before their talk. It catches most problems in three minutes.",
      tip: "Check 1 is the fastest diagnostic. A learner who cannot say their takeaway in one breath has not decided what the talk is about.",
      activity: "Six checks: pairs check each other's cards before the final talks.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. How many stories should a seven-minute talk have?", opts: "a) none     b) one     c) four" },
      { q: "2. A story without a turn is:", opts: "a) still a story     b) a description     c) an anecdote" },
      { q: "3. You should pause for about:", opts: "a) half a second     b) two seconds     c) ten seconds" },
      { q: "4. Vivid means:", opts: "a) emotional     b) specific     c) long" },
      { q: "5. How many takeaways should a talk have?", opts: "a) one     b) three     c) as many as possible" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 a",
      tip: "Question 4 is the one learners get wrong. Vivid comes from detail, not from adjectives.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — name the missing part", sub: "Five parts. Which is absent?",
    color: C.green, instruction: "Name the missing part of each story.", size: 17,
    items: [
      "1.  “A driver drove the same van for nine years. He was very reliable.”",
      "2.  “Then one morning it stopped. He waited four hours.”",
      "3.  “A student in Adama. She stopped coming in week four. She was walking two hours.”",
      "4.  “Something happened last year that changed how we think about deliveries.”",
      "5.  “Mimi walked two hours each way. We're losing distant students, not weak ones.”",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Item 4 is the interesting one: it has only a vague promise of a turn, with no who, no what and no point.",
      answers: "1 the turn · 2 who and where, and the point · 3 the point · 4 everything except a hint of a turn · 5 what was normal, and the turn.",
      mistakes: "Item 5 looks complete because it has a point. But nothing changes — there is no turn.",
      tip: "Have learners supply the missing part for each. Naming it is half; fixing it is the rest.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Parts, hooks and devices.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the STORY PART to its JOB", opts: "1. who and where     2. what was normal     3. the turn     4. the point" },
      { q: "a) the hinge — something changes     b) say it aloud, don't imply it", opts: "c) one line, with a name     d) sets up what changes" },
      { q: "Part 2 — match the HOOK to its EFFECT", opts: "1. a story     2. a question     3. a number          a) makes them commit to an answer     b) makes them picture something     c) demands a context" },
      { q: "Part 3 — match the DEVICE to the EXAMPLE", opts: "1. rule of three     2. contrast     3. repetition          a) “Two hours there. Two hours back.”     b) “No books. No light. No time.”     c) “Not weak students — distant ones.”" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–d, 3–a, 4–b.  ·  Part 2: 1–b, 2–a, 3–c.  ·  Part 3: 1–b, 2–c, 3–a.",
      tip: "Part 3's contrast is the takeaway device. Learners should be able to produce one for their own talk immediately.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — write three hooks", sub: "Same talk. Three ways in.",
    color: C.green, instruction: "For your own talk, write all three hook types.", size: 18,
    items: [
      "1.  A STORY hook — one sentence, three details.",
      "2.  A QUESTION hook — one that they must guess at.",
      "3.  A NUMBER hook — the figure alone, then its meaning.",
      "4.  Mark where the pause goes in each.",
      "5.  Which one will you use, and why?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Writing all three and choosing is the exercise. Most learners discover the story hook is strongest for their material.",
      answers: "No fixed answers. Each must be one or two sentences with a marked pause.",
      mistakes: "Question hooks that are rhetorical. “Have a guess” must be a real invitation with real silence after it.",
      tip: "Have three learners deliver all three of their hooks. The class picks the best and says why.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — fix the ending", sub: "Each one throws the talk away.",
    color: C.green, instruction: "Rewrite each ending properly.", size: 17,
    items: [
      "1.  “So, yeah, that's about it. Thank you.”",
      "2.  “In conclusion, I would recommend consideration of the matter.”",
      "3.  “I've probably gone over time, sorry. Any questions?”",
      "4.  “And those are my three points. Thank you.”",
      "5.  “I hope that was useful. Thanks for listening.”",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Every one of these is a real ending people use. Each throws away the six minutes before it.",
      answers: "MODELS: 1 the takeaway sentence, pause, thank you · 2 “I'm asking for one thing: replace one van this year.” · 3 delete the apology; end on the takeaway · 4 return to the opening story, then thank you · 5 the one sentence you want repeated, then a pause.",
      mistakes: "Item 3's apology is the Level 3 Module 6 error returning under pressure. Delete it entirely.",
      tip: "Item 2 is the vague ask. “Consideration of the matter” cannot be acted on by anybody.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  A story can replace evidence.",
      "2.  A story needs a turn to be a story.",
      "3.  You should let the audience work out the point themselves.",
      "4.  Two seconds of silence feels longer to the speaker than to the audience.",
      "5.  Vivid means using strong adjectives.",
      "6.  You should memorise your first and last sentences.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — it carries the evidence, it does not replace it · 2 T · 3 F — say the point aloud · 4 T · 5 F — it means specific detail · 6 T",
      tip: "Item 3 is the one learners resist. Say the correction clearly: audiences take away a different point if you leave it implicit.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own talk.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What is your takeaway, in one sentence, in contrast form?",
      "2.  What is your story, and what is its turn?",
      "3.  What are your three specific details?",
      "4.  Which hook will you use, and why that one?",
      "5.  What is your last sentence, exactly as you will say it?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 1 must be answerable in one breath. If it takes two, the talk does not yet know what it is about.",
      answers: "No fixed answers. Question 3 must give a name, a number and an object — not adjectives.",
      mistakes: "Question 5 answered approximately. It must be the exact words, because it will be memorised.",
      tip: "Collect these before the talks. Question 1 tells you immediately which talks are ready.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Standing. Every round.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Stand and deliver. Partner checks against the list.", size: 19,
    items: [
      "1.  Your 90-second story. Partner names the turn and the point.",
      "2.  Your hook, with a two-second pause. Partner counts it.",
      "3.  Your takeaway — slower, falling, pauses either side.",
      "4.  Your close — return, pause, thank you.",
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Round 2's counting is the point. Speakers reliably produce half the pause they think they did.",
      answers: "SUCCESS CRITERIA: 1 a clear turn and a stated point · 2 a genuine two seconds · 3 delivered slower with falling intonation and pauses either side · 4 a return to the story with a pause before thank you.",
      tip: "Round 3 is the highest-value thirty seconds in the module. Repeat it until the rhythm is automatic.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full rehearsal", sub: "Groups of four. Seven minutes each.",
    color: C.green, instruction: "One speaks; three are the audience and give feedback.", size: 17,
    items: [
      { q: "1. Deliver the full seven-minute talk from one card.", opts: "Timed. Warning at six minutes." },
      { q: "2. The audience writes down the ONE thing they will remember.", opts: "Before any discussion." },
      { q: "3. Compare: is it your takeaway?", opts: "If not, the takeaway did not land." },
      { q: "4. The audience names one technique that worked.", opts: "Be specific." },
      { q: "5. Deliver the hook, takeaway and close again, improved.", opts: "Just those three." },
    ],
    notes: tn({
      time: "A full lesson in groups of four.",
      how: "Step 3 is the module's assessment in one question. If the audience's remembered sentence is not the speaker's takeaway, the technique failed regardless of how the talk felt.",
      answers: "Assessed with the six checks from slide 50.",
      tip: "Step 5 is what makes this a rehearsal rather than a test. Improving immediately after feedback is where the learning happens.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why does a story survive when a statistic doesn't?", opts: "What does the listener do with each?" },
      { q: "2. Is using storytelling technique manipulative?", opts: "Argue both sides honestly." },
      { q: "3. Why does silence read as confidence?", opts: "What does filling every gap signal?" },
      { q: "4. When would a story be the WRONG choice?", opts: "Give a real example." },
    ],
    notes: tn({
      time: "14 minutes. Discussion, not writing.",
      how: "Question 4 keeps the module honest. Not every message needs a story, and knowing when to skip it is part of competence.",
      answers: "1 A listener pictures a story and files a statistic; only the picture is retrievable later. 2 It is manipulative only if the story is false or unrepresentative — making a true point memorable is a service to the audience. 3 Filling every gap signals fear of losing the room; leaving one signals you expect to keep it. 4 A safety briefing, a technical instruction, a two-minute status update, or any situation where the audience needs procedure rather than persuasion.",
      tip: "Question 2's answer is the ethical line: the technique is neutral, the story's truth is not.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Story", items: [
      { q: "1. Name the five parts of a story.", opts: "Five answers." },
      { q: "2. Which part is the hinge?", opts: "One answer, and why." },
      { q: "3. Why must the point be said aloud?", opts: "One sentence." },
      { q: "4. How long should a story be?", opts: "One answer." },
    ] },
    { part: "Part 2 · Story and evidence", items: [
      { q: "5. Can a story replace evidence?", opts: "One sentence." },
      { q: "6. Why use both a story and a number?", opts: "One sentence." },
      { q: "7. What does “vivid” actually mean?", opts: "One word." },
      { q: "8. Name the three details that make a story vivid.", opts: "Three answers." },
    ] },
    { part: "Part 3 · Openings and silence", items: [
      { q: "9. Name the three types of hook.", opts: "Three answers." },
      { q: "10. What must come after the hook?", opts: "Two things." },
      { q: "11. How long is a deliberate pause?", opts: "One answer." },
      { q: "12. What is the difference between a pause and a hesitation?", opts: "One word." },
    ] },
    { part: "Part 4 · Notes and delivery", items: [
      { q: "13. What two things are written in full on your card?", opts: "Two answers." },
      { q: "14. Why key words for everything else?", opts: "One sentence." },
      { q: "15. How should a takeaway be delivered?", opts: "Two things." },
      { q: "16. What is wrong with “That's all, thank you”?", opts: "One sentence." },
    ] },
    { part: "Part 5 · Putting it together", items: [
      { q: "17. What do you write FIRST when planning a talk?", opts: "One answer." },
      { q: "18. If you run out of time, what do you cut?", opts: "One answer, and why." },
      { q: "19. Write a contrast takeaway for any topic.", opts: "Under 15 words." },
      { q: "20. SPEAKING: a seven-minute talk from one card.", opts: "Assessed live." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 5 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is the talk itself." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is worth as much as the other nineteen. The real test is whether the audience's remembered sentence is the speaker's takeaway.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the five parts", a: "Who and where · what was normal · the turn · what happened · the point.", why: "Ninety seconds. Longer and it stops being a story and becomes an anecdote." },
      { q: "Q2 — the hinge", a: "The turn. Without a change it is a description.", why: "Detail without change is not a story and audiences do not retain it." },
      { q: "Q3 — why say the point", a: "Audiences reliably take away a different one if you don't.", why: "Speakers fear it is patronising. It is not — it is clear." },
      { q: "Q4 — how long?", a: "About ninety seconds.", why: "The discipline is what keeps it a story rather than a ramble." } ],
    [ { q: "Q5 — can a story replace evidence?", a: "No. It carries the evidence; it is not the evidence.", why: "One case proves nothing — the Module 2 rule still applies." },
      { q: "Q6 — why both?", a: "The story makes them feel it; the number proves it is not just one person.", why: "Either alone is weaker. The pair is what people repeat the next day." },
      { q: "Q7 — “vivid”", a: "Specific.", why: "Not emotional and not long. Detail creates the picture; adjectives do not." },
      { q: "Q8 — the three details", a: "A name · a number · an object.", why: "Three is enough for a whole story. More slows it down." } ],
    [ { q: "Q9 — the three hooks", a: "A story · a question · a number.", why: "Fifteen seconds each, and all three need a pause immediately afterwards." },
      { q: "Q10 — after the hook", a: "A pause, then the standard opening: name, topic, three things.", why: "A hook is not an opening. Without the structure they have a picture and no map." },
      { q: "Q11 — how long is a pause?", a: "About two seconds.", why: "It feels like ten to the speaker and like nothing to the audience." },
      { q: "Q12 — pause or hesitation?", a: "Intention.", why: "Same silence, opposite effect. A hesitation is filled; a pause is empty and deliberate." } ],
    [ { q: "Q13 — written in full", a: "The first sentence and the last sentence.", why: "Both are where nerves are worst, and the last is the one you want repeated." },
      { q: "Q14 — why key words", a: "They force you to form the sentence live, which keeps it sounding alive.", why: "Anything written in full gets read aloud, and read talks are flat." },
      { q: "Q15 — delivering a takeaway", a: "Slower than the rest, with falling intonation and a pause either side.", why: "Rushing it or rising at the end destroys the one line you needed." },
      { q: "Q16 — “That's all, thank you”", a: "It throws away the last sentence.", why: "Say your final line, PAUSE, then say thank you. The pause is what makes it land." } ],
    [ { q: "Q17 — what to write first", a: "The takeaway.", why: "A talk planned before its takeaway is decided ends with three half-points and no line worth repeating." },
      { q: "Q18 — what to cut", a: "A point. Never the story or the takeaway.", why: "Those two are what survive. A cut point is not missed; a cut story leaves nothing behind." },
      { q: "Q19 — a contrast takeaway", a: "e.g. “We're not slow because of our people. We're slow because of our vehicles.”", why: "Under fifteen words, contrast form, sayable in one breath." },
      { q: "Q20 — the talk", a: "Assessed on whether the audience's remembered sentence is your takeaway", why: "Six checks from slide 50, and one question afterwards: what will you remember tomorrow?" } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q2, Q3 and Q17 are the diagnostic block: the turn, the stated point, and writing the takeaway first. All three separate a memorable talk from a clear one."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Write your takeaway. Then rewrite it three times.", d: "Shorter each time. Under fifteen words." },
      { t: "Tell your story aloud three times", d: "Once reading, once glancing, once from memory." },
      { t: "Write all three hooks and deliver each", d: "Record them. Which sounds best?" },
      { t: "Practise five two-second pauses", d: "Count them. Then check with a timer." },
      { t: "Deliver the whole talk from one card and record it", d: "Watch it back. Where were the pauses too short?" },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's rewriting is the highest-value task. Takeaways get sharper every time they are shortened.",
      tip: "Friday's recording is where learners discover their pauses were half as long as they thought. Nothing else teaches that.",
      activity: "Ask learners to bring Monday's four versions of their takeaway.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your ONE card", d: "First and last sentence in full. Everything else key words." },
      { t: "Your takeaway, in four versions", d: "Getting shorter each time. Mark your final choice." },
      { t: "Record your seven-minute talk", d: "Hook · story · three points · takeaway · close." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Check the cards at the door. Any card with full sentences beyond the first and last is a script and should be rewritten.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "The four takeaway versions show the thinking. Often version two is better than version four — say so when it is.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your talk will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaBullseye", title: "Takeaway — 6 marks", desc: "One sentence (2) · contrast form (2) · under fifteen words (2)." },
      { icon: "FaBookOpen", title: "Story — 6 marks", desc: "Five parts (2) · a clear turn (2) · three specific details (2)." },
      { icon: "FaPauseCircle", title: "Hook and pauses — 8 marks", desc: "A real hook (3) · two-second pause after it (2) · pauses around the takeaway (3)." },
      { icon: "FaFlagCheckered", title: "Close and card — 5 marks", desc: "Memorised close with a pause before thank you (3) · fits on one card (2).  TOTAL 25." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Note what is NOT marked: slides, accent, and vocabulary range. The pauses carry eight marks, which is deliberate.",
      tip: "Add the audience's answer to “what will you remember?” as a written comment. It matters more than the mark.",
      mistakes: "Do not mark grammar. This is a delivery assessment and mixing criteria makes the feedback unusable.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaBookOpen", title: "The five-part story", desc: "Who · normal · the TURN · what happened · the point." },
      { icon: "FaEye", title: "Vivid means specific", desc: "A name, a number, an object. Not adjectives." },
      { icon: "FaFish", title: "Three hooks", desc: "A story, a question, a number. Then pause." },
      { icon: "FaPauseCircle", title: "Silence", desc: "Two seconds. It reads as confidence, not as a gap." },
      { icon: "FaBullseye", title: "One takeaway", desc: "Contrast form, under fifteen words, said slower." },
      { icon: "FaFlagCheckered", title: "The close", desc: "Return to the story. Pause. Then thank you." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to warm-up task 1 on slide 3. Have learners tell the same ninety-second story again and ask their partner what the point was. The difference is the module.",
      tip: "Also revisit task 3: what do they remember from a talk this year? Ask the same about the talks in this class — the answers are usually specific.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The speaking toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaBookOpen", title: "The five-part story", desc: "1  WHO and WHERE — one line, a name\n2  WHAT WAS NORMAL — one line\n3  THE TURN — the hinge\n4  WHAT HAPPENED — three details\n5  THE POINT — say it aloud" },
      { icon: "FaFish", title: "Three hooks", desc: "STORY — “Last March, a student…”\nQUESTION — “Have a guess.”\nNUMBER — “Forty per cent.”  ( pause )\n\nAll three need a PAUSE after." },
      { icon: "FaBullseye", title: "The takeaway", desc: "“We're not X. We're Y.”\n\nUnder 15 words · contrast form\nSlower · falling · pause either side\nWrite it FIRST, before the talk." },
      { icon: "FaFlagCheckered", title: "The close", desc: "Return to the opening story\nSay the last sentence\nPAUSE  ( two seconds )\nTHEN say thank you" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The third box is the one to write before planning anything else.",
      tip: "Print all four on one card. It is the whole module and it fits on a page.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You gave a talk that somebody could repeat the next day. That is a much higher bar than being clear.",
    sub: "One story, one sentence, and the confidence to stand in silence for two seconds.\nMost speakers never learn any of the three.",
    chips: ["NEXT — Module 6", "Negotiation & Influence", "When both sides want something and neither can simply take it"],
    notes: tn({
      time: "5 minutes.",
      how: "Name the standard they met: the audience could repeat one sentence. That is the test, and most talks fail it.",
      tip: "Preview Module 6: negotiation combines Module 2's argument, Module 4's discussion skills and this module's persuasion — with something real at stake for both sides.",
      activity: "Ask every learner to name the one sentence they would want repeated from their next real talk.",
    }),
  });
};
