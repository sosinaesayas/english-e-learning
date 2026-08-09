import {
  LayoutDashboard,
  Users,
  GraduationCap,
  BookOpen,
  CalendarDays,
  BarChart3,
  Megaphone,
  ClipboardList,
  Award,
  ListChecks,
  type LucideIcon,
} from "lucide-react";
import { Role } from "@tutor/shared";

export interface NavItem {
  label: string;
  href: string;
  icon: LucideIcon;
}

export const NAV_ITEMS: Record<Role, NavItem[]> = {
  [Role.Admin]: [
    { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
    { label: "Students", href: "/admin/students", icon: Users },
    { label: "Teachers", href: "/admin/teachers", icon: GraduationCap },
    { label: "Courses", href: "/admin/courses", icon: BookOpen },
    { label: "Schedule", href: "/admin/schedule", icon: CalendarDays },
    { label: "Reports", href: "/admin/reports", icon: BarChart3 },
  ],
  [Role.Teacher]: [
    { label: "Dashboard", href: "/teacher/dashboard", icon: LayoutDashboard },
    { label: "Students", href: "/teacher/students", icon: Users },
    { label: "Schedule", href: "/teacher/schedule", icon: CalendarDays },
    { label: "Homework", href: "/teacher/homework", icon: ClipboardList },
    { label: "Quizzes", href: "/teacher/quizzes", icon: ListChecks },
    { label: "Announcements", href: "/teacher/announcements", icon: Megaphone },
  ],
  [Role.Student]: [
    { label: "Dashboard", href: "/student/dashboard", icon: LayoutDashboard },
    { label: "My Course", href: "/student/course", icon: BookOpen },
    { label: "Schedule", href: "/student/schedule", icon: CalendarDays },
    { label: "Homework", href: "/student/homework", icon: ClipboardList },
    { label: "Quizzes", href: "/student/quizzes", icon: ListChecks },
    { label: "Certificate", href: "/student/certificate", icon: Award },
  ],
};
