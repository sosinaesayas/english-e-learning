import { requireRole } from "@/lib/auth";
import { Role } from "@tutor/shared";
import { CertificatesList } from "@/components/student/certificates-list";

export default async function StudentCertificatePage() {
  const user = await requireRole(Role.Student);
  return (
    <div>
      <h1 className="text-2xl font-semibold">Certificate</h1>
      <p className="mt-1 text-muted-foreground">Certificates issued by your teacher.</p>
      <CertificatesList studentName={user.name} />
    </div>
  );
}
