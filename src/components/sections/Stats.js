"use client";

import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { CalendarCheck, Building2, BadgeCheck, Star } from "lucide-react";
import { stats } from "@/data/siteContent";

const ICONS = [CalendarCheck, Building2, BadgeCheck, Star];

function CountUp({ value, decimals = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, { duration: 1.6, ease: "easeOut", onUpdate: setDisplay });
    return () => controls.stop();
  }, [inView, value]);

  return <span ref={ref}>{display.toLocaleString("en-US", { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
}

// Floating stats bar that overlaps the bottom edge of the hero
export default function Stats() {
  return (
    <section id="stats" className="relative z-20 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 rounded-xl bg-white shadow-xl shadow-brand/10 ring-1 ring-gold/20 overflow-hidden">
          {stats.map((s, i) => {
            const Icon = ICONS[i];
            return (
              <div
                key={s.label}
                className={`flex items-center gap-3 px-4 py-4 sm:px-6 sm:py-5 border-gold/15 ${i % 2 === 0 ? "border-r" : ""} ${i === 1 ? "lg:border-r" : ""} ${
                  i < 2 ? "border-b lg:border-b-0" : ""
                }`}
              >
                <span className="hidden sm:flex h-11 w-11 rounded-lg bg-gold-50 ring-1 ring-gold/25 items-center justify-center flex-shrink-0">
                  <Icon className="h-5 w-5 text-gold-dark" />
                </span>
                <div>
                  <p className="font-serif font-bold text-2xl lg:text-[28px] leading-none text-ink">
                    <CountUp value={s.value} decimals={s.decimals} />
                    <span className="text-gold-dark">{s.suffix}</span>
                  </p>
                  <p className="mt-1 text-[11px] sm:text-xs tracking-wider uppercase text-ink/55">{s.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
