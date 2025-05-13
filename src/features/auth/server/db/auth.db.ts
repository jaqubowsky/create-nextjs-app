import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";
import { eq } from "drizzle-orm";

export async function getUserByEmail(email: string) {
  const result = await db
    .select()
    .from(user)
    .where(eq(user.email, email))
    .limit(1);
    
  return result[0];
}
