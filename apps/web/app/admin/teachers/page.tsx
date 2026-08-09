"use client";

import { useState } from "react";
import { Search } from "lucide-react";
import { toast } from "sonner";
import { Input } from "@/components/ui/input";
import { UserTable } from "@/components/admin/user-table";
import { AddUserDialog } from "@/components/admin/add-user-dialog";
import { ConfirmDialog } from "@/components/shared/confirm-dialog";
import { useUsersByRole, useDeleteUser } from "@/lib/hooks/use-users";
import { ApiError } from "@/lib/api-client";
import { Role } from "@tutor/shared";
import type { PublicUser } from "@/lib/types";

export default function TeachersPage() {
  const [search, setSearch] = useState("");
  const { data: users, isLoading } = useUsersByRole(Role.Teacher, search);
  const deleteUser = useDeleteUser();
  const [userToDelete, setUserToDelete] = useState<PublicUser | null>(null);

  async function onDelete() {
    if (!userToDelete) return;
    try {
      await deleteUser.mutateAsync(userToDelete.id);
      toast.success(`${userToDelete.name} was deleted`);
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not delete teacher");
    }
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold">Teachers</h1>
        <AddUserDialog role={Role.Teacher} />
      </div>

      <div className="relative mt-6 max-w-sm">
        <Search className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          placeholder="Search teachers…"
          className="pl-9"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="mt-6">
        <UserTable
          users={users}
          isLoading={isLoading}
          basePath="/admin/teachers"
          emptyLabel="No teachers yet — add your first one above."
          onDeleteClick={setUserToDelete}
        />
      </div>

      <ConfirmDialog
        open={!!userToDelete}
        onOpenChange={(open) => !open && setUserToDelete(null)}
        title={`Delete ${userToDelete?.name}?`}
        description="This permanently deletes their account. Any students assigned to this teacher will become unassigned. This can't be undone."
        confirmLabel="Delete teacher"
        onConfirm={onDelete}
      />
    </div>
  );
}
