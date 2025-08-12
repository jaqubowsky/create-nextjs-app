"use client";

import { CreditCardIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import type { VariantProps } from "class-variance-authority";
import { useAction } from "next-safe-action/hooks";
import type * as React from "react";
import { toast } from "sonner";
import { Button, type buttonVariants } from "@/components/ui/button";
import { parseError } from "@/lib/parse-error";
import { cn } from "@/lib/utils";
import { createCheckoutSessionAction } from "../actions";

interface PurchaseButtonProps
  extends React.ComponentProps<"button">,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export function PurchaseButton({
  children = "Upgrade to Pro",
  className,
  variant = "default",
  size = "default",
  disabled,
  ...props
}: PurchaseButtonProps) {
  const { execute, isPending } = useAction(createCheckoutSessionAction, {
    onSuccess: ({ data }) => {
      if (data?.url) {
        window.location.href = data.url;
      } else {
        toast.error("Failed to create checkout session");
      }
    },
    onError: (error) => {
      toast.error(parseError(error.error.serverError));
    },
  });

  const handlePurchase = () => {
    execute();
  };

  return (
    <Button
      {...props}
      onClick={handlePurchase}
      disabled={disabled || isPending}
      variant={variant}
      size={size}
      className={cn(className)}
    >
      {isPending ? (
        <SpinnerGapIcon className="animate-spin" />
      ) : (
        <CreditCardIcon />
      )}
      {isPending ? "Processing..." : children}
    </Button>
  );
}
