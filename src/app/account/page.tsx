import { headers } from "next/headers";
import { unauthorized } from "next/navigation";
import { AccountManagementCard } from "@/components/AccountManagementCard";
import { PremiumCard } from "@/components/PremiumCard";
import { WelcomeCard } from "@/components/WelcomeCard";
import { SubscriptionPlan } from "@/drizzle/schema";
import {
	PaywallCard,
	SubscriptionSuccessCard,
} from "@/features/subscriptions/components";
import { auth } from "@/lib/auth";

export default async function AccountPage() {
	const session = await auth.api.getSession({
		headers: await headers(),
	});
	if (!session) unauthorized();

	const isPaidUser = session.user.plan === SubscriptionPlan.PAID;

	return (
		<div className="w-screen h-screen p-4 flex items-center justify-center">
			<div className="w-full max-w-2xl space-y-6">
				<WelcomeCard
					userEmail={session.user.email}
					userPlan={session.user.plan}
				/>

				<SubscriptionSuccessCard />

				{!isPaidUser ? <PaywallCard /> : <PremiumCard />}

				<AccountManagementCard />
			</div>
		</div>
	);
}
