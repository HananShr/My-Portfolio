import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import type { ContentType } from "../data/content";

interface Props {
  lang: "fr" | "en";
  setLang: (l: "fr" | "en") => void;
  content: ContentType;
}

const sections = [
  "home",
  "about",
  "skills",
  "experience",
  "projects",
  "education",
  "certifications",
  "languages",
  "contact",
] as const;

export default function Navbar({ lang, setLang, content }: Props) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);

      // find active section
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActive(sections[i]);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const navMap = content.nav as Record<string, string>;

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-950/80 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-purple-500/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => scrollTo("home")}
            className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"
          ></button>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-1">
            {sections.map((s) => (
              <button
                key={s}
                onClick={() => scrollTo(s)}
                className={`px-3 py-2 text-sm rounded-lg transition-all duration-200 ${
                  active === s
                    ? "text-cyan-400 bg-white/5"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }`}
              >
                {navMap[s]}
              </button>
            ))}
          </div>

          {/* Lang switch + mobile menu */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLang(lang === "fr" ? "en" : "fr")}
              className="relative px-3 py-1.5 text-xs font-bold rounded-full border border-purple-500/50 text-purple-300 hover:bg-purple-500/20 transition-all"
            >
              {lang === "fr" ? "EN" : "FR"}
            </button>

            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden text-gray-300 hover:text-white"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden overflow-hidden bg-gray-950/95 backdrop-blur-xl border-t border-white/5"
          >
            <div className="px-4 py-4 space-y-1">
              {sections.map((s) => (
                <button
                  key={s}
                  onClick={() => scrollTo(s)}
                  className={`block w-full text-left px-4 py-2.5 rounded-lg text-sm transition-all ${
                    active === s
                      ? "text-cyan-400 bg-white/5"
                      : "text-gray-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {navMap[s]}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
