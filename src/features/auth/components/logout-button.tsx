"use client";

import { SignOutIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import { useAction } from "next-safe-action/hooks";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { signOutAction } from "../actions";

export function SignOutButton({
  children = "Sign Out",
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) {
  const { execute: handleSignOut, isExecuting } = useAction(signOutAction);

  return (
    <Button
      onClick={() => handleSignOut()}
      className={cn(className)}
      disabled={isExecuting}
    >
      {isExecuting ? (
        <SpinnerGapIcon className="animate-spin" />
      ) : (
        <SignOutIcon />
      )}
      {isExecuting ? "Signing out..." : children}
    </Button>
  );
}
