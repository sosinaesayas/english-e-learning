"use client";

import { CalendarDays } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { ClassCard } from "@/components/shared/class-card";
import { useClasses } from "@/lib/hooks/use-schedule";
import type { ScheduledClass } from "@/lib/types";

function isToday(iso: string) {
  const d = new Date(iso);
  const now = new Date();
  return (
    d.getFullYear() === now.getFullYear() &&
    d.getMonth() === now.getMonth() &&
    d.getDate() === now.getDate()
  );
}

function Section({
  title,
  classes,
  adminControls,
  canMarkAttendance,
  currentUserId,
}: {
  title: string;
  classes: ScheduledClass[];
  adminControls: boolean;
  canMarkAttendance: boolean;
  currentUserId?: string;
}) {
  if (classes.length === 0) return null;
  return (
    <div className="mt-6">
      <h2 className="mb-3 text-lg font-semibold">{title}</h2>
      <div className="space-y-3">
        {classes.map((cls) => (
          <ClassCard
            key={cls.id}
            cls={cls}
            adminControls={adminControls}
            canMarkAttendance={canMarkAttendance}
            currentUserId={currentUserId}
          />
        ))}
      </div>
    </div>
  );
}

export function ScheduleView({
  emptyLabel,
  adminControls = false,
  canMarkAttendance = false,
  currentUserId,
}: {
  emptyLabel: string;
  adminControls?: boolean;
  canMarkAttendance?: boolean;
  currentUserId?: string;
}) {
  const { data: classes, isLoading } = useClasses();

  const isPast = (c: ScheduledClass) => c.status === "completed" || c.status === "cancelled";

  const today = classes?.filter((c) => isToday(c.startsAt) && !isPast(c)) ?? [];
  const upcoming =
    classes?.filter((c) => !isToday(c.startsAt) && new Date(c.startsAt) > new Date() && !isPast(c)) ??
    [];
  const past = classes?.filter((c) => !today.includes(c) && !upcoming.includes(c)).reverse() ?? [];

  if (isLoading) {
    return (
      <div className="mt-6 space-y-3">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  if ((classes?.length ?? 0) === 0) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-16 text-center">
        <CalendarDays className="size-8 text-muted-foreground" />
        <p className="max-w-sm text-muted-foreground">{emptyLabel}</p>
      </div>
    );
  }

  return (
    <>
      <Section
        title="Today"
        classes={today}
        adminControls={adminControls}
        canMarkAttendance={canMarkAttendance}
        currentUserId={currentUserId}
      />
      <Section
        title="Upcoming"
        classes={upcoming}
        adminControls={adminControls}
        canMarkAttendance={canMarkAttendance}
        currentUserId={currentUserId}
      />
      <Section
        title="Past"
        classes={past}
        adminControls={adminControls}
        canMarkAttendance={canMarkAttendance}
        currentUserId={currentUserId}
      />
    </>
  );
}
