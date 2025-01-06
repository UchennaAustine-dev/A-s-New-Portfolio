"use client";

import Link from "next/link";
import { memo } from "react";
import { Mail, Linkedin, Twitter, Github } from "lucide-react";

// Static data with added icons
const links = [
  { href: "https://linkedin.com", label: "LinkedIn", icon: Linkedin },
  { href: "https://twitter.com", label: "Twitter", icon: Twitter },
  { href: "https://github.com", label: "Github", icon: Github },
];

// Memoized reusable component for contact information
const ContactInfo = memo(() => (
  <div className="space-y-6 md:space-y-8">
    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 text-neutral-300">
      <Mail className="w-5 h-5" />
      <a
        href="mailto:ogunbiyiamidat65@gmail.com"
        className="text-white hover:text-neutral-300 transition-colors underline focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-2 py-1"
        aria-label="Send email to ogunbiyiamidat65@gmail.com"
      >
        ogunbiyiamidat65@gmail.com
      </a>
    </div>
    <InternetLinks />
  </div>
));

// Add display name for ContactInfo
ContactInfo.displayName = "ContactInfo";

// Memoized reusable component for internet links
const InternetLinks = memo(() => (
  <div className="text-neutral-300">
    <p className="mb-4">On the Internet:</p>
    <div className="flex flex-wrap gap-4">
      {links.map(({ href, label, icon: Icon }) => (
        <Link
          key={label}
          href={href}
          className="flex items-center gap-2 text-white hover:text-neutral-300 transition-all hover:translate-y-[-2px] focus:outline-none focus:ring-2 focus:ring-white/20 rounded px-3 py-2"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Visit ${label} profile`}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </Link>
      ))}
    </div>
  </div>
));

// Add display name for InternetLinks
InternetLinks.displayName = "InternetLinks";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-900 text-white">
      <div className="px-4 sm:px-6 md:px-24 pt-16">
        <div className="max-w-4xl mx-auto pt-12 md:pt-24">
          <h1 className="font-italiana text-5xl sm:text-7xl md:text-[12rem] mb-8 md:mb-12 leading-none animate-fade-in">
            Hello.
          </h1>

          <div className="space-y-8 max-w-2xl">
            <p className="text-lg sm:text-xl text-neutral-300">
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
