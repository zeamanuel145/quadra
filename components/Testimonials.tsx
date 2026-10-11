"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Avatar } from "./Avatar";
import { clients, testimonials } from "@/lib/data";

const styles = [
  "font-bold tracking-tight",
  "font-serif italic",
  "font-semibold",
  "font-light tracking-widest",
  "font-serif font-bold",
  "font-medium",
  "font-extrabold tracking-tighter",
  "font-light italic",
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  const total = testimonials.length;
  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <section id="reviews" className="bg-cocoa text-cream">
      {/* client strip */}
      <div className="mx-5 grid grid-cols-2 gap-px border border-cream/20 bg-cream/20 sm:grid-cols-4 lg:grid-cols-8">
        {clients.map((c, k) => (
          <div key={c} className="grid h-24 place-items-center bg-cocoa px-2 text-center text-lg">
            <span className={styles[k]}>{c}</span>
          </div>
        ))}
      </div>

      <div className="mx-auto max-w-6xl px-5 py-20 sm:py-28">
        <div className="grid gap-8 md:grid-cols-[auto_1fr] md:gap-16">
          <svg viewBox="0 0 70 42" className="h-10 w-16 fill-cream sm:h-14 sm:w-24" aria-hidden>
            <path d="M14 0h18l-14 42H0zM46 0h18L50 42H32z" />
          </svg>
          <figure>
            <blockquote
              key={i}
              className="min-h-[13rem] text-3xl font-normal leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl"
              style={{ letterSpacing: "-0.02em" }}
            >
              {t.quote}
            </blockquote>
            <figcaption className="mt-12 flex flex-wrap items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <Avatar name={t.name} index={i} size={56} />
                <div>
                  <p className="text-lg font-semibold">{t.name}</p>
                  <p className="text-cream/70">{t.title}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <button
                  onClick={() => setI((i - 1 + total) % total)}
                  aria-label="Previous review"
                  className="grid h-12 w-20 place-items-center rounded-full border border-cream/60 transition-colors hover:bg-cream/10"
                >
                  <ArrowLeft size={20} />
                </button>
                <span className="tabular-nums" aria-live="polite">
                  <span className="underline underline-offset-4">{pad(i + 1)}</span>/{pad(total)}
                </span>
                <button
                  onClick={() => setI((i + 1) % total)}
                  aria-label="Next review"
                  className="grid h-12 w-20 place-items-center rounded-full bg-sand text-cocoa transition-colors hover:bg-cream"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
