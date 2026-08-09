"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { api } from "@/lib/api-client";
import type { Certificate } from "@/lib/types";

export function useCertificates() {
  return useQuery({
    queryKey: ["certificates"],
    queryFn: () => api.get<Certificate[]>("/certificates"),
  });
}

export function useIssueCertificate() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (studentId: string) => api.post<Certificate>("/certificates", { studentId }),
    onSuccess: () => qc.invalidateQueries({ queryKey: ["certificates"] }),
  });
}
