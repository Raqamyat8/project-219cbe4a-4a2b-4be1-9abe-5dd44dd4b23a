import { Link, useRouterState } from "@tanstack/react-router";
import type { LucideIcon } from "lucide-react";
import {
  Bell,
  Search,
  Menu,
  X,
  GraduationCap,
  LogOut,
} from "lucide-react";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Badge } from "@/components/ui/badge";

export type NavItem = {
  to: string;
  label: string;
  icon: LucideIcon;
  params?: Record<string, string>;
};

export function DashboardShell({
  role,
  name,
  nav,
  children,
}: {
  role: "طالب" | "معلم";
  name: string;
  nav: NavItem[];
  children: ReactNode;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  const initials = name.split(" ").map((p) => p[0]).slice(0, 2).join("");

  return (
    <div className="min-h-screen bg-muted/40">
      {/* Sidebar - desktop */}
      <aside className="fixed inset-y-0 right-0 z-30 hidden w-64 flex-col bg-sidebar text-sidebar-foreground lg:flex">
        <div className="flex h-16 items-center gap-2.5 border-b border-sidebar-border px-5">
          <span className="grid h-9 w-9 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
            <GraduationCap className="h-5 w-5" />
          </span>
          <span className="text-base font-extrabold">أكاديمية نُخبة</span>
        </div>
        <nav className="flex-1 space-y-1 p-3">
          {nav.map((item) => {
            const active = pathname === item.to;
            return (
              <Link
                key={item.to}
                to={item.to as any}
                params={item.params as any}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  active
                    ? "bg-sidebar-primary text-sidebar-primary-foreground shadow-sm"
                    : "text-sidebar-foreground/80 hover:bg-sidebar-accent",
                )}
              >
                <item.icon className="h-4.5 w-4.5 shrink-0" />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="border-t border-sidebar-border p-3">
          <Link to="/" className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-sidebar-foreground/70 hover:bg-sidebar-accent">
            <LogOut className="h-4 w-4" />
            <span>الخروج</span>
          </Link>
        </div>
      </aside>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileOpen(false)} />
          <aside className="absolute inset-y-0 right-0 flex w-72 flex-col bg-sidebar text-sidebar-foreground">
            <div className="flex h-16 items-center justify-between border-b border-sidebar-border px-5">
              <div className="flex items-center gap-2.5">
                <span className="grid h-9 w-9 place-items-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <span className="text-base font-extrabold">أكاديمية نُخبة</span>
              </div>
              <button onClick={() => setMobileOpen(false)} className="grid h-9 w-9 place-items-center rounded-lg hover:bg-white/10">
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex-1 space-y-1 p-3">
              {nav.map((item) => {
                const active = pathname === item.to;
                return (
                  <Link
                    key={item.to}
                    to={item.to as any}
                    params={item.params as any}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium",
                      active
                        ? "bg-sidebar-primary text-sidebar-primary-foreground"
                        : "text-sidebar-foreground/80 hover:bg-sidebar-accent",
                    )}
                  >
                    <item.icon className="h-4.5 w-4.5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      )}

      {/* Main */}
      <div className="lg:mr-64">
        <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/80 px-4 backdrop-blur-xl md:px-6">
          <button
            onClick={() => setMobileOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-xl border border-border lg:hidden"
            aria-label="القائمة"
          >
            <Menu className="h-5 w-5" />
          </button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input placeholder="ابحث..." className="rounded-xl pr-9" />
          </div>
          <div className="flex items-center gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger className="relative grid h-10 w-10 place-items-center rounded-xl border border-border hover:bg-muted">
                <Bell className="h-4.5 w-4.5" />
                <span className="absolute top-2 left-2 h-2 w-2 rounded-full bg-accent" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-72">
                <DropdownMenuLabel>الإشعارات</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {[
                  "تم نشر درس جديد في دورة البرمجة",
                  "تذكير: حصة مباشرة غداً في الـ ٧ مساءً",
                  "حصلت على شهادة إتمام جديدة 🎉",
                ].map((n, i) => (
                  <DropdownMenuItem key={i} className="whitespace-normal py-2 text-xs">
                    {n}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-2.5 rounded-xl border border-border p-1.5 pl-3 hover:bg-muted">
                <div className="hidden text-right sm:block">
                  <div className="text-xs font-semibold leading-tight">{name}</div>
                  <div className="text-[10px] text-muted-foreground">{role}</div>
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xs">{initials}</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                <DropdownMenuLabel>
                  <div className="text-sm font-semibold">{name}</div>
                  <div className="text-xs font-normal text-muted-foreground">
                    <Badge variant="outline" className="mt-1">{role}</Badge>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>الملف الشخصي</DropdownMenuItem>
                <DropdownMenuItem>الإعدادات</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link to="/">تسجيل الخروج</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>
        <main className="p-4 md:p-8">{children}</main>
      </div>
    </div>
  );
}
