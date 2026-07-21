import { createFileRoute, Outlet } from "@tanstack/react-router";
import { Home, BookOpen, PlusCircle, Users, BarChart3, MessageSquare, Settings } from "lucide-react";
import { DashboardShell, type NavItem } from "@/components/dashboard-shell";

const nav: NavItem[] = [
  { to: "/teacher", label: "الرئيسية", icon: Home },
  { to: "/teacher/courses", label: "دوراتي", icon: BookOpen },
  { to: "/teacher/new", label: "إنشاء دورة", icon: PlusCircle },
  { to: "/teacher/students", label: "الطلاب", icon: Users },
  { to: "/teacher/analytics", label: "الإحصائيات", icon: BarChart3 },
  { to: "/teacher/messages", label: "الرسائل", icon: MessageSquare },
  { to: "/teacher/settings", label: "الإعدادات", icon: Settings },
];

export const Route = createFileRoute("/teacher")({
  head: () => ({
    meta: [
      { title: "لوحة المعلم — أكاديمية نُخبة" },
      { name: "description", content: "إدارة دوراتك وطلابك من مكان واحد." },
      { property: "og:title", content: "لوحة المعلم" },
      { property: "og:description", content: "لوحة تحكم متكاملة للمعلمين." },
    ],
  }),
  component: () => (
    <DashboardShell role="معلم" name="محمد الحسن" nav={nav}>
      <Outlet />
    </DashboardShell>
  ),
});
