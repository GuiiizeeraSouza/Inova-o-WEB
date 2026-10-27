// Single source of truth for business data (NAP) used by the UI, metadata and structured data.
// Keep it consistent with the Google Business Profile: search engines cross-check these values.

export const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.inovacaocarros.com.br"
).replace(/\/$/, "");

// GA4 measurement ID ("G-XXXXXXXXXX"). Universal Analytics IDs ("UA-...") no longer collect data.
export const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

export const business = {
  name: "Inovação Floripa",
  alternateNames: ["Inovação Carros", "Inovação Rent a Car", "Inovação Passeios"],
  foundingYear: "2015",
  phoneDisplay: "(48) 99863-0435",
  phoneE164: "+5548998630435",
  whatsappNumber: "5548998630435",
  emails: {
    cars: "inovacaoaluguelcarros@gmail.com",
    tours: "inovacaopasseios@gmail.com",
  },
  address: {
    street: "Estrada Dom João Becker, 145, Loja L2 (Shopping Barra Norte)",
    neighborhood: "Ingleses",
    city: "Florianópolis",
    region: "SC",
    postalCode: "88058-600",
    country: "BR",
  },
  openingHours: {
    label: "Seg a Sáb, das 09:00 às 18:00",
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "09:00",
    closes: "18:00",
  },
  purchaseSiteUrl: "https://www.inovacaofloripa.com.br/",
  social: {
    instagram: "https://www.instagram.com/inovacaofloripa/",
    facebook: "https://www.facebook.com/InovacaoRentACar",
    tripadvisor:
      "https://www.tripadvisor.com.br/Attraction_Review-g303576-d23071396-Reviews-Inovacao_Floripa-Florianopolis_State_of_Santa_Catarina.html",
  },
} as const;

export const fullAddress = `${business.address.street}, ${business.address.neighborhood}, ${business.address.city} - ${business.address.region}, CEP ${business.address.postalCode}`;

export const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  `Inovação Floripa, ${fullAddress}`
)}`;

export function whatsappLink(message?: string) {
  const base = `https://wa.me/${business.whatsappNumber}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function absoluteUrl(path: string) {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
