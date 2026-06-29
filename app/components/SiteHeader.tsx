"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import TransitionLink from "@/app/components/TransitionLink";
import MobileMenu from "@/app/components/MobileMenu";
import logo from "@/public/logo.webp";

const links = [
  { href: "/about", label: "About" },
  { href: "/courses", label: "Courses" },
  { href: "/gallery", label: "Gallery" },
  { href: "/resources", label: "Resources" },
];

/**
 * Newspaper-style masthead used on standard (non-home) pages. Rendered once in
 * the shared (site) layout; it figures out the active link from the URL.
 */
export default function SiteHeader() {
  const pathname = usePathname();
  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);
  const activeLabel = links.find((link) => isActive(link.href))?.label;

  return (
    <header className="dg-mast">
      <div className="dg-mast__bar">
        <TransitionLink
          href="/"
          className="dg-mast__brand"
          aria-label="Delta Grows home"
        >
          <Image
            src={logo}
            alt="Delta Grows"
            className="dg-mast__logo"
            priority
            sizes="150px"
          />
        </TransitionLink>
        <nav className="dg-mast__nav" aria-label="Primary">
          {links.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className={isActive(link.href) ? "is-active" : undefined}
              aria-current={isActive(link.href) ? "page" : undefined}
            >
              {link.label}
            </TransitionLink>
          ))}
          <TransitionLink href="/contact" className="dg-mast__cta">
            Contact
          </TransitionLink>
          <TransitionLink href="/donate" className="dg-mast__donate">
            Donate
          </TransitionLink>
        </nav>
        <div className="dg-mast__end">
          <TransitionLink href="/donate" className="dg-mast__donate">
            Donate
          </TransitionLink>
          <MobileMenu active={activeLabel} />
        </div>
      </div>
      <div className="dg-mast__tagline">
        <span>Mississippi Delta</span>
        <span>Empowering one farmer at a time</span>
        <span>Sustainable agriculture &middot; Business &middot; Wealth</span>
      </div>
    </header>
  );
}
