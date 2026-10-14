import { Briefcase, FileCheck2, ArrowRight, Check } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { services, whatsappLink } from "@/data/siteContent";

const ICONS = { corporate: Briefcase, pro: FileCheck2 };

export default function Services() {
  return (
    <section id="services" className="scroll-mt-28 py-10 sm:py-14 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Our Services"
          title="Beyond the"
          highlight="Trade Licence"
          subtitle="Everything your company needs after formation — handled by one dedicated team."
        />

        <div className="grid lg:grid-cols-2 gap-4 lg:gap-5">
          {services.map((s, i) => {
            const Icon = ICONS[s.key];
            return (
              <Reveal
                as="article"
                key={s.key}
                delay={i * 0.1}
                className="group flex flex-col rounded-xl bg-white ring-1 ring-ink/[0.07] shadow-sm hover:shadow-xl hover:shadow-brand/10 hover:ring-gold/40 transition-all overflow-hidden"
              >
                {/* Header band */}
                <div className="relative bg-brand px-5 py-4 sm:px-6 flex items-center gap-4 overflow-hidden">
                  <span className="absolute -right-6 -top-6 font-serif text-[96px] font-bold leading-none text-white/[0.06] select-none">0{i + 1}</span>
                  <span className="relative h-11 w-11 rounded-lg bg-gold-gradient flex items-center justify-center shadow-md flex-shrink-0">
                    <Icon className="h-5 w-5 text-ink" />
                  </span>
                  <div className="relative">
                    <h3 className="font-serif text-lg sm:text-xl font-bold text-on-brand">{s.title}</h3>
                    <p className="text-xs sm:text-sm text-gold-light">{s.tagline}</p>
                  </div>
                </div>

                <div className="flex-1 flex flex-col p-5 sm:p-6">
                  <p className="text-sm text-ink/65 leading-relaxed">{s.description}</p>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-2">
                    {s.items.map((item) => (
                      <li key={item} className="flex items-center gap-2.5 rounded-md bg-cream px-3 py-2 text-sm text-ink/80">
                        <Check className="h-3.5 w-3.5 text-gold-dark flex-shrink-0" strokeWidth={3} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex-1" />
                  <a
                    href={whatsappLink(`Hello Einova Ventures, I'd like to know more about your ${s.title}.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-ink border-b-2 border-gold pb-0.5 hover:text-gold-dark transition-colors"
                  >
                    Enquire about {s.title} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
