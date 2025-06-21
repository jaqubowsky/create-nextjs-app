import { createSafeActionClient } from "next-safe-action";
import { headers } from "next/headers";
import { z } from "zod";
import { auth } from "./auth";
import { env } from "./env";
import { ActionError, errors } from "./errors";
import { getIp, publicApiRateLimiter, RateLimiter } from "./rate-limit";
import { logError, setSentryUserContext } from "./sentry";

export const action = createSafeActionClient({
  defineMetadataSchema() {
    return z.object({
      actionName: z.string(),
    });
  },
  handleServerError: (error, utils) => {
    if (error instanceof ActionError) {
      if (env.NODE_ENV === "development") console.error(error);

      return error;
    }

    logError({
      error,
      origin: utils.metadata?.actionName || "server_action",
    });

    return errors.GENERAL.SERVER_ERROR;
  },
});

export const privateAction = action.use(async ({ next }) => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new ActionError(errors.AUTH.UNAUTHORIZED);

  const ip = await getIp();
  if (!ip) throw new ActionError(errors.GENERAL.RATE_LIMIT);

  const { success } = publicApiRateLimiter.limit(ip);
  if (!success) throw new ActionError(errors.GENERAL.RATE_LIMIT);

  setSentryUserContext({
    id: session.user.id,
    email: session.user.email,
  });

  return next({ ctx: { session } });
});

export const publicAction = action.use(async ({ next }) => {
  const ip = await getIp();
  if (!ip) throw new ActionError(errors.GENERAL.RATE_LIMIT);

  const { success } = publicApiRateLimiter.limit(ip);
  if (!success) throw new ActionError(errors.GENERAL.RATE_LIMIT);

  return next();
});

export const publicActionWithLimiter = (
  limiter: RateLimiter,
  customIdentifier?: string
) =>
  action.use(async ({ next }) => {
    const ip = await getIp();
    if (!ip) throw new ActionError(errors.GENERAL.RATE_LIMIT);

    const identifier = customIdentifier ? `${customIdentifier}:${ip}` : ip;

    const { success } = limiter.limit(identifier);
    if (!success) throw new ActionError(errors.GENERAL.RATE_LIMIT);

    return next();
  });
