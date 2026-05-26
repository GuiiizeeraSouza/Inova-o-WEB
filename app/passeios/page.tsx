"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToursSection from "@/components/ToursSection";
import FeaturedTour from "@/components/FeaturedTour";
import TourSteps from "@/components/TourSteps";
import TourCTA from "@/components/TourCTA";
import firewhipPng from "@/assets/firewhip.png";

const particles = [
  { size: "h-1.5 w-1.5", left: "6%", top: "16%", delay: 0.2, duration: 6.5 },
  { size: "h-2 w-2", left: "18%", top: "74%", delay: 0.1, duration: 8.1 },
  { size: "h-1 w-1", left: "27%", top: "34%", delay: 0.5, duration: 7.2 },
  { size: "h-2 w-2", left: "38%", top: "58%", delay: 0.8, duration: 8.6 },
  { size: "h-1.5 w-1.5", left: "49%", top: "24%", delay: 0.2, duration: 6.8 },
  { size: "h-1 w-1", left: "56%", top: "70%", delay: 0.6, duration: 9.2 },
  { size: "h-2 w-2", left: "68%", top: "39%", delay: 0.4, duration: 8.4 },
  { size: "h-1 w-1", left: "77%", top: "62%", delay: 0.9, duration: 7.8 },
  { size: "h-1.5 w-1.5", left: "86%", top: "20%", delay: 0.3, duration: 6.7 },
  { size: "h-2 w-2", left: "93%", top: "80%", delay: 0.5, duration: 8.8 },
];

export default function PasseiosPage() {
  return (
    <>
      <Header />

      <main className="relative overflow-hidden bg-gradient-to-br from-[#05142f] via-[#0a3666] to-[#35a4df]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-28 top-14 h-72 w-72 rounded-full bg-cyan-300/15 blur-3xl" />
          <div className="absolute right-0 top-1/3 h-[26rem] w-[26rem] rounded-full bg-blue-700/25 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 h-[18rem] w-[18rem] rounded-full bg-cyan-200/10 blur-[90px]" />

          <div className="absolute inset-0">
            {particles.map((dot, index) => (
              <motion.span
                key={`${dot.left}-${dot.top}`}
                className={`absolute rounded-full bg-cyan-100/65 ${dot.size}`}
                style={{ left: dot.left, top: dot.top }}
                animate={{ y: [0, -14, 0], opacity: [0.2, 0.7, 0.2] }}
                transition={{
                  repeat: Infinity,
                  duration: dot.duration,
                  delay: dot.delay + index * 0.04,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <motion.div
            className="absolute inset-x-0 top-[15%] md:top-[22%]"
            animate={{ x: ["-7%", "8%", "-7%"] }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src={firewhipPng}
              alt="Elemento decorativo FireWhip"
              className="w-[170%] md:w-[135%] max-w-none -translate-x-[22%] md:-translate-x-[12%] opacity-[0.16] md:opacity-[0.2]"
              priority
            />
          </motion.div>

          <div className="absolute left-[14%] top-[48%] h-36 w-36 rotate-12 rounded-[2rem] border border-cyan-100/15 bg-cyan-100/5 backdrop-blur-sm" />
          <div className="absolute right-[10%] top-[66%] h-24 w-24 -rotate-6 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm" />
        </div>

        <ToursSection />
        <FeaturedTour />
        <TourSteps />
        <TourCTA />
      </main>

      <Footer />
    </>
  );
}
