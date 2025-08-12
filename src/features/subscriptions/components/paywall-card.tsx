import { StarIcon } from "@phosphor-icons/react/ssr";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PurchaseButton } from "./purchase-button";

export function PaywallCard() {
  return (
    <Card className="shadow-lg border-0 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20">
      <CardHeader className="text-center space-y-4">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600">
          <StarIcon className="h-8 w-8 text-white" />
        </div>
        <CardTitle className="text-2xl font-bold">
          Unlock Premium Features
        </CardTitle>
        <CardDescription className="text-base">
          Upgrade to Pro and get access to all premium features
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900 dark:text-gray-100">
            What&apos;s included:
          </h3>
          <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Unlimited access to all features
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Priority customer support
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              Advanced analytics and insights
            </li>
            <li className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 rounded-full bg-blue-500" />
              No ads or limitations
            </li>
          </ul>
        </div>

        <div className="flex justify-center">
          <PurchaseButton size="lg" className="w-full max-w-xs">
            Get your 14 days free trial
          </PurchaseButton>
        </div>
      </CardContent>
    </Card>
  );
}
