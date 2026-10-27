import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import PageHero from "@/components/PageHero";
import { site } from "@/data/content";

export const metadata: Metadata = { title: "Book a call" };

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Book a call"
        title="Let's talk about your home in Kenya"
        intro="A free, no-obligation 30-minute video call, scheduled in your time zone."
      />
      <section className="container-page grid gap-10 py-16 lg:grid-cols-[1.6fr_1fr]">
        <ContactForm />
        <aside className="space-y-4">
          <div className="rounded-2xl bg-white p-6 ring-1 ring-forest-900/10">
            <h2 className="text-lg font-semibold text-forest-950">Prefer WhatsApp?</h2>
            <p className="mt-2 text-sm text-muted">Message us any time and we&apos;ll reply within one working day.</p>
            <a href={site.whatsapp} className="mt-4 inline-block rounded-full bg-forest-800 px-5 py-2.5 text-sm font-medium text-cream">
              Open WhatsApp
            </a>
          </div>
          <div className="rounded-2xl bg-gold-100 p-6 text-sm text-forest-900">
            <h2 className="text-lg font-semibold text-forest-950">What happens next</h2>
            <ol className="mt-3 list-decimal space-y-2 pl-5">
              <li>We confirm a call time in your time zone.</li>
              <li>We talk through your goals, budget and timeline.</li>
              <li>You get a written proposal with the fees set out in full.</li>
            </ol>
          </div>
        </aside>
      </section>
    </>
  );
}
