import InputCard from "./InputCard";
import ItineraryCard from "./ItineraryCard";
import WeavingCard from "./WeavingCard";

const steps = [
  {
    number: "01",
    title: "Tell us where.",
    description:
      "One sentence is enough. Add details if you want — interests, pace, budget, companions.",
    card: <InputCard />,
  },
  {
    number: "02",
    title: "AI weaves the plan.",
    description:
      "Real places verified. Distances checked. Weather factored in. Done in under 10 seconds.",
    card: <WeavingCard />,
  },
  {
    number: "03",
    title: "Travel, guided.",
    description:
      "Day-by-day view, offline maps, voice guide, live alerts. Everything in one place.",
    card: <ItineraryCard />,
  },
];

export default function ProcessSection() {
  return (
    <section
      className="bg-[var(--color-bg-dark)] text-[var(--color-fg-on-dark)]"
      style={{ padding: "var(--section-pad-y) var(--section-pad-x)" }}
    >
      <div style={{ maxWidth: "var(--content-max-width)", margin: "0 auto" }}>
        {/* Header */}
        <div className="mb-16">
          <div
            className="w-10 h-px bg-[var(--color-amber)] mb-4"
          />
          <p
            className="t-label text-[var(--color-amber)] mb-5"
          >
            The Process
          </p>
          <h2
            className="t-h2 text-[var(--color-fg-on-dark)]"
          >
            Three steps, zero friction.
          </h2>
        </div>

        {/* Steps grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
          {steps.map((step, i) => (
            <div key={step.number} className="flex items-stretch">
              {/* Step column */}
              <div className="flex flex-col gap-6 flex-1">
                {/* Step number */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-[var(--color-amber)]"
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: "var(--text-mono-sm)",
                      letterSpacing: "var(--tracking-wide)",
                    }}
                  >
                    {step.number}
                  </span>
                  <span
                    className="text-[var(--color-fg-on-dark-faint)]"
                    style={{ fontFamily: "var(--font-mono)", fontSize: "var(--text-mono-sm)" }}
                  >
                    —
                  </span>
                </div>

                {/* Card */}
                {step.card}

                {/* Text */}
                <div className="flex flex-col gap-2">
                  <h3
                    className="t-h4 text-[var(--color-fg-on-dark)]"
                  >
                    {step.title}
                  </h3>
                  <p
                    className="t-body text-[var(--color-fg-on-dark-muted)]"
                    style={{ maxWidth: "28ch" }}
                  >
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Arrow between steps */}
              {i < steps.length - 1 && (
                <div className="hidden md:flex items-center justify-center w-16 shrink-0 pb-24">
                  <span
                    className="text-[var(--color-fg-on-dark-faint)]"
                    style={{ fontFamily: "var(--font-sans)", fontSize: "1.25rem" }}
                  >
                    →
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
