import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";
export const env = createEnv({
  isServer: typeof window === "undefined",

  server: {
    DATABASE_URL: z.string().url(),
    BETTER_AUTH_URL: z.string().url(),
  },

  shared: {},

  experimental__runtimeEnv: {},
});
