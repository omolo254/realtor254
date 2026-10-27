import Link from "next/link";
import { site } from "@/data/content";

export default function CtaBand() {
  return (
    <section className="container-page py-16">
      <div className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-forest-800 p-8 text-cream sm:p-12 md:flex-row md:items-center">
        <div>
          <h2 className="text-3xl font-semibold">Thinking about a home in Kenya?</h2>
          <p className="mt-2 max-w-xl text-cream/80">
            A free 30-minute call, scheduled in your time zone. No obligation, and honest advice even if that means "wait".
          </p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link href="/contact" className="rounded-full bg-gold-400 px-6 py-3 font-medium text-forest-950 hover:bg-gold-500">
            Book a call
          </Link>
          <a href={site.whatsapp} className="rounded-full px-6 py-3 font-medium text-cream ring-1 ring-cream/40 hover:bg-cream/10">
            WhatsApp us
          </a>
        </div>
      </div>
    </section>
  );
}
