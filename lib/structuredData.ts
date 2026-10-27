import type { FaqItem } from "@/lib/faq";
import type { Tour } from "@/lib/tours";
import { SITE_URL, absoluteUrl, business, mapsUrl } from "@/lib/site";

type JsonLdNode = Record<string, unknown>;

const ids = {
  website: `${SITE_URL}/#website`,
  organization: `${SITE_URL}/#organizacao`,
  carRental: `${SITE_URL}/#locadora`,
  travelAgency: `${SITE_URL}/passeios#agencia`,
};

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: business.address.street,
  addressLocality: business.address.city,
  addressRegion: business.address.region,
  postalCode: business.address.postalCode,
  addressCountry: business.address.country,
};

const openingHoursSpecification = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: business.openingHours.days,
  opens: business.openingHours.opens,
  closes: business.openingHours.closes,
};

const areaServed = [
  { "@type": "City", name: "Florianópolis" },
  { "@type": "State", name: "Santa Catarina" },
];

const sameAs = [
  business.social.instagram,
  business.social.facebook,
  business.social.tripadvisor,
  business.purchaseSiteUrl,
];

function localBusiness(type: string, id: string, extra: JsonLdNode): JsonLdNode {
  return {
    "@type": type,
    "@id": id,
    name: business.name,
    alternateName: business.alternateNames,
    parentOrganization: { "@id": ids.organization },
    telephone: business.phoneE164,
    email: business.email,
    address: postalAddress,
    hasMap: mapsUrl,
    openingHoursSpecification,
    areaServed,
    sameAs,
    ...extra,
  };
}

const website: JsonLdNode = {
  "@type": "WebSite",
  "@id": ids.website,
  url: SITE_URL,
  name: business.name,
  alternateName: business.alternateNames,
  inLanguage: "pt-BR",
  publisher: { "@id": ids.organization },
};

const organization: JsonLdNode = {
  "@type": "Organization",
  "@id": ids.organization,
  name: business.name,
  alternateName: business.alternateNames,
  url: SITE_URL,
  logo: absoluteUrl("/icon"),
  foundingDate: business.foundingYear,
  email: business.email,
  telephone: business.phoneE164,
  address: postalAddress,
  sameAs,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: business.phoneE164,
    contactType: "customer service",
    availableLanguage: "Portuguese",
    areaServed: "BR",
  },
};

function faqPage(url: string, items: FaqItem[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${url}#faq`,
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

function webPage(url: string, name: string, description: string, aboutId: string): JsonLdNode {
  return {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name,
    description,
    inLanguage: "pt-BR",
    isPartOf: { "@id": ids.website },
    about: { "@id": aboutId },
  };
}

export function homeJsonLd(page: { title: string; description: string; faq: FaqItem[]; cars: string[] }) {
  const url = absoluteUrl("/");

  return {
    "@context": "https://schema.org",
    "@graph": [
      website,
      organization,
      localBusiness("AutoRental", ids.carRental, {
        url,
        description: page.description,
        image: absoluteUrl("/opengraph-image"),
        makesOffer: page.cars.map((car) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: `Aluguel de ${car} em Florianópolis`,
          },
        })),
      }),
      webPage(url, page.title, page.description, ids.carRental),
      faqPage(url, page.faq),
    ],
  };
}

export function toursJsonLd(page: {
  title: string;
  description: string;
  faq: FaqItem[];
  tours: Tour[];
  featuredTour: { name: string; description: string; image: string };
}) {
  const url = absoluteUrl("/passeios");
  const provider = { "@id": ids.travelAgency };

  const trips = [
    {
      "@type": "TouristTrip",
      name: page.featuredTour.name,
      description: page.featuredTour.description,
      image: absoluteUrl(page.featuredTour.image),
      url: `${url}#beto-carrero`,
      provider,
      offers: {
        "@type": "Offer",
        url: business.purchaseSiteUrl,
        availability: "https://schema.org/InStock",
      },
    },
    ...page.tours.map((tour) => ({
      "@type": "TouristTrip",
      name: tour.title,
      description: tour.details,
      image: absoluteUrl(tour.image.src),
      url: `${url}#experiencias`,
      touristType: tour.idealFor,
      provider,
    })),
  ];

  return {
    "@context": "https://schema.org",
    "@graph": [
      website,
      organization,
      localBusiness("TravelAgency", ids.travelAgency, {
        url,
        description: page.description,
        image: absoluteUrl("/passeios/opengraph-image"),
      }),
      webPage(url, page.title, page.description, ids.travelAgency),
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Início", item: absoluteUrl("/") },
          { "@type": "ListItem", position: 2, name: "Passeios em Florianópolis", item: url },
        ],
      },
      {
        "@type": "ItemList",
        name: "Passeios e excursões saindo de Florianópolis",
        itemListElement: trips.map((trip, index) => ({
          "@type": "ListItem",
          position: index + 1,
          item: trip,
        })),
      },
      faqPage(url, page.faq),
    ],
  };
}
