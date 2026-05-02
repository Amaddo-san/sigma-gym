import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, ArrowUpRight } from "lucide-react";
import { useScrollReveal } from "./shared";
import { C, variants } from "../tokens";

const contactItems = [
  { icon: <Phone size={18} />, label: "Phone", val: "+962796067469" },
  { icon: <Mail size={18} />, label: "Email", val: "sigmagym08@gmail.com" },
  { icon: <MapPin size={18} />, label: "Location", val: "Amman, Jordan" },
  {
    icon: <Clock size={18} />,
    label: "Working Hours",
    val: "Men: 7 days · Ladies: Sat–Thu",
  },
];

export default function Footer() {
  const [ref, inView] = useScrollReveal();

  return (
    <footer
      id="contact"
      className="relative overflow-hidden"
      style={{ background: "#060708", color: C.white }}
    >
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "58px 58px",
        }}
      />

      <div
        className="relative max-w-7xl mx-auto border-x"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        {/* CTA */}
        <div
className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 px-5 sm:px-6 py-12 lg:py-20 border-b"          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <span
              className="inline-block mb-6 px-5 py-2 font-bold"
              style={{
                color: C.red,
                border: `1px solid ${C.red}55`,
                fontSize: 13,
              }}
            >
              ◆ Contact
            </span>

            <h2
              className="font-black leading-[0.95]"
              style={{
                fontFamily: "'Barlow Condensed', sans-serif",
                fontSize: "clamp(46px, 14vw, 118px)",
              }}
            >
              READY TO
              <br />
              <span style={{ color: C.red }}>START?</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            viewport={{ once: true }}
            className="flex flex-col justify-end"
          >
            <p style={{ color: "#7E8892", lineHeight: 2, fontSize: 16 }}>
              Visit Sigma Gym, contact us, or find us on social media. Your next training phase starts here.
            </p>

           
          </motion.div>
        </div>

        {/* Info Grid */}
        <motion.div
          ref={ref}
          variants={variants.stagger}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-2 lg:grid-cols-4"
        >
          {contactItems.map(({ icon, label, val }) => (
            <motion.div
              key={label}
              variants={variants.fadeUp}
              className="p-5 lg:p-7 border-b lg:border-b-0 border-l last:border-l-0"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div
                className="w-10 h-10 lg:w-12 lg:h-12 mb-4 lg:mb-6 flex items-center justify-center"
                style={{
                  color: C.red,
                  border: `1px solid ${C.red}55`,
                  background: `${C.red}10`,
                }}
              >
                {icon}
              </div>

              <div
                className="font-black uppercase mb-2"
                style={{ color: C.white, fontSize: 14, letterSpacing: 1.5 }}
              >
                {label}
              </div>

              <div style={{ color: "#7E8892", fontSize: 14, lineHeight: 1.7 }}>
                {val}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Map + Social */}
        <div
          className="grid grid-cols-1 lg:grid-cols-[1.3fr_1fr] border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div
            className="relative min-h-[230px] lg:min-h-[280px] cursor-pointer overflow-hidden border-l"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              background: "linear-gradient(135deg, #0B111A, #111827)",
            }}
            onClick={() =>
              window.open("https://maps.app.goo.gl/y9nsrDpAy5XJTefd8", "_blank")
            }
          >
            <div
              className="absolute inset-0 opacity-[0.08]"
              style={{
                backgroundImage:
                  "linear-gradient(90deg, #fff 1px, transparent 1px), linear-gradient(#fff 1px, transparent 1px)",
                backgroundSize: "42px 42px",
              }}
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
              <div
                className="w-16 h-16 mb-5 flex items-center justify-center rounded-full"
                style={{ background: C.red }}
              >
                <MapPin size={28} color="#fff" />
              </div>

              <h3
                className="font-black mb-2"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: 34,
                }}
              >
                SIGMA GYM FITNESS
              </h3>

              <p style={{ color: "#7E8892", marginBottom: 18 }}>
                Amman, Jordan
              </p>

              <div
                className="inline-flex items-center gap-2 font-bold"
                style={{ color: C.red, fontSize: 13 }}
              >
                Open in Google Maps <ArrowUpRight size={16} />
              </div>
            </div>
          </div>

        <div className="p-8 lg:p-10 flex flex-col justify-between">
  <div>
    <img
      src="/gym-logo.png"
      alt="Sigma Gym"
      style={{
        height: "50px",
        objectFit: "contain",
      }}
    />

    <p
      style={{
        color: "#7E8892",
        lineHeight: 1.9,
        marginTop: 16,
      }}
    >
      Built for serious training, stronger habits, and real progress.
    </p>
  </div>
              {[
  { icon: <Instagram size={18} />, label: "Instagram", link: "https://www.instagram.com/sigmagym.f?igsh=NzFnNDBjNWNxbmVj&utm_source=qr" },
  { icon: <Facebook size={18} />, label: "Facebook", link: "https://www.facebook.com/share/1GvwUQYGkU/?mibextid=wwXIfr" },
].map(({ icon, label, link }) => (
  <a
    key={label}
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-5 py-3 font-bold transition-all duration-300 hover:-translate-y-1"
    style={{
      color: C.white,
      background: "rgba(255,255,255,0.05)",
      border: "1px solid rgba(255,255,255,0.1)",
      fontSize: 13,
    }}
  >
    {icon} {label}
  </a>
))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="px-6 py-6 flex flex-wrap items-center justify-between gap-4 border-t"
          style={{ borderColor: "rgba(255,255,255,0.08)" }}
        >
          <div style={{ color: "#55606B", fontSize: 12 }}>
            © {new Date().getFullYear()} Sigma Gym Fitness. All rights reserved.
          </div>

          <div className="flex gap-6">
            {["Home", "About", "Coaches", "Equipment"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="hover:text-white transition-colors"
                style={{ color: "#55606B", fontSize: 12 }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
     
    </footer>
  );
}