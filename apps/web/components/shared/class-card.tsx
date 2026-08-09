"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Video, Users, Trash2, Ban, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { AttendanceEditor } from "@/components/teacher/attendance-editor";
import { useCancelClass, useDeleteClass } from "@/lib/hooks/use-schedule";
import { ApiError } from "@/lib/api-client";
import type { ScheduledClass } from "@/lib/types";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";

const STATUS_VARIANT: Record<ScheduledClass["status"], "default" | "secondary" | "destructive"> = {
  live: "default",
  upcoming: "secondary",
  completed: "secondary",
  cancelled: "destructive",
};

const ATTENDANCE_LABEL: Record<string, string> = {
  present: "Present",
  absent: "Absent",
  late: "Late",
};

export function ClassCard({
  cls,
  adminControls = false,
  canMarkAttendance = false,
  currentUserId,
}: {
  cls: ScheduledClass;
  /** Show the cancel/delete admin actions. Off by default for teacher/student read-only views. */
  adminControls?: boolean;
  /** Show the "Attendance" button (teacher schedule view only). */
  canMarkAttendance?: boolean;
  /** When set and the viewer is a student, shows their own attendance status. */
  currentUserId?: string;
}) {
  const cancelClass = useCancelClass();
  const deleteClass = useDeleteClass();
  const [confirmCancelOpen, setConfirmCancelOpen] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);
  const [attendanceOpen, setAttendanceOpen] = useState(false);
  const myAttendance = currentUserId
    ? cls.attendance.find((a) => a.studentId === currentUserId)
    : undefined;

  const start = new Date(cls.startsAt);
  const dateLabel = start.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
  const timeLabel = start.toLocaleTimeString(undefined, {
    hour: "numeric",
    minute: "2-digit",
  });

  async function onCancel() {
    try {
      await cancelClass.mutateAsync(cls.id);
      toast.success("Class cancelled");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not cancel class");
    }
  }

  async function onDelete() {
    try {
      await deleteClass.mutateAsync(cls.id);
      toast.success("Class removed");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not remove class");
    }
  }

  return (
    <Card>
      <CardContent className="flex flex-wrap items-center justify-between gap-4 p-4">
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <span className="font-semibold">
              {cls.course
                ? (COURSE_LEVEL_LABEL[cls.course.level as 1 | 2 | 3 | 4] ?? cls.course.title)
                : "Deleted course"}
            </span>
            <Badge variant={STATUS_VARIANT[cls.status]} className="capitalize">
              {cls.status}
            </Badge>
            {myAttendance && (
              <Badge variant="outline">{ATTENDANCE_LABEL[myAttendance.status]}</Badge>
            )}
          </div>
          <p className="mt-1 text-sm text-muted-foreground">
            {dateLabel} · {timeLabel} · {cls.durationMinutes} min · {cls.teacher?.name ?? "Unassigned"}
          </p>
          <p className="mt-1 flex items-center gap-1.5 text-sm text-muted-foreground">
            <Users className="size-3.5" />
            {cls.students.length
              ? cls.students.map((s) => s.name).join(", ")
              : "No students"}
          </p>
        </div>

        <div className="flex shrink-0 items-center gap-2">
          <Button
            type="button"
            variant="outline"
            nativeButton={false}
            render={
              <a href={cls.meetLink} target="_blank" rel="noreferrer">
                <Video className="size-4" />
                Join Meeting
              </a>
            }
          />
          {canMarkAttendance && cls.status !== "cancelled" && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              title="Mark attendance"
              onClick={() => setAttendanceOpen(true)}
            >
              <ClipboardCheck className="size-4 text-muted-foreground" />
            </Button>
          )}
          {adminControls && cls.status !== "cancelled" && cls.status !== "completed" && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              title="Cancel class"
              onClick={() => setConfirmCancelOpen(true)}
            >
              <Ban className="size-4 text-muted-foreground" />
            </Button>
          )}
          {adminControls && (
            <Button
              type="button"
              variant="ghost"
              size="icon-sm"
              title="Delete class"
              onClick={() => setConfirmDeleteOpen(true)}
            >
              <Trash2 className="size-4 text-destructive" />
            </Button>
          )}
        </div>
      </CardContent>

      {adminControls && (
        <>
          <ConfirmDialog
            open={confirmCancelOpen}
            onOpenChange={setConfirmCancelOpen}
            title="Cancel this class?"
            description="Students and the teacher will see it marked as cancelled. You can still delete it later if it was scheduled by mistake."
            confirmLabel="Cancel class"
            variant="primary"
            onConfirm={onCancel}
          />
          <ConfirmDialog
            open={confirmDeleteOpen}
            onOpenChange={setConfirmDeleteOpen}
            title="Delete this class?"
            description="This permanently removes it from the schedule. This can't be undone."
            confirmLabel="Delete class"
            onConfirm={onDelete}
          />
        </>
      )}

      {canMarkAttendance && (
        <AttendanceEditor cls={cls} open={attendanceOpen} onOpenChange={setAttendanceOpen} />
      )}
    </Card>
  );
}
