import type { VerificationStatus } from "@/data/properties";

const styles: Record<VerificationStatus, string> = {
  Verified: "bg-forest-800 text-cream",
  "In verification": "bg-gold-400 text-forest-950",
  "Not yet verified": "bg-white text-muted ring-1 ring-forest-900/15",
};

export default function StatusBadge({ status }: { status: VerificationStatus }) {
  return (
    <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium ${styles[status]}`}>
      {status === "Verified" && (
        <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="currentColor" aria-hidden>
          <path d="M6.5 11.2 3.3 8l1-1 2.2 2.2 5.2-5.2 1 1z" />
        </svg>
      )}
      {status}
    </span>
  );
}
