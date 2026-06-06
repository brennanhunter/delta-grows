import { ImageResponse } from "next/og";

// Branded 1200x630 share card. Auto-wired by Next as both og:image and
// twitter:image for every route (until a route defines its own).
export const alt =
  "Delta Grows — Empowering the Mississippi Delta, one farmer at a time";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "#f4ecd9",
          color: "#15120e",
          padding: "72px",
          justifyContent: "space-between",
          fontFamily: "sans-serif",
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: "18px" }}>
          <div
            style={{
              display: "flex",
              width: "48px",
              height: "48px",
              background: "#589f95",
              border: "4px solid #15120e",
              borderRadius: "12px",
            }}
          />
          <div style={{ display: "flex", fontSize: "36px", fontWeight: 800 }}>
            Delta Grows
          </div>
        </div>

        {/* Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "26px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "74px",
              fontWeight: 800,
              lineHeight: 1.05,
              maxWidth: "980px",
            }}
          >
            Empowering the Mississippi Delta, one farmer at a time.
          </div>
          <div
            style={{
              display: "flex",
              fontSize: "32px",
              color: "#3a342b",
              maxWidth: "900px",
            }}
          >
            Sustainable agriculture, business training, and generational wealth.
          </div>
        </div>

        {/* Funder credit */}
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              background: "#bd5905",
              color: "#ffffff",
              fontSize: "24px",
              fontWeight: 700,
              padding: "12px 22px",
              border: "3px solid #15120e",
              borderRadius: "8px",
            }}
          >
            Supported by the Walton Family Foundation
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
