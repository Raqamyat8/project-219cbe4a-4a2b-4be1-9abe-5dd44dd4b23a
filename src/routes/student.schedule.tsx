import { createFileRoute } from "@tanstack/react-router";
import { upcomingSchedule } from "@/lib/demo-data";

export const Route = createFileRoute("/student/schedule")({
  component: () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">الجدول الدراسي</h1>
        <p className="mt-1 text-sm text-muted-foreground">مواعيدك القادمة من الحصص والاختبارات.</p>
      </div>
      <div className="card-elevated divide-y divide-border">
        {[...upcomingSchedule, ...upcomingSchedule].map((e, i) => (
          <div key={i} className="flex items-center justify-between p-5">
            <div>
              <div className="font-semibold">{e.title}</div>
              <div className="text-xs text-muted-foreground">{e.teacher}</div>
            </div>
            <div className="text-sm font-medium text-primary">{e.time}</div>
          </div>
        ))}
      </div>
    </div>
  ),
});
