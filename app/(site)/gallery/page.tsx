import type { Metadata } from "next";
import type { CSSProperties } from "react";
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
  { id: "cgHbR9AdqK8", title: "Woman of the Year in Agriculture", x: 18, y: 18, size: 168 },
  { id: "CqZRE8JDPGo", title: "Young Family Farms", x: 55, y: 14, size: 134 },
  { id: "RHIRiYUooU4", title: "What Can We Do for Small Farmers?", x: 84, y: 28, size: 146 },
  { id: "0tJIV0DAhjA", title: "Community Vision for a Just Future", x: 26, y: 58, size: 142 },
  { id: "mNY0xL7M4SM", title: "Pollution Discharge", x: 60, y: 62, size: 162 },
  { id: "FHTVPy5dqXE", title: "What Small Nonprofits Need to Succeed", x: 86, y: 70, size: 126 },
];

export default function GalleryPage() {
  return (
    <main className="dg-gallery">
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
