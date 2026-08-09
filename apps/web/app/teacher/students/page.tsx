import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { StudentsTable } from "@/components/teacher/students-table";

export default async function TeacherStudentsPage() {
  await requireRole(Role.Teacher);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Students</h1>
      <p className="mt-1 text-muted-foreground">Your assigned students.</p>
      <div className="mt-6">
        <StudentsTable />
      </div>
    </div>
  );
}
