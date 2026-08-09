export enum Role {
  Admin = "admin",
  Teacher = "teacher",
  Student = "student",
}

export enum UserStatus {
  Active = "active",
  Inactive = "inactive",
}

export enum CourseLevel {
  Beginner = 1,
  Elementary = 2,
  Intermediate = 3,
  AdvancedSpoken = 4,
}

export const COURSE_LEVEL_LABEL: Record<CourseLevel, string> = {
  [CourseLevel.Beginner]: "Beginner English",
  [CourseLevel.Elementary]: "Elementary English",
  [CourseLevel.Intermediate]: "Intermediate English",
  [CourseLevel.AdvancedSpoken]: "Advanced Spoken English",
};

export enum ClassStatus {
  Upcoming = "upcoming",
  Live = "live",
  Completed = "completed",
  Cancelled = "cancelled",
}

export enum EnrollmentStatus {
  Active = "active",
  Completed = "completed",
  Paused = "paused",
}

export enum AttendanceStatus {
  Present = "present",
  Absent = "absent",
  Late = "late",
}

export enum AnnouncementScope {
  Course = "course",
  Class = "class",
  Global = "global",
}

export enum EmailType {
  Registration = "registration",
  TeacherAssignment = "teacher-assignment",
  ClassScheduled = "class-scheduled",
  Reminder24h = "reminder-24h",
  Reminder1h = "reminder-1h",
  HomeworkAssigned = "homework-assigned",
  HomeworkGraded = "homework-graded",
  PasswordReset = "password-reset",
  CourseCompleted = "course-completed",
}
