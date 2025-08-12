"use client";

import { GearIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import type { VariantProps } from "class-variance-authority";
import { useAction } from "next-safe-action/hooks";
import type * as React from "react";
import { toast } from "sonner";
import { Button, type buttonVariants } from "@/components/ui/button";
import { parseError } from "@/lib/parse-error";
import { cn } from "@/lib/utils";
import { openBillingPortalAction } from "../actions";

interface BillingPortalButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function BillingPortalButton({
  children = "Manage Billing",
  className,
  variant = "outline",
  size = "default",
  disabled,
  ...props
}: BillingPortalButtonProps) {
  const { execute, isPending } = useAction(openBillingPortalAction, {
    onSuccess: ({ data }) => {
      if (data?.url) {
        window.location.href = data.url;
      } else {
        toast.error("Failed to open billing portal");
      }
    },
    onError: (error) => {
      toast.error(parseError(error.error.serverError));
    },
  });

  const handleOpenPortal = () => {
    execute();
  };

  return (
    <Button
      {...props}
      onClick={handleOpenPortal}
      disabled={disabled || isPending}
      variant={variant}
      size={size}
      className={cn(className)}
    >
      {isPending ? <SpinnerGapIcon className="animate-spin" /> : <GearIcon />}
      {isPending ? "Opening..." : children}
    </Button>
  );
}
