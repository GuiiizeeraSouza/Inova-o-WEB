"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  text: string;
}

const testimonials: Testimonial[] = [
  {
    id: "jaqueliny-correa",
    name: "Jaqueliny Correa",
    location: "Google Avaliações",
    rating: 5,
    text: "Eu e meu marido fomos dia 06/05/25 com essa empresa, fazer a excursão para o Beto Carreiro e nossa experiência foi incrível. Van limpa, nova e confortável. Ar condicionado ligado, em temperatura agradável, motorista bem educado, gentil e dirigiu com cautela e segurança. Nota mil, recomendamos para todo mundo!!!",
  },
  {
    id: "susanna-salem",
    name: "SUSANNA SALEM",
    location: "Google Avaliações",
    rating: 5,
    text: "Meus filhos amaram, eles foram sozinhos com vcs, muito obrigado!! Saíram no horário certinho, a vam muito boa, o motorista muito cuidadoso que os meninos me disseram!! Eu tava com receio, somos do Maranhão e não conheço nada aí na cidade de vcs, muito obrigado eu super indico e vamos novamente nas próximas férias!! Fiz tudo aqui do Maranhão e deu tudo certo, paguei pelo link e deu certo. Obrigado.",
  },
  {
    id: "rafaela-garcia-deitos",
    name: "Rafaela Garcia Deitos",
    location: "Google Avaliações",
    rating: 5,
    text: "Estava procurando uma agencia para poder ir ao Beto Carrero, e encontrei a Inovação pela internet mesmo, entrei em contato e imediatamente fui super bem atendida. Fiz a compra do transporte e passaportes para entrada com eles. Marcaram num ponto bem próximo a minha casa e chegaram pontualmente no horário combinado. Pegamos uma Van bem limpa e segura, com um motorista super educado e atencioso, marcamos o horário de retorno e voltamos no horário combinado. Indico com certeza!",
  },
];

export default function Testimonials() {
  return (
    <section className="py-28 bg-[#F5F7FA] overflow-hidden">
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
            Depoimentos
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0A2540]">
            O que nossos clientes dizem
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-md mx-auto">
            Mais de 500 clientes satisfeitos confiam na Inovação Carros
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: idx * 0.12 }}
              className="group bg-white rounded-3xl p-8 border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-50 to-transparent rounded-bl-[100px] pointer-events-none" />

              {/* Quote icon */}
              <Quote className="absolute top-5 right-5 w-10 h-10 text-blue-100 group-hover:text-blue-200 transition-colors" />

              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-600 leading-relaxed italic mb-7 text-[15px]">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full border-2 border-blue-100 bg-blue-50 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <span className="text-sm font-bold text-blue-700">
                    {t.name
                      .split(" ")
                      .slice(0, 2)
                      .map((part) => part[0])
                      .join("")
                      .toUpperCase()}
                  </span>
                </div>
                <div>
                  <p className="font-bold text-[#0A2540] text-sm leading-tight">{t.name}</p>
                  <p className="text-gray-400 text-xs mt-0.5">{t.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Rating summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-6 text-center"
        >
          <div className="flex items-center gap-2">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-gray-600 font-medium">
            <span className="font-extrabold text-[#0A2540] text-xl">4.9</span> de 5 estrelas
            baseado em mais de 303 avaliações no Google
          </p>
        </motion.div>
      </div>
    </section>
  );
}
