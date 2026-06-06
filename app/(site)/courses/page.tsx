import type { Metadata } from "next";
import TransitionLink from "@/app/components/TransitionLink";

export const metadata: Metadata = {
  title: "Courses — Delta Grows",
  description:
    "Hands-on courses in sustainable agriculture, business, and financial resilience for the Mississippi Delta are coming soon.",
};

export default function CoursesPage() {
  return (
    <main className="dg-courses">
      <section className="dg-soon">
        <p className="dg-about__rule">Courses</p>
        <span className="dg-soon__badge">Coming Soon</span>
        <h1 className="dg-soon__title">
          Training programs are <span className="accent">on the way.</span>
        </h1>
        <p className="dg-soon__lead">
          We&rsquo;re building hands-on courses in sustainable agriculture,
          business planning, and financial resilience &mdash; designed for
          farmers and entrepreneurs across the Mississippi Delta. Check back
          soon, or reach out to be the first to know when enrollment opens.
        </p>
        <div className="dg-soon__actions">
          <TransitionLink href="/contact" className="dg-btn dg-btn--primary">
            Get in Touch
          </TransitionLink>
          <TransitionLink href="/gallery" className="dg-btn dg-btn--ghost">
            Watch Our Stories
          </TransitionLink>
        </div>
      </section>
    </main>
  );
}
