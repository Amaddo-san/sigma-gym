// ── Brand Color Tokens ──────────────────────────────────────────────────────
export const C = {
  red:       "#C0202E",
  redDark:   "#8B1520",
  navy:      "#0D1B2A",
  navyMid:   "#162437",
  green:     "#2D6A4F",
  greenLt:   "#40916C",
  cream:     "#F8F4EF",
  gold:      "#C8A96A",
  white:     "#FFFFFF",
  gray:      "#6B7280",
  lightGray: "#E5E7EB",
};

// ── Framer Motion Variants ───────────────────────────────────────────────────
export const variants = {
  fadeUp: {
    hidden:  { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  },
  fadeIn: {
    hidden:  { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
  },
  slideLeft: {
    hidden:  { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: "easeOut" } },
  },
  slideRight: {
    hidden:  { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0,  transition: { duration: 0.7, ease: "easeOut" } },
  },
  stagger: {
    visible: { transition: { staggerChildren: 0.12 } },
  },
};

// ── Data ─────────────────────────────────────────────────────────────────────


export const avatarColors = [
  [C.red,     "#F5C6CA"],
  [C.navy,    "#B5C6D8"],
  [C.green,   "#A8D5BE"],
  [C.gold,    "#F0DFB0"],
  [C.red,     "#F5C6CA"],
  [C.navyMid, "#B5C6D8"],
];

export const galleries = [
  {
    id: "strength",
    label: "Gallery 01",
title: "أجهزة القوة والتمارين الميكانيكية",
desc: "منصات رفع أولمبية، أجهزة كابل، أجهزة محمّلة بالأوزان، وأحدث معدات التمارين لكل عضلات الجسم.",    color: C.red,
    items: [
      {
  name: "سكوات راك أولمبي",
  detail: "10 أجهزة سكوات احترافية"
},
{
  name: "أجهزة الكابل",
  detail: "محطات تدريب متعددة"
},
{
  name: "أجهزة هامر سترينث",
  detail: "أجهزة مقاومة احترافية"
},
{
  name: "أجهزة سميث",
  detail: "أجهزة سميث متعددة الاستخدام"
},
{
  name: "ليج برس / هاك سكوات",
  detail: "أجهزة الأرجل الثقيلة"
},
{
  name: "سحب علوي / تجديف",
  detail: "أجهزة ظهر متعددة"
}
    ],
  },
  {
    id: "freeweights",
    label: "Gallery 02",
    title: "منطقة الأوزان الحرة",
    desc:  "أرضية مخصصة للأوزان الحرة تحتوي على  نطاق من الأوزان في وأشرطة EZ، وأدوات قوة متخصصة.",
    color: C.navy,
    items: [
      {
  name: "دمبلز",
  detail: "5 - 100 كغم"
},
{
  name: "بارات وأوزان",
  detail: "بارات أولمبية وEZ"
},
{
  name: "بنشات قابلة للتعديل",
  detail: "مستوية ومائلة"
},
{
  name: "كيتل بيل",
  detail: "مجموعة كاملة"
},
{
  name: "بارات متخصصة",
  detail: "معدات احترافية متنوعة"
},
{
  name: "منطقة طباشير",
  detail: "لتمارين الرفعات الثقيلة"
}
    ],
  },
  {
    id: "cardio",
    label: "Gallery 03",
title: "الكارديو والمرافق",
desc: "أجهزة كارديو حديثة بالإضافة إلى غرف تبديل، ساونا، ومرافق تساعدك تكمل تمرينك براحة.",    color: C.green,
    items: [
      {
  name: "جهاز الجري",
  detail: "أجهزة حديثة عالية الجودة"
},
{
  name: "أجهزة الإليبتيكال",
  detail: "تمارين كارديو متكاملة"
},
{
  name: "دراجات رياضية",
  detail: "دراجات هوائية احترافية"
},
{
  name: "أجهزة التجديف",
  detail: "تمارين كارديو شاملة"
},
{
  name: "غرف تبديل",
  detail: "خزائن وساونا"
},
{
  name: "منطقة الاستشفاء",
  detail: "استرخاء بعد التمرين"
}
    ],
  },
];
