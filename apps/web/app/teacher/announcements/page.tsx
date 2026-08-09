import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { AnnouncementForm } from "@/components/teacher/announcement-form";
import { AnnouncementsList } from "@/components/teacher/announcements-list";

export default async function TeacherAnnouncementsPage() {
  await requireRole(Role.Teacher);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Announcements</h1>
      <p className="mt-1 text-muted-foreground">
        Post updates that your assigned students will see on their dashboard.
      </p>
      <div className="mt-6 max-w-lg space-y-4">
        <AnnouncementForm />
        <AnnouncementsList />
      </div>
    </div>
  );
}
