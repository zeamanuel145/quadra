import { ArrowUpRight } from "lucide-react";
import { Avatar } from "./Avatar";
import { HeroCards } from "./HeroCards";
import { MetalCard } from "./MetalCard";
import { team } from "@/lib/data";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-cream">
      {/* soft blurred washes + dotted texture, from the reference */}
      <div aria-hidden className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full bg-sand blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -right-40 top-1/2 h-[560px] w-[560px] rounded-full bg-clay/20 blur-[120px]" />
      <div aria-hidden className="dots pointer-events-none absolute -left-10 bottom-0 h-[420px] w-[55%] text-clay/70" />
      <div aria-hidden className="dots pointer-events-none absolute -right-10 bottom-0 h-[420px] w-[55%] text-clay/70" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center px-5 pt-16 text-center sm:pt-24">
        <div className="flex items-center gap-3 rounded-full bg-sand/80 py-1.5 pl-1.5 pr-4 text-sm">
          <span className="flex -space-x-2">
            {team.map((p, i) => (
              <Avatar key={p.id} name={p.name} index={i} size={32} />
            ))}
          </span>
          <span>4 creators, open for new projects</span>
        </div>

        <h1 className="mt-8 text-[clamp(3.2rem,9vw,7.5rem)] font-medium">
          <span className="fade-text block">Four Creators</span>
          <span className="fade-text flex items-center justify-center gap-3 sm:gap-5">
            Building Your
            <span className="relative hidden h-[0.62em] w-[1.5em] items-center rounded-full bg-sand/80 sm:inline-flex" aria-hidden>
              <span className="ml-auto grid h-[0.62em] w-[0.62em] place-items-center rounded-full bg-clay text-cream">
                <ArrowUpRight className="h-[45%] w-[45%]" />
              </span>
            </span>
            Brand
          </span>
        </h1>

        <p className="mt-6 max-w-xl text-lg text-ink/60 sm:text-xl">
          Social media. Video editing. Photography. Software. One team, one brief.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <a href="#work" className="rounded-full bg-clay px-8 py-4 text-base text-cream shadow-lg shadow-clay/30 transition-colors hover:bg-cocoa">
            See our work
          </a>
          <a href="#team" className="rounded-full border border-clay px-8 py-4 text-base text-clay transition-colors hover:bg-clay hover:text-cream">
            Meet the team
          </a>
        </div>

        <div className="relative z-10 mt-12 -mb-10">
          <MetalCard />
        </div>
      </div>

      <div className="relative mt-0 pt-6">
        <HeroCards />
      </div>
    </section>
  );
}
