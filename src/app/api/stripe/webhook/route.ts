import { headers } from "next/headers";
import { type NextRequest, NextResponse } from "next/server";
import type Stripe from "stripe";
import { SubscriptionPlan } from "@/drizzle/schema";
import {
	sendPaymentFailedEmail,
	sendSubscriptionCancelledEmail,
	sendSubscriptionPurchasedEmail,
} from "@/lib/email-service";
import { env } from "@/lib/env";
import { errors } from "@/lib/errors";
import { logError } from "@/lib/sentry";
import { stripe } from "@/lib/stripe";
import {
	getUserByStripeCustomerId,
	updateUserPlan,
} from "@/server/stripe/queries";

export async function POST(req: NextRequest) {
	const body = await req.text();
	const headersList = await headers();
	const signature = headersList.get("stripe-signature");

	let event: Stripe.Event;

	if (!signature) {
		return NextResponse.json({ error: "No signature" }, { status: 400 });
	}

	try {
		event = stripe.webhooks.constructEvent(
			body,
			signature,
			env.STRIPE_WEBHOOK_SECRET,
		);
	} catch (error) {
		logError({
			error,
			origin: "stripe_webhook_invalid_signature",
		});

		return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
	}

	try {
		switch (event.type) {
			case "customer.subscription.created": {
				const subscription = event.data.object;

				const user = await getUserByStripeCustomerId(
					subscription.customer as string,
				);
				if (!user) throw new Error(errors.STRIPE.CUSTOMER_NOT_FOUND);

				try {
					await sendSubscriptionPurchasedEmail({
						name: user.name,
						email: user.email,
					});
				} catch (emailError) {
					logError({
						error: emailError,
						origin: "subscription_created_email",
					});
				}
				break;
			}

			case "customer.subscription.updated": {
				const subscription = event.data.object;

				const isActive = subscription.status === "active";
				const plan = isActive ? SubscriptionPlan.PAID : SubscriptionPlan.FREE;

				await updateUserPlan(subscription.customer as string, plan);
				break;
			}

			case "customer.subscription.deleted": {
				const subscription = event.data.object;

				await updateUserPlan(
					subscription.customer as string,
					SubscriptionPlan.FREE,
				);

				const user = await getUserByStripeCustomerId(
					subscription.customer as string,
				);
				if (!user) throw new Error(errors.STRIPE.CUSTOMER_NOT_FOUND);

				try {
					await sendSubscriptionCancelledEmail({
						name: user.name,
						email: user.email,
					});
				} catch (emailError) {
					logError({
						error: emailError,
						origin: "subscription_cancelled_email",
					});
				}
				break;
			}

			case "invoice.payment_succeeded": {
				const invoice = event.data.object;
				if (!invoice.customer) {
					throw new Error(errors.STRIPE.CUSTOMER_NOT_FOUND);
				}

				await updateUserPlan(invoice.customer as string, SubscriptionPlan.PAID);
				break;
			}

			case "invoice.payment_failed": {
				const invoice = event.data.object;
				if (!invoice.customer) {
					throw new Error(errors.STRIPE.CUSTOMER_NOT_FOUND);
				}

				const user = await getUserByStripeCustomerId(
					invoice.customer as string,
				);
				if (!user) throw new Error(errors.STRIPE.CUSTOMER_NOT_FOUND);

				try {
					const nextRetryDate = invoice.next_payment_attempt
						? new Date(invoice.next_payment_attempt * 1000).toLocaleDateString()
						: "in a few days";

					await sendPaymentFailedEmail(
						{
							name: user.name,
							email: user.email,
						},
						nextRetryDate,
					);
				} catch (emailError) {
					logError({
						error: emailError,
						origin: "payment_failed_email",
					});
				}
				break;
			}

			default:
				console.log(`Unhandled event type: ${event.type}`);
				break;
		}

		return NextResponse.json({
			received: true,
			event: event.type,
			processed: true,
		});
	} catch (error) {
		logError({
			error,
			origin: "stripe_webhook_error",
		});

		return NextResponse.json(
			{
				error: "Error handling webhook event",
				event: event?.type,
				eventId: event?.id,
				message: error instanceof Error ? error.message : "Unknown error",
			},
			{ status: 500 },
		);
	}
}
