import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { nextCookies } from "better-auth/next-js";
import { customSession } from "better-auth/plugins";
import { AUTH_CONFIG } from "@/config";
import { db } from "@/drizzle/db";
import * as schema from "@/drizzle/schema";
import { getUserById } from "@/server/user/queries";
import { sendResetPasswordEmail, sendVerifyEmailEmail } from "./email-service";
import { env } from "./env";
import { hashPassword, verifyPassword } from "./hash";

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
			await sendResetPasswordEmail(
				{
					name: user.name,
					email: user.email,
				},
				url,
			);
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
		expiresIn: AUTH_CONFIG.EMAIL_VERIFICATION_EXPIRY,
		sendVerificationEmail: async ({ user, url }) => {
			await sendVerifyEmailEmail(
				{
					name: user.name,
					email: user.email,
				},
				url,
			);
		},
	},
	plugins: [
		nextCookies(),
		customSession(async ({ user, session }) => {
			const cachedUser = await getUserById(session.userId);
			return {
				user: {
					...user,
					...cachedUser,
				},
				session,
			};
		}),
	],
});
