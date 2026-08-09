// Same-origin: proxied to the NestJS API via the rewrite in next.config.ts,
// so the browser's httpOnly auth cookies attach automatically.
const API_URL = "/api/v1";

export class ApiError extends Error {
  constructor(
    public status: number,
    message: string,
  ) {
    super(message);
  }
}

async function rawFetch(path: string, init: RequestInit) {
  const isFormData = init.body instanceof FormData;
  return fetch(`${API_URL}${path}`, {
    ...init,
    credentials: "include",
    headers: {
      ...(init.body && !isFormData ? { "Content-Type": "application/json" } : {}),
      ...(init.headers ?? {}),
    },
  });
}

export async function apiFetch<T = unknown>(path: string, init: RequestInit = {}): Promise<T> {
  let res = await rawFetch(path, init);

  if (res.status === 401 && !path.startsWith("/auth/")) {
    const refreshRes = await rawFetch("/auth/refresh", { method: "POST" });
    if (refreshRes.ok) {
      res = await rawFetch(path, init);
    }
  }

  if (!res.ok) {
    const body = await res.json().catch(() => ({ message: res.statusText }));
    throw new ApiError(res.status, body.message ?? "Request failed");
  }

  // Some endpoints (e.g. deletes) return 200/204 with no body — res.json() would
  // throw on an empty body, which looks identical to a real failure to callers.
  const text = await res.text();
  return (text ? JSON.parse(text) : undefined) as T;
}

export const api = {
  get: <T = unknown>(path: string) => apiFetch<T>(path),
  post: <T = unknown>(path: string, data?: unknown) =>
    apiFetch<T>(path, { method: "POST", body: data ? JSON.stringify(data) : undefined }),
  patch: <T = unknown>(path: string, data?: unknown) =>
    apiFetch<T>(path, { method: "PATCH", body: data ? JSON.stringify(data) : undefined }),
  delete: <T = unknown>(path: string) => apiFetch<T>(path, { method: "DELETE" }),
  upload: <T = unknown>(file: File) => {
    const form = new FormData();
    form.append("file", file);
    return apiFetch<T>("/uploads/local", { method: "POST", body: form });
  },
};
