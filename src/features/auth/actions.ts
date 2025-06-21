"use server";

import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordWithTokenSchema,
} from "@/features/auth/schemas";
import { auth } from "@/lib/auth";
import { ActionError, errors } from "@/lib/errors";
import { authRateLimiter } from "@/lib/rate-limit";
import { publicActionWithLimiter } from "@/lib/safe-action";
import { timeout } from "@/lib/timeout";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { revalidateUserCache } from "./cache";
import { getUserByEmail } from "./queries";

export const loginAction = publicActionWithLimiter(authRateLimiter, "auth")
  .metadata({ actionName: "loginAction" })
  .inputSchema(loginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const response = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      asResponse: true,
      headers: await headers(),
    });

    if (!response.ok) throw new ActionError(errors.AUTH.AUTHENTICATION_FAILED);

    return { success: true };
  });

export const googleLoginAction = publicActionWithLimiter(
  authRateLimiter,
  "auth"
)
  .metadata({ actionName: "googleLoginAction" })
  .action(async () => {
    const response = await auth.api.signInSocial({
      body: {
        provider: "google",
      },
      asResponse: true,
      headers: await headers(),
    });

    if (!response.ok) throw new ActionError(errors.AUTH.AUTHENTICATION_FAILED);

    const json = await response.json();
    if (!json.url) throw new ActionError(errors.AUTH.AUTHENTICATION_FAILED);

    return redirect(json.url);
  });

export const registerAction = publicActionWithLimiter(authRateLimiter, "auth")
  .metadata({ actionName: "registerAction" })
  .inputSchema(registerSchema)
  .action(async ({ parsedInput: { name, email, password } }) => {
    const existingUser = await getUserByEmail(email);
    if (existingUser) throw new ActionError(errors.AUTH.EMAIL_IN_USE);

    const response = await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
      asResponse: true,
      headers: await headers(),
    });

    if (!response.ok) throw new ActionError(errors.AUTH.REGISTRATION_FAILED);

    return { success: true, message: "Registration successful!" };
  });

export const forgotPasswordAction = publicActionWithLimiter(
  authRateLimiter,
  "auth"
)
  .metadata({ actionName: "forgotPasswordAction" })
  .inputSchema(forgotPasswordSchema)
  .action(async ({ parsedInput: { email } }) => {
    const response = await auth.api.forgetPassword({
      body: {
        email,
        redirectTo: "/auth/forgot-password",
      },
      asResponse: true,
      headers: await headers(),
    });

    if (response.status === 404) return { success: true };
    if (!response.ok) throw new ActionError(errors.AUTH.FORGOT_PASSWORD_FAILED);

    return { success: true };
  });

export const resetPasswordAction = publicActionWithLimiter(
  authRateLimiter,
  "auth"
)
  .metadata({ actionName: "resetPasswordAction" })
  .inputSchema(resetPasswordWithTokenSchema)
  .action(async ({ parsedInput: { password, token } }) => {
    const response = await auth.api.resetPassword({
      body: {
        newPassword: password,
        token,
      },
      asResponse: true,
      headers: await headers(),
    });

    if (response.status === 400) {
      throw new ActionError(errors.AUTH.INVALID_RESET_TOKEN);
    }

    if (!response.ok) {
      throw new ActionError(errors.AUTH.RESET_PASSWORD_FAILED);
    }

    timeout(1500).then(() => redirect("/auth/sign-in"));
  });

export const refreshUserAction = publicActionWithLimiter(
  authRateLimiter,
  "auth"
)
  .metadata({ actionName: "refreshUserAction" })
  .action(async () => {
    const response = await auth.api.getSession({
      asResponse: true,
      headers: await headers(),
    });

    if (!response.ok) throw new ActionError(errors.AUTH.UNAUTHORIZED);

    const json = await response.json();
    if (!json.user) throw new ActionError(errors.AUTH.UNAUTHORIZED);

    revalidateUserCache(json.user.id);

    return { success: true };
  });
