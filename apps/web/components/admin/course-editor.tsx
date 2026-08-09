"use client";

import { useRef, useState } from "react";
import { toast } from "sonner";
import { Plus, Trash2, FileText, Upload, GripVertical } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { InlineEditableText } from "@/components/shared/inline-editable-text";
import {
  useCourse,
  useCreateModule,
  useUpdateModule,
  useDeleteModule,
  useCreateLesson,
  useUpdateLesson,
  useDeleteLesson,
} from "@/lib/hooks/use-courses";
import { api, ApiError } from "@/lib/api-client";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";

function AddInline({
  placeholder,
  onAdd,
  buttonLabel,
}: {
  placeholder: string;
  buttonLabel: string;
  onAdd: (title: string) => Promise<unknown>;
}) {
  const [value, setValue] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit() {
    if (!value.trim()) return;
    setBusy(true);
    try {
      await onAdd(value.trim());
      setValue("");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Something went wrong");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div className="flex gap-2">
      <Input
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && submit()}
      />
      <Button type="button" onClick={submit} disabled={busy}>
        <Plus className="size-4" />
        {buttonLabel}
      </Button>
    </div>
  );
}

function LessonRow({
  lesson,
  courseId,
}: {
  lesson: { _id: string; title: string; slidesUrl?: string };
  courseId: string;
}) {
  const updateLesson = useUpdateLesson(courseId);
  const deleteLesson = useDeleteLesson(courseId);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [uploading, setUploading] = useState(false);
  const [confirmDeleteOpen, setConfirmDeleteOpen] = useState(false);

  async function onFileSelected(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setUploading(true);
    try {
      const { url } = await api.upload<{ url: string }>(file);
      await updateLesson.mutateAsync({ id: lesson._id, slidesUrl: url });
      toast.success("Slides uploaded");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Upload failed");
    } finally {
      setUploading(false);
    }
  }

  async function onRename(title: string) {
    try {
      await updateLesson.mutateAsync({ id: lesson._id, title });
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not rename lesson");
    }
  }

  async function onDelete() {
    try {
      await deleteLesson.mutateAsync(lesson._id);
      toast.success("Lesson deleted");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not delete lesson");
    }
  }

  return (
    <div className="flex items-center justify-between gap-2 rounded-md px-2 py-2 transition-colors hover:bg-muted/50">
      <div className="flex min-w-0 items-center gap-2">
        <FileText className="size-4 shrink-0 text-muted-foreground" />
        <InlineEditableText value={lesson.title} onSave={onRename} className="text-sm" />
        {lesson.slidesUrl && (
          <a
            href={lesson.slidesUrl}
            target="_blank"
            rel="noreferrer"
            className="shrink-0 text-xs text-primary underline underline-offset-2"
          >
            View slides
          </a>
        )}
      </div>
      <div className="flex shrink-0 items-center gap-1">
        <input
          ref={fileInputRef}
          type="file"
          className="hidden"
          accept=".pptx,.pdf,.mp4"
          onChange={onFileSelected}
        />
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          disabled={uploading}
          onClick={() => fileInputRef.current?.click()}
          title="Upload slides/PDF/video"
        >
          <Upload className="size-4" />
        </Button>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          onClick={() => setConfirmDeleteOpen(true)}
        >
          <Trash2 className="size-4 text-destructive" />
        </Button>
      </div>

      <ConfirmDialog
        open={confirmDeleteOpen}
        onOpenChange={setConfirmDeleteOpen}
        title={`Delete "${lesson.title}"?`}
        description="This permanently removes the lesson and its materials. This can't be undone."
        confirmLabel="Delete lesson"
        onConfirm={onDelete}
      />
    </div>
  );
}

export function CourseEditor({ courseId }: { courseId: string }) {
  const { data, isLoading } = useCourse(courseId);
  const createModule = useCreateModule(courseId);
  const updateModule = useUpdateModule(courseId);
  const deleteModule = useDeleteModule(courseId);
  const createLesson = useCreateLesson(courseId);
  const [moduleToDelete, setModuleToDelete] = useState<{ id: string; title: string } | null>(
    null,
  );

  if (isLoading || !data) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-64" />
        <Skeleton className="h-40 w-full" />
      </div>
    );
  }

  const { course, modules } = data;

  async function onRenameModule(id: string, title: string) {
    try {
      await updateModule.mutateAsync({ id, title });
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not rename module");
    }
  }

  async function onDeleteModule() {
    if (!moduleToDelete) return;
    try {
      await deleteModule.mutateAsync(moduleToDelete.id);
      toast.success("Module deleted");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not delete module");
    }
  }

  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-2xl font-semibold">{course.title}</h1>
        <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Level {course.level} — {COURSE_LEVEL_LABEL[course.level as 1 | 2 | 3 | 4]}
        </span>
      </div>
      <p className="mt-1 text-muted-foreground">{course.description}</p>

      <div className="mt-6 max-w-2xl">
        <AddInline
          placeholder="New module title…"
          buttonLabel="Add Module"
          onAdd={(title) => createModule.mutateAsync(title)}
        />
      </div>

      <div className="mt-6 space-y-4 max-w-2xl">
        {modules.length === 0 && (
          <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
            No modules yet — add the first one above.
          </div>
        )}
        {modules.map(({ module: mod, lessons }) => (
          <Card key={mod._id}>
            <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0">
              <div className="flex min-w-0 items-center gap-2">
                <GripVertical className="size-4 shrink-0 text-muted-foreground" />
                <InlineEditableText
                  value={mod.title}
                  onSave={(title) => onRenameModule(mod._id, title)}
                  className="font-semibold"
                />
              </div>
              <Button
                type="button"
                variant="ghost"
                size="icon-sm"
                onClick={() => setModuleToDelete({ id: mod._id, title: mod.title })}
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </CardHeader>
            <CardContent className="space-y-2">
              {lessons.map((lesson) => (
                <LessonRow key={lesson._id} lesson={lesson} courseId={courseId} />
              ))}
              <AddInline
                placeholder="New lesson title…"
                buttonLabel="Add Lesson"
                onAdd={(title) => createLesson.mutateAsync({ moduleId: mod._id, title })}
              />
            </CardContent>
          </Card>
        ))}
      </div>

      <ConfirmDialog
        open={!!moduleToDelete}
        onOpenChange={(open) => !open && setModuleToDelete(null)}
        title={`Delete "${moduleToDelete?.title}"?`}
        description="This permanently removes the module and all of its lessons. This can't be undone."
        confirmLabel="Delete module"
        onConfirm={onDeleteModule}
      />
    </div>
  );
}
