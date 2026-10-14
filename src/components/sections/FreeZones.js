"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ChevronRight, MessageCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { freeZoneTabs, whatsappLink } from "@/data/siteContent";

export default function FreeZones() {
  const [activeTab, setActiveTab] = useState(freeZoneTabs[0].emirate);

  // The navbar mega menu / search can preselect an emirate tab
  useEffect(() => {
    const onSelect = (e) => {
      if (freeZoneTabs.some((t) => t.emirate === e.detail)) setActiveTab(e.detail);
    };
    window.addEventListener("einova:select-emirate", onSelect);
    return () => window.removeEventListener("einova:select-emirate", onSelect);
  }, []);

  const current = freeZoneTabs.find((t) => t.emirate === activeTab);

  return (
    <section id="freezones" className="scroll-mt-28 py-10 sm:py-14 bg-brand relative overflow-hidden">
      {/* Subtle grid texture */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-6 lg:gap-10">
        {/* Left: intro + emirate selector */}
        <div className="lg:col-span-4 min-w-0">
          <SectionHeading
            dark
            align="left"
            eyebrow="50+ Free Zones"
            title="Explore UAE"
            highlight="Free Zones"
            subtitle="0% corporate and income tax, 100% profit repatriation and same-day setup."
            className="!mb-5"
          />

          <div className="flex lg:flex-col gap-2 overflow-x-auto scrollbar-hide pb-1 lg:pb-0" role="tablist" aria-label="Emirates">
            {freeZoneTabs.map((tab) => {
              const active = tab.emirate === activeTab;
              return (
                <button
                  key={tab.emirate}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setActiveTab(tab.emirate)}
                  className={`group flex items-center justify-between gap-4 whitespace-nowrap rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors ${
                    active ? "bg-white text-ink shadow-lg" : "text-on-brand/75 ring-1 ring-on-brand/15 hover:bg-white/5 hover:text-on-brand"
                  }`}
                >
                  <span>{tab.emirate}</span>
                  <span className="flex items-center gap-1.5">
                    <span className={`text-[11px] rounded px-1.5 py-0.5 ${active ? "bg-gold-50 text-gold-dark" : "bg-white/10 text-on-brand/60"}`}>
                      {tab.zones.length} zones
                    </span>
                    <ChevronRight className={`hidden lg:block h-4 w-4 ${active ? "text-gold-dark" : "text-on-brand/40"}`} />
                  </span>
                </button>
              );
            })}
          </div>

          <div className="hidden lg:block mt-5 rounded-lg bg-black/15 ring-1 ring-on-brand/10 p-4">
            <p className="text-xs uppercase tracking-wider text-on-brand/55">Free zone packages from</p>
            <p className="mt-1 font-serif text-2xl font-bold text-gold-gradient">AED 12,000</p>
            <a href="#contact" className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-gold-light hover:text-on-brand">
              Can’t find yours? Ask our team <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Right: zones grid */}
        <div className="lg:col-span-8 min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
              className="grid sm:grid-cols-2 gap-3"
            >
              {current.zones.map((zone) => (
                <a
                  key={zone.code}
                  href={whatsappLink(`Hello Einova Ventures, I'm interested in setting up in ${zone.name} (${zone.code}).`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-4 rounded-lg bg-white p-4 shadow-sm hover:shadow-xl transition-all hover:-translate-y-0.5"
                >
                  <span className="h-12 w-14 rounded-md bg-brand flex items-center justify-center flex-shrink-0">
                    <span className="font-serif text-[11px] font-bold tracking-wide text-gold-light">{zone.code}</span>
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-sm font-semibold text-ink truncate">{zone.name}</span>
                    <span className="block mt-0.5 text-xs text-ink/55 truncate">{zone.focus}</span>
                  </span>
                  <span className="h-8 w-8 rounded-full bg-cream flex items-center justify-center flex-shrink-0 group-hover:bg-gold-gradient transition-colors">
                    <ArrowUpRight className="h-4 w-4 text-gold-dark group-hover:text-ink" />
                  </span>
                </a>
              ))}

              {/* Enquiry tile fills the grid */}
              <a
                href={whatsappLink(`Hello Einova Ventures, I'd like advice on the best free zone in ${activeTab}.`)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-lg border border-dashed border-gold/50 p-4 text-on-brand hover:bg-white/5 transition-colors"
              >
                <span className="h-12 w-14 rounded-md bg-gold-gradient flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="h-5 w-5 text-ink" />
                </span>
                <span>
                  <span className="block text-sm font-semibold">Not sure which zone?</span>
                  <span className="block mt-0.5 text-xs text-on-brand/60">Get a free recommendation for {activeTab}</span>
                </span>
              </a>
            </motion.div>
          </AnimatePresence>

          <p className="lg:hidden mt-4 text-sm text-on-brand/60">
            Free zone packages from <span className="text-gold-light font-semibold">AED 12,000</span>
          </p>
        </div>
      </div>
    </section>
  );
}
