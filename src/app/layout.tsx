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
    default: "GoldsBet - Premium Betting Platform | Pakistan India Bangladesh",
    template: "%s | Golds Bet"
  },
  description: "GoldsBet is a premium betting platform offering the best sports betting experience with competitive odds, live betting, and secure transactions. Available in Pakistan, India & Bangladesh.",
  keywords: ["golds bet", "betting", "sports betting", "online betting", "casino", "gambling", "odds", "live betting", "pakistan betting", "india betting", "bangladesh betting", "mobile betting app", "easyPaisa", "jazzCash", "cryptocurrency betting"],
  authors: [{ name: "Golds Bet Team" }],
  creator: "Golds Bet",
  publisher: "Golds Bet",
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
    title: "GoldsBet - Premium Betting Platform | Pakistan India Bangladesh",
    description: "Golds Bet is a premium betting platform offering the best sports betting experience with competitive odds, live betting, and secure transactions. Available in Pakistan, India & Bangladesh.",
    siteName: "Golds Bet",
    images: [
      {
        url: "https://goldsbetpk.tech/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Golds Bet Premium Betting Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Golds Bet - Premium Betting Platform | Pakistan India Bangladesh",
    description: "Golds Bet is a premium betting platform offering the best sports betting experience with competitive odds, live betting, and secure transactions.",
    creator: "@goldsbet",
    images: ["https://goldsbetpk.tech/og-image.jpg"],
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
      { url: "/favicon.ico", sizes: "16x16" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-48x48.png", sizes: "48x48", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
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
        {/* DNS prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        
        {/* Preconnect to critical third-party origins */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        {/* Preload critical resources */}
        {/* Removed Golds bet image preload - now using Next.js Image component */}
        
        {/* Standard meta tags */}
        <link rel="icon" href="/favicon.ico" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/favicon-48x48.png" sizes="48x48" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Performance hints */}
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        
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
