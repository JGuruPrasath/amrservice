import { Link } from "@tanstack/react-router";
import { Phone, Menu, X } from "lucide-react";
import { useState } from "react";
import { SITE } from "@/lib/site";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Book Service" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-lg [background-image:var(--gradient-cta)] font-bold text-secondary-foreground shadow-[var(--shadow-cta)]">
            A
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold text-foreground">AMR Service</div>
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              Coimbatore
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              activeOptions={{ exact: l.to === "/" }}
              activeProps={{ className: "text-primary" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={`tel:${SITE.phone}`}
            className="hidden items-center gap-2 rounded-full [background-image:var(--gradient-cta)] px-4 py-2 text-sm font-semibold text-secondary-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-105 sm:inline-flex"
          >
            <Phone className="h-4 w-4" /> {SITE.phoneDisplay}
          </a>
          <button
            aria-label="Toggle menu"
            className="rounded-md p-2 text-foreground md:hidden"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-foreground/80"
                activeOptions={{ exact: l.to === "/" }}
                activeProps={{ className: "text-primary" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${SITE.phone}`}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-full [background-image:var(--gradient-cta)] px-4 py-2.5 text-sm font-semibold text-secondary-foreground"
            >
              <Phone className="h-4 w-4" /> Call {SITE.phoneDisplay}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
