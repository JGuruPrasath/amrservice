import { SITE } from "@/lib/site";

export function WhatsAppFloat() {
  const msg = encodeURIComponent("Hi AMR Service, I'd like to book an appliance repair.");
  return (
    <a
      href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-[oklch(0.68_0.18_145)] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_-8px_oklch(0.55_0.16_145/0.7)] transition-transform hover:scale-105"
    >
      <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current" aria-hidden="true">
        <path d="M19.11 17.46c-.27-.13-1.6-.79-1.85-.88s-.43-.13-.61.14-.7.88-.86 1.06-.32.2-.59.07a7.4 7.4 0 0 1-2.18-1.34 8.18 8.18 0 0 1-1.5-1.87c-.16-.27 0-.42.12-.55s.27-.32.4-.48a1.86 1.86 0 0 0 .27-.45.5.5 0 0 0 0-.48c-.07-.13-.61-1.47-.84-2s-.45-.46-.61-.46h-.52a1 1 0 0 0-.72.34 3 3 0 0 0-.95 2.24 5.22 5.22 0 0 0 1.11 2.81 11.95 11.95 0 0 0 4.65 4.12c.65.28 1.16.45 1.56.58a3.78 3.78 0 0 0 1.72.11 2.82 2.82 0 0 0 1.84-1.3 2.27 2.27 0 0 0 .16-1.3c-.07-.12-.25-.19-.52-.32zM16 3a13 13 0 0 0-11 19.78L3 29l6.43-1.68A13 13 0 1 0 16 3zm0 23.66a10.6 10.6 0 0 1-5.42-1.48l-.39-.23-3.81 1 1-3.71-.25-.39A10.66 10.66 0 1 1 16 26.66z"/>
      </svg>
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
