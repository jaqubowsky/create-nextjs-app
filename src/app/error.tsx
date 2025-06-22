"use client";

import { ErrorDisplay } from "@/components/error-display";

export default function ErrorBoundary({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<ErrorDisplay
			error={error}
			reset={reset}
			title="Page Error"
			description="Something went wrong while loading this page. Please try again or navigate to another page."
			showHomeButton={true}
		/>
	);
}
