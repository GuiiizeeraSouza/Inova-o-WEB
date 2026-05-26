"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import logoGif from "@/assets/logo.gif";
import logoEscuraGif from "@/assets/logoEscura.gif";

const homeNavLinks = [
  { href: "/#inicio", label: "Início" },
  { href: "/#frota", label: "Nossa Frota" },
  { href: "/#como-funciona", label: "Como Funciona" },
  { href: "/#vantagens", label: "Vantagens" },
  { href: "/#contato", label: "Contato" },
];

const toursNavLinks = [
  { href: "/passeios#inicio", label: "Início" },
  { href: "/passeios#experiencias", label: "Experiências" },
  { href: "/passeios#beto-carrero", label: "Beto Carrero" },
  { href: "/passeios#como-funciona", label: "Como Funciona" },
  { href: "/passeios#contato", label: "Contato" },
];

const WHATSAPP_URL =
  "https://wa.me/5511999999999?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento.";
export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isToursPage = pathname.startsWith("/passeios");
  const navLinks = isToursPage ? toursNavLinks : homeNavLinks;
  const switchPageHref = isToursPage ? "/#inicio" : "/passeios";
  const switchPageLabel = isToursPage ? "Carros" : "Passeios";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-lg shadow-sm border-b border-gray-100/80"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link
            href={isToursPage ? "/passeios#inicio" : "/#inicio"}
            className="flex items-center group"
            aria-label="Inovação Carros - Início"
          >
            <Image
              src={scrolled ? logoEscuraGif : logoGif}
              alt="Inovação Carros"
              unoptimized
              className="h-42 sm:h-40 w-auto object-contain group-hover:scale-105 transition-transform duration-300 mt-10 sm:mt-3"
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Menu principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors duration-200 hover:text-blue-500 relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? "text-gray-600" : "text-white/85"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href={switchPageHref}
              className={`relative inline-flex items-center justify-center text-sm font-semibold px-5 py-2.5 rounded-xl border transition-all duration-200 hover:scale-105 active:scale-100 ${
                scrolled
                  ? "text-[#0A2540] border-blue-200 bg-blue-50 hover:bg-blue-100"
                  : "text-white border-white/35 bg-white/10 hover:bg-white/20"
              }`}
            >
              {switchPageLabel}
            </Link>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:scale-105 active:scale-100"
            >
              Solicitar Orçamento
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden p-2 rounded-xl transition-colors"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? (
              <X
                className={`w-6 h-6 transition-colors ${
                  scrolled ? "text-[#0A2540]" : "text-white"
                }`}
              />
            ) : (
              <Menu
                className={`w-6 h-6 transition-colors ${
                  scrolled ? "text-[#0A2540]" : "text-white"
                }`}
              />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-white border-t border-gray-100 shadow-xl"
            aria-label="Menu mobile"
          >
            <div className="px-5 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block text-base font-medium text-gray-700 hover:text-blue-600 py-2.5 px-3 rounded-xl hover:bg-blue-50 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-gray-100">
                <Link
                  href={switchPageHref}
                  onClick={() => setMenuOpen(false)}
                  className="relative text-sm font-semibold py-3 rounded-xl text-blue-700 bg-blue-50 text-center border border-blue-200 hover:bg-blue-100 transition-colors"
                >
                  {switchPageLabel}
                </Link>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="text-sm font-semibold py-3 rounded-xl bg-blue-600 text-white text-center hover:bg-blue-700 transition-colors"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
