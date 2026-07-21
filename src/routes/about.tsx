import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Target, Users, Sparkles } from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "عن المنصة — أكاديمية نُخبة" },
      { name: "description", content: "تعرّف على قصة أكاديمية نُخبة ورؤيتنا في تطوير التعليم العربي." },
      { property: "og:title", content: "عن أكاديمية نُخبة" },
      { property: "og:description", content: "قصتنا ورؤيتنا في التعليم." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="gradient-hero">
        <div className="mx-auto max-w-4xl px-6 py-20 text-center">
          <h1 className="text-4xl font-extrabold md:text-5xl">عن أكاديمية نُخبة</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            نحن منصة تعليمية عربية نؤمن بأن كل شخص يستحق فرصة تعلم عالية الجودة، مرنة، ومحفزة.
          </p>
        </div>
      </section>
      <section className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3">
        {[
          { icon: Target, title: "رؤيتنا", text: "أن نكون المرجع الأول للتعليم الرقمي في العالم العربي." },
          { icon: Users, title: "مجتمعنا", text: "أكثر من عشرة آلاف متعلّم ومئة وخمسين معلماً حول الوطن العربي." },
          { icon: Sparkles, title: "قيمنا", text: "الجودة، البساطة، التمكين، والإبداع في كل تفصيلة." },
        ].map((f) => (
          <div key={f.title} className="card-elevated p-6">
            <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary-soft text-primary"><f.icon className="h-6 w-6" /></div>
            <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
            <p className="mt-2 text-sm leading-7 text-muted-foreground">{f.text}</p>
          </div>
        ))}
      </section>
      <SiteFooter />
    </div>
  );
}
