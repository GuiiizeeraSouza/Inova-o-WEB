"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import { whatsappLink } from "@/lib/site";

const WHATSAPP_URL = whatsappLink("Olá! Gostaria de solicitar um orçamento para aluguel de veículo.");

export default function CTA() {
  return (
    <section className="py-28 relative overflow-hidden bg-gradient-to-br from-[#0A2540] via-[#0d3263] to-[#1d4ed8] mt-28">
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-48 -right-48 w-[600px] h-[600px] rounded-full bg-white/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-blue-400/10 blur-3xl" />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
            backgroundSize: "36px 36px",
          }}
        />
      </div>

      {/* Decorative rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full border border-white/5"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-white/5"
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white/80 text-sm font-medium mb-7">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            Pronto para começar?
          </div>

          {/* Heading */}
          <h2 className="text-5xl sm:text-6xl font-extrabold text-white leading-tight tracking-tight mb-5">
            Pronto para pegar{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-cyan-300">
              a estrada?
            </span>
          </h2>

          {/* Subtext */}
          <p className="text-xl text-white/60 mb-10 max-w-xl mx-auto leading-relaxed">
            Solicite um orçamento agora mesmo e garanta seu veículo com
            atendimento rápido e personalizado.
          </p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-blue-700 font-extrabold text-lg rounded-2xl shadow-2xl hover:bg-blue-50 transition-all duration-300 hover:scale-[1.04] active:scale-100 hover:shadow-white/20"
            >
              <MessageCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
              Falar no WhatsApp
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Trust indicators */}
          <p className="mt-8 text-white/35 text-sm">
            Resposta em até 5 minutos · Sem compromisso · 100% gratuito
          </p>
        </motion.div>
      </div>
    </section>
  );
}
