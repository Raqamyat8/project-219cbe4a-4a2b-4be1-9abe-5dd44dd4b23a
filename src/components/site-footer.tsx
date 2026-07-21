import { Link } from "@tanstack/react-router";
import { GraduationCap, Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-accent text-accent-foreground">
              <GraduationCap className="h-5 w-5" />
            </span>
            <span className="text-lg font-extrabold">أكاديمية نُخبة</span>
          </div>
          <p className="mt-4 text-sm leading-7 text-primary-foreground/70">
            منصة تعليمية عربية حديثة تجمع أفضل المعلمين والمحتوى في مكان واحد.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-bold">روابط سريعة</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><Link to="/" className="hover:text-accent">الرئيسية</Link></li>
            <li><Link to="/courses" className="hover:text-accent">الدورات</Link></li>
            <li><Link to="/login" className="hover:text-accent">تسجيل الدخول</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold">الدعم</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/70">
            <li><a className="hover:text-accent">مركز المساعدة</a></li>
            <li><a className="hover:text-accent">الأسئلة الشائعة</a></li>
            <li><a className="hover:text-accent">تواصل معنا</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold">تابعنا</h4>
          <div className="mt-4 flex gap-2">
            {[Twitter, Facebook, Instagram, Youtube].map((Icon, i) => (
              <a key={i} className="grid h-9 w-9 cursor-pointer place-items-center rounded-lg bg-white/10 hover:bg-accent hover:text-accent-foreground">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-primary-foreground/60">
        © {new Date().getFullYear()} أكاديمية نُخبة. جميع الحقوق محفوظة.
      </div>
    </footer>
  );
}
