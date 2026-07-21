import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Sparkles, BookOpen, LineChart, Clock, GraduationCap, Star, PlayCircle, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CourseCard } from "@/components/course-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { courses, testimonials } from "@/lib/demo-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "أكاديمية نُخبة — تعلم بذكاء وابنِ مستقبلك" },
      { name: "description", content: "منصة تعليمية عربية حديثة للطلاب والمعلمين مع دورات عالية الجودة وتجربة تعلم مرنة." },
      { property: "og:title", content: "أكاديمية نُخبة" },
      { property: "og:description", content: "تعلم بذكاء، طوّر مهاراتك، وابنِ مستقبلك." },
    ],
  }),
  component: Home,
});

const features = [
  { icon: Clock, title: "تعلم في أي وقت", desc: "دورات متاحة على مدار الساعة تناسب جدولك اليومي بمرونة كاملة." },
  { icon: BookOpen, title: "محتوى تعليمي عالي الجودة", desc: "مناهج مصممة بعناية من نخبة المعلمين والخبراء في مجالاتهم." },
  { icon: LineChart, title: "متابعة تقدمك", desc: "لوحة تحكم ذكية تعرض تقدمك وإنجازاتك ونقاط تطويرك بوضوح." },
  { icon: Sparkles, title: "تجربة تعليمية مرنة", desc: "تعلم عبر الفيديو، اختبارات تفاعلية، وشهادات إتمام معتمدة." },
];

const stats = [
  { value: "+10,000", label: "طالب" },
  { value: "+500", label: "دورة" },
  { value: "+150", label: "معلم" },
  { value: "95%", label: "رضا الطلاب" },
];

function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="gradient-hero relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:py-24 lg:grid-cols-2">
          <div className="space-y-6">
            <Badge className="rounded-full bg-accent-soft text-accent-foreground hover:bg-accent-soft">
              <Sparkles className="ml-1 h-3.5 w-3.5" /> منصة تعليمية من الجيل الجديد
            </Badge>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-foreground md:text-6xl">
              تعلم بذكاء،
              <br />
              طوّر مهاراتك،
              <br />
              وابنِ <span className="text-accent">مستقبلك</span>.
            </h1>
            <p className="max-w-xl text-base leading-8 text-muted-foreground md:text-lg">
              منصة تعليمية حديثة تجمع بين أفضل المحتوى التعليمي وتجربة تعلم سهلة ومرنة للطلاب والمعلمين، في بيئة عربية أصيلة.
            </p>
            <div className="flex flex-wrap gap-3">
              <Button asChild size="lg" className="rounded-full text-base">
                <Link to="/courses">ابدأ التعلم الآن <ArrowLeft className="mr-2 h-4 w-4" /></Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full text-base">
                <Link to="/courses">استكشف الدورات</Link>
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-4 text-sm text-muted-foreground">
              <div className="flex -space-x-2 -space-x-reverse">
                {["أ", "س", "م", "ن"].map((c, i) => (
                  <Avatar key={i} className="h-9 w-9 border-2 border-background">
                    <AvatarFallback className="bg-primary text-primary-foreground text-xs">{c}</AvatarFallback>
                  </Avatar>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-3.5 w-3.5 fill-current" />)}
                </div>
                <span>انضم إلى +10,000 متعلّم</span>
              </div>
            </div>
          </div>

          {/* Dashboard preview */}
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-br from-accent/20 to-primary/20 blur-3xl" />
            <div className="card-elevated overflow-hidden rounded-3xl p-4">
              <div className="flex items-center justify-between border-b border-border pb-3">
                <div className="flex items-center gap-2">
                  <span className="grid h-8 w-8 place-items-center rounded-lg bg-primary text-primary-foreground text-xs font-bold">أ</span>
                  <div className="text-sm">
                    <div className="font-semibold">مرحباً، أحمد 👋</div>
                    <div className="text-[10px] text-muted-foreground">لديك ٣ دروس اليوم</div>
                  </div>
                </div>
                <Badge className="rounded-full">لوحة الطالب</Badge>
              </div>
              <div className="grid grid-cols-3 gap-3 py-4">
                {[
                  { label: "التقدم", value: "72%", tone: "bg-primary-soft text-primary" },
                  { label: "الدورات", value: "٦", tone: "bg-accent-soft text-accent-foreground" },
                  { label: "الساعات", value: "٤٨", tone: "bg-muted text-foreground" },
                ].map((s) => (
                  <div key={s.label} className={`rounded-2xl p-3 ${s.tone}`}>
                    <div className="text-xs opacity-80">{s.label}</div>
                    <div className="mt-1 text-xl font-extrabold">{s.value}</div>
                  </div>
                ))}
              </div>
              <div className="space-y-2">
                {courses.slice(0, 3).map((c) => (
                  <div key={c.id} className="flex items-center gap-3 rounded-2xl border border-border p-3">
                    <div className={`grid h-11 w-11 place-items-center rounded-xl bg-gradient-to-br ${c.color} text-xl`}>{c.emoji}</div>
                    <div className="min-w-0 flex-1">
                      <div className="truncate text-sm font-semibold">{c.title}</div>
                      <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div className="h-full bg-accent" style={{ width: `${c.progress ?? 40}%` }} />
                      </div>
                    </div>
                    <PlayCircle className="h-5 w-5 text-primary" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="outline" className="rounded-full">المميزات</Badge>
          <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">لماذا أكاديمية نُخبة؟</h2>
          <p className="mt-3 text-muted-foreground">تجربة تعلم متكاملة مصممة لمساعدتك على تحقيق أهدافك التعليمية بكفاءة.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="card-elevated card-elevated-hover p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary">
                <f.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm leading-7 text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Courses */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <Badge variant="outline" className="rounded-full">الأكثر رواجاً</Badge>
              <h2 className="mt-3 text-3xl font-extrabold md:text-4xl">دورات مقترحة لك</h2>
              <p className="mt-2 text-muted-foreground">اختر من بين مئات الدورات الاحترافية بمختلف المستويات.</p>
            </div>
            <Button asChild variant="outline" className="rounded-full">
              <Link to="/courses">عرض جميع الدورات <ArrowLeft className="mr-2 h-4 w-4" /></Link>
            </Button>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {courses.map((c) => <CourseCard key={c.id} course={c} />)}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="card-elevated grid gap-8 rounded-3xl bg-primary p-10 text-primary-foreground sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-4xl font-extrabold text-accent md:text-5xl">{s.value}</div>
              <div className="mt-2 text-sm text-primary-foreground/80">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-muted/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="outline" className="rounded-full">آراء الطلاب</Badge>
            <h2 className="mt-4 text-3xl font-extrabold md:text-4xl">ماذا يقول متعلّمونا</h2>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <div key={t.name} className="card-elevated p-7">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                </div>
                <p className="mt-4 text-sm leading-8 text-foreground">"{t.text}"</p>
                <div className="mt-6 flex items-center gap-3">
                  <Avatar className="h-11 w-11">
                    <AvatarFallback className="bg-primary text-primary-foreground">{t.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="text-sm font-bold">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-primary/80 p-10 md:p-16">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-accent/30 blur-3xl" />
          <div className="relative grid gap-8 md:grid-cols-2 md:items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-primary-foreground md:text-4xl">جاهز للبدء؟ ابدأ رحلتك التعليمية اليوم.</h2>
              <p className="mt-3 max-w-lg text-primary-foreground/80">انضم إلى آلاف المتعلمين واحصل على دورات عالية الجودة، شهادات معتمدة، ودعم مستمر.</p>
            </div>
            <div className="flex flex-wrap gap-3 md:justify-end">
              <Button asChild size="lg" variant="secondary" className="rounded-full bg-accent text-accent-foreground hover:bg-accent/90">
                <Link to="/login">إنشاء حساب مجاناً</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full border-white/30 bg-transparent text-primary-foreground hover:bg-white/10">
                <Link to="/courses">تصفح الدورات</Link>
              </Button>
            </div>
          </div>
          <ul className="relative mt-8 flex flex-wrap gap-6 text-sm text-primary-foreground/80">
            {["بدون التزامات", "إلغاء في أي وقت", "شهادات معتمدة", "دعم على مدار الساعة"].map((t) => (
              <li key={t} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-accent" />{t}</li>
            ))}
          </ul>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
