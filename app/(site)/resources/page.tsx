import type { Metadata } from "next";
import TransitionLink from "@/app/components/TransitionLink";

export const metadata: Metadata = {
  title: "Resources — Delta Grows",
  description:
    "Read the work: Delta Grows initiative documents, reports, and partnerships — open for farmers, funders, and the community.",
};

type Doc = {
  title: string;
  desc: string;
  href: string;
  type: "PDF" | "DOC";
  meta: string;
  action: "view" | "download";
};

const docs: Doc[] = [
  {
    title: "Regenerating the Delta: From the Ground Up",
    desc: "Our flagship report — an intersectional approach to recidivism reduction, economic autonomy, and sustainable agriculture, in collaboration with CSAEC and the research of David J. Jefferson.",
    href: "/documents/regenerating-the-delta.pdf",
    type: "PDF",
    meta: "15-page report",
    action: "view",
  },
  {
    title: "Delta Grows Initiative — Year 2",
    desc: "Mission, overview, and objectives: revitalizing the Mississippi Delta through sustainable agriculture, food security, and community-driven environmental stewardship.",
    href: "/documents/delta-grows-initiative-year-2.docx",
    type: "DOC",
    meta: "Initiative brief",
    action: "download",
  },
  {
    title: "2025 Partnerships Matrix",
    desc: "The partners, funders, and collaborators powering Delta Grows across the region — and where the work is headed next.",
    href: "/documents/delta-grows-partnerships-matrix-2025.docx",
    type: "DOC",
    meta: "Partnerships",
    action: "download",
  },
];

function DocIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M6 2h8l4 4v16H6z" />
      <path d="M14 2v4h4" />
      <path d="M9 13h6M9 17h6M9 9h2" />
    </svg>
  );
}

function ActionIcon({ action }: { action: Doc["action"] }) {
  return action === "download" ? (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 3v11m0 0l4-4m-4 4l-4-4M5 21h14" />
    </svg>
  ) : (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M8 16L17 7M9 7h8v8" />
    </svg>
  );
}

export default function ResourcesPage() {
  return (
    <main className="dg-res">
      <div className="dg-res__head">
        <p className="dg-about__rule">Resources</p>
        <h1 className="dg-res__title">
          Read the <span className="accent">work.</span>
        </h1>
        <p className="dg-res__lead">
          Our initiative documents, reports, and partnerships &mdash; open for
          farmers, funders, and anyone who wants to dig in.
        </p>
      </div>

      <ul className="dg-res__grid">
        {docs.map((doc) => (
          <li key={doc.href} className="dg-doc">
            <div className="dg-doc__top">
              <span className="dg-doc__icon">
                <DocIcon />
              </span>
              <span className="dg-doc__type">{doc.type}</span>
            </div>
            <h2 className="dg-doc__title">{doc.title}</h2>
            <p className="dg-doc__desc">{doc.desc}</p>
            <div className="dg-doc__foot">
              <span className="dg-doc__meta">{doc.meta}</span>
              <a
                className="dg-doc__btn"
                href={doc.href}
                {...(doc.action === "download"
                  ? { download: "" }
                  : { target: "_blank", rel: "noopener noreferrer" })}
              >
                {doc.action === "download" ? "Download" : "View"}
                <ActionIcon action={doc.action} />
              </a>
            </div>
          </li>
        ))}
      </ul>

      <p className="dg-res__more">
        Looking for video stories instead?{" "}
        <TransitionLink href="/gallery">Visit the Gallery &rarr;</TransitionLink>
      </p>
    </main>
  );
}
