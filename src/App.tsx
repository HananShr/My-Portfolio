import { useState } from "react";
import { content } from "./data/content";
import ParticleBackground from "./components/ParticleBackground";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Certifications from "./components/Certifications";
import Languages from "./components/Languages";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function App() {
  const [lang, setLang] = useState<"fr" | "en">("fr");
  const c = content[lang];

  return (
    <div className="min-h-screen bg-gray-950 text-white selection:bg-purple-500/30 selection:text-white">
      {/* Animated gradient background */}
      <div className="fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] animate-[spin_60s_linear_infinite] opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-purple-700/30 blur-[150px]" />
          <div className="absolute top-2/3 left-2/3 w-80 h-80 rounded-full bg-blue-600/20 blur-[130px]" />
          <div className="absolute top-1/3 left-3/4 w-72 h-72 rounded-full bg-cyan-500/15 blur-[120px]" />
        </div>
      </div>

      <ParticleBackground />

      <div className="relative z-10">
        <Navbar lang={lang} setLang={setLang} content={c} />
        <Hero content={c} />
        <About content={c} />
        <Skills content={c} />
        <Experience content={c} />
        <Projects content={c} />
        <Education content={c} />
        <Certifications content={c} />
        <Languages content={c} />
        <Contact content={c} />
        <Footer content={c} />
      </div>

      <ScrollToTop />
    </div>
  );
}
