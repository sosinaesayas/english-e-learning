"use client";

import { useState } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { api } from "@/lib/api-client";

const schema = z.object({ email: z.string().email("Enter a valid email") });
type FormValues = z.infer<typeof schema>;

export default function ForgotPasswordPage() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  async function onSubmit(values: FormValues) {
    setLoading(true);
    try {
      await api.post("/auth/forgot-password", values);
    } catch {
      // intentionally ignored — always show the same confirmation
    } finally {
      setLoading(false);
      setSent(true);
    }
  }

  if (sent) {
    return (
      <>
        <h1 className="text-xl font-semibold">Check your email</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          If an account exists for that email, we&apos;ve sent a link to reset your password.
        </p>
        <Link href="/login" className="mt-6 block text-center text-sm text-primary">
          Back to log in
        </Link>
      </>
    );
  }

  return (
    <>
      <h1 className="text-xl font-semibold">Forgot password</h1>
      <p className="mt-1 text-sm text-muted-foreground">
        Enter your email and we&apos;ll send you a reset link.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className="mt-6 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" autoComplete="email" {...register("email")} />
          {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
        </div>
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Sending…" : "Send reset link"}
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
