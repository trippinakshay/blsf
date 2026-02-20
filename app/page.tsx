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

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
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
