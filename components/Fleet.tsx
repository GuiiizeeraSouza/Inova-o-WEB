"use client";

import { motion } from "framer-motion";
import { Users, Fuel, Wind, Settings2, ArrowRight, Gauge } from "lucide-react";
import Image, { type StaticImageData } from "next/image";
import golImg from "@/assets/carros/gol.png";
import voyageImg from "@/assets/carros/voyage.png";
import poloImg from "@/assets/carros/polo.png";

const WHATSAPP_BASE = "https://wa.me/5511999999999?text=";

interface Feature {
  Icon: React.ElementType;
  text: string;
}

interface Car {
  name: string;
  category: string;
  image: StaticImageData;
  features: Feature[];
  badge: string;
  badgeBg: string;
  categoryBg: string;
}

const cars: Car[] = [
  {
    name: "Volkswagen Gol",
    category: "Econômico",
    image: golImg,
    badge: "Mais Alugado",
    badgeBg: "bg-emerald-100 text-emerald-700",
    categoryBg: "bg-emerald-600",
    features: [
      { Icon: Fuel, text: "Baixo consumo" },
      { Icon: Users, text: "5 Passageiros" },
      { Icon: Wind, text: "Ar condicionado" },
      { Icon: Settings2, text: "Direção hidráulica" },
    ],
  },
  {
    name: "Volkswagen Voyage",
    category: "Conforto",
    image: voyageImg,
    badge: "Ideal p/ família",
    badgeBg: "bg-blue-100 text-blue-700",
    categoryBg: "bg-blue-600",
    features: [
      { Icon: Users, text: "5 Passageiros" },
      { Icon: Gauge, text: "Econômico" },
      { Icon: Wind, text: "Espaço interno" },
      { Icon: Settings2, text: "Porta-malas amplo" },
    ],
  },
  {
    name: "Volkswagen Polo",
    category: "Premium",
    image: poloImg,
    badge: "Premium",
    badgeBg: "bg-violet-100 text-violet-700",
    categoryBg: "bg-violet-600",
    features: [
      { Icon: Settings2, text: "Design moderno" },
      { Icon: Wind, text: "Conforto premium" },
      { Icon: Gauge, text: "Excelente desempenho" },
      { Icon: Users, text: "5 Passageiros" },
    ],
  },
];

export default function Fleet() {
  return (
    <section id="frota" className="py-28 bg-[#F5F7FA]">
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
            Frota disponível
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A2540]">
            Nossa frota
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto">
            Veículos revisados e prontos para a sua próxima viagem
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car, idx) => (
            <motion.article
              key={car.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-md hover:shadow-2xl hover:shadow-gray-200/60 transition-all duration-400"
            >
              {/* Image wrapper */}
              <div className="relative h-52 overflow-hidden bg-gray-100">
                <Image
                  src={car.image}
                  alt={`${car.name} — Inovação Carros`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover group-hover:scale-[1.07] transition-transform duration-500"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

                {/* Badges */}
                <span
                  className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${car.badgeBg}`}
                >
                  {car.badge}
                </span>
                <span
                  className={`absolute bottom-4 right-4 px-3 py-1.5 rounded-full text-white text-xs font-bold ${car.categoryBg}`}
                >
                  {car.category}
                </span>
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-[#0A2540] mb-4">
                  {car.name}
                </h3>

                <ul className="space-y-2.5 mb-6">
                  {car.features.map(({ Icon, text }) => (
                    <li key={text} className="flex items-center gap-2.5 text-sm text-gray-500">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-3.5 h-3.5 text-blue-600" />
                      </div>
                      {text}
                    </li>
                  ))}
                </ul>

                <a
                  href={`${WHATSAPP_BASE}${encodeURIComponent(
                    `Olá! Tenho interesse em alugar o ${car.name}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-all duration-300 hover:scale-[1.02] active:scale-100 shadow-lg shadow-blue-600/20"
                >
                  Solicitar Orçamento
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
