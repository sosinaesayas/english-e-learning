"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { Announcement } from "@/lib/types";

export function useAnnouncements() {
  return useQuery({
    queryKey: ["announcements"],
    queryFn: () => api.get<Announcement[]>("/announcements"),
  });
}

export function useCreateAnnouncement() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (input: { title: string; message: string }) =>
      api.post<Announcement>("/announcements", input),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ["announcements"] });
      qc.invalidateQueries({ queryKey: ["dashboard"] });
    },
  });
}

export function useDeleteAnnouncement() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (id: string) => api.delete(`/announcements/${id}`),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["announcements"] }),
  });
}
