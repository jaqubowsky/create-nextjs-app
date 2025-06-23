import { StarIcon } from "@phosphor-icons/react/dist/ssr";
import { Button } from "@/components/ui/button";
import { landingConfig } from "../config/landing-content";

export function Hero() {
	const { hero } = landingConfig;

	return (
		<section id={hero.id} className="relative overflow-hidden bg-background">
			<div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
			<div className="container mx-auto px-6 py-24 sm:py-32 lg:py-40 max-w-7xl">
				<div className="grid gap-16 lg:grid-cols-2 lg:gap-20 items-center">
					<div className="space-y-10 text-center lg:text-left relative z-10">
						<div className="space-y-6">
							<h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl leading-tight">
								<span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
									{hero.title.primary}
								</span>{" "}
								<span className="text-foreground">{hero.title.secondary}</span>
							</h1>
							<h2 className="text-2xl font-semibold tracking-tight sm:text-3xl lg:text-4xl xl:text-5xl text-foreground/90">
								{hero.title.tertiary}
							</h2>
						</div>

						<p className="text-lg text-muted-foreground sm:text-xl lg:text-xl max-w-2xl mx-auto lg:mx-0 leading-relaxed">
							{hero.description}
						</p>

						<div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
							<Button
								size="lg"
								className="text-base px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
							>
								{hero.cta.primary}
							</Button>
							<Button
								variant="outline"
								size="lg"
								className="text-base px-10 py-6 border-2 transition-all duration-300"
							>
								{hero.cta.secondary}
							</Button>
						</div>

						<div className="pt-12 space-y-6">
							<p className="text-sm text-muted-foreground font-medium">
								{hero.trustIndicators.text}
							</p>
							<div className="flex items-center justify-center lg:justify-start space-x-2">
								{Array.from({ length: 5 }, (_, i) => (
									<StarIcon
										key={`star-${i + 1}`}
										className="w-5 h-5 text-primary fill-current"
										weight="fill"
									/>
								))}
								<span className="text-sm text-muted-foreground ml-4 font-medium">
									{hero.trustIndicators.rating}
								</span>
							</div>
						</div>
					</div>

					<div className="relative lg:ml-8">
						<div className="relative mx-auto w-full max-w-lg">
							<div className="relative rounded-xl bg-card p-8 shadow-xl border border-border transition-all duration-300 hover:shadow-2xl">
								<div className="space-y-6">
									<div className="flex items-center justify-between">
										<div className="flex items-center space-x-3">
											<div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
												<div className="w-4 h-4 rounded bg-primary" />
											</div>
											<span className="font-semibold text-foreground">
												{hero.dashboard.title}
											</span>
										</div>
										<div className="flex space-x-1">
											<div className="w-3 h-3 rounded-full bg-destructive/20"></div>
											<div className="w-3 h-3 rounded-full bg-yellow-500/20"></div>
											<div className="w-3 h-3 rounded-full bg-green-500/20"></div>
										</div>
									</div>

									<div className="grid grid-cols-2 gap-4">
										{hero.dashboard.metrics.map((metric) => (
											<div
												key={metric.label}
												className="bg-background rounded-lg p-4 border border-border"
											>
												<div className="text-2xl font-bold text-primary">
													{metric.value}
												</div>
												<div className="text-sm text-muted-foreground">
													{metric.label}
												</div>
											</div>
										))}
									</div>

									<div className="bg-background rounded-lg p-4 border border-border">
										<div className="flex items-end space-x-2 h-16">
											<div
												className="w-4 bg-primary/60 rounded-t"
												style={{ height: "40%" }}
											></div>
											<div
												className="w-4 bg-primary/70 rounded-t"
												style={{ height: "60%" }}
											></div>
											<div
												className="w-4 bg-primary/80 rounded-t"
												style={{ height: "80%" }}
											></div>
											<div
												className="w-4 bg-primary rounded-t"
												style={{ height: "100%" }}
											></div>
											<div
												className="w-4 bg-primary/90 rounded-t"
												style={{ height: "70%" }}
											></div>
											<div
												className="w-4 bg-primary/75 rounded-t"
												style={{ height: "50%" }}
											></div>
										</div>
										<div className="text-sm text-muted-foreground mt-2">
											{hero.dashboard.chart.label}
										</div>
									</div>

									<div className="bg-primary/10 border border-primary/20 rounded-lg p-4">
										<div className="flex items-center space-x-3">
											<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
												<div className="w-4 h-4 rounded-full bg-primary-foreground" />
											</div>
											<div>
												<p className="text-sm font-semibold text-foreground">
													{hero.dashboard.status.title}
												</p>
												<p className="text-xs text-muted-foreground">
													{hero.dashboard.status.subtitle}
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>

							<div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full opacity-60 animate-pulse blur-sm"></div>
							<div className="absolute -bottom-8 -left-8 w-20 h-20 bg-gradient-to-br from-accent/30 to-primary/30 rounded-full opacity-60 animate-pulse delay-1000 blur-sm"></div>
							<div className="absolute top-1/2 -right-4 w-16 h-16 bg-primary/20 rounded-full opacity-40 animate-pulse delay-500 blur-sm"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
