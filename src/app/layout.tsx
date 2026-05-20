import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SolCare | Solar Panel Cleaning & AI Maintenance NZ",
  description: "Boost solar efficiency by 5-25%. SolCare uses AI and 3-Layer Calibration to tell you exactly when cleaning pays for itself. Smart NZ solar monitoring.",
  keywords: [
    "solar panel cleaning NZ",
    "solar maintenance Auckland",
    "solar panel efficiency tracker",
    "automated solar cleaning",
    "solar yield monitoring NZ",
    "Solcast integration NZ",
    "solar panel cleaning ROI"
  ],
  alternates: {
    canonical: 'https://www.solcare.nz/',
  },
  icons: {
    icon: '/icon.ico',
  },

  verification: {
    google: "okv5WvteSCWiHk0FYJq3x4yxnRtN_CvLfUoF71H3u-M"
  },

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    type: 'website',
    url: 'https://www.solcare.nz/',
    title: 'SolCare | Smart Solar Maintenance That Pays for Itself',
    description: 'Stop the silent yield leak. Our AI tracks Auckland salt spray and seasonal pollen to optimize your solar panel cleaning schedule.',
    siteName: 'SolCare',
    locale: 'en_NZ',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'SolCare Solar Intelligence' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-NZ">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}