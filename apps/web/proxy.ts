import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";
import { Role } from "@tutor/shared";

const PUBLIC_PATHS = ["/", "/login", "/forgot-password", "/reset-password"];
const ROLE_PREFIX: Record<Role, string> = {
  [Role.Admin]: "/admin",
  [Role.Teacher]: "/teacher",
  [Role.Student]: "/student",
};

const secret = new TextEncoder().encode(process.env.JWT_SECRET ?? "");

function dashboardUrl(role: Role, base: string) {
  return new URL(`${ROLE_PREFIX[role]}/dashboard`, base);
}

async function getRole(token: string | undefined): Promise<Role | null> {
  if (!token) return null;
  try {
    const { payload } = await jwtVerify(token, secret);
    return (payload.role as Role) ?? null;
  } catch {
    return null;
  }
}

export default async function proxy(req: NextRequest) {
  const { pathname } = req.nextUrl;
  const role = await getRole(req.cookies.get("access_token")?.value);

  const isPublic = PUBLIC_PATHS.includes(pathname);
  const roleSection = (["admin", "teacher", "student"] as const).find((r) =>
    pathname.startsWith(`/${r}`),
  );

  if (roleSection && !role) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (roleSection && role && ROLE_PREFIX[role] !== `/${roleSection}`) {
    return NextResponse.redirect(dashboardUrl(role, req.url));
  }

  if (isPublic && pathname !== "/" && role) {
    return NextResponse.redirect(dashboardUrl(role, req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
