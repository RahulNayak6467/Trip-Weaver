const bars = [5, 10, 18, 28, 22, 36, 16, 30, 12, 20, 34, 24, 10, 16, 8];

function VoiceGuideCard() {
  return (
    <div className="bg-deep-ink h-fit rounded-2xl p-6 flex flex-col ">
      <div>
        <p className="font-mono text-xs uppercase tracking-widest text-cream-muted">
          Voice Guide
        </p>
        <h3 className="font-display text-2xl font-normal leading-snug text-cream">
          Audio narration,
          <br />
          day by day.
        </h3>
      </div>

      {/* Waveform */}
      <div className="flex items-end gap-[3px] h-9">
        {bars.map((h, i) => (
          <div
            key={i}
            className="w-1.5 rounded-full bg-amber"
            style={{ height: `${h}px` }}
          />
        ))}
      </div>

      <div className="flex items-center gap-2">
        <span className="text-amber text-xs">▶</span>
        <span className="font-mono text-xs text-cream-muted tracking-wide">
          DAY 1 · 0:42
        </span>
      </div>
    </div>
  );
}

export default VoiceGuideCard;
