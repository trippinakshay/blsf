import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dm-serif" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700", "800"] })

/**
 * IMPORTANT:
 * 1) Put the new OG image at: /public/images/google-thumbnail-v2.jpg
 * 2) Then it will be available at: https://www.bioloopsupply.com/images/google-thumbnail-v2.jpg
 */
export const metadata: Metadata = {
  title: {
    default: "Bio Loop Supply",
    template: "%s | Bio Loop Supply",
  },
  description:
    "Bio Loop Supply is an India-based B2B exporter of low EC cocopeat blocks, grow bags and coir substrates.",

  // Helps Google understand “site name”
  applicationName: "Bio Loop Supply",

  // Ensures relative URLs in metadata resolve correctly (OG/Twitter images)
  metadataBase: new URL("https://www.bioloopsupply.com"),

  // Favicons (max compatibility)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }], // optional if you add this file
  },

  openGraph: {
    title: "Bio Loop Supply",
    description:
      "India-based B2B exporter of cocopeat blocks, grow bags and coir substrates for global buyers.",
    url: "https://www.bioloopsupply.com/",
    siteName: "Bio Loop Supply",
    type: "website",
    images: [
      {
        url: "/images/google-thumbnail-2026.jpg",
        width: 1200,
        height: 630,
        alt: "Bio Loop Supply - cocopeat blocks and grow bags",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Bio Loop Supply",
    description:
      "India-based B2B exporter of cocopeat blocks, grow bags and coir substrates for global buyers.",
    images: ["/images/google-thumbnail-2026.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${dmSans.variable} ${dmSerif.variable} ${sora.variable}`}>
      <head>
        {/* WebSite schema: brand name + legal name as alternate */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bio Loop Supply",
              alternateName: "Bio Loop Supply Private Limited",
              url: "https://www.bioloopsupply.com/",
            }),
          }}
        />

        {/* Organization schema: brand name + legal name as alternate */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bio Loop Supply",
              legalName: "Bio Loop Supply Private Limited",
              alternateName: "Bio Loop Supply Private Limited",
              url: "https://www.bioloopsupply.com/",
              // Point to a logo you control in /public (recommended)
              logo: "https://www.bioloopsupply.com/favicon.png",
              // Helps Google associate a representative image with the entity/site
              image: "https://www.bioloopsupply.com/images/google-thumbnail-2026.jpg",
              foundingDate: "2025",
              address: {
                "@type": "PostalAddress",
                addressCountry: "IN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+91-9423766117",
                contactType: "sales",
                areaServed: ["UAE", "Europe", "Canada"],
                availableLanguage: ["English"],
              },
            }),
          }}
        />
      </head>

      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}