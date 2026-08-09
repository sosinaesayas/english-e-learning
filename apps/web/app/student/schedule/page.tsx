import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { ScheduleView } from "@/components/shared/schedule-view";

export default async function StudentSchedulePage() {
  const user = await requireRole(Role.Student);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Schedule</h1>
      <p className="mt-1 text-muted-foreground">Your upcoming and past classes.</p>

      <ScheduleView
        currentUserId={user.id}
        emptyLabel="No classes scheduled yet. Once your teacher schedules one, it'll show up here."
      />
    </div>
  );
}
