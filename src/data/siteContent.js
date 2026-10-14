// Content sourced from https://einovavc.com/

export const company = {
  name: "Einova Ventures Consultants",
  shortName: "Einova Ventures",
  arabicName: "إينوفا فنتشرز كونسلتانتس",
  phoneDisplay: "+971 55 564 1229",
  phoneLocal: "055 564 1229",
  phoneHref: "tel:+971555641229",
  whatsapp: "971555641229",
  email: "info@einovavc.com",
  address: "Al Saqr Business Tower, Office 514, 5th Floor, DIFC, Dubai, UAE",
  hours: "Support available 24/7",
  since: 2014,
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/" },
    { name: "Twitter", href: "https://twitter.com/" },
    { name: "LinkedIn", href: "https://www.linkedin.com/" },
    { name: "Instagram", href: "https://www.instagram.com/" },
  ],
};

export const whatsappLink = (message = "Hello Einova Ventures, I would like a free business setup consultation.") =>
  `https://wa.me/${company.whatsapp}?text=${encodeURIComponent(message)}`;

// Bottom navbar + mega menu. Same shape as the travel portal navbar:
// { title, path, highlights?, submenus?: [{ title, items: [{ name, id, href }] }] }
export const menuData = [
  { title: "Home", path: "#home" },
  {
    title: "UAE Mainland",
    path: "#setup",
    highlights: ["100% Foreign Ownership", "No Trading Restrictions", "Government Tenders"],
    submenus: [
      {
        title: "Mainland by Emirate",
        items: [
          { name: "Abu Dhabi", id: "mainland-abu-dhabi" },
          { name: "Dubai", id: "mainland-dubai" },
          { name: "Sharjah", id: "mainland-sharjah" },
          { name: "Ajman", id: "mainland-ajman" },
          { name: "Ras Al Khaimah", id: "mainland-rak" },
          { name: "Fujairah", id: "mainland-fujairah" },
        ],
      },
    ],
  },
  {
    title: "UAE Free Zone",
    path: "#freezones",
    highlights: ["0% Corporate & Income Tax", "100% Profit Repatriation", "Same-Day Setup"],
    submenus: [
      {
        title: "Abu Dhabi",
        items: [
          { name: "Abu Dhabi Airport", id: "fz-abu-dhabi-airport" },
          { name: "Abu Dhabi Global Market", id: "fz-adgm" },
          { name: "Khalifa Industrial Zone", id: "fz-kizad" },
          { name: "Industrial City Abu Dhabi", id: "fz-icad" },
          { name: "Masdar City", id: "fz-masdar" },
        ],
      },
      {
        title: "Dubai",
        items: [
          { name: "Dubai Silicon Oasis (DSO)", id: "fz-dso" },
          { name: "Dubai Media City (DMC)", id: "fz-dmc" },
          { name: "Dubai South (DWC)", id: "fz-dwc" },
          { name: "Dubai Auto Zone (DAZ)", id: "fz-daz" },
          { name: "Dubai Industrial City (DIC)", id: "fz-dic" },
        ],
      },
      {
        title: "Sharjah",
        items: [
          { name: "U.S.A Regional Trade", id: "fz-usa-regional-trade" },
          { name: "Sharjah Media City", id: "fz-shams" },
          { name: "Hamriyah Free Zone", id: "fz-hamriyah" },
          { name: "Sharjah Publishing City", id: "fz-spc" },
          { name: "Sharjah Airport Intl", id: "fz-saif" },
        ],
      },
      { title: "Ajman", items: [{ name: "Ajman Media City", id: "fz-ajman-media-city" }] },
      { title: "Fujairah", items: [{ name: "Creative City", id: "fz-creative-city" }] },
      { title: "Ras Al Khaimah", items: [{ name: "RAK Economic Zone", id: "fz-rakez" }] },
    ],
  },
  {
    title: "UAE Offshore",
    path: "#setup",
    highlights: ["No Physical Office Required", "Privacy & Confidentiality", "Asset Protection"],
    submenus: [
      {
        title: "Offshore Jurisdictions",
        items: [
          { name: "Jebel Ali (JAFZA Offshore)", id: "offshore-jafza" },
          { name: "RAK Offshore (RAKICC)", id: "offshore-rakicc" },
          { name: "Ajman Offshore (AOCC)", id: "offshore-aocc" },
        ],
      },
    ],
  },
  {
    title: "Our Services",
    path: "#services",
    highlights: ["Complete Business Solutions", "Government Relations", "Visa Processing"],
    submenus: [
      {
        title: "Corporate Services",
        items: [
          { name: "Company Formation", id: "corp-formation" },
          { name: "Corporate Bank Account", id: "corp-bank" },
          { name: "Accounting & Bookkeeping", id: "corp-accounting" },
          { name: "VAT & Corporate Tax", id: "corp-tax" },
          { name: "License Renewal", id: "corp-renewal" },
        ],
      },
      {
        title: "PRO Services",
        items: [
          { name: "Residence Visa Processing", id: "pro-visa" },
          { name: "Emirates ID & Medical", id: "pro-eid" },
          { name: "Document Attestation", id: "pro-attestation" },
          { name: "Government Approvals", id: "pro-approvals" },
          { name: "Labour & Immigration", id: "pro-labour" },
        ],
      },
    ],
  },
  {
    title: "About Us",
    path: "#about",
    highlights: ["Since 2014", "10,000+ Companies Formed", "Rated 4.9 / 5"],
    submenus: [
      {
        title: "Company",
        items: [
          { name: "Our Story", id: "about-story", href: "#about" },
          { name: "Executive Team", id: "about-team", href: "#about" },
          { name: "Career", id: "about-career", href: "#contact" },
          { name: "FAQ", id: "about-faq", href: "#faq" },
        ],
      },
    ],
  },
  { title: "Contact", path: "#contact" },
];

export const heroContent = {
  eyebrow: "Dubai · Abu Dhabi · Sharjah · RAK",
  title: "Launch Your Business in Dubai in Just",
  highlight: "1 Day",
  subtitle:
    "Complete business setup solutions with 100% ownership, visa processing, and expert guidance. Trusted by 10,000+ entrepreneurs since 2014.",
};

export const stats = [
  { value: 10, suffix: "+", label: "Years Experience" },
  { value: 10000, suffix: "+", label: "Companies Formed" },
  { value: 100, suffix: "%", label: "Success Rate" },
  { value: 4.9, suffix: "/5", label: "500+ Reviews", decimals: 1 },
];

export const setupOptions = [
  {
    key: "mainland",
    title: "UAE Mainland",
    price: "AED 15,000",
    description: "Trade anywhere in the UAE with unlimited business activities.",
    features: ["100% foreign ownership", "No trading restrictions", "Government tender participation"],
    emirates: ["Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Ras Al Khaimah", "Fujairah"],
  },
  {
    key: "freezone",
    title: "UAE Free Zone",
    price: "AED 12,000",
    description: "Enjoy tax exemptions and 100% ownership.",
    features: ["0% corporate / income tax", "100% profit repatriation", "Same-day setup"],
    emirates: ["50+ Free Zones", "Abu Dhabi", "Dubai", "Sharjah", "Ajman", "Fujairah", "RAK"],
    featured: true,
  },
  {
    key: "offshore",
    title: "UAE Offshore",
    price: "AED 10,000",
    description: "Perfect for international business and asset protection without physical presence.",
    features: ["No physical office required", "Privacy & confidentiality", "Asset protection"],
    emirates: ["Jebel Ali (JAFZA)", "RAK (RAKICC)", "Ajman (AOCC)"],
  },
];

// Free zone explorer tabs (one tab per emirate group)
export const freeZoneTabs = [
  {
    emirate: "Dubai",
    zones: [
      { name: "Dubai Silicon Oasis", code: "DSO", focus: "Technology & Innovation" },
      { name: "Dubai Media City", code: "DMC", focus: "Media & Creative" },
      { name: "Dubai South", code: "DWC", focus: "Aviation & Logistics" },
      { name: "Dubai Auto Zone", code: "DAZ", focus: "Automotive Trading" },
      { name: "Dubai Industrial City", code: "DIC", focus: "Manufacturing & Industry" },
    ],
  },
  {
    emirate: "Abu Dhabi",
    zones: [
      { name: "Abu Dhabi Global Market", code: "ADGM", focus: "Finance & Holding" },
      { name: "Masdar City", code: "MASDAR", focus: "Clean-tech & Sustainability" },
      { name: "Khalifa Industrial Zone", code: "KIZAD", focus: "Industry & Logistics" },
      { name: "Industrial City Abu Dhabi", code: "ICAD", focus: "Heavy Industry" },
      { name: "Abu Dhabi Airport", code: "ADAFZ", focus: "Trade & Logistics" },
    ],
  },
  {
    emirate: "Sharjah",
    zones: [
      { name: "Sharjah Media City", code: "SHAMS", focus: "Media & Freelance" },
      { name: "Hamriyah Free Zone", code: "HFZA", focus: "Port & Industrial" },
      { name: "Sharjah Publishing City", code: "SPC", focus: "Publishing & Printing" },
      { name: "Sharjah Airport Intl", code: "SAIF", focus: "Trade & E-commerce" },
    ],
  },
  {
    emirate: "Northern Emirates",
    zones: [
      { name: "RAK Economic Zone", code: "RAKEZ", focus: "Ras Al Khaimah" },
      { name: "Ajman Media City", code: "AMC", focus: "Ajman" },
      { name: "Creative City", code: "CCFZ", focus: "Fujairah" },
    ],
  },
];

export const services = [
  {
    key: "corporate",
    title: "Corporate Services",
    tagline: "Complete business solutions",
    description:
      "From company formation to day-to-day compliance, we handle the corporate side so you can focus on growing your business.",
    items: ["Company Formation", "Corporate Bank Account", "Accounting & Bookkeeping", "VAT & Corporate Tax", "License Renewal"],
  },
  {
    key: "pro",
    title: "PRO Services",
    tagline: "Government relations and visa processing",
    description:
      "Our PRO team liaises with UAE government departments on your behalf — visas, approvals and documentation, done right the first time.",
    items: ["Residence Visa Processing", "Emirates ID & Medical", "Document Attestation", "Government Approvals", "Labour & Immigration"],
  },
];

export const whyChooseUs = [
  { title: "Fast Processing", description: "Get your license in 1 working day.", icon: "zap" },
  { title: "Expert Team", description: "10+ years of UAE business expertise.", icon: "award" },
  { title: "Transparent Pricing", description: "No hidden fees, all-inclusive packages.", icon: "badge" },
  { title: "24/7 Support", description: "Dedicated support team always available.", icon: "headset" },
];

export const processSteps = [
  { step: "01", title: "Free Consultation", description: "Discuss your business goals and pick the right jurisdiction and activity." },
  { step: "02", title: "Documentation", description: "We handle the paperwork, approvals and licensing on your behalf." },
  { step: "03", title: "Launch Business", description: "Start operations with ongoing support for visas, banking and renewals." },
];

export const testimonials = [
  {
    name: "Sarah Ahmed",
    role: "Tech Startup Founder",
    quote:
      "Excellent service from start to finish! The team made the entire process seamless. Within 2 weeks, my free zone company was operational. Highly recommend!",
  },
  {
    name: "Mohammed Khan",
    role: "Trading Company Owner",
    quote:
      "Professional, transparent, and efficient. They handled all documentation and I got my mainland license hassle-free. Best decision for my business!",
  },
];

export const faqs = [
  {
    q: "How long does it take to set up a company in Dubai?",
    a: "Free Zone: one working day. Mainland: one working day. Offshore: one working day.",
  },
  {
    q: "What are the costs involved?",
    a: "Offshore: from AED 10,000. Free Zone: from AED 12,000. Mainland: from AED 15,000.",
  },
  {
    q: "Do I need a local sponsor?",
    a: "No. The UAE now allows 100% foreign ownership for most business activities in mainland.",
  },
  {
    q: "Can I get a residence visa?",
    a: "Yes! Business owners are eligible for UAE residence visas, and our PRO team handles the full process.",
  },
];
