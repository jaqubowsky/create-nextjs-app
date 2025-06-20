import * as z from "zod/v4";

export const loginSchema = z.object({
  email: z.email({ error: "Please enter a valid address email" }),
  password: z.string().min(1, { error: "Password is required" }),
});
export type LoginFormValues = z.infer<typeof loginSchema>;

export const registerSchema = z
  .object({
    name: z.string().min(1, { error: "Name is required" }),
    email: z.email({ error: "Please enter a valid email address" }),
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type RegisterFormValues = z.infer<typeof registerSchema>;

export const forgotPasswordSchema = z.object({
  email: z.email({ error: "Please enter a valid email address" }),
});
export type ForgotPasswordFormValues = z.infer<typeof forgotPasswordSchema>;

export const resetPasswordSchema = z
  .object({
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

export type ResetPasswordFormValues = z.infer<typeof resetPasswordSchema>;

export const resetPasswordWithTokenSchema = z
  .object({
    password: z
      .string()
      .min(8, { error: "Password must be at least 8 characters long" }),
    confirmPassword: z.string(),
    token: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
export type ResetPasswordWithTokenFormValues = z.infer<
  typeof resetPasswordWithTokenSchema
>;
