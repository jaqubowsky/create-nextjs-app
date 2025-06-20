import { createSafeActionClient } from "next-safe-action";
import { headers } from "next/headers";
import { auth } from "./auth";
import { env } from "./env";
import { ActionError, errors } from "./errors";
import { getIp, publicApiRateLimiter, RateLimiter } from "./rate-limit";

export const action = createSafeActionClient({
  handleServerError: (e) => {
    if (env.NODE_ENV === "development") {
      console.error(JSON.stringify(e, null, 2));
    }

    if (e instanceof ActionError) return e;

    return errors.GENERAL.SERVER_ERROR;
  },
});

export const privateAction = action.use(async ({ next }) => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) throw new ActionError(errors.AUTH.UNAUTHORIZED);

  const ip = await getIp();
  if (!ip) throw new ActionError(errors.GENERAL.RATE_LIMIT);

  const { success } = await publicApiRateLimiter.limit(ip);
  if (!success) throw new ActionError(errors.GENERAL.RATE_LIMIT);

  return next({ ctx: { session } });
});

export const publicAction = action.use(async ({ next }) => {
  const ip = await getIp();
  if (!ip) throw new ActionError(errors.GENERAL.RATE_LIMIT);

  const { success } = await publicApiRateLimiter.limit(ip);
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

    const { success } = await limiter.limit(identifier);
    if (!success) throw new ActionError(errors.GENERAL.RATE_LIMIT);

    return next();
  });
