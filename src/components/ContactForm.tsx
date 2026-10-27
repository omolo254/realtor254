"use client";

import { useState } from "react";

const field =
  "mt-1 w-full rounded-lg border-0 bg-white px-3 py-2.5 ring-1 ring-forest-900/15 focus:ring-2 focus:ring-forest-700";

export default function ContactForm({ propertyTitle }: { propertyTitle?: string }) {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-2xl bg-forest-100 p-8 text-center" role="status">
        <p className="font-serif text-2xl font-semibold text-forest-900">Thank you. We&apos;ll be in touch within one working day.</p>
        <p className="mt-2 text-sm text-muted">This is a mockup, so nothing was sent.</p>
      </div>
    );
  }

  return (
    <form
      className="grid gap-4 rounded-2xl bg-white p-6 ring-1 ring-forest-900/10 sm:grid-cols-2"
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
    >
      <label className="text-sm font-medium text-forest-900">
        Full name
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <label className="text-sm font-medium text-forest-900">
        Email
        <input required type="email" name="email" autoComplete="email" className={field} />
      </label>
      <label className="text-sm font-medium text-forest-900">
        Country you live in
        <input required name="country" autoComplete="country-name" placeholder="e.g. United States" className={field} />
      </label>
      <label className="text-sm font-medium text-forest-900">
        WhatsApp number
        <input type="tel" name="phone" autoComplete="tel" className={field} />
      </label>
      <label className="text-sm font-medium text-forest-900">
        Budget
        <select name="budget" className={field} defaultValue="">
          <option value="" disabled>
            Select a range
          </option>
          <option>KES 30M–50M (≈ US$230k–390k)</option>
          <option>KES 50M–100M (≈ US$390k–775k)</option>
          <option>KES 100M–250M (≈ US$775k–1.9M)</option>
          <option>Above KES 250M</option>
        </select>
      </label>
      <label className="text-sm font-medium text-forest-900">
        When do you hope to buy?
        <select name="timeline" className={field} defaultValue="">
          <option value="" disabled>
            Select a timeline
          </option>
          <option>Within 3 months</option>
          <option>3–12 months</option>
          <option>Just researching</option>
        </select>
      </label>
      <label className="text-sm font-medium text-forest-900 sm:col-span-2">
        Best time for a call (your local time)
        <input name="time" placeholder="e.g. Saturdays 10am EST" className={field} />
      </label>
      <label className="text-sm font-medium text-forest-900 sm:col-span-2">
        What are you looking for?
        <textarea
          name="message"
          rows={4}
          defaultValue={propertyTitle ? `I'd like a verified viewing of: ${propertyTitle}` : ""}
          className={field}
        />
      </label>
      <label className="flex items-start gap-2 text-sm text-muted sm:col-span-2">
        <input required type="checkbox" className="mt-0.5 h-4 w-4 accent-forest-800" />
        I agree to be contacted and understand that identity (KYC) checks are required before any engagement.
      </label>
      <button type="submit" className="rounded-full bg-forest-800 px-6 py-3 font-medium text-cream hover:bg-forest-700 sm:col-span-2 sm:justify-self-start">
        Request my free call
      </button>
    </form>
  );
}
