"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Image from "next/image";
import equipeImage from "@/assets/passeios/Equipe.jpg";

const benefits = [
  "Atendimento personalizado e humanizado",
  "Veículos sempre revisados e higienizados",
  "Planos flexíveis para curto e longo prazo",
  "Suporte rápido quando você precisar",
  "Processo simples, sem burocracia",
  "Segurança garantida para sua viagem",
];

export default function Benefits() {
  return (
    <section id="vantagens" className="py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* ─── LEFT: image ─── */}
          <motion.div
            initial={{ opacity: 0, x: -56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            {/* Decorative ring */}
            <div className="absolute -top-8 -left-8 w-28 h-28 rounded-full border-4 border-blue-100/70" />
            <div className="absolute -bottom-8 -right-8 w-16 h-16 rounded-full bg-blue-600/10" />

            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl shadow-gray-200">
              <Image
                src={equipeImage}
                alt="Equipe da Inovação"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Color overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#0A2540]/30 to-transparent" />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 sm:right-4 bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-4"
            >
              <p className="text-3xl font-extrabold text-blue-600 leading-none">10+</p>
              <p className="text-sm text-gray-500 font-medium mt-0.5">Anos de experiência</p>
            </motion.div>
          </motion.div>

          {/* ─── RIGHT: content ─── */}
          <motion.div
            initial={{ opacity: 0, x: 56 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 text-xs font-bold uppercase tracking-widest rounded-full mb-5">
              Por que nos escolher
            </span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A2540] leading-tight mb-5">
              Por que escolher a{" "}
              <span className="text-blue-600">Inovação?</span>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-9">
              Somos uma locadora familiar com mais de 10 anos de tradição,
              oferecendo o melhor serviço de aluguel de veículos da região com
              total transparência e cuidado.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit, idx) => (
                <motion.li
                  key={benefit}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: idx * 0.08 }}
                  className="flex items-start gap-3.5 group"
                >
                  <div className="mt-0.5 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 group-hover:text-white transition-colors duration-200" />
                  </div>
                  <span className="text-gray-600 font-medium leading-snug">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
