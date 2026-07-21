import { createFileRoute, Link } from "@tanstack/react-router";
import { Users, BookOpen, Eye, Star, Edit, PlusCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { teacherCourses } from "@/lib/demo-data";

export const Route = createFileRoute("/teacher/")({
  component: TeacherDashboard,
});

const stats = [
  { label: "إجمالي الطلاب", value: "5,061", icon: Users, tone: "bg-primary-soft text-primary" },
  { label: "إجمالي الدورات", value: "١٢", icon: BookOpen, tone: "bg-accent-soft text-accent-foreground" },
  { label: "المشاهدات", value: "98.4K", icon: Eye, tone: "bg-success/10 text-success" },
  { label: "متوسط التقييم", value: "4.8", icon: Star, tone: "bg-warning/15 text-warning" },
];

function TeacherDashboard() {
  return (
    <div className="space-y-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold md:text-3xl">مرحباً بك، أستاذ محمد 👋</h1>
          <p className="mt-1 text-sm text-muted-foreground">هذه نظرة عامة على أداء دوراتك.</p>
        </div>
        <Button asChild className="rounded-full">
          <Link to="/teacher/new"><PlusCircle className="ml-1 h-4 w-4" /> إنشاء دورة جديدة</Link>
        </Button>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="card-elevated flex items-center justify-between p-5">
            <div>
              <div className="text-xs text-muted-foreground">{s.label}</div>
              <div className="mt-1 text-2xl font-extrabold">{s.value}</div>
            </div>
            <div className={`grid h-11 w-11 place-items-center rounded-xl ${s.tone}`}>
              <s.icon className="h-5 w-5" />
            </div>
          </div>
        ))}
      </div>

      <section>
        <h2 className="mb-4 text-xl font-extrabold">إدارة الدورات</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {teacherCourses.map((c) => (
            <div key={c.id} className="card-elevated card-elevated-hover p-5">
              <div className="flex items-start justify-between">
                <Badge variant={c.status === "منشورة" ? "default" : "outline"} className="rounded-full">{c.status}</Badge>
                <div className="flex items-center gap-1 text-sm text-amber-500">
                  <Star className="h-4 w-4 fill-current" />
                  <span className="font-semibold">{c.rating || "—"}</span>
                </div>
              </div>
              <h3 className="mt-3 font-bold">{c.title}</h3>
              <div className="mt-4 grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div><div className="text-lg font-extrabold text-foreground">{c.students.toLocaleString("ar-EG")}</div>طالب</div>
                <div><div className="text-lg font-extrabold text-foreground">{c.lessons}</div>درس</div>
              </div>
              <Button variant="outline" className="mt-4 w-full rounded-xl"><Edit className="ml-1 h-4 w-4" /> تعديل</Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
