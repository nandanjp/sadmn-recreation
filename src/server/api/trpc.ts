import { initTRPC, TRPCError } from "@trpc/server";
import superjson from "superjson";
import { ZodError } from "zod";

import { db } from "~/server/db";

/**
 * 1. CONTEXT
 *
 * This section defines the "contexts" that are available in the backend API.
 *
 * These allow you to access things when processing a request, like the database, the session, etc.
 *
 * This helper generates the "internals" for a tRPC context. The API handler and RSC clients each
 * wrap this and provides the required context.
 *
 * @see https://trpc.io/docs/server/context
 */

import { auth } from "@clerk/nextjs/server";

export const createTRPCContext = async (opts: {
  headers: Headers;
  authorization: ReturnType<typeof auth>;
}) => {
  return {
    db,
    ...opts,
  };
};

const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const createCallerFactory = t.createCallerFactory;
export const createTRPCRouter = t.router;

const timingMiddleware = t.middleware(async ({ next, path }) => {
  const start = Date.now();
  if (t._config.isDev)
    await new Promise((resolve) =>
      setTimeout(resolve, Math.floor(Math.random() * 400) + 100),
    );
  const result = await next();
  console.log(`[TRPC] ${path} took ${Date.now() - start}ms to execute`);
  return result;
});
const authenticationMiddleware = t.middleware(async ({ next, ctx }) => {
  if (!ctx.authorization.userId) throw new TRPCError({ code: "UNAUTHORIZED" });
  return next({
    ctx: {
      auth: ctx.authorization,
      ...ctx,
    },
  });
});

export const publicProcedure = t.procedure.use(timingMiddleware);
export const protectedProcedure = t.procedure
  .use(timingMiddleware)
  .use(authenticationMiddleware);
