import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import SetupOptions from "@/components/sections/SetupOptions";
import About from "@/components/sections/About";
import FreeZones from "@/components/sections/FreeZones";
import Services from "@/components/sections/Services";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";
import Faq from "@/components/sections/Faq";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <Stats />
        <SetupOptions />
        <About />
        <FreeZones />
        <Services />
        <WhyChooseUs />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
