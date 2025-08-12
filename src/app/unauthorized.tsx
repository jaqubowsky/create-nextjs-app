"use client";

import { GoogleLogoIcon, LockIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { GoogleLoginButton } from "@/features/auth/components/google-login-button";
import { LoginForm } from "@/features/auth/components/login-form";

export default function Unauthorized() {
  return (
    <div className="min-h-screen min-w-screen flex items-center justify-center bg-background p-4">
      <Card className="w-full max-w-md shadow-lg border-0">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
            <LockIcon className="h-6 w-6 text-muted-foreground" />
          </div>
          <h2 className="text-2xl font-bold">Access Denied</h2>
          <p className="text-sm text-muted-foreground">
            You need to sign in to access this page.
          </p>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <GoogleLoginButton className="w-full py-2 transition-all hover:shadow-md">
              <GoogleLogoIcon className="mr-2 h-4 w-4" />
              <span>Continue with Google</span>
            </GoogleLoginButton>

            <div className="relative flex items-center justify-center space-x-2 py-2">
              <div className="h-px flex-1 bg-gray-200" />
              <span className="text-xs text-gray-500">OR</span>
              <div className="h-px flex-1 bg-gray-200" />
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
