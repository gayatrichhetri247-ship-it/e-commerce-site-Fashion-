"use client";

import { usePathname } from "next/navigation";
import ConditionalMoodSection from "./ConditionalMoodSection";
import MostLoved from "./MostLoved";
import PromoBanner from "./PromoBanner";
import FeaturesBar from "./FeatureBar";

export default function HomeOnlySections() {
  const pathname = usePathname();

  if (pathname !== "/") {
    return null;
  }

  return (
    <>
      <ConditionalMoodSection />
      <MostLoved />
      <PromoBanner />
      <FeaturesBar />
    </>
  );
}
