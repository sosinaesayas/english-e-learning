import type { LucideIcon } from "lucide-react";

export function ComingSoon({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div>
      <h1 className="text-2xl font-semibold">{title}</h1>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 rounded-lg border border-dashed p-16 text-center">
        <Icon className="size-8 text-muted-foreground" />
        <p className="max-w-sm text-muted-foreground">{description}</p>
      </div>
    </div>
  );
}
