"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
      <CTA/>
      <FAQ/>
      <Footer />
    </>
  );
}
