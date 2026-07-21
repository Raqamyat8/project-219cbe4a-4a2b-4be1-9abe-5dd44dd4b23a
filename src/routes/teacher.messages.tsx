import { createFileRoute } from "@tanstack/react-router";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

const messages = [
  { name: "أحمد المطيري", last: "شكراً لك أستاذ، الشرح كان واضح جداً!", time: "قبل ٥ دقائق", unread: 2 },
  { name: "فاطمة الزهراء", last: "متى موعد الحصة القادمة؟", time: "قبل ٣٠ دقيقة", unread: 1 },
  { name: "خالد الشمري", last: "أرسلت لك المشروع للمراجعة.", time: "أمس", unread: 0 },
  { name: "نورة الحربي", last: "هل يمكن إعادة شرح الوحدة الثانية؟", time: "منذ يومين", unread: 0 },
];

export const Route = createFileRoute("/teacher/messages")({
  component: () => (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-extrabold md:text-3xl">الرسائل</h1>
        <p className="mt-1 text-sm text-muted-foreground">رسائل الطلاب والاستفسارات.</p>
      </div>
      <div className="card-elevated divide-y divide-border">
        {messages.map((m, i) => (
          <div key={i} className="flex items-center gap-3 p-4 hover:bg-muted/50">
            <Avatar className="h-11 w-11 shrink-0"><AvatarFallback className="bg-primary text-primary-foreground">{m.name[0]}</AvatarFallback></Avatar>
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate font-semibold">{m.name}</span>
                <span className="shrink-0 text-xs text-muted-foreground">{m.time}</span>
              </div>
              <div className="mt-1 truncate text-sm text-muted-foreground">{m.last}</div>
            </div>
            {m.unread > 0 && <Badge className="shrink-0 rounded-full">{m.unread}</Badge>}
          </div>
        ))}
      </div>
    </div>
  ),
});
