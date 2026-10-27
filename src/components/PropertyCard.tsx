import Link from "next/link";
import type { Property } from "@/data/properties";
import PropertyArt from "./PropertyArt";
import StatusBadge from "./StatusBadge";
import { convert, formatMoney } from "@/lib/costs";

export function propertyFacts(p: Property): string {
  const parts: string[] = [];
  if (p.beds) parts.push(`${p.beds} bed`);
  if (p.baths) parts.push(`${p.baths} bath`);
  if (p.plotAcres) parts.push(`${p.plotAcres} acre`);
  if (p.sizeSqm) parts.push(`${p.sizeSqm} m²`);
  return parts.join(" · ");
}

export default function PropertyCard({ property: p }: { property: Property }) {
  return (
    <Link
      href={`/properties/${p.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-forest-900/10 transition hover:-translate-y-0.5 hover:shadow-md"
    >
      <div className="relative aspect-[8/5] overflow-hidden">
        <PropertyArt hue={p.hue} type={p.type} className="h-full w-full transition duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3">
          <StatusBadge status={p.status} />
        </div>
      </div>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <p className="text-xs uppercase tracking-wider text-muted">
          {p.location} · {p.type}
        </p>
        <h3 className="text-lg font-semibold leading-snug text-forest-950">{p.title}</h3>
        <p className="text-sm text-muted">{propertyFacts(p)}</p>
        <div className="mt-auto flex items-baseline justify-between pt-3">
          <span className="font-serif text-xl font-semibold text-forest-900">{formatMoney(p.priceKes, "KES")}</span>
          <span className="text-sm text-muted">≈ {formatMoney(convert(p.priceKes, "USD"), "USD")}</span>
        </div>
      </div>
    </Link>
  );
}
