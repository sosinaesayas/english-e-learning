"use client";

import Link from "next/link";
import { Users, GraduationCap, BookOpen, CalendarDays, CalendarClock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { useAdminDashboard } from "@/lib/hooks/use-dashboard";

const TILES = [
  { key: "totalStudents" as const, label: "Total Students", icon: Users, href: "/admin/students" },
  { key: "totalTeachers" as const, label: "Total Teachers", icon: GraduationCap, href: "/admin/teachers" },
  { key: "totalCourses" as const, label: "Total Courses", icon: BookOpen, href: "/admin/courses" },
  { key: "todaysClasses" as const, label: "Today's Classes", icon: CalendarDays, href: "/admin/schedule" },
  { key: "upcomingClasses" as const, label: "Upcoming Classes", icon: CalendarClock, href: "/admin/schedule" },
];

export function DashboardStats() {
  const { data, isLoading } = useAdminDashboard();

  return (
    <div>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
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
        <h2 className="mb-3 text-lg font-semibold">Recent registrations</h2>
        <div className="rounded-lg bg-card shadow-soft ring-1 ring-foreground/5 divide-y divide-border/60">
          {isLoading && (
            <div className="p-4">
              <Skeleton className="h-10 w-full" />
            </div>
          )}
          {!isLoading && data?.recentRegistrations.length === 0 && (
            <p className="p-6 text-center text-muted-foreground">No registrations yet.</p>
          )}
          {data?.recentRegistrations.map((r) => (
            <div key={r.id} className="flex items-center justify-between px-4 py-3">
              <span className="font-medium">{r.name}</span>
              <div className="flex items-center gap-3">
                <Badge variant="outline" className="capitalize">
                  {r.role}
                </Badge>
                <span className="text-sm text-muted-foreground">
                  {new Date(r.createdAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
