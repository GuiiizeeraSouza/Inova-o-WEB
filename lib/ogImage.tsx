/* eslint-disable @next/next/no-img-element -- next/og (Satori) only renders plain <img> tags */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

async function toDataUri(assetPath: string) {
  const file = await readFile(join(process.cwd(), assetPath));
  const mime = assetPath.endsWith(".png") ? "image/png" : "image/jpeg";
  return `data:${mime};base64,${file.toString("base64")}`;
}

type FontWeight = 500 | 800;

// Images are generated at build time, so fetching the font once from Google Fonts is fine;
// if the network is unavailable we fall back to next/og's built-in font
async function loadInter(weight: FontWeight) {
  try {
    const css = await (await fetch(`https://fonts.googleapis.com/css2?family=Inter:wght@${weight}`)).text();
    const url = css.match(/src: url\((.+?)\) format\('(?:truetype|opentype)'\)/)?.[1];
    if (!url) return null;
    return { name: "Inter", data: await (await fetch(url)).arrayBuffer(), weight, style: "normal" as const };
  } catch {
    return null;
  }
}

async function loadFonts() {
  const fonts = await Promise.all([loadInter(500), loadInter(800)]);
  return fonts.filter((font) => font !== null);
}

interface OgImageOptions {
  eyebrow: string;
  title: string;
  subtitle: string;
  photo: string;
  // "cover" fills the background with the photo; "side" places a cut-out image on the right
  layout: "cover" | "side";
}

export async function renderOgImage({ eyebrow, title, subtitle, photo, layout }: OgImageOptions) {
  const [photoUri, fonts] = await Promise.all([toDataUri(photo), loadFonts()]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #05142f 0%, #0a3666 55%, #1d6fb8 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {layout === "cover" ? (
          <img
            src={photoUri}
            alt=""
            width={1200}
            height={630}
            style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, width: "100%", height: "100%", objectFit: "cover" }}
          />
        ) : (
          <img
            src={photoUri}
            alt=""
            width={640}
            height={360}
            style={{ position: "absolute", right: -30, bottom: 70, width: 640, height: 360, objectFit: "contain" }}
          />
        )}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            display: "flex",
            background:
              layout === "cover"
                ? "linear-gradient(90deg, rgba(4,16,40,0.94) 0%, rgba(4,16,40,0.75) 50%, rgba(4,16,40,0.25) 100%)"
                : "linear-gradient(90deg, rgba(5,20,47,0.9) 0%, rgba(5,20,47,0.2) 70%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 72px",
            width: layout === "cover" ? 820 : 700,
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignSelf: "flex-start",
              padding: "10px 22px",
              borderRadius: 999,
              border: "2px solid rgba(103,232,249,0.45)",
              background: "rgba(103,232,249,0.14)",
              color: "#cffafe",
              fontSize: 26,
              fontWeight: 700,
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              color: "#ffffff",
              fontSize: 66,
              fontWeight: 800,
              lineHeight: 1.08,
              letterSpacing: -1.5,
            }}
          >
            {title}
          </div>
          <div style={{ display: "flex", marginTop: 24, color: "rgba(219,234,254,0.88)", fontSize: 30, lineHeight: 1.35 }}>
            {subtitle}
          </div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 40, color: "#67e8f9", fontSize: 30, fontWeight: 800 }}>
            Inovação Floripa
            <div style={{ display: "flex", marginLeft: 18, color: "rgba(255,255,255,0.7)", fontSize: 24, fontWeight: 500, whiteSpace: "nowrap" }}>
              WhatsApp (48) 99863-0435
            </div>
          </div>
        </div>
      </div>
    ),
    { ...ogSize, fonts }
  );
}

export async function renderIcon(size: number) {
  const fonts = await loadFonts();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0A2540 0%, #1d4ed8 100%)",
          borderRadius: size * 0.22,
          color: "#ffffff",
          fontSize: size * 0.62,
          fontWeight: 800,
          fontFamily: "Inter, sans-serif",
        }}
      >
        I
        <div
          style={{
            position: "absolute",
            right: size * 0.2,
            bottom: size * 0.2,
            width: size * 0.16,
            height: size * 0.16,
            borderRadius: 999,
            background: "#ef4444",
          }}
        />
      </div>
    ),
    { width: size, height: size, fonts }
  );
}
