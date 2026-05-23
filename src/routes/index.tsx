import { createFileRoute, Link } from "@tanstack/react-router";
import { CheckCircle2, Clock, ShieldCheck, Star, Wrench, MapPin, Phone } from "lucide-react";
import heroImg from "@/assets/hero-technician.jpg";
import { SITE, SERVICES } from "@/lib/site";
import { ServiceIcon } from "@/components/site/ServiceIcon";
import { BookForm } from "@/components/site/BookForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AMR Service — Home Appliance Repair in Coimbatore | Same-Day Doorstep" },
      { name: "description", content: "AMR Service Coimbatore: doorstep repair for washing machine, fridge, AC, microwave, water purifier & geyser. Same-day service. Call +91 79049 30828." },
      { property: "og:title", content: "AMR Service — Home Appliance Repair Coimbatore" },
      { property: "og:description", content: "Same-day doorstep repair for all home appliances across Coimbatore." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-[var(--gradient-hero)] text-white">
        <div className="pointer-events-none absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_20%_20%,white_0,transparent_40%),radial-gradient(circle_at_80%_60%,white_0,transparent_35%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-secondary-foreground shadow-[var(--shadow-cta)]">
              <Clock className="h-3.5 w-3.5" /> Same-day service
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight md:text-5xl lg:text-6xl">
              Doorstep Appliance <span className="text-secondary">Repair</span> in Coimbatore
            </h1>
            <p className="mt-5 max-w-xl text-base text-white/85 md:text-lg">
              Washing machine, fridge, AC, microwave, water purifier & geyser — fixed by certified technicians with genuine spares and a 90-day warranty.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-105">
                <Wrench className="h-4 w-4" /> Book Service
              </Link>
              <a href={`tel:${SITE.phone}`} className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/20">
                <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
              </a>
            </div>
            <ul className="mt-8 grid grid-cols-2 gap-3 text-sm text-white/90 sm:grid-cols-3">
              {["Doorstep visit", "Genuine spares", "90-day warranty", "All brands", "Upfront pricing", "Sun–Sun, 8am–9pm"].map((f) => (
                <li key={f} className="flex items-center gap-2"><CheckCircle2 className="h-4 w-4 text-secondary" /> {f}</li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <img
              src={heroImg}
              alt="AMR Service technician repairing a washing machine at a Coimbatore home"
              width={1536}
              height={1024}
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-2xl ring-1 ring-white/20"
            />
            <div className="absolute -bottom-5 -left-5 hidden rounded-2xl bg-white p-4 text-foreground shadow-xl ring-1 ring-border md:block">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <span className="text-sm font-semibold">4.9 / 5</span>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">Trusted by 2,000+ Coimbatore homes</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-secondary">Our Services</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Every appliance, expertly repaired</h2>
          <p className="mt-3 text-muted-foreground">All major brands — Samsung, LG, Whirlpool, IFB, Bosch, Voltas, Daikin, Godrej, Bajaj, Kent & more.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((s) => (
            <Link key={s.slug} to="/services" hash={s.slug} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-secondary">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-[var(--gradient-cta)] text-secondary-foreground shadow-[var(--shadow-cta)]">
                <ServiceIcon name={s.icon as any} className="h-6 w-6" />
              </div>
              <h3 className="mt-4 text-lg font-bold text-foreground">{s.name}</h3>
              <p className="mt-1 text-sm text-secondary">{s.short}</p>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">Learn more →</span>
            </Link>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-4">
          {[
            { icon: Clock, title: "Same-Day Service", text: "Book before 4pm and a technician reaches you the same day." },
            { icon: MapPin, title: "Doorstep Service", text: "We come to your home across Coimbatore — no need to step out." },
            { icon: ShieldCheck, title: "90-Day Warranty", text: "Every repair backed by a written 90-day service warranty." },
            { icon: Star, title: "Certified Experts", text: "Trained technicians, original spare parts, transparent pricing." },
          ].map((f) => (
            <div key={f.title} className="rounded-2xl bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary text-primary-foreground">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mt-4 text-lg font-bold">{f.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* VIDEOS */}
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-secondary">See our work</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Real repairs, real results</h2>
          <p className="mt-3 text-muted-foreground">Watch our team in action on YouTube.</p>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            "Eg9Vc-c2yFY",
            "Mt_a8wRcw5Q",
            "9NJ8Y3a6dRk",
          ].map((id) => (
            <div key={id} className="aspect-video overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                className="h-full w-full"
                src={`https://www.youtube.com/embed/${id}`}
                title="AMR Service video"
                loading="lazy"
                allow="accelerometer; encrypted-media; picture-in-picture"
                allowFullScreen
              />
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <a href={SITE.youtube} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary px-5 py-2.5 text-sm font-semibold text-primary hover:bg-primary hover:text-primary-foreground">
            Visit our YouTube channel →
          </a>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-muted py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-bold uppercase tracking-wider text-secondary">Testimonials</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Loved by Coimbatore families</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              { n: "Priya R.", a: "RS Puram", t: "Booked at 10am, technician arrived by 1pm. Fridge cooling fixed same day. Very professional!" },
              { n: "Karthik S.", a: "Vadavalli", t: "Excellent AC service. Genuine spares, fair pricing, and a 90-day warranty. Highly recommended." },
              { n: "Lakshmi M.", a: "Alandurai", t: "Washing machine drum issue solved in one visit. Polite team and reasonable charges. Will call again." },
            ].map((r) => (
              <figure key={r.n} className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-foreground">“{r.t}”</blockquote>
                <figcaption className="mt-4 text-sm font-semibold text-foreground">
                  {r.n} <span className="font-normal text-muted-foreground">· {r.a}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* BOOK + MAP */}
      <section id="book" className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-wider text-secondary">Book a Service</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight md:text-4xl">Tell us what's broken — we'll handle the rest</h2>
            <p className="mt-3 max-w-md text-muted-foreground">
              Fill the form and we'll confirm your appointment over WhatsApp within minutes.
            </p>
            <div className="mt-6 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
              <iframe
                title="AMR Service location on Google Maps"
                src={SITE.mapEmbed}
                className="h-72 w-full"
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
