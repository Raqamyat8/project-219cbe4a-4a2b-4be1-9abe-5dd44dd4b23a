import { createFileRoute, Link } from "@tanstack/react-router";
import { PlayCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { studentEnrolledCourses } from "@/lib/demo-data";
import { curriculum } from "@/lib/demo-data";

export const Route = createFileRoute("/student/lessons")({
  component: () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">الدروس</h1>
        <p className="mt-1 text-sm text-muted-foreground">استعراض دروس دوراتك المسجّل بها.</p>
      </div>
      <div className="space-y-6">
        {studentEnrolledCourses.slice(0, 3).map((c) => (
          <div key={c.id} className="card-elevated p-5">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br ${c.color} text-xl`}>{c.emoji}</div>
                <div className="font-bold">{c.title}</div>
              </div>
              <Badge variant="outline" className="rounded-full">{c.progress}%</Badge>
            </div>
            <ul className="grid gap-2 md:grid-cols-2">
              {curriculum.default.flatMap((m) => m.lessons).slice(0, 6).map((l) => (
                <li key={l.id}>
                  <Link
                    to="/learn/$courseId"
                    params={{ courseId: c.id }}
                    className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3 hover:bg-muted"
                  >
                    <div className="flex items-center gap-2 text-sm">
                      <PlayCircle className="h-4 w-4 text-primary" />
                      {l.title}
                    </div>
                    <span className="text-xs text-muted-foreground">{l.duration}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  ),
});
