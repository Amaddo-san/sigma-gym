import { motion } from "framer-motion";
import {
  Target,
  Shield,
  Award,
  Clock,
  Users,
  Dumbbell,
  Zap,
} from "lucide-react";
import { useScrollReveal } from "./shared";
import { C, variants } from "../tokens";

const pillars = [
  {
    icon: <Target size={18} />,
    label: "تدريب بهدف",
    text: "نساعدك تبني خطة أوضح وتتابع نتائجك بثبات.",
  },
  {
    icon: <Shield size={18} />,
    label: "بيئة آمنة",
    text: "تنظيم ونظافة ومتابعة لتتمرن بثقة.",
  },
  {
    icon: <Award size={18} />,
    label: "جودة عالية",
    text: "أجهزة احترافية وكادر يساعدك تتمرن صح.",
  },
];

const stats = [
  { value: "2015", label: "تأسس منذ" },
  { value: "+3000", label: "مساحة تدريب" },
  { value: "+500", label: "مشترك نشط" },
  { value: "+100", label: "جهاز ومعدة" },
];

export default function About() {
  const [ref, inView] = useScrollReveal();

  return (
    <section
      id="about"
      dir="rtl"
      className="relative overflow-hidden"
      style={{ background: "#060708", color: C.white }}
    >
      {/* Header */}
      <div
        className="relative border-b"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-24 lg:py-32">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="max-w-4xl mr-auto text-right"
          >
            <span
              className="inline-block mb-6 px-5 py-2 font-bold"
              style={{
                color: C.red,
                border: `1px solid ${C.red}55`,
                fontSize: 13,
              }}
            >
              ◆ عن النادي
            </span>

            <h2
              className="font-black leading-[0.95] mb-8"
              style={{
                fontFamily: "'Changa', sans-serif",
                fontSize: "clamp(58px, 8vw, 118px)",
              }}
            >
              تمرين جاد.
              <br />
              <span style={{ color: C.red }}>نتائج أوضح.</span>
            </h2>

            <p
              style={{
                color: "#7E8892",
                lineHeight: 2,
                fontSize: 16,
                maxWidth: 780,
              }}
            >
              منذ 2015، يقدّم <span dir="ltr">Sigma Gym</span> في عمّان بيئة
              تدريب متكاملة للرجال والسيدات — أجهزة حديثة، متابعة مستمرة，
              وجو يحفّزك كل يوم.
            </p>

            <div
              className="mt-9"
              style={{ width: 90, height: 4, background: C.red }}
            />
          </motion.div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto border-x" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="grid grid-cols-2 lg:grid-cols-4 border-b" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
       {stats.map((s, i) => (
  <motion.div
    key={s.label}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, delay: i * 0.1 }}
    viewport={{ once: true }}
    className="p-8 lg:p-10 border-l last:border-l-0"
    style={{ borderColor: "rgba(255,255,255,0.08)" }}
  >
    <motion.div
      initial={{ scale: 0.85, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
      viewport={{ once: true }}
      className="font-black leading-none mb-3"
      style={{
        fontFamily: "'Changa', sans-serif",
        fontSize: "clamp(42px, 5vw, 72px)",
      }}
    >
      {s.value}
    </motion.div>

    <div style={{ color: "#6E7782", fontSize: 13 }}>{s.label}</div>
  </motion.div>
))}
        </div>

        <motion.div
          ref={ref}
          variants={variants.stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 lg:grid-cols-3"
        >
          {/* Community */}
          <motion.div
            variants={variants.fadeUp}
            className="relative min-h-[390px] p-8 lg:p-10 flex flex-col justify-end border-l"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              background:
                "linear-gradient(135deg, rgba(239,35,60,0.09), transparent 55%)",
            }}
          >
            <motion.div
  animate={{ scale: [1, 1.08, 1], opacity: [0.7, 1, 0.7] }}
  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
  className="absolute top-10 right-10 w-24 h-24 rounded-full flex items-center justify-center"
              style={{
                border: `1px solid ${C.red}40`,
                color: C.red,
                opacity: 0.7,
              }}
            >
              <Users size={28} />
            </motion.div>

            <span style={{ color: C.red, fontSize: 13, fontWeight: 800, lineHeight: 1.8 }}>
              ◆ أكثر من مجرد جيم
            </span>

            <h3
              className="font-black mt-5 mb-5 leading-tight"
              style={{ fontFamily: "'Changa', sans-serif", fontSize: 36, lineHeight: 1.5 }}
            >
              مجتمع رياضي
              <br />
              يصنع الفرق
            </h3>

            <p style={{ color: "#7E8892", lineHeight: 2}}>
              في سيجما، التمرين مش مجرد أجهزة وأوزان. هو مساحة تساعدك تلتزم，
              تتطور، وتبني جسم أقوى.
            </p>
          </motion.div>

          {/* Hours */}
          <motion.div
            variants={variants.fadeUp}
            className="min-h-[390px] p-8 lg:p-10 border-l"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <span style={{ color: C.red, fontSize: 13, fontWeight: 800 }}>
              ◆ أوقات الدوام
            </span>

            <h3
              className="font-black mt-8 mb-8 leading-tight"
              style={{ fontFamily: "'Changa', sans-serif", fontSize: 40 }}
            >
              متى
              <br />
              تكون هنا
            </h3>

            <div className="space-y-8">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} color={C.red} />
                  <strong>الرجال</strong>
                </div>
                <p style={{ color: "#8C96A1", lineHeight: 1.9 }}>
                  السبت - الأربعاء: <b style={{ color: C.white }}>6ص - 12م</b>
                  <br />
                  الخميس: <b style={{ color: C.white }}>6ص - 10م</b>
                  <br />
                  الجمعة: <b style={{ color: C.white }}>4م - 10م</b>
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Clock size={16} color="#4EA8DE" />
                  <strong>السيدات</strong>
                </div>
                <p style={{ color: "#8C96A1", lineHeight: 1.9 }}>
                  السبت - الخميس: <b style={{ color: C.white }}>9ص - 9م</b>
                  <br />
                  الجمعة: <b style={{ color: C.red }}>عطلة</b>
                </p>
              </div>
            </div>
          </motion.div>

          {/* Why */}
          <motion.div
            variants={variants.fadeUp}
            className="min-h-[390px] p-8 lg:p-10"
            style={{
              borderLeft: `1px solid ${C.red}`,
              background:
                "linear-gradient(135deg, rgba(239,35,60,0.05), transparent 50%)",
            }}
          >
            <span style={{ color: C.red, fontSize: 13, fontWeight: 800 }}>
              ◆ ليش تختار سيجما
            </span>

            <h3
              className="font-black mt-8 mb-8 leading-tight"
              style={{ fontFamily: "'Changa', sans-serif", fontSize: 36 }}
            >
              ليش تختار
              <br />
              سيجما جيم؟
            </h3>

            <div className="space-y-8">
              {pillars.map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div style={{ color: C.red }}>{item.icon}</div>
                  <div>
                    <h4
                      className="font-black mb-2"
                      style={{
                        fontFamily: "'Changa', sans-serif",
                        fontSize: 22,
                      }}
                    >
                      {item.label}
                    </h4>
                    <p style={{ color: "#7E8892", lineHeight: 1.8 }}>
                      {item.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}