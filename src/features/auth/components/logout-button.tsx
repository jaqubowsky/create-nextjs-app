"use client";

import { SignOutIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { setSentryUserContext } from "@/lib/sentry";
import { cn } from "@/lib/utils";

export function SignOutButton({
	children = "Sign Out",
	className,
}: {
	children?: React.ReactNode;
	className?: string;
}) {
	const router = useRouter();
	const [isPending, setIsPending] = useState(false);

	const handleSignOut = async () => {
		setIsPending(true);
		try {
			await authClient.signOut({
				fetchOptions: {
					onSuccess: () => {
						setSentryUserContext(null);
						router.push("/auth/sign-in");
					},
				},
			});
		} finally {
			setIsPending(false);
		}
	};

	return (
		<Button
			onClick={() => void handleSignOut()}
			className={cn(className)}
			disabled={isPending}
		>
			{isPending ? (
				<SpinnerGapIcon className="animate-spin" />
			) : (
				<SignOutIcon />
			)}
			{isPending ? "Signing out..." : children}
		</Button>
	);
}
