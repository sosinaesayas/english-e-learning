"use client";

import { useState } from "react";
import { toast } from "sonner";
import { ClipboardCheck } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMedia,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useMarkAttendance } from "@/lib/hooks/use-schedule";
import { ApiError } from "@/lib/api-client";
import type { AttendanceStatus, ScheduledClass } from "@/lib/types";

const STATUSES: { value: AttendanceStatus; label: string }[] = [
  { value: "present", label: "Present" },
  { value: "absent", label: "Absent" },
  { value: "late", label: "Late" },
];

export function AttendanceEditor({
  cls,
  open,
  onOpenChange,
}: {
  cls: ScheduledClass;
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const markAttendance = useMarkAttendance(cls.id);
  const [statuses, setStatuses] = useState<Record<string, AttendanceStatus | undefined>>(() =>
    Object.fromEntries(cls.attendance.map((a) => [a.studentId, a.status])),
  );

  async function onSave() {
    const records = Object.entries(statuses)
      .filter((entry): entry is [string, AttendanceStatus] => !!entry[1])
      .map(([studentId, status]) => ({ studentId, status }));
    try {
      await markAttendance.mutateAsync(records);
      toast.success("Attendance saved");
      onOpenChange(false);
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not save attendance");
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogMedia variant="primary">
            <ClipboardCheck className="size-5" />
          </DialogMedia>
          <DialogTitle>Mark attendance</DialogTitle>
          <DialogDescription>Set each student&apos;s status for this class.</DialogDescription>
        </DialogHeader>

        <div className="space-y-3">
          {cls.students.map((student) => (
            <div key={student.id} className="flex items-center justify-between gap-2">
              <span className="text-sm font-medium">{student.name}</span>
              <div className="flex gap-1.5">
                {STATUSES.map((s) => (
                  <Button
                    key={s.value}
                    type="button"
                    size="sm"
                    variant={statuses[student.id] === s.value ? "default" : "outline"}
                    onClick={() =>
                      setStatuses((prev) => ({ ...prev, [student.id]: s.value }))
                    }
                  >
                    {s.label}
                  </Button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <DialogFooter>
          <Button type="button" onClick={onSave} disabled={markAttendance.isPending}>
            {markAttendance.isPending ? "Saving…" : "Save attendance"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
