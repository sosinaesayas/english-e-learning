"use client";

import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type {
  AttendanceReport,
  ClassStatsReport,
  EnrollmentReportRow,
  QuizReport,
  TeacherReportRow,
} from "@/lib/types";

export function useEnrollmentReport() {
  return useQuery({
    queryKey: ["reports", "enrollment"],
    queryFn: () => api.get<EnrollmentReportRow[]>("/reports/enrollment"),
  });
}

export function useTeacherReport() {
  return useQuery({
    queryKey: ["reports", "teachers"],
    queryFn: () => api.get<TeacherReportRow[]>("/reports/teachers"),
  });
}

export function useClassStatsReport() {
  return useQuery({
    queryKey: ["reports", "classes"],
    queryFn: () => api.get<ClassStatsReport>("/reports/classes"),
  });
}

export function useAttendanceReport() {
  return useQuery({
    queryKey: ["reports", "attendance"],
    queryFn: () => api.get<AttendanceReport>("/reports/attendance"),
  });
}

export function useQuizReport() {
  return useQuery({
    queryKey: ["reports", "quizzes"],
    queryFn: () => api.get<QuizReport>("/reports/quizzes"),
  });
}
