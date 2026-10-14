"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, MessageCircle, ShieldCheck, Star, Clock3 } from "lucide-react";
import { heroContent, whatsappLink } from "@/data/siteContent";

const VIDEOS = ["/videos/dubai-skyline.mp4", "/videos/dubai-night.mp4"];

const SETUP_TYPES = ["UAE Free Zone", "UAE Mainland", "UAE Offshore", "Not sure yet"];

const fieldClass =
  "mt-1 w-full rounded-lg border border-ink/10 bg-cream px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20 transition-colors";

export default function Hero() {
  // Two stacked videos that crossfade into each other when one ends
  const [active, setActive] = useState(0);
  const videoRefs = useRef([]);
  const [form, setForm] = useState({ name: "", phone: "", type: SETUP_TYPES[0] });

  useEffect(() => {
    const v = videoRefs.current[active];
    if (v) {
      v.currentTime = 0;
      v.play().catch(() => {});
    }
  }, [active]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `Hello Einova Ventures, I'm ${form.name || "interested"}${form.phone ? ` (${form.phone})` : ""}. I'd like a free consultation for ${form.type} company setup.`;
    window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="home" className="relative overflow-hidden bg-brand pt-14 sm:pt-16 md:pt-28">
      {/* Background video */}
      <div className="absolute inset-0">
        {VIDEOS.map((src, i) => (
          <video
            key={src}
            ref={(el) => (videoRefs.current[i] = el)}
            src={src}
            poster={i === 0 ? "/videos/dubai-poster.jpg" : undefined}
            autoPlay={i === 0}
            muted
            playsInline
            preload={i === 0 ? "auto" : "metadata"}
            onEnded={() => setActive((i + 1) % VIDEOS.length)}
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ${active === i ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-brand via-brand/85 to-brand/40" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand/90 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-20 lg:pt-12 lg:pb-24 grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Copy */}
        <div className="lg:col-span-7">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-md border border-gold/35 bg-black/15 backdrop-blur px-3 py-1 text-[11px] tracking-[0.2em] uppercase text-gold-light"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-gold" /> {heroContent.eyebrow}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="mt-4 font-serif font-bold text-on-brand text-[28px] sm:text-4xl lg:text-[50px] leading-[1.12]"
          >
            {heroContent.title} <span className="text-gold-gradient">{heroContent.highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.16 }}
            className="mt-4 text-[15px] sm:text-base text-on-brand/75 max-w-xl leading-relaxed"
          >
            {heroContent.subtitle}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-2 max-w-xl"
          >
            {["100% Ownership", "Visa Processing", "No Hidden Fees"].map((t) => (
              <li key={t} className="flex items-center gap-2 text-sm text-on-brand/90">
                <CheckCircle2 className="h-4 w-4 text-gold flex-shrink-0" /> {t}
              </li>
            ))}
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.32 }}
            className="mt-6 flex flex-col sm:flex-row gap-2.5"
          >
            <a href="#setup" className="btn-shine inline-flex items-center justify-center gap-2 rounded-lg bg-gold-gradient px-6 py-3 text-sm font-bold text-ink shadow-lg shadow-black/20">
              Explore Setup Options <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-on-brand/30 bg-white/5 backdrop-blur px-6 py-3 text-sm font-semibold text-on-brand hover:border-gold hover:text-gold-light transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Talk to an Expert
            </a>
          </motion.div>

          {/* Trust row */}
          <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-on-brand/15 pt-5 text-on-brand/75 text-sm">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-2xl font-bold text-gold-gradient leading-none">4.9</span>
              <div className="leading-tight">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 text-gold fill-gold" />
                  ))}
                </div>
                <span className="text-xs">
                  <strong className="text-on-brand">500+</strong> client reviews
                </span>
              </div>
            </div>
            <span className="hidden sm:block h-8 w-px bg-on-brand/15" />
            <div className="flex items-center gap-2 text-xs">
              <Clock3 className="h-4 w-4 text-gold" />
              <span>
                <strong className="block text-on-brand text-sm">1 Working Day</strong> Licence issuance
              </span>
            </div>
            <span className="hidden sm:block h-8 w-px bg-on-brand/15" />
            <div className="flex items-center gap-2 text-xs">
              <ShieldCheck className="h-4 w-4 text-gold" />
              <span>
                <strong className="block text-on-brand text-sm">10,000+</strong> Companies formed
              </span>
            </div>
          </div>
        </div>

        {/* Consultation card */}
       
      </div>
    </section>
  );
}
