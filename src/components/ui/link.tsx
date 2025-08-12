import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import type * as React from "react";

import { cn } from "@/lib/utils";

const linkVariants = cva(
  "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "text-primary hover:text-primary/80 underline-offset-4 hover:underline",
        muted: "text-muted-foreground hover:text-primary",
        nav: "text-muted-foreground hover:text-primary font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

interface SharedLinkProps
  extends React.ComponentProps<typeof Link>,
    VariantProps<typeof linkVariants> {}

function SharedLink({ className, variant, ...props }: SharedLinkProps) {
  return (
    <Link className={cn(linkVariants({ variant, className }))} {...props} />
  );
}

export { SharedLink, linkVariants };
