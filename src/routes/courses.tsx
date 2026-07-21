import { createFileRoute } from "@tanstack/react-router";
import { Search, SlidersHorizontal } from "lucide-react";
import { useMemo, useState } from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { CourseCard } from "@/components/course-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { categories, levels, courses } from "@/lib/demo-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/courses")({
  head: () => ({
    meta: [
      { title: "استكشف الدورات — أكاديمية نُخبة" },
      { name: "description", content: "تصفّح مئات الدورات العربية بمختلف المجالات والمستويات." },
      { property: "og:title", content: "الدورات — أكاديمية نُخبة" },
      { property: "og:description", content: "دورات في البرمجة، الرياضيات، اللغات، التصميم والمزيد." },
    ],
  }),
  component: CoursesPage,
});

function CoursesPage() {
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState("الكل");
  const [level, setLevel] = useState<(typeof levels)[number]>("الكل");
  const [sort, setSort] = useState("الأكثر شهرة");

  const filtered = useMemo(() => {
    let list = courses.filter((c) => {
      const okQuery = c.title.includes(query) || c.teacher.includes(query) || query === "";
      const okCat = cat === "الكل" || c.category === cat;
      const okLevel = level === "الكل" || c.level === level;
      return okQuery && okCat && okLevel;
    });
    if (sort === "الأعلى تقييماً") list = [...list].sort((a, b) => b.rating - a.rating);
    if (sort === "الأكثر طلاباً") list = [...list].sort((a, b) => b.students - a.students);
    return list;
  }, [query, cat, level, sort]);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="border-b border-border bg-muted/40">
        <div className="mx-auto max-w-7xl px-6 py-14">
          <h1 className="text-3xl font-extrabold md:text-4xl">استكشف الدورات</h1>
          <p className="mt-2 text-muted-foreground">اختر من مكتبتنا الشاملة من الدورات الاحترافية.</p>
          <div className="mt-6 flex flex-col gap-3 md:flex-row">
            <div className="relative flex-1">
              <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="ابحث عن دورة..."
                className="h-12 rounded-2xl pr-10 text-base"
              />
            </div>
            <Select value={sort} onValueChange={setSort}>
              <SelectTrigger className="h-12 w-full rounded-2xl md:w-56">
                <SlidersHorizontal className="ml-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {["الأكثر شهرة", "الأعلى تقييماً", "الأكثر طلاباً"].map((s) => (
                  <SelectItem key={s} value={s}>{s}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex flex-wrap gap-2">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setCat(c)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                cat === c
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-primary",
              )}
            >
              {c}
            </button>
          ))}
        </div>
        <div className="mb-8 flex flex-wrap gap-2">
          {levels.map((l) => (
            <button
              key={l}
              onClick={() => setLevel(l)}
              className={cn(
                "rounded-full border px-3.5 py-1.5 text-xs font-medium transition-colors",
                level === l
                  ? "border-accent bg-accent-soft text-accent-foreground"
                  : "border-border bg-card text-muted-foreground hover:border-accent/40",
              )}
            >
              {l}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="card-elevated grid place-items-center p-16 text-center">
            <p className="text-muted-foreground">لا توجد دورات مطابقة لبحثك.</p>
            <Button variant="outline" className="mt-4 rounded-full" onClick={() => { setQuery(""); setCat("الكل"); setLevel("الكل"); }}>إعادة تعيين</Button>
          </div>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => <CourseCard key={c.id} course={c} />)}
          </div>
        )}
      </section>
      <SiteFooter />
    </div>
  );
}
