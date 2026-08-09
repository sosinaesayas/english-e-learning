# Folder Structure

```
tutor/
├── apps/
│   ├── api/                          NestJS backend
│   │   ├── src/
│   │   │   ├── main.ts
│   │   │   ├── app.module.ts
│   │   │   ├── config/                env validation, config module
│   │   │   ├── common/
│   │   │   │   ├── guards/            jwt-auth.guard.ts, roles.guard.ts
│   │   │   │   ├── decorators/        roles.decorator.ts, current-user.decorator.ts
│   │   │   │   ├── filters/           http-exception.filter.ts
│   │   │   │   └── interceptors/
│   │   │   ├── database/              mongoose connection module
│   │   │   └── modules/
│   │   │       ├── auth/
│   │   │       ├── users/
│   │   │       ├── courses/
│   │   │       ├── classes/
│   │   │       ├── homework/
│   │   │       ├── quizzes/
│   │   │       ├── attendance/
│   │   │       ├── announcements/
│   │   │       ├── notifications/     EmailService + Resend/console providers
│   │   │       ├── uploads/           StorageService + Cloudinary/local providers
│   │   │       ├── reports/
│   │   │       └── dashboard/
│   │   │   each module/: *.module.ts, *.controller.ts, *.service.ts, schemas/*.schema.ts, dto/*.dto.ts
│   │   ├── test/
│   │   ├── scripts/seed.ts            imports content/level-* into the DB
│   │   └── .env.example
│   │
│   └── web/                          Next.js frontend
│       ├── app/                       see docs/03 & 05 for the full route+component tree
│       ├── components/{ui,shell,shared}/
│       ├── lib/                       api-client.ts, auth.ts, hooks/
│       ├── middleware.ts
│       └── .env.example
│
├── packages/
│   └── shared/                       TS types/enums/DTOs shared by api & web (Role, CourseLevel, ClassStatus, ...)
│
├── content/                          existing level 1-4 curriculum (unchanged), read by scripts/seed.ts
│   ├── level 1/ ... level 4/
│   └── English-for-Ethiopia-4-Level-Curriculum.pptx
│
├── docs/                             this design documentation
├── pnpm-workspace.yaml
├── package.json                      root scripts (dev, build, seed)
└── .env.example
```

Rationale: `apps/*` keep frontend and backend independently deployable; `packages/shared` prevents type drift between the DTOs NestJS validates and the types the Next.js app expects back; `content/` stays untouched as the source of truth the seed script reads from, so re-seeding is always reproducible from the real curriculum files.
