"use client";

import { useState } from "react";
import { Minus, Plus } from "lucide-react";
import { faqs } from "@/lib/data";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div id="faq" className="relative mx-auto max-w-5xl px-5 pb-24 pt-28">
      <div aria-hidden className="dots pointer-events-none absolute inset-x-0 top-10 h-72 text-cream/70" />
      <div className="relative text-center">
        <h2 className="fade-text-light text-5xl font-medium sm:text-7xl">
          Questions
          <br />
          Before You Hire Us
        </h2>
        <p className="mt-5 text-cream/60">Short answers to what clients ask most.</p>
      </div>

      <div className="relative mt-14 rounded-2xl bg-[#F8F6F4] px-6 py-4 text-ink sm:px-10">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className={i > 0 ? "border-t border-ink/10" : ""}>
              <h3 className="text-xl font-medium tracking-tight sm:text-2xl" style={{ letterSpacing: "-0.01em", lineHeight: 1.25 }}>
                <button
                  className="flex w-full items-center justify-between gap-6 py-7 text-left"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  {f.q}
                  <span
                    className={`grid h-11 w-11 shrink-0 place-items-center rounded-full transition-colors ${
                      isOpen ? "bg-clay text-cream" : "bg-ink/[0.07] text-ink"
                    }`}
                  >
                    {isOpen ? <Minus size={18} aria-hidden /> : <Plus size={18} aria-hidden />}
                  </span>
                </button>
              </h3>
              <div
                id={`faq-${i}`}
                className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
              >
                <div className="overflow-hidden">
                  <p className="max-w-2xl pb-7 text-lg leading-relaxed text-ink/60">{f.a}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
