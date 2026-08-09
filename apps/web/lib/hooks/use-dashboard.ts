"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { AdminDashboardStats, StudentDashboardStats, TeacherDashboardStats } from "@/lib/types";

export function useAdminDashboard() {
  return useQuery({
    queryKey: ["dashboard", "admin"],
    queryFn: () => api.get<AdminDashboardStats>("/dashboard/admin"),
  });
}

export function useTeacherDashboard() {
  return useQuery({
    queryKey: ["dashboard", "teacher"],
    queryFn: () => api.get<TeacherDashboardStats>("/dashboard/teacher"),
  });
}

export function useStudentDashboard() {
  return useQuery({
    queryKey: ["dashboard", "student"],
    queryFn: () => api.get<StudentDashboardStats>("/dashboard/student"),
  });
}
