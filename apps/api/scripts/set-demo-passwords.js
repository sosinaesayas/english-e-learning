// One-off script to set/reset the three demo account passwords directly in
// MongoDB. Reads MONGO_URI from apps/api/.env. Creates the account if it
// doesn't exist yet (bare minimum fields — schema defaults handle the rest),
// or just updates the password hash if it does.
//
// Usage (from apps/api/):
//   node scripts/set-demo-passwords.js

const fs = require("fs");
const path = require("path");
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");

function readMongoUri() {
  if (process.env.MONGO_URI) return process.env.MONGO_URI;
  const envPath = path.join(__dirname, "..", ".env");
  const contents = fs.readFileSync(envPath, "utf8");
  const match = contents.match(/^MONGO_URI=(.+)$/m);
  if (!match) throw new Error(`MONGO_URI not found in ${envPath}`);
  return match[1].trim();
}

const ACCOUNTS = [
  { email: "admin@englishacademy.local", name: "Admin", role: "admin", password: "TutorAdmin2026!" },
  {
    email: "teacher@englishacademy.local",
    name: "Teacher Demo",
    role: "teacher",
    password: "TutorTeacher2026!",
  },
  {
    email: "student@englishacademy.local",
    name: "Student Demo",
    role: "student",
    password: "TutorStudent2026!",
  },
];

async function main() {
  const mongoUri = readMongoUri();
  await mongoose.connect(mongoUri);
  const users = mongoose.connection.collection("users");

  for (const acc of ACCOUNTS) {
    const passwordHash = await bcrypt.hash(acc.password, 10);
    const res = await users.updateOne(
      { email: acc.email },
      {
        $set: { passwordHash },
        $setOnInsert: {
          name: acc.name,
          role: acc.role,
          status: "active",
          mustResetPassword: false,
          tokenVersion: 0,
          completedLessonIds: [],
        },
      },
      { upsert: true },
    );
    const action = res.upsertedCount ? "created" : "updated";
    console.log(`${acc.name} (${acc.email}): ${action} -> password: ${acc.password}`);
  }

  await mongoose.disconnect();
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
