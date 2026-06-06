import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import aboutImage from "@/public/relevant_docs/current_site/about_us/about-image.png";
import waltonLogo from "@/public/Walton_Family_Foundation_logo.svg.png";

export const metadata: Metadata = {
  title: "About Us — Delta Grows",
  description:
    "Delta Grows equips people in the Mississippi Delta with hands-on training in agriculture, business, and finance — breaking cycles of poverty and building generational wealth.",
};

const cards = [
  {
    title: "Hands-on Training",
    copy: "From crop management to running a business, we deliver real-world, practical education for anyone who wants to learn.",
  },
  {
    title: "Access to Capital",
    copy: "We help participants with business planning and access to the capital and networks they need to start or expand.",
  },
  {
    title: "Mentorship & Community",
    copy: "Led by farmers, business leaders, and financial experts who pass knowledge on to the next generation.",
  },
];

export default function AboutPage() {
  return (
    <main className="dg-about">
      <article className="dg-about__wrap">
        <p className="dg-about__rule">About Us</p>

        <h1 className="dg-about__title">
          Empowering the Mississippi Delta,{" "}
          <span className="accent">one farmer at a time.</span>
        </h1>

        <div className="dg-about__top">
          <div className="dg-about__lead">
            <p className="dropcap">
              Welcome to Delta Grows. We are dedicated to empowering the people
              of the Mississippi Delta to learn about farming, running a
              business, and creating generational wealth.
            </p>
            <p>
              Delta Grows equips individuals with the tools to farm smarter,
              build businesses, and grow generational wealth. Rooted in
              community, our mission is to break cycles of poverty by delivering
              real-world training in agriculture, entrepreneurship, and
              financial resilience.
            </p>
            <div className="dg-about__supporter">
              <span className="dg-about__supporter-label">Supported by</span>
              <Image
                src={waltonLogo}
                alt="Walton Family Foundation"
                className="dg-about__waltonlogo"
                sizes="280px"
              />
            </div>
          </div>

          <figure className="dg-about__figure">
            <Image
              src={aboutImage}
              alt="Delta Grows participants standing together inside a community hoop house"
              className="dg-about__img"
              sizes="(max-width: 820px) 100vw, 440px"
              placeholder="blur"
            />
            <figcaption>
              Delta Grows participants in the community hoop house, Mississippi
              Delta.
            </figcaption>
          </figure>
        </div>

        <blockquote className="dg-about__quote">
          We don&rsquo;t just grow food &mdash;{" "}
          <span className="accent">we grow futures.</span>
        </blockquote>

        <div className="dg-about__body">
          <p>
            From hands-on crop management to business planning and access to
            capital, our programs are tailored to meet the unique needs of this
            region. Led by farmers, business leaders, and financial experts, we
            provide mentorship and education that fuel real economic
            opportunity.
          </p>
          <p>
            In addition to our educational programs, we provide resources and
            support for those looking to start or expand their own businesses.
            We offer assistance with business planning, access to capital, and
            networking opportunities to help our participants achieve their
            entrepreneurial goals.
          </p>
          <p>
            We believe that by empowering individuals to create their own
            opportunities, we can help break the cycle of poverty and create a
            brighter future for the Mississippi Delta region. Our ultimate goal
            is a community of successful farmers and business owners who pass
            their knowledge and resources on to future generations &mdash; a
            legacy of generational wealth and prosperity.
          </p>
        </div>

        <ul className="dg-about__cards">
          {cards.map((card) => (
            <li key={card.title} className="dg-about__card">
              <h3>{card.title}</h3>
              <p>{card.copy}</p>
            </li>
          ))}
        </ul>

        <section className="dg-about__cta">
          <h2>Join us as we cultivate a stronger, more self-sustaining Delta.</h2>
          <div className="dg-about__actions">
            <Link href="/courses" className="dg-btn dg-btn--primary">
              Explore Courses
            </Link>
            <Link href="/contact" className="dg-btn dg-btn--ghost">
              Get in Touch
            </Link>
          </div>
        </section>
      </article>
    </main>
  );
}
