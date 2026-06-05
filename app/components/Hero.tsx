"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import TransitionLink from "@/app/components/TransitionLink";
import logo from "@/public/logo.webp";

/**
 * Delta Grows hero.
 *
 * Recreates the Osmo "Willem" loading effect (see hero-effect.md):
 *   1. the brand name slides up from the bottom of its container,
 *   2. a zero-width box in the middle expands, pulling the two words apart,
 *   3. the image revealed in that gap scales out to fill the viewport,
 *   4. the loader fades to reveal the hero beneath.
 *
 * Built with React phase state + CSS transitions (no GSAP), reduced-motion aware.
 */

type Phase = "intro" | "split" | "grow" | "done";

const pillars = [
  {
    title: "Educate",
    copy: "Free, hands-on education for anyone who wants to learn farming, tools, and how to own their own business.",
  },
  {
    title: "Activate",
    copy: "Practical training in sustainable agriculture, with paid opportunities alongside local Delta farms.",
  },
  {
    title: "Elevate",
    copy: "Building health, business, and generational wealth that carry on for generations across the Delta.",
  },
];

/**
 * The image revealed between the splitting words, then grown to full screen.
 * Swap this <svg> for a real photo when you have one, e.g.:
 *   <Image className="dg-reveal__media" src={fieldPhoto} alt="" fill priority />
 * `object-fit: cover` (set in CSS) makes it read as a vertical slice during the
 * split and a full image once it fills the screen — exactly like the reference.
 */
function FieldScene({ idSuffix }: { idSuffix: string }) {
  const sky = `dgSky-${idSuffix}`;
  const field = `dgField-${idSuffix}`;
  const glow = `dgGlow-${idSuffix}`;
  return (
    <svg
      className="dg-reveal__media"
      viewBox="0 0 1200 800"
      preserveAspectRatio="xMidYMid slice"
      role="img"
      aria-label="Black-and-white Mississippi Delta farmland at sunrise"
    >
      <defs>
        <linearGradient id={sky} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#9aa09c" />
          <stop offset="0.6" stopColor="#cfd3cf" />
          <stop offset="1" stopColor="#eef0ec" />
        </linearGradient>
        <linearGradient id={field} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#50504a" />
          <stop offset="1" stopColor="#1e1c19" />
        </linearGradient>
        <radialGradient id={glow} cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="1200" height="800" fill={`url(#${sky})`} />
      {/* sun glow + disc */}
      <circle cx="815" cy="298" r="250" fill={`url(#${glow})`} />
      <circle cx="815" cy="298" r="74" fill="#fcfcf9" />
      {/* distant tree line */}
      <path
        d="M0 470 Q 250 452 470 466 Q 700 482 920 458 Q 1080 446 1200 458 L 1200 488 L 0 488 Z"
        fill="#34362f"
      />
      {/* field */}
      <rect x="0" y="478" width="1200" height="322" fill={`url(#${field})`} />
      {/* furrow shading for depth */}
      <g fill="#000000" fillOpacity="0.12">
        <path d="M0 478 L1200 478 L1200 524 L0 552 Z" />
        <path d="M0 612 L1200 566 L1200 648 L0 712 Z" />
      </g>
      {/* light crop rows converging toward the horizon */}
      <g stroke="#eef0ec" strokeOpacity="0.5" strokeWidth="3">
        <path d="M600 480 L -220 810" />
        <path d="M600 480 L 90 810" />
        <path d="M600 480 L 360 810" />
        <path d="M600 480 L 600 810" />
        <path d="M600 480 L 840 810" />
        <path d="M600 480 L 1110 810" />
        <path d="M600 480 L 1420 810" />
      </g>
    </svg>
  );
}

export default function Hero() {
  const [phase, setPhase] = useState<Phase>("intro");

  useEffect(() => {
    const prefersReducedMotion =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
      setPhase("done");
      return;
    }

    const timers = [
      window.setTimeout(() => setPhase("split"), 1150), // open the thumbnail
      window.setTimeout(() => setPhase("grow"), 3500), // hold ~1.5s, then expand
      window.setTimeout(() => setPhase("done"), 5200),
    ];

    return () => timers.forEach(window.clearTimeout);
  }, []);

  return (
    <section className={`dg-hero dg-hero--${phase}`}>
      {/* Persistent background the reveal lands on, so the image stays */}
      <div className="dg-hero__bg" aria-hidden="true">
        <FieldScene idSuffix="bg" />
        <div className="dg-hero__scrim" />
      </div>

      {/* Loading overlay: slide up → split → reveal → grow */}
      {phase !== "done" && (
        <div className="dg-loader" aria-hidden="true">
          <div className="dg-loader__logo">
            <span className="dg-loader__half dg-loader__half--top">
              <Image
                src={logo}
                alt=""
                className="dg-logo-img"
                priority
                sizes="340px"
              />
            </span>

            <span className="dg-loader__box">
              <span className="dg-reveal">
                <FieldScene idSuffix="load" />
              </span>
            </span>

            <span className="dg-loader__half dg-loader__half--bottom">
              <Image
                src={logo}
                alt=""
                className="dg-logo-img"
                priority
                sizes="340px"
              />
            </span>
          </div>
        </div>
      )}

      {/* Actual hero content, revealed underneath the loader */}
      <div className="dg-hero__content">
        <header className="dg-nav">
          <a className="dg-nav__brand" href="#top" aria-label="Delta Grows home">
            <Image
              src={logo}
              alt="Delta Grows"
              priority
              className="dg-nav__logo"
              sizes="160px"
            />
          </a>
          <nav className="dg-nav__links" aria-label="Primary">
            <TransitionLink href="/about">About</TransitionLink>
            <a href="#courses">Courses</a>
            <a href="#gallery">Gallery</a>
            <a href="#resources">Resources</a>
            <a href="#contact" className="dg-nav__cta">
              Contact
            </a>
          </nav>
        </header>

        <div className="dg-hero__main">
          <p className="dg-hero__eyebrow">
            Mississippi Delta &middot; Regenerative Agriculture
          </p>
          <h1 className="dg-hero__title">
            Empowering Delta farmers with sustainable agriculture, business
            training, and{" "}
            <span className="dg-hero__accent">generational wealth.</span>
          </h1>
          <p className="dg-hero__copy">
            Delta Grows equips farmers, aspiring entrepreneurs, and community
            members with real-world training in agriculture, business planning,
            and financial resilience &mdash; one farmer at a time.
          </p>

          <div className="dg-hero__actions">
            <a href="#courses" className="dg-btn dg-btn--primary">
              Explore Courses
            </a>
            <a href="#contact" className="dg-btn dg-btn--ghost">
              Support the Mission
            </a>
          </div>

          <p className="dg-hero__trust">
            Supported by the <strong>Walton Family Foundation</strong>
          </p>
        </div>

        <ul className="dg-pillars">
          {pillars.map((pillar) => (
            <li key={pillar.title} className="dg-pillar">
              <span className="dg-pillar__title">{pillar.title}</span>
              <span className="dg-pillar__copy">{pillar.copy}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
