"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { HomeworkCard } from "@/components/homework/homework-card";
import { useHomework } from "@/lib/hooks/use-homework";

export function TeacherHomeworkList() {
  const { data: homework, isLoading } = useHomework();

  if (isLoading) {
    return (
      <div className="mt-6 space-y-3">
        <Skeleton className="h-24 w-full" />
        <Skeleton className="h-24 w-full" />
      </div>
    );
  }

  if (!homework || homework.length === 0) {
    return (
      <div className="mt-6 rounded-lg border border-dashed p-10 text-center text-muted-foreground">
        No homework assigned yet — click &quot;New Homework&quot; to assign the first one.
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-3">
      {homework.map((hw) => (
        <HomeworkCard key={hw.id} homework={hw} viewAs="teacher" />
      ))}
    </div>
  );
}
