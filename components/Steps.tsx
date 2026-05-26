"use client";

import { motion, type Variants } from "framer-motion";
import { LayoutGrid, MessageSquareText, KeyRound } from "lucide-react";

const steps = [
  {
    Icon: LayoutGrid,
    number: "01",
    title: "Escolha o veículo",
    description:
      "Navegue pela nossa frota e selecione o carro ideal para sua necessidade e orçamento.",
  },
  {
    Icon: MessageSquareText,
    number: "02",
    title: "Faça sua reserva",
    description:
      "Entre em contato via WhatsApp, confirme os detalhes e garanta sua reserva em minutos.",
  },
  {
    Icon: KeyRound,
    number: "03",
    title: "Retire seu veículo",
    description:
      "Pegue seu carro revisado, higienizado e pronto para você partir com total segurança.",
  },
];

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.18 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
};

export default function Steps() {
  return (
    <section id="como-funciona" className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-4">
            Como funciona
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A2540] leading-tight">
            Alugue em apenas{" "}
            <span className="text-blue-600">3 passos</span>
          </h2>
          <p className="mt-4 text-gray-500 max-w-lg mx-auto text-lg">
            Simples, rápido e sem burocracia. Do interesse à entrega das chaves.
          </p>
        </motion.div>

        {/* Steps grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid md:grid-cols-3 gap-6 lg:gap-8 relative"
        >
          {/* Connector line (desktop only) */}
          <div className="hidden md:block absolute top-[4.5rem] left-[calc(16.67%+2rem)] right-[calc(16.67%+2rem)] h-px bg-gradient-to-r from-blue-200 via-blue-400 to-blue-200" />

          {steps.map(({ Icon, number, title, description }, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="group relative flex flex-col items-center text-center px-8 py-10 rounded-3xl bg-[#F5F7FA] hover:bg-gradient-to-b hover:from-blue-50 hover:to-white border border-transparent hover:border-blue-100 hover:shadow-lg transition-all duration-300"
            >
              {/* Icon circle */}
              <div className="relative mb-7 z-10">
                <div className="w-[4.5rem] h-[4.5rem] rounded-2xl bg-gradient-to-br from-blue-500 to-blue-700 flex items-center justify-center shadow-xl shadow-blue-600/25 group-hover:scale-110 group-hover:shadow-blue-600/40 transition-all duration-300">
                  <Icon className="w-7 h-7 text-white" strokeWidth={1.75} />
                </div>
                {/* Step number badge */}
                <span className="absolute -top-2.5 -right-2.5 w-7 h-7 rounded-full bg-white border-2 border-blue-200 text-blue-600 text-[11px] font-extrabold flex items-center justify-center shadow-sm">
                  {number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-[#0A2540] mb-3">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
