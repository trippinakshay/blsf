"use client"

import { useEffect, useState } from "react"

export function BioLoopLogo({
  className = "",
  size = "default",
}: {
  className?: string
  size?: "default" | "large" | "footer"
}) {
  const [isAnimating, setIsAnimating] = useState(false)
  const [hasLoaded, setHasLoaded] = useState(false)

  useEffect(() => {
    setHasLoaded(true)
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => setIsAnimating(false), 1500)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const iconSize = size === "large" ? 64 : size === "footer" ? 40 : 44
  const nameClass =
    size === "large"
      ? "text-4xl"
      : size === "footer"
        ? "text-2xl"
        : "text-[28px]"
  const supplyClass =
    size === "large" ? "text-[11px] tracking-[0.35em]" : size === "footer" ? "text-[8px] tracking-[0.3em]" : "text-[9px] tracking-[0.3em]"

  return (
    <div className={`flex items-center ${className}`} style={{ perspective: "600px" }}>
      {/* SVG icon overlapping the text */}
      <div
        className="relative z-10 -mr-1 shrink-0"
        style={{
          filter: isAnimating
            ? "drop-shadow(0 0 14px rgba(74,124,40,0.7))"
            : "drop-shadow(0 2px 6px rgba(0,0,0,0.25))",
          transition: "filter 0.6s ease",
        }}
      >
        <svg
          width={iconSize}
          height={iconSize}
          viewBox="0 0 56 56"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-1000 ${hasLoaded ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          style={{
            transition: "transform 1.2s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.5s ease-in",
            transform: isAnimating ? "rotateY(360deg)" : "rotateY(0deg)",
          }}
        >
          {/* Outer loop leaf shape */}
          <path
            d="M28 4C28 4 12 12 12 24C12 32 17 37 22 39.5C17 35 15 30 17.5 22C20 14 28 11 28 11C28 11 36 14 38.5 22C41 30 39 35 34 39.5C39 37 44 32 44 24C44 12 28 4 28 4Z"
            fill="currentColor"
            className={`transition-all duration-700 ${isAnimating ? "opacity-90" : "opacity-100"}`}
          />
          {/* Inner seed - glowing center */}
          <circle
            cx="28"
            cy="24"
            r="5"
            fill="#4a7c28"
            style={{
              transformOrigin: "28px 24px",
              transform: isAnimating ? "scale(1.3)" : "scale(1)",
              filter: isAnimating ? "drop-shadow(0 0 6px rgba(74,124,40,0.8))" : "none",
              transition: "transform 0.7s ease, filter 0.7s ease",
            }}
          />
          {/* Inner ring */}
          <circle cx="28" cy="24" r="8" fill="none" stroke="#4a7c28" strokeWidth="0.8" opacity={0.4} />
          {/* Bottom stem */}
          <path
            d="M28 30C28 30 25.5 38 25.5 46C25.5 48.5 26.5 51 28 51C29.5 51 30.5 48.5 30.5 46C30.5 38 28 30 28 30Z"
            fill="currentColor"
            opacity={0.8}
          />
        </svg>
      </div>

      {/* Text - "BioLoop" combined with "Supply" underneath */}
      <div className="relative z-20 flex flex-col leading-none pl-1">
        <span
          className={`font-extrabold tracking-tight text-current ${nameClass}`}
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          <span>Bio</span>
          <span className="text-[#4a7c28]" style={{ textShadow: "0 1px 2px rgba(0,0,0,0.15)" }}>Loop</span>
        </span>
        <span
          className={`uppercase text-current opacity-50 font-medium ${supplyClass}`}
          style={{ fontFamily: "var(--font-sora), sans-serif" }}
        >
          Supply
        </span>
      </div>
    </div>
  )
}
