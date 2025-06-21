"use client";
import { Button } from "@/components/ui/button";
import { getErrorMessage } from "@/lib/get-error-message";
import { cn } from "@/lib/utils";
import { useAction } from "next-safe-action/hooks";
import { toast } from "sonner";
import { refreshUserAction } from "../actions";

export function RefreshUserButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { execute, isExecuting } = useAction(refreshUserAction, {
    onSuccess: () => {
      toast.success("User refreshed");
    },
    onError: (error) => {
      toast.error(getErrorMessage(error.error.serverError));
    },
  });

  return (
    <Button
      onClick={() => execute()}
      disabled={isExecuting}
      className={cn(className)}
    >
      {children}
    </Button>
  );
}
