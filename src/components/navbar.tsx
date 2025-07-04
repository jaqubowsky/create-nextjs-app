"use client";

import { MountainsIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import { UserMenu } from "@/features/auth/components/user-menu";
import { landingConfig } from "@/features/landing/config/landing-content";
import { authClient } from "@/lib/auth-client";
import { MobileMenu } from "./mobile-menu";
import { NavbarLinks } from "./navbar-links";

export function Navbar() {
	const { brand, hero, ui } = landingConfig;

	const { data: session, isPending } = authClient.useSession();

	return (
		<header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
			<div className="container mx-auto px-6 max-w-7xl">
				<div className="flex h-20 items-center justify-between">
					<div className="flex items-center">
						<Link className="flex items-center space-x-3 group" href="/">
							<div className="relative">
								<div className="bg-primary/10 p-2 rounded-lg">
									<MountainsIcon className="h-8 w-8 text-primary transition-transform group-hover:scale-110" />
								</div>
								<div className="absolute inset-0 bg-primary/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity" />
							</div>
							<span className="font-bold text-2xl text-foreground">
								{brand.name}
							</span>
						</Link>
					</div>

					<NavbarLinks />

					<div className="hidden md:flex items-center space-x-6">
						<ModeToggle />
						{isPending ? (
							<>
								<div className="h-10 w-16 bg-muted rounded-md animate-pulse" />
								<div className="h-11 w-24 bg-primary/20 rounded-md animate-pulse" />
							</>
						) : session?.user ? (
							<UserMenu user={session.user} />
						) : (
							<>
								<Button variant="ghost" asChild>
									<Link href="/auth/sign-in">{ui.signIn}</Link>
								</Button>
								<Button
									size="lg"
									className="px-8 shadow-lg hover:shadow-xl transition-all duration-300"
								>
									{hero.cta.primary}
								</Button>
							</>
						)}
					</div>

					<div className="md:hidden">
						{isPending ? (
							<div className="h-10 w-10 bg-muted rounded-md animate-pulse" />
						) : (
							<MobileMenu isLoggedIn={!!session?.user} />
						)}
					</div>
				</div>
			</div>
		</header>
	);
}
