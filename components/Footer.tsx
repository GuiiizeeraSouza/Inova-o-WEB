import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, Clock3, ExternalLink, Instagram, Facebook, MessageCircle, MapPin, Star } from "lucide-react";
import logoGif from "@/assets/logo.gif";
import { business, fullAddress, mapsUrl, whatsappLink } from "@/lib/site";

const companyLinks = [
  { label: "Sobre nós", href: "/#vantagens" },
  { label: "Nossa frota", href: "/#frota" },
  { label: "Como funciona", href: "/#como-funciona" },
  { label: "Perguntas frequentes", href: "/#perguntas-frequentes" },
  { label: "Onde estamos", href: "/#contato" },
];

const serviceLinks = [
  { label: "Aluguel de carros em Florianópolis", href: "/" },
  { label: "Passeios em Florianópolis", href: "/passeios" },
  { label: "Excursão ao Beto Carrero World", href: "/passeios#beto-carrero" },
  { label: "Transfer Aeroporto Florianópolis", href: "/passeios#experiencias" },
  { label: "Loja de passeios online", href: business.purchaseSiteUrl },
];

interface FooterProps {
  // Each business line has its own inbox and Google profile
  line?: keyof typeof business.emails;
}

export default function Footer({ line = "cars" }: FooterProps) {
  const year = new Date().getFullYear();
  const email = business.emails[line];

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
              Aluguel de carros, passeios e transfer em Florianópolis. Locadora
              familiar com tradição e qualidade no atendimento, cuidando de você
              na estrada desde 2015.
            </p>

            {/* Social links */}
            <div className="flex gap-3">
              <a
                href={business.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-gradient-to-br hover:from-pink-500 hover:to-purple-600 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={business.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-white/8 hover:bg-blue-600 flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={whatsappLink()}
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
              Serviços
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map(({ label, href }) => (
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
                  href={whatsappLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  {business.phoneDisplay} (WhatsApp)
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Clock3 className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <span className="text-sm text-white/45">{business.openingHours.label}</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a
                  href={`mailto:${email}`}
                  className="text-sm text-white/45 hover:text-white transition-colors break-all"
                >
                  {email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a
                  href={mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  <address className="not-italic">{fullAddress}</address>
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Star className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a
                  href={business.googleReviews[line]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white/45 hover:text-white transition-colors"
                >
                  Ver avaliações no Google
                </a>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-7 h-7 rounded-lg bg-blue-600/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </div>
                <a
                  href={business.social.tripadvisor}
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
            © {year} Inovação Floripa · Inovação Carros. Todos os direitos reservados.
          </p>
          <p className="text-white/25 text-sm">
            Feito com ♥ para você dirigir sem preocupações
          </p>
        </div>
      </div>
    </footer>
  );
}
