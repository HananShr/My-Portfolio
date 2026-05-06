import { motion } from "framer-motion";
import {
  Code2,
  Database,
  BrainCircuit,
  Wrench,
  Cpu,
} from "lucide-react";
import SectionTitle from "./SectionTitle";
import type { ContentType } from "../data/content";

const catIcons = [Code2, Database, BrainCircuit, Wrench, Cpu];

interface Props {
  content: ContentType;
}

export default function Skills({ content }: Props) {
  const c = content.skills;

  return (
    <section id="skills" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={c.sectionTitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.categories.map((cat, ci) => {
            const Icon = catIcons[ci % catIcons.length];
            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1, duration: 0.5 }}
                className="group relative rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20">
                    <Icon size={22} className="text-purple-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{cat.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {cat.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 text-sm rounded-lg bg-white/5 text-gray-300 border border-white/5 hover:border-purple-500/40 hover:text-purple-300 transition-all duration-200"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
