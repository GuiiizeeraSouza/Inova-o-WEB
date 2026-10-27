import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SITE_URL, business } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Aluguel de Carros e Passeios em Florianópolis | Inovação Floripa",
    template: "%s | Inovação Floripa",
  },
  description:
    "Aluguel de carros e passeios em Florianópolis. Gol, Voyage e Polo revisados, excursões ao Beto Carrero, Ilha do Campeche e transfer do aeroporto. Loja nos Ingleses.",
  applicationName: business.name,
  authors: [{ name: business.name, url: SITE_URL }],
  creator: business.name,
  publisher: business.name,
  category: "travel",
  keywords: [
    "aluguel de carro em Florianópolis",
    "locadora de carros Florianópolis",
    "aluguel de carros Ingleses",
    "passeios em Florianópolis",
    "excursão Beto Carrero saindo de Florianópolis",
    "transfer aeroporto Florianópolis",
    "Inovação Floripa",
    "Inovação Carros",
  ],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: business.name,
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
  other: {
    "geo.region": "BR-SC",
    "geo.placename": "Florianópolis",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A2540",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={inter.variable}>
      <body className="font-sans bg-white text-[#0A2540] overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
