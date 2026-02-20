import { BioLoopLogo } from "./bio-loop-logo"
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react"

const navigation = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Certifications", href: "#certifications" },
  { label: "Why Us", href: "#why-us" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

const products = [
  { label: "Cocopeat Blocks", href: "#products" },
  { label: "Cocopeat Bricks", href: "#products" },
  { label: "Coir Fibre", href: "#products" },
  { label: "Coco Grow Bags", href: "#products" },
  { label: "Coco Grow Discs", href: "#products" },
  { label: "Cocopeat Powder", href: "#products" },
  { label: "Custom Blends", href: "#products" },
]

export function Footer() {
  return (
    <footer className="bg-[#0d1a08] py-16 text-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <BioLoopLogo className="text-white" size="footer" />
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              India-based merchant exporter of premium coir products to global
              markets.
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <div className="flex items-center gap-2 text-xs text-white/40">
                <MapPin className="h-3.5 w-3.5 flex-shrink-0" />
                Nagpur, Maharashtra, India
              </div>
              <a
                href="tel:+919423766117"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                +91 9423766117
              </a>
              <a
                href="mailto:export@bioloopsupply.com"
                className="flex items-center gap-2 text-xs text-white/40 hover:text-white/70 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 flex-shrink-0" />
                export@bioloopsupply.com
              </a>
              <div className="flex items-center gap-2 text-xs text-white/40">
                <MessageCircle className="h-3.5 w-3.5 flex-shrink-0" />
                Canada WhatsApp: +1 587 969 8326
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white">Navigation</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navigation.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-sm font-semibold text-white">Products</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {products.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/50 transition-colors hover:text-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Details */}
          <div>
            <h4 className="text-sm font-semibold text-white">
              Company Details
            </h4>
            <ul className="mt-4 flex flex-col gap-3">
              <li className="text-sm text-white/50">
                <span className="text-white/70 font-medium">IEC:</span>{" "}
                AAOCB1621M
              </li>
              <li className="text-sm text-white/50">
                <span className="text-white/70 font-medium">GST:</span>{" "}
                27AAOCB1621M1ZH
              </li>
              <li className="text-sm text-white/50">
                <span className="text-white/70 font-medium">CIN:</span>{" "}
                U46301MH2025PTC461926
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 border-t border-white/10 pt-6 flex flex-col items-center gap-2 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/30">
            Bio Loop Supply Private Limited. All rights reserved.
          </p>
          <a
            href="mailto:export@bioloopsupply.com"
            className="text-xs text-white/30 hover:text-white/60 transition-colors"
          >
            export@bioloopsupply.com
          </a>
        </div>
      </div>
    </footer>
  )
}
