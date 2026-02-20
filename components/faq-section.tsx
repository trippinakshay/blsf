"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { ScrollReveal } from "./scroll-reveal"

const faqs = [
  {
    question: "What is your minimum order quantity (MOQ)?",
    answer:
      "Our MOQ varies by product. For compressed coir pith, the minimum is typically one 20ft container (approximately 24-26 MT). For coir fibre and grow bags, we can accommodate smaller trial orders of 5-10 MT to help you assess product quality before scaling up.",
  },
  {
    question: "What are your payment terms?",
    answer:
      "We offer flexible payment terms including T/T (Telegraphic Transfer), Letter of Credit (L/C), and advance payment options. For new buyers, we typically work with 50% advance and 50% against shipping documents. Established buyers may qualify for open credit terms.",
  },
  {
    question: "Do you offer private labeling?",
    answer:
      "Yes, we offer complete private labeling services. You can have your brand name, logo, and product details printed on the packaging. We also support custom packaging sizes and formats to match your market requirements.",
  },
  {
    question: "What countries do you export to?",
    answer:
      "We currently export to Canada, the United Kingdom, and are expanding our reach across Europe, the Middle East, and Southeast Asia. We handle all export documentation and logistics for compliant international shipping to any destination.",
  },
  {
    question: "What certifications do you provide?",
    answer:
      "Our products come with Coir Board of India registration, Coconut Board of India registration, APEDA certification, MSME/Udyam registration, and Phytosanitary certificates. We can also arrange additional lab testing reports including EC, pH, moisture content, and heavy metal analysis.",
  },
  {
    question: "Can you customize product specifications?",
    answer:
      "Yes. We offer full customization including compression ratios, EC levels, moisture content, custom blends (coir pith + fibre), grow bag dimensions, and private labeling. Share your specifications and we will source accordingly from our verified supplier network.",
  },
  {
    question: "What is the typical lead time for orders?",
    answer:
      "Standard lead time is 15-25 days from order confirmation to port dispatch, depending on the product type and any customization requirements. We provide real-time updates on production and shipping status throughout the entire process.",
  },
  {
    question: "How do you ensure product quality?",
    answer:
      "We implement a multi-stage quality assurance process: supplier verification, pre-production sampling, in-process checks, pre-shipment inspection, and lab testing for each batch. We also welcome third-party inspections at the buyer's request.",
  },
]

export function FaqSection() {
  return (
    <section id="faq" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-12 lg:grid-cols-2">
          <ScrollReveal>
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.15em] text-[#2d5016]">
                Frequently Asked Questions
              </p>
              <h2 className="mt-3 font-serif text-3xl leading-snug text-foreground md:text-4xl lg:text-5xl text-balance">
                Common buyer questions answered
              </h2>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Have a question that is not answered below? Feel free to reach
                out and we will get back to you within 24 hours.
              </p>
              <a
                href="mailto:export@bioloopsupply.com"
                className="mt-6 inline-flex rounded-lg bg-[#2d5016] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#1a3a0a] hover:shadow-lg hover:-translate-y-0.5"
              >
                Ask a Question
              </a>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left text-sm font-semibold text-foreground">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
