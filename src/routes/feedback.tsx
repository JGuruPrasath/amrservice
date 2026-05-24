import { createFileRoute } from "@tanstack/react-router";
import { FeedbackForm } from "@/components/site/FeedbackForm";

export const Route = createFileRoute("/feedback")({
  head: () => ({
    meta: [
      { title: "Share Your Feedback — AMR Service" },
      { name: "description", content: "Share your experience with AMR Service. Your feedback helps us improve our service." },
      { property: "og:title", content: "Share Your Feedback — AMR Service" },
      { property: "og:description", content: "Tell us about your experience with our appliance repair service." },
    ],
    links: [{ rel: "canonical", href: "/feedback" }],
  }),
  component: FeedbackPage,
});

function FeedbackPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-muted py-12 md:py-16">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
            Share Your Feedback
          </h1>
          <p className="mt-3 text-base text-muted-foreground md:text-lg">
            Help us improve by sharing your experience with AMR Service. Your testimonial inspires us and helps other customers make informed decisions.
          </p>
        </div>
      </section>

      {/* Feedback Form Section */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <FeedbackForm />

          {/* Info Section */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-card p-6">
              <div className="text-2xl font-bold text-primary">⭐</div>
              <h3 className="mt-2 font-semibold">5-Star Rating</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Rate your experience from 1 to 5 stars.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="text-2xl font-bold text-primary">✓</div>
              <h3 className="mt-2 font-semibold">Verified Reviews</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                All feedback is reviewed before appearing on our site.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-card p-6">
              <div className="text-2xl font-bold text-primary">🎯</div>
              <h3 className="mt-2 font-semibold">Helpful Insight</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Your honest feedback helps us serve you better.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
