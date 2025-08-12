import { eq } from "drizzle-orm";
import { unstable_cacheTag as cacheTag } from "next/cache";
import { db } from "@/drizzle/db";
import { SUBSCRIPTION_PLAN, user } from "@/drizzle/schema";
import { DatabaseError, errors } from "@/lib/errors";
import { logError } from "@/lib/sentry";
import { getUserIdTag, revalidateUserCache } from "../user/cache";

export const updateUserPlan = async (
  stripeCustomerId: string,
  plan: keyof typeof SUBSCRIPTION_PLAN,
) => {
  try {
    const [result] = await db
      .update(user)
      .set({
        plan: SUBSCRIPTION_PLAN[plan],
        updatedAt: new Date(),
      })
      .where(eq(user.stripeCustomerId, stripeCustomerId))
      .returning({ id: user.id });

    revalidateUserCache(result.id);
  } catch (error) {
    logError({ error, origin: "updateUserPlan" });
    throw new DatabaseError(errors.DATABASE.UPDATE_USER_FAILED);
  }
};

export const getUserByStripeCustomerId = async (stripeCustomerId: string) => {
  "use cache";

  try {
    const result = await db.query.user.findFirst({
      where: eq(user.stripeCustomerId, stripeCustomerId),
    });

    if (result?.id) {
      cacheTag(getUserIdTag(result.id));
    }

    return result;
  } catch (error) {
    logError({ error, origin: "getUserByStripeCustomerId" });
    throw new DatabaseError(errors.DATABASE.FETCH_USER_FAILED);
  }
};
