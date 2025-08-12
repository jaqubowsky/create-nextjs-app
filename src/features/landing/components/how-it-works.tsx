import {
  ArrowRightIcon,
  GearIcon,
  LinkIcon,
  RocketLaunchIcon,
} from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { landingConfig } from "../config/landing-content";

const iconMap = {
  connect: LinkIcon,
  settings: GearIcon,
  rocket: RocketLaunchIcon,
};

export function HowItWorks() {
  const { howItWorks, ui } = landingConfig;

  return (
    <section id={howItWorks.id} className="py-24 sm:py-32 bg-muted/30">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="text-center space-y-6 mb-24">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
            {howItWorks.badge}
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground">
            {howItWorks.title}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {howItWorks.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {howItWorks.steps.map((step, index) => {
            const IconComponent = iconMap[step.icon as keyof typeof iconMap];

            return (
              <div key={step.number} className="relative">
                <Card className="bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-md h-full">
                  <CardHeader className="text-center pb-4">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold mr-3">
                        {step.number}
                      </div>
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        {IconComponent && (
                          <IconComponent className="w-5 h-5 text-primary" />
                        )}
                      </div>
                    </div>

                    <CardTitle className="text-xl font-semibold text-foreground">
                      {step.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="space-y-4 text-center">
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>

                    <div className="space-y-2">
                      {step.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-center justify-center space-x-2"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">
                            {detail}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button
                      variant="link"
                      asChild
                      className="inline-flex items-center text-primary font-medium text-sm hover:text-primary/80 transition-colors group-hover:gap-2 gap-1 mt-4"
                    >
                      <Link href="/auth/sign-in">{ui.getStarted}</Link>
                    </Button>
                  </CardContent>
                </Card>

                {index < howItWorks.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <ArrowRightIcon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}

                {index < howItWorks.steps.length - 1 && (
                  <div className="lg:hidden flex justify-center my-6">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center rotate-90">
                      <ArrowRightIcon className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-20 space-y-6">
          <h3 className="text-2xl font-semibold text-foreground">
            {howItWorks.cta.title}
          </h3>
          <p className="text-muted-foreground">{howItWorks.cta.description}</p>
        </div>
      </div>
    </section>
  );
}
