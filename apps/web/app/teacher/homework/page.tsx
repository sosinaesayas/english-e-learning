import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { NewHomeworkDialog } from "@/components/teacher/new-homework-dialog";
import { TeacherHomeworkList } from "@/components/teacher/homework-list";

export default async function TeacherHomeworkPage() {
  await requireRole(Role.Teacher);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Homework</h1>
        <NewHomeworkDialog />
      </div>
      <p className="mt-1 text-muted-foreground">Assignments and submissions from your students.</p>
      <TeacherHomeworkList />
    </div>
  );
}
