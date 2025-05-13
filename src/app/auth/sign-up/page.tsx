import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { GoogleLoginButton } from "@/features/auth/components/google-login-button";
import { RegisterForm } from "@/features/auth/components/register-form";
import Link from "next/link";

export default function RegisterPage() {
  return (
    <Card className="mx-auto w-full max-w-md shadow-lg border-0">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl font-bold text-center">
          Create an Account
        </CardTitle>
        <CardDescription className="text-center">
          Enter your information to get started
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <GoogleLoginButton className="w-full py-2 transition-all hover:shadow-md">
            <Icon name="google" className="mr-2" />
            <span>Continue with Google</span>
          </GoogleLoginButton>

          <div className="relative flex items-center justify-center space-x-2 py-2">
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            <span className="text-xs text-gray-500 dark:text-gray-400">OR</span>
            <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
          </div>
        </div>

        <RegisterForm />

        <div className="text-center text-sm">
          Already have an account?{" "}
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
