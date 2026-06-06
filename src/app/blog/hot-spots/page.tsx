import type { Metadata } from 'next';
import HotSpotsClient from './HotSpotsClient';

export const metadata: Metadata = {
  title: "Solar Panel Hotspots: Why Early Detection Can Save $1,000+ | SolCare NZ",
  description: "One cracked cell costs you 15% output. Discover what causes hotspots, how to detect and prevent them with regular cleaning and thermal imaging, and why early fixes save you $1,000+ in replacements.",
  alternates: {
    canonical: 'https://www.solcare.nz/blog/hot-spots',
  },
  openGraph: {
    title: "Solar Panel Hotspots: Early Detection Saves Thousands | SolCare NZ",
    description: "One damaged cell can drag down your entire panel. Learn to identify hotspots before they begin costing you.",
    url: 'https://www.solcare.nz/blog/hot-spots',
    type: 'article',
  }
};

export default function Page() {
  return <HotSpotsClient />;
}