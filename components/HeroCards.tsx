import { ArrowUpRight } from "lucide-react";
import { RoleIcon } from "./RoleIcon";
import { roles, type RoleId } from "@/lib/data";

function Head({ role }: { role: RoleId }) {
  return (
    <div className="flex items-center gap-2">
      <RoleIcon role={role} size={18} />
      <span className="text-lg tracking-tight">{roles[role].label}</span>
    </div>
  );
}

const heat = [1,0,2,3,1,0,2, 2,3,3,1,2,0,1, 0,1,3,2,3,3,2, 1,2,0,3,3,2,3];

export function HeroCards() {
  return (
    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-4 px-5 sm:grid-cols-2 lg:grid-cols-4">
      {/* Social */}
      <article className="h-64 rounded-t-3xl bg-clay p-6 text-cream">
        <Head role="social" />
        <div className="mt-6 flex items-end justify-between">
          <p className="text-4xl font-medium tracking-tight">482K</p>
          <p className="flex items-center gap-1 text-sm"><ArrowUpRight size={14} aria-hidden /> 12% this month</p>
        </div>
        <div className="mt-5 flex gap-1 rounded-full bg-cream/15 p-1" aria-hidden>
          {["Posts", "Reels", "Stories", "Ads"].map((t, i) => (
            <span key={t} className={`flex-1 rounded-full py-2 text-center text-xs ${i === 1 ? "bg-cream text-clay" : ""}`}>{t}</span>
          ))}
        </div>
        <svg viewBox="0 0 200 40" className="mt-4 h-10 w-full" aria-hidden>
          <polyline fill="none" stroke="#F5EEE4" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
            points="0,32 25,28 50,30 75,18 100,22 125,12 150,15 175,6 200,9" />
        </svg>
      </article>

      {/* Video */}
      <article className="h-64 rounded-t-3xl bg-white/80 p-6 text-ink">
        <Head role="video" />
        <div className="mt-6 space-y-2" aria-hidden>
          {[
            [["w-1/3", "bg-clay"], ["w-1/4", "bg-cocoa"], ["w-1/5", "bg-clay/60"]],
            [["w-1/5", "bg-sand"], ["w-1/2", "bg-clay/80"], ["w-1/6", "bg-sand"]],
            [["w-2/5", "bg-cocoa"], ["w-1/3", "bg-sand"]],
          ].map((track, i) => (
            <div key={i} className="flex gap-1.5">
              {track.map(([w, c], j) => (
                <span key={j} className={`h-7 rounded-md ${w} ${c}`} />
              ))}
            </div>
          ))}
        </div>
        <div className="relative mt-3 h-px bg-ink/20" aria-hidden>
          <span className="absolute -top-14 left-[46%] h-16 w-0.5 bg-ink" />
        </div>
        <p className="mt-5 text-sm text-ink/70">Timeline 00:42 of 01:30</p>
      </article>

      {/* Photo */}
      <article className="h-64 rounded-t-3xl bg-clay p-6 text-cream">
        <Head role="photo" />
        <div className="mt-6 flex h-20 items-end gap-1" aria-hidden>
          {[14,22,34,50,64,58,44,52,70,60,40,26,18,10].map((h, i) => (
            <span key={i} className="flex-1 rounded-t bg-cream/80" style={{ height: `${h}%` }} />
          ))}
        </div>
        <div className="mt-5 flex gap-2 text-sm">
          {["f/1.8", "1/250", "ISO 100"].map((s) => (
            <span key={s} className="rounded-full bg-cream/15 px-3 py-1.5">{s}</span>
          ))}
        </div>
      </article>

      {/* Code */}
      <article className="h-64 rounded-t-3xl bg-white/80 p-6 text-ink">
        <Head role="code" />
        <div className="mt-6 flex items-end justify-between">
          <p className="text-4xl font-medium tracking-tight">Passed</p>
          <p className="text-sm text-ink/70">Deploy 214</p>
        </div>
        <div className="mt-5 grid gap-1" style={{ gridTemplateColumns: "repeat(14, minmax(0,1fr))" }} aria-hidden>
          {heat.map((v, i) => (
            <span key={i} className="aspect-square rounded-[3px] bg-clay" style={{ opacity: [0.12, 0.35, 0.65, 1][v] }} />
          ))}
        </div>
      </article>
    </div>
  );
}
