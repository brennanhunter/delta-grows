import type { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import TransitionLink from "@/app/components/TransitionLink";

export const metadata: Metadata = {
  title: "Page Not Found — Delta Grows",
};

export default function NotFound() {
  return (
    <main className="dg-notfound">
      <SiteHeader />

      <section className="dg-soon">
        <p className="dg-about__rule">Page not found</p>
        <p className="dg-soon__num">404</p>
        <h1 className="dg-soon__title">
          This field hasn&rsquo;t been{" "}
          <span className="accent">planted yet.</span>
        </h1>
        <p className="dg-soon__lead">
          The page you&rsquo;re looking for doesn&rsquo;t exist or may have
          moved. Let&rsquo;s get you back on solid ground.
        </p>
        <div className="dg-soon__actions">
          <TransitionLink href="/" className="dg-btn dg-btn--primary">
            Back Home
          </TransitionLink>
          <TransitionLink href="/gallery" className="dg-btn dg-btn--ghost">
            Watch Our Stories
          </TransitionLink>
        </div>
      </section>
    </main>
  );
}
