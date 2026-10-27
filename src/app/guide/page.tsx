import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import { faqs } from "@/data/content";

export const metadata: Metadata = { title: "Diaspora buyer's guide" };

export default function GuidePage() {
  return (
    <>
      <PageHero
        eyebrow="Buyer's guide"
        title="Buying property in Kenya from abroad"
        intro="Straight answers to the questions diaspora buyers ask us most."
      />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.6fr_1fr]">
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <details key={f.q} open={i === 0} className="group rounded-2xl bg-white p-5 ring-1 ring-forest-900/10 open:ring-forest-700/40">
              <summary className="flex cursor-pointer list-none items-start justify-between gap-4 font-semibold text-forest-950">
                {f.q}
                <span className="mt-0.5 text-gold-500 transition group-open:rotate-45" aria-hidden>
                  +
                </span>
              </summary>
              <p className="mt-3 text-muted">{f.a}</p>
            </details>
          ))}
        </div>
        <aside className="space-y-4 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-forest-900 p-6 text-cream">
            <p className="eyebrow">Free download</p>
            <h2 className="mt-2 text-xl font-semibold">The Diaspora Buyer&apos;s Guide (PDF)</h2>
            <p className="mt-2 text-sm text-cream/75">24 pages: costs, timelines, title types, the fraud checklist and a glossary.</p>
            <Link href="/contact" className="mt-5 block rounded-full bg-gold-400 px-5 py-3 text-center text-sm font-medium text-forest-950">
              Get the guide
            </Link>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
            <h2 className="text-lg font-semibold text-forest-950">Monthly live Q&amp;A</h2>
            <p className="mt-2 text-sm text-muted">Last Saturday of each month · 10:00 EST · 15:00 GMT · 18:00 EAT</p>
          </div>
        </aside>
      </section>
      <CtaBand />
    </>
  );
}
