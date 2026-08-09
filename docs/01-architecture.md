# System Architecture

## Overview

A monorepo web application with a decoupled Next.js frontend and NestJS backend, talking over a versioned REST API, backed by MongoDB. Three role-based experiences (Admin / Teacher / Student) share one codebase but render different navigation and pages based on a JWT role claim.

```
                         ┌─────────────────────────┐
                         │        Browser          │
                         │  (Admin / Teacher /      │
                         │   Student — responsive)  │
                         └────────────┬─────────────┘
                                      │ HTTPS
                         ┌────────────▼─────────────┐
                         │   Next.js 14 (App Router) │
                         │   apps/web                │
                         │   - Server Components      │
                         │   - Middleware (route      │
                         │     guard by role cookie)  │
                         │   - TanStack Query client   │
                         └────────────┬─────────────┘
                                      │ REST (JSON), httpOnly cookies
                         ┌────────────▼─────────────┐
                         │       NestJS API          │
                         │       apps/api            │
                         │  ┌──────────────────────┐ │
                         │  │ AuthModule (JWT)      │ │
                         │  │ UsersModule           │ │
                         │  │ CoursesModule         │ │
                         │  │ ClassesModule         │ │
                         │  │ HomeworkModule        │ │
                         │  │ QuizzesModule         │ │
                         │  │ AttendanceModule      │ │
                         │  │ AnnouncementsModule   │ │
                         │  │ NotificationsModule   │ │
                         │  │ UploadsModule         │ │
                         │  │ ReportsModule         │ │
                         │  │ DashboardModule       │ │
                         │  └──────────┬────────────┘ │
                         └─────────────┼──────────────┘
                     ┌─────────────────┼────────────────────┐
                     │                 │                    │
             ┌───────▼──────┐  ┌───────▼───────┐   ┌────────▼────────┐
             │   MongoDB     │  │  Cloudinary   │   │  Resend (email)  │
             │  (Mongoose)   │  │  (files, w/   │   │  (w/ console-log │
             │               │  │  local-disk   │   │  fallback if no  │
             │               │  │  dev fallback)│   │  API key set)    │
             └───────────────┘  └───────────────┘   └───────────────────┘

Google Meet links are opaque strings stored on ClassSchedule — no OAuth
integration; the platform never creates or manages the meetings themselves.
```

## Key Architectural Decisions

1. **Separate frontend/backend apps in one pnpm monorepo**, not a single Next.js full-stack app. This keeps the API reusable (e.g. a future mobile app) and keeps NestJS's module/guard/DI system for the sizable amount of role-gated business logic (scheduling, grading, reports).
2. **JWT in httpOnly cookies**, not localStorage — avoids XSS token theft. Short-lived access token (15 min) + longer-lived refresh token (7 days), refreshed transparently via an API route.
3. **Role-based access enforced twice**: Next.js `middleware.ts` blocks navigation to the wrong role's routes (UX-level), and NestJS `RolesGuard` + `@Roles()` decorator enforce it again server-side on every request (security boundary — the real enforcement).
4. **Provider abstraction for email and file storage** (`EmailService`, `StorageService` interfaces). Both have a working no-credentials fallback (console-log email, local-disk upload) so the app runs immediately in dev without external accounts, and swapping to Resend/Cloudinary in production is just setting env vars.
5. **Event-driven side effects**: business modules emit domain events (`UserCreatedEvent`, `ClassScheduledEvent`, `HomeworkGradedEvent`, ...) via `EventEmitter2`; a `NotificationsModule` listener turns those into emails. Keeps CRUD services free of "and also send 3 emails" branching.
6. **Cron-driven reminders**: `@nestjs/schedule` runs a job every few minutes that finds `ClassSchedule` docs starting in ~24h / ~1h and haven't been reminded yet, sends the reminder email, and flags them so they aren't re-sent.
7. **MongoDB via Mongoose** for schema-flexible but still-validated documents (course content shapes vary: some lessons have videos, some don't).

## Environments

- **Dev**: local `mongod`, local-disk uploads, console-log email — zero external accounts required to run the whole app.
- **Prod**: managed MongoDB (Atlas), Cloudinary, Resend, real domain + HTTPS, secrets via environment variables (see `.env.example`).
