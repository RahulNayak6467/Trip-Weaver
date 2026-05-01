import SmartFeaturesSection from "../SmartFeatures/SmartFeaturesSection";
import AISection from "./ai/AISection";
import MapDemo from "./Map";
import MapDetail from "./MapDetail";

function Features() {
  return (
    <section className=" ">
      <div className=" bg-cream h-200  grid grid-cols-2 gap-x-4 ">
        <MapDetail />
        <MapDemo />
      </div>
      <div>
        <AISection />
        <SmartFeaturesSection />
      </div>
    </section>
  );
}

export default Features;
