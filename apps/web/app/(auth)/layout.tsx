import Link from "next/link";
import { GraduationCap } from "lucide-react";
import { ThemeToggle } from "@/components/shared/theme-toggle";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative flex flex-1 flex-col items-center justify-center bg-background px-4 py-12">
      <div className="absolute right-4 top-4">
        <ThemeToggle />
      </div>
      <Link href="/" className="mb-8 flex items-center gap-2 font-heading text-lg font-semibold">
        <GraduationCap className="size-6 text-primary" />
        English Academy
      </Link>
      <div className="w-full max-w-sm rounded-xl bg-card p-8 shadow-soft-lg ring-1 ring-foreground/5">
        {children}
      </div>
    </div>
  );
}
