const tones = ["#8B5A3C", "#5C3A2E", "#B58B68", "#2B1D14"];

export function Avatar({
  name,
  index = 0,
  size = 40,
  className = "",
}: {
  name: string;
  index?: number;
  size?: number;
  className?: string;
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);
  return (
    <span
      aria-hidden
      className={`inline-grid shrink-0 place-items-center rounded-full font-semibold text-cream ring-2 ring-cream ${className}`}
      style={{ width: size, height: size, background: tones[index % tones.length], fontSize: size * 0.36 }}
    >
      {initials}
    </span>
  );
}
