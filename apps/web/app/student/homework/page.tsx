import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { StudentHomeworkList } from "@/components/student/homework-list";

export default async function StudentHomeworkPage() {
  const user = await requireRole(Role.Student);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Homework</h1>
      <p className="mt-1 text-muted-foreground">Assignments from your teacher.</p>
      <StudentHomeworkList currentUserId={user.id} />
    </div>
  );
}
