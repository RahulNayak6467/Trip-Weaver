import DestinationPreview from "./DesitnationPreview";

function Destination() {
  return (
    <section className="h-200 bg-cream">
      <div className="p-5">
        <div className="flex items-center justify-between">
          <h1 className="text-4xl font-display  text-deep-ink font-semibold">
            Go somewhere worth remembering.
          </h1>
          <p className="text-lg text-cream-muted font-light">
            See all destinations{" "}
          </p>
        </div>
      </div>
      <div className="p-5 flex gap-2 overflow-x-scroll scroll-hidden">
        <DestinationPreview />
        <DestinationPreview />
        <DestinationPreview />
        <DestinationPreview />
        <DestinationPreview />
      </div>
    </section>
  );
}

export default Destination;
