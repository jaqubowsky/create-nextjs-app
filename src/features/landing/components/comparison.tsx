import { CheckIcon, XIcon } from "@phosphor-icons/react/ssr";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { landingConfig } from "../config/landing-content";

export function Comparison() {
	const { comparison } = landingConfig;

	return (
		<section id={comparison.id} className="py-24 sm:py-32 bg-muted/20">
			<div className="container mx-auto px-6 max-w-7xl">
				<div className="text-center space-y-6 mb-24">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
						{comparison.badge}
					</div>
					<h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
						{comparison.title}
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
						{comparison.description}
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
					<Card className="relative overflow-hidden border-2 border-destructive/30 bg-card shadow-lg">
						<div className="absolute inset-0 bg-gradient-to-br from-destructive/5 to-destructive/10 opacity-60" />
						<CardHeader className="relative pb-6">
							<CardTitle className="flex items-start gap-4 text-2xl">
								<div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20 flex-shrink-0">
									<XIcon className="w-8 h-8 text-destructive" />
								</div>
								<div>
									<span className="text-foreground font-bold">
										{comparison.oldWay.title}
									</span>
									<p className="text-base font-normal text-muted-foreground mt-2">
										{comparison.oldWay.subtitle}
									</p>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent className="relative space-y-4 px-6 pb-8">
							{comparison.oldWay.items.map((item) => (
								<div
									key={item}
									className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border/50"
								>
									<div className="w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5 flex-shrink-0">
										<XIcon className="w-3 h-3 text-destructive" />
									</div>
									<p className="text-base text-foreground font-medium">
										{item}
									</p>
								</div>
							))}
						</CardContent>
					</Card>

					<Card className="relative overflow-hidden border-2 border-primary/30 bg-card shadow-lg hover-lift hover:border-primary/50 transition-all duration-300">
						<div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/10 opacity-60" />
						<CardHeader className="relative pb-6">
							<CardTitle className="flex items-start gap-4 text-2xl">
								<div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex-shrink-0">
									<CheckIcon className="w-8 h-8 text-primary" />
								</div>
								<div>
									<span className="text-foreground font-bold">
										{comparison.newWay.title}
									</span>
									<p className="text-base font-normal text-muted-foreground mt-2">
										{comparison.newWay.subtitle}
									</p>
								</div>
							</CardTitle>
						</CardHeader>
						<CardContent className="relative space-y-4 px-6 pb-8">
							{comparison.newWay.items.map((item) => (
								<div
									key={item}
									className="flex items-start gap-4 p-4 rounded-lg bg-background/50 border border-border/50"
								>
									<div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center mt-0.5 flex-shrink-0">
										<CheckIcon className="w-3 h-3 text-primary" />
									</div>
									<p className="text-base text-foreground font-medium">
										{item}
									</p>
								</div>
							))}
						</CardContent>
					</Card>
				</div>

				<div className="text-center mt-20">
					<p className="text-2xl font-semibold text-foreground mb-3">
						{comparison.cta.title}
					</p>
					<p className="text-muted-foreground text-lg">
						{comparison.cta.description}
					</p>
				</div>
			</div>
		</section>
	);
}
