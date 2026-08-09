"use strict";
/* LEVEL 2 · MODULE 4 — Future & Making Plans   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 2", levelNo: LV.no, levelName: "Elementary\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Future & Making Plans",
    sub: "Two ways to talk about what has not happened yet — and one clear rule for choosing between them.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5", v: "NEW WORDS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open with two sentences about yourself: “Tonight I am going to mark your homework — I decided that this morning.” and “The phone is ringing. I will answer it.” Then say: “Both are the future. They are not the same, and by Friday you will know why.”",
      tip: "After three tense modules this one feels lighter, because both forms are easy to make. The difficulty is choosing, not building. Say so — learners need the reassurance.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all about what happens next.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Talk about plans you have already made", d: "“I am going to study medicine.”" },
      { t: "Make a decision while you are speaking", d: "“The phone is ringing. I will answer it.”" },
      { t: "Choose correctly between “will” and “going to”", d: "One question decides it: did you decide before now, or right now?" },
      { t: "Make arrangements with someone", d: "“I am meeting Sara at six.”  “Shall we meet at four?”" },
      { t: "Use future time expressions", d: "tomorrow · next week · in two days · on Monday" },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask “Can you do this now?” Objective 3 is the one that matters — say that both forms are easy to build and the whole module is about the choice.",
      tip: "Return to this slide at the end of the module and ask again.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what happens next?", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaCalendarAlt", title: "1 · Tomorrow", desc: "What will you do tomorrow? Say one thing, any way you can." },
      { icon: "FaTasks", title: "2 · This year", desc: "Name one thing you have already decided to do this year." },
      { icon: "FaStar", title: "3 · Ethiopia in ten years", desc: "Say one thing you think will change. Guess — nobody knows the answer." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Tasks 2 and 3 are deliberately different: task 2 is a decided plan and task 3 is a prediction. Most learners will use the same form for both. Do not correct — note it, because that difference is the whole module.",
      mistakes: "Correct nothing in the warm-up.",
      tip: "Write one answer from task 2 and one from task 3 on the board and leave them there. You will sort them on slide 8.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "English has two futures. The difference is WHEN you decided.",
    sub: "“I am going to buy a phone.” — I decided last week. The plan already exists.\n“I will buy a phone.” — I am deciding right now, as I speak.\nSame future. Different history.",
    chips: ["Decided before now  →  going to", "Deciding right now  →  will", "One question answers it"],
    notes: tn({
      time: "5 minutes.",
      how: "Act it out. Look at a broken pen and say “I will buy a new one” — the decision happens in front of the class. Then hold up a shopping list and say “I am going to buy a pen” — the decision already existed. The two mimes teach it in thirty seconds.",
      mistakes: "Learners taught only “will” use it for everything, which is understood but sounds odd for plans. Learners taught only “going to” do the reverse. Teaching both together, as this module does, avoids both.",
      tip: "Do not over-teach the distinction. In real speech the difference is often small and native speakers are flexible. Give the test question, drill it, and move on.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.table({
    sec: SEC.con, title: "“will” — form and uses", sub: "One word for every person. Nothing changes.",
    table: {
      color: C.green, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [3.0, 3.6, 5.533],
      rows: [
        ["Use", "Pattern", "Example"],
        ["A decision made now", "will + base verb", "The phone is ringing. I will answer it."],
        ["A prediction or guess", "will + base verb", "I think it will rain tomorrow."],
        ["An offer", "will + base verb", "That bag looks heavy. I will help you."],
        ["A promise", "will + base verb", "I will call you tonight. I promise."],
      ],
    },
    note: "Form: I will · you will · he will · she will · we will · they will — no changes at all. Negative: will not, short form WON'T.",
    notes: tn({
      time: "12 minutes.",
      how: "Demonstrate all four uses physically: drop something and offer to pick it up, look out of the window and predict the weather, promise to bring something tomorrow. Learners see four different situations producing the same word.",
      mistakes: "“I will to go” — adding “to” after will. It is a very common error because learners transfer the pattern from “want to go”. Drill “will + verb, no to” explicitly.",
      extra: "The short form is 'll: I'll, you'll, he'll, we'll. It is used almost always in speech, so learners must be able to hear it even if they write the full form.",
      tip: "The offer use is the most immediately useful and the most polite. “I will help you” is a sentence every learner should own.",
      activity: "Offer round: teacher mimes a problem — a heavy bag, a dropped pen, a closed window — and learners offer help with “I will…”.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2
  L.table({
    sec: SEC.con, title: "“going to” — form and uses", sub: "It uses am / is / are, exactly like Module 2.",
    table: {
      color: C.green, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [3.2, 3.8, 5.133],
      rows: [
        ["Use", "Pattern", "Example"],
        ["A plan already made", "am/is/are going to + base", "I am going to study medicine."],
        ["An intention", "am/is/are going to + base", "We are going to buy a house."],
        ["Evidence you can see", "am/is/are going to + base", "Look at the sky. It is going to rain."],
        ["Negative and question", "not / move am-is-are", "She is not going to come.  ·  Are you going to work?"],
      ],
    },
    note: "The first part is the verb “to be” from Level 1 and Module 2. You already know it. Only “going to + verb” is new.",
    notes: tn({
      time: "12 minutes.",
      how: "Point out that they already know two thirds of this: am/is/are from Level 1, and the negative and question operations from Module 2. Only “going to” is new.",
      mistakes: "Dropping “am/is/are” — “I going to study” — is the same missing-auxiliary error as Module 2. Same fix: two boxes on the board, both must be filled.",
      extra: "The evidence use is the most vivid: look at the sky, look at that car, look at his face. Something visible tells you what will happen.",
      tip: "In fast speech “going to” becomes “gonna”. Mention it once so learners recognise it when they hear it, but teach the full form for their own speech.",
      activity: "Evidence game: describe a situation — dark clouds, a full bus, a crying child — and learners predict with “It is going to…”.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — the contrast
  L.compare({
    sec: SEC.con, title: "The one question that decides it",
    sub: "Did you decide BEFORE now, or are you deciding RIGHT NOW?",
    left: { h: "going to — decided before", items: ["I am going to travel on Friday.  (ticket bought)", "She is going to study medicine.  (already chosen)", "We are going to build a house.  (plan exists)", "Look at the sky — it is going to rain."] },
    right: { h: "will — deciding now", items: ["The phone is ringing. I will answer it.", "That bag is heavy. I will help you.", "I think it will rain tomorrow.  (a guess)", "I will call you tonight. I promise."] },
    note: "Test it:  “Someone knocks at the door. You say…”   →  “I will open it.”   The decision happens as you speak, so it is “will”.",
    notes: tn({
      time: "14 minutes. This is the most important slide in the module.",
      how: "Return to the two warm-up sentences on the board and sort them into the two columns together. Correcting their own language is far more powerful than sorting invented examples.",
      mistakes: "The prediction line appears in both columns for a reason: “going to” is used when you can SEE the evidence, and “will” when it is only an opinion. Give both examples and let the difference emerge; do not over-explain.",
      extra: "Ten situations to sort aloud: a ticket already bought, a knock at the door, dark clouds, a heavy bag, a chosen university, a guess about a football match.",
      tip: "Be honest with learners: native speakers often use either form and are understood. This distinction is worth learning but it is not worth anxiety. Say that — it lowers the fear and improves fluency.",
      activity: "Two corners: label one wall DECIDED BEFORE and the other DECIDING NOW. Read fifteen situations and learners walk to the correct wall.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — arrangements
  L.grid({
    sec: SEC.con, title: "A third way — the present continuous for arrangements",
    sub: "For fixed plans with other people, at a fixed time.",
    cols: 3, color: C.green, titleSize: 20, descSize: 16, shadow: true, tint: C.white,
    items: [
      { icon: "FaUsers", title: "“I am meeting Sara at six.”", desc: "We agreed it. The time is fixed. Another person is involved." },
      { icon: "FaCalendarAlt", title: "“She is flying to Dubai on Friday.”", desc: "The ticket exists. The date is fixed." },
      { icon: "FaClock", title: "“We are having a meeting at ten.”", desc: "It is in the diary. Everybody knows." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Teach this lightly. It is the same form learners already know from Module 2, used for the future. Give three examples and move on — do not turn it into a fourth rule to memorise.",
      mistakes: "Learners find it strange that a present form describes the future. Say plainly: if the arrangement is fixed and someone else is involved, English often uses this form. It will become natural through exposure.",
      extra: "The difference from “going to” is small: “I am going to meet Sara” is my intention; “I am meeting Sara at six” is an agreed arrangement. Both are correct in most situations.",
      tip: "Do not test this heavily. Recognising it matters more than producing it at this level — learners will hear it constantly and need to understand it.",
      activity: "Diary check: learners write three fixed arrangements for next week and tell a partner using this form.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — time expressions
  L.table({
    sec: SEC.con, title: "Future time expressions", sub: "The words that tell your listener when.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 17.5, headSize: 16, colW: [3.4, 3.4, 5.333],
      rows: [
        ["Expression", "Preposition", "Example"],
        ["tomorrow · tonight", "none", "I will see you tomorrow."],
        ["next week · next year", "none", "She is going to travel next month."],
        ["on Monday · on Friday", "ON", "We are meeting on Monday."],
        ["in two days · in a week", "IN", "The exam is in three weeks."],
        ["at six o'clock · at midday", "AT", "The bus leaves at six o'clock."],
      ],
    },
    note: "Careful: “tomorrow” and “next week” take NO preposition. “On tomorrow” and “in next week” are both wrong.",
    notes: tn({
      time: "10 minutes.",
      how: "Drill the no-preposition group first, because it is the one learners get wrong by adding something that should not be there.",
      mistakes: "“On tomorrow” and “in next week” are direct transfer errors. Learners add a preposition because their first language uses one. Name the cause.",
      extra: "This recycles the at/on/in rules from Level 1 Module 2. Point that out — the same three prepositions, now used for the future.",
      tip: "The “in two days” pattern is genuinely useful and often missed. It means “two days from now”, not “during two days”.",
      activity: "When is it? Teacher calls a future event, learners say when using a correct expression and preposition.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — making arrangements
  L.table({
    sec: SEC.con, title: "Making an arrangement with someone", sub: "Four moves: suggest, respond, fix the time, confirm.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [2.6, 4.4, 5.133],
      rows: [
        ["Move", "You say", "They say"],
        ["1 · Suggest", "“Shall we meet on Saturday?”", "“Yes, good idea.” / “Sorry, I am busy.”"],
        ["2 · Offer a time", "“What time is good for you?”", "“Four o'clock is fine.”"],
        ["3 · Fix the place", "“Where shall we meet?”", "“At the café near Piassa.”"],
        ["4 · Confirm", "“So, Saturday at four. See you then.”", "“See you then.”"],
      ],
    },
    note: "Move 4 is the one learners forget. Repeating the arrangement back prevents almost every misunderstanding.",
    notes: tn({
      time: "12 minutes.",
      how: "Model the whole four-move exchange with one learner in front of the class, twice. Then have pairs arrange three different meetings.",
      mistakes: "“Shall we” is new and slightly formal, but it is the most natural way to suggest something. Teach it as a fixed phrase and do not analyse it.",
      extra: "Alternatives for move 1: “Do you want to meet on Saturday?” “Are you free on Saturday?”",
      tip: "Move 4 is worth insisting on. Confirming the time and place back is a genuine life skill in any language, and it uses the whole module's language in one sentence.",
      activity: "Arrange three meetings: each learner must make three real arrangements with three different classmates, using all four moves.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "tomorrow", ipa: "/təˈmɒrəʊ/", pos: "adverb", icon: "FaCalendarAlt",
      meaning: "The day after today.",
      example: "I will see you tomorrow. Tomorrow is Friday.",
      mistake: "No preposition: say “tomorrow”, never “on tomorrow”. The stress is on the middle syllable: to-MOR-row.",
      notes: tn({ time: "5 minutes.",
        how: "Teach it with the whole future time family: today, tomorrow, tonight, the day after tomorrow. Then drill the no-preposition rule.",
        mistakes: "“On tomorrow” is a transfer error and it is very common. Correct it every time.",
        extra: "yesterday · today · tomorrow — three words that cover the whole time line and use no preposition.",
        tip: "Pair it with “yesterday” from Module 3. Two words, two tenses, one time line on the board.",
        activity: "Time line: learners place six time expressions on a line from past to future." }) },

    { word: "plan", ipa: "/plæn/", pos: "noun and verb", icon: "FaTasks",
      meaning: "Something you have decided to do. Also the verb: to decide to do something.",
      example: "What are your plans for next year?  ·  We are planning a trip.",
      mistake: "As a verb it doubles the n in the -ing and past forms: planning, planned. And “pl” is a cluster — no vowel between p and l.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the noun first — “my plans” — because that is how learners will use it most. Then the verb with its doubling.",
        mistakes: "The cluster “pl” gets an inserted vowel: “pilan”. Drill it as in Level 1: p and l joined, no vowel.",
        extra: "make a plan · change my plans · What are your plans? — the question is the most useful item.",
        tip: "“What are your plans for the weekend?” is one of the most common questions in English small talk. Drill it as a whole phrase.",
        activity: "Plans survey: each learner asks three classmates about their plans for next week." }) },

    { word: "meet", ipa: "/miːt/", pos: "verb", icon: "FaUsers",
      meaning: "To come together with someone at an agreed time and place.",
      example: "I am meeting Sara at six. We met last year.",
      mistake: "Irregular in the past: meet → MET, not “meeted”. And the vowel is long: /miːt/, not “mit”.",
      notes: tn({ time: "6 minutes.",
        how: "This verb appears in all three tenses now: I meet, I am meeting, I met. Drill all three — it is a good test of the level so far.",
        mistakes: "“Meet” for the first time and “meet” for an arrangement are the same word in English. Learners sometimes expect two different verbs.",
        extra: "meet a friend · meet at the café · meet for coffee · Nice to meet you (Level 1).",
        tip: "This verb was in the Level 1 phrase “Nice to meet you”. Point that out — learners have been using it for months.",
        activity: "Three tenses: each learner says one sentence with “meet” in each of the three tenses they know." }) },

    { word: "hope", ipa: "/həʊp/", pos: "verb", icon: "FaStar",
      meaning: "To want something to happen and think it is possible.",
      example: "I hope you will come. I hope it does not rain.",
      mistake: "After “hope” we usually use the PRESENT, not the future: “I hope it rains”, not “I hope it will rain” — though both are heard. And it ends in -e, so the past is “hoped”.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the fixed phrases rather than the rule: “I hope so”, “I hope not”, “I hope you are well”. These are what learners will actually use.",
        mistakes: "Do not over-teach the tense after “hope”. Both forms are heard and both are understood. Give the common form and move on.",
        extra: "I hope so · I hope not · I hope you like it · I hope to see you soon.",
        tip: "“I hope so” and “I hope not” are two-word replies that make a learner sound far more natural in conversation. Drill both.",
        activity: "Hopes for the year: each learner says one hope for themselves and one for their family." }) },

    { word: "next", ipa: "/nekst/", pos: "adjective", icon: "FaArrowRight",
      meaning: "The one that comes after this one.",
      example: "I will see you next week. The next bus is at six.",
      mistake: "No preposition before “next”: say “next week”, never “in next week” or “on next Monday”. The cluster at the end — kst — is hard; say it slowly.",
      notes: tn({ time: "6 minutes.",
        how: "Drill the no-preposition rule with five phrases: next week, next month, next year, next Monday, next time.",
        mistakes: "Both errors appear together: the added preposition and the dropped final consonants. “Nex” instead of “next” is very common.",
        extra: "next week · last week — a useful pair, one future and one past, both with no preposition.",
        tip: "The final cluster kst is one of the harder ones in English. Accept a good attempt; the preposition rule matters more.",
        activity: "Next and last: learners say one thing they did last week and one they will do next week." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Grammar 1 of 5" }),
    title: "Rule 1 — “will” never changes",
    sub: "One form for every person, and the verb after it is always the base form.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [3.4, 3.8, 4.933],
      rows: [
        ["Type", "Pattern", "Example"],
        ["Positive", "subject + will + base verb", "I will call you.  ·  She will help us."],
        ["Negative", "will not  (won't)", "I will not forget.  ·  He won't come."],
        ["Question", "Will + subject + base verb", "Will you help me?"],
        ["Short answer", "Yes, I will. / No, I won't.", "“Will she come?”  “Yes, she will.”"],
      ],
    },
    note: "Never “will to”. Never “wills”. Never “will goes”.  It is always  WILL + the base verb.",
    notes: tn({
      time: "10 minutes.",
      how: "Chant it: “I will go, you will go, he will go, she will go, we will go, they will go.” Nothing changes, which after three modules of changing endings is a genuine relief.",
      mistakes: "“I will to go” is the most common error, transferred from “want to go” and “going to go”. Drill it separately: will + verb, no to.",
      extra: "The short form 'll is used almost always in speech. Say ten sentences with it so learners can hear it.",
      tip: "“Won't” is the short form of “will not” and it sounds nothing like it. Teach it explicitly or learners will not recognise it.",
      activity: "Promise round: each learner makes one promise with “I will” and one with “I won't”.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — “going to” uses am / is / are",
    sub: "Three parts: the verb “to be”, then “going to”, then the base verb.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [2.6, 4.4, 5.133],
      rows: [
        ["Person", "Pattern", "Example"],
        ["I", "am going to + base", "I am going to travel next month."],
        ["He / she / it", "is going to + base", "She is going to study medicine."],
        ["You / we / they", "are going to + base", "They are going to build a house."],
        ["Negative", "am/is/are NOT going to", "I am not going to work on Sunday."],
        ["Question", "Am/Is/Are + subject + going to", "Are you going to come?"],
      ],
    },
    note: "All three parts are needed. “I going to travel” drops the first part. “I am going travel” drops the “to”.",
    notes: tn({
      time: "12 minutes.",
      how: "Three boxes on the board this time, not two. Build ten sentences by filling all three, and deliberately leave one empty each time so learners spot what is missing.",
      mistakes: "Both errors in the note appear regularly. The dropped auxiliary is the Module 2 error returning; the dropped “to” is new.",
      extra: "Note that “going to go” sounds repetitive but is correct: “I am going to go to Adama.” Many speakers shorten it to “I am going to Adama.”",
      tip: "Point out how much of this they already know: am/is/are from Level 1, the negative and question operations from Module 2. Only “going to” is new.",
      activity: "Three-box drill: teacher says a person and a plan, learner produces all three parts.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — choosing between them",
    sub: "The decision's history is what matters, not the time.",
    left: { h: "going to — decided before", items: ["I am going to visit Gondar next month.", "She is going to buy a car.", "We are going to get married in June.", "Look at the sky — it is going to rain."] },
    right: { h: "will — deciding as you speak", items: ["Someone is at the door. I will open it.", "That looks heavy. I will carry it.", "I think Ethiopia will win.", "I will help you tomorrow, I promise."] },
    note: "Ask yourself: did the plan exist BEFORE I opened my mouth?  Yes → going to.  No → will.",
    notes: tn({
      time: "12 minutes.",
      how: "Give fifteen situations and have learners choose. Then ask them to justify one or two — the justification is where the understanding shows.",
      mistakes: "Learners often think it is about how near the future is. It is not: “I will do it in ten years” and “I am going to do it in ten minutes” are both correct. Say that explicitly.",
      extra: "The prediction case is the subtlest: “going to” when you can see evidence, “will” when it is an opinion. Give two clear examples of each.",
      tip: "Reassure the class that in real conversation the two overlap and both are usually understood. Learners who fear this choice speak less; learners who know it is low-stakes speak more.",
      activity: "Situation cards: give pairs ten situation cards and have them sort into two piles, then justify three of them to the class.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — future time expressions and their prepositions",
    sub: "Some take a preposition. Some take none. That is the whole rule.",
    table: {
      color: C.gram, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [4.0, 2.6, 5.533],
      rows: [
        ["Expression", "Preposition", "Correct example"],
        ["tomorrow · tonight · next week", "NONE", "I will see you next week."],
        ["Monday · Friday · Saturday", "ON", "We are meeting on Monday."],
        ["two days · a week · an hour", "IN", "The bus leaves in ten minutes."],
        ["six o'clock · midday · night", "AT", "I will call you at seven o'clock."],
      ],
    },
    note: "The commonest errors:  “on tomorrow” ✗  ·  “in next week” ✗  ·  “on next Monday” ✗.  If it has “tomorrow” or “next”, it needs nothing.",
    notes: tn({
      time: "10 minutes.",
      how: "Drill the NONE group hardest, because that is where learners add something wrongly. Ten sentences with tomorrow and next week, all with no preposition.",
      mistakes: "All three errors in the note are transfer errors. Naming the cause — “your language uses a word here, English does not” — speeds up the fix.",
      extra: "This recycles Level 1 Module 2. The same three prepositions, now pointing forwards instead of backwards.",
      tip: "“In ten minutes” means ten minutes from now. Learners often read it as “during ten minutes”. Clarify it once with a clock.",
      activity: "Preposition or nothing: teacher calls a time expression, learners shout at, on, in or “nothing”. Thirty rounds.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — put it all together",
    sub: "The right form, the right choice, and the right preposition.",
    left: { h: "Correct", items: ["I am going to travel next month.", "The phone is ringing — I will answer it.", "We are meeting on Friday at six.", "She will not come tomorrow."] },
    right: { h: "Wrong", items: ["I going to travel in next month.", "The phone is ringing — I will to answer it.", "We are meeting on next Friday.", "She will not comes on tomorrow."] },
    note: "Four checks:  1 · are all the parts there?   2 · no “to” after will?   3 · base verb after both forms?   4 · the right preposition, or none at all?",
    notes: tn({
      time: "10 minutes.",
      how: "Take each wrong sentence and ask the class to name the errors. The last one has two — say so in advance.",
      mistakes: "The fourth sentence contains both an -s on the verb after “will” and a wrong preposition. It is a good final test.",
      extra: "Two more for pairs: “I will going to help you.” and “We are go to meet at four.”",
      tip: "These four checks are the marking standard for this module. Add them to the wall beside the Module 1 to 3 checks.",
      activity: "Error auction: teams bid on how many errors they can find in a set of six sentences.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — building “will”", sub: "One form, no changes, no “to”.", items: [
      { q: "Complete: “I ___ ___ you tomorrow.”  (call)", a: "I will call you tomorrow.", why: "“Will” never changes and the verb after it is always the base form. No -s, no “to”." },
      { q: "Make it negative: “She will come.”", a: "She will not come.  (or: She won't come.)", why: "“Not” goes after “will”. The short form “won't” sounds nothing like “will not”, so learn it separately." },
      { q: "Correct this: “I will to help you.”", a: "I will help you.", why: "There is no “to” after “will”. The error comes from “want to help” and “going to help”, which do have one." },
    ] },
    { title: "Guided examples 2 — building “going to”", sub: "Three parts, every time.", items: [
      { q: "Complete: “She ___ ___ ___ study medicine.”", a: "She is going to study medicine.", why: "Three parts: “is” for one person, then “going to”, then the base verb." },
      { q: "Make it a question: “They are going to travel.”", a: "Are they going to travel?", why: "“Are” moves in front of the subject, exactly as in Module 2. Nothing else changes." },
      { q: "Correct this: “I going to buy a phone.”", a: "I am going to buy a phone.", why: "The verb “to be” is missing. This is the same dropped-auxiliary error as Module 2." },
    ] },
    { title: "Guided examples 3 — which future?", sub: "Did the plan exist before you spoke?", items: [
      { q: "Someone knocks at the door. You say…", a: "I will open it.", why: "You are deciding at this moment, so “will”. There was no plan ten seconds ago." },
      { q: "You bought a ticket last week. You say…", a: "I am going to travel on Friday.", why: "The plan already existed — the ticket proves it. So “going to”." },
      { q: "You look at very dark clouds. You say…", a: "It is going to rain.", why: "You can SEE the evidence, so “going to”. If it were only your opinion, “I think it will rain” would be better." },
    ] },
    { title: "Guided examples 4 — time expressions", sub: "Preposition, or nothing at all?", items: [
      { q: "Complete: “I will see you ___ tomorrow.”", a: "I will see you tomorrow.  (no preposition)", why: "“Tomorrow” needs nothing before it. “On tomorrow” is a very common transfer error." },
      { q: "Complete: “We are meeting ___ Monday.”", a: "We are meeting on Monday.", why: "Days of the week take ON, exactly as in Level 1 Module 2." },
      { q: "Complete: “The bus leaves ___ ten minutes.”", a: "The bus leaves in ten minutes.", why: "IN means “from now”. It is not “during ten minutes” — it is ten minutes from this moment." },
    ] },
    { title: "Guided examples 5 — making arrangements", sub: "Suggest, fix the time, confirm.", items: [
      { q: "How do you suggest meeting on Saturday?", a: "Shall we meet on Saturday?", why: "“Shall we” is the most natural way to suggest something. Learn it as a fixed phrase." },
      { q: "Your friend says “Yes, good idea.” What next?", a: "What time is good for you?", why: "Fix the time before the place. Both are needed or the arrangement fails." },
      { q: "You agreed Saturday at four. How do you close?", a: "So, Saturday at four. See you then.", why: "Repeating the arrangement back prevents almost every misunderstanding. This move is the one learners forget." },
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
    title: "Making an arrangement",
    sub: "Sara and Mimi plan to meet at the weekend.",
    turns: [
      { who: "SARA", text: "Shall we meet on Saturday?", side: "l" },
      { who: "MIMI", text: "Yes, good idea. What time is good for you?", side: "r" },
      { who: "SARA", text: "I am going to study in the morning. Is four o'clock fine?", side: "l" },
      { who: "MIMI", text: "Four is fine. Where shall we meet?", side: "r" },
      { who: "SARA", text: "At the café near Piassa. I will bring my books.", side: "l" },
      { who: "MIMI", text: "So, Saturday at four at the café. See you then!", side: "r" },
    ],
    note: "Find them:  one “going to” (a plan)  ·  one “will” (a decision now)  ·  the four arrangement moves  ·  two prepositions.",
    notes: tn({
      time: "12 minutes.",
      how: "Listen books closed, chorus, pair reading, then perform with a real arrangement. The finding task afterwards makes the grammar visible inside real language.",
      mistakes: "Ask why Sara says “I am going to study” but “I will bring my books”. The first was already planned; the second is decided as she speaks. That single question is the module.",
      extra: "Change the day, the time and the place each time pairs repeat it.",
      tip: "The last line — the confirmation — is what makes this a real arrangement rather than a chat. Insist on it in every pair performance.",
      activity: "Three arrangements: every learner must arrange three real meetings with three different classmates, and write them in a diary.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Talking about plans for the future",
    sub: "Dawit and Hana talk about next year.",
    turns: [
      { who: "HANA", text: "What are your plans for next year, Dawit?", side: "l" },
      { who: "DAWIT", text: "I am going to finish my business course.", side: "r" },
      { who: "HANA", text: "That is good. Are you going to leave the coffee shop?", side: "l" },
      { who: "DAWIT", text: "No, I am not. I hope I will become the manager.", side: "r" },
      { who: "HANA", text: "I think you will. You work very hard.", side: "l" },
      { who: "DAWIT", text: "Thank you. And you? What are you going to do?", side: "r" },
    ],
    note: "Notice the two uses:  “going to” for the decided plans  ·  “will” for what they think and hope. Both appear naturally.",
    notes: tn({
      time: "12 minutes.",
      how: "After reading, ask learners to find all the “going to” forms and all the “will” forms, then say why each is used. Three of one and two of the other.",
      mistakes: "“I hope I will become” is the hope-plus-future pattern. Do not analyse it — teach the whole phrase.",
      extra: "Note Hana's “I think you will” — a prediction and an encouragement in three words. Drill it.",
      tip: "“What are your plans for next year?” is a genuine conversation opener that learners will use for the rest of their lives. Drill the whole question.",
      activity: "Plans interview: everyone asks three classmates about their plans for next year and reports one to the class.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful phrases for plans and arrangements",
    sub: "Six phrases that make any arrangement work.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaUsers", title: "“Shall we meet on …?”", desc: "The most natural way to suggest a meeting." },
      { icon: "FaClock", title: "“What time is good for you?”", desc: "Polite, and it lets the other person choose." },
      { icon: "FaCheck", title: "“That is fine.” / “That works for me.”", desc: "Two ways to agree to a time." },
      { icon: "FaTimes", title: "“Sorry, I am busy on Friday.”", desc: "How to say no politely. Always give the day." },
      { icon: "FaStar", title: "“I will let you know.”", desc: "When you cannot decide yet. Very useful." },
      { icon: "FaArrowRight", title: "“So, Saturday at four?”", desc: "The confirmation. Never skip this one." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill all six in chorus, then in pairs. Phrase 4 is the one learners most need and least have — refusing politely is hard in any second language.",
      mistakes: "Learners say “No” alone when they cannot meet, which sounds abrupt. Teach the fuller form with a reason.",
      extra: "Add “Can we make it later?” and “Does five o'clock suit you?” for a strong class.",
      tip: "Phrase 5 is the diplomatic escape. A learner who can say “I will let you know” avoids being forced into a commitment they do not want.",
      activity: "Refuse politely: half the class suggests meetings and the other half must refuse politely, giving a reason each time.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "ABEL", text: "______ we meet on Sunday?", side: "l" },
      { who: "YOU", text: "Sorry, I ______ ______ ______ visit my family on Sunday.", side: "r" },
      { who: "ABEL", text: "No problem. What about Monday?", side: "l" },
      { who: "YOU", text: "Monday ______ fine. What time?", side: "r" },
      { who: "ABEL", text: "______ four o'clock? I ______ bring the papers.", side: "l" },
      { who: "YOU", text: "Good. So, Monday ______ four. See you ______ .", side: "r" },
    ],
    note: "Use these:  “Shall”  ·  “am going to”  ·  “is”  ·  “At”  ·  “will”  ·  “at”  ·  “then”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps, then three pairs perform before you reveal the answers.",
      answers: "1 Shall · 2 am going to · 3 is · 4 At · 5 will · 6 at · 7 then",
      mistakes: "Gap 2 needs three words. Gap 5 is “will” because Abel is deciding as he speaks.",
      tip: "The refusal in the second line is the useful part. It gives a reason, which is what makes it polite.",
      activity: "Do it again with a different reason for refusing and a different day.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — plans and arrangements", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Tell your partner three plans", d: "Use “going to”. They already exist — no inventing on the spot." },
      { t: "Arrange to meet", d: "All four moves: suggest, time, place, confirm." },
      { t: "Refuse politely, then find another day", d: "Your partner suggests; you are busy; you offer an alternative." },
      { t: "Make three predictions about next year", d: "Use “I think … will …”." },
    ],
    notes: tn({
      time: "9 minutes for all four rounds.",
      how: "Round 1 is “going to” only, round 4 is “will” only. Keeping them separate first makes the mixed practice in the speaking section much easier.",
      mistakes: "Round 3 is the hardest socially, not grammatically. Some learners find refusing uncomfortable; model it warmly first.",
      tip: "Round 2 must end with the confirmation. If a pair skips it, make them do the round again.",
      activity: "Class diary: after round 2, collect all the arrangements and read three aloud. Errors surface immediately when read out.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — my plans", sub: "Three rounds. Everyone speaks.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "Three plans for this week", d: "“I am going to …” Real plans only." },
      { t: "Three plans for this year", d: "Bigger plans. Still real." },
      { t: "Three predictions for Ethiopia in ten years", d: "“I think … will …” Nobody knows, so nobody is wrong." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Rounds A and B use “going to”, round C uses “will”. The change of form is announced by the change of task, which teaches the difference without explanation.",
      mistakes: "In round C learners often keep using “going to”. Remind them: a prediction is not a plan.",
      extra: "Round C produces real opinions and is the most engaging. Give it extra time if the discussion takes off.",
      tip: "Insist on real plans in rounds A and B. Invented plans produce invented language and are forgotten immediately.",
      activity: "Class predictions: write the five most common predictions from round C on the board and vote on the most likely.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — fill your diary", sub: "Arrange five meetings with five different people.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Draw a diary for next week", d: "Seven days, morning and afternoon." },
      { t: "Choose three times when you are busy", d: "Write “busy” in those spaces. You must refuse them." },
      { t: "Arrange five meetings", d: "Move around the room. Use all four arrangement moves each time." },
      { t: "Write each arrangement down", d: "Day, time, place, person." },
      { t: "Report one to the class", d: "“I am meeting Sara on Tuesday at four at the café.”" },
    ],
    notes: tn({
      time: "15 minutes. This is the module's best activity — give it the time.",
      how: "The busy slots in step 2 are what force the polite refusal. Without them everybody agrees to everything and the hardest language never gets practised.",
      mistakes: "Learners agree to two meetings at the same time. That is fine — point it out and make them re-arrange one, which produces even more language.",
      extra: "For a strong class, add a rule: nobody may meet the same person twice.",
      tip: "This is noisy, physical and highly productive. Fifteen minutes generates more future-tense language than an hour of exercises.",
      activity: "Diary check: at the end, ask three learners to read their whole week aloud.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — “will” and “won't”, “going to” and “gonna”",
    sub: "What you write and what you hear are different. You must recognise both.",
    left: { h: "What is written", items: ["I will call you.", "I will not forget.", "I am going to travel.", "She is going to help."] },
    right: { h: "What you hear", items: ["“I'll call you.”", "“I won't forget.”", "“I'm gonna travel.”", "“She's gonna help.”"] },
    note: "Say the full forms yourself. But you MUST be able to hear the short ones, or you will not understand normal speech.",
    notes: tn({
      time: "10 minutes.",
      how: "Say each pair twice — full form then short form. Then say only short forms and have learners write the full version. That is the real skill.",
      mistakes: "“Won't” sounds nothing like “will not” and learners frequently mishear it as “want”. Drill won't and want as a minimal pair.",
      extra: "'ll is very quiet: “I'll” can sound almost like “I”. The only clue is the base verb that follows.",
      tip: "Do not ask learners to produce “gonna”. Teach them to recognise it. Producing the full form is clearer and always correct.",
      activity: "Short to full: teacher says ten short-form sentences, learners write them in full.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — role plays", sub: "Work in pairs. Two minutes per situation.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Arrange to study together this weekend", d: "All four moves, ending with the confirmation." },
      { t: "Your friend asks about your plans after this course", d: "Three “going to” plans and one “I hope I will …”." },
      { t: "Somebody needs help carrying something", d: "Offer immediately: “I will help you.”" },
      { t: "Cancel an arrangement and make a new one", d: "“I am sorry, I cannot come on Friday. Shall we meet on Saturday?”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Situation 3 practises the offer use of “will”, which learners rarely produce spontaneously. Situation 4 is the most useful in real life.",
      mistakes: "Situation 4 needs an apology, a reason and an alternative. Learners give only the apology. Model all three.",
      extra: "Situation 2 is the exam task in disguise. Give it the most time.",
      tip: "Give each pair one thing to listen for: the missing “to” after will, or the missing auxiliary in “going to”.",
      activity: "Perform two situations to the class and let the class identify which future form was used and why.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Three plans for this year", d: "“I am going to …”  Real plans." },
      { t: "One thing you are NOT going to do", d: "“I am not going to …”" },
      { t: "Three predictions", d: "“I think … will …”  About your town, your country or your family." },
      { t: "One promise", d: "“I will …”  Something you promise to do." },
      { t: "One arrangement", d: "“I am meeting … on … at …”  A real one if you have one." },
    ],
    notes: tn({
      time: "14 minutes including listening back.",
      how: "Record on a phone, or perform live to a partner who ticks the five steps.",
      mistakes: "Steps 1 and 3 test the choice between the forms. If a learner uses the same form for both, the module's central point has not landed.",
      answers: "SUCCESS CRITERIA: all five steps present · “going to” for steps 1, 2 and 5 · “will” for steps 3 and 4 · no “to” after will · all three parts of “going to” present.",
      tip: "Have them listen back once, checking only whether they used the right form for each step.",
      activity: "Keep every recording for the end-of-level comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — plans for the weekend", sub: "Listen twice. Write the plans and the times.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17.5, lsm: 1.36,
      text: "“Next weekend is going to be busy.\nOn Saturday morning I am going to visit my mother.\nIn the afternoon I am meeting my friend at three o'clock.\nOn Sunday I am going to study for the exam.\nI am not going to work at all.\nI think it will be a good weekend.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write the four things the speaker will do.",
      "Write the day and the time for each.",
      "Which sentence uses “will”, and why?",
      "The teacher reads it twice, at natural speed.",
    ] },
    notes: tn({
      time: "11 minutes.",
      how: "Read twice at natural pace. The third task is the important one: only the last sentence uses “will”, because it is an opinion rather than a plan.",
      mistakes: "Learners catch the activities but miss the days. Tell them both matter before they start.",
      extra: "Add a fifth line if the class is strong: “On Sunday evening I will probably watch football.”",
      answers: "Saturday morning — visit mother · Saturday afternoon 3:00 — meet friend · Sunday — study · not going to work. The last sentence uses “will” because it is a prediction, not a plan.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check the form and the preposition.",
    size: 17,
    items: [
      { q: "1 — Saturday morning", a: "She is going to visit her mother.", why: "A decided plan, so “going to”. And ON for a day, from Level 1." },
      { q: "2 — Saturday afternoon", a: "She is meeting her friend at three o'clock.", why: "The present continuous for a fixed arrangement with another person — the third future form." },
      { q: "3 — Sunday", a: "She is going to study for the exam.", why: "Another decided plan. Note “study for” — the preposition is part of the phrase." },
      { q: "4 — the negative", a: "She is not going to work at all.", why: "“Not” goes after “is”, before “going to”. “At all” makes the negative stronger." },
      { q: "5 — which uses “will”?", a: "“I think it will be a good weekend.”", why: "It is a prediction, not a plan. She cannot decide whether the weekend is good — she can only guess." },
    ],
    notes: keyNotes("Answer 5 is the diagnostic. If learners could not explain why the last sentence is different, the will/going-to contrast needs another lesson before the quiz."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — making an arrangement", sub: "Listen for the day, the time and the place.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.32,
      text: "MIMI:   Shall we meet on Friday?\nDAWIT:  Sorry, I am busy on Friday. I am going to help my brother.\nMIMI:   What about Saturday?\nDAWIT:  Saturday is fine. What time?\nMIMI:   Is two o'clock good?\nDAWIT:  Two is a little early. Shall we say four?\nMIMI:   Four is fine. Where shall we meet?\nDAWIT:  At the café near the bus station. I will bring the book." },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. Which day did Mimi suggest first?",
      "2. Why can Dawit not come that day?",
      "3. What day and time did they agree?",
      "4. Where are they going to meet?",
      "5. What is Dawit going to bring?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Read twice, changing your voice for the two speakers. Then ask learners to identify the four arrangement moves inside the dialogue.",
      mistakes: "Question 3 has two parts and the time changes during the conversation. Learners write the first time they hear.",
      extra: "Note “Shall we say four?” — a natural way to counter-offer a time. Drill it.",
      answers: "1 Friday. · 2 He is going to help his brother. · 3 Saturday at four o'clock. · 4 At the café near the bus station. · 5 The book.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Notice which future form each answer needs.",
    size: 17,
    items: [
      { q: "1 — the first suggestion", a: "She suggested Friday.", why: "“Shall we meet on Friday?” — ON for a day, and “shall we” is the suggestion phrase." },
      { q: "2 — why he cannot come", a: "He is going to help his brother.", why: "A plan that already existed, so “going to”. That is why it counts as a real reason." },
      { q: "3 — the agreed day and time", a: "Saturday at four o'clock.", why: "The time changed during the conversation. You have to listen to the end to get it right." },
      { q: "4 — the place", a: "At the café near the bus station.", why: "AT for a specific place. “Near” tells you where the café is." },
      { q: "5 — what he will bring", a: "He will bring the book.", why: "“Will”, because he decides it as he speaks — it was not part of the arrangement before." },
    ],
    notes: keyNotes("Answers 2 and 5 sit in one dialogue and use different forms for a reason. Ask the class why — that discussion is the best revision of the module."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to listen when someone makes an arrangement", sub: "Four things to catch, and one to always do.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaCalendarAlt", title: "Catch the DAY first", desc: "Days come early in an arrangement and everything else hangs on them." },
      { icon: "FaClock", title: "The time can change", desc: "People counter-offer: “Shall we say four?” Listen to the END, not the first time you hear." },
      { icon: "FaEye", title: "Catch the PLACE", desc: "It usually comes last and it is the part learners most often miss." },
      { icon: "FaCheck", title: "Always repeat it back", desc: "“So, Saturday at four at the café?” It takes three seconds and prevents every misunderstanding." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Habit 2 is the one that costs people real appointments. Demonstrate it: make an arrangement with a learner and change the time halfway through.",
      mistakes: "Learners write the first time they hear and stop listening. Making the time change in your demonstration proves the point better than saying it.",
      tip: "Habit 4 is not just a listening strategy — it is a life skill, and it uses the module's whole language in one sentence.",
      activity: "Changing plans: read three short arrangements in which the time changes, and check who caught the final version.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — Mimi's plans", sub: "Read it aloud twice before you answer.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 18.5, lsm: 1.36,
      text: "Next year Mimi is going to finish her course at the university.\nAfter that she is going to apply for a job at Ethiopian Airlines.\nShe is not going to stay in Adama. She is going to move to Addis Ababa.\nShe is meeting a friend from the airline next Tuesday.\nShe hopes she will pass the interview.\nI think she will get the job. She works very hard." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the whole text once.",
      "The class reads it together, in chorus.",
      "Then six learners read one line each.",
      "Underline the “going to” forms and circle the “will” forms.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Teacher, chorus, individuals, then the marking task. Four “going to” forms and two “will” forms — ask learners to explain the difference in each case.",
      mistakes: "“She is meeting a friend next Tuesday” is the arrangement form. Some learners will mark it as a mistake. Explain that it is the third future form, used for fixed plans with other people.",
      extra: "Note “apply for” — the preposition is part of the phrase, like “wait for” and “listen to”.",
      tip: "The last two lines are both “will” and both are opinions — one hers, one the writer's. That is the clearest possible illustration of the prediction use.",
      activity: "Rewrite it: learners write six lines about their own plans for next year, using the same shape.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE, using the correct future form.",
    items: [
      "What is Mimi going to finish next year?",
      "Where is she going to apply for a job?",
      "Is she going to stay in Adama?",
      "Who is she meeting next Tuesday?",
      "What does the writer think will happen?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Questions 1 to 4 need “going to” or the arrangement form. Question 5 needs “will”. That split is the assessment.",
      mistakes: "Question 3 needs a negative: “No, she is not.” Learners answer “No” alone.",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 She is going to finish her course. · 2 At Ethiopian Airlines. · 3 No, she is not. She is going to move to Addis Ababa. · 4 A friend from the airline. · 5 He/She thinks she will get the job.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Check the form in every answer.",
    size: 17,
    items: [
      { q: "1 — What is she going to finish?", a: "She is going to finish her course.", why: "A decided plan, so all three parts: is + going to + base verb." },
      { q: "2 — Where is she going to apply?", a: "She is going to apply for a job at Ethiopian Airlines.", why: "“Apply for” keeps its preposition, and the company name takes capitals." },
      { q: "3 — Is she going to stay?", a: "No, she is not. She is going to move to Addis Ababa.", why: "A full answer gives the negative and then the real information." },
      { q: "4 — Who is she meeting?", a: "She is meeting a friend from the airline.", why: "The present continuous for a fixed arrangement — the day is set and another person is involved." },
      { q: "5 — What does the writer think?", a: "He thinks she will get the job.", why: "“Will”, because it is an opinion about the future, not a plan. Nobody can plan another person's success." },
    ],
    notes: keyNotes("Answers 4 and 5 use two different future forms for two different reasons. If learners used “going to” for both, the three-way distinction needs more work."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a message about a meeting", sub: "A short written message, the kind you will really send.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 18, lsm: 1.34,
      text: "Hello Sara,\n\nI hope you are well. I am sorry, but I cannot meet you on Friday.\nI am going to travel to Gondar with my family that day.\nShall we meet next week instead?\nI am free on Monday and Wednesday afternoon.\nLet me know which day is good for you. I will bring the books.\n\nSee you soon,\nHana" },
    side: { label: "New words here", color: C.read, size: 16, items: [
      "instead — in place of the first plan",
      "free — not busy",
      "let me know — tell me",
      "Find the reason, the alternative and the offer.",
      "Which two future forms are used?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "This is a written message, so teach the shape: greeting, apology, reason, alternative, close. Learners will send messages like this in real life.",
      mistakes: "“Let me know” is a fixed phrase and very useful. Do not analyse it — drill it.",
      extra: "The two forms: “going to” for the travel plan, “will” for the offer to bring the books. Same pattern as the dialogues.",
      tip: "Point out how polite this message is: apology, reason, alternative, offer. That structure works in any language and it is worth naming.",
      activity: "Write a reply: every learner writes a short reply choosing one of the two days and confirming.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — questions, answers and vocabulary review", sub: "Answer first, then check.",
    size: 17,
    items: [
      { q: "1 — Why can Hana not meet on Friday?", a: "She is going to travel to Gondar with her family.", why: "A decided plan, so “going to”. A real reason, given politely." },
      { q: "2 — What does she suggest instead?", a: "She suggests meeting next week.", why: "“Shall we … instead?” — the suggestion phrase plus the new word." },
      { q: "3 — Which days is she free?", a: "She is free on Monday and Wednesday afternoon.", why: "ON for days. Note that both days are given, so the other person can choose." },
      { q: "4 — What is she going to bring?", a: "She will bring the books.", why: "“Will”, because it is an offer decided as she writes — not part of the original plan." },
      { q: "5 — Vocabulary check: name the five words from this module.", a: "tomorrow · plan · meet · hope · next", why: "All five appeared in this module. Three are in this message — find them again." },
    ],
    notes: keyNotes("Question 4 is the diagnostic: an offer uses “will”, even inside a message about plans. If learners wrote “is going to bring”, revisit the offer use on slide 5."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — will or going to?", sub: "Choose the correct form and write the full sentence.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write each sentence with the correct future form.",
    items: [
      "1.  I bought a ticket. I ______ (travel) on Friday.",
      "2.  The phone is ringing. I ______ (answer) it.",
      "3.  Look at the sky. It ______ (rain).",
      "4.  That bag is heavy. I ______ (help) you.",
      "5.  She decided last week. She ______ (study) medicine.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Every item gives the evidence before the gap. Learners must read the first sentence to choose correctly — that is the skill.",
      answers: "1 am going to travel · 2 will answer · 3 is going to rain · 4 will help · 5 is going to study",
      mistakes: "Item 3 is the evidence case: the sky is visible, so “going to”. Learners often choose “will” because it feels like a prediction.",
      tip: "Read the first half of each item aloud and ask “decided before, or deciding now?” before revealing the answer.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — “My plans for next year”", sub: "The Level 2 writing task. Eight sentences.",
    panelW: 7.6,
    panel: { label: "Write eight sentences using this frame", color: C.write, tint: C.writeTint, size: 18.5, lsm: 1.44,
      text: "Next year I am going to ______________.\nI am also going to ______________.\nI am not going to ______________.\nIn ______ months I am going to ______________.\nI am meeting ______________ on ______________.\nI hope I will ______________.\nI think ______________ will ______________.\nIt is going to be a ______________ year." },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Are all three parts of “going to” there?",
      "Is the verb after “will” in its base form, with no “to”?",
      "Did you use “will” for the hopes and predictions?",
      "Are the time expressions correct — with or without a preposition?",
      "Capital letters and full stops?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "The frame deliberately mixes the forms: five “going to”, two “will”, one arrangement. Learners produce all three without being told to.",
      mistakes: "Line 6 and 7 must use “will”. Learners fill them with “going to” because the previous lines did.",
      extra: "Fast finishers add two more sentences with a different time expression each.",
      tip: "Collect these and keep them. The same task appears in the Level 2 exam.",
      activity: "Swap and check: partners underline every future form and mark whether the right one was chosen.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write a message", sub: "Cancel an arrangement and suggest a new one.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write six lines. Use the shape from the reading text.",
    items: [
      "1.  Start:  “Hello ______,”",
      "2.  Say you cannot meet, and give the day.",
      "3.  Give a real reason, using “going to”.",
      "4.  Suggest another day with “Shall we …?”",
      "5.  Say which days you are free.",
      "6.  Offer to bring or do something, using “will”. Then close.",
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Show the shape on the board first. The content is entirely revision; only the message format is new.",
      mistakes: "Line 3 must use “going to” and line 6 must use “will”. That contrast inside one short message is the assessment.",
      answers: "MODEL: “Hello Dawit, / I am sorry, but I cannot meet you on Tuesday. I am going to visit my mother that day. Shall we meet on Thursday instead? I am free on Thursday and Friday afternoon. I will bring the notes. / See you soon, Sara”",
      tip: "This is a genuinely useful piece of writing. Learners will send this message in real life, in English or not.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answer and why", sub: "Six lines, two future forms, one polite shape.",
    size: 17,
    items: [
      { q: "Line 1 — the greeting", a: "Hello Dawit,", why: "A comma after the name. Capital letter on the name." },
      { q: "Lines 2–3 — the apology and reason", a: "I am sorry, but I cannot meet you on Tuesday. I am going to visit my mother that day.", why: "“Going to” because the plan already existed — that is what makes it a real reason." },
      { q: "Line 4 — the alternative", a: "Shall we meet on Thursday instead?", why: "“Shall we” suggests; “instead” signals it replaces the first plan. ON for the day." },
      { q: "Line 5 — your free days", a: "I am free on Thursday and Friday afternoon.", why: "Giving two options is more polite than one — it lets the other person choose." },
      { q: "Line 6 — the offer and close", a: "I will bring the notes. See you soon.", why: "“Will” for the offer, decided as you write. No “to” after will." },
    ],
    notes: keyNotes("The contrast between line 3 and line 6 is the whole module in one message. Read both aloud and ask the class why they are different."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist for this module", sub: "Add these to your Modules 1–3 checks.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "Are all three parts of “going to” there?", d: "am / is / are  +  going to  +  base verb. None can be missing." },
      { t: "Is there NO “to” after “will”?", d: "“I will help.” — never “I will to help.”" },
      { t: "Did you choose the right form?", d: "Decided before → going to.  Deciding now, hoping, predicting → will." },
      { t: "Is the time expression right?", d: "tomorrow and next week take NO preposition. Days take ON. Clock times take AT." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points, then have learners check their message against all four.",
      tip: "The wall now has sixteen checks across four Level 2 modules. Refer to them by number when marking.",
      activity: "Deliberate error hunt: write four sentences on the board with exactly four errors, one of each type.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Which is correct?", opts: "a) I will to help.     b) I will help.     c) I will helping." },
      { q: "2. Complete: “She ___ going to study medicine.”", opts: "a) am     b) is     c) are" },
      { q: "3. The phone is ringing. What do you say?", opts: "a) I am going to answer it.     b) I will answer it.     c) I answer it." },
      { q: "4. Which is correct?", opts: "a) on tomorrow     b) in tomorrow     c) tomorrow" },
      { q: "5. Complete: “We are meeting ___ Friday.”", opts: "a) at     b) on     c) in" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 c · 5 b",
      tip: "Question 3 is the diagnostic for the will/going-to choice. Question 4 is the diagnostic for the preposition rule.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Write the missing words.",
    color: C.green, instruction: "Copy each sentence and fill the gaps.", size: 18,
    items: [
      "1.  I ______ ______ ______ travel next month.  (plan)",
      "2.  She ______ not ______ ______ come.  (plan)",
      "3.  I ______ call you tonight.  (promise)",
      "4.  ______ you ______ ______ study tomorrow?  (plan, question)",
      "5.  I think it ______ rain.  (prediction)",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "The word in brackets tells learners which form to use. Do item 1 together, then let them work alone.",
      answers: "1 am going to · 2 is not going to · 3 will · 4 Are ... going to · 5 will",
      mistakes: "Item 2 needs four words in the right order: is + not + going + to. Learners write “is going not to”.",
      tip: "Items 3 and 5 are single-word gaps because “will” is one word. Point that out — it is the easier of the two forms to build.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Situations, forms and time expressions.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the SITUATION to the FORM", opts: "1. You bought a ticket.     2. The phone rings.     3. Dark clouds.     4. You promise." },
      { q: "a) will     b) going to     c) going to     d) will", opts: "(Two of each — think about the reason each time.)" },
      { q: "Part 2 — match the EXPRESSION to the PREPOSITION", opts: "1. Monday     2. six o'clock     3. two days     4. next week          a) in     b) nothing     c) on     d) at" },
      { q: "Part 3 — match the PHRASE to its USE", opts: "1. “Shall we meet?”     2. “I am busy.”     3. “I will let you know.”     4. “So, Saturday at four?”" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Part 1 is the hardest because two answers are the same. Have learners justify each choice aloud.",
      answers: "Part 1: 1–b (plan existed), 2–a (deciding now), 3–c (visible evidence), 4–d (promise).  ·  Part 2: 1–c, 2–d, 3–a, 4–b.  ·  Part 3: 1 suggest, 2 refuse, 3 delay, 4 confirm.",
      tip: "Part 2 is pure Level 1 revision with a future meaning. Learners should get all four.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — make the sentence", sub: "Build a full future sentence from the words.",
    color: C.green, instruction: "Write the full sentence with the correct form.", size: 18,
    items: [
      "1.  I / going to / visit / my sister / next week",
      "2.  she / will / help / you / tomorrow",
      "3.  they / not / going to / come / on Sunday",
      "4.  we / meeting / at four o'clock / on Friday",
      "5.  I think / it / will / be / a good year",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Do item 1 together. Item 3 needs the negative in the right place and item 4 needs the auxiliary added.",
      answers: "1 I am going to visit my sister next week. · 2 She will help you tomorrow. · 3 They are not going to come on Sunday. · 4 We are meeting at four o'clock on Friday. · 5 I think it will be a good year.",
      mistakes: "Item 4 is missing “are” in the word list. Learners must notice it is needed — that is the test.",
      tip: "Item 5 contains “will be”, which learners find odd because “be” is the verb they know best in other forms. Drill “will be”.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each sentence has one or more errors.",
    color: C.green, instruction: "Rewrite each sentence correctly.", size: 18,
    items: [
      "1.  I will to call you tomorrow.",
      "2.  She going to study medicine.",
      "3.  We are meeting on next Friday.",
      "4.  He will comes at six o'clock.",
      "5.  I am going travel to Gondar.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each sentence. All have one.",
      answers: "1 I will call you tomorrow. · 2 She is going to study medicine. · 3 We are meeting next Friday. · 4 He will come at six o'clock. · 5 I am going to travel to Gondar.",
      mistakes: "Sentences 1 and 5 are opposite errors: one adds “to” where none belongs, the other drops it where it does. Point out the contrast.",
      tip: "Have learners count the errors before correcting. Counting forces careful reading.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  “Will” changes for he, she and it.",
      "2.  There is no “to” after “will”.",
      "3.  “Going to” needs am, is or are.",
      "4.  We say “on tomorrow”.",
      "5.  “Won't” is the short form of “will not”.",
      "6.  We use “will” for a plan we made last week.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test.",
      answers: "1 F — it never changes · 2 T · 3 T · 4 F — just “tomorrow” · 5 T · 6 F — a plan made before now takes “going to”",
      tip: "Item 6 is the choice rule stated as a fact. If learners mark it true, the contrast needs another lesson.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Answer in a full sentence.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What are you going to do tomorrow?",
      "2.  What are your plans for next year?",
      "3.  What do you think will happen in your town in ten years?",
      "4.  What are you NOT going to do this week?",
      "5.  Are you meeting anybody this week? When and where?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Items 1, 2 and 4 need “going to”, item 3 needs “will”, item 5 needs the arrangement form. All three forms in one exercise.",
      answers: "1 I am going to ___ tomorrow. · 2 I am going to ___. · 3 I think ___ will ___. · 4 I am not going to ___. · 5 I am meeting ___ on ___ at ___.",
      mistakes: "Item 3 is the only prediction. Learners use “going to” because the four around it do.",
      tip: "Ask three learners to read items 2 and 3 aloud one after the other. The form change is audible.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Say five plans using “going to”.",
      "2.  Make five predictions using “I think … will …”.",
      "3.  Arrange to meet, using all four moves.",
      "4.  Refuse an invitation politely, give a reason, and suggest another day.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Give each partner a listening job: task 1 check all three parts of “going to”, task 2 check there is no “to” after will.",
      answers: "SUCCESS CRITERIA: 1 five plans with all three parts · 2 five predictions with “will” and no “to” · 3 all four moves including the confirmation · 4 apology, reason and alternative.",
      tip: "Task 4 is the hardest socially. Model it warmly before pairs begin.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These use everything from this module.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write six sentences about next year: four plans and two predictions.", opts: "Use the right form for each." },
      { q: "2. Correct this:  “I will to travel in next month. My brother going to come with me.”", opts: "There are three things to fix." },
      { q: "3. Write a five-line message cancelling a meeting and suggesting another day.", opts: "Use both future forms." },
      { q: "4. Choose the form and say why:  a ticket bought · a knock at the door · dark clouds · a promise.", opts: "Four situations, two forms." },
      { q: "5. Write three sentences with time expressions: one with no preposition, one with ON, one with IN.", opts: "Three sentences." },
    ],
    notes: tn({
      time: "14 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard.",
      answers: "2 “I will travel next month. My brother is going to come with me.” — no “to” after will, no preposition before “next month”, and the missing auxiliary. 4 ticket → going to (plan existed) · knock → will (deciding now) · clouds → going to (evidence) · promise → will.",
      tip: "Question 4 asks for the reason, not just the form. The reason is what shows understanding.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why does English have two ways to talk about the future?", opts: "What extra information does the choice give the listener?" },
      { q: "2. Your friend says “I will to help you.” How would you explain the mistake?", opts: "Why is the error so easy to make?" },
      { q: "3. “I am going to rain” — why is this wrong, but “It is going to rain” correct?", opts: "Who or what does the raining?" },
      { q: "4. Which future form do you think you will use most? Why?", opts: "Think about what you actually talk about." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning, then give the English phrase for what they said.",
      answers: "1 The choice tells the listener whether the plan already existed or is being decided now, which changes how they should respond. 2 Because “going to” and “want to” both have “to”, so learners generalise. 3 “I” cannot rain — English needs the dummy subject “it” for weather, as in Level 1 Module 4. 4 Probably “going to”, because most future talk is about plans; but “will” for offers and promises is used constantly in service and work situations.",
      tip: "Question 3 links back to Level 1 and shows learners that old rules keep applying inside new grammar.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · “will”", items: [
      { q: "1. Which is correct?", opts: "a) I will to go.     b) I will go.     c) I will goes." },
      { q: "2. What is the short form of “will not”?", opts: "Write the word." },
      { q: "3. Make it a question: “She will come.”", opts: "Write the full sentence." },
      { q: "4. The phone is ringing. Write what you say.", opts: "One sentence." },
    ] },
    { part: "Part 2 · “going to”", items: [
      { q: "5. Complete: “I ___ ___ ___ travel next week.”", opts: "Three words." },
      { q: "6. Which is correct?", opts: "a) She going to study.     b) She is going to study.     c) She is going study." },
      { q: "7. Make it negative: “They are going to come.”", opts: "Write the full sentence." },
      { q: "8. Make it a question: “You are going to work.”", opts: "Write the full sentence." },
    ] },
    { part: "Part 3 · Choosing the form", items: [
      { q: "9. You bought a ticket last week. Which form?", opts: "a) will     b) going to" },
      { q: "10. Someone knocks at the door. Which form?", opts: "a) will     b) going to" },
      { q: "11. You look at dark clouds. Which form?", opts: "a) will     b) going to" },
      { q: "12. You make a promise. Which form?", opts: "a) will     b) going to" },
    ] },
    { part: "Part 4 · Time expressions and listening", items: [
      { q: "13. Complete: “I will see you ___ tomorrow.”", opts: "a) on     b) in     c) nothing" },
      { q: "14. Complete: “We are meeting ___ Monday.”", opts: "a) on     b) in     c) at" },
      { q: "15. Listen: what day and time did they agree?", opts: "Write both." },
      { q: "16. Listen: what is the speaker going to do on Sunday?", opts: "Full sentence." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write two plans for next year.", opts: "Use “going to”." },
      { q: "18. Write one prediction.", opts: "Use “I think … will …”." },
      { q: "19. Write one sentence suggesting a meeting.", opts: "Use “Shall we …?”" },
      { q: "20. SPEAKING: arrange a meeting with your partner, using all four moves.", opts: "Your teacher or partner listens and checks." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 4 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nFOR QUESTIONS 15 AND 16, READ ALOUD: “Shall we meet on Saturday at four? … Yes, Saturday at four is fine. On Sunday I am going to study for the exam.”",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — which is correct?", a: "b) I will go.", why: "“Will” takes the base verb with no “to” and no -s. It never changes for any person." },
      { q: "Q2 — short form of “will not”", a: "won't", why: "It sounds nothing like “will not”, so it must be learned separately or you will not recognise it in speech." },
      { q: "Q3 — question from “She will come.”", a: "Will she come?", why: "“Will” moves in front of the subject. The base verb does not change." },
      { q: "Q4 — the phone is ringing", a: "I will answer it.", why: "You are deciding at this moment, so “will”. There was no plan a second ago." } ],
    [ { q: "Q5 — “I ___ ___ ___ travel next week.”", a: "am going to", why: "Three parts: the verb “to be”, then “going to”, then the base verb." },
      { q: "Q6 — which is correct?", a: "b) She is going to study.", why: "Option a) drops the auxiliary; option c) drops the “to”. All three parts are needed." },
      { q: "Q7 — negative of “They are going to come.”", a: "They are not going to come.", why: "“Not” goes after “are”, before “going to”." },
      { q: "Q8 — question from “You are going to work.”", a: "Are you going to work?", why: "“Are” moves in front of the subject, exactly as in Module 2." } ],
    [ { q: "Q9 — a ticket bought last week", a: "b) going to", why: "The plan already existed before you spoke. The ticket is the proof." },
      { q: "Q10 — a knock at the door", a: "a) will", why: "You are deciding as you speak. There was no plan to open the door." },
      { q: "Q11 — dark clouds", a: "b) going to", why: "You can SEE the evidence. If it were only an opinion, “I think it will rain” would be better." },
      { q: "Q12 — a promise", a: "a) will", why: "A promise is made at the moment of speaking, so it takes “will”." } ],
    [ { q: "Q13 — “I will see you ___ tomorrow.”", a: "c) nothing", why: "“Tomorrow” takes no preposition. “On tomorrow” is a very common transfer error." },
      { q: "Q14 — “We are meeting ___ Monday.”", a: "a) on", why: "Days of the week take ON, exactly as in Level 1 Module 2." },
      { q: "Q15 — the agreed day and time", a: "Saturday at four o'clock.", why: "AT for a clock time, ON for the day. Both are in the agreement." },
      { q: "Q16 — Sunday", a: "He/She is going to study for the exam.", why: "A decided plan, so all three parts of “going to”." } ],
    [ { q: "Q17 — two plans", a: "e.g. “I am going to finish this course. I am going to look for a job.”", why: "Marked on all three parts of “going to” appearing in both sentences." },
      { q: "Q18 — a prediction", a: "e.g. “I think the weather will be good next week.”", why: "“Will” for an opinion about the future, with no “to” after it." },
      { q: "Q19 — suggesting a meeting", a: "e.g. “Shall we meet on Saturday?”", why: "“Shall we” is the natural suggestion phrase, and ON for the day." },
      { q: "Q20 — speaking task", a: "Suggest · fix the time · fix the place · confirm", why: "Marked on all four moves, especially the confirmation, which learners most often skip." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q9 to Q12 are the diagnostic block: they test the choice between the two forms in four different situations. A learner who gets all four has understood the module. If the class failed them, redo slide 7 before Module 5."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Out loud.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Say five plans for the week", d: "“I am going to …” All three parts, out loud." },
      { t: "Say five predictions", d: "“I think … will …” About the weather, football, your town." },
      { t: "Practise the four arrangement moves", d: "Suggest · time · place · confirm. Five times, alone or with a partner." },
      { t: "Write ten time expressions", d: "Five with a preposition, five with none." },
      { t: "Make one real arrangement in English", d: "With a classmate, by message. Confirm it back." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday and Tuesday deliberately separate the two forms. Doing them on different days stops learners mixing them while the distinction is still new.",
      tip: "Friday's task takes the language outside the classroom, and the confirmation step is the one that proves it worked.",
      activity: "Ask learners to send one classmate a real arrangement in English each evening.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write “My plans for next year” — eight sentences", d: "Use the frame from slide 47. Five “going to”, two “will”, one arrangement." },
      { t: "Write a message cancelling a meeting", d: "Six lines: greeting, apology, reason with “going to”, alternative, free days, offer with “will”." },
      { t: "Record your two-minute speaking challenge", d: "Three plans · one negative · three predictions · one promise · one arrangement." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 2 is the most useful piece of writing in the module. Show your own example so the standard is visible.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording personally, by voice. Listen specifically for whether the right form was chosen in each of the five parts.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaPencilAlt", title: "Eight sentences — 8 marks", desc: "Eight written (2) · all three parts of “going to” (3) · “will” used for the hopes and predictions (2) · time expressions correct (1)." },
      { icon: "FaEnvelope", title: "The message — 7 marks", desc: "Six lines in the right order (2) · “going to” for the reason (2) · “will” for the offer (2) · polite shape (1)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five parts (3) · correct form chosen for each (4) · no “to” after will (2) · understandable (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework. Choosing the right form carries the most marks — that tells learners exactly what matters.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Mark only what has been taught. Do not penalise past-tense errors here.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaStar", title: "“will” + base verb", desc: "One form for everyone. No “to”, no -s. Short form: 'll and won't." },
      { icon: "FaTasks", title: "“going to” + base verb", desc: "Three parts: am/is/are + going to + verb." },
      { icon: "FaQuestion", title: "Choosing between them", desc: "Decided before → going to. Deciding now, hoping, predicting → will." },
      { icon: "FaUsers", title: "The arrangement form", desc: "“I am meeting Sara at six.” Fixed time, another person." },
      { icon: "FaCalendarAlt", title: "Time expressions", desc: "tomorrow and next week take NOTHING. Days take ON. Times take AT." },
      { icon: "FaComments", title: "The four arrangement moves", desc: "Suggest · fix the time · fix the place · confirm it back." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2 and read the objectives again. Ask the same question you asked at the start.",
      tip: "Ask each learner to name the one thing they found hardest. That list is your plan for the first ten minutes of Module 5.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaStar", title: "will", desc: "I will go · she will go · they will go\nNegative: will not  →  won't\nQuestion: Will you go?\nNever “will to”. Never “wills”." },
      { icon: "FaTasks", title: "going to", desc: "I am going to go\nshe is going to go\nthey are going to go\nNegative: is NOT going to\nQuestion: Are you going to …?" },
      { icon: "FaQuestion", title: "Which one?", desc: "Plan made BEFORE now  →  going to\nDeciding RIGHT NOW  →  will\nEvidence you can see  →  going to\nOpinion, hope, promise, offer  →  will" },
      { icon: "FaCalendarAlt", title: "Time expressions", desc: "tomorrow · tonight · next week  →  NO preposition\non Monday · on Friday  →  ON\nin two days · in a week  →  IN\nat six o'clock  →  AT" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it.",
      tip: "Print it as an A4 poster beside the Module 1 to 3 posters. Four tenses on the wall is now the core of Level 2.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now talk about the past, the present and the future — the whole time line.",
    sub: "Four tenses, and the ability to make a real arrangement with another person.\nThat is enough English to organise your life in it, not just describe it.",
    chips: ["NEXT — Module 5", "Questions & Keeping a Conversation", "Ask about anything, in any tense"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the achievement: four tenses covers the whole time line. Point out that they can now organise something with another person entirely in English, which is a real functional milestone.",
      tip: "Preview Module 5: it adds no new tenses at all. It teaches learners to ask questions in every tense they already know — which is what turns a speaker into a conversationalist.",
      activity: "Ask every learner to state one plan and one prediction before they leave.",
    }),
  });
};
