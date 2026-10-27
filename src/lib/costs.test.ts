import { test } from "node:test";
import assert from "node:assert/strict";
import { conciergeFeeKes, estimateCosts, monthlyPayment, stampDuty } from "./costs.ts";

test("stamp duty is 4% urban and 2% rural", () => {
  assert.equal(stampDuty(80_000_000, true), 3_200_000);
  assert.equal(stampDuty(80_000_000, false), 1_600_000);
});

test("concierge fee is 1% with a US$4k floor and US$12k cap", () => {
  assert.equal(conciergeFeeKes(80_000_000), 800_000);
  assert.equal(conciergeFeeKes(10_000_000), 4_000 * 129);
  assert.equal(conciergeFeeKes(500_000_000), 12_000 * 129);
});

test("monthly payment matches the annuity formula", () => {
  // KES 10M over 20 years at 12% ≈ KES 110,109 / month
  assert.equal(Math.round(monthlyPayment(10_000_000, 0.12, 20)), 110_109);
  assert.equal(monthlyPayment(0, 0.12, 20), 0);
});

test("cash purchase in Nairobi totals price + closing costs", () => {
  const r = estimateCosts({
    priceKes: 80_000_000, urban: true, mortgage: false,
    depositRate: 0.2, interestRate: 0.13, termYears: 20, includeConcierge: false,
  });
  // 3.2M duty + 1M legal + 120k valuation + 25k searches
  assert.equal(r.closingCostsKes, 4_345_000);
  assert.equal(r.cashNeededKes, 84_345_000);
  assert.equal(r.loanKes, 0);
});

test("mortgage purchase needs only the deposit plus costs upfront", () => {
  const r = estimateCosts({
    priceKes: 50_000_000, urban: false, mortgage: true,
    depositRate: 0.2, interestRate: 0.13, termYears: 20, includeConcierge: false,
  });
  assert.equal(r.loanKes, 40_000_000);
  assert.equal(r.closingCostsKes, 1_000_000 + 625_000 + 75_000 + 25_000 + 600_000);
  assert.equal(r.cashNeededKes, 10_000_000 + r.closingCostsKes);
});
