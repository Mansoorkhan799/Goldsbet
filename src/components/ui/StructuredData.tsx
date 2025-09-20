export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "GoldsBet",
    "description": "Premium sports betting platform offering competitive odds, live betting, and secure transactions",
    "url": "https://goldsbetpk.tech",
    "logo": "https://goldsbetpk.tech/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+1-234-567-890",
      "contactType": "customer service",
      "availableLanguage": "English"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business Street",
      "addressLocality": "New York",
      "addressRegion": "NY",
      "postalCode": "10001",
      "addressCountry": "US"
    },
    "sameAs": [
      "https://www.facebook.com/share/1JxLkMM3Tn/?mibextid=wwXIfr",
      "https://x.com/goldsbetpk?s=21&t=pREWCR0SGL2R4kK-TCyECg",
      "https://www.pinterest.com/Goldsbetpk/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "GoldsBet",
    "url": "https://goldsbetpk.tech",
    "description": "Your premier destination for sports betting and online gaming",
    "publisher": {
      "@type": "Organization",
      "name": "GoldsBet"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://goldsbetpk.tech/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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
          __html: JSON.stringify(breadcrumbSchema),
        }}
      />
    </>
  );
}
