import { Cinzel, Inter } from "next/font/google";
import Navbar from "@/components/navbar/Navbar";
import MotionProvider from "@/components/MotionProvider";
import { THEMES, THEME_STORAGE_KEY } from "@/data/themes";
import "./globals.css";

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Einova Ventures Consultants | Business Setup in Dubai & UAE",
  description:
    "Launch your business in Dubai in just 1 day. UAE Mainland, Free Zone and Offshore company formation with 100% ownership, visa processing and PRO services. Trusted by 10,000+ entrepreneurs since 2014.",
  icons: { icon: "/logo-mark.png" },
};

// Applies the saved colour theme before first paint so there's no flash of the default
const themeScript = `try{var t=localStorage.getItem("${THEME_STORAGE_KEY}");if(t&&${JSON.stringify(THEMES.map((t) => t.id))}.indexOf(t)>-1)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${cinzel.variable} ${inter.variable} antialiased w-full min-h-screen`}>
        <MotionProvider>
          <Navbar />
          {children}
        </MotionProvider>
      </body>
    </html>
  );
}
