import { MountainsIcon } from "@phosphor-icons/react/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { landingConfig } from "../config/landing-content";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
	const { brand, navigation, hero } = landingConfig;

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

					<nav className="hidden md:flex items-center space-x-10">
						{navigation.map((item) => (
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

					<div className="hidden md:flex items-center space-x-6">
						<Button variant="ghost" asChild>
							<Link href="/auth/signin">Sign In</Link>
						</Button>
						<Button
							size="lg"
							className="px-8 shadow-lg hover:shadow-xl transition-all duration-300"
						>
							{hero.cta.primary}
						</Button>
					</div>

					<div className="md:hidden">
						<MobileMenu />
					</div>
				</div>
			</div>
		</header>
	);
}
