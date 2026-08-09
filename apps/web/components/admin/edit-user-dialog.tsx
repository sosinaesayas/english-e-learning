"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogMedia,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUpdateUser } from "@/lib/hooks/use-users";
import { ApiError } from "@/lib/api-client";
import { UserStatus } from "@tutor/shared";
import type { PublicUser } from "@/lib/types";

const schema = z.object({
  name: z.string().min(2, "Enter a name"),
  phone: z.string().optional(),
  status: z.enum([UserStatus.Active, UserStatus.Inactive]),
});
type FormValues = z.infer<typeof schema>;

export function EditUserDialog({ user }: { user: PublicUser }) {
  const [open, setOpen] = useState(false);
  const updateUser = useUpdateUser(user.id);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    values: { name: user.name, phone: user.phone ?? "", status: user.status },
  });

  async function onSubmit(values: FormValues) {
    try {
      await updateUser.mutateAsync(values);
      toast.success("Changes saved");
      setOpen(false);
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not save changes");
    }
  }

  return (
    <Dialog
      open={open}
      onOpenChange={(next) => {
        setOpen(next);
        if (!next) reset();
      }}
    >
      <DialogTrigger className={buttonVariants({ variant: "outline" })}>
        <Pencil className="size-4" />
        Edit
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogMedia variant="primary">
            <Pencil className="size-5" />
          </DialogMedia>
          <DialogTitle>Edit {user.name}</DialogTitle>
          <DialogDescription>Update their details or account status.</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="edit-name">Full name</Label>
            <Input id="edit-name" {...register("name")} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="edit-phone">Phone</Label>
            <Input id="edit-phone" {...register("phone")} />
          </div>
          <div className="space-y-2">
            <Label>Status</Label>
            <Controller
              control={control}
              name="status"
              render={({ field }) => (
                <Select value={field.value} onValueChange={field.onChange}>
                  <SelectTrigger className="w-full">
                    <SelectValue>
                      {(value: string) => (value === UserStatus.Active ? "Active" : "Inactive")}
                    </SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value={UserStatus.Active}>Active</SelectItem>
                    <SelectItem value={UserStatus.Inactive}>Inactive</SelectItem>
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={updateUser.isPending}>
              {updateUser.isPending ? "Saving…" : "Save changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
