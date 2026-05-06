import { motion } from "framer-motion";
import { Briefcase, MapPin, CalendarDays, FolderKanban } from "lucide-react";
import SectionTitle from "./SectionTitle";
import type { ContentType } from "../data/content";

interface Props {
  content: ContentType;
}

export default function Experience({ content }: Props) {
  const c = content.experience;

  return (
    <section id="experience" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={c.sectionTitle} />

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/30 to-transparent" />

          <div className="space-y-10">
            {c.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-16 md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 border-4 border-gray-950 z-10" />

                <div className="rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 hover:border-purple-500/20 hover:bg-purple-500/5 transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm text-gray-400 mb-3">
                    <span className="inline-flex items-center gap-1.5">
                      <Briefcase size={14} className="text-purple-400" />
                      {item.company}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={14} className="text-purple-400" />
                      {item.location}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <CalendarDays size={14} className="text-purple-400" />
                      {item.date}
                    </span>
                  </div>

                  {item.project && (
                    <div className="flex items-start gap-2 mb-3 text-sm text-cyan-300/80 bg-cyan-500/5 rounded-lg p-3 border border-cyan-500/10">
                      <FolderKanban size={16} className="mt-0.5 flex-shrink-0" />
                      <span>{item.project}</span>
                    </div>
                  )}

                  <ul className="space-y-1.5">
                    {item.description.map((d, di) => (
                      <li key={di} className="text-sm text-gray-300 flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-500/60 flex-shrink-0" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
