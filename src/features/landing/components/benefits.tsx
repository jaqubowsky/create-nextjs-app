import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { landingConfig } from "../config/landing-content";

export function Benefits() {
	const { benefits } = landingConfig;

	return (
		<section className="py-24 sm:py-32 bg-background">
			<div className="container mx-auto px-6 max-w-7xl">
				<div className="text-center space-y-6 mb-24">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
						{benefits.badge}
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
						{benefits.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
						{benefits.description}
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
					{benefits.items.map((benefit) => (
						<Card
							key={benefit.title}
							className="group bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
						>
							<CardHeader className="pb-4">
								<div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-2xl">
									{benefit.icon}
								</div>
								<CardTitle className="text-xl font-semibold text-foreground">
									{benefit.title}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								<p className="text-muted-foreground leading-relaxed">
									{benefit.description}
								</p>

								<div className="space-y-2">
									{benefit.features.map((feature) => (
										<div key={feature} className="flex items-center space-x-2">
											<div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
											<span className="text-sm text-muted-foreground">
												{feature}
											</span>
										</div>
									))}
								</div>

								<Button
									variant="link"
									className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors group-hover:gap-2 gap-1 mt-4"
								>
									Learn more
								</Button>
							</CardContent>
						</Card>
					))}
				</div>

				<div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
					{benefits.stats.map((stat) => (
						<div key={stat.label} className="space-y-2">
							<div className="text-3xl font-bold text-foreground">
								{stat.value}
							</div>
							<div className="text-sm text-muted-foreground font-medium">
								{stat.label}
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
