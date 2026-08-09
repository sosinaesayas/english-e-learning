"use strict";
/* Shared section identities and the teacher-note formatter, used by every module */
const { C } = require("./theme");

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

// standard guided-example / answer-key note text
function gexNotes() {
  return tn({
    time: "6 minutes per slide.",
    how: "Cover the answer and ask the class first. Take answers from two learners before revealing. Then read the WHY aloud — the reason is the teaching, not the answer.",
    mistakes: "Do not let learners copy the answer without hearing the reason. A learner who knows the answer but not the reason cannot do the next one.",
    tip: "If most of the class gets an item wrong, go back to that concept slide before continuing. These examples are a diagnostic as much as a practice.",
    activity: "Ask a learner who answered correctly to explain the WHY in their own words before you read the slide.",
  });
}

function quizNotes(first) {
  return tn({
    time: "4 minutes per quiz slide, 20 minutes for the whole quiz.",
    how: "Run the whole quiz before showing any answers. Learners write answers on paper and number them 1 to 20. The final question is spoken and is assessed by you or by a partner.",
    tip: "Pass mark is 16 out of 20. A learner below that should redo Exercises A to F, not repeat the whole module.",
    mistakes: "Do not let learners mark their own paper before the answer key. Collect the papers or have them swap.",
  });
}

function keyNotes(diagnostic) {
  return tn({
    time: "4 minutes per slide.",
    how: "Read the answer, then the WHY aloud. Ask learners to raise a hand for each one they got wrong — you are collecting data on what to re-teach, not judging anyone. Say so.",
    tip: diagnostic || "Note which questions the class failed most. That list is your plan for the first ten minutes of the next lesson.",
    mistakes: "Do not simply read the answers and move on. The explanation is where the learning happens — a learner who hears only “b” learns nothing.",
  });
}

module.exports = { SEC, tn, gexNotes, quizNotes, keyNotes };
