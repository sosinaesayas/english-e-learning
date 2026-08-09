"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { Course, CourseDetail, LessonProgress, ToggleLessonResult } from "@/lib/types";

export function useCourses() {
  return useQuery({
    queryKey: ["courses"],
    queryFn: () => api.get<Course[]>("/courses"),
  });
}

export function useMyProgress() {
  return useQuery({
    queryKey: ["courses", "progress"],
    queryFn: () => api.get<LessonProgress>("/courses/me/progress"),
  });
}

export function useToggleLesson() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ lessonId, completed }: { lessonId: string; completed: boolean }) =>
      api.patch<ToggleLessonResult>(`/courses/me/lessons/${lessonId}`, { completed }),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["courses", "progress"] });
      qc.invalidateQueries({ queryKey: ["certificates"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
}

export function useCourse(id: string | undefined) {
  return useQuery({
    queryKey: ["courses", id],
    queryFn: () => api.get<CourseDetail>(`/courses/${id}`),
    enabled: !!id,
  });
}

export function useCreateModule(courseId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (title: string) => api.post(`/courses/${courseId}/modules`, { title }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["courses", courseId] }),
  });
}

export function useUpdateModule(courseId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ id, title }: { id: string; title: string }) =>
      api.patch(`/modules/${id}`, { title }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["courses", courseId] }),
  });
}

export function useDeleteModule(courseId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/modules/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["courses", courseId] }),
  });
}

export function useCreateLesson(courseId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ moduleId, title }: { moduleId: string; title: string }) =>
      api.post(`/modules/${moduleId}/lessons`, { title }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["courses", courseId] }),
  });
}

export function useUpdateLesson(courseId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({
      id,
      ...data
    }: {
      id: string;
      title?: string;
      slidesUrl?: string;
      pdfUrls?: string[];
      videoUrls?: string[];
    }) => api.patch(`/lessons/${id}`, data),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["courses", courseId] }),
  });
}

export function useDeleteLesson(courseId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/lessons/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["courses", courseId] }),
  });
}
