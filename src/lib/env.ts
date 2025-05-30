import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

export const env = createEnv({
  isServer: typeof window === "undefined",

  server: {
    DATABASE_URL: z.string().url(),
    GOOGLE_CLIENT_ID: z.string(),
    GOOGLE_CLIENT_SECRET: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    EMAIL_SERVER_HOST: z.string(),
    EMAIL_SERVER_PORT: z.string(),
    EMAIL_SERVER_USER: z.string(),
    EMAIL_SERVER_PASSWORD: z.string(),
    EMAIL_FROM: z.string(),
  },

  shared: {
    NODE_ENV: z.enum(["development", "production"]),
    BETTER_AUTH_URL: z.string(),
  },

  experimental__runtimeEnv: {
    NODE_ENV: process.env.NEXT_PUBLIC_NODE_ENV,
    BETTER_AUTH_URL: process.env.NEXT_PUBLIC_BETTER_AUTH_URL,
  },
});
