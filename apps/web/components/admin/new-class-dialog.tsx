"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { CalendarPlus } from "lucide-react";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateClass } from "@/lib/hooks/use-schedule";
import { useCourses } from "@/lib/hooks/use-courses";
import { useUsersByRole } from "@/lib/hooks/use-users";
import { ApiError } from "@/lib/api-client";
import { Role, COURSE_LEVEL_LABEL } from "@tutor/shared";

const schema = z.object({
  courseId: z.string().min(1, "Choose a course"),
  teacherId: z.string().min(1, "Choose a teacher"),
  studentIds: z.array(z.string()).min(1, "Pick at least one student"),
  date: z.string().min(1, "Choose a date"),
  time: z.string().min(1, "Choose a time"),
  durationMinutes: z.number().int().min(5, "At least 5 minutes"),
  meetLink: z.string().min(1, "Paste the Google Meet link"),
});
type FormValues = z.infer<typeof schema>;

export function NewClassDialog() {
  const [open, setOpen] = useState(false);
  const createClass = useCreateClass();
  const { data: courses } = useCourses();
  const { data: teachers } = useUsersByRole(Role.Teacher, "");
  const { data: students } = useUsersByRole(Role.Student, "");

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { studentIds: [], durationMinutes: 45 },
  });

  async function onSubmit(values: FormValues) {
    const startsAt = new Date(`${values.date}T${values.time}:00`);
    if (Number.isNaN(startsAt.getTime())) {
      toast.error("Enter a valid date and time");
      return;
    }
    try {
      await createClass.mutateAsync({
        courseId: values.courseId,
        teacherId: values.teacherId,
        studentIds: values.studentIds,
        startsAt: startsAt.toISOString(),
        durationMinutes: values.durationMinutes,
        meetLink: values.meetLink,
      });
      toast.success("Class scheduled");
      reset({ studentIds: [], durationMinutes: 45 } as Partial<FormValues>);
      setOpen(false);
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not schedule class");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) reset({ studentIds: [], durationMinutes: 45 } as Partial<FormValues>);
      }}
    >
      <DialogTrigger className={buttonVariants()}>
        <CalendarPlus className="size-4" />
        New Class
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogMedia variant="primary">
            <CalendarPlus className="size-5" />
          </DialogMedia>
          <DialogTitle>Schedule a class</DialogTitle>
          <DialogDescription>
            Pick the course, teacher, students, and paste the Google Meet link.
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
            <Label>Teacher</Label>
            <Controller
              control={control}
              name="teacherId"
              render={({ field }) => (
                <Select value={field.value ?? ""} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a teacher">
                      {(value: string | null) =>
                        teachers?.find((t) => t.id === value)?.name ?? "Select a teacher"
                      }
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    {teachers?.map((t) => (
                      <SelectItem key={t.id} value={t.id}>
                        {t.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.teacherId && (
              <p className="text-sm text-destructive">{errors.teacherId.message}</p>
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

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date">Date</Label>
              <Input id="date" type="date" {...register("date")} />
              {errors.date && <p className="text-sm text-destructive">{errors.date.message}</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="time">Time</Label>
              <Input id="time" type="time" {...register("time")} />
              {errors.time && <p className="text-sm text-destructive">{errors.time.message}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="durationMinutes">Duration (minutes)</Label>
            <Input
              id="durationMinutes"
              type="number"
              min={5}
              {...register("durationMinutes", { valueAsNumber: true })}
            />
            {errors.durationMinutes && (
              <p className="text-sm text-destructive">{errors.durationMinutes.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="meetLink">Google Meet link</Label>
            <Input
              id="meetLink"
              placeholder="https://meet.google.com/..."
              {...register("meetLink")}
            />
            {errors.meetLink && (
              <p className="text-sm text-destructive">{errors.meetLink.message}</p>
            )}
          </div>

          <DialogFooter>
            <Button type="submit" disabled={createClass.isPending}>
              {createClass.isPending ? "Scheduling…" : "Schedule class"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
