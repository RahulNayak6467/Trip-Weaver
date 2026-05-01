import NotificationsCard from "./NotificationsCard";
import VoiceGuideCard from "./VoiceGuideCard";
import WeatherCard from "./WeatherCard";
import SmartPacingCard from "./SmartPacingCard";
import ShareCard from "./ShareCard";

function SmartFeaturesSection() {
  return (
    <section className="bg-cream   px-[5vw] py-28">
      <div className="max-w-7xl  mx-auto space-y-14">
        {/* Header */}
        <div className="space-y-4">
          <div className="w-8 h-0.5 bg-amber" />
          <p className="font-mono text-xs uppercase tracking-widest text-cream-muted">
            Everything you need
          </p>
          <h2 className="font-display text-5xl font-normal text-deep-ink">
            Built for the real world.
          </h2>
        </div>

        {/* Card grid — large left, 2×2 right */}
        <div className="grid grid-cols-[2fr_1fr_1fr] grid-rows-2 gap-4 items-stretch">
          <div className="row-span-2">
            <NotificationsCard />
          </div>
          <VoiceGuideCard />
          <WeatherCard />
          <SmartPacingCard />
          <ShareCard />
        </div>
      </div>
    </section>
  );
}

export default SmartFeaturesSection;
