const days = [
  { day: 1, title: "Kochi · Fort Kochi" },
  { day: 2, title: "Backwaters · Alleppey" },
  { day: 3, title: "Munnar · Tea country" },
  { day: 4, title: "Thekkady · Periyar" },
];

export default function ItineraryCard() {
  return (
    <div className="flex flex-col gap-3 p-6 rounded-[var(--radius-lg)] border border-[var(--color-deep-border)] bg-[var(--color-bg-dark-raised)] h-52">
      {days.map(({ day, title }) => (
        <div key={day} className="flex items-center gap-3">
          <span
            className="shrink-0 px-2 py-0.5 rounded-[var(--radius-sm)] bg-[var(--color-amber-dim)] text-[var(--color-amber)] uppercase"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "var(--text-mono-xs)",
              letterSpacing: "var(--tracking-wide)",
            }}
          >
            DAY {day}
          </span>
          <span
            className="text-[var(--color-fg-on-dark)]"
            style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-body-sm)" }}
          >
            {title}
          </span>
        </div>
      ))}
    </div>
  );
}
