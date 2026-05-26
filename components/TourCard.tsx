"use client";

import { motion } from "framer-motion";

interface TourCardProps {
  title: string;
  description: string;
  image: string;
}

export default function TourCard({ title, description, image }: TourCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      whileHover={{ y: -6 }}
      className="group overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-md shadow-[0_18px_50px_rgba(4,23,64,0.35)]"
    >
      <div className="relative h-52 overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(160deg, rgba(6,26,66,0.2), rgba(8,16,30,0.72)), url(${image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
        <p className="text-sm text-blue-100/80 mb-5">{description}</p>

        <button className="inline-flex items-center justify-center rounded-xl border border-cyan-300/35 bg-cyan-300/10 px-4 py-2.5 text-sm font-semibold text-cyan-100 transition-colors hover:bg-cyan-300/20">
          Saiba mais
        </button>
      </div>
    </motion.article>
  );
}
