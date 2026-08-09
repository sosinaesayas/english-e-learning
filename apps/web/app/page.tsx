import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

const LEVELS = [
  { name: "Beginner English", blurb: "Alphabet, sounds, everyday basics" },
  { name: "Elementary English", blurb: "Everyday grammar and routines" },
  { name: "Intermediate English", blurb: "Fluency and accuracy building" },
  { name: "Advanced Spoken English", blurb: "Debate, negotiation, natural speech" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <header className="flex items-center justify-between px-6 py-5 sm:px-12">
        <div className="flex items-center gap-2 font-heading text-lg font-semibold">
          <GraduationCap className="size-6 text-primary" />
          English Academy
        </div>
        <Button nativeButton={false} render={<Link href="/login">Log in</Link>} />
      </header>

      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-20">
        <h1 className="max-w-2xl text-4xl sm:text-5xl font-semibold tracking-tight text-balance">
          Learn English online, one simple lesson at a time.
        </h1>
        <p className="mt-6 max-w-xl text-lg text-muted-foreground text-balance">
          Live classes, guided lessons, homework, and quizzes — for students, teachers, and
          admins, all in one clean and easy-to-use platform.
        </p>
        <Button
          size="lg"
          className="mt-8 h-12 px-8 text-base"
          nativeButton={false}
          render={<Link href="/login">Log in to your account</Link>}
        />
      </main>

      <section className="px-6 pb-20 sm:px-12">
        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">
          {LEVELS.map((level) => (
            <div
              key={level.name}
              className="rounded-xl bg-card p-6 text-left shadow-soft ring-1 ring-foreground/5"
            >
              <h3 className="font-semibold">{level.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{level.blurb}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="px-6 py-6 text-center text-sm text-muted-foreground sm:px-12">
        English Academy — a simpler place to teach and learn.
      </footer>
    </div>
  );
}
