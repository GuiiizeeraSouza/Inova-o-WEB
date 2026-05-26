import { NextResponse } from "next/server";

interface GoogleReview {
  rating?: number;
  text?: { text?: string };
  authorAttribution?: {
    displayName?: string;
  };
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return NextResponse.json(
      {
        error:
          "Configuração ausente. Defina GOOGLE_PLACES_API_KEY e GOOGLE_PLACE_ID no ambiente.",
      },
      { status: 500 }
    );
  }

  const endpoint = `https://places.googleapis.com/v1/places/${placeId}?languageCode=pt-BR`;

  try {
    const response = await fetch(endpoint, {
      headers: {
        "X-Goog-Api-Key": apiKey,
        "X-Goog-FieldMask": "reviews,rating,userRatingCount,displayName",
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      const details = await response.text();
      return NextResponse.json(
        { error: "Falha ao consultar Google Places.", details },
        { status: response.status }
      );
    }

    const place = await response.json();
    const reviews: GoogleReview[] = Array.isArray(place.reviews) ? place.reviews : [];

    const positiveReviews = reviews
      .filter((review) => (review.rating ?? 0) >= 4 && review.text?.text)
      .slice(0, 6)
      .map((review, index) => ({
        id: `${review.authorAttribution?.displayName ?? "cliente"}-${index}`,
        name: review.authorAttribution?.displayName ?? "Cliente Google",
        rating: review.rating ?? 5,
        text: review.text?.text ?? "",
        location: "Google Avaliações",
      }));

    return NextResponse.json({
      sourceName: place.displayName?.text ?? "Google",
      averageRating: place.rating ?? 0,
      totalRatings: place.userRatingCount ?? 0,
      reviews: positiveReviews,
    });
  } catch (error) {
    return NextResponse.json(
      {
        error: "Erro inesperado ao consultar Google Places.",
        details: error instanceof Error ? error.message : "unknown",
      },
      { status: 500 }
    );
  }
}
