"use client";

import Link from "next/link";
import { Users, CalendarDays, CalendarClock, ClipboardCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ClassCard } from "@/components/shared/class-card";
import { useTeacherDashboard } from "@/lib/hooks/use-dashboard";
import { useClasses } from "@/lib/hooks/use-schedule";

const TILES = [
  { key: "myStudentsCount" as const, label: "My Students", icon: Users, href: "/teacher/students" },
  { key: "todaysClasses" as const, label: "Today's Classes", icon: CalendarDays, href: "/teacher/schedule" },
  { key: "upcomingClasses" as const, label: "Upcoming Classes", icon: CalendarClock, href: "/teacher/schedule" },
  {
    key: "homeworkAwaitingGrading" as const,
    label: "Awaiting Grading",
    icon: ClipboardCheck,
    href: "/teacher/homework",
  },
];

export function TeacherDashboard() {
  const { data, isLoading } = useTeacherDashboard();
  const { data: classes, isLoading: classesLoading } = useClasses();

  const upcoming = (classes ?? [])
    .filter((c) => c.status === "upcoming" || c.status === "live")
    .slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {TILES.map((tile) => (
          <Link key={tile.key} href={tile.href}>
            <Card className="transition-all hover:-translate-y-0.5 hover:shadow-md">
              <CardContent className="flex flex-col gap-3 p-4">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <tile.icon className="size-4.5" />
                </div>
                {isLoading ? (
                  <Skeleton className="h-7 w-10" />
                ) : (
                  <span className="font-heading text-2xl font-semibold">
                    {data?.[tile.key] ?? 0}
                  </span>
                )}
                <span className="text-xs text-muted-foreground">{tile.label}</span>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>

      <div className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">Up next</h2>
        {classesLoading ? (
          <div className="space-y-3">
            <Skeleton className="h-20 w-full" />
          </div>
        ) : upcoming.length === 0 ? (
          <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
            No upcoming classes.
          </div>
        ) : (
          <div className="space-y-3">
            {upcoming.map((cls) => (
              <ClassCard key={cls.id} cls={cls} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
