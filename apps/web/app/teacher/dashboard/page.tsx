import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { TeacherDashboard } from "@/components/teacher/teacher-dashboard";

export default async function TeacherDashboardPage() {
  const user = await requireRole(Role.Teacher);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Welcome, {user.name}</h1>
      <p className="mt-1 text-muted-foreground">Here&apos;s what&apos;s happening today.</p>
      <div className="mt-6">
        <TeacherDashboard />
      </div>
    </div>
  );
}
