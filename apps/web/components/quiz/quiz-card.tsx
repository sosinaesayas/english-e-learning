"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Trash2, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { useAttemptQuiz, useDeleteQuiz } from "@/lib/hooks/use-quizzes";
import { ApiError } from "@/lib/api-client";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";
import type { Quiz } from "@/lib/types";

function courseLabel(course: Quiz["course"]) {
  if (!course) return "Deleted course";
  return COURSE_LEVEL_LABEL[course.level as 1 | 2 | 3 | 4] ?? course.title;
}

function StudentQuizForm({ quiz }: { quiz: Quiz }) {
  const attemptQuiz = useAttemptQuiz(quiz.id);
  const [answers, setAnswers] = useState<(number | undefined)[]>(
    () => quiz.questions.map(() => undefined),
  );

  async function onSubmit() {
    if (answers.some((a) => a === undefined)) {
      toast.error("Answer every question first");
      return;
    }
    try {
      await attemptQuiz.mutateAsync(answers as number[]);
      toast.success("Quiz submitted");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not submit quiz");
    }
  }

  return (
    <div className="mt-4 space-y-4">
      {quiz.questions.map((q, qIndex) => (
        <div key={qIndex}>
          <p className="text-sm font-medium">{q.text}</p>
          <div className="mt-2 space-y-1.5">
            {q.options.map((option, optIndex) => (
              <label
                key={optIndex}
                className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted/60"
              >
                <input
                  type="radio"
                  name={`quiz-${quiz.id}-q${qIndex}`}
                  checked={answers[qIndex] === optIndex}
                  onChange={() =>
                    setAnswers((prev) => prev.map((a, i) => (i === qIndex ? optIndex : a)))
                  }
                  className="size-4 accent-primary"
                />
                {option}
              </label>
            ))}
          </div>
        </div>
      ))}
      <Button type="button" size="sm" onClick={onSubmit} disabled={attemptQuiz.isPending}>
        {attemptQuiz.isPending ? "Submitting…" : "Submit quiz"}
      </Button>
    </div>
  );
}

function StudentQuizResult({ quiz }: { quiz: Quiz }) {
  const attempt = quiz.myAttempt!;
  return (
    <div className="mt-4 space-y-4">
      <div className="flex items-center gap-2">
        <Badge>{attempt.score}%</Badge>
        <span className="text-sm text-muted-foreground">
          Submitted {new Date(attempt.submittedAt).toLocaleDateString()}
        </span>
      </div>
      {quiz.questions.map((q, qIndex) => {
        const myAnswer = attempt.answers[qIndex];
        const correct = myAnswer === q.correctIndex;
        return (
          <div key={qIndex}>
            <p className="flex items-center gap-1.5 text-sm font-medium">
              {correct ? (
                <CheckCircle2 className="size-4 shrink-0 text-primary" />
              ) : (
                <XCircle className="size-4 shrink-0 text-destructive" />
              )}
              {q.text}
            </p>
            <div className="mt-1 ml-5.5 space-y-1 text-sm">
              {q.options.map((option, optIndex) => (
                <p
                  key={optIndex}
                  className={
                    optIndex === q.correctIndex
                      ? "font-medium text-primary"
                      : optIndex === myAnswer
                        ? "text-destructive"
                        : "text-muted-foreground"
                  }
                >
                  {option}
                  {optIndex === q.correctIndex && " (correct)"}
                  {optIndex === myAnswer && optIndex !== q.correctIndex && " (your answer)"}
                </p>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

function TeacherAttempts({
  quiz,
  studentNames,
}: {
  quiz: Quiz;
  studentNames: Record<string, string>;
}) {
  if (quiz.attempts.length === 0) {
    return <p className="mt-3 text-sm text-muted-foreground">No attempts yet.</p>;
  }
  return (
    <div className="mt-3 space-y-1.5">
      {quiz.attempts.map((a) => (
        <div key={a.studentId} className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">{studentNames[a.studentId] ?? "Student"}</span>
          <Badge variant="outline">{a.score}%</Badge>
        </div>
      ))}
    </div>
  );
}

export function QuizCard({
  quiz,
  viewAs,
  studentNames = {},
}: {
  quiz: Quiz;
  viewAs: "teacher" | "student";
  studentNames?: Record<string, string>;
}) {
  const deleteQuiz = useDeleteQuiz();
  const [confirmOpen, setConfirmOpen] = useState(false);

  async function onDelete() {
    try {
      await deleteQuiz.mutateAsync(quiz.id);
      toast.success("Quiz removed");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not remove quiz");
    }
  }

  return (
    <Card>
      <CardContent>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">{quiz.title}</span>
            <Badge variant="outline">{courseLabel(quiz.course)}</Badge>
            <span className="text-xs text-muted-foreground">
              {quiz.questions.length} question{quiz.questions.length === 1 ? "" : "s"}
            </span>
          </div>
          {viewAs === "teacher" && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              title="Delete quiz"
              onClick={() => setConfirmOpen(true)}
            >
              <Trash2 className="size-4 text-destructive" />
            </Button>
          )}
        </div>

        {viewAs === "teacher" && <TeacherAttempts quiz={quiz} studentNames={studentNames} />}
        {viewAs === "student" &&
          (quiz.myAttempt ? <StudentQuizResult quiz={quiz} /> : <StudentQuizForm quiz={quiz} />)}
      </CardContent>

      {viewAs === "teacher" && (
        <ConfirmDialog
          open={confirmOpen}
          onOpenChange={setConfirmOpen}
          title="Delete this quiz?"
          description="This removes it and every student's attempt. This can't be undone."
          confirmLabel="Delete quiz"
          onConfirm={onDelete}
        />
      )}
    </Card>
  );
}
