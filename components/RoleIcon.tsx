import { Camera, Film, Megaphone, Terminal, type LucideIcon } from "lucide-react";
import type { RoleId } from "@/lib/data";

const icons: Record<RoleId, LucideIcon> = {
  social: Megaphone,
  video: Film,
  photo: Camera,
  code: Terminal,
};

export function RoleIcon({
  role,
  size = 20,
  className,
}: {
  role: RoleId;
  size?: number;
  className?: string;
}) {
  const Icon = icons[role];
  return <Icon size={size} className={className} aria-hidden />;
}
