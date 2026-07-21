import { Link } from "@tanstack/react-router";
import { Star, BookOpen, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import type { Course } from "@/lib/demo-data";

export function CourseCard({ course }: { course: Course }) {
  return (
    <div className="group card-elevated card-elevated-hover overflow-hidden">
      <Link
        to="/courses/$courseId"
        params={{ courseId: course.id }}
        className={`relative flex h-40 items-center justify-center bg-gradient-to-br ${course.color}`}
      >
        <span className="text-6xl">{course.emoji}</span>
        <Badge className="absolute top-3 right-3 rounded-full bg-white/90 text-foreground hover:bg-white">
          {course.category}
        </Badge>
      </Link>
      <div className="space-y-3 p-5">
        <div className="flex items-center gap-1 text-sm text-amber-500">
          <Star className="h-4 w-4 fill-current" />
          <span className="font-semibold">{course.rating}</span>
          <span className="text-muted-foreground">({course.students.toLocaleString("ar-EG")})</span>
        </div>
        <h3 className="line-clamp-1 text-lg font-bold text-foreground">{course.title}</h3>
        <p className="text-sm text-muted-foreground">{course.teacher}</p>
        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1"><BookOpen className="h-3.5 w-3.5" />{course.lessons} درساً</span>
          <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{course.hours} ساعة</span>
          <Badge variant="outline" className="rounded-full">{course.level}</Badge>
        </div>
        <Button asChild className="w-full rounded-xl">
          <Link to="/courses/$courseId" params={{ courseId: course.id }}>عرض الدورة</Link>
        </Button>
      </div>
    </div>
  );
}
