import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dm-serif" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700", "800"] })

export const metadata: Metadata = {
  title: {
    default: "Bio Loop Supply",
    template: "%s | Bio Loop Supply",
  },
  description:
    "Bio Loop Supply is an India-based B2B exporter of low EC cocopeat blocks, grow bags and coir substrates.",

  // Helps Google understand “site name”
  applicationName: "Bio Loop Supply",

  // Favicons (max compatibility)
  // Put these files in /public:
  // - public/favicon.ico
  // - public/favicon.png  (optional but recommended)
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
              alternateName: "Bio Loop Supply Private Limited",
              url: "https://www.bioloopsupply.com/",
              // Point to a logo you control in /public (recommended)
              // Put an icon-only PNG at: public/logo.png
              // Or change to /favicon.png if you prefer:
              logo: "https://www.bioloopsupply.com/favicon.png",
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