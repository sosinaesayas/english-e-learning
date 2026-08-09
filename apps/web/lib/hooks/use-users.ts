"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { PublicUser } from "@/lib/types";
import type { Role } from "@tutor/shared";

export function useUsersByRole(role: Role, search: string) {
  return useQuery({
    queryKey: ["users", role, search],
    queryFn: () =>
      api.get<PublicUser[]>(`/users?role=${role}${search ? `&search=${encodeURIComponent(search)}` : ""}`),
  });
}

export function useUser(id: string | undefined) {
  return useQuery({
    queryKey: ["users", "detail", id],
    queryFn: () => api.get<PublicUser>(`/users/${id}`),
    enabled: !!id,
  });
}

export function useCreateUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: { name: string; email: string; phone?: string; role: Role }) =>
      api.post<PublicUser>("/users", input),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] }),
  });
}

export function useUpdateUser(id: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: { name?: string; phone?: string; status?: string }) =>
      api.patch<PublicUser>(`/users/${id}`, input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export function useAssignTeacher(studentId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (teacherId: string) =>
      api.post<PublicUser>(`/users/${studentId}/assign-teacher`, { teacherId }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] }),
  });
}

export function useAssignCourse(studentId: string) {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (courseId: string) =>
      api.post<PublicUser>(`/users/${studentId}/assign-course`, { courseId }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["users"] }),
  });
}

export function useDeleteUser() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/users/${id}`),
    onSuccess: (_data, id) => {
      // Drop the now-404ing detail query first so the broad invalidation
      // below doesn't try to refetch it and stall on the resulting error.
      qc.removeQueries({ queryKey: ["users", "detail", id] });
      qc.invalidateQueries({ queryKey: ["users"] });
    },
  });
}

export function useTeacherStudents(teacherId: string | undefined) {
  return useQuery({
    queryKey: ["users", "teacher-students", teacherId],
    queryFn: () => api.get<PublicUser[]>(`/users/${teacherId}/students`),
    enabled: !!teacherId,
  });
}

export function useMyStudents() {
  return useQuery({
    queryKey: ["users", "my-students"],
    queryFn: () => api.get<PublicUser[]>("/users/me/students"),
  });
}
