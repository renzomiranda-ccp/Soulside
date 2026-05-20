import { MessageCircle } from "lucide-react";

export function WhatsappFab() {
  return (
    <a
      href="https://wa.me/5519988654995?text=Olá!%20Tenho%20interesse%20nos%20produtos%20da%20SoulSide"
      target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp"
      className="fixed bottom-5 right-5 z-40 h-14 w-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-black/40 flex items-center justify-center hover:scale-110 transition"
    >
      <MessageCircle className="h-7 w-7" fill="currentColor" />
      <span className="absolute inset-0 rounded-full animate-ping bg-[#25D366]/40" />
    </a>
  );
}
