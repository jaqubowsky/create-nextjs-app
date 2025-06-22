"use client";

import { ListIcon, MountainsIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
	Sheet,
	SheetContent,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { landingConfig } from "../config/landing-content";

export function MobileMenu() {
	const [isOpen, setIsOpen] = useState(false);
	const { brand, navigation, hero } = landingConfig;

	return (
		<Sheet open={isOpen} onOpenChange={setIsOpen}>
			<SheetTrigger asChild>
				<Button variant="ghost" size="sm" className="p-3">
					<ListIcon className="h-6 w-6" />
					<span className="sr-only">Open menu</span>
				</Button>
			</SheetTrigger>
			<SheetTitle className="sr-only">Navigation Menu</SheetTitle>
			<SheetContent side="right" className="w-full sm:w-80 bg-card p-6">
				<div className="flex flex-col h-full">
					<div className="flex items-center justify-between pb-8 border-b border-border">
						<Link
							className="flex items-center space-x-3"
							href="/"
							onClick={() => setIsOpen(false)}
						>
							<div className="bg-primary/10 p-2 rounded-lg">
								<MountainsIcon className="h-8 w-8 text-primary" />
							</div>
							<span className="font-bold text-xl text-foreground">
								{brand.name}
							</span>
						</Link>
					</div>

					<nav className="flex-1 py-8">
						<div className="space-y-6">
							{navigation.map((item) => (
								<Button
									key={item.name}
									variant="ghost"
									asChild
									className="w-full justify-start text-xl font-semibold py-3 px-2 h-auto"
									onClick={() => setIsOpen(false)}
								>
									<Link href={item.href}>{item.name}</Link>
								</Button>
							))}
						</div>
					</nav>

					<div className="space-y-4 pt-6 border-t border-border">
						<Button
							variant="ghost"
							asChild
							className="w-full text-base font-semibold"
							onClick={() => setIsOpen(false)}
						>
							<Link href="/auth/signin">Sign In</Link>
						</Button>
						<Button
							size="lg"
							className="w-full"
							onClick={() => setIsOpen(false)}
						>
							{hero.cta.primary}
						</Button>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
