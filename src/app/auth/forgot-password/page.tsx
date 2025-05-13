import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ForgotPasswordForm } from "@/features/auth/components/forgot-password-form";
import Link from "next/link";
import { Suspense } from "react";

export default function ForgotPasswordPage() {
  return (
    <Card className="mx-auto w-full max-w-md shadow-lg border-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Reset Your Password
        </CardTitle>
        <CardDescription className="text-center">
          Enter your email to receive a password reset link
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Suspense fallback={<></>}>
          <ForgotPasswordForm />
        </Suspense>

        <div className="text-center text-sm">
          Remember your password?{" "}
          <Link
            href="/auth/sign-in"
            className="font-medium text-primary hover:underline"
          >
            Sign in instead
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
