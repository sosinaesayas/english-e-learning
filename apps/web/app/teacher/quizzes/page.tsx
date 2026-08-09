import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { NewQuizDialog } from "@/components/teacher/new-quiz-dialog";
import { TeacherQuizList } from "@/components/teacher/quiz-list";

export default async function TeacherQuizzesPage() {
  await requireRole(Role.Teacher);
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Quizzes</h1>
        <NewQuizDialog />
      </div>
      <p className="mt-1 text-muted-foreground">Quizzes and student results for your courses.</p>
      <TeacherQuizList />
    </div>
  );
}
