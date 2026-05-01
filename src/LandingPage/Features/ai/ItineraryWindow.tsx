import { useState } from "react";
import { tripData } from "./data";

function ItineraryWindow() {
  const [activeDay, setActiveDay] = useState(1);
  const plan = tripData.find((d) => d.day === activeDay)!;

  return (
    <div className="rounded-2xl border border-cream/10 bg-deep-light overflow-hidden shadow-[0_0_0_1px_rgba(255,255,255,0.06),0_24px_64px_rgba(0,0,0,0.4)]">
      {/* Window chrome */}
      <div className="flex items-center gap-2 px-5 py-3 border-b border-cream/8">
        <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />

        <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
        <span className="w-3 h-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 font-mono text-sm text-cream-faint tracking-wide">
          TripWeaver
        </span>
      </div>

      {/* Chat area */}
      <div className="p-5 space-y-5 bg-deep-mid">
        {/* User message */}
        <div className="flex items-start justify-center  gap-4">
          <div className="bg-deep-ink rounded-lg px-4 py-3 text-cream text-sm font-sans leading-relaxed">
            5 days in Kerala with my parents, not too touristy
          </div>
          <div className="w-6 h-6 rounded-full bg-deep-mid border border-deep-border text-amber flex items-center justify-center  text-xs font-extralight font-mono flex-shrink-0">
            Y
          </div>
        </div>

        {/* AI response */}
        <div className="flex items-start gap-3 w-fit">
          <div className="w-6 h-6 text-amber bg-amber/30 rounded-full border border-amber/20 flex items-center justify-center  text-base flex-shrink-0 mt-1 font-mono">
            ∿
          </div>
          <div className="flex-1 border border-amber-light bg-amber/10 rounded-xl p-4 space-y-4">
            {/* Day tabs */}
            <div className="flex gap-2 flex-wrap">
              {tripData.map((d) => (
                <button
                  key={d.day}
                  onClick={() => setActiveDay(d.day)}
                  className={`px-2 py-1 rounded-sm text-[12px] font-mono uppercase tracking-wider transition-colors cursor-pointer ${
                    activeDay === d.day
                      ? "bg-amber text-deep-ink font-medium"
                      : "border border-cream/20 text-cream-faint hover:border-cream/40 hover:text-cream"
                  }`}
                >
                  Day {d.day}
                </button>
              ))}
            </div>

            {/* Day label */}
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              {plan.label}
            </p>

            {/* Itinerary items */}
            <div className="space-y-4">
              {plan.items.map((item, i) => (
                <div key={i} className="flex gap-2">
                  <span className="font-mono text-xs text-amber w- flex-shrink-0 pt-0.5 tabular-nums">
                    {item.time}
                  </span>
                  <div>
                    <p className="text-sm font-sans font-medium text-cream leading-snug">
                      {item.title}
                    </p>
                    <p className="font-mono text-xs text-ink-muted mt-1">
                      {item.meta}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItineraryWindow;
