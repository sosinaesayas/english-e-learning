"use client";

import Link from "next/link";
import { BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { useCourses } from "@/lib/hooks/use-courses";

export default function CoursesPage() {
  const { data: courses, isLoading } = useCourses();

  return (
    <div>
      <h1 className="text-2xl font-semibold">Courses</h1>
      <p className="mt-1 text-muted-foreground">
        The four English levels — manage modules, lessons, and materials for each.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {isLoading &&
          Array.from({ length: 4 }).map((_, i) => <Skeleton key={i} className="h-32 w-full" />)}
        {courses
          ?.slice()
          .sort((a, b) => a.level - b.level)
          .map((course) => (
            <Link key={course._id} href={`/admin/courses/${course._id}`}>
              <Card className="h-full transition-colors hover:border-primary/40 hover:bg-muted/40">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <BookOpen className="size-5 text-primary" />
                    <Badge variant="outline">Level {course.level}</Badge>
                  </div>
                  <CardTitle className="text-base">{course.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="line-clamp-2 text-sm text-muted-foreground">
                    {course.description}
                  </p>
                </CardContent>
              </Card>
            </Link>
          ))}
      </div>
    </div>
  );
}
