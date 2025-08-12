"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { landingConfig } from "@/features/landing/config/landing-content";

export function NavbarLinks() {
  const pathname = usePathname();
  const { navigation } = landingConfig;

  if (pathname !== "/") {
    return null;
  }

  return (
    <nav className="hidden md:flex items-center space-x-10">
      {navigation.map((item: { name: string; href: string }) => (
        <Link
          key={item.name}
          href={item.href}
          className="relative text-base font-semibold text-muted-foreground transition-colors hover:text-primary group"
        >
          {item.name}
          <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
        </Link>
      ))}
    </nav>
  );
}
