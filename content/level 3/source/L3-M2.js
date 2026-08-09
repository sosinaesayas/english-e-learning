"use strict";
/* LEVEL 3 · MODULE 2 — Pronunciation Mastery   (76 slides) */
const { C } = require("./theme");
const { SEC, tn, gexNotes, quizNotes, keyNotes } = require("./common");

module.exports = function (ctx, L) {
  const LV = ctx.lv;

  // ============================================================ 1 · COVER
  L.cover({
    levelTag: "Level 3", levelNo: LV.no, levelName: "Intermediate\nEnglish", cefr: LV.cefr,
    moduleTag: LV.mod,
    title: "Pronunciation Mastery",
    sub: "The goal is not to sound British or American. The goal is to be understood the FIRST time, every time — by anyone.",
    chips: [{ k: "76", v: "SLIDES" }, { k: "4 × 60", v: "MINUTES" }, { k: "6", v: "TARGET SOUNDS" }],
    footNote: "Teacher: ____________________   Class: ____________   Date: ____________",
    notes: tn({
      time: "Whole module: four 60-minute lessons.",
      how: "Open by saying what this module is NOT: it is not about losing your accent. Your accent is not a problem and never will be. Being asked to repeat yourself three times is.",
      tip: "Learners arrive at this module either ashamed of their accent or defensive about it. Remove both feelings in the first two minutes by separating accent from intelligibility.",
    }),
  });

  // ============================================================ 2 · OBJECTIVES
  L.list({
    sec: SEC.obj, title: "What you will be able to do", sub: "Five things. All of them are physical habits, not knowledge.",
    check: true, color: C.green, size: 21,
    items: [
      { t: "Say the six sounds that cause you the most trouble", d: "/v/ · /p/ · /θ/ and /ð/ · /ɪ/ and /iː/ · /æ/ and /e/ · initial clusters." },
      { t: "Put the stress on the right syllable", d: "Wrong stress breaks understanding faster than a wrong sound does." },
      { t: "Use the schwa — the commonest sound in English", d: "It is in almost every long word, and it is why English sounds the way it does." },
      { t: "Stress the right WORDS in a sentence", d: "The other side of the listening work from Level 2 Module 7." },
      { t: "Use intonation so people know what you mean", d: "The same words can be a question, a statement or an insult." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Objective 2 surprises everyone. Learners assume individual sounds matter most; in fact wrong word stress causes more comprehension failures than any single consonant.",
      tip: "Objective 5 is worth flagging: intonation errors are heard as rudeness, not as language errors, so they are never corrected by the listener.",
    }),
  });

  // ============================================================ 3 · WARM-UP
  L.grid({
    sec: SEC.warm, title: "Warm-up: when are you not understood?", sub: "Be specific. Vague answers cannot be fixed.",
    cols: 3, color: C.gold, tint: C.goldTint, line: "EFDCB2",
    items: [
      { icon: "FaRedo", title: "1 · “Sorry?”", desc: "When did somebody last ask you to repeat something? What was the word?" },
      { icon: "FaPhone", title: "2 · On the phone", desc: "Is it harder on the phone? Which words go wrong most often — names? numbers?" },
      { icon: "FaMicrophone", title: "3 · Read this aloud", desc: "“I have very good experience in development work.” Say it. What felt difficult?" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Task 3 is the diagnostic and it is deliberately loaded: “very” has /v/, “experience” and “development” are both stress traps. Listen carefully and note what the class does.",
      mistakes: "Correct nothing yet. Write down what you hear — you will use it to prioritise slides 6 and 7 for this particular class.",
      tip: "Task 1 usually produces names, numbers and one or two specific words. Those are the real curriculum for this module.",
    }),
  });

  // ============================================================ 4 · INTRODUCTION
  L.statement({
    kicker: "Introduction",
    text: "Your accent is not the problem. Nobody has ever been refused a job for having an Ethiopian accent.",
    sub: "People are refused when the listener has to work too hard. That is a different thing, it is measurable,\nand it comes down to about six sounds and where you put the stress.",
    chips: ["Keep your accent", "Fix six sounds", "Fix the stress"],
    notes: tn({
      time: "6 minutes.",
      how: "Make the distinction concrete: an accent is how you sound; intelligibility is whether the listener gets it first time. The first is identity and the second is a skill.",
      mistakes: "Learners who try to imitate a British or American accent usually get worse, not better, because they abandon sounds they had right in order to chase sounds they cannot yet make.",
      extra: "Most fluent English speakers in the world are not native speakers. An international accent is the normal case, not the exception.",
      tip: "Say plainly that you are not going to try to change anyone's accent, and that you will be very demanding about six specific sounds. Learners relax and work harder once the target is that clear.",
    }),
  });

  // ============================================================ 5 · CONCEPT 1
  L.compare({
    sec: SEC.con, title: "What actually breaks understanding",
    sub: "Not everything matters equally. These two lists are not the same size.",
    left: { h: "Matters a LOT", items: ["Word stress in the wrong place", "The six target sounds", "Missing the ends of words", "Adding a vowel inside a cluster", "→ The listener stops understanding."] },
    right: { h: "Matters very little", items: ["Sounding British or American", "A “perfect” /r/ sound", "Speaking fast", "Having an accent at all", "→ The listener understands fine."] },
    note: "Spend your effort on the left column. The right column is where most learners waste years and gain nothing.",
    notes: tn({
      time: "12 minutes.",
      how: "Demonstrate the left column by breaking each one deliberately in your own speech. Say deVELopment with the wrong stress and watch the class fail to catch it.",
      mistakes: "Learners work on the right column because it feels like progress. It is not, and saying so early saves them a great deal of wasted effort.",
      extra: "Research on intelligibility consistently finds stress and specific consonants matter far more than overall accent. That is why this module is organised the way it is.",
      tip: "Item 3 on the left — missing the ends of words — matters enormously and is rarely taught. It comes back on slide 18.",
      activity: "Break it deliberately: say five sentences with one left-column error each and ask which were hard to follow.",
    }),
  });

  // ============================================================ 6 · CONCEPT 2 — the six sounds
  L.table({
    sec: SEC.con, title: "The six sounds — what to do with your mouth",
    sub: "Each one is a physical instruction, not a rule to remember.",
    table: {
      color: C.green, rowH: 0.46, fontSize: 16.5, headSize: 15.5, colW: [2.5, 4.4, 5.233],
      rows: [
        ["Sound", "What to do", "Practise with"],
        ["/v/", "top teeth on bottom lip, voice ON", "very · village · leave · seven · give"],
        ["/p/", "lips together, then a puff of air", "people · problem · price · shop · help"],
        ["/θ/  /ð/", "tongue tip between the teeth", "think · three · this · the · brother"],
        ["/ɪ/  vs  /iː/", "short and relaxed  vs  long and tense", "ship / sheep · fit / feet · live / leave"],
        ["/æ/  vs  /e/", "mouth wide open  vs  half open", "bad / bed · man / men · sat / set"],
        ["str-  spr-  scr-", "NO vowel before or inside", "street · spring · school · strong"],
      ],
    },
    note: "Put a hand on your throat for /v/ — you should feel it buzz. For /f/ you feel nothing. That is the whole difference.",
    notes: tn({
      time: "16 minutes. The longest concept slide in the module, and it earns it.",
      how: "Teach every one physically. Hands on throats for /v/, a strip of paper in front of the mouth for /p/, a mirror for /θ/. Pronunciation is a muscle skill and it is learned through the body.",
      mistakes: "The commonest substitutions are /f/ for /v/, /b/ for /p/, /t/ or /s/ for /θ/, and inserting a vowel before initial clusters — “is-treet” for “street”.",
      extra: "Minimal pairs are the fastest tool: say one word from a pair and have learners point to which they heard. It trains the ear and the mouth together.",
      tip: "Do not try to fix all six in one lesson. Pick the two your class struggled with in the warm-up and drill those properly.",
      activity: "Paper test: hold a strip of paper in front of your mouth. It should move for /p/ and stay still for /b/.",
    }),
  });

  // ============================================================ 7 · CONCEPT 3 — word stress
  L.panelSide({
    sec: SEC.con, title: "Word stress — the biggest single fix", sub: "Every English word has ONE strong syllable. Only one.",
    panelW: 6.7,
    panel: { label: "Say these. Stress the CAPITALS.", color: C.green, tint: C.readTint, size: 18, lsm: 1.42,
      text: "PHO-to-graph\npho-TO-gra-pher\npho-to-GRAPH-ic\n\nde-VEL-op-ment\nop-por-TU-ni-ty\nex-PE-ri-ence\nCOM-fort-a-ble" },
    side: { label: "Why it matters so much", color: C.green, size: 16, items: [
      "Listeners find a word by its stress pattern before they hear the sounds.",
      "Wrong stress means the listener searches for a word that does not exist.",
      "One word, three forms, three different stresses — photograph, photographer, photographic.",
      "Get the stress right and a wrong sound is usually forgiven.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "Clap or tap on the stressed syllable for every word. The physical beat fixes it far better than marking it on paper.",
      mistakes: "Even syllable weight — giving every syllable the same length and force — is the commonest pattern and it makes words very hard to recognise.",
      extra: "The photograph set is the clearest demonstration in English: the stress moves as the ending changes, and the vowels change with it.",
      tip: "Say a word with deliberately wrong stress — “DE-vel-op-ment” — and ask the class what you said. Most will not recognise it. That single demonstration does more than ten minutes of explanation.",
      activity: "Tap the beat: give twenty words and have learners tap the desk once, on the stressed syllable only.",
    }),
  });

  // ============================================================ 8 · CONCEPT 4 — the schwa
  L.panelSide({
    sec: SEC.con, title: "The schwa /ə/ — the commonest sound in English", sub: "Every unstressed syllable wants to become this sound.",
    panelW: 6.7,
    panel: { label: "The vowel you see is NOT the vowel you say", color: C.green, tint: C.readTint, size: 17.5, lsm: 1.4,
      text: "banana        →  b/ə/-NA-n/ə/\ncomfortable  →  COMF-t/ə/-bl\nphotograph  →  PHO-t/ə/-graph\nabout           →  /ə/-BOUT\ndevelopment →  d/ə/-VEL-/ə/p-m/ə/nt\n\nSay it lazy. Say it short. Say it weak." },
    side: { label: "What the schwa does", color: C.green, size: 16, items: [
      "It is a short, lazy, weak “uh”. Your mouth barely moves.",
      "It only ever appears in UNSTRESSED syllables.",
      "It is why English sounds fast — half the vowels are almost swallowed.",
      "Saying every vowel clearly is what makes speech sound heavy and unnatural.",
    ] },
    notes: tn({
      time: "15 minutes.",
      how: "This is counter-intuitive and must be said directly: pronouncing vowels clearly makes you HARDER to understand, not easier, because it destroys the stress pattern the listener is relying on.",
      mistakes: "Learners pronounce every written vowel because that is what the spelling shows. English spelling does not show the schwa, which is why it has to be taught explicitly.",
      extra: "The schwa is the most frequent sound in spoken English. No other vowel comes close.",
      tip: "This slide and slide 7 are one idea from two directions: strong syllables get a full vowel, and everything else gets a schwa.",
      activity: "Find the schwa: give ten long words and have learners mark every syllable that becomes a schwa.",
    }),
  });

  // ============================================================ 9 · CONCEPT 5 — sentence stress
  L.compare({
    sec: SEC.con, title: "Sentence stress — the same words, four meanings",
    sub: "Which word you stress changes what the sentence means.",
    left: { h: "Stress a different word", items: ["I didn't say she took it.", "I DIDN'T say she took it.", "I didn't SAY she took it.", "I didn't say SHE took it.", "I didn't say she TOOK it."] },
    right: { h: "What it now means", items: ["( neutral )", "Someone else said it.", "I hinted, I didn't say it.", "Somebody else took it.", "She borrowed it, not took it."] },
    note: "Same six words. Five different meanings. This is why stressing the wrong word confuses people even when every sound is correct.",
    notes: tn({
      time: "14 minutes. This slide always produces a reaction.",
      how: "Say all five aloud yourself, clearly, and let the class hear the meaning change. Then have individual learners produce a chosen meaning and ask the class which one they heard.",
      mistakes: "Learners stress nothing, giving every word equal weight, which leaves the listener to guess the meaning.",
      extra: "This is the producer's side of Level 2 Module 7, where learners listened for strong words. Now they choose which word is strong.",
      tip: "Ask learners which word they would stress to answer “Did she take it?” — the answer teaches the rule better than the rule does.",
      activity: "Guess my meaning: say one version and have learners say which of the five meanings you intended.",
    }),
  });

  // ============================================================ 10 · CONCEPT 6 — intonation
  L.table({
    sec: SEC.con, title: "Intonation — the music that carries your meaning",
    sub: "Your voice going up or down changes everything.",
    table: {
      color: C.green, rowH: 0.5, fontSize: 17, headSize: 16, colW: [3.4, 3.6, 5.333],
      rows: [
        ["Voice goes", "It signals", "Example"],
        ["DOWN at the end ↘", "a statement, or certainty", "“The meeting is at four.” ↘"],
        ["UP at the end ↗", "a yes/no question, or doubt", "“The meeting is at four?” ↗"],
        ["DOWN on a wh- question ↘", "a normal, polite question", "“Where do you work?” ↘"],
        ["FLAT, no movement", "boredom or rudeness", "“Thank you.” — sounds insincere"],
      ],
    },
    note: "Flat intonation is heard as rude or uninterested — and nobody will ever tell you. That is why it must be taught.",
    notes: tn({
      time: "13 minutes.",
      how: "Demonstrate the last row properly. Say “Thank you” flat, then with normal movement. The difference in how it lands is obvious and slightly uncomfortable, which is what makes it memorable.",
      mistakes: "Wh- questions going UP is a common transfer error and makes a normal question sound doubtful or challenging.",
      extra: "Amharic and Oromo have their own intonation patterns which do not map onto English. Carrying them over is heard as an attitude, not as an accent — which is why it matters more than it seems.",
      tip: "This is the least-taught and most socially costly part of pronunciation. Give it the full thirteen minutes.",
      activity: "Up or down: read fifteen sentences and have learners say whether your voice rose or fell, then produce each themselves.",
    }),
  });

  // ============================================================ 11–15 · VOCABULARY
  const VOCAB = [
    { word: "opportunity", ipa: "/ˌɒpəˈtjuːnəti/", pos: "noun", icon: "FaDoorOpen",
      meaning: "A chance to do something good.",
      example: "This is a great opportunity. I had the opportunity to work abroad.",
      mistake: "FIVE syllables, stress on the THIRD: op-por-TU-ni-ty. Three of the five vowels are schwas.",
      notes: tn({ time: "8 minutes.",
        how: "Build it backwards: ty → ni-ty → TU-ni-ty → por-TU-ni-ty → op-por-TU-ni-ty. Long words are learned from the end, and this one is the hardest in the module.",
        mistakes: "Stressing the first syllable, and pronouncing every vowel fully. Both destroy the word's shape.",
        extra: "“An opportunity TO do something”, not “for do”. And it is countable: an opportunity, two opportunities.",
        tip: "This word appears in almost every job interview and cover letter. It is worth eight minutes on its own.",
        activity: "Backward build: the whole class builds the word from the last syllable forward, five times." }) },

    { word: "experience", ipa: "/ɪkˈspɪəriəns/", pos: "noun", icon: "FaBriefcase",
      meaning: "Knowledge and skill you get from doing something over time.",
      example: "She has five years of experience. I have experience in sales.",
      mistake: "Stress on the SECOND syllable: ex-PE-ri-ence. And as “knowledge” it is UNCOUNTABLE — never “experiences” in that sense.",
      notes: tn({ time: "8 minutes.",
        how: "Teach the countable/uncountable split clearly: “I have experience” means knowledge; “I had a strange experience” means an event. Both are correct and they are different words in effect.",
        mistakes: "“I have many experiences in this work” — should be “a lot of experience”. This error appears in almost every learner CV.",
        extra: "experience IN a field · experience OF doing something · five years' experience.",
        tip: "Alongside “opportunity”, this is the most important word in an interview. Module 7 depends on it.",
        activity: "CV line: every learner writes one true sentence about their own experience, using the uncountable form." }) },

    { word: "development", ipa: "/dɪˈveləpmənt/", pos: "noun", icon: "FaChartLine",
      meaning: "The process of growing or improving.",
      example: "He works in rural development. The development of the project took a year.",
      mistake: "Stress on the SECOND syllable: de-VEL-op-ment. And it contains /v/ — one of your six target sounds.",
      notes: tn({ time: "8 minutes.",
        how: "This word combines the two hardest things in the module: a middle stress and a /v/. Drill the /v/ alone first, then attach it to the word.",
        mistakes: "“DE-vel-op-ment” with initial stress is very common and makes the word hard to recognise.",
        extra: "develop (verb) · development (noun) · developed / developing (adjectives). The stress stays on VEL throughout.",
        tip: "A high-frequency word in Ethiopian professional life — NGOs, government, agriculture, construction. Worth getting exactly right.",
        activity: "Word family: learners say all four forms in a row, keeping the stress on the same syllable." }) },

    { word: "comfortable", ipa: "/ˈkʌmftəbl/", pos: "adjective", icon: "FaCouch",
      meaning: "Physically relaxed, or feeling at ease.",
      example: "The chair is comfortable. I'm not comfortable speaking in public.",
      mistake: "THREE syllables when spoken, not four: COMF-t'-bl. The “or” disappears completely.",
      notes: tn({ time: "7 minutes.",
        how: "Write the spelling and cross out the “or”. Learners find it hard to believe until they see it crossed out and hear it said.",
        mistakes: "Saying all four syllables — “com-FOR-ta-ble”. It is understandable but immediately marks the speaker as reading the spelling rather than hearing the word.",
        extra: "Other words that lose a syllable: vegetable (VEDGE-t'-bl) · interesting (IN-tresting) · chocolate (CHOC-lət) · every (EV-ri).",
        tip: "The second meaning matters: “I'm not comfortable with that” is a polite way to refuse in a professional setting. It belongs with the softening work in Module 1.",
        activity: "Lost syllables: give eight words and have learners count how many syllables are actually spoken." }) },

    { word: "necessary", ipa: "/ˈnesəsəri/", pos: "adjective", icon: "FaExclamationTriangle",
      meaning: "Needed. Something you must have or do.",
      example: "Is it necessary to come early? Bring the necessary documents.",
      mistake: "Stress on the FIRST syllable: NE-ce-ssa-ry. The three unstressed vowels are all schwas.",
      notes: tn({ time: "7 minutes.",
        how: "A good schwa demonstration: one strong syllable at the front and three weak ones after it. Clap once, then say the rest quietly.",
        mistakes: "Stressing the third syllable. And the spelling — one c, two s's — catches almost everyone in writing.",
        extra: "“It is necessary to…” · “if necessary” · “not necessary”. All three are common at work.",
        tip: "Pair it with “necessarily”, which adds a syllable but keeps the same stress. Learners find that reassuring.",
        activity: "One clap: learners say all five vocabulary words, clapping only on the stressed syllable of each." }) },
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
    sec: Object.assign({}, SEC.gra, { label: "Sound Language 1 of 5" }),
    title: "Word stress rules that actually work",
    sub: "English stress looks random. These four patterns are not.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17, headSize: 16, colW: [3.0, 4.0, 5.333],
      rows: [
        ["Ending", "Stress goes", "Examples"],
        ["-tion  ·  -sion", "on the syllable BEFORE it", "educaTION · deciSION · informaTION"],
        ["-ity  ·  -ety", "two syllables before it", "opportUNity · abIlity · socIety"],
        ["-ic  ·  -ical", "on the syllable BEFORE it", "econOMic · politIcal · specIFic"],
        ["-ee  ·  -eer", "ON the ending itself", "employEE · engineER · volunteER"],
      ],
    },
    note: "These four endings cover thousands of words. Learn the pattern once and you never have to learn those words individually.",
    notes: tn({
      time: "13 minutes.",
      how: "Give the ending and have learners predict the stress before you say the word. Prediction is what turns a rule into a usable skill.",
      mistakes: "Learners memorise words one at a time. These four patterns replace hundreds of separate memorisations.",
      extra: "Two-syllable words follow a rough tendency: nouns stress the first syllable, verbs the second. REcord (noun) versus reCORD (verb).",
      tip: "The -ee ending is the odd one out because the stress lands on the ending itself. Employee, trainee, refugee — all common words.",
      activity: "Predict the stress: give twenty words with these endings and have learners mark the stress before hearing them.",
    }),
  });

  // ============================================================ 17 · GRAMMAR 2
  L.compare({
    sec: Object.assign({}, SEC.gra, { label: "Sound Language 2 of 5" }),
    title: "Same word, different stress, different job",
    sub: "Nouns take the stress at the front. Verbs take it at the back.",
    left: { h: "NOUN — stress first", items: ["a REcord", "a PREsent", "an INcrease", "a PROduce (rare)", "an OBject", "a CONtract"] },
    right: { h: "VERB — stress second", items: ["to reCORD", "to preSENT", "to inCREASE", "to proDUCE", "to obJECT", "to conTRACT"] },
    note: "Roughly a hundred English words work this way. The spelling never changes — only the beat does.",
    notes: tn({
      time: "13 minutes.",
      how: "Say each pair in a sentence: “I have a REcord of it” and “I need to reCORD it”. Context makes the pattern obvious in a way that lists do not.",
      mistakes: "Using noun stress for the verb is very common and momentarily confuses the listener, who is expecting a different part of speech.",
      extra: "Also: EXport / exPORT · IMport / imPORT · PROgress / proGRESS · PERmit / perMIT. All are common at work.",
      tip: "The rule is a strong tendency, not an absolute law, but it is reliable enough to be worth teaching as one.",
      activity: "Noun or verb: read ten sentences and have learners say which form they heard, based on the stress alone.",
    }),
  });

  // ============================================================ 18 · GRAMMAR 3
  L.table({
    sec: Object.assign({}, SEC.gra, { label: "Sound Language 3 of 5" }),
    title: "The ends of words — where meaning gets lost",
    sub: "Dropping a final consonant deletes grammar the listener needs.",
    table: {
      color: C.gram, rowH: 0.5, fontSize: 17, headSize: 16, colW: [3.2, 4.2, 4.933],
      rows: [
        ["If you drop", "The listener loses", "Say it clearly"],
        ["final -s", "the plural, or he/she/it", "he workS · three bookS"],
        ["final -ed", "the past tense", "I workED · she askED"],
        ["final -t  /  -d", "the whole word sometimes", "wenT · nexT · fasT · builD"],
        ["final -n  /  -ng", "which word you said", "thin / thing · win / wing"],
      ],
    },
    note: "The -ed rule from Level 2:  /t/ after voiceless — walked.   /d/ after voiced — played.   /ɪd/ only after t or d — wanted.",
    notes: tn({
      time: "13 minutes.",
      how: "This is the highest-value accuracy fix in the module. Dropping final consonants removes grammatical information that no context can replace.",
      mistakes: "Ethiopian learners often reduce final consonant clusters — “nex” for “next”, “fas” for “fast”. Drill the full cluster with exaggeration first, then at normal speed.",
      extra: "This connects directly to Module 3, where the same endings are treated as grammar rather than as sound.",
      tip: "Say “he work” and “he works” and ask what changed. The class hears immediately that the missing /s/ removed the subject agreement.",
      activity: "Endings dictation: read fifteen verbs and have learners write whether each had -s, -ed or nothing.",
    }),
  });

  // ============================================================ 19 · GRAMMAR 4
  L.panelSide({
    sec: Object.assign({}, SEC.gra, { label: "Sound Language 4 of 5" }),
    title: "Connected speech — why you sound separated", sub: "Fluent English joins words together. So should you.",
    panelW: 6.9,
    panel: { label: "Three ways English joins words", color: C.gram, tint: C.surf2, size: 17, lsm: 1.38,
      text: "1.  CONSONANT + VOWEL  →  join them\n     “an apple”     →  “a-napple”\n     “pick it up”  →  “pi-ki-tup”\n\n2.  SAME SOUND TWICE  →  say it once\n     “next time”  →  “nex-time”\n\n3.  /t/ BETWEEN VOWELS  →  softens\n     “a lot of”  →  “a lo-dof”" },
    side: { label: "Why this matters both ways", color: C.gram, size: 16, items: [
      "Saying every word separately sounds slow and effortful.",
      "It also makes you harder to follow, not easier.",
      "And if you never JOIN, you never learn to HEAR joins.",
      "This is the producer's side of Level 2 Module 7.",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "Pattern 1 is the most useful and the easiest. Drill “an apple”, “pick it up”, “turn it on”, “in an hour” until they come out joined without thought.",
      mistakes: "Learners believe separating words makes them clearer. It does the opposite — the listener is expecting joins and has to work harder without them.",
      extra: "This is exactly why “Whatcha doing?” was hard to hear in Level 2 Module 7. Producing joins is what finally makes them audible.",
      tip: "Do not push pattern 3 hard. It is optional, more American than British, and pattern 1 delivers most of the benefit.",
      activity: "Join it: give ten phrases and have learners say each separated, then joined. Ask which sounded more natural.",
    }),
  });

  // ============================================================ 20 · GRAMMAR 5
  L.list({
    sec: Object.assign({}, SEC.gra, { label: "Sound Language 5 of 5" }),
    title: "Put it all together — five things to check", sub: "In order of how much difference each one makes.",
    color: C.gram, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Is the stress on the right syllable?", d: "Biggest single fix. Wrong stress hides the word completely." },
      { t: "Are the unstressed syllables weak?", d: "Schwa. Saying every vowel fully destroys the stress pattern." },
      { t: "Are the six target sounds right?", d: "/v/ · /p/ · /θ/ /ð/ · /ɪ/ /iː/ · /æ/ /e/ · initial clusters." },
      { t: "Are the ENDS of words there?", d: "-s and -ed carry grammar the listener cannot guess." },
      { t: "Does the intonation go the right way?", d: "Down for statements, up for yes/no questions. Never flat." },
    ],
    notes: tn({
      time: "12 minutes.",
      how: "The order matters and is deliberate. A learner with perfect consonants and wrong stress is harder to understand than one with the reverse. Say so.",
      mistakes: "Learners start at item 3 because individual sounds feel like the real subject. Redirect them to items 1 and 2, where the gain is largest.",
      extra: "Items 1 and 2 are one idea: strong syllables get a full vowel, everything else gets a schwa.",
      tip: "Print this as a card. Use it as the correction order for the rest of Level 3 — correct stress before sounds, always.",
      activity: "Five checks: learners record thirty seconds and check their own recording against all five points.",
    }),
  });

  // ============================================================ 21–25 · GUIDED EXAMPLES
  [
    { title: "Guided examples 1 — where does the stress go?", sub: "Use the rules from slide 16.", items: [
      { q: "“information” — which syllable?", a: "in-for-MA-tion.", why: "The -tion rule: stress falls on the syllable immediately before the ending. Always." },
      { q: "“opportunity” — which syllable?", a: "op-por-TU-ni-ty.", why: "The -ity rule: two syllables before the ending. Same for ability, security, activity." },
      { q: "“employee” — which syllable?", a: "em-ploy-EE.", why: "The -ee ending takes the stress itself. It is the exception, and it is worth knowing." },
    ] },
    { title: "Guided examples 2 — noun or verb?", sub: "The stress tells you which.", items: [
      { q: "“I need to ___ this meeting.”  REcord or reCORD?", a: "reCORD — it is a verb here.", why: "Verbs take the stress on the second syllable. The spelling is identical; only the beat differs." },
      { q: "“Sales showed a big ___.”  INcrease or inCREASE?", a: "INcrease — it is a noun here.", why: "Nouns take the stress at the front. “A big INcrease”, but “prices inCREASED”." },
      { q: "Why does this matter?", a: "The listener uses stress to decide which word class you meant.", why: "Wrong stress makes them briefly parse the sentence wrongly, which costs a second of comprehension." },
    ] },
    { title: "Guided examples 3 — the schwa", sub: "Which vowels get swallowed?", items: [
      { q: "“comfortable” — how many syllables do you SAY?", a: "Three: COMF-t'-bl.", why: "The “or” disappears entirely. The spelling shows four; speech has three." },
      { q: "“development” — which vowels are schwas?", a: "The first, third and fourth: d/ə/-VEL-/ə/p-m/ə/nt.", why: "Only the stressed syllable keeps a full vowel. That is the rule, in every long English word." },
      { q: "Should you pronounce every vowel clearly?", a: "No — that makes you HARDER to understand.", why: "Full vowels everywhere destroy the stress pattern the listener is using to identify the word." },
    ] },
    { title: "Guided examples 4 — the ends of words", sub: "What does the listener lose?", items: [
      { q: "You say “he work here”. What did the listener lose?", a: "The -s, which marks he/she/it.", why: "Nothing in the context replaces it. The grammar was carried by a sound you dropped." },
      { q: "You say “I walk to Adama yesterday”. What is missing?", a: "The -ed. It should be “walked”.", why: "Without it the sentence sounds present tense, and “yesterday” now contradicts the verb." },
      { q: "How do you say “walked”?", a: "/wɔːkt/ — one syllable, ending in a /t/ sound.", why: "-ed after a voiceless sound is /t/. It never adds a syllable unless the verb ends in t or d." },
    ] },
    { title: "Guided examples 5 — intonation", sub: "Up, down, or flat?", items: [
      { q: "“Where do you work?” — which way?", a: "DOWN at the end.", why: "Wh- questions fall. Rising here sounds doubtful or challenging, which is not what you meant." },
      { q: "“You're coming tomorrow?” — which way?", a: "UP at the end.", why: "A yes/no question rises. The rise is what makes it a question — the word order here is a statement." },
      { q: "You say “Thank you” completely flat. How does it sound?", a: "Insincere, or even rude.", why: "Flat intonation reads as an attitude, not as a language error — and nobody will ever tell you." },
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
    title: "Being asked to repeat — and fixing it",
    sub: "Abel is on the phone. The problem is one sound.",
    turns: [
      { who: "ABEL", text: "I'd like to book a room for the fifteenth.", side: "l" },
      { who: "CLERK", text: "Sorry — the fiftieth?", side: "r" },
      { who: "ABEL", text: "No, the fifTEENTH. One five.", side: "l" },
      { who: "CLERK", text: "Ah, the fifteenth. And your name?", side: "r" },
      { who: "ABEL", text: "Abel Bekele. B for Bahir Dar, E-K-E-L-E.", side: "l" },
      { who: "CLERK", text: "Got it. Thank you, Mr Bekele.", side: "r" },
    ],
    note: "Abel does two things right: he stresses the -TEENTH, and he confirms with digits. Neither is an apology.",
    notes: tn({
      time: "12 minutes.",
      how: "Point out that Abel never apologises for his pronunciation. He simply repairs it and moves on — which is exactly the Module 1 repair habit applied to sound.",
      mistakes: "Learners respond to “Sorry?” by repeating the same thing at the same speed. Repeating identically almost never works; changing the stress or spelling it out does.",
      extra: "“B for Bahir Dar” is the spelling technique from Level 2 Module 8. It resolves the B/V/P confusion instantly.",
      tip: "Practise this back to back. Removing the face makes the pronunciation carry the whole load, which is realistic.",
      activity: "Repair the sound: pairs role-play a booking where one number is deliberately misheard.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 2 of 5" }),
    title: "Stress changing the meaning",
    sub: "Hana and Dawit are talking past each other. Watch which word is stressed.",
    turns: [
      { who: "HANA", text: "Did YOU write this report?", side: "l" },
      { who: "DAWIT", text: "No, Sara did. Why — is something wrong?", side: "r" },
      { who: "HANA", text: "Sorry, I meant: did you WRITE this report, or just check it?", side: "l" },
      { who: "DAWIT", text: "Ah. I checked it. Sara wrote it.", side: "r" },
      { who: "HANA", text: "Right. And is it FINISHED, or nearly finished?", side: "l" },
      { who: "DAWIT", text: "Nearly. Two more days.", side: "r" },
    ],
    note: "Hana's first question stressed the wrong word, so Dawit answered a different question. One misplaced beat cost two turns.",
    notes: tn({
      time: "13 minutes.",
      how: "Have pairs perform it twice, once with Hana's stress as written and once with it corrected. The second version resolves in one turn instead of three.",
      mistakes: "This is a real workplace cost, not a classroom exercise. Wrong sentence stress produces answers to questions you did not ask.",
      extra: "Hana's repair — “Sorry, I meant…” — is the Module 1 repair phrase applied to stress rather than to a word.",
      tip: "Ask which word learners would stress to ask about the writer, and which for the action. That distinction is the whole slide.",
      activity: "Stress the right word: give ten questions and a target meaning, and have learners produce each correctly.",
    }),
  });

  L.grid({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 3 of 5" }),
    title: "What to say when you are not understood",
    sub: "Six responses. None of them is an apology for your accent.",
    cols: 3, color: C.speak, tint: C.speakTint, line: "F3C9BB", titleSize: 19, descSize: 15,
    items: [
      { icon: "FaHashtag", title: "“One five, not five zero.”", desc: "Digits remove all doubt about numbers." },
      { icon: "FaFont", title: "“B for Bahir Dar.”", desc: "Fixes B, V and P instantly on the phone." },
      { icon: "FaVolumeUp", title: "Repeat with the stress moved", desc: "“fifTEENTH” — do not just say it louder." },
      { icon: "FaPen", title: "“Shall I write it down?”", desc: "For names, addresses and anything unusual." },
      { icon: "FaExchangeAlt", title: "Use a different word", desc: "If “vehicle” fails, say “car”. Do not fight it." },
      { icon: "FaComments", title: "“Let me say that another way.”", desc: "Rebuild the whole sentence, do not repeat it." },
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Response 3 is the key one. Learners repeat louder, which never helps. Moving the stress or spelling it out almost always does.",
      mistakes: "Apologising for your accent. It invites the listener to treat you as a weak speaker rather than solving the actual problem.",
      extra: "Response 5 is the practical adult strategy: if a word keeps failing, replace it. Nobody is grading your vocabulary.",
      tip: "Response 6 is the strongest of the six. Rebuilding a sentence differently succeeds far more often than repeating the same one.",
      activity: "Six repairs: learners practise a phone call where the listener fails to understand three separate times.",
    }),
  });

  L.dialogue({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 4 of 5" }),
    title: "Complete the conversation",
    sub: "Work in pairs. Fill each gap. Answers are in the Answer Key.",
    turns: [
      { who: "YOU", text: "I have five years of ______ in development work.", side: "l" },
      { who: "MANAGER", text: "Sorry, five years of what?", side: "r" },
      { who: "YOU", text: "Ex-PE-ri-ence. Five years. Would this be a good ______ for me?", side: "l" },
      { who: "MANAGER", text: "It could be. Is it ______ for you to travel?", side: "r" },
      { who: "YOU", text: "I'm ______ with travelling, yes. That's not a problem.", side: "l" },
      { who: "MANAGER", text: "Good. Let's talk next week.", side: "r" },
    ],
    note: "Use these:  “experience”  ·  “opportunity”  ·  “necessary”  ·  “comfortable”",
    notes: tn({
      time: "11 minutes.",
      how: "This uses four of the five vocabulary words in one realistic exchange. Have pairs perform it with correct stress on every one.",
      answers: "1 experience · 2 opportunity · 3 necessary · 4 comfortable",
      mistakes: "Every one of the four is a stress trap. Listen specifically for op-por-TU-ni-ty and ex-PE-ri-ence.",
      tip: "The repair in line 3 — saying the word syllable by syllable with correct stress — is the technique from slide 28. Praise anyone who does it naturally.",
      activity: "Do it again, changing the field of work and the number of years.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.conv, { label: "Conversation 5 of 5" }),
    title: "Pair practice — say it so it lands first time", sub: "Four rounds. Two minutes each.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say the five vocabulary words. Partner marks the stress they heard.", d: "Compare with the correct pattern." },
      { t: "Say ten minimal pairs. Partner writes which word they heard.", d: "ship/sheep · bad/bed · very/ferry." },
      { t: "Say one sentence five ways, stressing a different word each time", d: "Partner says which meaning they got." },
      { t: "Spell your name and address on the phone, back to back", d: "Partner writes it. Check every letter." },
    ],
    notes: tn({
      time: "13 minutes for all four rounds.",
      how: "Round 2 is the objective test: the partner's written answer shows whether the distinction was actually produced, not whether it felt produced.",
      mistakes: "Learners believe they made a distinction that the partner did not hear. The written record settles it without argument.",
      tip: "Round 4 back to back is realistic and hard. Names and addresses are where pronunciation failures cost real time.",
      activity: "Score it: count correct identifications in round 2 and repeat at the end of the module.",
    }),
  });

  // ============================================================ 31–35 · SPEAKING
  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 1 of 5" }),
    title: "Activity 1 — minimal pairs", sub: "The fastest way to fix a sound. Ten minutes a day.",
    color: C.speak, size: 19, labels: ["1", "2", "3", "4", "5", "6"],
    items: [
      { t: "very / ferry  ·  vote / boat  ·  leave / leaf", d: "/v/ — teeth on lip, voice ON." },
      { t: "pay / bay  ·  pin / bin  ·  cup / cub", d: "/p/ — lips together, then a puff of air." },
      { t: "think / sink  ·  three / tree  ·  they / day", d: "/θ/ and /ð/ — tongue between the teeth." },
      { t: "ship / sheep  ·  fit / feet  ·  live / leave", d: "/ɪ/ short and relaxed, /iː/ long and tense." },
      { t: "bad / bed  ·  man / men  ·  sat / set", d: "/æ/ mouth wide, /e/ mouth half open." },
      { t: "street  ·  spring  ·  school  ·  strong", d: "No vowel before or inside the cluster." },
    ],
    notes: tn({
      time: "15 minutes.",
      how: "Run it both ways. First you say one word and learners point to which they heard; then a learner says one and the class points. Producing is harder than hearing and both must be practised.",
      mistakes: "Learners hear the difference long before they can produce it. That gap is normal — say so, or they lose heart.",
      extra: "Ten minutes a day on two pairs beats an hour a week on all six. Muscle habits need frequency, not duration.",
      tip: "Pick the two rows your class actually needs from the warm-up. Doing all six badly is worse than doing two well.",
      activity: "Pair test: learners score each other out of ten on one row and record the number.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 2 of 5" }),
    title: "Activity 2 — the stress drill", sub: "Tap the desk on the strong syllable. Every word.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4"],
    items: [
      { t: "Say twenty long words, tapping once on the stress", d: "One tap per word. Only one." },
      { t: "Say the same words with the WRONG stress on purpose", d: "Your partner says what they thought they heard." },
      { t: "Say the photograph set: photograph, photographer, photographic", d: "The stress moves every time." },
      { t: "Say a noun/verb pair in two sentences", d: "“a REcord” and “to reCORD”." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Task 2 is the most instructive. Hearing their own wrong-stress version fail to be understood teaches more than any correct repetition.",
      mistakes: "Two taps per word means the stress is not being placed. English words have exactly one strong syllable.",
      extra: "Tapping engages the body, and stress is a rhythmic skill, so a physical beat is genuinely more effective than marking a page.",
      tip: "Use tapping as your correction signal for the rest of Level 3. Tap the correct pattern instead of explaining it.",
      activity: "Wrong on purpose: half the class says a word with wrong stress and the other half guesses what was meant.",
    }),
  });

  L.compare({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 3 of 5" }),
    title: "Sound drill — the six sounds in real sentences",
    sub: "Isolated words are easy. Sentences are the real test.",
    left: { h: "Say these slowly first", items: ["Seven very brave villagers.", "People pay a big price.", "I think this is the third thing.", "Please leave the ship, not the sheep.", "The bad bed is in the back.", "The strong student stopped."] },
    right: { h: "Watch out for", items: ["/v/ four times — voice ON", "/p/ and /b/ alternating", "/θ/ and /ð/ in one line", "/ɪ/ and /iː/ in one line", "/æ/ and /e/ in one line", "str- and st- clusters"] },
    note: "Say each one three times: very slowly, at normal speed, then fast. If it survives fast, you have it.",
    notes: tn({
      time: "14 minutes.",
      how: "The three-speed method matters. A sound is only really learned when it survives at speed, because that is when the old habit reasserts itself.",
      mistakes: "Learners produce a sound perfectly in isolation and lose it entirely in a sentence. That is normal and is exactly why sentence practice is needed.",
      extra: "Record the class saying these at the start and end of the module. The improvement over four lessons is usually clearly audible.",
      tip: "Line 4 is the hardest. “Leave the ship, not the sheep” contains both vowels twice and catches nearly everyone.",
      activity: "Three speeds: every learner performs one line at all three speeds to the class.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 4 of 5" }),
    title: "Activity 4 — intonation and meaning", sub: "In pairs. Your voice does the work.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say “The meeting is at four” as a statement, then as a question", d: "Only your voice changes. Not one word." },
      { t: "Ask five wh- questions with the voice going DOWN", d: "Where · when · why · how · what." },
      { t: "Say “Thank you” flat, then normally", d: "Your partner says how each one felt." },
      { t: "Say “I didn't say she took it” five ways", d: "Partner identifies the meaning each time." },
      { t: "Disagree politely, then bluntly — same words", d: "“I'm not sure that's right.” Change only the tune." },
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Task 3 is uncomfortable and that is the point. Learners hear their own flat “thank you” land badly and never forget it.",
      mistakes: "Wh- questions rising is the commonest intonation transfer error and makes ordinary questions sound suspicious.",
      extra: "Task 5 shows that politeness lives in the tune as much as in the words. The same sentence can be gracious or sarcastic.",
      tip: "This is the module's most socially valuable activity. Intonation errors are judged as character, not as language.",
      activity: "How did that feel? After each round, the listener reports the impression, not the correctness.",
    }),
  });

  L.list({
    sec: Object.assign({}, SEC.spk, { label: "Speaking 5 of 5" }),
    title: "Speaking challenge — record yourself", sub: "2 minutes. Everyone does this. Compare it with Module 1's recording.",
    color: C.speak, size: 20, labels: ["1", "2", "3", "4", "5"],
    items: [
      { t: "Say the five vocabulary words with correct stress", d: "opportunity · experience · development · comfortable · necessary." },
      { t: "Say six minimal pairs clearly", d: "One from each of the six target sounds." },
      { t: "Read the six sentences from slide 33 at normal speed", d: "All six sounds in context." },
      { t: "Say one sentence three ways, stressing a different word", d: "State the meaning you intended each time." },
      { t: "Speak for 30 seconds about your work", d: "Check the ends of your words: -s and -ed." },
    ],
    notes: tn({
      time: "15 minutes including listening back.",
      how: "Listening back is essential here in a way it is not elsewhere. Learners cannot hear their own stress while speaking; on a recording they can hear all of it.",
      mistakes: "Step 5 is where the endings disappear. Under the pressure of free speech, -s and -ed are the first things dropped.",
      answers: "SUCCESS CRITERIA: all five words stressed correctly · six pairs distinguishable to a listener · six sentences at normal speed with the target sounds intact · three clear stress placements · endings audible in free speech.",
      tip: "Have learners mark their own recording against the five checks on slide 20. Self-assessment is what makes the habit continue after the module ends.",
      activity: "Keep every recording for the Level 3 comparison.",
    }),
  });

  // ============================================================ 36–40 · LISTENING
  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 of 5" }),
    title: "Listening 1 — minimal pair dictation", sub: "Which word did you hear? Listen twice.",
    panelW: 7.2,
    panel: { label: "Audio script — read ONE word from each pair", color: C.listen, tint: C.listenTint, size: 17, lsm: 1.36,
      text: "1.  very  /  ferry\n2.  pin  /  bin\n3.  think  /  sink\n4.  ship  /  sheep\n5.  bad  /  bed\n6.  vote  /  boat\n7.  three  /  tree\n8.  live  /  leave" },
    side: { label: "Your task", color: C.listen, size: 16, items: [
      "Write the word you hear each time.",
      "Then your teacher reads the answers.",
      "Count your score out of 8.",
      "Which sound was hardest for you?",
      "That is the sound to practise this week.",
    ] },
    notes: tn({
      time: "12 minutes.",
      how: "Choose which word to read at random and keep your own list. Read each twice, at normal volume, without exaggerating.",
      mistakes: "Do not over-articulate. Exaggerated production makes the test easy and teaches nothing about real listening.",
      extra: "Run it again at the end of the module with the same eight pairs and compare scores.",
      answers: "Answers depend on which word you read. Keep your list and mark it with the class. Item 4 and item 8 are usually the hardest.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 1 · Answers" }),
    title: "Listening 1 — what your score means", sub: "This is a diagnosis, not a grade.",
    size: 17,
    items: [
      { q: "7 or 8 correct", a: "Your ear is good. Now work on producing the sounds.", why: "Hearing comes before saying. A high score means the next work is with your mouth, not your ear." },
      { q: "4 to 6 correct", a: "Normal at this level. Drill the pairs you missed daily.", why: "Most learners at B1 score here. Ten minutes a day on two pairs moves it quickly." },
      { q: "Below 4", a: "Start with just ONE pair and do it every day for a week.", why: "Trying to fix six sounds at once fixes none of them. One at a time is faster overall." },
      { q: "Which items are usually hardest?", a: "4 (ship/sheep) and 8 (live/leave) — the /ɪ/ and /iː/ pair.", why: "Many languages have only one sound in this space, so the distinction has to be built from nothing." },
      { q: "What if you hear it but cannot say it?", a: "That is normal and it is good news.", why: "Hearing always develops first. The production follows with physical practice, usually within weeks." },
    ],
    notes: keyNotes("Record each learner's score. Repeating this exact test at the end of Level 3 gives you a hard number showing improvement, which is rare in pronunciation teaching."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 of 5" }),
    title: "Listening 2 — which word is stressed?", sub: "Same sentence, different meaning each time.",
    panelW: 7.2,
    panel: { label: "Audio script — read each with the marked stress", color: C.listen, tint: C.listenTint, size: 16.5, lsm: 1.34,
      text: "1.  “I didn't say SHE took it.”\n2.  “We need it by FRIDAY.”\n3.  “I said the RED one.”\n4.  “SARA wrote the report.”\n5.  “Can you send it TODAY?”\n\nRead each one twice.\nStress only the capitalised word." },
    side: { label: "Questions", color: C.listen, size: 15.5, items: [
      "1. Who does the speaker think took it?",
      "2. What is the speaker emphasising?",
      "3. What colour did somebody else suggest?",
      "4. Who did the listener think wrote it?",
      "5. Is the speaker asking about the date or the task?",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "Each answer requires inferring what was NOT said. Stressing a word implies a contrast with an alternative, and identifying that alternative is the skill.",
      mistakes: "Learners answer what the sentence says rather than what the stress implies. Push them to the implied contrast every time.",
      extra: "This is a genuinely advanced listening skill and it appears in every real meeting. It is also almost never taught.",
      answers: "1 Somebody else, not her. · 2 The deadline, not the task. · 3 A different colour was mentioned. · 4 They thought it was somebody else. · 5 The date — today rather than later.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.lis, { label: "Listening 2 · Answers" }),
    title: "Listening 2 — answers and why", sub: "Stress tells you what the speaker is contrasting.",
    size: 16.5,
    items: [
      { q: "1 — “I didn't say SHE took it.”", a: "The speaker thinks somebody else took it.", why: "Stressing “she” sets up a contrast with another person. The sentence denies her specifically." },
      { q: "2 — “We need it by FRIDAY.”", a: "The deadline is the point, not the task.", why: "Stress marks new or contrastive information. Here the date is what the listener needs to register." },
      { q: "3 — “I said the RED one.”", a: "Somebody suggested a different colour.", why: "The correction is on the colour. The rest of the sentence is agreed and therefore unstressed." },
      { q: "4 — “SARA wrote the report.”", a: "The listener thought somebody else wrote it.", why: "Stressing the subject corrects an assumption about who did it." },
      { q: "5 — “Can you send it TODAY?”", a: "The date. The task is already agreed.", why: "Same words, unstressed, would be a neutral request. The stress makes the timing the question." },
    ],
    notes: keyNotes("Point out that every one of these answers is about something the speaker did NOT say. Stress carries meaning that no word in the sentence contains."),
  });

  L.grid({
    sec: Object.assign({}, SEC.lis, { label: "Listening 5 of 5" }),
    title: "How to fix a sound on your own", sub: "Four methods. All free, all effective.",
    cols: 2, color: C.listen, tint: C.listenTint, line: "BEE2E2", titleSize: 21, descSize: 16,
    items: [
      { icon: "FaRedo", title: "Minimal pairs, ten minutes a day", desc: "Two pairs only. Say them, record them, listen back. Frequency beats duration for muscle habits." },
      { icon: "FaMicrophone", title: "Record and compare", desc: "Record yourself, then a native or fluent speaker saying the same words. You will hear the gap immediately." },
      { icon: "FaVolumeUp", title: "Shadowing for stress", desc: "Speak along with audio one second behind. It trains rhythm and stress without any grammar work." },
      { icon: "FaSearch", title: "Look up the stress", desc: "Every dictionary marks it. Check the stress of every new work word before you learn the meaning." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Method 4 is the habit that pays off longest. Learning a word with the wrong stress means learning it twice.",
      mistakes: "Learners learn spelling and meaning and never check the stress. Then the word fails in conversation and they blame their accent.",
      tip: "Method 2 is uncomfortable and effective. Most learners have never actually heard their own English.",
      activity: "Check three words: learners look up the stress of three work-related words and report back next lesson.",
    }),
  });

  // ============================================================ 41–45 · READING
  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 1 of 5" }),
    title: "Reading 1 — the accent question", sub: "Skim it in 30 seconds. Then read it properly.",
    panelW: 7.2,
    panel: { label: "Read aloud", color: C.read, tint: C.readTint, size: 16, lsm: 1.28,
      text: "DOES YOUR ACCENT MATTER?\n\nMost English speakers today learned it as a second language. An Ethiopian accent, an Indian accent and a Nigerian accent are all normal English.\n\nWhat matters is narrower. Studies of intelligibility find that listeners cope easily with unfamiliar accents, but struggle badly with two things: stress in the wrong place, and missing sounds at the ends of words.\n\n“I never try to change a student's accent,” one teacher says. “I am very strict about six sounds and about stress. That is where the difficulty actually is.”\n\nThe test is not whether you sound native. It is whether people ask you to repeat." },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "Skim: what is the main argument?",
      "What do listeners cope with easily?",
      "What two things cause real difficulty?",
      "What is the teacher strict about?",
      "What is “the practical test”?",
      "Do you agree? Why or why not?",
    ] },
    notes: tn({
      time: "14 minutes.",
      how: "The last line is the one to dwell on: the measure of success is how often you are asked to repeat, not how native you sound. It is measurable and it is achievable.",
      mistakes: "Learners resist this because they have been told for years that a native accent is the goal. Give them time to argue with it — question 6 exists for that.",
      extra: "Ask which is more useful: sounding British, or never being asked to repeat. The question answers itself once it is stated plainly.",
      tip: "This text supports slide 4. Some learners will not accept the idea from a teacher but will accept it from a text.",
      activity: "Count the repeats: learners note how many times they are asked to repeat in one week, before and after this module.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.rea, { label: "Reading 2 of 5" }),
    title: "Reading 1 — questions", sub: "Two of these are inference questions.",
    color: C.read, instFill: C.readTint, instIcon: "FaBookOpen",
    instruction: "Answer in a full sentence. Mark each answer D (direct) or I (inference).",
    items: [
      "Are most English speakers in the world native speakers?",
      "What two things cause real difficulty for listeners?",
      "Does the teacher try to change accents?",
      "Would the teacher correct a student who said “DE-vel-op-ment”?",
      "How would you know if your pronunciation had improved?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Questions 4 and 5 are inferences. The text never mentions that word or that test directly — both must be worked out from what it does say.",
      mistakes: "Learners look for question 4's answer in the text and, not finding it, say there is none. The teacher is strict about stress, so the answer is yes.",
      tip: "Question 5 is the one that matters. The answer — fewer people asking you to repeat — is a measurement anyone can take.",
      answers: "1 No — most learned it as a second language (D). · 2 Wrong stress and missing final sounds (D). · 3 No, never (D). · 4 Yes — that is a stress error, and she is strict about stress (I). · 5 People ask you to repeat less often (I).",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 3 of 5" }),
    title: "Reading 1 — answers and why", sub: "The last one is the whole module.",
    size: 16.5,
    items: [
      { q: "1 — mostly native speakers?", a: "No — most learned English as a second language. (Direct)", why: "This reframes the whole question. An international accent is the normal case, not a deviation." },
      { q: "2 — the real difficulties", a: "Stress in the wrong place, and missing sounds at the ends of words. (Direct)", why: "Exactly slides 7 and 18. Two problems, both fixable, neither about accent." },
      { q: "3 — does she change accents?", a: "No, never. (Direct)", why: "She separates accent from intelligibility, which is the distinction the module is built on." },
      { q: "4 — would she correct “DE-vel-op-ment”?", a: "Yes — it is a stress error. (Inference)", why: "The text never names the word. You apply her stated policy to a new case." },
      { q: "5 — how would you know?", a: "People would ask you to repeat less often. (Inference)", why: "A measurable test that needs no teacher, no equipment and no native speaker to judge you." },
    ],
    notes: keyNotes("Question 5 gives learners a self-assessment they can run for the rest of their lives. Ask them to count repeat requests for one week and report back."),
  });

  L.panelSide({
    sec: Object.assign({}, SEC.rea, { label: "Reading 4 of 5" }),
    title: "Reading 2 — a stress-marked text", sub: "Read it aloud. The CAPITALS are the strong syllables.",
    panelW: 7.2,
    panel: { label: "Read aloud, tapping the capitals", color: C.read, tint: C.readTint, size: 16.5, lsm: 1.34,
      text: "“I have five YEARS of ex-PE-ri-ence in\nde-VEL-op-ment WORK. I started as a\nvol-un-TEER, and then I had the\nop-por-TU-ni-ty to MAN-age a small\nPRO-ject in a-DA-ma.\n\nIt was not COM-fort-a-ble at first, but\nit was NE-ce-ssa-ry, and I LEARNED a\nlot from it.”" },
    side: { label: "Your task", color: C.read, size: 15.5, items: [
      "Read it aloud, tapping every capital.",
      "Find all five vocabulary words.",
      "Which word has the stress on the LAST syllable?",
      "How many syllables do you SAY in “comfortable”?",
      "Now read it again without looking at the capitals.",
    ] },
    notes: tn({
      time: "13 minutes.",
      how: "Task 5 is the real test. Reading with the stress marked is easy; reproducing it from memory is what shows the pattern has been learned.",
      mistakes: "Learners tap on every syllable. One tap per word, on the strong syllable only.",
      extra: "“volunTEER” is the -eer ending from slide 16 — stress on the ending itself. It is the only such word in the passage.",
      tip: "This passage is also a model interview answer. It reappears in Module 7, so learners are rehearsing content as well as sound.",
      activity: "Mark it yourself: give an unmarked paragraph and have learners mark the stress before reading it aloud.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.rea, { label: "Reading 5 of 5" }),
    title: "Reading 2 — answers and vocabulary review", sub: "Five words, five stress patterns.",
    size: 16.5,
    items: [
      { q: "1 — the five vocabulary words", a: "experience · development · opportunity · comfortable · necessary.", why: "All five appear naturally in one short professional answer, which is exactly where you will need them." },
      { q: "2 — stress on the LAST syllable", a: "“volunteer” — vol-un-TEER.", why: "The -eer ending takes the stress itself, like employee and engineer. It is the exception from slide 16." },
      { q: "3 — syllables in “comfortable”", a: "Three when spoken: COMF-t'-bl.", why: "The spelling shows four. The “or” disappears entirely in normal speech." },
      { q: "4 — which two have stress on the second syllable?", a: "ex-PE-ri-ence and de-VEL-op-ment.", why: "Both are extremely common at work and both are usually stressed wrongly at the front." },
      { q: "5 — where is the stress in “opportunity”?", a: "The third syllable: op-por-TU-ni-ty.", why: "The -ity rule from slide 16: two syllables before the ending. Same as ability and security." },
    ],
    notes: keyNotes("Have three learners read the passage aloud without the capitals. The class marks which words were stressed correctly — peer assessment works well for stress because it is audible."),
  });

  // ============================================================ 46–50 · WRITING
  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 1 of 5" }),
    title: "Writing 1 — mark the stress", sub: "Write each word and underline the strong syllable.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Use the rules from slide 16. Then say each word aloud.",
    items: [
      "1.  information  ·  education  ·  decision",
      "2.  opportunity  ·  ability  ·  security",
      "3.  economic  ·  political  ·  specific",
      "4.  employee  ·  engineer  ·  volunteer",
      "5.  experience  ·  development  ·  necessary",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Rows 1 to 4 are rule-based and should be predicted, not recalled. Row 5 must be learned individually.",
      answers: "1 informATion, educATion, deCIsion · 2 opporTUnity, aBILity, seCUrity · 3 ecoNOMic, poLITical, sPECific · 4 employEE, engineER, voluntEER · 5 exPErience, deVELopment, NEcessary",
      mistakes: "Row 5 is the hard one — “necessary” takes the stress at the front while the other two take it on the second syllable.",
      tip: "Have learners say each word aloud as they mark it. Marking without saying trains the eye and not the mouth.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 2 of 5" }),
    title: "Writing 2 — which word is stressed?", sub: "Write the sentence and capitalise the stressed word.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "For each meaning, decide which word carries the stress.",
    items: [
      "1.  You want to say the deadline matters, not the task.  “We need it by Friday.”",
      "2.  You want to correct who wrote it.  “Sara wrote the report.”",
      "3.  You want to correct the colour.  “I said the red one.”",
      "4.  You want to know about the date, not the task.  “Can you send it today?”",
      "5.  You are denying that a particular person did it.  “I didn't say she took it.”",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Take answers by having learners SAY the sentence rather than write the capital. The point is production, and writing it proves nothing.",
      answers: "1 FRIDAY · 2 SARA · 3 RED · 4 TODAY · 5 SHE",
      mistakes: "Learners get the written answer right and then read the sentence with flat stress. Insist on hearing each one.",
      tip: "Ask what each stressed word is being contrasted with. Naming the alternative makes the rule stick.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.wri, { label: "Writing 3 of 5" }),
    title: "Writing 3 — your pronunciation plan", sub: "Two sounds, not six. Specific beats ambitious.",
    color: C.write, instFill: C.writeTint, instIcon: "FaPencilAlt",
    instruction: "Write six sentences. Use experience, opportunity, development and necessary at least once each.",
    items: [
      "1.  Which TWO of the six sounds are hardest for you? How do you know?",
      "2.  Which minimal pairs will you practise this week?",
      "3.  When and where will you do your ten minutes a day?",
      "4.  Which work words do you need to check the stress of?",
      "5.  How will you know whether it worked?",
      "6.  What will you say when somebody does not understand you?",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "Question 1 must be evidence-based — the minimal pair score from slide 37, not a feeling. Guessing which sound is weakest is usually wrong.",
      answers: "MODEL for 5: “I will count how many times people ask me to repeat in one week, and do the same test again next month. It is necessary to measure it, otherwise I will not know.”",
      mistakes: "Learners choose all six sounds. Two is the maximum that can actually be changed at once — insist on it.",
      tip: "Collect these plans and hand them back at the end of Level 3. The ones that named a time and place will have been done.",
    }),
  });

  L.answers({
    sec: Object.assign({}, SEC.wri, { label: "Writing 4 of 5" }),
    title: "Writing 3 — model answers and why", sub: "Two sounds. One measurement.",
    size: 16.5,
    items: [
      { q: "1 — which two sounds?", a: "“/v/ and /ɪ/ vs /iː/ — I scored 4 out of 8 and both errors were there.”", why: "Evidence, not a feeling. The dictation score tells you where the problem actually is." },
      { q: "2 — which pairs?", a: "“very/ferry, vote/boat, ship/sheep, live/leave.”", why: "Four pairs covering two sounds. Ten minutes a day is enough for this many and no more." },
      { q: "3 — when and where?", a: "“In the taxi to work, every morning.”", why: "A specific time attached to something you already do every day. That is how a habit survives." },
      { q: "4 — which work words?", a: "“development, opportunity, experience, necessary.”", why: "Check the stress of every new work word before learning the meaning, or you learn it twice." },
      { q: "5 — how will you know?", a: "“I will count repeat requests for a week, then again next month.”", why: "The only measurement that matters, and it needs no teacher and no equipment." },
    ],
    notes: keyNotes("Read two answers to question 1 aloud — one evidence-based and one guessed. The class hears the difference between a plan and a wish."),
  });

  L.list({
    sec: Object.assign({}, SEC.wri, { label: "Writing 5 of 5" }),
    title: "Your pronunciation checklist", sub: "Five checks, in order of importance.",
    check: true, color: C.write, size: 20,
    items: [
      { t: "Is the stress on the right syllable?", d: "The biggest single fix. Check it for every new word." },
      { t: "Are the unstressed syllables weak?", d: "Schwa. Do not pronounce every vowel clearly." },
      { t: "Are the six target sounds right?", d: "Work on two at a time, never all six." },
      { t: "Are the ends of words there?", d: "-s and -ed carry grammar nothing else can replace." },
      { t: "Does the intonation move?", d: "Down for statements, up for yes/no. Never flat." },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Use this as your correction ORDER for the rest of Level 3. Correct stress before sounds, every time.",
      tip: "Print it as a card. Learners can run all five checks on their own recording in two minutes.",
      activity: "Self-check: learners apply all five to their own recording and write down which one failed most.",
    }),
  });

  // ============================================================ 51–60 · PRACTICE
  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise A · Easy" }),
    title: "Exercise A — multiple choice", sub: "Choose the correct answer.",
    color: C.green, instruction: "Write a, b or c for each question.", size: 18,
    items: [
      { q: "1. What matters most for being understood?", opts: "a) sounding native     b) word stress     c) speaking fast" },
      { q: "2. Where is the stress in “opportunity”?", opts: "a) OP-por-tu-ni-ty     b) op-por-TU-ni-ty     c) op-por-tu-NI-ty" },
      { q: "3. How many syllables do you SAY in “comfortable”?", opts: "a) two     b) three     c) four" },
      { q: "4. “Where do you work?” — your voice should …", opts: "a) go up     b) go down     c) stay flat" },
      { q: "5. Dropping the final -ed removes …", opts: "a) nothing     b) the past tense     c) the plural" },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Answer alone, then compare in pairs before taking answers from the class.",
      answers: "1 b · 2 b · 3 b · 4 b · 5 b",
      tip: "Question 1 is the module's central claim. Anyone choosing a) needs slides 4 and 5 again.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise B · Easy" }),
    title: "Exercise B — mark the stress", sub: "Which syllable is strong?",
    color: C.green, instruction: "Write each word and mark the stressed syllable.", size: 18,
    items: [
      "1.  development",
      "2.  necessary",
      "3.  information",
      "4.  employee",
      "5.  experience",
      "6.  political",
    ],
    notes: tn({
      time: "7 minutes.",
      how: "Take answers by having learners say each word. A written mark proves nothing about production.",
      answers: "1 deVELopment · 2 NEcessary · 3 informATion · 4 employEE · 5 exPErience · 6 poLITical",
      mistakes: "Items 1 and 5 are the traps — both take second-syllable stress and both are usually said with initial stress.",
      tip: "Items 3, 4 and 6 follow rules from slide 16 and should be predicted rather than recalled.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise C · Easy" }),
    title: "Exercise C — matching", sub: "Sounds, rules and intonation.",
    color: C.green, instruction: "Write the pairs: 1–c, 2–a, and so on.", size: 17,
    items: [
      { q: "Part 1 — match the SOUND to the INSTRUCTION", opts: "1. /v/     2. /p/     3. /θ/     4. str-" },
      { q: "a) tongue between the teeth     b) lips together then a puff", opts: "c) no vowel before it     d) teeth on lip, voice on" },
      { q: "Part 2 — match the ENDING to the STRESS", opts: "1. -tion     2. -ity     3. -ee          a) two syllables before     b) on the ending     c) one syllable before" },
      { q: "Part 3 — match the SENTENCE TYPE to the INTONATION", opts: "1. statement     2. yes/no question     3. wh- question          a) up ↗     b) down ↘     c) down ↘" },
    ],
    notes: tn({
      time: "8 minutes.",
      how: "Three short tasks. Let learners work in pairs and compare.",
      answers: "Part 1: 1–d, 2–b, 3–a, 4–c.  ·  Part 2: 1–c, 2–a, 3–b.  ·  Part 3: 1–b, 2–a, 3–c.",
      tip: "Part 3 items 1 and 3 both fall, which surprises learners who expect all questions to rise.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise D · Easy" }),
    title: "Exercise D — find the schwa", sub: "Which vowels become a weak “uh”?",
    color: C.green, instruction: "Write each word and mark every schwa syllable.", size: 18,
    items: [
      "1.  banana",
      "2.  about",
      "3.  photograph",
      "4.  development",
      "5.  necessary",
    ],
    notes: tn({
      time: "8 minutes.",
      how: "The rule is mechanical: mark the stress first, then every OTHER syllable is a candidate for the schwa.",
      answers: "1 b/ə/-NA-n/ə/ — two · 2 /ə/-BOUT — one · 3 PHO-t/ə/-graph — one · 4 d/ə/-VEL-/ə/p-m/ə/nt — three · 5 NE-c/ə/-ss/ə/-r/ə/ — three",
      mistakes: "Learners mark the stressed syllable as a schwa. By definition it cannot be — stressed syllables always keep a full vowel.",
      tip: "Item 4 has three schwas in one word. Say it slowly with all three fully pronounced and ask the class how it sounds.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise E · Medium" }),
    title: "Exercise E — noun or verb?", sub: "The stress tells you which one.",
    color: C.green, instruction: "Say each sentence and mark the stress on the underlined word.", size: 17,
    items: [
      "1.  We need to record the meeting.",
      "2.  I have a record of the payment.",
      "3.  Prices will increase next month.",
      "4.  There was a big increase in sales.",
      "5.  Can you present the report on Friday?",
      "6.  I bought her a present.",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Have learners identify the word class first, then apply the rule. Nouns take the stress at the front, verbs at the back.",
      answers: "1 reCORD (verb) · 2 REcord (noun) · 3 inCREASE (verb) · 4 INcrease (noun) · 5 preSENT (verb) · 6 PREsent (noun)",
      mistakes: "Learners guess by feel. Ask them to say “is it a thing or an action?” first — the rule then applies mechanically.",
      tip: "Read the sentences aloud with the wrong stress and ask whether they still make sense. They mostly do, but they cost the listener a beat.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise F · Medium" }),
    title: "Exercise F — true or false", sub: "Write T or F. If it is false, write the correct version.",
    color: C.green, instruction: "Write T or F. For every F, write the correction.", size: 18,
    items: [
      "1.  You should try to lose your accent.",
      "2.  Wrong word stress can make a word unrecognisable.",
      "3.  You should pronounce every vowel clearly.",
      "4.  Wh- questions end with the voice going up.",
      "5.  Dropping the final -s can remove grammar the listener needs.",
      "6.  Flat intonation can sound rude.",
    ],
    notes: tn({
      time: "9 minutes.",
      how: "Correcting each false statement is what makes this teach rather than test.",
      answers: "1 F — your accent is fine; fix stress and six sounds · 2 T · 3 F — unstressed vowels become schwas · 4 F — they go down · 5 T · 6 T",
      tip: "Items 1 and 3 are the two beliefs that hold learners back. Correct both firmly and out loud.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise G · Medium" }),
    title: "Exercise G — short answer", sub: "About your own pronunciation.",
    color: C.green, instruction: "Write a complete sentence for each question.", size: 18,
    items: [
      "1.  Which two sounds are hardest for you? What is your evidence?",
      "2.  Which word do people most often ask you to repeat?",
      "3.  What will you do instead of repeating it louder?",
      "4.  Name three work words whose stress you should check.",
      "5.  How often are you asked to repeat, in a normal week?",
    ],
    notes: tn({
      time: "10 minutes.",
      how: "Question 5 is the baseline measurement. Write the class average on the board and repeat the question at the end of Level 3.",
      answers: "No fixed answers. Question 3 should name a specific technique: move the stress, spell it out, or use a different word.",
      mistakes: "Question 1 answered by feel rather than by the dictation score. Send learners back to their result from slide 37.",
      tip: "Question 2 often produces the same two or three words across a whole class. Those words are worth drilling together.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise H · Medium" }),
    title: "Exercise H — speaking tasks", sub: "Work in pairs. Your partner is the test.",
    color: C.speak, instFill: C.speakTint, instIcon: "FaMicrophone",
    instruction: "Speak. Your partner writes down what they heard.", size: 19,
    items: [
      "1.  Say eight minimal pairs. Partner writes which word they heard.",
      "2.  Say the five vocabulary words. Partner marks the stress they heard.",
      "3.  Say one sentence five ways. Partner identifies each meaning.",
      "4.  Read a short paragraph. Partner counts dropped word endings.",
    ],
    notes: tn({
      time: "13 minutes.",
      how: "In every task the partner writes down what they actually heard. That written record is the only honest test of whether a distinction was produced.",
      answers: "SUCCESS CRITERIA: 1 six or more of eight identified correctly · 2 all five stress patterns correct · 3 five distinct meanings recognised · 4 fewer than three dropped endings.",
      tip: "Task 4 is the hardest and the most useful. Endings vanish under the pressure of connected speech, which is exactly when they are needed.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise I · Difficult" }),
    title: "Exercise I — mixed challenge", sub: "Everything in the module together.",
    color: C.green, instruction: "Work in pairs. Say everything aloud — this is not a written exercise.", size: 17,
    items: [
      { q: "1. Mark the stress on twelve words your teacher gives you.", opts: "Then say all twelve." },
      { q: "2. Say the six sentences from slide 33 at full speed.", opts: "Partner counts the sounds you lost." },
      { q: "3. Read the stress-marked passage from slide 44 without the capitals.", opts: "Partner marks what they heard." },
      { q: "4. Say five noun/verb pairs in sentences.", opts: "record · increase · present · object · contract." },
      { q: "5. Speak for 60 seconds. Partner counts dropped -s and -ed endings.", opts: "Aim for fewer than three." },
    ],
    notes: tn({
      time: "18 minutes.",
      how: "Question 5 is the real test. Everything else can be done carefully; free speech is where the old habits return.",
      answers: "2 all six sounds intact at speed · 3 stress matching slide 44 · 4 verbs stressed second, nouns first · 5 fewer than three dropped endings in 60 seconds.",
      tip: "Question 2 at full speed is where learners discover that a sound they “have” disappears under pressure. That discovery is the point.",
    }),
  });

  L.questions({
    sec: Object.assign({}, SEC.pra, { label: "Exercise J · Difficult" }),
    title: "Exercise J — think and explain", sub: "There is no single right answer. Explain your thinking.",
    color: C.green, instruction: "Answer in English if you can. These test understanding, not memory.", size: 17,
    items: [
      { q: "1. Why does pronouncing every vowel clearly make you harder to understand?", opts: "Think about what the listener uses to find a word." },
      { q: "2. Why is wrong stress worse than a wrong consonant?", opts: "Which one hides the whole word?" },
      { q: "3. Should a learner try to sound British or American?", opts: "Give reasons either way." },
      { q: "4. Why is flat intonation a bigger problem than it seems?", opts: "Who will tell you about it?" },
    ],
    notes: tn({
      time: "13 minutes. Discussion, not writing.",
      how: "Question 4 is the one to end on. Nobody corrects intonation, because the listener experiences it as an attitude rather than as an error.",
      answers: "1 Listeners identify words by their stress SHAPE; full vowels everywhere destroy that shape. 2 A wrong consonant leaves the word's shape intact and is usually guessable; wrong stress makes the listener search for a word that does not exist. 3 Not as a goal — being understood matters and sounding native does not; but copying a model you hear often is a useful practice method. 4 Because it is heard as rudeness or boredom, and nobody corrects a stranger's manner — so the speaker never finds out.",
      tip: "Question 3 deserves both sides. Imitating a model is a good learning technique; sounding native is a poor goal.",
    }),
  });

  // ============================================================ 61–65 · QUIZ
  [
    { part: "Part 1 · What matters", items: [
      { q: "1. What matters most for being understood?", opts: "a) sounding native     b) word stress     c) speed" },
      { q: "2. Name two things listeners struggle with.", opts: "Two answers." },
      { q: "3. Does having an accent make you hard to understand?", opts: "Yes or no, and why." },
      { q: "4. Name the six target sounds.", opts: "Six answers." },
    ] },
    { part: "Part 2 · Word stress", items: [
      { q: "5. Mark the stress: opportunity.", opts: "Write it in syllables." },
      { q: "6. Mark the stress: development.", opts: "Write it in syllables." },
      { q: "7. Where does the stress go before -tion?", opts: "One sentence." },
      { q: "8. “I need to record it.” Which syllable is stressed?", opts: "a) RE-cord     b) re-CORD" },
    ] },
    { part: "Part 3 · The schwa and endings", items: [
      { q: "9. What is the schwa?", opts: "One sentence." },
      { q: "10. How many syllables do you SAY in “comfortable”?", opts: "a) two     b) three     c) four" },
      { q: "11. What does dropping the final -ed remove?", opts: "One answer." },
      { q: "12. How is “walked” pronounced?", opts: "One or two syllables?" },
    ] },
    { part: "Part 4 · Sentence stress and intonation", items: [
      { q: "13. “I didn't say SHE took it.” What does this mean?", opts: "One sentence." },
      { q: "14. Which way does your voice go in a wh- question?", opts: "a) up     b) down" },
      { q: "15. Which way in a yes/no question?", opts: "a) up     b) down" },
      { q: "16. How does flat intonation sound to a listener?", opts: "One or two words." },
    ] },
    { part: "Part 5 · Doing it", items: [
      { q: "17. Somebody does not understand your word. Name two things to try.", opts: "Two answers." },
      { q: "18. Name two ways to practise a sound alone.", opts: "Two answers." },
      { q: "19. How would you know your pronunciation had improved?", opts: "One sentence." },
      { q: "20. SPEAKING: say five words and five minimal pairs.", opts: "Assessed live by your teacher." },
    ] },
  ].forEach((p, i) => {
    L.questions({
      sec: Object.assign({}, SEC.qui, { label: "Quiz " + (i + 1) + " of 5" }),
      title: "Module 2 quiz — " + p.part, sub: "20 questions in total. Answer key follows. Pass mark: 16 out of 20.",
      color: C.greenDark, instFill: C.surf2, instIcon: "FaClipboardCheck",
      instruction: i === 0 ? "Write your answers on paper. Books and slides closed. Question 20 is spoken." : undefined,
      items: p.items, start: i * 4 + 1, size: 18,
      notes: quizNotes() + "\n\nQuestion 20 is assessed live: the teacher writes down what they hear, and the score is how many were identified correctly.",
    });
  });

  // ============================================================ 66–70 · ANSWER KEY
  [
    [ { q: "Q1 — what matters most", a: "b) word stress", why: "Wrong stress hides the whole word. A wrong consonant usually leaves it guessable." },
      { q: "Q2 — two struggles", a: "Stress in the wrong place, and missing sounds at the ends of words.", why: "Both are fixable and neither has anything to do with having an accent." },
      { q: "Q3 — does an accent make you hard to understand?", a: "No. Listeners cope easily with unfamiliar accents.", why: "They struggle with wrong stress and missing endings — which are different things entirely." },
      { q: "Q4 — the six sounds", a: "/v/ · /p/ · /θ/ and /ð/ · /ɪ/ and /iː/ · /æ/ and /e/ · initial clusters.", why: "Work on two at a time. Trying to fix all six at once fixes none of them." } ],
    [ { q: "Q5 — opportunity", a: "op-por-TU-ni-ty — third syllable.", why: "The -ity rule: stress falls two syllables before the ending. Same as ability and security." },
      { q: "Q6 — development", a: "de-VEL-op-ment — second syllable.", why: "Not initial stress. This is one of the two most commonly mis-stressed work words in English." },
      { q: "Q7 — before -tion", a: "On the syllable immediately before the ending.", why: "informATion, educATion, decISion. The rule holds for thousands of words." },
      { q: "Q8 — “I need to record it”", a: "b) re-CORD", why: "It is a verb here. Verbs take second-syllable stress; the noun REcord takes it at the front." } ],
    [ { q: "Q9 — the schwa", a: "A short, weak “uh” sound in unstressed syllables.", why: "The commonest sound in English. It only ever appears where there is no stress." },
      { q: "Q10 — “comfortable”", a: "b) three — COMF-t'-bl", why: "The “or” disappears completely. The spelling shows four syllables; speech has three." },
      { q: "Q11 — dropping final -ed", a: "The past tense.", why: "Nothing in the context replaces it, so the listener hears a present-tense verb in a past-tense sentence." },
      { q: "Q12 — “walked”", a: "One syllable: /wɔːkt/, ending in a /t/ sound.", why: "-ed adds a syllable only after t or d — wanted, needed. Otherwise it is just /t/ or /d/." } ],
    [ { q: "Q13 — “I didn't say SHE took it”", a: "Somebody else took it — the speaker is denying that she did.", why: "Stress marks a contrast with an unnamed alternative. The meaning is in what was not said." },
      { q: "Q14 — wh- questions", a: "b) down", why: "Rising here sounds doubtful or challenging. It is one of the commonest intonation transfer errors." },
      { q: "Q15 — yes/no questions", a: "a) up", why: "The rise is what makes it a question, especially when the word order is that of a statement." },
      { q: "Q16 — flat intonation", a: "Rude, bored or insincere.", why: "It is heard as an attitude rather than a language error, so nobody ever corrects it for you." } ],
    [ { q: "Q17 — two things to try", a: "Move the stress and repeat · spell it out · use a different word · rebuild the sentence.", why: "Repeating the same thing louder almost never works, and it is what most learners do." },
      { q: "Q18 — two solo methods", a: "Minimal pairs daily · record and compare · shadowing · look up the stress.", why: "All four are free and none needs a partner or a native speaker." },
      { q: "Q19 — how would you know?", a: "People would ask you to repeat less often.", why: "The only measurement that matters, and one you can take yourself in any ordinary week." },
      { q: "Q20 — the speaking task", a: "Assessed on what the listener writes down, not on how it felt", why: "Producing a distinction and believing you produced one are different things. Only the listener's record settles it." } ],
  ].forEach((items, i) => {
    L.answers({
      sec: Object.assign({}, SEC.key, { label: "Answer Key " + (i + 1) + " of 5" }),
      title: "Quiz answers — questions " + (i * 4 + 1) + " to " + (i * 4 + 4),
      sub: "Every answer has a reason. Read the reason, not just the answer.",
      items: items, start: i * 4 + 1, size: 17,
      notes: keyNotes("Q1, Q6 and Q14 are the diagnostic block: what actually matters, second-syllable stress, and wh- question intonation. Errors here need slides 5, 7 and 10 again."),
    });
  });

  // ============================================================ 71–73 · HOMEWORK
  L.list({
    sec: SEC.hw, title: "Homework 1 — every day this week", sub: "Ten minutes a day. Two sounds only.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["MON", "TUE", "WED", "THU", "FRI"],
    items: [
      { t: "Minimal pairs for your two hardest sounds", d: "Four pairs, twenty times each, out loud." },
      { t: "Look up the stress of ten work words", d: "Write each one in syllables with the stress marked." },
      { t: "Shadow five minutes of English audio", d: "Copy the rhythm, not the accent." },
      { t: "Record yourself reading slide 44 aloud", d: "Listen back and mark the stress you actually produced." },
      { t: "Count how many times you are asked to repeat", d: "Write the number down. This is your baseline." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Friday's task is the measurement that matters. Learners who count repeat requests get an honest, personal number that no test can give them.",
      tip: "Monday's task must be two sounds only. Learners who attempt all six make no measurable progress on any of them.",
      activity: "Ask learners to bring Friday's number to the next lesson and write the class total on the board.",
    }),
  });

  L.list({
    sec: SEC.hw, title: "Homework 2 — to hand in", sub: "Bring these to the next lesson.",
    color: C.gold, badgeInk: C.greenDeep, size: 20, labels: ["1", "2", "3"],
    items: [
      { t: "Your written pronunciation plan", d: "Six sentences, using the four target words correctly." },
      { t: "Twenty work words with the stress marked", d: "Checked in a dictionary, not guessed." },
      { t: "Record your two-minute speaking challenge", d: "Five words · six pairs · six sentences · three stress placements · 30 seconds free speech." },
    ],
    notes: tn({
      time: "3 minutes to set.",
      how: "Task 2 builds the habit that matters longest: checking stress before learning meaning. Insist the source is a dictionary.",
      mistakes: "Learners who cannot record must not be excluded. Offer the live option openly.",
      tip: "Reply to every recording by voice, saying the words back correctly. Hearing the correct version immediately after their own is what fixes it.",
    }),
  });

  L.grid({
    sec: SEC.hw, title: "How your homework will be marked", sub: "You know the standard before you start.",
    cols: 2, color: C.gold, tint: C.goldTint, line: "EFDCB2", titleSize: 20, descSize: 16,
    items: [
      { icon: "FaPencilAlt", title: "Pronunciation plan — 8 marks", desc: "Six sentences (2) · two sounds only, chosen from evidence (2) · specific time and place (2) · four target words used correctly (2)." },
      { icon: "FaFont", title: "Twenty stressed words — 7 marks", desc: "Twenty words (2) · stress marked correctly (4) · work-relevant words chosen (1)." },
      { icon: "FaMicrophone", title: "Recording — 10 marks", desc: "Five words stressed correctly (3) · six pairs distinguishable (3) · three stress placements clear (2) · endings audible in free speech (2)." },
      { icon: "FaStar", title: "Total — 25 marks", desc: "20+ excellent · 15–19 good · 10–14 keep practising · below 10 → drill two sounds daily with your teacher." },
    ],
    notes: tn({
      time: "3 minutes.",
      how: "Mark the recording by writing down what you actually hear, then comparing. Do not mark on how close it sounds to a native speaker.",
      tip: "Give the mark privately. Never read marks aloud to the class.",
      mistakes: "Do not deduct for accent. The criterion is whether a listener can identify the word, and nothing else.",
    }),
  });

  // ============================================================ 74–75 · SUMMARY
  L.grid({
    sec: SEC.sum, title: "What you learned in this module", sub: "Six things. Check each one — can you do it?",
    cols: 3, color: C.green, titleSize: 20, descSize: 15,
    items: [
      { icon: "FaBalanceScale", title: "What actually matters", desc: "Stress and six sounds. Not your accent, and not speed." },
      { icon: "FaVolumeUp", title: "The six sounds", desc: "/v/ · /p/ · /θ/ /ð/ · /ɪ/ /iː/ · /æ/ /e/ · initial clusters." },
      { icon: "FaFont", title: "Word stress", desc: "One strong syllable per word. Four rules cover thousands of words." },
      { icon: "FaFeather", title: "The schwa", desc: "Unstressed syllables go weak. Do not say every vowel clearly." },
      { icon: "FaBullseye", title: "Sentence stress", desc: "Which word you stress changes what the sentence means." },
      { icon: "FaMusic", title: "Intonation", desc: "Down for statements, up for yes/no. Never flat." },
    ],
    notes: tn({
      time: "6 minutes.",
      how: "Repeat the eight-item minimal pair dictation from slide 36 and compare scores with the first attempt. That number is the module's evidence.",
      tip: "Also revisit warm-up task 3. Have the class say “I have very good experience in development work” again and listen for the difference.",
      activity: "Quick-fire recap: point at each card and ask a different learner for one example.",
    }),
  });

  L.grid({
    sec: SEC.sum, title: "Keep these where you can see them", sub: "The pronunciation toolkit. Photograph this slide.",
    cols: 2, color: C.green, tint: C.readTint, line: "C4E0D5", titleSize: 20, descSize: 16.5, iconInline: true,
    items: [
      { icon: "FaVolumeUp", title: "The six sounds", desc: "/v/  teeth on lip, voice ON\n/p/  lips together, then a puff\n/θ/ /ð/  tongue between the teeth\n/ɪ/ /iː/  short and relaxed vs long\n/æ/ /e/  wide vs half open" },
      { icon: "FaFont", title: "Stress rules", desc: "-tion · -sion  →  one syllable before\n-ity · -ety  →  two syllables before\n-ic · -ical  →  one syllable before\n-ee · -eer  →  ON the ending\nNouns first, verbs second." },
      { icon: "FaBullseye", title: "Five checks, in order", desc: "1  Stress on the right syllable?\n2  Unstressed syllables weak?\n3  Six target sounds right?\n4  Ends of words there?\n5  Does the intonation move?" },
      { icon: "FaRedo", title: "When misunderstood", desc: "Move the stress and repeat\nSpell it: “B for Bahir Dar”\nDigits: “one five, not five zero”\nUse a different word\nRebuild the whole sentence" },
    ],
    notes: tn({
      time: "4 minutes.",
      how: "Tell learners to photograph this slide, or print the third box as a card. The five checks are the whole module in order of importance.",
      tip: "The fourth box is the one they will use in public. Print it small enough to keep in a wallet.",
      activity: "Cover each box in turn and ask the class to say what was in it.",
    }),
  });

  // ============================================================ 76 · MOTIVATION
  L.statement({
    kicker: "Congratulations",
    text: "You do not need a different accent. You need six sounds, the right stress, and endings that stay on.",
    sub: "The measure of success is not sounding native. It is how often people ask you to repeat —\nand that is a number you can count yourself, this week, without any teacher.",
    chips: ["NEXT — Module 3", "Accuracy & Common Errors", "The mistakes that survive to advanced level"],
    notes: tn({
      time: "5 minutes.",
      how: "Close on the measurement. Learners leave with a specific target of two sounds and a way to check their own progress, which is far more useful than a general instruction to practise.",
      tip: "Preview Module 3 clearly: after a whole module of ignoring errors for fluency, Module 3 goes back and fixes the ten errors that survive to advanced level. Both modes matter, and now learners have done one of each.",
      activity: "Ask every learner to name their two target sounds out loud before they leave.",
    }),
  });
};
