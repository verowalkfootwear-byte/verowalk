type Props = {
  color: string;
  accent: string;
  className?: string;
};

export default function ShoeIcon({ color, accent, className }: Props) {
  return (
    <svg
      viewBox="0 0 200 120"
      className={className}
      role="img"
      aria-label="Shoe illustration"
    >
      <path
        d="M10 80 C10 50 40 45 60 40 L80 20 C90 10 105 15 108 28 L112 45 C140 50 190 58 192 85 L192 92 L10 92 Z"
        fill={color}
      />
      <path d="M10 88 H192 V100 C192 104 188 108 184 108 H18 C14 108 10 104 10 100 Z" fill="#f1ede6" />
      <path d="M62 42 L112 50" stroke={accent} strokeWidth="5" strokeLinecap="round" />
      <path d="M68 54 L118 62" stroke={accent} strokeWidth="5" strokeLinecap="round" />
      <path d="M20 78 C60 70 120 74 185 84" stroke={accent} strokeWidth="4" fill="none" strokeLinecap="round" />
    </svg>
  );
}
