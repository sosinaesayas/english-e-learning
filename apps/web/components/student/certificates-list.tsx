"use client";

import { Award } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";
import { CertificateView } from "@/components/student/certificate-view";
import { useCertificates } from "@/lib/hooks/use-certificates";

export function CertificatesList({ studentName }: { studentName: string }) {
  const { data: certificates, isLoading } = useCertificates();

  if (isLoading) {
    return (
      <div className="mt-6">
        <Skeleton className="h-64 w-full" />
      </div>
    );
  }

  if (!certificates || certificates.length === 0) {
    return (
      <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-16 text-center">
        <Award className="size-8 text-muted-foreground" />
        <p className="max-w-sm text-muted-foreground">
          No certificates yet — ask your teacher.
        </p>
      </div>
    );
  }

  return (
    <div className="mt-6 space-y-4">
      {certificates.map((cert) => (
        <CertificateView key={cert.id} certificate={cert} studentName={studentName} />
      ))}
    </div>
  );
}
