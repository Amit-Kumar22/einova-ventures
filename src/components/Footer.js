import Image from "next/image";
import { Phone, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import { company, menuData } from "@/data/siteContent";
import ThemePicker from "./ThemePicker";

const SOCIAL_ICONS = { Facebook, Twitter, LinkedIn: Linkedin, Instagram };

const columns = [
  {
    title: "Business Setup",
    links: [
      { label: "UAE Mainland", href: "#setup" },
      { label: "UAE Free Zone", href: "#freezones" },
      { label: "UAE Offshore", href: "#setup" },
    ],
  },
  {
    title: "Our Services",
    links: menuData.find((m) => m.title === "Our Services").submenus.map((g) => ({ label: g.title, href: "#services" })),
  },
  {
    title: "About Us",
    links: menuData.find((m) => m.title === "About Us").submenus[0].items.map((i) => ({ label: i.name, href: i.href })),
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand text-on-brand/70">
      <div className="h-px bg-gradient-to-r from-transparent via-gold to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <div className="inline-block rounded-xl bg-white px-4 py-3">
            <Image src="/logo.png" alt={company.name} width={220} height={62} className="h-10 w-auto" />
          </div>
          <p className="mt-4 text-sm leading-relaxed max-w-sm">
            Complete business setup solutions in the UAE with 100% ownership, visa processing and expert guidance. Trusted by 10,000+ entrepreneurs since {company.since}.
          </p>
          <div className="mt-4 flex gap-3">
            {company.socials.map((s) => {
              const Icon = SOCIAL_ICONS[s.name];
              return (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="h-10 w-10 rounded-full ring-1 ring-gold/40 flex items-center justify-center text-gold-light hover:bg-gold-gradient hover:text-ink transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </div>

        {columns.map((col) => (
          <div key={col.title} className="lg:col-span-2">
            <h4 className="font-serif font-semibold text-gold-light tracking-wide">{col.title}</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {col.links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-gold-light transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        <div className="lg:col-span-2 md:col-span-2">
          <h4 className="font-serif font-semibold text-gold-light tracking-wide">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a href={company.phoneHref} className="flex gap-2 hover:text-gold-light">
                <Phone className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" /> {company.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`} className="flex gap-2 hover:text-gold-light">
                <Mail className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" /> {company.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 text-gold mt-0.5 flex-shrink-0" /> {company.address}
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-on-brand/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4 flex justify-center sm:justify-start">
          <ThemePicker />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row gap-3 items-center justify-between text-xs text-on-brand/50">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.{" "}
            <span dir="rtl" lang="ar" className="ml-1 text-gold/70">{company.arabicName}</span>
          </p>
          <div className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} href="#" className="hover:text-gold-light">
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
