import { db } from "@/drizzle/db";
import * as schema from "@/drizzle/schema";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { env } from "./env";
import { hashPassword, verifyPassword } from "./hash";
import { transporter } from "./mailer";

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
    schema: {
      ...schema,
      user: schema.user,
    },
  }),
  secret: env.BETTER_AUTH_SECRET,
  baseUrl: env.BETTER_AUTH_URL,
  emailAndPassword: {
    enabled: true,
    autoSignIn: true,
    requireEmailVerification: true,
    sendResetPassword: async ({ user, url }) => {
      await transporter.sendMail({
        from: env.EMAIL_FROM,
        to: user.email,
        subject: "Reset your password",
        text: `Click the link to reset your password: ${url}`,
      });
    },
    password: {
      hash: hashPassword,
      verify: verifyPassword,
    },
  },
  socialProviders: {
    google: {
      enabled: true,
      prompt: "select_account",
      clientId: env.GOOGLE_CLIENT_ID,
      clientSecret: env.GOOGLE_CLIENT_SECRET,
    },
  },
  emailVerification: {
    enabled: true,
    sendOnSignUp: true,
    autoSignInAfterVerification: true,
    expiresIn: 3600, // 1 hour
    sendVerificationEmail: async ({ user, url }) => {
      transporter.sendMail({
        from: env.EMAIL_FROM,
        to: user.email,
        subject: "Verify your email address",
        text: `Click the link to verify your email: ${url}`,
      });
    },
  },
  plugins: [nextCookies()],
});
