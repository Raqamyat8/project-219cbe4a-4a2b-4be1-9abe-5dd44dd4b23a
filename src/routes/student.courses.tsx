import { createFileRoute } from "@tanstack/react-router";
import { CourseCard } from "@/components/course-card";
import { studentEnrolledCourses } from "@/lib/demo-data";

export const Route = createFileRoute("/student/courses")({
  component: () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">دوراتي</h1>
        <p className="mt-1 text-sm text-muted-foreground">جميع الدورات المسجّل بها.</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {studentEnrolledCourses.map((c) => <CourseCard key={c.id} course={c} />)}
      </div>
    </div>
  ),
});
