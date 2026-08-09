# Development Plan

Delivered module by module rather than as one large batch, so working, testable software exists after every phase.

## Phase 0 — Foundation
- `/docs` deliverables (this set)
- pnpm monorepo scaffold: `apps/api` (NestJS + Mongoose), `apps/web` (Next.js + TS + Tailwind + shadcn/ui), `packages/shared`
- Mongo connection (local `mongod`), base config/env validation
- Auth module end-to-end: `User` schema, JWT login, forgot/reset password, `RolesGuard`; matching Next.js login/forgot/reset pages + `middleware.ts`
- Seed script parsing the real `level 1`–`level 4` folders into `Course`/`Module`/`Lesson` documents + seeded admin/teacher/student accounts

## Phase 1 — Admin core
- Student & Teacher management: CRUD, assign-teacher, assign-course (API + admin UI)
- Course/Module/Lesson management: CRUD + file upload, admin course editor UI
- Admin dashboard stats endpoint + UI

## Phase 2 — Scheduling & email
- `ClassSchedule` CRUD API + calendar UI (admin/teacher/student, each scoped to their own classes)
- Event-driven emails: registration, teacher assignment, class scheduled
- Cron reminders: 24h and 1h before class

## Phase 3 — Teacher & student workflows
- Homework: assign, submit, grade (+ email on grade)
- Quizzes: author, take, server-side auto-grade
- Attendance: mark per class
- Announcements: post, scoped list
- Teacher dashboard/UI, Student dashboard/UI

## Phase 4 — Reports, certificates, polish
- Admin reports: attendance, teacher attendance, course completion, quiz scores
- Certificate generation on 100% course completion
- Responsive/empty-state/loading-state polish across desktop/tablet/mobile
- Pass over accessibility (contrast, focus states, tap target sizes) and error handling

## Working agreement
- Each phase is verified by actually running both apps and clicking through the golden path as each of the three seeded roles, not just by a successful build/typecheck.
- A short status update is given at each phase boundary: what shipped, what's next, anything that needs a decision (e.g. real Cloudinary/Resend credentials for production).
