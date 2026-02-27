import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dm-serif" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700", "800"] })

// Representative image for Google snippet + OG/Twitter
const OG_IMAGE = "https://www.bioloopsupply.com/images/google-thumbnail-2026.jpg"

export const metadata: Metadata = {
  title: {
    default: "Bio Loop Supply",
    template: "%s | Bio Loop Supply",
  },
  description:
    "Bio Loop Supply is an India-based B2B exporter of low EC cocopeat blocks, grow bags and coir substrates.",

  applicationName: "Bio Loop Supply",

  // Ensures relative URLs resolve correctly, but we still use absolute OG_IMAGE for max compatibility.
  metadataBase: new URL("https://www.bioloopsupply.com"),

  // Favicons (max compatibility)
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon.png", type: "image/png", sizes: "48x48" },
    ],
    shortcut: ["/favicon.ico"],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
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
        url: OG_IMAGE,
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
    images: [OG_IMAGE],
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

  // Extra hints that sometimes influence snippet image selection
  other: {
    thumbnail: OG_IMAGE,
    googlebot: "max-image-preview:large",
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
        {/* WebSite schema */}
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

        {/* Organization schema */}
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
              logo: "https://www.bioloopsupply.com/favicon.png",
              image: {
                "@type": "ImageObject",
                url: OG_IMAGE,
                width: 1200,
                height: 630,
              },
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