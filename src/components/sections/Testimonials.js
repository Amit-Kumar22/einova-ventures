import { Quote, Star } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { testimonials } from "@/data/siteContent";

export default function Testimonials() {
  return (
    <section id="testimonials" className="scroll-mt-28 py-10 sm:py-14 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="Client Stories" title="Trusted by" highlight="10,000+ Entrepreneurs" />

        <div className="grid lg:grid-cols-12 gap-4 lg:gap-5">
          {/* Rating summary */}
          <Reveal className="lg:col-span-4 rounded-xl bg-brand p-5 sm:p-6 text-on-brand flex flex-col justify-between shadow-xl shadow-brand/20 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.12] bg-[url('/images/dubai-night.jpg')] bg-cover bg-center" />
            <div className="relative">
              <p className="text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-light">Client Rating</p>
              <p className="mt-3 flex items-end gap-2">
                <span className="font-serif text-5xl font-bold text-gold-gradient leading-none">4.9</span>
                <span className="text-on-brand/60 text-sm pb-1">/ 5</span>
              </p>
              <div className="mt-2 flex gap-0.5">
                {[...Array(5)].map((_, k) => (
                  <Star key={k} className="h-4 w-4 text-gold fill-gold" />
                ))}
              </div>
              <p className="mt-2 text-sm text-on-brand/70">Based on 500+ client reviews.</p>
            </div>
            <div className="relative mt-6 grid grid-cols-2 gap-3 border-t border-on-brand/15 pt-4">
              <div>
                <p className="font-serif text-xl font-bold">10,000+</p>
                <p className="text-[11px] uppercase tracking-wider text-on-brand/55">Companies formed</p>
              </div>
              <div>
                <p className="font-serif text-xl font-bold">100%</p>
                <p className="text-[11px] uppercase tracking-wider text-on-brand/55">Success rate</p>
              </div>
            </div>
          </Reveal>

          {/* Quotes */}
          {testimonials.map((t, i) => (
            <Reveal
              as="figure"
              key={t.name}
              delay={0.08 + i * 0.08}
              className="lg:col-span-4 relative flex flex-col rounded-xl bg-white p-5 sm:p-6 ring-1 ring-ink/[0.07] shadow-sm hover:shadow-lg transition-shadow"
            >
              <Quote className="h-7 w-7 text-gold/40" />
              <blockquote className="mt-3 flex-1 text-[15px] text-ink/75 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3 border-t border-ink/[0.07] pt-4">
                <span className="h-10 w-10 rounded-full bg-brand flex items-center justify-center font-serif text-sm font-bold text-gold-light flex-shrink-0">
                  {t.name.split(" ").map((n) => n[0]).join("")}
                </span>
                <span className="flex-1">
                  <span className="block text-sm font-semibold text-ink">{t.name}</span>
                  <span className="block text-xs text-ink/55">{t.role}</span>
                </span>
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} className="h-3 w-3 text-gold fill-gold" />
                  ))}
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
