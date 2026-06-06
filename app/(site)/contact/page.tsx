import type { Metadata } from "next";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Delta Grows",
  description:
    "Get in touch with Delta Grows — questions, partnerships, or support for sustainable agriculture training in the Mississippi Delta.",
};

// TODO: confirm the real contact address and social links.
const CONTACT_EMAIL = "info@deltagrows.org";
const SOCIALS = [
  { label: "Facebook", href: "#", Icon: Facebook },
  { label: "Instagram", href: "#", Icon: Instagram },
  { label: "LinkedIn", href: "#", Icon: Linkedin },
];

export default function ContactPage() {
  return (
    <main className="dg-contact">
      <div className="dg-contact__head">
        <p className="dg-about__rule">Contact</p>
        <h1 className="dg-contact__title">
          Let&rsquo;s grow <span className="accent">together.</span>
        </h1>
        <p className="dg-contact__lead">
          Questions, partnerships, or want to support the work? Reach out
          &mdash; we&rsquo;d love to hear from you.
        </p>
      </div>

      <div className="dg-contact__grid">
        <div className="dg-contact__formwrap">
          <ContactForm />
        </div>

        <aside className="dg-contact__aside">
          <div className="dg-contact__card">
            <h2>Reach us directly</h2>
            <a className="dg-contact__email" href={`mailto:${CONTACT_EMAIL}`}>
              {CONTACT_EMAIL}
            </a>
            <p className="dg-contact__note">
              Delta Grows is an initiative of the Center for Sustainable
              Agricultural Excellence &amp; Conservation, a 501(c)(3) nonprofit.
            </p>
          </div>

          <div className="dg-contact__card">
            <h2>Follow along</h2>
            <div className="dg-social">
              {SOCIALS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  className="dg-social__link"
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon strokeWidth={2} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}
