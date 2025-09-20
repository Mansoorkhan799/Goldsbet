import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/ui/StructuredData";
import ExtensionCleaner from "@/components/ui/ExtensionCleaner";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "GoldsBet - Premium Betting Platform",
    template: "%s | GoldsBet"
  },
  description: "GoldsBet is a premium betting platform offering the best sports betting experience with competitive odds, live betting, and secure transactions.",
  keywords: ["betting", "sports betting", "online betting", "casino", "gambling", "odds", "live betting"],
  authors: [{ name: "GoldsBet Team" }],
  creator: "GoldsBet",
  publisher: "GoldsBet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://goldsbetpk.tech"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://goldsbetpk.tech",
    title: "GoldsBet - Premium Betting Platform",
    description: "GoldsBet is a premium betting platform offering the best sports betting experience with competitive odds, live betting, and secure transactions.",
    siteName: "GoldsBet",
  },
  twitter: {
    card: "summary_large_image",
    title: "GoldsBet - Premium Betting Platform",
    description: "GoldsBet is a premium betting platform offering the best sports betting experience with competitive odds, live betting, and secure transactions.",
    creator: "@goldsbet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: [
      { url: "/goldsbet.webp", sizes: "any", type: "image/webp" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/goldsbet.webp", sizes: "180x180", type: "image/webp" },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        {/* Preload critical resources */}
        <link rel="preload" href="/goldsbet pakistan.webp" as="image" />
        
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Standard meta tags */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/goldsbet.webp" />
        <link rel="icon" type="image/webp" href="/goldsbet.webp" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Service Worker Registration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if ('serviceWorker' in navigator) {
                window.addEventListener('load', function() {
                  navigator.serviceWorker.register('/sw.js')
                    .then(function(registration) {
                      console.log('Service Worker registered successfully:', registration.scope);
                    })
                    .catch(function(error) {
                      console.log('Service Worker registration failed:', error);
                    });
                });
              }
            `,
          }}
        />
      </head>
          <body className="min-h-screen text-gray-900 antialiased" suppressHydrationWarning={true}>
            <ExtensionCleaner />
            <StructuredData />
            <Navigation />
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </body>
    </html>
  );
}
