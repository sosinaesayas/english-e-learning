"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { Quiz } from "@/lib/types";

export function useQuizzes() {
  return useQuery({
    queryKey: ["quizzes"],
    queryFn: () => api.get<Quiz[]>("/quizzes"),
  });
}

export interface CreateQuizInput {
  courseId: string;
  title: string;
  questions: { text: string; options: string[]; correctIndex: number }[];
}

export function useCreateQuiz() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: CreateQuizInput) => api.post<Quiz>("/quizzes", input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["quizzes"] }),
  });
}

export function useDeleteQuiz() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/quizzes/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["quizzes"] }),
  });
}

export function useAttemptQuiz(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (answers: number[]) => api.post<Quiz>(`/quizzes/${id}/attempt`, { answers }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["quizzes"] }),
  });
}
