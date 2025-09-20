export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GoldsBet",
    "description": "Premium sports betting platform offering competitive odds, live betting, and secure transactions",
    "url": "https://goldsbetpk.tech",
    "logo": "https://goldsbetpk.tech/goldsbet.webp",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+92-300-123-4567",
      "contactType": "customer service",
      "availableLanguage": ["English", "Urdu"],
      "areaServed": ["PK", "IN", "BD"]
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "PK"
    },
    "sameAs": [
      "https://www.facebook.com/share/1JxLkMM3Tn/?mibextid=wwXIfr",
      "https://x.com/goldsbetpk?s=21&t=pREWCR0SGL2R4kK-TCyECg",
      "https://www.pinterest.com/Goldsbetpk/"
    ],
    "foundingDate": "2024",
    "knowsAbout": ["Sports Betting", "Online Gaming", "Casino Games", "Live Betting"],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": 30.3753,
        "longitude": 69.3451
      },
      "geoRadius": "2000000"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GoldsBet",
    "url": "https://goldsbetpk.tech",
    "description": "Your premier destination for sports betting and online gaming in Pakistan, India, and Bangladesh",
    "publisher": {
      "@type": "Organization",
      "name": "GoldsBet"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://goldsbetpk.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    },
    "inLanguage": "en",
    "audience": {
      "@type": "Audience",
      "geographicArea": {
        "@type": "Country",
        "name": ["Pakistan", "India", "Bangladesh"]
      }
    }
  };

  const mobileAppSchema = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    "name": "GoldsBet App",
    "description": "Download GoldsBet app for the ultimate gaming experience! Play slots, cards, poker, fish shooting games, and sports betting.",
    "url": "https://goldsbetpk.tech",
    "operatingSystem": ["Android", "iOS"],
    "applicationCategory": "GameApplication",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "ratingCount": "1250"
    },
    "screenshot": [
      "https://goldsbetpk.tech/Golds%20bet.webp",
      "https://goldsbetpk.tech/Goldsbet%20Game%20Pakistan.webp",
      "https://goldsbetpk.tech/Goldsbet%20pk.webp"
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://goldsbetpk.tech"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is GoldsBet app free to download?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the GoldsBet app is completely free to download for both Android and iOS devices."
        }
      },
      {
        "@type": "Question",
        "name": "What payment methods does GoldsBet support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "GoldsBet supports EasyPaisa, JazzCash, and cryptocurrency payments for Pakistan, India, and Bangladesh users."
        }
      },
      {
        "@type": "Question",
        "name": "Is GoldsBet safe and secure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, GoldsBet uses end-to-end encryption, fair games, and secure transactions with local payment methods."
        }
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(mobileAppSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />
    </>
  );
}
