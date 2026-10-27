import { business, fullAddress } from "@/lib/site";

export interface FaqItem {
  question: string;
  answer: string;
}

export const carRentalFaq: FaqItem[] = [
  {
    question: "Como alugar um carro em Florianópolis com a Inovação?",
    answer:
      "É simples: escolha o modelo na nossa frota, chame a gente no WhatsApp informando as datas e combine a retirada. Você recebe o orçamento sem compromisso e retira o carro revisado e pronto para rodar.",
  },
  {
    question: "Onde fica a locadora e onde retiro o carro?",
    answer: `Nossa loja fica no Shopping Barra Norte, nos Ingleses, Norte da Ilha: ${fullAddress}. A retirada é combinada pelo WhatsApp.`,
  },
  {
    question: "Quais carros estão disponíveis para aluguel em Florianópolis?",
    answer:
      "Trabalhamos com Volkswagen Gol (econômico), Volkswagen Voyage (conforto, com porta-malas amplo) e Volkswagen Polo (premium). Todos revisados, com ar-condicionado e capacidade para 5 passageiros.",
  },
  {
    question: "Quanto custa alugar um carro em Florianópolis?",
    answer:
      "O valor depende do modelo, do período de locação e da temporada. Envie as datas pelo WhatsApp e respondemos com um orçamento sem compromisso.",
  },
  {
    question: "Qual o horário de atendimento?",
    answer: `Atendemos ${business.openingHours.label.toLowerCase()}, na loja e pelo WhatsApp ${business.phoneDisplay}.`,
  },
  {
    question: "Vocês também fazem passeios e transfer em Florianópolis?",
    answer:
      "Sim! Além do aluguel de carros, oferecemos passeios e excursões saindo de Florianópolis, como Beto Carrero World, Ilha do Campeche, Balneário Camboriú e Blumenau, além de transfer do aeroporto. Veja todos na página de passeios.",
  },
];

export const toursFaq: FaqItem[] = [
  {
    question: "Quais passeios em Florianópolis vocês oferecem?",
    answer:
      "Oferecemos excursão ao Beto Carrero World, Ilha do Campeche, Balneário Camboriú, Blumenau e Pomerode, passeio de barco, passeio a cavalo e transfer do Aeroporto de Florianópolis.",
  },
  {
    question: "Como comprar um passeio?",
    answer:
      "Você pode comprar online, com escolha de data e quantidade de passageiros, na nossa loja em inovacaofloripa.com.br, ou falar com a gente pelo WhatsApp para tirar dúvidas e reservar.",
  },
  {
    question: "Como funciona a excursão de Florianópolis ao Beto Carrero World?",
    answer:
      "O transporte sai de Florianópolis e faz ida e volta no mesmo dia, com duração aproximada de 18 horas. Consulte valores e datas disponíveis na loja online ou pelo WhatsApp.",
  },
  {
    question: "Vocês fazem transfer do Aeroporto de Florianópolis?",
    answer:
      "Sim. O transfer é feito sob demanda, com motorista profissional, ajuda com a bagagem e suporte em tempo real na chegada e na saída.",
  },
  {
    question: "Onde fica a Inovação Floripa?",
    answer: `Estamos no Shopping Barra Norte, nos Ingleses: ${fullAddress}. Atendemos ${business.openingHours.label.toLowerCase()}.`,
  },
  {
    question: "Também é possível alugar carro com vocês?",
    answer:
      "Sim. Temos aluguel de carros em Florianópolis com Gol, Voyage e Polo revisados. É uma ótima opção para explorar as praias da ilha no seu ritmo.",
  },
];
