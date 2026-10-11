"use client";

import { useEffect, useState } from "react";
import { Home, Menu, X } from "lucide-react";
import { Wordmark } from "./Logo";

const links = [
  { id: "team", label: "Team" },
  { id: "work", label: "Work" },
  { id: "reviews", label: "Reviews" },
  { id: "faq", label: "FAQ" },
];

export function Navbar() {
  const [active, setActive] = useState("home");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const ids = ["home", ...links.map((l) => l.id)];
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const item = (id: string) =>
    `rounded-full px-4 py-2.5 text-sm transition-colors ${
      active === id ? "bg-clay text-cream" : "text-ink hover:bg-sand"
    }`;

  return (
    <header className="sticky top-0 z-50 border-b border-sand bg-cream/85 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 text-clay">
        <a href="#home" aria-label="quadra home">
          <Wordmark />
        </a>

        <nav aria-label="Main" className="hidden items-center gap-1 rounded-full bg-white/70 p-1.5 md:flex">
          <a href="#home" className={`${item("home")} inline-flex items-center gap-2`}>
            <Home size={16} aria-hidden /> Home
          </a>
          {links.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={item(l.id)}>
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden rounded-full border border-ink/30 px-6 py-2.5 text-sm text-ink transition-colors hover:bg-ink hover:text-cream sm:inline-block"
          >
            Start a project
          </a>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-ink/20 text-ink md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <nav aria-label="Mobile" className="border-t border-sand bg-cream px-5 pb-4 md:hidden">
          {[{ id: "home", label: "Home" }, ...links, { id: "contact", label: "Contact" }].map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-sand py-3 text-ink"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
