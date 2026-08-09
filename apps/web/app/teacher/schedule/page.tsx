import { ScheduleView } from "@/components/shared/schedule-view";

export default function TeacherSchedulePage() {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Schedule</h1>
      <p className="mt-1 text-muted-foreground">Your upcoming and past classes.</p>

      <ScheduleView
        canMarkAttendance
        emptyLabel="No classes scheduled yet. Once the admin schedules one for you, it'll show up here."
      />
    </div>
  );
}
