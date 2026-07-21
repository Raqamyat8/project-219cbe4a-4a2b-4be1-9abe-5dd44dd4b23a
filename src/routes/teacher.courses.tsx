import { createFileRoute, Link } from "@tanstack/react-router";
import { PlusCircle, Star, Edit } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { teacherCourses } from "@/lib/demo-data";

export const Route = createFileRoute("/teacher/courses")({
  component: () => (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-2xl font-extrabold md:text-3xl">دوراتي</h1>
          <p className="mt-1 text-sm text-muted-foreground">جميع الدورات التي أدرّسها.</p>
        </div>
        <Button asChild className="rounded-full">
          <Link to="/teacher/new"><PlusCircle className="ml-1 h-4 w-4" /> إنشاء دورة جديدة</Link>
        </Button>
      </div>
      <div className="card-elevated overflow-hidden">
        <div className="hidden grid-cols-[2fr_1fr_1fr_1fr_120px] gap-4 border-b border-border bg-muted/40 px-5 py-3 text-xs font-semibold text-muted-foreground md:grid">
          <div>الدورة</div><div>الطلاب</div><div>الدروس</div><div>التقييم</div><div>الإجراءات</div>
        </div>
        {teacherCourses.map((c) => (
          <div key={c.id} className="grid gap-3 border-b border-border p-5 last:border-0 md:grid-cols-[2fr_1fr_1fr_1fr_120px] md:items-center">
            <div>
              <div className="font-semibold">{c.title}</div>
              <Badge variant={c.status === "منشورة" ? "default" : "outline"} className="mt-1 rounded-full text-[10px]">{c.status}</Badge>
            </div>
            <div className="text-sm"><span className="md:hidden text-muted-foreground">الطلاب: </span>{c.students.toLocaleString("ar-EG")}</div>
            <div className="text-sm"><span className="md:hidden text-muted-foreground">الدروس: </span>{c.lessons}</div>
            <div className="flex items-center gap-1 text-sm text-amber-500"><Star className="h-3.5 w-3.5 fill-current" />{c.rating || "—"}</div>
            <Button variant="outline" size="sm" className="rounded-lg"><Edit className="ml-1 h-4 w-4" /> تعديل</Button>
          </div>
        ))}
      </div>
    </div>
  ),
});
