"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, Star, CheckCheck, X } from "lucide-react";
import Image from "next/image";
import TourCard from "@/components/TourCard";
import PurchasePortal from "@/components/PurchasePortal";
import { whatsappLink } from "@/lib/site";
import { tours, type Tour } from "@/lib/tours";

const stats = [
  "+1000 clientes atendidos",
  "5 estrelas",
  "Atendimento personalizado",
];

export default function ToursSection() {
  const [selectedExperience, setSelectedExperience] = useState<Tour | null>(null);

  return (
    <>
      <section id="inicio" className="relative pt-36 pb-16 md:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-1.5 text-sm text-cyan-100 mb-6"
              >
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Passeios e excursões saindo de Florianópolis
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.06] text-white"
              >
                Passeios em Florianópolis com a{" "}
                <span className="text-cyan-300">Inovação Floripa</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12 }}
                className="mt-6 max-w-xl text-lg text-blue-100/80"
              >
                Beto Carrero World, Ilha do Campeche, Balneário Camboriú, Blumenau,
                passeio de barco e transfer do aeroporto: escolha sua experiência e
                reserve online ou pelo WhatsApp.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href={whatsappLink("Olá! Quero saber mais sobre os passeios.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#25D366] px-7 py-3.5 text-sm font-bold text-white shadow-xl shadow-green-500/30 transition-transform hover:scale-[1.02]"
                >
                  <MessageCircle className="h-4 w-4" />
                  Falar no WhatsApp
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.24 }}
                className="mt-8 flex flex-wrap gap-3"
              >
                {stats.map((stat, index) => (
                  <span
                    key={stat}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-blue-100"
                  >
                    {index === 1 ? (
                      <Star className="h-4 w-4 text-amber-300" />
                    ) : (
                      <CheckCheck className="h-4 w-4 text-cyan-200" />
                    )}
                    {stat}
                  </span>
                ))}
              </motion.div>
            </div>

            <PurchasePortal />
          </div>
        </div>
      </section>

      <section id="experiencias" className="relative py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55 }}
            className="text-3xl sm:text-4xl font-bold text-white mb-8"
          >
            Passeios e excursões em Santa Catarina
          </motion.h2>

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
            {tours.map((tour, index) => (
              <div key={tour.title} className="contents">
                <motion.div
                  role="button"
                  tabIndex={0}
                  onClick={() =>
                    setSelectedExperience((current) =>
                      current?.title === tour.title ? null : tour
                    )
                  }
                  onKeyDown={(event) => {
                    if (event.key === "Enter" || event.key === " ") {
                      event.preventDefault();
                      setSelectedExperience((current) =>
                        current?.title === tour.title ? null : tour
                      );
                    }
                  }}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.35, delay: index * 0.05 }}
                  whileHover={{ y: -4 }}
                  className={`cursor-pointer rounded-3xl transition-all ${
                    selectedExperience?.title === tour.title
                      ? "ring-2 ring-cyan-200/70 ring-offset-2 ring-offset-transparent"
                      : "opacity-90 hover:opacity-100"
                  }`}
                >
                  <TourCard title={tour.title} description={tour.description} image={tour.image} imageAlt={tour.imageAlt} />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedExperience && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-center justify-center p-4"
            onClick={() => setSelectedExperience(null)}
          >
            <div className="absolute inset-0 bg-[#020b1f]/80 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: "easeOut" }}
              className="relative z-10 w-full max-w-4xl overflow-hidden rounded-[2rem] border border-white/20 bg-[#08254b]/85 shadow-[0_30px_80px_rgba(2,11,33,0.65)]"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                aria-label="Fechar detalhes do passeio"
                onClick={() => setSelectedExperience(null)}
                className="absolute right-4 top-4 z-20 rounded-xl border border-white/20 bg-white/10 p-2 text-white hover:bg-white/20"
              >
                <X className="h-4 w-4" />
              </button>

              <div className="grid lg:grid-cols-2">
                <div className="relative min-h-[260px] lg:min-h-[520px]">
                  <Image
                    src={selectedExperience.image}
                    alt={selectedExperience.imageAlt}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#04122d]/85 via-transparent to-transparent" />
                  <div className="absolute left-5 bottom-5">
                    <h3 className="text-2xl md:text-3xl font-black text-white">{selectedExperience.title}</h3>
                    <p className="text-sm text-cyan-100/90 mt-1">{selectedExperience.description}</p>
                  </div>
                </div>

                <div className="p-5 md:p-7">
                  <p className="text-blue-100/90 leading-relaxed mb-5">{selectedExperience.details}</p>

                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2.5">
                      <p className="text-[11px] uppercase tracking-wider text-blue-200/70 mb-0.5">Duração</p>
                      <p className="text-sm font-semibold text-white">{selectedExperience.duration}</p>
                    </div>
                    <div className="rounded-xl border border-white/15 bg-white/10 px-3 py-2.5">
                      <p className="text-[11px] uppercase tracking-wider text-blue-200/70 mb-0.5">Ideal para</p>
                      <p className="text-sm font-semibold text-white">{selectedExperience.idealFor}</p>
                    </div>
                  </div>

                  <p className="text-sm font-semibold text-cyan-100 mb-3">Inclui no passeio:</p>
                  <ul className="space-y-2 mb-6">
                    {selectedExperience.includes.map((item) => (
                      <li key={item} className="text-sm text-blue-100/90 flex items-center gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-cyan-200" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={whatsappLink(`Olá! Quero mais detalhes sobre o passeio ${selectedExperience.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-cyan-300 px-5 py-3 text-sm font-bold text-[#0A2540] transition-transform hover:scale-[1.02]"
                  >
                    Solicitar detalhes
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
