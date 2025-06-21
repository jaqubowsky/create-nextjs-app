"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAction } from "next-safe-action/hooks";
import { googleLoginAction } from "../actions";

export const GoogleLoginButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { execute, isPending } = useAction(googleLoginAction);

  return (
    <Button
      variant={"outline"}
      disabled={isPending}
      onClick={() => execute()}
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
