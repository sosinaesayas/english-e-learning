"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { ArrowLeft, Trash2 } from "lucide-react";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { EditUserDialog } from "@/components/admin/edit-user-dialog";
import {
  useUser,
  useAssignTeacher,
  useAssignCourse,
  useUsersByRole,
  useDeleteUser,
} from "@/lib/hooks/use-users";
import { useCourses } from "@/lib/hooks/use-courses";
import { ApiError } from "@/lib/api-client";
import { Role, UserStatus, COURSE_LEVEL_LABEL } from "@tutor/shared";

export default function StudentDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { data: student, isLoading } = useUser(id);
  const { data: teachers } = useUsersByRole(Role.Teacher, "");
  const { data: courses } = useCourses();
  const assignTeacher = useAssignTeacher(id);
  const assignCourse = useAssignCourse(id);
  const deleteUser = useDeleteUser();
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  if (isLoading || !student) {
    return <Skeleton className="h-64 w-full max-w-xl" />;
  }

  async function onDelete() {
    try {
      await deleteUser.mutateAsync(id);
      toast.success(`${student!.name} was deleted`);
      router.push("/admin/students");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not delete student");
    }
  }

  async function onAssignTeacher(teacherId: string | null) {
    if (!teacherId) return;
    try {
      await assignTeacher.mutateAsync(teacherId);
      toast.success("Teacher assigned");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not assign teacher");
    }
  }

  async function onAssignCourse(courseId: string | null) {
    if (!courseId) return;
    try {
      await assignCourse.mutateAsync(courseId);
      toast.success("Course assigned");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not assign course");
    }
  }

  return (
    <div>
      <Link
        href="/admin/students"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to students
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">{student.name}</h1>
            <Badge variant={student.status === UserStatus.Active ? "default" : "secondary"}>
              {student.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">{student.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <EditUserDialog user={student} />
          <Button variant="outline" onClick={() => setConfirmDeleteOpen(true)}>
            <Trash2 className="size-4" />
            Delete
          </Button>
        </div>
      </div>

      <ConfirmDialog
        open={confirmDeleteOpen}
        onOpenChange={setConfirmDeleteOpen}
        title={`Delete ${student.name}?`}
        description="This permanently deletes their account and removes them from any assigned teacher or course. This can't be undone."
        confirmLabel="Delete student"
        onConfirm={onDelete}
      />

      <div className="mt-6 grid gap-4 sm:grid-cols-2 max-w-2xl">
        <Card>
          <CardHeader>
            <CardTitle className="text-base">Assigned teacher</CardTitle>
          </CardHeader>
          <CardContent>
            <Label className="sr-only">Teacher</Label>
            <Select value={student.assignedTeacherId ?? ""} onValueChange={onAssignTeacher}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a teacher">
                  {(value: string | null) =>
                    value ? teachers?.find((t) => t.id === value)?.name : "Select a teacher"
                  }
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {teachers?.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-base">Assigned course</CardTitle>
          </CardHeader>
          <CardContent>
            <Label className="sr-only">Course</Label>
            <Select value={student.courseId ?? ""} onValueChange={onAssignCourse}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a course">
                  {(value: string | null) => {
                    if (!value) return "Select a course";
                    const course = courses?.find((c) => c._id === value);
                    return course
                      ? (COURSE_LEVEL_LABEL[course.level as 1 | 2 | 3 | 4] ?? course.title)
                      : null;
                  }}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                {courses?.map((c) => (
                  <SelectItem key={c._id} value={c._id}>
                    {COURSE_LEVEL_LABEL[c.level as 1 | 2 | 3 | 4] ?? c.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
