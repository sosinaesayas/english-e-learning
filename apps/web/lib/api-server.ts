import "server-only";
import { cookies } from "next/headers";

const API_URL = `${process.env.API_INTERNAL_URL ?? "http://localhost:3001"}/api/v1`;

export async function serverFetch<T>(path: string, init: RequestInit = {}): Promise<T | null> {
  const cookieStore = await cookies();
  const cookieHeader = cookieStore
    .getAll()
    .map((c) => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(`${API_URL}${path}`, {
    ...init,
    headers: {
      ...(init.headers ?? {}),
      Cookie: cookieHeader,
      ...(init.body ? { "Content-Type": "application/json" } : {}),
    },
    cache: "no-store",
  });

  if (res.status === 401 || res.status === 403) return null;
  if (!res.ok) throw new Error(`API error ${res.status}: ${await res.text()}`);
  return res.json();
}
