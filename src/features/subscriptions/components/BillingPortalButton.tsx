"use client";

import { GearIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { getErrorMessage } from "@/lib/get-error-message";
import { cn } from "@/lib/utils";
import { openBillingPortalAction } from "../actions";

interface BillingPortalButtonProps {
	children?: React.ReactNode;
	className?: string;
	variant?: "default" | "outline" | "secondary";
	size?: "default" | "sm" | "lg";
}

export function BillingPortalButton({
	children = "Manage Billing",
	className,
	variant = "outline",
	size = "default",
}: BillingPortalButtonProps) {
	const { execute, isPending } = useAction(openBillingPortalAction, {
		onSuccess: ({ data }) => {
			if (data?.url) {
				window.location.href = data.url;
			} else {
				toast.error("Failed to open billing portal");
			}
		},
		onError: (error) => {
			toast.error(getErrorMessage(error.error.serverError));
		},
	});

	const handleOpenPortal = () => {
		execute();
	};

	return (
		<Button
			onClick={handleOpenPortal}
			disabled={isPending}
			variant={variant}
			size={size}
			className={cn(
				"relative overflow-hidden transition-all duration-200",
				"hover:shadow-md hover:scale-[1.01] active:scale-[0.99]",
				"disabled:hover:scale-100 disabled:hover:shadow-none",
				className,
			)}
		>
			<div className="flex items-center gap-2">
				{isPending ? (
					<SpinnerGapIcon className="size-4 animate-spin" />
				) : (
					<GearIcon className="size-4" />
				)}
				<span>{isPending ? "Opening..." : children}</span>
			</div>
		</Button>
	);
}
