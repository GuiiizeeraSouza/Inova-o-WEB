import { ogSize, renderOgImage } from "@/lib/ogImage";

export const alt = "Aluguel de carros em Florianópolis - Inovação Floripa";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Locadora nos Ingleses",
    title: "Aluguel de carros em Florianópolis",
    subtitle: "Gol, Voyage e Polo revisados com atendimento rápido pelo WhatsApp.",
    photo: "assets/carros/polo.png",
    layout: "side",
  });
}
