"use strict";
/* LEVEL 2 · MODULE 2 — Present Continuous & Describing   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 2", levelNo: LV.no, levelName: "Elementary\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Present Continuous & Describing",
    sub: "What is happening right now, at this moment. Learned side by side with Module 1, so the two are never confused.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5", v: "NEW VERBS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by doing something — write on the board, drink water, walk to the window — and narrating it: “I am writing. I am drinking. I am walking to the window.” Then say: “That is this module. Not what I do every day — what I am doing now.”",
      tip: "This module must be taught against Module 1, not after it. Every lesson should contain at least one direct contrast between the two tenses, or learners will use the continuous for everything.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all about the present moment.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Say what is happening right now", d: "“I am studying English.”  “They are playing football.”" },
      { t: "Spell the -ing form correctly", d: "run → running · write → writing · study → studying. Three rules." },
      { t: "Ask what someone is doing", d: "“What are you doing?”  “Is she working today?”" },
      { t: "Describe a picture in detail", d: "“A woman is selling tomatoes. Two children are running.”" },
      { t: "Choose between the two present tenses", d: "“I drink coffee every day.”  vs  “I am drinking coffee now.”" },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask “Can you do this now?” Objective 5 is the one that matters most — say that choosing correctly between the two tenses is what this module is really for.",
      tip: "Return to this slide at the end of the module and ask again.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: right now", sub: "No wrong answers. Nobody is corrected here.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaEye", title: "1 · Look around", desc: "What are three people in this room doing at this moment? Say it any way you can." },
      { icon: "FaWalking", title: "2 · Mime it", desc: "Your teacher does an action. Say what they are doing. Any words you know." },
      { icon: "FaClock", title: "3 · Two times", desc: "What do you do every morning? What are you doing now? Notice they are different." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Task 3 is the diagnostic and the whole module in miniature. Most learners will answer both questions the same way. Do not correct — note it, because it is exactly what slide 9 fixes.",
      mistakes: "Correct nothing in the warm-up.",
      tip: "Write two learners' answers to task 3 on the board, one under each question, and leave them there. You will return to them on slide 9.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Two present tenses. One is for always. One is for now.",
    sub: "“I work in a shop.”  — that is my job, every day.\n“I am working now.”  — that is this moment, and it will stop.\nEnglish keeps these two completely separate. Most languages do not.",
    chips: ["Every day  →  present simple", "Right now  →  present continuous", "Never mix them"],
    notes: tn({
      time: "5 minutes.",
      how: "Say both example sentences about yourself, with a gesture: sweep your hand wide for “every day”, point at the floor for “now”. The gesture makes the difference physical before it is grammatical.",
      mistakes: "Learners who meet the continuous first tend to use it for everything: “I am going to school every day.” Teaching the two together, as this module does, prevents that.",
      tip: "Ask the class how their own language marks this difference. In Amharic it is marked differently, and naming that makes the English pattern easier to accept.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.grid({
    sec: SEC.con, title: "Three jobs the present continuous does", sub: "All three are about now, or about a temporary situation.",
    cols: 3, color: C.green, titleSize: 21, descSize: 16, shadow: true, tint: C.white,
    items: [
      { icon: "FaClock", title: "1 · At this moment", desc: "Happening as you speak.\n\n“I am writing on the board.”\n“The baby is sleeping.”" },
      { icon: "FaRedo", title: "2 · Around this time", desc: "Not this second, but this period.\n\n“I am studying English this year.”\n“She is working in Adama this month.”" },
      { icon: "FaEye", title: "3 · Describing a scene", desc: "What you can see happening.\n\n“A woman is selling tomatoes.”\n“Two men are carrying a table.”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Demonstrate use 1 by narrating your own actions. Demonstrate use 3 with any picture. Use 2 is the hardest — give two examples and move on; it becomes clear with exposure.",
      mistakes: "Use 2 confuses learners because it is not literally “now”. Do not over-explain it. The key idea is temporary, not permanent.",
      extra: "Signal words: now · right now · at the moment · today · this week · this year.",
      tip: "Use 3 is what makes the exam picture-description task possible. It is also the most enjoyable, so lead with it if energy is low.",
      activity: "Narrate the room: every learner says one sentence about what someone in the room is doing at this moment.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the form
  L.table({
    sec: SEC.con, title: "The form — two parts, always", sub: "am / is / are  +  the verb with -ing.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 18, headSize: 16, colW: [2.4, 2.6, 3.0, 4.133],
      rows: [
        ["Person", "be", "verb + ing", "Example"],
        ["I", "am", "working", "I am working now."],
        ["You", "are", "reading", "You are reading a book."],
        ["He / she / it", "is", "sleeping", "She is sleeping."],
        ["We / they", "are", "playing", "They are playing football."],
      ],
    },
    note: "BOTH parts are needed. “I working” is wrong. “I am work” is wrong. You need am/is/are AND the -ing together.",
    notes: tn({
      time: "12 minutes.",
      how: "Write the two parts in two boxes on the board and build ten sentences by filling both. Learners see that neither box can be empty.",
      mistakes: "Dropping the auxiliary — “I working” — is the commonest error and comes straight from Level 1, where the verb “to be” was also dropped. Point out that it is the same verb and the same mistake.",
      extra: "Note that this uses the verb “to be” from Level 1 Module 3. Learners already know am/is/are; they only have to add the -ing.",
      tip: "Frame it as good news: half of this tense is something they learned in Level 1. Only the -ing is new.",
      activity: "Two-box drill: teacher says a person and a verb, learner produces both parts. “She — cook” → “She is cooking.” Thirty rounds.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — spelling
  L.table({
    sec: SEC.con, title: "The three spelling rules for -ing", sub: "Most verbs just add -ing. Two groups change first.",
    table: {
      color: C.green, rowH: 0.52, fontSize: 18, headSize: 16, colW: [4.0, 3.4, 4.733],
      rows: [
        ["Rule", "Verbs", "-ing form"],
        ["Most verbs: add -ing", "work · read · play · study", "working · reading · playing · studying"],
        ["Ends in -e: drop the e", "write · come · make · live", "writing · coming · making · living"],
        ["One vowel + one consonant: double it", "run · sit · get · stop", "running · sitting · getting · stopping"],
      ],
    },
    note: "Notice: “study” keeps its y and just adds -ing → studying. The y only changes for the -s ending in Module 1, never for -ing.",
    notes: tn({
      time: "12 minutes.",
      how: "Teach rule 1 and drill it hard. Then rule 2 with five verbs. Then rule 3, which is the hardest — write the last three letters of each verb on the board and show the vowel-consonant pattern.",
      mistakes: "“Writeing” and “runing” are the two commonest. Rule 3 is genuinely difficult; accept a good attempt and correct without fuss.",
      extra: "Sort these aloud: take, swim, listen, begin, drive, wait, put, open.",
      tip: "The contrast with Module 1 matters: study → studies for the -s form, but study → studying for -ing. Say both aloud together so the difference is heard.",
      activity: "Three columns on the board. Teacher says a verb, a learner writes it in the right column with its -ing form.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — negatives and questions
  L.table({
    sec: SEC.con, title: "Negatives and questions", sub: "Easier than Module 1 — no “do” or “does” at all.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 18, headSize: 16, colW: [3.0, 4.2, 4.933],
      rows: [
        ["Type", "Pattern", "Example"],
        ["Positive", "subject + am/is/are + -ing", "She is working."],
        ["Negative", "add “not” after am/is/are", "She is not working."],
        ["Question", "am/is/are before the subject", "Is she working?"],
        ["Short answer", "keep am/is/are", "Yes, she is.  /  No, she is not."],
      ],
    },
    note: "Good news: this works exactly like the verb “to be” in Level 1. “She is a nurse” → “Is she a nurse?” · “She is working” → “Is she working?”",
    notes: tn({
      time: "10 minutes.",
      how: "Show the parallel with Level 1 explicitly. Write “She is a nurse” and “She is working” one above the other and make both negative, then both questions. The operation is identical.",
      mistakes: "Learners import “do” and “does” from Module 1: “Does she working?” Point out that this tense already has a helping verb — am, is or are — so it does not need another.",
      extra: "Ten questions to drill: What are you doing? Is he sleeping? Are they working today? Why are you laughing?",
      tip: "This is the easiest grammar point in Level 2 because learners already know the operation. Say so — an easy win after Module 1 is welcome.",
      activity: "Statement to question: teacher says a positive sentence, learner produces the question and a short answer. Twenty rounds.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — THE CONTRAST
  L.compare({
    sec: SEC.con, title: "The big one — simple or continuous?",
    sub: "Same verb, same person, two completely different meanings.",
    left: { h: "Present simple — every day", items: ["I drink coffee every morning.", "She works in a bank.", "They live in Gondar.", "He teaches English."] },
    right: { h: "Present continuous — right now", items: ["I am drinking coffee now.", "She is working today.", "They are living in Adama this year.", "He is teaching Level 2 now."] },
    note: "Ask one question:  is this ALWAYS true, or is it happening AT THIS MOMENT?   Always → simple.   Now → continuous.",
    notes: tn({
      time: "14 minutes. This is the most important slide in the module.",
      how: "Read each pair aloud, left then right, and ask the class which is which before you say. Then return to the learners' own warm-up answers on the board and sort them into the two columns together.",
      mistakes: "The right-hand column of row 3 is the temporary-situation use: they normally live in Gondar but are in Adama this year. Do not over-explain — say “this year” makes it temporary and move on.",
      extra: "Give ten sentences and have learners hold up one finger for simple, two for continuous.",
      tip: "The single test question — always or now? — is the tool learners take away. Drill the question itself, not just the answers.",
      activity: "Two corners: label one wall EVERY DAY and the other RIGHT NOW. Read sentences and learners walk to the correct wall. Twenty rounds, physical and fast.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — describing
  L.grid({
    sec: SEC.con, title: "Describing what you can see", sub: "Four things to say about any picture or scene.",
    cols: 4, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaUsers", title: "1 · Who", desc: "“There is a woman.”\n“There are three children.”\n\nUses “there is / there are” from Level 1." },
      { icon: "FaWalking", title: "2 · What they are doing", desc: "“She is selling tomatoes.”\n“They are running.”\n\nThe present continuous." },
      { icon: "FaTshirt", title: "3 · What they are wearing", desc: "“He is wearing a blue shirt.”\n“She is wearing a netela.”" },
      { icon: "FaEye", title: "4 · Where things are", desc: "“The bag is on the table.”\n“A bus is behind them.”" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Model all four steps on one picture, out loud, in ninety seconds. Then hand the picture to a learner and have them do the same. The four-step frame is what turns silence into ten sentences.",
      mistakes: "Learners produce single words when describing. The frame prevents that by telling them what to say next.",
      extra: "Position words to teach here: on, in, under, behind, next to, between.",
      tip: "Picture description is the single most productive speaking task at this level: it generates fifteen sentences in five minutes and recycles the whole of Level 1 vocabulary.",
      activity: "Four-step race: learners get one minute per picture and must produce at least one sentence for each of the four steps.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "wear", ipa: "/weə/", pos: "verb", icon: "FaTshirt",
      meaning: "To have clothes on your body.",
      example: "She is wearing a blue dress. I wear a uniform at work.",
      mistake: "Do not confuse “wear” with “put on”. You PUT ON a shirt (the action, one moment) and then you WEAR it (the state, all day).",
      notes: tn({ time: "6 minutes.",
        how: "Demonstrate: put on a jacket — “I am putting on my jacket” — then stand still in it — “Now I am wearing it.” The two verbs in ten seconds.",
        mistakes: "The -ing form is “wearing”, with no spelling change. Learners sometimes write “weareing”.",
        extra: "Clothes to teach alongside: shirt, trousers, dress, shoes, jacket, hat, netela, gabi.",
        tip: "This verb makes picture description far richer. Every person in every picture is wearing something.",
        activity: "Describe your classmate: each learner says what the person beside them is wearing." }) },

    { word: "carry", ipa: "/ˈkæri/", pos: "verb", icon: "FaShoppingBag",
      meaning: "To hold something and move with it.",
      example: "He is carrying a heavy bag. She carries her books to school.",
      mistake: "Two forms to watch: the -ing form keeps the y — “carrying” — but the -s form from Module 1 changes it — “carries”. Same verb, two different rules.",
      notes: tn({ time: "6 minutes.",
        how: "Write both forms side by side on the board: carries and carrying. Say them aloud. This one verb demonstrates the difference between the two spelling systems.",
        mistakes: "“Carriing” — learners apply the -ies rule to the -ing form. That is exactly the confusion this word is chosen to expose.",
        extra: "Other verbs with the same contrast: study/studies/studying, try/tries/trying, fly/flies/flying.",
        tip: "This is the best single verb for teaching that the two spelling systems are separate. Spend the extra minute.",
        activity: "Carry something across the room and have the class narrate it in both tenses." }) },

    { word: "wait", ipa: "/weɪt/", pos: "verb", icon: "FaClock",
      meaning: "To stay in one place until something happens.",
      example: "I am waiting for the bus. She waits for her friend every morning.",
      mistake: "You wait FOR someone or something — the preposition is part of the phrase. “I am waiting the bus” is wrong.",
      notes: tn({ time: "6 minutes.",
        how: "Teach “wait for” as one chunk from the first second. If learners learn “wait” alone, the missing preposition is very hard to add later.",
        mistakes: "The missing “for” is a transfer error and it is very common. Drill the two words joined.",
        extra: "wait for the bus · wait for my friend · wait for the doctor · wait for the rain to stop.",
        tip: "This verb is genuinely useful at a bus stop, a clinic and a bank — three places every learner goes.",
        activity: "Where do you wait? Each learner says two places and what they wait for." }) },

    { word: "look at", ipa: "/lʊk æt/", pos: "verb", icon: "FaEye",
      meaning: "To turn your eyes towards something on purpose.",
      example: "They are looking at the board. Look at this picture.",
      mistake: "Three similar verbs: LOOK AT (you choose to), SEE (it happens), WATCH (for a long time). “I am watching television” — not “looking television”.",
      notes: tn({ time: "7 minutes.",
        how: "Demonstrate all three: look at the door deliberately, see something without trying, watch the clock for five seconds. The physical demonstration separates them far better than definitions.",
        mistakes: "Learners use “see” for everything, or drop the “at”. Both are frequent.",
        extra: "look at a picture · watch television · watch a film · see a friend · see a doctor.",
        tip: "Also note: “see” is not normally used in the continuous. Do not teach the rule — just avoid it and correct gently if it appears.",
        activity: "Look, see, watch: call out ten situations and learners say which verb fits." }) },

    { word: "listen to", ipa: "/ˈlɪsən tuː/", pos: "verb", icon: "FaHeadphones",
      meaning: "To pay attention to a sound on purpose.",
      example: "I am listening to the radio. She listens to music every evening.",
      mistake: "Two things: the t is SILENT — say /ˈlɪsən/, not “list-en”. And you listen TO something — “I am listening the radio” is wrong.",
      notes: tn({ time: "7 minutes.",
        how: "Say the word slowly with the silent t marked on the board — cross out the t. Then drill “listen to” as one chunk.",
        mistakes: "Both errors appear together: the pronounced t and the missing “to”. Fix the sound first, then the preposition.",
        extra: "Other silent letters worth mentioning once: know, write, hour, half. Do not make a lesson of it.",
        tip: "“Listen to” and “look at” are a natural pair — both need a preposition. Teach and drill them together.",
        activity: "What are you listening to? Learners ask three classmates and report the answers." }) },
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
    title: "Rule 1 — both parts, every time",
    sub: "am / is / are  +  verb + ing. Neither part can be missing.",
    left: { h: "Correct", items: ["I am working.", "She is reading a book.", "They are playing football.", "We are waiting for the bus."] },
    right: { h: "Wrong", items: ["I working.", "She reading a book.", "They playing football.", "We are wait for the bus."] },
    note: "The first three errors drop am/is/are. The fourth keeps it but forgets the -ing. Both halves are needed.",
    notes: tn({
      time: "12 minutes.",
      how: "Two boxes on the board, both must be filled. Build ten sentences and deliberately leave one box empty each time so learners can spot what is missing.",
      mistakes: "The dropped auxiliary is the same error as “He teacher” in Level 1 Module 3 — the verb “to be” disappearing. Name the connection; learners who see the pattern fix it faster.",
      extra: "Drill with ten verbs and all four persons.",
      tip: "Two minutes of the two-box drill at the start of every lesson for the rest of the module.",
      activity: "Missing part: teacher says an incomplete sentence, learners shout which part is missing.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — spelling the -ing form",
    sub: "Three rules. Check the end of the verb first.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [4.4, 3.2, 4.533],
      rows: [
        ["Ending", "Change", "Examples"],
        ["most verbs", "add -ing", "work → working · play → playing"],
        ["ends in -e", "drop the e, add -ing", "write → writing · come → coming"],
        ["one vowel + one consonant", "double the consonant", "run → running · sit → sitting"],
        ["ends in -y", "no change — just add -ing", "study → studying · carry → carrying"],
      ],
    },
    note: "Careful with the difference from Module 1:  study → studieS  (the -s form)  but  study → studyING  (the -ing form).",
    notes: tn({
      time: "12 minutes.",
      how: "Do rules 1 and 2 quickly. Spend the time on rule 3 — write the last three letters of the verb and check the vowel-consonant pattern together, five times.",
      mistakes: "Rule 3 is the hardest in Level 2 spelling. Learners over-apply it and write “readding” or “waitting”. Show that “read” and “wait” have two vowels, so no doubling.",
      extra: "Sort these aloud: take, swim, listen, begin, drive, wait, put, open, stop, read.",
      tip: "In speech the doubled consonant makes no difference at all, so a learner who spells it wrong will still be understood. Prioritise the spoken form.",
      activity: "Four columns on the board, one per rule. Learners place twenty verbs.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — negatives and questions",
    sub: "No “do” or “does” here. The verb “to be” does all the work.",
    left: { h: "Correct", items: ["She is not working today.", "They are not listening.", "Is he sleeping?", "What are you doing?"] },
    right: { h: "Wrong", items: ["She does not working today.", "They not listening.", "Does he sleeping?", "What you are doing?"] },
    note: "Negative: put “not” after am/is/are.   Question: put am/is/are before the person.   Exactly like Level 1.",
    notes: tn({
      time: "10 minutes.",
      how: "Show the parallel with Level 1 side by side on the board: “She is a nurse / Is she a nurse?” above “She is working / Is she working?”. The identical operation is the teaching point.",
      mistakes: "The first and third wrong sentences import “do” from Module 1. That is a sign of learning, not carelessness — learners are applying a rule they just learned.",
      extra: "Ten questions to drill, five yes/no and five with question words.",
      tip: "“What are you doing?” is worth drilling on its own. It is the most useful question in this module and learners will hear it constantly.",
      activity: "Phone call role play: one learner rings another and asks “What are you doing?” The answer must be in the continuous.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — choosing between the two present tenses",
    sub: "The signal words tell you which one to use.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [3.4, 4.0, 4.733],
      rows: [
        ["If you see or mean…", "Use", "Example"],
        ["every day · always · usually · never", "present simple", "I always drink coffee in the morning."],
        ["now · right now · at the moment", "present continuous", "I am drinking coffee at the moment."],
        ["on Mondays · twice a week", "present simple", "She works on Mondays."],
        ["today · this week · this year", "present continuous", "She is working in Adama this week."],
      ],
    },
    note: "The one test question:  is this ALWAYS true, or is it happening NOW?   That question answers every case.",
    notes: tn({
      time: "12 minutes.",
      how: "Give twenty sentences with the signal word removed and have learners choose the tense, then say which signal word would fit. Working backwards from the tense to the signal deepens the understanding.",
      mistakes: "Learners latch onto the signal words and stop thinking about meaning. Signal words help, but the test question is what they should rely on.",
      extra: "Mixed drill: “I ___ (work) in a shop, but today I ___ (help) my brother.” Both tenses in one sentence.",
      tip: "The sentence with both tenses is the best possible practice. Give five of them and let learners see the contrast inside one sentence.",
      activity: "Two-tense sentences: learners write three sentences each containing both a simple and a continuous clause.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — put it all together",
    sub: "Both parts, correct spelling, right tense.",
    left: { h: "Correct", items: ["She is writing a letter now.", "They are not listening to me.", "What are you doing?", "I work here, but today I am helping."] },
    right: { h: "Wrong", items: ["She is writeing a letter now.", "They not listening to me.", "What you are doing?", "I am working here every day."] },
    note: "Four checks:  1 · am/is/are present?   2 · -ing on the verb?   3 · spelling correct?   4 · is “now” or “every day” meant?",
    notes: tn({
      time: "10 minutes.",
      how: "Take each wrong sentence and ask the class to name the error. Each has exactly one — say so in advance.",
      mistakes: "The fourth is the tense error rather than a form error, and it is the hardest to see because the sentence is perfectly well formed. Point that out.",
      extra: "Two more for pairs: “He is runing to the bus.” and “I am going to church every Sunday.”",
      tip: "These four checks are the marking standard for this module. Add them to the wall beside the Module 1 checks.",
      activity: "Error auction: teams bid on how many errors they can find in a set of six sentences.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — building the form", sub: "Both parts, every time.", items: [
      { q: "Complete: “She ___ ___ a book.”  (read)", a: "She is reading a book.", why: "Two parts: “is” because the subject is “she”, and “reading” with the -ing. Neither can be left out." },
      { q: "Complete: “They ___ ___ football.”  (play)", a: "They are playing football.", why: "“Are” for a plural subject. “Play” ends in a vowel + y, so it simply adds -ing." },
      { q: "Correct this: “I working now.”", a: "I am working now.", why: "The verb “to be” is missing. This is the same error as “He teacher” from Level 1 — the verb disappearing." },
    ] },
    { title: "Guided examples 2 — spelling the -ing form", sub: "Look at the end of the verb.", items: [
      { q: "Write the -ing form of “write”.", a: "writing", why: "It ends in -e, so the e is dropped before adding -ing. Never “writeing”." },
      { q: "Write the -ing form of “run”.", a: "running", why: "One vowel and one consonant at the end, so the consonant doubles. Compare “read”, which has two vowels and does not double." },
      { q: "Write the -ing form of “study”.", a: "studying", why: "The y does not change for -ing. It only changes for the -s form from Module 1: studies." },
    ] },
    { title: "Guided examples 3 — negatives and questions", sub: "No “do” or “does” in this tense.", items: [
      { q: "Make it negative: “He is sleeping.”", a: "He is not sleeping.", why: "“Not” goes after “is”. Nothing else changes — the -ing stays." },
      { q: "Make it a question: “They are working.”", a: "Are they working?", why: "“Are” moves in front of “they”, exactly as in Level 1 with “Are they students?”" },
      { q: "Correct this: “Does she working?”", a: "Is she working?", why: "This tense already has a helping verb — “is”. It does not need “does” as well." },
    ] },
    { title: "Guided examples 4 — which tense?", sub: "Always true, or happening now?", items: [
      { q: "Choose: “I ___ coffee every morning.”  (drink)", a: "I drink coffee every morning.", why: "“Every morning” means always, so the present simple. No -ing." },
      { q: "Choose: “Be quiet — the baby ___.”  (sleep)", a: "The baby is sleeping.", why: "It is happening at this moment, so the present continuous." },
      { q: "Choose: “She ___ in a bank, but this week she ___ at home.”  (work / work)", a: "She works in a bank, but this week she is working at home.", why: "Her job is permanent, so simple. This week is temporary, so continuous. One sentence, both tenses." },
    ] },
    { title: "Guided examples 5 — describing a picture", sub: "Four steps: who, what they are doing, what they are wearing, where things are.", items: [
      { q: "There is a woman at a market stall. What do you say?", a: "There is a woman. She is selling tomatoes.", why: "Step 1 uses “there is” from Level 1; step 2 uses the present continuous for the action." },
      { q: "The woman has a green dress. What do you say?", a: "She is wearing a green dress.", why: "“Wearing” for clothes, and the colour comes before the noun — the Level 1 rule still applies." },
      { q: "A bag is under the table. What do you say?", a: "The bag is under the table.", why: "Position uses the simple verb “is”, not the continuous — nothing is happening, it is just where the bag is." },
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
    title: "A phone call",
    sub: "Sara rings Dawit. The most natural use of this tense.",
    turns: [
      { who: "SARA", text: "Hello Dawit. What are you doing?", side: "l" },
      { who: "DAWIT", text: "I am working. We are very busy today.", side: "r" },
      { who: "SARA", text: "Are you working this evening too?", side: "l" },
      { who: "DAWIT", text: "No, I am not. I finish at five.", side: "r" },
      { who: "SARA", text: "Good. I am studying at the library. Come and join me.", side: "l" },
      { who: "DAWIT", text: "I am coming at six. Wait for me!", side: "r" },
    ],
    note: "Notice “I finish at five” — that is the present SIMPLE, because it is his normal time. Everything else is happening now.",
    notes: tn({
      time: "12 minutes.",
      how: "Listen books closed, chorus, pair reading, then perform on real phones if learners have them. A phone call is the most natural context for this tense and the acting is easy.",
      mistakes: "The one simple-tense line is deliberate. Ask the class why it is different — that question is the whole module.",
      extra: "Change the situation: cooking, travelling, waiting for a bus, watching football.",
      tip: "“What are you doing?” is the single most useful phrase in the module. Drill it separately, ten times.",
      activity: "Phone chain: learners sit back to back in pairs, ring each other, and must ask and answer “What are you doing?” with a new activity each time.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "At the market",
    sub: "Abel and Mimi describe what they can see at Merkato.",
    turns: [
      { who: "MIMI", text: "Look at that woman. What is she selling?", side: "l" },
      { who: "ABEL", text: "She is selling tomatoes and onions.", side: "r" },
      { who: "MIMI", text: "And those two men? What are they carrying?", side: "l" },
      { who: "ABEL", text: "They are carrying a big table. It looks heavy.", side: "r" },
      { who: "MIMI", text: "Why is everybody running?", side: "l" },
      { who: "ABEL", text: "Because it is raining! Come under here.", side: "r" },
    ],
    note: "Every question uses am/is/are before the person. Find the four questions and the five -ing verbs.",
    notes: tn({
      time: "12 minutes.",
      how: "After reading, ask learners to find the four questions and say what makes each one a question. Then find the five -ing verbs and check the spelling of each.",
      mistakes: "“It is raining” has no subject in the learners' first language pattern — expect “Is raining”. It is the dummy-subject error from Level 1 Module 4.",
      extra: "Note “everybody” takes “is”, not “are”, even though it feels plural. Do not explain — just say it and move on.",
      tip: "This dialogue is the model for the picture-description task. Point that out: describing a scene is exactly what Abel and Mimi are doing.",
      activity: "Describe Merkato: pairs describe a market scene to each other for two minutes, using at least six continuous sentences.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful phrases for describing what is happening",
    sub: "Six phrases you will use every time you describe a scene.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaQuestion", title: "“What are you doing?”", desc: "The most useful question in this module." },
      { icon: "FaEye", title: "“Look at that man / woman.”", desc: "Directs attention before you describe." },
      { icon: "FaUsers", title: "“There is a … / There are …”", desc: "From Level 1. Always start a description with this." },
      { icon: "FaTshirt", title: "“He is wearing …”", desc: "Clothes and colours in one phrase." },
      { icon: "FaWalking", title: "“I think he is …”", desc: "When you are not sure. Very useful in an exam." },
      { icon: "FaClock", title: "“At the moment …”", desc: "Signals the continuous tense clearly." },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill all six in chorus, then in pairs. Phrase 5 is the exam-survival one — it lets learners describe something they are unsure about instead of falling silent.",
      mistakes: "“I think he is…” is often shortened to “I think he…”. Drill the whole phrase.",
      extra: "Add “It looks like…” for a strong class.",
      tip: "Phrase 5 is worth more marks in a speaking exam than any vocabulary item. A learner who can hedge keeps talking.",
      activity: "Uncertain descriptions: show a blurry or partial picture and require every sentence to start with “I think”.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "HANA", text: "Hello. What ______ you ______ ?", side: "l" },
      { who: "YOU", text: "I ______ ______ for the bus.", side: "r" },
      { who: "HANA", text: "______ it raining?", side: "l" },
      { who: "YOU", text: "Yes, it ______ . I ______ not ______ an umbrella.", side: "r" },
      { who: "HANA", text: "Come under mine. Where ______ you ______ ?", side: "l" },
      { who: "YOU", text: "I ______ ______ to Piassa. Thank you!", side: "r" },
    ],
    note: "Use these:  are · doing · am · waiting · Is · is · am · carrying · are · going · am · going",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps in writing, then three pairs perform before you reveal the answers.",
      answers: "are doing · am waiting · Is · is · am not carrying · are going · am going",
      mistakes: "The negative gap needs three words: “am not carrying”. Learners write two.",
      tip: "“Waiting for” and “going to” both need their prepositions. Check for them.",
      activity: "Do it again in the rain, or with a different destination.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — mime and describe", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Mime an action, your partner describes it", d: "“You are drinking coffee.” Ten actions each." },
      { t: "Describe what people in the room are doing", d: "Five sentences. Nobody may be described twice." },
      { t: "Describe a picture in four steps", d: "Who · what they are doing · what they are wearing · where things are." },
      { t: "Ring your partner and ask what they are doing", d: "Back to back. Three exchanges each." },
    ],
    notes: tn({
      time: "9 minutes for all four rounds.",
      how: "Round 1 is the fastest and funniest and it produces a very high number of correct sentences in two minutes. Start with it to build momentum.",
      mistakes: "In round 1 learners answer with the base verb — “You drink coffee”. Remind them: it is happening now.",
      tip: "Round 4 back to back removes visual clues and forces real listening. It is closer to a real phone call than a face-to-face conversation.",
      activity: "Whole-class mime: three learners mime at the front and the class describes all three at once.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — narrate the room", sub: "Three rounds. Everyone speaks.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "Say what one person is doing", d: "“Sara is writing.” Around the class, nobody repeated." },
      { t: "Say what you are doing", d: "“I am sitting. I am listening. I am learning English.”" },
      { t: "Say what is NOT happening", d: "“Nobody is sleeping. We are not speaking Amharic.”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Round A is easy and builds momentum. Round C is the hardest because negatives require an extra word — and it produces some genuinely funny sentences.",
      mistakes: "Round B is where learners drop “am”. Listen for it specifically.",
      extra: "For a strong class, add round D: ask a question about what someone is doing.",
      tip: "This activity needs no preparation and can be run in ninety seconds at the start of any lesson for the rest of the module.",
      activity: "Freeze frame: everyone freezes mid-action and the class describes three of them.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — describe a picture in five sentences", sub: "The exam task. Use the four steps.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say who is there", d: "“There is a woman. There are two children.”" },
      { t: "Say what they are doing", d: "“She is cooking. They are playing.”" },
      { t: "Say what they are wearing", d: "“She is wearing a white netela.”" },
      { t: "Say where things are", d: "“The pot is on the fire. A dog is under the table.”" },
      { t: "Say one thing you are not sure about", d: "“I think it is morning.” “I think they are her children.”" },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Model all five steps on one picture in ninety seconds. Then give a different picture to each pair. Using a different picture each time teaches the method rather than one memorised answer.",
      mistakes: "Learners stop after two sentences. The five-step frame is what prevents that — tell them to count on their fingers.",
      extra: "Any photograph works: a market, a classroom, a family meal, a bus station, a coffee ceremony.",
      tip: "Step 5 is what separates a good description from a list. Hedging is a real skill and it is worth marks.",
      activity: "Picture carousel: five pictures around the room, learners rotate every two minutes and describe each in five sentences.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the -ing ending",
    sub: "The ending is /ɪŋ/ — one sound at the back of the mouth. Not “-ink” and not “-in”.",
    left: { h: "Say the /ŋ/ clearly", items: ["working  /ˈwɜːkɪŋ/", "reading  /ˈriːdɪŋ/", "sitting  /ˈsɪtɪŋ/", "coming  /ˈkʌmɪŋ/", "running  /ˈrʌnɪŋ/"] },
    right: { h: "Do not say these", items: ["workink  ✗", "readin  ✗", "sittink  ✗", "comin  ✗", "runnink  ✗"] },
    note: "There is no /k/ at the end. Your tongue goes to the back of the mouth and stays there. Say a long “sing…” and feel where it stops.",
    notes: tn({
      time: "9 minutes.",
      how: "Model the sound in isolation first: hold /ŋ/ for two seconds. Then add it to a verb. Learners must feel where the tongue rests before they can produce it.",
      mistakes: "Adding a /k/ — “workink” — is common because the tongue releases at the back. Dropping to /n/ — “workin” — is also common and is actually normal in informal native speech, so correct it lightly.",
      extra: "Other /ŋ/ words learners know: morning, evening, thing, young, English.",
      tip: "The word “English” itself contains the sound. Point that out — they have been saying it correctly for months.",
      activity: "Long sing: the whole class holds the /ŋ/ sound for five seconds, then says five -ing verbs in a row.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — role plays", sub: "Work in pairs. Two minutes per situation.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "A phone call: “What are you doing?”", d: "Three exchanges. Back to back if you can." },
      { t: "You are at a market. Describe it to a friend who cannot see it.", d: "Six sentences, all continuous." },
      { t: "You are late. Explain what is happening.", d: "“I am waiting for the bus. It is raining. The traffic is not moving.”" },
      { t: "Describe your own family right now — where they are and what they are doing.", d: "“My mother is cooking. My brother is at school.”" },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Situation 3 is the most useful in real life — explaining a delay is something every learner will need to do.",
      mistakes: "Situation 4 mixes tenses naturally: “My brother is at school” is a state, not an action, so it uses “is” without -ing. Do not over-explain; accept both if the meaning is clear.",
      extra: "Situation 2 works best if one learner genuinely closes their eyes.",
      tip: "Give each pair one thing to listen for: the auxiliary, the -ing, or the spelling if they write it down.",
      activity: "Perform two situations to the class and let the class count the correct continuous forms.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "90 seconds. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say what you are doing right now", d: "Three sentences." },
      { t: "Say what three other people are doing", d: "Three sentences with he, she or they." },
      { t: "Describe a picture in five sentences", d: "Use the four steps plus one “I think”." },
      { t: "Say two things that are NOT happening", d: "“Nobody is sleeping.”" },
      { t: "Say one sentence with BOTH tenses", d: "“I usually walk to work, but today I am taking the bus.”" },
    ],
    notes: tn({
      time: "14 minutes including listening back.",
      how: "Record on a phone, or perform live to a partner who ticks the five steps.",
      mistakes: "Step 5 is the assessment. It requires the learner to hold both tenses in one sentence, which is the real skill of this module.",
      answers: "SUCCESS CRITERIA: am/is/are present in every sentence · -ing on every main verb · correct tense choice in step 5 · a listener can draw the picture from step 3.",
      tip: "Ask a partner to draw what they hear in step 3. If the drawing matches the picture, the description worked.",
      activity: "Keep every recording for the end-of-level comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — what is happening?", sub: "Listen twice. Write who and what.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17.5, lsm: 1.36,
      text: "“I am standing at the bus station in Piassa.\nA lot of people are waiting for the bus.\nAn old man is reading a newspaper.\nTwo women are talking and laughing.\nA boy is carrying a big bag of onions.\nIt is starting to rain, so everybody is running.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write the six people or groups you hear.",
      "Write what each one is doing.",
      "Then draw the scene.",
      "The teacher reads it twice, at natural speed.",
    ] },
    notes: tn({
      time: "11 minutes.",
      how: "Read twice at natural pace. The drawing task proves comprehension in a way writing does not, and it works for learners whose writing is still weak.",
      mistakes: "Learners catch the person but miss the action, or the reverse. Tell them both matter before they start.",
      extra: "Add a seventh line if the class is strong: “A dog is sleeping under a chair.”",
      answers: "1 the speaker — standing · 2 a lot of people — waiting · 3 an old man — reading · 4 two women — talking and laughing · 5 a boy — carrying · 6 everybody — running",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check the auxiliary and the -ing in each one.",
    size: 17,
    items: [
      { q: "1 — the speaker", a: "He is standing at the bus station.", why: "“I am standing” becomes “he is standing” when you report it. The auxiliary changes with the person." },
      { q: "2 — a lot of people", a: "They are waiting for the bus.", why: "“A lot of people” is plural, so “are”. And “waiting FOR” — the preposition is part of the verb." },
      { q: "3 — an old man", a: "He is reading a newspaper.", why: "One person, so “is”. “Read” has two vowels, so no doubling: reading, not readding." },
      { q: "4 — two women", a: "They are talking and laughing.", why: "Two verbs sharing one “are”. You do not repeat the auxiliary for the second verb." },
      { q: "5 — a boy", a: "He is carrying a big bag.", why: "“Carry” keeps its y for the -ing form: carrying. Compare “carries” for the -s form." },
    ],
    notes: keyNotes("Answer 4 is worth pointing out: two actions share one auxiliary. Learners often repeat it — “are talking and are laughing” — which is understandable but unnecessary."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — two tenses together", sub: "Listen for which tense each sentence uses.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.34,
      text: "MIMI:   Hello Hana. Are you working today?\nHANA:   No, I am not. I usually work on Tuesday, but today is my day off.\nMIMI:   What are you doing?\nHANA:   I am cooking. My sister is helping me.\nMIMI:   Do you cook every day?\nHANA:   No, I do not. My mother usually cooks. But she is visiting Gondar this week." },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. Is Hana working today?",
      "2. Which day does she usually work?",
      "3. What is she doing now?",
      "4. Who usually cooks?",
      "5. Why is Hana cooking today?",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Read twice. Then ask learners to identify which lines use the simple and which use the continuous — there are three of each. That sorting task is the real exercise.",
      mistakes: "Question 5 requires joining two pieces of information: the mother usually cooks, but she is away. That is inference, not transcription.",
      extra: "Ask a sixth: “Which words told you the tense?” The answers are “usually”, “today” and “this week”.",
      answers: "1 No, she is not. · 2 On Tuesday. · 3 She is cooking. · 4 Her mother. · 5 Because her mother is visiting Gondar this week.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Notice which answers need which tense.",
    size: 17,
    items: [
      { q: "1 — Is Hana working today?", a: "No, she is not.", why: "A short answer keeps the auxiliary “is”. The question was in the continuous, so the answer is too." },
      { q: "2 — Which day does she usually work?", a: "She usually works on Tuesday.", why: "“Usually” signals the present simple, so the verb takes the -s from Module 1 — not the -ing." },
      { q: "3 — What is she doing now?", a: "She is cooking.", why: "Happening at this moment, so the continuous. Both parts needed." },
      { q: "4 — Who usually cooks?", a: "Her mother usually cooks.", why: "“Usually” again, so the simple, with the -s on “cooks”." },
      { q: "5 — Why is Hana cooking today?", a: "Because her mother is visiting Gondar this week.", why: "“This week” makes it temporary, so the continuous. Two tenses appear in this one answer." },
    ],
    notes: keyNotes("Answers 2 and 3 sit side by side deliberately: “works” with -s, “is cooking” with -ing. If a learner mixed them, the tense contrast has not landed yet — go back to slide 9."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to hear which tense is being used", sub: "Four clues that tell you before the verb arrives.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaVolumeUp", title: "Listen for am, is or are", desc: "If you hear one of them, an -ing is coming. The auxiliary always arrives first." },
      { icon: "FaClock", title: "Listen for the time word", desc: "“Every day”, “usually” → simple. “Now”, “today”, “this week” → continuous." },
      { icon: "FaHandPaper", title: "Listen for do or does", desc: "If you hear those, it is the present simple. This tense never uses them." },
      { icon: "FaEye", title: "Listen for the ending", desc: "-s means simple. -ing means continuous. Two different endings, two different tenses." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Read ten mixed sentences and have learners hold up one finger for simple, two for continuous. Ask which clue told them.",
      mistakes: "Learners guess from meaning alone and get it wrong. The grammatical clues are more reliable than the meaning at this level.",
      tip: "Clue 1 is the most useful because the auxiliary comes early in the sentence — learners can prepare their ear before the verb.",
      activity: "One finger or two: twenty rapid sentences, whole class, no writing.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — a Saturday at Merkato", sub: "Read it aloud twice before you answer.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 18.5, lsm: 1.36,
      text: "It is Saturday morning and Merkato is very busy.\nHundreds of people are buying and selling.\nA woman is selling tomatoes. She is wearing a white netela.\nTwo men are carrying a heavy table.\nA young boy is running between the stalls.\nAn old man is sitting on a chair and drinking coffee.\nIt is not raining today, so everybody is happy." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the whole text once.",
      "The class reads it together, in chorus.",
      "Then seven learners read one line each.",
      "Underline every -ing verb. There are nine.",
    ] },
    notes: tn({
      time: "11 minutes.",
      how: "Teacher, chorus, individuals, then the underlining task. Marking up the text makes the pattern visible and is far more active than answering questions alone.",
      mistakes: "The nine -ing verbs: buying, selling, selling, wearing, carrying, running, sitting, drinking, raining. Check that learners spot “sitting” with its doubled t and “running” with its doubled n.",
      extra: "Note “It is not raining” — the negative, with “not” between “is” and the verb.",
      tip: "Ask learners which two verbs doubled their consonant and why. That is the hardest spelling rule and this text contains two clear examples.",
      activity: "Draw the scene: learners draw Merkato from the description, then compare drawings.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE, using the present continuous.",
    items: [
      "What is the woman selling?",
      "What is she wearing?",
      "What are the two men doing?",
      "What is the old man doing?",
      "Is it raining?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Every answer needs both parts of the tense. That is what is being assessed, not the facts.",
      mistakes: "Question 4 has two actions — sitting and drinking — sharing one auxiliary. A complete answer gives both.",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 She is selling tomatoes. · 2 She is wearing a white netela. · 3 They are carrying a heavy table. · 4 He is sitting on a chair and drinking coffee. · 5 No, it is not raining.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Check both parts of the verb in every answer.",
    size: 17,
    items: [
      { q: "1 — What is the woman selling?", a: "She is selling tomatoes.", why: "Both parts: “is” for one woman, and “selling” with the -ing. Neither can be dropped." },
      { q: "2 — What is she wearing?", a: "She is wearing a white netela.", why: "The colour comes before the noun — the Level 1 rule still applies inside this tense." },
      { q: "3 — What are the two men doing?", a: "They are carrying a heavy table.", why: "“Are” for a plural subject. “Carry” keeps its y for the -ing form." },
      { q: "4 — What is the old man doing?", a: "He is sitting on a chair and drinking coffee.", why: "Two actions, one auxiliary. “Sit” doubles its t; “drink” has two consonants already so it does not." },
      { q: "5 — Is it raining?", a: "No, it is not raining.", why: "A short answer would be “No, it is not.” The full form repeats the verb and is also correct." },
    ],
    notes: keyNotes("Answer 4 is the most informative: it tests the shared auxiliary AND the doubling rule in one sentence."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — both tenses in one text", sub: "The hardest reading in this module. Watch the tense change.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 18, lsm: 1.34,
      text: "Hana is a nurse. She works at the health centre in Gondar.\nShe usually starts at seven o'clock and finishes at four.\nBut this week she is not working at the health centre.\nShe is helping at a clinic in a small village.\nShe is staying with her aunt there.\nShe likes the work, but she misses her family.\nNext week she goes back to Gondar." },
    side: { label: "The tense question", color: C.read, size: 16, items: [
      "Which sentences are about her normal life?",
      "Which sentences are about this week only?",
      "Find the words that tell you: usually · this week · next week.",
      "Why is “She likes the work” NOT continuous?",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "This text is the module's central idea in seven lines. Sort the sentences into two columns on the board — normal life and this week — with the class.",
      mistakes: "The last question is genuinely hard: “like” describes a feeling, not an action, so it is not normally used in the continuous. Do not teach the rule as a list — just say that some verbs about feelings and thoughts stay simple.",
      extra: "Other verbs that stay simple: want, need, know, understand, believe, love.",
      tip: "Do not over-teach the state verbs. Mention them once, correct gently, and let exposure do the rest. Learners meet them constantly.",
      activity: "Two columns: learners copy the seven sentences into NORMAL LIFE and THIS WEEK columns, then explain their choices.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — questions, answers and vocabulary review", sub: "Answer first, then check the tense.",
    size: 17,
    items: [
      { q: "1 — Where does Hana normally work?", a: "She works at the health centre in Gondar.", why: "Her normal job, so the present simple with the -s from Module 1." },
      { q: "2 — What is she doing this week?", a: "She is helping at a clinic in a village.", why: "“This week” makes it temporary, so the continuous. Both parts needed." },
      { q: "3 — Where is she staying?", a: "She is staying with her aunt.", why: "Temporary again. “Stay” has two vowels so no doubling: staying." },
      { q: "4 — Why is “She likes the work” not continuous?", a: "Because “like” is a feeling, not an action. Feelings stay in the simple form.", why: "Other verbs like this: want, need, know, understand. Do not use them with -ing." },
      { q: "5 — Vocabulary check: name the five verbs from this module.", a: "wear · carry · wait for · look at · listen to", why: "All five appeared in this module. Three of them need a preposition — check you remember which." },
    ],
    notes: keyNotes("Question 4 is the hardest in the module. Accept any answer that shows the learner has noticed the difference, even if the wording is imprecise."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — write the -ing form", sub: "Apply the three spelling rules.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write the -ing form of each verb. Say which rule you used.",
    items: [
      "1.  work · read · play · wait",
      "2.  write · come · make · live",
      "3.  run · sit · get · stop",
      "4.  study · carry · try",
      "5.  listen · begin · open · swim",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Rows 1 to 4 are one rule each. Row 5 is mixed and is the real test — learners must decide which rule applies to each verb.",
      answers: "1 working, reading, playing, waiting · 2 writing, coming, making, living · 3 running, sitting, getting, stopping · 4 studying, carrying, trying · 5 listening, beginning, opening, swimming",
      mistakes: "Row 5: “listen” and “open” do not double because the stress is not on the last syllable. Do not teach that rule — just give the answers and let learners learn these as words.",
      tip: "Row 4 is the contrast with Module 1. Ask learners for both forms: studies and studying.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — describe a picture", sub: "The Level 2 writing task. Eight sentences.",
    panelW: 7.6,
    panel: { label: "Write eight sentences using this frame", color: C.write, tint: C.writeTint, size: 18.5, lsm: 1.45,
      text: "In this picture there is ______________.\nThere are ______________.\n______ is ______________ing.\n______ are ______________ing.\n______ is wearing ______________.\nThe ______________ is on / under / next to the ______________.\nIt is not ______________ing.\nI think ______________." },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Is am / is / are in every action sentence?",
      "Is the -ing on every action verb?",
      "Is the spelling of the -ing form correct?",
      "Did you use “there is” for one and “there are” for many?",
      "Did you finish with an “I think” sentence?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Give every learner the same picture the first time so you can compare, then a different one each in the second round.",
      mistakes: "The frame prevents the commonest failure — stopping after three sentences. Insist on all eight.",
      extra: "Fast finishers add two more sentences about what people are wearing.",
      tip: "Collect these and keep them. The same task appears in the Level 2 exam.",
      activity: "Swap and draw: partners exchange descriptions and draw what they read, then compare with the original picture.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — choose the tense", sub: "Simple or continuous? Write the full sentence.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write each sentence with the verb in the correct tense.",
    items: [
      "1.  I ______ coffee every morning.  (drink)",
      "2.  Be quiet! The baby ______.  (sleep)",
      "3.  She ______ in a bank, but this week she ______ at home.  (work / work)",
      "4.  What ______ you ______ at the moment?  (do)",
      "5.  My brother usually ______ to school, but today he ______ the bus.  (walk / take)",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Do item 1 together, asking the test question aloud — always or now? Then let them work alone.",
      answers: "1 drink · 2 is sleeping · 3 works / is working · 4 are ... doing · 5 walks / is taking",
      mistakes: "Items 3 and 5 need both tenses in one sentence. That is the module's hardest skill and the most important.",
      tip: "Items 3 and 5 are the ones to read aloud afterwards. Hearing the contrast in one sentence teaches it better than any explanation.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — answers and why", sub: "Ask the test question every time: always, or now?",
    size: 17,
    items: [
      { q: "1 — “I ___ coffee every morning.”", a: "I drink coffee every morning.", why: "“Every morning” means always, so the present simple. With “I” there is no -s." },
      { q: "2 — “Be quiet! The baby ___.”", a: "The baby is sleeping.", why: "It is happening at this moment, so the continuous. Both parts needed." },
      { q: "3 — “She ___ in a bank, but this week she ___ at home.”", a: "She works in a bank, but this week she is working at home.", why: "Her job is permanent, so simple with -s. “This week” is temporary, so continuous." },
      { q: "4 — “What ___ you ___ at the moment?”", a: "What are you doing at the moment?", why: "“At the moment” signals the continuous, and the auxiliary comes before the subject in a question." },
      { q: "5 — “My brother usually ___, but today he ___ the bus.”", a: "My brother usually walks to school, but today he is taking the bus.", why: "“Usually” → simple with -s. “Today” → continuous. Two tenses, one sentence." },
    ],
    notes: keyNotes("Items 3 and 5 are the diagnostic. A learner who gets both right has understood the contrast rather than memorised endings."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist for this module", sub: "Add these to your Module 1 checks.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "Is am / is / are there?", d: "“I working” is never correct. Both parts, every time." },
      { t: "Is the -ing on the main verb?", d: "“I am work” is never correct either." },
      { t: "Is the -ing spelled correctly?", d: "writing (drop the e) · running (double the n) · studying (keep the y)." },
      { t: "Is it the right tense?", d: "Every day → simple. Right now → continuous. Ask the question every time." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points, then have learners check their picture description against all four.",
      tip: "The wall now has eight checks across two Level 2 modules. Refer to them by number when marking.",
      activity: "Deliberate error hunt: write four sentences on the board with exactly four errors, one of each type.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Which is correct?", opts: "a) I working now.     b) I am working now.     c) I am work now." },
      { q: "2. The -ing form of “write” is …", opts: "a) writeing     b) writing     c) writting" },
      { q: "3. The -ing form of “run” is …", opts: "a) runing     b) running     c) runnning" },
      { q: "4. Complete: “___ she working today?”", opts: "a) Do     b) Does     c) Is" },
      { q: "5. Choose: “I ___ coffee every morning.”", opts: "a) drink     b) am drinking     c) drinking" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 c · 5 a",
      tip: "Question 4 is the diagnostic. A learner choosing a) or b) is importing “do” from Module 1.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Write the missing words.",
    color: C.green, instruction: "Copy each sentence and fill the gaps.", size: 18,
    items: [
      "1.  She ______ ______ a book.  (read)",
      "2.  They ______ ______ football.  (play)",
      "3.  I ______ not ______ to the radio.  (listen)",
      "4.  ______ he ______ for the bus?  (wait)",
      "5.  It ______ ______ , so take an umbrella.  (rain)",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Every item needs two words. Do item 1 together, then leave them to it.",
      answers: "1 is reading · 2 are playing · 3 am not listening · 4 Is ... waiting · 5 is raining",
      mistakes: "Item 3 needs three words because of the negative. Item 4 needs a capital I because it starts the sentence.",
      tip: "Items 3 and 4 also need their prepositions — “listen to” and “wait for”. Check for them.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Verbs, spellings and tenses.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the VERB to its -ing FORM", opts: "1. write     2. run     3. study     4. work          a) working     b) running     c) studying     d) writing" },
      { q: "Part 2 — match the SENTENCE to the TENSE", opts: "1. I drink tea every day.     2. I am drinking tea now.     3. She works in a bank.     4. She is working at home today." },
      { q: "a) present continuous        b) present simple", opts: "c) present simple        d) present continuous" },
      { q: "Part 3 — match the VERB to its PREPOSITION", opts: "1. wait     2. listen     3. look          a) to     b) at     c) for" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks, three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–d, 2–b, 3–c, 4–a.  ·  Part 2: 1–b, 2–a, 3–c, 4–d.  ·  Part 3: 1–c, 2–a, 3–b.",
      tip: "Part 3 covers the three prepositional verbs from the vocabulary section. Learners forget these constantly.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — describe the actions", sub: "Write one sentence for each.",
    color: C.green, instruction: "Write a full present continuous sentence for each.", size: 18,
    items: [
      "1.  a woman · cook · injera",
      "2.  two boys · play · football",
      "3.  my sister · study · English",
      "4.  the man · sit · on a chair",
      "5.  it · rain",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Do item 1 together. Then let them work alone and read five answers aloud at the end.",
      answers: "1 A woman is cooking injera. · 2 Two boys are playing football. · 3 My sister is studying English. · 4 The man is sitting on a chair. · 5 It is raining.",
      mistakes: "Item 4 needs the doubled t. Item 5 needs the dummy subject “it”, which learners drop.",
      tip: "Item 5 is the shortest and the most commonly wrong. “Is raining” with no subject is a Level 1 error returning.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each sentence has one or more errors.",
    color: C.green, instruction: "Rewrite each sentence correctly.", size: 18,
    items: [
      "1.  She writeing a letter.",
      "2.  Does he working today?",
      "3.  They not listening to the teacher.",
      "4.  I am go to school every day.",
      "5.  He is runing to the bus.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each sentence. Sentence 1 has two.",
      answers: "1 She is writing a letter. (missing auxiliary + spelling) · 2 Is he working today? · 3 They are not listening to the teacher. · 4 I go to school every day. (wrong tense) · 5 He is running to the bus. (spelling)",
      mistakes: "Sentence 4 is the tense error, not a form error. It is grammatically well formed but means the wrong thing. Point that out.",
      tip: "Have learners count the errors before correcting. Counting forces careful reading.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  The present continuous needs am, is or are.",
      "2.  “Does she working?” is a correct question.",
      "3.  The -ing form of “sit” is “siting”.",
      "4.  “I am going to church every Sunday” is correct.",
      "5.  You wait FOR someone.",
      "6.  “Study” becomes “studying” for the -ing form.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test.",
      answers: "1 T · 2 F — “Is she working?” · 3 F — it is “sitting” with a double t · 4 F — “every Sunday” means always, so “I go to church every Sunday” · 5 T · 6 T",
      tip: "Item 4 is the tense error in disguise. If several learners mark it true, go back to slide 9.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Answer in a full sentence.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What are you doing right now?",
      "2.  What is the person next to you doing?",
      "3.  What are you wearing today?",
      "4.  What do you usually do on Saturday?",
      "5.  What are you doing this week that is different from usual?",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Items 1 to 3 need the continuous, item 4 needs the simple, item 5 needs both ideas. That mix is the point.",
      answers: "1 I am sitting in the classroom. · 2 He/She is writing. · 3 I am wearing ___. · 4 I usually ___ on Saturday. · 5 This week I am ___.",
      mistakes: "Item 4 is the trap. Learners answer in the continuous because the previous three were.",
      tip: "Ask three learners to read items 4 and 5 aloud one after the other. The tense change is audible.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Say five things that are happening in this room right now.",
      "2.  Describe a picture in five sentences using the four steps.",
      "3.  Say three sentences with “every day” and three with “right now”.",
      "4.  Ask your partner four questions in the present continuous.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Give each partner a listening job: task 1 check both parts of the verb, task 3 check the tense matches the time word.",
      answers: "SUCCESS CRITERIA: 1 am/is/are plus -ing in all five · 2 five sentences covering all four steps · 3 correct tense for each time word · 4 auxiliary before the subject in all four questions.",
      tip: "Task 3 is the module assessment. Listen to as many pairs as you can.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These use everything from this module and Module 1.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write five sentences describing this room right now.", opts: "All present continuous." },
      { q: "2. Correct this:  “She is write a letter and her brother watching television.”", opts: "There are three things to fix." },
      { q: "3. Write three sentences that contain BOTH tenses.", opts: "“I usually …, but today I am …”" },
      { q: "4. Write the -ing form of:  come · swim · study · begin · wait · stop", opts: "Six verbs, three rules." },
      { q: "5. Write two questions in the present continuous and answer them.", opts: "Use short answers." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard.",
      answers: "2 “She is writing a letter and her brother is watching television.” — the -ing on “write”, and the missing auxiliary before “watching”. 4 coming, swimming, studying, beginning, waiting, stopping.",
      tip: "Question 3 is the module's real skill. Read three learners' answers aloud.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why does English have two present tenses when many languages have one?", opts: "What extra information does the second one give?" },
      { q: "2. Your friend says “I am going to church every Sunday.” Why is it wrong, and how would you explain it?", opts: "The grammar is fine. The meaning is not." },
      { q: "3. Why do we say “I know the answer” and not “I am knowing the answer”?", opts: "What kind of word is “know”?" },
      { q: "4. Which tense do you think you will use more in real conversation? Why?", opts: "Think about what people actually talk about." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning, then give the English phrase for what they said.",
      answers: "1 The second tense marks whether something is permanent or temporary, which English keeps separate and many languages leave to context. 2 The form is correct but “every Sunday” means it is a habit, so the simple is needed — the sentence as written says it is happening temporarily this period. 3 “Know” describes a state of mind, not an action, and states do not normally take the continuous. 4 Both, but the simple is more common in conversation because people talk about their lives and habits more than about the present second.",
      tip: "Question 2 is the best test of understanding in this module, because the sentence is grammatically perfect and still wrong.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · The form", items: [
      { q: "1. Which is correct?", opts: "a) I working.     b) I am working.     c) I am work." },
      { q: "2. Complete: “She ___ ___ a letter.”  (write)", opts: "Write both words." },
      { q: "3. Complete: “They ___ ___ football.”  (play)", opts: "Write both words." },
      { q: "4. What two parts does this tense always need?", opts: "Name both." },
    ] },
    { part: "Part 2 · Spelling", items: [
      { q: "5. The -ing form of “come” is …", opts: "a) comeing     b) coming     c) comming" },
      { q: "6. The -ing form of “sit” is …", opts: "a) siting     b) sitting     c) siteing" },
      { q: "7. The -ing form of “study” is …", opts: "a) studing     b) studiing     c) studying" },
      { q: "8. Write the -ing form of:  run · write · wait", opts: "Three verbs, three rules." },
    ] },
    { part: "Part 3 · Negatives and questions", items: [
      { q: "9. Make it negative: “He is sleeping.”", opts: "Write the full sentence." },
      { q: "10. Make it a question: “They are working.”", opts: "Write the full sentence." },
      { q: "11. Which is correct?", opts: "a) Does she working?     b) Is she working?     c) Do she working?" },
      { q: "12. Write the short answer: “Are you studying?”  (yes)", opts: "Three words." },
    ] },
    { part: "Part 4 · Which tense, and listening", items: [
      { q: "13. Choose: “I ___ coffee every morning.”", opts: "a) drink     b) am drinking" },
      { q: "14. Choose: “Be quiet — the baby ___.”", opts: "a) sleeps     b) is sleeping" },
      { q: "15. Listen: what is the old man doing?", opts: "Full sentence." },
      { q: "16. Listen: is it raining?", opts: "Full sentence." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write two sentences about what is happening in this room.", opts: "Both parts of the verb." },
      { q: "18. Write one sentence with BOTH tenses.", opts: "“I usually …, but today I am …”" },
      { q: "19. Describe a person in this room in two sentences.", opts: "What they are doing and wearing." },
      { q: "20. SPEAKING: describe a picture in five sentences.", opts: "Your teacher or partner listens and checks." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 2 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nFOR QUESTIONS 15 AND 16, READ ALOUD: “An old man is sitting on a chair and reading a newspaper. It is not raining today.”",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — which is correct?", a: "b) I am working.", why: "Both parts are needed: the verb “to be” and the -ing. Option a) drops one, option c) drops the other." },
      { q: "Q2 — “She ___ ___ a letter.”", a: "is writing", why: "“Is” for one person, and “write” drops its e before -ing." },
      { q: "Q3 — “They ___ ___ football.”", a: "are playing", why: "“Are” for a plural subject. “Play” has a vowel before the y, so it simply adds -ing." },
      { q: "Q4 — the two parts", a: "am / is / are  +  the verb with -ing", why: "Neither part can be missing. This is the single most important fact in the module." } ],
    [ { q: "Q5 — “come”", a: "b) coming", why: "It ends in -e, so the e is dropped. The consonant does not double." },
      { q: "Q6 — “sit”", a: "b) sitting", why: "One vowel and one consonant at the end, so the consonant doubles." },
      { q: "Q7 — “study”", a: "c) studying", why: "The y does not change for the -ing form. It only changes for the -s form from Module 1: studies." },
      { q: "Q8 — run · write · wait", a: "running · writing · waiting", why: "One doubles, one drops the e, one changes nothing — the three rules in three verbs." } ],
    [ { q: "Q9 — negative of “He is sleeping.”", a: "He is not sleeping.", why: "“Not” goes after “is”. Nothing else changes and the -ing stays." },
      { q: "Q10 — question from “They are working.”", a: "Are they working?", why: "“Are” moves in front of the subject, exactly as with the verb “to be” in Level 1." },
      { q: "Q11 — which is correct?", a: "b) Is she working?", why: "This tense uses am, is or are as its helping verb. It never uses do or does." },
      { q: "Q12 — short answer to “Are you studying?”", a: "Yes, I am.", why: "The short answer keeps the auxiliary. “Yes” alone is understood but incomplete." } ],
    [ { q: "Q13 — “I ___ coffee every morning.”", a: "a) drink", why: "“Every morning” means always, so the present simple from Module 1." },
      { q: "Q14 — “Be quiet — the baby ___.”", a: "b) is sleeping", why: "It is happening at this moment, so the present continuous." },
      { q: "Q15 — what is the old man doing?", a: "He is sitting on a chair and reading a newspaper.", why: "Two actions sharing one auxiliary. Note the doubled t in “sitting”." },
      { q: "Q16 — is it raining?", a: "No, it is not raining.", why: "The negative goes between “is” and the verb. And “it” is needed as the subject." } ],
    [ { q: "Q17 — two sentences about this room", a: "e.g. “The teacher is standing. We are writing.”", why: "Marked on both parts of the verb appearing in each sentence." },
      { q: "Q18 — one sentence with both tenses", a: "e.g. “I usually walk to school, but today I am taking the bus.”", why: "This is the hardest item and it carries the most marks. Simple for the habit, continuous for today." },
      { q: "Q19 — describe a person", a: "e.g. “She is writing. She is wearing a blue shirt.”", why: "Action and clothing — two of the four description steps." },
      { q: "Q20 — speaking task", a: "Five sentences using the four steps", why: "Marked on both parts of the verb, correct spelling in speech, and covering who, what, wearing and where." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q11, Q13 and Q14 are the diagnostic questions. Q11 shows whether learners are importing “do” from Module 1; Q13 and Q14 together show whether the tense contrast has landed. If the class failed those, drill slide 9 before Module 3."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Out loud.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Narrate ten minutes of your day", d: "Say out loud what you are doing, as you do it. “I am cooking. I am washing the plates.”" },
      { t: "Write the -ing form of twenty verbs", d: "Check them against the three rules." },
      { t: "Describe three photographs", d: "Five sentences each, using the four steps." },
      { t: "Say five pairs of sentences", d: "One with “every day”, one with “right now”, for the same verb." },
      { t: "Ask three people “What are you doing?”", d: "In English if you can. Family counts." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Monday's task feels strange for about a minute and then it works extremely well. Narrating your own actions is the fastest way to make this tense automatic.",
      tip: "Thursday's paired sentences are the most valuable. Doing both tenses for the same verb is what fixes the contrast.",
      activity: "Ask learners to send one classmate a photo and a description each evening.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write the -ing form of thirty verbs", d: "Ten from each spelling rule. Underline the letters that changed." },
      { t: "Describe a photograph in eight sentences", d: "Use the frame from slide 47. Check all four points." },
      { t: "Record your 90-second speaking challenge", d: "What you are doing · three other people · a picture in five sentences · two negatives · one sentence with both tenses." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 2 is the exam task. Show your own completed example so the standard is visible.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording personally, by voice. Listen specifically for the missing auxiliary and the tense choice in the last sentence.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaFont", title: "Thirty -ing forms — 5 marks", desc: "Ten per rule (3) · spelling correct (2)." },
      { icon: "FaPencilAlt", title: "Picture description — 10 marks", desc: "Eight sentences (2) · am/is/are in every action sentence (3) · -ing on every verb (3) · all four steps covered (2)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five parts (3) · both parts of the verb throughout (4) · correct tense in the final sentence (3)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework. The final sentence of the recording carries three marks on its own — that tells learners what matters.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Mark only what has been taught in Modules 1 and 2 of this level, plus the Level 1 checklist.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaClock", title: "The present continuous", desc: "For what is happening now, or temporarily around now." },
      { icon: "FaSitemap", title: "The two-part form", desc: "am / is / are  +  verb + ing. Neither part can be missing." },
      { icon: "FaFont", title: "The spelling rules", desc: "add -ing · drop the e · double the consonant · keep the y." },
      { icon: "FaQuestion", title: "Negatives and questions", desc: "No “do” or “does”. The verb “to be” does all the work." },
      { icon: "FaEye", title: "Describing a scene", desc: "Who · what they are doing · what they are wearing · where things are." },
      { icon: "FaRedo", title: "Choosing the tense", desc: "Always true → simple. Happening now → continuous. Ask the question." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2 and read the objectives again. Ask the same question you asked at the start.",
      tip: "Ask each learner to name the one thing they found hardest. That list is your plan for the first ten minutes of Module 3.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaSitemap", title: "The form", desc: "I am working  ·  you are working\nhe / she / it is working\nwe / they are working\nNegative: is NOT working  ·  Question: IS he working?" },
      { icon: "FaFont", title: "The spelling rules", desc: "most: + ing  →  working\nends in -e: drop it  →  writing\n1 vowel + 1 consonant: double  →  running\nends in -y: no change  →  studying" },
      { icon: "FaRedo", title: "Simple or continuous?", desc: "every day · usually · always  →  SIMPLE\nnow · today · this week  →  CONTINUOUS\nAsk: always true, or happening now?" },
      { icon: "FaEye", title: "Describing a picture", desc: "1 Who is there?  →  There is / There are\n2 What are they doing?  →  is / are + -ing\n3 What are they wearing?\n4 Where are things?  ·  5 “I think …”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it.",
      tip: "Print it as an A4 poster beside the Module 1 poster. The two tenses side by side on the wall is the best revision aid in Level 2.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now describe any scene in front of you — in English, as it happens.",
    sub: "Two present tenses, used correctly, is more than many learners manage after years of study.\nYou can say what you do, and what you are doing. Those are different things, and now you know why.",
    chips: ["NEXT — Module 3", "Past Simple & Telling a Story", "What happened yesterday, last week, last year"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the achievement precisely: two tenses used correctly and kept apart. That is a genuine milestone and many learners never manage it.",
      tip: "Preview Module 3 honestly: the past simple has regular and irregular verbs, so it is more memory work than rule work. Warn them so nobody is surprised.",
      activity: "Ask every learner to describe one thing happening in the room before they leave.",
    }),
  });
};
