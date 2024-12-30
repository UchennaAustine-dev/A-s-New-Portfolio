"use client";
import Link from "next/link";

export default function Navigation() {
  const links = [
    { href: "/work", label: "WORK" },
    { href: "/about", label: "ABOUT" },
    { href: "/contact", label: "CONTACT" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-16 h-screen flex flex-col justify-between items-center py-8 border-r border-neutral-200 bg-white">
      <div className="flex flex-col items-center gap-8">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="writing-vertical-lr transform rotate-180 text-sm hover:text-neutral-500 transition-colors"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <Link
        href="/"
        className="writing-vertical-lr transform rotate-180 text-2xl font-italiana font-bold"
      >
        Amidat Ogunbiyi
      </Link>

      <span className="writing-vertical-lr transform rotate-180 text-sm">
        © 2024
      </span>
    </nav>
  );
}
