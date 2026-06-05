import Image from "next/image";
import Link from "next/link";
import TransitionLink from "@/app/components/TransitionLink";
import logo from "@/public/logo.webp";

const links = [
  { href: "/about", label: "About" },
  { href: "/#courses", label: "Courses" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/#resources", label: "Resources" },
];

/**
 * Newspaper-style masthead used on standard (non-hero) pages.
 * `active` matches a link label to mark the current page.
 */
export default function SiteHeader({ active }: { active?: string }) {
  return (
    <header className="dg-mast">
      <div className="dg-mast__bar">
        <Link href="/" className="dg-mast__brand" aria-label="Delta Grows home">
          <Image
            src={logo}
            alt="Delta Grows"
            className="dg-mast__logo"
            priority
            sizes="150px"
          />
        </Link>
        <nav className="dg-mast__nav" aria-label="Primary">
          {links.map((link) => (
            <TransitionLink
              key={link.href}
              href={link.href}
              className={active === link.label ? "is-active" : undefined}
              aria-current={active === link.label ? "page" : undefined}
            >
              {link.label}
            </TransitionLink>
          ))}
          <TransitionLink href="/#contact" className="dg-mast__cta">
            Contact
          </TransitionLink>
        </nav>
      </div>
      <div className="dg-mast__tagline">
        <span>Mississippi Delta</span>
        <span>Empowering one farmer at a time</span>
        <span>Sustainable agriculture &middot; Business &middot; Wealth</span>
      </div>
    </header>
  );
}
