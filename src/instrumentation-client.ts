// This file configures the initialization of Sentry on the client.
// The added config here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";
import { SENTRY_CONFIG } from "./config";
import { env } from "./lib/env";

Sentry.init({
	dsn: env.SENTRY_DSN,

	// Add optional integrations for additional features
	integrations: [
		Sentry.replayIntegration({
			// Only capture replays on errors in production to save bandwidth
			maskAllText: env.NODE_ENV === "production",
			blockAllMedia: env.NODE_ENV === "production",
		}),
	],

	// Use centralized config for consistent sampling rates
	tracesSampleRate:
		env.NODE_ENV === "production"
			? SENTRY_CONFIG.TRACES_SAMPLE_RATE.PRODUCTION
			: SENTRY_CONFIG.TRACES_SAMPLE_RATE.DEVELOPMENT,

	// Define how likely Replay events are sampled.
	// Lower rates in production to control costs
	replaysSessionSampleRate: env.NODE_ENV === "production" ? 0.01 : 0.1,

	// Capture replays on all errors
	replaysOnErrorSampleRate: 1.0,

	enabled: env.NODE_ENV === "production",
	environment: env.NODE_ENV,

	// Setting this option to true will print useful information to the console while you're setting up Sentry.
	debug: false,
});

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;
