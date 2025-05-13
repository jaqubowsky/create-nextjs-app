"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useAction } from "next-safe-action/hooks";
import { googleLoginAction } from "../server/actions";

export const GoogleLoginButton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const action = useAction(googleLoginAction);

  return (
    <Button
      variant={"outline"}
      disabled={action.isPending}
      onClick={() => action.execute()}
      className={cn(className)}
    >
      {children}
    </Button>
  );
};
