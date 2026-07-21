import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowRight, ArrowLeft, Download, CheckCircle2, PlayCircle, Circle, ChevronLeft } from "lucide-react";
import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { curriculum, getCourse } from "@/lib/demo-data";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

export const Route = createFileRoute("/learn/$courseId")({
  loader: ({ params }) => {
    const course = getCourse(params.courseId);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `تعلّم: ${loaderData.course.title}` : "الدرس" },
      { name: "description", content: "شاشة تعلّم تفاعلية داخل أكاديمية نُخبة." },
      { property: "og:title", content: "شاشة التعلم" },
      { property: "og:description", content: "تجربة تعلم تفاعلية." },
    ],
  }),
  component: LearnPage,
});

function LearnPage() {
  const { course } = Route.useLoaderData();
  const flat = useMemo(
    () => curriculum.default.flatMap((m) => m.lessons.map((l) => ({ ...l, module: m.title }))),
    [],
  );
  const [current, setCurrent] = useState(0);
  const [completed, setCompleted] = useState<Set<string>>(new Set([flat[0].id]));
  const lesson = flat[current];
  const progress = Math.round((completed.size / flat.length) * 100);

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <header className="sticky top-0 z-30 flex h-14 items-center justify-between gap-3 border-b border-border bg-background/90 px-4 backdrop-blur-xl md:px-6">
        <Link to="/courses/$courseId" params={{ courseId: course.id }} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
          <ChevronLeft className="h-4 w-4 rotate-180" /> عودة للدورة
        </Link>
        <div className="hidden text-center text-sm md:block">
          <div className="font-bold">{course.title}</div>
        </div>
        <div className="flex items-center gap-3">
          <div className="hidden text-xs text-muted-foreground sm:block">التقدم {progress}%</div>
          <div className="w-32">
            <Progress value={progress} className="h-2" />
          </div>
        </div>
      </header>

      <div className="grid gap-6 p-4 md:p-6 lg:grid-cols-[1fr_360px]">
        {/* Main */}
        <div className="space-y-6">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary to-primary/70">
            <div className="aspect-video flex items-center justify-center">
              <button className="group grid h-20 w-20 place-items-center rounded-full bg-white/95 shadow-2xl transition-transform hover:scale-105">
                <PlayCircle className="h-10 w-10 text-primary" />
              </button>
            </div>
            <div className="absolute bottom-3 right-3 rounded-full bg-black/50 px-3 py-1 text-xs text-white">{lesson.duration}</div>
          </div>

          <div>
            <Badge variant="outline" className="rounded-full">{lesson.module}</Badge>
            <h1 className="mt-3 text-2xl font-extrabold md:text-3xl">{lesson.title}</h1>
            <p className="mt-3 leading-8 text-muted-foreground">
              في هذا الدرس، سنستعرض أهم المفاهيم المتعلقة بـ"{lesson.title}"، مع أمثلة تطبيقية تساعدك على استيعاب المادة بعمق. ستتمكن من ممارسة ما تعلمته عبر التمارين المرفقة والاختبار السريع في نهاية الدرس.
            </p>
          </div>

          <div className="card-elevated p-5">
            <h3 className="text-sm font-bold">مصادر الدرس</h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {["ملخّص الدرس.pdf", "تمارين تطبيقية.pdf"].map((r) => (
                <div key={r} className="flex items-center justify-between rounded-xl bg-muted/60 px-4 py-3">
                  <span className="text-sm">{r}</span>
                  <Button size="sm" variant="ghost" className="rounded-lg gap-1" onClick={() => toast.success("تم بدء التنزيل")}>
                    <Download className="h-4 w-4" /> تنزيل
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 border-t border-border pt-5">
            <Button
              variant="outline"
              className="rounded-xl"
              disabled={current === 0}
              onClick={() => setCurrent((c) => Math.max(0, c - 1))}
            >
              <ArrowRight className="ml-1 h-4 w-4" /> الدرس السابق
            </Button>
            <Button
              variant={completed.has(lesson.id) ? "secondary" : "default"}
              className="rounded-xl"
              onClick={() => {
                setCompleted((prev) => new Set(prev).add(lesson.id));
                toast.success("تم إكمال الدرس");
              }}
            >
              {completed.has(lesson.id) ? <><CheckCircle2 className="ml-1 h-4 w-4" /> مكتمل</> : "تم إكمال الدرس"}
            </Button>
            <Button
              className="rounded-xl"
              disabled={current >= flat.length - 1}
              onClick={() => {
                setCompleted((prev) => new Set(prev).add(lesson.id));
                setCurrent((c) => Math.min(flat.length - 1, c + 1));
              }}
            >
              الدرس التالي <ArrowLeft className="mr-1 h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="card-elevated h-fit p-4 lg:sticky lg:top-20">
          <h3 className="mb-3 px-2 text-sm font-bold">محتوى الدورة</h3>
          <div className="space-y-4">
            {curriculum.default.map((m, mi) => (
              <div key={mi}>
                <div className="mb-2 px-2 text-xs font-semibold text-muted-foreground">{m.title}</div>
                <ul className="space-y-1">
                  {m.lessons.map((l) => {
                    const idx = flat.findIndex((f) => f.id === l.id);
                    const isCurrent = idx === current;
                    const isDone = completed.has(l.id);
                    return (
                      <li key={l.id}>
                        <button
                          onClick={() => setCurrent(idx)}
                          className={cn(
                            "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-right text-sm transition-colors",
                            isCurrent ? "bg-primary-soft text-primary" : "hover:bg-muted",
                          )}
                        >
                          {isDone ? (
                            <CheckCircle2 className="h-4 w-4 text-success" />
                          ) : (
                            <Circle className={cn("h-4 w-4", isCurrent ? "text-primary" : "text-muted-foreground")} />
                          )}
                          <span className="flex-1 truncate">{l.title}</span>
                          <span className="text-[10px] text-muted-foreground">{l.duration}</span>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
