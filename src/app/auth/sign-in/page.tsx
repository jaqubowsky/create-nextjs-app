import { GoogleLogoIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { GoogleLoginButton } from "@/features/auth/components/google-login-button";
import { LoginForm } from "@/features/auth/components/login-form";

export default function LoginPage() {
	return (
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
						<GoogleLogoIcon className="mr-2 h-4 w-4" />
						<span>Continue with Google</span>
					</GoogleLoginButton>

					<div className="relative flex items-center justify-center space-x-2 py-2">
						<div className="h-px flex-1 bg-gray-200"></div>
						<span className="text-xs text-gray-500">OR</span>
						<div className="h-px flex-1 bg-gray-200"></div>
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
	);
}
