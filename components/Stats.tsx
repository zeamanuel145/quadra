import { Camera, Film, Megaphone } from "lucide-react";
import { stats } from "@/lib/data";

const icons = [Megaphone, Film, Camera];

export function Stats() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-5 pt-20 md:grid-cols-3 md:gap-0">
      {stats.map((s, i) => {
        const Icon = icons[i];
        return (
          <div key={s.label} className={`md:px-10 ${i > 0 ? "md:border-l md:border-dashed md:border-cream/30" : "md:pl-0"}`}>
            <span className="inline-flex items-center gap-2 rounded-lg bg-cream/10 px-3 py-2 text-sm">
              <Icon size={16} aria-hidden /> {s.label}
            </span>
            <p className="mt-8 text-7xl font-light tracking-tight sm:text-8xl">{s.value}</p>
            <p className="mt-8 max-w-xs text-lg font-medium leading-snug text-cream/80">{s.text}</p>
          </div>
        );
      })}
    </div>
  );
}
