import { ogSize, renderOgImage } from "@/lib/ogImage";

export const alt = "Passeios em Florianópolis - Inovação Floripa";
export const size = ogSize;
export const contentType = "image/png";

export default function OpengraphImage() {
  return renderOgImage({
    eyebrow: "Passeios e excursões",
    title: "Passeios em Florianópolis",
    subtitle: "Beto Carrero, Ilha do Campeche, Balneário Camboriú, Blumenau e transfer do aeroporto.",
    photo: "assets/passeios/ponte.jpg",
    layout: "cover",
  });
}
