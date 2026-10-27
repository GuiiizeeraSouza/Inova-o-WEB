import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { toursFaq } from "@/lib/faq";
import { tours } from "@/lib/tours";
import { toursJsonLd } from "@/lib/structuredData";
import betoImage from "@/assets/passeios/BetoCarreiro/beto.jpg";

const title = "Passeios em Florianópolis: Beto Carrero, Campeche e mais";
const description =
  "Passeios e excursões saindo de Florianópolis: Beto Carrero World, Ilha do Campeche, Balneário Camboriú, Blumenau, passeio de barco e transfer do aeroporto. Reserve online!";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/passeios" },
  openGraph: { title, description, url: "/passeios" },
  twitter: { card: "summary_large_image", title, description },
};

export default function PasseiosLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd
        data={toursJsonLd({
          title,
          description,
          faq: toursFaq,
          tours,
          featuredTour: {
            name: "Excursão Florianópolis x Beto Carrero World",
            description:
              "Transporte de Florianópolis ao Beto Carrero World, em Penha (SC), com ida e volta no mesmo dia.",
            image: betoImage.src,
          },
        })}
      />
      {children}
    </>
  );
}
