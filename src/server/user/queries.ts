import { eq } from "drizzle-orm";
import { unstable_cacheTag as cacheTag } from "next/cache";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";
import { DatabaseError, errors } from "@/lib/errors";
import { logError } from "@/lib/sentry";
import { getUserIdTag } from "./cache";

export async function getUserById(id: string) {
  "use cache";
  cacheTag(getUserIdTag(id));

  try {
    const result = await db.query.user.findFirst({
      where: eq(user.id, id),
    });

    return result;
  } catch (error) {
    logError({ error, origin: "getUserById" });
    throw new DatabaseError(errors.DATABASE.FETCH_USER_FAILED);
  }
}
