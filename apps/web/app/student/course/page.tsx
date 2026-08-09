import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { LessonList } from "@/components/student/lesson-list";

export default async function StudentCoursePage() {
  await requireRole(Role.Student);
  return (
    <div>
      <h1 className="text-2xl font-semibold">My Course</h1>
      <p className="mt-1 text-muted-foreground">Your modules, lessons, and materials.</p>
      <div className="mt-6">
        <LessonList />
      </div>
    </div>
  );
}
