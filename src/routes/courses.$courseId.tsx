import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Star, Users, BookOpen, Clock, PlayCircle, Award, CheckCircle2, ChevronDown } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { curriculum, getCourse } from "@/lib/demo-data";

export const Route = createFileRoute("/courses/$courseId")({
  loader: ({ params }) => {
    const course = getCourse(params.courseId);
    if (!course) throw notFound();
    return { course };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: loaderData ? `${loaderData.course.title} — أكاديمية نُخبة` : "دورة" },
      { name: "description", content: loaderData?.course.description ?? "تفاصيل الدورة" },
      { property: "og:title", content: loaderData?.course.title ?? "دورة" },
      { property: "og:description", content: loaderData?.course.description ?? "" },
    ],
  }),
  component: CourseDetails,
});

function CourseDetails() {
  const { course } = Route.useLoaderData();
  const modules = curriculum.default;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-3">
          <div className="space-y-5 lg:col-span-2">
            <div className="flex flex-wrap items-center gap-2">
              <Badge className="rounded-full">{course.category}</Badge>
              <Badge variant="outline" className="rounded-full">{course.level}</Badge>
            </div>
            <h1 className="text-3xl font-extrabold leading-tight md:text-5xl">{course.title}</h1>
            <p className="max-w-2xl text-base leading-8 text-muted-foreground">{course.description}</p>
            <div className="flex flex-wrap items-center gap-6 text-sm">
              <div className="flex items-center gap-1 text-amber-500">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-bold">{course.rating}</span>
                <span className="text-muted-foreground">تقييم</span>
              </div>
              <div className="flex items-center gap-1.5 text-muted-foreground"><Users className="h-4 w-4" />{course.students.toLocaleString("ar-EG")} طالباً</div>
              <div className="flex items-center gap-1.5 text-muted-foreground"><BookOpen className="h-4 w-4" />{course.lessons} درساً</div>
              <div className="flex items-center gap-1.5 text-muted-foreground"><Clock className="h-4 w-4" />{course.hours} ساعة</div>
            </div>
            <div className="flex items-center gap-3 pt-2">
              <Avatar className="h-12 w-12">
                <AvatarFallback className="bg-primary text-primary-foreground">{course.teacher[2]}</AvatarFallback>
              </Avatar>
              <div>
                <div className="text-sm font-bold">{course.teacher}</div>
                <div className="text-xs text-muted-foreground">معلم معتمد • خبرة +١٠ سنوات</div>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="card-elevated overflow-hidden p-0">
            <div className={`relative flex h-52 items-center justify-center bg-gradient-to-br ${course.color}`}>
              <span className="text-7xl">{course.emoji}</span>
              <button className="absolute inset-0 grid place-items-center bg-black/0 transition-colors hover:bg-black/10">
                <div className="grid h-16 w-16 place-items-center rounded-full bg-white/95 shadow-lg">
                  <PlayCircle className="h-8 w-8 text-primary" />
                </div>
              </button>
            </div>
            <div className="space-y-4 p-5">
              <Button asChild size="lg" className="w-full rounded-xl text-base">
                <Link to="/learn/$courseId" params={{ courseId: course.id }}>ابدأ الدورة</Link>
              </Button>
              <div className="grid grid-cols-2 gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1.5"><Award className="h-4 w-4 text-accent" /> شهادة إتمام</div>
                <div className="flex items-center gap-1.5"><PlayCircle className="h-4 w-4 text-accent" /> فيديوهات HD</div>
                <div className="flex items-center gap-1.5"><BookOpen className="h-4 w-4 text-accent" /> مصادر قابلة للتنزيل</div>
                <div className="flex items-center gap-1.5"><Users className="h-4 w-4 text-accent" /> مجتمع تعليمي</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-3">
        <div className="space-y-8 lg:col-span-2">
          <div>
            <h2 className="text-2xl font-extrabold">محتوى الدورة</h2>
            <p className="mt-1 text-sm text-muted-foreground">
              {modules.length} وحدات • {modules.reduce((a, m) => a + m.lessons.length, 0)} دروس
            </p>
            <Accordion type="multiple" defaultValue={["m0"]} className="mt-5 space-y-3">
              {modules.map((m, i) => (
                <AccordionItem key={i} value={`m${i}`} className="card-elevated overflow-hidden border-0 px-5">
                  <AccordionTrigger className="py-4 text-right hover:no-underline">
                    <div className="flex flex-1 items-center justify-between gap-3">
                      <span className="font-bold">{m.title}</span>
                      <span className="text-xs font-normal text-muted-foreground">{m.lessons.length} دروس</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <ul className="space-y-2 pb-2">
                      {m.lessons.map((l) => (
                        <li key={l.id} className="flex items-center justify-between rounded-xl bg-muted/40 px-4 py-3">
                          <div className="flex items-center gap-3">
                            <PlayCircle className="h-4 w-4 text-primary" />
                            <span className="text-sm">{l.title}</span>
                          </div>
                          <span className="text-xs text-muted-foreground">{l.duration}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div>
            <h2 className="text-2xl font-extrabold">ماذا ستتعلم؟</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "إتقان المفاهيم الأساسية من الصفر",
                "تطبيق ما تعلمته على مشاريع حقيقية",
                "بناء أساس متين للانطلاق إلى المستوى المتقدم",
                "استخدام الأدوات الحديثة في المجال",
                "حل المشكلات الشائعة بثقة",
                "الاستعداد للاختبارات والمقابلات",
              ].map((t) => (
                <li key={t} className="flex items-start gap-2 text-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="card-elevated p-5">
            <h3 className="font-bold">معلومات الدورة</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">المستوى</dt><dd className="font-medium">{course.level}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">اللغة</dt><dd className="font-medium">العربية</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">المدة</dt><dd className="font-medium">{course.hours} ساعة</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">الدروس</dt><dd className="font-medium">{course.lessons}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">آخر تحديث</dt><dd className="font-medium">هذا الشهر</dd></div>
            </dl>
          </div>
        </aside>
      </section>

      <SiteFooter />
    </div>
  );
}
