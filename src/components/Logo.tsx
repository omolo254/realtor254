import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="Realtor254 Diaspora Homes, home">
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden>
        <rect width="32" height="32" rx="8" className="fill-forest-800" />
        <path d="M7 17 16 9l9 8v7a1 1 0 0 1-1 1h-5v-6h-6v6H8a1 1 0 0 1-1-1z" className="fill-gold-400" />
      </svg>
      <span className={`leading-tight ${light ? "text-cream" : "text-forest-900"}`}>
        <span className="block font-serif text-lg font-semibold">Realtor254</span>
        <span className={`block text-[0.65rem] uppercase tracking-[0.2em] ${light ? "text-gold-400" : "text-muted"}`}>
          Diaspora Homes
        </span>
      </span>
    </Link>
  );
}
