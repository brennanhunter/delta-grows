"use client";

import { useEffect, useState } from "react";
import type { MouseEvent, ReactNode } from "react";

type Active = { id: string; title: string } | null;

/**
 * Thin client wrapper for the Gallery. The bubble grid itself is server-rendered
 * (passed in as `children`) so navigating to /gallery commits instantly and the
 * page transition isn't skipped on slower devices. This wrapper only adds the
 * click-to-play behavior (via event delegation) and the center stage.
 */
export default function GalleryStage({ children }: { children: ReactNode }) {
  const [active, setActive] = useState<Active>(null);

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

  const onFieldClick = (e: MouseEvent<HTMLDivElement>) => {
    const bubble = (e.target as HTMLElement).closest<HTMLElement>(
      "[data-video-id]",
    );
    if (!bubble) return;
    const { videoId, videoTitle } = bubble.dataset;
    if (videoId) setActive({ id: videoId, title: videoTitle ?? "" });
  };

  return (
    <section className="dg-bubbles">
      <p className="dg-bubbles__hint">
        Tap any bubble to bring it center stage and play.
      </p>

      <div className="dg-bubbles__field" onClick={onFieldClick}>
        {children}
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
