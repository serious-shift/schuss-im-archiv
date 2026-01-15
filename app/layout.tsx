import type { Metadata } from "next";
import GlobalLoader from "@/src/components/GlobalLoader";
import SmoothScroller from "@/src/components/layout/SmoothScroller";
import { Geist, Geist_Mono } from "next/font/google";
import GameMenu from "@/src/components/ui/GameMenu";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Schuss im Archiv",
  description: "Ein interaktiver Kriminalfall",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GlobalLoader>
          <SmoothScroller />
          <GameMenu />
          {children}
        </GlobalLoader>
      </body>
    </html>
  );
}
