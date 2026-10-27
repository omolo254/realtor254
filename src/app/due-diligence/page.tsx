import type { Metadata } from "next";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { dueDiligence } from "@/data/content";

export const metadata: Metadata = { title: "Due-diligence checklist" };

const redFlags = [
  "Pressure to pay a deposit before your advocate's search comes back",
  "A price far below comparable homes in the area",
  "Bank details sent by email or WhatsApp, or changed at the last minute",
  "The seller can't meet on video with their original ID and title",
  "\"My lawyer will handle both sides\"",
  "Off-plan with no escrow and no approved plans",
];

export default function DueDiligencePage() {
  return (
    <>
      <PageHero
        eyebrow="Due diligence"
        title="What we check before you pay a shilling"
        intro="Our verification framework, shared openly so you can use it whether or not you hire us."
      />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-6">
          {dueDiligence.map((g, gi) => (
            <div key={g.group} className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
              <h2 className="flex items-center gap-3 text-xl font-semibold text-forest-950">
                <span className="grid h-8 w-8 place-items-center rounded-full bg-forest-800 font-sans text-sm text-cream">{gi + 1}</span>
                {g.group}
              </h2>
              <ul className="mt-4 space-y-3">
                {g.items.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-gold-500" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-forest-900 p-6 text-cream">
            <h2 className="text-xl font-semibold text-gold-400">Red flags: walk away</h2>
            <ul className="mt-4 space-y-3 text-sm">
              {redFlags.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="text-gold-400" aria-hidden>
                    ✕
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-4 text-xs text-muted">
            This checklist is general guidance, not legal advice. Your advocate is responsible for the legal searches and the
            transfer.
          </p>
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
