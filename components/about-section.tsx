import { Eye, Users, ShieldCheck } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const values = [
  {
    icon: Eye,
    title: "Our Mission",
    description:
      "To build a trusted global sourcing platform that connects international buyers with premium coir products from India, ensuring consistent quality, competitive pricing and transparent business practices.",
  },
  {
    icon: Users,
    title: "Buyer-First Approach",
    description:
      "We prioritize your business needs with dedicated support, custom product specifications, transparent sourcing, and partnerships built on mutual growth and reliability.",
  },
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Every shipment undergoes rigorous quality checks, internationally recognized certifications, proper documentation, and testing to ensure full compliance with international standards.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2d5016]">
            About Us
          </p>
          <h2 className="mt-3 max-w-lg font-serif text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
            Building trust across borders through transparency and quality
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Bio Loop Supply Private Limited was founded with the objective of building a dependable global sourcing platform. Headquartered in Nagpur, India, we are strategically positioned for pan-India agricultural sourcing and export coordination. We source cocopeat and coir-based products from established manufacturing clusters in Pollachi, Tamil Nadu.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {values.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 150}>
              <div className="group rounded-xl border border-border bg-card p-8 transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#2d5016]/10 transition-colors duration-300 group-hover:bg-[#2d5016] group-hover:text-white">
                  <item.icon className="h-6 w-6 text-[#2d5016] group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-card-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
