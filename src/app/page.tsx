import { Benefits } from "@/features/landing/components/benefits";
import { Comparison } from "@/features/landing/components/comparison";
import { CTA } from "@/features/landing/components/cta";
import { FAQ } from "@/features/landing/components/faq";
import { Footer } from "@/features/landing/components/footer";
import { Hero } from "@/features/landing/components/hero";
import { HowItWorks } from "@/features/landing/components/how-it-works";
import { Pricing } from "@/features/landing/components/pricing";
import { SocialProof } from "@/features/landing/components/social-proof";

export default function Home() {
  return (
    <div className="min-h-screen">
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
