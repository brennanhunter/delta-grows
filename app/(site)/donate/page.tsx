import type { Metadata } from "next";
import Image from "next/image";
import PayPalDonateButton from "@/app/components/PayPalDonateButton";
import waltonLogo from "@/public/Walton_Family_Foundation_logo.svg.png";

export const metadata: Metadata = {
  title: "Donate — Delta Grows",
  description:
    "Support Delta Grows. Your tax-deductible gift to the CSAEC 501(c)(3) funds hands-on agriculture, business, and financial training that builds food security and generational wealth in the Mississippi Delta.",
};

const supports = [
  "Hands-on farmer training and mentorship",
  "Business planning and access to capital",
  "Greenhouse and infrastructure build-outs",
];

export default function DonatePage() {
  return (
    <main className="dg-donate">
      <div className="dg-donate__wrap">
        <p className="dg-about__rule">Donate</p>
        <h1 className="dg-donate__title">
          Help grow a stronger{" "}
          <span className="accent">Mississippi Delta.</span>
        </h1>
        <p className="dg-donate__lead">
          Delta Grows is a program of the Center for Sustainable Agricultural
          Excellence and Conservation, a 501(c)(3) nonprofit. Every gift is
          tax-deductible and goes directly to training Delta farmers and
          building food security.
        </p>

        <div className="dg-donate__grid">
          <section className="dg-donate__card">
            <h2 className="dg-donate__cardtitle">Give securely</h2>
            <p className="dg-donate__cardcopy">
              Donate with PayPal, Venmo, or any debit/credit card — no PayPal
              account required.
            </p>
            <PayPalDonateButton />
          </section>

          <aside className="dg-donate__aside">
            <h2 className="dg-donate__asidetitle">Your gift funds</h2>
            <ul className="dg-donate__list">
              {supports.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="dg-donate__supporter">
              <span>Proudly supported by</span>
              <Image
                src={waltonLogo}
                alt="Walton Family Foundation"
                className="dg-donate__waltonimg"
                sizes="220px"
              />
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
