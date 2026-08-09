"use client";

import { Suspense, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api, ApiError } from "@/lib/api-client";

const schema = z.object({
  password: z.string().min(8, "At least 8 characters"),
});
type FormValues = z.infer<typeof schema>;

function ResetPasswordForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token") ?? "";
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    if (!token) {
      toast.error("Missing or invalid reset link");
      return;
    }
    setLoading(true);
    try {
      await api.post("/auth/reset-password", { token, newPassword: values.password });
      toast.success("Password updated — please log in");
      router.push("/login");
    } catch (err) {
      toast.error(err instanceof ApiError ? err.message : "Could not reset password");
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <h1 className="text-xl font-semibold">Choose a new password</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Enter a new password for your account.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="password">New password</Label>
          <Input id="password" type="password" autoComplete="new-password" {...register("password")} />
          {errors.password && (
            <p className="text-sm text-destructive">{errors.password.message}</p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Saving…" : "Set new password"}
        </Button>
      </form>

      <Link
        href="/login"
        className="mt-4 block text-center text-sm text-muted-foreground hover:text-foreground"
      >
        Back to log in
      </Link>
    </>
  );
}

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={null}>
      <ResetPasswordForm />
    </Suspense>
  );
}
