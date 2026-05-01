const forecast = [
  { day: "MON", temp: "32°", icon: "☀" },
  { day: "TUE", temp: "29°", icon: "⛅" },
  { day: "WED", temp: "27°", icon: "☁", active: true },
  { day: "THU", temp: "31°", icon: "☀" },
  { day: "FRI", temp: "33°", icon: "☀" },
];

function WeatherCard() {
  return (
    <div className="bg-cream-warm h-fit rounded-2xl p-6 flex flex-col gap-6">
      <div className="space-y-2">
        <p className="font-mono text-xs uppercase tracking-widest text-cream-muted">
          Weather-Aware
        </p>
        <h3 className="font-display text-2xl font-normal leading-snug text-deep-ink">
          Plans that read the sky.
        </h3>
      </div>

      <div className="flex gap-1 items-stretch">
        {forecast.map((f) => (
          <div
            key={f.day}
            className={`flex-1 flex flex-col items-center gap-1 rounded-lg py-2 ${
              f.active ? "bg-deep-light text-cream" : "text-deep-ink"
            }`}
          >
            <span className="text-base leading-none">{f.icon}</span>
            <span
              className={`font-mono text-[10px] uppercase tracking-wide ${
                f.active ? "text-cream-faint" : "text-cream-muted"
              }`}
            >
              {f.day}
            </span>
            <span
              className={`font-mono text-xs font-medium ${
                f.active ? "text-cream" : "text-deep-ink"
              }`}
            >
              {f.temp}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeatherCard;
