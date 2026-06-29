"use client";

import { useEffect, useState } from "react";
import TransitionLink from "@/app/components/TransitionLink";

const links = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
  { href: "/contact", label: "Contact" },
];

/**
 * Mobile hamburger + slide-out drawer. The inline nav (`.dg-mast__nav` /
 * `.dg-nav__links`) is hidden on small screens via CSS; this takes over.
 */
export default function MobileMenu({ active }: { active?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        type="button"
        className="dg-burger"
        aria-label="Open menu"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        <span />
        <span />
        <span />
      </button>

      <div className={`dg-drawer-root${open ? " is-open" : ""}`}>
        <div className="dg-drawer__backdrop" onClick={() => setOpen(false)} />
        <nav className="dg-drawer" aria-label="Menu" aria-hidden={!open}>
          <button
            type="button"
            className="dg-drawer__close"
            aria-label="Close menu"
            onClick={() => setOpen(false)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          <div className="dg-drawer__links">
            {links.map((link) => (
              <TransitionLink
                key={link.href}
                href={link.href}
                className={
                  active === link.label ? "is-active" : undefined
                }
                aria-current={active === link.label ? "page" : undefined}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </TransitionLink>
            ))}
          </div>

          <TransitionLink
            href="/donate"
            className="dg-drawer__donate"
            onClick={() => setOpen(false)}
          >
            Donate
          </TransitionLink>
        </nav>
      </div>
    </>
  );
}
