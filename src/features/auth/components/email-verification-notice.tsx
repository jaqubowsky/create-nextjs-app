"use client";

import { Button } from "@/components/ui/button";
import { AUTH_CONFIG } from "@/config";
import { getErrorMessage } from "@/lib/get-error-message";
import { ClockAfternoonIcon } from "@phosphor-icons/react";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { resendVerificationEmailAction } from "../actions";

interface EmailVerificationNoticeProps {
  email: string;
}

export function EmailVerificationNotice({
  email,
}: EmailVerificationNoticeProps) {
  const [retryCountdown, setRetryCountdown] = useState<number>(
    AUTH_CONFIG.EMAIL_RESEND_COOLDOWN
  );
  const [canResend, setCanResend] = useState(false);

  const { execute: resendEmail, isExecuting } = useAction(
    resendVerificationEmailAction,
    {
      onSuccess: ({ data }) => {
        if (data?.success) {
          toast.success(data.message);
          setRetryCountdown(AUTH_CONFIG.EMAIL_RESEND_COOLDOWN);
          setCanResend(false);
        }
      },
      onError: ({ error }) => {
        toast.error(getErrorMessage(error.serverError));
      },
    }
  );

  useEffect(() => {
    if (retryCountdown <= 0) {
      setCanResend(true);
      return;
    }

    const timer = setInterval(() => {
      setRetryCountdown((prev) => {
        if (prev <= 1) {
          setCanResend(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [retryCountdown]);

  const handleResend = () => {
    resendEmail({ email });
  };

  return (
    <div className="space-y-4">
      <div className="rounded-lg bg-muted/50 p-4">
        <div className="text-sm text-muted-foreground space-y-1">
          <div>
            We&apos;ve sent a verification link. Please check your email and
            click the link to verify your account.
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between rounded-lg bg-muted p-3">
        <div className="flex items-center gap-2">
          <ClockAfternoonIcon className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">
            {retryCountdown > 0 ? (
              <>
                Resend available in{" "}
                <span className="font-mono font-medium text-foreground">
                  {retryCountdown}s
                </span>
              </>
            ) : (
              <span className="text-foreground">Ready to resend</span>
            )}
          </span>
        </div>

        <Button
          variant="outline"
          size="sm"
          onClick={handleResend}
          disabled={!canResend || isExecuting}
        >
          {isExecuting ? "Sending..." : "Resend"}
        </Button>
      </div>

      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Didn&apos;t receive the email? Check your spam folder or{" "}
          <button
            type="button"
            onClick={handleResend}
            disabled={!canResend || isExecuting}
            className="font-medium text-primary hover:underline disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:no-underline"
          >
            click here to resend
          </button>
          .
        </p>
      </div>
    </div>
  );
}
