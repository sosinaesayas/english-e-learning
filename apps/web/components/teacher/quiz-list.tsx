"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { QuizCard } from "@/components/quiz/quiz-card";
import { useQuizzes } from "@/lib/hooks/use-quizzes";
import { useMyStudents } from "@/lib/hooks/use-users";

export function TeacherQuizList() {
  const { data: quizzes, isLoading } = useQuizzes();
  const { data: students } = useMyStudents();
  const studentNames = Object.fromEntries((students ?? []).map((s) => [s.id, s.name]));

  if (isLoading) {
    return (
      <div className="mt-6 space-y-3">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (!quizzes || quizzes.length === 0) {
    return (
      <div className="mt-6 rounded-lg border border-dashed p-10 text-center text-muted-foreground">
        No quizzes yet — click &quot;New Quiz&quot; to create the first one.
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} viewAs="teacher" studentNames={studentNames} />
      ))}
    </div>
  );
}
