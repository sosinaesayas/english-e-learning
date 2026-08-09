"use client";

import { use } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CourseEditor } from "@/components/admin/course-editor";

export default function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);

  return (
    <div>
      <Link
        href="/admin/courses"
        className="mb-4 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        Back to courses
      </Link>
      <CourseEditor courseId={id} />
    </div>
  );
}
