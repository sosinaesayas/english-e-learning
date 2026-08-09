"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { QuizCard } from "@/components/quiz/quiz-card";
import { useQuizzes } from "@/lib/hooks/use-quizzes";

export function StudentQuizList() {
  const { data: quizzes, isLoading } = useQuizzes();

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
        No quizzes yet.
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {quizzes.map((quiz) => (
        <QuizCard key={quiz.id} quiz={quiz} viewAs="student" />
      ))}
    </div>
  );
}
