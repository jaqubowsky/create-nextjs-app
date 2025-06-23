"use server";

import { SubscriptionPlan } from "@/drizzle/schema";
import { absoluteUrl } from "@/lib/absolute-url";
import { env } from "@/lib/env";
import { ActionError, errors } from "@/lib/errors";
import { privateAction } from "@/lib/safe-action";
import { stripe } from "@/lib/stripe";
import { revalidateUserCache } from "@/server/user/cache";
import { updateUserStripeCustomerId } from "./queries";
import { checkoutSuccessSchema } from "./schemas";

export const createCheckoutSessionAction = privateAction
	.metadata({
		actionName: "createCheckoutSessionAction",
	})
	.action(async ({ ctx: { session } }) => {
		const hasActiveSubscription = session.user.plan === SubscriptionPlan.PAID;
		if (hasActiveSubscription) {
			throw new ActionError(errors.STRIPE.SUBSCRIPTION_ALREADY_ACTIVE);
		}

		let customerId = session.user.stripeCustomerId;

		if (!customerId) {
			const customer = await stripe.customers.create({
				email: session.user.email,
			});

			await updateUserStripeCustomerId(session.user.id, customer.id);
			customerId = customer.id;
		}

		const checkoutSession = await stripe.checkout.sessions.create({
			success_url: absoluteUrl("?session_id={CHECKOUT_SESSION_ID}"),
			cancel_url: absoluteUrl("/account"),
			payment_method_types: ["card"],
			customer: customerId,
			mode: "subscription",
			automatic_tax: {
				enabled: true,
			},
			customer_update: {
				address: "auto",
			},
			line_items: [
				{
					price: env.STRIPE_PRICE_ID,
					quantity: 1,
				},
			],
		});

		return { url: checkoutSession.url };
	});

export const verifyCheckoutSessionAction = privateAction
	.metadata({
		actionName: "verifyCheckoutSessionAction",
	})
	.inputSchema(checkoutSuccessSchema)
	.action(async ({ parsedInput: { session_id }, ctx: { session } }) => {
		const checkoutSession = await stripe.checkout.sessions.retrieve(session_id);

		if (checkoutSession.customer !== session.user.stripeCustomerId) {
			throw new ActionError(errors.STRIPE.CUSTOMER_NOT_FOUND);
		}

		if (checkoutSession.payment_status !== "paid") {
			throw new ActionError("Payment not completed");
		}

		revalidateUserCache(session.user.id);

		return { success: true };
	});

export const openBillingPortalAction = privateAction
	.metadata({
		actionName: "openBillingPortalAction",
	})
	.action(async ({ ctx: { session } }) => {
		const hasCustomerId = session.user.stripeCustomerId;
		if (!hasCustomerId) throw new ActionError(errors.STRIPE.CUSTOMER_NOT_FOUND);

		const billingPortalSession = await stripe.billingPortal.sessions.create({
			customer: session.user.stripeCustomerId as string,
			return_url: absoluteUrl("/account"),
		});

		return { url: billingPortalSession.url };
	});
