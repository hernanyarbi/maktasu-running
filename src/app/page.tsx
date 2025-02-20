import { ActivitiesSection } from "./components/ActivitiesSection";
import { FeatureSection } from "./components/FeatureSection";
import { FooterSection } from "./components/FooterSection";
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
      <FooterSection/>
    </main>
  );
}
