import { landingConfig } from "../config/landing-content";

export function SocialProof() {
	const { socialProof } = landingConfig;

	return (
		<section id={socialProof.id} className="py-16 sm:py-24">
			<div className="container mx-auto px-4">
				<div className="text-center space-y-12">
					<div className="space-y-4">
						<p className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
							{socialProof.description}
						</p>
						<h2 className="text-2xl sm:text-3xl font-bold">
							{socialProof.title}
						</h2>
					</div>

					<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
						{socialProof.companies.map((company) => (
							<div
								key={company}
								className="flex items-center justify-center p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-200"
							>
								<span className="text-lg font-semibold text-muted-foreground hover:text-foreground transition-colors">
									{company}
								</span>
							</div>
						))}
					</div>

					<div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-muted-foreground">
						{socialProof.stats.map((stat, index) => (
							<div key={stat.label} className="flex items-center space-x-2">
								<div
									className={`w-2 h-2 rounded-full animate-pulse ${
										index === 0
											? "bg-green-500"
											: index === 1
												? "bg-blue-500"
												: "bg-purple-500"
									}`}
								></div>
								<span>
									{stat.value} {stat.label}
								</span>
								{index < socialProof.stats.length - 1 && (
									<div className="hidden sm:block w-1 h-1 bg-muted-foreground rounded-full ml-6"></div>
								)}
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
