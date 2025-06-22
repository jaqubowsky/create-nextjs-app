import { eq } from "drizzle-orm";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";

export async function getUserByEmail(email: string) {
	const result = await db
		.select()
		.from(user)
		.where(eq(user.email, email))
		.limit(1);

	return result[0];
}
