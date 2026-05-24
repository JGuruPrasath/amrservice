import { createFileRoute } from "@tanstack/react-router";

export const Route =
  createFileRoute(
    "/api/testimonials/$type"
  )({
    server: {
      handlers: {

        GET: async ({
          params,
        }) => {

          const db =
            await import(
              "@/lib/db.server"
            );

          const type =
            params.type;

          if (
            type ===
            "pending"
          ) {
            return new Response(
              JSON.stringify({
                data:
                  db.getPendingTestimonials()
              }),
              {
                headers:{
                  "content-type":
                  "application/json"
                }
              }
            );
          }

          if (
            type ===
            "approved"
          ) {
            return new Response(
              JSON.stringify({
                data:
                db.getApprovedTestimonials()
              }),
              {
                headers:{
                  "content-type":
                  "application/json"
                }
              }
            );
          }

          if (
            type ===
            "all"
          ) {
            return new Response(
              JSON.stringify({
                data:
                  db.getAllTestimonials()
              }),
              {
                headers:{
                  "content-type":
                  "application/json"
                }
              }
            );
          }

          return new Response(
            JSON.stringify({
              data:[]
            })
          );

        },
      },
    },
});