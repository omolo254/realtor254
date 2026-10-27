// SAMPLE listings for the mockup only. Real listings will come from licensed
// partner agencies under written agreements.

export type PropertyType = "Villa" | "Townhouse" | "Apartment" | "Beach house" | "Land";
export type VerificationStatus = "Verified" | "In verification" | "Not yet verified";

export interface Property {
  slug: string;
  title: string;
  location: string;
  area: string;
  type: PropertyType;
  priceKes: number;
  beds: number;
  baths: number;
  plotAcres?: number;
  sizeSqm?: number;
  tenure: "Freehold" | "Leasehold";
  municipality: boolean; // within a gazetted town/municipality → 4% stamp duty
  status: VerificationStatus;
  hue: number; // drives the placeholder artwork colour
  summary: string;
  highlights: string[];
  checks: { item: string; done: boolean }[];
}

const fullChecks = (done: number) =>
  [
    "Official search (Ardhisasa) by buyer's advocate",
    "Seller identity & KYC matched to title",
    "Site visit & geo-tagged video",
    "Survey map & beacons confirmed",
    "Land rates & land rent clearance",
    "Approvals & occupation certificate",
  ].map((item, i) => ({ item, done: i < done }));

export const properties: Property[] = [
  {
    slug: "karen-garden-villa",
    title: "Garden villa on a quiet Karen cul-de-sac",
    location: "Karen, Nairobi",
    area: "Karen",
    type: "Villa",
    priceKes: 85_000_000,
    beds: 5,
    baths: 5,
    plotAcres: 1,
    sizeSqm: 520,
    tenure: "Freehold",
    municipality: true,
    status: "Verified",
    hue: 150,
    summary:
      "A mature one-acre garden, a five-bedroom main house with DSQ, borehole and solar backup, ten minutes from the Hub and Karen Country Club.",
    highlights: ["1 acre, mature garden", "Borehole + solar backup", "Detached 2-bed DSQ", "Gated community"],
    checks: fullChecks(6),
  },
  {
    slug: "runda-family-home",
    title: "Renovated family home in Runda",
    location: "Runda, Nairobi",
    area: "Runda",
    type: "Villa",
    priceKes: 110_000_000,
    beds: 6,
    baths: 6,
    plotAcres: 0.75,
    sizeSqm: 610,
    tenure: "Freehold",
    municipality: true,
    status: "Verified",
    hue: 35,
    summary:
      "Fully renovated in 2025 with a new kitchen, roof and wiring. Close to the UN complex, international schools and Two Rivers.",
    highlights: ["2025 renovation", "Close to UN Gigiri", "Pool & staff quarters", "Fibre-ready"],
    checks: fullChecks(6),
  },
  {
    slug: "lavington-townhouse",
    title: "Contemporary townhouse in Lavington",
    location: "Lavington, Nairobi",
    area: "Lavington",
    type: "Townhouse",
    priceKes: 62_000_000,
    beds: 4,
    baths: 4,
    sizeSqm: 380,
    tenure: "Leasehold",
    municipality: true,
    status: "In verification",
    hue: 200,
    summary:
      "One of eight townhouses in a managed compound with a shared pool and gym, an easy walk to Lavington Mall.",
    highlights: ["Compound of 8 units", "Shared pool & gym", "Rooftop terrace", "Strong rental demand"],
    checks: fullChecks(3),
  },
  {
    slug: "riverside-penthouse",
    title: "Riverside Drive penthouse with city views",
    location: "Riverside, Nairobi",
    area: "Riverside",
    type: "Apartment",
    priceKes: 48_000_000,
    beds: 3,
    baths: 3,
    sizeSqm: 260,
    tenure: "Leasehold",
    municipality: true,
    status: "Verified",
    hue: 260,
    summary:
      "A top-floor, three-bedroom apartment with a wraparound balcony. Diplomatic-grade security and serviced-letting potential.",
    highlights: ["Top floor, 2 parking bays", "Backup generator & lifts", "Serviced-letting potential", "Sinking fund in place"],
    checks: fullChecks(6),
  },
  {
    slug: "diani-beach-house",
    title: "Beachfront house in Diani",
    location: "Diani, Kwale",
    area: "Diani",
    type: "Beach house",
    priceKes: 95_000_000,
    beds: 4,
    baths: 4,
    plotAcres: 0.6,
    sizeSqm: 340,
    tenure: "Freehold",
    municipality: false,
    status: "In verification",
    hue: 185,
    summary:
      "Direct beach access, a makuti-roofed lounge and a pool. A strong holiday-let track record, with accounts available on request.",
    highlights: ["Direct beach access", "Holiday-let income history", "Pool & cottage", "30 min to Ukunda airstrip"],
    checks: fullChecks(2),
  },
  {
    slug: "kitisuru-plot",
    title: "Half-acre residential plot in Kitisuru",
    location: "Kitisuru, Nairobi",
    area: "Kitisuru",
    type: "Land",
    priceKes: 42_000_000,
    beds: 0,
    baths: 0,
    plotAcres: 0.5,
    tenure: "Freehold",
    municipality: true,
    status: "Not yet verified",
    hue: 95,
    summary:
      "A gently sloping plot on a tarmac road, zoned for a single dwelling. Ideal for a custom retirement home.",
    highlights: ["Tarmac access", "Water & power at boundary", "Single-dwelling zoning", "Quiet, leafy street"],
    checks: fullChecks(0),
  },
];

export const getProperty = (slug: string) => properties.find((p) => p.slug === slug);
export const areas = Array.from(new Set(properties.map((p) => p.area)));
export const propertyTypes = Array.from(new Set(properties.map((p) => p.type)));
