import { NewClassDialog } from "@/components/admin/new-class-dialog";
import { ScheduleView } from "@/components/shared/schedule-view";

export default function AdminSchedulePage() {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Schedule</h1>
        <NewClassDialog />
      </div>
      <p className="mt-1 text-muted-foreground">
        Classes across every course, teacher, and student.
      </p>

      <ScheduleView
        adminControls
        emptyLabel='No classes scheduled yet — click "New Class" to schedule the first one.'
      />
    </div>
  );
}
