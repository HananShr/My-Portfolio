import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { useState } from "react";
import SectionTitle from "./SectionTitle";
import type { ContentType } from "../data/content";

function GitHubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

interface Props {
  content: ContentType;
}

import { asset } from "../utils/asset";

function ProjectImage({ src, title }: { src: string; title: string }) {
  const [error, setError] = useState(false);

  if (!src || error) {
    return (
      <div className="w-full h-48 bg-gradient-to-br from-purple-900/40 to-blue-900/40 flex items-center justify-center">
        <Sparkles size={40} className="text-purple-400/50" />
      </div>
    );
  }

  return (
    <img
      src={asset(src)} // ← asset() adds BASE_URL correctly
      alt={title}
      className="w-full h-48 object-cover"
      onError={() => setError(true)}
    />
  );
}
export default function Projects({ content }: Props) {
  const c = content.projects;

  return (
    <section id="projects" className="relative py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={c.sectionTitle} />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {c.items.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.5 }}
              className="group rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md overflow-hidden hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10 flex flex-col"
            >
              <ProjectImage src={project.image} title={project.title} />

              <div className="p-6 flex flex-col flex-1">
                <p className="text-xs text-purple-400 font-medium mb-1 uppercase tracking-wider">
                  {project.type}
                </p>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>

                {project.features.length > 0 && (
                  <ul className="space-y-1 mb-4">
                    {project.features.map((f, fi) => (
                      <li
                        key={fi}
                        className="text-xs text-gray-400 flex items-start gap-2"
                      >
                        <span className="mt-1 h-1 w-1 rounded-full bg-cyan-400/60 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}

                {project.techStack.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-xs rounded bg-purple-500/10 text-purple-300 border border-purple-500/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}

                <div className="flex gap-3 mt-auto">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-purple-300 transition-colors"
                    >
                      <GitHubIcon size={16} />
                      GitHub
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-cyan-300 transition-colors"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
