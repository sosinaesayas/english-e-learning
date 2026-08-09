import { Role } from "@tutor/shared";
import { requireRole } from "@/lib/auth";
import { AppShell } from "@/components/shell/app-shell";

export default async function TeacherLayout({ children }: { children: React.ReactNode }) {
  const user = await requireRole(Role.Teacher);
  return <AppShell user={user}>{children}</AppShell>;
}
