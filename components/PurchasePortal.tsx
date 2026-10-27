"use client";

import { useEffect, useRef, type PointerEvent } from "react";
import {
  motion,
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowUpRight, BadgeCheck, Clock, Lock, ShieldCheck, ShoppingCart } from "lucide-react";
import purchaseSiteImage from "@/assets/passeios/SiteDeCompra.png";

const purchaseSiteUrl = "https://www.inovacaofloripa.com.br/";
const purchaseSiteVideo = "/videos/inovacaoVideo.mp4";

const floatingBadges = [
  {
    label: "Site oficial",
    icon: BadgeCheck,
    className: "-left-6 top-16",
    duration: 6,
  },
  {
    label: "Ambiente seguro",
    icon: ShieldCheck,
    className: "-right-6 top-1/2",
    duration: 7.5,
  },
  {
    label: "Reserve 24h por dia",
    icon: Clock,
    className: "-bottom-5 left-10",
    duration: 6.8,
  },
];

export default function PurchasePortal() {
  const reduceMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Keep the poster frame instead of autoplaying for users who prefer reduced motion
  useEffect(() => {
    if (reduceMotion) videoRef.current?.pause();
  }, [reduceMotion]);

  const pointerX = useMotionValue(0.5);
  const pointerY = useMotionValue(0.5);
  const smoothX = useSpring(pointerX, { stiffness: 140, damping: 18 });
  const smoothY = useSpring(pointerY, { stiffness: 140, damping: 18 });

  const rotateX = useTransform(smoothY, [0, 1], [7, -7]);
  const rotateY = useTransform(smoothX, [0, 1], [-9, 9]);
  const glareX = useTransform(smoothX, [0, 1], ["0%", "100%"]);
  const glareY = useTransform(smoothY, [0, 1], ["0%", "100%"]);
  const glare = useMotionTemplate`radial-gradient(420px circle at ${glareX} ${glareY}, rgba(255,255,255,0.22), transparent 60%)`;

  const handlePointerMove = (event: PointerEvent<HTMLAnchorElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const bounds = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - bounds.left) / bounds.width);
    pointerY.set((event.clientY - bounds.top) / bounds.height);
  };

  const resetPointer = () => {
    pointerX.set(0.5);
    pointerY.set(0.5);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 26 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.12 }}
      className="relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="relative mb-5 flex items-center justify-center gap-2 lg:justify-start"
      >
        <span className="relative flex h-2.5 w-2.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300/70" />
          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-300" />
        </span>
        <span className="text-xs font-bold uppercase tracking-[0.22em] text-cyan-100/90">
          Loja online aberta
        </span>
      </motion.div>

      <motion.div
        animate={reduceMotion ? undefined : { y: [-6, 8, -6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        className="relative [perspective:1400px]"
      >
        {/* Portal glow and pulsing rings */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-1/2 h-[120%] w-[110%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/20 blur-[90px]" />
          {[0, 1, 2].map((ring) => (
            <motion.div
              key={ring}
              className="absolute left-1/2 top-1/2 aspect-square w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-200/25"
              animate={reduceMotion ? undefined : { scale: [0.75, 1.25], opacity: [0.55, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, delay: ring * 1.5, ease: "easeOut" }}
            />
          ))}
        </div>

        <motion.a
          href={purchaseSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Abrir a loja de passeios da Inovação Floripa em uma nova aba"
          onPointerMove={handlePointerMove}
          onPointerLeave={resetPointer}
          style={reduceMotion ? undefined : { rotateX, rotateY, transformStyle: "preserve-3d" }}
          className="group relative block rounded-[1.75rem] p-[2px] shadow-[0_35px_100px_rgba(3,14,40,0.7)] outline-none focus-visible:ring-4 focus-visible:ring-cyan-200/60"
        >
          {/* Rotating gradient border */}
          <div className="absolute inset-0 overflow-hidden rounded-[1.75rem]">
            <motion.div
              className="absolute -inset-[60%] bg-[conic-gradient(from_0deg,#67e8f9,#1d4ed8,#fbbf24,#22d3ee,#0ea5e9,#67e8f9)]"
              animate={reduceMotion ? undefined : { rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="relative overflow-hidden rounded-[calc(1.75rem-2px)] bg-[#061a38]">
            {/* Browser chrome */}
            <div className="flex items-center gap-3 border-b border-white/10 bg-[#0a2550]/95 px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
                <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
                <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              </div>
              <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border border-white/10 bg-white/[0.07] px-3 py-1.5 text-xs text-blue-100/90">
                <Lock className="h-3.5 w-3.5 shrink-0 text-emerald-300" />
                <span className="truncate">
                  <span className="text-blue-100/50">https://</span>inovacaofloripa.com.br
                </span>
              </div>
              <ArrowUpRight className="h-4 w-4 shrink-0 text-cyan-200 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </div>

            {/* Site preview */}
            <div className="relative overflow-hidden bg-white">
              <video
                ref={videoRef}
                src={purchaseSiteVideo}
                poster={purchaseSiteImage.src}
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                aria-label="Vídeo mostrando a compra de passeios no site da Inovação Floripa"
                className="block aspect-[1898/868] h-auto w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />

              {/* Light sweep */}
              <div className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/2 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-1000 ease-out group-hover:left-[130%] group-hover:opacity-100" />

              {/* Mouse-following glare */}
              {!reduceMotion && (
                <motion.div
                  className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100"
                  style={{ background: glare }}
                />
              )}

              {/* Hover call to action */}
              <div className="absolute inset-0 flex items-center justify-center bg-[radial-gradient(circle_at_center,rgba(3,17,43,0.55),rgba(3,17,43,0.25))] p-5 opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                <span className="inline-flex translate-y-3 items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-bold text-[#0A2540] shadow-xl transition-transform duration-300 group-hover:translate-y-0">
                  <ShoppingCart className="h-4 w-4" />
                  Entrar na loja
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </div>
        </motion.a>

        {floatingBadges.map((badge, index) => (
          <motion.div
            key={badge.label}
            initial={{ opacity: 0, scale: 0.85 }}
            animate={
              reduceMotion
                ? { opacity: 1, scale: 1 }
                : { opacity: 1, scale: 1, y: [0, -10, 0] }
            }
            transition={{
              opacity: { delay: 0.45 + index * 0.12 },
              scale: { delay: 0.45 + index * 0.12 },
              y: { duration: badge.duration, repeat: Infinity, ease: "easeInOut" },
            }}
            className={`pointer-events-none absolute hidden items-center gap-2 rounded-2xl border border-white/20 bg-[#08254b]/80 px-3.5 py-2 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(2,12,35,0.5)] backdrop-blur-md sm:flex ${badge.className}`}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-cyan-300/20">
              <badge.icon className="h-3.5 w-3.5 text-cyan-200" />
            </span>
            {badge.label}
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="relative mt-10 flex flex-col items-center gap-2 lg:items-end"
      >
        <a
          href={purchaseSiteUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta relative inline-flex items-center justify-center gap-3 overflow-hidden rounded-2xl bg-gradient-to-r from-cyan-300 via-sky-300 to-cyan-200 py-3.5 pl-6 pr-3 text-sm font-bold text-[#0A2540] shadow-xl shadow-cyan-300/30 transition-transform hover:scale-[1.03]"
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/60 to-transparent transition-transform duration-700 group-hover/cta:translate-x-full" />
          <ShoppingCart className="relative h-4 w-4" />
          <span className="relative">Comprar passeios online</span>
          <span className="relative flex h-8 w-8 items-center justify-center rounded-xl bg-[#0A2540] text-cyan-200 transition-transform duration-300 group-hover/cta:rotate-45">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </a>
        <span className="text-xs text-blue-100/60">Abre o site de compras em uma nova aba</span>
      </motion.div>
    </motion.div>
  );
}
