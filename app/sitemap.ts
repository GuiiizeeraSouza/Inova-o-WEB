import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";
import { tours } from "@/lib/tours";
import golImg from "@/assets/carros/gol.png";
import voyageImg from "@/assets/carros/voyage.png";
import poloImg from "@/assets/carros/polo.png";
import betoImage from "@/assets/passeios/BetoCarreiro/beto.jpg";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return [
    {
      url: absoluteUrl("/"),
      lastModified,
      changeFrequency: "weekly",
      priority: 1,
      images: [golImg, voyageImg, poloImg].map((image) => absoluteUrl(image.src)),
    },
    {
      url: absoluteUrl("/passeios"),
      lastModified,
      changeFrequency: "weekly",
      priority: 0.9,
      images: [betoImage, ...tours.map((tour) => tour.image)].map((image) => absoluteUrl(image.src)),
      videos: [
        {
          title: "Como comprar passeios em Florianópolis na loja online",
          description:
            "Veja como escolher e reservar passeios e excursões saindo de Florianópolis na loja online da Inovação Floripa.",
          thumbnail_loc: absoluteUrl("/passeios/opengraph-image"),
          content_loc: absoluteUrl("/videos/inovacaoVideo.mp4"),
        },
      ],
    },
  ];
}
