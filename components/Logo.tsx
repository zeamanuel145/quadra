export function Logo({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden>
      <path d="M2 5h15.5l-3.2 4.2H9.2l-.9 2.2L12 11l-5.6 10L2 12.5z" />
      <path d="M18.5 5H22l-6.4 13-2.2-3.8z" />
    </svg>
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2 font-semibold tracking-tight ${className}`}>
      <Logo />
      <span className="text-[1.65rem] leading-none">quadra.</span>
    </span>
  );
}
