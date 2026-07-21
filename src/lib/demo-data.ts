export type Course = {
  id: string;
  title: string;
  teacher: string;
  category: string;
  level: "مبتدئ" | "متوسط" | "متقدم";
  lessons: number;
  hours: number;
  rating: number;
  students: number;
  progress?: number;
  price?: string;
  color: string;
  emoji: string;
  description: string;
};

export const categories = [
  "الكل",
  "البرمجة",
  "الرياضيات",
  "العلوم",
  "اللغات",
  "التصميم",
  "المهارات",
];

export const levels = ["الكل", "مبتدئ", "متوسط", "متقدم"] as const;

export const courses: Course[] = [
  {
    id: "programming-basics",
    title: "أساسيات البرمجة",
    teacher: "أ. محمد الحسن",
    category: "البرمجة",
    level: "مبتدئ",
    lessons: 24,
    hours: 18,
    rating: 4.9,
    students: 3241,
    progress: 62,
    color: "from-indigo-500/20 to-cyan-400/20",
    emoji: "💻",
    description:
      "دورة شاملة تأخذك من الصفر إلى إتقان أساسيات البرمجة باستخدام لغة بايثون، مع تمارين تطبيقية ومشاريع عملية.",
  },
  {
    id: "math-simplified",
    title: "الرياضيات بطريقة مبسطة",
    teacher: "أ. سارة العتيبي",
    category: "الرياضيات",
    level: "مبتدئ",
    lessons: 32,
    hours: 22,
    rating: 4.8,
    students: 2110,
    progress: 30,
    color: "from-amber-400/20 to-rose-400/20",
    emoji: "📐",
    description:
      "شرح مبسّط للرياضيات مع أمثلة يومية وتطبيقات عملية تساعد الطالب على فهم المفاهيم بعمق.",
  },
  {
    id: "english-learning",
    title: "تعلم اللغة الإنجليزية",
    teacher: "أ. ليلى الأنصاري",
    category: "اللغات",
    level: "متوسط",
    lessons: 40,
    hours: 30,
    rating: 4.9,
    students: 5820,
    progress: 78,
    color: "from-emerald-400/20 to-teal-400/20",
    emoji: "🌍",
    description:
      "برنامج متكامل لتعلم اللغة الإنجليزية بدءاً من القواعد والمحادثة وصولاً إلى الكتابة الأكاديمية.",
  },
  {
    id: "physics-beginners",
    title: "الفيزياء للمبتدئين",
    teacher: "أ. خالد المطيري",
    category: "العلوم",
    level: "مبتدئ",
    lessons: 20,
    hours: 15,
    rating: 4.7,
    students: 1560,
    color: "from-sky-400/20 to-indigo-400/20",
    emoji: "⚛️",
    description:
      "مقدمة عملية إلى مفاهيم الفيزياء الأساسية مع تجارب تفاعلية توضح القوانين والنظريات.",
  },
  {
    id: "thinking-creativity",
    title: "مهارات التفكير والإبداع",
    teacher: "د. نورة القحطاني",
    category: "المهارات",
    level: "متوسط",
    lessons: 16,
    hours: 10,
    rating: 4.9,
    students: 2984,
    color: "from-fuchsia-400/20 to-purple-400/20",
    emoji: "🧠",
    description:
      "دورة تنمي مهارات التفكير الناقد وحل المشكلات والإبداع من خلال تمارين ذهنية وأنشطة تفاعلية.",
  },
  {
    id: "design-basics",
    title: "أساسيات التصميم",
    teacher: "أ. رانيا سعيد",
    category: "التصميم",
    level: "مبتدئ",
    lessons: 28,
    hours: 20,
    rating: 4.8,
    students: 1875,
    color: "from-rose-400/20 to-orange-400/20",
    emoji: "🎨",
    description:
      "تعلم مبادئ التصميم الجرافيكي، من نظرية الألوان إلى التكوين البصري وأدوات التصميم الحديثة.",
  },
];

export const curriculum: Record<string, { title: string; lessons: { id: string; title: string; duration: string }[] }[]> = {
  default: [
    {
      title: "الوحدة الأولى: مقدمة وتأسيس",
      lessons: [
        { id: "l1", title: "مقدمة عامة عن الدورة", duration: "٨ دقائق" },
        { id: "l2", title: "المفاهيم الأساسية", duration: "١٢ دقيقة" },
        { id: "l3", title: "تهيئة بيئة العمل", duration: "١٥ دقيقة" },
      ],
    },
    {
      title: "الوحدة الثانية: البناء والتطبيق",
      lessons: [
        { id: "l4", title: "الخطوات العملية الأولى", duration: "٢٠ دقيقة" },
        { id: "l5", title: "أمثلة تطبيقية", duration: "١٨ دقيقة" },
        { id: "l6", title: "تمرين عملي شامل", duration: "٢٥ دقيقة" },
      ],
    },
    {
      title: "الوحدة الثالثة: التعمّق والإتقان",
      lessons: [
        { id: "l7", title: "المفاهيم المتقدمة", duration: "٢٢ دقيقة" },
        { id: "l8", title: "مشروع تطبيقي", duration: "٣٠ دقيقة" },
        { id: "l9", title: "الاختبار النهائي", duration: "١٥ دقيقة" },
      ],
    },
  ],
};

export const testimonials = [
  {
    name: "عبدالله الشهري",
    role: "طالب هندسة",
    text: "أفضل منصة تعليمية جربتها. المحتوى منظّم والمعلمون رائعون، وتمكنت من رفع مستواي في البرمجة خلال شهرين فقط.",
    avatar: "ع",
  },
  {
    name: "منى الزهراني",
    role: "طالبة ثانوية",
    text: "تجربة التعلم مرنة جداً، أستطيع أن أدرس في أي وقت والدروس واضحة ومباشرة. أنصح بها بشدة!",
    avatar: "م",
  },
  {
    name: "أحمد الغامدي",
    role: "معلم رياضيات",
    text: "كمعلم، وجدت في المنصة أدوات ممتازة لإنشاء المحتوى ومتابعة الطلاب. لوحة التحكم عملية جداً.",
    avatar: "أ",
  },
];

export const studentEnrolledCourses = courses.slice(0, 4).map((c, i) => ({
  ...c,
  progress: [62, 30, 78, 15][i],
  lastLesson: [
    "الحلقات التكرارية",
    "الدوال المثلثية",
    "زمن المضارع المستمر",
    "قوانين نيوتن",
  ][i],
}));

export const upcomingSchedule = [
  { title: "حصة مباشرة: البرمجة الكائنية", time: "غداً — ٧:٠٠ مساءً", teacher: "أ. محمد الحسن" },
  { title: "اختبار قصير: الرياضيات", time: "الخميس — ٥:٠٠ مساءً", teacher: "أ. سارة العتيبي" },
  { title: "ورشة: مهارات العرض", time: "السبت — ٨:٠٠ مساءً", teacher: "د. نورة القحطاني" },
];

export const achievements = [
  { title: "متعلم نشط", desc: "أكملت ٧ أيام متتالية", icon: "🔥" },
  { title: "شهادة إتمام", desc: "أساسيات البرمجة", icon: "🏅" },
  { title: "مركز أول", desc: "في اختبار الوحدة الثانية", icon: "⭐" },
];

export const teacherCourses = [
  { id: "c1", title: "أساسيات البرمجة", students: 3241, lessons: 24, rating: 4.9, status: "منشورة" as const },
  { id: "c2", title: "البرمجة الكائنية بلغة بايثون", students: 1820, lessons: 32, rating: 4.8, status: "منشورة" as const },
  { id: "c3", title: "مدخل إلى الذكاء الاصطناعي", students: 0, lessons: 12, rating: 0, status: "مسودة" as const },
];

export const teacherStudents = [
  { name: "أحمد المطيري", email: "ahmed@example.com", course: "أساسيات البرمجة", progress: 78, last: "قبل ساعتين", status: "نشط" },
  { name: "فاطمة الزهراء", email: "fatima@example.com", course: "البرمجة الكائنية", progress: 92, last: "اليوم", status: "نشط" },
  { name: "يوسف العتيبي", email: "yousef@example.com", course: "أساسيات البرمجة", progress: 45, last: "أمس", status: "نشط" },
  { name: "نورة الحربي", email: "noura@example.com", course: "أساسيات البرمجة", progress: 12, last: "قبل ٣ أيام", status: "متعثر" },
  { name: "خالد الشمري", email: "khaled@example.com", course: "البرمجة الكائنية", progress: 100, last: "الأسبوع الماضي", status: "مكتمل" },
  { name: "ريم القحطاني", email: "reem@example.com", course: "أساسيات البرمجة", progress: 68, last: "اليوم", status: "نشط" },
];

export const enrollmentChart = [
  { month: "يناير", students: 120 },
  { month: "فبراير", students: 180 },
  { month: "مارس", students: 240 },
  { month: "أبريل", students: 310 },
  { month: "مايو", students: 420 },
  { month: "يونيو", students: 560 },
  { month: "يوليو", students: 690 },
];

export const viewsChart = [
  { month: "يناير", views: 2400 },
  { month: "فبراير", views: 3200 },
  { month: "مارس", views: 4100 },
  { month: "أبريل", views: 5000 },
  { month: "مايو", views: 6300 },
  { month: "يونيو", views: 7800 },
  { month: "يوليو", views: 9200 },
];

export const performanceChart = [
  { name: "البرمجة", value: 92 },
  { name: "الرياضيات", value: 78 },
  { name: "اللغات", value: 85 },
  { name: "التصميم", value: 70 },
];

export function getCourse(id: string): Course | undefined {
  return courses.find((c) => c.id === id);
}
