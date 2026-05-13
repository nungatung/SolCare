import type { Metadata } from 'next';
import DirtyPanelsClient from './DirtyPanelsClient';

export const metadata: Metadata = {
  title: "Is Dirt Killing Your Solar ROI? | Solar Cleaning Benefits NZ",
  description: "Dirty panels lose up to 25% efficiency. Learn how Auckland salt spray and dust impact your power bills and why professional cleaning pays for itself.",
  alternates: {
    canonical: 'https://www.solcare.nz/blog/dirty-panels',
  },
  openGraph: {
    title: "Is Dirt Killing Your Solar ROI? | SolCare NZ",
    description: "Learn how much energy you're losing to the elements.",
    url: 'https://www.solcare.nz/blog/dirty-panels',
    type: 'article',
  }
};

export default function Page() {
  return <DirtyPanelsClient />;
}