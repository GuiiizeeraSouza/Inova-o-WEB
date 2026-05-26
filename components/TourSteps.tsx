"use client";

import { motion } from "framer-motion";
import { MapPinned, FileText, Sparkles } from "lucide-react";

const steps = [
  {
    title: "Escolha o passeio",
    description: "Selecione a experiência ideal para seu estilo de viagem.",
    icon: MapPinned,
  },
  {
    title: "Solicite orçamento",
    description: "Receba valores, opções e detalhes com transparência.",
    icon: FileText,
  },
  {
    title: "Aproveite a experiência",
    description: "Curta cada momento com suporte antes, durante e depois.",
    icon: Sparkles,
  },
];

export default function TourSteps() {
  return (
    <section id="como-funciona" className="relative py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="text-3xl sm:text-4xl font-bold text-white text-center"
        >
          Reserve em 3 passos
        </motion.h2>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-md"
            >
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-300/20 text-cyan-100">
                <step.icon className="h-5 w-5" />
              </div>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-100/60 mb-2">Passo {index + 1}</p>
              <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-blue-100/80 leading-relaxed">{step.description}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
