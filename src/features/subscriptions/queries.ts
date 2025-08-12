import { eq } from "drizzle-orm";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";
import { DatabaseError, errors } from "@/lib/errors";
import { logError } from "@/lib/sentry";
import { revalidateUserCache } from "@/server/user/cache";

export async function updateUserStripeCustomerId(
  userId: string,
  stripeCustomerId: string,
) {
  try {
    await db
      .update(user)
      .set({
        stripeCustomerId,
        updatedAt: new Date(),
      })
      .where(eq(user.id, userId));

    revalidateUserCache(userId);
  } catch (error) {
    logError({ error, origin: "updateUserStripeCustomerId" });
    throw new DatabaseError(errors.DATABASE.UPDATE_USER_FAILED);
  }
}
