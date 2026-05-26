"use client";

import { motion } from "framer-motion";
import { BadgeCheck, Ticket, CarFront, Headset } from "lucide-react";
import betoImage from "@/assets/passeios/BetoCarreiro/beto.jpg";
import betoImageAlt from "@/assets/passeios/BetoCarreiro/beto2.jpg";
import betoImageThird from "@/assets/passeios/BetoCarreiro/beto3.jpg";

const highlights = [
  { label: "Transporte", icon: CarFront },
  { label: "Ingressos", icon: Ticket },
  { label: "Suporte completo", icon: Headset },
  { label: "Atendimento personalizado", icon: BadgeCheck },
];

const attractionThumbs = [
  betoImage.src,
  betoImageAlt.src,
  betoImageThird.src,
];

export default function FeaturedTour() {
  return (
    <section id="beto-carrero" className="relative py-20 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-[2rem] border border-white/20 bg-gradient-to-br from-[#102b58]/95 via-[#0d3f76]/90 to-[#1f7fc7]/70 p-6 md:p-10 shadow-[0_30px_80px_rgba(3,15,45,0.45)]"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#091f44]/85 via-[#0b2d5a]/82 to-[#0d3f76]/72" />
          <div className="absolute top-5 left-5 rounded-full border border-amber-200/30 bg-amber-300/20 px-4 py-1 text-xs font-bold tracking-[0.18em] text-amber-50">
            MAIS PROCURADO
          </div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-8 items-center mt-8">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <h2 className="text-3xl sm:text-4xl font-black text-white">BETO CARRERO WORLD</h2>
              <p className="text-white/80 text-lg">O maior destino de diversão para toda a família.</p>

              <ul className="grid sm:grid-cols-2 gap-3">
                {highlights.map((item) => (
                  <li key={item.label} className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/10 px-3 py-2 text-sm text-blue-50">
                    <item.icon className="h-4 w-4 text-cyan-200" />
                    {item.label}
                  </li>
                ))}
              </ul>

              <a
                href="https://wa.me/5511999999999?text=Ol%C3%A1!%20Quero%20reservar%20o%20passeio%20para%20o%20Beto%20Carrero."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-2xl bg-cyan-300 px-6 py-3 text-sm font-bold text-[#0A2540] shadow-lg shadow-cyan-200/40 transition-transform hover:scale-[1.02]"
              >
                Reservar agora
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ y: -8 }}
              whileHover={{ y: -14 }}
              className="relative"
            >
              <div
                className="h-[360px] md:h-[420px] rounded-3xl border border-white/25 bg-cover bg-center"
                style={{
                  backgroundImage:
                    `linear-gradient(160deg, rgba(6,27,58,0.15), rgba(7,17,35,0.65)), url(${betoImage.src})`,
                }}
              />

              <div className="mt-4 grid grid-cols-3 gap-3">
                {attractionThumbs.map((image, index) => (
                  <motion.div
                    key={image}
                    whileHover={{ scale: 1.05 }}
                    className="h-20 md:h-24 rounded-xl border border-white/20 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        `linear-gradient(150deg, rgba(5,22,50,0.2), rgba(6,18,34,0.6)), url(${image})`,
                    }}
                    transition={{ duration: 0.25, delay: index * 0.03 }}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
