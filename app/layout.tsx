import type { Metadata } from "next"
import { DM_Sans, DM_Serif_Display, Sora } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" })
const dmSerif = DM_Serif_Display({ weight: "400", subsets: ["latin"], variable: "--font-dm-serif" })
const sora = Sora({ subsets: ["latin"], variable: "--font-sora", weight: ["400", "600", "700", "800"] })

export const metadata: Metadata = {
  title: "Bio Loop Supply Private Limited | Cocopeat & Coir Exporter",
  description:
    "Bio Loop Supply Private Limited is an India-based B2B exporter of low EC cocopeat blocks, grow bags and coir substrates.",
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Bio Loop Supply Private Limited",
              alternateName: "Bio Loop Supply",
              url: "https://www.bioloopsupply.com/",
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Bio Loop Supply Private Limited",
              url: "https://www.bioloopsupply.com/",
              logo: "https://www.bioloopsupply.com/logo.png",
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