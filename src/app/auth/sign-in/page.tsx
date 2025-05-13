import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { GoogleLoginButton } from "@/features/auth/components/google-login-button";
import { LoginForm } from "@/features/auth/components/login-form";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-950 p-4">
      <Card className="mx-auto w-full max-w-md shadow-lg border-0">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold text-center">
            Welcome Back
          </CardTitle>
          <CardDescription className="text-center">
            Sign in to your account
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
              <span className="text-xs text-gray-500 dark:text-gray-400">
                OR
              </span>
              <div className="h-px flex-1 bg-gray-200 dark:bg-gray-800"></div>
            </div>
          </div>

          <LoginForm />

          <div className="space-y-2 text-center text-sm">
            <Link
              href="/auth/forgot-password"
              className="text-primary hover:underline block"
            >
              Forgot password?
            </Link>
            <div>
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/sign-up"
                className="font-medium text-primary hover:underline"
              >
                Create account
              </Link>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
