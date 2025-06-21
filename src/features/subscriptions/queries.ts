import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";
import { revalidateUserCache } from "@/server/user/cache";
import { eq } from "drizzle-orm";

export async function updateUserStripeCustomerId(
  userId: string,
  stripeCustomerId: string
) {
  const [updatedUser] = await db
    .update(user)
    .set({
      stripeCustomerId,
      updatedAt: new Date(),
    })
    .where(eq(user.id, userId))
    .returning();

  revalidateUserCache(userId);

  return updatedUser;
}
