import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle, Clock, Flame, BookOpen, TrendingUp, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { studentEnrolledCourses, upcomingSchedule, achievements } from "@/lib/demo-data";

export const Route = createFileRoute("/student/")({
  component: StudentDashboard,
});

const stats = [
  { label: "التقدم الكلي", value: "72%", icon: TrendingUp, tone: "bg-primary-soft text-primary" },
  { label: "الدورات النشطة", value: "٤", icon: BookOpen, tone: "bg-accent-soft text-accent-foreground" },
  { label: "المكتملة", value: "٧", icon: Flame, tone: "bg-success/10 text-success" },
  { label: "ساعات التعلم", value: "٤٨", icon: Clock, tone: "bg-warning/15 text-warning" },
];

function StudentDashboard() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">مرحباً بك، أحمد 👋</h1>
        <p className="mt-1 text-sm text-muted-foreground">لديك ٣ دروس مجدولة لهذا الأسبوع، فلنكمل من حيث توقفت.</p>
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

      {/* Continue learning */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-xl font-extrabold">تابع التعلّم</h2>
          <Button asChild variant="ghost" className="rounded-full">
            <Link to="/courses">تصفح الدورات</Link>
          </Button>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {studentEnrolledCourses.slice(0, 4).map((c) => (
            <div key={c.id} className="card-elevated card-elevated-hover flex gap-4 p-4">
              <div className={`grid h-24 w-24 shrink-0 place-items-center rounded-2xl bg-gradient-to-br ${c.color} text-4xl`}>{c.emoji}</div>
              <div className="flex min-w-0 flex-1 flex-col justify-between">
                <div>
                  <Badge variant="outline" className="rounded-full text-[10px]">{c.category}</Badge>
                  <h3 className="mt-1.5 truncate font-bold">{c.title}</h3>
                  <p className="text-xs text-muted-foreground">آخر درس: {c.lastLesson}</p>
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-muted-foreground">التقدم</span>
                    <span className="font-semibold">{c.progress}%</span>
                  </div>
                  <Progress value={c.progress} className="h-1.5" />
                  <Button asChild size="sm" className="w-full rounded-lg">
                    <Link to="/learn/$courseId" params={{ courseId: c.id }}>
                      <PlayCircle className="ml-1 h-4 w-4" /> متابعة
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Schedule */}
        <div className="card-elevated p-5 lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-bold">الجدول القادم</h3>
            <CalendarDays className="h-4 w-4 text-muted-foreground" />
          </div>
          <ul className="space-y-3">
            {upcomingSchedule.map((e, i) => (
              <li key={i} className="flex items-center justify-between rounded-xl border border-border p-4">
                <div>
                  <div className="text-sm font-semibold">{e.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{e.teacher}</div>
                </div>
                <div className="text-xs font-medium text-primary">{e.time}</div>
              </li>
            ))}
          </ul>
        </div>

        {/* Achievements */}
        <div className="card-elevated p-5">
          <h3 className="mb-4 font-bold">الإنجازات الأخيرة</h3>
          <ul className="space-y-3">
            {achievements.map((a) => (
              <li key={a.title} className="flex items-center gap-3 rounded-xl bg-muted/40 p-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-background text-2xl">{a.icon}</div>
                <div>
                  <div className="text-sm font-bold">{a.title}</div>
                  <div className="text-xs text-muted-foreground">{a.desc}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
