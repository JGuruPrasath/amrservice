import { useState } from "react";
import { z } from "zod";
import { SITE, SERVICES } from "@/lib/site";

const schema = z.object({
  name: z.string().trim().min(2, "Enter your name").max(80),
  phone: z.string().trim().regex(/^[0-9+\s-]{7,15}$/, "Enter a valid phone"),
  service: z.string().min(1, "Choose a service"),
  area: z.string().trim().min(2, "Enter your area").max(80),
  message: z.string().trim().max(500).optional().or(z.literal("")),
});

export function BookForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = Object.fromEntries(fd) as Record<string, string>;
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const i of parsed.error.issues) errs[i.path[0] as string] = i.message;
      setErrors(errs);
      return;
    }
    setErrors({});
    const text =
      `*New Service Booking*%0A` +
      `Name: ${encodeURIComponent(parsed.data.name)}%0A` +
      `Phone: ${encodeURIComponent(parsed.data.phone)}%0A` +
      `Service: ${encodeURIComponent(parsed.data.service)}%0A` +
      `Area: ${encodeURIComponent(parsed.data.area)}%0A` +
      `Notes: ${encodeURIComponent(parsed.data.message || "-")}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${text}`, "_blank");
  }

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-primary focus:ring-2";

  return (
    <form onSubmit={onSubmit} className="grid gap-4 rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8">
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Name</label>
          <input name="name" className={input} placeholder="Your full name" />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Phone</label>
          <input name="phone" type="tel" className={input} placeholder="10-digit mobile" />
          {errors.phone && <p className="mt-1 text-xs text-destructive">{errors.phone}</p>}
        </div>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Service</label>
          <select name="service" className={input} defaultValue="">
            <option value="" disabled>Choose a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.name}>{s.name}</option>
            ))}
          </select>
          {errors.service && <p className="mt-1 text-xs text-destructive">{errors.service}</p>}
        </div>
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Area / Locality</label>
          <input name="area" className={input} placeholder="e.g. Vadavalli, RS Puram" />
          {errors.area && <p className="mt-1 text-xs text-destructive">{errors.area}</p>}
        </div>
      </div>
      <div>
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">Problem (optional)</label>
        <textarea name="message" rows={4} className={input} placeholder="Briefly describe the issue" />
      </div>
      <button
        type="submit"
        className="mt-2 inline-flex items-center justify-center rounded-full [background-image:var(--gradient-cta)] px-6 py-3.5 text-sm font-semibold text-secondary-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02]"
      >
        Book Service via WhatsApp
      </button>
      <p className="text-center text-xs text-muted-foreground">
        Or call us directly:{" "}
        <a href={`tel:${SITE.phone}`} className="font-semibold text-primary">{SITE.phoneDisplay}</a>
      </p>
    </form>
  );
}
