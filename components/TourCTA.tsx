"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import ponteImage from "@/assets/passeios/ponte.jpg";
import { whatsappLink } from "@/lib/site";

export default function TourCTA() {
  return (
    <section className="relative py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/15"
        >
          <div
            className="absolute inset-0 bg-cover bg-center blur-[1px] scale-105"
            style={{
              backgroundImage:
                `linear-gradient(130deg, rgba(4,15,35,0.55), rgba(4,17,39,0.75)), url(${ponteImage.src})`,
            }}
          />
          <div className="absolute inset-0 bg-[#041533]/60" />

          <div className="relative px-6 py-14 md:px-12 md:py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-3">
              Pronto para viver novas experiências?
            </h2>
            <p className="text-blue-100/80 mb-8">Solicite agora seu orçamento</p>

            <a
              href={whatsappLink("Olá! Quero solicitar orçamento para os passeios.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-2xl bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-green-500/30 transition-transform hover:scale-[1.03]"
            >
              <MessageCircle className="h-5 w-5" />
              Falar no WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
