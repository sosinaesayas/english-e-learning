"use strict";
/* Generic module builder:  node make.js L1-M3  */
const path = require("path");
const { prepIcons, makeDeck } = require("./theme");

const MODULES = {
  "L1-M1": { title: "The English Alphabet & Sounds", n: 1, file: "L1-M1-The-English-Alphabet-and-Sounds" },
  "L1-M2": { title: "Numbers, Time & Money",         n: 2, file: "L1-M2-Numbers-Time-and-Money" },
  "L1-M3": { title: "Greetings & Introductions",     n: 3, file: "L1-M3-Greetings-and-Introductions" },
  "L1-M4": { title: "Everyday Vocabulary",           n: 4, file: "L1-M4-Everyday-Vocabulary" },
  "L1-M5": { title: "Simple Sentences",              n: 5, file: "L1-M5-Simple-Sentences" },
  "L1-M6": { title: "First Conversations & Review",  n: 6, file: "L1-M6-First-Conversations-and-Review" },
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
  "FaHeart","FaExchangeAlt","FaBox","FaMapMarkedAlt","FaRegSmile","FaThumbsUp","FaBalanceScale",
];

(async () => {
  const id = process.argv[2];
  const m = MODULES[id];
  if (!m) { console.error("Unknown module: " + id); process.exit(1); }
  await prepIcons(ICONS);
  const ctx = makeDeck({
    title: "Level 1 · Module " + m.n + " — " + m.title,
    subject: "English course for Ethiopian learners — Level 1 Beginner",
    author: "English Learning Platform", company: "English Learning Platform",
    foot: "Level 1 · Beginner English · Module " + m.n + " — " + m.title,
  });
  const L = require("./layouts")(ctx);
  require("./" + id)(ctx, L);
  const out = path.join(__dirname, m.file + ".pptx");
  await ctx.pres.writeFile({ fileName: out });
  console.log(id + ": " + ctx.n + " slides → " + m.file + ".pptx");
})().catch((e) => { console.error(e); process.exit(1); });
