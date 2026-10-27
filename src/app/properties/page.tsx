import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import PropertyBrowser from "@/components/PropertyBrowser";

export const metadata: Metadata = { title: "Homes" };

export default function PropertiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Homes"
        title="Homes from licensed partner agencies"
        intro="Each home shows where it stands in our verification. 'Verified' means every check in our checklist has passed. All listings here are samples."
      />
      <section className="container-page py-12">
        <PropertyBrowser />
      </section>
    </>
  );
}
