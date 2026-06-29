import Image from "next/image";
import TransitionLink from "@/app/components/TransitionLink";
import logo from "@/public/logo.webp";
import waltonLogo from "@/public/Walton_Family_Foundation_logo.svg.png";

export default function SiteFooter() {
  return (
    <footer className="dg-foot">
      <div className="dg-foot__top">
        <TransitionLink href="/" aria-label="Delta Grows home">
          <Image
            src={logo}
            alt="Delta Grows"
            className="dg-foot__logo"
            sizes="170px"
          />
        </TransitionLink>
        <nav className="dg-foot__nav" aria-label="Footer">
          <TransitionLink href="/about">About</TransitionLink>
          <TransitionLink href="/courses">Courses</TransitionLink>
          <TransitionLink href="/gallery">Gallery</TransitionLink>
          <TransitionLink href="/resources">Resources</TransitionLink>
          <TransitionLink href="/contact">Contact</TransitionLink>
          <TransitionLink href="/donate">Donate</TransitionLink>
        </nav>
      </div>
      <div className="dg-foot__supporter">
        <span>Supported by</span>
        <span className="dg-foot__waltonchip">
          <Image
            src={waltonLogo}
            alt="Walton Family Foundation"
            className="dg-foot__waltonimg"
            sizes="200px"
          />
        </span>
      </div>
      <p className="dg-foot__bottom">
        &copy; 2026 Delta Grows &middot; Mississippi Delta
      </p>
    </footer>
  );
}
