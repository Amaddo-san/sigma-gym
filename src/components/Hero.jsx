import { motion } from "framer-motion";
import { ChevronDown, ArrowDown, ArrowRight } from "lucide-react";
import { C, variants } from "../tokens";

export default function Hero() {
  const scrollToContact = () =>
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  const scrollToAbout = () =>
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });

  return (
    /*
     * dir="rtl" is SCOPED to this section only.
     * It does NOT leak to other sections because index.css sets body { direction: ltr }.
     * This makes "justify-start" in RTL flex = push content to the RIGHT ✓
     */
    <section
      id="home"
      dir="rtl"
      className="relative min-h-screen overflow-hidden flex items-center"
      style={{ background: "#030406", fontFamily: "'Cairo', sans-serif" }}
    >
      {/* ── Grid background ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: 0.06,
          backgroundImage: `
            repeating-linear-gradient(0deg,  #fff 0px, #fff 1px, transparent 1px, transparent 64px),
            repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 64px)
          `,
        }}
      />

      {/* ── Red radial glow behind coach (right side in RTL = visual left of text) ── */}
      <div
        className="absolute pointer-events-none"
        style={{
          right: "20%",
          top: "15%",
          width: 520,
          height: 520,
          background: `radial-gradient(circle, ${C.red}44, transparent 65%)`,
          filter: "blur(48px)",
        }}
      />

      {/* ── Coach image — RIGHT side (which is the photo/bg side in this RTL layout) ── */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="absolute -left-[120%] bottom-0 h-full z-[1] hidden md:block"
        style={{ width: "200%" }}
      >
        <img
          src="/gym-coach.png"
          alt="Sigma Gym Coach"
          className="w-fit h-full"
          style={{
            objectFit: "cover",
            objectPosition: "center top",
            filter: "contrast(1.08) brightness(0.60)",
          }}
        />
      </motion.div>

      {/* ── Overlay: fades the coach image into background, dark on left (text side) ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none"
        style={{
          background: `
            linear-gradient(
              to right,
              rgba(3,4,6,0.10) 0%,
              rgba(3,4,6,0.55) 35%,
              rgba(3,4,6,0.92) 60%,
              rgba(3,4,6,1.00) 80%
            ),
            linear-gradient(to top, rgba(3,4,6,0.95) 0%, transparent 40%)
          `,
        }}
      />

      {/* ── Mobile dark overlay (coach hidden on mobile) ── */}
      <div
        className="absolute inset-0 z-[2] pointer-events-none md:hidden"
        style={{ background: "rgba(3,4,6,0.82)" }}
      />

      {/* ── Text content — pushed to the LEFT in RTL (= reading side for Arabic) ── */}
      <div className="relative z-[3] w-full max-w-[1400px] mx-auto px-6 md:px-20 pt-[130px] pb-[100px]">
        {/*
         * In RTL, text-right = align text to start (right).
         * We cap width so text stays in left ~55% and doesn't overlap the coach.
         */}
        <div className="w-full md:max-w-[640px] text-right">
          <motion.div variants={variants.stagger} initial="hidden" animate="visible">

            {/* Badge */}
            <motion.div
              variants={variants.fadeUp}
              className="inline-flex items-center px-4 py-2 mb-6 text-sm font-black"
              style={{
                border: `1px solid ${C.red}88`,
                color: C.red,
                background: "rgba(192,32,46,0.12)",
                borderRadius: 2,
              }}
            >
              أجهزة متطورة · كوتشات محترفين · نتائج حقيقية
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={variants.fadeUp}
              className="text-white font-extrabold leading-[1.2] mb-6"
              style={{
                fontFamily: "'Noto Kufi Arabic', sans-serif",
                fontSize: "clamp(45px, 5.8vw, 80px)",
              }}
            >
              إذا بدك نتيجة...
              <br />
              <span style={{ color: C.red, textShadow: `0 0 32px ${C.red}55` }}>
                لا تتمرن عشوائي
              </span>
            </motion.h1>

            {/* Divider */}
            <motion.div
              variants={variants.fadeUp}
              className="mb-6 mr-0"
              style={{ width: 72, height: 3, background: C.gold }}
            />

            {/* Description */}
            <motion.p
              variants={variants.fadeUp}
              className="text-[#d8dde6] text-lg leading-[2] font-bold mb-9"
              style={{ maxWidth: 580 }}
            >
              في Sigma Gym بنوفرلك أجهزة متطورة، تدريب احترافي، ومتابعة مستمرة
              عشان توصل لأقوى نسخة منك بأمان وبدون إصابات.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={variants.fadeUp}
              className="flex flex-wrap gap-4 mb-10"
            >
              <button
                onClick={scrollToContact}
                className="inline-flex items-center justify-center gap-3 h-[58px] px-8 text-base font-black text-white transition-transform hover:-translate-y-1 active:scale-95"
                style={{
                  background: `linear-gradient(135deg, ${C.red}, ${C.redDark})`,
                  border: "none",
                  borderRadius: 2,
                  boxShadow: `0 16px 40px ${C.red}40`,
                  fontFamily: "'Cairo', sans-serif",
                  cursor: "pointer",
                  minWidth: 200,
                }}
              >
                ابدأ تدريبك الآن
                <ArrowRight size={18} />
              </button>

              <button
                onClick={scrollToAbout}
                className="inline-flex items-center justify-center gap-3 h-[58px] px-8 text-base font-black text-white transition-transform hover:-translate-y-1 active:scale-95"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.28)",
                  borderRadius: 2,
                  fontFamily: "'Cairo', sans-serif",
                  cursor: "pointer",
                  minWidth: 180,
                }}
              >
                <ArrowDown size={17} />
                تعرف علينا
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={variants.fadeUp}
              className="grid grid-cols-3"
              style={{
                maxWidth: 580,
                border: "1px solid rgba(255,255,255,0.13)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(14px)",
              }}
            >
              {[
                { value: "+500", label: "مشترك"      },
                { value: "7",    label: "كوتش محترف" },
                { value: "11",   label: "سنوات خبرة" },
              ].map(({ value, label }, i) => (
                <div
                  key={label}
                  className="flex flex-col items-center justify-center py-5 px-3 text-center"
                  style={{
                    /* In RTL grid, first cell is rightmost.
                       We want dividers between cells, so border on left of cells 0 & 1 */
                    borderLeft: i < 2 ? "1px solid rgba(255,255,255,0.13)" : "none",
                  }}
                >
                  <strong
                    className="text-white leading-none mb-1 block"
                    style={{
                      fontFamily: "'Noto Kufi Arabic', sans-serif",
                      fontSize: 38,
                    }}
                  >
                    {value}
                  </strong>
                  <span className="text-[#c0c8d4] font-bold" style={{ fontSize: 14 }}>
                    {label}
                  </span>
                </div>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>

      {/* ── Scroll cue ── */}
      <motion.button
        onClick={scrollToAbout}
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute z-[4] bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 bg-transparent border-none text-white"
        style={{ opacity: 0.65, fontFamily: "'Cairo', sans-serif", cursor: "pointer" }}
      >
        <span style={{ fontSize: 13 }}>اسحب للأسفل</span>
        <ChevronDown size={22} />
      </motion.button>
    </section>
  );
}
