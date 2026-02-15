import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "SolCare | Solar Panel Cleaning Software NZ — Automated Maintenance Intelligence",
  description: "Stop losing 5-25% energy to dirty panels. SolCare's 3-Layer Calibration auto-detects when cleaning pays for itself—no false alerts, guaranteed ROI. NZ-based solar monitoring with local reforestation impact.",
  keywords: ["solar panel cleaning software NZ", "automated solar maintenance New Zealand", "solar monitoring system NZ", "solar panel efficiency tracker", "solar soiling detection", "solar cleaning ROI calculator", "digital twin solar", "solar asset management NZ"],
  
  icons: {
    icon: '/icon.ico',
  },
  
  alternates: {
    canonical: 'https://sol-care.vercel.app/',
  },
  
  robots: {
    index: true,
    follow: true,
  },
  
  openGraph: {
    type: 'website',
    url: 'https://sol-care.vercel.app/',
    title: 'SolCare | The Solar Panel Cleaning Software That Pays for Itself',
    description: 'Auto-detect energy loss from dust, salt & snow. Our 3-Layer Calibration tells you exactly when to clean—never waste money on unnecessary washes.',
    siteName: 'SolCare',
    locale: 'en_NZ',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'SolCare — Stop the Silent Yield Leak',
      },
    ],
  },
  
  authors: [{ name: 'SolCare' }],
  creator: 'SolCare',
  publisher: 'SolCare',
  metadataBase: new URL('https://sol-care.vercel.app'),
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
      </body>
    </html>
  );
}