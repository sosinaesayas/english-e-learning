import type { Role, UserStatus } from "@tutor/shared";

export interface PublicUser {
  id: string;
  name: string;
  email: string;
  role: Role;
  phone?: string;
  status: UserStatus;
  assignedTeacherId: string | null;
  courseId: string | null;
  createdAt?: string;
}

export interface Course {
  _id: string;
  title: string;
  level: number;
  description: string;
  isPublished: boolean;
  thumbnailUrl?: string;
  createdAt?: string;
}

export interface CourseModuleItem {
  _id: string;
  courseId: string;
  title: string;
  order: number;
}

export interface Lesson {
  _id: string;
  moduleId: string;
  title: string;
  order: number;
  slidesUrl?: string;
  pdfUrls: string[];
  videoUrls: string[];
}

export interface CourseDetail {
  course: Course;
  modules: { module: CourseModuleItem; lessons: Lesson[] }[];
}

export interface AdminDashboardStats {
  totalStudents: number;
  totalTeachers: number;
  totalCourses: number;
  todaysClasses: number;
  upcomingClasses: number;
  recentRegistrations: { id: string; name: string; role: Role; createdAt: string }[];
}

export type ClassStatus = "cancelled" | "live" | "upcoming" | "completed";

export type AttendanceStatus = "present" | "absent" | "late";

export interface AttendanceRecord {
  studentId: string;
  status: AttendanceStatus;
}

export interface ScheduledClass {
  id: string;
  course: { id: string; title: string; level: number } | null;
  teacher: { id: string; name: string; email: string } | null;
  students: { id: string; name: string; email: string }[];
  startsAt: string;
  durationMinutes: number;
  meetLink: string;
  cancelled: boolean;
  status: ClassStatus;
  attendance: AttendanceRecord[];
}

export interface EnrollmentReportRow {
  courseId: string;
  title: string;
  level: number;
  levelLabel: string;
  studentCount: number;
}

export interface TeacherReportRow {
  teacherId: string;
  name: string;
  email: string;
  studentCount: number;
}

export interface ClassStatsReport {
  total: number;
  upcoming: number;
  live: number;
  completed: number;
  cancelled: number;
}

export interface AttendanceReport {
  present: number;
  absent: number;
  late: number;
  unmarked: number;
}

export interface QuizReport {
  overallAverage: number;
  quizzes: { quizId: string; title: string; averageScore: number; attemptCount: number }[];
}

export interface HomeworkSubmission {
  studentId: string;
  text: string;
  submittedAt: string;
  grade?: number;
  feedback?: string;
}

export interface Homework {
  id: string;
  course: { id: string; title: string; level: number } | null;
  teacherId: string;
  title: string;
  description: string;
  dueDate: string;
  students: { id: string; name: string; email: string }[];
  submissions: HomeworkSubmission[];
}

export interface Announcement {
  id: string;
  title: string;
  message: string;
  createdAt: string;
  author: { id: string; name: string } | null;
}

export interface Certificate {
  id: string;
  certificateNumber: string;
  issuedAt: string;
  course: { id: string; title: string; level: number } | null;
  teacher: { id: string; name: string } | null;
}

export interface QuizQuestion {
  text: string;
  options: string[];
  correctIndex?: number;
}

export interface QuizAttempt {
  studentId: string;
  answers: number[];
  score: number;
  submittedAt: string;
}

export interface Quiz {
  id: string;
  course: { id: string; title: string; level: number } | null;
  teacherId: string;
  title: string;
  questions: QuizQuestion[];
  attempts: QuizAttempt[];
  myAttempt: QuizAttempt | null;
}

export interface TeacherDashboardStats {
  myStudentsCount: number;
  todaysClasses: number;
  upcomingClasses: number;
  homeworkAwaitingGrading: number;
}

export interface LessonProgress {
  courseId: string | null;
  completedLessonIds: string[];
  totalLessons: number;
  completedCount: number;
  percent: number;
}

export interface ToggleLessonResult {
  completedLessonIds: string[];
  totalLessons: number;
  completedCount: number;
  percent: number;
  certificateIssued: boolean;
}

export interface StudentDashboardStats {
  upcomingClasses: number;
  pendingHomework: number;
  course: { id: string; title: string; level: number } | null;
  teacher: { id: string; name: string; email: string } | null;
  latestAnnouncement: { id: string; title: string; message: string; createdAt: string } | null;
}
