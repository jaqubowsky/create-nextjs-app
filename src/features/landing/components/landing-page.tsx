import { Benefits } from "./benefits";
import { Comparison } from "./comparison";
import { CTA } from "./cta";
import { FAQ } from "./faq";
import { Footer } from "./footer";
import { Hero } from "./hero";
import { HowItWorks } from "./how-it-works";
import { Navbar } from "./navbar";
import { Pricing } from "./pricing";
import { SocialProof } from "./social-proof";

export function LandingPage() {
	return (
		<div className="min-h-screen">
			<Navbar />
			<Hero />
			<SocialProof />
			<Comparison />
			<Benefits />
			<HowItWorks />
			<Pricing />
			<FAQ />
			<CTA />
			<Footer />
		</div>
	);
}
