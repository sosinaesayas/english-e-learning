"use strict";
/* LEVEL 1 · MODULE 5 — Simple Sentences   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 1", levelNo: "1", levelName: "Beginner\nEnglish", cefr: "CEFR Pre-A1 → A1",
    moduleTag: "Module 5 of 6",
    title: "Simple Sentences",
    sub: "You have the words. Now put them in the right order. This module fixes the single biggest difference between Amharic and English.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5", v: "NEW VERBS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by writing “I injera eat” on the board and asking whether it is correct. Most learners will say yes, because it follows Amharic word order. Then write “I eat injera.” That single contrast is the whole module.",
      tip: "This is the most important module in Level 1 for long-term accuracy. A learner who does not automate English word order here will still be producing “I injera eat” in Level 3.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things — all about building your own sentences.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Put words in the correct English order", d: "Subject, then verb, then object. Every time." },
      { t: "Use the subject pronouns", d: "I · you · he · she · it · we · they" },
      { t: "Use the object pronouns", d: "me · you · him · her · it · us · them" },
      { t: "Say what you can and cannot do", d: "“I can read English.”  “I cannot drive.”" },
      { t: "Join two ideas with “and” and “but”", d: "“I like coffee, but I do not like tea.”" },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective and ask “Can you do this now?” Objective 1 is the one that matters most — say so.",
      tip: "Almost no new vocabulary in this module. Tell learners that: it is a relief after Module 4, and it means all their effort goes into structure.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: which one sounds right?", sub: "No wrong answers. Say them out loud.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaComments", title: "1 · Say both", desc: "“I injera eat.”   and   “I eat injera.”\nSay both out loud. Which one sounds like English to you?" },
      { icon: "FaLayerGroup", title: "2 · Three words", desc: "coffee · drinks · my mother\nMake a sentence from these three. Any order you like." },
      { icon: "FaPencilAlt", title: "3 · Your own", desc: "Say one sentence in English about what you did this morning. Any words you know." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Task 1 is the diagnostic. Count how many learners choose each version — that number tells you how much drilling this module needs. Do not reveal the answer yet.",
      mistakes: "Correct nothing in the warm-up. The point is to surface the problem, not to fix it yet.",
      tip: "Write both versions from task 1 on the board and leave them there for the whole module. You will return to them on slide 6.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "In Amharic the verb comes last. In English it comes second.",
    sub: "That one difference causes more errors than anything else in this course.\nIt is not a small thing to learn — but it is one rule, and once it is automatic it is fixed for life.",
    chips: ["Amharic:  I  injera  EAT", "English:  I  EAT  injera", "Subject · Verb · Object"],
    notes: tn({
      time: "5 minutes.",
      how: "Say both versions aloud with the same three words and point at the verb each time. Naming the cause plainly — “this is a real difference between the two languages, not a mistake you are making” — removes embarrassment and speeds up the fix.",
      mistakes: "Learners who have studied English at school often know this rule and still do not use it under pressure. Knowing is not the same as automating, which is why this module is mostly drilling.",
      tip: "Repeat the phrase “subject, verb, object” as a rhythm, three times, with the class. It becomes a chant they can run in their head while speaking.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.grid({
    sec: SEC.con, title: "Every English sentence needs two things", sub: "A subject and a verb. Without both, it is not a sentence.",
    cols: 2, color: C.green, titleSize: 24, descSize: 17, shadow: true, tint: C.white,
    items: [
      { icon: "FaUser", title: "1 · The SUBJECT", desc: "Who or what does the action.\n\nSara · my mother · the dog · I · she · they\n\nEnglish always needs one — even when there is nothing real to name: “IT is raining.”" },
      { icon: "FaWalking", title: "2 · The VERB", desc: "The action, or the word “to be”.\n\neat · work · go · read · like\nam · is · are\n\nEnglish always needs one: “He IS a teacher”, never “He teacher”." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Write five short sentences on the board and have learners come up and underline the subject in one colour and the verb in another. Doing it physically is far more effective than being told.",
      mistakes: "The dummy subject “it” for weather and time is genuinely strange for Amharic speakers. “Is raining” feels complete to them. Drill “It is raining”, “It is hot”, “It is nine o'clock”.",
      extra: "Sentences to analyse: “Sara reads a book.” “My father works in Adama.” “It is cold today.” “They are students.”",
      tip: "This slide connects Module 3 (the verb “to be”) to this module (action verbs). Say that — learners like seeing that the rules connect.",
      activity: "Two-colour underlining: give learners eight sentences on paper and two coloured pens. Subject in one colour, verb in the other.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — SVO
  L.compare({
    sec: SEC.con, title: "Subject + Verb + Object — the order never changes",
    sub: "This is the rule the whole module is built on.",
    left: { h: "Correct — English order", items: ["I eat injera.", "She reads a book.", "We study English.", "My father drives a bus.", "They like coffee."] },
    right: { h: "Wrong — first-language order", items: ["I injera eat.", "She a book reads.", "We English study.", "My father a bus drives.", "They coffee like."] },
    note: "Say the three words as a rhythm:  SUBJECT · VERB · OBJECT.   Who does it, what they do, what they do it to.",
    notes: tn({
      time: "14 minutes. This is the most important slide in Level 1 — do not rush it.",
      how: "Draw three columns on the board labelled SUBJECT, VERB, OBJECT. Write each word of a sentence on a separate card and physically place the cards in the columns. Then read the sentence left to right. Do this ten times with different sentences.",
      mistakes: "The wrong column is not careless — it is a correct sentence in the learner's first language. Say that out loud. Learners who feel stupid stop trying; learners who understand the cause fix it faster.",
      extra: "More sentences to build: “Hana drinks water.” “The children eat bread.” “I want a pen.” “We watch television.”",
      tip: "Every lesson from now on, spend two minutes on the three-column card drill. It costs nothing to prepare and it is the single highest-value drill in Level 1.",
      activity: "Human sentence: three learners hold cards — SUBJECT, VERB, OBJECT — and physically arrange themselves in order at the front. Then swap the middle learner for a different verb.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — subject pronouns
  L.table({
    sec: SEC.con, title: "Subject pronouns — words that replace the name",
    sub: "Use them so you do not repeat the same name in every sentence.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 17.5, headSize: 16, colW: [2.2, 3.6, 6.333],
      rows: [
        ["Pronoun", "Use it for", "Example"],
        ["I", "yourself", "I eat injera every day."],
        ["you", "the person you talk to", "You are my friend."],
        ["he", "one man or boy", "Dawit is my friend. He works in Bole."],
        ["she", "one woman or girl", "Hana is a nurse. She works in Gondar."],
        ["it", "a thing, an animal, the weather", "This is my bag. It is black."],
        ["we", "you and other people", "Sara and I are students. We study English."],
        ["they", "other people or things", "My brothers are students. They study in Adama."],
      ],
    },
    note: "The pronoun comes FIRST in the sentence, in the subject place. “He works”, never “Works he”.",
    notes: tn({
      time: "12 minutes.",
      how: "Say a name, learners say the pronoun. “Dawit” → “he”. “Hana and Sara” → “they”. “My bag” → “it”. Thirty rounds, fast. Speed is what turns knowledge into automatic use.",
      mistakes: "He/she confusion continues from Module 3. It is now the fourth module in a row where you drill it — that repetition is deliberate and necessary.",
      extra: "Harder ones: “My mother and I” → we · “The children” → they · “The weather” → it · “You and Sara” → you.",
      tip: "“We” is the one learners use least and forget first, because it requires thinking about a group that includes yourself. Give it extra rounds.",
      activity: "Pronoun swap: read a short text with names repeated, and have learners replace the second mention of each name with a pronoun.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — object pronouns
  L.table({
    sec: SEC.con, title: "Object pronouns — after the verb",
    sub: "Different words for the same people, used in a different place in the sentence.",
    table: {
      color: C.green, rowH: 0.44, fontSize: 17.5, headSize: 16, colW: [2.6, 2.6, 6.933],
      rows: [
        ["Subject", "Object", "Example"],
        ["I", "me", "She likes me.  ·  Give it to me."],
        ["you", "you", "I like you.  ← the only one that does not change"],
        ["he", "him", "I know him.  ·  Ask him."],
        ["she", "her", "I see her every day."],
        ["it", "it", "I like it.  ← also does not change"],
        ["we", "us", "They help us."],
        ["they", "them", "I know them well."],
      ],
    },
    note: "Subject pronouns go BEFORE the verb. Object pronouns go AFTER it.   “She likes me.” — not “She likes I.”",
    notes: tn({
      time: "12 minutes.",
      how: "Teach it as position, not as a list: before the verb, use the first column; after the verb, use the second. Then drill with one verb — “I like ___” — filling in every object pronoun.",
      mistakes: "“She likes I” and “I know he” are the errors. Point at the verb and ask “is this before or after?” The position gives the answer.",
      extra: "Drill with three verbs: like, know, see. “I like him.” “She knows us.” “They see me.”",
      tip: "Only five of the seven actually change — you and it stay the same. Point that out; it makes the list feel much shorter.",
      activity: "Pass the sentence: learner 1 says “I like Sara.” Learner 2 replaces the name: “I like her.” Around the class with different names.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — the ten verbs
  L.grid({
    sec: SEC.con, title: "Ten verbs that build a hundred sentences", sub: "Learn these ten and you can say most of what you need at this level.",
    cols: 5, color: C.green, titleSize: 21, descSize: 14,
    items: [
      { title: "eat", desc: "I eat injera." }, { title: "drink", desc: "I drink coffee." },
      { title: "go", desc: "I go to school." }, { title: "work", desc: "I work in Adama." },
      { title: "study", desc: "I study English." }, { title: "read", desc: "I read a book." },
      { title: "write", desc: "I write my name." }, { title: "like", desc: "I like tea." },
      { title: "have", desc: "I have a pen." }, { title: "want", desc: "I want water." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Say each verb, then the example sentence. Class repeats. Then have learners make their own sentence with each verb, about their own life. Ten verbs, ten personal sentences.",
      mistakes: "“Go” needs “to” before a place: “I go TO school”, not “I go school”. Teach the two words as one chunk: go-to.",
      extra: "Five more when the class is ready: speak, live, help, buy, see.",
      tip: "These ten verbs plus the vocabulary from Module 4 produce hundreds of correct sentences. Say that out loud — learners underestimate how far a small number of verbs goes.",
      activity: "Verb wheel: write the ten verbs on the board. Point at one at random; a learner must produce a full SVO sentence using it within three seconds.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — longer sentences
  L.table({
    sec: SEC.con, title: "Making the sentence longer", sub: "Add WHERE and WHEN — but keep subject, verb, object in place.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 17.5, headSize: 16, colW: [2.2, 2.0, 2.2, 2.6, 3.133],
      rows: [
        ["Subject", "Verb", "Object", "Where", "When"],
        ["I", "eat", "injera", "at home", "every day."],
        ["She", "studies", "English", "at school", "in the morning."],
        ["We", "buy", "food", "at Merkato", "on Saturday."],
        ["They", "drink", "coffee", "in the office", "at ten o'clock."],
      ],
    },
    note: "The extra parts go at the END. Where usually comes before when. The first three columns never move.",
    notes: tn({
      time: "12 minutes.",
      how: "Build one sentence live, adding one column at a time, and have the class read it aloud after each addition. Learners see the sentence grow while the core stays fixed.",
      mistakes: "Learners put the time expression in the middle: “I every day eat injera.” It is understandable but not natural. Show that it goes at the end — or at the very beginning with a comma.",
      extra: "This recycles Module 2 prepositions: AT a time, ON a day, IN a month. Point that out.",
      tip: "Tell learners the good news: they do not need new rules to make longer sentences, only to add pieces at the end. That makes long sentences feel achievable.",
      activity: "Grow the sentence: start with “I eat.” Each learner around the class adds one piece — object, where, when — until it is complete.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "eat", ipa: "/iːt/", pos: "verb", icon: "FaUtensils",
      meaning: "To put food in your mouth.",
      example: "I eat injera every day. We eat at seven o'clock.",
      mistake: "The vowel is long — /iːt/, like “seat”. Keep it short and it becomes “it”, a different word. And the order: “I eat injera”, never “I injera eat”.",
      notes: tn({ time: "5 minutes.",
        how: "Mime the action, say the verb, then say the full SVO sentence. Then five learners each say one true sentence about what they eat.",
        mistakes: "Both the vowel length and the word order. Drill the sentence, not the word alone — the word alone does not teach the order.",
        extra: "eat–it, seat–sit, feet–fit: the long/short vowel pair from Module 2.",
        tip: "Food vocabulary from Module 4 combines directly with this verb, giving twenty sentences immediately.",
        activity: "Each learner says what they ate this morning, in a full SVO sentence." }) },

    { word: "work", ipa: "/wɜːk/", pos: "verb", icon: "FaBriefcase",
      meaning: "To do a job, usually for money.",
      example: "My father works in Adama. I work six days a week.",
      mistake: "It is a verb AND a noun: “I work” (verb) and “my work” (noun). Also “work” needs a preposition before a place: “I work IN Adama”, “I work AT the bank”.",
      notes: tn({ time: "6 minutes.",
        how: "Ask five learners where they or a family member works, and require a full sentence with the preposition.",
        mistakes: "Dropping the preposition: “I work Adama”. Teach “work in” and “work at” as fixed pairs rather than as a rule.",
        extra: "Jobs from Module 4 combine with this verb: “She works as a nurse.” “He works as a driver.”",
        tip: "For learners who do not have paid work, offer alternatives: “I work at home.” “I study.” Never let the question exclude anyone.",
        activity: "Chain: “I work in ___. She works in ___. They work in ___.” Around the class, changing the pronoun." }) },

    { word: "like", ipa: "/laɪk/", pos: "verb", icon: "FaHeart",
      meaning: "To think something is good or pleasant.",
      example: "I like coffee. She likes English. They do not like the rain.",
      mistake: "You must say WHAT you like: “I like it”, never “I like” alone. And the object pronoun comes after: “I like her”, not “I like she”.",
      notes: tn({ time: "6 minutes.",
        how: "Model with objects: hold up coffee, a book, a pen, and say “I like ___” each time. Then ask learners. Then replace the nouns with object pronouns.",
        mistakes: "This verb is the perfect place to drill object pronouns, because “like” takes one so naturally: “I like him”, “She likes us”, “We like them”.",
        extra: "Also: love, want, need — all take an object the same way.",
        tip: "“Like” produces opinion sentences, which learners enjoy far more than mechanical drills. Use it to make the object-pronoun practice feel like conversation.",
        activity: "Opinion round: each learner says two things they like and one they do not, using the correct object each time." }) },

    { word: "have", ipa: "/hæv/", pos: "verb", icon: "FaHandsHelping",
      meaning: "To own something, or for something to belong to you.",
      example: "I have a pen. She has two brothers.",
      mistake: "It changes for he, she and it: I have, but she HAS. Also say the /h/ clearly — without it, “have” sounds like “ave”.",
      notes: tn({ time: "6 minutes.",
        how: "Drill the pair: “I have / she has” with ten different objects. The change is small and learners miss it because it does not affect meaning.",
        mistakes: "“She have” is the error, and it previews the third-person -s rule that dominates Level 2. Correct it now so the pattern is not new later.",
        extra: "Combine with family from Module 4: “I have two sisters.” “He has one brother.”",
        tip: "This is the first verb in the course that changes for he/she/it. Say so — it prepares learners for Level 2 rather than surprising them.",
        activity: "What do you have in your bag? Each learner says three sentences, then reports a partner's using “She has…”." }) },

    { word: "go", ipa: "/ɡəʊ/", pos: "verb", icon: "FaWalking",
      meaning: "To move from one place to another.",
      example: "I go to school every day. She goes to Merkato on Saturday.",
      mistake: "Always “go TO a place”: “I go to school”, never “I go school”. And it changes for he and she: he GOES, with -es.",
      notes: tn({ time: "6 minutes.",
        how: "Teach “go to” as one chunk from the first second. If learners learn “go” alone, the missing preposition is very hard to add later.",
        mistakes: "Two errors: the missing “to”, and “she go” instead of “she goes”. Drill both, separately.",
        extra: "go to school · go to work · go to the market · go home  ← “home” is the exception, with no “to”.",
        tip: "The exception “go home” confuses learners. Teach it as one fixed phrase and do not explain it.",
        activity: "Where do you go? Each learner says three places they go and when, in full sentences." }) },
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
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 1 of 5" }),
    title: "Rule 1 — Subject + Verb + Object",
    sub: "Build every sentence in these three parts, in this order.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [3.2, 2.8, 3.2, 2.933],
      rows: [
        ["Subject", "Verb", "Object", "Wrong version"],
        ["I", "eat", "injera.", "I injera eat."],
        ["My mother", "drinks", "coffee.", "My mother coffee drinks."],
        ["We", "study", "English.", "We English study."],
        ["The children", "want", "water.", "The children water want."],
      ],
    },
    note: "Test any sentence by asking three questions in order:  WHO does it?   WHAT do they do?   WHAT do they do it to?",
    notes: tn({
      time: "12 minutes.",
      how: "The three-question test is the tool learners take away. Practise it aloud on ten sentences until they can run it in their heads while speaking.",
      mistakes: "Under pressure — when speaking fast or nervous — learners revert to first-language order even when they know the rule. That is why this needs drilling to automaticity, not just explaining.",
      extra: "Build ten sentences from the Module 4 vocabulary: “I like coffee.” “She has a red bag.” “They eat bread.”",
      tip: "Do the three-column card drill for two minutes at the start of every remaining lesson in Level 1. Consistency beats intensity here.",
      activity: "Sentence factory: give pairs three word cards each and two minutes to build as many correct sentences as they can.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — the subject pronoun comes first",
    sub: "Replace the name, but keep it in the same place.",
    left: { h: "Correct", items: ["He works in Bole.", "She has two children.", "It is a black bag.", "They study English."] },
    right: { h: "Wrong", items: ["Works he in Bole.", "Has she two children.", "Is it black bag.", "Study they English."] },
    note: "The subject always comes before the verb in a statement. Only in a QUESTION does the verb move in front — “Is it black?”",
    notes: tn({
      time: "9 minutes.",
      how: "Contrast a statement and a question directly: “It is black.” and “Is it black?” Learners see that the verb moves only for questions, which connects back to Module 3.",
      mistakes: "Verb-first statements come from thinking about the question form. Show the pair side by side so the difference is visible.",
      extra: "Convert five statements to questions and back again.",
      tip: "This rule and the question rule from Module 3 are two halves of one idea: word order carries meaning in English. Say that — it makes both easier to remember.",
      activity: "Statement or question: teacher says a sentence, learners hold up one finger for statement, two for question.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — the object pronoun comes after the verb",
    sub: "Before the verb: I, he, she. After the verb: me, him, her.",
    left: { h: "Correct", items: ["She likes me.", "I know him.", "We see her every day.", "They help us."] },
    right: { h: "Wrong", items: ["She likes I.", "I know he.", "We see she every day.", "They help we."] },
    note: "Ask yourself: is this word BEFORE the verb or AFTER it?  Before → I, he, she, we, they.  After → me, him, her, us, them.",
    notes: tn({
      time: "10 minutes.",
      how: "Point at the verb in each sentence and ask “before or after?” The position gives the answer without needing to memorise two lists.",
      mistakes: "“She likes I” is the classic. Learners memorise the subject list first and use it everywhere.",
      extra: "Drill with one verb and all seven pronouns: “She likes me / you / him / her / it / us / them.”",
      tip: "Remind them only five change — you and it stay the same. That halves the load.",
      activity: "Before or after: teacher says a sentence with a gap, learners supply the right pronoun and say whether it was before or after the verb.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — “can” and “cannot” for ability",
    sub: "One word for everybody. It never changes.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 18, headSize: 16, colW: [3.2, 4.4, 4.533],
      rows: [
        ["Form", "Pattern", "Example"],
        ["Positive", "subject + can + verb", "I can read English.  ·  She can drive."],
        ["Negative", "subject + cannot + verb", "I cannot swim.  ·  He cannot come today."],
        ["Question", "Can + subject + verb?", "Can you speak English?  ·  Can she drive?"],
        ["Short answer", "Yes, I can. / No, I cannot.", "“Can you drive?”  “No, I cannot.”"],
      ],
    },
    note: "“Can” never changes — not for he, she or it. And the verb after it never changes either:  “She can DRIVE”, never “She can drives”.",
    notes: tn({
      time: "10 minutes.",
      how: "Ask five learners what they can and cannot do. Real abilities produce real sentences and the pattern drills itself.",
      mistakes: "“She can drives” — adding -s to the second verb. It comes from over-applying the he/she rule they just met with “has” and “goes”.",
      extra: "can't is the short form and is used far more often in speech. Teach both and say which is which.",
      tip: "This is the easiest grammar point in Level 1 because nothing changes for any person. Say that — learners need occasional easy wins.",
      activity: "Find someone who can: learners move around asking “Can you ___?” until they find someone who can drive, cook, swim or sing.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — joining ideas with “and” and “but”",
    sub: "AND joins two similar ideas. BUT joins two different ones.",
    left: { h: "Correct", items: ["I like coffee and I like tea.", "She works and she studies.", "I like coffee, but I do not like tea.", "He can read, but he cannot write."] },
    right: { h: "Wrong", items: ["I like coffee and tea I like.", "She works and studies she.", "I like coffee but not like tea.", "He can read but cannot he write."] },
    note: "Both halves must be complete sentences with the correct word order. Joining two sentences does not change the order inside either of them.",
    notes: tn({
      time: "10 minutes.",
      how: "Write two short sentences on the board, then join them with “and”. Then write two contrasting ones and join them with “but”. Learners see that nothing inside either sentence changes.",
      mistakes: "Learners keep the correct order in the first half and revert to first-language order in the second. Point at the second half specifically when you correct.",
      extra: "Give ten pairs of sentences for learners to join with the right word.",
      tip: "The comma before “but” is normal in writing. Mention it once and do not make it a focus at this level.",
      activity: "Join them: give pairs six short sentences and have them make three longer ones, choosing “and” or “but” each time.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — word order", sub: "Subject, verb, object — in that order.", items: [
      { q: "Rearrange:  injera · eat · I", a: "I eat injera.", why: "Who does it? I. What do they do? Eat. What do they eat? Injera. The three questions give the order every time." },
      { q: "Rearrange:  coffee · my mother · drinks", a: "My mother drinks coffee.", why: "The subject can be more than one word — “my mother” is all the subject. The verb still comes straight after it." },
      { q: "Correct this: “We English study.”", a: "We study English.", why: "The verb must come second, before the object. This is the first-language order, and it is the error this whole module exists to fix." },
    ] },
    { title: "Guided examples 2 — subject pronouns", sub: "Replace the name and keep the position.", items: [
      { q: "Replace the name: “Dawit works in Bole.”", a: "He works in Bole.", why: "Dawit is one man, so “he”. The pronoun goes in the same place the name was — before the verb." },
      { q: "Replace: “Sara and I are students.”", a: "We are students.", why: "“We” is used for yourself plus other people. Learners often say “they”, forgetting they are in the group." },
      { q: "Replace: “My bag is black.”", a: "It is black.", why: "“It” is used for a thing, an animal or the weather — anything that is not a person." },
    ] },
    { title: "Guided examples 3 — object pronouns", sub: "After the verb, the word changes.", items: [
      { q: "Correct this: “She likes I.”", a: "She likes me.", why: "The pronoun comes after the verb “likes”, so it must be the object form: me, not I." },
      { q: "Replace the name: “I know Dawit.”", a: "I know him.", why: "Dawit is after the verb, so the object form “him” is needed — not “he”." },
      { q: "Complete: “They help ______.”  (me and my friends)", a: "They help us.", why: "“Us” is the object form of “we”. It comes after the verb, so it cannot be “we”." },
    ] },
    { title: "Guided examples 4 — can and cannot", sub: "One form for everybody.", items: [
      { q: "Complete: “She ___ drive a car.”  (she is able to)", a: "She can drive a car.", why: "“Can” never changes — not for he, she or it. And the verb after it stays in its base form: drive, not drives." },
      { q: "Make it negative: “I can swim.”", a: "I cannot swim.  (or: I can't swim.)", why: "Add “not” to “can”. The verb “swim” does not change at all." },
      { q: "Make it a question: “You can speak English.”", a: "Can you speak English?", why: "“Can” moves in front of the subject, exactly like “is” and “are” did in Module 3." },
    ] },
    { title: "Guided examples 5 — and, but, and longer sentences", sub: "Join two complete ideas.", items: [
      { q: "Join with “and”:  “I like coffee.”  “I like tea.”", a: "I like coffee and I like tea.", why: "Both ideas are similar, so “and” joins them. Both halves keep their own subject, verb and object." },
      { q: "Join with “but”:  “He can read.”  “He cannot write.”", a: "He can read, but he cannot write.", why: "The two ideas are different from each other, so “but” is the right word. The comma before “but” is normal in writing." },
      { q: "Add WHERE and WHEN:  “I eat injera.”", a: "I eat injera at home every day.", why: "The extra parts go at the end. Where usually comes before when, and the first three words never move." },
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
    title: "Talking about what you do",
    sub: "Dawit and Mimi talk about their days.",
    turns: [
      { who: "MIMI", text: "Where do you work, Dawit?", side: "l" },
      { who: "DAWIT", text: "I work in a coffee shop in Bole. And you?", side: "r" },
      { who: "MIMI", text: "I study at the university. I want to work at an airline.", side: "l" },
      { who: "DAWIT", text: "Can you speak English well?", side: "r" },
      { who: "MIMI", text: "I can read and write, but I cannot speak fast.", side: "l" },
      { who: "DAWIT", text: "I know you. You can do it.", side: "r" },
    ],
    note: "Find them:  three SVO sentences  ·  one “can”  ·  one “cannot”  ·  one “but”  ·  one object pronoun.",
    notes: tn({
      time: "12 minutes.",
      how: "Listen books closed, chorus, pair reading, then perform with their own jobs and abilities. The finding task afterwards makes the grammar visible inside real language.",
      mistakes: "“I know you” at the end contains an object pronoun that happens not to change — point that out, because learners often think all of them change.",
      extra: "Change the jobs and the abilities. Every learner has a different true answer.",
      tip: "Mimi's last line is honest about her weakness, and Dawit encourages her. That is worth naming — it models how learners can talk about their own English without embarrassment.",
      activity: "Ability mingle: everyone asks three people “Can you ___?” and reports one answer back to the class using “He can…” or “She cannot…”.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "At home — a family evening",
    sub: "Sara talks to her uncle Abel.",
    turns: [
      { who: "ABEL", text: "What do you do in the evening?", side: "l" },
      { who: "SARA", text: "I study English and I read my books.", side: "r" },
      { who: "ABEL", text: "Do you like it?", side: "l" },
      { who: "SARA", text: "Yes, I like it, but it is difficult.", side: "r" },
      { who: "ABEL", text: "I cannot read English, but I can speak a little.", side: "l" },
      { who: "SARA", text: "I can help you. We can study together.", side: "r" },
    ],
    note: "Notice “it” twice:  “Do you like it?”  and  “I like it.”  It replaces “English” — a thing, not a person.",
    notes: tn({
      time: "12 minutes.",
      how: "After reading, ask what “it” refers to in each line. Pronoun reference is a real comprehension skill and learners rarely think about it unless asked.",
      mistakes: "“Do you like it?” contains “do”, which is Level 2 grammar. Teach the whole question as a fixed phrase and do not explain it.",
      extra: "Change the activity: cooking, football, music, work. Keep the structure identical.",
      tip: "Abel is an adult beginner who cannot read English. Point that out for any adult learners who feel behind — the course has a character exactly like them, and he succeeds.",
      activity: "Evening routines: pairs ask and answer what they do in the evening, using at least three SVO sentences each.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful phrases for talking about yourself",
    sub: "Six sentence patterns. Change the last word and you have a hundred sentences.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 20, descSize: 15,
    items: [
      { icon: "FaWalking", title: "“I go to ______.”", desc: "school · work · the market · church · the clinic" },
      { icon: "FaBriefcase", title: "“I work in ______.”", desc: "Adama · an office · a shop · a hospital" },
      { icon: "FaHeart", title: "“I like ______.”", desc: "coffee · football · English · my job" },
      { icon: "FaHandsHelping", title: "“I have ______.”", desc: "two sisters · a phone · a red bag" },
      { icon: "FaStar", title: "“I can ______.”", desc: "read · drive · cook · speak a little English" },
      { icon: "FaTimes", title: "“I cannot ______.”", desc: "swim · drive · speak fast — and that is fine" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill each pattern with three different endings. The pattern is what learners keep; the endings are infinite.",
      mistakes: "The missing “to” after “go”. Drill “go to” as one chunk.",
      extra: "Add “I want ___” and “I need ___” for a strong class.",
      tip: "Sentence patterns are far more valuable than individual words at this level. A learner who owns six patterns can say hundreds of things; a learner who owns sixty words can say sixty.",
      activity: "Pattern race: teacher calls a pattern, learners produce a true sentence within three seconds. Around the class twice.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "HANA", text: "Where ______ you work?", side: "l" },
      { who: "YOU", text: "I ______ in ______________.", side: "r" },
      { who: "HANA", text: "______ you speak English?", side: "l" },
      { who: "YOU", text: "Yes, I ______, but I ______________ speak fast.", side: "r" },
      { who: "HANA", text: "Do you like English?", side: "l" },
      { who: "YOU", text: "Yes, I like ______. I study ______ every day.", side: "r" },
    ],
    note: "Use these:  “do”  ·  “work”  ·  a place  ·  “Can”  ·  “can”  ·  “cannot”  ·  “it”  ·  “it”",
    notes: tn({
      time: "9 minutes.",
      how: "Three minutes to fill the gaps in writing, then three pairs perform before you reveal the answers.",
      answers: "1 do · 2 work + a place · 3 Can · 4 can + cannot · 5 it · 6 it",
      mistakes: "The last two gaps both need “it”, and learners often write “English” again. Both are understandable, but the pronoun is what makes it sound natural.",
      tip: "Have them perform standing up. Standing changes the voice and the confidence.",
      activity: "Do it again with the roles reversed so both learners produce every line.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — build and swap", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say five SVO sentences about yourself", d: "Your partner checks the word order each time." },
      { t: "Say them again with a pronoun", d: "Replace the names: “My mother works” becomes “She works”." },
      { t: "Say three things you can and one you cannot do", d: "Your partner asks one question about each." },
      { t: "Join two ideas with “and” and two with “but”", d: "Four longer sentences in total." },
    ],
    notes: tn({
      time: "8 minutes for all four rounds.",
      how: "Keep strictly to two minutes and announce each change loudly. Walk and listen for word-order errors — that is the whole assessment of this module.",
      mistakes: "Round 2 is where the pronoun errors appear. Note them and correct at the end, not during.",
      tip: "Round 4 is hardest because learners must keep correct order in both halves. Expect the second half to break first.",
      activity: "After round 4, three learners say their best long sentence to the class.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — the sentence chain", sub: "Everyone. Around the class. Three rounds.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "One SVO sentence each", d: "Any subject, any verb, any object. It must be true and it must be correct." },
      { t: "Add where or when", d: "“I eat injera at home.” “She works in Adama every day.”" },
      { t: "Say the previous person's sentence, then your own", d: "“He eats injera. I drink coffee.” Memory plus grammar." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Round C is the valuable one: repeating someone else's sentence forces a pronoun change from “I” to “he” or “she”, which is exactly the skill being tested.",
      mistakes: "In round C learners repeat “I eat injera” instead of changing to “He eats injera”. Stop and fix it the first time it happens, then let the chain continue.",
      extra: "For a strong class, require a different verb from every learner.",
      tip: "This activity assesses the whole module in five minutes and every learner speaks. Use it as your informal end-of-module check.",
      activity: "Run it twice and time it. The second run is always faster and more accurate, which learners notice themselves.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — talk about your day", sub: "In pairs. Three minutes each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Where do you go?", d: "“I go to ___.” Two or three places." },
      { t: "What do you do there?", d: "“I work.” “I study.” “I buy food.”" },
      { t: "What do you eat and drink?", d: "“I eat ___ and I drink ___.”" },
      { t: "What do you like?", d: "“I like ___, but I do not like ___.”" },
      { t: "What can you do?", d: "“I can ___.” And one thing you cannot do." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "Model all five yourself in ninety seconds. Then pairs. Then two learners report their partner's day using “he” or “she”, which forces the pronoun change.",
      mistakes: "Step 1 without “to”. Step 4 needs an object after “like” both times.",
      extra: "Add “What time?” from Module 2 for a class that is moving fast.",
      tip: "This is the closest thing to real conversation the learners have done. Let it run slightly long if it is working.",
      activity: "Report back: three learners describe their partner's day in the third person. Every sentence needs a changed pronoun and, later, a changed verb.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — word stress inside a sentence",
    sub: "In English, the important words are louder and longer. The small words are quick and quiet.",
    left: { h: "Stress these — the meaning words", items: ["I EAT injera.", "She WORKS in ADAMA.", "We STUDY ENGLISH.", "I CANNOT SWIM."] },
    right: { h: "Say these quickly — the small words", items: ["I · a · the · to · in · at", "is · are · am · do", "and · but · of", "These are never the loud words."] },
    note: "Say “I eat injera” three times: first flat, then with EAT and IN-JE-RA louder. The second version is what English actually sounds like.",
    notes: tn({
      time: "10 minutes.",
      how: "Say a sentence flat, with every word equal, then say it with natural stress. Ask which sounds like English. Learners hear the difference immediately even if they cannot yet produce it.",
      mistakes: "Amharic gives syllables more equal weight, so learners produce flat English. It is understandable but tiring for a listener, and it is what makes speech sound “not fluent” even when it is correct.",
      extra: "Clap on the stressed words while the class says the sentence. The hand teaches the voice.",
      tip: "This is the first sentence-level pronunciation work in the course. Keep it light and do not over-explain — imitation works better than theory here.",
      activity: "Clap and say: the class says four sentences, clapping only on the meaning words. Then say them again without clapping and hear the difference.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — role plays", sub: "Work in pairs. Two minutes per situation.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "A new classmate asks about your day", d: "Where you go, what you do, what you like." },
      { t: "You meet someone at work", d: "Say your job, where you work, and what you can do." },
      { t: "A friend asks what you can do in English", d: "“I can read, but I cannot speak fast.” Be honest." },
      { t: "You describe a family member to a friend", d: "Their job, where they work, what they like. Use he or she throughout." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Give each pair one thing to listen for in the other's performance: the word order, the pronoun, or the “to” after “go”.",
      mistakes: "Situation 4 is where third-person errors cluster: “She work” instead of “She works”, and he/she confusion. That is what makes it the most useful of the four.",
      extra: "Situation 3 lets learners talk about their own English honestly, which is unexpectedly motivating for adults.",
      tip: "Do situation 4 last and give it the most time. It previews the third-person -s that dominates Level 2.",
      activity: "Perform two of the four to the whole class and let the class name one thing done well.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "60 seconds. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say five SVO sentences about yourself", d: "Different verb each time." },
      { t: "Say two sentences about a family member", d: "Use he or she. Check the verb." },
      { t: "Say two things you can do", d: "“I can ___.”" },
      { t: "Say one thing you cannot do", d: "“I cannot ___.”" },
      { t: "Say one long sentence with “but”", d: "“I like ___, but I do not like ___.”" },
    ],
    notes: tn({
      time: "12 minutes including listening back.",
      how: "Record on a phone, or perform live to a partner who ticks the five steps.",
      mistakes: "Step 1 is the word-order assessment. Step 2 is the pronoun assessment. Both are the module's targets.",
      answers: "SUCCESS CRITERIA: all five steps present · subject-verb-object order correct in every sentence · correct pronoun in step 2 · the verb after “can” never takes -s · a listener understands every sentence.",
      tip: "Have them listen back once. Word-order errors are very audible on playback, and learners catch their own.",
      activity: "Keep every recording for the end-of-level comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — five sentences", sub: "Listen twice. Write the subject, the verb and the object.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 18, lsm: 1.4,
      text: "1.  “I drink coffee every morning.”\n2.  “My sister works in a hospital.”\n3.  “We study English on Monday.”\n4.  “They eat injera at home.”\n5.  “He cannot drive a car.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Draw three columns: SUBJECT · VERB · OBJECT.",
      "Write each sentence into the columns.",
      "For number 5, write “cannot drive” in the verb column.",
      "The teacher reads each one twice.",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "The three-column task is the point: learners must hear the structure, not just the words. Draw the columns on the board first so everyone starts the same way.",
      mistakes: "Sentence 2 has a two-word subject, “my sister”. Learners write only “sister”. Both parts belong in the subject column.",
      extra: "Add two harder ones: “My mother and I go to the market.” and “The children like football.”",
      answers: "1 I / drink / coffee  ·  2 My sister / works / (in a hospital — where)  ·  3 We / study / English  ·  4 They / eat / injera  ·  5 He / cannot drive / a car",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check each part is in the right column.",
    size: 17,
    items: [
      { q: "1 — “I drink coffee every morning.”", a: "I / drink / coffee   (“every morning” = when)", why: "The extra time part goes at the end and is not the object. The object is what you drink." },
      { q: "2 — “My sister works in a hospital.”", a: "My sister / works / —   (“in a hospital” = where)", why: "The subject is two words. This sentence has no object at all — “works” does not need one." },
      { q: "3 — “We study English on Monday.”", a: "We / study / English   (“on Monday” = when)", why: "ON for a day, from Module 2. The object is English — what is being studied." },
      { q: "4 — “They eat injera at home.”", a: "They / eat / injera   (“at home” = where)", why: "Classic subject-verb-object, with the place added at the end." },
      { q: "5 — “He cannot drive a car.”", a: "He / cannot drive / a car", why: "“Cannot drive” is the whole verb. Note that “drive” has no -s after “cannot”." },
    ],
    notes: keyNotes("Sentence 2 is the interesting one: not every sentence has an object. If learners forced one in, that is a good discussion — some verbs need an object and some do not."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — Abel's day", sub: "Listen twice, then answer the questions.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 17.5, lsm: 1.38,
      text: "“My name is Abel. I have a shop in Merkato.\nI go to the shop at seven o'clock every day.\nI sell bags and shoes.\nI can speak a little English, but I cannot read it well.\nMy daughter helps me. She studies English at school.”" },
    side: { label: "Questions", color: C.listen, size: 16, items: [
      "1. Where is Abel's shop?",
      "2. What time does he go there?",
      "3. What does he sell?",
      "4. What can he do in English? What can he not do?",
      "5. Who helps him?",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Read twice at natural pace. Read the questions aloud before learners write.",
      mistakes: "Question 4 has two parts. Learners answer only the first. Say “two parts” before they start.",
      extra: "Add: “Is Abel a student?” The answer is no — he has a shop.",
      answers: "1 In Merkato. · 2 At seven o'clock. · 3 He sells bags and shoes. · 4 He can speak a little, but he cannot read it well. · 5 His daughter helps him.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Full sentences. Correct pronouns and word order.",
    size: 17,
    items: [
      { q: "1 — Where is the shop?", a: "It is in Merkato.", why: "“It” for a place or a thing, and Merkato takes a capital letter." },
      { q: "2 — What time does he go?", a: "He goes at seven o'clock.", why: "AT for a clock time, from Module 2. And note “goes”, with -es, because it is “he”." },
      { q: "3 — What does he sell?", a: "He sells bags and shoes.", why: "Both nouns are plural with -s, and “and” joins them. The verb takes -s because the subject is “he”." },
      { q: "4 — What can and cannot he do?", a: "He can speak a little English, but he cannot read it well.", why: "Two parts joined with “but”, because the two ideas are different from each other." },
      { q: "5 — Who helps him?", a: "His daughter helps him.", why: "“His” before the person, and “him” after the verb. Both forms of the same person in one short sentence." },
    ],
    notes: keyNotes("Question 5 contains both a possessive and an object pronoun for the same person. It is the best single test of the module and worth reading aloud twice."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to hear the structure, not just the words", sub: "Four habits that make listening easier.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaUser", title: "Listen for WHO first", desc: "The subject almost always comes first in English. Catch it and the rest of the sentence has somewhere to attach." },
      { icon: "FaWalking", title: "Then listen for the ACTION", desc: "The verb comes second. Once you have who and what they do, you understand most of the meaning." },
      { icon: "FaVolumeUp", title: "The loud words carry the meaning", desc: "English speakers stress the important words. If you catch only the loud ones, you usually still understand." },
      { icon: "FaHandPaper", title: "Do not stop at one missed word", desc: "Keep going. The structure will tell you what kind of word you missed, even if you never catch the word itself." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Demonstrate habit 3 by saying a sentence with the small words deliberately mumbled. Learners still understand it, which proves the point better than any explanation.",
      mistakes: "Beginners try to catch every word and lose the whole sentence. Naming that habit is the first step to breaking it.",
      tip: "This slide connects the module's grammar to listening: knowing that the subject comes first is a listening strategy, not just a writing rule.",
      activity: "Who and what: read five fast sentences and ask learners only for the subject and the verb. They will catch far more than they expect.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — my day", sub: "Read it aloud twice before you answer.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 20, lsm: 1.42,
      text: "My name is Hana. I am a nurse.\nI go to the clinic every day.\nI help many people.\nI drink coffee in the morning and I eat bread.\nI can speak Amharic and English.\nI cannot drive a car, but I want to learn." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the whole text once.",
      "The class reads it together, in chorus.",
      "Then six learners read one line each.",
      "Underline the subject and circle the verb in every sentence.",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Teacher, chorus, individuals, then the underlining task. Marking up the text makes the structure visible and is far more active than answering questions alone.",
      mistakes: "The last line has two verbs — “cannot drive” and “want to learn”. Do not analyse the second one; it is Level 2 grammar. Let learners read it as a whole.",
      extra: "Count the sentences: six. Count the verbs: eight. Ask why there are more verbs than sentences.",
      tip: "Point at each word as the class reads in chorus. Beginners lose their place constantly.",
      activity: "Rewrite it: learners write six sentences about their own day, using the same structure.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE, using the correct pronoun.",
    items: [
      "What is Hana's job?",
      "Where does she go every day?",
      "What does she drink in the morning?",
      "Which languages can she speak?",
      "What can she NOT do?",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Insist on full sentences with “she”. That is what is being assessed, not the facts.",
      mistakes: "Question 5 needs “cannot”. Learners answer “drive a car”, which does not answer the question.",
      tip: "Books closed. If the text is visible, learners copy and no comprehension happens.",
      answers: "1 She is a nurse. · 2 She goes to the clinic. · 3 She drinks coffee. · 4 She can speak Amharic and English. · 5 She cannot drive a car.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Check the pronoun and the word order in every answer.",
    size: 17,
    items: [
      { q: "1 — Hana's job", a: "She is a nurse.", why: "“She” for a woman, and “a” before the job. Both are errors this course has drilled since Module 3." },
      { q: "2 — Where does she go?", a: "She goes to the clinic.", why: "“Go to”, never “go the clinic”. And “goes” with -es because the subject is “she”." },
      { q: "3 — What does she drink?", a: "She drinks coffee.", why: "Subject, verb, object — in that order. “Coffee she drinks” is the first-language pattern." },
      { q: "4 — Which languages?", a: "She can speak Amharic and English.", why: "“And” joins two similar things. Both language names take a capital letter." },
      { q: "5 — What can she not do?", a: "She cannot drive a car.", why: "The question asks about ability, so the answer must contain “cannot”. And “drive” has no -s after “cannot”." },
    ],
    notes: keyNotes("Question 2 tests three things at once: the pronoun, the -es on the verb, and the “to” after “go”. It is the single most informative item on the slide."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — two friends", sub: "A longer text. Read it aloud twice.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 19, lsm: 1.36,
      text: "Dawit and Mimi are friends. They live in Addis Ababa.\nDawit works in a coffee shop and he studies in the evening.\nMimi studies at the university. She wants a job at an airline.\nThey meet on Saturday. They drink coffee and they talk about English.\nDawit can speak English well, but Mimi can read it better.\nThey help each other." },
    side: { label: "New words here", color: C.read, size: 16, items: [
      "live — to have your home in a place",
      "meet — to come together with someone",
      "talk — to speak with someone",
      "better — more good",
      "Find every pronoun. There are nine.",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Teacher, chorus, individuals. The pronoun-finding task is the point: this text is dense with they, he, she and each other.",
      mistakes: "“Each other” is new and complex. Do not explain it — the meaning is clear from context, which is how it should first be met.",
      extra: "The nine pronouns: They, he, She, She, They, They, they, but, They — ask learners to check whether “but” is a pronoun. It is not, which is a useful discussion.",
      tip: "This text uses “they” more than any earlier text. “They” is the pronoun learners use least confidently, so the repetition is deliberate.",
      activity: "Learners write six sentences about two people they know, using “they” at least three times.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — questions, answers and vocabulary review", sub: "Answer first, then check.",
    size: 17,
    items: [
      { q: "1 — Where do Dawit and Mimi live?", a: "They live in Addis Ababa.", why: "“They” for two people, and the verb “live” has no -s because “they” is plural." },
      { q: "2 — What does Dawit do in the evening?", a: "He studies in the evening.", why: "“He” for one man, and “studies” with -es. Note that the verb changed but the word order did not." },
      { q: "3 — What does Mimi want?", a: "She wants a job at an airline.", why: "“An airline” takes “an” because it starts with a vowel sound — the rule from Module 4." },
      { q: "4 — When do they meet?", a: "They meet on Saturday.", why: "ON for a day, from Module 2, and Saturday takes a capital letter." },
      { q: "5 — Vocabulary check: name the five verbs from this module.", a: "eat · work · like · have · go", why: "All five appeared in this module. Three of them are in these two texts — find them again." },
    ],
    notes: keyNotes("Questions 1 and 2 sit side by side deliberately: “they live” has no -s, “he studies” does. That contrast is the bridge into Level 2."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — put the words in order", sub: "Rearrange each group into a correct sentence.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write each sentence with a capital letter and a full stop.",
    items: [
      "1.  coffee · drinks · my father",
      "2.  English · we · study",
      "3.  a car · cannot · drive · she",
      "4.  to school · go · the children · every day",
      "5.  but · I · tea · like · do not like · coffee · I",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Do item 1 together using the three questions: who, what do they do, what to. Then let them work alone.",
      answers: "1 My father drinks coffee. · 2 We study English. · 3 She cannot drive a car. · 4 The children go to school every day. · 5 I like coffee, but I do not like tea.",
      mistakes: "Item 5 has two complete sentences joined by “but”. Learners try to make one short sentence out of all the words.",
      tip: "Item 4 tests the “to” after “go” as well as the order. Check for it.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write about your day", sub: "Copy the frame. Fill in your own information.",
    panelW: 7.6,
    panel: { label: "Copy this frame and complete it", color: C.write, tint: C.writeTint, size: 20, lsm: 1.55,
      text: "My name is ______________.\nI go to ______________ every day.\nI ______________ there.\nI eat ______________ and I drink ______________.\nI can ______________, but I cannot ______________." },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Subject first, then verb, then object?",
      "Did you write “to” after “go”?",
      "Is there a capital letter at the start of each sentence?",
      "Is there a full stop at the end of each one?",
      "In the last line, are both halves complete sentences?",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Write your own completed example on the board and leave it there.",
      mistakes: "The last line is the hardest because both halves must be complete. Expect “I can read, but cannot write” — the second subject is missing.",
      extra: "Fast finishers add two more sentences using “and”.",
      tip: "Collect these and keep them for the end-of-level comparison.",
      activity: "Learners swap papers and mark their partner's work against the five checks.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write full sentences", sub: "Use the structures from this module.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write ONE full sentence for each. Check your word order.",
    items: [
      "1.  Write an SVO sentence about what you eat.",
      "2.  Write a sentence about a family member, using “he” or “she”.",
      "3.  Write a sentence with an OBJECT pronoun (me, him, her, us, them).",
      "4.  Write a sentence with “can” and one with “cannot”.",
      "5.  Write one long sentence joined with “but”.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Do the first one together, then let them work alone. Circulate and check word order as they write.",
      mistakes: "Item 3 is the hardest. Many learners write a subject pronoun instead. Give an example on the board first.",
      answers: "MODEL ANSWERS: 1 I eat injera every day. · 2 She works in a hospital. · 3 I know him well. / She helps us. · 4 I can read English. I cannot swim. · 5 I like coffee, but I do not like tea.",
      tip: "Correct only word order, pronouns and the module's structures. Correcting everything discourages beginners into silence.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answers and why", sub: "Your sentences will be different. Check the rules, not the words.",
    size: 17,
    items: [
      { q: "1 — an SVO sentence", a: "I eat injera every day.", why: "Subject, verb, object, then the time at the end. The first three never change order." },
      { q: "2 — about a family member", a: "She works in a hospital.", why: "“She” for a woman, “works” with -s because it is one person, and “in” before the place." },
      { q: "3 — with an object pronoun", a: "I know him well.", why: "“Him” comes after the verb “know”. “I know he” uses the subject form in the object place." },
      { q: "4 — can and cannot", a: "I can read English. I cannot swim.", why: "The verb after “can” or “cannot” never changes — read, not reads; swim, not swims." },
      { q: "5 — joined with “but”", a: "I like coffee, but I do not like tea.", why: "Both halves are complete sentences with their own subject and verb. The comma before “but” is normal in writing." },
    ],
    notes: keyNotes("Item 3 is the diagnostic. A learner who wrote “I know he” has memorised the subject list and is using it everywhere — go back to slide 18."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist for this module", sub: "Add these to the checks from Modules 1 to 4.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "Subject, then verb, then object", d: "Ask the three questions: who does it, what do they do, what to." },
      { t: "Subject pronoun before the verb, object pronoun after it", d: "“She likes me.” — not “She likes I.”" },
      { t: "“to” after “go”", d: "“I go to school.” — not “I go school.”" },
      { t: "No -s on the verb after can or cannot", d: "“She can drive.” — not “She can drives.”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points, then have learners check their own writing from the previous slide.",
      tip: "The wall now has nineteen checks across five modules. That is the complete Level 1 accuracy standard, and Module 6 will test all of it.",
      activity: "Deliberate error hunt: write four sentences on the board with exactly four errors, one of each type.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. Which sentence is correct?", opts: "a) I injera eat.     b) I eat injera.     c) Eat I injera." },
      { q: "2. Complete: “She likes ___.”", opts: "a) I     b) me     c) my" },
      { q: "3. Which is correct?", opts: "a) She can drives.     b) She can drive.     c) She cans drive." },
      { q: "4. Complete: “I go ___ school every day.”", opts: "a) at     b) in     c) to" },
      { q: "5. Which word joins two DIFFERENT ideas?", opts: "a) and     b) but     c) or" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 c · 5 b",
      tip: "Question 1 is the module's core diagnostic. Anyone who chooses a) needs the three-column card drill again before the quiz.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Write the missing word.",
    color: C.green, instruction: "Copy each sentence and fill the gap.", size: 18,
    items: [
      "1.  My mother ______ coffee every morning.  (drink)",
      "2.  I know ______.  (Dawit)",
      "3.  We ______ to the market on Saturday.  (go)",
      "4.  She ______ speak three languages.  (ability)",
      "5.  I like tea, ______ I do not like coffee.",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Items 1 and 3 test the verb, item 2 the object pronoun, item 4 “can”, item 5 the joining word.",
      answers: "1 drinks · 2 him · 3 go · 4 can · 5 but",
      mistakes: "Item 1 needs the -s because “my mother” is one person. This previews Level 2 and learners will get it wrong — that is fine, correct it and move on.",
      tip: "Item 2 is the object pronoun test. If most get it wrong, redo slide 18 before the quiz.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Match the subject to the object, and the sentence to its parts.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the SUBJECT pronoun to the OBJECT pronoun", opts: "1. I     2. he     3. we     4. they          a) them     b) me     c) us     d) him" },
      { q: "Part 2 — match the SUBJECT to the rest of the sentence", opts: "1. My father     2. The children     3. Hana and I     4. It" },
      { q: "a) are students.        b) drives a bus.", opts: "c) is a black bag.        d) eat bread every day." },
      { q: "Part 3 — match the verb to its object", opts: "1. drink     2. read     3. drive     4. wear          a) a book     b) a car     c) a shirt     d) coffee" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks, three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–b, 2–d, 3–c, 4–a.  ·  Part 2: 1–b, 2–d, 3–a, 4–c.  ·  Part 3: 1–d, 2–a, 3–b, 4–c.",
      tip: "Part 2 tests subject-verb agreement without naming it. Note who gets it wrong — they will need extra help in Level 2.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — build the sentence", sub: "Use one word from each column.",
    color: C.green, instruction: "Write five different correct sentences. Use each subject once.", size: 18,
    items: [
      "SUBJECT:   I  ·  My father  ·  The children  ·  We  ·  She",
      "VERB:      eat  ·  drink  ·  study  ·  read  ·  drive",
      "OBJECT:    injera  ·  coffee  ·  English  ·  a book  ·  a bus",
      "Now add WHERE or WHEN to two of your sentences.",
      "Then change one sentence to use “cannot”.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "This is the three-column drill in written form. Let learners work alone, then read five of the sentences aloud and have the class check the order.",
      answers: "Many correct combinations. Check three things in each: the order, a capital letter at the start, and a full stop at the end. “My father drinks coffee.” and “She drives a bus.” need the -s.",
      mistakes: "Combinations must make sense as well as be grammatical: “The children drive a bus” is correct English but odd. Accept it and mention the difference.",
      tip: "This exercise generates twenty-five possible sentences from fifteen words. Say that — it shows learners how far a small vocabulary goes.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each sentence has one or more errors.",
    color: C.green, instruction: "Rewrite each sentence correctly.", size: 18,
    items: [
      "1.  I coffee drink every morning.",
      "2.  She likes I very much.",
      "3.  He can drives a car.",
      "4.  We go school every day.",
      "5.  my sister work in a hospital.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each sentence. Sentence 5 has three.",
      answers: "1 I drink coffee every morning. (word order) · 2 She likes me very much. (object pronoun) · 3 He can drive a car. (no -s after can) · 4 We go to school every day. (missing “to”) · 5 My sister works in a hospital. (capital, -s on the verb)",
      mistakes: "These five are exactly the module's four checks plus one from Module 1. Every error here is one you will meet again.",
      tip: "Have learners count the errors before correcting. Counting forces careful reading.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  In English the verb comes after the subject.",
      "2.  “She likes I” is correct English.",
      "3.  “Can” changes to “cans” for he and she.",
      "4.  We say “I go to school”, not “I go school”.",
      "5.  “But” joins two ideas that are different.",
      "6.  Every English sentence needs a subject.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Correcting every false statement is what makes this teach rather than test.",
      answers: "1 T · 2 F — “She likes me” · 3 F — “can” never changes · 4 T · 5 T · 6 T",
      tip: "Item 6 is worth discussing: even weather sentences need “it”, which is the strangest part of the rule for Amharic speakers.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Answer in a full sentence.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  What do you eat in the morning?",
      "2.  Where do you go every day?",
      "3.  What can you do well?",
      "4.  What can you NOT do?",
      "5.  Write one sentence about a friend, using “he” or “she” and one object pronoun.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Every answer is personal. Item 5 is the hardest and the most revealing.",
      answers: "1 I eat ___ in the morning. · 2 I go to ___ every day. · 3 I can ___. · 4 I cannot ___. · 5 e.g. “She is my friend and I know her well.”",
      mistakes: "Item 5 requires both a subject pronoun and an object pronoun in one sentence. Give an example on the board first.",
      tip: "Ask three learners to read item 5 aloud. It is the best quick check of whether the module has landed.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. One minute per task.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.", size: 19,
    items: [
      "1.  Say five SVO sentences about your life. Different verb each time.",
      "2.  Say three sentences about a family member, using he or she.",
      "3.  Say three things you can do and two you cannot.",
      "4.  Say two long sentences: one with “and”, one with “but”.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Give each partner a listening job: task 1 check the word order, task 2 check the pronoun, task 3 check there is no -s after can.",
      answers: "SUCCESS CRITERIA: 1 five correct SVO sentences · 2 the pronoun matches the person throughout · 3 no -s on the verb after can or cannot · 4 both halves are complete sentences.",
      tip: "Task 1 is the module assessment. Listen to as many pairs as you can and note who still reverts to first-language order.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These use everything from this module.",
    color: C.green, instruction: "Take your time. Look back at earlier slides if you need to.", size: 17,
    items: [
      { q: "1. Write five sentences about your family. Use a different subject pronoun in each one.", opts: "I, he, she, we, they — one each." },
      { q: "2. Correct this and explain each change:  “my brother coffee drink and he can drives a car”", opts: "There are five things to fix." },
      { q: "3. Write two sentences with object pronouns, and two with subject pronouns for the same people.", opts: "Four sentences in total." },
      { q: "4. Join these into ONE sentence:  “I like English.”  “I do not like exams.”", opts: "Which joining word do you need?" },
      { q: "5. Write the longest correct sentence you can, using subject, verb, object, where and when.", opts: "Keep the first three in order." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs and expect it to be genuinely hard.",
      answers: "1 five correct sentences with five different pronouns · 2 “My brother drinks coffee and he can drive a car.” — capital M, word order, -s on drinks, no -s on drive, and a full stop · 3 e.g. “She is my friend. I know her.” and “They are students. We help them.” · 4 “I like English, but I do not like exams.” · 5 any correct long sentence, e.g. “My mother drinks coffee at home every morning.”",
      tip: "Question 2 stacks five errors in one line. That is much harder than one at a time, and it is deliberate.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why do so many Ethiopian learners say “I injera eat”?", opts: "It is not carelessness. What is the real reason?" },
      { q: "2. Why does English have two different words — “he” and “him” — for the same person?", opts: "What does the difference tell the listener?" },
      { q: "3. Your friend says “She can drives.” How would you explain the mistake so they remember it?", opts: "How would you teach it?" },
      { q: "4. Which is more useful for a beginner: one hundred words, or ten sentence patterns? Why?", opts: "Think about what you can actually say with each." },
    ],
    notes: tn({
      time: "12 minutes. Discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning, then give the English phrase for what they said.",
      answers: "1 Because Amharic puts the verb at the end of the clause, so the learner is applying a correct rule from their own language. It is transfer, not carelessness. 2 The form tells the listener whether the person is doing the action or receiving it — English uses word form where other languages might use word order or endings. 3 Any clear explanation; the strongest says “can” already carries the meaning, so the second verb never changes, then drills five examples. 4 Ten patterns, because each pattern produces dozens of sentences while each word produces only itself.",
      tip: "Question 1 matters emotionally as well as intellectually. Learners who understand that the error comes from a rule, not from stupidity, correct it much faster.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · Word order", items: [
      { q: "1. Which sentence is correct?", opts: "a) She English studies.     b) She studies English.     c) Studies she English." },
      { q: "2. Rearrange:  water · drinks · my brother", opts: "Write the full sentence." },
      { q: "3. Correct this: “We every day English study.”", opts: "Write the full sentence." },
      { q: "4. What are the three parts of a simple English sentence, in order?", opts: "Write the three words." },
    ] },
    { part: "Part 2 · Pronouns", items: [
      { q: "5. Complete: “I know ___.”  (Dawit)", opts: "a) he     b) him     c) his" },
      { q: "6. Complete: “___ are students.”  (Sara and I)", opts: "a) They     b) We     c) You" },
      { q: "7. Correct this: “She likes I.”", opts: "Write the full sentence." },
      { q: "8. Which pronoun replaces “my bag”?", opts: "a) he     b) she     c) it" },
    ] },
    { part: "Part 3 · Can and cannot", items: [
      { q: "9. Which is correct?", opts: "a) He can swims.     b) He can swim.     c) He cans swim." },
      { q: "10. Make it negative: “I can drive.”", opts: "Write the full sentence." },
      { q: "11. Make it a question: “You can speak English.”", opts: "Write the full sentence." },
      { q: "12. Write one true sentence about something you cannot do.", opts: "Full sentence." },
    ] },
    { part: "Part 4 · Joining and listening", items: [
      { q: "13. Which word joins two DIFFERENT ideas?", opts: "a) and     b) but     c) to" },
      { q: "14. Join these: “I like coffee.” “I do not like tea.”", opts: "One sentence." },
      { q: "15. Listen: write the subject, the verb and the object.", opts: "Three columns." },
      { q: "16. Listen: what can the speaker not do?", opts: "Full sentence." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write an SVO sentence about what you eat.", opts: "Check the order." },
      { q: "18. Write a sentence with an object pronoun.", opts: "me, him, her, us or them." },
      { q: "19. Write a sentence about a family member with “he” or “she”.", opts: "Check the verb too." },
      { q: "20. SPEAKING: say five sentences about your day, all in the correct order.", opts: "Your teacher or partner listens and checks." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 5 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nFOR QUESTIONS 15 AND 16, READ ALOUD: “My sister reads a book every evening. She cannot drive a car.”",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — which sentence is correct?", a: "b) She studies English.", why: "Subject, verb, object. Option a) is first-language order and option c) is question order." },
      { q: "Q2 — water · drinks · my brother", a: "My brother drinks water.", why: "The subject is two words. Ask the three questions: who, what do they do, what to." },
      { q: "Q3 — correct “We every day English study.”", a: "We study English every day.", why: "The verb comes second and the time expression goes at the end, after the object." },
      { q: "Q4 — the three parts", a: "Subject · Verb · Object", why: "This order never changes in an English statement. It is the rule the whole module is built on." } ],
    [ { q: "Q5 — “I know ___.” (Dawit)", a: "b) him", why: "The pronoun comes after the verb, so it must be the object form. “His” is a possessive, not a pronoun here." },
      { q: "Q6 — “___ are students.” (Sara and I)", a: "b) We", why: "The group includes yourself, so it is “we”. Learners often say “they”, forgetting they are in the group." },
      { q: "Q7 — correct “She likes I.”", a: "She likes me.", why: "After the verb, use the object form. Before the verb, use the subject form." },
      { q: "Q8 — replaces “my bag”", a: "c) it", why: "“It” is used for a thing, an animal or the weather — anything that is not a person." } ],
    [ { q: "Q9 — which is correct?", a: "b) He can swim.", why: "“Can” never changes, and the verb after it never takes -s. Both other options add an -s where none belongs." },
      { q: "Q10 — negative of “I can drive.”", a: "I cannot drive.  (or: I can't drive.)", why: "Add “not” to “can”. The verb “drive” does not change." },
      { q: "Q11 — question from “You can speak English.”", a: "Can you speak English?", why: "“Can” moves in front of the subject, exactly like “is” and “are” in Module 3." },
      { q: "Q12 — something you cannot do", a: "e.g. “I cannot swim.”", why: "Any true sentence is correct if it has a subject, “cannot”, and a base verb with no -s." } ],
    [ { q: "Q13 — joins two different ideas", a: "b) but", why: "“And” joins similar ideas; “but” joins ideas that contrast with each other." },
      { q: "Q14 — join the two sentences", a: "I like coffee, but I do not like tea.", why: "Both halves stay complete, each with its own subject and verb. The comma before “but” is normal in writing." },
      { q: "Q15 — subject, verb, object", a: "My sister / reads / a book   (“every evening” = when)", why: "The time expression is not the object. The object is what she reads." },
      { q: "Q16 — what can the speaker not do?", a: "She cannot drive a car.", why: "“She” because it is the sister, and no -s on “drive” after “cannot”." } ],
    [ { q: "Q17 — an SVO sentence about food", a: "e.g. “I eat injera every day.”", why: "Marked on the order first, then the capital letter and the full stop." },
      { q: "Q18 — with an object pronoun", a: "e.g. “I know him.”  “She helps us.”", why: "The pronoun must come after the verb and must be from the object list." },
      { q: "Q19 — about a family member", a: "e.g. “She works in a hospital.”", why: "Correct pronoun for the person, and the -s on the verb because it is one person." },
      { q: "Q20 — speaking task", a: "Five sentences in the correct order", why: "Marked on word order above everything else. A listener should understand every sentence without effort." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q1, Q3 and Q7 are the diagnostic questions. Q1 and Q3 show whether word order is automatic; Q7 shows whether the object pronouns have landed. If the class failed those, run the three-column card drill daily through Module 6."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Out loud.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Say ten SVO sentences about your day", d: "Out loud, standing up. Different verb each time." },
      { t: "Chant the pronouns", d: "“I–me, he–him, she–her, we–us, they–them.” Five times." },
      { t: "Describe three people you know", d: "Use he or she, and one object pronoun each time." },
      { t: "Say five things you can and cannot do", d: "“I can ___. I cannot ___.”" },
      { t: "Make five long sentences", d: "Join two ideas each time, with “and” or “but”." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Write it on the board as well as the slide and say the due date.",
      tip: "Tuesday's chant pairs the subject and object forms so they are learned together rather than as two separate lists. That is the whole trick with pronouns.",
      activity: "Ask learners to send one classmate one SVO sentence in English each evening.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write the two pronoun lists", d: "Subject: I, you, he, she, it, we, they. Object: me, you, him, her, it, us, them. Then one example sentence for each pair." },
      { t: "Write ten sentences about your life", d: "Five SVO sentences · two with “can” · one with “cannot” · two joined with “and” or “but”. Check your nineteen points." },
      { t: "Record your 60-second speaking challenge", d: "Five SVO sentences · two about a family member · two “can” · one “cannot” · one long sentence with “but”." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Show your own completed example of task 2. Task 3 is required — the recording is the main assessment.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording personally, by voice, within two days. Listen for word order above everything else.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaCheck", title: "Pronoun lists — 5 marks", desc: "Both lists complete (3) · seven correct example sentences (2)." },
      { icon: "FaPencilAlt", title: "Ten sentences — 10 marks", desc: "Ten written (2) · correct word order in every one (4) · correct pronouns (2) · no -s after can (1) · capitals and full stops (1)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five parts (3) · word order correct throughout (4) · correct he/she (2) · understandable to a stranger (1)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework. Note that word order carries the most marks — that tells learners what matters.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Mark only what has been taught in Modules 1 to 5.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaLayerGroup", title: "Subject + Verb + Object", desc: "The order never changes. Who does it, what they do, what they do it to." },
      { icon: "FaUser", title: "Subject pronouns", desc: "I · you · he · she · it · we · they — always before the verb." },
      { icon: "FaExchangeAlt", title: "Object pronouns", desc: "me · you · him · her · it · us · them — always after the verb." },
      { icon: "FaStar", title: "can and cannot", desc: "One form for everybody, and no -s on the verb after it." },
      { icon: "FaArrowRight", title: "and · but", desc: "AND joins similar ideas. BUT joins different ones. Both halves stay complete." },
      { icon: "FaWalking", title: "Ten useful verbs", desc: "eat · drink · go · work · study · read · write · like · have · want" },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2 and read the objectives again. Ask the same question you asked at the start.",
      tip: "Ask each learner to say one sentence they could not have said four weeks ago. That is a better summary than any list.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaLayerGroup", title: "The order", desc: "SUBJECT  +  VERB  +  OBJECT  (+ where)  (+ when)\n\nI  eat  injera  at home  every day." },
      { icon: "FaExchangeAlt", title: "The two pronoun lists", desc: "Before the verb:  I · you · he · she · it · we · they\nAfter the verb:  me · you · him · her · it · us · them" },
      { icon: "FaStar", title: "can / cannot", desc: "I can read.  ·  She can drive.  ·  They cannot come.\nCan you speak English?  →  Yes, I can. / No, I cannot.\nNever “can drives”." },
      { icon: "FaLanguage", title: "The five verbs", desc: "eat  /iːt/  ·  work  /wɜːk/  ·  like  /laɪk/\nhave  /hæv/  ·  go  /ɡəʊ/\nRemember: go TO a place." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it. It is the most useful reference page in Level 1.",
      tip: "Print it as an A4 poster beside the posters from Modules 1 to 4.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You can now build your own English sentences — not just repeat the ones you learned.",
    sub: "Subject, verb, object. Two sets of pronouns. Can and cannot. And two ways to join ideas.\nThat is the machinery of the language. Everything in Level 2 is built on top of it.",
    chips: ["NEXT — Module 6", "First Conversations & Review", "Put all five modules together and complete Level 1"],
    notes: tn({
      time: "4 minutes.",
      how: "Name the shift precisely: until now learners have been repeating language; from this module they can generate it. That is the real threshold in learning a language, and it is worth saying out loud.",
      tip: "Remind them that Module 6 is a review module — no new grammar, just putting everything together and finishing the level. After five hard modules, that is genuinely good news.",
      activity: "Ask every learner to say one original sentence — one nobody taught them — before they leave.",
    }),
  });
};
