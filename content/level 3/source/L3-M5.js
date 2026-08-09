"use strict";
/* LEVEL 3 · MODULE 5 — Workplace English   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 3", levelNo: LV.no, levelName: "Intermediate\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Workplace English",
    sub: "Meetings, emails, updates and disagreement. The English that decides whether people think you are competent — which is not the same as whether they understand you.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "REAL", v: "WORK ENGLISH" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open with the distinction that runs through the module: being understood and being taken seriously are different achievements. Modules 1 to 4 delivered the first. This one is about the second.",
      tip: "Most learners have never been taught workplace register, so they translate directly and sound blunt. That costs them, and nobody ever explains why.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things you will use in your first week at work.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Speak in a meeting — give an opinion, agree, disagree", d: "Four moves. They cover almost every meeting." },
      { t: "Write a professional email that gets a reply", d: "Subject line, first sentence, clear request, close." },
      { t: "Give a clear update on your work", d: "Status, problem, next step. Three parts, thirty seconds." },
      { t: "Disagree without damaging the relationship", d: "The most valuable skill in this module." },
      { t: "Ask for things — and say no — politely", d: "The politeness ladder, and when to climb it." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 4 is the one learners most need and least expect. Disagreement in English is heavily softened, and direct translation reads as confrontation.",
      tip: "Objective 3 is the daily one. Most workplace English is short status updates, and a clear thirty-second update builds a reputation quickly.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: how does this sound?", sub: "All three are grammatically perfect. How do they land?",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaEnvelope", title: "1 · An email", desc: "“Send me the report.”\n\nGrammatically correct. Would you send it to your manager?" },
      { icon: "FaComments", title: "2 · In a meeting", desc: "“No. That is wrong.”\n\nCorrect English. What would people think?" },
      { icon: "FaUserTie", title: "3 · A request", desc: "“I want next Friday off.”\n\nClear. Is it appropriate? What is missing?" },
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Every sentence here is grammatically flawless and professionally damaging. That gap is the module's subject and the warm-up should make it uncomfortable.",
      mistakes: "Correct nothing. Ask how each one would be received, not whether it is correct.",
      tip: "Learners often defend these as “clear and direct”. Acknowledge that they are — and then explain that in English clarity without softening reads as rudeness, whatever the speaker intended.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "At work, HOW you say it is judged as much as WHAT you say.",
    sub: "Nobody will ever tell you that your email sounded rude. They will simply reply more slowly,\nor not at all — and you will never learn why.",
    chips: ["Correct ≠ appropriate", "Softening is respect", "Nobody will tell you"],
    notes: tn({
      time: "7 minutes.",
      how: "The second line is the honest and slightly uncomfortable point. Register errors have consequences and no feedback, exactly like the intonation problem in Module 2.",
      mistakes: "Learners think politeness is dishonesty or weakness. In English professional culture it signals respect for the other person's autonomy — it does not change the facts.",
      extra: "This is a cultural difference, not a language rule. Directness that is normal and respectful in Amharic or Oromo can read as aggressive in English.",
      tip: "Say clearly that you are not asking them to be less honest. Every softened version in this module says exactly the same thing as the blunt one.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — the ladder
  L.table({
    sec: SEC.con, title: "The politeness ladder",
    sub: "Five ways to ask for the same thing. Climb as high as the situation needs.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 17, headSize: 16, colW: [4.9, 3.4, 4.033],
      rows: [
        ["What you say", "How formal", "Use it with"],
        ["“Send me the report.”", "an order", "almost never at work"],
        ["“Can you send me the report?”", "neutral", "a close colleague"],
        ["“Could you send me the report?”", "polite", "most situations"],
        ["“Could you possibly send me the report?”", "very polite", "a favour, or a manager"],
        ["“I was wondering if you could send it.”", "highest", "a big favour, or someone senior"],
      ],
    },
    note: "The longer the sentence, the more polite it sounds. That is the whole rule — and it is genuinely that mechanical.",
    notes: tn({
      time: "15 minutes.",
      how: "The length rule is real and usable: more words means more politeness. Learners can apply it immediately without any cultural knowledge.",
      mistakes: "Using row 1 in an email. It reads as an order from someone with no authority to give one, which is the worst possible combination.",
      extra: "Row 3 is the safe default. If unsure, use “could you” — it is appropriate almost everywhere.",
      tip: "Note that “I was wondering if…” is the same chunk from Module 1 slide 7. Its length is precisely why it is polite.",
      activity: "Climb the ladder: give five requests and have learners produce all five levels of each.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — meetings
  L.grid({
    sec: SEC.con, title: "Meetings — four moves cover almost everything", sub: "Learn one phrase for each and you can join any meeting.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaComment", title: "1 · Give an opinion", desc: "“I think we should…”\n“In my view…”  ·  “It seems to me…”\nAlways signal that it IS an opinion." },
      { icon: "FaThumbsUp", title: "2 · Agree", desc: "“I agree.”  ·  “That's a good point.”\n“Exactly — and I'd add that…”\nAdding beats simply agreeing." },
      { icon: "FaBalanceScale", title: "3 · Disagree", desc: "“I see what you mean, but…”\n“I'm not sure I agree.”\nNever start with “no”." },
      { icon: "FaQuestion", title: "4 · Ask for clarification", desc: "“Sorry, could you explain that?”\n“What do you mean by…?”\nAsking is not weakness." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Move 3 is the one to drill hardest. The pattern is always the same: acknowledge first, then disagree. Never lead with the disagreement.",
      mistakes: "Starting a disagreement with “no” or “that's wrong”. It closes the conversation and makes the other person defend rather than think.",
      extra: "Move 4 matters more than it looks. Asking a clarifying question in a meeting signals engagement, and silence signals absence.",
      tip: "The last line of move 4 — “So you're saying that…?” — is the repeat-back technique from Level 2 Module 7, now doing professional work.",
      activity: "Four moves: run a five-minute meeting on a real topic where every learner must use all four moves once.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — email
  L.panelSide({
    sec: SEC.con, title: "The email that gets a reply", sub: "Four parts. Never more complicated than this.",
    panelW: 6.9,
    panel: { label: "The structure", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.34,
      text: "SUBJECT:  Report — need figures by Friday\n\nDear Mr Bekele,\n\n1.  WHY you are writing — first line.\n     “I'm writing about the March report.”\n\n2.  THE DETAIL — two or three lines.\n\n3.  WHAT YOU WANT — be specific.\n     “Could you send the figures by Friday?”\n\n4.  CLOSE.  “Thank you.  Best regards, Sara”" },
    side: { label: "The three rules", color: C.green, size: 16, items: [
      "The SUBJECT LINE decides whether it is opened. Say the topic AND the action.",
      "The purpose goes in the FIRST line, never the last.",
      "One email, one request. Three requests get one answer.",
      "If you need it by a date, say the date.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The subject line is the most neglected part and the most important. “Report” is useless; “Report — need figures by Friday” tells the reader the topic, the action and the deadline.",
      mistakes: "Burying the request in the last line after three paragraphs of context. Busy readers stop after two lines.",
      extra: "The one-email-one-request rule is practical: multiple questions in one message reliably get a partial answer.",
      tip: "This is the three-part message from Level 2 Module 8, now with a subject line and a specific request. Same shape, professional register.",
      activity: "Fix the subject: give six bad subject lines and have learners rewrite each to include the action.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — updates
  L.compare({
    sec: SEC.con, title: "Giving an update — three parts, thirty seconds",
    sub: "The most frequent speaking task in any job.",
    left: { h: "Weak update", items: ["“It's going OK.”", "“Still working on it.”", "“There were some problems.”", "“I'll try to finish soon.”", "→ No information.", "→ The manager must now ask four questions."] },
    right: { h: "Strong update — 3 parts", items: ["1. STATUS", "“The report is about 80% done.”", "2. PROBLEM (if any)", "“I'm still waiting for the March figures.”", "3. NEXT STEP + WHEN", "“I'll send it on Friday morning.”"] },
    note: "Status · problem · next step. Thirty seconds. If there is no problem, say so explicitly — silence sounds like there is one.",
    notes: tn({
      time: "15 minutes.",
      how: "The three-part structure is the whole slide. Have learners give the same update in both styles and ask which one they would rather receive.",
      mistakes: "Hiding a problem. Managers discover problems eventually, and the discovery is far worse than the disclosure. Say it early with a next step attached.",
      extra: "A percentage or a number in part 1 does most of the work. “80% done” is information; “going OK” is not.",
      tip: "Always attach a date to part 3. An update without a date leaves the manager to ask, which is the thing a good update prevents.",
      activity: "Thirty-second update: every learner gives a real update on real work in exactly three parts.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — disagreeing
  L.panelSide({
    sec: SEC.con, title: "Disagreeing without damage", sub: "Three steps. Always in this order.",
    panelW: 6.9,
    panel: { label: "The three-step disagreement", color: C.green, tint: C.readTint, size: 17, lsm: 1.4,
      text: "1.  ACKNOWLEDGE\n     “I see what you mean…”\n     “That's a fair point…”\n\n2.  DISAGREE — softly\n     “…but I'm not sure it would work…”\n\n3.  GIVE A REASON or an ALTERNATIVE\n     “…because we'd need two more weeks.\n       Could we do it in March instead?”" },
    side: { label: "Why the order matters", color: C.green, size: 16, items: [
      "Step 1 shows you listened. Without it, step 2 sounds like an attack.",
      "Step 2 uses “I'm not sure”, not “you're wrong”. It is about your view, not their error.",
      "Step 3 is what makes you useful. Disagreement without an alternative is just obstruction.",
      "Never start with “no”. It ends the discussion before it starts.",
    ] },
    notes: tn({
      time: "16 minutes. The most valuable slide in the module.",
      how: "Demonstrate both versions yourself: the blunt one and the three-step one, saying exactly the same thing. The difference in how they land is obvious and slightly shocking.",
      mistakes: "Skipping step 1 because it feels dishonest. It is not agreement — it is acknowledgement, which is a different thing.",
      extra: "Step 3 is what separates a difficult colleague from a valuable one. Always bring an alternative, even a weak one.",
      tip: "This structure works in every professional culture, but in English it is close to mandatory. Say that plainly.",
      activity: "Disagree with me: state five opinions and require every learner to disagree using all three steps.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — saying no
  L.table({
    sec: SEC.con, title: "Saying no — without saying no",
    sub: "Four situations. The refusal is always cushioned.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [3.4, 4.6, 4.333],
      rows: [
        ["Situation", "Say this", "Why it works"],
        ["You cannot do it", "“I'm afraid I can't manage that by Friday.”", "“I'm afraid” signals bad news politely"],
        ["You are already busy", "“I'd like to, but I'm working on the audit.”", "gives a reason, not just a refusal"],
        ["You need more time", "“Could I get back to you tomorrow?”", "delays without refusing"],
        ["You disagree with the task", "“Can I check something before I start?”", "opens a discussion instead of a conflict"],
      ],
    },
    note: "Every one of these says no. None of them uses the word. And every one gives the other person somewhere to go.",
    notes: tn({
      time: "14 minutes.",
      how: "Row 3 is the most useful and the least known. “Could I get back to you tomorrow?” buys real time and is almost never refused.",
      mistakes: "A flat “no” with no reason and no alternative. It is honest, and in a workplace it reads as uncooperative.",
      extra: "“I'm afraid” has nothing to do with fear — from Module 1. It is the standard professional marker for unwelcome news.",
      tip: "Row 4 reframes a refusal as a question, which is the most sophisticated move here and often changes the task rather than refusing it.",
      activity: "Say no four ways: give five requests and have learners refuse each using a different row.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "deadline", ipa: "/ˈdedlaɪn/", pos: "noun", icon: "FaHourglassEnd",
      meaning: "The time or date by which something must be finished.",
      example: "The deadline is Friday. We met the deadline. I missed the deadline.",
      mistake: "You MEET or MISS a deadline. Not “reach” or “catch”. Stress on the FIRST syllable: DEAD-line.",
      notes: tn({ time: "7 minutes.",
        how: "Teach the two verbs as fixed pairs. Collocations must be learned with the noun, or the noun is unusable.",
        mistakes: "“I reached the deadline” and “I caught the deadline” are both direct translations and both sound wrong.",
        extra: "meet · miss · extend · set a deadline. Also “a tight deadline” meaning very little time.",
        tip: "“I'm afraid we'll miss the deadline” is a sentence every professional needs. It combines this word with the Module 1 softener.",
        activity: "Deadline sentences: every learner says one true sentence about a real deadline, using meet or miss." }) },

    { word: "schedule", ipa: "/ˈʃedjuːl/", pos: "noun and verb", icon: "FaCalendarCheck",
      meaning: "A plan of when things will happen.",
      example: "We are behind schedule. The meeting is scheduled for ten.",
      mistake: "Two pronunciations: /ˈʃedjuːl/ in British English, /ˈskedʒuːl/ in American. Both are correct — choose one and be consistent.",
      notes: tn({ time: "7 minutes.",
        how: "Mention both pronunciations without ruling on them. Learners hear both in Ethiopia and need to recognise each.",
        mistakes: "The key phrases are “ahead of schedule”, “behind schedule” and “on schedule”. All three take no article.",
        extra: "“Behind schedule” is the polite way to say late about a project rather than a person.",
        tip: "This word does the work of an update: “We're slightly behind schedule” is softer and more precise than “we are late”.",
        activity: "Ahead or behind: give five project situations and have learners describe each with the right phrase." }) },

    { word: "update", ipa: "/ˈʌpdeɪt/  ·  /ʌpˈdeɪt/", pos: "noun and verb", icon: "FaSync",
      meaning: "New information about the current state of something.",
      example: "Can you give me an update? I'll update you on Friday.",
      mistake: "A stress pair from Module 2: UP-date is the noun, up-DATE is the verb. Same spelling, different beat.",
      notes: tn({ time: "8 minutes.",
        how: "This is the noun/verb stress rule from Module 2 slide 17 appearing in a real workplace word. Point the connection out explicitly.",
        mistakes: "Using noun stress for the verb. It is understood but marks the speaker as reading rather than speaking.",
        extra: "give an update · ask for an update · keep somebody updated · a quick update.",
        tip: "“Just a quick update —” is the natural opener for the three-part update from slide 8. Teach them together.",
        activity: "Noun or verb: give ten sentences and have learners say the word with the correct stress in each." }) },

    { word: "issue", ipa: "/ˈɪʃuː/", pos: "noun", icon: "FaExclamationCircle",
      meaning: "A problem — but a softer, more professional word for one.",
      example: "There's an issue with the figures. We've had a few issues this week.",
      mistake: "“Issue” is softer than “problem”. Use it at work. And note it is countable: an issue, two issues.",
      notes: tn({ time: "7 minutes.",
        how: "This is register vocabulary: the same fact, a less alarming word. Professional English is full of these substitutions and learners are rarely taught them.",
        mistakes: "Saying “we have a big problem” when “there's an issue with…” conveys the same information without causing alarm.",
        extra: "Other softer work words: delay rather than late · concern rather than complaint · challenge rather than difficulty.",
        tip: "The /ʃ/ sound at the start — like “shoe”. Not “iss-ue”.",
        activity: "Soften the word: give eight blunt work statements and have learners find the professional equivalent." }) },

    { word: "follow up", ipa: "/ˈfɒləʊ ʌp/", pos: "phrasal verb", icon: "FaReply",
      meaning: "To check on something again after the first contact.",
      example: "I'll follow up with him on Monday. Just following up on my last email.",
      mistake: "Two words as a verb: “I'll follow up”. One word as a noun or adjective: “a follow-up email”.",
      notes: tn({ time: "8 minutes.",
        how: "“Just following up on my email of Tuesday” is the standard polite way to chase something without accusing anyone of ignoring you.",
        mistakes: "Learners either never chase, and things are forgotten, or chase bluntly — “Why didn't you answer?” This phrase solves both.",
        extra: "follow up ON something · follow up WITH somebody. The two prepositions do different jobs.",
        tip: "This is one of the most useful phrases in professional English and almost nobody teaches it. Give it the full eight minutes.",
        activity: "Chase it politely: learners write a two-line follow-up email for three unanswered messages." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Work Language 1 of 5" }),
    title: "Modals — the politeness machinery",
    sub: "Four small words that change the force of everything.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17, headSize: 16, colW: [2.4, 4.2, 5.133],
      rows: [
        ["Modal", "What it does", "Example"],
        ["can", "neutral ability or permission", "Can you send it?"],
        ["could", "the same, but politer", "Could you send it?"],
        ["would", "hypothetical — softest of all", "Would you mind sending it?"],
        ["might", "makes an opinion tentative", "It might be better to wait."],
      ],
    },
    note: "The past-tense forms — could, would, might — are the polite ones. They make the request feel less direct, and less direct means more polite.",
    notes: tn({
      time: "14 minutes.",
      how: "The insight is that English uses past forms for distance, not for time. “Could you” is not about the past — it is about softening.",
      mistakes: "Learners use “can” everywhere because it was taught first. “Could” is the safe professional default.",
      extra: "“Might” is the most useful for opinions: “It might be worth checking” disagrees with almost no force at all.",
      tip: "This connects to Module 1's softening slide. Modals are the grammar behind that vocabulary.",
      activity: "Modal ladder: give ten blunt sentences and have learners soften each with could, would or might.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Work Language 2 of 5" }),
    title: "Email openings and closings",
    sub: "Fixed conventions. Learn them once and never think about them again.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [3.4, 4.2, 4.733],
      rows: [
        ["Situation", "Opening", "Closing"],
        ["You know their name", "Dear Mr / Ms Bekele,", "Yours sincerely,"],
        ["You do not know the name", "Dear Sir or Madam,", "Yours faithfully,"],
        ["A colleague you know", "Dear Sara,  ·  Hi Sara,", "Best regards,  ·  Best wishes,"],
        ["A quick internal message", "Hi Sara,", "Thanks,  ·  Best,"],
      ],
    },
    note: "“Yours sincerely” goes with a NAME. “Yours faithfully” goes with “Sir or Madam”. In everyday email, “Best regards” is safe everywhere.",
    notes: tn({
      time: "13 minutes.",
      how: "These are conventions, not rules with reasons. Teach them as fixed pairs to be memorised, which is faster than explaining them.",
      mistakes: "“Dear Sir” with “Yours sincerely” is the classic mismatch. It is noticed in formal correspondence and job applications.",
      extra: "Never open a professional email with “Hello” alone or with no greeting at all. Both read as abrupt.",
      tip: "“Best regards” is the safe universal choice. If a learner remembers only one closing, that is the one.",
      activity: "Match them: give six situations and have learners choose the opening and closing pair for each.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Work Language 3 of 5" }),
    title: "Reporting what somebody said",
    sub: "The tense usually steps back one place.",
    left: { h: "What they said", items: ["“I am busy.”", "“I will send it.”", "“I sent it yesterday.”", "“Can you help?”", "“Send the report.”"] },
    right: { h: "How you report it", items: ["He said he WAS busy.", "He said he WOULD send it.", "He said he HAD sent it.", "He asked IF I could help.", "He asked me TO send the report."] },
    note: "Present → past.  will → would.  past → past perfect.  Questions use “if” or the question word, with no inversion.",
    notes: tn({
      time: "15 minutes.",
      how: "The step-back rule is mechanical and covers most cases. Draw it as an arrow moving one place into the past.",
      mistakes: "Keeping the question inversion: “He asked me what did I want” should be “He asked me what I wanted”. Reported questions are not questions.",
      extra: "“Say” takes no person: “he said that…”. “Tell” requires one: “he told ME that…”. That distinction causes constant errors.",
      tip: "This matters in meetings and in email: reporting what a colleague said accurately is a daily professional task.",
      activity: "Report it back: read ten statements and have learners report each one.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Work Language 4 of 5" }),
    title: "Hedging — the language of not committing", sub: "Professional English rarely states things absolutely.",
    panelW: 6.9,
    panel: { label: "Same fact, three levels of certainty", color: C.gram, tint: C.surf2, size: 17, lsm: 1.4,
      text: "CERTAIN\n     “It will be ready on Friday.”\n\nHEDGED\n     “It should be ready on Friday.”\n\nVERY HEDGED\n     “It should be ready by Friday,\n       although that depends on the figures.”" },
    side: { label: "Why professionals hedge", color: C.gram, size: 16, items: [
      "You are rarely 100% certain, and claiming to be is risky.",
      "A hedged promise you keep beats an absolute one you break.",
      "“Should” · “around” · “roughly” · “I expect” · “all being well”.",
      "But do not hedge everything — vagueness is its own problem.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "The second point in the side panel is the practical argument: hedging protects your reputation, because a missed absolute promise costs far more than a hedged one.",
      mistakes: "Over-hedging until nothing is committed. The last side-panel point is a real limit and should be said aloud.",
      extra: "“Should” is the workhorse: “It should be ready” means you expect it but are not guaranteeing it.",
      tip: "Balance this against slide 8. An update needs a specific date; hedging adjusts the confidence, not the specificity.",
      activity: "Hedge it: give ten absolute statements and have learners produce a hedged version of each.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Work Language 5 of 5" }),
    title: "Put it all together — five workplace habits", sub: "None of them is grammar. All of them are judged.",
    color: C.gram, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Use “could” rather than “can” by default", d: "One word, and it changes an order into a request." },
      { t: "Acknowledge before you disagree", d: "“I see what you mean, but…” Never start with “no”." },
      { t: "Put the purpose in the first line", d: "In an email and in a meeting. Never make people wait for it." },
      { t: "Give a date with every commitment", d: "“Friday morning”, not “soon”." },
      { t: "Follow up politely instead of waiting", d: "“Just following up on my email of Tuesday.”" },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Habit 4 is the one that builds a reputation fastest. A colleague who always attaches a date is trusted with more work.",
      mistakes: "Habit 5 is the one nobody does. Learners wait, the thing is forgotten, and they conclude they were ignored.",
      extra: "All five are learnable in a week and each is visible to everyone you work with.",
      tip: "Print these five. They are more valuable to a working adult than any grammar point in Level 3.",
      activity: "One a day: learners choose one habit to apply deliberately each day for a week.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — how polite is enough?", sub: "Match the level to the situation.", items: [
      { q: "Asking a close colleague for a file. Which level?", a: "“Can you send me the file?”", why: "Neutral is right. Excessive politeness with a close colleague sounds cold or sarcastic." },
      { q: "Asking your manager for Friday off. Which level?", a: "“I was wondering if I could take Friday off.”", why: "High politeness, because it is a favour from someone senior. The length is what does the work." },
      { q: "Emailing someone you have never met. Which level?", a: "“Could you possibly send me the figures?”", why: "Very polite is the safe default with a stranger. You cannot judge the relationship yet." },
    ] },
    { title: "Guided examples 2 — disagreeing", sub: "Three steps, in order.", items: [
      { q: "A colleague suggests a deadline you think is impossible. First words?", a: "“I see what you mean, but…”", why: "Acknowledge first. Without step 1, step 2 sounds like an attack rather than a contribution." },
      { q: "What must you add after disagreeing?", a: "A reason, and ideally an alternative.", why: "Disagreement without an alternative is obstruction. With one, it is problem-solving." },
      { q: "Why not just say “That won't work”?", a: "It closes the discussion and invites defensiveness.", why: "Same information, but the other person now has to defend themselves instead of thinking about the problem." },
    ] },
    { title: "Guided examples 3 — the update", sub: "Status, problem, next step.", items: [
      { q: "Your manager asks how the report is going. What are the three parts?", a: "Status · problem · next step with a date.", why: "Thirty seconds, and the manager needs to ask no follow-up questions. That is what a good update achieves." },
      { q: "There is no problem. Do you mention that?", a: "Yes — say so explicitly.", why: "Silence about problems sounds like there is one being hidden. “No problems so far” is reassuring and takes two seconds." },
      { q: "Why is “It's going OK” a weak update?", a: "It contains no information at all.", why: "The manager must now ask four questions to learn what one sentence could have told them." },
    ] },
    { title: "Guided examples 4 — email", sub: "Subject, purpose, request, close.", items: [
      { q: "Which subject line is better: “Report” or “Report — figures needed by Friday”?", a: "The second one.", why: "It gives the topic, the action and the deadline. The reader knows what is wanted before opening it." },
      { q: "Where does the request go?", a: "Clearly stated, and not buried at the end.", why: "Say why you are writing in the first line and make the request specific and easy to find." },
      { q: "You have three requests. One email or three?", a: "Three separate emails, or one clearly numbered list.", why: "Three requests in one paragraph reliably produce an answer to only one of them." },
    ] },
    { title: "Guided examples 5 — saying no", sub: "Refuse without using the word.", items: [
      { q: "Asked to finish by Friday, and you cannot. What do you say?", a: "“I'm afraid I can't manage Friday — could we say Monday?”", why: "Refusal, reason and alternative in one sentence. The alternative is what keeps it cooperative." },
      { q: "You need time to think before answering. What do you say?", a: "“Could I get back to you tomorrow?”", why: "Delays without refusing, and is almost never refused itself. The most useful phrase on slide 10." },
      { q: "Is “no” ever acceptable at work?", a: "Yes — but with a reason attached, never alone.", why: "A bare “no” is honest and reads as uncooperative. One clause of reason changes that completely." },
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
    title: "A team meeting",
    sub: "Four people, four moves. Watch what each one does.",
    turns: [
      { who: "MANAGER", text: "We need the report finished by Friday. Any comments?", side: "r" },
      { who: "BETHLEHEM", text: "I think we should aim for Monday. We're waiting on the figures.", side: "l" },
      { who: "TOLOSA", text: "That's a fair point — and I'd add that Friday is a holiday.", side: "r" },
      { who: "MIMI", text: "Sorry, could you explain which figures we're missing?", side: "l" },
      { who: "BETHLEHEM", text: "The March sales figures. I followed up yesterday.", side: "r" },
      { who: "MANAGER", text: "All right. Monday it is. Bethlehem, keep me updated.", side: "l" },
    ],
    note: "Opinion · agree and add · ask for clarification · give an update. Four moves, and the deadline actually changed.",
    notes: tn({
      time: "15 minutes.",
      how: "Have learners label each turn with the move from slide 6. Then point out that Bethlehem's opinion changed the outcome — because it came with a reason.",
      mistakes: "Bethlehem never says “no”. She proposes an alternative with a reason, which is the three-step disagreement compressed into one line.",
      extra: "Tolosa's “and I'd add that” is agreement doing real work. Simple agreement adds nothing; agreement plus a new fact does.",
      tip: "Mimi's clarifying question is not weakness — it produces the specific information the manager needed. Say so.",
      activity: "Run a meeting: give a real decision and require every learner to use one of the four moves.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Pushing back on a deadline",
    sub: "Yonas disagrees with his manager. Watch the three steps.",
    turns: [
      { who: "MANAGER", text: "Can you have the audit done by Wednesday?", side: "r" },
      { who: "YONAS", text: "I see why Wednesday matters — the board meets on Thursday.", side: "l" },
      { who: "MANAGER", text: "Exactly.", side: "r" },
      { who: "YONAS", text: "I'm not sure I can do it properly in two days, though.", side: "l" },
      { who: "MANAGER", text: "What can you do?", side: "r" },
      { who: "YONAS", text: "I could send the main findings on Wednesday and the full audit on Friday.", side: "l" },
    ],
    note: "Acknowledge · disagree softly · offer an alternative. The manager asks “what CAN you do?” — which is what a good alternative invites.",
    notes: tn({
      time: "15 minutes.",
      how: "Yonas's first line does something powerful: he states the manager's reason back, showing he understands the pressure. That is acknowledgement at its strongest.",
      mistakes: "Learners would say “No, it's impossible”. Same fact, no acknowledgement, no alternative, and a damaged relationship.",
      extra: "The split delivery in the last line is a genuinely professional move — partial delivery on time plus completion later.",
      tip: "Note “though” at the end of line 4. It softens the disagreement and is very natural in spoken English.",
      activity: "Push back: give five unreasonable requests and have learners respond with all three steps.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Meeting phrases you will use every week",
    sub: "Six phrases. Learn them as chunks, in the Module 1 sense.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaComment", title: "“Can I just say something?”", desc: "Enters a discussion politely. Learn it — silence is not modesty." },
      { icon: "FaBalanceScale", title: "“I see what you mean, but…”", desc: "The disagreement opener. Never start with “no”." },
      { icon: "FaThumbsUp", title: "“That's a fair point, and…”", desc: "Agreement that adds something." },
      { icon: "FaQuestion", title: "“What do you mean by…?”", desc: "Precise. Better than “I don't understand”." },
      { icon: "FaCheck", title: "“So we've agreed that…?”", desc: "Confirms a decision before the meeting ends." },
      { icon: "FaClock", title: "“Could I come back to that?”", desc: "Buys time without refusing to answer." },
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Phrase 1 is the most important for quiet learners. Many never speak in meetings because they do not know how to enter, and are then judged as disengaged.",
      mistakes: "Waiting for a gap that never comes. Meetings require you to enter, and phrase 1 is how you do it politely.",
      extra: "Phrase 5 is what stops meetings ending in ambiguity. The person who confirms decisions becomes valuable very quickly.",
      tip: "Drill all six as chunks at speed. In a real meeting there is no time to construct them.",
      activity: "Six phrases: run a ten-minute meeting where every learner must use at least three.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "MANAGER", text: "Can you finish the report by Thursday?", side: "r" },
      { who: "YOU", text: "I ______ why Thursday matters, but I'm ______ I can't manage it.", side: "l" },
      { who: "MANAGER", text: "Why not?", side: "r" },
      { who: "YOU", text: "There's an ______ with the March figures. I ______ up yesterday.", side: "l" },
      { who: "MANAGER", text: "So when can you do it?", side: "r" },
      { who: "YOU", text: "It ______ be ready by Monday. ______ I send the main findings on Thursday?", side: "l" },
    ],
    note: "Use these:  “see”  ·  “afraid”  ·  “issue”  ·  “followed”  ·  “should”  ·  “Could”",
    notes: tn({
      time: "13 minutes.",
      how: "This combines all three concepts: the three-step disagreement, the workplace vocabulary and the hedging from slide 19.",
      answers: "1 see · 2 afraid · 3 issue · 4 followed · 5 should · 6 Could",
      mistakes: "Gap 5 takes “should”, not “will”. It is a hedged commitment — from slide 19 — and “will” would over-promise.",
      tip: "The last line is the split-delivery move from slide 27. Praise any pair that recognises it.",
      activity: "Do it again with a different task and a different reason.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — the four situations", sub: "Four rounds. Three minutes each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Give a 30-second update on real work", d: "Status · problem · next step with a date." },
      { t: "Disagree with your partner's proposal", d: "All three steps. Partner checks each one." },
      { t: "Ask for three things at three politeness levels", d: "Same request, different levels." },
      { t: "Refuse a request without saying no", d: "Reason plus alternative." },
    ],
    notes: tn({
      time: "14 minutes for all four rounds.",
      how: "Round 1 is the daily skill and worth repeating every lesson. Time it strictly at thirty seconds.",
      mistakes: "In round 2 learners skip the acknowledgement. Have the partner explicitly confirm all three steps were present.",
      tip: "Round 3 makes the ladder concrete. Saying the same request five ways shows how mechanical politeness really is.",
      activity: "Update round: start every remaining Level 3 lesson with a thirty-second update from three learners.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the thirty-second update", sub: "The most useful thirty seconds in this course.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Status — where is it now?", d: "A number or a percentage. “About 80% done.”" },
      { t: "Problem — what is blocking you?", d: "Or say clearly that nothing is." },
      { t: "Next step — what will you do, and when?", d: "A specific day. Not “soon”." },
      { t: "Deliver all three in 30 seconds", d: "Partner times you and asks if anything is missing." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "The test in step 4 is whether the partner has any follow-up questions. A good update leaves none.",
      mistakes: "Vague status and no date. Both force the manager to ask, which is precisely what the update should prevent.",
      extra: "Have learners do it about real current work. Invented content produces vague updates.",
      tip: "This is the single most repeated speaking task in professional life. Practise it until it is automatic.",
      activity: "No questions: a round succeeds only if the listener has nothing left to ask.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the disagreement drill", sub: "In pairs. Three steps, every time.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“We should start at seven in the morning.”", d: "Disagree in three steps." },
      { t: "“Let's cancel the training this year.”", d: "Disagree in three steps." },
      { t: "“We don't need to test it first.”", d: "Disagree in three steps." },
      { t: "“The report should be forty pages.”", d: "Disagree in three steps." },
      { t: "Now your partner disagrees with YOU", d: "Notice how it feels when it is done well." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Task 5 is the important one. Being disagreed with skilfully feels completely different from being contradicted, and experiencing it teaches more than performing it.",
      mistakes: "Skipping the alternative in step 3. Without it the disagreement is just obstruction.",
      extra: "Insist on a genuine reason each time. “I don't like it” is not a reason.",
      tip: "Ask learners afterwards how task 5 felt. The answer is usually “fine” — which is the entire point.",
      activity: "Both directions: every learner both gives and receives at least two disagreements.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the tone of politeness",
    sub: "The same words can be polite or sarcastic. Intonation decides.",
    left: { h: "Say these with a WARM, rising tone", items: ["“Could you send me the report?”", "“Would you mind waiting?”", "“That's a fair point.”", "“Thanks very much.”"] },
    right: { h: "Now say them FLAT", items: ["→ sounds like an order", "→ sounds impatient", "→ sounds sarcastic", "→ sounds insincere"] },
    note: "Polite WORDS with flat intonation sound worse than blunt words said warmly. The tune carries more than the vocabulary.",
    notes: tn({
      time: "14 minutes.",
      how: "Demonstrate both columns yourself. The sarcastic version of “that's a fair point” is genuinely unpleasant to hear and learners never forget it.",
      mistakes: "This is the Module 2 flat-intonation problem in its highest-cost setting. Polite phrases delivered flat are worse than no politeness at all.",
      extra: "The rise on “could you” is what makes it a request. Falling makes it an instruction.",
      tip: "This is why Module 2 came before Module 5. Politeness needs both the words and the tune, and neither works alone.",
      activity: "Warm or flat: say a phrase either way and have learners judge how it landed.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — the meeting simulation", sub: "Ten minutes. Everyone speaks at least twice.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "The topic: should the office open on Saturdays?", d: "Or any real decision in your workplace." },
      { t: "Everyone must give an opinion with a reason", d: "“I think… because…”" },
      { t: "Everyone must agree with somebody and add something", d: "“That's a fair point, and…”" },
      { t: "Everyone must disagree once, in three steps", d: "Acknowledge · disagree · alternative." },
      { t: "One person confirms the decision at the end", d: "“So we've agreed that…?”" },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Assign step 5 to a different learner each time you run this. Confirming decisions is a valuable role and it needs practising.",
      mistakes: "One or two learners dominate. The requirement that everyone performs each move prevents that.",
      extra: "Use a real decision from the learners' workplaces if possible. Real stakes produce far better language.",
      tip: "Run this simulation again in Module 6 and Module 7. It is the closest thing in class to real professional English.",
      activity: "Observer role: one learner watches and reports which moves were used and which were missing.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Give a 30-second update on real work", d: "Status · problem · next step with a date." },
      { t: "Ask for something at three politeness levels", d: "Neutral · polite · very polite." },
      { t: "Disagree with a statement in three steps", d: "Acknowledge · disagree · alternative." },
      { t: "Refuse a request without saying no", d: "Reason plus alternative." },
      { t: "Use all five vocabulary words correctly", d: "deadline · schedule · update · issue · follow up." },
    ],
    notes: tn({
      time: "16 minutes including listening back.",
      how: "Listen for tone as well as words. A learner who produces the right phrases flatly has not yet got this — that is the slide 33 point.",
      mistakes: "Step 4 usually produces a hidden “no”. Check that a reason and an alternative are both present.",
      answers: "SUCCESS CRITERIA: a complete three-part update with a date · three distinct politeness levels · all three disagreement steps present · a refusal with reason and alternative · five words used correctly, with UP-date as a noun.",
      tip: "Step 5 includes the update stress pair. Listen for whether the noun and verb are distinguished.",
      activity: "Keep every recording for the Level 3 comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — a project meeting", sub: "Listen twice. What was decided, and who decides?",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads at natural speed", color: C.listen, tint: C.listenTint, size: 16, lsm: 1.28,
      text: "MANAGER:  Where are we with the training programme?\nCHALTU:  It's about 70% ready. We've booked the venue and\nwritten the materials. The issue is the trainer — she's\ncancelled.\nMANAGER:  When did you find out?\nCHALTU:  Yesterday. I've already contacted two others and I\nshould know by Thursday.\nMANAGER:  Could we postpone by a week if necessary?\nCHALTU:  I'd rather not — the rooms are booked. But I could\nrun the first session myself if we're stuck." },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. How ready is the programme?",
      "2. What is the issue?",
      "3. What has Chaltu already done?",
      "4. When will she know?",
      "5. How does she disagree about postponing?",
      "6. What alternative does she offer?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Chaltu's whole turn is the perfect update: percentage, what is done, the issue, and the action already taken with a date. Point out each part.",
      mistakes: "Her last turn is a disagreement with an alternative — “I'd rather not… but I could…”. That is the three-step structure compressed.",
      extra: "“I'd rather not” is softer than “no” and gives a reason immediately after. It is worth drilling as a chunk.",
      answers: "1 About 70%. · 2 The trainer has cancelled. · 3 Booked the venue, written materials, contacted two other trainers. · 4 By Thursday. · 5 “I'd rather not” plus a reason. · 6 She could run the first session herself.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Chaltu's update is a model. Here is why.",
    size: 16.5,
    items: [
      { q: "1 — how ready?", a: "About 70%.", why: "A number, not “going well”. It tells the manager everything they needed from part one." },
      { q: "2 and 3 — the issue and the action", a: "The trainer cancelled. She has already contacted two replacements.", why: "The problem arrives with the solution already in progress. That is what distinguishes a strong update." },
      { q: "4 — when will she know?", a: "By Thursday.", why: "A specific date. The manager does not need to ask, which is the whole purpose of a good update." },
      { q: "5 — how does she disagree?", a: "“I'd rather not — the rooms are booked.”", why: "Softer than “no”, with the reason immediately after. Never a bare refusal." },
      { q: "6 — the alternative", a: "She could run the first session herself.", why: "This is what makes her disagreement useful rather than obstructive. Always offer something." },
    ],
    notes: keyNotes("Play this script again at the end of the module as a model. Seven lines contain the update structure, a hedge, a soft disagreement and an alternative."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — two versions of one request", sub: "Same content. Listen to how each lands.",
    panelW: 7.2,
    panel: { label: "Audio script — read A, then B", color: C.listen, tint: C.listenTint, size: 16, lsm: 1.3,
      text: "VERSION A\n“I need the figures. Send them today. The report\nis late because of you.”\n\nVERSION B\n“I'm following up on the March figures. I know\nyou've been busy with the audit. Could you\npossibly send them today? I'm afraid the report\nis held up until they arrive.”\n\nSame request. Same deadline. Same problem." },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. What does each version ask for?",
      "2. Which one blames the listener?",
      "3. How does B mention the delay without blaming?",
      "4. Find three softeners in B.",
      "5. Which would you reply to first?",
      "6. Is B less honest than A?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Question 6 is the one to dwell on. B contains exactly the same facts, including the fact that the report is held up. Nothing is hidden — only the blame is removed.",
      mistakes: "Learners think B is evasive. Read both again and ask which fact is missing from B. None is.",
      extra: "B acknowledges the other person's workload, which is the acknowledgement step from slide 9 applied to a request.",
      answers: "1 Both ask for the March figures today. · 2 A — “because of you”. · 3 “The report is held up until they arrive” — a fact about the report, not the person. · 4 “I know you've been busy”, “Could you possibly”, “I'm afraid”. · 5 Almost everyone says B. · 6 No — same facts, no blame.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Same facts. Completely different outcome.",
    size: 16.5,
    items: [
      { q: "2 — which blames?", a: "Version A: “the report is late because of you”.", why: "Blame makes people defensive, and a defensive colleague works slower, not faster." },
      { q: "3 — how does B say it?", a: "“The report is held up until they arrive.”", why: "A statement about the report, not about the person. The consequence is clear and nobody is accused." },
      { q: "4 — three softeners", a: "“I know you've been busy” · “Could you possibly” · “I'm afraid”.", why: "Acknowledgement, a high politeness level, and a marker for unwelcome news." },
      { q: "5 — which gets a faster reply?", a: "B, almost always.", why: "A produces resentment or an argument. B produces the figures — which is the actual objective." },
      { q: "6 — is B less honest?", a: "No. Every fact in A is also in B.", why: "The urgency, the deadline and the consequence are all stated. Only the blame was removed." },
    ],
    notes: keyNotes("Item 6 settles the objection that politeness is dishonest. Read both versions again and challenge the class to find one fact present in A and missing from B."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "Listening in meetings — four survival tactics", sub: "Meetings are the hardest listening there is.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaUsers", title: "Track who is speaking", desc: "Several voices, no turn-taking signals, and people interrupt. Losing track of who said what loses the whole meeting." },
      { icon: "FaBullseye", title: "Listen for decisions, not everything", desc: "Most of a meeting is discussion. Catch the decisions, the deadlines and the names attached to actions." },
      { icon: "FaPen", title: "Write three things only", desc: "What was decided · what you must do · by when. Trying to write everything means hearing nothing." },
      { icon: "FaCheck", title: "Confirm at the end", desc: "“So I'm sending the figures by Thursday?” Ten seconds, and it removes every misunderstanding." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Tactic 4 is the safety net. If you understood only half the meeting, one confirming question recovers the part that concerns you.",
      mistakes: "Trying to follow every word. Meetings contain a great deal of discussion that changes nothing — the decisions are what matter.",
      tip: "This is the Level 2 Module 7 strategy — listen for strong words — applied to a much harder situation.",
      activity: "Three things: after the meeting simulation, every learner writes only decision, action and deadline.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.compare({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — two emails, one request",
    sub: "Same figures, same deadline. Which one gets answered?",
    left: { h: "A  —  Subject: “figures”", items: [
      "Send me the March figures today.",
      "The report is late.",
      "Sara",
      "",
      "→ No greeting, no close.",
      "→ Useless subject line.",
    ] },
    right: { h: "B  —  “March figures — by Thu 5pm”", items: [
      "Dear Mr Bekele,",
      "I'm following up on my email of Tuesday.",
      "I know the audit has kept you busy. Could you possibly send them by Thursday?",
      "The report is held up until they arrive.",
      "Best regards,  Sara Tesfaye",
    ] },
    note: "Your task:  Compare the subject lines · Where is the request in each? · Find three softeners in B · Is ANY fact in A missing from B?",
    notes: tn({
      time: "15 minutes.",
      how: "Start with the subject lines. “figures” tells the reader nothing; B's tells them the topic, the action and the deadline before they open it.",
      mistakes: "Learners defend A as efficient. Ask which one they would answer first if they had forty emails — the answer is always B.",
      extra: "B follows up on an earlier message without accusing anyone of ignoring it. That is the follow-up phrase from slide 15.",
      tip: "The last question is the honest test. Every fact in A appears in B; only the blame is gone.",
      activity: "Rewrite A: learners turn version A into a professional email in five minutes.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Structure, not just tone.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "What does email B's subject line tell you before you open it?",
      "In which line of B is the purpose stated?",
      "How does B refer to the earlier email without accusing anyone?",
      "How does B mention the delay without blaming Mr Bekele?",
      "Which closing does B use, and why is it appropriate?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Question 1 is the practical one. A subject line containing the action and the date gets opened first in a full inbox.",
      mistakes: "Question 5: “Best regards” is used because this is ordinary professional correspondence with a known name. “Yours sincerely” would also be correct but is more formal.",
      tip: "Question 3 is the follow-up technique. Learners either never chase or chase accusingly, and this is the middle path.",
      answers: "1 The topic, the action and the deadline. · 2 The first line. · 3 “I'm following up on my email of Tuesday.” · 4 “The report is held up until they arrive” — a fact about the report. · 5 “Best regards” — professional, and appropriate for a known contact.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Four things B does that A does not.",
    size: 16.5,
    items: [
      { q: "1 — the subject line", a: "“March figures — needed by Thu 5pm”: topic, action, deadline.", why: "In an inbox of forty messages, this one gets opened and answered first. “figures” gets ignored." },
      { q: "2 — where is the purpose?", a: "The first line. “I'm following up on my email of Tuesday.”", why: "Busy readers stop after two lines. A purpose stated late is a purpose not read." },
      { q: "3 — the follow-up", a: "“Following up on my email of Tuesday” — no accusation.", why: "It reminds without blaming. The alternative — “you didn't reply” — starts an argument instead of getting figures." },
      { q: "4 — the delay", a: "“The report is held up until they arrive.”", why: "States the consequence as a fact about the report. The urgency is fully communicated and nobody is accused." },
      { q: "5 — what B has that A lacks", a: "A useful subject line, a greeting, acknowledgement, a specific deadline, and a close.", why: "Same request, and a completely different probability of getting what was asked for." },
    ],
    notes: keyNotes("Ask which email the class would send to their own manager. Then ask which they actually send now. That gap is the module."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — meeting minutes", sub: "A real work text type. Short, factual, no opinions.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 15.5, lsm: 1.28,
      text: "TRAINING PROGRAMME — NOTES\n12 March · Chaltu, Yonas, Mimi\n\n1.  STATUS\n     70% complete. Venue booked.\n2.  ISSUES\n     Trainer cancelled. Two replacements\n     contacted; decision by Thursday.\n3.  DECISIONS\n     NOT postponed — rooms booked.\n     If no trainer, Chaltu runs session 1.\n4.  ACTIONS\n     Chaltu — confirm trainer, 19 Mar.\n     Yonas — materials to print, 16 Mar." },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "What are the four sections?",
      "Who must do what, and by when?",
      "What was decided about postponing?",
      "Find the contingency plan.",
      "Are there any opinions in this text?",
      "Why is that important?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Questions 5 and 6 are the point: minutes record decisions and actions, not opinions or discussion. That discipline is what makes them useful later.",
      mistakes: "Learners write minutes as a narrative of who said what. Nobody reads that. The four-section structure is what gets used.",
      extra: "The ACTIONS section is the most important. A name and a date against every action is what makes a meeting produce results.",
      tip: "This connects directly to the listening tactics on slide 40: decisions, actions, deadlines. The minutes are the written form of those three things.",
      activity: "Minute the meeting: after the simulation, learners write minutes in these four sections.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Why minutes look like this.",
    size: 16.5,
    items: [
      { q: "1 — the four sections", a: "Status · Issues · Decisions · Actions.", why: "Anyone can find what concerns them in ten seconds. That is what the structure is for." },
      { q: "2 — who does what?", a: "Chaltu: confirm the trainer by 19 March. Yonas: send materials to print by 16 March.", why: "A name and a date on every action. Without both, actions do not happen." },
      { q: "3 — postponing", a: "Decided against — the rooms are already booked.", why: "The decision AND the reason. Six months later, the reason is what people need." },
      { q: "5 and 6 — any opinions?", a: "None. Only facts, decisions and actions.", why: "Minutes are a record, not a discussion. Opinions in minutes cause arguments about what was really said." },
      { q: "Vocabulary check", a: "deadline · schedule · update · issue · follow up", why: "All five appear in ordinary meeting language, which is where you will meet them daily." },
    ],
    notes: keyNotes("Note that “issue” is used rather than “problem” even in the section heading. That single word choice sets the tone of the whole document."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — climb the politeness ladder", sub: "Same request, five levels.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each blunt sentence at a higher politeness level.",
    items: [
      "1.  Send me the report.",
      "2.  I want Friday off.",
      "3.  Answer my email.",
      "4.  Change the meeting to three.",
      "5.  Explain this again.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Take two or three versions of each. There is no single right answer — only more and less appropriate ones.",
      answers: "MODELS: 1 Could you send me the report? · 2 I was wondering if I could take Friday off. · 3 Just following up on my email of Tuesday. · 4 Would it be possible to move the meeting to three? · 5 Sorry, could you explain that again?",
      mistakes: "Item 3 is the interesting one: the polite version does not ask for a reply at all, it simply reminds. That is the follow-up technique.",
      tip: "Ask which version learners would send to their own manager. That question calibrates the level better than any rule.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write the email", sub: "Four parts. Subject line first.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write a complete professional email for this situation.",
    items: [
      "SITUATION:  You need the March figures from Mr Bekele by Thursday.",
      "1.  Write a subject line with the topic AND the action.",
      "2.  Greeting, then the purpose in the first line.",
      "3.  Two lines of detail. Acknowledge that he is busy.",
      "4.  A specific request with a specific deadline.",
      "5.  A close and your name.",
    ],
    notes: tn({
      time: "14 minutes.",
      how: "Mark the subject line first and hardest. It is the part that decides whether the email is read at all, and the part learners always neglect.",
      answers: "MODEL: see slide 41, email B. It is exactly this task done well.",
      mistakes: "Subject lines like “Question” or “Urgent”. Neither says what is wanted or when.",
      tip: "Collect these and read three subject lines aloud. The class can immediately tell which would get opened.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — meeting minutes", sub: "Four sections. Facts only.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write minutes for the meeting simulation from slide 34. Use the four sections.",
    items: [
      "1.  Heading: topic, date, who was present.",
      "2.  STATUS — where things stand. Facts only.",
      "3.  ISSUES — what is blocking progress.",
      "4.  DECISIONS — what was decided, and why.",
      "5.  ACTIONS — a name and a date for every action.",
      "6.  No opinions. Check that you have included none.",
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Step 6 is the discipline. Have learners exchange minutes and hunt for any opinion that crept in.",
      answers: "MODEL: see slide 44. Four sections, no opinions, a name and a date on every action.",
      mistakes: "Writing a narrative of the discussion. Minutes record outcomes, not conversation.",
      tip: "The person who writes the minutes controls the record of what was decided. That is real influence, and it is worth saying to working adults.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — what good minutes contain", sub: "Five tests. Apply them to your own.",
    size: 16.5,
    items: [
      { q: "1 — can a reader find their action in 10 seconds?", a: "Only if actions are in their own section with names.", why: "Minutes buried in prose are never read, and the actions in them never happen." },
      { q: "2 — does every action have a name AND a date?", a: "Both, every time. “Chaltu — confirm trainer by 19 March.”", why: "An action with no name belongs to nobody. An action with no date happens eventually, which means never." },
      { q: "3 — is the REASON for each decision recorded?", a: "Yes — “not postponed, rooms already booked”.", why: "In six months nobody remembers why. The reason is what stops the decision being reopened." },
      { q: "4 — are there any opinions?", a: "There should be none.", why: "Minutes are a record. Opinions in them cause arguments about what was really said." },
      { q: "5 — could somebody absent understand it?", a: "That is the real test.", why: "Minutes are written for the people who were not there, not for the people who were." },
    ],
    notes: keyNotes("Test 5 is the best single question. Have learners swap minutes with someone who was in a different simulation group and see whether it makes sense."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your workplace English checklist", sub: "Six checks. Before you send, and before you speak.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Does the subject line say the topic AND the action?", d: "“Report” is useless. “Report — figures by Friday” works." },
      { t: "Is the purpose in the first line?", d: "In emails and in meetings. Never make people wait." },
      { t: "Have I used “could” rather than “can”?", d: "One word. It turns an order into a request." },
      { t: "If I disagreed, did I acknowledge first?", d: "And did I offer an alternative?" },
      { t: "Is there a specific date on every commitment?", d: "“Friday morning”, not “soon”." },
      { t: "Would I be happy to receive this?", d: "The only test that catches everything else." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Check 6 is the catch-all. It finds tone problems that no rule-based check will.",
      tip: "Print this. It applies to every email and every meeting for the rest of a working life.",
      activity: "Six checks: apply this to every written task in Modules 6, 7 and 8.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. The safest default when asking for something at work:", opts: "a) Send me…     b) Can you…     c) Could you…" },
      { q: "2. A disagreement should start with:", opts: "a) “No,”     b) “I see what you mean, but…”     c) “That's wrong.”" },
      { q: "3. Which subject line is best?", opts: "a) Question     b) Urgent     c) March figures — needed by Thursday" },
      { q: "4. The three parts of an update are:", opts: "a) status, problem, next step     b) hello, detail, goodbye     c) who, what, why" },
      { q: "5. “I'm afraid” means:", opts: "a) I am frightened     b) I am sorry to tell you     c) I am not sure" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 c · 2 b · 3 c · 4 a · 5 b",
      tip: "Question 5 catches learners who have not met “I'm afraid” as a professional marker. It has nothing to do with fear.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the phrase", sub: "Workplace chunks.",
    color: C.green, instruction: "Write the missing word or phrase.", size: 18,
    items: [
      "1.  ______ you possibly send me the figures?",
      "2.  I'm ______ I can't manage Friday.",
      "3.  I'm just ______ up on my email of Tuesday.",
      "4.  I see what you ______ , but I'm not sure it would work.",
      "5.  There's an ______ with the March figures.",
      "6.  It ______ be ready by Monday.  (hedged, not certain)",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Take the answers orally at speed. These must be retrievable instantly to be usable in a real meeting.",
      answers: "1 Could · 2 afraid · 3 following · 4 mean · 5 issue · 6 should",
      mistakes: "Item 6 takes “should”, not “will”. It is a hedged commitment from slide 19.",
      tip: "Item 3 is the phrase nobody has and everybody needs. Drill it twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Moves, modals and email conventions.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the PHRASE to the MEETING MOVE", opts: "1. “In my view…”     2. “That's a fair point.”     3. “I'm not sure I agree.”     4. “What do you mean by…?”" },
      { q: "a) agree     b) disagree", opts: "c) give an opinion     d) ask for clarification" },
      { q: "Part 2 — match the OPENING to the CLOSING", opts: "1. Dear Mr Bekele,     2. Dear Sir or Madam,     3. Hi Sara,          a) Yours faithfully,     b) Thanks,     c) Yours sincerely," },
      { q: "Part 3 — match the SITUATION to the REFUSAL", opts: "1. cannot do it     2. need time     3. already busy          a) “I'd like to, but I'm on the audit.”     b) “Could I get back to you tomorrow?”     c) “I'm afraid I can't manage that.”" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–c, 2–a, 3–b, 4–d.  ·  Part 2: 1–c, 2–a, 3–b.  ·  Part 3: 1–c, 2–b, 3–a.",
      tip: "Part 2 is pure convention. The sincerely/faithfully pairing is noticed in job applications and nowhere else matters as much.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — write the update", sub: "Three parts. Thirty seconds.",
    color: C.green, instruction: "Write a three-part update for each situation.", size: 17,
    items: [
      "1.  Report 80% done. Waiting for figures. Will finish Friday.",
      "2.  Training booked. Trainer cancelled. Two replacements contacted.",
      "3.  Audit finished. No problems. Sending it this afternoon.",
      "4.  Website half done. Photos missing. Need them by Wednesday.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Item 3 has no problem, and learners should still say so explicitly. Silence about problems sounds like concealment.",
      answers: "MODEL for 1: “The report is about 80% done. I'm still waiting for the March figures — I followed up yesterday. I'll send it on Friday morning.”",
      mistakes: "Omitting the date in part 3. Every update needs one.",
      tip: "Item 4 requires a request as well as an update, which is realistic. The next step is somebody else's action.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — soften these", sub: "Same facts. Professional delivery.",
    color: C.green, instruction: "Rewrite each one so you could send it to a manager.", size: 17,
    items: [
      "1.  Your figures are wrong.",
      "2.  I can't do this by Friday.",
      "3.  You didn't answer my email.",
      "4.  That plan won't work.",
      "5.  I don't want to work on Saturday.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Take several versions of each. Then ask which fact was lost in the softening — the answer should always be none.",
      answers: "MODELS: 1 I think there may be an issue with these figures. · 2 I'm afraid I can't manage Friday — could we say Monday? · 3 I'm just following up on my email of Tuesday. · 4 I see what you mean, but I'm not sure it would work, because… · 5 I'd rather not work Saturday if possible — is there another option?",
      mistakes: "Softening until the message disappears. Every version above still says exactly what the blunt one said.",
      tip: "Item 3 is the one learners get most wrong. The professional version does not mention the failure to reply at all.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  “Could you” is more polite than “can you”.",
      "2.  You should put the purpose of an email in the last line.",
      "3.  “I'm afraid” means you are frightened.",
      "4.  A disagreement should begin with acknowledgement.",
      "5.  Meeting minutes should record opinions.",
      "6.  An update should always include a date.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 T · 2 F — the first line · 3 F — it means “I am sorry to tell you” · 4 T · 5 F — facts, decisions and actions only · 6 T",
      tip: "Item 2 is worth emphasising. Busy readers stop after two lines, so a purpose stated at the end is a purpose never read.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own workplace.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  Give a three-part update on something you are working on now.",
      "2.  Write a subject line for an email you actually need to send.",
      "3.  How would you disagree with your manager about a deadline?",
      "4.  How would you refuse extra work politely?",
      "5.  Which of the five workplace habits will you use this week?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Real content only. Invented situations produce vague answers and teach nothing.",
      answers: "No fixed answers. Question 1 must contain all three parts and a date; question 3 must contain all three disagreement steps.",
      mistakes: "Question 4 answered with a hidden “no”. Check for a reason and an alternative.",
      tip: "Question 2 can be assessed immediately: does it contain the topic and the action?",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. Partner checks the structure.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner checks that every part is present.", size: 19,
    items: [
      "1.  A 30-second update. Partner checks all three parts and the date.",
      "2.  Disagree with a proposal. Partner checks all three steps.",
      "3.  Refuse a request. Partner checks for a reason and an alternative.",
      "4.  Ask for three things at three politeness levels.",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "The partner checks structure, not grammar. This is workplace English, and the structure is what is being assessed.",
      answers: "SUCCESS CRITERIA: 1 status, problem, next step, and a specific date · 2 acknowledge, disagree, alternative · 3 refusal with reason and alternative, no bare “no” · 4 three audibly different levels.",
      tip: "Listen for tone as well. A correct structure delivered flatly still fails — the slide 33 point.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "A full workplace scenario.",
    color: C.green, instruction: "You are managing a project that is two weeks late. Work through all five.", size: 17,
    items: [
      { q: "1. Write an email to your manager explaining the delay.", opts: "Subject line, purpose first, no blame, a new date." },
      { q: "2. Write a follow-up email to the supplier who caused it.", opts: "Polite, no accusation, specific deadline." },
      { q: "3. Give a 30-second spoken update to your team.", opts: "Status, issue, next step." },
      { q: "4. Your manager suggests cancelling. Disagree in three steps.", opts: "With an alternative." },
      { q: "5. Write minutes for the meeting where this was decided.", opts: "Four sections. No opinions." },
    ],
    notes: tn({
      time: "22 minutes.",
      how: "This is the whole module in one realistic scenario. Let learners work in pairs on parts 3 and 4.",
      answers: "1 must state the delay and a new date without blaming anyone · 2 must use “following up” and give a deadline · 3 all three parts · 4 all three steps with an alternative · 5 four sections, names and dates on actions.",
      tip: "Part 1 is the hardest: explaining a delay to your own manager without blaming others and without excuses. Take three versions publicly.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Is polite English less honest than direct English?", opts: "Compare the two emails on slide 41." },
      { q: "2. Why does “I see what you mean, but…” work better than “no”?", opts: "Think about what the other person does next." },
      { q: "3. Why is a vague update worse than bad news?", opts: "What must the manager do after each one?" },
      { q: "4. When would being very polite be the WRONG choice?", opts: "Give a real example." },
    ],
    notes: tn({
      time: "13 minutes. Discussion, not writing.",
      how: "Question 4 keeps the module honest. Excessive politeness has real costs and learners should know them.",
      answers: "1 No — every fact in the blunt version appears in the polite one; only the blame is removed. 2 Because it keeps the other person thinking about the problem instead of defending themselves. 3 Bad news can be acted on; a vague update forces the manager to ask four questions and still leaves them uncertain. 4 In an emergency, with a safety issue, or when a deadline is genuinely immovable — there, hedging obscures urgency and can be dangerous.",
      tip: "Question 4's answer matters. “The building is on fire” should not be softened, and saying so shows the rule has limits.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Politeness", items: [
      { q: "1. Which is the safest default at work?", opts: "a) Send me…     b) Can you…     c) Could you…" },
      { q: "2. Why does a longer request sound more polite?", opts: "One sentence." },
      { q: "3. Rewrite politely: “Send me the report.”", opts: "Write the sentence." },
      { q: "4. What does “I'm afraid” mean?", opts: "One sentence." },
    ] },
    { part: "Part 2 · Meetings", items: [
      { q: "5. Name the four meeting moves.", opts: "Four answers." },
      { q: "6. How should a disagreement start?", opts: "One phrase." },
      { q: "7. Why never start with “no”?", opts: "One sentence." },
      { q: "8. What are the three steps of disagreeing?", opts: "Three answers." },
    ] },
    { part: "Part 3 · Email", items: [
      { q: "9. What must a subject line contain?", opts: "Two things." },
      { q: "10. Where does the purpose go?", opts: "One answer." },
      { q: "11. Which closing goes with “Dear Sir or Madam”?", opts: "One answer." },
      { q: "12. How do you chase an unanswered email politely?", opts: "Write the phrase." },
    ] },
    { part: "Part 4 · Updates and refusing", items: [
      { q: "13. Name the three parts of an update.", opts: "Three answers." },
      { q: "14. What must the third part always include?", opts: "One word." },
      { q: "15. Refuse politely: you cannot finish by Friday.", opts: "Write the sentence." },
      { q: "16. What phrase buys you time without refusing?", opts: "Write the phrase." },
    ] },
    { part: "Part 5 · Using it", items: [
      { q: "17. Write a subject line: you need figures by Thursday.", opts: "Topic and action." },
      { q: "18. Name the four sections of meeting minutes.", opts: "Four answers." },
      { q: "19. Why do minutes contain no opinions?", opts: "One sentence." },
      { q: "20. WRITING: a full professional email explaining a delay.", opts: "Subject, purpose first, no blame, new date." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 5 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is worth double." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is marked on structure and tone, not on grammar. Use the six checks from slide 50 as the marking scheme.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — the safest default", a: "c) Could you…", why: "Appropriate almost everywhere. “Can you” is fine with close colleagues; the bare imperative is almost never right." },
      { q: "Q2 — why longer is politer", a: "More words create distance, and distance reads as respect.", why: "It is genuinely that mechanical, which is why the ladder can be applied without cultural knowledge." },
      { q: "Q3 — rewrite politely", a: "“Could you send me the report, please?”", why: "Could plus please. Two changes, and an order becomes a request." },
      { q: "Q4 — “I'm afraid”", a: "“I am sorry to tell you.” Nothing to do with fear.", why: "The standard professional marker for unwelcome news or a refusal." } ],
    [ { q: "Q5 — the four moves", a: "Give an opinion · agree · disagree · ask for clarification.", why: "Four moves cover almost every meeting. Learn one phrase for each." },
      { q: "Q6 — how to start a disagreement", a: "“I see what you mean, but…” — acknowledge first.", why: "Without acknowledgement the disagreement lands as an attack." },
      { q: "Q7 — why never “no”?", a: "It closes the discussion and makes the other person defensive.", why: "They then defend their position instead of thinking about the problem." },
      { q: "Q8 — the three steps", a: "Acknowledge · disagree softly · give a reason or alternative.", why: "Step 3 is what makes you useful. Disagreement without an alternative is obstruction." } ],
    [ { q: "Q9 — the subject line", a: "The topic AND the action or deadline.", why: "“March figures — needed by Thursday” gets opened. “figures” does not." },
      { q: "Q10 — where does the purpose go?", a: "The first line.", why: "Busy readers stop after two lines. A purpose at the end is never read." },
      { q: "Q11 — “Dear Sir or Madam”", a: "“Yours faithfully.”", why: "Sincerely goes with a name; faithfully goes with Sir or Madam. It is noticed in job applications." },
      { q: "Q12 — chasing politely", a: "“I'm just following up on my email of Tuesday.”", why: "Reminds without accusing. “You didn't reply” starts an argument instead of getting the thing." } ],
    [ { q: "Q13 — the three parts", a: "Status · problem · next step.", why: "Thirty seconds, and the manager needs to ask nothing further." },
      { q: "Q14 — what the third part needs", a: "A date.", why: "“Soon” is not a next step. A specific day is what makes an update actionable." },
      { q: "Q15 — refusing politely", a: "“I'm afraid I can't manage Friday — could we say Monday?”", why: "Refusal, reason and alternative in one sentence." },
      { q: "Q16 — buying time", a: "“Could I get back to you tomorrow?”", why: "Delays without refusing, and is almost never refused itself." } ],
    [ { q: "Q17 — the subject line", a: "“March figures — needed by Thursday 5pm”.", why: "Topic, action and deadline. The reader knows what is wanted before opening it." },
      { q: "Q18 — the four sections", a: "Status · Issues · Decisions · Actions.", why: "Anyone can find what concerns them in ten seconds, which is what minutes are for." },
      { q: "Q19 — why no opinions?", a: "Minutes are a record, not a discussion.", why: "Opinions in minutes cause arguments later about what was really said." },
      { q: "Q20 — the email", a: "Marked on structure and tone, not grammar", why: "Use the six checks from slide 50: subject line, purpose first, could not can, a date, and would you want to receive it." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q7, Q10 and Q14 are the diagnostic block: why not to start with “no”, purpose-first, and the date on every commitment. These three habits change how a colleague is perceived faster than anything else in Level 3."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Use it at work.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Give one 30-second update to somebody", d: "Status, problem, next step, with a date." },
      { t: "Write one email using all four parts", d: "Subject with the action. Purpose in the first line." },
      { t: "Use “could” instead of “can” all day", d: "Notice whether anything changes." },
      { t: "Disagree with somebody in three steps", d: "Acknowledge, disagree, alternative." },
      { t: "Follow up on something unanswered", d: "“Just following up on my email of…”" },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "These are real tasks at real work, not exercises. That is what makes this module different from the first four.",
      tip: "Friday's task is the one nobody does. Ask on Monday who actually followed something up and what happened — the answers are usually striking.",
      activity: "Report back: at the next lesson, three learners describe what happened when they used one of these.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Two emails: a request and a delay explanation", d: "Both with subject lines. No blame in either." },
      { t: "Meeting minutes in four sections", d: "From the simulation, or from a real meeting." },
      { t: "Record your two-minute speaking challenge", d: "Update · three politeness levels · disagreement · refusal · five words." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 1's second email is the hardest thing in the module: explaining a delay without blaming anyone and without making excuses.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to the emails as if you were the recipient. Answering in role teaches more than a mark does.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaEnvelope", title: "Two emails — 10 marks", desc: "Subject lines with topic and action (2) · purpose in first line (2) · appropriate politeness (3) · specific dates (2) · correct closing (1)." },
      { icon: "FaClipboardList", title: "Minutes — 5 marks", desc: "Four sections (2) · name and date on every action (2) · no opinions (1)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "Three-part update with a date (3) · three politeness levels (2) · three disagreement steps (2) · refusal with alternative (2) · five words correct (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → redo the update drill daily with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Mark structure and tone. Grammar was Module 3's job and mixing the criteria makes the feedback unusable.",
      tip: "Give the mark privately with two corrections, using the Module 3 technique.",
      mistakes: "Do not reward length. A short, clear, well-structured email scores higher than a long polite one.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaLayerGroup", title: "The politeness ladder", desc: "Five levels. Longer means politer. “Could you” is the safe default." },
      { icon: "FaComments", title: "Four meeting moves", desc: "Opinion · agree and add · disagree · ask for clarification." },
      { icon: "FaEnvelope", title: "The email that works", desc: "Subject with the action. Purpose first. One request. A date." },
      { icon: "FaSync", title: "The 30-second update", desc: "Status · problem · next step, with a specific date." },
      { icon: "FaBalanceScale", title: "Disagreeing in three steps", desc: "Acknowledge · disagree softly · offer an alternative." },
      { icon: "FaHandPaper", title: "Refusing without “no”", desc: "Always a reason. Always an alternative." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3 and ask the class to rewrite all three sentences. They should now be able to fix each one instantly.",
      tip: "Ask which habit learners have already used at work this week. Real reports are the best possible summary.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The workplace toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaLayerGroup", title: "The politeness ladder", desc: "Can you…?  →  neutral\nCould you…?  →  polite  (default)\nCould you possibly…?  →  very polite\nI was wondering if you could…  →  highest" },
      { icon: "FaSync", title: "The 30-second update", desc: "1  STATUS  —  a number, not “fine”\n2  PROBLEM  —  or say there is none\n3  NEXT STEP  —  with a DATE\n\n“80% done · waiting on figures · Friday.”" },
      { icon: "FaBalanceScale", title: "Disagreeing", desc: "1  “I see what you mean…”\n2  “…but I'm not sure it would work…”\n3  “…because X. Could we do Y instead?”\n\nNever start with “no”." },
      { icon: "FaEnvelope", title: "The email", desc: "SUBJECT:  topic + action + date\nLine 1:  why you are writing\nMiddle:  the detail\nEnd:  one specific request + date" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The second and third boxes are the two things they will use most often.",
      tip: "Print the update box and keep it on a desk. Thirty seconds, three parts, one date — it is the most repeated speaking task in working life.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now be understood AND taken seriously — which are two different achievements.",
    sub: "Nobody was ever going to tell you that your email sounded blunt.\nNow you can hear it yourself, and fix it before you send.",
    chips: ["NEXT — Module 6", "Presentations", "Standing up, structuring, and handling questions"],
    notes: tn({
      time: "5 minutes.",
      how: "Close on the module's opening claim, now demonstrated. Register is invisible, unremarked and consequential — and it is entirely learnable.",
      tip: "Preview Module 6: presentations take the meeting skills from this module and scale them up to a room of people, with a structure and a question session at the end.",
      activity: "Ask every learner to name one habit from slide 20 they will use at work tomorrow.",
    }),
  });
};
