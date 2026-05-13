export default function JsonLd() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "SolCare Solar Maintenance",
    "serviceType": "Solar Panel Cleaning & AI Monitoring",
    "description": "Subscription-based solar panel cleaning and efficiency tracking using AI for New Zealand homeowners.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "SolCare",
      "image": "https://www.solcare.nz/og-image.jpg",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Auckland",
        "addressCountry": "NZ"
      },
      "url": "https://www.solcare.nz"
    },
    "areaServed": [
      { "@type": "City", "name": "Auckland" },
      { "@type": "City", "name": "Wellington" },
      { "@type": "City", "name": "Christchurch" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Solar Maintenance Plans",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Subscription Solar Cleaning"
          }
        }
      ]
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}