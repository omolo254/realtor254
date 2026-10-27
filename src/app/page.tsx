import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PropertyArt from "@/components/PropertyArt";
import PropertyCard from "@/components/PropertyCard";
import SectionHeading from "@/components/SectionHeading";
import Steps from "@/components/Steps";
import { pillars, testimonials } from "@/data/content";
import { properties } from "@/data/properties";

const stats = [
  { value: "0", label: "shillings of client money we ever hold" },
  { value: "40+", label: "point verification on every home" },
  { value: "3+", label: "independent advocates to choose from" },
  { value: "24h", label: "response, whatever your time zone" },
];

export default function Home() {
  const featured = properties.filter((p) => p.status === "Verified").slice(0, 3);

  return (
    <>
      <section className="relative overflow-hidden bg-forest-900 text-cream">
        <div className="container-page grid items-center gap-10 py-16 sm:py-24 lg:grid-cols-[1.1fr_1fr]">
          <div>
            <p className="eyebrow mb-4">For Kenyans abroad</p>
            <h1 className="text-4xl font-semibold leading-tight sm:text-6xl">
              Buy home with confidence, <span className="text-gold-400">from anywhere.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg text-cream/80">
              Independent verification and end-to-end concierge for high-end homes in Nairobi and on the coast. Licensed
              agents negotiate, your advocate holds the money, and we stand beside you at every step.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="rounded-full bg-gold-400 px-6 py-3 font-medium text-forest-950 hover:bg-gold-500">
                Book a free call
              </Link>
              <Link href="/properties" className="rounded-full px-6 py-3 font-medium ring-1 ring-cream/40 hover:bg-cream/10">
                Browse verified homes
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl shadow-2xl ring-1 ring-cream/10">
              <PropertyArt hue={150} type="Villa" className="aspect-[8/5] w-full" />
            </div>
            <div className="absolute -bottom-6 left-4 right-4 rounded-2xl bg-cream p-4 text-ink shadow-xl sm:left-auto sm:right-[-1rem] sm:w-72">
              <p className="text-xs uppercase tracking-wider text-muted">Deal tracker · Karen villa</p>
              <ul className="mt-2 space-y-1.5 text-sm">
                {["Official search clear", "Beacons confirmed", "Deposit in advocate's account"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-forest-800 text-[10px] text-cream">✓</span>
                    {t}
                  </li>
                ))}
                <li className="flex items-center gap-2 text-muted">
                  <span className="h-5 w-5 rounded-full ring-2 ring-gold-400" />
                  Transfer registration
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-forest-900/10 bg-white">
        <dl className="container-page grid grid-cols-2 gap-6 py-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-serif text-3xl font-semibold text-forest-800 sm:text-4xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-muted">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="container-page py-20">
        <SectionHeading
          eyebrow="Why buyers trust us"
          title="Built around the ways diaspora buyers lose money"
          intro="Forged titles, vanishing developers and a 'cousin who checked'. We designed the service so none of them can reach you."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map((p) => (
            <div key={p.title} className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
              <div className="mb-4 h-1 w-10 rounded bg-gold-500" />
              <h3 className="text-lg font-semibold text-forest-950">{p.title}</h3>
              <p className="mt-2 text-sm text-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-forest-100/60 py-20">
        <div className="container-page">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <SectionHeading eyebrow="How it works" title="Six steps from first call to keys" />
            <Link href="/how-it-works" className="font-medium text-forest-800 underline-offset-4 hover:underline">
              See the full process →
            </Link>
          </div>
          <div className="mt-10">
            <Steps />
          </div>
        </div>
      </section>

      <section className="container-page py-20">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <SectionHeading eyebrow="Featured" title="Recently verified homes" intro="Sample listings from licensed partner agencies." />
          <Link href="/properties" className="font-medium text-forest-800 underline-offset-4 hover:underline">
            All homes →
          </Link>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="container-page">
          <SectionHeading eyebrow="In their words" title="Buyers from Houston to Dubai" intro="Sample testimonials for the mockup." center />
          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.place} className="rounded-2xl bg-cream p-6 ring-1 ring-forest-900/10">
                <blockquote className="font-serif text-lg leading-relaxed text-forest-950">&ldquo;{t.quote}&rdquo;</blockquote>
                <figcaption className="mt-4 text-sm text-muted">
                  {t.name} · {t.place}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
