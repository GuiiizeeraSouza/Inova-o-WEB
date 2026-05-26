"use client";

import { motion } from "framer-motion";

export default function SearchForm() {
  return (
    <section id="contato" className="relative z-10 -mt-10 pb-0 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: "easeOut" }}
          className="bg-white rounded-3xl shadow-2xl shadow-gray-300/40 p-6 lg:p-8 border border-gray-100"
        >
          <p className="text-xs font-bold text-blue-600 uppercase tracking-widest mb-4">
            Localizacao da loja
          </p>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] mb-3">
            Venha nos visitar no Shopping Barra Norte
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Estrada Dom Joao Becker 145 L2 (Shopping Barra Norte), Ingleses,
            Florianopolis - SC, CEP 88058-600
          </p>

          <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-lg">
            <iframe
              title="Localizacao da loja Inovacao Carros"
              src="https://www.google.com/maps?q=Estrada+Dom+Joao+Becker+145+L2,+Ingleses,+Florianopolis+-+SC,+88058-600&output=embed"
              width="100%"
              height="360"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
