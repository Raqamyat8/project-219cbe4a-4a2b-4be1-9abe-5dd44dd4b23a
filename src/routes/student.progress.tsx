import { createFileRoute } from "@tanstack/react-router";
import { Progress } from "@/components/ui/progress";
import { studentEnrolledCourses } from "@/lib/demo-data";

export const Route = createFileRoute("/student/progress")({
  component: () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">التقدم</h1>
        <p className="mt-1 text-sm text-muted-foreground">نظرة عامة على أدائك في كل دورة.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {studentEnrolledCourses.map((c) => (
          <div key={c.id} className="card-elevated p-5">
            <div className="flex items-center justify-between">
              <div className="font-bold">{c.title}</div>
              <span className="text-sm font-semibold text-primary">{c.progress}%</span>
            </div>
            <Progress value={c.progress} className="mt-3 h-2" />
            <div className="mt-3 grid grid-cols-3 gap-2 text-center text-xs">
              <div><div className="font-bold text-foreground">{c.lessons}</div><div className="text-muted-foreground">درساً</div></div>
              <div><div className="font-bold text-foreground">{Math.round((c.progress ?? 0) / 100 * c.lessons)}</div><div className="text-muted-foreground">مكتمل</div></div>
              <div><div className="font-bold text-foreground">{c.hours}س</div><div className="text-muted-foreground">مجموع</div></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
