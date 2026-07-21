import { createFileRoute } from "@tanstack/react-router";
import { Award, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const certs = [
  { title: "أساسيات البرمجة", date: "أبريل ٢٠٢٥", grade: "ممتاز" },
  { title: "تعلم اللغة الإنجليزية", date: "فبراير ٢٠٢٥", grade: "جيد جداً" },
  { title: "مهارات التفكير والإبداع", date: "ديسمبر ٢٠٢٤", grade: "ممتاز" },
];

export const Route = createFileRoute("/student/certificates")({
  component: () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">الشهادات</h1>
        <p className="mt-1 text-sm text-muted-foreground">شهاداتك المعتمدة من الدورات المكتملة.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {certs.map((c) => (
          <div key={c.title} className="card-elevated overflow-hidden">
            <div className="flex h-32 items-center justify-center bg-gradient-to-br from-primary to-accent">
              <Award className="h-12 w-12 text-white" />
            </div>
            <div className="space-y-2 p-5">
              <div className="font-bold">{c.title}</div>
              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>{c.date}</span>
                <span className="font-semibold text-success">{c.grade}</span>
              </div>
              <Button variant="outline" className="w-full rounded-xl"><Download className="ml-1 h-4 w-4" /> تنزيل</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  ),
});
