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
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { getUserByEmail } from "./queries";

export const loginAction = publicActionWithLimiter(authRateLimiter, "auth")
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
).action(async () => {
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

    return { success: true };
  });
