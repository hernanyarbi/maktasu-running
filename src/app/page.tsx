import { ActivitiesSection } from "./components/ActivitiesSection";
import { FeatureSection } from "./components/FeatureSection";
import { HeroSection } from "./components/HeroSection";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <HeroSection/>
      <FeatureSection/>
      <ActivitiesSection/>
    </main>
  );
}
