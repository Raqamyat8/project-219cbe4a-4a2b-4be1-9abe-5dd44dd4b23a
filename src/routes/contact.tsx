import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "تواصل معنا — أكاديمية نُخبة" },
      { name: "description", content: "نحن هنا للإجابة على أسئلتك." },
      { property: "og:title", content: "تواصل معنا" },
      { property: "og:description", content: "راسلنا في أي وقت." },
    ],
  }),
  component: Contact,
});

function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <h1 className="text-4xl font-extrabold">تواصل معنا</h1>
          <p className="mt-3 max-w-md text-muted-foreground">فريقنا جاهز للإجابة على استفساراتك خلال ٢٤ ساعة.</p>
          <ul className="mt-8 space-y-4">
            {[
              { icon: Mail, label: "hello@nokhba.edu" },
              { icon: Phone, label: "+٩٦٦ ١٢ ٣٤٥ ٦٧٨٩" },
              { icon: MapPin, label: "الرياض، المملكة العربية السعودية" },
            ].map((c) => (
              <li key={c.label} className="flex items-center gap-3">
                <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary"><c.icon className="h-5 w-5" /></div>
                <span className="text-sm font-medium">{c.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <form
          onSubmit={(e) => { e.preventDefault(); toast.success("تم إرسال رسالتك بنجاح"); }}
          className="card-elevated space-y-4 p-6"
        >
          <div><Label>الاسم</Label><Input placeholder="اسمك الكامل" className="mt-2 h-11 rounded-xl" required /></div>
          <div><Label>البريد</Label><Input type="email" placeholder="name@example.com" className="mt-2 h-11 rounded-xl" required /></div>
          <div><Label>الرسالة</Label><Textarea placeholder="اكتب رسالتك..." className="mt-2 min-h-[140px] rounded-xl" required /></div>
          <Button type="submit" className="w-full rounded-xl">إرسال</Button>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}
