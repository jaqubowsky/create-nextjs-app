import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SignOutButton } from "@/features/auth/components/logout-button";
import { RefreshUserButton } from "@/features/auth/components/refresh-user-button";
import { auth } from "@/lib/auth";
import { getUserById } from "@/server/user/queries";
import { headers } from "next/headers";
import { unauthorized } from "next/navigation";

export default async function Home() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });
  if (!session) unauthorized();

  // example of using cache
  const user = await getUserById(session.user.id);

  return (
    <Card className="mx-auto w-full max-w-md shadow-lg border-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Welcome Back
        </CardTitle>
        <CardDescription className="text-center">
          You are logged in as {user.email} with {user.plan} plan
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4 flex flex-col items-center">
        <SignOutButton>Sign out</SignOutButton>
        <RefreshUserButton>Refresh user</RefreshUserButton>
      </CardContent>
    </Card>
  );
}
