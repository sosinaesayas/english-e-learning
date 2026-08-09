# Authentication Flow

## Model
- No public self-registration. Admin creates Teacher/Student accounts; those users only ever log in.
- JWT **access token** (15 min TTL) + **refresh token** (7 day TTL), both httpOnly, `Secure`, `SameSite=Lax` cookies — never exposed to client JS, immune to XSS token theft.
- Access token payload: `{ sub: userId, role, name }`. Refresh token is opaque, stored hashed against the user so it can be revoked (password reset, logout, admin deactivation invalidate it).

## Login
```
Client                         Next.js (web)              NestJS (api)
  │  submit email/password  ─────────────────────────────▶│
  │                                                        │ verify bcrypt hash
  │                                                        │ issue access+refresh JWT
  │  ◀───────────────────── Set-Cookie: access, refresh ───┤
  │  redirect by role (admin/teacher/student dashboard)    │
```

## Authenticated request
```
Client → GET /api/v1/... (cookies auto-attached)
  api: JwtAuthGuard verifies access token
       RolesGuard checks @Roles(...) against token's role claim
       401 if expired → web's api-client catches it, calls /auth/refresh once, retries original request
       403 if role mismatch (never silently allowed)
```

## Route protection (defense in depth)
1. **Next.js `middleware.ts`**: reads the (unsigned, non-sensitive) role hint cookie; redirects `/teacher/*` visits by a student to `/student/dashboard`, unauthenticated visits to `/login`, etc. This is a UX nicety, not the security boundary.
2. **NestJS guards**: the actual boundary. Every controller method is annotated `@Roles('admin')` etc.; `RolesGuard` runs on every request regardless of what the frontend rendered.

## Forgot / reset password
1. `POST /auth/forgot-password {email}` → always responds `200 OK` (no user enumeration). If the email matches a user, create a `PasswordResetToken` (random token, only the SHA-256 hash stored, 1h TTL) and email a link `/reset-password?token=...`.
2. `POST /auth/reset-password {token, newPassword}` → hash the incoming token, look it up, check `expiresAt`, update `passwordHash`, delete the token, and invalidate any existing refresh token (force re-login everywhere).

## Admin-created account first login
1. Admin sets name/email; API generates a random temp password, stores its hash, sets `mustResetPassword: true`, emails the temp password + a reset link.
2. On first successful login with `mustResetPassword: true`, the web app immediately routes to a forced "set a new password" screen before showing any dashboard.

## Logout
`POST /auth/logout` clears both cookies and deletes the stored refresh-token hash server-side.
