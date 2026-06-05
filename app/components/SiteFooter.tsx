import Image from "next/image";
import Link from "next/link";
import TransitionLink from "@/app/components/TransitionLink";
import logo from "@/public/logo.webp";

export default function SiteFooter() {
  return (
    <footer className="dg-foot">
      <div className="dg-foot__top">
        <Link href="/" aria-label="Delta Grows home">
          <Image
            src={logo}
            alt="Delta Grows"
            className="dg-foot__logo"
            sizes="170px"
          />
        </Link>
        <nav className="dg-foot__nav" aria-label="Footer">
          <TransitionLink href="/about">About</TransitionLink>
          <TransitionLink href="/#courses">Courses</TransitionLink>
          <TransitionLink href="/#gallery">Gallery</TransitionLink>
          <TransitionLink href="/#resources">Resources</TransitionLink>
          <TransitionLink href="/#contact">Contact</TransitionLink>
        </nav>
      </div>
      <p className="dg-foot__bottom">
        &copy; 2026 Delta Grows &middot; Mississippi Delta &middot; Supported by
        the Walton Family Foundation
      </p>
    </footer>
  );
}
