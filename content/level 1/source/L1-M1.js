"use strict";
/* LEVEL 1 · MODULE 1 — The English Alphabet & Sounds   (76 slides) */
const { C, G } = require("./theme");

module.exports = function (ctx, L) {
  // ---- section identities
  const SEC = {
    obj:   { label: "Learning Objectives", color: C.green,  icon: "FaBullseye" },
    warm:  { label: "Warm-up",             color: C.gold,   icon: "FaFire" },
    intro: { label: "Introduction",        color: C.green,  icon: "FaFlag" },
    con:   { label: "Concept",             color: C.green,  icon: "FaLightbulb" },
    voc:   { label: "Vocabulary",          color: C.vocab,  icon: "FaLanguage" },
    gra:   { label: "Grammar",             color: C.gram,   icon: "FaSitemap" },
    gex:   { label: "Guided Examples",     color: C.gram,   icon: "FaChalkboardTeacher" },
    conv:  { label: "Conversation",        color: C.speak,  icon: "FaComments" },
    spk:   { label: "Speaking",            color: C.speak,  icon: "FaMicrophone" },
    lis:   { label: "Listening",           color: C.listen, icon: "FaHeadphones" },
    rea:   { label: "Reading",             color: C.read,   icon: "FaBookOpen" },
    wri:   { label: "Writing",             color: C.write,  icon: "FaPencilAlt" },
    pra:   { label: "Practice",            color: C.green,  icon: "FaDumbbell" },
    qui:   { label: "Quiz",                color: C.greenDark, icon: "FaClipboardCheck" },
    key:   { label: "Answer Key",          color: C.ok,     icon: "FaKey" },
    hw:    { label: "Homework",            color: C.gold,   icon: "FaHome" },
    sum:   { label: "Summary",             color: C.green,  icon: "FaListUl" },
  };

  // ---- teacher-note formatter
  function tn(o) {
    const p = [];
    if (o.time) p.push("TIME: " + o.time);
    if (o.how) p.push("HOW TO TEACH: " + o.how);
    if (o.mistakes) p.push("COMMON MISTAKES: " + o.mistakes);
    if (o.extra) p.push("EXTRA EXAMPLES: " + o.extra);
    if (o.tip) p.push("TIP: " + o.tip);
    if (o.activity) p.push("CLASSROOM ACTIVITY: " + o.activity);
    if (o.answers) p.push("ANSWERS: " + o.answers);
    return p.join("\n\n");
  }

  const AZ = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  const NAMES = { A:"ay", B:"bee", C:"see", D:"dee", E:"ee", F:"ef", G:"jee", H:"aitch", I:"eye",
    J:"jay", K:"kay", L:"el", M:"em", N:"en", O:"oh", P:"pee", Q:"cue", R:"ar", S:"es", T:"tee",
    U:"you", V:"vee", W:"double-u", X:"ex", Y:"why", Z:"zed" };

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 1", levelNo: "1", levelName: "Beginner\nEnglish", cefr: "CEFR Pre-A1 → A1",
    moduleTag: "Module 1 of 6",
    title: "The English Alphabet & Sounds",
    sub: "The first module of the course. We start at the very beginning: 26 letters, the sound each one makes, and your first five English words.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "5", v: "NEW WORDS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons, or 8 short self-study sessions.",
      how: "Open by telling learners plainly: 'In four lessons you will read and write your first English words. Today you do not need to know anything.' Then move quickly to the warm-up — do not spend time on introductions.",
      tip: "Write the four lesson dates on the board so learners can see the module has an end. Beginners drop out when learning feels endless.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "By the end of this module — five things you cannot do yet.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Say the names of all 26 English letters", d: "In order from A to Z, and out of order when someone points at one." },
      { t: "Say the sound each letter makes", d: "The name and the sound are different. This one idea is the key to reading English." },
      { t: "Tell capital letters from small letters", d: "A and a are the same letter. You need to know both." },
      { t: "Spell your name and your town out loud", d: "\"S–A–R–A.\"  \"B–A–H–I–R  D–A–R.\"" },
      { t: "Read and write your first five English words", d: "pen · book · bag · van · school" },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Read each objective aloud, then ask the class: 'Can you do this now?' Most will say no. Say: 'Good. That is why we are here.' Return to this slide at the end of the module and ask again.",
      tip: "Objectives are promises. Do not add extra ones during the module, and do not skip any — learners notice.",
      activity: "Ask each learner to point at the objective they most want to achieve. It tells you what to emphasise.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: what do you already know?", sub: "No wrong answers. Nobody is corrected in this activity.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaEye", title: "1 · Find the letters", desc: "Look at your phone, a bottle, a sign or a shirt. Find 5 English letters. Say them any way you can." },
      { icon: "FaPen", title: "2 · Write your name", desc: "Write your name on paper — in Amharic or in English. Count the letters. Tell your partner the number." },
      { icon: "FaHeadphones", title: "3 · Just listen", desc: "The teacher plays the alphabet song once. Do not sing. Do not repeat. Only listen." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Run all three quickly, in this order. The purpose is not learning — it is removing fear. Every learner discovers they already recognise some English letters, which changes how they enter the lesson.",
      mistakes: "The commonest teacher mistake here is correcting. Do not correct anything in the warm-up, not even badly said letters.",
      tip: "For task 1, learners with no phone can use the classroom door, a book cover or a food packet. Bring two or three packets with you.",
      activity: "Extension for a strong class: count how many different letters the whole class found and write the total on the board.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "26 letters make every word in English.",
    sub: "Amharic uses more than 200 characters. English uses 26. That is the good news.\nThe hard news: one English letter can make more than one sound — so we learn the letter AND the sound together, from today.",
    chips: ["26 letters in total", "5 vowels: A E I O U", "21 consonants"],
    notes: tn({
      time: "4 minutes.",
      how: "Say the comparison out loud — it genuinely encourages adult beginners who believe English will be harder than Amharic. Then set today's rule: 'Every time we learn a letter, we learn two things: its name and its sound.'",
      mistakes: "Learners who have seen the alphabet before will assume they know this module. Ask one of them to say the SOUND of G. Most will say 'jee' (the name). That demonstrates why the module is needed.",
      tip: "Do not go into 'one letter, many sounds' in detail yet. Plant the idea, move on. Detail comes in Module 4.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1 — the 26 letters
  L.letters({
    sec: SEC.con, title: "The 26 letters", sub: "Capital letter and small letter. Same letter, two sizes.",
    items: AZ.map((c) => ({ cap: c, low: c.toLowerCase(), sub: NAMES[c] })),
    cols: 7, letterSize: 26,
    note: "Say each letter after your teacher. Then your teacher points at letters out of order — say those too.",
    notes: tn({
      time: "8 minutes.",
      how: "Point and say. Class repeats in chorus three times. THEN point out of order and ask individuals. The out-of-order step is essential: a learner who can only recite A-B-C in sequence is singing, not reading.",
      mistakes: "H is 'aitch', not 'haitch'. W is 'double-u', not 'double-v'. Z is 'zed' in British English and 'zee' in American English — teach 'zed', accept 'zee', tell learners both exist so they are not confused by films.",
      extra: "Ask: which letters look the same as capital and small? C c, O o, S s, V v, W w, X x, Z z. Which look completely different? A a, B b, D d, E e, G g, Q q, R r.",
      tip: "Sixty seconds of out-of-order pointing at the start of every lesson for the rest of the module. It takes no preparation and it is the single most effective drill in Level 1.",
      activity: "Alphabet chain: learner 1 says A, learner 2 says B, around the class. Anyone who hesitates for more than 3 seconds passes to the next person. Run it twice — the second time is always faster.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — name vs sound
  L.table({
    sec: SEC.con, title: "Letter NAME and letter SOUND are different",
    sub: "This is the most important idea in the whole module.",
    table: {
      color: C.green, rowH: 0.62, fontSize: 19, headSize: 17,
      colW: [1.9, 3.3, 3.3, 3.633],
      rows: [
        ["Letter", "NAME — use it to spell", "SOUND — use it to read", "Word"],
        ["B", "“bee”", "/b/", "book"],
        ["C", "“see”", "/k/", "cat"],
        ["G", "“jee”", "/g/", "goat"],
        ["H", "“aitch”", "/h/", "hat"],
        ["W", "“double-u”", "/w/", "water"],
      ],
    },
    note: "You use the NAME when you spell:  “B–O–O–K.”      You use the SOUND when you read:  /b/ /ʊ/ /k/ → book.",
    notes: tn({
      time: "10 minutes. Do not rush this slide.",
      how: "Teach it physically. Hold up a card with B. Say: 'Its name is bee.' Then: 'Its sound is /b/.' Then: 'To spell BOOK I say bee-oh-oh-kay. To read BOOK I say /b/ /ʊ/ /k/.' Do the same with C and G.",
      mistakes: "Learners taught only the alphabet song can sing A-B-C but cannot sound out a word — because nobody ever told them the two are different. Watch for a learner reading 'cat' as 'see-ay-tee'. That learner is spelling, not reading, and needs this slide again.",
      extra: "C is the clearest example: its name has an /s/ sound in it, but its usual sound is /k/. 'See' and /k/ share nothing. Say both slowly.",
      tip: "Test the distinction directly: point at a letter and say either 'name?' or 'sound?' Learners must give the right one. Two minutes, every lesson.",
      activity: "Name or Sound: teacher says 'ef' or /f/; learners hold up one finger for NAME, two for SOUND. Fast, silent, and shows you instantly who has understood.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — vowels
  L.letters({
    sec: SEC.con, title: "5 vowels, 21 consonants", sub: "The gold letters are the vowels: A, E, I, O, U.",
    items: AZ.map((c) => ({ cap: c, low: c.toLowerCase(), hi: "AEIOU".includes(c) })),
    cols: 7, letterSize: 28, hiFill: C.gold,
    note: "Every English word must have at least one vowel.  pen · bag · school · Ethiopia — look for the vowels in each one.",
    notes: tn({
      time: "6 minutes.",
      how: "Say the five vowels five times in chorus: A-E-I-O-U. Then test the rule: write any word on the board and ask a learner to point at its vowel. Use the learners' own names.",
      mistakes: "Learners sometimes count Y as a vowel because they have heard 'and sometimes Y'. At Level 1 say clearly: five vowels. Y is a consonant. The exception is taught in Level 2.",
      extra: "Ethiopian place names are good practice: Addis Ababa (a-i-a-a-a), Gondar (o-a), Jimma (i-a), Bahir Dar (a-i-a).",
      tip: "Have learners find the vowels in their own name. It makes the rule personal and it is memorable.",
      activity: "Vowel hunt: write 10 words on the board. In pairs, learners circle every vowel. First pair to finish correctly wins.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — vowel sounds
  L.grid({
    sec: SEC.con, title: "The 5 short vowel sounds", sub: "Learn one sound for each vowel first. Other sounds come later.",
    cols: 5, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 34, descSize: 15,
    items: [
      { title: "A a", desc: "/æ/\n\nbag · cat · man\n\nOpen your mouth wide." },
      { title: "E e", desc: "/e/\n\npen · bed · ten\n\nMouth half open." },
      { title: "I i", desc: "/ɪ/\n\nbig · sit · this\n\nShort and quick." },
      { title: "O o", desc: "/ɒ/\n\ndog · hot · box\n\nRound your lips." },
      { title: "U u", desc: "/ʌ/\n\ncup · bus · sun\n\nRelaxed, short." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Model each sound with an exaggerated mouth shape and hold it for two seconds. Class repeats three times in chorus, then five individuals repeat alone. Then say the three example words for each vowel.",
      mistakes: "The /æ/ in 'bag' and the /e/ in 'bed' collapse into one sound for most Ethiopian learners. Drill the pair directly: bag–beg, sat–set, man–men, bad–bed. Say one and ask learners to point left or right.",
      extra: "More minimal pairs if you have time: pen–pan, cat–cut, sit–set, hot–hat.",
      tip: "Exaggerate. A beginner cannot copy a mouth shape they cannot see. Sit at the front where everyone can see your mouth, and say it slowly before you say it normally.",
      activity: "Vowel corners: label five corners or walls A E I O U. Say a word; learners walk to the vowel they hear. Physical, noisy, and very effective for adults.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — capitals
  L.table({
    sec: SEC.con, title: "Capital letters and small letters",
    sub: "A and a are the same letter. We use the capital in four places.",
    table: {
      color: C.green, rowH: 0.6, fontSize: 18, headSize: 16, colW: [3.0, 4.6, 4.533],
      rows: [
        ["Use a capital for…", "Example", "Not this"],
        ["The first letter of a sentence", "This is my pen.", "this is my pen."],
        ["A person's name", "Sara · Dawit · Hana", "sara · dawit"],
        ["A place", "Addis Ababa · Gondar · Ethiopia", "addis ababa"],
        ["Days, months, languages", "Monday · September · English", "monday · english"],
      ],
    },
    note: "And one more: the word “I” is ALWAYS a capital, anywhere in the sentence.  →  “Sara and I are students.”",
    notes: tn({
      time: "8 minutes.",
      how: "Read each row, then ask learners for one more example from their own life: their name, their town, their language. Write their answers on the board with the capital in a different colour.",
      mistakes: "Amharic script has no capital letters, so this rule has no equivalent in the learners' first language — expect it to be forgotten for several weeks. Do not treat it as carelessness. Re-test it every lesson.",
      extra: "'english' vs 'English', 'amharic' vs 'Amharic', 'ethiopia' vs 'Ethiopia' — language and country names always take a capital, which surprises many learners.",
      tip: "The capital 'I' is the fastest win on this slide. Learners remember it because it is strange, and it appears in almost every sentence they will write.",
      activity: "Capital hunt: give learners a short sentence written entirely in small letters. In pairs they rewrite it correctly. Four sentences takes three minutes.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — blending
  L.grid({
    sec: SEC.con, title: "Put the sounds together — and you are reading",
    sub: "Say each sound. Then say them faster. Then say the whole word.",
    cols: 3, color: C.green, titleSize: 30, descSize: 17, shadow: true, tint: C.white,
    items: [
      { title: "/p/ + /e/ + /n/", desc: "→  pen\n\nSay it slowly: p… e… n.\nThen faster: p-e-n.\nThen together: pen." },
      { title: "/b/ + /æ/ + /g/", desc: "→  bag\n\nSay it slowly: b… a… g.\nThen faster: b-a-g.\nThen together: bag." },
      { title: "/v/ + /æ/ + /n/", desc: "→  van\n\nSay it slowly: v… a… n.\nThen faster: v-a-n.\nThen together: van." },
    ],
    notes: tn({
      time: "12 minutes. This is the highest-value slide in the module.",
      how: "Slide your finger under the letters as you speed up — learners follow your finger, not just your voice. Do all three words as a class, then give three more on the board for pairs to blend alone.",
      mistakes: "Do not show the picture or say the meaning first. If learners see a picture of a bag they will guess the word from the image and never decode the letters. Sound first, meaning second — always.",
      extra: "Once the three on the slide are secure: cat, dog, hat, sun, box, ten, cup, big.",
      tip: "Swap one sound to show how much a single letter changes: bag → big → bug → bun. Learners hear that English is built from these small pieces. Do this every lesson.",
      activity: "Sound cards: give each of three learners a card — /b/, /æ/, /g/. They stand in order and say their sound; then walk together and say the word. Swap the middle learner for /ɪ/ and the word becomes 'big'.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "pen", ipa: "/pen/", pos: "noun", icon: "FaPen",
      meaning: "A thing you write with.",
      example: "This is my pen. My pen is blue.",
      mistake: "Do not say “ben”. English /p/ needs a puff of air. Hold your hand in front of your mouth: on “pen” you feel the air, on “Ben” you do not.",
      notes: tn({ time: "5 minutes.",
        how: "Show a real pen. Say the word three times. Class repeats. Then ask five learners individually: “What is this?” They answer: “It is a pen.” Full sentence, not one word.",
        mistakes: "The /p/–/b/ confusion is the single commonest Ethiopian pronunciation issue. Drill the pair: pen–Ben, pig–big, cap–cab, park–bark.",
        extra: "pencil, paper, book, bag — all classroom objects the learner can point at.",
        tip: "The paper test makes /p/ visible: hold a small piece of paper in front of your lips. It moves on /p/ and stays still on /b/. Learners never forget it.",
        activity: "Hold up an object; learners say “It is a pen.” Then hold up nothing and ask “Is it a pen?” so they must answer “No, it is a book.”" }) },

    { word: "book", ipa: "/bʊk/", pos: "noun", icon: "FaBook",
      meaning: "A thing with pages that you read.",
      example: "This is my English book.",
      mistake: "The vowel is short: /bʊk/, not “boook”. Say it quickly. Also check the /b/ — book, not “pook”.",
      notes: tn({ time: "5 minutes.",
        how: "Hold up the course book or any book. Say it, class repeats three times, then individuals. Then combine with the previous word: “This is my pen. This is my book.”",
        mistakes: "Learners often lengthen the vowel because the spelling has two o's. Show that 'oo' here is short, unlike 'school'. Say book and school side by side.",
        extra: "notebook, exercise book, textbook — but keep these for recognition only at this stage.",
        tip: "Point at the two o's and say: 'Two letters, one short sound.' English spelling does not match sound one-to-one — say this now, briefly, so it is not a shock later.",
        activity: "Classroom inventory: in pairs, learners list every book they can see and count them in English." }) },

    { word: "bag", ipa: "/bæɡ/", pos: "noun", icon: "FaShoppingBag",
      meaning: "You carry things in it.",
      example: "My book is in my bag.",
      mistake: "Say “bag”, not “beg”. Open your mouth wider for /æ/. “Beg” is a different word — it means to ask for money.",
      notes: tn({ time: "5 minutes.",
        how: "Use a real bag and put a book inside it. Say the sentence while doing the action: 'My book is in my bag.' The action makes the preposition 'in' clear without translation.",
        mistakes: "bag–beg is the /æ/–/e/ pair from the vowel slide. Drill it again here: bag–beg, bad–bed, sat–set, man–men.",
        extra: "Put the book on the bag, under the bag, in the bag — three prepositions, no explanation needed.",
        tip: "Objects the learners actually own work better than pictures. Ask learners to hold up their own bag.",
        activity: "What is in your bag? Learners open their bag, hold up one object and say 'This is my ___.' Anything they cannot name in English, write on the board." }) },

    { word: "van", ipa: "/væn/", pos: "noun", icon: "FaTruck",
      meaning: "A big car for carrying people or goods.",
      example: "The van is blue. The van goes to Merkato.",
      mistake: "Do not say “ban”. For /v/, put your top teeth on your bottom lip and let the air out. Amharic has no /v/ sound — this needs practice.",
      notes: tn({ time: "6 minutes. Allow extra time for the /v/ sound.",
        how: "Model /v/ slowly with your teeth clearly visible on your lip. Hold the sound for two seconds: vvvvv. Class copies. Only then say the whole word.",
        mistakes: "/v/ becoming /b/ is universal for Amharic, Tigrinya and Oromo speakers because /v/ does not exist in those languages. It is not carelessness — the mouth has never made this shape. Expect several lessons of practice.",
        extra: "van–ban, vote–boat, very–berry, seven, TV, video — the last three are useful because learners already know them.",
        tip: "Say: 'In Amharic there is no v. Your mouth has never done this before. That is normal — we will practise it every lesson.' Naming the cause reduces embarrassment and speeds up the fix.",
        activity: "Mirror work: learners use a phone camera or a small mirror to watch their own teeth touch their lip. Self-observation fixes this faster than correction." }) },

    { word: "school", ipa: "/skuːl/", pos: "noun", icon: "FaSchool",
      meaning: "The place where you learn.",
      example: "I go to school every day.",
      mistake: "Do not add a vowel at the start: not “isukul” or “sikul”. Start with s and k joined: s-kool. The vowel here is long: /uː/.",
      notes: tn({ time: "6 minutes.",
        how: "Break it: say /s/ alone, then /k/ alone, then join them with no gap — sk. Then add the rest: sk-ool. Build it forwards, never backwards.",
        mistakes: "Inserting a vowel before or inside a consonant cluster is a strong first-language pattern: 'isukul', 'sitreet', 'isport'. Drill the cluster in isolation before the word.",
        extra: "Other clusters to practise the same way: street, stop, sport, small, student, spell.",
        tip: "Have learners whisper the cluster first. Whispering removes the vowel, because a vowel needs voice. Then say it aloud with the same mouth shape.",
        activity: "Cluster ladder on the board: s → sk → sko → skoo → school. Learners climb the ladder in chorus, then individually." }) },
  ];
  VOCAB.forEach((v, i) => {
    L.vocab({
      sec: Object.assign({}, SEC.voc, { label: "Vocabulary " + (i + 1) + " of 5" }),
      title: "New word: " + v.word, sub: "Word · pronunciation · meaning · example · common mistake",
      word: v.word, ipa: v.ipa, pos: v.pos, icon: v.icon,
      meaning: v.meaning, example: v.example, mistake: v.mistake,
      color: C.vocab, tint: C.vocabTint, inkCol: C.vocabInk,
      notes: v.notes,
    });
  });

  // ============================================================ 16 · GRAMMAR 1
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 1 of 5" }),
    title: "Rule 1 — every sentence starts with a capital letter",
    sub: "No exceptions. Every single sentence.",
    left: { h: "Correct", items: ["My name is Sara.", "This is my book.", "I am a student."] },
    right: { h: "Wrong", items: ["my name is Sara.", "this is my book.", "i am a student."] },
    note: "Look at the first letter of every sentence on this slide. It is always big.",
    notes: tn({
      time: "6 minutes.",
      how: "Write one sentence on the board in all small letters. Ask: 'What is missing?' Let a learner come and fix it. Learner-corrected errors are remembered far better than teacher-stated rules.",
      mistakes: "Because Amharic has no capital letters, this rule feels arbitrary. Say so: 'This does not exist in Amharic. In English it is a rule with no reason — we just do it.' Honesty here helps.",
      extra: "Give three more all-small sentences for pairs to correct: 'this is my pen.' 'i am from gondar.' 'my teacher is hana.'",
      tip: "Mark it in every piece of written work from today onwards. If you let it pass once, it takes months to fix.",
      activity: "Sentence relay: one learner writes a sentence in small letters on the board, the next learner corrects it, the third reads it aloud.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 2 of 5" }),
    title: "Rule 2 — capital letters for names, places, days and languages",
    sub: "If it is the name of ONE special person, place, day or language — capital.",
    table: {
      color: C.gram, rowH: 0.56, fontSize: 18, headSize: 16, colW: [3.2, 5.4, 3.533],
      rows: [
        ["Type", "Correct", "Capital?"],
        ["Person's name", "Sara · Dawit · Hana · Abel", "Yes — always"],
        ["City or town", "Addis Ababa · Gondar · Adama", "Yes — always"],
        ["Country", "Ethiopia · Kenya · Sudan", "Yes — always"],
        ["Day and month", "Monday · Friday · September", "Yes — always"],
        ["Language", "English · Amharic · Oromo", "Yes — always"],
        ["An ordinary thing", "pen · book · bag · school", "No — small letter"],
      ],
    },
    note: "Test yourself: “i live in gondar and i speak amharic.”  →  “I live in Gondar and I speak Amharic.”  Four capitals.",
    notes: tn({
      time: "8 minutes.",
      how: "Go row by row and ask learners to supply a real example from their own life for each row — their name, their town, their language. Write their words on the board with the capital in a second colour.",
      mistakes: "The last row is the one learners get wrong in the opposite direction: after learning the rule, some capitalise every noun ('My Pen is Blue'). Show that row explicitly.",
      extra: "Ethiopian months and festivals for extra practice: Meskel, Timket, Genna, Eid, Enkutatash — all capitals.",
      tip: "Count the capitals in the sentence in the note box: I, Gondar, I, Amharic. Counting turns an abstract rule into a checkable task.",
      activity: "In pairs, learners write one sentence containing their name, their town and their language, then swap and check each other's capitals.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 3 of 5" }),
    title: "Rule 3 — the full stop ( . )", sub: "It tells the reader: this idea has finished.",
    color: C.gram, size: 21,
    items: [
      { t: "A full stop ends a sentence", d: "“This is my book.”  Without the full stop the reader does not know where to stop." },
      { t: "One idea, one sentence, one full stop", d: "“This is my pen. It is blue.”  Two ideas → two sentences → two full stops." },
      { t: "After a full stop, the next letter is a capital", d: "Full stop and capital always travel together. “I am a student. I am from Adama.”" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Read a short text aloud with no pauses at all, deliberately, until learners look confused. Then read it again with proper stops. Ask: 'Which was easier?' That demonstrates the full stop better than any definition.",
      mistakes: "Beginners write one long sentence joined by 'and': 'this is my pen and it is blue and my book is in my bag'. Show them where the full stops belong and rewrite it as three sentences.",
      extra: "Give this on the board for correction: 'my name is abel i am from merkato i am a trader' → three sentences, three capitals, three full stops.",
      tip: "Teach the full stop and the capital as one habit, not two rules. Learners who learn them separately apply only one.",
      activity: "Breath reading: learners read a short text aloud and must take a breath at every full stop. It makes punctuation physical.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 4 of 5" }),
    title: "Rule 4 — the question mark ( ? )",
    sub: "When you ask, the sentence ends with ? and your voice goes up.",
    table: {
      color: C.gram, rowH: 0.72, fontSize: 19, headSize: 16, colW: [2.6, 2.6, 6.933],
      rows: [
        ["Type", "Ends with", "Example"],
        ["Statement — you tell", ".  full stop", "My name is Sara.   ·   This is my bag."],
        ["Question — you ask", "?  question mark", "What is your name?   ·   Is this your bag?"],
      ],
    },
    note: "Say both aloud. “My name is Sara.” — your voice goes down ↘   “What is your name?” — your voice goes up ↗",
    notes: tn({
      time: "7 minutes.",
      how: "Say each example twice: once with the correct intonation and once flat. Ask learners which one sounds like a question. Then have the class say both with an exaggerated rise and fall, using a hand gesture going up and down.",
      mistakes: "Learners often write the question mark but say the sentence with flat intonation, so it does not sound like a question to a listener. The punctuation is the easy half; the voice is the half that matters in speech.",
      extra: "More pairs: 'This is a pen.' / 'Is this a pen?'  ·  'You are a student.' / 'Are you a student?'",
      tip: "Use your hand as a pitch line: move it up for a question, down for a statement. Learners copy the gesture and the voice follows.",
      activity: "Statement or question: teacher says a sentence with no punctuation visible; learners raise a hand for question, keep it down for statement. Fast, and it tests listening not reading.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Grammar 5 of 5" }),
    title: "Rule 5 — put all three rules together",
    sub: "Capital at the start · capital for names and places · the right mark at the end.",
    left: { h: "Correct", items: ["My name is Dawit.", "I live in Bahir Dar.", "What is your name?"] },
    right: { h: "Wrong", items: ["my name is dawit", "i live in bahir dar", "what is your name"] },
    note: "Every sentence you write from today must pass three checks:  1 · capital at the start   2 · capitals on names and places   3 · a full stop or a question mark at the end.",
    notes: tn({
      time: "8 minutes.",
      how: "Take the three wrong sentences one at a time. For each, ask the class to name every error before you fix it. There are three errors in each — capital at the start, capital on the name, and the end mark.",
      mistakes: "Learners usually spot one error and stop. Tell them in advance there are three, so they keep looking.",
      extra: "Two more for pairs: 'this is my friend hana' and 'do you speak english'.",
      tip: "This three-check list becomes the marking standard for the rest of Level 1. Write it on a poster and leave it on the classroom wall.",
      activity: "Error auction: show a wrong sentence; teams 'bid' by saying how many errors they can find. The team bidding highest must find them all or lose the point.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  const GEX = [
    { title: "Guided examples 1 — capital letters", sub: "Read the question, look at the answer, then read WHY.", items: [
      { q: "Correct this: “my name is hana.”", a: "My name is Hana.", why: "Two capitals are needed. “My” starts the sentence. “Hana” is a person's name. The full stop was already correct." },
      { q: "Correct this: “i am from addis ababa.”", a: "I am from Addis Ababa.", why: "Three capitals. “I” is always a capital. “Addis” and “Ababa” are both parts of the place name, so both take a capital." },
      { q: "Is this correct? “This is my Pen.”", a: "No — it should be “This is my pen.”", why: "“Pen” is an ordinary thing, not a name. Only special names take a capital in the middle of a sentence." },
    ] },
    { title: "Guided examples 2 — alphabetical order", sub: "Put the letters in the order they appear in the alphabet.", items: [
      { q: "Put in order:  M, D, T, A, P", a: "A, D, M, P, T", why: "Go through the alphabet and take each letter as you reach it: A comes first, then D, then M, then P, then T." },
      { q: "Which letter comes after R?", a: "S", why: "The order is P, Q, R, S, T. Saying the four letters around it out loud is faster than starting from A." },
      { q: "Which letter comes before F?", a: "E", why: "The order is C, D, E, F. E is also a vowel — useful to notice." },
    ] },
    { title: "Guided examples 3 — name or sound?", sub: "Remember: the name is for spelling, the sound is for reading.", items: [
      { q: "What is the NAME of the letter G?", a: "“jee”", why: "The name is what you say when you spell a word out loud: G–O–A–T is “jee–oh–ay–tee”." },
      { q: "What is the SOUND of the letter G?", a: "/g/ — as in goat", why: "The sound is what you use to read. The name “jee” and the sound /g/ are completely different — this is the key idea of the module." },
      { q: "You spell your name aloud. Do you use names or sounds?", a: "Names.", why: "Spelling always uses letter names: “S–A–R–A”, not /s/ /æ/ /r/ /ə/. Reading uses sounds." },
    ] },
    { title: "Guided examples 4 — blending sounds into words", sub: "Say the sounds, speed up, then say the word.", items: [
      { q: "Blend these sounds:  /b/ + /ʊ/ + /k/", a: "book", why: "Say each sound separately, then faster, then join them. Do not say the letter names — “bee-oh-oh-kay” is spelling, not reading." },
      { q: "Blend these sounds:  /v/ + /æ/ + /n/", a: "van", why: "Start with your teeth on your lip for /v/. If you say “ban”, your lips touched each other instead of your teeth touching your lip." },
      { q: "Change one sound: bag → b + /ɪ/ + g", a: "big", why: "Only the vowel changed, and the whole word changed with it. This is why the five vowel sounds matter so much." },
    ] },
    { title: "Guided examples 5 — full stops and question marks", sub: "Decide what the sentence is doing, then choose the mark.", items: [
      { q: "Add the correct mark: “This is my bag”", a: "This is my bag.", why: "The speaker is telling you something, so it is a statement and takes a full stop. The voice goes down at the end." },
      { q: "Add the correct mark: “What is your name”", a: "What is your name?", why: "It begins with a question word, so it is a question and takes a question mark. The voice goes up at the end." },
      { q: "Add the correct marks: “I am Abel I am a trader”", a: "I am Abel. I am a trader.", why: "Two separate ideas, so two sentences. A full stop after the first, and the second must then start with a capital I." },
    ] },
  ];
  GEX.forEach((g, i) => {
    L.answers({
      sec: Object.assign({}, SEC.gex, { label: "Guided Examples " + (i + 1) + " of 5" }),
      title: g.title, sub: g.sub, items: g.items, size: 19,
      notes: tn({
        time: "6 minutes per slide.",
        how: "Cover the answer and ask the class first. Take answers from at least two learners before revealing. Then read the WHY aloud — the explanation is the teaching, not the answer.",
        mistakes: "Do not let learners copy the answer without hearing the reason. A learner who knows the answer but not the reason cannot do the next question.",
        tip: "If most of the class gets an item wrong, stop and re-teach that concept slide before continuing. These examples are a diagnostic as much as a practice.",
        activity: "Ask a learner who answered correctly to explain the WHY in their own words before you read the slide. Peer explanation is more convincing than teacher explanation.",
      }),
    });
  });

  // ============================================================ 26 · CONVERSATION 1
  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 1 of 5" }),
    title: "Meeting someone and spelling your name",
    sub: "Sara meets Dawit outside the school gate in Bahir Dar.",
    turns: [
      { who: "DAWIT", text: "Hello. What is your name?", side: "l" },
      { who: "SARA", text: "My name is Sara.", side: "r" },
      { who: "DAWIT", text: "How do you spell it?", side: "l" },
      { who: "SARA", text: "S – A – R – A.", side: "r" },
      { who: "DAWIT", text: "Thank you. My name is Dawit. D – A – W – I – T.", side: "l" },
      { who: "SARA", text: "Nice to meet you, Dawit.", side: "r" },
    ],
    note: "Listen first. Then repeat each line. Then read it in pairs — one learner is Sara, one is Dawit. Then change the names to your own.",
    notes: tn({
      time: "10 minutes.",
      how: "Four steps, in order: (1) learners listen with books closed, (2) class repeats each line in chorus, (3) pairs read the script, (4) pairs perform it with their own real names and towns. Do not skip step 4 — it is where the learning becomes theirs.",
      mistakes: "Learners spell too fast and run the letters together. Model a slow, clear rhythm with a short pause between letters: S … A … R … A.",
      extra: "Longer names are harder and more useful. Practise with Bethlehem, Tewodros, Meseret, Abdulkadir.",
      tip: "The phrase “How do you spell it?” is worth more than the rest of the dialogue combined — learners will use it for the rest of their lives. Drill it separately.",
      activity: "Name chain: each learner introduces and spells their name, then spells the name of the learner before them. Memory plus spelling, and it makes the class learn each other's names.",
    }),
  });

  // ============================================================ 27 · CONVERSATION 2
  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "When you do not understand",
    sub: "These four phrases keep you in the conversation. Learn them by heart.",
    turns: [
      { who: "SHOPKEEPER", text: "Good morning. Is this your bag?", side: "l" },
      { who: "ABEL", text: "Sorry, I do not understand.", side: "r" },
      { who: "SHOPKEEPER", text: "Your bag. Is this your bag?", side: "l" },
      { who: "ABEL", text: "Please speak slowly.", side: "r" },
      { who: "SHOPKEEPER", text: "Is … this … your … bag?", side: "l" },
      { who: "ABEL", text: "Ah — yes. It is my bag. Thank you.", side: "r" },
    ],
    note: "Four phrases to memorise:  “Sorry, I do not understand.”  ·  “Please speak slowly.”  ·  “Can you repeat, please?”  ·  “How do you spell it?”",
    notes: tn({
      time: "10 minutes.",
      how: "Teach the four phrases before the dialogue, not after. Drill each one five times in chorus. Then read the dialogue so learners see the phrases doing real work.",
      mistakes: "Beginners go silent or switch to Amharic the moment they do not understand. That habit forms in the first weeks and is hard to break later — which is why this comes in Module 1.",
      extra: "Also useful now: “What does it mean?” and “How do you say … in English?”",
      tip: "Make it a class rule from today: nobody may say “I don't know” in Amharic. They must use one of the four English phrases instead. Enforce it kindly and consistently.",
      activity: "Deliberately speak too fast to the class and wait. The first learner to say “Please speak slowly” in English gets a point. Repeat three times.",
    }),
  });

  // ============================================================ 28 · CONVERSATION 3
  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "Useful phrases for this module",
    sub: "Six phrases you will use in every lesson from now on.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 20, descSize: 15,
    items: [
      { icon: "FaComments", title: "“What is your name?”", desc: "Ask this first when you meet someone new." },
      { icon: "FaPen", title: "“How do you spell it?”", desc: "The most useful question in this whole module." },
      { icon: "FaVolumeUp", title: "“Can you repeat, please?”", desc: "Politer than “What?” — use this one." },
      { icon: "FaHandPaper", title: "“Please speak slowly.”", desc: "Say this instead of going silent." },
      { icon: "FaQuestion", title: "“Sorry, I do not understand.”", desc: "Honest, polite, and it keeps you in English." },
      { icon: "FaStar", title: "“Nice to meet you.”", desc: "The reply is: “Nice to meet you too.”" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Drill all six in chorus, then in pairs, then individually. Insist on the whole phrase — not “repeat?” but “Can you repeat, please?”",
      mistakes: "“Nice to meet you” answered without “too”. Drill the pair together so the reply is automatic.",
      extra: "Add “Excuse me” as an opener if the class is strong.",
      tip: "Print these six phrases and stick them on the classroom wall. Point at the poster instead of translating for the rest of the level.",
      activity: "Phrase bingo: each learner takes three of the six phrases. During the lesson, when they use one naturally, they cross it off. First to cross off all three wins.",
    }),
  });

  // ============================================================ 29 · CONVERSATION 4
  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap with the right phrase. Answers are in the Answer Key.",
    turns: [
      { who: "HANA", text: "Hello. ______________________ ?", side: "l" },
      { who: "YOU", text: "My name is ______________.", side: "r" },
      { who: "HANA", text: "______________________ ?", side: "l" },
      { who: "YOU", text: "______ – ______ – ______ – ______.", side: "r" },
      { who: "HANA", text: "Thank you. Nice to meet you.", side: "l" },
      { who: "YOU", text: "______________________ .", side: "r" },
    ],
    note: "Use these:  “What is your name?”  ·  “How do you spell it?”  ·  “Nice to meet you too.”  ·  your own name, letter by letter.",
    notes: tn({
      time: "8 minutes.",
      how: "Give pairs three minutes to fill the gaps in writing, then have three pairs perform it aloud. Only then show the answer key slide.",
      answers: "1 What is your name?  ·  2 the learner's own name  ·  3 How do you spell it?  ·  4 the learner's name letter by letter  ·  5 Nice to meet you too.",
      mistakes: "Some learners will write “Nice to meet you” without “too” in the last gap. It is understandable but the reply needs “too”.",
      tip: "Ask learners to perform it standing up and shaking hands. The physical action fixes the language in memory better than reading it seated.",
      activity: "Once they have done it with their own names, they do it again pretending to be Sara, Dawit, Hana or Abel from the course.",
    }),
  });

  // ============================================================ 30 · CONVERSATION 5
  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — how to run it", sub: "Four rounds. Each round takes two minutes.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Read the script together", d: "Learner A is the first speaker, learner B is the second. Read it twice, then swap roles." },
      { t: "Close the book and try again", d: "Say as much as you remember. Gaps are fine. Do not look at the script." },
      { t: "Change the names", d: "Use your own name and your own town. Everything else stays the same." },
      { t: "Meet a new partner", d: "Stand up, find a different partner, and do it once more. New face, same language." },
    ],
    notes: tn({
      time: "8 minutes for all four rounds.",
      how: "Keep each round strictly to two minutes and announce the change loudly. The energy comes from the pace. Walk between pairs and listen — do not interrupt, just note what to correct at the end.",
      mistakes: "Do not let one confident learner speak for both. If you see it, stop and give the quiet learner the first turn in the next round.",
      tip: "Round 4 with a new partner is the one teachers skip when time is short. It is the most valuable — saying it to a new face is much closer to real life than repeating it to the same partner.",
      activity: "After round 4, ask three learners to tell the class one thing they learned about their partner. That turns the drill into real communication.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — say the alphabet", sub: "Three ways. Each one is harder than the last.",
    color: C.speak, size: 21, labels: ["A", "B", "C"],
    items: [
      { t: "In order, with the class", d: "A to Z in chorus, twice. Slowly the first time, faster the second time." },
      { t: "In order, alone", d: "Each learner says five letters, then the next learner continues. Go around the class." },
      { t: "Out of order", d: "The teacher points at any letter on the chart. The learner says its name. This is the real test." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Always finish with part C. A learner who can only recite in order has memorised a song; a learner who can name a letter out of order can read.",
      mistakes: "H said as “haitch”, W said as “double-v”, and G and J confused with each other. Drill G and J side by side: “jee” and “jay”.",
      extra: "Ask for the letters in a learner's name, out of order: 'Point at the first letter of your name. Now the last one.'",
      tip: "Keep an A-Z chart on the wall for the whole of Level 1 and use it for sixty seconds at the start of every single lesson.",
      activity: "Alphabet race: two learners at the board, teacher says a letter, first to touch it on the chart wins the point.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — spell it out loud", sub: "Work in pairs. Speaker spells, partner writes.",
    color: C.speak, size: 21, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Spell your first name", d: "Slowly, with a small pause between letters. Your partner writes it down." },
      { t: "Spell your town", d: "Bahir Dar · Gondar · Adama · Hawassa · Jimma — or your own." },
      { t: "Check the spelling together", d: "Is it correct? If not, spell it again more slowly." },
      { t: "Swap roles and repeat", d: "Now your partner spells and you write." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Model it once with a strong learner in front of the class before pairs begin, so everyone sees the pace expected.",
      mistakes: "Spelling too fast is the main problem, and the vowels E and I are commonly confused because their names sound similar. Drill “ee” and “eye” before starting.",
      extra: "Harder names for fast finishers: Bethlehem, Tewodros, Abdulkadir, Meseret, Wondwossen.",
      tip: "This activity produces a written record, so you can see instantly who heard correctly and who did not — collect two or three papers and check.",
      activity: "Spell a mystery word: teacher spells a word from the vocabulary list; the first learner to write it correctly and say it aloud wins.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — /p/ and /b/",
    sub: "These two sounds are made in almost the same place. The difference is air.",
    left: { h: "/p/ — with air", items: ["pen", "pig", "park", "cap", "pot"] },
    right: { h: "/b/ — no air", items: ["Ben", "big", "bark", "cab", "bot"] },
    note: "Hold a small piece of paper in front of your mouth. On /p/ the paper moves. On /b/ it does not move. Try it now.",
    notes: tn({
      time: "8 minutes.",
      how: "Give every learner a small strip of paper. Say “pen” — the paper moves. Say “Ben” — it does not. Then let learners test themselves. Self-testing is what makes this drill work.",
      mistakes: "This is the number one Ethiopian pronunciation issue. Amharic has both sounds but they pattern differently, so learners substitute one for the other, especially at the start of a word.",
      extra: "Sentence practice once the pair is secure: “Ben has a pen.” “Put the pen in the big bag.”",
      tip: "Test by ear as well as by mouth. Say one word from a pair and ask learners to point left or right. Learners must hear the difference before they can produce it.",
      activity: "Minimal pair bingo: learners draw a 2×3 grid and write any six words from the two columns. Teacher reads words at random; learners cross off what they hear.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Sound drill — /v/ and “th”",
    sub: "Two sounds that do not exist in Amharic. They need practice, not explanation.",
    left: { h: "/v/ — teeth on lip", items: ["van", "very", "seven", "TV", "video"] },
    right: { h: "/θ/ /ð/ — tongue between teeth", items: ["think", "three", "this", "that", "mother"] },
    note: "For /v/: top teeth touch bottom lip.   For “th”: the tip of your tongue comes out between your teeth. Look in a mirror.",
    notes: tn({
      time: "10 minutes. These sounds are new to the mouth, so allow more time than feels necessary.",
      how: "Model each sound in isolation for two full seconds with your mouth clearly visible before saying any word. Learners copy the shape first, then add the word.",
      mistakes: "/v/ becomes /b/ (“bery”), and “th” becomes t, d, s or z (“dis”, “sink” for “think”). Both are because the sound does not exist in the first language — say this out loud so nobody feels stupid.",
      extra: "Minimal pairs when ready: van–ban, vote–boat, think–sink, three–tree, this–dis.",
      tip: "Tell learners plainly: “Your mouth has never made this shape before. It will feel strange for two weeks, then it will be normal.” Naming the timeline stops people giving up.",
      activity: "Mirror practice: learners use a phone camera to watch their own mouth. Watching themselves fixes this faster than any correction from you.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "30 seconds. Everyone does this. It is the main speaking task of the module.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say hello", d: "“Hello.” or “Good morning.”" },
      { t: "Say your name", d: "“My name is ______.”" },
      { t: "Spell your name", d: "Letter by letter, slowly." },
      { t: "Say your town", d: "“I am from ______.”" },
      { t: "Name three objects", d: "Hold them up: “This is my pen. This is my book. This is my bag.”" },
    ],
    notes: tn({
      time: "12 minutes including listening back.",
      how: "Learners record on a phone. If there are no phones, they perform live to a partner who ticks off the five steps. Everyone records, including the shy learners — that is the point of it being only 30 seconds.",
      mistakes: "Learners rush and skip the spelling step. Tell them to take a breath before spelling.",
      tip: "Have them listen back once. Self-listening does more for pronunciation than any correction you can give, and it is free.",
      activity: "Keep every recording. Play it back at the end of Level 1 next to their new one — hearing their own progress is the strongest motivation in the whole course.",
      answers: "SUCCESS CRITERIA: all five steps present · a listener who does not know them can write their name correctly from the spelling · the three objects are named in full sentences.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — letters and sounds", sub: "Listen twice. Write the letter you hear.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 20, lsm: 1.5,
      text: "1.  “bee”\n2.  “ee”\n3.  “jee”\n4.  “eye”\n5.  “double-u”\n6.  “aitch”\n7.  the sound /v/\n8.  the sound /p/" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write the LETTER you hear for numbers 1 to 6.",
      "For numbers 7 and 8, write a WORD that starts with that sound.",
      "The teacher reads each item twice, slowly.",
      "Do not look at your neighbour's paper — this is a check for you, not a test.",
    ] },
    notes: tn({
      time: "8 minutes.",
      how: "Read each item twice with a five-second pause between them. Read at a natural but unhurried pace. Do not spell anything out or give hints.",
      mistakes: "Items 2 and 4 (E and I) are the classic confusion because “ee” and “eye” are both vowel names. Item 6 (aitch) is often written as A. Expect these.",
      tip: "Read the whole list once through before learners write anything, so they know what is coming. Then read again for answers.",
      activity: "Extension: read six more letters and have learners write them, then swap papers and mark each other's.",
      answers: "1 B · 2 E · 3 G · 4 I · 5 W · 6 H · 7 any word starting with /v/ (van, very, video) · 8 any word starting with /p/ (pen, pig, park).",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — answers and why", sub: "Check your answers. Read the reason for each one.",
    size: 17, cols: 2,
    items: [
      { q: "1 — “bee”", a: "B", why: "“Bee” is the NAME of the letter B — not the insect." },
      { q: "2 — “ee”", a: "E", why: "The name of E is “ee”. Learners often write I — but I is called “eye”." },
      { q: "3 — “jee”", a: "G", why: "G is “jee” and J is “jay” — the most confused pair in the alphabet." },
      { q: "4 — “eye”", a: "I", why: "I is called “eye”. It is also a word — and always a capital letter." },
      { q: "5 — “double-u”", a: "W", why: "W is “double-u”, not “double-v”, though it looks like two v shapes." },
      { q: "6 — “aitch”", a: "H", why: "H is “aitch”. There is no /h/ at the start of its name, so learners write A." },
      { q: "7 — the sound /v/", a: "van · very · video · TV", why: "Any /v/ word is correct. Check it is not a /b/ word such as “ban”." },
      { q: "8 — the sound /p/", a: "pen · pig · park · paper", why: "Any /p/ word is correct. Check it is not a /b/ word like “book”." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Read each answer, then the reason. Ask learners to raise a hand if they got it wrong — not to embarrass anyone, but so you can see which letters need re-drilling. Then re-drill exactly those.",
      tip: "If more than half the class missed items 2 and 4, spend five minutes on E and I before moving on. It will save time later.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — spelling names", sub: "Listen and write the name. Each name is spelled twice.",
    panelW: 7.4,
    panel: { label: "Audio script — teacher reads aloud", color: C.listen, tint: C.listenTint, size: 19, lsm: 1.45,
      text: "1.  “My name is S – A – R – A.”\n2.  “My name is D – A – W – I – T.”\n3.  “My name is H – A – N – A.”\n4.  “I am from G – O – N – D – A – R.”\n5.  “I am from A – D – A – M – A.”" },
    side: { label: "Your task", color: C.listen, size: 17, items: [
      "Write each name or place on your paper.",
      "Use a capital letter at the start — they are all names and places.",
      "The teacher spells each one twice.",
      "Then read your answers aloud to your partner.",
    ] },
    notes: tn({
      time: "8 minutes.",
      how: "Spell each item slowly with a clear pause between letters, then repeat at the same speed. Do not say the whole word first — that removes the task.",
      mistakes: "Learners write the names in small letters. Remind them of Grammar Rule 2 before you start, then check for it when marking.",
      extra: "Add two harder ones if the class is strong: B – E – T – H – L – E – H – E – M and T – E – W – O – D – R – O – S.",
      tip: "This exercise tests three things at once — letter recognition, listening and the capital letter rule. Mark all three.",
      answers: "1 Sara · 2 Dawit · 3 Hana · 4 Gondar · 5 Adama. All five must have a capital first letter.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "All five need a capital letter. Check yours.",
    size: 17,
    items: [
      { q: "1 — S–A–R–A", a: "Sara", why: "A person's name, so it takes a capital S. Four letters, one capital." },
      { q: "2 — D–A–W–I–T", a: "Dawit", why: "A person's name. Note the I in the middle stays small — only the first letter is capital." },
      { q: "3 — H–A–N–A", a: "Hana", why: "A person's name. If you wrote “hana”, the spelling is right but the capital rule was missed." },
      { q: "4 — G–O–N–D–A–R", a: "Gondar", why: "A place, so it takes a capital G. Places follow the same rule as people's names." },
      { q: "5 — A–D–A–M–A", a: "Adama", why: "A place. Three A's in one short word — a good test of careful listening." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Have learners swap papers and mark each other's. They must check two things: the letters and the capital. Peer marking makes the capital rule stick because they are looking for it in someone else's work.",
      tip: "Count how many learners wrote all five capitals correctly and say the number aloud. It makes the rule feel measurable.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to listen better", sub: "Four habits that work from your very first week.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaHeadphones", title: "Listen before you look", desc: "Close your book the first time. Looking at the words while you listen means you are reading, not listening." },
      { icon: "FaVolumeUp", title: "Listen twice, always", desc: "The first time is for the general idea. The second time is for the detail. Nobody catches everything on the first pass." },
      { icon: "FaHandPaper", title: "Do not stop at one hard word", desc: "If you miss a word, keep listening. Stopping to think about one word means missing the next five." },
      { icon: "FaMicrophone", title: "Say it after you hear it", desc: "Repeating aloud what you just heard trains your ear and your mouth at the same time. Ten minutes a day changes everything." },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Read each habit and ask: 'Which one do you not do?' Learners usually admit to the second and third. Ask them to choose one habit to use this week.",
      mistakes: "The commonest listening problem for beginners is not ability — it is stopping at the first unknown word and losing everything after it.",
      tip: "Model habit 3 by playing a recording with one word deliberately mumbled, then asking what the message was. Learners realise they understood it anyway.",
      activity: "Shadowing: play any short recording and have learners speak along at exactly the same time, twice. It feels strange for thirty seconds and then it works.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — your first English text", sub: "Every word here uses only the letters and sounds you have learned.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 26, lsm: 1.6,
      text: "This is Sara.\nSara is a student.\nThis is her bag.\nHer pen is in the bag.\nHer book is in the bag too." },
    side: { label: "How to read it", color: C.read, size: 17, items: [
      "The teacher reads the whole text once.",
      "The class reads it together, in chorus.",
      "Then five learners each read one line alone.",
      "Then close the book and answer the questions on the next slide.",
    ] },
    notes: tn({
      time: "8 minutes.",
      how: "The chorus step matters more than it looks. Reading together removes the fear of being wrong in front of the class, so that when individuals read afterwards they are already confident.",
      mistakes: "Watch for learners reading letter names instead of sounds — “bee-ay-jee” for “bag”. That learner has not yet made the name/sound distinction and needs Concept 2 again.",
      extra: "New word here: “her”. Teach it quickly — “her bag” means the bag belongs to Sara.",
      tip: "Point at each word as the class reads. Beginners lose their place constantly, and following your finger keeps everyone together.",
      activity: "Read it three ways: normally, then whispering, then quickly. Changing how they read keeps repetition from feeling like repetition.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Close your book. Answer in a full sentence.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a FULL SENTENCE. Not “student” — say “Sara is a student.”",
    items: [
      "Who is in the text?",
      "What is Sara?",
      "Where is her pen?",
      "What else is in the bag?",
      "Is the bag Sara's or Dawit's?",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Insist on full sentences from the very first lesson. One-word answers are the habit you are trying to prevent, and it is far easier to prevent than to cure.",
      mistakes: "Learners answer “student” instead of “Sara is a student.” Do not accept it. Say “Full sentence, please” and wait.",
      tip: "Books must be closed. If the text is visible, learners copy the answer from the page and no reading comprehension takes place at all.",
      answers: "1 Sara is in the text. · 2 Sara is a student. · 3 Her pen is in the bag. · 4 Her book is in the bag. · 5 It is Sara's bag.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "Full sentences. Capital letters. Full stops.",
    size: 18,
    items: [
      { q: "1 — Who is in the text?", a: "Sara is in the text.", why: "A full sentence repeats part of the question. “Sara” alone is not yet an English answer." },
      { q: "2 — What is Sara?", a: "Sara is a student.", why: "Note the small word “a”. English needs it before a job: “a student”, not “student”." },
      { q: "3 — Where is her pen?", a: "Her pen is in the bag.", why: "The word “in” tells you the position. The text says “Her pen is in the bag”, so you can reuse those exact words." },
      { q: "4 — What else is in the bag?", a: "Her book is in the bag.", why: "“Too” at the end of the text tells you a second thing is in the bag — it means “also”." },
      { q: "5 — Is the bag Sara's or Dawit's?", a: "It is Sara's bag.", why: "The text says “her bag”, and the only person in the text is Sara. Dawit is not mentioned at all." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Read the answer, then the reason. Question 5 is the important one — it is an inference question, meaning the answer is not written directly in the text. Point that out.",
      tip: "Praise learners who answered in full sentences specifically for that, not for being right. It signals what you are measuring.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a longer text", sub: "Six sentences. Read it aloud twice before you answer.",
    panelW: 7.4,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 23, lsm: 1.5,
      text: "My name is Abel.\nI am from Addis Ababa.\nI am not a student.\nI work in Merkato.\nThis is my van.\nMy van is big and blue." },
    side: { label: "New words here", color: C.read, size: 17, items: [
      "work — what you do for money",
      "big — not small",
      "blue — a colour",
      "not — makes a sentence negative",
      "Count the capital letters. There are five. Can you say why each one is capital?",
    ] },
    notes: tn({
      time: "8 minutes.",
      how: "Same routine as Reading 1: teacher reads, class reads in chorus, individuals read one line each. Then deal with the four new words using gesture and objects, not translation.",
      mistakes: "“I am not a student” — the word order of the negative is new. Do not explain it grammatically at this level. Say it, have them repeat it, and move on. The rule comes in Level 2.",
      extra: "The five capitals: My (sentence start), Abel (name), I (always), Addis Ababa (place), Merkato (place) — plus the sentence-start capitals on every line.",
      tip: "This text is deliberately about an adult with a job, not a child at school. Adult beginners need to see adults like themselves in the material.",
      activity: "Learners rewrite the text about themselves, changing the name, the town, the job and the object. Six sentences, entirely their own.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — questions, answers and vocabulary review", sub: "Answer first, then check.",
    size: 17,
    items: [
      { q: "1 — What is his name?", a: "His name is Abel.", why: "The text opens with “My name is Abel.” In your answer “my” becomes “his”, because you are talking about him." },
      { q: "2 — Where is he from?", a: "He is from Addis Ababa.", why: "Both words of the place name take a capital: Addis Ababa." },
      { q: "3 — Is Abel a student?", a: "No, he is not a student. He works in Merkato.", why: "The text says “I am not a student”. A good answer says no AND gives the real information." },
      { q: "4 — What colour is the van?", a: "The van is blue.", why: "“Blue” is the colour word in the last line. Note the /v/ sound at the start of “van” — teeth on lip." },
      { q: "5 — Vocabulary check: name the five words from this module.", a: "pen · book · bag · van · school", why: "All five appeared in this module. Four of them are in these two reading texts — find them again." },
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Question 3 is the one to spend time on: a yes/no answer alone is weak. Teach learners to add the reason. This habit pays off for the rest of the course.",
      tip: "End by having the class say all five vocabulary words in chorus, then having five individuals each use one in a sentence.",
    }),
  });

  // ============================================================ 46–50 · WRITING
  L.grid({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — forming the letters", sub: "Write each letter five times. Capital first, then small.",
    cols: 4, color: C.write, tint: C.writeTint, line: "DCCDF0", titleSize: 22, descSize: 15,
    items: [
      { icon: "FaPencilAlt", title: "Start at the top", desc: "Almost every English letter starts at the top and moves down. B, D, P, R all begin the same way." },
      { icon: "FaArrowRight", title: "Left to right", desc: "English is written from left to right, like Amharic. The line of writing runs the same way." },
      { icon: "FaEye", title: "Watch the height", desc: "b, d, h, k, l are tall. a, c, e, o, s are short. g, p, q, y go below the line." },
      { icon: "FaCheck", title: "Space between words", desc: "Leave the width of one finger between words. “mybook” is wrong. “my book” is right." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Write each letter large on the board, saying the direction aloud as you write: 'Start at the top, come down, around.' Learners copy in the air with a finger before they write on paper.",
      mistakes: "b and d reversed is extremely common and is not a sign of any problem — it is normal at this stage. Teach the trick: b has its circle on the right, like the letter in “bag”.",
      extra: "The letters that go below the line — g, j, p, q, y — are often written sitting on the line instead. Point at the descenders explicitly.",
      tip: "Adult learners can find copying letters embarrassing. Say once, clearly: 'Everyone starts here, including people who speak four languages already.' Then move on briskly.",
      activity: "Air writing: the whole class writes the letter in the air with a finger while saying its name and its sound. It feels silly for ten seconds and then it helps.",
    }),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — write about yourself", sub: "Copy the frame. Fill in your own information.",
    panelW: 7.6,
    panel: { label: "Copy this frame and complete it", color: C.write, tint: C.writeTint, size: 24, lsm: 1.7,
      text: "My name is ______________.\nI am from ______________.\nThis is my ______________." },
    side: { label: "Before you write, check", color: C.write, size: 16, items: [
      "Does every sentence start with a capital letter?",
      "Does your name have a capital letter?",
      "Does your town have a capital letter?",
      "Does every sentence end with a full stop?",
      "Is there a space between every word?",
    ] },
    notes: tn({
      time: "10 minutes.",
      how: "Write your own example on the board first, complete and correct, and leave it there. Beginners need a model in front of them — removing it does not make them more independent, it makes them stop.",
      mistakes: "The three most common: no capital on the name, no capital on the town, no full stop. The checklist on the right exists for exactly these.",
      extra: "Fast finishers add two more lines: “I am a student.” or “My bag is blue.”",
      tip: "Collect these three sentences and keep them. At the end of Level 1, give them back — the visible difference in handwriting and accuracy is powerful for learners.",
      activity: "Learners swap papers and use the five-point checklist to mark their partner's work. Checking someone else's capitals fixes their own.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — write full sentences", sub: "Use the words from this module. Follow the three rules.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write ONE sentence for each. Capital at the start · capitals on names and places · full stop at the end.",
    items: [
      "Write a sentence about your pen.",
      "Write a sentence about your book.",
      "Write a sentence about your bag.",
      "Write a sentence with your own name in it.",
      "Write a QUESTION asking someone their name.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Do the first one together on the board so the standard is clear, then let them work alone. Circulate and check capitals and full stops as they write, not after.",
      mistakes: "Item 5 is the one they get wrong — many will write it as a statement with a full stop. Remind them: a question ends with a question mark.",
      tip: "Do not correct spelling of words outside the module. Correct only the three rules and the five module words. Correcting everything discourages beginners into silence.",
      answers: "MODEL ANSWERS: 1 This is my pen. · 2 My book is in my bag. · 3 My bag is blue. · 4 My name is Sara. · 5 What is your name?",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answers and why", sub: "Your sentences will be different. Check the rules, not the words.",
    size: 18,
    items: [
      { q: "1 — a sentence about your pen", a: "This is my pen.", why: "Capital T at the start, full stop at the end. “My” shows it belongs to you." },
      { q: "2 — a sentence about your book", a: "My book is in my bag.", why: "Two module words in one sentence. “In” tells you where the book is." },
      { q: "3 — a sentence about your bag", a: "My bag is blue.", why: "Any colour is correct. The important part is the capital M and the full stop." },
      { q: "4 — a sentence with your name", a: "My name is Sara.", why: "TWO capitals: M because it starts the sentence, and S because Sara is a person's name." },
      { q: "5 — a question", a: "What is your name?", why: "A question ends with a question mark, never a full stop. When you say it, your voice goes up at the end." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Make clear that these are models, not the only right answers. Ask three learners to read their own sentence for item 3 — the variety shows the class that many answers are correct.",
      tip: "Mark against the three rules only. A learner whose sentence is “My bag is red.” has succeeded completely.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your writing checklist", sub: "Use this on every piece of writing for the rest of Level 1.",
    check: true, color: C.write, size: 21,
    items: [
      { t: "Capital letter at the start of every sentence", d: "Look at the first letter of each line. Is it big?" },
      { t: "Capital letters on names and places", d: "Sara, Dawit, Gondar, Ethiopia, English — all capital." },
      { t: "A full stop or a question mark at the end", d: "Telling? Use a full stop. Asking? Use a question mark." },
      { t: "A space between every word", d: "“my book” — not “mybook”." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Read the four points. Then have learners take out their writing from the previous slide and check it against all four. Self-checking is a skill and it needs to be taught, not assumed.",
      tip: "Print this checklist as a small card for every learner to keep inside their exercise book. Refer to it by name — 'Check your four points' — from now on.",
      activity: "Deliberate error hunt: write a four-sentence text on the board containing exactly four errors, one of each type. Learners find all four.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer. Write the letter.",
    color: C.green, instruction: "Write a, b or c for each question.",
    size: 18,
    items: [
      { q: "1. How many letters are in the English alphabet?", opts: "a) 21     b) 26     c) 33" },
      { q: "2. Which of these is a vowel?", opts: "a) B     b) K     c) E" },
      { q: "3. What is the NAME of the letter G?", opts: "a) “jee”     b) “gee” as in goat     c) /g/" },
      { q: "4. Which word starts with the sound /v/?", opts: "a) ban     b) van     c) pan" },
      { q: "5. Which sentence is correct?", opts: "a) my name is sara.     b) My name is Sara.     c) My Name Is Sara." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Let learners answer alone first, then compare with a partner before you take answers from the class. Comparing in pairs raises the number of correct answers and lowers the fear of being wrong.",
      answers: "1 b (26) · 2 c (E) · 3 a (“jee”) · 4 b (van) · 5 b (My name is Sara.)",
      tip: "Question 3 is the diagnostic one. A learner who chooses c has confused the name with the sound and needs Concept 2 again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — fill in the blank", sub: "Write the missing letter or word.",
    color: C.green, instruction: "Copy each item and fill the gap.",
    size: 18,
    items: [
      "1.  A, B, C, ___, E, F",
      "2.  The five vowels are A, ___, I, O, U.",
      "3.  My name ___ Sara.",
      "4.  This is my p___ . I write with it.",
      "5.  I go to s_____ every day.",
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Items 1 and 2 are alphabet knowledge. Items 3 to 5 need the module vocabulary. Do item 1 together, then leave them to it.",
      answers: "1 D · 2 E · 3 is · 4 pen · 5 school",
      mistakes: "Item 3 tests “is”, which learners frequently leave out entirely — this is the missing verb “to be” and it will be a major focus in Module 3.",
      tip: "For item 5, remind learners about the consonant cluster: s-chool, with no vowel inserted at the start.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Match the letter to its name, and the word to its meaning.",
    color: C.green, instruction: "Draw a line, or write the pairs: 1–c, 2–a, and so on.",
    size: 17,
    items: [
      { q: "Part 1 — match the LETTER to its NAME", opts: "1. H     2. W     3. G     4. J          a) “jay”     b) “aitch”     c) “double-u”     d) “jee”" },
      { q: "Part 2 — match the WORD to its MEANING", opts: "1. pen     2. bag     3. school     4. van" },
      { q: "a) the place where you learn        b) a big car for goods", opts: "c) you write with it        d) you carry things in it" },
      { q: "Part 3 — match the SOUND to a WORD", opts: "1. /p/     2. /b/     3. /v/     4. /s/          a) van     b) school     c) pen     d) book" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short matching tasks are better than one long one — learners get three chances to succeed. Let them work in pairs.",
      answers: "Part 1: 1–b, 2–c, 3–d, 4–a.  ·  Part 2: 1–c, 2–d, 3–a, 4–b.  ·  Part 3: 1–c (pen), 2–d (book), 3–a (van), 4–b (school).",
      tip: "Part 3 is the hardest because it needs the sound, not the letter. If learners struggle, say each sound aloud before they start.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — put them in order", sub: "Alphabetical order. Say the alphabet quietly to help you.",
    color: C.green, instruction: "Write the letters in alphabetical order.",
    size: 19,
    items: [
      "1.  C, A, D, B",
      "2.  M, K, P, L",
      "3.  Z, T, W, V",
      "4.  Put these names in alphabetical order:  Dawit, Abel, Sara, Hana",
      "5.  Put these places in alphabetical order:  Gondar, Adama, Merkato, Bahir Dar",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Items 4 and 5 are the useful ones — alphabetical order of words is a real-life skill used in registers, phone contacts and dictionaries. Point that out.",
      answers: "1 A, B, C, D · 2 K, L, M, P · 3 T, V, W, Z · 4 Abel, Dawit, Hana, Sara · 5 Adama, Bahir Dar, Gondar, Merkato",
      tip: "Teach the strategy explicitly: look at the first letter of each word only. Learners who try to compare whole words get lost.",
      activity: "Human alphabet: five learners hold letter cards and physically arrange themselves in order at the front of the class.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — find and correct the mistake", sub: "Each sentence has one or more errors. Rewrite it correctly.",
    color: C.green, instruction: "Rewrite each sentence with the errors fixed.",
    size: 18,
    items: [
      "1.  my name is dawit",
      "2.  i am from gondar.",
      "3.  This is my Bag.",
      "4.  what is your name.",
      "5.  i speak amharic and english",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Tell learners how many errors are in each sentence before they start — otherwise they find the first one and stop. Sentence 1 has three, sentence 5 has four.",
      answers: "1 My name is Dawit. (capital M, capital D, full stop) · 2 I am from Gondar. (capital I) · 3 This is my bag. (“bag” is an ordinary thing, small letter) · 4 What is your name? (capital W, question mark not full stop) · 5 I speak Amharic and English. (capital I, capital A, capital E, full stop)",
      mistakes: "Sentence 3 is the reverse error — a capital where none is needed. Learners who have just learned the rule tend to over-apply it.",
      tip: "Have learners count the errors before correcting. Counting forces careful reading.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, say what is correct.",
    color: C.green, instruction: "Write T or F. For every F, write the correct version.",
    size: 18,
    items: [
      "1.  The English alphabet has 26 letters.",
      "2.  A, E, I, O, U are consonants.",
      "3.  The name of the letter H is “aitch”.",
      "4.  You use letter SOUNDS when you spell your name aloud.",
      "5.  A person's name always starts with a capital letter.",
      "6.  “Van” and “ban” start with the same sound.",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "The instruction to correct every false statement is what makes this exercise teach rather than just test. Do not let learners write only T or F.",
      answers: "1 T · 2 F — they are vowels · 3 T · 4 F — you use letter NAMES when you spell · 5 T · 6 F — “van” starts with /v/ and “ban” starts with /b/",
      tip: "Item 4 is the key concept of the whole module. If learners get it wrong, return to Concept 2 before the quiz.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "Answer in a full sentence.",
    color: C.green, instruction: "Write a complete sentence for each question.",
    size: 18,
    items: [
      "1.  What is your name?",
      "2.  How do you spell your name?",
      "3.  Where are you from?",
      "4.  What is in your bag?",
      "5.  Which letter comes after M?",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Every answer will be different except item 5 — that is intentional. Personal answers are remembered; invented ones are not.",
      answers: "1 My name is ___. · 2 spelled letter by letter, with capitals correct · 3 I am from ___. · 4 My pen is in my bag. / My book is in my bag. · 5 N comes after M.",
      mistakes: "Item 2 is often answered by writing the name again rather than spelling it out. Show one example on the board.",
      tip: "Ask three learners to read their answers aloud. Hearing real classmates' answers is more useful than any model sentence.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. Each task takes one minute.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak, do not write. Your partner listens and checks.",
    size: 19,
    items: [
      "1.  Say the alphabet from A to Z without stopping.",
      "2.  Spell your full name, then your town.",
      "3.  Say these five words clearly:  pen · book · bag · van · school",
      "4.  Say this sentence three times, faster each time:  “My book is in my bag.”",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Give each pair a checklist role: while A speaks, B listens for one specific thing — the /v/ in van, or the start of school. Listening with a purpose is far more useful than listening in general.",
      answers: "SUCCESS CRITERIA: 1 completed in under 30 seconds · 2 partner can write the name correctly from the spelling · 3 /v/ and /p/ clearly different from /b/ · 4 no vowel inserted before “school”.",
      tip: "Task 4 builds fluency, not accuracy. Speed with the same sentence is how learners stop translating in their head.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "These questions use everything from this module.",
    color: C.green, instruction: "Take your time. Look back at the earlier slides if you need to.",
    size: 17,
    items: [
      { q: "1. Write a sentence with exactly THREE capital letters in it.", opts: "Think: sentence start + a name + a place, or the word “I”." },
      { q: "2. Blend these sounds and write the word:  /s/ + /k/ + /uː/ + /l/", opts: "Say it aloud before you write it." },
      { q: "3. Which two of these words have the SAME vowel sound?", opts: "bag · book · van · school" },
      { q: "4. Correct this and explain each change:  “i am abel i am from merkato”", opts: "There are five things to fix." },
      { q: "5. Your partner says a name too fast. Write TWO English sentences you could say.", opts: "Use the phrases from the Conversation section." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "This is the bridge to the quiz. Let learners work in pairs, and expect it to be genuinely hard — that is the point. Take answers as a class and discuss the reasoning, not just the answer.",
      answers: "1 e.g. “My name is Sara.” has two; “I am from Gondar.” has three (I, Gondar, and the sentence-start capital on I which is the same letter) — accept any sentence with three capitals, e.g. “Sara is from Ethiopia.” plus the start capital. 2 school. 3 bag and van (both /æ/). 4 “I am Abel. I am from Merkato.” — capital I twice, capital A on Abel, capital M on Merkato, and a full stop splitting the two sentences. 5 e.g. “Please speak slowly.” and “Can you repeat, please?” or “How do you spell it?”",
      tip: "Question 3 is the hardest. Say the four words aloud slowly and let learners hear that bag and van share the /æ/ sound.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These questions test understanding, not memory.",
    size: 17,
    items: [
      { q: "1. Why is it a problem to learn only the alphabet song?", opts: "Think about what the song does and does not teach you." },
      { q: "2. Your friend reads “bag” as “bee-ay-jee”. What is the mistake, and how would you help?", opts: "Which two things has your friend confused?" },
      { q: "3. Why does English need capital letters if Amharic does not?", opts: "There is no logical reason — what does that tell you about learning rules?" },
      { q: "4. A shopkeeper says something you do not understand. Name three things you could do.", opts: "Only one of them is “give up and speak Amharic”." },
    ],
    notes: tn({
      time: "12 minutes. This is discussion, not writing.",
      how: "Take answers orally. Accept Amharic for the reasoning at this level if the learner cannot yet express it in English — the thinking matters more than the language here. Then give them the English phrase for what they said.",
      answers: "1 The song teaches letter NAMES in a fixed order only; it does not teach sounds, and it does not help you recognise a letter out of order — so it does not help you read. 2 The friend is using letter names instead of letter sounds; help by saying the three sounds /b/ /æ/ /g/ and blending them. 3 There is no logical reason — some rules are simply conventions, and the fastest route is to accept and practise rather than look for logic. 4 Say “Please speak slowly”, say “Can you repeat, please?”, ask “How do you spell it?”, point at the object, or ask them to write it down.",
      tip: "Question 3 is worth real discussion. Adult learners often waste energy looking for logic in English spelling and punctuation. Telling them plainly that some things are just conventions saves months of frustration.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  const QUIZ = [
    { part: "Part 1 · Letters and sounds", items: [
      { q: "1. How many vowels are in the English alphabet?", opts: "a) 3     b) 5     c) 7" },
      { q: "2. What is the NAME of the letter W?", opts: "a) “double-v”     b) “double-u”     c) /w/" },
      { q: "3. What is the SOUND of the letter C in the word “cat”?", opts: "a) /s/     b) /k/     c) “see”" },
      { q: "4. Which letter comes between P and R?", opts: "a) O     b) Q     c) S" },
    ] },
    { part: "Part 2 · Vocabulary", items: [
      { q: "5. Which word means “the place where you learn”?", opts: "a) bag     b) school     c) van" },
      { q: "6. Complete: “My book is in my ______.”", opts: "a) bag     b) pen     c) school" },
      { q: "7. Which word starts with the /v/ sound?", opts: "a) bag     b) book     c) van" },
      { q: "8. Which word has the same vowel sound as “bag”?", opts: "a) book     b) van     c) school" },
    ] },
    { part: "Part 3 · Capital letters and punctuation", items: [
      { q: "9. Which sentence is correct?", opts: "a) i am from adama.     b) I am from Adama.     c) I Am From Adama." },
      { q: "10. Which word needs a capital letter?", opts: "a) pen     b) ethiopia     c) book" },
      { q: "11. Which mark ends a question?", opts: "a) .     b) ?     c) no mark" },
      { q: "12. Correct this: “what is your name.”", opts: "Write the whole sentence correctly." },
    ] },
    { part: "Part 4 · Listening and reading", items: [
      { q: "13. Your teacher says “aitch”. Which letter is it?", opts: "a) A     b) H     c) I" },
      { q: "14. Your teacher spells H–A–N–A. Write it correctly.", opts: "Remember the capital letter rule." },
      { q: "15. Read: “This is Sara. Her pen is in her bag.” Where is the pen?", opts: "Answer in a full sentence." },
      { q: "16. Read: “I am Abel. I am not a student.” Is Abel a student?", opts: "Answer in a full sentence." },
    ] },
    { part: "Part 5 · Writing and speaking", items: [
      { q: "17. Write one sentence about your bag.", opts: "Capital at the start, full stop at the end." },
      { q: "18. Write a question asking someone how to spell their name.", opts: "Do not forget the question mark." },
      { q: "19. Put in alphabetical order:  Sara, Abel, Hana", opts: "Look at the first letter only." },
      { q: "20. SPEAKING: say your name, spell it, and say your town.", opts: "Your teacher or partner listens and checks." },
    ] },
  ];
  QUIZ.forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 1 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Do not look back at the earlier slides." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: tn({
        time: "4 minutes per quiz slide, 20 minutes for the whole quiz.",
        how: "Run the whole quiz before showing any answers. Learners write answers on paper and number them 1 to 20. Question 20 is spoken and is assessed by you or by a partner.",
        tip: "Pass mark is 16 out of 20 (80%). A learner below that should redo Exercises A to F, not repeat the whole module.",
        mistakes: "Do not let learners mark their own paper before the answer key. Collect the papers or have them swap.",
      }),
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  const KEY = [
    [ { q: "Q1 — How many vowels?", a: "b) 5", why: "A, E, I, O, U. The other 21 letters are consonants. Y is a consonant at this level." },
      { q: "Q2 — Name of W?", a: "b) “double-u”", why: "Even though W looks like two V shapes, its name is “double-u”. Option c) /w/ is its SOUND, not its name." },
      { q: "Q3 — Sound of C in “cat”?", a: "b) /k/", why: "The NAME of C is “see”, but its usual SOUND is /k/. This is the name-versus-sound distinction from Concept 2." },
      { q: "Q4 — Between P and R?", a: "b) Q", why: "The order is P, Q, R. Saying the letters around it aloud is faster than starting from A." } ],
    [ { q: "Q5 — “the place where you learn”", a: "b) school", why: "Remember the pronunciation: s-kool, with no extra vowel at the start." },
      { q: "Q6 — “My book is in my ______.”", a: "a) bag", why: "A book goes in a bag. A pen is a thing you write with, and a school is a place — neither fits." },
      { q: "Q7 — starts with /v/?", a: "c) van", why: "For /v/ your top teeth touch your bottom lip. “Bag” and “book” both start with /b/, made with two lips together." },
      { q: "Q8 — same vowel sound as “bag”?", a: "b) van", why: "Both have the short /æ/ sound. “Book” has /ʊ/ and “school” has the long /uː/." } ],
    [ { q: "Q9 — which sentence is correct?", a: "b) I am from Adama.", why: "Capital I (always), capital A on the place name, full stop at the end. Option c) wrongly capitalises every word." },
      { q: "Q10 — which word needs a capital?", a: "b) ethiopia → Ethiopia", why: "It is the name of a country. “Pen” and “book” are ordinary things and stay small." },
      { q: "Q11 — which mark ends a question?", a: "b) ?", why: "A question mark. Your voice also goes up at the end when you say it aloud." },
      { q: "Q12 — correct “what is your name.”", a: "What is your name?", why: "Two changes: a capital W to start the sentence, and a question mark instead of a full stop, because it is a question." } ],
    [ { q: "Q13 — “aitch” is which letter?", a: "b) H", why: "There is no /h/ sound at the start of the name “aitch”, which is why learners often write A instead." },
      { q: "Q14 — H–A–N–A", a: "Hana", why: "A person's name, so a capital H. The remaining letters stay small — only the first letter is capital." },
      { q: "Q15 — Where is the pen?", a: "Her pen is in her bag.", why: "A full sentence is required. The text gives you the exact words to use — reuse them." },
      { q: "Q16 — Is Abel a student?", a: "No, he is not a student.", why: "The text says “I am not a student”. A strong answer gives the negative clearly rather than just “no”." } ],
    [ { q: "Q17 — a sentence about your bag", a: "e.g. “My bag is blue.” or “My book is in my bag.”", why: "Any sentence is correct if it starts with a capital, ends with a full stop, and makes sense." },
      { q: "Q18 — a question about spelling", a: "How do you spell it?  (or: How do you spell your name?)", why: "It must end with a question mark. This is the most useful question in the whole module." },
      { q: "Q19 — alphabetical order", a: "Abel, Hana, Sara", why: "Compare only the first letters: A, H, S. That is their order in the alphabet." },
      { q: "Q20 — speaking task", a: "Name said clearly · spelled letter by letter · town named", why: "Marked on being understood, not on being perfect. A listener who has never met you should be able to write your name correctly." } ],
  ];
  KEY.forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: tn({
        time: "4 minutes per slide.",
        how: "Read the answer, then read the WHY aloud. Ask learners to raise a hand for each one they got wrong — you are collecting data on what to re-teach, not judging anyone. Say so.",
        tip: "Note which questions the class failed most. Q3, Q8 and Q12 are the diagnostic ones: Q3 means the name/sound idea has not landed, Q8 means the vowel sounds need work, Q12 means punctuation needs another lesson.",
        mistakes: "Do not simply read the answers out and move on. The explanation is where the learning happens — a learner who hears only “b” learns nothing.",
      }),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day is better than one hour on Sunday.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Say the alphabet out loud, twice", d: "Once slowly, once fast. Out loud — not in your head." },
      { t: "Write the alphabet from memory", d: "Capital letters on one line, small letters underneath." },
      { t: "Practise the five words", d: "pen · book · bag · van · school — say each one five times." },
      { t: "Practise the hard sounds", d: "/p/ and /b/, then /v/. Use the paper test for /p/." },
      { t: "Spell three names aloud", d: "Your own name, a family member's name, and your town." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Give the homework on the board as well as on the slide, and say the date it is due. Beginners forget verbal instructions.",
      tip: "Ten minutes daily beats an hour once. Say this explicitly — many adult learners believe that studying means long sessions, and then do nothing because they cannot find an hour.",
      activity: "Ask learners to text or message one classmate each evening with one English word. It creates accountability and costs nothing.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Write the whole alphabet", d: "Capital letters A–Z on one line. Small letters a–z underneath. Check the tall letters and the letters that go below the line." },
      { t: "Write five sentences about yourself", d: "Use: My name is… · I am from… · This is my… · I am a… · and one QUESTION. Check your four points before you hand it in." },
      { t: "Record your 30-second introduction", d: "Hello · your name · spell your name · your town · three objects. Send it to your teacher, or perform it live at the start of the next lesson." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Show your own completed example of task 2 so the standard is visible. Say clearly that task 3 is required, not optional — the recording is the main assessment of this module.",
      mistakes: "Learners who cannot record on a phone must not be excluded. Offer the live performance option openly so nobody has to ask.",
      tip: "Reply to every recording personally, by voice, within two days. A forty-second voice reply that uses the learner's name does more for attendance than any reminder message.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start. Nothing is a surprise.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaCheck", title: "Alphabet — 5 marks", desc: "All 26 capitals correct (2) · all 26 small letters correct (2) · letters formed clearly (1)." },
      { icon: "FaPencilAlt", title: "Five sentences — 10 marks", desc: "Five sentences written (5) · capital at the start of each (2) · capitals on names and places (2) · correct end mark including one question mark (1)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "All five steps present (5) · name spelled clearly enough to write down (3) · /p/, /v/ and “school” clear (2)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → repeat Exercises A–F with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Show this before learners do the homework, not after. Learners who know exactly what is being measured produce far better work, and the marking becomes uncontroversial.",
      tip: "Give the mark privately — written on the work or sent individually. Never read marks aloud to the class. Adult beginners are easily humiliated and rarely come back.",
      mistakes: "Do not mark spelling of words outside this module. Mark only what has been taught. Marking everything teaches learners that English is impossible.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaFont", title: "The 26 letters", desc: "Names and shapes, capital and small, in order and out of order." },
      { icon: "FaVolumeUp", title: "Name vs sound", desc: "The name is for spelling. The sound is for reading. This is the key to everything." },
      { icon: "FaLightbulb", title: "5 vowels, 21 consonants", desc: "A E I O U — and every English word needs at least one of them." },
      { icon: "FaLanguage", title: "5 new words", desc: "pen · book · bag · van · school — with meanings, examples and the mistakes to avoid." },
      { icon: "FaSitemap", title: "3 writing rules", desc: "Capital at the start · capitals on names and places · full stop or question mark at the end." },
      { icon: "FaComments", title: "6 useful phrases", desc: "Including the two most valuable: “How do you spell it?” and “Please speak slowly.”" },
    ],
    notes: tn({
      time: "5 minutes.",
      how: "Go back to slide 2, the objectives, and read them again. Ask the same question you asked at the start: 'Can you do this now?' The change in the room is the point of the slide.",
      tip: "Ask each learner to name the one thing they found hardest. Write the list on the board — that list is your plan for the first ten minutes of the next lesson.",
      activity: "Quick-fire recap: point at each of the six cards and ask a different learner to give one example from it. Two minutes, whole class.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The language you must be able to produce, not just recognise.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaLanguage", title: "The five words", desc: "pen  /pen/     ·     book  /bʊk/\nbag  /bæɡ/     ·     van  /væn/\nschool  /skuːl/" },
      { icon: "FaComments", title: "The six phrases", desc: "“What is your name?”  ·  “How do you spell it?”  ·  “Can you repeat, please?”  ·  “Please speak slowly.”  ·  “Sorry, I do not understand.”  ·  “Nice to meet you.”" },
      { icon: "FaSitemap", title: "The three writing rules", desc: "1 · Capital letter at the start of every sentence.\n2 · Capital letters on names, places, days and languages.\n3 · A full stop, or a question mark for a question." },
      { icon: "FaVolumeUp", title: "The three hard sounds", desc: "/p/ — with a puff of air (pen, not Ben)\n/v/ — teeth on lip (van, not ban)\ns + k joined — school, not “isukul”" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to copy this slide into the back of their exercise book, or photograph it. This is the reference page for the whole of Level 1.",
      tip: "Print this slide as an A4 poster for the classroom wall. You will point at it in every lesson for the next two months.",
      activity: "Cover each box in turn and ask the class to say what was in it. Recall from memory, not recognition.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "Two weeks ago you could not read a single English word. Today you can.",
    sub: "You know 26 letters, their sounds, five words, three writing rules and six phrases.\nThat is not a small thing — it is the foundation everything else is built on.",
    chips: ["NEXT — Module 2", "Numbers, Time & Money", "Count to 100 · tell the time · say a price in birr"],
    notes: tn({
      time: "4 minutes.",
      how: "Say this properly, not as a formality. Adult beginners routinely believe they are too old or too slow to learn English; finishing a module is direct evidence against that belief. Name what they achieved specifically — 26 letters, 5 words, 3 rules — because specific praise is believable and general praise is not.",
      tip: "Play back one learner's 30-second recording from the start of the module, with their permission. Hearing a real classmate is worth more than anything you can say.",
      activity: "Ask each learner to say one English sentence to the person next to them and then leave. Everyone ends the module speaking English out loud.",
    }),
  });
};
