"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <motion.div
      className="max-w-6xl mx-auto px-4"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
    >
      <section className="min-h-screen flex items-center pl-24 pr-8">
        <div className="max-w-4xl">
          <h1 className="font-italiana text-7xl lg:text-8xl mb-8">
            Full-Stack Software Engineer
          </h1>
          <p className="text-lg text-neutral-600 mb-8 max-w-2xl">
            Currently working full-time as a Senior Product Designer at Detail
            Technologies. Focused on creating beautiful, functional digital
            experiences.
          </p>
          <div className="flex gap-4">
            <Button asChild variant="outline" size="lg">
              <Link href="/work">
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
