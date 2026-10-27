import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { partnerCategories } from "@/data/content";

export const metadata: Metadata = { title: "Partners" };

export default function PartnersPage() {
  return (
    <>
      <PageHero
        eyebrow="Partners"
        title="A network of licensed, independent professionals"
        intro="We work only with registered professionals, and we check every agent against the EARB register before each deal."
      />
      <section className="container-page py-16">
        <div className="grid gap-6 md:grid-cols-2">
          {partnerCategories.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
              <h2 className="text-xl font-semibold text-forest-950">{c.title}</h2>
              <p className="mt-2 text-sm text-muted">{c.body}</p>
              <div className="mt-5 flex flex-wrap gap-3">
                {Array.from({ length: c.count }).map((_, i) => (
                  <div
                    key={i}
                    className="grid h-14 w-32 place-items-center rounded-lg border border-dashed border-forest-900/25 text-xs text-muted"
                  >
                    Partner logo
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl bg-forest-100 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-forest-950">Are you a licensed agency, advocate or lender?</h2>
          <p className="mt-2 max-w-2xl text-forest-900">
            We bring pre-qualified, KYC-checked diaspora buyers who arrive with independent counsel and a coordinator, so
            deals close faster. Agencies remain agent of record. Let&apos;s talk about a written partnership agreement.
          </p>
          <a href="mailto:partners@realtor254.example" className="mt-5 inline-block rounded-full bg-forest-800 px-6 py-3 font-medium text-cream hover:bg-forest-700">
            Become a partner
          </a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
