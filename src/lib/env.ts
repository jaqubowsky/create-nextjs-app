import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod/v4";

export const env = createEnv({
	isServer: typeof window === "undefined",
	skipValidation: process.env.SKIP_ENV_CHECK === "true",

	server: {
		DATABASE_URL: z.url(),
		GOOGLE_CLIENT_ID: z.string(),
		GOOGLE_CLIENT_SECRET: z.string(),
		BETTER_AUTH_SECRET: z.string(),

		EMAIL_SERVER_HOST: z.string(),
		EMAIL_SERVER_PORT: z.string(),
		EMAIL_SERVER_USER: z.string(),
		EMAIL_SERVER_PASSWORD: z.string(),
		EMAIL_FROM: z.string(),
		EMAIL_SERVICE: z.string(),

		STRIPE_WEBHOOK_SECRET: z.string(),
		STRIPE_SECRET_KEY: z.string(),
		STRIPE_API_VER: z.string(),
		STRIPE_PRICE_ID: z.string(),

		SENTRY_AUTH_TOKEN: z.string(),
	},

	shared: {
		NODE_ENV: z.enum(["development", "production"]),
		BETTER_AUTH_URL: z.string(),

		SENTRY_DSN: z.string(),
		SENTRY_PROJECT: z.string(),
		SENTRY_ORG: z.string(),

		APP_NAME: z.string(),
		COMPANY_NAME: z.string(),
	},

	experimental__runtimeEnv: {
		NODE_ENV: process.env.NODE_ENV,
		BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,

		SENTRY_DSN: process.env.NEXT_PUBLIC_SENTRY_DSN,
		SENTRY_PROJECT: process.env.NEXT_PUBLIC_SENTRY_PROJECT,
		SENTRY_ORG: process.env.NEXT_PUBLIC_SENTRY_ORG,

		APP_NAME: process.env.NEXT_PUBLIC_APP_NAME,
		COMPANY_NAME: process.env.NEXT_PUBLIC_COMPANY_NAME,
	},
});
