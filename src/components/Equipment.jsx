import { motion } from "framer-motion";
import { Dumbbell, Zap, HeartPulse } from "lucide-react";
import { useScrollReveal } from "./shared";
import { C, variants } from "../tokens";

const zones = [
  {
    number: "01",
    label: "STRENGTH ZONE",
    title: "STRENGTH & MACHINES",
    titleAr: "أجهزة القوة والتمارين",
    color: "#EF233C",
    icon: <Dumbbell size={34} />,
    power: "100",
    desc: "Olympic platforms, cable stations, loaded machines — every movement pattern covered.",
    items: [
      ["OLYMPIC SQUAT RACK", "10 Stations"],
      ["CABLE SYSTEMS", "Multi-station"],
      ["HAMMER STRENGTH", "Full range"],
      ["SMITH MACHINE", "Multi-use"],
      ["LEG PRESS / HACK SQUAT", "Heavy load"],
    ],
  },
  {
    number: "02",
    label: "FREE WEIGHTS",
    title: "FREE WEIGHTS",
    titleAr: "منطقة الأوزان الحرة",
    color: "#4EA8DE",
    icon: <Zap size={34} />,
    power: "88",
    desc: "Dumbbells, barbells, benches, kettlebells — unrestricted movement, unlimited potential.",
    items: [
      ["DUMBBELLS", "5 - 100 kg"],
      ["OLYMPIC BARBELLS", "Standard & EZ"],
      ["ADJUSTABLE BENCHES", "Flat & incline"],
      ["KETTLEBELLS", "Full set"],
      ["CHALK ZONE", "Heavy lifts"],
    ],
  },
  {
    number: "03",
    label: "CARDIO & RECOVERY",
    title: "CARDIO & RECOVERY",
    titleAr: "الكارديو والاستشفاء",
    color: "#52B788",
    icon: <HeartPulse size={34} />,
    power: "75",
    desc: "Modern cardio machines, changing rooms, sauna — finish strong, recover right.",
    items: [
      ["TREADMILLS", "High-speed pro"],
      ["ELLIPTICAL MACHINES", "Full cardio"],
      ["ROWING MACHINES", "Full body cardio"],
      ["SPORT BIKES", "Pro grade"],
      ["CHANGING ROOMS & SAUNA", "Full facilities"],
    ],
  },
];

function ZoneRow({ zone, index }) {
  const [ref, inView] = useScrollReveal();

  return (
    <motion.div
      ref={ref}
      variants={variants.stagger}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className=" group grid grid-cols-1 lg:grid-cols-[1.05fr_2fr] border-t"
      style={{
        borderColor: "rgba(255,255,255,0.08)",
        background: index % 2 === 0 ? "#0B0B0C" : "#08090A",
      }}
    >
      {/* Left Visual */}
      <motion.div
        variants={variants.slideLeft}
        className="relative min-h-[300px] overflow-hidden p-8 lg:p-10 flex flex-col justify-between"
        style={{
          background: `linear-gradient(135deg, ${zone.color}12, transparent 55%)`,
        }}
      >
       <motion.div

  className="absolute top-8 left-8 font-black select-none transition-all duration-500 group-hover:scale-110 group-hover:-rotate-3"
  style={{
    fontFamily: "'Barlow Condensed', sans-serif",
    fontSize: "clamp(70px, 10vw, 130px)",
    color: "rgba(255,255,255,0.04)",
    lineHeight: 0.8,
  }}
  whileHover={{ scale: 1.1, rotate: -3 }}
>
  {zone.number}
</motion.div>

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(135deg, #fff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />

        <div className="relative z-10 flex items-center justify-center flex-1">
          <div
            className="w-28 h-28 rounded-full flex items-center justify-center"
            style={{
              border: `1px solid ${zone.color}55`,
              color: zone.color,
              background: `${zone.color}08`,
            }}
          >
            {zone.icon}
          </div>
        </div>

        <div
          className="relative z-10 font-black tracking-[0.25em]"
          style={{
            color: zone.color,
            fontSize: 13,
          }}
        >
          {zone.label}
        </div>
      </motion.div>

      {/* Right Content */}
      <motion.div
        variants={variants.slideRight}
        className="relative p-8 lg:p-12 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-8"
      >
        <div>
          <h3
            className="font-black leading-none mb-3"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontSize: "clamp(42px, 5vw, 72px)",
              color: zone.color,
              letterSpacing: 1,
            }}
          >
            {zone.title}
          </h3>

          <h4
            className="font-black mb-5"
            style={{
              fontFamily: "'Changa', sans-serif",
              color: C.white,
              fontSize: 28,
            }}
          >
            {zone.titleAr}
          </h4>

          <p
            style={{
              color: "#77838F",
              lineHeight: 1.8,
              maxWidth: 520,
              fontSize: 14,
              marginBottom: 26,
            }}
          >
            {zone.desc}
          </p>

          <div className="space-y-0 max-w-xl">
            {zone.items.map(([name, detail]) => (
              <div
                key={name}
                className="grid grid-cols-[1fr_auto] gap-5 py-3 border-b"
                style={{
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div
                  className="font-black uppercase leading-tight"
                  style={{
                    color: C.white,
                    fontSize: 18,
                    borderLeft: `3px solid ${zone.color}`,
                    paddingLeft: 8,
                  }}
                >
                  {name}
                </div>

                <div
                  className="text-right"
                  style={{
                    color: "#5E6770",
                    fontSize: 12,
                    whiteSpace: "nowrap",
                  }}
                >
                  {detail}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Power Number */}
        <div className="hidden md:block text-right">
          <div
            className="font-black uppercase tracking-[0.25em] mb-1"
            style={{
              color: "rgba(255,255,255,0.18)",
              fontSize: 11,
            }}
          >
            Zone Power
          </div>

          <div
            className="font-black leading-none"
            style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              color: zone.color,
              fontSize: 78,
            }}
          >
            {zone.power}
          </div>

          <div
            className="font-black uppercase tracking-[0.25em]"
            style={{
              color: "rgba(255,255,255,0.18)",
              fontSize: 11,
            }}
          >
            Max
          </div>
        </div>

        <div
          className="absolute right-0 top-1/2 -translate-y-1/2 hidden lg:block"
          style={{
            width: 4,
            height: 90,
            background: zone.color,
          }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Equipment() {
  return (
    <section
      id="equipment"
      className="relative overflow-hidden"
      style={{
        background: "#060708",
        color: C.white,
      }}
    >
      {/* Header */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7, ease: "easeOut" }}
  viewport={{ once: true }}
  className="max-w-7xl mx-auto px-6 py-20 border-b"

           style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-8 items-end">
          <div>
            <div
              className="font-black uppercase tracking-[0.25em] mb-5"
              style={{
                color: C.red,
                fontSize: 13,
              }}
            >
              ◆ Equipment & Zones
            </div>

            <h2
              className="font-black uppercase leading-[0.9]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                color: C.white,
                fontSize: "clamp(56px, 8vw, 118px)",
                letterSpacing: 1,
              }}
            >
              EVERY TOOL
              <br />
              YOU <span style={{ color: C.red }}>NEED</span>
            </h2>
          </div>

          <motion.p
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.2 }}
  viewport={{ once: true }}
>
            Three dedicated zones. 100+ professional machines. Zero excuses.
          </motion.p>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto border-x" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
        {zones.map((zone, index) => (
          <ZoneRow key={zone.number} zone={zone} index={index} />
        ))}
      </div>
    </section>
  );
}