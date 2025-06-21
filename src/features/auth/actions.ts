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
import { z } from "zod";
import { revalidateUserCache } from "../../server/user/cache";
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

    if (!response.ok) {
      if (response.status >= 500) {
        throw new ActionError(errors.AUTH.OAUTH_SERVER_ERROR);
      }

      if (response.status === 400) {
        throw new ActionError(errors.AUTH.OAUTH_INVALID_REQUEST);
      }

      try {
        const errorData = (await response.json()) as { error: string };

        if (errorData.error === "access_denied") {
          throw new ActionError(errors.AUTH.OAUTH_ACCESS_DENIED);
        }

        if (errorData.error === "account_exists") {
          throw new ActionError(errors.AUTH.OAUTH_ACCOUNT_EXISTS);
        }

        throw new ActionError(errors.AUTH.OAUTH_PROVIDER_ERROR);
      } catch (parseError) {
        if (parseError instanceof ActionError) {
          throw parseError;
        }
        throw new ActionError(errors.AUTH.AUTHENTICATION_FAILED);
      }
    }

    const json = (await response.json()) as { url: string };
    if (!json.url) throw new ActionError(errors.AUTH.OAUTH_PROVIDER_ERROR);

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

    redirect(`/auth/verify-email?email=${encodeURIComponent(email)}`);
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

    void timeout(1500).then(() => redirect("/auth/sign-in"));
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

    const json = (await response.json()) as {
      user: { id: string } | null;
      session: object | null;
    };
    if (!json.user) throw new ActionError(errors.AUTH.UNAUTHORIZED);

    revalidateUserCache(json.user.id);

    return { success: true };
  });

export const resendVerificationEmailAction = publicActionWithLimiter(
  authRateLimiter,
  "auth"
)
  .metadata({ actionName: "resendVerificationEmailAction" })
  .inputSchema(z.object({ email: z.string().email() }))
  .action(async ({ parsedInput: { email } }) => {
    const user = await getUserByEmail(email);
    if (!user) {
      return {
        success: true,
        message: "If the email exists, a verification link has been sent.",
      };
    }

    if (user.emailVerified) throw new ActionError(errors.AUTH.EMAIL_VERIFIED);

    const response = await auth.api.sendVerificationEmail({
      body: { email },
      asResponse: true,
      headers: await headers(),
    });

    if (!response.ok) {
      throw new ActionError(errors.AUTH.SEND_VERIFICATION_EMAIL_FAILED);
    }

    return {
      success: true,
      message: "Verification email sent! Please check your inbox.",
    };
  });
