export const site = {
  name: "Realtor254",
  tagline: "Diaspora Homes",
  whatsapp: "https://wa.me/254700000000",
  email: "hello@realtor254.example",
};

export const nav = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/properties", label: "Homes" },
  { href: "/services", label: "Services & fees" },
  { href: "/due-diligence", label: "Due diligence" },
  { href: "/calculator", label: "Cost calculator" },
  { href: "/guide", label: "Buyer's guide" },
];

export const steps = [
  {
    title: "Discover",
    body: "A video call at a time that suits your time zone. We cover goals, budget, financing and citizenship, and complete KYC.",
  },
  {
    title: "Shortlist",
    body: "Curated homes from licensed partner agencies, or homes you found yourself. We tell you honestly which ones are worth pursuing.",
  },
  {
    title: "Verify",
    body: "Your advocate runs the official search. Our coordinator walks the site on video, confirms beacons, and checks rates, approvals and the seller's identity.",
  },
  {
    title: "Offer",
    body: "Negotiation is handled by the licensed estate agent of record. We advise you at every step and make sure nothing is rushed.",
  },
  {
    title: "Legal & funds",
    body: "Your money goes only to your advocate's client account or bank escrow, never to us and never to a seller directly.",
  },
  {
    title: "Handover & aftercare",
    body: "Transfer registered, keys, an inventory video, utilities moved. Then letting, maintenance and statements if you want them.",
  },
];

export const pillars = [
  { title: "We never hold your money", body: "Every shilling goes through your own advocate's client account or a bank escrow." },
  { title: "Your lawyer works for you", body: "Choose from a panel of independent advocates. We take no referral fees from lawyers, ever." },
  { title: "Eyes on the ground", body: "Geo-tagged site videos, beacon checks and live walkthroughs, all scheduled around your time zone." },
  { title: "Fees in writing, upfront", body: "Every fee we receive, from you or from a partner agency, is disclosed before you commit." },
];

export const tiers = [
  {
    name: "Verify",
    price: "US$1,500",
    unit: "per property",
    blurb: "For buyers who have found a home and want an independent check before paying a deposit.",
    features: [
      "Official title search coordinated with your advocate",
      "Site visit with geo-tagged video",
      "Survey and beacon confirmation",
      "Land rates & land rent status",
      "Written red-flag report within 10 working days",
    ],
    featured: false,
  },
  {
    name: "Full Concierge",
    price: "1% of price",
    unit: "min US$4,000 · cap US$12,000",
    blurb: "End-to-end support, from shortlist to keys, for buyers who want one accountable point of contact.",
    features: [
      "Everything in Verify, for up to 3 homes",
      "Curated shortlist from licensed agencies",
      "Coordination with agent, advocate, valuer and bank",
      "Weekly calls in your time zone",
      "Live deal tracker & document vault",
      "Completion, handover and inventory video",
    ],
    featured: true,
  },
  {
    name: "Aftercare",
    price: "8–10%",
    unit: "of rent collected",
    blurb: "Keep your home occupied, maintained and earning while you're abroad.",
    features: [
      "Tenant sourcing & vetting via licensed manager",
      "Rent collection & monthly statements",
      "Maintenance with photo evidence",
      "Rates & land rent paid on time",
      "Annual inspection video",
    ],
    featured: false,
  },
];

export const paidBy = [
  { who: "You (the buyer)", what: "Our Verify, Concierge or Aftercare fee, invoiced by us and quoted in writing." },
  {
    who: "Licensed partner agency",
    what: "An introducer fee, a share of the agency's own commission, payable only on completion under a written agreement. It never increases your price.",
  },
  { who: "Advocates", what: "Nothing. Kenyan law prohibits advocates sharing fees, and we wouldn't want it anyway." },
  { who: "Valuers, surveyors, banks", what: "Nothing. You pay them directly at their published rates." },
];

export const dueDiligence = [
  {
    group: "Title & ownership",
    items: [
      "Official search on Ardhisasa (or the county registry), run by your advocate rather than the seller",
      "Seller's ID and KRA PIN matched to the registered owner; spousal consent where needed",
      "Encumbrances checked: charges, cautions, restrictions, caveats",
      "For companies: CR12 to confirm directors and shareholders",
    ],
  },
  {
    group: "Land on the ground",
    items: [
      "Registry index map and survey map compared to the physical plot",
      "Beacons located by a licensed surveyor",
      "Geo-tagged video and neighbour conversations",
      "Access road confirmed as public or registered easement",
    ],
  },
  {
    group: "Rates, rent & consents",
    items: [
      "County land rates clearance certificate",
      "Land rent clearance (leasehold)",
      "Land Control Board consent for agricultural land",
      "Consent to transfer from the lessor where the lease requires it",
    ],
  },
  {
    group: "Buildings & off-plan",
    items: [
      "Approved building plans and occupation certificate",
      "NCA-registered contractor and NEMA licence (off-plan)",
      "Deposit held in escrow, with payments tied to construction milestones",
      "Developer track record: visit completed projects and speak to buyers",
    ],
  },
  {
    group: "Money",
    items: [
      "Pay only to your advocate's client account. Confirm bank details by phone, never by email alone",
      "No cash, ever",
      "Stamp duty paid via Ardhipay with an official receipt",
      "Keep every receipt, agreement and completion document in your vault",
    ],
  },
];

export const faqs = [
  {
    q: "Can I buy freehold land as a Kenyan citizen living abroad?",
    a: "Yes. Kenyan citizens, including dual citizens, can hold freehold land wherever they live. Non-citizens, such as a foreign spouse, can hold land only on leasehold of up to 99 years. Your advocate will advise on how to hold title jointly.",
  },
  {
    q: "Do I need to travel to Kenya to complete?",
    a: "Usually not. You sign documents before a notary public where you live, and they are then stamped in Kenya. A specific, narrowly scoped power of attorney can be used where needed, but we discourage general powers of attorney.",
  },
  {
    q: "Can I get a mortgage while living abroad?",
    a: "Several Kenyan banks offer diaspora mortgages, typically with a 10–30% deposit and proof of foreign income. We introduce you to lenders; they assess you directly. We take no fee from banks.",
  },
  {
    q: "What does buying actually cost on top of the price?",
    a: "Expect roughly 6–8% in total: stamp duty (4% in municipalities such as Nairobi, 2% elsewhere), legal fees, valuation, searches and registration. Try the cost calculator for your own numbers.",
  },
  {
    q: "Are you an estate agent?",
    a: "No. We are a buyer-side concierge and verification service. Every sale is negotiated by an EARB-registered estate agent of record, and you can check any agent on the Estate Agents Registration Board's register.",
  },
  {
    q: "How do I know you're not part of the problem?",
    a: "We never touch purchase money, every fee is disclosed in writing, your advocate is independent of us, and our Verify fee is the same whether you buy or walk away.",
  },
];

export const testimonials = [
  {
    quote: "I had been burned once before. This time I watched every step from Houston, and my lawyer held every shilling.",
    name: "Sample client",
    place: "Houston, USA",
  },
  {
    quote: "They told me not to buy the first house. That's when I knew I could trust them with the second.",
    name: "Sample client",
    place: "Manchester, UK",
  },
  {
    quote: "Weekly calls at 7pm Dubai time and a tracker I could share with my wife. Simple.",
    name: "Sample client",
    place: "Dubai, UAE",
  },
];

export const partnerCategories = [
  { title: "Licensed estate agencies", body: "EARB-registered agencies that act as agent of record and negotiate on every sale.", count: 3 },
  { title: "Conveyancing advocates", body: "Independent firms you choose from and pay directly. They hold all purchase funds.", count: 3 },
  { title: "Diaspora mortgage lenders", body: "Kenyan banks with mortgage products for buyers earning abroad.", count: 4 },
  { title: "Valuers & surveyors", body: "Registered professionals on bank panels who confirm value and boundaries.", count: 3 },
];
