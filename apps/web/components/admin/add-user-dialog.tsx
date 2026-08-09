"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Plus } from "lucide-react";
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
import { useCreateUser } from "@/lib/hooks/use-users";
import { ApiError } from "@/lib/api-client";
import { Role } from "@tutor/shared";

const schema = z.object({
  name: z.string().min(2, "Enter a name"),
  email: z.string().email("Enter a valid email"),
  phone: z.string().optional(),
});
type FormValues = z.infer<typeof schema>;

export function AddUserDialog({ role }: { role: Role.Student | Role.Teacher }) {
  const [open, setOpen] = useState(false);
  const createUser = useCreateUser();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    try {
      await createUser.mutateAsync({ ...values, role });
      toast.success(`${values.name} added — an invite email was sent`);
      reset();
      setOpen(false);
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not add user");
    }
  }

  const label = role === Role.Student ? "Student" : "Teacher";

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger className={buttonVariants()}>
        <Plus className="size-4" />
        Add {label}
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogMedia variant="primary">
            <Plus className="size-5" />
          </DialogMedia>
          <DialogTitle>Add {label}</DialogTitle>
          <DialogDescription>
            They&apos;ll receive an email with a temporary password and a link to set their own.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" {...register("name")} />
            {errors.name && <p className="text-sm text-destructive">{errors.name.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" {...register("email")} />
            {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input id="phone" {...register("phone")} />
          </div>
          <DialogFooter>
            <Button type="submit" disabled={createUser.isPending}>
              {createUser.isPending ? "Adding…" : `Add ${label}`}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
