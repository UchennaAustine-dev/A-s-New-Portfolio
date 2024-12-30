"use client";

import Link from "next/link";
import { memo } from "react";

// Static data
const links = [
  { href: "https://linkedin.com", label: "LinkedIn" },
  { href: "https://twitter.com", label: "Twitter" },
  { href: "https://github.com", label: "Github" },
];

// Memoized reusable component for contact information
const ContactInfo = memo(() => (
  <div className="space-y-4">
    <p className="text-neutral-300">
      Email:{" "}
      <a
        href="mailto:ogunbiyiamidat65@gmail.com"
        className="text-white hover:text-neutral-300 transition-colors underline"
      >
        ogunbiyiamidat65@gmail.com
      </a>
    </p>
    <InternetLinks />
  </div>
));

// Memoized reusable component for internet links
const InternetLinks = memo(() => (
  <p className="text-neutral-300">
    On the Internet:{" "}
    <span className="space-x-2">
      {links.map(({ href, label }, index) => (
        <span key={label}>
          <Link
            href={href}
            className="text-white hover:text-neutral-300 transition-colors underline"
            target="_blank"
          >
            {label}
          </Link>
          {index < links.length - 1 && <span>/</span>}
        </span>
      ))}
    </span>
  </p>
));

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="px-4 md:px-24 pt-16">
        <div className="max-w-4xl mx-auto pt-24">
          <h1 className="font-italiana text-[12rem] mb-12 leading-none">
            Hello.
          </h1>

          <div className="space-y-8 max-w-2xl">
            <p className="text-xl text-neutral-300">
              Need a beautiful, well-structured website that you can own and
              maintain yourself? Get in touch.
            </p>

            {/* Contact Info */}
            <ContactInfo />
          </div>
        </div>
      </div>
    </div>
  );
}
