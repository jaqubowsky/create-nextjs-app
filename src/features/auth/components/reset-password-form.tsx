"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useAction } from "next-safe-action/hooks";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { resetPasswordAction } from "@/features/auth/actions";
import {
	type ResetPasswordFormValues,
	resetPasswordSchema,
} from "@/features/auth/schemas";
import { getErrorMessage } from "@/lib/get-error-message";

interface ResetPasswordFormProps {
	token: string;
}

export function ResetPasswordForm({ token }: ResetPasswordFormProps) {
	const form = useForm<ResetPasswordFormValues>({
		resolver: zodResolver(resetPasswordSchema),
		defaultValues: {
			password: "",
			confirmPassword: "",
		},
	});

	const { execute, isPending } = useAction(resetPasswordAction, {
		onNavigation: () => {
			toast.success("Password reset successful! Redirecting to sign in...");
		},
		onError: (err) => {
			toast.error(getErrorMessage(err.error.serverError));
		},
	});

	const handleSubmit = form.handleSubmit((data) => execute({ ...data, token }));

	return (
		<div className="space-y-4">
			<Form {...form}>
				<form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
					<FormField
						control={form.control}
						name="password"
						render={({ field }) => (
							<FormItem>
								<FormLabel>New Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Enter your new password"
										{...field}
										disabled={isPending}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<FormField
						control={form.control}
						name="confirmPassword"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Confirm Password</FormLabel>
								<FormControl>
									<Input
										type="password"
										placeholder="Confirm your new password"
										{...field}
										disabled={isPending}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" className="w-full" disabled={isPending}>
						{isPending ? "Resetting..." : "Reset Password"}
					</Button>
				</form>
			</Form>
		</div>
	);
}
