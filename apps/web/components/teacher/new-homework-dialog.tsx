"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ClipboardPlus } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMedia,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateHomework } from "@/lib/hooks/use-homework";
import { useCourses } from "@/lib/hooks/use-courses";
import { useMyStudents } from "@/lib/hooks/use-users";
import { ApiError } from "@/lib/api-client";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";

const schema = z.object({
  courseId: z.string().min(1, "Choose a course"),
  studentIds: z.array(z.string()).min(1, "Pick at least one student"),
  title: z.string().min(1, "Title is required"),
  description: z.string().optional(),
  dueDate: z.string().min(1, "Choose a due date"),
});
type FormValues = z.infer<typeof schema>;

const DEFAULTS: Partial<FormValues> = { studentIds: [] };

export function NewHomeworkDialog() {
  const [open, setOpen] = useState(false);
  const createHomework = useCreateHomework();
  const { data: courses } = useCourses();
  const { data: students } = useMyStudents();

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: DEFAULTS,
  });

  async function onSubmit(values: FormValues) {
    const dueDate = new Date(`${values.dueDate}T23:59:59`);
    if (Number.isNaN(dueDate.getTime())) {
      toast.error("Enter a valid due date");
      return;
    }
    try {
      await createHomework.mutateAsync({
        courseId: values.courseId,
        title: values.title,
        description: values.description,
        studentIds: values.studentIds,
        dueDate: dueDate.toISOString(),
      });
      toast.success("Homework assigned");
      reset(DEFAULTS);
      setOpen(false);
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not assign homework");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) reset(DEFAULTS);
      }}
    >
      <DialogTrigger className={buttonVariants()}>
        <ClipboardPlus className="size-4" />
        New Homework
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogMedia variant="primary">
            <ClipboardPlus className="size-5" />
          </DialogMedia>
          <DialogTitle>Assign homework</DialogTitle>
          <DialogDescription>
            Pick the course, students, and set a title and due date.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label>Course</Label>
            <Controller
              control={control}
              name="courseId"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a course">
                      {(value: string | null) => {
                        const c = courses?.find((c) => c._id === value);
                        return c
                          ? (COURSE_LEVEL_LABEL[c.level as 1 | 2 | 3 | 4] ?? c.title)
                          : "Select a course";
                      }}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {courses?.map((c) => (
                      <SelectItem key={c._id} value={c._id}>
                        {COURSE_LEVEL_LABEL[c.level as 1 | 2 | 3 | 4] ?? c.title}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.courseId && (
              <p className="text-sm text-destructive">{errors.courseId.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label>Students</Label>
            <Controller
              control={control}
              name="studentIds"
              render={({ field }) => (
                <div className="max-h-40 space-y-1 overflow-y-auto rounded-lg border p-2">
                  {students?.length ? (
                    students.map((s) => {
                      const checked = field.value.includes(s.id);
                      return (
                        <label
                          key={s.id}
                          className="flex items-center gap-2 rounded-md px-2 py-1.5 text-sm hover:bg-muted/60"
                        >
                          <Checkbox
                            checked={checked}
                            onCheckedChange={(v) => {
                              field.onChange(
                                v
                                  ? [...field.value, s.id]
                                  : field.value.filter((id) => id !== s.id),
                              );
                            }}
                          />
                          {s.name}
                        </label>
                      );
                    })
                  ) : (
                    <p className="p-2 text-sm text-muted-foreground">No students yet.</p>
                  )}
                </div>
              )}
            />
            {errors.studentIds && (
              <p className="text-sm text-destructive">{errors.studentIds.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>
            <Input id="title" {...register("title")} />
            {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Description (optional)</Label>
            <Textarea id="description" {...register("description")} />
          </div>

          <div className="space-y-2">
            <Label htmlFor="dueDate">Due date</Label>
            <Input id="dueDate" type="date" {...register("dueDate")} />
            {errors.dueDate && (
              <p className="text-sm text-destructive">{errors.dueDate.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="submit" disabled={createHomework.isPending}>
              {createHomework.isPending ? "Assigning…" : "Assign homework"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
