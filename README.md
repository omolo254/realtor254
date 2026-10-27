# Realtor254 Diaspora Homes

A business plan and clickable website mockup for a buyer-side concierge that helps Kenyans abroad buy high-end homes in Kenya safely.

- **Business plan:** [`docs/business-plan.md`](docs/business-plan.md). It covers the first-principles analysis, legal constraints (EARB, Advocates Act, POCAMLA), the hybrid revenue model, unit economics, roadmap, risk register and confidence review.
- **Website mockup:** a Next.js 15 (App Router) + TypeScript + Tailwind CSS v4 app in `src/`. All listings, testimonials and portal data are **samples**.

## Run the mockup

```bash
npm install
npm run dev        # http://localhost:3000
npm test           # cost-calculator unit tests (Node 22+)
npm run build      # production build
```

## Pages

| Route | What it shows |
|---|---|
| `/` | Hero, trust pillars, 6-step process, featured verified homes, testimonials |
| `/how-it-works` | Full process plus a who-does-what table (agent, advocate, us) |
| `/properties`, `/properties/[slug]` | Filterable listings; detail page with verification report and viewing request |
| `/services` | Verify / Full Concierge / Aftercare tiers, and **How we're paid** |
| `/due-diligence` | Anti-fraud checklist and red flags |
| `/calculator` | Stamp duty (4% / 2%), legal, valuation and mortgage costs in KES/USD/GBP/EUR |
| `/partners` | Partner categories (placeholder logos only) |
| `/guide` | Diaspora buyer FAQ |
| `/portal` | Client portal mockup: deal tracker, documents, messages |
| `/contact` | Booking form (mock, sends nothing) |

## Structure

```
src/
  app/          routes (App Router)
  components/   Header, Footer, PropertyCard, CostCalculator, ...
  data/         mock listings and site copy
  lib/costs.ts  pure cost-calculation functions (+ costs.test.ts)
```

> Partner brands (e.g. Hass Consult) are deliberately **not** shown. Add partner names and logos only after a written agreement grants permission.
