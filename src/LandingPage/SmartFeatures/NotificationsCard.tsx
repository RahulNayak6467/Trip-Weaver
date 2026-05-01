const notifications = [
  { dot: "bg-amber", text: "Rain in 30 min · grab the cafe stop" },
  { dot: "bg-amber", text: "Gate change · B14 → B22" },
  { dot: "bg-success", text: "Transfer confirmed · 8:10 AM" },
];

function NotificationsCard() {
  return (
    <div className="bg-deep-ink rounded-2xl p-7 flex flex-col gap-8 h-full">
      <div className="space-y-3">
        <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
          Live Notifications
        </p>
        <h3 className="font-display text-4xl font-normal leading-snug text-cream">
          Stay ahead of
          <br />
          <span className="italic text-amber">every change.</span>
        </h3>
      </div>

      <div className="space-y-2 flex-1">
        {notifications.map((n, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-deep-mid rounded-lg px-4 py-3"
          >
            <span className={`w-2 h-2 rounded-full shrink-0 ${n.dot}`} />
            <span className="font-mono text-xs text-cream">{n.text}</span>
          </div>
        ))}
      </div>

      <p className="font-mono text-xs text-ink-faint">real-time · push + in-app</p>
    </div>
  );
}

export default NotificationsCard;
