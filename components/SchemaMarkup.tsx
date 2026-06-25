export default function SchemaMarkup() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "CountPro",
    applicationCategory: "UtilitiesApplication",
    operatingSystem: "iOS",
    description:
      "A universal manual counter for iOS. Count anything, archive every session, share results. No account, no cloud, all local.",
    offers: [
      {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
        name: "Free",
      },
      {
        "@type": "Offer",
        price: "2.99",
        priceCurrency: "USD",
        name: "Pro Annual",
      },
      {
        "@type": "Offer",
        price: "9.99",
        priceCurrency: "USD",
        name: "Pro Lifetime",
      },
    ],
    publisher: {
      "@type": "Organization",
      name: "Reyaquino SAS",
    },
    keywords:
      "tally counter, counter app, manual counter, inventory counter, people counter, event counter, count tracker, clicker counter",
    featureList:
      "Sessions with history, Templates, Focus mode, Threshold alerts, CSV export, Share results",
    screenshot: [],
    applicationSubCategory: "Counter",
    releaseNotes: "Coming soon to the App Store",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
