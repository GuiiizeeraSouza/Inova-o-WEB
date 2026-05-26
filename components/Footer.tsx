import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock3, ExternalLink, Instagram, Facebook, MessageCircle } from "lucide-react";
import logoGif from "@/assets/logo.gif";

const companyLinks = [
  { label: "Sobre nós", href: "#" },
  { label: "Nossa frota", href: "#frota" },
  { label: "Como funciona", href: "#como-funciona" },
  { label: "Vantagens", href: "#vantagens" },
  { label: "Contato", href: "#contato" },
];

const fleetLinks = [
  { label: "Volkswagen Gol", href: "#frota" },
  { label: "Volkswagen Voyage", href: "#frota" },
  { label: "Volkswagen Polo", href: "#frota" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="contato" className="bg-[#0A2540] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="mb-5">
              <Image
                src={logoGif}
                alt="Inovação Carros"
                unoptimized
                className="h-20 w-auto object-contain"
                priority
              />
            </div>

            <p className="text-white/45 text-sm leading-relaxed max-w-xs mb-7">
              Locadora familiar com tradição e qualidade no atendimento. Sua
              mobilidade é a nossa prioridade. Desde 2015 cuidando de você na
              estrada.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/inovacaofloripa/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://www.facebook.com/InovacaoRentACar"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-green-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Company links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">
              Empresa
            </h4>
            <ul className="space-y-3">
              {companyLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fleet links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">
              Nossa Frota
            </h4>
            <ul className="space-y-3">
              {fleetLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-white/45 hover:text-white transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-5">
              Contato
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a
                  href="https://wa.me/5548998630435"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  (48) 998630435 wpp
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock3 className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-sm text-white/45">Seg a Sab 09:00 ás 18:00</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a
                  href="mailto:inovacaopasseios@gmail.com"
                  className="text-sm text-white/45 hover:text-white transition-colors break-all"
                >
                  inovacaopasseios@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a
                  href="https://www.tripadvisor.com.br/Attraction_Review-g303576-d23071396-Reviews-Inovacao_Floripa-Florianopolis_State_of_Santa_Catarina.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  Ver no TripAdvisor
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 py-7 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/25 text-sm text-center sm:text-left">
            © {year} Inovação Carros. Todos os direitos reservados.
          </p>
          <p className="text-white/25 text-sm">
            Feito com ♥ para você dirigir sem preocupações
          </p>
        </div>
      </div>
    </footer>
  );
}
