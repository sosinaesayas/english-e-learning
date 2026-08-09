# UI Wireframes (low-fidelity)

Design language: white background, one primary accent color (indigo/blue), generous padding, large rounded buttons, minimal chrome. Sidebar + topbar shell for all authenticated roles; centered card for auth pages.

## Login

```
┌───────────────────────────────────────────┐
│                  [ Logo ]                   │
│              English Academy                │
│                                               │
│   ┌───────────────────────────────────┐     │
│   │  Email                             │     │
│   ├───────────────────────────────────┤     │
│   │  Password                          │     │
│   └───────────────────────────────────┘     │
│              [   Log In   ]                  │
│            Forgot password?                  │
└───────────────────────────────────────────┘
```

## Authenticated shell (desktop ≥1024px)

```
┌──────────┬──────────────────────────────────────────┐
│  Logo    │  Page title                 🔔  Avatar ▾  │
│──────────│──────────────────────────────────────────│
│ Dashboard│                                            │
│ Students │              page content                 │
│ Teachers │                                            │
│ Courses  │                                            │
│ Schedule │                                            │
│ Reports  │                                            │
│          │                                            │
└──────────┴──────────────────────────────────────────┘
```

On tablet the sidebar collapses to icons; on mobile (<640px) it becomes a bottom tab bar and the topbar keeps only title + avatar.

## Admin Dashboard

```
┌────────────────────────────────────────────────────┐
│  [Students: 128]  [Teachers: 12]  [Courses: 4]      │
│  [Today's Classes: 6]  [Upcoming: 21]                │
│──────────────────────────────────────────────────────│
│  Recent Registrations              Today's Classes    │
│  ┌──────────────────────┐          ┌────────────────┐│
│  │ name · role · date    │          │ time · teacher ││
│  │ ...                   │          │ · course       ││
│  └──────────────────────┘          └────────────────┘│
└────────────────────────────────────────────────────┘
```
Stat tiles are large tap targets that deep-link to the filtered list (e.g. "Today's Classes" → Schedule filtered to today).

## Student Dashboard

```
┌────────────────────────────────────────────────────┐
│  Today's Lesson                                       │
│  ┌──────────────────────────────────────────────┐    │
│  │ Level 2 · Module 3 · "Past Tense"    [Join ▶] │    │
│  └──────────────────────────────────────────────┘    │
│  Current Course              Progress                 │
│  ┌────────────────┐          ┌───────────────────┐   │
│  │ Elementary Eng. │          │ ████████░░  62%   │   │
│  └────────────────┘          └───────────────────┘   │
│  Upcoming Classes   Homework Due   Quiz Results        │
└────────────────────────────────────────────────────┘
```

## Teacher — Class view (attendance + grading)

```
┌────────────────────────────────────────────────────┐
│  Class: Elementary English · Jul 28, 3:00pm · 45min  │
│  [ Open Google Meet ]                                 │
│──────────────────────────────────────────────────────│
│  Attendance                                            │
│  ☐ Present ☐ Absent ☐ Late   — Abebe K.               │
│  ☐ Present ☐ Absent ☐ Late   — Sara T.                │
│  [ Save Attendance ]                                   │
│──────────────────────────────────────────────────────│
│  Submissions to grade                                  │
│  Abebe K. — homework_1.pdf         [Grade]             │
└────────────────────────────────────────────────────┘
```

## Admin — Course editor

```
┌────────────────────────────────────────────────────┐
│  Beginner English (Level 1)              [+ Module] │
│  ▸ Module 1: The English Alphabet          [Edit]    │
│     • Lesson 1 (slides.pptx)               [Edit]    │
│     • Lesson 2                              [+Add]   │
│  ▸ Module 2: Greetings                                │
└────────────────────────────────────────────────────┘
```

All forms use large labeled inputs, inline validation messages, and a single primary action button per screen — no multi-button ambiguity.
