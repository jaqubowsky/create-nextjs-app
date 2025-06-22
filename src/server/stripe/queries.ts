import { eq } from "drizzle-orm";
import { db } from "@/drizzle/db";
import * as schema from "@/drizzle/schema";
import { SubscriptionPlan } from "@/drizzle/schema";

export const updateUserPlan = async (
	stripeCustomerId: string,
	plan: keyof typeof SubscriptionPlan,
) => {
	const [updatedUser] = await db
		.update(schema.user)
		.set({
			plan: SubscriptionPlan[plan],
			updatedAt: new Date(),
		})
		.where(eq(schema.user.stripeCustomerId, stripeCustomerId))
		.returning();

	return updatedUser;
};

export const getUserByStripeCustomerId = async (stripeCustomerId: string) => {
	const result = await db
		.select()
		.from(schema.user)
		.where(eq(schema.user.stripeCustomerId, stripeCustomerId))
		.limit(1);

	return result[0];
};
