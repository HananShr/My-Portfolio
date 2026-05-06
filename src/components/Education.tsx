import { motion } from "framer-motion";
import { GraduationCap, CalendarDays } from "lucide-react";
import SectionTitle from "./SectionTitle";
import type { ContentType } from "../data/content";

interface Props {
  content: ContentType;
}

export default function Education({ content }: Props) {
  const c = content.educationSection;

  return (
    <section id="education" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={c.sectionTitle} />

        <div className="grid sm:grid-cols-2 gap-6">
          {c.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <div className="p-3 rounded-xl bg-gradient-to-br from-purple-600/20 to-blue-600/20 border border-purple-500/20 w-fit mb-4">
                <GraduationCap size={28} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">{item.degree}</h3>
              <p className="text-sm text-gray-400 mb-3">{item.school}</p>
              <p className="inline-flex items-center gap-1.5 text-xs text-purple-300 bg-purple-500/10 px-3 py-1 rounded-full">
                <CalendarDays size={13} />
                {item.date}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
