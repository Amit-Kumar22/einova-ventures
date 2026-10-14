"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, Send, Clock3 } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { company, whatsappLink } from "@/data/siteContent";

const inputClass =
  "mt-1 w-full rounded-lg bg-cream border border-ink/10 px-3.5 py-2.5 text-sm text-ink placeholder:text-ink/35 focus:outline-none focus:border-gold focus:bg-white focus:ring-2 focus:ring-gold/20 transition-colors";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", type: "UAE Free Zone", message: "" });
  const update = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const composeMessage = () =>
    `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\nInterested in: ${form.type}\n\n${form.message}`;

  const sendWhatsApp = (e) => {
    e.preventDefault();
    window.open(whatsappLink(`Hello Einova Ventures,\n\n${composeMessage()}`), "_blank", "noopener,noreferrer");
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(`Business setup enquiry – ${form.type}`);
    window.location.href = `mailto:${company.email}?subject=${subject}&body=${encodeURIComponent(composeMessage())}`;
  };

  const contactCards = [
    { icon: Phone, label: "Call Us", value: company.phoneDisplay, href: company.phoneHref },
    { icon: MessageCircle, label: "WhatsApp", value: company.phoneDisplay, href: whatsappLink(), external: true },
    { icon: Mail, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: MapPin, label: "Office", value: company.address },
  ];

  return (
    <section id="contact" className="scroll-mt-28 py-10 sm:py-14 bg-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact Us"
          title="Start Your"
          highlight="UAE Journey Today"
          subtitle="Book a free consultation with our business setup advisors."
        />

        <div className="grid lg:grid-cols-5 rounded-xl overflow-hidden bg-white shadow-xl shadow-brand/10 ring-1 ring-ink/[0.07]">
          {/* Contact details */}
          <div className="lg:col-span-2 bg-brand p-5 sm:p-7 text-on-brand relative overflow-hidden">
            <div className="absolute -bottom-16 -right-16 h-48 w-48 rounded-full border border-gold/20" />
            <div className="absolute -bottom-6 -right-6 h-28 w-28 rounded-full border border-gold/20" />
            <h3 className="relative font-serif text-xl font-bold">Get in Touch</h3>
            <p className="relative mt-1 flex items-center gap-1.5 text-xs text-on-brand/65">
              <Clock3 className="h-3.5 w-3.5 text-gold" /> {company.hours}
            </p>
            <ul className="relative mt-6 space-y-4">
              {contactCards.map(({ icon: Icon, label, value, href, external }) => {
                const content = (
                  <>
                    <span className="h-9 w-9 rounded-lg bg-white/10 ring-1 ring-gold/35 flex items-center justify-center flex-shrink-0">
                      <Icon className="h-4 w-4 text-gold-light" />
                    </span>
                    <span>
                      <span className="block text-[11px] uppercase tracking-wider text-on-brand/50">{label}</span>
                      <span className="block mt-0.5 text-sm text-on-brand">{value}</span>
                    </span>
                  </>
                );
                return (
                  <li key={label}>
                    {href ? (
                      <a href={href} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex items-start gap-3 hover:text-gold-light">
                        {content}
                      </a>
                    ) : (
                      <div className="flex items-start gap-3">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Form */}
          <form onSubmit={sendWhatsApp} className="lg:col-span-3 p-5 sm:p-7">
            <h3 className="font-serif text-xl font-bold text-ink">Request a Callback</h3>
            <p className="mt-1 text-sm text-ink/55">Tell us about your plans and we’ll recommend the right setup.</p>
            <div className="mt-5 grid sm:grid-cols-2 gap-3.5">
              <label className="block">
                <span className="text-xs font-semibold text-ink/70">Full Name *</span>
                <input required value={form.name} onChange={update("name")} placeholder="Your name" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-ink/70">Email *</span>
                <input required type="email" value={form.email} onChange={update("email")} placeholder="you@company.com" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-ink/70">Phone *</span>
                <input required type="tel" value={form.phone} onChange={update("phone")} placeholder="+971 5X XXX XXXX" className={inputClass} />
              </label>
              <label className="block">
                <span className="text-xs font-semibold text-ink/70">Interested In</span>
                <select value={form.type} onChange={update("type")} className={inputClass}>
                  {["UAE Free Zone", "UAE Mainland", "UAE Offshore", "Corporate Services", "PRO Services", "Career"].map((o) => (
                    <option key={o}>{o}</option>
                  ))}
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold text-ink/70">Message</span>
                <textarea rows={3} value={form.message} onChange={update("message")} placeholder="Business activity, number of visas, timeline..." className={inputClass} />
              </label>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-2.5">
              <button type="submit" className="btn-shine flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-gold-gradient py-2.5 text-sm font-bold text-ink">
                <MessageCircle className="h-4 w-4" /> Send via WhatsApp
              </button>
              <button
                type="button"
                onClick={(e) => {
                  if (e.currentTarget.form.reportValidity()) sendEmail();
                }}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-lg bg-brand py-2.5 text-sm font-bold text-gold-light hover:bg-brand-700 transition-colors"
              >
                <Send className="h-4 w-4" /> Send via Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
