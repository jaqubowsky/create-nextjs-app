import { eq } from "drizzle-orm";
import { cacheTag } from "next/dist/server/use-cache/cache-tag";
import { db } from "@/drizzle/db";
import { user } from "@/drizzle/schema";
import { getUserIdTag } from "./cache";

export async function getUserById(id: string) {
	// example of using cache
	"use cache";
	cacheTag(getUserIdTag(id));

	const result = await db.select().from(user).where(eq(user.id, id)).limit(1);

	return result[0];
}
