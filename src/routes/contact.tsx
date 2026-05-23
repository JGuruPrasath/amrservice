import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SITE } from "@/lib/site";
import { BookForm } from "@/components/site/BookForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Book a Service | Contact AMR Service Coimbatore" },
      { name: "description", content: "Book doorstep appliance repair in Coimbatore. Call +91 79049 30828 or fill the form — we confirm on WhatsApp within minutes." },
      { property: "og:title", content: "Book Service — AMR Service Coimbatore" },
      { property: "og:description", content: "Book same-day doorstep appliance repair in Coimbatore." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <section className="bg-[var(--gradient-hero)] py-14 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Book Your Service</h1>
          <p className="mt-3 max-w-2xl text-white/85">
            Same-day doorstep repair across Coimbatore. Call us, message on WhatsApp, or use the form.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <ul className="grid gap-4">
              {[
                { icon: Phone, label: "Call us", value: SITE.phoneDisplay, href: `tel:${SITE.phone}` },
                { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
                { icon: MapPin, label: "Address", value: SITE.address, href: SITE.mapLink },
                { icon: Clock, label: "Hours", value: "Mon – Sun · 8:00 am – 9:00 pm" },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-4 rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
                  <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[var(--gradient-cta)] text-secondary-foreground">
                    <c.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">{c.label}</div>
                    {c.href ? (
                      <a href={c.href} className="text-base font-semibold text-foreground hover:text-primary">{c.value}</a>
                    ) : (
                      <div className="text-base font-semibold text-foreground">{c.value}</div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="AMR Service location on Google Maps"
                src={SITE.mapEmbed}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          <BookForm />
        </div>
      </section>
    </>
  );
}
