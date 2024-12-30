import { Metadata } from "next";
import { Inter, Italiana, Montserrat } from "next/font/google";
import "./globals.css";
import ClientLayout from "@/components/layout/client-layout";

// Importing fonts
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const italiana = Italiana({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-italiana",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Portfolio | Ogunbiyi Amidat",
  description: "Full-Stack Software Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${italiana.variable} ${montserrat.variable}`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
