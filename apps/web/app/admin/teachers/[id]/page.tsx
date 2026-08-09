"use client";

import { use, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";
import { ArrowLeft, Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { EditUserDialog } from "@/components/admin/edit-user-dialog";
import { useUser, useTeacherStudents, useDeleteUser } from "@/lib/hooks/use-users";
import { UserTable } from "@/components/admin/user-table";
import { ApiError } from "@/lib/api-client";
import { UserStatus } from "@tutor/shared";

export default function TeacherDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const router = useRouter();
  const { data: teacher, isLoading } = useUser(id);
  const { data: students, isLoading: studentsLoading } = useTeacherStudents(id);
  const deleteUser = useDeleteUser();
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  if (isLoading || !teacher) {
    return <Skeleton className="h-64 w-full max-w-xl" />;
  }

  async function onDelete() {
    try {
      await deleteUser.mutateAsync(id);
      toast.success(`${teacher!.name} was deleted`);
      router.push("/admin/teachers");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not delete teacher");
    }
  }

  return (
    <div>
      <Link
        href="/admin/teachers"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to teachers
      </Link>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-3">
            <h1 className="text-2xl font-semibold">{teacher.name}</h1>
            <Badge variant={teacher.status === UserStatus.Active ? "default" : "secondary"}>
              {teacher.status}
            </Badge>
          </div>
          <p className="text-muted-foreground">{teacher.email}</p>
        </div>
        <div className="flex items-center gap-2">
          <EditUserDialog user={teacher} />
          <Button variant="outline" onClick={() => setConfirmDeleteOpen(true)}>
            <Trash2 className="size-4" />
            Delete
          </Button>
        </div>
      </div>

      <ConfirmDialog
        open={confirmDeleteOpen}
        onOpenChange={setConfirmDeleteOpen}
        title={`Delete ${teacher.name}?`}
        description="This permanently deletes their account. Any students assigned to this teacher will become unassigned. This can't be undone."
        confirmLabel="Delete teacher"
        onConfirm={onDelete}
      />

      <h2 className="mt-8 mb-3 text-lg font-semibold">Assigned students</h2>
      <UserTable
        users={students}
        isLoading={studentsLoading}
        basePath="/admin/students"
        emptyLabel="No students assigned yet."
      />
    </div>
  );
}
