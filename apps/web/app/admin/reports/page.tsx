"use client";

import { CalendarDays, CalendarClock, Radio, CheckCircle2, Ban, UserCheck, UserX, Clock, HelpCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  useEnrollmentReport,
  useTeacherReport,
  useClassStatsReport,
  useAttendanceReport,
  useQuizReport,
} from "@/lib/hooks/use-reports";

const CLASS_TILES = [
  { key: "total" as const, label: "Total Classes", icon: CalendarDays },
  { key: "upcoming" as const, label: "Upcoming", icon: CalendarClock },
  { key: "live" as const, label: "Live Now", icon: Radio },
  { key: "completed" as const, label: "Completed", icon: CheckCircle2 },
  { key: "cancelled" as const, label: "Cancelled", icon: Ban },
];

const ATTENDANCE_TILES = [
  { key: "present" as const, label: "Present", icon: UserCheck },
  { key: "absent" as const, label: "Absent", icon: UserX },
  { key: "late" as const, label: "Late", icon: Clock },
  { key: "unmarked" as const, label: "Unmarked", icon: HelpCircle },
];

export default function AdminReportsPage() {
  const { data: enrollment, isLoading: enrollmentLoading } = useEnrollmentReport();
  const { data: teachers, isLoading: teachersLoading } = useTeacherReport();
  const { data: classStats, isLoading: classStatsLoading } = useClassStatsReport();
  const { data: attendance, isLoading: attendanceLoading } = useAttendanceReport();
  const { data: quizReport, isLoading: quizLoading } = useQuizReport();

  const maxEnrollment = Math.max(1, ...(enrollment?.map((r) => r.studentCount) ?? [1]));
  const maxTeacherLoad = Math.max(1, ...(teachers?.map((t) => t.studentCount) ?? [1]));

  return (
    <div>
      <h1 className="text-2xl font-semibold">Reports</h1>
      <p className="mt-1 text-muted-foreground">
        A live snapshot of enrollment, teacher workload, and class activity.
      </p>

      <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {CLASS_TILES.map((tile) => (
          <Card key={tile.key}>
            <CardContent className="flex flex-col gap-3 p-4">
              <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <tile.icon className="size-4.5" />
              </div>
              {classStatsLoading ? (
                <Skeleton className="h-7 w-10" />
              ) : (
                <span className="font-heading text-2xl font-semibold">
                  {classStats?.[tile.key] ?? 0}
                </span>
              )}
              <span className="text-xs text-muted-foreground">{tile.label}</span>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <div>
          <h2 className="mb-3 text-lg font-semibold">Enrollment by course</h2>
          <Card>
            <CardContent className="space-y-4 p-5">
              {enrollmentLoading && <Skeleton className="h-32 w-full" />}
              {!enrollmentLoading && enrollment?.length === 0 && (
                <p className="text-sm text-muted-foreground">No courses yet.</p>
              )}
              {enrollment?.map((row) => (
                <div key={row.courseId}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{row.levelLabel}</span>
                    <span className="text-muted-foreground">
                      {row.studentCount} student{row.studentCount === 1 ? "" : "s"}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${(row.studentCount / maxEnrollment) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        <div>
          <h2 className="mb-3 text-lg font-semibold">Teacher workload</h2>
          <Card>
            <CardContent className="space-y-4 p-5">
              {teachersLoading && <Skeleton className="h-32 w-full" />}
              {!teachersLoading && teachers?.length === 0 && (
                <p className="text-sm text-muted-foreground">No teachers yet.</p>
              )}
              {teachers?.map((row) => (
                <div key={row.teacherId}>
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{row.name}</span>
                    <span className="text-muted-foreground">
                      {row.studentCount} student{row.studentCount === 1 ? "" : "s"}
                    </span>
                  </div>
                  <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: `${(row.studentCount / maxTeacherLoad) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">Attendance</h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {ATTENDANCE_TILES.map((tile) => (
            <Card key={tile.key}>
              <CardContent className="flex flex-col gap-3 p-4">
                <div className="flex size-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <tile.icon className="size-4.5" />
                </div>
                {attendanceLoading ? (
                  <Skeleton className="h-7 w-10" />
                ) : (
                  <span className="font-heading text-2xl font-semibold">
                    {attendance?.[tile.key] ?? 0}
                  </span>
                )}
                <span className="text-xs text-muted-foreground">{tile.label}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mt-8">
        <h2 className="mb-3 text-lg font-semibold">Quiz scores</h2>
        <Card>
          <CardContent className="space-y-4 p-5">
            {quizLoading && <Skeleton className="h-32 w-full" />}
            {!quizLoading && (!quizReport || quizReport.quizzes.length === 0) && (
              <p className="text-sm text-muted-foreground">No quiz attempts yet.</p>
            )}
            {quizReport && quizReport.quizzes.length > 0 && (
              <>
                <div className="flex items-center justify-between text-sm">
                  <span className="font-medium">Overall average</span>
                  <span className="text-muted-foreground">{quizReport.overallAverage}%</span>
                </div>
                {quizReport.quizzes.map((q) => (
                  <div key={q.quizId}>
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium">{q.title}</span>
                      <span className="text-muted-foreground">
                        {q.averageScore}% avg · {q.attemptCount} attempt
                        {q.attemptCount === 1 ? "" : "s"}
                      </span>
                    </div>
                    <div className="mt-1.5 h-2 overflow-hidden rounded-full bg-muted">
                      <div
                        className="h-full rounded-full bg-primary"
                        style={{ width: `${q.averageScore}%` }}
                      />
                    </div>
                  </div>
                ))}
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
