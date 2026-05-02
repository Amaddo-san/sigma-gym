import { C } from "../tokens";

export default function SigmaLogo({ size = 48, className = "" }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="lgRed" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#E8293A" />
          <stop offset="100%" stopColor="#8B1520" />
        </linearGradient>
        <linearGradient id="lgNav" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%"   stopColor="#1E3A5F" />
          <stop offset="100%" stopColor="#0D1B2A" />
        </linearGradient>
      </defs>

      {/* Shield background */}
      <path
        d="M50 4 L92 20 L92 52 C92 74 72 90 50 96 C28 90 8 74 8 52 L8 20 Z"
        fill="url(#lgNav)"
      />

      {/* Gold border ring */}
      <path
        d="M50 12 L84 26 L84 52 C84 70 68 84 50 90 C32 84 16 70 16 52 L16 26 Z"
        fill="none"
        stroke={C.gold}
        strokeWidth="1.5"
      />

      {/* Sigma Σ */}
      <text
        x="50" y="65"
        textAnchor="middle"
        fontSize="44"
        fontWeight="900"
        fontFamily="Georgia, serif"
        fill="url(#lgRed)"
        letterSpacing="-2"
      >
        Σ
      </text>

      {/* Bottom gold bar */}
      <rect x="28" y="75" width="44" height="3" rx="1.5" fill={C.gold} />
    </svg>
  );
}
