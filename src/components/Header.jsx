import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { C } from "../tokens";

const NAV_LINKS = ["Home", "About", "Coaches", "Equipment", "Contact"];

function scrollTo(id) {
  document
    .getElementById(id.toLowerCase())
    ?.scrollIntoView({ behavior: "smooth" });
}

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleNav = (link) => {
    setMenuOpen(false);
    setTimeout(() => scrollTo(link), 120);
  };

  const active = scrolled || menuOpen;

  return (
    <motion.header
      initial={{ y: -90 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.65, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-[1000]"
      style={{
        background: active ? "rgba(6,7,8,0.92)" : "rgba(6,7,8,0.45)",
        backdropFilter: "blur(18px)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        direction: "ltr",
      }}
    >
      <div
        className="max-w-7xl mx-auto border-x"
        style={{ borderColor: "rgba(255,255,255,0.08)" }}
      >
        <div className="h-[76px] flex items-center justify-between">
          {/* Logo */}
          <button
            type="button"
            onClick={() => handleNav("Home")}
            className="h-full px-6 flex items-center gap-4 bg-transparent border-0 cursor-pointer border-r"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            <img
              src="/gym-logo.png"
              alt="Sigma Gym"
              style={{ height: 44, objectFit: "contain" }}
            />

            <div className="hidden sm:block text-left">
              <div
                className="font-black leading-none"
                style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  color: C.white,
                  fontSize: 18,
                  letterSpacing: 1.5,
                }}
              >
                SIGMA GYM
              </div>
              <div
                className="font-black uppercase"
                style={{
                  color: C.red,
                  fontSize: 9,
                  letterSpacing: 3,
                  marginTop: 5,
                }}
              >
                Fitness Club
              </div>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden md:flex h-full items-center">
            {NAV_LINKS.map((link) => (
              <button
                type="button"
                key={link}
                onClick={() => handleNav(link)}
                className="relative h-full px-6 bg-transparent border-0 text-white font-black uppercase tracking-[0.18em] text-[11px] cursor-pointer group border-l"
                style={{ borderColor: "rgba(255,255,255,0.08)" }}
              >
                <span className="relative z-10">{link}</span>

                <span
                  className="absolute inset-x-0 bottom-0 h-0 group-hover:h-full transition-all duration-300"
                  style={{ background: `${C.red}18` }}
                />

                <span
                  className="absolute left-0 bottom-0 h-[3px] w-0 group-hover:w-full transition-all duration-300"
                  style={{ background: C.red }}
                />
              </button>
            ))}

            <button
              type="button"
              onClick={() => handleNav("Contact")}
              className="h-full px-7 flex items-center gap-2 text-white font-black uppercase tracking-[0.18em] text-[11px] cursor-pointer transition-all duration-300 hover:opacity-90 border-0"
              style={{ background: C.red }}
            >
              Join Now <ArrowUpRight size={15} />
            </button>
          </nav>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            className="md:hidden h-full px-6 text-white bg-transparent cursor-pointer border-0 border-l"
            style={{ borderColor: "rgba(255,255,255,0.08)" }}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.25 }}
              className="md:hidden overflow-hidden border-t"
              style={{ borderColor: "rgba(255,255,255,0.08)" }}
            >
              <div>
                {NAV_LINKS.map((link) => (
                  <button
                    type="button"
                    key={link}
                    onClick={() => handleNav(link)}
                    className="w-full flex items-center justify-between px-6 py-5 bg-transparent border-0 border-b text-white font-black uppercase tracking-[0.2em] text-[12px] cursor-pointer"
                    style={{ borderColor: "rgba(255,255,255,0.08)" }}
                  >
                    {link}
                    <ArrowUpRight size={15} color={C.red} />
                  </button>
                ))}

                <button
                  type="button"
                  onClick={() => handleNav("Contact")}
                  className="w-full px-6 py-5 text-white font-black uppercase tracking-[0.2em] text-[12px] cursor-pointer border-0"
                  style={{ background: C.red }}
                >
                  Join Now
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}