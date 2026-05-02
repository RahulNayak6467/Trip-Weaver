const bars = [
  { label: "Real places", width: "72%" },
  { label: "Routing", width: "60%" },
  { label: "Weather", width: "52%" },
  { label: "Pacing", width: "38%" },
];

export default function WeavingCard() {
  return (
    <div className="flex flex-col gap-5 p-6 rounded-[var(--radius-lg)] border border-[var(--color-deep-border)] bg-[var(--color-bg-dark-raised)] h-52">
      <p
        className="text-[var(--color-fg-on-dark-muted)]"
        style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-mono-sm)" }}
      >
        Weaving your itinerary…
      </p>

      <div className="flex flex-col gap-3">
        {bars.map(({ label, width }) => (
          <div key={label} className="flex items-center gap-4">
            <span
              className="w-24 shrink-0 text-[var(--color-fg-on-dark-muted)]"
              style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-body-xs)" }}
            >
              {label}
            </span>
            <div className="flex-1 h-1 rounded-full bg-[var(--color-deep-light)]">
              <div
                className="h-full rounded-full bg-[var(--color-amber)]"
                style={{ width }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
