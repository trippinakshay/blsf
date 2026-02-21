"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

const floatingProducts = [
  { label: "Cocopeat Blocks", top: "12%", left: "62%", delay: 0, size: "lg" },
  { label: "Coir Bricks", top: "28%", left: "72%", delay: 0.5, size: "md" },
  { label: "Grow Bags", top: "44%", left: "66%", delay: 1.0, size: "lg" },
  { label: "Coco Discs", top: "58%", left: "78%", delay: 1.5, size: "md" },
  { label: "Cocopeat Powder", top: "22%", left: "82%", delay: 2.0, size: "sm" },
  { label: "Coir Fibre", top: "70%", left: "68%", delay: 2.5, size: "md" },
  { label: "Custom Blends", top: "40%", left: "88%", delay: 3.0, size: "sm" },
]

export function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden">
    {/* Background Image */}
    <div className="absolute inset-0 z-0 relative">
      <Image
        src="/images/hero-bg.jpg"
        alt="Coir manufacturing facility with coconut palms at sunset"
        fill
        priority
        sizes="100vw"
        className="object-cover"
        unoptimized
      />
    <div className="absolute inset-0 bg-gradient-to-r from-[#0a1f05]/90 via-[#0a1f05]/65 to-[#0a1f05]/30" />
    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1f05]/60 via-transparent to-[#0a1f05]/20" />
  </div>

      {/* Floating Product Labels */}
      <div className="absolute inset-0 z-10 pointer-events-none hidden lg:block">
        {floatingProducts.map((product, i) => (
          <div
            key={product.label}
            className={`absolute transition-all duration-1000 ${loaded ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
            style={{
              top: product.top,
              left: product.left,
              transitionDelay: `${1.2 + product.delay}s`,
              animation: loaded
                ? `playFloat${i % 4} ${6 + (i % 4)}s cubic-bezier(0.45, 0, 0.55, 1) infinite ${product.delay}s`
                : "none",
            }}
          >
            <div
              className={`
                backdrop-blur-md border border-white/20 rounded-full shadow-lg shadow-black/10
                ${product.size === "lg" ? "px-5 py-2.5 text-sm" : product.size === "md" ? "px-4 py-2 text-xs" : "px-3 py-1.5 text-[11px]"}
                bg-white/15 text-white font-medium whitespace-nowrap
              `}
            >
              <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#8ade5a] animate-pulse" />
              {product.label}
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-20 md:pt-36 md:pb-28">
        <p
          className={`mb-5 text-sm uppercase tracking-[0.25em] text-white/60 transition-all duration-1000 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          India-Based Merchant Exporter
        </p>
        <h1
          className={`max-w-2xl font-serif text-4xl leading-[1.15] text-white md:text-5xl lg:text-6xl transition-all duration-1000 delay-200 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          Connecting Global Buyers with Premium Coir Products
        </h1>
        <p
          className={`mt-6 max-w-lg text-base leading-relaxed text-white/80 md:text-lg transition-all duration-1000 delay-400 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          Reliable sourcing, trusted brands, and seamless export solutions for
          retailers, growers, and agricultural professionals from India.
        </p>
        <div
          className={`mt-8 flex flex-wrap gap-4 transition-all duration-1000 delay-500 ${loaded ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}`}
        >
          <a
            href="#products"
            className="group relative rounded-lg bg-white px-7 py-3.5 text-sm font-semibold text-[#1a3a0a] transition-all duration-300 hover:shadow-xl hover:shadow-white/20 hover:-translate-y-0.5"
          >
            Explore Products
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-white/30 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 hover:border-white/50 hover:-translate-y-0.5"
          >
            Get a Quote
          </a>
        </div>

        {/* Mobile: product tags in a horizontal scroll strip */}
        <div
          className={`mt-12 flex flex-wrap gap-2 lg:hidden transition-all duration-1000 delay-700 ${loaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
        >
          {floatingProducts.map((product) => (
            <span
              key={product.label}
              className="inline-flex items-center gap-1.5 rounded-full bg-white/15 backdrop-blur-md border border-white/20 px-4 py-2 text-xs font-medium text-white"
            >
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-[#8ade5a] animate-pulse" />
              {product.label}
            </span>
          ))}
        </div>
      </div>

      {/* Keyframe styles */}
      <style jsx>{`
        @keyframes playFloat0 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          25% { transform: translate(8px, -12px) rotate(1.2deg); }
          50% { transform: translate(-6px, -4px) rotate(-1deg); }
          75% { transform: translate(10px, 6px) rotate(0.8deg); }
        }
         @keyframes playFloat1 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          20% { transform: translate(-10px, -10px) rotate(-1.4deg); }
          55% { transform: translate(6px, -16px) rotate(1.1deg); }
          80% { transform: translate(-4px, 8px) rotate(-0.6deg); }
        }
        @keyframes playFloat2 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          30% { transform: translate(12px, 4px) rotate(1deg); }
          60% { transform: translate(-8px, -14px) rotate(-1.2deg); }
          85% { transform: translate(4px, -6px) rotate(0.7deg); }
        }
        @keyframes playFloat3 {
          0%, 100% { transform: translate(0px, 0px) rotate(0deg); }
          35% { transform: translate(-12px, 6px) rotate(-1deg); }
          65% { transform: translate(8px, -12px) rotate(1.3deg); }
          90% { transform: translate(-2px, -4px) rotate(-0.5deg); }
        }  
      `}</style>
    </section>
  )
}
