import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { SERVICES, SITE } from "@/lib/site";
import { ServiceIcon } from "@/components/site/ServiceIcon";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Appliance Repair Services in Coimbatore | AMR Service" },
      { name: "description", content: "Washing machine, fridge, AC, microwave, water purifier & geyser repair across Coimbatore. Same-day doorstep service. All brands. 90-day warranty." },
      { property: "og:title", content: "Services — AMR Service Coimbatore" },
      { property: "og:description", content: "All home appliance repairs across Coimbatore — same-day doorstep service." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="bg-[var(--gradient-hero)] py-14 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Our Services</h1>
          <p className="mt-3 max-w-2xl text-white/85">
            Certified technicians for every home appliance — across Coimbatore and nearby towns.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="space-y-12">
          {SERVICES.map((s, i) => (
            <article key={s.slug} id={s.slug} className="grid scroll-mt-24 items-center gap-8 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:grid-cols-[auto,1fr,auto] md:p-8">
              <div className="grid h-20 w-20 place-items-center rounded-2xl bg-[var(--gradient-cta)] text-secondary-foreground shadow-[var(--shadow-cta)]">
                <ServiceIcon name={s.icon as any} className="h-10 w-10" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-secondary">0{i + 1}</p>
                <h2 className="mt-1 text-2xl font-bold text-foreground">{s.name}</h2>
                <p className="mt-1 text-sm font-medium text-primary">{s.short}</p>
                <p className="mt-3 text-muted-foreground">{s.desc}</p>
                <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                  {["Same-day doorstep visit", "Genuine spare parts", "Transparent pricing", "90-day service warranty"].map((b) => (
                    <li key={b} className="flex items-center gap-2 text-sm text-foreground/80">
                      <CheckCircle2 className="h-4 w-4 text-secondary" /> {b}
                    </li>
                  ))}
                </ul>
              </div>
              <Link to="/contact" className="self-start rounded-full bg-[var(--gradient-cta)] px-5 py-2.5 text-sm font-semibold text-secondary-foreground shadow-[var(--shadow-cta)]">
                Book now
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-16 rounded-2xl border border-border bg-muted p-8 text-center">
          <h3 className="text-xl font-bold">Service Areas in & around Coimbatore</h3>
          <p className="mx-auto mt-3 max-w-3xl text-sm text-muted-foreground">{SITE.areas.join(" • ")}</p>
        </div>
      </section>
    </>
  );
}
