import ItineraryWindow from "./ItineraryWindow";

function AISection() {
  return (
    <section className="bg-deep-ink px-[5vw] py-28">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left — copy */}
        <div className="space-y-6">
          <div className="space-y-4">
            <div className="w-8 h-0.5 bg-amber" />
            <p className="font-mono text-xs uppercase tracking-widest text-ink-muted">
              The Intelligence
            </p>
          </div>
          <h2 className="font-display text-5xl font-normal leading-tight text-cream">
            Describe the trip.
            <br />
            We handle the
            <br />
            <span className="italic text-amber">impossible part.</span>
          </h2>
          <p className="font-sans text-lg text-cream-muted font-light leading-normal max-w-sm">
            Real places. Real hours. Real distances. No made-up restaurants, no
            45km lunch detours. Every itinerary is checked against reality
            before it reaches you.
          </p>
        </div>

        {/* Right — window mockup */}
        <ItineraryWindow />
      </div>
    </section>
  );
}

export default AISection;
