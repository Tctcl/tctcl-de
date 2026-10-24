type RoomMarkProps = {
  variant: "tinkering" | "projects" | "about" | "work" | "journal";
  className?: string;
};

function TinkeringMark() {
  return (
    <div className="relative h-full w-full border border-border">
      <div className="absolute inset-x-0 top-1/3 h-px bg-border" />
      <div className="absolute inset-x-0 top-2/3 h-px bg-border" />
      <div className="absolute inset-y-0 left-1/3 w-px bg-border" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-border" />
      <span className="absolute left-1/3 top-1/3 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 bg-blood" />
      <span className="absolute left-2/3 top-2/3 h-1 w-1 -translate-x-1/2 -translate-y-1/2 bg-ink" />
      <span className="absolute left-[12%] top-[12%] h-1 w-1 bg-ink/50" />
      <span className="absolute bottom-[12%] right-[12%] h-1 w-1 bg-blood/70" />
    </div>
  );
}

function ProjectsMark() {
  return (
    <div className="flex h-full w-full flex-col justify-between border-y border-border py-2">
      {[0, 1, 2].map((row) => (
        <div key={row} className="flex items-center gap-2">
          <span
            className={`h-1.5 w-1.5 ${row === 0 ? "bg-blood" : "bg-ink/35"}`}
          />
          <span className="h-px flex-1 bg-border" />
          <span className="h-1 w-3 bg-ink/20" />
        </div>
      ))}
    </div>
  );
}

function AboutMark() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <span className="absolute h-10 w-10 rounded-full border border-border" />
      <span className="absolute h-6 w-6 rounded-full border border-blood/60" />
      <span className="absolute h-1.5 w-1.5 rounded-full bg-blood" />
      <span className="absolute bottom-0 left-0 h-px w-1/3 bg-border" />
      <span className="absolute right-0 top-0 h-1/3 w-px bg-border" />
    </div>
  );
}

function WorkMark() {
  return (
    <div className="grid h-full w-full grid-cols-4 gap-1">
      {[0, 1, 2, 3].map((column) => (
        <div key={column} className="flex flex-col justify-end gap-1">
          <span
            className={`w-full ${column === 3 ? "bg-blood/70" : "bg-ink/25"}`}
            style={{ height: `${28 + column * 15}%` }}
          />
          <span className="h-px w-full bg-border" />
        </div>
      ))}
    </div>
  );
}

function JournalMark() {
  return (
    <div className="flex h-full w-full flex-col justify-center gap-1.5">
      <span className="h-px w-full bg-ink/60" />
      <span className="h-px w-4/5 bg-border" />
      <span className="h-px w-full bg-border" />
      <span className="h-px w-3/5 bg-border" />
      <span className="h-px w-2/3 bg-border" />
    </div>
  );
}

export function RoomMark({ variant, className = "" }: RoomMarkProps) {
  return (
    <div aria-hidden="true" className={`h-12 w-20 ${className}`}>
      {variant === "tinkering" ? <TinkeringMark /> : null}
      {variant === "projects" ? <ProjectsMark /> : null}
      {variant === "about" ? <AboutMark /> : null}
      {variant === "work" ? <WorkMark /> : null}
      {variant === "journal" ? <JournalMark /> : null}
    </div>
  );
}
