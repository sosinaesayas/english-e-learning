"use strict";
/* LEVEL 3 · MODULE 8 — Reading & Writing for Work   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 3", levelNo: LV.no, levelName: "Intermediate\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Reading & Writing for Work",
    sub: "The last module of Level 3. Reports, formal emails and summarising — the written English that people keep, forward and judge you on.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "END OF", v: "LEVEL 3" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open with what makes written work English different from everything so far: it is permanent. A clumsy sentence in a meeting evaporates; the same sentence in a report is forwarded, filed and read by people you will never meet.",
      tip: "This is the final module of the level. Say so, and say what learners will have completed: three levels, twenty-two modules, and a full CEFR A2 to B1 course.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. All of them permanent and all of them judged.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Read a long work document quickly", d: "Skim and scan from Level 2, now on reports and contracts." },
      { t: "Write a short report with a clear structure", d: "Summary, findings, recommendation. Three parts." },
      { t: "Summarise a long text in one paragraph", d: "The hardest writing skill, and the most valued." },
      { t: "Write plainly instead of impressively", d: "Short words, active verbs, one idea per sentence." },
      { t: "Proofread your own work before it goes out", d: "Six passes. The skill from Module 3, aimed at documents." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 4 is the one that surprises people. Learners believe work writing should be complicated; the opposite is true and it is a professional standard, not a simplification for learners.",
      tip: "Objective 3 is the most valuable thing here. Anyone who can summarise a twenty-page document into one accurate paragraph becomes useful very quickly.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what do you actually read and write?", sub: "Be specific about your own work.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaFileAlt", title: "1 · In a week", desc: "What do you read in English at work in one week? Emails? Reports? Nothing?" },
      { icon: "FaPen", title: "2 · What do you write?", desc: "And what do you avoid writing because it feels too difficult?" },
      { icon: "FaClock", title: "3 · How long?", desc: "How long does it take you to write one work email in English? Be honest." },
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Task 2 is the diagnostic. Most learners avoid writing anything longer than a short message, which quietly limits what work they are given.",
      mistakes: "Correct nothing. Note what learners say they avoid — that is your curriculum for this module.",
      tip: "Task 3 often produces alarming answers: thirty or forty minutes for one email. Slide 20's method usually halves that within a week.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Written English at work is permanent. That is what makes it different.",
    sub: "A clumsy sentence in a meeting disappears in five seconds. The same sentence in a report is forwarded,\nfiled and read by people you will never meet — and it is the only evidence they have of how you think.",
    chips: ["Permanent", "Forwarded", "Judged"],
    notes: tn({
      time: "7 minutes.",
      how: "The last clause is the honest one: for people who never meet you, your writing IS you. That is uncomfortable and it is why this module matters.",
      mistakes: "Learners write to sound clever. Readers want to understand quickly, and complexity slows them down without impressing anyone.",
      extra: "Plain English is a professional standard in most large organisations. It is not a simplification for second-language writers — native speakers are trained in it too.",
      tip: "Reassure the class: their English is already good enough to write clearly. What is missing is structure and confidence, and both are taught here.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — the four text types
  L.grid({
    sec: SEC.con, title: "Four written text types at work", sub: "Each has a fixed shape. Learn the shape and the writing gets much faster.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaEnvelope", title: "1 · EMAIL", desc: "Subject with the action · purpose in line 1 · detail · one request with a date.\nFrom Module 5." },
      { icon: "FaFileAlt", title: "2 · REPORT", desc: "Summary first · findings · recommendation.\nThe summary goes FIRST, not last." },
      { icon: "FaClipboardList", title: "3 · NOTES / MINUTES", desc: "Status · issues · decisions · actions.\nA name and a date on every action." },
      { icon: "FaLightbulb", title: "4 · PROPOSAL", desc: "The problem · your solution · what it costs · what happens next." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "The point of all four is the same: the shape is fixed, so you never start from a blank page. Choosing the type is most of the work.",
      mistakes: "Writing everything as a long email. A report sent as prose in an email body does not get read or kept.",
      extra: "Types 1 and 3 were covered in Module 5. This module adds types 2 and 4.",
      tip: "The summary-first rule in type 2 is the single biggest difference between a report that gets read and one that does not.",
      activity: "Which type? Give eight work situations and have learners name the right document for each.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — reading fast at work
  L.panelSide({
    sec: SEC.con, title: "Reading a long document in five minutes", sub: "You will never have time to read everything. Nobody does.",
    panelW: 6.8,
    panel: { label: "The five-minute method", color: C.green, tint: C.readTint, size: 17, lsm: 1.4,
      text: "1.  Read the TITLE and the SUMMARY.\n     30 seconds. Often that is enough.\n\n2.  Read the first line of every section.\n     2 minutes. Now you know the shape.\n\n3.  Scan for anything with YOUR name\n     or your department in it.\n\n4.  Read ONLY those parts properly.\n\n5.  Read the recommendations at the end." },
    side: { label: "Why this works", color: C.green, size: 16, items: [
      "Work documents are written to be skimmed. The summary exists for exactly this.",
      "Most of a report does not concern you, and the writer knows that.",
      "Steps 3 and 4 find the part you must act on.",
      "Step 5 catches anything you are being asked to do.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "This is Level 2 Module 6's skimming and scanning applied to professional documents. Say the connection — learners are surprised the same technique scales up.",
      mistakes: "Reading a forty-page report from page one. Nobody does this, including the people who wrote it.",
      extra: "The fact that reports have summaries is the writer telling you that skimming is expected and legitimate.",
      tip: "Step 3 is the practical one. Search the document for your own name or team — that is the part you will be held to.",
      activity: "Five minutes: give a long document and exactly five minutes, then ask three questions about it.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — the report
  L.panelSide({
    sec: SEC.con, title: "The short report — three parts", sub: "The summary goes FIRST. That is not optional.",
    panelW: 6.8,
    panel: { label: "The structure", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "TITLE  —  what it is about, and when\n\n1.  SUMMARY  —  4 or 5 lines\n     What you found and what you\n     recommend. Written LAST, placed FIRST.\n\n2.  FINDINGS  —  what you discovered\n     With numbers. Headings if it is long.\n\n3.  RECOMMENDATION  —  what to do\n     Specific. With a date and a cost." },
    side: { label: "The rules", color: C.green, size: 16, items: [
      "Most readers read ONLY the summary. Write it accordingly.",
      "Write the summary last, when you know what you found.",
      "Findings are facts. Recommendations are what you think should happen. Never mix them.",
      "One page if you can. Two at most.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The summary-first rule reverses how learners naturally write. They build to a conclusion; a report states the conclusion and then supports it.",
      mistakes: "Burying the recommendation on page two. Senior readers stop after the summary, so anything not in it may as well not exist.",
      extra: "Writing the summary last and placing it first is standard professional practice. You cannot summarise findings you have not yet written.",
      tip: "The findings/recommendation separation matters. Mixing fact and opinion is how reports lose credibility.",
      activity: "Summary only: give a set of findings and have learners write only the five-line summary.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — summarising
  L.compare({
    sec: SEC.con, title: "Summarising — choosing what to leave out",
    sub: "A summary is not a short version of everything. It is the important part only.",
    left: { h: "Not a summary", items: ["Every point, made shorter.", "The first paragraph of the original.", "A list of the section headings.", "Everything the writer said.", "→ Still too long to be useful."] },
    right: { h: "A real summary", items: ["The ONE main finding.", "Two or three supporting facts, with numbers.", "What should happen next.", "Nothing else.", "→ Four or five lines. Readable in 20 seconds."] },
    note: "The test: if your reader read ONLY your summary, would they know what to do? If not, it is not finished.",
    notes: tn({
      time: "16 minutes. The hardest slide in the module.",
      how: "Summarising is choosing, and choosing is what makes it difficult. Learners include everything because leaving things out feels like losing information.",
      mistakes: "Producing a shorter version of the whole document. That is compression, not summary, and it is still too long to be useful.",
      extra: "The word limit is the teaching tool. A hard limit forces the choice that makes a summary a summary.",
      tip: "The test in the note is the one to use for every summary from now on. It is practical and it settles arguments.",
      activity: "Fifty words: give a two-page document and a strict fifty-word limit.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — plain English
  L.compare({
    sec: SEC.con, title: "Plain English — clear beats clever",
    sub: "The left column is not better English. It is worse.",
    left: { h: "Trying to sound impressive", items: ["“Utilise”", "“In the event that”", "“Prior to the commencement of”", "“It is anticipated that”", "“A significant deterioration occurred”", "“Please find attached herewith”"] },
    right: { h: "Plain and professional", items: ["“Use”", "“If”", "“Before”", "“We expect”", "“Things got much worse”", "“I've attached”"] },
    note: "Short words. Active verbs. One idea per sentence. This is a professional standard, not a simplification — large organisations train native speakers in exactly this.",
    notes: tn({
      time: "15 minutes.",
      how: "The note removes the anxiety. Learners fear plain writing looks like weak English. It is in fact what good organisations require.",
      mistakes: "Reaching for long words to sound qualified. Long words slow the reader down and impress nobody who matters.",
      extra: "“Herewith”, “hereby” and “aforementioned” are relics. They appear in some templates and should not be copied.",
      tip: "The right column is not simpler English — it is more confident English. Only an unsure writer hides behind long words.",
      activity: "Translate it: give twelve inflated phrases and have learners produce the plain version.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — proofreading
  L.list({
    sec: SEC.con, title: "Before you send it — six passes", sub: "From Module 3, now aimed at work documents.",
    color: C.green, size: 18, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "Does the first line say why you are writing?", d: "If a reader stops after one line, do they know the point?" },
      { t: "Is there ONE clear request or recommendation?", d: "With a date. Three requests get one answer." },
      { t: "Third-person -s, articles, plurals", d: "The Module 3 passes. One error type at a time." },
      { t: "Any long words that could be shorter?", d: "Utilise → use. Prior to → before." },
      { t: "Any sentence you cannot read in one breath?", d: "Split it. One idea per sentence." },
      { t: "Would I be happy to receive this?", d: "The check that catches everything else." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Pass 6 is the catch-all and it finds tone problems no rule-based check will. It is also two seconds of work.",
      mistakes: "Sending immediately after finishing. Ten minutes away from the document, then a reread, catches most errors.",
      extra: "For anything important, write it, leave it, and reread before sending. That gap is worth more than any checklist.",
      tip: "This combines Module 3's accuracy passes and Module 5's tone check into one routine for documents.",
      activity: "Six passes: learners proofread a document containing one error of each type.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "recommend", ipa: "/ˌrekəˈmend/", pos: "verb", icon: "FaThumbsUp",
      meaning: "To say what you think somebody should do.",
      example: "I recommend replacing one van. We recommend that the team meets weekly.",
      mistake: "“Recommend doing”, not “recommend to do”. And “I recommend YOU to go” is wrong — say “I recommend that you go”.",
      notes: tn({ time: "8 minutes.",
        how: "Two correct patterns: recommend + -ing, and recommend that + clause. The “to do” form is the transfer error and it is very common.",
        mistakes: "“I recommend to buy a new van.” Should be “I recommend buying a new van.”",
        extra: "The noun is “recommendation”, stress on the fourth syllable — re-com-men-DA-tion. The -tion rule from Module 2.",
        tip: "This is the key verb of the report's third section. Getting the pattern right matters more here than almost anywhere.",
        activity: "Two patterns: give ten recommendations and have learners write each in both correct forms." }) },

    { word: "attach", ipa: "/əˈtætʃ/", pos: "verb", icon: "FaPaperclip",
      meaning: "To send a file with an email.",
      example: "I've attached the report. Please see the attached figures.",
      mistake: "“Please find attached herewith” is old-fashioned. Write “I've attached the report” or “the report is attached”.",
      notes: tn({ time: "7 minutes.",
        how: "This is the plain-English point from slide 9 in one word. The old formula appears in templates everywhere and should not be copied.",
        mistakes: "“I attach here the file” is a direct translation. The natural forms are “I've attached…” and “Please see the attached…”.",
        extra: "attach · attached · attachment. And the very useful habit of naming what you attached in the sentence.",
        tip: "Always say what the attachment IS. “I've attached the March figures” is far better than “please see attached”.",
        activity: "Rewrite it: give five old-fashioned attachment sentences and have learners modernise each." }) },

    { word: "confirm", ipa: "/kənˈfɜːm/", pos: "verb", icon: "FaCheckCircle",
      meaning: "To say definitely that something is true or agreed.",
      example: "Could you confirm the date? I can confirm that the payment was sent.",
      mistake: "Stress on the SECOND syllable: con-FIRM. And “confirm that…”, not “confirm about…”.",
      notes: tn({ time: "7 minutes.",
        how: "“Could you confirm…?” is the standard professional way to check something without implying doubt about the person.",
        mistakes: "“Please confirm me the date” is wrong. Say “please confirm the date” or “please confirm that the date is…”.",
        extra: "confirm · confirmation · a confirmation email · to confirm receipt.",
        tip: "Confirming in writing is a professional habit worth teaching: after a phone agreement, send a two-line email confirming it.",
        activity: "Confirm it: learners write a two-line email confirming a decision made verbally." }) },

    { word: "brief", ipa: "/briːf/", pos: "adjective and noun", icon: "FaCompressAlt",
      meaning: "Short. Also: a short set of instructions for a task.",
      example: "Here is a brief summary. She sent me the brief this morning.",
      mistake: "Two uses. As an adjective it means short; as a noun it is the instructions for a piece of work.",
      notes: tn({ time: "7 minutes.",
        how: "The adjective is the more useful of the two. “A brief summary” and “in brief” are standard report language.",
        mistakes: "Confusing “brief” with “short” in some collocations. “A brief meeting” is natural; “a short summary” is fine but “a brief summary” is more formal.",
        extra: "briefly · in brief · a brief · to brief somebody. The verb — to brief — means to give instructions.",
        tip: "“Briefly” is a useful signpost in both writing and presentations: “Briefly, the position is this…”",
        activity: "Noun or adjective: give eight sentences and have learners identify which use appears." }) },

    { word: "outline", ipa: "/ˈaʊtlaɪn/", pos: "noun and verb", icon: "FaListUl",
      meaning: "A short description of the main points, without detail.",
      example: "This report outlines three options. Here is an outline of the plan.",
      mistake: "Stress on the FIRST syllable for both the noun and the verb — unlike update and increase.",
      notes: tn({ time: "7 minutes.",
        how: "Worth contrasting with the stress pairs from Modules 5 and 6. Not every noun/verb pair shifts its stress, and this is a useful counter-example.",
        mistakes: "Learners over-apply the stress-shift rule after meeting update, record and increase. Outline does not shift.",
        extra: "outline the options · a brief outline · in outline. All are standard in reports.",
        tip: "“This report outlines…” is a strong opening line for the summary section. Teach it as a frame.",
        activity: "Outline it: learners write a three-line outline of a real piece of work." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Written Work English 1 of 5" }),
    title: "Linking words for written English",
    sub: "The signposts of a document. More formal than the spoken ones.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17, headSize: 16, colW: [3.6, 3.8, 4.733],
      rows: [
        ["Written", "Spoken version", "What it signals"],
        ["However", "but", "the opposite is coming"],
        ["Therefore  ·  As a result", "so", "the result"],
        ["In addition  ·  Furthermore", "and · also", "one more point"],
        ["For example  ·  In particular", "like", "an example"],
        ["Overall  ·  In summary", "so basically", "the conclusion"],
      ],
    },
    note: "“However” usually starts a new sentence with a comma after it. “But” joins two halves of one sentence. They are not interchangeable in position.",
    notes: tn({
      time: "14 minutes.",
      how: "The middle column is the useful part: learners already own the spoken versions, so this is a register upgrade rather than new vocabulary.",
      mistakes: "“However” used like “but” in the middle of a sentence without punctuation. It needs a full stop or a semicolon before it.",
      extra: "Do not over-use these. One linking word per paragraph is usually enough; more makes writing feel mechanical.",
      tip: "This is Level 2 Module 6's joining words, now in their formal written forms. Learners recognise the job and only need the new word.",
      activity: "Upgrade it: give ten spoken sentences and have learners rewrite each with a written linker.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Written Work English 2 of 5" }),
    title: "Nouns made from verbs — and why to avoid them",
    sub: "English lets you turn a verb into a noun. It usually makes writing worse.",
    left: { h: "Verb hidden inside a noun", items: ["“We carried out an investigation.”", "“There was a reduction in costs.”", "“We made a decision.”", "“The implementation of the system…”", "→ Longer. Slower. Vaguer."] },
    right: { h: "Verb doing the work", items: ["“We investigated.”", "“Costs fell.”", "“We decided.”", "“When we brought in the system…”", "→ Shorter. Clearer. Who did what."] },
    note: "Look for “carried out”, “made”, “there was”, and “-tion” words. Each one usually hides a verb that would do the job better.",
    notes: tn({
      time: "15 minutes.",
      how: "This is the most technical slide in the module and the highest-value one for report writing. Teach the four signals in the note as a search pattern.",
      mistakes: "Learners believe the left column sounds more professional. It sounds more bureaucratic, which is not the same thing.",
      extra: "The left column also hides WHO did the action. “A decision was made” never says by whom, and sometimes that is deliberate.",
      tip: "Search any draft for “-tion” words. Half of them can become verbs, and every one that does makes the sentence shorter.",
      activity: "Find the verb: give ten noun-heavy sentences and have learners recover the verb in each.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Written Work English 3 of 5" }),
    title: "Recommending and suggesting — the patterns",
    sub: "Four patterns. Two of them catch almost everyone.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [4.4, 4.0, 3.933],
      rows: [
        ["Pattern", "Example", "Note"],
        ["recommend + -ing", "I recommend replacing the van.", "the commonest"],
        ["recommend that + clause", "I recommend that we replace it.", "more formal"],
        ["suggest + -ing", "I suggest waiting until March.", "never “suggest to wait”"],
        ["propose + -ing / that", "We propose that the team meets weekly.", "most formal"],
      ],
    },
    note: "NEVER “recommend to do” or “suggest to do”. English uses -ing or a that-clause after all four of these verbs.",
    notes: tn({
      time: "14 minutes.",
      how: "The note is the whole slide. “Recommend to do” and “suggest to do” are among the most persistent errors at B1 and both appear in report writing constantly.",
      mistakes: "“I suggest you to come early” is a double error — no “to”, and “suggest you” needs a that-clause.",
      extra: "“Advise” is the exception: “I advise you to go” is correct. Mention it so the pattern does not over-generalise.",
      tip: "The recommendation section of a report lives or dies on these patterns. Drill them until they are automatic.",
      activity: "Fix the pattern: give twelve sentences with “to do” errors and have learners correct each.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Written Work English 4 of 5" }),
    title: "Reporting findings — the language of evidence", sub: "Separate what you found from what you think.",
    panelW: 6.9,
    panel: { label: "Two kinds of sentence", color: C.gram, tint: C.surf2, size: 16.5, lsm: 1.36,
      text: "FINDINGS  —  facts, no opinion\n     “Delivery times rose from 4 to 6 days.”\n     “Two of the three vans are over 10\n      years old.”\n     “The figures show that…”\n\nRECOMMENDATIONS  —  what you think\n     “I recommend replacing one van.”\n     “It would be worth reviewing this\n      again in six months.”" },
    side: { label: "Why keep them apart", color: C.gram, size: 16, items: [
      "A reader must be able to check your facts separately from your judgement.",
      "Mixing them makes the whole report look like opinion.",
      "Findings use the past simple and the figures. Recommendations use recommend, suggest and should.",
      "If you are not certain, hedge the recommendation — never the finding.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The last side-panel point is subtle and important: hedge your recommendation if unsure, but never hedge a fact. A hedged fact is not a fact.",
      mistakes: "Writing “I think delivery times rose” when the figures show they did. That turns evidence into an opinion and weakens the whole report.",
      extra: "“The figures show that…” is a useful frame for findings. It attributes the claim to the data rather than to you.",
      tip: "This separation is what makes a report credible. A reader who can check your findings will trust your recommendations.",
      activity: "Sort them: give twelve sentences and have learners split them into findings and recommendations.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Written Work English 5 of 5" }),
    title: "Put it all together — how to write any work document", sub: "Six steps. They halve the time it takes.",
    color: C.gram, size: 19, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "Decide the TYPE first", d: "Email, report, notes or proposal. The shape comes with it." },
      { t: "Write the findings or the detail FIRST", d: "Do not start with the summary. You cannot summarise what you have not written." },
      { t: "Then write the recommendation", d: "Specific, with a date and a cost." },
      { t: "Then write the summary, and put it at the TOP", d: "Four or five lines. Written last, read first." },
      { t: "Cut every long word and split every long sentence", d: "Utilise → use. One idea per sentence." },
      { t: "Leave it, then proofread with the six passes", d: "Ten minutes away catches more than any checklist." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Step 2 is what most learners get backwards. Writing the summary first produces a vague summary and then a report that does not match it.",
      mistakes: "Editing while drafting. Steps 2 to 4 are drafting; step 5 is editing. Doing both at once is what makes writing take forty minutes.",
      extra: "This is the Module 3 accuracy routine — write first, check after — applied to whole documents.",
      tip: "Learners who follow these six steps typically halve the time they spend on a work email within a week. Say so; it is a strong motivator.",
      activity: "Six steps: learners write one real work document following the steps in order, timing themselves.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — plain English", sub: "Shorter is not simpler. It is clearer.", items: [
      { q: "“We will utilise the new system prior to the commencement of March.”", a: "“We'll use the new system before March.”", why: "Two long words replaced by two short ones. Same meaning, half the length, and it can be read at speed." },
      { q: "Is the short version less professional?", a: "No — it is more professional.", why: "Large organisations train native speakers to write this way. Long words slow readers down and impress nobody who matters." },
      { q: "“Please find attached herewith the report.”", a: "“I've attached the report.”", why: "“Herewith” is a relic. It appears in old templates and should not be copied forward." },
    ] },
    { title: "Guided examples 2 — nouns hiding verbs", sub: "Recover the verb.", items: [
      { q: "“We carried out an investigation into the delays.”", a: "“We investigated the delays.”", why: "The verb was hiding inside “investigation”. Five words became three and the sentence gained a clear subject." },
      { q: "“There was a reduction in costs of 12%.”", a: "“Costs fell by 12%.”", why: "“There was” almost always signals a hidden verb. Look for it in every draft." },
      { q: "What four signals should you search for?", a: "“carried out” · “made” · “there was” · words ending in -tion.", why: "Each usually hides a verb that would do the job in fewer words." },
    ] },
    { title: "Guided examples 3 — recommend and suggest", sub: "Never “to do”.", items: [
      { q: "“I recommend to replace the van.” What is wrong?", a: "“I recommend replacing the van.”", why: "Recommend takes -ing or a that-clause. It never takes “to” plus a verb." },
      { q: "“I suggest you to come early.” Fix it.", a: "“I suggest that you come early.” Or “I suggest coming early.”", why: "Two errors in one short sentence: no “to”, and “suggest you” needs a that-clause." },
      { q: "Is “I advise you to go” correct?", a: "Yes — “advise” is the exception.", why: "Advise takes an object plus “to”. Recommend, suggest and propose do not." },
    ] },
    { title: "Guided examples 4 — findings or recommendation?", sub: "Facts and judgement stay apart.", items: [
      { q: "“Delivery times rose from four to six days.” Which is it?", a: "A finding. It is a fact with numbers.", why: "Past simple plus figures. A reader can check it independently of anything you think." },
      { q: "“I recommend replacing one van.” Which is it?", a: "A recommendation. It is your judgement.", why: "The verb “recommend” marks it as opinion, which is exactly what the reader needs to know." },
      { q: "Why is “I think delivery times rose” wrong?", a: "It turns a checkable fact into an opinion.", why: "Hedge a recommendation if you are unsure. Never hedge a finding — a hedged fact is not a fact." },
    ] },
    { title: "Guided examples 5 — the summary", sub: "Written last. Read first.", items: [
      { q: "Where does the summary go in a report?", a: "At the top, straight after the title.", why: "Most readers read only the summary. Anything not in it may as well not exist." },
      { q: "When should you write it?", a: "Last, when you know what you found.", why: "You cannot summarise findings you have not yet written. Writing it first produces a vague summary." },
      { q: "What is the test of a good summary?", a: "If the reader read only this, would they know what to do?", why: "Four or five lines, readable in twenty seconds, containing the finding and the recommendation." },
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
    title: "Being asked for a report",
    sub: "Chaltu takes a brief properly. Watch the four questions she asks.",
    turns: [
      { who: "MANAGER", text: "Could you write me a short report on the delivery delays?", side: "r" },
      { who: "CHALTU", text: "Of course. How long would you like it — one page or two?", side: "l" },
      { who: "MANAGER", text: "One page is fine.", side: "r" },
      { who: "CHALTU", text: "And do you want a recommendation, or just the findings?", side: "l" },
      { who: "MANAGER", text: "Both, please. And a cost if you can.", side: "r" },
      { who: "CHALTU", text: "Understood. Can I confirm the deadline — Friday?", side: "l" },
    ],
    note: "Length · findings or recommendation · cost · deadline. Four questions, thirty seconds, and the report will be right first time.",
    notes: tn({
      time: "14 minutes.",
      how: "Taking a brief properly is the skill here. Thirty seconds of questions prevents a rewrite, and most people never ask.",
      mistakes: "Accepting a vague brief and guessing. The result is a document that has to be written twice.",
      extra: "“Can I confirm the deadline?” uses the vocabulary from slide 13 and is a professional habit worth building.",
      tip: "Ask the class what a fifth useful question would be. “Who else will read it?” is the best answer — it decides the register.",
      activity: "Take a brief: pairs role-play being asked for a document and must ask four questions.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Feedback on a draft",
    sub: "Yonas gets his report back. Two comments, not twenty.",
    turns: [
      { who: "MANAGER", text: "This is good. The findings are clear. Two things?", side: "r" },
      { who: "YONAS", text: "Please.", side: "l" },
      { who: "MANAGER", text: "Your recommendation is on page two. Move it into the summary.", side: "r" },
      { who: "YONAS", text: "So the summary should say what I recommend, not just what I found?", side: "l" },
      { who: "MANAGER", text: "Exactly. Assume I read nothing else. And “utilise” — just say “use”.", side: "r" },
      { who: "YONAS", text: "Understood. I'll send it back this afternoon.", side: "l" },
    ],
    note: "“Assume I read nothing else” is the rule for every summary you will ever write.",
    notes: tn({
      time: "14 minutes.",
      how: "The manager's line in turn 5 is the module in six words. Write the summary as though it is the only thing that will be read, because usually it is.",
      mistakes: "Yonas asks a clarifying question in turn 4 rather than nodding. That is the Module 5 habit doing real work.",
      extra: "Two corrections, not twenty — the feedback technique from Module 3 slide 27.",
      tip: "Note that the manager praises first and names a specific number of points. Learners will manage others one day and this is the model.",
      activity: "Two things: pairs exchange drafts and give exactly one piece of praise and two corrections.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Language for documents and drafts",
    sub: "Six phrases for the conversation around written work.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaQuestion", title: "“How long would you like it?”", desc: "The first question. Saves a rewrite." },
      { icon: "FaCheckCircle", title: "“Can I confirm the deadline?”", desc: "Always confirm it. In writing if you can." },
      { icon: "FaEye", title: "“Would you mind having a look?”", desc: "Asking somebody to check a draft." },
      { icon: "FaPaperclip", title: "“I've attached the March figures.”", desc: "Say WHAT you attached, not just “attached”." },
      { icon: "FaRedo", title: "“I'll send a revised version by…”", desc: "A commitment with a date. Always." },
      { icon: "FaComments", title: "“Is there anything else you'd like included?”", desc: "Asked before you write, not after." },
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Phrase 6 is the one that prevents rework. Asked before writing it takes ten seconds; asked after, it costs an evening.",
      mistakes: "Writing first and asking afterwards. The brief conversation is where a document is actually decided.",
      extra: "Phrase 4 is a small but real improvement. “Please see attached” makes the reader open the file to find out what it is.",
      tip: "Phrase 3 is the Module 3 habit again: ask somebody to check your writing. It is the fastest way to keep improving.",
      activity: "Six phrases: pairs role-play commissioning and delivering a document using all six.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "MANAGER", text: "Could you write a short report on the training programme?", side: "r" },
      { who: "YOU", text: "Of course. How long would you ______ it?", side: "l" },
      { who: "MANAGER", text: "One page.", side: "r" },
      { who: "YOU", text: "And do you want a ______ , or only the findings?", side: "l" },
      { who: "MANAGER", text: "Both, with a cost.", side: "r" },
      { who: "YOU", text: "Can I ______ the deadline? And I'll ______ the figures when I send it.", side: "l" },
    ],
    note: "Use these:  “like”  ·  “recommendation”  ·  “confirm”  ·  “attach”",
    notes: tn({
      time: "12 minutes.",
      how: "Have pairs perform it, then repeat with a different document type. The four questions are the transferable part.",
      answers: "1 like · 2 recommendation · 3 confirm · 4 attach",
      mistakes: "Gap 2 uses the noun, which takes the -tion stress from Module 2: re-com-men-DA-tion.",
      tip: "Ask what a fifth question would be. “Who else will read it?” decides the register and almost nobody asks it.",
      activity: "Do it again for a proposal instead of a report.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — commissioning and delivering", sub: "Four rounds. Three minutes each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Ask your partner for a document. They must ask four questions.", d: "Length · findings or recommendation · cost · deadline." },
      { t: "Explain a report you have written in 60 seconds", d: "Summary first: what you found and what you recommend." },
      { t: "Give feedback on a partner's draft", d: "One thing good, two corrections. No more." },
      { t: "Summarise a document aloud in 30 seconds", d: "Main finding · two facts · what should happen." },
    ],
    notes: tn({
      time: "14 minutes for all four rounds.",
      how: "Round 2 is the spoken form of a summary and it is genuinely hard. If they cannot say it in sixty seconds, the summary is not clear enough to write.",
      mistakes: "Round 3 with too many corrections. Two is the limit, and the limit is the teaching.",
      tip: "Round 4 is the module's core skill in spoken form. Do it before the written summarising exercise — speaking first makes writing easier.",
      activity: "Explain then write: learners summarise aloud, then write the same summary down.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — say the summary before you write it", sub: "If you cannot say it, you cannot write it.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say your main finding in one sentence", d: "With a number if you have one." },
      { t: "Add two supporting facts", d: "Also with numbers." },
      { t: "Say what should happen next", d: "Specific. With a date." },
      { t: "Now say all three in thirty seconds", d: "Partner times you. Then write it down." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Speaking before writing removes the blank-page problem, exactly as in Level 2 Module 8. It also exposes a vague summary immediately.",
      mistakes: "Learners cannot say their main finding in one sentence, which means they have not decided what it is. That is the real problem, not the writing.",
      extra: "If step 4 takes more than thirty seconds, the summary is too long. Cut before writing rather than after.",
      tip: "This is the fastest fix in the module. A summary that survives the spoken test is almost always a good written summary.",
      activity: "Thirty seconds: every learner delivers their three-part summary aloud before writing it.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — plain English out loud", sub: "In pairs. Say the short version.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“We will utilise the new system.”", d: "Say it plainly." },
      { t: "“Prior to the commencement of the project…”", d: "Say it plainly." },
      { t: "“We carried out an investigation.”", d: "Recover the verb." },
      { t: "“There was a significant reduction in costs.”", d: "Recover the verb." },
      { t: "“It is anticipated that delays will occur.”", d: "Say who expects what." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Doing this aloud is faster than doing it on paper, and the ear catches the improvement immediately.",
      answers: "1 We'll use the new system. · 2 Before the project starts… · 3 We investigated. · 4 Costs fell a lot. · 5 We expect delays.",
      mistakes: "Item 5 is the subtle one. The original hides who is doing the anticipating; the plain version names them.",
      tip: "Every plain version is shorter AND names a doer. Those two improvements travel together.",
      activity: "Ten more: give ten inflated sentences and run this as a fast spoken round.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — reading your own writing aloud",
    sub: "The one-breath test, applied to your own document.",
    left: { h: "What to listen for", items: ["Running out of breath mid-sentence", "Having to re-read a line to understand it", "Stumbling over a long word", "Three “-tion” words in one sentence", "No pause anywhere for twenty words"] },
    right: { h: "What it means", items: ["→ Split the sentence.", "→ The reader will re-read it too.", "→ Use a shorter word.", "→ Recover the verbs.", "→ Add a full stop."] },
    note: "Reading aloud finds problems your eye cannot. Your ear has heard far more English than your eye has read.",
    notes: tn({
      time: "13 minutes.",
      how: "Have learners read their own draft aloud to a partner. Every stumble is a place the reader will stumble, and the diagnosis is immediate.",
      mistakes: "Reading silently and seeing nothing wrong. The brain repairs its own text automatically; the mouth does not.",
      extra: "This is the same technique as Level 2 Module 8's proofreading step, now applied to longer and more complex documents.",
      tip: "For anything important, read it aloud before sending. Two minutes, and it catches more than any spellchecker.",
      activity: "Read it aloud: every learner reads their draft to a partner, who marks every stumble.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — present your report in two minutes", sub: "Module 6's structure, applied to a document.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“This report looks at…”", d: "One sentence. What it covers." },
      { t: "“I found three things.”", d: "Give them the shape." },
      { t: "The three findings, with numbers", d: "Signposts between them." },
      { t: "“I recommend…”", d: "Specific, with a date and a cost." },
      { t: "“Happy to take questions.”", d: "Then answer three." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "This combines Modules 6 and 8. A report is often presented as well as circulated, and the same three-part structure serves both.",
      mistakes: "Reading the report aloud. A presentation of a document is not a recitation of it — the summary is the script.",
      extra: "If the summary is good, this two-minute talk writes itself. That is a useful test of the summary.",
      tip: "Point out that steps 1 to 5 are exactly the report's own structure. Document and talk share one shape.",
      activity: "Two minutes: every learner presents their own report to a small group.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — the final recording of Level 3", sub: "2 minutes. Then compare it with your Module 1 recording.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Summarise a document in 30 seconds", d: "Finding · two facts · recommendation." },
      { t: "Say five inflated phrases in plain English", d: "utilise · prior to · carried out · there was · anticipated." },
      { t: "Make three recommendations using the right patterns", d: "recommend + -ing · suggest + -ing · propose that." },
      { t: "Explain the difference between a finding and a recommendation", d: "In your own words." },
      { t: "Speak for 60 seconds about your work", d: "The same task as Module 1. Compare the two recordings." },
    ],
    notes: tn({
      time: "18 minutes including the comparison.",
      how: "Step 5 is the whole level's assessment. Play the Module 1 recording immediately afterwards — eight modules of progress heard back to back.",
      mistakes: "Step 3 is where “recommend to do” reappears under pressure. Listen specifically for it.",
      answers: "SUCCESS CRITERIA: a 30-second summary with a finding and a recommendation · five plain rewrites · three correct recommendation patterns · a clear fact-versus-judgement distinction · 60 seconds of fluent speech with fewer long pauses than in Module 1.",
      tip: "Count the long pauses in step 5 and compare with the Module 1 count. That number is the most objective evidence of progress in the level.",
      activity: "Then and now: play the first and last recordings side by side for any learner willing.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — taking a brief", sub: "Listen twice. Write down what you must produce.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads at natural speed", color: C.listen, tint: C.listenTint, size: 16, lsm: 1.3,
      text: "“Could you put together a short report on the\ntraining programme? One page, no more.\n\nI need the numbers — how many people we\ntrained and what it cost. Then a recommendation\non whether we run it again in September.\n\nThe board meets on the 20th, so I'd need it by\nthe 15th. And could you send it to Mimi as well?\nShe's presenting it.”" },
    side: { label: "Your task", color: C.listen, size: 15.5, items: [
      "1. What document is wanted?",
      "2. How long should it be?",
      "3. What two numbers are needed?",
      "4. What is the recommendation about?",
      "5. What is the deadline, and why?",
      "6. Who else must receive it?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "This is Level 2 Module 7's note-taking applied to a real work instruction. Learners should write six short items, not sentences.",
      mistakes: "Missing item 6. The second recipient changes the register — Mimi is presenting it, so the summary must stand alone.",
      extra: "The deadline has a reason attached, which tells you it is genuinely fixed rather than a preference.",
      answers: "1 A short report on the training programme. · 2 One page. · 3 How many trained, and the cost. · 4 Whether to run it again in September. · 5 The 15th, because the board meets on the 20th. · 6 Mimi, who is presenting it.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Six items. Miss one and the document is wrong.",
    size: 16.5,
    items: [
      { q: "2 — how long?", a: "One page, no more.", why: "A length constraint is a real instruction. Two pages would be a failure, however good they were." },
      { q: "3 — the two numbers", a: "How many people were trained, and the cost.", why: "Named explicitly. A report without these two figures does not answer the brief." },
      { q: "4 — the recommendation", a: "Whether to run the programme again in September.", why: "One clear question to answer. The recommendation section has a defined job." },
      { q: "5 — the deadline and its reason", a: "The 15th, because the board meets on the 20th.", why: "The reason tells you it is fixed. A deadline with a reason cannot be negotiated casually." },
      { q: "6 — the second recipient", a: "Mimi, who is presenting it.", why: "The most missed item. Because she is presenting from it, the summary must stand entirely on its own." },
    ],
    notes: keyNotes("Item 6 is the diagnostic. Learners who caught it were listening for actions, not just for facts — which is the Level 2 Module 7 skill fully developed."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — feedback on a draft", sub: "Listen for what must change and what must not.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 16, lsm: 1.3,
      text: "“Thanks for this. The findings are clear and the\nnumbers are all there — don't change those.\n\nThree things. First, your recommendation is on\npage two. Move it into the summary at the top.\n\nSecond, the summary is nine lines. Cut it to four\nor five. Assume I read nothing else.\n\nThird, you've used 'utilise' six times. Just say\n'use'. Can you send it back by Thursday?”" },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. What should NOT be changed?",
      "2. Where must the recommendation go?",
      "3. How long should the summary be?",
      "4. What phrase explains why?",
      "5. What word should be replaced?",
      "6. When is it needed back?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Question 4 is the key line: “assume I read nothing else” is the rule for every summary. Have learners write it down.",
      mistakes: "Missing item 1. Knowing what NOT to change is as important as knowing what to fix, and learners often rewrite everything.",
      extra: "Three specific corrections, each with a reason. That is the feedback model from Module 3 slide 27.",
      answers: "1 The findings and the numbers. · 2 Into the summary at the top. · 3 Four or five lines. · 4 “Assume I read nothing else.” · 5 “Utilise” → “use”. · 6 Thursday.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Three corrections, each with a reason.",
    size: 16.5,
    items: [
      { q: "1 — what must not change?", a: "The findings and the numbers.", why: "Praise first, and it is specific. It also stops the writer rewriting the part that was already right." },
      { q: "2 and 4 — the recommendation", a: "Move it into the summary. “Assume I read nothing else.”", why: "The rule for every summary you will ever write. Anything outside it may never be read." },
      { q: "3 — the summary length", a: "Four or five lines, cut from nine.", why: "A summary that takes a minute to read is not doing its job. Twenty seconds is the target." },
      { q: "5 — the word", a: "“Utilise”, used six times, should be “use”.", why: "Slide 9. A long word repeated six times makes a whole document feel heavier than it is." },
      { q: "What is the feedback pattern?", a: "Praise, then exactly three specific corrections, each with a reason.", why: "Twenty corrections teach nothing. Three with reasons can all be acted on." },
    ],
    notes: keyNotes("Point out that the manager gave a reason for every correction. A correction without a reason gets applied once; a correction with one changes future writing."),
  });

  L.grid({
    sec: SEC.lis, title: "Listening and writing together at work", sub: "Four situations where you must do both at once.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaClipboardList", title: "Taking a brief", desc: "Six items: what · how long · what content · deadline · why · who else. Ask if any is missing." },
      { icon: "FaPen", title: "Minuting a meeting", desc: "Decisions and actions only. A name and a date on each. Not a transcript of the discussion." },
      { icon: "FaRedo", title: "Taking feedback", desc: "Write down every correction AND its reason. The reason is what changes your next document." },
      { icon: "FaCheckCircle", title: "Confirming in writing", desc: "After any verbal agreement, send two lines confirming it. It takes a minute and prevents most disputes." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Situation 4 is a professional habit worth building explicitly. A two-line confirmation email after a verbal agreement prevents most misunderstandings.",
      mistakes: "Taking feedback without the reason. The correction gets applied to one document; the reason improves every future one.",
      tip: "All four are note-taking, not transcription. Write short, write only what must be acted on.",
      activity: "Confirm it: after any class agreement, one learner writes the two-line confirmation.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — a short report", sub: "One page. Summary first.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "TRAINING PROGRAMME — MARCH  ·  12 April\n\nSUMMARY\nWe trained 60 staff at a cost of 40,000 birr.\nTest scores rose from 54% to 78%. I recommend\nrunning it again in September at a similar cost.\nFINDINGS\n60 staff attended, against a target of 50.\nCost: 40,000 birr, about 667 per person.\nTest scores rose from 54% to 78%.\nTwelve staff asked for a follow-up.\nRECOMMENDATION\nRun it again in September for about 60 staff.\nBudget 40,000 birr. Add a half-day follow-up." },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Read ONLY the summary. What must be decided?",
      "How many numbers are in the summary?",
      "Which section is fact, and which is judgement?",
      "What does the recommendation add?",
      "Could you act on the summary alone?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Have learners cover everything but the summary and answer question 1. They can — which is the entire design of the document.",
      mistakes: "Learners think the summary repeats the findings. It selects from them: four numbers out of eight, plus the recommendation.",
      extra: "The recommendation adds specifics the summary omits — the follow-up session and the per-person budget.",
      tip: "This report is about 120 words and completely answers the brief from slide 36. Length is not the measure of a report.",
      activity: "Cover and answer: learners answer three questions from the summary alone.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Structure and content together.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "How many staff were trained, and against what target?",
      "What was the cost per person?",
      "By how much did test scores rise?",
      "What does the recommendation add that the summary does not?",
      "Why is the summary at the top rather than the bottom?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Question 4 shows the relationship between the sections: the summary gives the decision, the recommendation gives the detail of carrying it out.",
      mistakes: "Question 2 requires reading the findings — the per-person figure is not in the summary. That is a legitimate summary choice.",
      tip: "Question 5 is the one to dwell on. Most readers read only the summary, so it holds the decision, not the background.",
      answers: "1 60 staff, against a target of 50. · 2 About 667 birr per person. · 3 From 54% to 78% — a rise of 24 points. · 4 The follow-up half-day and the specific budget. · 5 Because most readers read only the summary.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Why this report works.",
    size: 16.5,
    items: [
      { q: "1 — the numbers", a: "60 trained against a target of 50.", why: "The comparison is what makes it good news. “60 staff attended” alone would say nothing." },
      { q: "3 — the score rise", a: "From 54% to 78%.", why: "Both figures given, not just the rise. The reader can judge the starting point as well as the change." },
      { q: "4 — what the recommendation adds", a: "The follow-up half-day and a specific budget figure.", why: "The summary carries the decision; the recommendation carries the detail of doing it." },
      { q: "5 — why the summary is first", a: "Because most readers read only that.", why: "Anything not in the summary may never be read. That is why it is written last and placed first." },
      { q: "How long is the whole report?", a: "About 120 words.", why: "It answers the brief completely. A longer report would not have answered it better." },
    ],
    notes: keyNotes("The last item is worth stating aloud. Learners equate length with effort; this report is short, complete, and took longer to write because of it."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — the same report, badly written", sub: "Same facts. Find the six problems.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "TRAINING REPORT\n\nAt the commencement of March we carried out\nthe implementation of a training programme, and\nsubsequent to its completion an evaluation was\nundertaken by the department, which revealed\nthat there had been a significant improvement in\nthe performance of the participants, and it is\nanticipated that the utilisation of a similar\nprogramme would be beneficial, although the\ncost implications would require consideration\nprior to any decision being taken.\n\n( 60 staff · 40,000 birr · 54% → 78% )" },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Where is the summary?",
      "Where are the numbers?",
      "How many sentences is this?",
      "Find four inflated words.",
      "Who did the evaluation?",
      "Rewrite it as a proper summary.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "Read it aloud in one breath and fail. That physical demonstration teaches more than any analysis.",
      mistakes: "It is one sentence of about ninety words with no structure and no figures, and every number that matters sits outside it in brackets.",
      extra: "“An evaluation was undertaken by the department” is the passive hiding the doer — from slide 18 of Module 6 and slide 17 here.",
      answers: "No summary at all · numbers only in brackets at the end · ONE sentence · commencement, implementation, subsequent to, anticipated, utilisation, prior to · the department, buried in the passive · the rewrite is the slide 41 summary.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Same facts. Unusable document.",
    size: 16.5,
    items: [
      { q: "1 — where is the summary?", a: "There isn't one.", why: "A reader who stops after the first line learns nothing at all. The decision is invisible." },
      { q: "2 — where are the numbers?", a: "In brackets at the end, outside the text.", why: "The three figures that matter are not in a sentence anywhere. They are the whole point of the report." },
      { q: "3 — how many sentences?", a: "One. About 90 words.", why: "Fails the one-breath test many times over. The reader has to re-read it to find where the ideas divide." },
      { q: "4 and 5 — inflated words, hidden doer", a: "commencement · implementation · subsequent to · utilisation · prior to. The passive hides who evaluated it.", why: "Long words plus the passive: the two habits that make writing bureaucratic instead of professional." },
      { q: "Vocabulary check", a: "recommend · attach · confirm · brief · outline", why: "The word “recommend” never appears in this version — so the reader is not told what to do." },
    ],
    notes: keyNotes("The last item is the sharpest point: this document contains no recommendation at all. A report that does not say what should happen has not been written."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — plain English", sub: "Shorter, clearer, and name the doer.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each sentence in plain English.",
    items: [
      "1.  We will utilise the new system prior to March.",
      "2.  An evaluation was undertaken by the department.",
      "3.  There was a significant reduction in costs.",
      "4.  It is anticipated that delays will occur.",
      "5.  Please find attached herewith the report.",
      "6.  We carried out an investigation into the delays.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Two moves for every sentence: shorter words, and recover the verb. Applying both mechanically works every time.",
      answers: "1 We'll use the new system before March. · 2 The department evaluated it. · 3 Costs fell a lot. · 4 We expect delays. · 5 I've attached the report. · 6 We investigated the delays.",
      mistakes: "Item 2 must name the doer. The passive hides who did the evaluation, and the plain version puts them back.",
      tip: "Count the words saved. Roughly half, across all six — and nothing was lost.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — recommend and suggest", sub: "Never “to do”.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Correct each sentence. One of them is already correct.",
    items: [
      "1.  I recommend to replace the van.",
      "2.  I suggest you to come early.",
      "3.  We propose that the team meets weekly.",
      "4.  I would suggest to wait until March.",
      "5.  I advise you to check the figures.",
      "6.  She recommended me to apply for the job.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Items 3 and 5 are both correct. Including correct sentences stops learners changing things at random.",
      answers: "1 recommend replacing · 2 suggest that you come · 3 CORRECT · 4 suggest waiting · 5 CORRECT · 6 recommended that I apply (or “recommended applying”)",
      mistakes: "Item 5 is correct because “advise” is the exception that takes an object plus “to”. Item 6 is the same structure applied wrongly to “recommend”.",
      tip: "Items 5 and 6 side by side make the exception clear. Advise takes “to”; recommend does not.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write a one-page report", sub: "The end-of-level writing task.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write a short report on something real from your work or studies. Follow the six steps from slide 20.",
    items: [
      "1.  TITLE — what it is about, and the date.",
      "2.  FINDINGS first — what you discovered, with at least three numbers.",
      "3.  RECOMMENDATION — specific, with a date and a cost if you can.",
      "4.  SUMMARY last — four or five lines. Put it at the TOP.",
      "5.  Cut every long word. Split every long sentence.",
      "6.  Read it aloud, then proofread with the six passes.",
    ],
    notes: tn({
      time: "25 minutes.",
      how: "Enforce the order. Writing the summary first is the commonest failure and it produces a summary that does not match the report.",
      answers: "MODEL: see slide 41. About 120 words, summary first, four numbers in it, a specific recommendation with a budget.",
      mistakes: "Reports of two pages. One page is the brief, and length is part of the task.",
      tip: "This is the final piece of written work in Level 3. Mark it properly, return it with comments, and allow one rewrite.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — how it is marked", sub: "25 marks. You know the standard before you start.",
    size: 16.5,
    items: [
      { q: "Structure — 6 marks", a: "Title with a date, summary at the TOP, findings, recommendation.", why: "The summary in the wrong place is the single most common failure, and it costs the most marks." },
      { q: "The summary — 6 marks", a: "Four or five lines, containing the main finding AND the recommendation.", why: "The test: could a reader act on this alone? If not, it is not finished." },
      { q: "Findings — 5 marks", a: "At least three numbers, and facts only — no opinion mixed in.", why: "A reader must be able to check your facts separately from your judgement." },
      { q: "Recommendation — 4 marks", a: "Specific, with a date. Correct pattern: recommend + -ing or that.", why: "“Recommend to do” loses marks here. It is the module's target error." },
      { q: "Plain English — 4 marks", a: "No inflated words, no sentence you cannot read in one breath.", why: "Utilise, prior to, commencement and the rest. Each one is a mark." },
    ],
    notes: keyNotes("Give this rubric BEFORE the task. Learners who know that the summary carries six marks put the summary in the right place."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your work writing checklist", sub: "Six checks. Before anything leaves your desk.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Is the summary or the purpose at the TOP?", d: "Assume they read nothing else." },
      { t: "Is there ONE clear request or recommendation, with a date?", d: "Three requests get one answer." },
      { t: "Are the findings separate from what I think?", d: "Facts in one section, judgement in another." },
      { t: "Any long word that could be shorter?", d: "Utilise → use. Prior to → before." },
      { t: "Any sentence I cannot read in one breath?", d: "Split it. One idea per sentence." },
      { t: "Have I left it and reread it?", d: "Ten minutes away catches more than any checklist." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Check 6 is the one learners skip and the one that finds the most. Send nothing important the moment it is finished.",
      tip: "Print this. It applies to every document a learner writes for the rest of their working life.",
      activity: "Six checks: apply this to the final report before handing it in.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Where does the summary go in a report?", opts: "a) at the top     b) at the bottom     c) in the middle" },
      { q: "2. When should you write the summary?", opts: "a) first     b) last     c) halfway through" },
      { q: "3. Which is correct?", opts: "a) I recommend to replace it     b) I recommend replacing it     c) I recommend replace it" },
      { q: "4. “Utilise” should usually be:", opts: "a) used as it is     b) “use”     c) “utilisation”" },
      { q: "5. A finding is:", opts: "a) what you think     b) a fact you discovered     c) what should happen" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 a · 2 b · 3 b · 4 b · 5 b",
      tip: "Questions 1 and 2 together are the module's central rule: written last, placed first.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — plain English", sub: "Write the short version.",
    color: C.green, instruction: "Write the plain English word or phrase.", size: 18,
    items: [
      "1.  utilise",
      "2.  prior to",
      "3.  in the event that",
      "4.  at the commencement of",
      "5.  it is anticipated that",
      "6.  please find attached herewith",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Take the answers orally and fast. These six substitutions cover most inflated work writing.",
      answers: "1 use · 2 before · 3 if · 4 at the start of · 5 we expect · 6 I've attached",
      mistakes: "Item 5 must name a doer. “It is anticipated” hides who is expecting; “we expect” does not.",
      tip: "Print these six. They are the most frequent offenders in real work documents.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Documents, linkers and patterns.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the DOCUMENT to its STRUCTURE", opts: "1. report     2. minutes     3. email     4. proposal" },
      { q: "a) status · issues · decisions · actions     b) problem · solution · cost · next steps", opts: "c) summary · findings · recommendation     d) subject · purpose · detail · request" },
      { q: "Part 2 — match the SPOKEN linker to the WRITTEN one", opts: "1. but     2. so     3. and also          a) therefore     b) in addition     c) however" },
      { q: "Part 3 — match the VERB to its PATTERN", opts: "1. recommend     2. advise     3. suggest          a) + object + to     b) + -ing or that     c) + -ing or that" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–a, 3–d, 4–b.  ·  Part 2: 1–c, 2–a, 3–b.  ·  Part 3: 1–b, 2–a, 3–c.",
      tip: "Part 3 makes the “advise” exception visible. It is the only one of the three that takes “to”.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — finding or recommendation?", sub: "Fact, or judgement?",
    color: C.green, instruction: "Write F for finding or R for recommendation.", size: 18,
    items: [
      "1.  Delivery times rose from four to six days.",
      "2.  I recommend replacing one van this year.",
      "3.  Two of the three vans are over ten years old.",
      "4.  It would be worth reviewing this again in six months.",
      "5.  Test scores rose from 54% to 78%.",
      "6.  We should budget 40,000 birr for September.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "The test is simple: could somebody check it independently? Then it is a finding.",
      answers: "1 F · 2 R · 3 F · 4 R · 5 F · 6 R",
      mistakes: "Learners mark item 6 as a finding because it has a number. Numbers appear in both — the verb is what marks the judgement.",
      tip: "Point out the verbs: findings use rose, are, fell. Recommendations use recommend, should, would be worth.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — recover the verb", sub: "Find the verb hiding inside the noun.",
    color: C.green, instruction: "Rewrite each sentence with the verb doing the work.", size: 17,
    items: [
      "1.  We carried out an investigation into the delays.",
      "2.  There was a reduction in costs of 12%.",
      "3.  The implementation of the system took three months.",
      "4.  We made a decision to postpone.",
      "5.  An evaluation of the programme was undertaken.",
      "6.  There has been an improvement in performance.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Teach the four signals as a search pattern: “carried out”, “made”, “there was”, and -tion words.",
      answers: "1 We investigated the delays. · 2 Costs fell by 12%. · 3 We took three months to bring in the system. · 4 We decided to postpone. · 5 We evaluated the programme. · 6 Performance has improved.",
      mistakes: "Item 5 has no doer at all in the original. The rewrite has to supply one, which is the point.",
      tip: "Count the words before and after. Every rewrite is shorter and every one names who did it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  The summary goes at the end of a report.",
      "2.  You should write the summary last.",
      "3.  “I recommend to wait” is correct.",
      "4.  Findings and recommendations should be kept separate.",
      "5.  Long words make writing more professional.",
      "6.  “Advise” takes an object plus “to”.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — at the top · 2 T · 3 F — “recommend waiting” · 4 T · 5 F — they slow the reader down · 6 T",
      tip: "Items 1 and 2 together are the rule worth repeating: written last, placed first.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own writing at work.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What do you write in English at work, and what do you avoid?",
      "2.  Write a five-line summary of something you did last month.",
      "3.  Write one recommendation using the correct pattern.",
      "4.  Name three inflated words you have used yourself.",
      "5.  How long does one work email take you now?",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Question 5 is the same as warm-up task 3. Compare the answers at the end of the module — most learners report a real drop.",
      answers: "No fixed answers. Question 2 must contain a finding and a recommendation; question 3 must use -ing or a that-clause.",
      mistakes: "Question 2 written as a description rather than a summary. It needs a decision in it.",
      tip: "Question 1's second half tells you what these learners are avoiding, which is the most useful thing you can know for Level 4.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Say it before you write it.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner checks the structure.", size: 19,
    items: [
      "1.  Summarise a document in 30 seconds. Finding · facts · recommendation.",
      "2.  Say six inflated phrases in plain English.",
      "3.  Make three recommendations using three different patterns.",
      "4.  Read your own draft aloud. Partner marks every stumble.",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Round 4 is the most useful. Every stumble marks a sentence the reader will also stumble over.",
      answers: "SUCCESS CRITERIA: 1 a finding and a recommendation within 30 seconds · 2 six correct plain versions · 3 recommend + -ing, suggest + -ing, propose that · 4 fewer than three stumbles per paragraph.",
      tip: "Round 3 is where “recommend to do” reappears. Listen for it specifically.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full document", sub: "Everything in the module, on one real task.",
    color: C.green, instruction: "Use a real situation from your own work if you can.", size: 17,
    items: [
      { q: "1. Rewrite the slide 44 paragraph as a proper report.", opts: "Summary, findings, recommendation." },
      { q: "2. Write a one-page report on something real.", opts: "Six steps, in order. Summary written last." },
      { q: "3. Write the covering email that sends it.", opts: "Subject with the action. Say what you attached." },
      { q: "4. Summarise your own report in exactly 40 words.", opts: "Count them." },
      { q: "5. Read it aloud and mark every sentence you cannot finish in one breath.", opts: "Then split them." },
    ],
    notes: tn({
      time: "25 minutes.",
      how: "Question 4 is the hardest and the most valuable. A forty-word limit forces the choice that makes a summary work.",
      answers: "1 the slide 41 report · 2 assessed with the slide 49 rubric · 3 subject line with the action, and the attachment named · 4 exactly 40 words containing a finding and a recommendation.",
      tip: "Question 3 connects back to Module 5. The best report still fails if the email sending it has a useless subject line.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why write the summary last but place it first?", opts: "What do you know at each point?" },
      { q: "2. Why do long words make writing worse, not better?", opts: "Think about the reader's time." },
      { q: "3. Why keep findings and recommendations apart?", opts: "What can the reader do if they are mixed?" },
      { q: "4. When would a LONG document be the right choice?", opts: "Give a real example." },
    ],
    notes: tn({
      time: "13 minutes. Discussion, not writing.",
      how: "Question 4 keeps the module honest. Short is usually right and not always — and saying so builds trust.",
      answers: "1 You cannot summarise findings you have not written; but the reader needs the conclusion first because they may read nothing else. 2 They slow the reader down and hide the meaning; the reader's time is what you are spending. 3 Because a reader must be able to check your facts independently of your judgement — mixed together, the whole thing reads as opinion. 4 A contract, a technical specification, a legal document, a training manual — anywhere the detail IS the document and completeness matters more than speed.",
      tip: "Question 4's answer matters. Plain and short is a default, not a universal law, and learners should know where it stops applying.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Structure", items: [
      { q: "1. Name the three parts of a short report.", opts: "Three answers." },
      { q: "2. Where does the summary go?", opts: "One answer." },
      { q: "3. When do you write it?", opts: "One answer." },
      { q: "4. What is the test of a good summary?", opts: "One sentence." },
    ] },
    { part: "Part 2 · Plain English", items: [
      { q: "5. Plain English version of “utilise”.", opts: "One word." },
      { q: "6. Plain English version of “prior to”.", opts: "One word." },
      { q: "7. Rewrite: “There was a reduction in costs.”", opts: "Write the sentence." },
      { q: "8. Name the four signals of a hidden verb.", opts: "Four answers." },
    ] },
    { part: "Part 3 · Recommending", items: [
      { q: "9. Correct: “I recommend to replace the van.”", opts: "Write the sentence." },
      { q: "10. Correct: “I suggest you to come early.”", opts: "Write the sentence." },
      { q: "11. Which verb DOES take an object plus “to”?", opts: "One word." },
      { q: "12. Name two correct patterns after “recommend”.", opts: "Two answers." },
    ] },
    { part: "Part 4 · Findings and reading", items: [
      { q: "13. What is the difference between a finding and a recommendation?", opts: "One sentence." },
      { q: "14. Why keep them separate?", opts: "One sentence." },
      { q: "15. Name the five steps for reading a long document fast.", opts: "Five answers." },
      { q: "16. Which part of a report do most people read?", opts: "One answer." },
    ] },
    { part: "Part 5 · Doing it", items: [
      { q: "17. Name the six steps for writing any work document.", opts: "Six answers." },
      { q: "18. Name three of the six proofreading checks.", opts: "Three answers." },
      { q: "19. What is the one-breath test?", opts: "One sentence." },
      { q: "20. WRITING: a one-page report with summary, findings and recommendation.", opts: "Marked with the slide 49 rubric." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 8 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is worth double." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nThis is the final quiz of Level 3. Question 20 is the end-of-level written task — allow thirty minutes and mark it with the rubric from slide 49.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the three parts", a: "Summary · findings · recommendation.", why: "The summary is written last and placed first. The other two follow in that order." },
      { q: "Q2 — where does the summary go?", a: "At the top, straight after the title.", why: "Most readers read only the summary, so anything not in it may never be read." },
      { q: "Q3 — when do you write it?", a: "Last.", why: "You cannot summarise findings you have not yet written. Writing it first produces a vague summary." },
      { q: "Q4 — the test", a: "If the reader read ONLY the summary, would they know what to do?", why: "Four or five lines, readable in twenty seconds, containing the finding and the recommendation." } ],
    [ { q: "Q5 — “utilise”", a: "use", why: "Shorter, clearer, and it is what large organisations train native speakers to write." },
      { q: "Q6 — “prior to”", a: "before", why: "Two syllables saved, and no meaning lost anywhere." },
      { q: "Q7 — “There was a reduction in costs.”", a: "“Costs fell.”", why: "The verb was hiding inside “reduction”. Six words became two." },
      { q: "Q8 — the four signals", a: "“carried out” · “made” · “there was” · words ending in -tion.", why: "Each usually hides a verb that would do the job in fewer words and name the doer." } ],
    [ { q: "Q9 — “I recommend to replace…”", a: "“I recommend replacing the van.”", why: "Recommend takes -ing or a that-clause. It never takes “to” plus a verb." },
      { q: "Q10 — “I suggest you to come early.”", a: "“I suggest that you come early.”", why: "Two errors: no “to”, and “suggest you” needs a that-clause." },
      { q: "Q11 — which verb takes “to”?", a: "advise — “I advise you to go.”", why: "The exception. Recommend, suggest and propose do not follow this pattern." },
      { q: "Q12 — two patterns after “recommend”", a: "recommend + -ing, and recommend that + clause.", why: "Both correct. The that-clause is slightly more formal and common in reports." } ],
    [ { q: "Q13 — finding or recommendation?", a: "A finding is a fact you discovered. A recommendation is what you think should happen.", why: "Findings use past simple and figures; recommendations use recommend, suggest and should." },
      { q: "Q14 — why separate?", a: "So the reader can check your facts independently of your judgement.", why: "Mixed together, the whole report reads as opinion and loses credibility." },
      { q: "Q15 — the five reading steps", a: "Title and summary · first lines · scan for your name · read those parts · read the recommendations.", why: "Five minutes. Work documents are written to be read this way." },
      { q: "Q16 — which part is read?", a: "The summary.", why: "Which is why it is written last, placed first, and carries the recommendation." } ],
    [ { q: "Q17 — the six steps", a: "Choose the type · findings · recommendation · summary on top · cut long words · leave it, then proofread.", why: "Following them in order typically halves the time a work document takes." },
      { q: "Q18 — three proofreading checks", a: "Any three of: purpose in line 1 · one request with a date · long words · one-breath sentences.", why: "The last one catches tone problems no rule-based check will find." },
      { q: "Q19 — the one-breath test", a: "If you cannot say a sentence in one breath, split it.", why: "A physical test that catches almost every over-long sentence in a document." },
      { q: "Q20 — the report", a: "Marked on structure, summary, findings, recommendation and plain English", why: "Six marks for structure and six for the summary — half the total is where the summary goes and what is in it." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q2, Q9 and Q13 are the diagnostic block: summary placement, the recommend pattern, and the fact-versus-judgement split. Errors here need slides 7, 18 and 19 again."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Use it at work.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Read one long English document in five minutes", d: "Use the five steps. Then write three lines about it." },
      { t: "Summarise something you read in exactly 40 words", d: "Finding · two facts · what should happen." },
      { t: "Rewrite one of your own emails in plain English", d: "Cut every long word. Count the words saved." },
      { t: "Write three recommendations with correct patterns", d: "recommend + -ing · suggest + -ing · propose that." },
      { t: "Read one of your own documents aloud", d: "Mark every sentence you cannot finish in one breath." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Wednesday's task uses their own real writing, which makes the improvement personal and immediate.",
      tip: "Friday's task is the single most effective proofreading technique in this module and takes two minutes.",
      activity: "Ask learners to bring Wednesday's before-and-after versions and read two aloud.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Your final work for Level 3.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "A one-page report on something real", d: "Summary at the top, findings with three numbers, a specific recommendation." },
      { t: "The covering email that sends it", d: "Subject with the action. Say what you attached." },
      { t: "Record your two-minute speaking challenge", d: "Summary · plain English · recommendations · 60 seconds on your work." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "This is the last assessed work of Level 3. Mark it carefully with the slide 49 rubric and allow one rewrite.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Keep the recording. Playing it beside the Module 1 recording is how Level 3 should end.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaFileAlt", title: "The report — 25 marks", desc: "Structure (6) · summary at the top with a recommendation (6) · findings with three numbers (5) · specific recommendation, correct pattern (4) · plain English (4)." },
      { icon: "FaEnvelope", title: "Covering email — 5 marks", desc: "Subject line with the action (2) · purpose in line 1 (2) · attachment named (1)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "30-second summary (3) · plain English rewrites (2) · three correct patterns (3) · 60 seconds fluent speech (2)." },
      { icon: "FaStar", title: "Total — 40 marks", desc: "32+ excellent · 24–31 good · 16–23 keep practising · below 16 → rewrite the report with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Half the report's marks are structure and summary. Say that before they start — it puts the effort where it belongs.",
      tip: "Give the mark privately with two corrections and their reasons, following the Module 3 technique.",
      mistakes: "Do not deduct heavily for grammar. Module 3 assessed accuracy; this module assesses structure and clarity.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaFileAlt", title: "Four document types", desc: "Email · report · minutes · proposal. Each has a fixed shape." },
      { icon: "FaEye", title: "Reading fast", desc: "Five steps, five minutes. Summary, first lines, your name." },
      { icon: "FaCompressAlt", title: "The summary", desc: "Written last, placed first. Assume they read nothing else." },
      { icon: "FaFeather", title: "Plain English", desc: "Short words, active verbs, one idea per sentence." },
      { icon: "FaBalanceScale", title: "Findings vs recommendations", desc: "Facts in one place, judgement in another." },
      { icon: "FaCheckDouble", title: "Six proofreading passes", desc: "And leave it ten minutes before you reread." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to warm-up task 3 on slide 3 and ask again how long a work email takes. Most learners report a real drop within one week of using slide 20's method.",
      tip: "This is the last teaching summary of Level 3. Take a moment to name what the class has completed — three levels, twenty-two modules, CEFR pre-A1 to B1.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The work writing toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaFileAlt", title: "The short report", desc: "TITLE + date\n1  SUMMARY  —  4–5 lines, written LAST\n2  FINDINGS  —  facts, with numbers\n3  RECOMMENDATION  —  specific, dated\nAssume they read only the summary." },
      { icon: "FaFeather", title: "Plain English", desc: "utilise → use\nprior to → before\nin the event that → if\nit is anticipated → we expect\ncarried out an investigation → investigated" },
      { icon: "FaThumbsUp", title: "Recommending", desc: "recommend + -ing\nrecommend that + clause\nsuggest + -ing\npropose that + clause\nNEVER “recommend to do”." },
      { icon: "FaCheckDouble", title: "Before you send", desc: "1  Purpose or summary at the TOP?\n2  One request, with a date?\n3  Facts separate from opinion?\n4  Any long word to cut?\n5  Sentence over one breath?  6  Reread." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The fourth box is the one to run before sending anything that matters.",
      tip: "Together with the Module 5 and Module 7 cards, this makes a three-page work-English toolkit covering documents, meetings and interviews.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "You have finished Level 3",
    text: "Eight modules. You can now work in English — meetings, presentations, interviews and documents.",
    sub: "You started Level 3 stopping mid-sentence. You can now speak for a minute without pausing, present to a room,\nhandle an interview and write a report people will keep. That is CEFR B1, and it is a working level.",
    chips: ["NEXT — Level 4", "Advanced Spoken English & Fluency", "Debate, discussion and public speaking"],
    notes: tn({
      time: "8 minutes. Do not rush this slide.",
      how: "Play each learner's Module 1 recording next to their Module 8 recording. Eight modules of progress in four minutes is the most powerful thing you can do in this room.",
      mistakes: "Do not let anyone leave thinking they are “still not fluent”. B1 is a real, recognised, employable level — say so plainly and specifically.",
      extra: "Name what they can now do that they could not in Module 1: speak for sixty seconds without stopping, present to a room, answer twelve interview questions, and write a one-page report.",
      tip: "Preview Level 4 honestly: it is not more grammar. It is argument, debate, discussion and public speaking — using everything already built.",
      activity: "Certificate moment: read every learner's name and say one specific thing each has improved at. It takes fifteen minutes and learners remember it for years.",
    }),
  });
};
