"use server";

import {
  forgotPasswordSchema,
  loginSchema,
  registerSchema,
  resetPasswordWithTokenSchema,
} from "@/features/auth/schemas";
import { auth } from "@/lib/auth";
import { errors } from "@/lib/errors";
import { authRateLimiter } from "@/lib/rate-limit";
import { ActionError, publicActionWithLimiter } from "@/lib/safe-action";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getUserByEmail } from "../db/auth.db";

export const loginAction = publicActionWithLimiter(authRateLimiter, "auth")
  .schema(loginSchema)
  .action(async ({ parsedInput: { email, password } }) => {
    const result = await auth.api.signInEmail({
      body: {
        email,
        password,
      },
      asResponse: true,
      headers: await headers(),
    });

    if (result.status === 401) {
      throw new ActionError(errors.AUTH.INVALID_CREDENTIALS);
    }

    if (result.status === 403) {
      throw new ActionError(errors.AUTH.EMAIL_NOT_VERIFIED);
    }

    if (result.status === 404) {
      return { success: true };
    }

    if (!result.ok) throw new ActionError(errors.AUTH.INVALID_CREDENTIALS);

    return { success: true };
  });

export const googleLoginAction = publicActionWithLimiter(
  authRateLimiter,
  "auth"
).action(async () => {
  const result = await auth.api.signInSocial({
    body: {
      provider: "google",
    },
    asResponse: true,
    headers: await headers(),
  });

  if (!result.ok) throw new ActionError(errors.AUTH.INVALID_CREDENTIALS);

  const json = await result.json();
  if (!json.url) throw new ActionError(errors.AUTH.INVALID_CREDENTIALS);

  return redirect(json.url);
});

export const registerAction = publicActionWithLimiter(authRateLimiter, "auth")
  .schema(registerSchema)
  .action(async ({ parsedInput: { name, email, password } }) => {
    const existingUser = await getUserByEmail(email);
    if (existingUser) throw new ActionError(errors.AUTH.EMAIL_IN_USE);

    await auth.api.signUpEmail({
      body: {
        name,
        email,
        password,
      },
      headers: await headers(),
    });

    return { success: true, message: "Registration successful!" };
  });

export const forgotPasswordAction = publicActionWithLimiter(
  authRateLimiter,
  "auth"
)
  .schema(forgotPasswordSchema)
  .action(async ({ parsedInput: { email } }) => {
    const result = await auth.api.forgetPassword({
      body: {
        email,
        redirectTo: "/auth/forgot-password",
      },
      asResponse: true,
      headers: await headers(),
    });

    if (result.status === 404) return { success: true };
    if (!result.ok) throw new ActionError(errors.AUTH.FORGOT_PASSWORD_FAILED);

    return { success: true };
  });

export const resetPasswordAction = publicActionWithLimiter(
  authRateLimiter,
  "auth"
)
  .schema(resetPasswordWithTokenSchema)
  .action(async ({ parsedInput: { password, token } }) => {
    const result = await auth.api.resetPassword({
      body: {
        newPassword: password,
        token,
      },
      asResponse: true,
      headers: await headers(),
    });

    if (result.status === 400) {
      throw new ActionError(errors.AUTH.INVALID_RESET_TOKEN);
    }

    if (!result.ok) {
      throw new ActionError(errors.AUTH.RESET_PASSWORD_FAILED);
    }

    return { success: true };
  });
