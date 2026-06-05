"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import type { ComponentProps, MouseEvent } from "react";

type DocumentWithVT = Document & {
  startViewTransition?: (callback: () => void) => { finished: Promise<void> };
};

/**
 * Drop-in replacement for next/link that plays the center-split view
 * transition when navigating to any non-home page. Navigations to "/" (the
 * home page, which has its own hero intro), same-page hashes, external links,
 * and modified/new-tab clicks all use normal routing.
 */
export default function TransitionLink({
  href,
  onClick,
  ...rest
}: ComponentProps<typeof Link>) {
  const router = useRouter();

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(event);

    if (
      event.defaultPrevented ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      event.button !== 0
    ) {
      return; // let the browser handle new-tab / modified clicks
    }

    const target = typeof href === "string" ? href : href.toString();
    if (!target || target.startsWith("#")) return; // same-page anchor

    let dest: URL;
    try {
      dest = new URL(target, window.location.href);
    } catch {
      return;
    }

    if (dest.origin !== window.location.origin) return; // external
    if (dest.pathname === "/") return; // navigating to home → no split
    if (dest.pathname === window.location.pathname) return; // same page

    const doc = document as DocumentWithVT;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!doc.startViewTransition || reduce) return; // normal navigation

    event.preventDefault();
    doc.startViewTransition(() =>
      router.push(dest.pathname + dest.search + dest.hash),
    );
  };

  return <Link href={href} onClick={handleClick} {...rest} />;
}
