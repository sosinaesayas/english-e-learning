"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { useDeleteHomework, useGradeHomework, useSubmitHomework } from "@/lib/hooks/use-homework";
import { ApiError } from "@/lib/api-client";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";
import type { Homework } from "@/lib/types";

function dueDateLabel(dueDate: string) {
  return new Date(dueDate).toLocaleDateString(undefined, {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function courseLabel(course: Homework["course"]) {
  if (!course) return "Deleted course";
  return COURSE_LEVEL_LABEL[course.level as 1 | 2 | 3 | 4] ?? course.title;
}

function TeacherRow({ homework, student }: { homework: Homework; student: Homework["students"][number] }) {
  const submission = homework.submissions.find((s) => s.studentId === student.id);
  const gradeHomework = useGradeHomework(homework.id);
  const [grading, setGrading] = useState(false);
  const [grade, setGrade] = useState("");
  const [feedback, setFeedback] = useState("");

  async function onGrade() {
    const gradeNum = Number(grade);
    if (!Number.isInteger(gradeNum) || gradeNum < 0 || gradeNum > 100) {
      toast.error("Enter a grade between 0 and 100");
      return;
    }
    try {
      await gradeHomework.mutateAsync({ studentId: student.id, grade: gradeNum, feedback });
      toast.success("Grade saved");
      setGrading(false);
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not save grade");
    }
  }

  return (
    <div className="rounded-lg border p-3">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-sm font-medium">{student.name}</span>
        {!submission && (
          <Badge variant="outline" className="text-muted-foreground">
            Not submitted
          </Badge>
        )}
        {submission && submission.grade === undefined && !grading && (
          <Badge variant="secondary">Submitted — ungraded</Badge>
        )}
        {submission && submission.grade !== undefined && (
          <Badge>{submission.grade}%</Badge>
        )}
      </div>

      {submission && (
        <p className="mt-2 text-sm text-muted-foreground">{submission.text}</p>
      )}

      {submission && submission.grade === undefined && (
        <div className="mt-3">
          {grading ? (
            <div className="space-y-2">
              <div className="grid grid-cols-[100px_1fr] gap-2">
                <div className="space-y-1">
                  <Label className="text-xs">Grade (%)</Label>
                  <Input
                    type="number"
                    min={0}
                    max={100}
                    value={grade}
                    onChange={(e) => setGrade(e.target.value)}
                  />
                </div>
                <div className="space-y-1">
                  <Label className="text-xs">Feedback (optional)</Label>
                  <Input value={feedback} onChange={(e) => setFeedback(e.target.value)} />
                </div>
              </div>
              <div className="flex gap-2">
                <Button type="button" size="sm" onClick={onGrade} disabled={gradeHomework.isPending}>
                  {gradeHomework.isPending ? "Saving…" : "Save grade"}
                </Button>
                <Button type="button" size="sm" variant="ghost" onClick={() => setGrading(false)}>
                  Cancel
                </Button>
              </div>
            </div>
          ) : (
            <Button type="button" size="sm" variant="outline" onClick={() => setGrading(true)}>
              Grade
            </Button>
          )}
        </div>
      )}

      {submission?.feedback && (
        <p className="mt-2 text-sm text-muted-foreground">Feedback: {submission.feedback}</p>
      )}
    </div>
  );
}

function StudentSubmission({ homework, currentUserId }: { homework: Homework; currentUserId: string }) {
  const mySubmission = homework.submissions.find((s) => s.studentId === currentUserId);
  const submitHomework = useSubmitHomework(homework.id);
  const [text, setText] = useState(mySubmission?.text ?? "");
  const graded = mySubmission?.grade !== undefined;

  async function onSubmit() {
    if (!text.trim()) return;
    try {
      await submitHomework.mutateAsync(text);
      toast.success(mySubmission ? "Submission updated" : "Homework submitted");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not submit homework");
    }
  }

  if (graded) {
    return (
      <div className="mt-3 space-y-2 rounded-lg border p-3">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium">Your submission</span>
          <Badge>{mySubmission!.grade}%</Badge>
        </div>
        <p className="text-sm text-muted-foreground">{mySubmission!.text}</p>
        {mySubmission!.feedback && (
          <p className="text-sm text-muted-foreground">Feedback: {mySubmission!.feedback}</p>
        )}
      </div>
    );
  }

  return (
    <div className="mt-3 space-y-2">
      {mySubmission && (
        <Badge variant="secondary" className="mb-1">
          Submitted — awaiting grade
        </Badge>
      )}
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Write your answer…"
      />
      <Button type="button" size="sm" onClick={onSubmit} disabled={submitHomework.isPending}>
        {submitHomework.isPending
          ? "Submitting…"
          : mySubmission
            ? "Update submission"
            : "Submit"}
      </Button>
    </div>
  );
}

export function HomeworkCard({
  homework,
  viewAs,
  currentUserId,
}: {
  homework: Homework;
  viewAs: "teacher" | "student";
  currentUserId?: string;
}) {
  const deleteHomework = useDeleteHomework();
  const [confirmOpen, setConfirmOpen] = useState(false);

  async function onDelete() {
    try {
      await deleteHomework.mutateAsync(homework.id);
      toast.success("Homework removed");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not remove homework");
    }
  }

  return (
    <Card>
      <CardContent>
        <div className="flex flex-wrap items-start justify-between gap-2">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">{homework.title}</span>
              <Badge variant="outline">{courseLabel(homework.course)}</Badge>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              Due {dueDateLabel(homework.dueDate)}
            </p>
            {homework.description && (
              <p className="mt-2 text-sm text-muted-foreground">{homework.description}</p>
            )}
          </div>
          {viewAs === "teacher" && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              title="Delete homework"
              onClick={() => setConfirmOpen(true)}
            >
              <Trash2 className="size-4 text-destructive" />
            </Button>
          )}
        </div>

        {viewAs === "teacher" && (
          <div className="mt-4 space-y-2">
            {homework.students.map((student) => (
              <TeacherRow key={student.id} homework={homework} student={student} />
            ))}
          </div>
        )}

        {viewAs === "student" && currentUserId && (
          <StudentSubmission homework={homework} currentUserId={currentUserId} />
        )}
      </CardContent>

      {viewAs === "teacher" && (
        <ConfirmDialog
          open={confirmOpen}
          onOpenChange={setConfirmOpen}
          title="Delete this homework?"
          description="This removes it and any student submissions. This can't be undone."
          confirmLabel="Delete homework"
          onConfirm={onDelete}
        />
      )}
    </Card>
  );
}
