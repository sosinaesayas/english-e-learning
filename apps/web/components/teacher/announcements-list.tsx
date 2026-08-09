"use client";

import { Skeleton } from "@/components/ui/skeleton";
import { AnnouncementCard } from "@/components/teacher/announcement-card";
import { useAnnouncements } from "@/lib/hooks/use-announcements";

export function AnnouncementsList() {
  const { data: announcements, isLoading } = useAnnouncements();

  if (isLoading) {
    return (
      <div className="space-y-3">
        <Skeleton className="h-20 w-full" />
        <Skeleton className="h-20 w-full" />
      </div>
    );
  }

  if (!announcements || announcements.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
        No announcements yet.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {announcements.map((a) => (
        <AnnouncementCard key={a.id} announcement={a} />
      ))}
    </div>
  );
}
