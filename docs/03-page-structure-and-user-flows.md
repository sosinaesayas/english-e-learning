# Page Structure & User Flows

## Page Structure (Next.js App Router)

```
/                              marketing landing page (public)
/login
/forgot-password
/reset-password?token=...

/admin/dashboard
/admin/students
/admin/students/[id]
/admin/teachers
/admin/teachers/[id]
/admin/courses
/admin/courses/[id]            module/lesson editor for that course
/admin/schedule
/admin/reports

/teacher/dashboard
/teacher/students
/teacher/schedule
/teacher/courses/[id]          view/upload materials, homework, quizzes
/teacher/classes/[id]          attendance + grading for one scheduled class
/teacher/announcements

/student/dashboard
/student/courses/[id]
/student/lessons/[id]
/student/homework
/student/quizzes/[id]
/student/schedule
/student/certificate
```

Each role has a persistent layout (`admin/layout.tsx`, `teacher/layout.tsx`, `student/layout.tsx`): sidebar nav (collapses to a bottom tab bar / hamburger on mobile) + topbar (profile menu, notifications bell). All CRUD pages follow the same pattern: list view (table on desktop, cards on mobile) → detail/edit view.

## User Flows

### 1. Admin onboards a new student
1. Admin → Students → "Add Student" → fills name/email/phone → submit.
2. API creates `User{role:student}` with a random temp password, fires `UserCreatedEvent`.
3. Notification listener emails the student their login + a "set your password" reset link.
4. Admin optionally assigns a teacher and a course from the student's detail page (`assign-teacher`, `assign-course`), each firing its own event → email.

### 2. Admin schedules a class
1. Admin (or Teacher) → Schedule → "New Class" → pick course, teacher, students, date, time, duration, paste the Google Meet link → submit.
2. API creates `ClassSchedule`, fires `ClassScheduledEvent` → emails teacher + all students.
3. A cron job scans upcoming classes every few minutes; at T-24h and T-1h it emails reminders and flags `remindersSent` so it never double-sends.
4. On the day, `status` flips `upcoming → live → completed` (derived from `date`/`startTime`/`durationMinutes` at read time, no separate cron needed for this).

### 3. Student attends class & does homework
1. Student dashboard shows "Today's Lesson" / "Upcoming Classes" pulled from `classschedules` where `studentIds` contains them.
2. "Join Meeting" button is enabled only while `status === 'live'`; it simply opens `meetLink` in a new tab.
3. After class, teacher opens `teacher/classes/[id]` → marks attendance, optionally uploads/assigns homework tied to that class or lesson.
4. Student sees the homework under `student/homework`, uploads their submission (file or text).
5. Teacher grades it from the submission list; grading fires `HomeworkGradedEvent` → email to student.

### 4. Student takes a quiz
1. Student opens a lesson with an attached quiz → `student/quizzes/[id]`.
2. Answers are submitted as one `QuizAttempt`; score is computed server-side (never trust client-side scoring) and compared to `passingScore`.
3. Result shown immediately; feeds into `student/dashboard`'s "Quiz Results" and the admin's quiz-scores report.

### 5. Course completion → certificate
1. `Enrollment.progressPercent` recalculates whenever a lesson is marked complete (100% = every lesson in every module of the course completed).
2. On reaching 100%, API generates a `Certificate` (unique number) and fires `CourseCompletedEvent` → congratulatory email.
3. Student's dashboard surfaces a "Certificate" card/download once issued.

### 6. Forgot password
1. `/forgot-password` → email submitted → API always responds success (no user enumeration) and, if the email exists, creates a `PasswordResetToken` (1h TTL) and emails a reset link.
2. `/reset-password?token=...` → new password → API validates token hash + expiry, updates `passwordHash`, deletes the token, invalidates existing refresh tokens.
