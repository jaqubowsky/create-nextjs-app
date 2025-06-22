import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";
import { landingConfig } from "../config/landing-content";

export function FAQ() {
	const { faq } = landingConfig;

	return (
		<section className="py-16 sm:py-24 bg-gradient-to-b from-background to-muted/10">
			<div className="container mx-auto px-4">
				<div className="text-center space-y-4 mb-16">
					<div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
						{faq.badge}
					</div>
					<h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
						{faq.title}
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						{faq.description}
					</p>
				</div>

				<div className="max-w-4xl mx-auto">
					<Accordion type="single" collapsible className="space-y-4">
						{faq.items.map((item) => (
							<AccordionItem
								key={item.question}
								value={`item-${item.question}`}
								className="border border-border/50 rounded-lg px-6 py-2 bg-card/50 backdrop-blur-sm hover:bg-card/80 transition-colors"
							>
								<AccordionTrigger className="text-left hover:no-underline py-6">
									<span className="font-semibold text-lg">{item.question}</span>
								</AccordionTrigger>
								<AccordionContent className="text-muted-foreground leading-relaxed pb-6">
									{item.answer}
								</AccordionContent>
							</AccordionItem>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	);
}
