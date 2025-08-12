import { headers } from "next/headers";
import { unauthorized } from "next/navigation";
import { AccountManagementCard } from "@/components/account-management-card";
import { PremiumCard } from "@/components/premium-card";
import { WelcomeCard } from "@/components/welcome-card";
import { SUBSCRIPTION_PLAN } from "@/drizzle/schema";
import { PaywallCard } from "@/features/subscriptions/components/paywall-card";
import { SubscriptionSuccessCard } from "@/features/subscriptions/components/subscription-success-dialog";
import { auth } from "@/lib/auth";

export default async function AccountPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) unauthorized();

  const isPaidUser = session.user.plan === SUBSCRIPTION_PLAN.PAID;

  return (
    <div className="flex-1 p-4 flex items-center justify-center">
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
