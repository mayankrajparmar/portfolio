import { HeroSection } from "@/components/home/hero";
import { PublicLayout } from "@/components/layouts";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <section className="w-full">
      <PublicLayout title="Mayank Raj Parmar | Full Stack Web Developer">
        <div className="w-full relative h-full ">
          <HeroSection />
        </div>
      </PublicLayout>
    </section>
  );
}
