function MapDetail() {
  return (
    <div className="flex justify-center items-center h-full">
      <div>
        <p className="uppercase text-left mb-2 text-cream-muted text-xs">
          The Map
        </p>
        <h3 className="text-deep-ink font-display text-left font-medium text-4xl">
          A map that thinks
        </h3>

        <h3 className="text-deep-ink font-display font-medium text-4xl text-left">
          in days, <span className="text-amber italic">not pins</span>
        </h3>

        <p className="text-deep-mid/70 text-left w-80 text-lg font-sans font-extralight mt-6 mx-auto ">
          Every stop is a real place. Every route respects real travel
          time.Every day has its own color so you always know where you are.
        </p>
      </div>
    </div>
  );
}

export default MapDetail;
