"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import Navigation from "./navigation";
// import Footer from "./footer";

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Navigation />
      <AnimatePresence mode="wait">
        <main key={pathname}>{children}</main>
      </AnimatePresence>
      {/* <Footer /> */}
    </>
  );
}
