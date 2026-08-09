"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { Homework } from "@/lib/types";

export function useHomework() {
  return useQuery({
    queryKey: ["homework"],
    queryFn: () => api.get<Homework[]>("/homework"),
  });
}

export interface CreateHomeworkInput {
  courseId: string;
  title: string;
  description?: string;
  dueDate: string;
  studentIds: string[];
}

export function useCreateHomework() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateHomeworkInput) => api.post<Homework>("/homework", input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["homework"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
}

export function useDeleteHomework() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/homework/${id}`),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["homework"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
}

export function useSubmitHomework(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (text: string) => api.post<Homework>(`/homework/${id}/submit`, { text }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["homework"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
}

export function useGradeHomework(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      studentId,
      grade,
      feedback,
    }: {
      studentId: string;
      grade: number;
      feedback?: string;
    }) => api.patch<Homework>(`/homework/${id}/grade/${studentId}`, { grade, feedback }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["homework"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
}
