import { motion } from "framer-motion";
import { Award, Headphones, Dumbbell, Users } from "lucide-react";
import { useScrollReveal } from "./shared";
import { C, variants } from "../tokens";

const menCoaches = [
  {
    name: "Wissam Al-Bishawi",
    role: "Head Coach",
    years: 38,
    spec: "Long experience in coaching, strength training, and building effective workout programs.",
    image: "/WIS.png",
  },
  {
    name: "Mustafa Shehadeh",
    role: "Head Coach",
    years: 20,
    spec: "Specialized in performance development, bodybuilding, and helping athletes improve safely.",
    image: "/MU.png",
  },
  {
    name: "Anas Alkhoni",
    role: "Coach",
    years: 4,
    spec: "Focused on training follow-up, exercise technique, and helping members progress step by step.",
    image: "/ANAS.png",
  },
];

const staff = [
  {
    name: "Fahad",
    role: "Reception & Support",
    spec: "Welcomes members, supports daily gym operations, and helps members with basic guidance inside the gym.",
    image: "/FAHED.png",
  },
];

const ladiesCoaches = [
  {
    name: "Sara",
    role: "Coach — Ladies",
    spec: "Fitness coaching and follow-up for women.",
    image: "/coaches/sara.jpg",
  },
  {
    name: "Seham",
    role: "Coach — Ladies",
    spec: "Fitness coaching and follow-up for women.",
    image: "/coaches/seham.jpg",
  },
  {
    name: "Ola",
    role: "Coach — Ladies",
    spec: "Fitness coaching and follow-up for women.",
    image: "/coaches/ola.jpg",
  },
];

function TeamCard({ member, index, type = "coach" }) {
  const isStaff = type === "staff";
  const accent = isStaff ? "#4EA8DE" : type === "ladies" ? "#D946AF" : C.red;

  return (
    <motion.div
      variants={variants.fadeUp}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group relative overflow-hidden min-h-[430px]"
      style={{
        background: "#070809",
        borderLeft: `1px solid ${index === 0 ? "rgba(255,255,255,0.08)" : "transparent"}`,
        borderRight: "1px solid rgba(255,255,255,0.08)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      {/* Image */}
      <div
        className="relative h-[300px] overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${accent}18, transparent)`,
        }}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover opacity-55 transition duration-700 group-hover:scale-110 group-hover:opacity-75"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.1), rgba(0,0,0,0.85))",
          }}
        />

        <div
          className="absolute top-4 right-4 px-4 py-2 font-black text-xs"
          style={{
            color: accent,
            border: `1px solid ${accent}66`,
            background: "rgba(0,0,0,0.35)",
          }}
        >
          {isStaff
            ? "STAFF"
            : member.years
            ? `${member.years} YEARS EXPERIENCE`
            : "COACH"}
        </div>

        <div
          className="absolute bottom-5 left-6 font-black tracking-[0.35em] uppercase"
          style={{
            color: accent,
            fontSize: 11,
          }}
        >
          {isStaff ? "STAFF" : member.name.split(" ")[0]}
        </div>
      </div>

      {/* Content */}
      <div className="relative p-7">
        <div
          className="absolute bottom-4 left-5 font-black select-none"
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontSize: 92,
            color: "rgba(255,255,255,0.035)",
            lineHeight: 1,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative z-10">
          <div
            className="mb-4"
            style={{ color: accent }}
          >
            {isStaff ? <Headphones size={22} /> : <Dumbbell size={22} />}
          </div>

          <h3
            className="font-black mb-2 leading-tight"
            style={{
              fontFamily: "'Changa', sans-serif",
              color: C.white,
              fontSize: 28,
            }}
          >
            {member.name}
          </h3>

          <div
            className="font-black uppercase mb-5"
            style={{
              color: accent,
              fontSize: 13,
              letterSpacing: 1.5,
            }}
          >
            {member.role}
          </div>

          <div
            className="mb-5"
            style={{
              width: 56,
              height: 3,
              background: accent,
            }}
          />

          <p
            style={{
              color: "#7E8892",
              lineHeight: 1.85,
              fontSize: 14,
              margin: 0,
            }}
          >
            {member.spec}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

function TeamGroup({ label, title, members, type }) {
  const [ref, inView] = useScrollReveal();

  return (
    <div>
      <div
        className="flex items-center justify-between border-b px-6 py-4"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <span
          className="font-black"
          style={{
            color: type === "ladies" ? "#D946AF" : type === "staff" ? "#4EA8DE" : C.red,
            fontSize: 13,
          }}
        >
          ◆ {label}
        </span>

        <span style={{ color: "#555F6B", fontSize: 12 }}>{title}</span>
      </div>

      <motion.div
        ref={ref}
        variants={variants.stagger}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className={`grid ${
          members.length === 1
            ? "grid-cols-1 lg:grid-cols-3"
            : "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        }`}
      >
        {members.map((member, i) => (
          <TeamCard
            key={member.name}
            member={member}
            index={i}
            type={type}
          />
        ))}
      </motion.div>
    </div>
  );
}

export default function Coaches() {
  return (
    <section
      id="coaches"
      className="relative overflow-hidden"
      style={{ background: "#060708", color: C.white, direction: "rtl" }}
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
            className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-10 items-end"
          >
            <div>
              <span
                className="inline-block mb-6 px-5 py-2 font-bold"
                style={{
                  color: C.red,
                  border: `1px solid ${C.red}55`,
                  fontSize: 13,
                }}
              >
                ◆ فريق التدريب
              </span>

              <h2
                className="font-black leading-[0.95]"
                style={{
                  direction: "rtl",
                  fontFamily: "'Changa', sans-serif",
                  fontSize: "clamp(58px, 8vw, 118px)",
                }}
              >
                تعرّف على
                <br />
                <span style={{ color: C.red }}>فريقنا</span>
              </h2>
            </div>

            <div>
              <p
                style={{
                  ddirection: "rtl",
                  color: "#7E8892",
                  lineHeight: 2,
                  fontSize: 16,
                  maxWidth: 480,
                }}
              >
                فريق متخصص من المدربين وموظفي الدعم، هدفه يساعدك تتمرن بثقة
                وتتطور كل يوم.
              </p>

              <div className="grid grid-cols-2 gap-8 mt-8">
                <div>
                  <div
                    className="font-black"
                    style={{
                      fontFamily: "'Changa', sans-serif",
                      fontSize: 44,
                    }}
                  >
                    +70
                  </div>
                  <div style={{ color: "#6E7782", fontSize: 13 }}>
                    سنوات خبرة
                  </div>
                </div>

                <div>
                  <div
                    className="font-black"
                    style={{
                      fontFamily: "'Changa', sans-serif",
                      fontSize: 44,
                    }}
                  >
                    7
                  </div>
                  <div style={{ color: "#6E7782", fontSize: 13 }}>
                    أعضاء الفريق
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div
        className="max-w-7xl mx-auto border-x"
        style={{ borderColor: "rgba(255,255,255,0.08)", direction: "ltr" }}
      >
        <TeamGroup
          label="المدربين الرئيسيين"
          title="Men Coaches"
          members={menCoaches}
          type="coach"
        />

        <TeamGroup
          label="الدعم والاستقبال"
          title="Staff Support"
          members={staff}
          type="staff"
        />

        <TeamGroup
          label="مدربات السيدات"
          title="Ladies Coaches"
          members={ladiesCoaches}
          type="ladies"
        />
      </div>
    </section>
  );
}