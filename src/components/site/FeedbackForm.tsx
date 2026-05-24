import { useState } from "react";
import { z } from "zod";
import { Star } from "lucide-react";

const feedbackSchema = z.object({
  name: z.string().trim().min(2, "Name is required").max(80),
  location: z.string().trim().min(2, "Location is required").max(80),
  rating: z.coerce.number().int().min(1, "Rating must be 1-5").max(5),
  comment: z.string().trim().min(10, "Comment must be at least 10 characters").max(500),
});

type FeedbackFormData = z.infer<typeof feedbackSchema>;

export function FeedbackForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [rating, setRating] = useState<number>(0);
  const [hoverRating, setHoverRating] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    location: "",
    comment: "",
  });

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const data = {
      name: formData.name,
      location: formData.location,
      rating,
      comment: formData.comment,
    };

    const parsed = feedbackSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      for (const issue of parsed.error.issues) {
        errs[issue.path[0] as string] = issue.message;
      }
      setErrors(errs);
      setLoading(false);
      return;
    }

    try {
      const response = await fetch("api/testimonials", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", location: "", comment: "" });
        setRating(0);
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setErrors(result.errors || { submit: "Failed to submit feedback" });
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setErrors({ submit: "Failed to submit feedback. Please try again." });
    } finally {
      setLoading(false);
    }
  }

  const input =
    "w-full rounded-lg border border-border bg-background px-4 py-3 text-sm text-foreground outline-none ring-ring/40 transition focus:border-primary focus:ring-2";

  return (
    <form
      onSubmit={onSubmit}
      className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] md:p-8"
    >
      {success && (
        <div className="mb-6 rounded-lg bg-green-50 p-4 text-sm text-green-800 border border-green-200">
          ✓ Thank you! Your feedback has been submitted and will appear after review.
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Name
          </label>
          <input
            name="name"
            className={input}
            placeholder="Your full name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            disabled={loading}
          />
          {errors.name && <p className="mt-1 text-xs text-destructive">{errors.name}</p>}
        </div>

        <div>
          <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Location / Area
          </label>
          <input
            name="location"
            className={input}
            placeholder="e.g. Vadavalli, RS Puram"
            value={formData.location}
            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
            disabled={loading}
          />
          {errors.location && <p className="mt-1 text-xs text-destructive">{errors.location}</p>}
        </div>
      </div>

      <div className="mt-4">
        <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Rating
        </label>
        <div className="flex gap-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setRating(i + 1)}
              onMouseEnter={() => setHoverRating(i + 1)}
              onMouseLeave={() => setHoverRating(0)}
              className="transition-transform hover:scale-110"
              disabled={loading}
            >
              <Star
                className={`h-8 w-8 ${
                  (hoverRating || rating) > i
                    ? "fill-secondary text-secondary"
                    : "text-border"
                }`}
              />
            </button>
          ))}
        </div>
        {!rating && errors.rating && (
          <p className="mt-1 text-xs text-destructive">{errors.rating}</p>
        )}
      </div>

      <div className="mt-4">
        <label className="mb-1 block text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Your Feedback
        </label>
        <textarea
          name="comment"
          rows={5}
          className={input}
          placeholder="Share your experience with our service (minimum 10 characters)"
          value={formData.comment}
          onChange={(e) => setFormData({ ...formData, comment: e.target.value })}
          disabled={loading}
        />
        {errors.comment && <p className="mt-1 text-xs text-destructive">{errors.comment}</p>}
      </div>

      {errors.submit && (
        <p className="mt-3 text-xs text-destructive">{errors.submit}</p>
      )}

      <button
        type="submit"
        disabled={loading}
        className="mt-6 inline-flex w-full items-center justify-center rounded-full [background-image:var(--gradient-cta)] px-6 py-3.5 text-sm font-semibold text-secondary-foreground shadow-[var(--shadow-cta)] transition-transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Submitting..." : "Submit Feedback"}
      </button>
    </form>
  );
}
