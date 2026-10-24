import Link from "next/link";

type EmptyStateProps = {
  label: string;
  title: string;
  text: string;
  note?: string;
  action?: {
    href: string;
    label: string;
  };
  indent?: boolean;
  headingLevel?: 2 | 3;
};

export function EmptyState({
  label,
  title,
  text,
  note,
  action,
  indent = true,
  headingLevel = 3,
}: EmptyStateProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <div
      className={`mt-10 border border-dashed border-border p-6 sm:p-8 ${
        indent ? "md:ml-[25%]" : ""
      }`}
    >
      <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-blood">
        {label}
      </p>
      <Heading className="mt-3 max-w-xl font-serif text-2xl leading-tight tracking-[-0.015em]">
        {title}
      </Heading>
      <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
        {text}
      </p>
      {note ? (
        <p className="mt-6 max-w-xl border-t border-border pt-4 text-sm leading-relaxed text-muted-foreground">
          {note}
        </p>
      ) : null}
      {action ? (
        <p className="mt-5">
          <Link
            href={action.href}
            className="editorial-link font-mono text-[10px] uppercase tracking-[0.16em] text-blood"
          >
            {action.label} →
          </Link>
        </p>
      ) : null}
    </div>
  );
}
