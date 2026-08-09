"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Trash2 } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { useDeleteAnnouncement } from "@/lib/hooks/use-announcements";
import { ApiError } from "@/lib/api-client";
import type { Announcement } from "@/lib/types";

export function AnnouncementCard({ announcement }: { announcement: Announcement }) {
  const deleteAnnouncement = useDeleteAnnouncement();
  const [confirmOpen, setConfirmOpen] = useState(false);

  async function onDelete() {
    try {
      await deleteAnnouncement.mutateAsync(announcement.id);
      toast.success("Announcement removed");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not remove announcement");
    }
  }

  return (
    <Card>
      <CardContent className="flex items-start justify-between gap-4">
        <div className="min-w-0">
          <p className="font-medium">{announcement.title}</p>
          <p className="mt-1 text-sm text-muted-foreground">{announcement.message}</p>
          <p className="mt-2 text-xs text-muted-foreground">
            {new Date(announcement.createdAt).toLocaleDateString(undefined, {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </p>
        </div>
        <Button
          type="button"
          variant="ghost"
          size="icon-sm"
          title="Delete announcement"
          onClick={() => setConfirmOpen(true)}
        >
          <Trash2 className="size-4 text-destructive" />
        </Button>
      </CardContent>

      <ConfirmDialog
        open={confirmOpen}
        onOpenChange={setConfirmOpen}
        title="Delete this announcement?"
        description="Students will no longer see it. This can't be undone."
        confirmLabel="Delete announcement"
        onConfirm={onDelete}
      />
    </Card>
  );
}
