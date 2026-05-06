import { motion } from "framer-motion";

interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.6 }}
      className="text-center mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white inline-block">
        {title}
      </h2>
      <div className="mt-4 mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-400" />
    </motion.div>
  );
}
