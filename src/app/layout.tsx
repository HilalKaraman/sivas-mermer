import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sivasmermer.com"), // Replace with actual domain
  title: {
    default: "Sivas Mermer | Mermer, Doğal Taş, Granit ve Mezar Taşı",
    template: "%s | Sivas Mermer",
  },
  description:
    "Sivas'ta kaliteli mermer, granit, doğal taş, mezar taşı, mutfak tezgahı ve anıt mezar hizmetleri. Uzman işçilik ve uygun fiyatlarla hizmetinizdeyiz.",
  keywords: [
    "Sivas Mermer",
    "Sivas Granit",
    "Mezar Taşı Sivas",
    "Mutfak Tezgahı",
    "Mermer Dekorasyon",
    "Doğal Taş",
    "Çimstone",
    "Belenco",
    "Granit Tezgah",
  ],
  authors: [{ name: "Sivas Mermer" }],
  creator: "Sivas Mermer",
  publisher: "Sivas Mermer",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Sivas Mermer | Kaliteli Mermer ve Granit İşçiliği",
    description:
      "Sivas'ta mermer ve granit ihtiyaçlarınız için güvenilir adres. Mezar taşı, mutfak tezgahı ve özel tasarım mermer işleri.",
    url: "https://sivasmermer.com",
    siteName: "Sivas Mermer",
    locale: "tr_TR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sivas Mermer Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sivas Mermer",
    description: "Sivas'ta kaliteli mermer ve granit çözümleri.",
    images: ["/og-image.png"],
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
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/icons/favicon.ico",
    apple: [
      { url: "/icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
    other: [
      {
        rel: "manifest",
        url: "/icons/site.webmanifest",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20">{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sivas Mermer",
              "image": "https://sivasmermer.com/logo.jpeg",
              "description": "Sivas'ta kaliteli mermer, granit ve doğal taş çözümleri.",
              "telephone": "+903462114827",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Mehmet Akif Ersoy Mah. 36. Sokak No:37",
                "addressLocality": "Merkez",
                "addressRegion": "Sivas",
                "postalCode": "58000",
                "addressCountry": "TR"
              },
              "url": "https://sivasmermer.com",
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday"
                ],
                "opens": "08:00",
                "closes": "18:00"
              }
            })
          }}
        />
      </body>
    </html>
  );
}
