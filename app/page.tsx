import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SearchForm from "@/components/SearchForm";
import Steps from "@/components/Steps";
import Fleet from "@/components/Fleet";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { carRentalFaq } from "@/lib/faq";
import { homeJsonLd } from "@/lib/structuredData";

const title = "Aluguel de Carros em Florianópolis | Inovação Carros nos Ingleses";
const description =
  "Aluguel de carros em Florianópolis com atendimento rápido pelo WhatsApp. Gol, Voyage e Polo revisados com retirada no Shopping Barra Norte, Ingleses. Peça seu orçamento!";

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  openGraph: { title, description, url: "/" },
  twitter: { card: "summary_large_image", title, description },
};

export default function Home() {
  return (
    <>
      <JsonLd
        data={homeJsonLd({
          title,
          description,
          faq: carRentalFaq,
          cars: ["Volkswagen Gol", "Volkswagen Voyage", "Volkswagen Polo"],
        })}
      />
      <Header />
      <main>
        <Hero />
        <Steps />
        <Fleet />
        <Benefits />
        <Testimonials />
        <SearchForm />
        <FAQ
          items={carRentalFaq}
          eyebrow="Dúvidas frequentes"
          title="Perguntas sobre aluguel de carros em Florianópolis"
          subtitle="Tudo o que você precisa saber antes de alugar seu carro na Ilha."
        />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
