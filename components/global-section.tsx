import { ScrollReveal } from "./scroll-reveal"

function IndiaFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 900 600" xmlns="http://www.w3.org/2000/svg">
      <rect width="900" height="200" fill="#FF9933" />
      <rect y="200" width="900" height="200" fill="#fff" />
      <rect y="400" width="900" height="200" fill="#138808" />
      <circle cx="450" cy="300" r="60" fill="navy" fillOpacity="0" stroke="#000080" strokeWidth="3" />
      <circle cx="450" cy="300" r="60" fill="none" stroke="#000080" strokeWidth="3" />
      <circle cx="450" cy="300" r="12" fill="#000080" />
      {Array.from({ length: 24 }).map((_, i) => (
        <line
          key={i}
          x1="450"
          y1="300"
          x2={450 + 55 * Math.cos((i * 15 * Math.PI) / 180)}
          y2={300 + 55 * Math.sin((i * 15 * Math.PI) / 180)}
          stroke="#000080"
          strokeWidth="1.5"
        />
      ))}
    </svg>
  )
}

function CanadaFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 9600 4800" xmlns="http://www.w3.org/2000/svg">
      <rect fill="#f00" width="2400" height="4800" />
      <rect fill="#fff" x="2400" width="4800" height="4800" />
      <rect fill="#f00" x="7200" width="2400" height="4800" />
      <path fill="#f00" d="M4800 1120l-224 640 576-224-352 288 96 416-352-288h-288l-352 288 96-416-352-288 576 224-224-640 128 352z" />
    </svg>
  )
}

function UKFlag({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 60 30" xmlns="http://www.w3.org/2000/svg">
      <clipPath id="ukClip"><rect width="60" height="30" /></clipPath>
      <g clipPath="url(#ukClip)">
        <rect width="60" height="30" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#ukClip)" />
        <path d="M30,0 V30 M0,15 H60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 V30 M0,15 H60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  )
}

const locations = [
  {
    country: "India",
    Flag: IndiaFlag,
    role: "Headquarters",
    description:
      "Nagpur, Maharashtra - Headquartered with direct sourcing connections to coir manufacturing clusters in Pollachi, Tamil Nadu.",
  },
  {
    country: "Canada",
    Flag: CanadaFlag,
    role: "International Presence",
    description:
      "Growing presence in the Canadian horticulture and agriculture market with responsive communication and WhatsApp support.",
  },
  {
    country: "United Kingdom",
    Flag: UKFlag,
    role: "International Presence",
    description:
      "Active presence in the UK horticultural sector and garden retail market with compliant customs clearance and documentation.",
  },
]

export function GlobalSection() {
  return (
    <section id="global" className="bg-[#1a3a0a] py-20 md:py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.15em] text-white/50">
            Global Trade Network
          </p>
          <h2 className="mt-3 max-w-lg font-serif text-3xl leading-snug text-white md:text-4xl lg:text-5xl text-balance">
            Strategically positioned for seamless global trade
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-white/60">
            With operations in India and an international presence in Canada and
            the UK, we are well-positioned to support global buyers.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {locations.map((loc, i) => (
            <ScrollReveal key={loc.country} delay={i * 150}>
              <div className="group rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-14 overflow-hidden rounded-md border border-white/20 shadow-md flex-shrink-0">
                    <loc.Flag className="h-full w-full object-cover" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {loc.country}
                    </h3>
                    <p className="text-xs text-white/40">{loc.role}</p>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-white/60">
                  {loc.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
