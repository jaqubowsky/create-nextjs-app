import { CheckIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { landingConfig } from "../config/landing-content";

export function CTA() {
  const { cta } = landingConfig;

  return (
    <section
      id={cta.id}
      className="relative py-24 sm:py-32 overflow-hidden bg-background"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-background" />

      <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-accent/20 to-transparent rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto px-6 relative max-w-6xl">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            {cta.badge}
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-7xl font-bold tracking-tight text-foreground">
              {cta.title}
            </h2>
            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              {cta.description}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
            {cta.stats.map((stat) => (
              <div key={stat.label} className="space-y-3">
                <div className="text-3xl sm:text-4xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="text-base text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button
              size="lg"
              asChild
              className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Link href="/auth/sign-in">{cta.buttons.primary}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="text-lg px-10 py-6 border-2 transition-all duration-300"
            >
              <Link href="/auth/sign-in">{cta.buttons.secondary}</Link>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-base text-muted-foreground pt-8">
            {cta.trustIndicators.map((indicator, index) => (
              <div key={indicator} className="flex items-center space-x-3">
                <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center">
                  <CheckIcon className="w-3 h-3 text-primary" />
                </div>
                <span className="font-medium">{indicator}</span>
                {index < cta.trustIndicators.length - 1 && (
                  <div className="hidden sm:block w-2 h-2 bg-muted-foreground/50 rounded-full ml-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
