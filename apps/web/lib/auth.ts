import "server-only";
import { redirect } from "next/navigation";
import { serverFetch } from "./api-server";
import type { AuthUser, Role } from "@tutor/shared";

export async function getSession(): Promise<AuthUser | null> {
  return serverFetch<AuthUser>("/auth/me");
}

export async function requireUser(): Promise<AuthUser> {
  const user = await getSession();
  if (!user) redirect("/login");
  return user;
}

export async function requireRole(role: Role): Promise<AuthUser> {
  const user = await requireUser();
  if (user.role !== role) redirect(`/${user.role}/dashboard`);
  return user;
}
