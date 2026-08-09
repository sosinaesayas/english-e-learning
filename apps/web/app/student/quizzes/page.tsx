import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { StudentQuizList } from "@/components/student/quiz-list";

export default async function StudentQuizzesPage() {
  await requireRole(Role.Student);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Quizzes</h1>
      <p className="mt-1 text-muted-foreground">Quizzes from your teacher.</p>
      <StudentQuizList />
    </div>
  );
}
