import { Zap, Award, BadgeCheck, Headset, ArrowRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { whyChooseUs, processSteps } from "@/data/siteContent";

const ICONS = { zap: Zap, award: Award, badge: BadgeCheck, headset: Headset };

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="scroll-mt-28 py-10 sm:py-14 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Advantages */}
        <div className="lg:col-span-7">
          <SectionHeading
            align="left"
            eyebrow="Why Choose Us"
            title="The Einova"
            highlight="Advantage"
            subtitle="A single, accountable team from first consultation to licence, visas and banking."
          />
          <div className="grid sm:grid-cols-2 gap-3">
            {whyChooseUs.map((item, i) => {
              const Icon = ICONS[item.icon];
              return (
                <Reveal
                  key={item.title}
                  delay={i * 0.06}
                  className="group relative rounded-xl p-4 sm:p-5 bg-white ring-1 ring-ink/[0.08] hover:ring-gold/50 hover:shadow-lg hover:shadow-brand/5 transition-all overflow-hidden"
                >
                  <span className="absolute left-0 top-0 h-full w-0.5 bg-gold scale-y-0 group-hover:scale-y-100 origin-top transition-transform duration-300" />
                  <div className="flex items-start gap-3.5">
                    <span className="h-10 w-10 rounded-lg bg-gold-50 ring-1 ring-gold/25 flex items-center justify-center flex-shrink-0 group-hover:bg-brand group-hover:ring-brand transition-colors">
                      <Icon className="h-5 w-5 text-gold-dark group-hover:text-gold-light transition-colors" />
                    </span>
                    <div>
                      <h3 className="font-semibold text-ink">{item.title}</h3>
                      <p className="mt-1 text-sm text-ink/60">{item.description}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>

        {/* Process timeline */}
        <Reveal className="lg:col-span-5 rounded-xl bg-brand p-5 sm:p-7 text-on-brand shadow-xl shadow-brand/20 relative overflow-hidden">
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-gold/20" />
          <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full border border-gold/20" />
          <p className="relative text-[11px] font-semibold tracking-[0.22em] uppercase text-gold-light">How It Works</p>
          <h3 className="relative mt-2 font-serif text-xl sm:text-2xl font-bold">
            Live in <span className="text-gold-gradient">3 Simple Steps</span>
          </h3>

          <ol className="relative mt-6 space-y-5">
            {processSteps.map((s, i) => (
              <li key={s.step} className="relative flex gap-4">
                {i < processSteps.length - 1 && <span className="absolute left-5 top-11 bottom-[-1.25rem] w-px bg-gold/30" />}
                <span className="relative h-10 w-10 rounded-full bg-gold-gradient flex items-center justify-center flex-shrink-0 font-serif text-sm font-bold text-ink shadow-md">
                  {s.step}
                </span>
                <div className="pt-1">
                  <h4 className="font-semibold">{s.title}</h4>
                  <p className="mt-1 text-sm text-on-brand/65 leading-relaxed">{s.description}</p>
                </div>
              </li>
            ))}
          </ol>

          <a
            href="#contact"
            className="relative mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-white/10 ring-1 ring-gold/40 py-2.5 text-sm font-bold text-gold-light hover:bg-white/15 transition-colors"
          >
            Book Your Free Consultation <ArrowRight className="h-4 w-4" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
