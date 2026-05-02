export default function InputCard() {
  const tags = ["Family travel", "Culture", "Slow pace", "Local food"];

  return (
    <div className="flex flex-col gap-4 p-6 rounded-[var(--radius-lg)] border border-[var(--color-deep-border)] bg-[var(--color-bg-dark-raised)] h-52">
      <div
        className="flex items-center gap-1 px-4 py-3 rounded-[var(--radius-md)] border border-[var(--color-deep-border)]"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <span
          className="t-mono-sm text-[var(--color-fg-on-dark)]"
          style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-mono-sm)" }}
        >
          Kerala, 5 days, not touristy
        </span>
        <span className="inline-block w-0.5 h-4 bg-[var(--color-amber)] ml-0.5 animate-pulse" />
      </div>

      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 rounded-[var(--radius-pill)] border border-[var(--color-deep-border)] text-[var(--color-fg-on-dark-muted)]"
            style={{ fontFamily: "var(--font-sans)", fontSize: "var(--text-body-xs)" }}
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
