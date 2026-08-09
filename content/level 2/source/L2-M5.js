"use strict";
/* LEVEL 2 · MODULE 5 — Questions & Keeping a Conversation   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 2", levelNo: LV.no, levelName: "Elementary\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Questions & Keeping a Conversation",
    sub: "No new tenses. This module teaches you to ask about everything you already know how to say — which is what turns a speaker into a conversationalist.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5", v: "NEW VERBS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by asking one learner eight questions in a row, quickly, in four different tenses. Then say: “That was a conversation — but only one of us was making it. This month you learn to ask, not only answer.”",
      tip: "Say clearly that there is no new tense in this module. After four tense modules that is welcome news, and it lets learners focus entirely on word order.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all about asking rather than answering.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Ask a question in any tense you know", d: "Present, past, future, continuous — one pattern covers them all." },
      { t: "Use the six question words correctly", d: "what · where · when · who · why · how" },
      { t: "Ask “how much”, “how many”, “how often” and “how long”", d: "Four questions that get very different answers." },
      { t: "Give short answers", d: "“Yes, I do.”  “No, she didn't.”  “Yes, they are.”" },
      { t: "Keep a conversation going for two minutes", d: "With follow-up questions, not just answers." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask “Can you do this now?” Objective 5 is the real goal — say that a two-minute conversation is the test of everything in Level 2 so far.",
      tip: "Return to this slide at the end of the module and ask again.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: ask me anything", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaQuestion", title: "1 · Three questions for me", desc: "Ask your teacher three questions. Any tense, any topic. Just try." },
      { icon: "FaUsers", title: "2 · Three for your partner", desc: "Ask the person beside you three questions about their life." },
      { icon: "FaClock", title: "3 · Count", desc: "How many questions did you ask? How many did you answer? Which was easier?" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Task 3 is the diagnostic and it usually surprises learners: almost everyone finds answering easier than asking. Naming that imbalance is the point of the whole module.",
      mistakes: "Correct nothing in the warm-up. Note the word-order errors — they are what slide 6 fixes.",
      tip: "Write three of the learners' own question attempts on the board and leave them there. You will correct them together on slide 6, which is far more powerful than correcting invented sentences.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "A conversation needs two people asking, not one person answering.",
    sub: "You can already describe your life in four tenses. But if you only answer, the other person does all the work — and the conversation stops.\nOne word-order pattern lets you ask about everything you can already say.",
    chips: ["No new tenses", "One question pattern", "Six question words"],
    notes: tn({
      time: "5 minutes.",
      how: "Demonstrate a one-sided conversation: ask a learner five questions and let them answer each one with a full sentence and nothing more. It dies visibly. Then do it again with them asking back.",
      mistakes: "Learners believe asking is harder because they must produce the structure rather than react to it. That is true — which is why it needs a whole module.",
      tip: "The encouraging fact: one pattern covers every tense. Learners do not have to learn four question systems, only one word order applied four times.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.table({
    sec: SEC.con, title: "The six question words", sub: "Each one asks for a different kind of answer.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 17.5, headSize: 16, colW: [2.2, 3.0, 3.2, 3.733],
      rows: [
        ["Word", "Asks about", "Question", "Answer"],
        ["What", "a thing", "What is your job?", "I am a nurse."],
        ["Where", "a place", "Where do you live?", "In Gondar."],
        ["When", "a time", "When did you arrive?", "Last night."],
        ["Who", "a person", "Who is your teacher?", "Chaltu."],
        ["Why", "a reason", "Why are you late?", "Because the bus was full."],
        ["How", "a way or manner", "How do you go to work?", "By bus."],
      ],
    },
    note: "“Why” is answered with “because”. That pair — why and because — should always be taught together.",
    notes: tn({
      time: "12 minutes.",
      how: "Drill the word and the kind of answer together. Say an answer and have learners produce the question word: “In Gondar” → “Where”. Twenty rounds.",
      mistakes: "“Who” and “What” are confused when asking about people versus things. And “How” has several uses — how, how much, how often — which come on slide 8.",
      extra: "Ask five learners a real question with each word. Real answers make the words memorable.",
      tip: "Give every learner a card with the six words. In a conversation, glancing at six words is enough to keep asking.",
      activity: "Answer first: teacher gives an answer, learners produce a possible question. “By bus.” → “How do you go to work?”",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the pattern
  L.table({
    sec: SEC.con, title: "The one pattern — for every tense", sub: "Question word · helping verb · person · main verb.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 17, headSize: 16, colW: [2.6, 2.4, 2.2, 2.6, 2.333],
      rows: [
        ["Tense", "QW", "Helper", "Person", "Verb"],
        ["Present simple", "Where", "do", "you", "live?"],
        ["Present simple", "What time", "does", "she", "start?"],
        ["Present continuous", "What", "are", "you", "doing?"],
        ["Past simple", "Where", "did", "they", "go?"],
        ["Future", "When", "will", "he", "come?"],
        ["“to be”", "Where", "were", "you", "— (no verb)"],
      ],
    },
    note: "The helping verb ALWAYS comes before the person. That is the whole rule.  “Where you live?” is missing the helper.",
    notes: tn({
      time: "14 minutes. This is the most important slide in the module.",
      how: "Return to the learners' own question attempts on the board from the warm-up. Fit each one into the four columns and find what is missing. Correcting their own language is far more powerful than correcting invented examples.",
      mistakes: "Two errors dominate: the missing helper (“Where you live?”) and the wrong order (“Where you do live?”). Both are transfer errors — Amharic marks questions differently.",
      extra: "Build ten questions across all five tenses using the four columns. Learners see that only the helper changes.",
      tip: "This is the single table to photograph. Four columns, five tenses, one rule — it is the whole of English question formation on one slide.",
      activity: "Four-column cards: give learners word cards and have them physically build questions in the right order. Twenty questions per pair.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — yes/no
  L.table({
    sec: SEC.con, title: "Yes / no questions — just remove the question word", sub: "Same pattern, one part shorter.",
    table: {
      color: C.green, rowH: 0.46, fontSize: 17.5, headSize: 16, colW: [3.0, 4.2, 4.933],
      rows: [
        ["Tense", "Question", "Short answer"],
        ["Present simple", "Do you live in Gondar?", "Yes, I do. / No, I don't."],
        ["Present continuous", "Are you working today?", "Yes, I am. / No, I'm not."],
        ["Past simple", "Did she come yesterday?", "Yes, she did. / No, she didn't."],
        ["Future", "Will they help us?", "Yes, they will. / No, they won't."],
        ["“to be”", "Was it expensive?", "Yes, it was. / No, it wasn't."],
      ],
    },
    note: "The short answer repeats the HELPER, not the main verb.  “Did you go?”  →  “Yes, I did.”  — never “Yes, I went.”",
    notes: tn({
      time: "12 minutes.",
      how: "Drill the question and its short answer as a pair, always. A learner who can ask but not answer briefly sounds abrupt; one who can only give full answers sounds slow.",
      mistakes: "“Yes, I went” instead of “Yes, I did” is understandable and common. It is not wrong exactly, but the short answer is what a native speaker expects.",
      extra: "Drill all five tenses in one round: five questions, five short answers, thirty seconds.",
      tip: "Short answers are the fastest route to sounding natural. Two words — “Yes, I do” — do more for fluency than a long correct sentence.",
      activity: "Question and answer chain: learner 1 asks, learner 2 gives a short answer and asks the next person a different question.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — the how family
  L.table({
    sec: SEC.con, title: "The “how” family", sub: "Four questions that look similar and get very different answers.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [3.0, 3.6, 5.533],
      rows: [
        ["Question", "Asks about", "Example and answer"],
        ["How much …?", "price, or an amount you cannot count", "How much is it? — Forty birr."],
        ["How many …?", "a number of things you can count", "How many brothers do you have? — Two."],
        ["How often …?", "frequency", "How often do you go? — Twice a week."],
        ["How long …?", "length of time", "How long did it take? — Three hours."],
      ],
    },
    note: "MUCH for things you cannot count: money, water, rice, time.   MANY for things you can count: brothers, books, birr notes.",
    notes: tn({
      time: "12 minutes.",
      how: "The much/many split is the countable/uncountable rule from Level 1 Module 4 returning. Say so — learners have met it before and will recognise it.",
      mistakes: "“How much brothers” and “How many money” are the errors. Drill twenty nouns, sorting them into much and many.",
      extra: "Also useful: “How far is it?” and “How old are you?” — both are “how” questions with fixed answers.",
      tip: "“How much is it?” is already known from Level 1 Module 2. Point that out and build the other three around it.",
      activity: "Much or many: teacher says a noun, learners shout which one. Thirty rounds, fast.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — subject questions
  L.compare({
    sec: SEC.con, title: "One special case — asking about the SUBJECT",
    sub: "When “who” or “what” is the person doing the action, there is no helper at all.",
    left: { h: "Asking about the subject — NO helper", items: ["Who came to the party?", "Who wants coffee?", "What happened yesterday?", "Who told you that?"] },
    right: { h: "Asking about anything else — helper needed", items: ["Who did you see?", "What do you want?", "What did you do yesterday?", "Who did you tell?"] },
    note: "Test it: if the answer is the person DOING the action, no helper. “Who came?” — “Sara came.” Sara did the coming.",
    notes: tn({
      time: "12 minutes.",
      how: "Compare the pairs directly: “Who came?” and “Who did you see?” Same question word, different structure, because in the first the answer is the doer.",
      mistakes: "Learners over-apply the helper rule and produce “Who did come?”. It is a logical error — they have learned the pattern well and are applying it everywhere.",
      extra: "“What happened?” from Module 3 is a subject question. Point back to it — learners have been using one correctly for a month.",
      tip: "Do not over-teach this. Give the test question, drill five examples, and move on. Learners meet subject questions constantly and absorb them with exposure.",
      activity: "Who came, who did you see: read ten questions and have learners say whether each needs a helper.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — keeping it going
  L.grid({
    sec: SEC.con, title: "Keeping a conversation going", sub: "Four moves that stop a conversation dying.",
    cols: 4, color: C.green, titleSize: 19, descSize: 15,
    items: [
      { icon: "FaComments", title: "1 · Answer, then ask back", desc: "“I am from Gondar. And you?”\n\nThe simplest move. Never fails." },
      { icon: "FaQuestion", title: "2 · Ask for detail", desc: "“Where in Gondar?”\n“What kind of work?”\n\nUses what they just said." },
      { icon: "FaStar", title: "3 · React", desc: "“Really?”  “That is interesting.”\n\nShows you are listening." },
      { icon: "FaArrowRight", title: "4 · Change the topic", desc: "“By the way, did you…?”\n\nWhen the subject is finished." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Demonstrate a conversation using only move 1, then one using all four. The second lasts three times longer and sounds completely different.",
      mistakes: "Move 3 is the one learners skip because it feels like it adds no information. But without it the speaker cannot tell whether they are being listened to, and they stop.",
      extra: "More reactions: “Oh really?” “That sounds good.” “I see.” “Me too.”",
      tip: "Move 2 is the most powerful because it proves you listened. It also requires no new language — just a question word plus something they already said.",
      activity: "Two-minute conversation: pairs must talk for two minutes using all four moves. Nobody may be silent for more than three seconds.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "ask", ipa: "/ɑːsk/", pos: "verb", icon: "FaQuestion",
      meaning: "To say something to get information from someone.",
      example: "Can I ask you a question? She asked me about my job.",
      mistake: "You ask a PERSON, and you ask ABOUT a topic: “ask me”, “ask about the price”. Do not say “ask to me”. The past is regular: asked, one syllable.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the two patterns together: ask someone, and ask about something. Both are needed constantly.",
        mistakes: "“Ask to me” is a transfer error. English does not use “to” here, though many languages do.",
        extra: "ask a question · ask for help · ask about the price · ask someone their name.",
        tip: "“Can I ask you a question?” is a complete, polite opener that learners can use in any situation. Drill it as one phrase.",
        activity: "Everyone asks the teacher one question, beginning with “Can I ask you…?”" }) },

    { word: "answer", ipa: "/ˈɑːnsə/", pos: "verb and noun", icon: "FaComments",
      meaning: "To say something back when someone asks you. Also: the thing you say.",
      example: "Please answer the question. I do not know the answer.",
      mistake: "The W is SILENT — say /ˈɑːnsə/, not “ans-wer”. And you answer a question directly: “answer the question”, not “answer to the question”.",
      notes: tn({ time: "6 minutes.",
        how: "Write the word and cross out the w. Silent letters must be shown, not explained.",
        mistakes: "Both the silent w and the extra “to”. Fix the sound first, then the preposition.",
        extra: "Other silent-letter words met so far: listen, know, write, hour, half.",
        tip: "This word is the pair to “ask”. Teach and test them together — the module is about both halves of a conversation.",
        activity: "Ask and answer: in pairs, one asks five questions and the other must answer all five in full sentences." }) },

    { word: "understand", ipa: "/ˌʌndəˈstænd/", pos: "verb", icon: "FaLightbulb",
      meaning: "To know what something means.",
      example: "I do not understand. Do you understand the question?",
      mistake: "Irregular in the past: understand → UNDERSTOOD. And it is not normally used in the continuous — say “I understand”, not “I am understanding”.",
      notes: tn({ time: "6 minutes.",
        how: "Teach the negative first — “I do not understand” — because that is the sentence learners need most urgently and most often.",
        mistakes: "The continuous form appears because learners have just learned Module 2. Say briefly that some verbs about thinking and feeling stay simple, and move on.",
        extra: "Sorry, I do not understand · I understand now · Do you understand? · I did not understand the question.",
        tip: "This is one of the most useful verbs in the whole course for a learner's own survival. Give it the full six minutes.",
        activity: "Deliberate confusion: say something complicated and require every learner to respond with a correct “I do not understand” sentence." }) },

    { word: "mean", ipa: "/miːn/", pos: "verb", icon: "FaBookOpen",
      meaning: "To have a particular meaning.",
      example: "What does “busy” mean? It means you have a lot to do.",
      mistake: "The question is “What does it mean?” — never “What means it?” or “What it means?”. The past is irregular: meant, said /ment/.",
      notes: tn({ time: "7 minutes.",
        how: "Drill the question as a fixed phrase, because the word order is the exact pattern from slide 6: question word, helper, person, verb.",
        mistakes: "“What means this?” is a direct translation and very common. It is the missing-helper error inside the most useful question in the module.",
        extra: "What does it mean? · What does “busy” mean? · I mean … (used to explain yourself).",
        tip: "This question plus “How do you say … in English?” from Level 1 gives learners two tools to grow their own vocabulary in any conversation.",
        activity: "Word hunt: teacher says five unknown words and learners must ask “What does ___ mean?” correctly each time." }) },

    { word: "repeat", ipa: "/rɪˈpiːt/", pos: "verb", icon: "FaRedo",
      meaning: "To say something again.",
      example: "Can you repeat that, please? She repeated the question.",
      mistake: "Stress on the SECOND syllable: re-PEAT. And it is regular in the past: repeated — three syllables, with the extra beat because it ends in t.",
      notes: tn({ time: "6 minutes.",
        how: "Drill the whole polite request — “Can you repeat that, please?” — rather than the verb alone. That is how it is used.",
        mistakes: "“Repeated” is a good test of the -ed syllable rule from Module 3: it ends in t, so it gets the extra beat.",
        extra: "Can you repeat that? · Sorry, can you say that again? · One more time, please.",
        tip: "This phrase was in Level 1. It returns here as a verb they can now conjugate. Point out the progression.",
        activity: "Speak too quietly on purpose. Learners must ask you to repeat, politely, five times." }) },
  ];
  VOCAB.forEach((v, i) => {
    L.vocab({
      sec: Object.assign({}, SEC.voc, { label: "Vocabulary " + (i + 1) + " of 5" }),
      title: "New verb: " + v.word, sub: "Word · pronunciation · meaning · example · common mistake",
      word: v.word, ipa: v.ipa, pos: v.pos, icon: v.icon,
      meaning: v.meaning, example: v.example, mistake: v.mistake,
      color: C.vocab, tint: C.vocabTint, inkCol: C.vocabInk, notes: v.notes,
    });
  });

  // ============================================================ 16 · GRAMMAR 1
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 1 of 5" }),
    title: "Rule 1 — the helper comes before the person",
    sub: "This one rule covers every tense you know.",
    left: { h: "Correct", items: ["Where do you live?", "What is she doing?", "When did they arrive?", "Why will he come?"] },
    right: { h: "Wrong", items: ["Where you live?", "What she is doing?", "When they did arrive?", "Why he will come?"] },
    note: "Statement:  you  LIVE  in Gondar.      Question:  Where  DO  you  live?      The helper appears and jumps in front of the person.",
    notes: tn({
      time: "12 minutes.",
      how: "Use cards. Write “you”, “do”, “live” on three cards and physically swap the first two. Learners see the operation instead of memorising a rule.",
      mistakes: "The right-hand column shows two different errors: the missing helper and the helper in the wrong place. Both are frequent and both need naming.",
      extra: "Build twenty questions across all four tenses. Only the helper changes; the order never does.",
      tip: "This is the same rule as Level 1's “Are you a student?” Point back to it — learners have been doing this correctly for months with “to be”.",
      activity: "Statement to question: teacher says a statement, learner produces the question within three seconds. Thirty rounds across all tenses.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — which helper for which tense",
    sub: "Five tenses, five helpers. The order stays the same.",
    table: {
      color: C.gram, rowH: 0.44, fontSize: 17.5, headSize: 16, colW: [3.6, 2.6, 5.933],
      rows: [
        ["Tense", "Helper", "Example"],
        ["Present simple", "do / does", "Where do you work?  ·  What does she want?"],
        ["Present continuous", "am / is / are", "What are you doing?"],
        ["Past simple", "did", "Where did you go?"],
        ["Future with will", "will", "When will they come?"],
        ["Future with going to", "am / is / are", "What are you going to do?"],
        ["The verb “to be”", "am/is/are/was/were", "Where were you?  ·  Is she a nurse?"],
      ],
    },
    note: "After do, does and did, the main verb is always the BASE form. After am, is and are, it keeps its -ing.",
    notes: tn({
      time: "12 minutes.",
      how: "Drill one question per tense, six in a row, then repeat. Learners hear that only one word changes each time.",
      mistakes: "“Does she works?” and “Did you went?” are the double-marking errors from Modules 1 and 3 returning inside questions. Same fix, same explanation.",
      extra: "Give a statement and ask for the question in three different tenses, so learners must choose the helper.",
      tip: "The last row is the exception learners forget: the verb “to be” IS the helper and needs no other. “Where were you?” has no “did”.",
      activity: "Helper race: teacher says a tense and a subject, learners produce the helper. Thirty rounds.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — short answers repeat the helper",
    sub: "Two words. Never the main verb.",
    table: {
      color: C.gram, rowH: 0.44, fontSize: 17.5, headSize: 16, colW: [4.2, 3.8, 4.133],
      rows: [
        ["Question", "Yes", "No"],
        ["Do you work here?", "Yes, I do.", "No, I don't."],
        ["Does she live in Adama?", "Yes, she does.", "No, she doesn't."],
        ["Did they come?", "Yes, they did.", "No, they didn't."],
        ["Are you studying?", "Yes, I am.", "No, I'm not."],
        ["Will he help?", "Yes, he will.", "No, he won't."],
        ["Was it expensive?", "Yes, it was.", "No, it wasn't."],
      ],
    },
    note: "Never “Yes, I work.” or “Yes, I went.”  The short answer always repeats the HELPER from the question.",
    notes: tn({
      time: "10 minutes.",
      how: "Drill it as a rapid pair exercise: you ask, the class answers short. Thirty questions in two minutes, across all six rows.",
      mistakes: "Repeating the main verb is the commonest error and it makes the answer sound heavy. It is understood, but the short form is what a listener expects.",
      extra: "The negative short forms — don't, doesn't, didn't, won't, wasn't — are used almost always in speech. Drill them.",
      tip: "Short answers are the single fastest fluency gain available at this level. Two words instead of a full sentence, and it sounds far more natural.",
      activity: "Rapid fire: teacher asks twenty yes/no questions around the class, each learner answering in two words only.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — how much, how many, how often, how long",
    sub: "Four questions, four kinds of answer.",
    left: { h: "Correct", items: ["How much money do you have?", "How many brothers do you have?", "How often do you go to Addis?", "How long does it take?"] },
    right: { h: "Wrong", items: ["How many money do you have?", "How much brothers do you have?", "How much do you go to Addis?", "How much time it takes?"] },
    note: "MUCH = you cannot count it (money, water, rice, time).   MANY = you can count it (brothers, books, hours).",
    notes: tn({
      time: "10 minutes.",
      how: "Sort twenty nouns into two columns on the board with the class. The countable/uncountable idea is from Level 1 Module 4 — remind them and it comes back quickly.",
      mistakes: "The fourth wrong sentence has two errors: “much” with a countable noun and a missing helper. Point out both.",
      extra: "Answers to drill: “Not much.” “About five.” “Twice a week.” “Two hours.” Each question type has its own answer shape.",
      tip: "“How often” is the most useful of the four for conversation, because it invites a fuller answer than a number.",
      activity: "Four questions: every learner asks three classmates one of each of the four types and writes the answers.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — put it all together",
    sub: "The right helper, the right order, the right main verb.",
    left: { h: "Correct", items: ["Where does she work?", "What did you do yesterday?", "How many children do they have?", "Who came to the meeting?"] },
    right: { h: "Wrong", items: ["Where she works?", "What did you did yesterday?", "How much children they have?", "Who did came to the meeting?"] },
    note: "Four checks:  1 · is the helper there?   2 · is it before the person?   3 · is the main verb in the right form?   4 · much or many?",
    notes: tn({
      time: "10 minutes.",
      how: "Take each wrong sentence and ask the class to name the errors. Sentences 2 and 3 have two each — say so in advance.",
      mistakes: "The fourth is the subject-question exception from slide 9: “Who came?” needs no helper, so adding “did” is wrong.",
      extra: "Two more for pairs: “What time she starts?” and “How long did it took?”",
      tip: "These four checks are the marking standard for this module. Add them to the wall beside the Modules 1–4 checks.",
      activity: "Error auction: teams bid on how many errors they can find in a set of six questions.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — building the question", sub: "Question word, helper, person, verb.", items: [
      { q: "Make a question about the place: “She lives in Gondar.”", a: "Where does she live?", why: "“Does” is the helper for the present simple with “she”, and the main verb goes back to its base form." },
      { q: "Make a question about the time: “They arrived at six.”", a: "When did they arrive?", why: "“Did” is the past helper, and “arrived” returns to “arrive”. The past is marked only on the helper." },
      { q: "Correct this: “What you are doing?”", a: "What are you doing?", why: "The helper “are” must come before the person “you”. The learner has kept statement order." },
    ] },
    { title: "Guided examples 2 — choosing the helper", sub: "The tense tells you which one.", items: [
      { q: "Present simple, “he”:  “___ he work here?”", a: "Does he work here?", why: "Present simple with he, she or it takes “does” — and the main verb loses its -s." },
      { q: "Past simple:  “___ you see her?”", a: "Did you see her?", why: "“Did” for any person in the past, and “saw” returns to “see”." },
      { q: "Verb “to be”, past:  “___ you at home?”", a: "Were you at home?", why: "The verb “to be” IS the helper. It needs no “did” — it simply moves to the front." },
    ] },
    { title: "Guided examples 3 — short answers", sub: "Repeat the helper, not the verb.", items: [
      { q: "“Do you work on Saturday?”  Answer yes.", a: "Yes, I do.", why: "The short answer repeats “do”, the helper from the question. Never “Yes, I work.”" },
      { q: "“Did she come yesterday?”  Answer no.", a: "No, she didn't.", why: "Repeat “did” in its negative short form. Never “No, she didn't came.”" },
      { q: "“Are they studying?”  Answer yes.", a: "Yes, they are.", why: "The helper here is “are”, so that is what the short answer repeats." },
    ] },
    { title: "Guided examples 4 — much, many, often, long", sub: "Can you count it?", items: [
      { q: "Complete: “How ___ money do you have?”", a: "How much money do you have?", why: "Money cannot be counted — you count notes and coins, not money itself. So “much”." },
      { q: "Complete: “How ___ students are in the class?”", a: "How many students are in the class?", why: "Students can be counted, so “many”. Note the helper here is “are”." },
      { q: "Ask about frequency: “I go to Addis twice a year.”", a: "How often do you go to Addis?", why: "“How often” asks about frequency. The answer is a number of times, not an amount." },
    ] },
    { title: "Guided examples 5 — keeping it going", sub: "Answer, then move the conversation forward.", items: [
      { q: "They say “I am from Hawassa.” What do you say?", a: "“Where in Hawassa?”  or  “I am from Gondar. And you — do you like Hawassa?”", why: "Ask for detail on what they just said. It proves you listened and it needs no new language." },
      { q: "They say “I work at a bank.” What do you say?", a: "“Really? Do you like it?”", why: "React first, then ask. The reaction shows you are listening; the question keeps it going." },
      { q: "The topic is finished. How do you change it?", a: "“By the way, did you go to the meeting yesterday?”", why: "“By the way” signals a new topic politely. Without it a topic change sounds abrupt." },
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
    title: "Meeting a new colleague",
    sub: "Hana asks Yonas about his job. Notice how many questions she asks.",
    turns: [
      { who: "HANA", text: "How long have you worked here? Sorry — when did you start?", side: "l" },
      { who: "YONAS", text: "I started in January. And you?", side: "r" },
      { who: "HANA", text: "Two years ago. What do you do exactly?", side: "l" },
      { who: "YONAS", text: "I work with customers. Do you know the bank in Piassa?", side: "r" },
      { who: "HANA", text: "Yes, I do. How often do you go there?", side: "l" },
      { who: "YONAS", text: "Twice a week. Really, it is a good job.", side: "r" },
    ],
    note: "Count them: five questions in six lines. That is what a real conversation looks like — and both people ask.",
    notes: tn({
      time: "12 minutes.",
      how: "After reading, have learners count the questions and identify the helper in each. Then note that Yonas asks back twice — the conversation is balanced.",
      mistakes: "Hana corrects herself in line 1, which is deliberate: it models what a real speaker does when a question comes out wrong. Point that out — self-correction is a skill, not a failure.",
      extra: "Change the workplace: a school, a clinic, a shop, a hotel.",
      tip: "The ratio matters more than the grammar here. Five questions in six lines is the target for the pair practice.",
      activity: "Question count: pairs hold a two-minute conversation and count how many questions each person asked. Aim for at least four each.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "When you do not understand",
    sub: "Mimi is asking about a form at the bank.",
    turns: [
      { who: "MIMI", text: "Excuse me, can I ask you a question?", side: "l" },
      { who: "CLERK", text: "Yes, of course.", side: "r" },
      { who: "MIMI", text: "What does this word mean?", side: "l" },
      { who: "CLERK", text: "It means the money you pay every month.", side: "r" },
      { who: "MIMI", text: "Sorry, I do not understand. Can you repeat that, please?", side: "l" },
      { who: "CLERK", text: "Of course. It is the money you pay each month.", side: "r" },
    ],
    note: "Four survival tools in six lines:  “Can I ask you a question?”  ·  “What does this mean?”  ·  “I do not understand.”  ·  “Can you repeat that?”",
    notes: tn({
      time: "12 minutes.",
      how: "Drill all four phrases before reading, then read the dialogue so learners see them working together in one real situation.",
      mistakes: "Learners go silent instead of using these phrases. The habit forms early and it is what this dialogue exists to break.",
      extra: "Add “Can you write it, please?” from Level 1 for a fifth tool.",
      tip: "Note that the clerk simplifies his answer the second time. That is what happens in real life when you ask — you get a better explanation, not the same one.",
      activity: "Deliberately unclear: give instructions too fast and too quietly. Learners must use all four phrases to get the information.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Twelve questions that work in any conversation",
    sub: "Learn these and you can talk to anyone, about anything.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 17.5, descSize: 14,
    items: [
      { icon: "FaUser", title: "About them", desc: "“Where are you from?”\n“What do you do?”\n“How long have you been here?”" },
      { icon: "FaClock", title: "About routines", desc: "“What time do you start?”\n“How often do you go?”\n“Do you work at weekends?”" },
      { icon: "FaHistory", title: "About the past", desc: "“What did you do at the weekend?”\n“Where did you go?”\n“Did you enjoy it?”" },
      { icon: "FaCalendarAlt", title: "About the future", desc: "“What are your plans?”\n“What are you going to do?”\n“Shall we meet on …?”" },
      { icon: "FaComments", title: "To keep it going", desc: "“And you?”\n“Really?”\n“Where exactly?”" },
      { icon: "FaQuestion", title: "When you are stuck", desc: "“What does it mean?”\n“Can you repeat that?”\n“Sorry, I do not understand.”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Drill all eighteen phrases in chorus by group. It takes four minutes and it is the most useful four minutes in Level 2.",
      mistakes: "Learners know these individually but do not use them together. Grouping them by purpose is what makes them retrievable in a real conversation.",
      extra: "Every one of these uses a tense the learners already know. Point that out — nothing here is new except the confidence to ask.",
      tip: "Print this slide as a card. It is the complete conversational toolkit for Level 2 and it fits on one page.",
      activity: "Card conversation: give each learner the printed card and have them hold a five-minute conversation using at least eight of the questions.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "SARA", text: "______ do you work?", side: "l" },
      { who: "YOU", text: "At a school near Piassa. ______ ______ ?", side: "r" },
      { who: "SARA", text: "I work at the hospital. ______ ______ you start?", side: "l" },
      { who: "YOU", text: "At eight o'clock. ______ you work on Saturday?", side: "r" },
      { who: "SARA", text: "Yes, I ______ . But not on Sunday.", side: "l" },
      { who: "YOU", text: "______ often do you work at the weekend?", side: "r" },
    ],
    note: "Use these:  “Where”  ·  “And you”  ·  “What time do”  ·  “Do”  ·  “do”  ·  “How”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps, then three pairs perform before you reveal the answers.",
      answers: "1 Where · 2 And you · 3 What time do · 4 Do · 5 do · 6 How",
      mistakes: "Gap 5 is the short answer and needs only the helper. Learners write “work”.",
      tip: "Gap 2 is the ask-back move. Without it the conversation would be an interview, not a conversation.",
      activity: "Do it again with real jobs and real times.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — the two-minute conversation", sub: "Four rounds. This is the test of Level 2 so far.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Two minutes, any topic", d: "No silence longer than three seconds. Count your questions afterwards." },
      { t: "Two minutes — you may only ASK", d: "Your partner may only answer. Then swap. Much harder than it sounds." },
      { t: "Two minutes using all four moves", d: "Answer and ask back · ask for detail · react · change the topic." },
      { t: "Two minutes with a new partner", d: "It will be easier than round 1. Notice the difference." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Round 2 is the valuable one: forcing one learner to only ask exposes exactly how few question forms they have available. Swap after one minute so both experience it.",
      mistakes: "In round 1 most pairs will produce four or five questions in total. By round 4 they should produce ten or more. Count both and tell them the numbers.",
      tip: "Round 4 with a new partner always goes better. Point that out afterwards — improvement inside twelve minutes is real evidence that practice works.",
      activity: "Question tally: appoint one learner per group to count questions. Publish the totals on the board.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the question drill", sub: "Statement in, question out. Three rounds.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "Present simple", d: "Teacher: “She works in a bank.” Learner: “Where does she work?”" },
      { t: "Past simple", d: "Teacher: “They went to Gondar.” Learner: “Where did they go?”" },
      { t: "Mixed tenses", d: "Teacher gives any tense. Learner must choose the right helper. This is the real test." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Round C is the assessment. Learners must identify the tense before they can choose the helper, which is the whole skill of the module.",
      mistakes: "Under time pressure learners revert to statement order. Give three seconds per question — enough to think, not enough to translate.",
      extra: "Add the future and the continuous in round C so all five helpers appear.",
      tip: "Sixty seconds of this drill at the start of every remaining lesson in Level 2. It costs nothing and it is the highest-value routine in the module.",
      activity: "Question tennis: pairs alternate — one makes a statement, the other makes a question, then swap.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — find someone who", sub: "Ask everybody. Write one name for each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "… wakes up before five o'clock", d: "“Do you wake up before five?”" },
      { t: "… went to Addis Ababa last year", d: "“Did you go to Addis Ababa last year?”" },
      { t: "… is going to travel next month", d: "“Are you going to travel next month?”" },
      { t: "… speaks three languages", d: "“Do you speak three languages?”" },
      { t: "… was born in Gondar", d: "“Were you born in Gondar?”" },
    ],
    notes: tn({
      time: "14 minutes. The best activity in the module.",
      how: "Learners must stand and move. Each item needs a different helper — do, did, are, do, were — so the activity drills the whole system without feeling like a drill.",
      mistakes: "Learners drop the helper when they get excited. Circulate and correct on the spot, briefly.",
      extra: "Add three more items of your own about your specific class.",
      tip: "Insist that learners ask the full question, not just say the words on the card. The whole point is producing the question form.",
      activity: "Report back: three learners report their findings using the third person, which adds the -s from Module 1.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the voice goes UP or DOWN",
    sub: "Intonation tells the listener what kind of question you asked.",
    left: { h: "Voice goes UP ↗ — yes/no questions", items: ["Do you work here? ↗", "Is she a nurse? ↗", "Did you go? ↗", "Are you coming? ↗"] },
    right: { h: "Voice goes DOWN ↘ — question-word questions", items: ["Where do you work? ↘", "What is her job? ↘", "When did you go? ↘", "Why are you late? ↘"] },
    note: "Say both kinds with a flat voice and they sound rude, even when the words are perfect. The voice does half the work.",
    notes: tn({
      time: "10 minutes.",
      how: "Say each question twice — once with correct intonation, once flat — and ask which sounds friendlier. Learners hear it immediately even if they cannot yet produce it.",
      mistakes: "Amharic marks questions differently, so learners often produce flat English questions. The words are right and the listener still hears something odd. Naming the cause helps.",
      extra: "Use your hand as a pitch line: move it up for yes/no, down for question-word. Learners copy the gesture and the voice follows.",
      tip: "This matters more than it looks. A flat question can sound like a demand, which affects how a learner is treated in a shop, a clinic or an interview.",
      activity: "Up or down: teacher says ten questions with only the intonation, using “da da da”. Learners say which type each one is.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — role plays", sub: "Work in pairs. Two minutes per situation.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "A job interview — you are the interviewer", d: "Ask eight questions across at least three tenses." },
      { t: "You meet a new neighbour", d: "Find out five things about them. Ask back every time." },
      { t: "You do not understand a form at the bank", d: "Use all four survival phrases." },
      { t: "A friend came back from a journey", d: "Ask six questions about what happened." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Situation 1 forces question production with no answering at all, which is exactly what learners avoid. Give it first.",
      mistakes: "Situation 4 requires past questions throughout — expect “Did you went?” and correct at the end.",
      extra: "Situation 1 is a genuine preview of Level 3, where the mock interview is the capstone. Say so.",
      tip: "Give each pair one thing to listen for: the missing helper, or the main verb form after did.",
      activity: "Perform two situations to the class and let the class count the questions asked.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Ask five questions in the present", d: "Mix “do” and “does”. Different question word each time." },
      { t: "Ask three questions in the past", d: "All with “did”. Check the base verb." },
      { t: "Ask two questions about the future", d: "One with “will”, one with “going to”." },
      { t: "Ask one “how much”, one “how many” and one “how often”", d: "Three questions." },
      { t: "Give five short answers", d: "Your partner asks; you answer in two words each time." },
    ],
    notes: tn({
      time: "14 minutes including listening back.",
      how: "This challenge is entirely questions, which is unusual and deliberate. Learners spend most of their speaking time answering; this reverses it.",
      mistakes: "Step 2 is where “Did you went?” appears. Step 5 is where the main verb creeps into the short answer.",
      answers: "SUCCESS CRITERIA: fourteen questions in total · a helper present and in the right place in every one · base verb after do, does and did · short answers of two words only.",
      tip: "Have them listen back once, counting only whether every question has a helper before the person.",
      activity: "Keep every recording for the end-of-level comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — an interview", sub: "Listen twice. Write the questions you hear.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.32,
      text: "A:  Where do you work?\nB:  At a hotel in Bahir Dar.\nA:  How long did you work there?\nB:  For three years.\nA:  What did you do exactly?\nB:  I worked at the reception desk.\nA:  Are you going to stay in Bahir Dar?\nB:  No, I am not. I am going to move to Addis Ababa.\nA:  How often do you visit Addis?\nB:  About twice a year." },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write all five questions.",
      "Write the helper in each one.",
      "Which tense is each question in?",
      "The teacher reads it twice, at natural speed.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Read twice, changing your voice for the two speakers. Writing the questions rather than the answers is the point — learners always listen for answers and rarely notice the question forms.",
      mistakes: "Question 2 uses a form learners have not formally met. Accept “How long did you work there?” as written and do not analyse the tense.",
      extra: "Ask which helper appeared most. “Do” and “did” both appear twice.",
      answers: "1 Where do you work? (do, present) · 2 How long did you work there? (did, past) · 3 What did you do exactly? (did, past) · 4 Are you going to stay? (are, future) · 5 How often do you visit? (do, present)",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check the helper and the position in each one.",
    size: 17,
    items: [
      { q: "1 — the first question", a: "Where do you work?  (helper: do · present simple)", why: "The helper comes before the person, and “work” stays in its base form." },
      { q: "2 — about the length of time", a: "How long did you work there?  (helper: did · past)", why: "“How long” asks about a period of time. “Did” carries the past, so “work” is the base form." },
      { q: "3 — about the job itself", a: "What did you do exactly?  (helper: did · past)", why: "“Do” appears twice — once as the helper, once as the main verb. That is correct, though it looks strange." },
      { q: "4 — about the future", a: "Are you going to stay in Bahir Dar?  (helper: are · future)", why: "With “going to” the helper is am, is or are — the verb “to be”, exactly as in Module 4." },
      { q: "5 — about frequency", a: "How often do you visit Addis?  (helper: do · present)", why: "“How often” asks about frequency, and the answer is a number of times, not an amount." },
    ],
    notes: keyNotes("Question 3 is the one that confuses learners — “did you do” has the verb twice. Say plainly that this is correct and very common, and drill it as a phrase."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — short answers", sub: "Listen and write the short answer you hear.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.34,
      text: "1.  “Do you live in Adama?”  —  “Yes, I do.”\n2.  “Did she come yesterday?”  —  “No, she didn't.”\n3.  “Are they working today?”  —  “Yes, they are.”\n4.  “Will he help us?”  —  “No, he won't.”\n5.  “Was the bus expensive?”  —  “No, it wasn't.”\n6.  “Does your brother speak English?”  —  “Yes, he does.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write each short answer exactly as you hear it.",
      "Then write the helper used in the question.",
      "Notice: the answer always repeats the helper.",
      "The teacher reads each pair twice.",
    ] },
    notes: tn({
      time: "11 minutes.",
      how: "Read each question-and-answer pair twice. The point is the match between the two — learners should see that the answer is predictable from the question.",
      mistakes: "The negative short forms are fast and quiet in speech: didn't, won't, wasn't. Learners often miss the negative entirely and write the positive.",
      extra: "After marking, cover the answers and have learners produce them from the questions alone.",
      answers: "1 Yes, I do. (do) · 2 No, she didn't. (did) · 3 Yes, they are. (are) · 4 No, he won't. (will) · 5 No, it wasn't. (was) · 6 Yes, he does. (does)",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "The answer always repeats the helper from the question.",
    size: 16, cols: 2,
    items: [
      { q: "1 — “Do you live in Adama?”", a: "Yes, I do.", why: "Repeat the helper “do”, never the verb “live”." },
      { q: "2 — “Did she come yesterday?”", a: "No, she didn't.", why: "“Didn't” is the negative of the helper “did”." },
      { q: "3 — “Are they working today?”", a: "Yes, they are.", why: "The helper is “are”, so the answer repeats it." },
      { q: "4 — “Will he help us?”", a: "No, he won't.", why: "“Won't” is the short form of “will not”." },
      { q: "5 — “Was the bus expensive?”", a: "No, it wasn't.", why: "“The bus” becomes “it” in the answer." },
      { q: "6 — “Does your brother speak English?”", a: "Yes, he does.", why: "“Your brother” becomes “he”, and the helper “does” is repeated." },
    ],
    notes: keyNotes("Answers 5 and 6 also require changing the noun to a pronoun — “the bus” to “it”, “your brother” to “he”. That is a second skill hidden inside the short answer."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to hear a question", sub: "Four clues that tell you a question is coming.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaQuestion", title: "The question word comes first", desc: "Where, what, when, who, why, how — if you catch it, you know what kind of answer is wanted." },
      { icon: "FaVolumeUp", title: "The helper comes second", desc: "Do, does, did, is, are, will, was. Catching it tells you the tense immediately." },
      { icon: "FaArrowRight", title: "The voice goes up or down", desc: "Up means yes or no. Down means they want information. The tune tells you before the words finish." },
      { icon: "FaHandPaper", title: "If you miss it, ask", desc: "“Sorry, can you repeat that?” is always better than guessing and answering the wrong question." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Read ten questions at natural speed and ask learners only for the question word and the helper — not the meaning. They will catch far more than they expect.",
      mistakes: "Learners try to understand the whole question before responding and lose it. The first two words are usually enough to know what is being asked.",
      tip: "Clue 3 is genuinely useful in noisy places: even when the words are unclear, the rise or fall tells you what kind of answer to give.",
      activity: "First two words: read fifteen questions and have learners write only the first two words of each.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — an interview in a newspaper", sub: "Read it aloud twice before you answer.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 17.5, lsm: 1.32,
      text: "Q:  Where do you live now?\nA:  I live in Addis Ababa, but I am from Jimma.\n\nQ:  What do you do?\nA:  I am a coffee trader. I buy coffee from farmers.\n\nQ:  How long have you done this work?\nA:  I started in 2015.\n\nQ:  Are you going to open a shop?\nA:  Yes, I am. I am going to open one next year." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the questions; the class reads the answers.",
      "Then swap: the class asks, the teacher answers.",
      "Underline the helper in every question.",
      "Which tense is each question in?",
    ] },
    notes: tn({
      time: "11 minutes.",
      how: "The read-aloud swap is important: learners spend most of their time producing answers, so making them read the questions aloud is the point of the exercise.",
      mistakes: "Question 3 uses a form not yet formally taught. Read it as a fixed phrase and do not analyse it — learners will meet it properly in Level 3.",
      extra: "Ask learners to write two more questions they would ask this trader.",
      tip: "An interview is the ideal text for this module because it is nothing but questions and answers. Point out how few statements there are.",
      activity: "Interview a classmate: learners write four questions in the same style and interview a partner, writing the answers.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE about the man in the interview.",
    items: [
      "Where does he live now?",
      "Where is he from?",
      "What does he do?",
      "When did he start this work?",
      "What is he going to do next year?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Every answer needs a third-person verb, which recycles Module 1's -s. Four different tenses appear across the five questions.",
      mistakes: "Question 3 needs “He is a coffee trader” — the article is easy to drop.",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 He lives in Addis Ababa. · 2 He is from Jimma. · 3 He is a coffee trader. · 4 He started in 2015. · 5 He is going to open a shop.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Four tenses in five answers. Check each one.",
    size: 17,
    items: [
      { q: "1 — Where does he live?", a: "He lives in Addis Ababa.", why: "Present simple with the -s from Module 1, because the question used “does”." },
      { q: "2 — Where is he from?", a: "He is from Jimma.", why: "The verb “to be”. No “does” needed — “is” does the work itself." },
      { q: "3 — What does he do?", a: "He is a coffee trader.", why: "The question uses “do” but the answer uses “to be”, because a job is described with “is a”." },
      { q: "4 — When did he start?", a: "He started in 2015.", why: "Past simple. “Start” is regular, so -ed, and it does not add a syllable." },
      { q: "5 — What is he going to do?", a: "He is going to open a shop.", why: "All three parts of “going to” from Module 4." },
    ],
    notes: keyNotes("Answer 3 is worth pointing out: the question and the answer use different verbs. “What do you do?” is answered with “I am a…”. Learners find that mismatch confusing until it is named."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a conversation that works", sub: "Notice what each person does to keep it going.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 16.5, lsm: 1.3,
      text: "SARA:   Where are you from, Bethlehem?\nBETH:   I am from Hawassa. And you?\nSARA:   From Bahir Dar. Where in Hawassa exactly?\nBETH:   Near the lake. Do you know it?\nSARA:   No, I don't. Is it beautiful?\nBETH:   Yes, it is. Really beautiful. Did you ever go there?\nSARA:   No, I didn't. But I am going to visit next year.\nBETH:   That is good. By the way, what do you study?" },
    side: { label: "Find the four moves", color: C.read, size: 16, items: [
      "1. Answer, then ask back — how many times?",
      "2. Ask for detail — find one.",
      "3. React — find two.",
      "4. Change the topic — find one.",
      "How many questions in total?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "This dialogue is engineered to contain all four moves. Have learners find them all before you confirm. Then count the questions: seven in eight lines.",
      mistakes: "Move 4, “By the way”, is at the very end. Learners often miss it because the conversation is still going.",
      extra: "Ask why the conversation feels natural. The answer is the balance: both people ask, and nobody only answers.",
      tip: "This is the model for the two-minute conversation challenge. Ask learners to count how many of the four moves they used in their own practice.",
      activity: "Rewrite it badly: pairs rewrite the dialogue with no questions from Bethlehem at all, then read both versions aloud. The difference is obvious.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "The four moves, found and named.",
    size: 17,
    items: [
      { q: "1 — Answer, then ask back", a: "“I am from Hawassa. And you?” — twice in the dialogue.", why: "The simplest move and the one that does most work. Two words keep the conversation alive." },
      { q: "2 — Ask for detail", a: "“Where in Hawassa exactly?”", why: "It uses what she just said, so it needs no new language and proves you listened." },
      { q: "3 — React", a: "“Really beautiful.” and “That is good.”", why: "Reactions carry no information but they tell the speaker they are being heard." },
      { q: "4 — Change the topic", a: "“By the way, what do you study?”", why: "“By the way” signals the change politely. Without it a topic change sounds abrupt." },
      { q: "5 — Vocabulary check: the five verbs from this module", a: "ask · answer · understand · mean · repeat", why: "All five appeared in this module. They are the verbs you need to manage a conversation, not just take part in one." },
    ],
    notes: keyNotes("Seven questions in eight lines is the target ratio. Tell learners the number — it is a concrete goal for their own conversations."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — make the question", sub: "Write a question for each answer.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write a full question. The underlined part is the answer you are asking about.",
    items: [
      "1.  I live in Gondar.  (ask about the place)",
      "2.  She works at a bank.  (ask about the place)",
      "3.  They went to Adama yesterday.  (ask about the place)",
      "4.  I have two brothers.  (ask about the number)",
      "5.  He is going to travel next month.  (ask about the time)",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Each item needs a different helper: do, does, did, do, is. Do item 1 together, then let them work alone.",
      answers: "1 Where do you live? · 2 Where does she work? · 3 Where did they go? · 4 How many brothers do you have? · 5 When is he going to travel?",
      mistakes: "Item 4 needs “how many” plus a helper — two things at once. Item 5 needs the “going to” helper, which is “is”.",
      tip: "Working backwards from an answer is harder than making a question from a statement, and it is exactly what a real conversation requires.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write an interview", sub: "Eight questions across four tenses.",
    panelW: 7.6,
    panel: { label: "Write eight questions to interview a classmate", color: C.write, tint: C.writeTint, size: 18, lsm: 1.42,
      text: "1.  Present simple:  Where ______________ ?\n2.  Present simple:  What time ______________ ?\n3.  Present continuous:  What ______________ ?\n4.  Past simple:  What ______________ yesterday?\n5.  Past simple:  Where ______________ last year?\n6.  Future:  What ______________ next year?\n7.  How many ______________ ?\n8.  How often ______________ ?" },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Is there a helper in every question?",
      "Is it before the person?",
      "Is the main verb in the right form?",
      "Does every question end with a question mark?",
      "Now ask a classmate all eight and write the answers.",
    ] },
    notes: tn({
      time: "15 minutes including the interview.",
      how: "Writing the questions first and then using them makes the writing purposeful. The interview step is not optional — it is what makes learners care about getting the forms right.",
      mistakes: "Questions 4 and 5 need “did” plus a base verb. Question 6 needs either “will” or “are going to”.",
      extra: "Fast finishers add two more questions of their own choosing.",
      tip: "Collect the completed interviews. They are the best single piece of evidence of Level 2 progress you will gather.",
      activity: "Swap and check: partners check each other's eight questions against the four points before the interview starts.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — short answers", sub: "Write the short answer for each question.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write the short answer only — two or three words.",
    items: [
      "1.  Do you speak English?  (yes)",
      "2.  Does she work here?  (no)",
      "3.  Did they come yesterday?  (yes)",
      "4.  Are you studying now?  (no)",
      "5.  Will he help us?  (yes)",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Do item 1 together. The rule is mechanical once seen: repeat the helper, add the pronoun, add “not” if negative.",
      answers: "1 Yes, I do. · 2 No, she doesn't. · 3 Yes, they did. · 4 No, I'm not. · 5 Yes, he will.",
      mistakes: "Item 4 is the odd one: “No, I'm not”, because “am not” has no single short form. Point that out.",
      tip: "These five cover every helper learners know. If they can do all five, the system is secure.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — answers and why", sub: "Repeat the helper. Never the main verb.",
    size: 17,
    items: [
      { q: "1 — “Do you speak English?”", a: "Yes, I do.", why: "Repeat “do”. Never “Yes, I speak” — the short answer uses the helper only." },
      { q: "2 — “Does she work here?”", a: "No, she doesn't.", why: "“Doesn't” is the negative of the helper “does”. The subject stays “she”." },
      { q: "3 — “Did they come yesterday?”", a: "Yes, they did.", why: "Repeat “did”. The main verb “come” does not appear in the short answer at all." },
      { q: "4 — “Are you studying now?”", a: "No, I'm not.", why: "“Am not” has no single short form, so it stays as two words. This is the one irregular short answer." },
      { q: "5 — “Will he help us?”", a: "Yes, he will.", why: "Repeat “will”. The negative would be “No, he won't.”" },
    ],
    notes: keyNotes("Item 4 is the exception every learner meets: there is no short form of “am not”. Teach it as a fixed phrase and do not explain it."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist for this module", sub: "Add these to your Modules 1–4 checks.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "Is there a helper in the question?", d: "do · does · did · am/is/are · will · was/were. Without one it is not a question." },
      { t: "Is the helper BEFORE the person?", d: "“Where do you live?” — not “Where you do live?”" },
      { t: "Is the main verb in the right form?", d: "Base after do, does, did. -ing after am, is, are." },
      { t: "Does the short answer repeat the HELPER?", d: "“Yes, I do.” — not “Yes, I work.”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points, then have learners check their eight interview questions against all four.",
      tip: "The wall now has twenty checks across five Level 2 modules. Refer to them by number when marking.",
      activity: "Deliberate error hunt: write four questions on the board with exactly four errors, one of each type.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Which is correct?", opts: "a) Where you live?     b) Where do you live?     c) Where do live you?" },
      { q: "2. Complete: “___ she work at the bank?”", opts: "a) Do     b) Does     c) Is" },
      { q: "3. Which is correct?", opts: "a) Did you went?     b) Did you go?     c) Did you gone?" },
      { q: "4. “Do you like coffee?”  The short answer is …", opts: "a) Yes, I like.     b) Yes, I do.     c) Yes." },
      { q: "5. Complete: “How ___ brothers do you have?”", opts: "a) much     b) many     c) often" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 b",
      tip: "Question 1 is the module's core diagnostic. Anyone choosing a) has the missing-helper error.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the helper", sub: "Write the missing helping verb.",
    color: C.green, instruction: "Copy each question and fill the gap.", size: 18,
    items: [
      "1.  Where ______ you work?",
      "2.  What ______ she doing?",
      "3.  When ______ they arrive?  (past)",
      "4.  ______ you going to travel?",
      "5.  Where ______ you yesterday?  (verb “to be”)",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Each item is a different helper. Ask learners to name the tense before they write.",
      answers: "1 do · 2 is · 3 did · 4 Are · 5 were",
      mistakes: "Item 5 needs “were”, not “did”. The verb “to be” is its own helper.",
      tip: "Item 4 needs a capital A because it starts the sentence. Check for it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Questions, answers and question words.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the QUESTION WORD to the ANSWER", opts: "1. Where     2. When     3. Why     4. How          a) Because I was ill.     b) By bus.     c) In Gondar.     d) Last night." },
      { q: "Part 2 — match the QUESTION to the SHORT ANSWER", opts: "1. Do you work?     2. Did she come?     3. Are they here?     4. Will he help?" },
      { q: "a) Yes, they are.        b) Yes, I do.", opts: "c) No, he won't.        d) No, she didn't." },
      { q: "Part 3 — match the QUESTION to “much” or “many”", opts: "1. ___ money     2. ___ students     3. ___ water     4. ___ books" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks, three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–c, 2–d, 3–a, 4–b.  ·  Part 2: 1–b, 2–d, 3–a, 4–c.  ·  Part 3: much, many, much, many.",
      tip: "Part 3 is the countable/uncountable rule from Level 1 returning. Learners should recognise it.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — make questions from statements", sub: "Ask about the underlined idea.",
    color: C.green, instruction: "Write a full question for each.", size: 18,
    items: [
      "1.  She lives in Adama.  (where)",
      "2.  They work at the hospital.  (where)",
      "3.  He went to Gondar last week.  (when)",
      "4.  I am reading a book.  (what)",
      "5.  We are going to travel by bus.  (how)",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Each item names the question word, so learners only have to choose the helper and the order.",
      answers: "1 Where does she live? · 2 Where do they work? · 3 When did he go to Gondar? · 4 What are you reading? · 5 How are you going to travel?",
      mistakes: "Item 3 needs “did” plus the base verb. Item 5 needs the “going to” helper.",
      tip: "Read five answers aloud at the end and check the intonation as well as the words.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each question has one or more errors.",
    color: C.green, instruction: "Rewrite each question correctly.", size: 18,
    items: [
      "1.  Where you work?",
      "2.  Does she works at the bank?",
      "3.  What did you did yesterday?",
      "4.  How much brothers do you have?",
      "5.  Who did came to the meeting?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each. All have one.",
      answers: "1 Where do you work? · 2 Does she work at the bank? · 3 What did you do yesterday? · 4 How many brothers do you have? · 5 Who came to the meeting?",
      mistakes: "Sentence 5 is the subject-question exception: “who” is the doer, so no helper is needed at all.",
      tip: "Have learners count the errors before correcting. Counting forces careful reading.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  The helper comes before the person in a question.",
      "2.  “Where you live?” is a correct question.",
      "3.  After “did”, the main verb is in its base form.",
      "4.  The short answer repeats the main verb.",
      "5.  We use “many” for money.",
      "6.  “Who came?” needs no helper.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test.",
      answers: "1 T · 2 F — “Where do you live?” · 3 T · 4 F — it repeats the helper · 5 F — “much” for money · 6 T",
      tip: "Item 6 is the subject-question exception. If learners mark it false, they have over-applied the helper rule.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Write a question, then answer it.",
    color: C.green, instruction: "Write both the question and your own true answer.", size: 18,
    items: [
      "1.  Ask about where someone lives, then answer for yourself.",
      "2.  Ask about what someone did yesterday, then answer.",
      "3.  Ask about someone's plans, then answer.",
      "4.  Ask “how often” about something, then answer.",
      "5.  Ask a yes/no question, then give a short answer.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Writing both halves is the point: learners practise the structure and the response together, which is how a conversation actually works.",
      answers: "1 Where do you live? — I live in ___. · 2 What did you do yesterday? — I ___. · 3 What are you going to do? — I am going to ___. · 4 How often do you ___? — ___ a week. · 5 any yes/no question with a two-word answer.",
      mistakes: "Item 5's answer must be short. Learners write a full sentence.",
      tip: "Ask three learners to read both halves of item 5 aloud. The two-word answer is the target.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Ask your partner eight questions across four tenses.",
      "2.  Answer eight questions with SHORT answers only.",
      "3.  Hold a two-minute conversation using all four moves.",
      "4.  Ask one “how much”, one “how many”, one “how often” and one “how long”.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Give each partner a listening job: task 1 check the helper position, task 2 check the short answer repeats the helper.",
      answers: "SUCCESS CRITERIA: 1 eight questions with correct helpers · 2 eight two-word answers · 3 all four moves, no silence over three seconds · 4 correct much/many choice.",
      tip: "Task 3 is the module assessment and the Level 2 goal. Listen to as many pairs as you can.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These use everything from Modules 1 to 5.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write eight questions to interview someone — two in each of four tenses.", opts: "Present, continuous, past, future." },
      { q: "2. Correct this:  “Where she works? What you did yesterday? How much children she have?”", opts: "There are five things to fix." },
      { q: "3. Write five yes/no questions and their short answers.", opts: "Use a different helper each time." },
      { q: "4. Write a ten-line conversation between two people meeting for the first time.", opts: "At least six questions, and both people must ask." },
      { q: "5. Which questions need NO helper? Write two.", opts: "Think about who is doing the action." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard.",
      answers: "2 “Where does she work? What did you do yesterday? How many children does she have?” — missing helper, -s left on the verb, missing helper again, much/many, and the missing helper in the third. 5 e.g. “Who came?” “What happened?”",
      tip: "Question 4 is the module capstone in written form. Read two aloud and count the questions.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why is asking harder than answering, for most learners?", opts: "What do you have to produce that you do not when answering?" },
      { q: "2. Your friend says “Where you work?” How would you explain the missing word?", opts: "How would you teach it so they remember?" },
      { q: "3. Why does “Who came?” need no helper, but “Who did you see?” does?", opts: "Who is doing the action in each one?" },
      { q: "4. What happens to a conversation if only one person asks questions? Why does it matter?", opts: "Think about a conversation you have had." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning, then give the English phrase for what they said.",
      answers: "1 Answering reacts to a structure someone else built; asking means building it yourself, choosing the helper and the order under time pressure. 2 English needs a helping verb in questions and it goes before the person; the strongest explanation builds the question from the statement step by step. 3 In “Who came?” the answer is the person who did the coming, so “who” is already the subject and no helper is needed; in “Who did you see?” the subject is “you”. 4 It becomes an interview and the person answering feels examined; both people asking is what makes it a conversation.",
      tip: "Question 4 is about behaviour rather than grammar and it changes how learners speak more than any rule on the slides.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Question word order", items: [
      { q: "1. Which is correct?", opts: "a) Where you live?     b) Where do you live?     c) You live where?" },
      { q: "2. Make a question: “She works at a bank.”  (where)", opts: "Write the full question." },
      { q: "3. Make a question: “They went to Adama.”  (where)", opts: "Write the full question." },
      { q: "4. What always comes before the person in a question?", opts: "One word." },
    ] },
    { part: "Part 2 · Choosing the helper", items: [
      { q: "5. Complete: “___ she live in Gondar?”", opts: "a) Do     b) Does     c) Is" },
      { q: "6. Complete: “What ___ you doing?”", opts: "a) do     b) are     c) did" },
      { q: "7. Complete: “Where ___ you go yesterday?”", opts: "a) do     b) did     c) are" },
      { q: "8. Complete: “Where ___ you last night?”  (verb “to be”)", opts: "a) did     b) were     c) do" },
    ] },
    { part: "Part 3 · Short answers", items: [
      { q: "9. “Do you work here?”  Answer yes.", opts: "Two words." },
      { q: "10. “Did she come?”  Answer no.", opts: "Two or three words." },
      { q: "11. “Are they studying?”  Answer yes.", opts: "Two words." },
      { q: "12. Which is correct?", opts: "a) Yes, I work.     b) Yes, I do.     c) Yes, I am work." },
    ] },
    { part: "Part 4 · How much / many, and listening", items: [
      { q: "13. Complete: “How ___ money do you have?”", opts: "a) much     b) many" },
      { q: "14. Complete: “How ___ students are there?”", opts: "a) much     b) many" },
      { q: "15. Listen: write the first question you hear.", opts: "Full question." },
      { q: "16. Listen: write the short answer you hear.", opts: "Two or three words." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write two questions in the present simple.", opts: "Different question words." },
      { q: "18. Write two questions in the past simple.", opts: "Check the base verb." },
      { q: "19. Write one question with “how often”.", opts: "Check the helper." },
      { q: "20. SPEAKING: hold a two-minute conversation, asking at least six questions.", opts: "Your teacher or partner listens and counts." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 5 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nFOR QUESTIONS 15 AND 16, READ ALOUD: “How often do you go to Addis Ababa?” … “Do you like it there?” — “Yes, I do.”",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — which is correct?", a: "b) Where do you live?", why: "The helper “do” comes before the person “you”. Option a) is missing the helper entirely." },
      { q: "Q2 — “She works at a bank.”", a: "Where does she work?", why: "“Does” for he, she or it in the present, and the main verb loses its -s." },
      { q: "Q3 — “They went to Adama.”", a: "Where did they go?", why: "“Did” for the past, and “went” returns to its base form “go”." },
      { q: "Q4 — what comes before the person?", a: "The helper  (do, does, did, am, is, are, will, was, were)", why: "This is the one rule that covers every tense in English." } ],
    [ { q: "Q5 — “___ she live in Gondar?”", a: "b) Does", why: "Present simple with “she” takes “does”, and “live” stays in its base form." },
      { q: "Q6 — “What ___ you doing?”", a: "b) are", why: "The present continuous uses am, is or are as its helper — never “do”." },
      { q: "Q7 — “Where ___ you go yesterday?”", a: "b) did", why: "“Yesterday” signals the past, so “did” — and “go” stays in its base form." },
      { q: "Q8 — “Where ___ you last night?”", a: "b) were", why: "The verb “to be” is its own helper. It never uses “did”." } ],
    [ { q: "Q9 — “Do you work here?”  yes", a: "Yes, I do.", why: "Repeat the helper “do”. Never the main verb “work”." },
      { q: "Q10 — “Did she come?”  no", a: "No, she didn't.", why: "“Didn't” is the negative short form of the helper “did”." },
      { q: "Q11 — “Are they studying?”  yes", a: "Yes, they are.", why: "The helper is “are”, so the short answer repeats it." },
      { q: "Q12 — which is correct?", a: "b) Yes, I do.", why: "The short answer repeats the helper only. Option a) repeats the main verb, which is what learners do naturally." } ],
    [ { q: "Q13 — “How ___ money…?”", a: "a) much", why: "Money cannot be counted, so “much”. You count notes and coins, not money itself." },
      { q: "Q14 — “How ___ students…?”", a: "b) many", why: "Students can be counted, so “many”. This is the countable rule from Level 1 Module 4." },
      { q: "Q15 — the first question", a: "How often do you go to Addis Ababa?", why: "“How often” asks about frequency, and the helper “do” comes before “you”." },
      { q: "Q16 — the short answer", a: "Yes, I do.", why: "The question was “Do you like it there?”, so the answer repeats “do”." } ],
    [ { q: "Q17 — two present-simple questions", a: "e.g. “Where do you live?”  “What does she do?”", why: "Marked on the helper being present and in the right place." },
      { q: "Q18 — two past-simple questions", a: "e.g. “What did you do yesterday?”  “Where did they go?”", why: "“Did” plus a base verb. The commonest error is leaving the past form on the main verb." },
      { q: "Q19 — a “how often” question", a: "e.g. “How often do you visit your family?”", why: "“How often” plus the helper plus the person plus the base verb — four parts in order." },
      { q: "Q20 — speaking task", a: "A two-minute conversation with six or more questions", why: "Marked on the number of questions, the helper in each, and whether both people asked." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q1, Q8 and Q12 are the diagnostic questions. Q1 tests the helper rule, Q8 tests the “to be” exception, Q12 tests short answers. A learner who gets all three has the whole system."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Ask, do not answer.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Write ten questions about your family", d: "Two in each of five tenses. Check the helper in each." },
      { t: "Ask five people five questions", d: "In English if you can. Family and friends count." },
      { t: "Practise short answers", d: "Say twenty. Ten yes, ten no, across all the helpers." },
      { t: "Write the six question words and one question for each", d: "what · where · when · who · why · how" },
      { t: "Have one two-minute conversation in English", d: "With a classmate, by phone or message. Count your questions." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Every task is about asking, not answering. That imbalance is deliberate — learners get plenty of answering practice everywhere else.",
      tip: "Friday's task takes the language outside the classroom. Ask about it at the start of the next lesson and ask for the question count.",
      activity: "Ask learners to send one classmate a question in English each evening and answer the one they receive.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write your eight-question interview", d: "Two questions in each of four tenses, from slide 47." },
      { t: "Interview one person and write their answers", d: "A classmate, a family member, a colleague. Write both the questions and the answers." },
      { t: "Record your two-minute speaking challenge", d: "Five present questions · three past · two future · three “how” questions · five short answers." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 2 makes the questions real. An interview with an actual person produces far better language than an invented one.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording personally, by voice. Listen specifically for the helper position in every question.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaPencilAlt", title: "Eight questions — 8 marks", desc: "Eight written (2) · a helper in every one (3) · correct helper for the tense (2) · question marks (1)." },
      { icon: "FaUsers", title: "The interview — 7 marks", desc: "All eight asked and answered (3) · answers written correctly (2) · at least one follow-up question added (2)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five parts (3) · helper before the person every time (4) · base verb after do/does/did (2) · short answers of two words (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework. The helper position carries the most marks — that tells learners exactly what matters.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Mark only what has been taught. Do not penalise tense-formation errors from earlier modules here.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaQuestion", title: "The six question words", desc: "what · where · when · who · why · how — each gets a different kind of answer." },
      { icon: "FaSitemap", title: "One pattern, every tense", desc: "Question word · helper · person · verb. The helper always comes before the person." },
      { icon: "FaExchangeAlt", title: "The five helpers", desc: "do/does · did · am/is/are · will · was/were. The tense chooses the helper." },
      { icon: "FaCheck", title: "Short answers", desc: "“Yes, I do.” Repeat the helper — never the main verb." },
      { icon: "FaHashtag", title: "much · many · often · long", desc: "Count it or not. Frequency or duration. Four different questions." },
      { icon: "FaComments", title: "Keeping it going", desc: "Answer and ask back · ask for detail · react · change the topic." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2 and read the objectives again. Ask the same question you asked at the start.",
      tip: "Ask each learner how many questions they managed in their two-minute conversation. The number is concrete evidence of progress.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaSitemap", title: "The pattern", desc: "QUESTION WORD  +  HELPER  +  PERSON  +  VERB\n\nWhere   do   you   live?\nWhat    did  they  do?\nWhen    will  she   come?" },
      { icon: "FaExchangeAlt", title: "Which helper?", desc: "Present simple  →  do / does\nPresent continuous  →  am / is / are\nPast simple  →  did\nFuture  →  will  ·  am/is/are going to\nThe verb “to be”  →  is its own helper" },
      { icon: "FaCheck", title: "Short answers", desc: "Yes, I do.  ·  No, she doesn't.\nYes, they did.  ·  No, he won't.\nYes, I am.  ·  No, I'm not.\nAlways the HELPER, never the verb." },
      { icon: "FaComments", title: "The four moves", desc: "1 Answer, then ask back — “And you?”\n2 Ask for detail — “Where exactly?”\n3 React — “Really?”\n4 Change the topic — “By the way…”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it. Together with the twelve-question card from slide 28 it is the whole module.",
      tip: "Print it as an A4 poster. This is the most-used poster in Level 2 because every lesson from now on involves asking.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now ask about anything you can say — which means you can hold a real conversation.",
    sub: "Four tenses, one question pattern, short answers, and four moves to keep it alive.\nThat is the difference between answering someone and talking with them.",
    chips: ["NEXT — Module 6", "Reading for Meaning", "Signs, notices, messages and short texts"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the shift precisely: until now learners have been able to respond. From this module they can initiate. That is the threshold at which people start saying they “speak English”.",
      tip: "Preview Module 6: the tense work of Level 2 is now finished. The last three modules are the four skills — reading, listening and writing — using everything already learned.",
      activity: "Ask every learner to ask one question of the person beside them before they leave.",
    }),
  });
};
