import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const testimonialSchema = z.object({
  name: z.string().trim().min(2).max(80),
  location: z.string().trim().min(2).max(80),
  rating: z.coerce.number().int().min(1).max(5),
  comment: z.string().trim().min(10).max(500),
});

export const Route = createFileRoute("/api/testimonials")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = await request.json();

          const parsed =
            testimonialSchema.safeParse(body);

          if (!parsed.success) {
            return new Response(
              JSON.stringify({
                success: false,
                errors:
                  parsed.error.flatten().fieldErrors,
              }),
              {
                status: 400,
                headers: {
                  "content-type":
                    "application/json",
                },
              }
            );
          }

          const db = await import(
            "@/lib/db.server"
          );

          const testimonial =
            db.insertTestimonial(
              parsed.data
            );

          return new Response(
            JSON.stringify({
              success: true,
              data: testimonial,
            }),
            {
              status: 201,
              headers: {
                "content-type":
                  "application/json",
              },
            }
          );
        } catch (e) {
          console.error(e);

          return new Response(
            JSON.stringify({
              success: false,
            }),
            {
              status: 500,
              headers: {
                "content-type":
                  "application/json",
              },
            }
          );
        }
      },
    },
  },
});