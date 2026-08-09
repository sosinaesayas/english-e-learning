"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Megaphone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useCreateAnnouncement } from "@/lib/hooks/use-announcements";
import { ApiError } from "@/lib/api-client";

export function AnnouncementForm() {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const createAnnouncement = useCreateAnnouncement();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!title.trim() || !message.trim()) return;
    try {
      await createAnnouncement.mutateAsync({ title, message });
      toast.success("Announcement posted");
      setTitle("");
      setMessage("");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not post announcement");
    }
  }

  return (
    <Card>
      <CardContent>
        <form onSubmit={onSubmit} className="space-y-3">
          <div className="flex items-center gap-2 font-heading text-base font-medium">
            <Megaphone className="size-4 text-primary" />
            New announcement
          </div>
          <div className="space-y-2">
            <Label htmlFor="announcement-title">Title</Label>
            <Input
              id="announcement-title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="e.g. No class this Friday"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="announcement-message">Message</Label>
            <Textarea
              id="announcement-message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write your announcement…"
            />
          </div>
          <Button type="submit" disabled={createAnnouncement.isPending}>
            {createAnnouncement.isPending ? "Posting…" : "Post announcement"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
