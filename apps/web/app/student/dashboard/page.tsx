import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { StudentDashboard } from "@/components/student/student-dashboard";

export default async function StudentDashboardPage() {
  const user = await requireRole(Role.Student);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Welcome, {user.name}</h1>
      <p className="mt-1 text-muted-foreground">Here&apos;s what&apos;s happening today.</p>
      <div className="mt-6">
        <StudentDashboard currentUserId={user.id} />
      </div>
    </div>
  );
}
