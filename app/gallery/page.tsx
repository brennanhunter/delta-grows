import type { Metadata } from "next";
import SiteHeader from "@/app/components/SiteHeader";
import SiteFooter from "@/app/components/SiteFooter";
import VideoBubbles from "@/app/components/VideoBubbles";

export const metadata: Metadata = {
  title: "Gallery — Delta Grows",
  description:
    "Watch stories from the Delta Grows community — farmer training, greenhouse build-outs, and the people growing a stronger Mississippi Delta.",
};

export default function GalleryPage() {
  return (
    <main className="dg-gallery">
      <SiteHeader active="Gallery" />

      <div className="dg-gallery__head">
        <p className="dg-about__rule">Gallery</p>
        <h1 className="dg-gallery__title">
          Stories from <span className="accent">the field.</span>
        </h1>
      </div>

      <VideoBubbles />

      <SiteFooter />
    </main>
  );
}
