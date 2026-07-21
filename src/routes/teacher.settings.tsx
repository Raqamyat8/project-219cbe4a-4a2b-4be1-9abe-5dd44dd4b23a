import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export const Route = createFileRoute("/teacher/settings")({
  component: () => (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">إعدادات الحساب</h1>
        <p className="mt-1 text-sm text-muted-foreground">حرّر معلوماتك الشخصية والمهنية.</p>
      </div>
      <form onSubmit={(e) => { e.preventDefault(); toast.success("تم الحفظ"); }} className="card-elevated space-y-5 p-6">
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>الاسم</Label><Input defaultValue="محمد الحسن" className="mt-2 rounded-xl" /></div>
          <div><Label>البريد</Label><Input defaultValue="mohammed@example.com" className="mt-2 rounded-xl" /></div>
          <div><Label>التخصص</Label><Input defaultValue="علوم الحاسب" className="mt-2 rounded-xl" /></div>
          <div><Label>الخبرة</Label><Input defaultValue="١٢ سنة" className="mt-2 rounded-xl" /></div>
        </div>
        <div><Label>نبذة تعريفية</Label><Textarea defaultValue="معلم متخصص في البرمجة وعلوم الحاسب مع خبرة تدريس تزيد عن عشر سنوات." className="mt-2 min-h-[100px] rounded-xl" /></div>
        <Button type="submit" className="rounded-xl">حفظ التغييرات</Button>
      </form>
    </div>
  ),
});
