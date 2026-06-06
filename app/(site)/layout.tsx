import SiteHeader from "@/app/components/SiteHeader";

/**
 * Shared layout for standard pages (About, Courses, Gallery, Resources).
 * The masthead lives here so pages don't each render their own. Home is
 * outside this group because it uses the hero's own integrated nav; the
 * footer is in the root layout.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SiteHeader />
      {children}
    </>
  );
}
