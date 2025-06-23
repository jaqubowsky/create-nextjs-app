import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { landingConfig } from "../config/landing-content";

export function Pricing() {
	const { pricing, ui } = landingConfig;

	return (
		<section id={pricing.id} className="py-24 sm:py-32 bg-background">
			<div className="container mx-auto px-6 max-w-7xl">
				<div className="text-center space-y-6 mb-24">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
						{pricing.badge}
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
						{pricing.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						{pricing.description}
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
					{pricing.tiers.map((tier) => (
						<Card
							key={tier.name}
							className={`relative overflow-hidden transition-all duration-300 ${
								tier.isFeatured
									? "border-2 border-primary shadow-xl scale-105 bg-card"
									: "border border-border shadow-lg bg-card hover:border-primary/50"
							}`}
						>
							<div
								className={`absolute inset-0 opacity-50 ${
									tier.isFeatured
										? "bg-gradient-to-br from-primary/5 via-transparent to-accent/5"
										: "bg-gradient-to-br from-muted/20 to-transparent"
								}`}
							/>

							<CardHeader className="relative text-center pb-8 pt-12">
								<CardTitle className="text-2xl font-bold text-foreground mb-2">
									{tier.name}
								</CardTitle>
								<CardDescription className="text-muted-foreground text-base mb-6">
									{tier.description}
								</CardDescription>
								<div className="space-y-2">
									<div className="flex items-baseline justify-center">
										<span className="text-5xl font-bold text-foreground">
											{tier.price}
										</span>
										<span className="text-muted-foreground ml-2 text-lg">
											/{tier.period}
										</span>
									</div>
								</div>
							</CardHeader>

							<CardContent className="relative space-y-8 px-8">
								<div className="space-y-4">
									{tier.features.map((feature) => (
										<div key={feature} className="flex items-start gap-3">
											<div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5">
												<CheckIcon className="w-3 h-3 text-primary" />
											</div>
											<span className="text-foreground text-base leading-relaxed">
												{feature}
											</span>
										</div>
									))}
								</div>

								{tier.limitations.length > 0 && (
									<div className="pt-6 border-t border-border/50">
										<p className="text-sm text-muted-foreground mb-3 font-medium">
											{ui.limitations}
										</p>
										{tier.limitations.map((limitation) => (
											<div
												key={limitation}
												className="flex items-start gap-3 mb-2"
											>
												<div className="w-5 h-5 flex items-center justify-center mt-0.5">
													<div className="w-2 h-2 bg-muted-foreground/60 rounded-full" />
												</div>
												<span className="text-sm text-muted-foreground">
													{limitation}
												</span>
											</div>
										))}
									</div>
								)}
							</CardContent>

							<CardFooter className="relative pt-8 px-8 pb-8">
								<Button
									variant={tier.isFeatured ? "default" : "outline"}
									size="lg"
									asChild
									className={`w-full py-6 text-base font-semibold transition-all duration-300 ${
										tier.isFeatured ? "shadow-lg hover:shadow-xl" : "border-2"
									}`}
								>
									<Link href="/auth/sign-in">{tier.ctaText}</Link>
								</Button>
							</CardFooter>
						</Card>
					))}
				</div>

				<div className="mt-16 text-center">
					<p className="text-muted-foreground text-base">{pricing.footer}</p>
				</div>
			</div>
		</section>
	);
}
