import { CrownIcon } from "@phosphor-icons/react/ssr";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { BillingPortalButton } from "@/features/subscriptions/components/billing-portal-button";

export function PremiumCard() {
	return (
		<Card className="shadow-lg border-0 bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-950/20 dark:to-orange-950/20">
			<CardHeader className="text-center space-y-4">
				<div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-yellow-500 to-orange-600">
					<CrownIcon className="h-8 w-8 text-white" />
				</div>
				<CardTitle className="text-2xl font-bold">Premium Member</CardTitle>
				<CardDescription className="text-base">
					You have access to all premium features
				</CardDescription>
			</CardHeader>
			<CardContent className="space-y-6">
				<div className="text-center space-y-2">
					<p className="text-sm text-gray-600 dark:text-gray-300">
						Manage your subscription, update payment methods, or view your
						billing history
					</p>
				</div>

				<div className="flex justify-center">
					<BillingPortalButton size="lg" className="w-full max-w-xs">
						Manage Subscription
					</BillingPortalButton>
				</div>
			</CardContent>
		</Card>
	);
}
