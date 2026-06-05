"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import TransitionLink from "@/app/components/TransitionLink";
import logo from "@/public/logo.webp";
import heroImage from "@/public/images/hands-hold-plant.jpeg";

// Runs before paint on the client so return visits never flash the loader.
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

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

export default function Hero() {
  const [phase, setPhase] = useState<Phase>("intro");

  useIsomorphicLayoutEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let seen = false;
    try {
      seen = sessionStorage.getItem("dg-hero-intro") === "1";
    } catch {}

    // Cinematic intro plays once per session (first visit). On return visits we
    // jump straight to the hero — the page just opens from the center via the
    // normal navigation transition.
    if (reduce || seen) {
      setPhase("done");
      return;
    }

    try {
      sessionStorage.setItem("dg-hero-intro", "1");
    } catch {}

    const timers = [
      window.setTimeout(() => setPhase("split"), 800), // open the thumbnail
      window.setTimeout(() => setPhase("grow"), 1850), // hold ~0.5s, then expand
      window.setTimeout(() => setPhase("done"), 2950),
    ];

    return () => timers.forEach(window.clearTimeout);
  }, []);

  return (
    <section className={`dg-hero dg-hero--${phase}`}>
      {/* Persistent background the reveal lands on, so the image stays */}
      <div className="dg-hero__bg" aria-hidden="true">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          className="dg-reveal__media"
          sizes="100vw"
        />
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
                <Image
                  src={heroImage}
                  alt=""
                  fill
                  priority
                  className="dg-reveal__media"
                  sizes="340px"
                />
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
            <TransitionLink href="/gallery">Gallery</TransitionLink>
            <TransitionLink href="/resources">Resources</TransitionLink>
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
