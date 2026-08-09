"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { GraduationCap, LogOut, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { NAV_ITEMS } from "./nav-config";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { api } from "@/lib/api-client";
import type { AuthUser } from "@tutor/shared";
import { useState } from "react";

function initials(name: string) {
  return name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export function AppShell({ user, children }: { user: AuthUser; children: React.ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const items = NAV_ITEMS[user.role];

  async function logout() {
    await api.post("/auth/logout");
    router.push("/login");
    router.refresh();
  }

  const NavLinks = () => (
    <nav className="flex flex-col gap-1">
      {items.map((item) => {
        const active = pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={() => setMobileOpen(false)}
            className={cn(
              "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-all",
              active
                ? "bg-primary text-primary-foreground shadow-sm shadow-primary/25"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground",
            )}
          >
            <Icon className="size-4.5 shrink-0" />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  return (
    <div className="flex min-h-screen flex-1">
      {/* Desktop sidebar */}
      <aside className="hidden w-64 shrink-0 flex-col bg-card p-4 shadow-[1px_0_0_rgba(15,23,42,0.06),4px_0_16px_-8px_rgba(15,23,42,0.08)] md:flex print:hidden">
        <Link
          href="/"
          className="mb-6 flex items-center gap-2 px-2 font-heading text-lg font-semibold"
        >
          <GraduationCap className="size-6 text-primary" />
          English Academy
        </Link>
        <NavLinks />
      </aside>

      <div className="flex flex-1 flex-col">
        {/* Topbar */}
        <header className="z-10 flex h-16 items-center justify-between bg-card px-4 shadow-[0_1px_0_rgba(15,23,42,0.06),0_2px_12px_-6px_rgba(15,23,42,0.08)] sm:px-6 print:hidden">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
          >
            <Menu className="size-5" />
          </Button>
          <span className="text-sm font-medium capitalize text-muted-foreground md:hidden">
            {user.role} portal
          </span>
          <div className="ml-auto flex items-center gap-3">
            <ThemeToggle />
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2 rounded-full">
                <Avatar className="size-8">
                  <AvatarFallback>{initials(user.name)}</AvatarFallback>
                </Avatar>
                <span className="hidden text-sm font-medium sm:inline">{user.name}</span>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={logout}>
                  <LogOut className="mr-2 size-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Mobile nav drawer */}
        {mobileOpen && (
          <div className="border-b bg-card p-4 md:hidden">
            <NavLinks />
          </div>
        )}

        <main className="flex-1 p-4 sm:p-6 lg:p-8">{children}</main>
      </div>
    </div>
  );
}
