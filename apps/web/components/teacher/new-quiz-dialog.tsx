"use client";

import { useState } from "react";
import { useForm, useFieldArray, Controller, type Control } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { ListPlus, Plus, Trash2 } from "lucide-react";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCreateQuiz } from "@/lib/hooks/use-quizzes";
import { useCourses } from "@/lib/hooks/use-courses";
import { ApiError } from "@/lib/api-client";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";

const schema = z.object({
  courseId: z.string().min(1, "Choose a course"),
  title: z.string().min(1, "Title is required"),
  questions: z
    .array(
      z.object({
        text: z.string().min(1, "Question text is required"),
        options: z.array(z.object({ value: z.string().min(1, "Option can't be empty") })).min(2),
        correctIndex: z.number().int().min(0, "Pick the correct answer"),
      }),
    )
    .min(1, "Add at least one question"),
});
type FormValues = z.infer<typeof schema>;

const EMPTY_QUESTION = { text: "", options: [{ value: "" }, { value: "" }], correctIndex: 0 };
const DEFAULTS: FormValues = { courseId: "", title: "", questions: [EMPTY_QUESTION] };

function QuestionBlock({
  control,
  index,
  onRemove,
  removable,
}: {
  control: Control<FormValues>;
  index: number;
  onRemove: () => void;
  removable: boolean;
}) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: `questions.${index}.options`,
  });

  return (
    <div className="space-y-3 rounded-lg border p-3">
      <div className="flex items-start gap-2">
        <Controller
          control={control}
          name={`questions.${index}.text`}
          render={({ field, fieldState }) => (
            <div className="flex-1 space-y-1">
              <Input placeholder={`Question ${index + 1}`} {...field} />
              {fieldState.error && (
                <p className="text-xs text-destructive">{fieldState.error.message}</p>
              )}
            </div>
          )}
        />
        {removable && (
          <Button type="button" variant="ghost" size="icon-sm" onClick={onRemove}>
            <Trash2 className="size-4 text-destructive" />
          </Button>
        )}
      </div>

      <Controller
        control={control}
        name={`questions.${index}.correctIndex`}
        render={({ field: correctField }) => (
          <div className="space-y-2">
            {fields.map((opt, optIndex) => (
              <div key={opt.id} className="flex items-center gap-2">
                <input
                  type="radio"
                  name={`correct-${index}`}
                  checked={correctField.value === optIndex}
                  onChange={() => correctField.onChange(optIndex)}
                  className="size-4 accent-primary"
                />
                <Controller
                  control={control}
                  name={`questions.${index}.options.${optIndex}.value`}
                  render={({ field }) => (
                    <Input placeholder={`Option ${optIndex + 1}`} {...field} />
                  )}
                />
                {fields.length > 2 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={() => remove(optIndex)}
                  >
                    <Trash2 className="size-3.5 text-muted-foreground" />
                  </Button>
                )}
              </div>
            ))}
            {fields.length < 6 && (
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => append({ value: "" })}
              >
                <Plus className="size-3.5" />
                Add option
              </Button>
            )}
          </div>
        )}
      />
    </div>
  );
}

export function NewQuizDialog() {
  const [open, setOpen] = useState(false);
  const createQuiz = useCreateQuiz();
  const { data: courses } = useCourses();

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

  const { fields: questionFields, append: appendQuestion, remove: removeQuestion } = useFieldArray(
    { control, name: "questions" },
  );

  async function onSubmit(values: FormValues) {
    try {
      await createQuiz.mutateAsync({
        courseId: values.courseId,
        title: values.title,
        questions: values.questions.map((q) => ({
          text: q.text,
          options: q.options.map((o) => o.value),
          correctIndex: q.correctIndex,
        })),
      });
      toast.success("Quiz created");
      reset(DEFAULTS);
      setOpen(false);
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not create quiz");
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
        <ListPlus className="size-4" />
        New Quiz
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogMedia variant="primary">
            <ListPlus className="size-5" />
          </DialogMedia>
          <DialogTitle>Create a quiz</DialogTitle>
          <DialogDescription>
            Pick the course, add questions, and mark the correct answer for each.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="max-h-[60vh] space-y-4 overflow-y-auto pr-1">
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
            <Label htmlFor="quiz-title">Title</Label>
            <Input id="quiz-title" {...register("title")} />
            {errors.title && <p className="text-sm text-destructive">{errors.title.message}</p>}
          </div>

          <div className="space-y-3">
            <Label>Questions</Label>
            {questionFields.map((q, index) => (
              <QuestionBlock
                key={q.id}
                control={control}
                index={index}
                onRemove={() => removeQuestion(index)}
                removable={questionFields.length > 1}
              />
            ))}
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => appendQuestion(EMPTY_QUESTION)}
            >
              <Plus className="size-3.5" />
              Add question
            </Button>
          </div>

          <DialogFooter>
            <Button type="submit" disabled={createQuiz.isPending}>
              {createQuiz.isPending ? "Creating…" : "Create quiz"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
