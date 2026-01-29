"use client";

import HeroSections from "@/components/Homepage/HeroSections";
import { Pricing } from "@/components/pricing";
import { Statistics } from "@/components/statistics";
import { TrustedBy } from "@/components/trusted-by";

export default function Home() {
  return (
    <>
      <HeroSections />
      <TrustedBy />
      <Statistics />
      <Pricing />
    </>
  );
}
