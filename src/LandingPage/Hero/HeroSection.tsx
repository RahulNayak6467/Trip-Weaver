import heroimage from "../../assets/HeroImage/heroimage.jpg";
import Marquee from "./Marquee";

function HeroSection() {
  return (
    <section
      className="relative -top-9 h-screen bg-cover bg-center "
      style={{
        backgroundImage: `url(${heroimage})`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-deep-ink/70 to-deep-ink/85" />

      {/* Content */}
      <div className="relative z-10 flex flex-col gap-8 h-full items-center justify-center">
        <div className="uppercase backdrop-blur-3xl px-4 py-1 rounded-full">
          <p className="text-cream font-light brightness-75 text-xs font-mono tracking-widest">
            Ai travel planning, woven in real-time
          </p>
        </div>
        <div className="max-w-7xl text-center">
          <div className="flex gap-4 text-center">
            <h1 className="text-7xl text-cream font-display font-normal">
              Travel that
            </h1>
            <h1 className="text-7xl text-white font-display font-normal">
              feels like
            </h1>
          </div>
          <div className="flex gap-4 text-center">
            <h1 className="text-7xl font-display font-medium text-amber italic">
              it was made
            </h1>
            <h1 className="text-7xl font-display font-medium text-amber italic">
              for you.
            </h1>
          </div>
        </div>
        <p className="text-center text-sm text-cream-faint font-light font-sans leading-relaxed max-w-xl mx-auto">
          Describe any trip in plain language. Get a complete, day-by-day
          itinerary with real places, real times, and real routes — in seconds.
        </p>
        <div className="flex items-center gap-4">
          <button className="border border-amber-light text-deep-ink font-sans leading-loose uppercase text-sm font-medium shadow-light-lift rounded-sm tracking-wider px-6 py-3 bg-amber">
            Weave my trip
          </button>
          <button className="uppercase tracking-wider text-sm px-6 py-4 rounded-sm border border-cream/20 hover:border-cream/60 hover:text-white text-cream-faint cursor-pointer hover:duration-300 hover:bg-cream/10">
            see how it works
          </button>
        </div>
      </div>
      <Marquee />
    </section>
  );
}

export default HeroSection;
