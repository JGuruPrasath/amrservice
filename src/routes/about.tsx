import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Users, Wrench, Award } from "lucide-react";
import { SITE } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AMR Service | Trusted Appliance Repair in Coimbatore" },
      { name: "description", content: "AMR Service is Coimbatore's trusted doorstep appliance repair team — certified technicians, genuine spares, and 90-day warranty on every job." },
      { property: "og:title", content: "About — AMR Service Coimbatore" },
      { property: "og:description", content: "Meet the team behind Coimbatore's trusted appliance repair service." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <section className="[background-image:var(--gradient-hero)] py-14 text-white md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">About AMR Service</h1>
          <p className="mt-3 max-w-2xl text-white/85">
            We've been keeping Coimbatore's homes running for years — one appliance at a time.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-14 md:py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Honest service, every visit</h2>
            <p className="mt-4 text-muted-foreground">
              AMR Service is a Coimbatore-based home appliance repair company built on a simple promise: fix it right, the first time. From washing machines and refrigerators to ACs, microwaves, water purifiers and geysers — our certified technicians come to your doorstep with genuine spares, transparent pricing, and a 90-day warranty.
            </p>
            <p className="mt-4 text-muted-foreground">
              We serve {SITE.areas.slice(0, 6).join(", ")} and many more areas around Coimbatore. Whether it's a same-day emergency or an annual maintenance check, our team is just a phone call away.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: Users, n: "2,000+", l: "Happy customers" },
              { icon: Wrench, n: "10+", l: "Years experience" },
              { icon: Award, n: "All brands", l: "Serviced" },
              { icon: ShieldCheck, n: "90 days", l: "Warranty" },
            ].map((s) => (
              <div key={s.l} className="rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)]">
                <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <s.icon className="h-5 w-5" />
                </div>
                <div className="mt-3 text-2xl font-extrabold text-foreground">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
