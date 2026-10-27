import type { Metadata } from "next";
import CostCalculator from "@/components/CostCalculator";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Buying-cost calculator" };

export default async function CalculatorPage({ searchParams }: { searchParams: Promise<{ price?: string }> }) {
  const price = Number((await searchParams).price);
  return (
    <>
      <PageHero
        eyebrow="Cost calculator"
        title="What will it really cost?"
        intro="Stamp duty, legal fees, valuation and the mortgage, in your currency. Expect closing costs of roughly 6–8% of the price."
      />
      <section className="container-page py-12">
        <CostCalculator initialPrice={Number.isFinite(price) && price > 0 ? price : undefined} />
      </section>
    </>
  );
}
