"use client";

import { CheckCircleIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useAction } from "next-safe-action/hooks";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { parseError } from "@/lib/parse-error";
import { verifyCheckoutSessionAction } from "../actions";

interface SubscriptionSuccessCardProps {
  onSuccess?: () => void;
}

export function SubscriptionSuccessCard({
  onSuccess,
}: SubscriptionSuccessCardProps) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const sessionId = searchParams.get("session_id");
  const [verificationComplete, setVerificationComplete] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const { execute, isPending } = useAction(verifyCheckoutSessionAction, {
    onSuccess: () => {
      setVerificationComplete(true);
      onSuccess?.();
    },
    onError: (error) => {
      toast.error(parseError(error.error.serverError));
      setTimeout(() => {
        handleClose();
      }, 3000);
    },
  });

  useEffect(() => {
    if (sessionId && !verificationComplete) {
      setIsOpen(true);
      execute({ session_id: sessionId });
    }
  }, [sessionId, execute, verificationComplete]);

  const handleClose = () => {
    setIsOpen(false);
    router.replace("/");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border-0">
        <DialogHeader className="text-center space-y-4">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-emerald-600">
            {isPending ? (
              <SpinnerGapIcon className="h-8 w-8 text-white animate-spin" />
            ) : (
              <CheckCircleIcon className="h-8 w-8 text-white" />
            )}
          </div>
          <DialogTitle className="text-2xl font-bold">
            {isPending ? "Verifying Payment..." : "Welcome to Pro!"}
          </DialogTitle>
          <DialogDescription className="text-base">
            {isPending
              ? "We're confirming your subscription details..."
              : "Your subscription has been activated successfully"}
          </DialogDescription>
        </DialogHeader>

        {!isPending && (
          <div className="space-y-6 pt-4">
            <div className="space-y-3">
              <h3 className="font-semibold text-gray-900 dark:text-gray-100">
                You now have access to:
              </h3>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  All premium features unlocked
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Priority customer support
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Advanced analytics and insights
                </li>
                <li className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Ad-free experience
                </li>
              </ul>
            </div>

            <div className="flex justify-center">
              <Button
                onClick={handleClose}
                size="lg"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700"
              >
                Continue to Dashboard
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
