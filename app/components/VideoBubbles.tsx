"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import type { CSSProperties } from "react";

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

export default function VideoBubbles() {
  const [active, setActive] = useState<Video | null>(null);

  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [active]);

  return (
    <section className="dg-bubbles">
      <p className="dg-bubbles__hint">
        Tap any bubble to bring it center stage and play.
      </p>

      <div className="dg-bubbles__field">
        {VIDEOS.map((video, i) => (
          <button
            key={video.id}
            type="button"
            className="dg-bubble"
            aria-label={`Play: ${video.title}`}
            onClick={() => setActive(video)}
            style={
              {
                left: `${video.x}%`,
                top: `${video.y}%`,
                "--size": `${video.size}px`,
                "--delay": `${(i % 5) * 0.6}s`,
                "--dur": `${6 + (i % 4)}s`,
                "--drift": `${i % 2 ? 10 : -10}px`,
              } as CSSProperties
            }
          >
            <span className="dg-bubble__disc">
              <Image
                src={`https://i.ytimg.com/vi/${video.id}/mqdefault.jpg`}
                alt=""
                fill
                sizes="170px"
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
      </div>

      {active && (
        <div
          className="dg-stage"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={() => setActive(null)}
        >
          <div className="dg-stage__inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="dg-stage__close"
              aria-label="Close video"
              onClick={() => setActive(null)}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
            <div className="dg-stage__frame">
              <iframe
                src={`https://www.youtube.com/embed/${active.id}?autoplay=1&rel=0&playsinline=1`}
                title={active.title}
                allow="autoplay; encrypted-media; picture-in-picture; web-share; fullscreen"
                allowFullScreen
              />
            </div>
            <p className="dg-stage__title">{active.title}</p>
          </div>
        </div>
      )}
    </section>
  );
}
