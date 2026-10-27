import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import PricingTier from "@/components/PricingTier";
import SectionHeading from "@/components/SectionHeading";
import { paidBy, tiers } from "@/data/content";

export const metadata: Metadata = { title: "Services & fees" };

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services & fees"
        title="Simple, published fees, with no surprises"
        intro="Pay only for the help you need. Our Verify fee is the same whether you buy or walk away, so our advice stays honest."
      />
      <section className="container-page py-16">
        <div className="grid gap-6 lg:grid-cols-3">
          {tiers.map((t) => (
            <PricingTier key={t.name} tier={t} />
          ))}
        </div>
        <p className="mt-6 text-sm text-muted">
          Fees are quoted in US dollars and confirmed in a written engagement letter before any work begins. Government
          charges, advocate&apos;s fees, valuation and survey fees are paid by you directly to those parties.
        </p>
      </section>

      <section id="how-we-are-paid" className="scroll-mt-24 bg-white py-16">
        <div className="container-page grid gap-10 lg:grid-cols-[1fr_1.4fr]">
          <SectionHeading
            eyebrow="Transparency"
            title="How we're paid"
            intro="Who pays us, and who doesn't. We put this in writing for every client before they commit."
          />
          <div className="divide-y divide-forest-900/10 rounded-2xl ring-1 ring-forest-900/10">
            {paidBy.map((r) => (
              <div key={r.who} className="grid gap-1 p-5 sm:grid-cols-[12rem_1fr] sm:gap-6">
                <p className="font-semibold text-forest-950">{r.who}</p>
                <p className="text-muted">{r.what}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-16">
        <div className="rounded-2xl bg-gold-100 p-6 sm:p-8">
          <h2 className="text-2xl font-semibold text-forest-950">Our promise on money</h2>
          <p className="mt-3 max-w-3xl text-forest-900">
            We will <strong>never</strong> ask you to send a deposit or purchase money to us, to an agent or to a seller.
            If anyone claiming to be from Realtor254 asks you to, stop and call us on a number you have verified yourself.
            Purchase money goes only to your advocate&apos;s client account or a bank escrow account.
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
