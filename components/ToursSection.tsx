"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MessageCircle, ArrowRight, Star, CheckCheck, X } from "lucide-react";
import Image from "next/image";
import TourCard from "@/components/TourCard";
import betoImg from "@/assets/passeios/BetoCarreiro/beto.jpg";
import bcImage from "@/assets/passeios/BC/bc.jpg";
import campecheImage from "@/assets/passeios/Campeche/campeche.jpg";
import blumenauImage from "@/assets/passeios/BlumenauPomerode/blumenau.jpg";
import barcoImage from "@/assets/passeios/PasseioDeBarco/barcoPirata.png";
import cavaloImage from "@/assets/passeios/PasseioDeCavalo/passeioCavalo.jpg";
import transferImage from "@/assets/passeios/Transfer/Transfer.jpg";

const tours = [
  {
    title: "Ilha do Campeche",
    description: "Praias paradisíacas e natureza",
    image: campecheImage.src,
    details:
      "Navegação até uma das ilhas mais bonitas da região, com mar cristalino e tempo livre para curtir praia e trilhas leves.",
    duration: "Dia inteiro",
    idealFor: "Casais e amantes de natureza",
    includes: ["Transporte", "Orientação local", "Suporte no embarque"],
  },
  {
    title: "Balneário Camboriú",
    description: "Cidade turística e atrações",
    image: bcImage.src,
    details:
      "Roteiro urbano com vista panorâmica, pontos icônicos e paradas estratégicas para fotos, compras e experiências gastronômicas.",
    duration: "Turno ou dia completo",
    idealFor: "Famílias e grupos",
    includes: ["Transfer ida e volta", "Roteiro otimizado", "Suporte durante o passeio"],
  },
  {
    title: "Blumenau e Pomerode",
    description: "Cultura e gastronomia",
    image: blumenauImage.src,
    details:
      "Imersão cultural com arquitetura típica, culinária alemã e experiências tradicionais nas duas cidades mais charmosas da rota.",
    duration: "Dia inteiro",
    idealFor: "Quem busca cultura e sabores",
    includes: ["Transporte confortável", "Paradas planejadas", "Atendimento personalizado"],
  },
  {
    title: "Passeio de Barco",
    description: "Experiências marítimas",
    image: barcoImage.src,
    details:
      "Passeio marítimo com visual incrível da costa e clima de aventura, ideal para quem quer viver Santa Catarina por outro ângulo.",
    duration: "Meio período",
    idealFor: "Aventureiros e grupos",
    includes: ["Transfer local", "Auxílio de embarque", "Suporte completo"],
  },
  {
    title: "Passeio a cavalo",
    description: "Contato com a natureza",
    image: cavaloImage.src,
    details:
      "Trilhas em meio à natureza com ritmo tranquilo e acompanhamento, excelente para relaxar e curtir paisagens naturais.",
    duration: "Meio período",
    idealFor: "Famílias e iniciantes",
    includes: ["Transporte", "Acompanhamento", "Atendimento dedicado"],
  },
  {
    title: "Transfer Aeroporto",
    description: "Conforto e praticidade",
    image: transferImage.src,
    details:
      "Serviço de transfer com pontualidade e conforto para chegada e saída, com foco total em praticidade e segurança.",
    duration: "Sob demanda",
    idealFor: "Viagens individuais e corporativas",
    includes: ["Motorista profissional", "Bagagem assistida", "Suporte em tempo real"],
  },
];

const stats = [
  "+1000 clientes atendidos",
  "5 estrelas",
  "Atendimento personalizado",
];

const featuredTours = [
  { label: "🎢 Beto Carrero", image: betoImg, alt: "Beto Carrero" },
  { label: "🏝️ Ilha do Campeche", image: campecheImage, alt: "Ilha do Campeche" },
  { label: "🌆 Balneário Camboriú", image: bcImage, alt: "Balneário Camboriú" },
];

export default function ToursSection() {
  const [selectedTour, setSelectedTour] = useState(featuredTours[0]);
  const [selectedExperience, setSelectedExperience] = useState<(typeof tours)[number] | null>(null);

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
                Passeios exclusivos
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.06] text-white"
              >
                Transforme sua viagem com a{" "}
                <span className="text-cyan-300">Inovação Floripa</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.12 }}
                className="mt-6 max-w-xl text-lg text-blue-100/80"
              >
                Passeios, excursões e experiências para aproveitar o melhor de Santa
                Catarina.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.18 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <a
                  href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20solicitar%20or%C3%A7amento%20para%20passeios."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-7 py-3.5 text-sm font-bold text-[#0A2540] shadow-xl shadow-cyan-200/35 transition-transform hover:scale-[1.02]"
                >
                  Solicitar orçamento
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/30 bg-white/10 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/20"
                >
                  <MessageCircle className="h-4 w-4 text-green-300" />
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

            <motion.div
              initial={{ opacity: 0, x: 26 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.12 }}
              className="relative"
            >
              <div className="absolute -top-10 left-1/2 h-28 w-72 -translate-x-1/2 rounded-full bg-cyan-300/35 blur-3xl" />

              <motion.div
                animate={{ y: [-8, 10, -8] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative h-[380px] sm:h-[460px] overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#0f3c75]/75 via-[#0b2a59]/80 to-[#072247]/90 shadow-[0_25px_90px_rgba(5,17,48,0.55)]"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(70,220,255,0.35),transparent_65%)]" />
                <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02)_40%,rgba(5,20,40,0.4))]" />

                <motion.div
                  key={selectedTour.label}
                  initial={{ opacity: 0.35, scale: 0.985, y: -6 }}
                  animate={{ opacity: 1, scale: 1, y: [-6, 8, -6] }}
                  transition={{
                    opacity: { duration: 0.35, ease: "easeOut" },
                    scale: { duration: 0.35, ease: "easeOut" },
                    y: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                  }}
                  className="absolute inset-x-6 bottom-8 top-12"
                >
                  <Image
                    src={selectedTour.image}
                    alt={selectedTour.alt}
                    fill
                    sizes="(max-width: 768px) 85vw, (max-width: 1280px) 44vw, 520px"
                    className="rounded-2xl object-cover object-center drop-shadow-[0_20px_40px_rgba(0,0,0,0.55)]"
                    priority
                  />
                </motion.div>

                <div className="absolute inset-x-14 bottom-5 h-10 rounded-full bg-cyan-100/20 blur-2xl" />
              </motion.div>

              <div className="absolute -bottom-5 left-4 right-4 md:-right-8 md:left-auto md:w-64 grid gap-3">
                {featuredTours.map((tour, index) => (
                  <motion.div
                    key={tour.label}
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.08 }}
                    className="rounded-2xl"
                  >
                    <button
                      type="button"
                      onClick={() => setSelectedTour(tour)}
                      className={`w-full rounded-2xl border px-4 py-3 text-left text-sm font-semibold backdrop-blur-md transition-colors ${
                        selectedTour.label === tour.label
                          ? "border-cyan-200/70 bg-cyan-200/20 text-white"
                          : "border-white/20 bg-[#08254b]/75 text-white hover:bg-[#0b2f5d]/85"
                      }`}
                    >
                      {tour.label}
                    </button>
                  </motion.div>
                ))}
              </div>
            </motion.div>
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
            Mais experiências para você
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
                  <TourCard title={tour.title} description={tour.description} image={tour.image} />
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
                    alt={selectedExperience.title}
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
                    href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20mais%20detalhes%20sobre%20esse%20passeio."
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
