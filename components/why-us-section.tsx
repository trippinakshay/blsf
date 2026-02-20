import {
  Handshake,
  Network,
  ClipboardList,
  Workflow,
  BarChart3,
} from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

const features = [
  {
    icon: Network,
    title: "Established Supplier Network",
    description:
      "Long-standing relationships with verified coir producers across key manufacturing hubs in Tamil Nadu and Kerala.",
  },
  {
    icon: ClipboardList,
    title: "Custom Blends & Specifications",
    description:
      "We offer product customization including custom EC levels, custom blends, specific compression ratios, and private labeling.",
  },
  {
    icon: Workflow,
    title: "Seamless Export Coordination",
    description:
      "End-to-end management from procurement to port, including documentation, logistics, and customs clearance.",
  },
  {
    icon: BarChart3,
    title: "Transparent Operations",
    description:
      "Complete visibility into sourcing, quality metrics, and shipping timelines through proactive communication.",
  },
]

export function WhyUsSection() {
  return (
    <section id="why-us" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2d5016]">
                Why Bio Loop Supply
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
                Your reliable partner for Indian coir exports
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                We go beyond sourcing. Our goal is to establish long-term
                partnerships built on transparency, quality assurance, and
                responsive service across time zones.
              </p>
              <div className="mt-6 flex items-center gap-3">
                <Handshake className="h-5 w-5 text-[#2d5016]" />
                <span className="text-sm text-muted-foreground">
                  Currently supporting the global agricultural commodity market
                </span>
              </div>
            </div>
          </ScrollReveal>

          <div className="grid gap-8 sm:grid-cols-2">
            {features.map((feature, i) => (
              <ScrollReveal key={feature.title} delay={i * 100}>
                <div className="group">
                  <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#2d5016]/10 transition-colors duration-300 group-hover:bg-[#2d5016]">
                    <feature.icon className="h-5 w-5 text-[#2d5016] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <h3 className="mt-4 text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
