import { motion } from "framer-motion";
import { Globe2 } from "lucide-react";
import SectionTitle from "./SectionTitle";
import type { ContentType } from "../data/content";

interface Props {
  content: ContentType;
}

const flags = [
  import.meta.env.BASE_URL + "dz-flag.png",
  import.meta.env.BASE_URL + "fr-flag.png",
  import.meta.env.BASE_URL + "eng-flag.png",
];
export default function Languages({ content }: Props) {
  const c = content.languagesSection;

  return (
    <section id="languages" className="relative py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle title={c.sectionTitle} />

        <div className="flex flex-wrap justify-center gap-6">
          {c.items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="group w-52 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-md p-6 text-center hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
            >
              <img
                //src={asset("hanane.jpg")}
                src={flags[i]}
                alt="flag"
                className="w-10 h-10 object-contain mx-auto mb-3"
              />{" "}
              <div className="p-2 rounded-xl bg-gradient-to-br from-purple-600/10 to-blue-600/10 w-fit mx-auto mb-3">
                <Globe2 size={20} className="text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-1">
                {item.lang}
              </h3>
              <p className="text-sm text-gray-400">{item.level}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
