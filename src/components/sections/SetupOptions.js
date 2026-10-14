import { Building2, Landmark, Globe2, Check, ArrowRight, Clock3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { setupOptions, whatsappLink } from "@/data/siteContent";

const ICONS = { mainland: Building2, freezone: Landmark, offshore: Globe2 };

export default function SetupOptions() {
  return (
    <section id="setup" className="scroll-mt-28 pt-12 pb-10 sm:pt-16 sm:pb-14 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-6 sm:mb-8">
          <SectionHeading
            align="left"
            className="!mb-0"
            eyebrow="Business Setup"
            title="Choose Your"
            highlight="UAE Jurisdiction"
            subtitle="Every package includes 100% ownership support, transparent all-inclusive pricing and a licence in 1 working day."
          />
          <a href="#contact" className="inline-flex items-center gap-1.5 text-sm font-semibold text-gold-dark hover:text-ink transition-colors whitespace-nowrap">
            Not sure which fits? Ask an advisor <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-4 lg:gap-5 items-stretch">
          {setupOptions.map((opt, i) => {
            const Icon = ICONS[opt.key];
            const f = opt.featured;
            return (
              <Reveal
                as="article"
                key={opt.key}
                delay={i * 0.08}
                className={`group relative flex flex-col rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                  f
                    ? "bg-brand text-on-brand shadow-2xl shadow-brand/25 ring-1 ring-gold/50 md:-my-2"
                    : "bg-white text-ink ring-1 ring-ink/[0.07] shadow-sm hover:shadow-xl hover:shadow-brand/10 hover:ring-gold/40"
                }`}
              >
                {f && (
                  <span className="absolute top-4 right-4 rounded-md bg-gold-gradient px-2.5 py-1 text-[10px] font-bold tracking-wider text-ink uppercase">
                    Most Popular
                  </span>
                )}

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3">
                    <span className={`h-11 w-11 rounded-lg flex items-center justify-center ${f ? "bg-white/10 ring-1 ring-gold/40" : "bg-gold-50 ring-1 ring-gold/25"}`}>
                      <Icon className={`h-5 w-5 ${f ? "text-gold-light" : "text-gold-dark"}`} />
                    </span>
                    <div>
                      <p className={`text-[11px] font-semibold tracking-[0.18em] uppercase ${f ? "text-gold-light" : "text-gold-dark"}`}>0{i + 1}</p>
                      <h3 className="font-serif text-lg sm:text-xl font-bold leading-tight">{opt.title}</h3>
                    </div>
                  </div>
                  <p className={`mt-3 text-sm leading-relaxed min-h-[2.75rem] ${f ? "text-on-brand/70" : "text-ink/60"}`}>{opt.description}</p>

                  <div className={`mt-4 flex items-end justify-between border-y py-3 ${f ? "border-on-brand/15" : "border-ink/[0.07]"}`}>
                    <div>
                      <span className={`block text-[11px] uppercase tracking-wider ${f ? "text-on-brand/55" : "text-ink/45"}`}>Starting from</span>
                      <span className="block font-serif text-2xl sm:text-[28px] font-bold leading-tight text-gold-gradient">{opt.price}</span>
                    </div>
                    <span className={`inline-flex items-center gap-1 text-xs font-medium ${f ? "text-on-brand/70" : "text-ink/55"}`}>
                      <Clock3 className="h-3.5 w-3.5 text-gold" /> 1 working day
                    </span>
                  </div>

                  <ul className="mt-4 space-y-2.5">
                    {opt.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-sm">
                        <span className={`mt-0.5 h-4 w-4 rounded-full flex items-center justify-center flex-shrink-0 ${f ? "bg-gold" : "bg-brand"}`}>
                          <Check className={`h-2.5 w-2.5 ${f ? "text-ink" : "text-on-brand"}`} strokeWidth={3} />
                        </span>
                        {feat}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {opt.emirates.map((e) => (
                      <span
                        key={e}
                        className={`text-[11px] rounded px-2 py-0.5 ${f ? "bg-white/10 text-on-brand/75" : "bg-cream text-ink/60 ring-1 ring-ink/[0.06]"}`}
                      >
                        {e}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex-1" />
                <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                  <a
                    href={whatsappLink(`Hello Einova Ventures, I'd like a quote for ${opt.title} company setup.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full inline-flex items-center justify-center gap-2 rounded-lg py-2.5 text-sm font-bold transition-colors ${
                      f ? "btn-shine bg-gold-gradient text-ink" : "bg-cream text-ink ring-1 ring-ink/10 group-hover:bg-brand group-hover:text-gold-light group-hover:ring-brand"
                    }`}
                  >
                    Get {opt.title} Quote <ArrowRight className="h-4 w-4" />
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
