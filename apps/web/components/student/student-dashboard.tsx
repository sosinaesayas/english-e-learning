"use client";

import Link from "next/link";
import { CalendarClock, ClipboardList, BookOpen, GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ClassCard } from "@/components/shared/class-card";
import { AnnouncementBanner } from "@/components/student/announcement-banner";
import { useStudentDashboard } from "@/lib/hooks/use-dashboard";
import { useClasses } from "@/lib/hooks/use-schedule";
import { useMyProgress } from "@/lib/hooks/use-courses";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";

const TILES = [
  { key: "upcomingClasses" as const, label: "Upcoming Classes", icon: CalendarClock, href: "/student/schedule" },
  { key: "pendingHomework" as const, label: "Pending Homework", icon: ClipboardList, href: "/student/homework" },
];

export function StudentDashboard({ currentUserId }: { currentUserId: string }) {
  const { data, isLoading } = useStudentDashboard();
  const { data: classes, isLoading: classesLoading } = useClasses();
  const { data: progress } = useMyProgress();

  const upcoming = (classes ?? [])
    .filter((c) => c.status === "upcoming" || c.status === "live")
    .slice(0, 3);

  return (
    <div>
      <div className="grid grid-cols-2 gap-4">
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

      {!isLoading && data?.course && (
        <div className="mt-6">
          <Card>
            <CardContent>
              <div className="flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <BookOpen className="size-4.5" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Your course</p>
                    <p className="font-medium">
                      {COURSE_LEVEL_LABEL[data.course.level as 1 | 2 | 3 | 4] ?? data.course.title}
                    </p>
                  </div>
                </div>
                {data.teacher && (
                  <div className="flex items-center gap-3">
                    <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <GraduationCap className="size-4.5" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Your teacher</p>
                      <p className="font-medium">{data.teacher.name}</p>
                    </div>
                  </div>
                )}
              </div>
              {progress && progress.totalLessons > 0 && (
                <div className="mt-4">
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>Course progress</span>
                    <span>
                      {progress.completedCount}/{progress.totalLessons} lessons · {progress.percent}%
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary transition-all"
                      style={{ width: `${progress.percent}%` }}
                    />
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}

      {!isLoading && data?.latestAnnouncement && (
        <div className="mt-6">
          <AnnouncementBanner announcement={data.latestAnnouncement} />
        </div>
      )}

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
              <ClassCard key={cls.id} cls={cls} currentUserId={currentUserId} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
