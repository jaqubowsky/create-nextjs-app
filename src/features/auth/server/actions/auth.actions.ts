"use server";

import { loginSchema, registerSchema } from "@/features/auth/schemas";
import { auth } from "@/lib/auth";
import { errors } from "@/lib/errors";
import { authRateLimiter } from "@/lib/rate-limit";
import { ActionError, publicActionWithLimiter } from "@/lib/safe-action";
import { headers } from "next/headers";
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
      throw new ActionError(errors.AUTH.USER_NOT_FOUND);
    }

    return { success: true };
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
