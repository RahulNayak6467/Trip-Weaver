const avatars = [
  { label: "A", bg: "bg-deep-ink", text: "text-cream" },
  { label: "M", bg: "bg-deep-mid", text: "text-cream" },
  { label: "R", bg: "bg-deep-light", text: "text-cream" },
  { label: "+2", bg: "bg-amber", text: "text-deep-ink" },
];

function ShareCard() {
  return (
    <div className="bg-cream-warm rounded-2xl p-6 flex flex-col gap-6">
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-cream-muted">
          Share With Anyone
        </p>
        <h3 className="font-display text-2xl font-normal leading-snug text-deep-ink">
          Send the plan. No app required.
        </h3>
      </div>

      {/* Avatar stack */}
      <div className="flex items-center">
        {avatars.map((a, i) => (
          <div
            key={i}
            className={`w-6 h-6 rounded-full border-2 border-cream-warm flex items-center justify-center font-mono text-xs font-medium ${a.bg} ${a.text}`}
            style={{
              marginLeft: i > 0 ? "-6px" : "0",
              zIndex: avatars.length - i,
            }}
          >
            {a.label}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShareCard;
