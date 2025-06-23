"use client";

import { ListIcon, MountainsIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ModeToggle } from "@/components/mode-toggle";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { SignOutButton } from "@/features/auth/components/logout-button";
import { landingConfig } from "@/features/landing/config/landing-content";

export function MobileMenu({ isLoggedIn }: { isLoggedIn: boolean }) {
	const [isOpen, setIsOpen] = useState(false);
	const { brand, navigation, hero, ui } = landingConfig;
	const pathname = usePathname();

	const handleLinkClick = () => {
		setIsOpen(false);
	};

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="sm" className="p-3">
					<ListIcon className="h-6 w-6" />
					<span className="sr-only">{ui.openMenu}</span>
				</Button>
			</SheetTrigger>
			<SheetTitle className="sr-only">{ui.navigationMenu}</SheetTitle>
			<SheetContent side="right" className="w-full sm:w-80 bg-card p-6">
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between pb-8 border-b border-border">
						<Link
							className="flex items-center space-x-3"
							href="/"
							onClick={handleLinkClick}
						>
							<div className="bg-primary/10 p-2 rounded-lg">
								<MountainsIcon className="h-8 w-8 text-primary" />
							</div>
							<span className="font-bold text-xl text-foreground">
								{brand.name}
							</span>
						</Link>
						<ModeToggle />
					</div>

					<nav className="flex-1 py-8">
						<div className="space-y-6">
							{pathname === "/" &&
								navigation.map((item: { name: string; href: string }) => (
									<Link
										key={item.name}
										href={item.href}
										onClick={handleLinkClick}
										className="block w-full text-left text-xl font-semibold py-3 px-2 rounded-md text-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
									>
										{item.name}
									</Link>
								))}
						</div>
					</nav>

					<div className="space-y-4 pt-6 border-t border-border">
						{isLoggedIn ? (
							<>
								<Button asChild className="w-full">
									<Link href="/account" onClick={handleLinkClick}>
										Dashboard
									</Link>
								</Button>
								<SignOutButton className="w-full" />
							</>
						) : (
							<>
								<Button
									variant="ghost"
									asChild
									className="w-full text-base font-semibold"
								>
									<Link href="/auth/sign-in" onClick={handleLinkClick}>
										{ui.signIn}
									</Link>
								</Button>
								<Button size="lg" className="w-full" onClick={handleLinkClick}>
									{hero.cta.primary}
								</Button>
							</>
						)}
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
