import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Check, X } from "lucide-react";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  comment: string;
  status: "pending" | "approved" | "rejected";
  created_at: string;
  updated_at: string;
}

export const Route = createFileRoute("/admin/testimonials")({
  head: () => ({
    meta: [
      { title: "Testimonials Admin — AMR Service" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: TestimonialsAdmin,
});

function TestimonialsAdmin() {
  const [pending, setPending] = useState<Testimonial[]>([]);
  const [approved, setApproved] = useState<Testimonial[]>([]);
  const [all, setAll] = useState<Testimonial[]>([]);
  const [activeTab, setActiveTab] = useState<
    "pending" | "approved" | "all"
  >("pending");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadTestimonials();
  }, []);

  async function loadTestimonials() {
    try {
      const pendingRes = await fetch(
        "/api/testimonials/pending"
      );

      const approvedRes = await fetch(
        "/api/testimonials/approved"
      );

      const allRes = await fetch(
        "/api/testimonials/all"
      );

      const pendingData =
        await pendingRes.json();

      const approvedData =
        await approvedRes.json();

      const allData =
        await allRes.json();

      setPending(
        pendingData.data || []
      );

      setApproved(
        approvedData.data || []
      );

      setAll(
        allData.data || []
      );

    } catch (error) {
      console.error(
        "Error loading testimonials:",
        error
      );
    } finally {
      setLoading(false);
    }
  }

  async function handleApprove(
    id: number
  ) {
    try {
      await fetch(
        `/api/testimonials/${id}/approve`
      );

      await loadTestimonials();

    } catch (error) {
      console.error(
        "Error approving:",
        error
      );
    }
  }

  async function handleReject(
    id: number
  ) {
    try {
      await fetch(
        `/api/testimonials/${id}/reject`
      );

      await loadTestimonials();

    } catch (error) {
      console.error(
        "Error rejecting:",
        error
      );
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">
          Loading testimonials...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-10">

        <h1 className="text-3xl font-bold">
          Testimonials Management
        </h1>

        <p className="mt-2 text-muted-foreground">
          Review and manage customer testimonials
        </p>

        <div className="mt-8 flex gap-4 border-b border-border">

          {["pending", "approved", "all"].map(
            (tab) => (

              <button
                key={tab}
                onClick={() =>
                  setActiveTab(
                    tab as
                      | "pending"
                      | "approved"
                      | "all"
                  )
                }
                className={`px-4 py-2 font-semibold transition ${
                  activeTab === tab
                    ? "border-b-2 border-primary text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >

                {tab.charAt(0).toUpperCase() +
                  tab.slice(1)}
                {" "}
                (
                {
                  tab === "pending"
                    ? pending.length
                    : tab === "approved"
                    ? approved.length
                    : all.length
                }
                )

              </button>

            )
          )}

        </div>

        <div className="mt-8 grid gap-4">

          {activeTab === "pending" && (

            pending.length === 0 ?

            (
              <p>No pending testimonials</p>
            )

            :

            pending.map((t) => (

              <div
                key={t.id}
                className="rounded-lg border p-6"
              >

                <div className="flex justify-between">

                  <div>

                    <h3 className="font-semibold">
                      {t.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {t.location}
                    </p>

                    <p className="mt-3">
                      "{t.comment}"
                    </p>

                  </div>

                  <div className="flex gap-2">

                    <button
                      onClick={() =>
                        handleApprove(
                          t.id
                        )
                      }
                      className="bg-green-600 text-white px-3 py-2 rounded"
                    >
                      <Check className="h-4 w-4" />
                    </button>

                    <button
                      onClick={() =>
                        handleReject(
                          t.id
                        )
                      }
                      className="bg-red-600 text-white px-3 py-2 rounded"
                    >
                      <X className="h-4 w-4" />
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

          {activeTab === "approved" && (

            approved.map((t) => (

              <div
                key={t.id}
                className="rounded-lg border p-6"
              >

                <h3 className="font-semibold">
                  {t.name}
                </h3>

                <p>{t.location}</p>

                <p>
                  "{t.comment}"
                </p>

              </div>

            ))

          )}

          {activeTab === "all" && (

            all.map((t) => (

              <div
                key={t.id}
                className="rounded-lg border p-6"
              >

                <h3 className="font-semibold">
                  {t.name}
                </h3>

                <p>{t.location}</p>

                <p>{t.status}</p>

                <p>
                  "{t.comment}"
                </p>

              </div>

            ))

          )}

        </div>

      </div>
    </div>
  );
}

export default TestimonialsAdmin;