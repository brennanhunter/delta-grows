import Image from "next/image";
import TransitionLink from "@/app/components/TransitionLink";
import StatNumber from "@/app/components/StatNumber";
import waltonLogo from "@/public/Walton_Family_Foundation_logo.svg.png";

// Donor-facing impact stats. Numeric ones (`count`) animate up on scroll;
// `static` ones render as-is. Add farmers-trained / partner counts here once
// Angela sends the Walton wrap-up numbers — they'll count up automatically.
type Stat = {
  count?: number;
  prefix?: string;
  suffix?: string;
  static?: string;
  label: string;
};

const stats: Stat[] = [
  {
    count: 10,
    prefix: "$",
    suffix: "M+",
    label: "Catalyzed across the Mississippi & Arkansas Delta",
  },
  {
    count: 2,
    label: "Delta states served — Mississippi & Arkansas",
  },
  {
    static: "Since 2021",
    label: "On the ground training Delta farmers",
  },
  {
    count: 100,
    suffix: "%",
    label: "Tax-deductible — every gift supports a 501(c)(3)",
  },
];

export default function Impact() {
  return (
    <section id="impact" className="dg-impact">
      <div className="dg-impact__inner">
        <p className="dg-about__rule">Our Impact</p>
        <h2 className="dg-impact__title">
          Real outcomes for <span className="accent">the Delta.</span>
        </h2>

        <ul className="dg-impact__stats">
          {stats.map((stat) => (
            <li key={stat.label} className="dg-stat">
              {stat.count !== undefined ? (
                <StatNumber
                  end={stat.count}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              ) : (
                <span className="dg-stat__value">{stat.static}</span>
              )}
              <span className="dg-stat__label">{stat.label}</span>
            </li>
          ))}
        </ul>

        <div className="dg-walton">
          <p className="dg-walton__eyebrow">Proudly supported by</p>
          <span className="dg-walton__logo">
            <Image
              src={waltonLogo}
              alt="Walton Family Foundation"
              className="dg-walton__logoimg"
              sizes="340px"
            />
          </span>
          <p className="dg-walton__copy">
            The Walton Family Foundation helped launch Delta Grows. Join them in
            funding the training, mentorship, and infrastructure that help Delta
            farmers build food security and generational wealth.
          </p>
          <TransitionLink href="/donate" className="dg-btn dg-btn--primary">
            Donate Now
          </TransitionLink>
        </div>
      </div>
    </section>
  );
}
