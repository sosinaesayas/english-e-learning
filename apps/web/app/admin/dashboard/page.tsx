import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { DashboardStats } from "@/components/admin/dashboard-stats";

export default async function AdminDashboardPage() {
  const user = await requireRole(Role.Admin);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Welcome, {user.name}</h1>
      <p className="mt-1 text-muted-foreground">Here&apos;s what&apos;s happening today.</p>
      <div className="mt-6">
        <DashboardStats />
      </div>
    </div>
  );
}
