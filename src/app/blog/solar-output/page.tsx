import type { Metadata } from 'next';
import SolarOutputClient from './SolarOutputClient';

export const metadata: Metadata = {
    title: "NZ Solar Output Guide: Seasonal Irradiance & Performance Patterns",
    description: "Does solar work in a Kiwi winter? Explore seasonal irradiance patterns across NZ and learn how to spot genuine underperformance vs. normal dips.",
    alternates: {
        canonical: 'https://www.solcare.nz/blog/solar-output',
    },
    openGraph: {
        title: "NZ Solar Output Guide: Seasonal Irradiance & Performance Patterns",
        description: "Understand how Auckland winters and Wellington winds affect your solar yield.",
        url: 'https://www.solcare.nz/blog/solar-output',
        type: 'article',
    }
};

export default function Page() {
    return <SolarOutputClient />;
}