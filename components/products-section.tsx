"use client"

import { ArrowRight, Check } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"
import { useState } from "react"

const products = [
  {
    title: "Compressed Coir Pith (Cocopeat)",
    image: "/images/coir-pith.jpg",
    description:
      "A naturally light organic growing medium extracted from coconut husks. Provides excellent water retention, aeration, and serves as a sustainable alternative to peat moss.",
    features: [
      "5 kg Blocks / Briquettes",
      "High EC / Low EC Options",
      "Buffered / Unbuffered",
    ],
    specs: {
      "Moisture Content": "15-20%",
      "EC Level": "< 0.5 mS/cm (Low EC) / < 2.0 mS/cm (High EC)",
      "pH Range": "5.5 - 6.8",
      "Packaging": "5kg blocks, shrink-wrapped on pallets",
      "MOQ": "1x 20ft container (~24 MT)",
      "Lead Time": "15-25 days from order confirmation",
      "HS Code": "4601.22 / 4601.29",
    },
  },
  {
    title: "Coir Fibre",
    image: "/images/coir-fibre.jpg",
    description:
      "Natural coconut husk fibre used across manufacturing, composting, and agriculture. Available in various lengths, grades, and processing levels.",
    features: [
      "White Fibre & Brown Fibre",
      "Cut Fibre (2-10 cm)",
      "Bristle Fibre",
    ],
    specs: {
      "Moisture Content": "10-15%",
      "EC Level": "< 1.0 mS/cm",
      "pH Range": "5.8 - 6.5",
      "Packaging": "Bales (100-150 kg) / Compressed blocks",
      "MOQ": "1x 20ft container (~18-20 MT)",
      "Lead Time": "15-20 days from order confirmation",
      "HS Code": "5305.00",
    },
  },
  {
    title: "Coco Grow Bags & Discs",
    image: "/images/grow-bags.jpg",
    description:
      "Ready-to-use growing media in standardized sizes. Designed for consistent performance, uniform moisture distribution, and optimal drainage for commercial growers.",
    features: [
      "Open-top Grow Bags",
      "Coir Grow Discs (80-120mm)",
      "Custom Blended Media",
    ],
    specs: {
      "Moisture Content": "15-20%",
      "EC Level": "< 0.5 mS/cm (washed)",
      "pH Range": "5.5 - 6.5",
      "Packaging": "Individual UV-treated bags / Palletized",
      "MOQ": "1x 20ft container",
      "Lead Time": "20-25 days from order confirmation",
      "HS Code": "4601.94 / 4601.99",
    },
  },
]

function ProductCard({
  product,
  index,
}: {
  product: (typeof products)[0]
  index: number
}) {
  const [showSpecs, setShowSpecs] = useState(false)

  return (
    <ScrollReveal delay={index * 150}>
      <div className="group overflow-hidden rounded-xl border border-border bg-card transition-all duration-500 hover:shadow-xl hover:-translate-y-1">
        <div className="w-full aspect-[4/3] overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="block w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="p-6">
          <h3 className="text-lg font-semibold text-card-foreground">
            {product.title}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>
          <ul className="mt-4 flex flex-col gap-2">
            {product.features.map((feature) => (
              <li
                key={feature}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <Check className="h-4 w-4 flex-shrink-0 text-[#2d5016]" />
                {feature}
              </li>
            ))}
          </ul>

          {/* Toggle Specs */}
          <button
            onClick={() => setShowSpecs(!showSpecs)}
            className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#2d5016] transition-colors hover:text-[#4a7c28]"
          >
            {showSpecs ? "Hide" : "View Full"} Specifications
            <ArrowRight
              className={`h-4 w-4 transition-transform duration-300 ${showSpecs ? "rotate-90" : ""}`}
            />
          </button>

          {/* Specs Table */}
          <div
            className={`overflow-hidden transition-all duration-500 ${showSpecs ? "mt-4 max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}
          >
            <div className="rounded-lg border border-border overflow-hidden">
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specs).map(
                    ([key, value], i) => (
                      <tr
                        key={key}
                        className={
                          i % 2 === 0 ? "bg-secondary/50" : "bg-card"
                        }
                      >
                        <td className="px-3 py-2 font-medium text-foreground whitespace-nowrap">
                          {key}
                        </td>
                        <td className="px-3 py-2 text-muted-foreground">
                          {value}
                        </td>
                      </tr>
                    )
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </ScrollReveal>
  )
}

export function ProductsSection() {
  return (
    <section id="products" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <ScrollReveal>
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2d5016]">
                Premium Range
              </p>
              <h2 className="mt-3 max-w-md font-serif text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
                Premium coir products sourced from India
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              We source superior quality coir products directly from certified
              producers across south India, ensuring fair pricing and consistent
              specifications.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {products.map((product, i) => (
            <ProductCard key={product.title} product={product} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
