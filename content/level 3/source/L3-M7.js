"use strict";
/* LEVEL 3 · MODULE 7 — Interviews & Employability   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 3", levelNo: LV.no, levelName: "Intermediate\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Interviews & Employability",
    sub: "The CV, the cover letter, and the twelve questions you will be asked. Everything from Modules 1 to 6 now has a job to do.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "12", v: "REAL QUESTIONS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by saying this module has the most direct payoff of anything in the course. A learner who prepares twelve answers properly walks into an interview better prepared than most native speakers.",
      tip: "Interview questions are far more predictable than people expect. That predictability is the entire opportunity, and most candidates waste it.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. All of them are usable this month.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Write a CV that gets read", d: "One or two pages. Achievements with numbers, not job descriptions." },
      { t: "Write a cover letter that is not a copy of your CV", d: "Three paragraphs. Why this job, why you." },
      { t: "Answer “Tell me about yourself” in ninety seconds", d: "The question everyone gets and almost nobody prepares." },
      { t: "Use the STAR method for experience questions", d: "Situation · Task · Action · Result. It works every time." },
      { t: "Ask good questions at the end", d: "The part that is scored and that most candidates skip." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 5 surprises people. Having no questions at the end is read as a lack of interest, and it costs offers.",
      tip: "Objective 4 is the technique that makes vague answers concrete. It is the single most useful thing in this module.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: the hardest question", sub: "Be honest. This is preparation, not a test.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaUserTie", title: "1 · Tell me about yourself", desc: "Answer it now, out loud, in 90 seconds. Time it. How did it go?" },
      { icon: "FaFrown", title: "2 · Your weakness", desc: "“What is your biggest weakness?” What would you say? Would it help you?" },
      { icon: "FaQuestion", title: "3 · Your questions", desc: "At the end they ask if you have questions. What would you ask?" },
    ],
    notes: tn({
      time: "10 minutes. Task 1 needs real time.",
      how: "Task 1 is the diagnostic and most learners struggle badly. It feels like the easiest question and is the hardest, because it has no obvious shape.",
      mistakes: "Correct nothing. Note who rambled, who stopped early, and who started with childhood — all three are the standard failures.",
      tip: "Task 3 usually produces “nothing” or “about the salary”. Both are costly, and slide 10 fixes them.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Interview questions are predictable. That is the whole opportunity — and most people waste it.",
    sub: "There are about twelve questions. You will be asked eight of them.\nPreparing eight answers takes one evening, and almost nobody does it.",
    chips: ["Twelve questions", "Prepare, don't improvise", "One evening of work"],
    notes: tn({
      time: "6 minutes.",
      how: "Make the arithmetic explicit: twelve questions, eight asked, one evening to prepare. Framed that way, preparation becomes obviously worth doing.",
      mistakes: "Learners believe preparation makes them sound rehearsed. Under-preparation makes them sound vague, which is far worse and much more common.",
      extra: "Preparing an answer does not mean memorising a script. It means knowing your three points and one example for each.",
      tip: "This is Module 6's principle applied to interviews: structure prepared in advance, delivered live rather than read.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — the CV
  L.compare({
    sec: SEC.con, title: "The CV — what gets read and what does not",
    sub: "A recruiter spends about thirty seconds on a first read.",
    left: { h: "What most people write", items: ["“Responsible for managing the team.”", "“Duties included report writing.”", "“Hard-working and motivated.”", "Four pages.", "→ A job description.", "→ Says nothing about YOU."] },
    right: { h: "What gets you an interview", items: ["“Managed a team of eight.”", "“Cut reporting time from 5 days to 2.”", "“Trained 60 staff in three months.”", "One or two pages.", "→ Achievements with NUMBERS.", "→ What you did, and what changed."] },
    note: "Every line should answer: what did you do, and what was the result? “Responsible for” describes a chair. A number describes a person.",
    notes: tn({
      time: "16 minutes.",
      how: "The left column is what almost every learner CV looks like. Have them check their own against it — the recognition is immediate.",
      mistakes: "“Responsible for” is the phrase to eliminate. It describes the role, not the person, and every candidate for the job could write it.",
      extra: "Numbers do the work: how many people, how much money, how much faster, how much time saved. Even approximate numbers are far better than none.",
      tip: "“Hard-working and motivated” appears on every CV ever written, so it distinguishes nobody. Delete it and use the space for a result.",
      activity: "Add the numbers: learners rewrite three lines of their own CV to include a figure.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — CV structure
  L.panelSide({
    sec: SEC.con, title: "The CV — what goes where", sub: "Five sections, in this order. Two pages maximum.",
    panelW: 6.8,
    panel: { label: "The structure", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.36,
      text: "1.  NAME AND CONTACT\n     Phone · email · city. Nothing else.\n\n2.  PROFILE  —  3 lines\n     Who you are, what you do, what you want.\n\n3.  EXPERIENCE  —  newest first\n     Job title · company · dates ·\n     3 achievement lines with numbers.\n\n4.  EDUCATION  —  newest first\n\n5.  SKILLS  —  languages, software, licences" },
    side: { label: "The rules", color: C.green, size: 16, items: [
      "Newest first, always. Nobody reads to the bottom.",
      "No photograph, no date of birth, no marital status.",
      "Use a professional email address, not a nickname.",
      "Two pages maximum. One is better if you have under five years' experience.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The reverse-chronological order is not a style choice. Recruiters read the top third and stop, so the most recent and relevant work must be there.",
      mistakes: "Photographs and personal details are standard in some countries and increasingly avoided in international applications. Mention the difference rather than ruling.",
      extra: "The email address matters more than learners expect. A nickname address is noticed and it is an easy fix.",
      tip: "The profile in section 2 is three lines and it is the most-read part of the CV. It deserves an hour of work.",
      activity: "Draft the profile: learners write their three-line profile and read two aloud.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — the cover letter
  L.panelSide({
    sec: SEC.con, title: "The cover letter — three paragraphs", sub: "Not a summary of your CV. A different document.",
    panelW: 6.8,
    panel: { label: "The three paragraphs", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.38,
      text: "1.  WHY THIS JOB\n     Name the job and where you saw it.\n     Say one specific thing about THEM.\n\n2.  WHY YOU\n     Two achievements that match the advert.\n     Use numbers. Do not repeat the CV.\n\n3.  CLOSE\n     “I would welcome the chance to discuss\n     this. I am available from 1 April.”" },
    side: { label: "The tests", color: C.green, size: 16, items: [
      "Could this letter be sent to any other company? Then it is too general.",
      "Does paragraph 1 mention something specific about them?",
      "Does paragraph 2 match the words used in the advert?",
      "One page. Never more. Usually much less.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The first test in the side panel is the one that matters. A letter that could go to any employer tells this employer nothing.",
      mistakes: "Repeating the CV in prose. The letter answers a question the CV cannot: why this job, and why you for it.",
      extra: "Matching the advert's own words is deliberate and effective. If they ask for “stock control experience”, use that exact phrase.",
      tip: "Paragraph 1 requires reading about the company for ten minutes. That ten minutes is visible in the letter and almost nobody spends it.",
      activity: "The specific line: learners write one sentence about a real employer that could not apply to any other.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — tell me about yourself
  L.compare({
    sec: SEC.con, title: "“Tell me about yourself” — the ninety-second answer",
    sub: "The first question, and the one that sets the tone for everything after it.",
    left: { h: "What NOT to do", items: ["Start with where you were born.", "Tell your whole life story.", "Talk for five minutes.", "Say “I'm hard-working and honest.”", "Ask “what do you want to know?”", "→ You have wasted the best question."] },
    right: { h: "The three-part answer", items: ["1. NOW  —  “I'm a logistics officer at…”", "2. BEFORE  —  “Before that I spent two years…”", "3. WHY HERE  —  “I'm looking to move into…, which is why this role interests me.”", "→ Ninety seconds.", "→ Ends pointing at THIS job."] },
    note: "Now · before · why here. Three parts, ninety seconds, and the last part is the one that matters — it connects your history to their vacancy.",
    notes: tn({
      time: "16 minutes. The most important slide in the module.",
      how: "The three-part shape solves the problem completely. Without it the question has no obvious boundary and candidates ramble or stop dead.",
      mistakes: "Starting with childhood is the classic error. The interviewer wants a professional summary, not a biography.",
      extra: "Part 3 is what most candidates omit. Ending on why you want THIS job turns a summary into an argument.",
      tip: "Have every learner prepare and memorise this answer. It is asked in almost every interview and it takes twenty minutes to prepare properly.",
      activity: "Ninety seconds: every learner delivers their three-part answer, timed, twice.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — STAR
  L.panelSide({
    sec: SEC.con, title: "STAR — the answer shape for every experience question", sub: "“Tell me about a time when…” has one correct structure.",
    panelW: 6.8,
    panel: { label: "Situation · Task · Action · Result", color: C.green, tint: C.readTint, size: 16.5, lsm: 1.36,
      text: "S  —  the situation, in one line\n     “Last year our deliveries were late.”\n\nT  —  what you had to do\n     “I was asked to find out why.”\n\nA  —  what you actually did\n     “I checked every route for a month\n      and found two vans causing delays.”\n\nR  —  the RESULT, with a number\n     “Delivery time fell from 6 days to 4.”" },
    side: { label: "Why it works", color: C.green, size: 16, items: [
      "It stops you rambling. Four parts, about ninety seconds.",
      "The R is what most people forget — and it is the part that gets you hired.",
      "It turns “I am a problem-solver” into evidence.",
      "Prepare THREE stories. They will cover most questions.",
    ] },
    notes: tn({
      time: "16 minutes.",
      how: "The Result is the part to enforce. Learners describe what they did at length and never say what changed, which leaves the interviewer with no evidence.",
      mistakes: "Spending sixty seconds on the Situation. One line is enough — the Action and Result deserve the time.",
      extra: "Three prepared STAR stories cover most behavioural questions: a problem solved, a conflict handled, and something that went wrong.",
      tip: "The last side-panel point is the practical trick. The same three stories answer questions about teamwork, pressure, initiative and failure, with a change of emphasis.",
      activity: "One STAR story: every learner writes and delivers one, with a number in the Result.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — your questions
  L.table({
    sec: SEC.con, title: "“Do you have any questions?” — the part people waste",
    sub: "Saying “no” is read as a lack of interest. Prepare three.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 16.5, headSize: 16, colW: [4.8, 3.6, 3.933],
      rows: [
        ["Ask this", "What it shows", "When"],
        ["“What would success look like in the first six months?”", "you think about results", "always a good one"],
        ["“What is the biggest challenge for this team?”", "you are realistic", "shows maturity"],
        ["“How would you describe the way the team works?”", "you care about fit", "safe and useful"],
        ["“What are the next steps in the process?”", "you are organised", "ask this last"],
      ],
    },
    note: "Do NOT ask about salary or holiday at a first interview. Those come later, once they want you.",
    notes: tn({
      time: "14 minutes.",
      how: "Row 1 is the strongest question a candidate can ask. It shows they are already thinking about doing the job rather than getting it.",
      mistakes: "Saying “no, you've covered everything”. It is polite and it reads as disengagement. Always have three prepared.",
      extra: "Row 4 is practical: asking about next steps gets you a timeline and shows organisation.",
      tip: "Prepare three because two may get answered during the interview. Having none left at the end is the situation to avoid.",
      activity: "Three questions: every learner writes three they would genuinely ask, for a real job.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "apply", ipa: "/əˈplaɪ/", pos: "verb", icon: "FaPaperPlane",
      meaning: "To formally ask for a job or a place.",
      example: "I applied for the position last week. She applied to three companies.",
      mistake: "Apply FOR a job. Apply TO a company. Two different prepositions, and mixing them is very common.",
      notes: tn({ time: "7 minutes.",
        how: "Teach both prepositions together with an example of each. The distinction is small and it appears in every cover letter.",
        mistakes: "“I applied the job” with no preposition at all is also frequent.",
        extra: "apply for · applicant · application · an application form. The whole family is needed here.",
        tip: "The noun is “application” with stress on the third syllable — ap-pli-CA-tion, the -tion rule from Module 2.",
        activity: "For or to: give ten sentences and have learners choose the preposition." }) },

    { word: "responsible", ipa: "/rɪˈspɒnsəbl/", pos: "adjective", icon: "FaUserCheck",
      meaning: "Having a duty to deal with something.",
      example: "I was responsible for the whole warehouse. Who is responsible for this?",
      mistake: "“Responsible FOR”, never “responsible of”. And on a CV, avoid “responsible for” — use an action verb with a number instead.",
      notes: tn({ time: "8 minutes.",
        how: "The word is necessary in speech and damaging on a CV. Teach both facts at once — that contrast is what makes it memorable.",
        mistakes: "“Responsible of” is a direct translation error and it is extremely persistent.",
        extra: "CV alternatives: managed · led · ran · built · cut · trained · delivered. All are stronger and all invite a number.",
        tip: "Stress on the second syllable: re-SPON-si-ble. Four syllables, three of them weak.",
        activity: "Replace it: give five “responsible for” CV lines and have learners rewrite each with an action verb." }) },

    { word: "achievement", ipa: "/əˈtʃiːvmənt/", pos: "noun", icon: "FaTrophy",
      meaning: "Something good that you did and completed.",
      example: "My main achievement was cutting delivery times. List three achievements.",
      mistake: "Stress on the SECOND syllable: a-CHIEVE-ment. And an achievement needs a RESULT — otherwise it is just a duty.",
      notes: tn({ time: "8 minutes.",
        how: "The distinction between a duty and an achievement is the heart of slide 5. A duty is what you were asked to do; an achievement is what changed because you did it.",
        mistakes: "Listing duties under a heading that says “achievements”. Ask “what was different afterwards?” for every line.",
        extra: "The verb is “achieve”, and the spelling follows i-before-e. Both are worth thirty seconds.",
        tip: "Every achievement line should contain a number or a comparison. Without one it is unverifiable and reads as a claim.",
        activity: "Duty or achievement: give ten CV lines and have learners sort them into two columns." }) },

    { word: "position", ipa: "/pəˈzɪʃn/", pos: "noun", icon: "FaBriefcase",
      meaning: "A job, especially in a formal context.",
      example: "I am applying for the position of logistics officer. The position is based in Adama.",
      mistake: "More formal than “job”. Use “position” in a cover letter and “job” in conversation.",
      notes: tn({ time: "7 minutes.",
        how: "This is register vocabulary, like “issue” in Module 5. Same meaning, different formality, and the choice is noticed.",
        mistakes: "“I want the job you advertised” in a cover letter is too informal. “I am applying for the position of…” is the standard phrase.",
        extra: "position · role · post · vacancy · opening. All are more formal than “job”.",
        tip: "“The position of + job title” is a fixed phrase for cover letters. Drill it whole.",
        activity: "Formal or informal: give ten sentences and have learners choose job or position for each." }) },

    { word: "reference", ipa: "/ˈrefrəns/", pos: "noun", icon: "FaUserFriends",
      meaning: "A person who will speak about your work, or their written statement.",
      example: "References available on request. Can I give your name as a reference?",
      mistake: "Ask permission BEFORE giving somebody as a reference. And it is three syllables, not four: REF-rence.",
      notes: tn({ time: "7 minutes.",
        how: "The practical point matters as much as the word: asking permission first is expected, and failing to ask causes real problems.",
        mistakes: "The middle vowel disappears, like “comfortable” in Module 2. REF-rence, not “ref-er-ence”.",
        extra: "“References available on request” is the standard closing line on a CV, and it saves space.",
        tip: "Teach the asking phrase too: “Would you be willing to act as a reference for me?” It is a real conversation learners will need.",
        activity: "Ask for one: learners write the message they would send to ask somebody to be a reference." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Interview Language 1 of 5" }),
    title: "The tense of every interview question",
    sub: "From Module 4. Now it decides whether you sound competent.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 16.5, headSize: 16, colW: [4.6, 3.4, 4.133],
      rows: [
        ["Question", "Tense", "Because"],
        ["“How long have you worked there?”", "present perfect", "the job continues"],
        ["“What did you do before that?”", "past simple", "that job is finished"],
        ["“Have you ever managed a team?”", "present perfect", "life experience, no time"],
        ["“Tell me about a time when…”", "past simple", "one finished event"],
        ["“Where do you see yourself in five years?”", "would like to · going to", "a prior intention"],
      ],
    },
    note: "The question tells you the tense of the answer. Answer a perfect question with the past simple and it sounds noticeably wrong.",
    notes: tn({
      time: "14 minutes.",
      how: "Mirroring the question's tense is the shortcut. Learners do not need to reason about aspect — they need to hear the question form.",
      mistakes: "Row 3 has a trap: the question is in the perfect, but once you give a specific example you switch to the past simple. That switch is correct.",
      extra: "Row 4 is the STAR question, and it is entirely past simple because it describes one finished event.",
      tip: "This is Module 4 doing real work. Learners who avoided the present perfect will sound weak in exactly the questions that matter most.",
      activity: "Question and tense: read twelve interview questions and have learners name the tense of each answer.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Interview Language 2 of 5" }),
    title: "Talking about yourself without boasting or apologising",
    sub: "English has a narrow band between the two. Aim for the middle.",
    left: { h: "Too weak", items: ["“I just helped a bit.”", "“I'm not really an expert.”", "“It was mostly the team.”", "“I only managed a small project.”", "→ The interviewer believes you."] },
    right: { h: "About right", items: ["“I led that part of the project.”", "“I've got three years' experience in it.”", "“I worked with a team of eight, and I coordinated the schedule.”", "“I managed a project worth 2 million birr.”", "→ Facts, not adjectives."] },
    note: "State FACTS, not adjectives. “I cut delivery times by a third” is not boasting — it is information. “I'm excellent” is an opinion nobody can check.",
    notes: tn({
      time: "15 minutes.",
      how: "The note resolves the discomfort. Many learners find self-promotion culturally uncomfortable, and stating verifiable facts sidesteps that entirely.",
      mistakes: "“Just” and “only” are the two words that undercut a whole sentence. Delete both from interview language.",
      extra: "Crediting a team is good — but say what YOU did within it. “We did it” leaves the interviewer with no information about you.",
      tip: "Facts cannot be boasting. That reframing is what lets learners speak confidently without feeling arrogant.",
      activity: "Strengthen it: give eight weak self-descriptions and have learners restate each as a fact.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Interview Language 3 of 5" }),
    title: "The difficult questions — and the shape of a good answer",
    sub: "Four questions everybody dreads. Each has a technique.",
    table: {
      color: C.gram, rowH: 0.52, fontSize: 16, headSize: 15.5, colW: [3.6, 4.6, 4.133],
      rows: [
        ["Question", "The technique", "Example"],
        ["“Your biggest weakness?”", "a real one, plus what you do about it", "“I take on too much. Now I check my workload weekly.”"],
        ["“Why did you leave?”", "a fact about the situation, never a complaint", "“It was a small company with no room to grow.”"],
        ["“Why is there a gap in your CV?”", "say what you did in it", "“I studied for six months and finished a course.”"],
        ["“Why should we hire you?”", "two achievements that match the advert", "“You need X; I did X at my last job, and cut costs by 15%.”"],
      ],
    },
    note: "Never criticise a former employer. It is the fastest way to lose an interview, and the interviewer will assume you would say the same about them.",
    notes: tn({
      time: "16 minutes.",
      how: "Row 1's technique is the whole answer: a genuine weakness plus the action you take about it. A fake weakness like “I work too hard” is transparent and irritating.",
      mistakes: "Criticising a former employer in row 2. State a fact about the situation — small company, no progression, contract ended — and stop.",
      extra: "Row 3 matters in Ethiopia where career paths are often not continuous. A gap with a reason is completely acceptable; an unexplained one raises questions.",
      tip: "Row 4 is the question to prepare hardest. It is the only one where you may directly argue for yourself, and most candidates waste it on adjectives.",
      activity: "Four hard answers: every learner prepares one answer for each of the four.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Interview Language 4 of 5" }),
    title: "The cover letter — sentence patterns", sub: "Six sentences. They frame almost any letter.",
    panelW: 7.0,
    panel: { label: "Fixed patterns worth memorising", color: C.gram, tint: C.surf2, size: 16, lsm: 1.34,
      text: "“I am writing to apply for the position of ___,\n  advertised on ___.”\n\n“I am currently working as ___ at ___.”\n\n“In my current role I have ___ , which\n  reduced ___ by ___%.”\n\n“I was particularly interested to see that\n  your company ___.”\n\n“I would welcome the opportunity to discuss\n  my application.”" },
    side: { label: "How to use them", color: C.gram, size: 16, items: [
      "These are frames, not scripts. The content in the gaps is yours.",
      "Pattern 3 is the important one — an action AND a result.",
      "Pattern 4 is where you prove you researched them.",
      "Keep the whole letter to one page.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "These are chunks in the Module 1 sense, scaled up to written English. The frames are fixed and the content is personal.",
      mistakes: "Filling pattern 3 with a duty instead of an achievement. It must contain a result, ideally a number.",
      extra: "Pattern 4 requires ten minutes of reading about the employer. That ten minutes is visible in the letter and very few candidates spend it.",
      tip: "Note the present perfect in pattern 3 — “I have…” — which is Module 4 again. The tense marks work that continues to matter.",
      activity: "Fill the frames: learners complete all five patterns for a real job advertisement.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Interview Language 5 of 5" }),
    title: "Put it all together — the twelve questions", sub: "Prepare all twelve. You will be asked eight.",
    color: C.gram, size: 17, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "Tell me about yourself.  ·  Why do you want this job?", d: "Now, before, why here. And why THIS employer." },
      { t: "Why are you leaving?  ·  Why is there a gap in your CV?", d: "Facts about the situation. Never a complaint." },
      { t: "What are your strengths?  ·  What is your weakness?", d: "Facts with numbers. A real weakness plus your fix." },
      { t: "Tell me about a time you solved a problem  ·  …handled a conflict", d: "STAR. Two of your three prepared stories." },
      { t: "Tell me about a time something went wrong  ·  Why should we hire you?", d: "STAR with what you learned. Then two matching achievements." },
      { t: "Where do you see yourself in five years?  ·  Any questions for us?", d: "An intention that fits this job. Then your three questions." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Twelve questions on one slide is the module's central claim made concrete. Preparing all twelve takes one evening.",
      mistakes: "Preparing only the easy ones. The four hard questions from slide 18 are the ones that decide outcomes.",
      extra: "Three STAR stories cover questions 7, 8 and 9 between them, with a change of emphasis for each.",
      tip: "Print this slide. It is the homework, the exam and the real-world deliverable all at once.",
      activity: "Twelve answers: learners prepare all twelve in note form over the week.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — the CV line", sub: "Duty or achievement?", items: [
      { q: "“Responsible for managing the warehouse team.” Improve it.", a: "“Managed a warehouse team of eight.”", why: "An action verb and a number. “Responsible for” describes the role, not what you actually did." },
      { q: "“Duties included writing monthly reports.” Improve it.", a: "“Cut monthly reporting time from five days to two.”", why: "Same work, but now with a result. The reader learns something about you rather than about the job." },
      { q: "Why delete “hard-working and motivated”?", a: "Every candidate writes it, so it distinguishes nobody.", why: "It is an unverifiable adjective. Use the space for a number instead." },
    ] },
    { title: "Guided examples 2 — tell me about yourself", sub: "Three parts, ninety seconds.", items: [
      { q: "Where should you start?", a: "With what you do NOW.", why: "Not with your birthplace or your childhood. The interviewer wants a professional summary." },
      { q: "What are the three parts?", a: "Now · before · why this job.", why: "Ninety seconds, and it ends pointing at their vacancy rather than trailing off." },
      { q: "Why does part 3 matter most?", a: "It connects your history to THIS job.", why: "Without it you have given a summary. With it you have given an argument." },
    ] },
    { title: "Guided examples 3 — STAR", sub: "Four parts. The last one decides.", items: [
      { q: "“Tell me about a time you solved a problem.” What shape?", a: "Situation · Task · Action · Result.", why: "Four parts, about ninety seconds. It stops you rambling and guarantees you finish with evidence." },
      { q: "Which part do people forget?", a: "The Result.", why: "It is the only part that proves the story mattered. Without a result it is just an anecdote." },
      { q: "How long should the Situation be?", a: "One line.", why: "The Action and Result deserve the time. Sixty seconds of background loses the interviewer." },
    ] },
    { title: "Guided examples 4 — the hard questions", sub: "Facts, never complaints.", items: [
      { q: "“Why did you leave your last job?” The company was badly run. What do you say?", a: "“It was a small company with limited room to grow.”", why: "A fact about the situation. Criticising a former employer makes the interviewer assume you would criticise them too." },
      { q: "“What is your biggest weakness?”", a: "A real one, plus what you do about it.", why: "“I work too hard” is transparent and irritating. A genuine weakness with a fix shows self-awareness." },
      { q: "There is a two-year gap in your CV. What do you say?", a: "Say what you did in it — studied, cared for family, worked informally.", why: "A gap with a reason is fine. An unexplained one invites the interviewer to imagine something worse." },
    ] },
    { title: "Guided examples 5 — your questions", sub: "Never say “no”.", items: [
      { q: "“Do you have any questions?” You have none. What do you do?", a: "Ask one of your three prepared questions anyway.", why: "“No” is read as disengagement. Prepare three, because two may already have been answered." },
      { q: "Should you ask about salary?", a: "Not at a first interview.", why: "It comes later, once they want you. Asking early suggests the money is your only interest." },
      { q: "What is the strongest question to ask?", a: "“What would success look like in the first six months?”", why: "It shows you are thinking about doing the job, not just getting it." },
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
    title: "The opening of an interview",
    sub: "Bethlehem answers the first question. Three parts, ninety seconds.",
    turns: [
      { who: "INTERVIEWER", text: "Thanks for coming. So — tell me about yourself.", side: "r" },
      { who: "BETHLEHEM", text: "Of course. I'm currently a logistics officer at a distribution company in Adama, where I've worked for three years.", side: "l" },
      { who: "BETHLEHEM", text: "Before that I spent two years in a warehouse role in Hawassa, which is where I learned stock control.", side: "l" },
      { who: "BETHLEHEM", text: "In my current job I manage a team of eight, and last year we cut delivery times from six days to four.", side: "l" },
      { who: "BETHLEHEM", text: "I'm now looking to move into supply chain management, which is why this position interested me.", side: "l" },
      { who: "INTERVIEWER", text: "Good. Tell me more about the delivery times.", side: "r" },
    ],
    note: "Now · before · achievement with numbers · why here. The interviewer's follow-up is exactly what she wanted him to ask.",
    notes: tn({
      time: "15 minutes.",
      how: "The last line is the point. By putting a number in her answer, Bethlehem chose what the next question would be about — which is control of the interview.",
      mistakes: "She never says “I am hard-working”. Every claim is a verifiable fact, which is the slide 17 principle.",
      extra: "Note the tenses: present perfect for the current job, past simple for the previous one, exactly as slide 16 predicts.",
      tip: "Planting a number so the interviewer asks about it is a real technique. Say so — learners find it empowering.",
      activity: "Plant a number: every learner writes an answer containing one figure they want to be asked about.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "A STAR answer, and a hard question",
    sub: "Tolosa handles both. Watch the structure.",
    turns: [
      { who: "INTERVIEWER", text: "Tell me about a time you solved a problem at work.", side: "r" },
      { who: "TOLOSA", text: "Last year our deliveries were consistently late. I was asked to find out why.", side: "l" },
      { who: "TOLOSA", text: "I tracked every route for a month and found two vans caused most delays. I recommended replacing one.", side: "l" },
      { who: "TOLOSA", text: "Delivery time fell from six days to four, and complaints dropped by about half.", side: "l" },
      { who: "INTERVIEWER", text: "And why are you leaving your current job?", side: "r" },
      { who: "TOLOSA", text: "It's a small company, and there isn't really anywhere to progress. I'd rather be somewhere I can keep growing.", side: "l" },
    ],
    note: "Situation and Task in one line. Action in two. Result with two numbers. Then a reason for leaving that criticises nobody.",
    notes: tn({
      time: "15 minutes.",
      how: "Have learners label the four STAR parts in his answer. Then point out that Situation and Task together take one line — the Action and Result get the time.",
      mistakes: "His last answer states a fact about the company, not a complaint about people. That distinction is what makes it safe.",
      extra: "Two numbers in the Result — days and complaints — is stronger than one. It shows the change was real.",
      tip: "This is the Module 1 listening script's answer, now fully developed. Learners who did that module will recognise it.",
      activity: "Label it: learners mark S, T, A and R on a transcript of his answer.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Phrases for the interview room",
    sub: "Six phrases. Three buy time, three add strength.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 18.5, descSize: 15,
    items: [
      { icon: "FaClock", title: "“That's a good question — let me think.”", desc: "Buys three seconds. Sounds confident." },
      { icon: "FaRedo", title: "“Could I just check what you mean by…?”", desc: "Better than answering the wrong question." },
      { icon: "FaComments", title: "“Would you like me to give an example?”", desc: "Offers a STAR story. They always say yes." },
      { icon: "FaChartLine", title: "“In my current role I've…”", desc: "Present perfect. Opens an achievement." },
      { icon: "FaBullseye", title: "“The result was…”", desc: "The R in STAR. Never leave it out." },
      { icon: "FaHandshake", title: "“I'd welcome the chance to…”", desc: "For the close, and for the letter." },
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Phrase 3 is the most useful and the least known. Offering an example lets you deploy a prepared STAR story rather than improvising.",
      mistakes: "Answering a question you have misunderstood. Phrase 2 costs three seconds and prevents a wasted minute.",
      extra: "Phrase 1 is from Module 1. In an interview it is worth more than anywhere else in the course.",
      tip: "Drill all six as chunks. In an interview there is no spare capacity to construct them.",
      activity: "Six phrases: run a mock interview where every learner must use at least four.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the interview answer",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "INTERVIEWER", text: "Tell me about yourself.", side: "r" },
      { who: "YOU", text: "I'm ______ working as a ______ at ___, where I've been for two years.", side: "l" },
      { who: "YOU", text: "______ that, I spent three years in a similar role in Bahir Dar.", side: "l" },
      { who: "YOU", text: "In my current role I've ______ a team of five, and we ______ costs by 12%.", side: "l" },
      { who: "YOU", text: "I'm now ______ to move into a larger role, which is why this ______ interested me.", side: "l" },
      { who: "INTERVIEWER", text: "Tell me more about the cost reduction.", side: "r" },
    ],
    note: "Use these:  “currently”  ·  “Before”  ·  “managed”  ·  “cut”  ·  “looking”  ·  “position”",
    notes: tn({
      time: "13 minutes.",
      how: "Have every learner deliver the completed version with their OWN details substituted. Filling gaps is preparation; delivering it is the task.",
      answers: "1 currently · 2 Before · 3 managed · 4 cut · 5 looking · 6 position",
      mistakes: "Learners keep the invented content. Insist they replace it with their real job and real numbers.",
      tip: "The last line shows the planted number working again. Praise anyone who notices.",
      activity: "Your version: every learner writes and delivers their own ninety-second answer.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — the mock interview", sub: "Four rounds. Swap roles after each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "“Tell me about yourself.” 90 seconds, three parts.", d: "Partner times you and checks all three parts." },
      { t: "“Tell me about a time you solved a problem.”", d: "Partner checks all four STAR parts, especially the Result." },
      { t: "Two hard questions: leaving, and your weakness", d: "Partner checks for any criticism of a former employer." },
      { t: "“Do you have any questions for us?”", d: "You must ask three. None about salary." },
    ],
    notes: tn({
      time: "16 minutes for all four rounds.",
      how: "Swapping roles matters. Being the interviewer teaches learners what a weak answer sounds like from the other side.",
      mistakes: "Round 2 without a Result. The partner should refuse to accept the answer until a number appears.",
      tip: "Round 4 is the one learners skip. Enforce all three questions — running out is the situation to avoid in reality.",
      activity: "Full mock: run all four rounds back to back as a single ten-minute interview.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the ninety-second answer", sub: "Prepare it, memorise the shape, deliver it three times.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "NOW — what you do, where, how long", d: "Present perfect: “I've worked there for…”" },
      { t: "BEFORE — one previous role and what you learned", d: "Past simple. One sentence." },
      { t: "AN ACHIEVEMENT with a number", d: "“We cut… by…” Plant it deliberately." },
      { t: "WHY HERE — connect it to this job", d: "“…which is why this position interested me.”" },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Deliver it three times: once reading, once glancing at notes, once from memory. The third time is when it starts sounding natural.",
      mistakes: "Making it a script and reciting it. Learn the four parts, not the words.",
      extra: "Step 3 is the strategic one. A number in your answer directs the interviewer's next question to ground you have prepared.",
      tip: "This single answer is worth more preparation than anything else in the module. It is asked almost every time.",
      activity: "Three deliveries: every learner delivers it three times, the last from memory.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — build three STAR stories", sub: "Three stories cover most questions you will be asked.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "STORY 1 — a problem you solved", d: "Covers: problem-solving, initiative, analysis." },
      { t: "STORY 2 — a difficult person or a conflict", d: "Covers: teamwork, communication, pressure." },
      { t: "STORY 3 — something that went wrong", d: "Covers: failure, learning, honesty." },
      { t: "Each one: S and T in one line, A in two, R with a number", d: "Ninety seconds each. Time them." },
    ],
    notes: tn({
      time: "18 minutes.",
      how: "Three stories are enough. The same story answers several different questions with a change of emphasis, which is why the number is three and not ten.",
      mistakes: "Story 3 makes learners uncomfortable. A failure with a clear lesson is a strong answer; claiming never to have failed is not believable.",
      extra: "Every Result needs a number, even an approximate one. “About half” and “roughly two weeks” are perfectly acceptable.",
      tip: "Write all three on one card. That card is what learners take into a real interview.",
      activity: "Three cards: every learner writes their three STAR stories in note form.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — sounding confident",
    sub: "Delivery decides how the same words are received.",
    left: { h: "Undermines you", items: ["Voice rising at the end of statements", "“I just…”  “I only…”  “sort of…”", "Speaking too quietly", "Filling every pause with “erm”", "Apologising for your English"] },
    right: { h: "Sounds confident", items: ["Voice falling at the end of statements", "“I led…”  “I managed…”  “I cut…”", "Loud enough to be easy to hear", "Two seconds of silence instead", "Never mentioning your English at all"] },
    note: "From Module 2: statements fall at the end. A statement that rises sounds like a question, as if you were unsure of your own experience.",
    notes: tn({
      time: "15 minutes.",
      how: "The rising-statement habit is common and very costly here. Demonstrate the same sentence both ways and ask which candidate sounds more employable.",
      mistakes: "“Just” and “only” undercut whatever follows them. Ban both from interview answers.",
      extra: "This is Module 2's intonation work in its highest-stakes application. The words can be perfect and the delivery can still lose the job.",
      tip: "Record learners answering one question and play back only the intonation pattern. Most are surprised by how much they rise.",
      activity: "Falling endings: learners deliver five statements about their experience, all with falling intonation.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — the hard questions", sub: "Four questions. Prepare an answer for each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "“Why are you leaving your current job?”", d: "A fact about the situation. No complaints." },
      { t: "“What is your biggest weakness?”", d: "A real one, plus what you do about it." },
      { t: "“Why should we hire you?”", d: "Two achievements that match the advert." },
      { t: "“Where do you see yourself in five years?”", d: "An intention that fits THIS job." },
      { t: "Now your partner asks all four, in a random order", d: "No preparation time between them." },
    ],
    notes: tn({
      time: "16 minutes.",
      how: "Task 5 is the real test. Prepared answers delivered in a random order under time pressure is what an actual interview feels like.",
      mistakes: "Question 4 answered with “in your job” — flattering and unconvincing. A genuine direction that this job serves is stronger.",
      extra: "Question 3 is the only invitation to argue directly for yourself. Most candidates waste it on adjectives instead of achievements.",
      tip: "The weakness answer should be genuine. Interviewers hear “I'm a perfectionist” several times a week and it registers as evasion.",
      activity: "Random order: partners ask the four questions in a different order for each learner.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — the full mock interview", sub: "Ten minutes. The main assessment of this module.",
    color: C.speak, size: 19, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "“Tell me about yourself.”", d: "90 seconds. Three parts, one number." },
      { t: "“Why do you want this job?”", d: "Something specific about THEM." },
      { t: "“Tell me about a time you solved a problem.”", d: "Full STAR, with a Result." },
      { t: "“Why are you leaving?” and “Your weakness?”", d: "No criticism. A real weakness with a fix." },
      { t: "“Why should we hire you?”", d: "Two achievements matching the advert." },
      { t: "“Do you have any questions?”", d: "Ask three. None about salary." },
    ],
    notes: tn({
      time: "A full lesson. Allow 12 minutes per learner including feedback.",
      how: "Run it properly: learners wait outside, come in, shake hands, sit down. The formality is part of what is being practised.",
      mistakes: "Step 6 skipped because time runs out. Protect it — it is scored in real interviews and it is the most commonly wasted moment.",
      answers: "SUCCESS CRITERIA: a three-part opening under 100 seconds with one number · something specific about the employer · a complete STAR with a numerical Result · no criticism of any former employer · two matched achievements · three prepared questions.",
      tip: "Record if learners agree. Watching your own interview is uncomfortable and more useful than any feedback.",
      activity: "Real advert: use a genuine job advertisement so the answers can be matched to real requirements.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — two answers to one question", sub: "“Tell me about a time you solved a problem.”",
    panelW: 7.2,
    panel: { label: "Audio script — read A, then B", color: C.listen, tint: C.listenTint, size: 15.5, lsm: 1.26,
      text: "A\n“Well, there were a lot of problems, and I helped\nwith some of them. It was quite difficult but we\nworked as a team and in the end it was fine. I'm\ngood at solving problems.”\n\nB\n“Last year our deliveries were consistently late.\nI was asked to find out why. I tracked every route\nfor a month and found two vans were causing most\nof the delays. I recommended replacing one and\nre-routing the other. Delivery time fell from six\ndays to four.”" },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. What problem did A solve?",
      "2. What problem did B solve?",
      "3. What did A actually do?",
      "4. What was B's result?",
      "5. Which one used STAR?",
      "6. Which candidate would you interview again?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Question 1 is unanswerable, and that is the lesson. Answer A contains no information at all despite sounding fluent and confident.",
      mistakes: "Learners assume A is weak English. It is not — the English is fine. The problem is that it contains no content.",
      extra: "A ends with “I'm good at solving problems”, which is an adjective. B ends with a number. That is the slide 17 principle in practice.",
      answers: "1 Impossible to say. · 2 Late deliveries. · 3 Unknown — “helped with some of them”. · 4 Delivery fell from six days to four. · 5 B. · 6 B, universally.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Answer A is fluent and empty. That is the trap.",
    size: 16.5,
    items: [
      { q: "1 — what problem did A solve?", a: "You cannot tell. No situation is ever named.", why: "Fluent English with no content. The interviewer learns nothing they can write down." },
      { q: "3 — what did A actually do?", a: "“Helped with some of them.” No action is stated.", why: "The Action is where you prove you did something. Without it there is no evidence." },
      { q: "4 — B's result", a: "Delivery time fell from six days to four.", why: "A number the interviewer can repeat to their own manager. That is what gets you shortlisted." },
      { q: "5 — which used STAR?", a: "B. All four parts, in order, in six sentences.", why: "Situation and Task in two lines, Action in two, Result in one. Ninety seconds." },
      { q: "6 — the honest lesson", a: "A sounds confident and says nothing. B sounds ordinary and says everything.", why: "Fluency alone does not get you hired. Fluency plus evidence does." },
    ],
    notes: keyNotes("Item 6 is the one to say aloud. Learners spend Module 1 building fluency; this shows fluency is necessary and not sufficient."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — the hard questions", sub: "Listen for what is said and what is carefully not said.",
    panelW: 7.2,
    panel: { label: "Audio script — teacher reads twice", color: C.listen, tint: C.listenTint, size: 15.5, lsm: 1.26,
      text: "INT:  Why are you leaving your current job?\nMIMI:  It's a small company with little room to\nprogress. I'd rather be somewhere I can grow.\n\nINT:  What is your biggest weakness?\nMIMI:  I take on too much. Last year I said yes to\nthree projects and one of them slipped. Now I\ncheck my workload every Monday.\n\nINT:  And why should we hire you?\nMIMI:  Your advert asks for stock control. I ran\nstock control for two years and cut losses by 15%." },
    side: { label: "Questions", color: C.listen, size: 15, items: [
      "1. Does Mimi criticise her employer?",
      "2. Is her weakness a real one?",
      "3. What does she do about it?",
      "4. How does she answer the last question?",
      "5. Which words does she take from the advert?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "The weakness answer is the model: a real weakness, a concrete example of it costing something, and a specific system she now uses. All three parts are needed.",
      mistakes: "Learners give fake weaknesses. Mimi's answer is credible precisely because it admits something actually went wrong.",
      extra: "Her last answer quotes the advert's own phrase — “stock control” — and then supplies a matching achievement with a number.",
      answers: "1 No — a fact about size, not a complaint. · 2 Yes, with a real consequence. · 3 Checks her workload every Monday. · 4 Matches the advert's requirement to her own achievement. · 5 “Stock control”.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Three difficult questions, three safe answers.",
    size: 16.5,
    items: [
      { q: "1 — does she criticise?", a: "No. “A small company with limited room to progress” is a fact.", why: "Criticising an employer makes the interviewer assume you would criticise them next." },
      { q: "2 and 3 — the weakness", a: "Taking on too much, with a real consequence and a weekly workload check.", why: "Three parts: the weakness, the evidence it is genuine, and the system that now controls it." },
      { q: "4 — why hire you", a: "She matched the advert's requirement to her own achievement.", why: "The only question that invites you to argue for yourself directly. She uses evidence, not adjectives." },
      { q: "5 — the advert's words", a: "“Stock control”, quoted back exactly.", why: "Deliberate. Using their own words makes the match obvious and easy for them to record." },
      { q: "What is the pattern?", a: "Facts, examples and numbers. No adjectives about herself anywhere.", why: "Every claim she makes could be checked. That is what makes them credible." },
    ],
    notes: keyNotes("Ask the class to find a single adjective Mimi uses about herself. There are none — and she still sounds like the strongest candidate."),
  });

  L.grid({
    sec: SEC.lis, title: "Listening in an interview — four tactics", sub: "You are being assessed on how you listen too.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaHeadphones", title: "Answer the question they asked", desc: "Not the one you prepared. If it is close but not identical, adjust the emphasis rather than reciting." },
      { icon: "FaQuestion", title: "Check if you are not sure", desc: "“Could I just check what you mean by…?” Three seconds, and it prevents a wasted minute." },
      { icon: "FaPen", title: "Listen for their priorities", desc: "What they ask about twice is what matters to them. Bring it up again in your own questions." },
      { icon: "FaClock", title: "Let them finish", desc: "Interrupting an interviewer is costly. Two seconds of silence before answering is better than starting early." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Tactic 1 is the commonest failure among well-prepared candidates. A prepared answer delivered to a slightly different question is obvious and damaging.",
      mistakes: "Reciting a memorised answer regardless of what was asked. Prepare the material, not the wording.",
      tip: "Tactic 3 is how a good candidate ends strongly: raise their own stated priority in your closing questions.",
      activity: "Adjust it: ask a slightly different version of a prepared question and require the learner to adapt.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — a job advertisement", sub: "Read it the way a candidate should: looking for the words to reuse.",
    panelW: 7.2,
    panel: { label: "Read carefully", color: C.read, tint: C.readTint, size: 15.5, lsm: 1.26,
      text: "LOGISTICS COORDINATOR — ADAMA\n\nYOU WILL:\n  ·  manage delivery schedules, three depots\n  ·  supervise a team of six drivers\n  ·  report weekly on performance\n\nWE ARE LOOKING FOR:\n  ·  two years' experience in logistics\n  ·  stock control experience\n  ·  good spoken and written English\n  ·  a driving licence\n\nApply with a CV and cover letter by 30 April." },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "List the four requirements.",
      "Which words would you reuse in your letter?",
      "Which requirement would you struggle with?",
      "What would you write about that one?",
      "What must you send, and by when?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Task 2 is the practical skill: an advertisement is a list of the words the employer wants to see back. Underline them and reuse them.",
      mistakes: "Writing a general letter that ignores the advert entirely. Every requirement should be addressed somewhere.",
      extra: "Task 4 matters. If you lack one requirement, address it briefly and positively rather than hoping it is not noticed.",
      tip: "“Good spoken and written English” is a requirement these learners are actively meeting. Point that out — this course is the evidence.",
      activity: "Underline and reuse: learners mark every phrase they would quote back in a letter.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Read it as a candidate, not as a student.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence.",
    items: [
      "What are the three main duties?",
      "What are the four requirements?",
      "Which exact phrases would you quote in your cover letter?",
      "If you have no driving licence, what would you write?",
      "What must you send, and by what date?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Question 4 is the honest one. Missing one requirement out of four is normal, and a brief positive line is better than silence.",
      mistakes: "Ignoring a missing requirement entirely. The reader notices its absence, and silence reads as concealment.",
      tip: "Question 3 is the technique that most improves a cover letter for the least effort.",
      answers: "1 Manage schedules for three depots, supervise six drivers, report weekly. · 2 Two years' logistics experience, stock control, English, driving licence. · 3 “logistics”, “stock control”, “delivery schedules”, “supervise”. · 4 Say you are taking the test, or that you have supervised drivers without driving yourself. · 5 A CV and a cover letter, by 30 April.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "An advert is a list of words to reuse.",
    size: 16.5,
    items: [
      { q: "1 — the three duties", a: "Manage schedules for three depots · supervise six drivers · report weekly.", why: "Each duty suggests a STAR story you should have ready for the interview." },
      { q: "2 — the four requirements", a: "Two years' logistics · stock control · English · driving licence.", why: "Your letter should address all four, in this order, because that is the order they thought of them." },
      { q: "3 — phrases to reuse", a: "“logistics” · “stock control” · “delivery schedules” · “supervise”.", why: "Quoting their words back makes the match obvious and easy for them to record." },
      { q: "4 — a missing requirement", a: "Address it briefly and positively. Do not ignore it.", why: "Silence reads as concealment. One honest line is far better than hoping it goes unnoticed." },
      { q: "5 — what to send", a: "A CV and a cover letter, by 30 April.", why: "Sending only a CV when a letter was requested removes you at the first sort." },
    ],
    notes: keyNotes("Item 3 is the highest-value technique in this section. Ten minutes with a highlighter improves a cover letter more than an hour of writing."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a cover letter that works", sub: "Three paragraphs. Matched to the advert on slide 41.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 15, lsm: 1.24,
      text: "Dear Ms Alemu,\n\nI am writing to apply for the position of Logistics\nCoordinator, advertised on 2 April. I was\ninterested to see you are opening a third depot.\n\nI am currently a logistics officer in Adama, where\nI manage schedules for two depots and supervise\na team of eight. I have run stock control for two\nyears and cut losses by 15%.\n\nI hold a driving licence and would welcome the\nchance to discuss my application.\nYours sincerely,  Mimi Tadesse" },
    side: { label: "Your task", color: C.read, size: 15, items: [
      "Which advert words appear here?",
      "How many numbers are in paragraph 2?",
      "What does paragraph 1 prove she did?",
      "Could this letter be sent to any other company?",
      "How long is it?",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Question 4 is the test from slide 7. The third-depot sentence could not appear in any other letter, and that is what makes it work.",
      mistakes: "Learners write letters that could go anywhere. One specific sentence about the employer fixes that, and it costs ten minutes of reading.",
      extra: "Paragraph 2 contains three numbers: two years, 15%, and six days to four. Every one is checkable.",
      tip: "Note the present perfect — “I have run stock control for two years” — and the past simple for the finished project. Module 4 at work.",
      activity: "Count the matches: learners list every advert phrase reused in the letter.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Why this letter gets an interview.",
    size: 16.5,
    items: [
      { q: "1 — the advert words", a: "“Logistics Coordinator” · “delivery schedules” · “supervise” · “stock control” · “driving licence”.", why: "Five phrases quoted back. The reader can tick every requirement without hunting for it." },
      { q: "2 — the numbers", a: "Three: two years, 15%, and six days to four.", why: "Every one is checkable. Numbers are what separate a claim from evidence." },
      { q: "3 — paragraph 1", a: "It proves she read about them — the third depot.", why: "One specific sentence that could not appear in any other letter. That is the whole test." },
      { q: "4 — could it go elsewhere?", a: "No. The third-depot line makes it specific to this employer.", why: "A general letter tells the employer they are one of many, which is the opposite of what you want." },
      { q: "Vocabulary check", a: "apply · responsible · achievement · position · reference", why: "Note she never writes “responsible for”. She uses “manage”, “supervise”, “run” and “cut” instead." },
    ],
    notes: keyNotes("The vocabulary note is the point worth ending on: the word “responsible” is useful in speech and avoided in writing, and this letter shows why."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — fix the CV lines", sub: "Turn duties into achievements.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Rewrite each line with an action verb and a number.",
    items: [
      "1.  Responsible for managing the warehouse team.",
      "2.  Duties included writing monthly reports.",
      "3.  Was in charge of stock control.",
      "4.  Helped to train new staff.",
      "5.  Hard-working and motivated team player.",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Item 5 should be deleted entirely rather than rewritten. Nothing in it can be made specific.",
      answers: "MODELS: 1 Managed a warehouse team of eight. · 2 Cut monthly reporting time from five days to two. · 3 Ran stock control for two years, cutting losses by 15%. · 4 Trained 12 new staff in six months. · 5 DELETE — replace with a real achievement.",
      mistakes: "Keeping “responsible for” and adding a number. Replace the phrase entirely with an action verb.",
      tip: "Learners should apply this to their own CV immediately, while the pattern is fresh.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — your cover letter", sub: "Three paragraphs. One page. For the slide-41 advert.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write a complete cover letter using the frames from slide 19.",
    items: [
      "1.  “I am writing to apply for the position of ___, advertised on ___.”",
      "2.  One specific sentence about THIS employer.",
      "3.  Your current role, with two achievements and numbers.",
      "4.  Address any requirement you do not fully meet.",
      "5.  “I would welcome the opportunity to discuss my application.”",
      "6.  Test: could this letter be sent to any other company?",
    ],
    notes: tn({
      time: "20 minutes.",
      how: "Step 6 is the test that matters. Have learners exchange letters and try to identify which employer each was written for.",
      answers: "MODEL: see slide 44. Three paragraphs, five advert phrases reused, three numbers, one specific fact about the employer.",
      mistakes: "Repeating the CV in prose. The letter answers a question the CV cannot: why this job and why you.",
      tip: "Step 2 requires ten minutes of research. Insist on it — it is the difference between a letter that works and one that does not.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — your twelve answers", sub: "One evening of work. The highest-value homework in this course.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write NOTES, not scripts, for all twelve questions from slide 20.",
    items: [
      "1.  Tell me about yourself — three parts, one number.",
      "2.  Why this job — one specific thing about them.",
      "3.  Why leaving · CV gap — facts, no complaints.",
      "4.  Strengths · weakness — facts, then a real weakness with a fix.",
      "5.  Three STAR stories — each with a numerical Result.",
      "6.  Five years · your three questions for them.",
    ],
    notes: tn({
      time: "22 minutes in class, finished at home.",
      how: "Notes, not scripts. A memorised script is delivered to the wrong question; notes adapt.",
      answers: "MODEL: three or four bullet points per question, and a number in every STAR Result.",
      mistakes: "Writing full answers out. Take one learner's script and ask a slightly different question — the script fails immediately.",
      tip: "This is the deliverable of the whole module. Learners who complete it are genuinely prepared for a real interview.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — what good notes look like", sub: "Five tests. Apply them to your own twelve.",
    size: 16.5,
    items: [
      { q: "1 — notes or script?", a: "Bullet points. Three or four per question.", why: "A script gets recited at the wrong question. Notes adapt to what was actually asked." },
      { q: "2 — does every STAR have a number?", a: "It must. “Fell from six days to four”, not “it improved”.", why: "The Result is the only part that proves the story mattered." },
      { q: "3 — is the weakness real?", a: "It should admit something that actually cost you.", why: "“I'm a perfectionist” is heard several times a week and registers as evasion." },
      { q: "4 — do you criticise anyone?", a: "You should not. Anywhere. Once.", why: "The interviewer assumes you will speak about them the same way after you leave." },
      { q: "5 — do you have three questions ready?", a: "Three, because two may get answered during the interview.", why: "Having none left at the end is read as disengagement, and it is entirely avoidable." },
    ],
    notes: keyNotes("Test 1 is worth demonstrating. Ask a learner a slightly reworded question and watch a scripted answer fail while a note-based one adapts."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your interview checklist", sub: "Six checks. Before you send, and before you go in.",
    check: true, color: C.write, size: 19,
    items: [
      { t: "Does every CV line have an action verb and a number?", d: "Delete every “responsible for”." },
      { t: "Could my cover letter be sent to any other company?", d: "If yes, it is too general. Add one specific line." },
      { t: "Is my 90-second answer prepared and timed?", d: "Now · before · why here." },
      { t: "Do I have three STAR stories with numerical Results?", d: "Problem · conflict · something that went wrong." },
      { t: "Have I criticised any employer anywhere?", d: "Check the letter and every prepared answer." },
      { t: "Do I have three questions to ask them?", d: "None of them about salary." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Run this with every learner before the mock interview. It catches most problems in three minutes.",
      tip: "Print it. This checklist is usable for every job application a learner makes for the rest of their career.",
      activity: "Six checks: learners check each other's twelve answers against this list.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Which is the better CV line?", opts: "a) Responsible for the team     b) Managed a team of eight     c) Hard-working team player" },
      { q: "2. “Tell me about yourself” should start with:", opts: "a) where you were born     b) what you do now     c) your school" },
      { q: "3. STAR stands for:", opts: "a) Story, Task, Answer, Reason     b) Situation, Task, Action, Result     c) Skills, Training, Aims, References" },
      { q: "4. At the end they ask if you have questions. You should:", opts: "a) say no     b) ask about salary     c) ask three prepared questions" },
      { q: "5. You apply ___ a job and ___ a company.", opts: "a) for / to     b) to / for     c) for / for" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 c · 5 a",
      tip: "Question 4 is the one that costs real offers. Say the answer twice.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — which tense?", sub: "The question decides the answer.",
    color: C.green, instruction: "Name the tense you would use to answer each question.", size: 18,
    items: [
      "1.  How long have you worked there?",
      "2.  What did you do before that?",
      "3.  Have you ever managed a team?",
      "4.  Tell me about a time you solved a problem.",
      "5.  Where do you see yourself in five years?",
      "6.  What are you doing at the moment?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Mirroring the question's tense is the shortcut. Learners do not need to reason — they need to hear the form.",
      answers: "1 present perfect · 2 past simple · 3 present perfect, then past simple for the detail · 4 past simple · 5 would like to / going to · 6 present continuous",
      mistakes: "Item 3 has two tenses. The perfect opens it and the past simple supplies the finished example.",
      tip: "This is Module 4 in its highest-stakes application. Learners who avoid the perfect will sound weak here.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Questions, techniques and CV verbs.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the QUESTION to the TECHNIQUE", opts: "1. “Tell me about yourself”     2. “A time you solved a problem”     3. “Your weakness?”     4. “Why should we hire you?”" },
      { q: "a) STAR     b) now / before / why here", opts: "c) two achievements matching the advert     d) a real one plus your fix" },
      { q: "Part 2 — match the WEAK phrase to the STRONG one", opts: "1. Responsible for the team     2. Duties included reports     3. Helped train staff          a) Trained 12 staff in 6 months     b) Managed a team of eight     c) Cut reporting time by 60%" },
      { q: "Part 3 — match STAR to its MEANING", opts: "1. S     2. T     3. A     4. R          a) what you had to do     b) the outcome, with a number     c) the background     d) what you actually did" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–b, 2–a, 3–d, 4–c.  ·  Part 2: 1–b, 2–c, 3–a.  ·  Part 3: 1–c, 2–a, 3–d, 4–b.",
      tip: "Part 2 is the CV rewrite in miniature. Learners should apply the same three moves to their own document.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — write your profile", sub: "Three lines. The most-read part of a CV.",
    color: C.green, instruction: "Write your three-line CV profile.", size: 18,
    items: [
      "1.  Line 1 — who you are and what you do now.",
      "2.  Line 2 — your strongest achievement, with a number.",
      "3.  Line 3 — what you are looking for next.",
      "4.  Check: any adjectives about yourself? Delete them.",
      "5.  Check: is there at least one number?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Step 4 is the discipline. “Hard-working”, “motivated” and “dynamic” all describe nobody and take up the most valuable space on the page.",
      answers: "MODEL: “Logistics officer with five years' experience in distribution across Oromia. Cut delivery times from six days to four and reduced stock losses by 15%. Now looking to move into supply chain management.”",
      mistakes: "Three lines of adjectives. Read two aloud — the class immediately hears which is stronger.",
      tip: "This paragraph is read more than any other part of a CV. It deserves an hour, not five minutes.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — fix the interview answers", sub: "Each one breaks a rule.",
    color: C.green, instruction: "Rewrite each answer properly.", size: 17,
    items: [
      "1.  “I left because my manager was difficult and unfair.”",
      "2.  “My weakness? I work too hard.”",
      "3.  “I helped with some problems and it worked out fine.”",
      "4.  “I'm hard-working, honest and a good team player.”",
      "5.  “No, I don't have any questions.”",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Each item breaks one rule: criticism, a fake weakness, no STAR, adjectives instead of facts, and no questions.",
      answers: "MODELS: 1 “It was a small company with limited room to progress.” · 2 “I take on too much — last year one project slipped, so now I review my workload weekly.” · 3 A full STAR with a numerical Result. · 4 “I managed a team of eight and cut costs by 12%.” · 5 “Yes — what would success look like in the first six months?”",
      mistakes: "Item 1 is the one that loses interviews. However true the criticism, it must not be said.",
      tip: "Item 4 is the slide 17 principle: replace every adjective with a fact.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  A CV should be four pages long.",
      "2.  “Responsible for” is a strong CV phrase.",
      "3.  The R in STAR is the most important part.",
      "4.  You should say “no” if you have no questions at the end.",
      "5.  You should never criticise a former employer.",
      "6.  A cover letter should summarise your CV.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — one or two pages · 2 F — use an action verb and a number · 3 T · 4 F — always ask three prepared questions · 5 T · 6 F — it answers why this job and why you",
      tip: "Items 4 and 6 are the two that cost most and are easiest to fix.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own job search.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What is your strongest achievement, with a number?",
      "2.  Why are you leaving, or why did you leave? No complaints.",
      "3.  What is a real weakness, and what do you do about it?",
      "4.  What three questions will you ask them?",
      "5.  Which requirement in a real advert do you not fully meet?",
    ],
    notes: tn({
      time: "11 minutes.",
      how: "Question 5 is the honest one. Every candidate lacks something, and the response to that is what separates strong applications from weak ones.",
      answers: "No fixed answers. Question 2 must contain no criticism; question 3 must contain a real weakness AND a fix.",
      mistakes: "Question 1 answered without a number. Send it back — the number is the point.",
      tip: "Collect these. They become the content of the mock interview.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. Partner is the interviewer.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner checks the structure and times you.", size: 19,
    items: [
      "1.  “Tell me about yourself.” 90 seconds, three parts, one number.",
      "2.  One STAR story. Partner checks all four parts.",
      "3.  “Why are you leaving?” Partner listens for any criticism.",
      "4.  “Any questions?” You must ask three.",
    ],
    notes: tn({
      time: "14 minutes.",
      how: "The partner times round 1 strictly. Over ninety seconds means it needs cutting; under sixty means it needs content.",
      answers: "SUCCESS CRITERIA: 1 three parts within 90 seconds, one number · 2 all four STAR parts with a numerical Result · 3 no criticism of anyone · 4 three questions, none about salary.",
      tip: "Round 3 is the one to check hardest. Criticism slips out easily when learners speak about a real job.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — the full application", sub: "One real job. Everything the module covers.",
    color: C.green, instruction: "Use the advert on slide 41, or a real one you have found.", size: 17,
    items: [
      { q: "1. Write your CV profile and three achievement lines.", opts: "Action verbs and numbers only." },
      { q: "2. Write the full cover letter.", opts: "Three paragraphs, one specific fact about them." },
      { q: "3. Prepare notes for all twelve questions.", opts: "Bullet points, not scripts." },
      { q: "4. Write three STAR stories with numerical Results.", opts: "Problem · conflict · something that went wrong." },
      { q: "5. Do a full ten-minute mock interview.", opts: "Six questions and your three at the end." },
    ],
    notes: tn({
      time: "A full lesson, plus homework.",
      how: "This is the module's deliverable. A learner who completes all five is genuinely prepared to apply for a real job.",
      answers: "Assessed with the six checks from slide 50: numbers on every CV line, a specific letter, a timed 90-second answer, three STAR stories, no criticism, three questions.",
      tip: "Use a real advertisement if any learner has one. Real stakes produce noticeably better work.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Answer A on slide 36 was fluent and got nowhere. Why?", opts: "What was missing?" },
      { q: "2. Why must you never criticise a former employer, even truthfully?", opts: "What does the interviewer conclude?" },
      { q: "3. Why is “no questions” a costly answer?", opts: "What does it signal?" },
      { q: "4. Is preparing twelve answers dishonest or over-rehearsed?", opts: "Compare it with improvising." },
    ],
    notes: tn({
      time: "13 minutes. Discussion, not writing.",
      how: "Question 1 makes the module's central point: fluency is necessary and not sufficient. Evidence is what gets you hired.",
      answers: "1 It had no situation, no action and no result — fluent English carrying no information the interviewer could record. 2 Because they assume you would speak about them the same way after you left. 3 It signals you are not interested enough to have thought about the job. 4 No — preparation means knowing your material, not memorising words. Improvising produces vague answers, which is far worse and much more common.",
      tip: "Question 4 answers the objection learners raise most. Prepared is not rehearsed; unprepared is just vague.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · The CV", items: [
      { q: "1. How long should a CV be?", opts: "a) 1–2 pages     b) 4 pages     c) as long as needed" },
      { q: "2. Improve: “Responsible for managing the team.”", opts: "Write the line." },
      { q: "3. What must every achievement line contain?", opts: "One word." },
      { q: "4. Name the five CV sections in order.", opts: "Five answers." },
    ] },
    { part: "Part 2 · The cover letter", items: [
      { q: "5. How many paragraphs?", opts: "One number." },
      { q: "6. What must paragraph 1 contain?", opts: "One sentence." },
      { q: "7. What is the test of a good cover letter?", opts: "One sentence." },
      { q: "8. You apply ___ a position ___ a company.", opts: "Two prepositions." },
    ] },
    { part: "Part 3 · Tell me about yourself", items: [
      { q: "9. Name the three parts.", opts: "Three answers." },
      { q: "10. How long should it be?", opts: "One answer." },
      { q: "11. Where should you NOT start?", opts: "One answer." },
      { q: "12. Why put a number in your answer?", opts: "One sentence." },
    ] },
    { part: "Part 4 · STAR and hard questions", items: [
      { q: "13. What does STAR stand for?", opts: "Four words." },
      { q: "14. Which part do people forget?", opts: "One letter, and why." },
      { q: "15. “Why are you leaving?” — what must you avoid?", opts: "One sentence." },
      { q: "16. What makes a good weakness answer?", opts: "Two things." },
    ] },
    { part: "Part 5 · The end of the interview", items: [
      { q: "17. How many questions should you prepare?", opts: "One number, and why." },
      { q: "18. Name one strong question to ask.", opts: "Write it." },
      { q: "19. What should you NOT ask about at a first interview?", opts: "One answer." },
      { q: "20. SPEAKING: a full ten-minute mock interview.", opts: "Assessed live." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 7 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is the mock interview." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is worth as much as the other nineteen together. Assess it with the six checks from slide 50.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — CV length", a: "a) One or two pages.", why: "Recruiters spend about thirty seconds on a first read. Four pages guarantees the second one is never seen." },
      { q: "Q2 — improve the line", a: "“Managed a team of eight.”", why: "An action verb and a number. “Responsible for” describes the chair, not the person in it." },
      { q: "Q3 — every achievement needs", a: "A number.", why: "Without one it is a claim. With one it is evidence the reader can repeat to their own manager." },
      { q: "Q4 — the five sections", a: "Contact · profile · experience · education · skills.", why: "Newest first throughout, because nobody reads to the bottom." } ],
    [ { q: "Q5 — how many paragraphs?", a: "Three.", why: "Why this job · why you · the close. One page, usually much less." },
      { q: "Q6 — paragraph 1", a: "The position, where you saw it, and one specific thing about THEM.", why: "The specific line proves you read about them, which almost no candidate does." },
      { q: "Q7 — the test", a: "Could it be sent to any other company?", why: "If yes, it is too general and tells this employer they are one of many." },
      { q: "Q8 — the prepositions", a: "Apply FOR a position, TO a company.", why: "Two different prepositions, and mixing them is very common in learner letters." } ],
    [ { q: "Q9 — the three parts", a: "Now · before · why here.", why: "It ends pointing at their vacancy, which turns a summary into an argument." },
      { q: "Q10 — how long?", a: "About ninety seconds.", why: "Five minutes loses them. Twenty seconds wastes the best question you will be asked." },
      { q: "Q11 — where not to start", a: "Where you were born, or your childhood.", why: "The interviewer wants a professional summary, not a biography." },
      { q: "Q12 — why a number?", a: "It directs their next question to ground you have prepared.", why: "Planting a figure is a real technique for controlling where the interview goes." } ],
    [ { q: "Q13 — STAR", a: "Situation · Task · Action · Result.", why: "Four parts, about ninety seconds. It stops rambling and guarantees you end with evidence." },
      { q: "Q14 — the forgotten part", a: "R — the Result. It is what proves the story mattered.", why: "Without it you have told an anecdote rather than given evidence." },
      { q: "Q15 — “why are you leaving?”", a: "Never criticise a former employer.", why: "The interviewer assumes you would speak about them the same way after leaving." },
      { q: "Q16 — a good weakness answer", a: "A real weakness, and what you now do about it.", why: "“I'm a perfectionist” is heard several times a week and registers as evasion." } ],
    [ { q: "Q17 — how many questions?", a: "Three — because two may be answered during the interview.", why: "Having none left at the end is read as disengagement and is entirely avoidable." },
      { q: "Q18 — a strong question", a: "“What would success look like in the first six months?”", why: "It shows you are thinking about doing the job rather than merely getting it." },
      { q: "Q19 — what not to ask", a: "Salary or holiday, at a first interview.", why: "Those come later, once they want you. Asking early suggests the money is your only interest." },
      { q: "Q20 — the mock interview", a: "Assessed on structure and evidence, not on grammar", why: "Six checks: numbers, a specific letter, a timed opening, three STAR stories, no criticism, three questions." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q3, Q14 and Q15 are the diagnostic block: numbers on every claim, the Result in STAR, and never criticising an employer. These three decide more interviews than any language point."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "The most directly useful week in this course.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Rewrite your CV: every line an action verb and a number", d: "Delete every “responsible for”." },
      { t: "Write your three-line profile and read it aloud", d: "No adjectives about yourself." },
      { t: "Write your three STAR stories", d: "Each with a numerical Result." },
      { t: "Prepare notes for all twelve questions", d: "Bullet points. Not scripts." },
      { t: "Deliver your 90-second answer five times, timed", d: "The last two from memory." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's task should be done on their real CV, not an invented one. This week produces documents learners will actually send.",
      tip: "Friday's repetition is what makes the opening answer sound natural rather than recited. Five deliveries is the minimum.",
      activity: "Ask learners to bring their rewritten CV to the next lesson for a peer check.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your rewritten CV — one or two pages", d: "Profile, experience with numbers, education, skills." },
      { t: "A cover letter for a real advertisement", d: "Three paragraphs. One specific fact about the employer." },
      { t: "Notes for all twelve questions, plus three STAR stories", d: "Bullet points. Every Result with a number." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Mark the CV as a recruiter would: thirty seconds, top third only. Then tell learners what you learned in that time.",
      mistakes: "Learners hand in a CV with no numbers anywhere. Send it back — the numbers are the entire point of the rewrite.",
      tip: "These are real documents. If a learner has a real application pending, prioritise their letter and give detailed feedback.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaFileAlt", title: "CV — 10 marks", desc: "One or two pages (2) · profile with a number (2) · action verb on every line (3) · at least three numbers (3)." },
      { icon: "FaEnvelope", title: "Cover letter — 8 marks", desc: "Three paragraphs (2) · one specific fact about the employer (3) · advert words reused (2) · one page (1)." },
      { icon: "FaComments", title: "Twelve answers — 7 marks", desc: "All twelve in note form (3) · three STAR stories with numerical Results (3) · no criticism anywhere (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep working · below 10 → rewrite the CV with your teacher line by line." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Mark the CV strictly on numbers. It is the single change that most improves a learner's chance of an interview.",
      tip: "Give the mark privately with two specific improvements. These are documents people will send to real employers.",
      mistakes: "Do not mark grammar heavily in the CV. Fragments are correct in a CV — “Managed a team of eight” has no verb subject and is right.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaFileAlt", title: "The CV", desc: "Action verbs and numbers. Delete every “responsible for”." },
      { icon: "FaEnvelope", title: "The cover letter", desc: "Three paragraphs. One line that fits no other employer." },
      { icon: "FaUserTie", title: "Tell me about yourself", desc: "Now · before · why here. Ninety seconds, one number." },
      { icon: "FaStar", title: "STAR", desc: "Situation · Task · Action · Result. The R is what counts." },
      { icon: "FaShieldAlt", title: "The hard questions", desc: "Facts, never complaints. A real weakness with a fix." },
      { icon: "FaQuestion", title: "Your three questions", desc: "Never “no”. Never salary at a first interview." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Return to the warm-up on slide 3 and ask learners to answer “tell me about yourself” again, timed. Compare with their first attempt — the difference is usually dramatic.",
      tip: "Ask who now has a CV they would actually send. That show of hands is the module's real result.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The interview toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaUserTie", title: "Tell me about yourself", desc: "1  NOW  —  what you do, where, how long\n2  BEFORE  —  one previous role\n3  ACHIEVEMENT  —  with a number\n4  WHY HERE  —  connect to THIS job\n90 seconds. Plant a number." },
      { icon: "FaStar", title: "STAR", desc: "S  —  the situation, ONE line\nT  —  what you had to do\nA  —  what you actually did\nR  —  the result, WITH A NUMBER\nPrepare three stories." },
      { icon: "FaFileAlt", title: "Every CV line", desc: "ACTION VERB  +  WHAT  +  NUMBER\n“Managed a team of eight.”\n“Cut reporting from 5 days to 2.”\nNever “responsible for”.\nNever “hard-working”." },
      { icon: "FaQuestion", title: "Ask them three", desc: "“What would success look like in\nthe first six months?”\n“What's the biggest challenge here?”\n“What are the next steps?”\nNEVER salary at a first interview." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide. The four boxes are what they should read on the morning of a real interview.",
      tip: "Print all four on one card. It is the most practically useful page in the entire course.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You have a CV with numbers on it, a letter that fits one employer, and twelve prepared answers.",
    sub: "That is more preparation than most candidates ever do, in any language.\nThe questions were always predictable. You are simply one of the few people who prepared for them.",
    chips: ["NEXT — Module 8", "Reading & Writing for Work", "Reports, emails and the last module of Level 3"],
    notes: tn({
      time: "5 minutes.",
      how: "Close on the arithmetic from slide 4: twelve questions, one evening, and almost nobody does it. Learners who did the homework are genuinely ahead.",
      tip: "Preview Module 8: the last module of Level 3 covers the written English of work — reports, formal emails and summarising — and closes the level.",
      activity: "Ask every learner to name one real job they will apply for in the next month.",
    }),
  });
};
