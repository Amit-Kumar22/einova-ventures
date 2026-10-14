import Image from "next/image";
import { MapPin, ShieldCheck, Zap, Users, FileCheck2, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { company } from "@/data/siteContent";

const highlights = [
  { icon: ShieldCheck, t: "100% Success Rate", d: "Every application handled end-to-end." },
  { icon: Zap, t: "Licensed in 1 Day", d: "Mainland, Free Zone or Offshore." },
  { icon: Users, t: "Executive Team", d: "Expert guidance at every step." },
  { icon: FileCheck2, t: "All-Inclusive Pricing", d: "Transparent quotes, no hidden fees." },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-28 py-10 sm:py-14 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Image collage */}
        <Reveal className="lg:col-span-6 relative pb-10 sm:pb-12 pr-6 sm:pr-14">
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-xl ring-1 ring-ink/5">
            <Image src="/images/dubai-night.jpg" alt="Downtown Dubai at night" fill sizes="(min-width: 1024px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <p className="absolute bottom-4 left-4 flex items-center gap-1.5 text-xs font-medium text-white">
              <MapPin className="h-3.5 w-3.5 text-gold" /> DIFC, Dubai — United Arab Emirates
            </p>
          </div>

          {/* Inset second image */}
          <div className="absolute bottom-0 right-0 w-[44%] aspect-[4/3] rounded-xl overflow-hidden ring-4 ring-white shadow-2xl">
            <Image src="/videos/dubai-poster.jpg" alt="Dubai skyline" fill sizes="25vw" className="object-cover" />
          </div>

          {/* Experience badge */}
          <div className="absolute -top-3 -left-1 sm:left-4 rounded-xl bg-brand px-4 py-3 shadow-xl ring-1 ring-gold/40">
            <p className="font-serif text-3xl font-bold text-gold-gradient leading-none">10+</p>
            <p className="mt-1 text-[10px] tracking-[0.18em] uppercase text-on-brand/75">Years in the UAE</p>
          </div>
        </Reveal>

        {/* Copy */}
        <div className="lg:col-span-6">
          <SectionHeading align="left" eyebrow="About Einova" title="Your Trusted Partner for" highlight="Business in the UAE" />
          <div className="-mt-3 space-y-3 text-[15px] text-ink/65 leading-relaxed">
            <p>
              Since {company.since}, Einova Ventures Consultants has helped more than <strong className="text-ink font-semibold">10,000 entrepreneurs</strong> launch
              and grow their companies across the UAE — from Dubai and Abu Dhabi to Sharjah, Ajman, Ras Al Khaimah and Fujairah.
            </p>
            <p>
              From our office in DIFC, our executive team guides you through every step: choosing the right jurisdiction, securing your trade licence,
              opening your bank account and processing residence visas.
            </p>
          </div>

          <div className="mt-6 grid sm:grid-cols-2 gap-3">
            {highlights.map(({ icon: Icon, t, d }, i) => (
              <Reveal key={t} delay={i * 0.06} className="flex gap-3 rounded-lg p-3 bg-cream ring-1 ring-ink/[0.05] hover:ring-gold/40 transition-colors">
                <span className="h-9 w-9 rounded-md bg-white ring-1 ring-gold/30 flex items-center justify-center flex-shrink-0">
                  <Icon className="h-4 w-4 text-gold-dark" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-ink">{t}</p>
                  <p className="text-xs text-ink/55 mt-0.5">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a href="#contact" className="btn-shine inline-flex items-center gap-2 rounded-lg bg-brand px-5 py-2.5 text-sm font-bold text-gold-light hover:bg-brand-700 transition-colors">
              Meet Our Executive Team <ArrowRight className="h-4 w-4" />
            </a>
            <a href={company.phoneHref} className="text-sm text-ink/60">
              or call <span className="font-semibold text-ink hover:text-gold-dark">{company.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
