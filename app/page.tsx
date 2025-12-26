"use client";

import AboutUs from "@/components/AboutUs";
import Connect from "@/components/Connect";
import HeroSection from "@/components/Hero";
import ServicesLayout from "@/components/ServicesLayout";

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <ServicesLayout />
      <AboutUs />
      <Connect />
    </div>
  );
}
