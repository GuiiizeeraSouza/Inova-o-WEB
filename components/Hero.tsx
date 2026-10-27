"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, CheckCircle2, ChevronLeft, ChevronRight } from "lucide-react";
import Image, { type StaticImageData } from "next/image";

import golImg from "@/assets/carros/gol.png";
import poloImg from "@/assets/carros/polo.png";
import voyageImg from "@/assets/carros/voyage.png";
import { whatsappLink } from "@/lib/site";

const WHATSAPP_URL = whatsappLink("Olá! Gostaria de solicitar um orçamento.");

const highlights = [
    "Atendimento rápido",
    "Veículos revisados",
    "Suporte personalizado",
];

interface HeroCar {
    name: string;
    image: StaticImageData;
}

const heroCars: HeroCar[] = [
    { name: "Volkswagen Polo", image: poloImg },
    { name: "Volkswagen Voyage", image: voyageImg },
    { name: "Volkswagen Gol", image: golImg },
];

export default function Hero() {
    const [activeCarIndex, setActiveCarIndex] = useState(0);
    const activeCar = heroCars[activeCarIndex];

    const goNextCar = () => {
        setActiveCarIndex((current) => (current + 1) % heroCars.length);
    };

    const goPrevCar = () => {
        setActiveCarIndex((current) => (current - 1 + heroCars.length) % heroCars.length);
    };

    return (
        <section
            id="inicio"
            className="relative min-h-screen bg-gradient-to-br from-[#0A2540] via-[#0c2d50] to-[#0e3566] overflow-hidden flex items-center pt-10"
        >
            {/* Background decorations */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Large glow top-right */}
                <div className="absolute -top-32 -right-32 w-[700px] h-[700px] rounded-full bg-blue-600/10 blur-3xl" />
                {/* Small glow bottom-left */}
                <div className="absolute bottom-0 -left-20 w-[400px] h-[400px] rounded-full bg-blue-500/8 blur-3xl" />
                {/* Dot grid */}
                <div
                    className="absolute inset-0 opacity-[0.04]"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)",
                        backgroundSize: "36px 36px",
                    }}
                />
                {/* Horizontal accent line */}
                <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-400/10 to-transparent" />
            </div>

            <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* ─── LEFT: copy ─── */}
                    <div>
                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-7"
                        >
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                            Locadora de carros em Florianópolis
                        </motion.div>

                        {/* Heading */}
                        <motion.h1
                            initial={{ opacity: 0, y: 32 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.1 }}
                            className="text-4xl sm:text-5xl xl:text-6xl font-extrabold text-white leading-[1.1] tracking-tight mb-6"
                        >
                            Aluguel de carros em{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-blue-300 to-cyan-300">
                                Florianópolis
                            </span>{" "}
                            com facilidade e segurança
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, y: 24 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.2 }}
                            className="text-lg text-white/65 leading-relaxed mb-9 max-w-lg"
                        >
                            Carros revisados, retirada no Shopping Barra Norte, nos Ingleses, e
                            atendimento rápido pelo WhatsApp para você aproveitar a Ilha da Magia
                            sem preocupações. Família Inovação Carros sempre ao seu lado.
                        </motion.p>

                        {/* CTAs */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="flex flex-col sm:flex-row gap-4 mb-10"
                        >
                            <a
                                href={WHATSAPP_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold rounded-2xl shadow-2xl shadow-green-500/30 transition-all duration-300 hover:scale-[1.03] active:scale-100"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Falar no WhatsApp
                            </a>
                        </motion.div>

                        {/* Highlights */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.5 }}
                            className="flex flex-wrap gap-5"
                        >
                            {highlights.map((item) => (
                                <div key={item} className="flex items-center gap-2 text-sm text-white/60">
                                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
                                    {item}
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* ─── RIGHT: car image ─── */}
                    <motion.div
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                        className="relative hidden lg:flex items-center justify-center mb-20"
                    >
                        {/* Glow beneath car */}
                        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[480px] h-24 bg-blue-500/20 blur-3xl rounded-full" />

                        {/* Rotating outer ring */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[540px] h-[540px] rounded-full border border-dashed border-blue-500/15"
                        />
                        {/* Rotating inner ring */}
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
                            className="absolute w-[400px] h-[400px] rounded-full border border-dotted border-blue-400/20"
                        />

                        {/* Car indicator */}
                        <span className="absolute top-7 left-6 z-20 px-3.5 py-1.5 rounded-full text-xs font-bold bg-white/90 text-[#0A2540]">
                            {activeCar.name}
                        </span>

                        {/* Car switch */}
                        <div className="absolute bottom-6 right-6 z-20 flex items-center gap-2">
                            <button
                                type="button"
                                onClick={goPrevCar}
                                aria-label="Carro anterior"
                                className="h-9 w-9 rounded-full bg-white/90 text-[#0A2540] flex items-center justify-center hover:bg-white transition-colors"
                            >
                                <ChevronLeft className="h-5 w-5" />
                            </button>
                            <button
                                type="button"
                                onClick={goNextCar}
                                aria-label="Próximo carro"
                                className="h-9 w-9 rounded-full bg-white/90 text-[#0A2540] flex items-center justify-center hover:bg-white transition-colors"
                            >
                                <ChevronRight className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Floating car */}
                        <div className="relative z-10 w-full max-w-3xl">
                            <motion.div
                                key={activeCar.name}
                                initial={{ opacity: 0.5, scale: 0.985 }}
                                animate={{ opacity: 1, scale: 1, y: [-10, 10, -10] }}
                                transition={{
                                    opacity: { duration: 0.3, ease: "easeOut" },
                                    scale: { duration: 0.3, ease: "easeOut" },
                                    y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
                                }}
                                className="relative z-30"
                            >
                                <Image
                                    src={activeCar.image}
                                    alt={`${activeCar.name} para aluguel em Florianópolis - Inovação Carros`}
                                    width={720}
                                    height={460}
                                    className="w-full h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
                                    priority
                                />
                            </motion.div>
                        </div>

                        {/* Stat card — clients */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 1.0, duration: 0.5 }}
                            className="absolute bottom-4 left-4 glass rounded-2xl px-5 py-3.5 z-20"
                        >
                            <p className="text-white font-extrabold text-2xl leading-none">500+</p>
                            <p className="text-white/50 text-xs mt-0.5">Clientes satisfeitos</p>
                        </motion.div>

                        {/* Stat card — rating */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            transition={{ delay: 1.15, duration: 0.5 }}
                            className="absolute top-8 -right-2 glass rounded-2xl px-5 py-3.5 z-20"
                        >
                            <p className="text-white font-extrabold text-2xl leading-none">4.9 ★</p>
                            <p className="text-white/50 text-xs mt-0.5">Avaliação média</p>
                        </motion.div>

                    </motion.div>
                </div>
            </div>

            {/* Bottom wave */}
            <div className="absolute bottom-0 left-0 right-0 h-20">
                <svg
                    viewBox="0 0 1440 80"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    className="w-full h-full"
                >
                    <path
                        d="M0 80L1440 80L1440 20C1200 60 960 0 720 20C480 40 240 0 0 20L0 80Z"
                        fill="white"
                    />
                </svg>
            </div>
        </section>
    );
}
