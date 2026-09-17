const PALETTE = ["#b9862c", "#46545a", "#7a5c2e", "#2f4a3c", "#8a6a3a"];

function hashName(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) {
    h = (h << 5) - h + name.charCodeAt(i);
    h |= 0;
  }
  return Math.abs(h);
}

export default function MonogramBadge({
  name,
  size = 56,
}: {
  name: string;
  size?: number;
}) {
  const initials = name
    .split(" ")
    .filter((w) => w[0] && w[0] === w[0].toUpperCase() && /[A-Za-z]/.test(w[0]))
    .slice(0, 2)
    .map((w) => w[0])
    .join("") || name.slice(0, 2).toUpperCase();

  const color = PALETTE[hashName(name) % PALETTE.length];

  return (
    <div
      className="flex items-center justify-center rounded-md font-display font-medium text-white shrink-0"
      style={{ width: size, height: size, background: color, fontSize: size * 0.36 }}
      aria-hidden="true"
    >
      {initials}
    </div>
  );
}
