import type { StaticImageData } from "next/image";
import bcImage from "@/assets/passeios/BC/bc.jpg";
import campecheImage from "@/assets/passeios/Campeche/campeche.jpg";
import blumenauImage from "@/assets/passeios/BlumenauPomerode/blumenau.jpg";
import barcoImage from "@/assets/passeios/PasseioDeBarco/barcoPirata.png";
import cavaloImage from "@/assets/passeios/PasseioDeCavalo/passeioCavalo.jpg";
import transferImage from "@/assets/passeios/Transfer/Transfer.jpg";

export interface Tour {
  title: string;
  description: string;
  imageAlt: string;
  image: StaticImageData;
  details: string;
  duration: string;
  idealFor: string;
  includes: string[];
}

export const tours: Tour[] = [
  {
    title: "Ilha do Campeche",
    description: "Praias paradisíacas e natureza",
    imageAlt: "Mar cristalino da Ilha do Campeche em Florianópolis",
    image: campecheImage,
    details:
      "Navegação até uma das ilhas mais bonitas da região, com mar cristalino e tempo livre para curtir praia e trilhas leves.",
    duration: "Dia inteiro",
    idealFor: "Casais e amantes de natureza",
    includes: ["Transporte", "Orientação local", "Suporte no embarque"],
  },
  {
    title: "Balneário Camboriú",
    description: "Cidade turística e atrações",
    imageAlt: "Vista panorâmica de Balneário Camboriú, passeio saindo de Florianópolis",
    image: bcImage,
    details:
      "Roteiro urbano com vista panorâmica, pontos icônicos e paradas estratégicas para fotos, compras e experiências gastronômicas.",
    duration: "Turno ou dia completo",
    idealFor: "Famílias e grupos",
    includes: ["Transfer ida e volta", "Roteiro otimizado", "Suporte durante o passeio"],
  },
  {
    title: "Blumenau e Pomerode",
    description: "Cultura e gastronomia",
    imageAlt: "Arquitetura enxaimel em Blumenau, passeio saindo de Florianópolis",
    image: blumenauImage,
    details:
      "Imersão cultural com arquitetura típica, culinária alemã e experiências tradicionais nas duas cidades mais charmosas da rota.",
    duration: "Dia inteiro",
    idealFor: "Quem busca cultura e sabores",
    includes: ["Transporte confortável", "Paradas planejadas", "Atendimento personalizado"],
  },
  {
    title: "Passeio de Barco",
    description: "Experiências marítimas",
    imageAlt: "Passeio de barco pirata em Florianópolis",
    image: barcoImage,
    details:
      "Passeio marítimo com visual incrível da costa e clima de aventura, ideal para quem quer viver Santa Catarina por outro ângulo.",
    duration: "Meio período",
    idealFor: "Aventureiros e grupos",
    includes: ["Transfer local", "Auxílio de embarque", "Suporte completo"],
  },
  {
    title: "Passeio a cavalo",
    description: "Contato com a natureza",
    imageAlt: "Passeio a cavalo em meio à natureza em Florianópolis",
    image: cavaloImage,
    details:
      "Trilhas em meio à natureza com ritmo tranquilo e acompanhamento, excelente para relaxar e curtir paisagens naturais.",
    duration: "Meio período",
    idealFor: "Famílias e iniciantes",
    includes: ["Transporte", "Acompanhamento", "Atendimento dedicado"],
  },
  {
    title: "Transfer Aeroporto",
    description: "Conforto e praticidade",
    imageAlt: "Transfer do Aeroporto de Florianópolis",
    image: transferImage,
    details:
      "Serviço de transfer com pontualidade e conforto para chegada e saída, com foco total em praticidade e segurança.",
    duration: "Sob demanda",
    idealFor: "Viagens individuais e corporativas",
    includes: ["Motorista profissional", "Bagagem assistida", "Suporte em tempo real"],
  },
];
