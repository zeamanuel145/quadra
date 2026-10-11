"use client";

import { useState } from "react";
import { Star } from "lucide-react";
import { Avatar } from "./Avatar";
import { barData, radar, team } from "@/lib/data";

function BarCard() {
  const [a, setA] = useState(2);
  const s = 1.15;
  return (
    <div className="relative rounded-2xl bg-sand/70 p-6 shadow-xl shadow-ink/10">
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-medium tracking-tight">Monthly output</h3>
        <div className="flex items-center gap-4 text-xs text-ink/70">
          <span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-sm bg-cocoa" /> Delivered</span>
          <span className="flex items-center gap-1.5"><i className="h-2.5 w-2.5 rounded-sm bg-[#C4AD9C]" /> In progress</span>
        </div>
      </div>

      <div className="relative mt-6">
        <div aria-hidden className="absolute left-0 right-0 top-1/2 border-t border-dashed border-ink/30" />
        <div className="relative flex">
          {barData.map((d, k) => (
            <button
              key={d.m}
              onMouseEnter={() => setA(k)}
              onFocus={() => setA(k)}
              onClick={() => setA(k)}
              aria-label={`${d.m}: ${d.delivered} delivered, ${d.open} in progress`}
              className="flex flex-1 flex-col items-center"
            >
              <span className="flex h-[132px] items-end">
                <span className={`block w-10 rounded-full bg-cocoa transition-all sm:w-12 ${a === k ? "" : "opacity-85"}`} style={{ height: d.delivered * s }} />
              </span>
              <span className="mt-1 flex h-[132px] items-start">
                <span className="block w-10 rounded-full bg-[#C4AD9C] transition-all sm:w-12" style={{ height: d.open * s }} />
              </span>
              <span className="mt-2 text-xs">{d.m}</span>
            </button>
          ))}
        </div>
        <div
          className="pointer-events-none absolute top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white p-3 text-sm shadow-lg transition-all duration-300"
          style={{ left: `${((a + 0.5) / barData.length) * 100}%` }}
          aria-hidden
        >
          <p className="font-semibold">{barData[a].delivered} delivered</p>
          <p className="text-xs text-ink/60">{barData[a].m}</p>
          <p className="mt-1.5 font-semibold">{barData[a].open} in progress</p>
        </div>
      </div>
    </div>
  );
}

function RadarCard() {
  const [a, setA] = useState(2);
  const C = 150, R = 100, n = radar.length;
  const ang = (i: number) => -Math.PI / 2 + (i * 2 * Math.PI) / n;
  const pt = (i: number, v: number) => [C + Math.cos(ang(i)) * R * v, C + Math.sin(ang(i)) * R * v];
  const poly = (v: (i: number) => number) => radar.map((_, i) => pt(i, v(i)).join(",")).join(" ");

  return (
    <div className="relative rounded-2xl bg-sand/50 p-6 shadow-xl shadow-ink/10">
      <h3 className="text-xl font-medium tracking-tight">Skill balance</h3>
      <svg viewBox="0 0 300 300" className="mx-auto mt-2 w-full max-w-[340px]" role="img" aria-label="Radar chart of team strengths">
        {[0.33, 0.66, 1].map((r) => (
          <polygon key={r} points={poly(() => r)} fill="none" stroke="#8B5A3C" strokeOpacity="0.2" />
        ))}
        {radar.map((_, i) => (
          <line key={i} x1={C} y1={C} x2={pt(i, 1)[0]} y2={pt(i, 1)[1]} stroke="#8B5A3C" strokeOpacity="0.15" />
        ))}
        <polygon points={poly((i) => radar[i].v)} fill="#8B5A3C" fillOpacity="0.28" stroke="#5C3A2E" strokeWidth="1.5" />
        {radar.map((d, i) => {
          const [x, y] = pt(i, 1.28);
          const [px, py] = pt(i, d.v);
          return (
            <g key={d.k} tabIndex={0} onMouseEnter={() => setA(i)} onFocus={() => setA(i)} className="cursor-pointer outline-none">
              <circle cx={px} cy={py} r={a === i ? 5 : 3} fill="#5C3A2E" />
              <text x={x} y={y} textAnchor="middle" dominantBaseline="middle" fontSize="12" fill="#2B1D14" fillOpacity={a === i ? 1 : 0.55}>
                {d.k}
              </text>
            </g>
          );
        })}
      </svg>
      <div className="absolute left-6 top-16 rounded-lg bg-white px-3 py-2 text-xs shadow-lg" aria-live="polite">
        <p className="text-ink/60">{radar[a].k}</p>
        <p className="text-sm font-medium text-clay">{Math.round(radar[a].v * 100)}% client score</p>
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32">
      <div aria-hidden className="pointer-events-none absolute -left-32 top-1/2 h-96 w-96 rounded-full bg-sand blur-[110px]" />
      <div aria-hidden className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-clay/20 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="flex flex-wrap items-start justify-between gap-8">
          <h2 className="fade-text text-5xl font-medium sm:text-7xl">
            Handle Your Brand
            <br />
            End To End
          </h2>
          <p className="max-w-sm text-lg leading-snug text-ink/50">
            Plan the content, shoot it, cut it and put it online. Everything your brand needs, built by people who already work together.
          </p>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-12">
          <p className="max-w-xs self-end text-lg leading-snug text-ink/50 lg:col-span-3 lg:order-1 order-3">
            Take charge of your presence: a clear plan, strong visuals and a site that turns attention into customers.
          </p>

          <div className="grid gap-6 lg:relative lg:order-2 lg:col-span-6 lg:block lg:h-[600px]">
            <div className="z-10 lg:absolute lg:left-0 lg:top-0 lg:w-[66%]"><BarCard /></div>
            <div className="lg:absolute lg:bottom-0 lg:right-0 lg:w-[66%]"><RadarCard /></div>
          </div>

          <div className="space-y-6 lg:order-3 lg:col-span-3 lg:self-center">
            <div>
              <p className="flex items-center gap-2 text-xl font-semibold"><Star className="fill-[#D9694F] text-[#D9694F]" size={26} aria-hidden /> Client rating</p>
              <p className="mt-4 flex items-center gap-3 text-xl font-semibold">
                <span className="flex" aria-hidden>
                  {[0, 1, 2, 3, 4].map((s) => <Star key={s} size={20} className="fill-[#D9694F] text-[#D9694F]" />)}
                </span>
                5.0 from 120+ clients
              </p>
            </div>
            <div className="flex items-center gap-5 rounded-3xl bg-white p-6 shadow-xl shadow-ink/10">
              <span className="flex -space-x-3">
                {team.map((p, i) => <Avatar key={p.id} name={p.name} index={i} size={48} />)}
              </span>
              <div>
                <p className="text-4xl font-medium tracking-tight">4</p>
                <p className="text-ink/70">Specialists</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
