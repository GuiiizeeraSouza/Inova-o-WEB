import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${business.name} | Aluguel de Carros e Passeios em Florianópolis`,
    short_name: business.name,
    description: "Aluguel de carros, passeios e transfer em Florianópolis.",
    start_url: "/",
    display: "standalone",
    background_color: "#0A2540",
    theme_color: "#0A2540",
    lang: "pt-BR",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
