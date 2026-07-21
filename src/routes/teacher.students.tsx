import { createFileRoute } from "@tanstack/react-router";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { teacherStudents } from "@/lib/demo-data";

export const Route = createFileRoute("/teacher/students")({
  component: StudentsPage,
});

function StudentsPage() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("الكل");
  const list = useMemo(() => teacherStudents.filter(s =>
    (q === "" || s.name.includes(q) || s.email.includes(q)) && (status === "الكل" || s.status === status),
  ), [q, status]);

  const statusTone = (s: string) =>
    s === "نشط" ? "bg-success/15 text-success" : s === "مكتمل" ? "bg-primary-soft text-primary" : "bg-destructive/15 text-destructive";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">إدارة الطلاب</h1>
        <p className="mt-1 text-sm text-muted-foreground">عرض ومتابعة طلاب دوراتك.</p>
      </div>

      <div className="flex flex-col gap-3 md:flex-row">
        <div className="relative flex-1">
          <Search className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input value={q} onChange={(e) => setQ(e.target.value)} placeholder="ابحث بالاسم أو البريد..." className="h-11 rounded-xl pr-10" />
        </div>
        <Select value={status} onValueChange={setStatus}>
          <SelectTrigger className="h-11 w-full rounded-xl md:w-48"><SelectValue /></SelectTrigger>
          <SelectContent>{["الكل", "نشط", "مكتمل", "متعثر"].map((s) => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
        </Select>
      </div>

      {/* Desktop table */}
      <div className="card-elevated hidden overflow-hidden md:block">
        <div className="grid grid-cols-[2fr_1.5fr_1.5fr_1.5fr_1fr_100px] gap-4 border-b border-border bg-muted/40 px-5 py-3 text-xs font-semibold text-muted-foreground">
          <div>الطالب</div><div>البريد</div><div>الدورة</div><div>التقدم</div><div>آخر نشاط</div><div>الحالة</div>
        </div>
        {list.map((s, i) => (
          <div key={i} className="grid grid-cols-[2fr_1.5fr_1.5fr_1.5fr_1fr_100px] items-center gap-4 border-b border-border p-5 last:border-0">
            <div className="flex items-center gap-3">
              <Avatar className="h-9 w-9"><AvatarFallback className="bg-primary text-primary-foreground text-xs">{s.name[0]}</AvatarFallback></Avatar>
              <span className="text-sm font-semibold">{s.name}</span>
            </div>
            <div className="text-xs text-muted-foreground">{s.email}</div>
            <div className="text-sm">{s.course}</div>
            <div className="flex items-center gap-2"><Progress value={s.progress} className="h-1.5 flex-1" /><span className="w-10 text-xs">{s.progress}%</span></div>
            <div className="text-xs text-muted-foreground">{s.last}</div>
            <Badge className={`justify-self-start rounded-full ${statusTone(s.status)}`} variant="secondary">{s.status}</Badge>
          </div>
        ))}
      </div>

      {/* Mobile cards */}
      <div className="grid gap-3 md:hidden">
        {list.map((s, i) => (
          <div key={i} className="card-elevated space-y-3 p-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Avatar className="h-9 w-9"><AvatarFallback className="bg-primary text-primary-foreground text-xs">{s.name[0]}</AvatarFallback></Avatar>
                <div>
                  <div className="text-sm font-bold">{s.name}</div>
                  <div className="text-xs text-muted-foreground">{s.email}</div>
                </div>
              </div>
              <Badge className={`rounded-full ${statusTone(s.status)}`} variant="secondary">{s.status}</Badge>
            </div>
            <div className="text-xs text-muted-foreground">{s.course} • {s.last}</div>
            <div className="flex items-center gap-2"><Progress value={s.progress} className="h-1.5 flex-1" /><span className="text-xs">{s.progress}%</span></div>
          </div>
        ))}
      </div>
    </div>
  );
}
