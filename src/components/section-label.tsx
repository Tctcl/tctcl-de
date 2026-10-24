import type { ReactNode } from "react";

export function SectionLabel({
  index,
  children,
}: {
  index: string;
  children: ReactNode;
}) {
  return (
    <p className="flex items-baseline gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
      <span className="text-blood">{index}</span>
      <span>{children}</span>
    </p>
  );
}
