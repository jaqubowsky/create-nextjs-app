"use client";

import { CreditCardIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { getErrorMessage } from "@/lib/get-error-message";
import { cn } from "@/lib/utils";
import { createCheckoutSessionAction } from "../actions";

interface PurchaseButtonProps {
	children?: React.ReactNode;
	className?: string;
	variant?: "default" | "outline" | "secondary";
	size?: "default" | "sm" | "lg";
}

export function PurchaseButton({
	children = "Upgrade to Pro",
	className,
	variant = "default",
	size = "default",
}: PurchaseButtonProps) {
	const { execute, isPending } = useAction(createCheckoutSessionAction, {
		onSuccess: ({ data }) => {
			if (data?.url) {
				window.location.href = data.url;
			} else {
				toast.error("Failed to create checkout session");
			}
		},
		onError: (error) => {
			toast.error(getErrorMessage(error.error.serverError));
		},
	});

	const handlePurchase = () => {
		execute();
	};

	return (
		<Button
			onClick={handlePurchase}
			disabled={isPending}
			variant={variant}
			size={size}
			className={cn(
				"relative overflow-hidden transition-all duration-200",
				"hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]",
				"disabled:hover:scale-100 disabled:hover:shadow-none",
				className,
			)}
		>
			<div className="flex items-center gap-2">
				{isPending ? (
					<SpinnerGapIcon className="size-4 animate-spin" />
				) : (
					<CreditCardIcon className="size-4" />
				)}
				<span>{isPending ? "Processing..." : children}</span>
			</div>

			<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full transition-transform duration-700 group-hover:translate-x-full" />
		</Button>
	);
}
