import { eq } from "drizzle-orm";
import { unstable_cacheTag as cacheTag } from "next/cache";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";
import { DatabaseError, errors } from "@/lib/errors";
import { logError } from "@/lib/sentry";
import { getUserIdTag } from "@/server/user/cache";

export async function getUserByEmail(email: string) {
  "use cache";

  try {
    const result = await db.query.user.findFirst({
      where: eq(user.email, email),
      with: {
        stripeCustomer: true,
      },
    });

    if (result?.id) {
      cacheTag(getUserIdTag(result.id));
    }

    return result;
  } catch (error) {
    logError({ error, origin: "getUserByEmail" });
    throw new DatabaseError(errors.DATABASE.FETCH_USER_FAILED);
  }
}
