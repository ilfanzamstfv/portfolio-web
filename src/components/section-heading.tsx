import { cn } from "@/lib/utils";

export function SectionHeading({
  n,
  label,
  id,
  dark,
  children,
}: {
  n: number;
  label: string;
  id: string;
  dark?: boolean;
  children: string;
}) {
  return (
    <div>
      <p
        className={cn("font-mono text-xs", dark ? "text-yellow" : "text-main")}
      >
        {`// 0${n} — ${label}`}
      </p>
      <h2
        id={id}
        className="mt-3 max-w-[22ch] text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-tight"
      >
        {children}
      </h2>
    </div>
  );
}
