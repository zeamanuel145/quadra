"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { RoleIcon } from "./RoleIcon";
import { projects, roles, type RoleId } from "@/lib/data";

const covers: Record<RoleId, { bg: string; dark: boolean }> = {
  social: { bg: "linear-gradient(135deg,#8B5A3C,#5C3A2E)", dark: false },
  video: { bg: "linear-gradient(135deg,#2B1D14,#5C3A2E)", dark: false },
  photo: { bg: "linear-gradient(135deg,#F5EEE4,#d3b595)", dark: true },
  code: { bg: "linear-gradient(135deg,#5C3A2E,#8B5A3C 60%,#EDDCC9)", dark: false },
};

const filters: ("all" | RoleId)[] = ["all", "social", "video", "photo", "code"];

export function Work() {
  const [f, setF] = useState<"all" | RoleId>("all");
  const list = f === "all" ? projects : projects.filter((p) => p.role === f);

  return (
    <section id="work" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="fade-text text-5xl font-medium sm:text-7xl">Selected Work</h2>
          <div role="tablist" aria-label="Filter work" className="flex flex-wrap gap-1 rounded-full bg-white/70 p-1.5">
            {filters.map((k) => (
              <button
                key={k}
                role="tab"
                aria-selected={f === k}
                onClick={() => setF(k)}
                className={`rounded-full px-4 py-2.5 text-sm transition-colors ${
                  f === k ? "bg-clay text-cream" : "hover:bg-sand"
                }`}
              >
                {k === "all" ? "All" : roles[k].short}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {list.map((p) => {
            const c = covers[p.role];
            return (
              <article key={p.id} className="group overflow-hidden rounded-3xl bg-white/80">
                <div
                  className={`relative grid h-52 place-items-center ${c.dark ? "text-cocoa" : "text-cream"}`}
                  style={{ background: c.bg }}
                >
                  <RoleIcon role={p.role} size={56} className="opacity-40" />
                  <span className="absolute left-4 top-4 rounded-full bg-black/15 px-3 py-1 text-xs backdrop-blur">
                    {roles[p.role].short}
                  </span>
                  <span className="absolute right-4 top-4 grid h-9 w-9 place-items-center rounded-full bg-cream text-clay transition-transform group-hover:rotate-12">
                    <ArrowUpRight size={18} aria-hidden />
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-medium tracking-tight">{p.title}</h3>
                  <p className="mt-1 text-sm text-ink/60">{p.client}, {p.year}</p>
                  <p className="mt-4 text-sm font-medium text-clay">{p.result}</p>
                </div>
              </article>
            );
          })}
        </div>
        <p className="mt-6 text-sm text-ink/50">Swap the gradient covers for real images in components/Work.tsx.</p>
      </div>
    </section>
  );
}
