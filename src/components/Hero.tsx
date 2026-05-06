import { motion } from "framer-motion";
import { ArrowDown, Download, Send } from "lucide-react";
import type { ContentType } from "../data/content";
import { useState } from "react";
import { asset } from "../utils/asset";

const floatingTags = [
  "React",
  "Python",
  "AI",
  "Flask",
  "Laravel",
  "SQL",
  "Data Analysis",
];

const tagPositions = [
  "top-[8%] left-[5%]",
  "top-[15%] right-[8%]",
  "top-[55%] left-[3%]",
  "top-[70%] right-[5%]",
  "bottom-[15%] left-[10%]",
  "bottom-[8%] right-[12%]",
  "top-[38%] right-[2%]",
];

interface Props {
  content: ContentType;
}

export default function Hero({ content }: Props) {
  const [imgError, setImgError] = useState(false);
  const c = content.hero;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Gradient orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-purple-600/20 blur-[120px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-cyan-500/15 blur-[120px]" />

      {/* Floating tags — hidden on small screens */}
      <div className="hidden xl:block">
        {floatingTags.map((tag, i) => (
          <motion.span
            key={tag}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.15, duration: 0.5 }}
            className={`absolute ${tagPositions[i]} px-3 py-1 text-xs rounded-full border border-purple-500/30 text-purple-300/70 bg-purple-500/10 backdrop-blur-sm select-none`}
            style={{
              animation: `float${(i % 3) + 1} ${4 + i * 0.5}s ease-in-out infinite`,
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-center lg:text-left"
        >
          <p className="text-purple-400 text-lg mb-2 font-medium">
            {c.greeting}
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-3">
            {c.name}
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-6">
            {c.title}
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto lg:mx-0 mb-8 leading-relaxed">
            {c.description}
          </p>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105"
            >
              <ArrowDown
                size={18}
                className="group-hover:translate-y-0.5 transition-transform"
              />
              {c.btnProjects}
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-purple-500/50 text-purple-300 hover:bg-purple-500/10 font-semibold transition-all duration-300 hover:scale-105"
            >
              <Send size={18} />
              {c.btnContact}
            </a>
            <a
              href="/cv-hanane-saharaoui.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/10 font-semibold transition-all duration-300 hover:scale-105"
            >
              <Download size={18} />
              {c.btnCV}
            </a>
          </div>
        </motion.div>

        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="relative flex-shrink-0"
        >
          {/* Glow ring */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 via-blue-500 to-cyan-400 blur-2xl opacity-40 animate-pulse" />
          <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full border-2 border-purple-500/30 overflow-hidden bg-gray-900">
            {imgError ? (
              <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-600/40 to-blue-600/40">
                <span className="text-5xl font-bold text-white/80">HS</span>
              </div>
            ) : (
              <img
                src={asset("hanane.jpg")}
                alt="Hanane Saharaoui"
                className="w-full h-full object-cover"
                onError={() => setImgError(true)}
              />
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
