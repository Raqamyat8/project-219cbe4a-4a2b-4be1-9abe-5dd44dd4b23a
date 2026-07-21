import { createFileRoute } from "@tanstack/react-router";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";

export const Route = createFileRoute("/student/settings")({
  component: () => (
    <div className="max-w-2xl space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">الإعدادات</h1>
        <p className="mt-1 text-sm text-muted-foreground">إدارة معلومات حسابك وتفضيلاتك.</p>
      </div>
      <form
        onSubmit={(e) => { e.preventDefault(); toast.success("تم حفظ التغييرات"); }}
        className="card-elevated space-y-5 p-6"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div><Label>الاسم الكامل</Label><Input defaultValue="أحمد العتيبي" className="mt-2 rounded-xl" /></div>
          <div><Label>البريد الإلكتروني</Label><Input defaultValue="ahmed@example.com" className="mt-2 rounded-xl" /></div>
          <div><Label>الجوّال</Label><Input defaultValue="+966 5X XXX XXXX" className="mt-2 rounded-xl" /></div>
          <div><Label>الدولة</Label><Input defaultValue="المملكة العربية السعودية" className="mt-2 rounded-xl" /></div>
        </div>
        <div className="space-y-3 border-t border-border pt-4">
          <div className="flex items-center justify-between">
            <div><div className="text-sm font-semibold">الإشعارات عبر البريد</div><div className="text-xs text-muted-foreground">استلم تنبيهات الدروس الجديدة.</div></div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between">
            <div><div className="text-sm font-semibold">التذكير بالحصص</div><div className="text-xs text-muted-foreground">إشعار قبل بداية الحصة.</div></div>
            <Switch defaultChecked />
          </div>
        </div>
        <Button type="submit" className="rounded-xl">حفظ التغييرات</Button>
      </form>
    </div>
  ),
});
