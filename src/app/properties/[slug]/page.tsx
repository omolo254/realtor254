import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { propertyFacts } from "@/components/PropertyCard";
import PropertyArt from "@/components/PropertyArt";
import StatusBadge from "@/components/StatusBadge";
import { getProperty, properties } from "@/data/properties";
import { convert, formatMoney, stampDuty } from "@/lib/costs";

type Params = Promise<{ slug: string }>;

export function generateStaticParams() {
  return properties.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const p = getProperty((await params).slug);
  return { title: p ? p.title : "Home not found" };
}

export default async function PropertyPage({ params }: { params: Params }) {
  const p = getProperty((await params).slug);
  if (!p) notFound();

  const done = p.checks.filter((c) => c.done).length;

  return (
    <article className="container-page py-10">
      <Link href="/properties" className="text-sm text-muted hover:text-forest-800">
        ← All homes
      </Link>
      <div className="mt-4 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
        <div className="min-w-0">
          <div className="overflow-hidden rounded-3xl ring-1 ring-forest-900/10">
            <PropertyArt hue={p.hue} type={p.type} className="aspect-[8/5] w-full" />
          </div>
          <div className="mt-3 grid grid-cols-3 gap-3">
            {[p.hue + 20, p.hue - 25, p.hue + 50].map((h) => (
              <div key={h} className="overflow-hidden rounded-xl ring-1 ring-forest-900/10">
                <PropertyArt hue={h} type={p.type} className="aspect-[8/5] w-full" />
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex flex-wrap items-center gap-3">
              <StatusBadge status={p.status} />
              <span className="text-sm text-muted">
                {p.type} · {p.tenure}
              </span>
            </div>
            <h1 className="mt-3 text-3xl font-semibold text-forest-950 sm:text-4xl">{p.title}</h1>
            <p className="mt-1 text-muted">
              {p.location} · {propertyFacts(p)}
            </p>
            <p className="mt-6 text-lg leading-relaxed">{p.summary}</p>
            <ul className="mt-6 grid gap-2 sm:grid-cols-2">
              {p.highlights.map((h) => (
                <li key={h} className="rounded-lg bg-white px-4 py-3 text-sm ring-1 ring-forest-900/10">
                  {h}
                </li>
              ))}
            </ul>
          </div>

          <section className="mt-10 rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h2 className="text-2xl font-semibold text-forest-950">Verification report</h2>
              <span className="text-sm text-muted">
                {done} of {p.checks.length} checks complete
              </span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-forest-100">
              <div className="h-full rounded-full bg-forest-700" style={{ width: `${(done / p.checks.length) * 100}%` }} />
            </div>
            <ul className="mt-5 space-y-3 text-sm">
              {p.checks.map((c) => (
                <li key={c.item} className="flex items-start gap-3">
                  <span
                    className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full text-[10px] ${
                      c.done ? "bg-forest-800 text-cream" : "ring-2 ring-forest-900/20"
                    }`}
                    aria-hidden
                  >
                    {c.done ? "✓" : ""}
                  </span>
                  <span className={c.done ? "" : "text-muted"}>
                    {c.item}
                    <span className="sr-only">{c.done ? " (complete)" : " (pending)"}</span>
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className="space-y-5 lg:sticky lg:top-24 lg:self-start">
          <div className="rounded-2xl bg-forest-900 p-6 text-cream">
            <p className="text-xs uppercase tracking-wider text-cream/70">Asking price</p>
            <p className="mt-1 font-serif text-3xl font-semibold text-gold-400">{formatMoney(p.priceKes, "KES")}</p>
            <p className="text-sm text-cream/70">
              ≈ {formatMoney(convert(p.priceKes, "USD"), "USD")} · {formatMoney(convert(p.priceKes, "GBP"), "GBP")}
            </p>
            <dl className="mt-5 space-y-2 border-t border-cream/15 pt-4 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-cream/70">Stamp duty (est.)</dt>
                <dd>{formatMoney(stampDuty(p.priceKes, p.municipality), "KES")}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-cream/70">Listed by</dt>
                <dd>Licensed partner agency</dd>
              </div>
            </dl>
            <Link
              href={`/calculator?price=${p.priceKes}`}
              className="mt-5 block rounded-full bg-gold-400 px-5 py-3 text-center text-sm font-medium text-forest-950 hover:bg-gold-500"
            >
              Estimate all my costs
            </Link>
          </div>
          <div>
            <h2 className="mb-3 text-xl font-semibold text-forest-950">Request a verified viewing</h2>
            <ContactForm propertyTitle={p.title} />
          </div>
        </aside>
      </div>
    </article>
  );
}
