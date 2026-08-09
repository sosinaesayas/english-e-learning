# Component Hierarchy (apps/web)

```
app/
  layout.tsx                        root layout (fonts, providers: QueryClientProvider, ThemeProvider)
  (marketing)/
    page.tsx                        landing page
  (auth)/
    login/page.tsx
    forgot-password/page.tsx
    reset-password/page.tsx
  admin/
    layout.tsx                      <AppShell role="admin">
    dashboard/page.tsx               <StatTile/> ×5, <RecentRegistrations/>, <TodaysClasses/>
    students/page.tsx                <DataTable columns=.../> + <AddStudentDialog/>
    students/[id]/page.tsx           <StudentProfileCard/>, <ProgressChart/>, <AssignTeacherForm/>, <AssignCourseForm/>
    teachers/page.tsx, teachers/[id]/page.tsx     (mirrors students)
    courses/page.tsx                 <CourseGrid/>
    courses/[id]/page.tsx            <ModuleList/> → <LessonList/> → <LessonEditorDialog/>, <FileUploadField/>
    schedule/page.tsx                <Calendar/>, <ClassFormDialog/>
    reports/page.tsx                 <ReportTabs/> → <AttendanceReport/>, <CompletionReport/>, <QuizScoresReport/>
  teacher/
    layout.tsx                       <AppShell role="teacher">
    dashboard/page.tsx
    students/page.tsx
    schedule/page.tsx
    courses/[id]/page.tsx            upload materials/homework/quiz
    classes/[id]/page.tsx            <AttendanceForm/>, <SubmissionsToGrade/>
    announcements/page.tsx           <AnnouncementForm/>, <AnnouncementList/>
  student/
    layout.tsx                       <AppShell role="student">
    dashboard/page.tsx                <TodaysLessonCard/>, <ProgressRing/>, <UpcomingClassesList/>
    courses/[id]/page.tsx             <ModuleList readOnly/>
    lessons/[id]/page.tsx             <SlidesViewer/>, <PdfViewer/>, <VideoPlayer/>, <ResourceLinks/>
    homework/page.tsx                 <HomeworkList/> → <SubmitHomeworkDialog/>
    quizzes/[id]/page.tsx             <QuizRunner/>
    schedule/page.tsx                 <Calendar readOnly/>
    certificate/page.tsx              <CertificateCard/>

components/
  ui/                                shadcn/ui primitives (button, input, dialog, table, tabs, calendar, badge, avatar, toast...)
  shell/
    AppShell.tsx                     sidebar + topbar + mobile nav, role-aware nav items
    Sidebar.tsx, Topbar.tsx, MobileNav.tsx
  shared/
    StatTile.tsx
    DataTable.tsx                    generic, used by every list page
    Calendar.tsx                     shared across admin/teacher/student
    FileUploadField.tsx              wraps Cloudinary signed upload
    ProgressBar.tsx / ProgressRing.tsx
    EmptyState.tsx
    ConfirmDialog.tsx

lib/
  api-client.ts                      fetch wrapper, attaches cookies, handles 401 → refresh
  auth.ts                            getSession() server helper for Server Components
  hooks/                             useCourses(), useSchedule(), useHomework(), ... (TanStack Query)
```

Rule of thumb: every list page = `DataTable` + a create dialog; every entity detail page = a header card + tabs for related data (e.g. a student's page has Profile / Progress / Homework / Attendance tabs). This is what keeps the UI learnable without training — one interaction pattern repeated everywhere.
