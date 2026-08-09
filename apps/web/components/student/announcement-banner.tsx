import { Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function AnnouncementBanner({
  announcement,
}: {
  announcement: { title: string; message: string; createdAt: string };
}) {
  return (
    <Card>
      <CardContent className="flex items-start gap-3">
        <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          <Megaphone className="size-4.5" />
        </div>
        <div className="min-w-0">
          <p className="font-medium">{announcement.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{announcement.message}</p>
        </div>
      </CardContent>
    </Card>
  );
}
