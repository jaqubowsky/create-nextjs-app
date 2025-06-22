import * as Sentry from "@sentry/nextjs";
import type { User } from "@/drizzle/schema";
import { env } from "./env";

export function setSentryUserContext(user: Partial<User> | null) {
	Sentry.setUser(user);
}

export function logError({
	error,
	origin,
}: {
	error: unknown;
	origin: string;
}): string {
	if (env.NODE_ENV === "development") {
		console.error(error);
	}

	return Sentry.captureException(error, {
		level: "error",
		tags: {
			origin,
		},
	});
}

export function logWarning({
	error,
	origin,
}: {
	error: unknown;
	origin: string;
}): string {
	if (env.NODE_ENV === "development") {
		console.warn(error);
	}

	return Sentry.captureException(error, {
		level: "warning",
		tags: {
			origin,
		},
	});
}
