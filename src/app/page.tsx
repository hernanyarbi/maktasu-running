import { ActivitiesSection } from "./components/ActivitiesSection";
import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";
import { LocationSection } from "./components/LocationSection";
import { ValuesSection } from "./components/ValuesSection";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <HeroSection/>
      <FeatureSection/>
      <ActivitiesSection/>
      <ValuesSection/>
      <LocationSection/>
    </main>
  );
}
