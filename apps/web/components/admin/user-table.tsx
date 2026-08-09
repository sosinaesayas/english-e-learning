"use client";

import { useRouter } from "next/navigation";
import { Trash2 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import type { PublicUser } from "@/lib/types";
import { UserStatus } from "@tutor/shared";

export function UserTable({
  users,
  isLoading,
  basePath,
  emptyLabel,
  onDeleteClick,
}: {
  users: PublicUser[] | undefined;
  isLoading: boolean;
  basePath: string;
  emptyLabel: string;
  onDeleteClick?: (user: PublicUser) => void;
}) {
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-12 w-full" />
        ))}
      </div>
    );
  }

  if (!users || users.length === 0) {
    return (
      <div className="rounded-lg border border-dashed p-10 text-center text-muted-foreground">
        {emptyLabel}
      </div>
    );
  }

  return (
    <div className="rounded-lg bg-card shadow-soft ring-1 ring-foreground/5">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Status</TableHead>
            {onDeleteClick && <TableHead className="w-10" />}
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              className="cursor-pointer"
              onClick={() => router.push(`${basePath}/${user.id}`)}
            >
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell className="text-muted-foreground">{user.email}</TableCell>
              <TableCell className="text-muted-foreground">{user.phone ?? "—"}</TableCell>
              <TableCell>
                <Badge variant={user.status === UserStatus.Active ? "default" : "secondary"}>
                  {user.status}
                </Badge>
              </TableCell>
              {onDeleteClick && (
                <TableCell>
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon-sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      onDeleteClick(user);
                    }}
                  >
                    <Trash2 className="size-4 text-destructive" />
                  </Button>
                </TableCell>
              )}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
