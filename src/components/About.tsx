import { motion } from "framer-motion";
import {
  Globe,
  Brain,
  BarChart3,
  Users,
  Puzzle,
  BookOpen,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import type { ContentType } from "../data/content";

const icons = [Globe, Brain, BarChart3, Users, Puzzle, BookOpen];

interface Props {
  content: ContentType;
}

export default function About({ content }: Props) {
  const c = content.about;

  return (
    <section id="about" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={c.sectionTitle} />

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto text-center mb-14"
        >
          {c.text}
        </motion.p>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {c.highlights.map((h, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={h}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="group relative p-4 rounded-xl border border-white/5 bg-white/[0.03] backdrop-blur-md hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 text-center"
              >
                <Icon className="mx-auto mb-2 text-purple-400 group-hover:text-cyan-400 transition-colors" size={28} />
                <p className="text-sm text-gray-300 font-medium">{h}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
