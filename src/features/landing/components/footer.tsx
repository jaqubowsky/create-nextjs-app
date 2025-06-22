import {
	DiscordLogoIcon,
	GithubLogoIcon,
	LinkedinLogoIcon,
	MountainsIcon,
	TwitterLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { SharedLink } from "@/components/ui/link";
import { landingConfig } from "../config/landing-content";

const socialIconMap = {
	Twitter: TwitterLogoIcon,
	LinkedIn: LinkedinLogoIcon,
	GitHub: GithubLogoIcon,
	Discord: DiscordLogoIcon,
};

export function Footer() {
	const { brand, footer } = landingConfig;

	return (
		<footer className="bg-card border-t border-border">
			<div className="container mx-auto px-6 max-w-7xl">
				<div className="py-16 sm:py-20">
					<div className="grid gap-12 lg:gap-16 lg:grid-cols-6">
						<div className="lg:col-span-2 flex flex-col items-center justify-center space-y-6 sm:space-y-8 text-center">
							<Link
								className="flex items-center justify-center sm:justify-start space-x-3 group"
								href="/"
							>
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

							<p className="text-muted-foreground leading-relaxed max-w-md text-base mx-auto sm:mx-0">
								{footer.description}
							</p>

							<div className="flex items-center justify-center sm:justify-start space-x-3">
								{footer.social.map((social) => {
									const IconComponent =
										socialIconMap[social.name as keyof typeof socialIconMap];
									return (
										<Button
											key={social.name}
											variant="ghost"
											size="icon"
											asChild
											className="hover:bg-primary hover:text-primary-foreground transition-all duration-300"
										>
											<Link
												href={social.href}
												target="_blank"
												rel="noopener noreferrer"
											>
												{IconComponent && <IconComponent className="h-5 w-5" />}
												<span className="sr-only">{social.name}</span>
											</Link>
										</Button>
									);
								})}
							</div>
						</div>

						<div className="lg:col-span-4">
							<div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-8 text-center">
								{footer.sections.map((section) => (
									<div key={section.title} className="space-y-4 sm:space-y-6">
										<h3 className="font-semibold text-foreground text-base sm:text-lg">
											{section.title}
										</h3>
										<ul className="space-y-3 sm:space-y-4">
											{section.links.map((link) => (
												<li key={link.name}>
													<SharedLink
														href={link.href}
														variant="muted"
														className="text-sm sm:text-base font-medium block"
													>
														{link.name}
													</SharedLink>
												</li>
											))}
										</ul>
									</div>
								))}
							</div>
						</div>
					</div>
				</div>

				<div className="py-6 sm:py-8 border-t border-border">
					<div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-4 sm:gap-6 text-center">
						<div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-sm sm:text-base text-muted-foreground">
							<p>
								© {new Date().getFullYear()} {footer.copyright}
							</p>
							<div className="flex items-center justify-center space-x-2 sm:space-x-3">
								<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
								<span>{footer.status}</span>
							</div>
						</div>

						<div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 text-sm sm:text-base">
							{footer.legal.map((item) => (
								<SharedLink
									key={item.name}
									href={item.href}
									variant="muted"
									className="font-medium"
								>
									{item.name}
								</SharedLink>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
