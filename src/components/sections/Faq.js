"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Phone, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { company, faqs, whatsappLink } from "@/data/siteContent";

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="scroll-mt-28 py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-6 lg:gap-12">
        <div className="lg:col-span-4">
          <SectionHeading
            align="left"
            eyebrow="FAQ"
            title="Frequently Asked"
            highlight="Questions"
            subtitle="Quick answers on timelines, costs, ownership and visas."
            className="!mb-5"
          />
          <div className="rounded-xl bg-cream ring-1 ring-gold/20 p-5">
            <p className="font-serif font-bold text-ink">Still have questions?</p>
            <p className="mt-1 text-sm text-ink/60">Speak directly with a business setup advisor — {company.hours.toLowerCase()}.</p>
            <div className="mt-4 flex flex-col sm:flex-row lg:flex-col gap-2">
              <a href={company.phoneHref} className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand px-4 py-2.5 text-sm font-bold text-gold-light hover:bg-brand-700 transition-colors">
                <Phone className="h-4 w-4" /> {company.phoneDisplay}
              </a>
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-ink ring-1 ring-ink/10 hover:ring-gold transition-colors"
              >
                <MessageCircle className="h-4 w-4 text-gold-dark" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 divide-y divide-ink/[0.08] border-y border-ink/[0.08]">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center gap-4 py-4 text-left group"
                >
                  <span className={`font-serif text-sm font-bold w-6 flex-shrink-0 ${isOpen ? "text-gold-dark" : "text-ink/30"}`}>0{i + 1}</span>
                  <span className={`flex-1 font-semibold transition-colors ${isOpen ? "text-ink" : "text-ink/80 group-hover:text-ink"}`}>{f.q}</span>
                  <span
                    className={`h-7 w-7 rounded-full flex items-center justify-center flex-shrink-0 transition-all ${
                      isOpen ? "bg-brand rotate-45" : "bg-cream ring-1 ring-ink/10 group-hover:ring-gold"
                    }`}
                  >
                    <Plus className={`h-3.5 w-3.5 ${isOpen ? "text-gold-light" : "text-gold-dark"}`} />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden"
                    >
                      <p className="pl-10 pr-11 pb-4 text-sm text-ink/65 leading-relaxed">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
