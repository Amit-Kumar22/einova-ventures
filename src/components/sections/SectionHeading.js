"use client";

import { motion } from "framer-motion";

// Section title: gold rule + eyebrow, serif title with gold highlight, optional subtitle
export default function SectionHeading({ eyebrow, title, highlight, subtitle, dark = false, align = "center", className = "" }) {
  const centered = align === "center";
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5 }}
      className={`mb-6 sm:mb-8 ${centered ? "text-center mx-auto max-w-2xl" : "max-w-xl"} ${className}`}
    >
      {eyebrow && (
        <p
          className={`inline-flex items-center gap-2.5 text-[11px] sm:text-xs font-semibold tracking-[0.22em] uppercase ${
            dark ? "text-gold-light" : "text-gold-dark"
          }`}
        >
          <span className="h-px w-6 bg-gold" />
          {eyebrow}
          {centered && <span className="h-px w-6 bg-gold" />}
        </p>
      )}
      <h2 className={`mt-2.5 font-serif font-bold text-2xl sm:text-[28px] lg:text-[32px] leading-tight ${dark ? "text-on-brand" : "text-ink"}`}>
        {title} {highlight && <span className="text-gold-gradient">{highlight}</span>}
      </h2>
      {subtitle && <p className={`mt-3 text-sm sm:text-[15px] leading-relaxed ${dark ? "text-on-brand/70" : "text-ink/60"}`}>{subtitle}</p>}
    </motion.div>
  );
}
