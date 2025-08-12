"use client";

import { SignOutIcon, SpinnerGapIcon } from "@phosphor-icons/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { authClient } from "@/lib/auth-client";
import { setSentryUserContext } from "@/lib/sentry";

type UserMenuProps = {
  user: {
    name: string | null;
    email: string;
  };
};

export function UserMenu({ user }: UserMenuProps) {
  const router = useRouter();
  const [isPending, setIsPending] = useState(false);

  const handleSignOut = async () => {
    setIsPending(true);
    try {
      await authClient.signOut({
        fetchOptions: {
          onSuccess: () => {
            setSentryUserContext(null);
            router.push("/auth/sign-in");
          },
        },
      });
    } finally {
      setIsPending(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage src="" />
          <AvatarFallback>{user.name?.charAt(0).toUpperCase()}</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-64 p-2">
        <DropdownMenuLabel>
          <div className="flex flex-col space-y-1 py-1">
            <p className="text-sm font-medium leading-none">{user.name}</p>
            <p className="text-xs leading-none text-muted-foreground">
              {user.email}
            </p>
          </div>
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem asChild>
          <Link href="/account">Dashboard</Link>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleSignOut} disabled={isPending}>
          <div className="flex items-center space-x-2">
            {isPending ? (
              <SpinnerGapIcon className="animate-spin" />
            ) : (
              <SignOutIcon />
            )}
            <span>{isPending ? "Signing out..." : "Sign Out"}</span>
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
