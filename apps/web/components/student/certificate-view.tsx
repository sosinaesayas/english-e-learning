"use client";

import { Award, Printer } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COURSE_LEVEL_LABEL } from "@tutor/shared";
import type { Certificate } from "@/lib/types";

export function CertificateView({
  certificate,
  studentName,
}: {
  certificate: Certificate;
  studentName: string;
}) {
  const courseTitle = certificate.course
    ? (COURSE_LEVEL_LABEL[certificate.course.level as 1 | 2 | 3 | 4] ?? certificate.course.title)
    : "—";

  return (
    <Card className="print:shadow-none print:ring-0">
      <CardContent className="flex flex-col items-center gap-4 py-10 text-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <Award className="size-7" />
        </div>
        <div>
          <p className="text-sm text-muted-foreground">Certificate of Completion</p>
          <h2 className="mt-1 font-heading text-2xl font-semibold">{studentName}</h2>
        </div>
        <p className="max-w-sm text-muted-foreground">
          has successfully completed <span className="font-medium text-foreground">{courseTitle}</span>
        </p>
        <div className="mt-2 grid grid-cols-2 gap-x-10 gap-y-1 text-sm text-muted-foreground">
          <span>Certificate No.</span>
          <span className="text-foreground">{certificate.certificateNumber}</span>
          <span>Issued by</span>
          <span className="text-foreground">{certificate.teacher?.name ?? "—"}</span>
          <span>Date</span>
          <span className="text-foreground">
            {new Date(certificate.issuedAt).toLocaleDateString(undefined, {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </span>
        </div>
        <Button
          type="button"
          variant="outline"
          className="mt-2 print:hidden"
          onClick={() => window.print()}
        >
          <Printer className="size-4" />
          Print
        </Button>
      </CardContent>
    </Card>
  );
}
