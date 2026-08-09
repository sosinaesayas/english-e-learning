"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { AttendanceRecord, ScheduledClass } from "@/lib/types";

export function useClasses() {
  return useQuery({
    queryKey: ["schedule"],
    queryFn: () => api.get<ScheduledClass[]>("/schedule"),
  });
}

export interface CreateClassInput {
  courseId: string;
  teacherId: string;
  studentIds: string[];
  startsAt: string;
  durationMinutes: number;
  meetLink: string;
}

export function useCreateClass() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateClassInput) => api.post<ScheduledClass>("/schedule", input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["schedule"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
}

export function useCancelClass() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.patch<ScheduledClass>(`/schedule/${id}`, { cancelled: true }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["schedule"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
}

export function useMarkAttendance(classId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (records: AttendanceRecord[]) =>
      api.patch<ScheduledClass>(`/schedule/${classId}/attendance`, { records }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["schedule"] }),
  });
}

export function useDeleteClass() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/schedule/${id}`),
    onSuccess: (_data, id) => {
      qc.removeQueries({ queryKey: ["schedule", "detail", id] });
      qc.invalidateQueries({ queryKey: ["schedule"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
}
