"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { nav } from "@/data/content";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-forest-900/10 bg-cream/95 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Main">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm transition-colors hover:text-forest-700 ${
                pathname.startsWith(item.href) ? "font-semibold text-forest-800" : "text-muted"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/portal" className="text-sm text-muted hover:text-forest-700">
            Client login
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-forest-800 px-4 py-2 text-sm font-medium text-cream hover:bg-forest-700"
          >
            Book a call
          </Link>
        </div>
        <button
          type="button"
          className="rounded-md p-2 text-forest-900 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((o) => !o)}
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
            {open ? <path d="M6 6l12 12M18 6 6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" className="border-t border-forest-900/10 bg-cream lg:hidden" aria-label="Mobile">
          <div className="container-page flex flex-col py-2">
            {[...nav, { href: "/portal", label: "Client login" }].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-forest-900/5 py-3 text-forest-900"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="my-3 rounded-full bg-forest-800 px-4 py-3 text-center font-medium text-cream"
            >
              Book a call
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
