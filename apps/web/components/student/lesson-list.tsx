"use client";

import { toast } from "sonner";
import { FileText, Video, Link as LinkIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Checkbox } from "@/components/ui/checkbox";
import { useCourse, useMyProgress, useToggleLesson } from "@/lib/hooks/use-courses";
import { ApiError } from "@/lib/api-client";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";

function LessonRow({
  lesson,
  completed,
}: {
  lesson: { _id: string; title: string; slidesUrl?: string; pdfUrls: string[]; videoUrls: string[] };
  completed: boolean;
}) {
  const toggleLesson = useToggleLesson();

  async function onToggle(checked: boolean) {
    try {
      const result = await toggleLesson.mutateAsync({ lessonId: lesson._id, completed: checked });
      if (result.certificateIssued) {
        toast.success("Course complete! Your certificate is ready.");
      }
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not update lesson");
    }
  }

  return (
    <div className="flex items-start gap-3 rounded-md px-2 py-2 transition-colors hover:bg-muted/50">
      <Checkbox
        checked={completed}
        onCheckedChange={(v) => onToggle(!!v)}
        className="mt-0.5"
      />
      <div className="min-w-0 flex-1">
        <p className={completed ? "text-sm text-muted-foreground line-through" : "text-sm"}>
          {lesson.title}
        </p>
        <div className="mt-1 flex flex-wrap items-center gap-3">
          {lesson.slidesUrl && (
            <a
              href={lesson.slidesUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-primary underline underline-offset-2"
            >
              <FileText className="size-3.5" />
              Slides
            </a>
          )}
          {lesson.pdfUrls.map((url, i) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-primary underline underline-offset-2"
            >
              <LinkIcon className="size-3.5" />
              PDF{lesson.pdfUrls.length > 1 ? ` ${i + 1}` : ""}
            </a>
          ))}
          {lesson.videoUrls.map((url, i) => (
            <a
              key={url}
              href={url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1 text-xs text-primary underline underline-offset-2"
            >
              <Video className="size-3.5" />
              Video{lesson.videoUrls.length > 1 ? ` ${i + 1}` : ""}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export function LessonList() {
  const { data: progress, isLoading: progressLoading } = useMyProgress();
  const { data: courseDetail, isLoading: courseLoading } = useCourse(progress?.courseId ?? undefined);

  if (progressLoading || (progress?.courseId && courseLoading)) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  if (!progress?.courseId || !courseDetail) {
    return (
      <div className="mt-6 rounded-lg border border-dashed p-16 text-center text-muted-foreground">
        No course assigned yet — ask your admin.
      </div>
    );
  }

  const { course, modules } = courseDetail;
  const completedSet = new Set(progress.completedLessonIds);

  return (
    <div>
      <Card>
        <CardContent className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-semibold">
              {COURSE_LEVEL_LABEL[course.level as 1 | 2 | 3 | 4] ?? course.title}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">
              {progress.completedCount} of {progress.totalLessons} lessons complete
            </p>
          </div>
          <div className="w-full max-w-40">
            <div className="h-2 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-primary transition-all"
                style={{ width: `${progress.percent}%` }}
              />
            </div>
            <p className="mt-1 text-right text-xs text-muted-foreground">{progress.percent}%</p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 space-y-4">
        {modules.length === 0 && (
          <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
            No lessons published yet.
          </div>
        )}
        {modules.map(({ module: mod, lessons }) => (
          <Card key={mod._id}>
            <CardHeader>
              <span className="font-semibold">{mod.title}</span>
            </CardHeader>
            <CardContent className="space-y-1">
              {lessons.map((lesson) => (
                <LessonRow
                  key={lesson._id}
                  lesson={lesson}
                  completed={completedSet.has(lesson._id)}
                />
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
