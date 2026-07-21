import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { X, Plus, ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "sonner";

export const Route = createFileRoute("/teacher/new")({
  component: NewCoursePage,
});

function NewCoursePage() {
  const nav = useNavigate();
  const [lessons, setLessons] = useState<string[]>(["مقدمة الدورة", "الأدوات المستخدمة"]);
  const [newLesson, setNewLesson] = useState("");

  return (
    <div className="max-w-4xl space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">إنشاء دورة جديدة</h1>
        <p className="mt-1 text-sm text-muted-foreground">املأ البيانات لإنشاء ونشر دورتك.</p>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); toast.success("تم نشر الدورة بنجاح 🎉"); nav({ to: "/teacher/courses" }); }}
        className="grid gap-6 md:grid-cols-3"
      >
        <div className="card-elevated space-y-5 p-6 md:col-span-2">
          <div><Label>عنوان الدورة</Label><Input placeholder="مثال: تعلّم بايثون من الصفر" className="mt-2 h-11 rounded-xl" required /></div>
          <div><Label>وصف الدورة</Label><Textarea placeholder="اكتب وصفاً موجزاً وجذاباً لدورتك..." className="mt-2 min-h-[120px] rounded-xl" required /></div>
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <Label>التصنيف</Label>
              <Select defaultValue="البرمجة">
                <SelectTrigger className="mt-2 h-11 rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>{["البرمجة", "الرياضيات", "العلوم", "اللغات", "التصميم", "المهارات"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
            <div>
              <Label>المستوى</Label>
              <Select defaultValue="مبتدئ">
                <SelectTrigger className="mt-2 h-11 rounded-xl"><SelectValue /></SelectTrigger>
                <SelectContent>{["مبتدئ", "متوسط", "متقدم"].map((c) => <SelectItem key={c} value={c}>{c}</SelectItem>)}</SelectContent>
              </Select>
            </div>
          </div>

          <div>
            <Label>الدروس</Label>
            <ul className="mt-2 space-y-2">
              {lessons.map((l, i) => (
                <li key={i} className="flex items-center justify-between rounded-xl bg-muted/50 px-4 py-3">
                  <span className="text-sm"><span className="text-muted-foreground">{i + 1}.</span> {l}</span>
                  <button type="button" onClick={() => setLessons((prev) => prev.filter((_, x) => x !== i))} className="grid h-7 w-7 place-items-center rounded-lg text-muted-foreground hover:bg-background">
                    <X className="h-4 w-4" />
                  </button>
                </li>
              ))}
            </ul>
            <div className="mt-2 flex gap-2">
              <Input value={newLesson} onChange={(e) => setNewLesson(e.target.value)} placeholder="عنوان الدرس الجديد" className="h-11 rounded-xl" />
              <Button
                type="button"
                variant="outline"
                className="h-11 rounded-xl"
                onClick={() => {
                  if (!newLesson.trim()) return;
                  setLessons((prev) => [...prev, newLesson.trim()]);
                  setNewLesson("");
                }}
              >
                <Plus className="ml-1 h-4 w-4" /> إضافة
              </Button>
            </div>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="card-elevated p-5">
            <Label>صورة الدورة</Label>
            <div className="mt-2 grid aspect-video place-items-center rounded-2xl border-2 border-dashed border-border bg-muted/40 text-muted-foreground">
              <div className="text-center">
                <ImageIcon className="mx-auto h-8 w-8" />
                <div className="mt-1 text-xs">اسحب صورة أو اضغط للاختيار</div>
              </div>
            </div>
          </div>
          <div className="card-elevated space-y-3 p-5">
            <div className="text-sm font-bold">جاهز للنشر؟</div>
            <p className="text-xs text-muted-foreground">راجع المحتوى قبل النشر. يمكنك الحفظ كمسودة والعودة لاحقاً.</p>
            <div className="flex flex-col gap-2">
              <Button type="submit" className="w-full rounded-xl">نشر الدورة</Button>
              <Button type="button" variant="outline" className="w-full rounded-xl" onClick={() => toast.success("تم الحفظ كمسودة")}>حفظ كمسودة</Button>
            </div>
          </div>
        </aside>
      </form>
    </div>
  );
}
