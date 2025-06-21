// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import { env } from "@/lib/env";
import * as Sentry from "@sentry/nextjs";
import { SENTRY_CONFIG } from "./config";

Sentry.init({
  dsn: env.SENTRY_DSN,

  // Define how likely traces are sampled. Adjust this value in production, or use tracesSampler for greater control.
  tracesSampleRate:
    env.NODE_ENV === "production"
      ? SENTRY_CONFIG.TRACES_SAMPLE_RATE.PRODUCTION
      : SENTRY_CONFIG.TRACES_SAMPLE_RATE.DEVELOPMENT,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,

  environment: env.NODE_ENV,
  enabled: env.NODE_ENV === "production",

  // Configure which transactions to trace
  tracesSampler: (samplingContext) => {
    // Sample all database operations and external API calls
    if (
      samplingContext.name?.includes("db") ||
      samplingContext.name?.includes("stripe") ||
      samplingContext.name?.includes("email")
    ) {
      return 1.0;
    }

    // Sample fewer routine operations in production
    return env.NODE_ENV === "production"
      ? SENTRY_CONFIG.TRACES_SAMPLE_RATE.PRODUCTION
      : SENTRY_CONFIG.TRACES_SAMPLE_RATE.DEVELOPMENT;
  },

  // Additional error capturing configuration
  attachStacktrace: SENTRY_CONFIG.ATTACH_STACKTRACE,
});
