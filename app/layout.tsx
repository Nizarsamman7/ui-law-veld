import type { Metadata } from "next";
import { Libre_Baskerville, Source_Sans_3 } from "next/font/google";
import { SiteChrome } from "@/components/SiteChrome";
import "./globals.css";

const display = Libre_Baskerville({ subsets: ["latin"], variable: "--font-display", weight: ["400", "700"] });
const body = Source_Sans_3({ subsets: ["latin"], variable: "--font-body", weight: ["400", "600"] });

export const metadata: Metadata = {
  title: { default: "Veld & Hart", template: "%s · Veld & Hart" },
  description: "Full law-firm website: practice areas, lawyers, fees, consultation request, and how a matter starts.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={display.variable + " " + body.variable}>
      <body><SiteChrome>{children}</SiteChrome></body>
    </html>
  );
}
