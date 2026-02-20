import { FileCheck, ClipboardCheck, Award, FlaskConical } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const certifications = [
  {
    image: "/images/cert-coirboard.jpg",
    title: "Coir Board of India",
    description:
      "Registered with the Coir Board of India for manufacturing and export of all coir-based products under the Coir Industry Act.",
  },
  {
    image: "/images/cert-coconutboard.jpg",
    title: "Coconut Board of India",
    description:
      "Registered under the Coconut Development Board for coconut-based product development and export from India.",
  },
  {
    image: "/images/cert-apeda.jpg",
    title: "APEDA Registered",
    description:
      "Officially registered under APEDA for export of agricultural and processed food products from India.",
  },
  {
    image: "/images/cert-msme.jpg",
    title: "MSME / Udyam Registered",
    description:
      "Registered under Micro, Small and Medium Enterprises (MSME) Udyam registration for government-recognized enterprise status.",
  },
  {
    image: "/images/cert-eco.jpg",
    title: "Environment Friendly",
    description:
      "All our coir products are 100% organic, biodegradable, and sustainably sourced, supporting eco-friendly agricultural practices.",
  },
]

const complianceFeatures = [
  {
    icon: FileCheck,
    title: "Phytosanitary Compliance",
    description:
      "All shipments are accompanied by valid Phytosanitary Certificates issued by authorized Indian plant quarantine agencies, ensuring pest-free produce for international markets.",
  },
  {
    icon: ClipboardCheck,
    title: "Quality Certifications",
    description:
      "Products are sourced from certified manufacturing units with documentation covering ISO, GMP, and other relevant industry standards for quality management.",
  },
  {
    icon: Award,
    title: "Export Licenses & Documentation",
    description:
      "Complete export documentation including IEC, GST LUT, shipping contracts at origin, packing lists, bills of lading, certificate of origin, and customs paperwork.",
  },
  {
    icon: FlaskConical,
    title: "Lab Testing",
    description:
      "Comprehensive testing for EC, pH, moisture content, compression ratio, fibre strength for each batch. Heavy metals and pathogen analysis available on request.",
  },
]

export function CertificationsSection() {
  return (
    <section id="certifications" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2d5016]">
            Certifications & Quality Trust
          </p>
          <h2 className="mt-3 max-w-lg font-serif text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
            Trusted certifications for assured quality
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            We maintain full regulatory compliance and work with certified
            suppliers to ensure every shipment meets international standards.
          </p>
        </ScrollReveal>

        {/* Certification Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {certifications.map((cert, i) => (
            <ScrollReveal key={cert.title} delay={i * 100}>
              <div className="group rounded-xl border border-border bg-card p-6 text-center transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="mx-auto h-16 w-16 overflow-hidden rounded-full border-2 border-[#2d5016]/20 p-1 transition-all duration-300 group-hover:border-[#2d5016]/50 group-hover:shadow-md">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="h-full w-full object-cover rounded-full"
                  />
                </div>
                <h3 className="mt-4 text-sm font-semibold text-card-foreground">
                  {cert.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {cert.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Compliance & Feature Grid */}
        <div className="mt-16">
          <ScrollReveal>
            <h3 className="text-xl font-semibold text-foreground mb-8">
              Compliance & Documentation
            </h3>
          </ScrollReveal>
          <div className="grid gap-8 sm:grid-cols-2">
            {complianceFeatures.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="group flex gap-4">
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-lg bg-[#2d5016]/10 transition-colors duration-300 group-hover:bg-[#2d5016]">
                    <feature.icon className="h-5 w-5 text-[#2d5016] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground">
                      {feature.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
