import Link from "next/link";

interface Tier {
  name: string;
  price: string;
  unit: string;
  blurb: string;
  features: string[];
  featured: boolean;
}

export default function PricingTier({ tier }: { tier: Tier }) {
  const dark = tier.featured;
  return (
    <div
      className={`flex flex-col rounded-2xl p-7 ring-1 ${
        dark ? "bg-forest-900 text-cream ring-forest-900" : "bg-white ring-forest-900/10"
      }`}
    >
      {dark && <span className="eyebrow mb-2">Most chosen</span>}
      <h3 className={`text-2xl font-semibold ${dark ? "text-cream" : "text-forest-950"}`}>{tier.name}</h3>
      <p className={`mt-2 text-sm ${dark ? "text-cream/75" : "text-muted"}`}>{tier.blurb}</p>
      <p className="mt-6">
        <span className={`font-serif text-4xl font-semibold ${dark ? "text-gold-400" : "text-forest-900"}`}>{tier.price}</span>
        <span className={`mt-1 block text-sm ${dark ? "text-cream/70" : "text-muted"}`}>{tier.unit}</span>
      </p>
      <ul className="mt-6 flex-1 space-y-3 text-sm">
        {tier.features.map((f) => (
          <li key={f} className="flex gap-2.5">
            <svg viewBox="0 0 16 16" className={`mt-0.5 h-4 w-4 shrink-0 ${dark ? "text-gold-400" : "text-forest-700"}`} fill="currentColor" aria-hidden>
              <path d="M6.5 11.2 3.3 8l1-1 2.2 2.2 5.2-5.2 1 1z" />
            </svg>
            {f}
          </li>
        ))}
      </ul>
      <Link
        href="/contact"
        className={`mt-8 rounded-full px-5 py-3 text-center text-sm font-medium ${
          dark ? "bg-gold-400 text-forest-950 hover:bg-gold-500" : "bg-forest-800 text-cream hover:bg-forest-700"
        }`}
      >
        Start with {tier.name}
      </Link>
    </div>
  );
}
