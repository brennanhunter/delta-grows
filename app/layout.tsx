import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import SiteFooter from "./components/SiteFooter";
import { SITE_URL, SITE_NAME, SITE_DESCRIPTION } from "./site-config";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const TITLE = "Delta Grows — Mississippi Delta agriculture training";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: SITE_DESCRIPTION,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    title: TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    locale: "en_US",
    // og:image / twitter:image are auto-injected from app/opengraph-image.tsx
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: SITE_DESCRIPTION,
  },
};

// Organization schema so search engines understand Delta Grows as a program of
// the CSAEC nonprofit, funded by the Walton Family Foundation.
const organizationLd = {
  "@context": "https://schema.org",
  "@type": "NGO",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.webp`,
  description: SITE_DESCRIPTION,
  parentOrganization: {
    "@type": "NGO",
    name: "Center for Sustainable Agricultural Excellence and Conservation",
    url: "https://csacc.org",
  },
  funder: {
    "@type": "Organization",
    name: "Walton Family Foundation",
    url: "https://www.waltonfamilyfoundation.org",
  },
  areaServed: { "@type": "Place", name: "Mississippi Delta, United States" },
  knowsAbout: [
    "Sustainable agriculture",
    "Farmer training",
    "Agricultural entrepreneurship",
    "Generational wealth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationLd) }}
        />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
