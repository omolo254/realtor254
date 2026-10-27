import type { Metadata } from "next";
import Link from "next/link";
import CtaBand from "@/components/CtaBand";
import PageHero from "@/components/PageHero";
import SectionHeading from "@/components/SectionHeading";
import Steps from "@/components/Steps";

export const metadata: Metadata = { title: "How it works" };

const roles = [
  { who: "You", does: "Decide, sign and pay, but only into your advocate's account." },
  { who: "Realtor254", does: "Coordinate, verify and report. Your eyes, ears and project manager." },
  { who: "Licensed estate agent", does: "Acts as agent of record and negotiates the sale (EARB-registered)." },
  { who: "Your advocate", does: "Runs searches, drafts and reviews agreements, holds funds and registers the transfer." },
  { who: "Valuer, surveyor & bank", does: "Confirm the value and boundaries, and fund the purchase if you use a mortgage." },
];

export default function HowItWorks() {
  return (
    <>
      <PageHero
        eyebrow="How it works"
        title="A clear process, with independent checks at every stage"
        intro="Most of it happens on video calls scheduled around your time zone. You only travel if you want to."
      />
      <section className="container-page py-16">
        <Steps detailed />
      </section>
      <section className="bg-white py-16">
        <div className="container-page">
          <SectionHeading eyebrow="Who does what" title="Separation of duties is the safety system" />
          <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-forest-900/10">
            <table className="w-full text-left text-sm">
              <thead className="bg-forest-900 text-cream">
                <tr>
                  <th className="px-4 py-3 font-medium sm:px-6">Party</th>
                  <th className="px-4 py-3 font-medium sm:px-6">Role</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest-900/10">
                {roles.map((r) => (
                  <tr key={r.who} className="bg-cream/40">
                    <td className="px-4 py-4 align-top font-semibold text-forest-950 sm:px-6">{r.who}</td>
                    <td className="px-4 py-4 text-muted sm:px-6">{r.does}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-muted">
            Want to see what we check? Read the{" "}
            <Link href="/due-diligence" className="font-medium text-forest-800 underline">
              due-diligence checklist
            </Link>
            .
          </p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
