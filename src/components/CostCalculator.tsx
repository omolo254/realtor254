"use client";

import { useMemo, useState } from "react";
import { convert, estimateCosts, formatMoney, type Currency } from "@/lib/costs";

const currencies: Currency[] = ["USD", "GBP", "EUR", "KES"];

const inputClass =
  "mt-1 w-full rounded-lg border-0 bg-white px-3 py-2.5 ring-1 ring-forest-900/15 focus:ring-2 focus:ring-forest-700";

export default function CostCalculator({ initialPrice = 80_000_000 }: { initialPrice?: number }) {
  const [price, setPrice] = useState(initialPrice);
  const [urban, setUrban] = useState(true);
  const [mortgage, setMortgage] = useState(false);
  const [deposit, setDeposit] = useState(20);
  const [rate, setRate] = useState(13);
  const [term, setTerm] = useState(20);
  const [concierge, setConcierge] = useState(true);
  const [currency, setCurrency] = useState<Currency>("USD");

  const result = useMemo(
    () =>
      estimateCosts({
        priceKes: price,
        urban,
        mortgage,
        depositRate: deposit / 100,
        interestRate: rate / 100,
        termYears: term,
        includeConcierge: concierge,
      }),
    [price, urban, mortgage, deposit, rate, term, concierge],
  );

  const both = (kes: number) =>
    currency === "KES" ? formatMoney(kes, "KES") : `${formatMoney(kes, "KES")} · ${formatMoney(convert(kes, currency), currency)}`;

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
      <form className="space-y-5 rounded-2xl bg-forest-100 p-6" onSubmit={(e) => e.preventDefault()}>
        <label className="block text-sm font-medium text-forest-900">
          Purchase price (KES)
          <input
            type="number"
            inputMode="numeric"
            min={1_000_000}
            step={1_000_000}
            value={price}
            onChange={(e) => setPrice(Math.max(0, Number(e.target.value)))}
            className={inputClass}
          />
          <span className="mt-1 block text-xs font-normal text-muted">≈ {formatMoney(convert(price, "USD"), "USD")}</span>
        </label>

        <fieldset>
          <legend className="text-sm font-medium text-forest-900">Location</legend>
          <div className="mt-2 grid grid-cols-2 gap-2">
            {[
              { v: true, l: "Municipality (e.g. Nairobi)" },
              { v: false, l: "Outside municipality" },
            ].map((o) => (
              <button
                key={o.l}
                type="button"
                onClick={() => setUrban(o.v)}
                aria-pressed={urban === o.v}
                className={`rounded-lg px-3 py-2.5 text-sm ring-1 ${
                  urban === o.v ? "bg-forest-800 text-cream ring-forest-800" : "bg-white ring-forest-900/15"
                }`}
              >
                {o.l}
              </button>
            ))}
          </div>
        </fieldset>

        <label className="flex items-center gap-2 text-sm text-forest-900">
          <input type="checkbox" checked={mortgage} onChange={(e) => setMortgage(e.target.checked)} className="h-4 w-4 accent-forest-800" />
          I&apos;ll use a diaspora mortgage
        </label>

        {mortgage && (
          <div className="grid grid-cols-3 gap-3">
            <label className="text-xs font-medium text-forest-900">
              Deposit %
              <input type="number" min={10} max={90} value={deposit} onChange={(e) => setDeposit(Number(e.target.value))} className={inputClass} />
            </label>
            <label className="text-xs font-medium text-forest-900">
              Rate %
              <input type="number" min={0} max={30} step={0.5} value={rate} onChange={(e) => setRate(Number(e.target.value))} className={inputClass} />
            </label>
            <label className="text-xs font-medium text-forest-900">
              Years
              <input type="number" min={5} max={25} value={term} onChange={(e) => setTerm(Number(e.target.value))} className={inputClass} />
            </label>
          </div>
        )}

        <label className="flex items-center gap-2 text-sm text-forest-900">
          <input type="checkbox" checked={concierge} onChange={(e) => setConcierge(e.target.checked)} className="h-4 w-4 accent-forest-800" />
          Include our Full Concierge fee
        </label>

        <label className="block text-sm font-medium text-forest-900">
          Show amounts in
          <select value={currency} onChange={(e) => setCurrency(e.target.value as Currency)} className={inputClass}>
            {currencies.map((c) => (
              <option key={c}>{c}</option>
            ))}
          </select>
        </label>
      </form>

      <div className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
        <h3 className="text-xl font-semibold text-forest-950">Estimated costs</h3>
        <dl className="mt-4 divide-y divide-forest-900/10 text-sm">
          {result.lines.map((l) => (
            <div key={l.label} className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3">
              <dt>
                {l.label}
                {l.note && <span className="block text-xs text-muted">{l.note}</span>}
              </dt>
              <dd className="font-medium tabular-nums">{both(l.kes)}</dd>
            </div>
          ))}
          <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-3 font-semibold text-forest-900">
            <dt>Total closing costs ({((result.closingCostsKes / Math.max(price, 1)) * 100).toFixed(1)}% of price)</dt>
            <dd className="tabular-nums">{both(result.closingCostsKes)}</dd>
          </div>
        </dl>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl bg-forest-900 p-4 text-cream">
            <p className="text-xs uppercase tracking-wider text-cream/70">Cash needed upfront</p>
            <p className="mt-1 font-serif text-2xl font-semibold text-gold-400">{formatMoney(convert(result.cashNeededKes, currency), currency)}</p>
          </div>
          {mortgage && (
            <div className="rounded-xl bg-gold-100 p-4 text-forest-950">
              <p className="text-xs uppercase tracking-wider text-forest-900/70">Monthly repayment</p>
              <p className="mt-1 font-serif text-2xl font-semibold">{formatMoney(convert(result.monthlyPaymentKes, currency), currency)}</p>
              <p className="text-xs text-forest-900/70">on a loan of {formatMoney(convert(result.loanKes, currency), currency)}</p>
            </div>
          )}
        </div>
        <p className="mt-5 text-xs text-muted">
          Estimates only, using indicative exchange rates (US$1 = KES 129). Stamp duty is charged on the government valuation
          or the price, whichever is higher. Legal fees follow the Advocates Remuneration Order and your advocate will quote exactly.
        </p>
      </div>
    </div>
  );
}
