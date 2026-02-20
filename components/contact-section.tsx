"use client"

import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"
import { ScrollReveal } from "./scroll-reveal"

export function ContactSection() {
  return (
    <section id="contact" className="bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left Column */}
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2d5016]">
                Get in Touch
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
                {"Let's discuss your requirements"}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Ready to source premium coir products from India? Fill in your
                details and let us explore partnership opportunities. Our team is
                here to help.
              </p>

              <div className="mt-8 flex flex-col gap-5">
                <a
                  href="mailto:export@bioloopsupply.com"
                  className="group flex items-center gap-3"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d5016]/10 transition-colors duration-300 group-hover:bg-[#2d5016]">
                    <Mail className="h-5 w-5 text-[#2d5016] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Email</p>
                    <p className="text-sm font-medium text-foreground">
                      export@bioloopsupply.com
                    </p>
                  </div>
                </a>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d5016]/10">
                    <Phone className="h-5 w-5 text-[#2d5016]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      India Contact
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      +91 9423766117
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d5016]/10">
                    <MessageCircle className="h-5 w-5 text-[#2d5016]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Canada (WhatsApp Only)
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      +1 587 969 8326
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#2d5016]/10">
                    <MapPin className="h-5 w-5 text-[#2d5016]" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">
                      Registered Office
                    </p>
                    <p className="text-sm font-medium text-foreground">
                      Nagpur, Maharashtra, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Contact Form */}
          <ScrollReveal delay={200}>
            <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
              <form
                action={`https://formsubmit.co/export@bioloopsupply.com`}
                method="POST"
                className="flex flex-col gap-5"
              >
                {/* Honeypot */}
                <input type="text" name="_honey" className="hidden" />
                {/* Disable captcha */}
                <input
                  type="hidden"
                  name="_captcha"
                  value="false"
                />
                <input
                  type="hidden"
                  name="_subject"
                  value="New Export Enquiry from Bio Loop Supply Website"
                />

                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="firstName"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Full Name
                    </label>
                    <input
                      id="firstName"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="company"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Company
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors"
                      placeholder="Your company"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="email"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors"
                      placeholder="+1 234 567 890"
                    />
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="country"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Country
                    </label>
                    <input
                      id="country"
                      name="country"
                      type="text"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors"
                      placeholder="United Kingdom"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="product"
                      className="mb-1.5 block text-xs font-medium text-foreground"
                    >
                      Product Interest
                    </label>
                    <select
                      id="product"
                      name="product_interest"
                      className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors"
                    >
                      <option value="">Select a product</option>
                      <option value="Compressed Coir Pith (Cocopeat)">
                        Compressed Coir Pith (Cocopeat)
                      </option>
                      <option value="Coir Fibre">Coir Fibre</option>
                      <option value="Coco Grow Bags & Discs">
                        Coco Grow Bags & Discs
                      </option>
                      <option value="Custom Blend">Custom Blend</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="mb-1.5 block text-xs font-medium text-foreground"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-[#2d5016] focus:outline-none focus:ring-1 focus:ring-[#2d5016] transition-colors"
                    placeholder="Tell us about your requirements, quantities, and specifications..."
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-lg bg-[#2d5016] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1a3a0a] hover:shadow-lg hover:-translate-y-0.5"
                >
                  Submit Enquiry
                </button>
              </form>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
