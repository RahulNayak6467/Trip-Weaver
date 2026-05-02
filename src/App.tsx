import Destination from "./LandingPage/Destinations/Destination";
import CTA from "./LandingPage/Features/CTA/Cta";
import Features from "./LandingPage/Features/Features";
import Footer from "./LandingPage/Footer/footer";
import HeroSection from "./LandingPage/Hero/HeroSection";
import Navbar from "./LandingPage/navbar";
import ProcessSection from "./LandingPage/Process/ProcessSection";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <Features />
      <ProcessSection />
      <Destination />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;
