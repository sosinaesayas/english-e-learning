# API Endpoints (apps/api, prefix `/api/v1`)

All endpoints except `/auth/login`, `/auth/forgot-password`, `/auth/reset-password` require a valid JWT cookie. Endpoints marked **[role]** are restricted by `RolesGuard`.

## Auth
| Method | Path | Notes |
|---|---|---|
| POST | /auth/login | email+password → sets cookies |
| POST | /auth/logout | clears cookies |
| POST | /auth/refresh | rotates access token from refresh cookie |
| GET | /auth/me | current user + role |
| POST | /auth/forgot-password | always 200, no enumeration |
| POST | /auth/reset-password | token + new password |

## Users **[admin]** (teachers/students)
| Method | Path | Notes |
|---|---|---|
| GET | /users?role=student\|teacher | list, paginated/search |
| POST | /users | create (temp password + email) |
| GET | /users/:id | |
| PATCH | /users/:id | |
| DELETE | /users/:id | soft delete → status inactive |
| GET | /users/:id/progress | student progress summary |
| POST | /users/:id/assign-teacher | body: teacherId |
| POST | /users/:id/assign-course | body: courseId |
| GET | /users/:id/schedule | teacher's teaching schedule / student's classes |

## Courses **[admin write, all read]**
| Method | Path | Notes |
|---|---|---|
| GET | /courses | |
| POST | /courses | **[admin]** |
| GET | /courses/:id | with modules+lessons populated |
| PATCH | /courses/:id | **[admin]** |
| DELETE | /courses/:id | **[admin]** |
| POST | /courses/:id/modules | **[admin]** |
| PATCH | /modules/:id | **[admin]** |
| DELETE | /modules/:id | **[admin]** |
| POST | /modules/:id/lessons | **[admin/teacher]** upload slides/pdf/video/homework/quiz refs |
| PATCH | /lessons/:id | **[admin/teacher]** |
| DELETE | /lessons/:id | **[admin]** |
| POST | /lessons/:id/complete | **[student]** marks lesson done, recalculates enrollment progress |

## Schedule
| Method | Path | Notes |
|---|---|---|
| GET | /schedule?date=&teacherId=&studentId= | filterable |
| GET | /schedule/today | |
| GET | /schedule/upcoming | |
| GET | /schedule/calendar?from=&to= | for calendar views |
| POST | /schedule | **[admin/teacher]** create + assign teacher/students |
| PATCH | /schedule/:id | reschedule/cancel |
| DELETE | /schedule/:id | **[admin]** |

## Homework
| Method | Path | Notes |
|---|---|---|
| GET | /homework?studentId=&lessonId= | |
| POST | /homework | **[admin/teacher]** |
| POST | /homework/:id/submissions | **[student]** submit |
| PATCH | /submissions/:id/grade | **[teacher]** grade + feedback |
| GET | /homework/:id/submissions | **[teacher]** |

## Quizzes
| Method | Path | Notes |
|---|---|---|
| GET | /quizzes/:id | (options only, no correctIndex sent to students) |
| POST | /quizzes | **[admin/teacher]** author |
| POST | /quizzes/:id/attempts | **[student]** submit answers → server-graded |
| GET | /quizzes/:id/attempts | **[teacher/admin]** results |

## Attendance
| Method | Path | Notes |
|---|---|---|
| POST | /attendance | **[teacher]** bulk mark for a class |
| GET | /attendance?classId=\|studentId= | |

## Announcements
| Method | Path | Notes |
|---|---|---|
| GET | /announcements?scope=&scopeId= | |
| POST | /announcements | **[admin/teacher]** |
| DELETE | /announcements/:id | |

## Reports **[admin]**
| Method | Path | Notes |
|---|---|---|
| GET | /reports/attendance | by student/teacher/date range |
| GET | /reports/teacher-attendance | |
| GET | /reports/course-completion | |
| GET | /reports/quiz-scores | |

## Uploads
| Method | Path | Notes |
|---|---|---|
| POST | /uploads/signature | returns Cloudinary signed params (or local-upload token in dev) |
| POST | /uploads/local | dev-only fallback direct upload |

## Dashboard
| Method | Path | Notes |
|---|---|---|
| GET | /dashboard/admin | stat tiles + recent registrations + today's classes |
| GET | /dashboard/teacher | today's classes, assigned students, schedule |
| GET | /dashboard/student | today's lesson, upcoming classes, progress, homework, quiz results |
