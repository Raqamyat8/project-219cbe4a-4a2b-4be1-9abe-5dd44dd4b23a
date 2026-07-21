import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Clock, BookOpen, LineChart, Sparkles, Award, MessageSquare, Users, Shield } from "lucide-react";

export const Route = createFileRoute("/features")({
  head: () => ({
    meta: [
      { title: "المميزات — أكاديمية نُخبة" },
      { name: "description", content: "اكتشف مزايا أكاديمية نُخبة الحصرية." },
      { property: "og:title", content: "المميزات" },
      { property: "og:description", content: "مزايا تجعل تجربة التعلم أفضل." },
    ],
  }),
  component: Features,
});

const items = [
  { icon: Clock, title: "تعلم في أي وقت", desc: "دورات متاحة على مدار الساعة." },
  { icon: BookOpen, title: "محتوى عالي الجودة", desc: "مناهج مصممة بعناية من خبراء." },
  { icon: LineChart, title: "متابعة التقدم", desc: "لوحة تحكم ذكية بإحصائيات دقيقة." },
  { icon: Sparkles, title: "تجربة مرنة", desc: "فيديو، اختبارات، ومصادر تنزيل." },
  { icon: Award, title: "شهادات معتمدة", desc: "أثبت مهاراتك بشهادات إتمام." },
  { icon: MessageSquare, title: "دعم مباشر", desc: "تواصل مع المعلمين والمجتمع." },
  { icon: Users, title: "مجتمع تعليمي", desc: "تعلّم مع آلاف الطلاب حول العالم." },
  { icon: Shield, title: "بيئة آمنة", desc: "بيانات محمية وخصوصية تامة." },
];

function Features() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">مميزاتنا</h1>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">كل ما تحتاجه لتجربة تعلم استثنائية.</p>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((f) => (
            <div key={f.title} className="card-elevated card-elevated-hover p-6">
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary"><f.icon className="h-6 w-6" /></div>
              <h3 className="mt-5 font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
