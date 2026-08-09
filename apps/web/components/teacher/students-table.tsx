"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { useMyStudents } from "@/lib/hooks/use-users";
import { useCourses } from "@/lib/hooks/use-courses";
import { useIssueCertificate } from "@/lib/hooks/use-certificates";
import { ApiError } from "@/lib/api-client";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";
import type { PublicUser } from "@/lib/types";

export function StudentsTable() {
  const { data: students, isLoading } = useMyStudents();
  const { data: courses } = useCourses();
  const issueCertificate = useIssueCertificate();
  const [target, setTarget] = useState<PublicUser | null>(null);

  const courseTitle = (courseId: string | null) => {
    if (!courseId) return "—";
    const course = courses?.find((c) => c._id === courseId);
    return course ? (COURSE_LEVEL_LABEL[course.level as 1 | 2 | 3 | 4] ?? course.title) : "—";
  };

  async function onIssue() {
    if (!target) return;
    try {
      await issueCertificate.mutateAsync(target.id);
      toast.success(`Certificate issued to ${target.name}`);
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not issue certificate");
    }
  }

  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    );
  }

  if (!students || students.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
        No students assigned to you yet.
      </div>
    );
  }

  return (
    <>
      <div className="rounded-lg bg-card shadow-soft ring-1 ring-foreground/5">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone</TableHead>
              <TableHead>Course</TableHead>
              <TableHead className="w-10" />
            </TableRow>
          </TableHeader>
          <TableBody>
            {students.map((student) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{student.name}</TableCell>
                <TableCell className="text-muted-foreground">{student.email}</TableCell>
                <TableCell className="text-muted-foreground">{student.phone ?? "—"}</TableCell>
                <TableCell className="text-muted-foreground">
                  {courseTitle(student.courseId)}
                </TableCell>
                <TableCell>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    title="Issue certificate"
                    onClick={() => setTarget(student)}
                  >
                    <Award className="size-4 text-muted-foreground" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <ConfirmDialog
        open={!!target}
        onOpenChange={(open) => !open && setTarget(null)}
        title={`Issue a certificate to ${target?.name}?`}
        description="This creates a certificate of completion for their current course. They'll be able to view and print it from their portal."
        confirmLabel="Issue certificate"
        variant="primary"
        onConfirm={onIssue}
      />
    </>
  );
}
