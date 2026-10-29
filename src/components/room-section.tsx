import type { RoomSection } from "@/content/rooms";

export function RoomSectionContent({
  section,
  listClassName = "mt-5 grid gap-2 sm:grid-cols-2",
}: {
  section: RoomSection;
  listClassName?: string;
}) {
  return (
    <>
      {section.paragraphs?.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}

      {section.items && section.items.length > 0 ? (
        <ul className={listClassName}>
          {section.items.map((item) => (
            <li key={item} className="flex items-baseline gap-2">
              <span aria-hidden="true" className="text-blood">
                ·
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {section.note ? (
        <p className="border-l-2 border-blood pl-4 font-mono text-[10px] uppercase leading-relaxed tracking-[0.14em] text-muted-foreground">
          {section.note}
        </p>
      ) : null}
    </>
  );
}
