"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { BackgroundParticles } from "./background-particles";

export function HeroSection() {
  return (
    <motion.div
      className="relative max-w-6xl mx-auto px-4 md:px-8 lg:px-16"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <div className="absolute inset-0 -z-10" aria-hidden="true">
        <BackgroundParticles />
      </div>
      <section className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 lg:px-16">
        <div className="max-w-4xl text-center">
          <h1 className="font-italiana text-5xl md:text-6xl lg:text-7xl mb-8">
            Full-Stack Software Engineer
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl mx-auto">
            Currently working full-time as a Senior Product Designer at Detail
            Technologies. Focused on creating beautiful, functional digital
            experiences.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/work" className="flex items-center">
                View Work
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="lg">
              <Link href="/contact">Contact Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
