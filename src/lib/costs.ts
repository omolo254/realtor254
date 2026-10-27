// Pure cost-estimation helpers used by the buying-cost calculator.
// All figures are indicative estimates, not quotes.

export type Currency = "KES" | "USD" | "GBP" | "EUR";

// Indicative KES per unit of foreign currency (mock rates; replace with a live feed).
export const FX_RATES: Record<Currency, number> = {
  KES: 1,
  USD: 129,
  GBP: 172,
  EUR: 150,
};

export const STAMP_DUTY_URBAN = 0.04; // gazetted towns & municipalities, incl. Nairobi
export const STAMP_DUTY_RURAL = 0.02;
export const LEGAL_FEE_RATE = 0.0125; // mid-point of the ~1–1.5% typical range
export const VALUATION_RATE = 0.0015;
export const VALUATION_MIN = 50_000;
export const SEARCH_AND_REGISTRATION = 25_000;
export const MORTGAGE_ARRANGEMENT_RATE = 0.015;

export const CONCIERGE_RATE = 0.01;
export const CONCIERGE_MIN_USD = 4_000;
export const CONCIERGE_CAP_USD = 12_000;

export interface CostInput {
  priceKes: number;
  urban: boolean;
  mortgage: boolean;
  depositRate: number; // e.g. 0.2 for 20%
  interestRate: number; // annual, e.g. 0.13
  termYears: number;
  includeConcierge: boolean;
}

export interface CostLine {
  label: string;
  kes: number;
  note?: string;
}

export interface CostBreakdown {
  lines: CostLine[];
  closingCostsKes: number;
  cashNeededKes: number;
  loanKes: number;
  monthlyPaymentKes: number;
}

export function stampDuty(priceKes: number, urban: boolean): number {
  return priceKes * (urban ? STAMP_DUTY_URBAN : STAMP_DUTY_RURAL);
}

export function conciergeFeeKes(priceKes: number): number {
  const usd = (priceKes * CONCIERGE_RATE) / FX_RATES.USD;
  const clamped = Math.min(Math.max(usd, CONCIERGE_MIN_USD), CONCIERGE_CAP_USD);
  return clamped * FX_RATES.USD;
}

export function monthlyPayment(principal: number, annualRate: number, years: number): number {
  if (principal <= 0 || years <= 0) return 0;
  const n = years * 12;
  const r = annualRate / 12;
  if (r === 0) return principal / n;
  return (principal * r) / (1 - Math.pow(1 + r, -n));
}

export function estimateCosts(input: CostInput): CostBreakdown {
  const { priceKes, urban, mortgage, depositRate, interestRate, termYears, includeConcierge } = input;
  const loanKes = mortgage ? priceKes * (1 - depositRate) : 0;

  const lines: CostLine[] = [
    {
      label: "Stamp duty",
      kes: stampDuty(priceKes, urban),
      note: urban ? "4% — gazetted town / municipality" : "2% — outside municipalities",
    },
    { label: "Advocate's legal fees (est.)", kes: priceKes * LEGAL_FEE_RATE, note: "Paid directly to your chosen advocate" },
    { label: "Valuation", kes: Math.max(priceKes * VALUATION_RATE, VALUATION_MIN) },
    { label: "Searches, consents & registration", kes: SEARCH_AND_REGISTRATION },
  ];

  if (mortgage) {
    lines.push({ label: "Mortgage arrangement fee (est.)", kes: loanKes * MORTGAGE_ARRANGEMENT_RATE });
  }
  if (includeConcierge) {
    lines.push({ label: "Full Concierge fee", kes: conciergeFeeKes(priceKes), note: "1% · min US$4k · cap US$12k" });
  }

  const closingCostsKes = lines.reduce((sum, l) => sum + l.kes, 0);
  const upfront = mortgage ? priceKes - loanKes : priceKes;

  return {
    lines,
    closingCostsKes,
    cashNeededKes: upfront + closingCostsKes,
    loanKes,
    monthlyPaymentKes: monthlyPayment(loanKes, interestRate, termYears),
  };
}

export function convert(kes: number, currency: Currency): number {
  return kes / FX_RATES[currency];
}

export function formatMoney(amount: number, currency: Currency): string {
  return new Intl.NumberFormat("en-KE", {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
