"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";
import { DEFAULT_THEME, THEMES, THEME_STORAGE_KEY } from "@/data/themes";

export default function ThemePicker() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  // The inline script in layout.js already applied the saved theme; just sync state
  useEffect(() => {
    setTheme(document.documentElement.dataset.theme || DEFAULT_THEME);
  }, []);

  const choose = (id) => {
    setTheme(id);
    document.documentElement.dataset.theme = id;
    try {
      localStorage.setItem(THEME_STORAGE_KEY, id);
    } catch {}
  };

  const swatch = (t) => {
    const active = theme === t.id;
    return (
      <button
        key={t.id}
        type="button"
        role="radio"
        aria-checked={active}
        aria-label={t.label}
        title={t.label}
        onClick={() => choose(t.id)}
        style={{ background: t.swatch }}
        className={`h-7 w-7 rounded-full flex items-center justify-center transition-transform hover:scale-110 ring-offset-2 ring-offset-brand ${
          active ? "ring-2 ring-gold" : "ring-1 ring-on-brand/25"
        }`}
      >
        {active && <Check className={`h-3.5 w-3.5 ${t.id === "light" ? "text-[#8a6417]" : "text-[#f2d27a]"}`} />}
      </button>
    );
  };

  return (
    <div role="radiogroup" aria-label="Colour theme" className="flex flex-col gap-2">
      {[
        ["solid", "Colours"],
        ["gradient", "Gradients"],
      ].map(([group, label]) => (
        <div key={group} className="flex flex-wrap items-center gap-3">
          <span className="w-24 text-xs uppercase tracking-widest text-on-brand/50">{label}</span>
          <div className="flex flex-wrap gap-2">{THEMES.filter((t) => t.group === group).map(swatch)}</div>
        </div>
      ))}
    </div>
  );
}
