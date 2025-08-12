import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignOutButton } from "@/features/auth/components/logout-button";

export function AccountManagementCard() {
  return (
    <Card className="shadow-lg border-0">
      <CardHeader>
        <CardTitle className="text-lg text-center font-semibold">
          Account Management
        </CardTitle>
        <CardDescription className="text-center">
          Manage your account settings and preferences
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col items-center">
        <SignOutButton className="w-full max-w-xs">Sign Out</SignOutButton>
      </CardContent>
    </Card>
  );
}
