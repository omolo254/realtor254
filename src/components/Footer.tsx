import Link from "next/link";
import Logo from "./Logo";
import { site } from "@/data/content";

const columns = [
  {
    title: "Buy",
    links: [
      { href: "/properties", label: "Homes" },
      { href: "/how-it-works", label: "How it works" },
      { href: "/calculator", label: "Cost calculator" },
    ],
  },
  {
    title: "Trust",
    links: [
      { href: "/due-diligence", label: "Due-diligence checklist" },
      { href: "/services#how-we-are-paid", label: "How we're paid" },
      { href: "/partners", label: "Partners" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/guide", label: "Buyer's guide" },
      { href: "/contact", label: "Book a call" },
      { href: "/portal", label: "Client portal" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-forest-950 text-cream/80">
      <div className="container-page grid gap-10 py-14 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="space-y-4">
          <Logo light />
          <p className="max-w-xs text-sm">
            Independent verification and concierge for Kenyans abroad buying homes in Kenya.
          </p>
          <p className="text-sm">
            <a href={`mailto:${site.email}`} className="text-gold-400 hover:underline">
              {site.email}
            </a>
          </p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="mb-3 font-sans text-xs font-semibold uppercase tracking-widest text-gold-400">{col.title}</h3>
            <ul className="space-y-2 text-sm">
              {col.links.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-cream">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-cream/10">
        <p className="container-page py-6 text-xs leading-relaxed text-cream/60">
          Realtor254 Diaspora Homes is a buyer-side coordination and verification service and is not an estate agent.
          All property sales are negotiated by estate agents registered with the Estate Agents Registration Board (EARB)
          of Kenya. We never receive or hold purchase funds. We do not share fees with advocates. Nothing on this site is
          legal, tax or financial advice. Listings, testimonials and figures shown are samples for illustration.
        </p>
      </div>
    </footer>
  );
}
