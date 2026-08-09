"use strict";
/* Generic module builder:  node make.js L1-M3  */
const path = require("path");
const { prepIcons, makeDeck } = require("./theme");

const LEVELS = {
  1: { name: "Beginner English",   cefr: "CEFR Pre-A1 → A1", of: 6 },
  2: { name: "Elementary English", cefr: "CEFR A1 → A2",     of: 8 },
  3: { name: "Intermediate English", cefr: "CEFR A2 → B1",   of: 8 },
};

const MODULES = {
  "L1-M1": { lvl: 1, title: "The English Alphabet & Sounds", n: 1, file: "L1-M1-The-English-Alphabet-and-Sounds" },
  "L1-M2": { lvl: 1, title: "Numbers, Time & Money",         n: 2, file: "L1-M2-Numbers-Time-and-Money" },
  "L1-M3": { lvl: 1, title: "Greetings & Introductions",     n: 3, file: "L1-M3-Greetings-and-Introductions" },
  "L1-M4": { lvl: 1, title: "Everyday Vocabulary",           n: 4, file: "L1-M4-Everyday-Vocabulary" },
  "L1-M5": { lvl: 1, title: "Simple Sentences",              n: 5, file: "L1-M5-Simple-Sentences" },
  "L1-M6": { lvl: 1, title: "First Conversations & Review",  n: 6, file: "L1-M6-First-Conversations-and-Review" },
  "L2-M1": { lvl: 2, title: "Present Simple & Daily Routine",   n: 1, file: "L2-M1-Present-Simple-and-Daily-Routine" },
  "L2-M2": { lvl: 2, title: "Present Continuous & Describing",  n: 2, file: "L2-M2-Present-Continuous-and-Describing" },
  "L2-M3": { lvl: 2, title: "Past Simple & Telling a Story",    n: 3, file: "L2-M3-Past-Simple-and-Telling-a-Story" },
  "L2-M4": { lvl: 2, title: "Future & Making Plans",            n: 4, file: "L2-M4-Future-and-Making-Plans" },
  "L2-M5": { lvl: 2, title: "Questions & Keeping a Conversation", n: 5, file: "L2-M5-Questions-and-Keeping-a-Conversation" },
  "L2-M6": { lvl: 2, title: "Reading for Meaning",              n: 6, file: "L2-M6-Reading-for-Meaning" },
  "L2-M7": { lvl: 2, title: "Listening in Real Life",           n: 7, file: "L2-M7-Listening-in-Real-Life" },
  "L2-M8": { lvl: 2, title: "Writing Everyday Texts",           n: 8, file: "L2-M8-Writing-Everyday-Texts" },
  "L3-M1": { lvl: 3, title: "Fluency Foundations",              n: 1, file: "L3-M1-Fluency-Foundations" },
  "L3-M2": { lvl: 3, title: "Pronunciation Mastery",            n: 2, file: "L3-M2-Pronunciation-Mastery" },
  "L3-M3": { lvl: 3, title: "Accuracy & Common Errors",         n: 3, file: "L3-M3-Accuracy-and-Common-Errors" },
  "L3-M4": { lvl: 3, title: "Tenses in Depth",                  n: 4, file: "L3-M4-Tenses-in-Depth" },
  "L3-M5": { lvl: 3, title: "Workplace English",                n: 5, file: "L3-M5-Workplace-English" },
  "L3-M6": { lvl: 3, title: "Presentations",                    n: 6, file: "L3-M6-Presentations" },
  "L3-M7": { lvl: 3, title: "Interviews & Employability",       n: 7, file: "L3-M7-Interviews-and-Employability" },
  "L3-M8": { lvl: 3, title: "Reading & Writing for Work",       n: 8, file: "L3-M8-Reading-and-Writing-for-Work" },
};

const ICONS = [
  "FaBullseye","FaFire","FaFlag","FaLightbulb","FaLanguage","FaSitemap","FaChalkboardTeacher",
  "FaComments","FaMicrophone","FaHeadphones","FaBookOpen","FaPencilAlt","FaDumbbell",
  "FaClipboardCheck","FaKey","FaHome","FaListUl","FaCheck","FaTimes","FaComment",
  "FaExclamationTriangle","FaStar","FaArrowRight","FaVolumeUp","FaEye","FaHandPaper","FaUsers",
  "FaBook","FaPen","FaSchool","FaShoppingBag","FaTruck","FaQuestion","FaFont","FaCertificate",
  "FaHashtag","FaClock","FaMoneyBillWave","FaCalendarAlt","FaCalendarWeek","FaPhone","FaCalculator",
  "FaTag","FaShoppingCart","FaCoins","FaUser","FaUserFriends","FaMale","FaFemale","FaMapMarkerAlt",
  "FaBriefcase","FaGraduationCap","FaHandPeace","FaUtensils","FaPalette","FaPaw","FaCloudSun",
  "FaHeartbeat","FaTshirt","FaHome","FaSun","FaTint","FaCarSide","FaSeedling","FaChild",
  "FaAppleAlt","FaBed","FaWalking","FaRunning","FaHandsHelping","FaTrophy","FaRedo","FaLayerGroup",
  "FaHeart","FaExchangeAlt","FaBox","FaEnvelope","FaMapMarkedAlt","FaRegSmile","FaThumbsUp","FaBalanceScale",
];

// Icons referenced by a module file but absent from ICONS would render as an
// empty coloured circle (theme.js ctx.icon skips a missing data URI silently),
// so scan the source and register whatever it actually uses.
function iconsUsedBy(id) {
  const src = require("fs").readFileSync(path.join(__dirname, id + ".js"), "utf8");
  const found = new Set();
  const re = /(?:instIcon|icon)\s*:\s*"(Fa[A-Za-z0-9]+)"/g;
  let mm; while ((mm = re.exec(src))) found.add(mm[1]);
  return Array.from(found);
}

(async () => {
  const id = process.argv[2];
  const m = MODULES[id];
  if (!m) { console.error("Unknown module: " + id); process.exit(1); }
  await prepIcons(ICONS.concat(iconsUsedBy(id)));
  const lv = LEVELS[m.lvl];
  const ctx = makeDeck({
    title: "Level " + m.lvl + " · Module " + m.n + " — " + m.title,
    subject: "English course for Ethiopian learners — Level " + m.lvl + " " + lv.name,
    author: "English Learning Platform", company: "English Learning Platform",
    foot: "Level " + m.lvl + " · " + lv.name + " · Module " + m.n + " — " + m.title,
  });
  ctx.lv = { no: String(m.lvl), name: lv.name, cefr: lv.cefr, mod: "Module " + m.n + " of " + lv.of };
  const L = require("./layouts")(ctx);
  require("./" + id)(ctx, L);
  const out = path.join(__dirname, m.file + ".pptx");
  await ctx.pres.writeFile({ fileName: out });
  console.log(id + ": " + ctx.n + " slides → " + m.file + ".pptx");
})().catch((e) => { console.error(e); process.exit(1); });
