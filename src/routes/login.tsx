import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { GraduationCap, Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";

export const Route = createFileRoute("/login")({
  head: () => ({
    meta: [
      { title: "تسجيل الدخول — أكاديمية نُخبة" },
      { name: "description", content: "سجّل الدخول إلى حسابك في أكاديمية نُخبة." },
      { property: "og:title", content: "تسجيل الدخول" },
      { property: "og:description", content: "ادخل إلى منصتك التعليمية." },
    ],
  }),
  component: LoginPage,
});

function LoginPage() {
  const [showPwd, setShowPwd] = useState(false);
  const nav = useNavigate();
  return (
    <div className="min-h-screen bg-muted/40">
      <div className="mx-auto grid min-h-screen max-w-6xl gap-0 lg:grid-cols-2">
        {/* Visual */}
        <div className="relative hidden overflow-hidden bg-primary text-primary-foreground lg:block">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/25 blur-3xl" />
          <div className="absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-white/10 blur-3xl" />
          <div className="relative flex h-full flex-col justify-between p-12">
            <Link to="/" className="flex items-center gap-2.5">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold">أكاديمية نُخبة</span>
            </Link>
            <div>
              <h2 className="text-4xl font-extrabold leading-snug">
                استأنف رحلتك التعليمية اليوم.
              </h2>
              <p className="mt-4 max-w-md text-primary-foreground/70">
                لديك مئات الدروس بانتظارك، وشهادات معتمدة، ومجتمع من المتعلمين النشطين.
              </p>
              <ul className="mt-8 space-y-3 text-sm text-primary-foreground/80">
                <li>✓ تعلم في أي وقت ومن أي مكان</li>
                <li>✓ متابعة تقدمك الدراسي بشكل مرئي</li>
                <li>✓ محتوى عربي أصيل وعالي الجودة</li>
              </ul>
            </div>
            <div className="text-xs text-primary-foreground/60">© {new Date().getFullYear()} أكاديمية نُخبة</div>
          </div>
        </div>

        {/* Form */}
        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md space-y-6">
            <Link to="/" className="flex items-center gap-2.5 lg:hidden">
              <span className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-lg font-extrabold">أكاديمية نُخبة</span>
            </Link>
            <div>
              <h1 className="text-2xl font-extrabold md:text-3xl">مرحباً بعودتك</h1>
              <p className="mt-1 text-sm text-muted-foreground">سجّل الدخول للوصول إلى دوراتك ولوحة التقدم.</p>
            </div>

            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success("تم تسجيل الدخول");
                nav({ to: "/student" });
              }}
            >
              <div className="space-y-2">
                <Label htmlFor="email">البريد الإلكتروني</Label>
                <Input id="email" type="email" placeholder="name@example.com" className="h-11 rounded-xl" defaultValue="ahmed@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">كلمة المرور</Label>
                <div className="relative">
                  <Input id="password" type={showPwd ? "text" : "password"} placeholder="••••••••" defaultValue="password" className="h-11 rounded-xl pl-10" />
                  <button type="button" onClick={() => setShowPwd((v) => !v)} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                    {showPwd ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2">
                  <Checkbox defaultChecked /> <span className="text-muted-foreground">تذكرني</span>
                </label>
                <a className="cursor-pointer text-primary hover:underline">نسيت كلمة المرور؟</a>
              </div>
              <Button type="submit" size="lg" className="w-full rounded-xl">تسجيل الدخول</Button>
            </form>

            <div className="relative py-2 text-center text-xs text-muted-foreground">
              <span className="relative z-10 bg-muted/40 px-3">أو الدخول التجريبي</span>
              <span className="absolute inset-x-0 top-1/2 -z-0 h-px bg-border" />
            </div>

            <div className="grid gap-2 sm:grid-cols-2">
              <Button variant="outline" className="h-11 rounded-xl" onClick={() => { toast.success("تم الدخول كطالب"); nav({ to: "/student" }); }}>
                الدخول كطالب
              </Button>
              <Button variant="outline" className="h-11 rounded-xl" onClick={() => { toast.success("تم الدخول كمعلم"); nav({ to: "/teacher" }); }}>
                الدخول كمعلم
              </Button>
            </div>

            <p className="text-center text-sm text-muted-foreground">
              ليس لديك حساب؟ <a className="cursor-pointer font-semibold text-primary hover:underline">إنشاء حساب جديد</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
