import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/data/siteContent";

export default function WhatsAppFloat() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 group flex items-center gap-2"
    >
      <span className="hidden sm:block opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all rounded-full bg-brand text-gold-light text-xs font-semibold px-3 py-2 shadow-lg ring-1 ring-gold/40">
        Chat with an expert
      </span>
      <span className="relative h-14 w-14 rounded-full bg-gold-gradient shadow-xl shadow-brand/30 flex items-center justify-center ring-2 ring-white">
        <span className="absolute inset-0 rounded-full bg-gold/50 animate-ping" />
        <MessageCircle className="relative h-6 w-6 text-ink" />
      </span>
    </a>
  );
}
