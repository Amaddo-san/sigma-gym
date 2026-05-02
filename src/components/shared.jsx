import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import { C, variants } from "../tokens";

// ── Scroll-reveal hook ───────────────────────────────────────────────────────
export function useScrollReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return [ref, isInView];
}

// ── Reusable Section wrapper ─────────────────────────────────────────────────
export function Section({ id, bg = C.cream, children, style = {} }) {
  return (
    <section
      id={id}
      dir="ltr"
      style={{ background: bg, padding: "100px 24px", direction: "ltr", ...style }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>{children}</div>
    </section>
  );
}

// ── Section heading block ────────────────────────────────────────────────────
export function SectionTitle({ label, title, sub, light = false }) {
  const [ref, inView] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      variants={variants.stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      style={{ textAlign: "center", marginBottom: 64, direction: "ltr" }}
    >
      <motion.div
        variants={variants.fadeUp}
        style={{
          display: "inline-flex", alignItems: "center", gap: 8,
          background: `${C.red}22`, border: `1px solid ${C.red}44`,
          borderRadius: 4, padding: "6px 16px", marginBottom: 16,
        }}
      >
        <span style={{
          fontSize: 11, letterSpacing: 4, color: C.red,
          fontWeight: 700, textTransform: "uppercase",
        }}>
          {label}
        </span>
      </motion.div>

      <motion.h2
        variants={variants.fadeUp}
        style={{
          fontFamily: "'Barlow Condensed', Georgia, sans-serif",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 900,
          color: light ? C.white : C.navy,
          lineHeight: 1.1,
          marginBottom: 16,
        }}
      >
        {title}
      </motion.h2>

      {sub && (
        <motion.p
          variants={variants.fadeUp}
          style={{
            fontSize: 16,
            color: light ? "#8899AA" : C.gray,
            maxWidth: 560,
            margin: "0 auto",
            lineHeight: 1.7,
          }}
        >
          {sub}
        </motion.p>
      )}

      <motion.div
        variants={variants.fadeUp}
        style={{
          width: 60, height: 3, background: C.red,
          margin: "20px auto 0",
        }}
      />
    </motion.div>
  );
}
