import { CrownIcon } from "@phosphor-icons/react/ssr";
import clsx from "clsx";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SUBSCRIPTION_PLAN, type SubscriptionPlan } from "@/drizzle/schema";

interface WelcomeCardProps {
  userEmail: string;
  userPlan: SubscriptionPlan;
}

export function WelcomeCard({ userEmail, userPlan }: WelcomeCardProps) {
  const isPaidUser = userPlan === SUBSCRIPTION_PLAN.PAID;

  return (
    <Card className="shadow-lg border-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center flex items-center justify-center gap-2">
          {isPaidUser && <CrownIcon className="size-6 text-yellow-500" />}
          Welcome Back
        </CardTitle>
        <CardDescription className="text-center">
          You are logged in as {userEmail} with{" "}
          <span
            className={clsx(
              "font-semibold",
              isPaidUser ? "text-yellow-600" : "text-gray-600",
            )}
          >
            {userPlan}
          </span>{" "}
          plan
        </CardDescription>
      </CardHeader>
    </Card>
  );
}
