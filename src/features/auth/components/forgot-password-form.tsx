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
import { forgotPasswordAction } from "@/features/auth/actions";
import {
	type ForgotPasswordFormValues,
	forgotPasswordSchema,
} from "@/features/auth/schemas";
import { getErrorMessage } from "@/lib/get-error-message";

export function ForgotPasswordForm() {
	const form = useForm<ForgotPasswordFormValues>({
		resolver: zodResolver(forgotPasswordSchema),
		defaultValues: {
			email: "",
		},
	});

	const { execute, isPending } = useAction(forgotPasswordAction, {
		onSuccess: () => {
			toast.success(
				"Check your email for a password reset link. If you don't see it, check your spam folder.",
			);
			form.reset();
		},
		onError: (err) => {
			toast.error(getErrorMessage(err.error.serverError));
		},
	});

	const handleSubmit = form.handleSubmit(execute);

	return (
		<div className="space-y-4">
			<Form {...form}>
				<form onSubmit={(e) => void handleSubmit(e)} className="space-y-4">
					<FormField
						control={form.control}
						name="email"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Email</FormLabel>
								<FormControl>
									<Input
										type="email"
										placeholder="name@example.com"
										{...field}
										disabled={isPending}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<Button type="submit" className="w-full" disabled={isPending}>
						{isPending ? "Sending..." : "Send Reset Link"}
					</Button>
				</form>
			</Form>
		</div>
	);
}
