// Colour themes for the footer picker. Keep ids in sync with the html[data-theme] blocks in globals.css
// swatch is a CSS background value, so gradient themes preview as gradients
export const THEMES = [
  { id: "burgundy", label: "Burgundy", group: "solid", swatch: "#7a2e45" },
  { id: "navy", label: "Royal Navy", group: "solid", swatch: "#2b4c74" },
  { id: "emerald", label: "Emerald", group: "solid", swatch: "#1f6656" },
  { id: "teal", label: "Deep Teal", group: "solid", swatch: "#1e6573" },
  { id: "purple", label: "Royal Purple", group: "solid", swatch: "#563a7c" },
  { id: "crimson", label: "Crimson", group: "solid", swatch: "#8a2f3a" },
  { id: "forest", label: "Forest Green", group: "solid", swatch: "#2f5e3a" },
  { id: "coffee", label: "Coffee", group: "solid", swatch: "#5a3e2e" },
  { id: "plum", label: "Plum", group: "solid", swatch: "#6b3a5e" },
  { id: "steel", label: "Steel Blue", group: "solid", swatch: "#3d5a73" },
  { id: "dark", label: "Dark", group: "solid", swatch: "#474c58" },
  { id: "light", label: "Light", group: "solid", swatch: "#f4ecdc" },
  { id: "sunset", label: "Royal Sunset", group: "gradient", swatch: "linear-gradient(135deg, #7a2e45, #563a7c)" },
  { id: "ocean", label: "Ocean", group: "gradient", swatch: "linear-gradient(135deg, #2b4c74, #1e6573)" },
  { id: "aurora", label: "Aurora", group: "gradient", swatch: "linear-gradient(135deg, #1f6656, #2b4c74)" },
  { id: "dusk", label: "Royal Dusk", group: "gradient", swatch: "linear-gradient(135deg, #563a7c, #2b4c74)" },
  { id: "bronze", label: "Wine & Bronze", group: "gradient", swatch: "linear-gradient(135deg, #7a2e45, #8a5a22)" },
];

export const DEFAULT_THEME = "burgundy";
export const THEME_STORAGE_KEY = "einova-theme";
