"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import { Wordmark } from "./Logo";
import { brand } from "@/lib/data";

const quick = [
  { label: "Who is on the team?", href: "#team" },
  { label: "Can I see past work?", href: "#work" },
  { label: "What do clients say?", href: "#reviews" },
];

export function Footer() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer id="contact" className="bg-cocoa px-2 pt-0">
      <div className="relative overflow-hidden rounded-t-[2rem] bg-cream text-clay">
        {/* brown tab, like the reference */}
        <div aria-hidden className="mx-auto h-24 w-[82%] rounded-b-[2rem] bg-cocoa" />

        <div className="mx-auto max-w-7xl px-6 pb-40 pt-16 sm:px-10">
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <Wordmark className="text-clay [&_span]:text-[3.5rem]" />
              <p className="mt-10 max-w-md text-2xl leading-tight">{brand.tagline}</p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-lg">
              <div>
                <p className="text-clay/60">Studio</p>
                <p className="mt-3">
                  {brand.address.map((l) => (
                    <span key={l} className="block">{l}</span>
                  ))}
                </p>
              </div>
              <div>
                <p className="text-clay/60">Phone</p>
                <a className="mt-3 block hover:underline" href={`tel:${brand.phone.replace(/\s/g, "")}`}>{brand.phone}</a>
                <p className="mt-8 text-clay/60">Email</p>
                <a className="mt-3 block hover:underline" href={`mailto:${brand.email}`}>{brand.email}</a>
              </div>
            </div>
          </div>

          <div className="mt-20 grid gap-12 md:grid-cols-2">
            <div>
              <h2 className="text-5xl font-medium text-clay">Ready to get started?</h2>
              <p className="mt-4 max-w-xs text-sm text-clay/80">Tell us where to reach you and we will reply within one working day.</p>
              <form
                className="mt-8 flex max-w-md items-end gap-3"
                onSubmit={(e) => {
                  e.preventDefault();
                  if (email) setSent(true);
                }}
              >
                <label className="flex-1">
                  <span className="sr-only">Your email</span>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full border-b border-clay bg-transparent pb-3 text-sm text-ink placeholder:text-clay/70 focus:outline-none"
                  />
                </label>
                <button className="rounded-full bg-clay px-6 py-3.5 text-sm font-medium text-cream transition-colors hover:bg-cocoa">
                  Start a project
                </button>
              </form>
              <p className="mt-3 h-5 text-sm" role="status">{sent ? "Thanks. We will be in touch soon." : ""}</p>
            </div>

            <div className="md:pl-24">
              <p className="text-xl leading-snug">Maybe your question has already been answered. Check these out.</p>
              <ul className="mt-8">
                {quick.map((q) => (
                  <li key={q.label} className="border-b border-clay/30 first:border-t">
                    <a href={q.href} className="flex items-center justify-between py-5 text-sm hover:pl-2 transition-all">
                      {q.label} <ArrowRight size={20} aria-hidden />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <p
          aria-hidden
          className="pointer-events-none absolute -bottom-[0.28em] left-4 select-none text-[28vw] font-bold leading-none tracking-tight text-sand/50"
        >
          {brand.name}
        </p>
      </div>
    </footer>
  );
}
