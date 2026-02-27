import Image from "next/image"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { CertificationsSection } from "@/components/certifications-section"
import { GlobalSection } from "@/components/global-section"
import { WhyUsSection } from "@/components/why-us-section"
import { FaqSection } from "@/components/faq-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export const metadata = {
  title: "Premium Cocopeat & Coir Products Exporter from India | Bio Loop Supply",
  description:
    "Bio Loop Supply is a leading Indian exporter of premium cocopeat blocks, coir grow bags and coir fiber. Supplying UAE, Europe and global horticulture markets.",
  keywords: [
    "cocopeat exporter India",
    "cocopeat supplier UAE",
    "coir grow bags manufacturer",
    "bulk cocopeat blocks",
    "coir fiber exporter",
  ],
}

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />

      {/* Server-rendered representative image (helps Google pick the right SERP thumbnail) */}
      <Image
        src="/images/google-thumbnail-2026.jpg"
        alt="Cocopeat blocks and grow bags - Bio Loop Supply"
        width={1200}
        height={630}
        priority
        style={{
          position: "absolute",
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0,0,0,0)",
          whiteSpace: "nowrap",
          border: 0,
        }}
      />

      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <CertificationsSection />
      <GlobalSection />
      <WhyUsSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  )
}