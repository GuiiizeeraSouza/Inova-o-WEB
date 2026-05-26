import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inovação Carros | Aluguel de veículos",
  description:
    "Alugue Gol, Voyage e Polo com segurança, conforto e atendimento personalizado. Locadora familiar com tradição e qualidade.",
  keywords: [
    "aluguel de carros",
    "locadora de veículos",
    "Gol",
    "Voyage",
    "Polo",
    "Inovação Carros",
  ],
  openGraph: {
    title: "Inovação Carros | Aluguel de veículos",
    description:
      "Alugue Gol, Voyage e Polo com segurança, conforto e atendimento personalizado.",
    type: "website",
  },
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
