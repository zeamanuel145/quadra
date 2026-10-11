import { Logo } from "./Logo";
import { RoleIcon } from "./RoleIcon";
import type { RoleId } from "@/lib/data";

const chip: RoleId[] = ["social", "video", "photo", "code"];

export function MetalCard() {
  return (
    <div
      className="animate-rise relative mx-auto h-[330px] w-[212px] overflow-hidden rounded-[22px] p-5 text-cocoa shadow-[0_40px_80px_-20px_rgba(43,29,20,0.55)] sm:h-[400px] sm:w-[250px]"
      style={{ background: "linear-gradient(150deg,#e8d6bd 0%,#b79b7e 36%,#f0e2cd 54%,#9a7a5d 100%)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: "radial-gradient(circle at 80% 78%, rgba(255,240,215,.75), transparent 45%)" }}
      />
      <div className="relative flex items-start justify-between">
        <span className="text-xl font-bold italic tracking-tight">quadra</span>
        <Logo className="h-6 w-6" />
      </div>
      <div className="absolute bottom-20 left-5 grid grid-cols-2 gap-1 rounded-xl border border-cocoa/30 bg-cream/25 p-1.5">
        {chip.map((r) => (
          <span key={r} className="grid h-9 w-9 place-items-center rounded-md bg-cocoa/10">
            <RoleIcon role={r} size={18} />
          </span>
        ))}
      </div>
      <p className="absolute bottom-5 left-5 text-sm font-medium">Four creators, one team</p>
    </div>
  );
}
