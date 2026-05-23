import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Youtube } from "lucide-react";
import { SITE, SERVICES } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-[oklch(0.18_0.04_250)] text-[oklch(0.95_0.01_250)]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-lg [background-image:var(--gradient-cta)] font-bold text-secondary-foreground">
              A
            </div>
            <div className="text-lg font-bold">AMR Service</div>
          </div>
          <p className="mt-3 text-sm opacity-80">
            Trusted doorstep home appliance repair across Coimbatore. Same-day service, genuine spares, 90-day warranty.
          </p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Services</h3>
          <ul className="space-y-2 text-sm opacity-80">
            {SERVICES.map((s) => (
              <li key={s.slug}>
                <Link to="/services" hash={s.slug} className="hover:text-secondary">
                  {s.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Service Areas</h3>
          <p className="text-sm opacity-80">{SITE.areas.join(" • ")}</p>
        </div>

        <div>
          <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-secondary">Contact</h3>
          <ul className="space-y-3 text-sm opacity-90">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-secondary" />
              <a href={`tel:${SITE.phone}`} className="hover:text-secondary">{SITE.phoneDisplay}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-secondary" />
              <a href={`mailto:${SITE.email}`} className="break-all hover:text-secondary">{SITE.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-secondary" />
              <span>{SITE.address}</span>
            </li>
            <li className="flex items-start gap-2">
              <Youtube className="mt-0.5 h-4 w-4 text-secondary" />
              <a href={SITE.youtube} target="_blank" rel="noreferrer" className="hover:text-secondary">YouTube Channel</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs opacity-70">
          © {new Date().getFullYear()} {SITE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
