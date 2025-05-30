"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  forgotPasswordSchema,
  resetPasswordSchema,
} from "@/features/auth/schemas/auth.schemas";
import {
  forgotPasswordAction,
  resetPasswordAction,
} from "@/features/auth/server/actions/auth.actions";
import { zodResolver } from "@hookform/resolvers/zod";
import { useHookFormAction } from "@next-safe-action/adapter-react-hook-form/hooks";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export function ForgotPasswordForm() {
  const searchParams = useSearchParams();
  const token = searchParams.get("token");
  const router = useRouter();

  const {
    form: requestForm,
    action: requestAction,
    handleSubmitWithAction: handleRequestSubmit,
  } = useHookFormAction(
    forgotPasswordAction,
    zodResolver(forgotPasswordSchema),
    {
      actionProps: {
        onSuccess: () => {
          toast.success(
            "Check your email for a password reset link. If you don't see it, check your spam folder."
          );
          requestForm.reset();
        },
        onError: (err) => {
          const errorMessage =
            err.error.serverError || "Failed to send reset email";
          toast.error(errorMessage.toString());
        },
      },
      formProps: {
        defaultValues: {
          email: "",
        },
      },
    }
  );

  const {
    form: resetForm,
    action: resetAction,
    handleSubmitWithAction: handleResetSubmit,
  } = useHookFormAction(
    (data) => resetPasswordAction({ ...data, token: token || "" }),
    zodResolver(resetPasswordSchema),
    {
      actionProps: {
        onSuccess: () => {
          toast.success(
            "Your password has been successfully reset! You can now sign in."
          );
          setTimeout(() => {
            router.push("/auth/sign-in");
          }, 1500);
        },
        onError: (err) => {
          const errorMessage =
            err.error.serverError || "Failed to reset password";
          toast.error(errorMessage.toString());
        },
      },
      formProps: {
        defaultValues: {
          password: "",
          confirmPassword: "",
        },
      },
    }
  );

  if (token) {
    return (
      <div className="space-y-4">
        <Form {...resetForm}>
          <form onSubmit={handleResetSubmit} className="space-y-4">
            <FormField
              control={resetForm.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>New Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Enter your new password"
                      {...field}
                      disabled={resetAction.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={resetForm.control}
              name="confirmPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="Confirm your new password"
                      {...field}
                      disabled={resetAction.isPending}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button
              type="submit"
              className="w-full"
              disabled={resetAction.isPending}
            >
              {resetAction.isPending ? "Resetting..." : "Reset Password"}
            </Button>
          </form>
        </Form>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <Form {...requestForm}>
        <form onSubmit={handleRequestSubmit} className="space-y-4">
          <FormField
            control={requestForm.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="name@example.com"
                    {...field}
                    disabled={requestAction.isPending}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full"
            disabled={requestAction.isPending}
          >
            {requestAction.isPending ? "Sending..." : "Send Reset Link"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
