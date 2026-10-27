import type { Metadata } from "next";
import Link from "next/link";
import PropertyArt from "@/components/PropertyArt";
import { formatMoney } from "@/lib/costs";

export const metadata: Metadata = { title: "Client portal" };

const milestones = [
  { title: "Discovery call & KYC", date: "2 Sep", state: "done" },
  { title: "Shortlist agreed (3 homes)", date: "12 Sep", state: "done" },
  { title: "Verification report: Karen villa", date: "26 Sep", state: "done" },
  { title: "Offer accepted via licensed agent", date: "3 Oct", state: "done" },
  { title: "Sale agreement signed · 10% deposit in advocate's account", date: "17 Oct", state: "current" },
  { title: "Valuation, stamp duty & consents", date: "Est. 7 Nov", state: "todo" },
  { title: "Transfer registered & keys", date: "Est. 28 Nov", state: "todo" },
] as const;

const documents = [
  { name: "Engagement letter & fee disclosure", status: "Signed" },
  { name: "KYC: passport & proof of address", status: "Approved" },
  { name: "Official search result", status: "Received" },
  { name: "Verification report (PDF + video)", status: "Received" },
  { name: "Sale agreement", status: "Signed" },
  { name: "Notarised transfer documents", status: "Awaiting you" },
];

const messages = [
  { from: "Grace (coordinator)", time: "Today, 09:12 EAT", body: "The valuer visits Thursday at 10am. I'll stream the walkthrough live if you'd like to join." },
  { from: "Your advocate's office", time: "Yesterday", body: "Deposit received in our client account. Receipt uploaded to your documents." },
];

export default function PortalPage() {
  return (
    <section className="container-page py-10">
      <div className="mb-6 rounded-xl bg-gold-100 px-4 py-3 text-sm text-forest-900">
        Portal mockup: a sample client&apos;s view. In production this sits behind a secure login.
      </div>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="eyebrow">Welcome back</p>
          <h1 className="mt-1 text-3xl font-semibold text-forest-950 sm:text-4xl">Wanjiru &amp; David&apos;s purchase</h1>
          <p className="mt-1 text-muted">Garden villa, Karen · Full Concierge</p>
        </div>
        <Link href="/contact" className="rounded-full bg-forest-800 px-5 py-2.5 text-sm font-medium text-cream">
          Book this week&apos;s call
        </Link>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.5fr_1fr]">
        <div className="min-w-0 space-y-6">
          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { k: "Purchase price", v: formatMoney(85_000_000, "KES") },
              { k: "Paid to advocate", v: formatMoney(8_500_000, "KES") },
              { k: "Target completion", v: "28 Nov 2026" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl bg-white p-5 ring-1 ring-forest-900/10">
                <p className="text-xs uppercase tracking-wider text-muted">{s.k}</p>
                <p className="mt-1 font-serif text-xl font-semibold text-forest-900">{s.v}</p>
              </div>
            ))}
          </div>

          <div className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
            <h2 className="text-xl font-semibold text-forest-950">Deal tracker</h2>
            <ol className="mt-5 space-y-0">
              {milestones.map((m, i) => (
                <li key={m.title} className="relative flex gap-4 pb-6 last:pb-0">
                  {i < milestones.length - 1 && (
                    <span className={`absolute left-[11px] top-6 h-full w-0.5 ${m.state === "done" ? "bg-forest-700" : "bg-forest-900/15"}`} aria-hidden />
                  )}
                  <span
                    className={`relative z-10 grid h-6 w-6 shrink-0 place-items-center rounded-full text-xs ${
                      m.state === "done"
                        ? "bg-forest-800 text-cream"
                        : m.state === "current"
                          ? "bg-gold-400 text-forest-950 ring-4 ring-gold-100"
                          : "bg-white ring-2 ring-forest-900/20"
                    }`}
                    aria-hidden
                  >
                    {m.state === "done" ? "✓" : ""}
                  </span>
                  <div className="min-w-0">
                    <p className={`font-medium ${m.state === "todo" ? "text-muted" : "text-forest-950"}`}>{m.title}</p>
                    <p className="text-xs text-muted">
                      {m.date}
                      {m.state === "current" && " · in progress"}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="min-w-0 space-y-6">
          <div className="overflow-hidden rounded-2xl ring-1 ring-forest-900/10">
            <PropertyArt hue={150} type="Villa" className="aspect-[8/5] w-full" />
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
            <h2 className="text-xl font-semibold text-forest-950">Documents</h2>
            <ul className="mt-4 divide-y divide-forest-900/10 text-sm">
              {documents.map((d) => (
                <li key={d.name} className="flex items-center justify-between gap-3 py-3">
                  <span>{d.name}</span>
                  <span
                    className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      d.status === "Awaiting you" ? "bg-gold-400 text-forest-950" : "bg-forest-100 text-forest-800"
                    }`}
                  >
                    {d.status}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
            <h2 className="text-xl font-semibold text-forest-950">Messages</h2>
            <ul className="mt-4 space-y-4 text-sm">
              {messages.map((m) => (
                <li key={m.body} className="rounded-xl bg-cream p-4">
                  <p className="flex flex-wrap justify-between gap-2 text-xs text-muted">
                    <span className="font-semibold text-forest-900">{m.from}</span>
                    {m.time}
                  </p>
                  <p className="mt-1.5">{m.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
