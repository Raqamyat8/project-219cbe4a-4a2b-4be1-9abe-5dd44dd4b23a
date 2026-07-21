import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { Home, BookOpen, PlayCircle, LineChart, CalendarDays, Award, Settings } from "lucide-react";
import { DashboardShell, type NavItem } from "@/components/dashboard-shell";

const nav: NavItem[] = [
  { to: "/student", label: "الرئيسية", icon: Home },
  { to: "/student/courses", label: "دوراتي", icon: BookOpen },
  { to: "/student/lessons", label: "الدروس", icon: PlayCircle },
  { to: "/student/progress", label: "التقدم", icon: LineChart },
  { to: "/student/schedule", label: "الجدول الدراسي", icon: CalendarDays },
  { to: "/student/certificates", label: "الشهادات", icon: Award },
  { to: "/student/settings", label: "الإعدادات", icon: Settings },
];

export const Route = createFileRoute("/student")({
  head: () => ({
    meta: [
      { title: "لوحة الطالب — أكاديمية نُخبة" },
      { name: "description", content: "لوحة تحكم الطالب في أكاديمية نُخبة." },
      { property: "og:title", content: "لوحة الطالب" },
      { property: "og:description", content: "تابع تقدمك ودوراتك في مكان واحد." },
    ],
  }),
  component: StudentLayout,
});

function StudentLayout() {
  return (
    <DashboardShell role="طالب" name="أحمد العتيبي" nav={nav}>
      <Outlet />
    </DashboardShell>
  );
}
