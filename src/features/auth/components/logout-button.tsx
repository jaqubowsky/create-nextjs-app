"use client";
import { Button } from "@/components/ui/button";
import { authClient } from "@/lib/auth-client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export function SignOutButton({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const router = useRouter();

  const handleSignOut = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => router.push("/auth/sign-in"),
      },
    });
  };

  return (
    <Button onClick={handleSignOut} className={cn(className)}>
      {children}
    </Button>
  );
}
