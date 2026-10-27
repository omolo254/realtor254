import type { PropertyType } from "@/data/properties";

// Illustrated placeholder used instead of photography in the mockup.
export default function PropertyArt({ hue, type, className = "" }: { hue: number; type: PropertyType; className?: string }) {
  const sky = `hsl(${hue} 45% 82%)`;
  const hill = `hsl(${hue} 30% 62%)`;
  const ground = `hsl(${hue} 35% 38%)`;
  const isLand = type === "Land";
  const isBeach = type === "Beach house";
  const isTall = type === "Apartment";

  return (
    <svg viewBox="0 0 400 250" className={className} preserveAspectRatio="xMidYMid slice" role="img" aria-label={`${type} illustration`}>
      <rect width="400" height="250" fill={sky} />
      <circle cx="320" cy="62" r="26" fill="#f6edd6" opacity="0.9" />
      <path d="M0 170 Q100 120 200 160 T400 150 V250 H0z" fill={hill} />
      {isBeach ? (
        <path d="M0 205 Q200 185 400 205 V250 H0z" fill="#e9dcb8" />
      ) : (
        <path d="M0 200 Q200 180 400 200 V250 H0z" fill={ground} />
      )}
      {!isLand && !isTall && (
        <g>
          <rect x="130" y="130" width="140" height="70" fill="#faf7f0" />
          <path d="M118 134 200 88l82 46z" fill="#0b3226" />
          <rect x="150" y="150" width="26" height="22" fill={sky} />
          <rect x="224" y="150" width="26" height="22" fill={sky} />
          <rect x="188" y="160" width="24" height="40" fill="#c9a24c" />
        </g>
      )}
      {isTall && (
        <g>
          <rect x="160" y="60" width="80" height="140" fill="#faf7f0" />
          {Array.from({ length: 6 }).map((_, row) =>
            [172, 196, 220].map((x) => <rect key={`${row}-${x}`} x={x} y={72 + row * 20} width="12" height="10" fill={sky} />),
          )}
          <rect x="160" y="56" width="80" height="6" fill="#0b3226" />
        </g>
      )}
      {isLand && (
        <g stroke="#faf7f0" strokeWidth="3" strokeDasharray="8 6" fill="none">
          <path d="M110 215 L150 175 L290 178 L310 220z" />
        </g>
      )}
      {[60, 340].map((x) => (
        <g key={x}>
          <rect x={x - 3} y="160" width="6" height="40" fill="#3b2e1e" />
          <circle cx={x} cy="150" r="22" fill="#175a43" />
        </g>
      ))}
    </svg>
  );
}
