import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { EmailVerificationNotice } from "@/features/auth/components/email-verification-notice";
import { EnvelopeIcon } from "@phosphor-icons/react/ssr";
import { redirect } from "next/navigation";

interface VerifyEmailPageProps {
  searchParams: Promise<{
    email?: string;
  }>;
}

export default async function VerifyEmailPage({
  searchParams,
}: VerifyEmailPageProps) {
  const { email } = await searchParams;
  if (!email) redirect("/auth/sign-in");

  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <EnvelopeIcon className="h-6 w-6 text-muted-foreground" />
          </div>
          <CardTitle className="text-2xl font-bold">
            Verify Your Email
          </CardTitle>
          <CardDescription className="text-sm text-muted-foreground">
            Complete your account setup
          </CardDescription>
        </CardHeader>
        <CardContent>
          <EmailVerificationNotice email={email} />
        </CardContent>
      </Card>
    </div>
  );
}
