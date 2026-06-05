import type { Metadata } from "next";
import type { CSSProperties } from "react";
import SiteHeader from "@/app/components/SiteHeader";
import GalleryStage from "@/app/components/GalleryStage";

export const metadata: Metadata = {
  title: "Gallery — Delta Grows",
  description:
    "Watch stories from the Delta Grows community — farmer training, greenhouse build-outs, and the people growing a stronger Mississippi Delta.",
};

type Video = {
  id: string;
  title: string;
  x: number; // center X, % of field
  y: number; // center Y, % of field
  size: number; // diameter in px (desktop)
};

// Delta Grows / partner videos (hosted on YouTube). Positions scatter the
// bubbles across the field; sizes vary for visual rhythm.
const VIDEOS: Video[] = [
  { id: "cgHbR9AdqK8", title: "Woman of the Year in Agriculture", x: 14, y: 16, size: 168 },
  { id: "CqZRE8JDPGo", title: "Young Family Farms", x: 40, y: 10, size: 128 },
  { id: "Z2BQb9IbTCk", title: "IATEC Farm Build-out — Spring 2025", x: 67, y: 14, size: 150 },
  { id: "RHIRiYUooU4", title: "What Can We Do for Small Farmers?", x: 88, y: 30, size: 132 },
  { id: "0tJIV0DAhjA", title: "Community Vision for a Just Future", x: 24, y: 44, size: 140 },
  { id: "N-5o8xzRI4o", title: "IATEC Farm Build-out — Summer 2025", x: 52, y: 46, size: 168 },
  { id: "GZDNZNedGcs", title: "What is IATEC?", x: 80, y: 58, size: 120 },
  { id: "mNY0xL7M4SM", title: "Pollution Discharge", x: 16, y: 74, size: 126 },
  { id: "FHTVPy5dqXE", title: "What Small Nonprofits Need to Succeed", x: 46, y: 80, size: 138 },
];

export default function GalleryPage() {
  return (
    <main className="dg-gallery">
      <SiteHeader active="Gallery" />

      <div className="dg-gallery__head">
        <p className="dg-about__rule">Gallery</p>
        <h1 className="dg-gallery__title">
          Stories from <span className="accent">the field.</span>
        </h1>
      </div>

      <GalleryStage>
        {VIDEOS.map((video, i) => (
          <button
            key={video.id}
            type="button"
            className="dg-bubble"
            data-video-id={video.id}
            data-video-title={video.title}
            aria-label={`Play: ${video.title}`}
            style={
              {
                left: `${video.x}%`,
                top: `${video.y}%`,
                "--size": `${video.size}px`,
                "--delay": `${(i % 5) * 1.6}s`,
                "--dur": `${18 + (i % 4) * 3}s`,
                "--drift": `${i % 2 ? 16 : -16}px`,
              } as CSSProperties
            }
          >
            <span className="dg-bubble__disc">
              {/* plain <img> keeps the gallery's render light so the page
                  transition isn't skipped on slower mobile devices */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                alt=""
                loading="lazy"
                decoding="async"
                className="dg-bubble__img"
              />
              <span className="dg-bubble__play" aria-hidden="true">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
            </span>
            <span className="dg-bubble__label">{video.title}</span>
          </button>
        ))}
      </GalleryStage>
    </main>
  );
}
