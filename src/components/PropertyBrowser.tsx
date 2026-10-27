"use client";

import { useMemo, useState } from "react";
import { areas, properties, propertyTypes } from "@/data/properties";
import PropertyCard from "./PropertyCard";

const priceBands = [
  { label: "Any price", min: 0, max: Infinity },
  { label: "Under KES 50M", min: 0, max: 50_000_000 },
  { label: "KES 50M–100M", min: 50_000_000, max: 100_000_000 },
  { label: "Over KES 100M", min: 100_000_000, max: Infinity },
];

const selectClass =
  "w-full rounded-lg border-0 bg-white px-3 py-2.5 text-sm ring-1 ring-forest-900/15 focus:ring-2 focus:ring-forest-700";

export default function PropertyBrowser() {
  const [area, setArea] = useState("All");
  const [type, setType] = useState("All");
  const [band, setBand] = useState(0);
  const [verifiedOnly, setVerifiedOnly] = useState(false);

  const results = useMemo(() => {
    const { min, max } = priceBands[band];
    return properties.filter(
      (p) =>
        (area === "All" || p.area === area) &&
        (type === "All" || p.type === type) &&
        p.priceKes >= min &&
        p.priceKes < max &&
        (!verifiedOnly || p.status === "Verified"),
    );
  }, [area, type, band, verifiedOnly]);

  return (
    <div>
      <div className="grid gap-3 rounded-2xl bg-forest-100 p-4 sm:grid-cols-2 lg:grid-cols-4">
        <label className="text-xs font-medium text-forest-900">
          Area
          <select className={`${selectClass} mt-1`} value={area} onChange={(e) => setArea(e.target.value)}>
            <option>All</option>
            {areas.map((a) => (
              <option key={a}>{a}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-medium text-forest-900">
          Type
          <select className={`${selectClass} mt-1`} value={type} onChange={(e) => setType(e.target.value)}>
            <option>All</option>
            {propertyTypes.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label className="text-xs font-medium text-forest-900">
          Price
          <select className={`${selectClass} mt-1`} value={band} onChange={(e) => setBand(Number(e.target.value))}>
            {priceBands.map((b, i) => (
              <option key={b.label} value={i}>
                {b.label}
              </option>
            ))}
          </select>
        </label>
        <label className="flex items-center gap-2 self-end rounded-lg bg-white px-3 py-2.5 text-sm ring-1 ring-forest-900/15">
          <input
            type="checkbox"
            checked={verifiedOnly}
            onChange={(e) => setVerifiedOnly(e.target.checked)}
            className="h-4 w-4 accent-forest-800"
          />
          Verified homes only
        </label>
      </div>

      <p className="mt-6 text-sm text-muted" aria-live="polite">
        {results.length} {results.length === 1 ? "home" : "homes"}
      </p>
      {results.length ? (
        <div className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((p) => (
            <PropertyCard key={p.slug} property={p} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl bg-white p-10 text-center ring-1 ring-forest-900/10">
          <p className="font-semibold text-forest-950">No homes match those filters.</p>
          <p className="mt-1 text-sm text-muted">Tell us what you need and we&apos;ll search partner agencies for you.</p>
        </div>
      )}
    </div>
  );
}
