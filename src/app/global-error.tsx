"use client";

import { ErrorDisplay } from "@/components/error-display";

export default function GlobalError({
	error,
	reset,
}: {
	error: Error & { digest?: string };
	reset: () => void;
}) {
	return (
		<html lang="en">
			<body>
				<div className="min-h-screen min-w-screen flex items-center justify-center bg-background p-4">
					<ErrorDisplay
						error={error}
						reset={reset}
						title="Application Error"
						description="A critical error occurred that affected the entire application. We apologize for the inconvenience."
						className="bg-background"
					/>
				</div>
			</body>
		</html>
	);
}
