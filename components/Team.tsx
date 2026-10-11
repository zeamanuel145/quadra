import { Mail } from "lucide-react";
import { Avatar } from "./Avatar";
import { RoleIcon } from "./RoleIcon";
import { roles, team } from "@/lib/data";

export function Team() {
  return (
    <section id="team" className="relative bg-sand/50 px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <h2 className="fade-text text-5xl font-medium sm:text-7xl">
            Meet The
            <br />
            Four Of Us
          </h2>
          <p className="max-w-sm text-lg leading-snug text-ink/50">
            Each of us owns one craft. Hire one, or all four.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {team.map((p, i) => (
            <article
              key={p.id}
              className={`flex flex-col gap-6 rounded-3xl p-7 sm:flex-row ${
                i % 2 === 0 ? "bg-clay text-cream" : "bg-white text-ink"
              }`}
            >
              <Avatar name={p.name} index={i % 2 === 0 ? 3 : 0} size={96} className="!ring-0" />
              <div className="flex-1">
                <p className={`flex items-center gap-2 text-sm ${i % 2 === 0 ? "text-cream/80" : "text-clay"}`}>
                  <RoleIcon role={p.role} size={16} /> {roles[p.role].label}
                </p>
                <h3 className="mt-1 text-3xl font-medium">{p.name}</h3>
                <p className={`mt-3 max-w-md leading-snug ${i % 2 === 0 ? "text-cream/85" : "text-ink/70"}`}>{p.bio}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {p.skills.map((s) => (
                    <li
                      key={s}
                      className={`rounded-full px-3 py-1.5 text-sm ${i % 2 === 0 ? "bg-cream/15" : "bg-sand"}`}
                    >
                      {s}
                    </li>
                  ))}
                </ul>
                <a
                  href={`mailto:${p.email}`}
                  className={`mt-6 inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm transition-colors ${
                    i % 2 === 0 ? "bg-cream text-clay hover:bg-sand" : "bg-clay text-cream hover:bg-cocoa"
                  }`}
                >
                  <Mail size={16} aria-hidden /> Email {p.name.split(" ")[0]}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
