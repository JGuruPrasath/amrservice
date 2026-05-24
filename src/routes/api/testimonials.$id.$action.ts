import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute(
  "/api/testimonials/$id/$action"
)({
  server: {
    handlers: {

      GET: async ({
        params,
      }) => {

        try {

          const db =
            await import(
              "@/lib/db.server"
            );

          const id =
            parseInt(params.id);

          const action =
            params.action;

          if (
            action ===
            "approve"
          ) {

            const result =
              db.approveTestimonial(
                id
              );

            return Response.json({
              success:true,
              data:result
            });
          }

          if (
            action ===
            "reject"
          ) {

            const result =
              db.rejectTestimonial(
                id
              );

            return Response.json({
              success:true,
              data:result
            });
          }

          return Response.json(
            {
              success:false
            },
            {
              status:404
            }
          );

        } catch(error){

          console.error(error);

          return Response.json(
            {
              success:false
            },
            {
              status:500
            }
          );
        }

      },
    },
  },
});