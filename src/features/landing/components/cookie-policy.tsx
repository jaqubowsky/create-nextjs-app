import { ArrowLeftIcon } from "@phosphor-icons/react/dist/ssr";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { landingConfig } from "../config/landing-content";

export function CookiePolicy() {
  const { legal, ui } = landingConfig;
  const { cookies } = legal;

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="mb-8">
          <Button variant="ghost" asChild className="mb-6">
            <Link href="/" className="flex items-center space-x-2">
              <ArrowLeftIcon className="w-4 h-4" />
              <span>{ui.backToHome}</span>
            </Link>
          </Button>

          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground">
              {cookies.title}
            </h1>
            <p className="text-lg text-muted-foreground">
              {ui.lastUpdated} {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>

        <div className="prose prose-lg max-w-none">
          <div className="bg-card border border-border rounded-xl p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {cookies.whatAreCookies}
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                {cookies.intro}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">
                {cookies.typesTitle}
              </h2>

              <div className="space-y-6">
                {cookies.types.map((type) => (
                  <div
                    key={type.title}
                    className="bg-background border border-border rounded-lg p-6"
                  >
                    <h3 className="text-lg font-semibold text-foreground mb-3">
                      {type.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-3">
                      {type.description}
                    </p>
                    <ul className="space-y-2 text-muted-foreground">
                      {type.items.map((item) => (
                        <li key={item} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {cookies.sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-2xl font-semibold text-foreground mb-4">
                  {section.title}
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {section.content}
                </p>
                {section.items && (
                  <ul className="space-y-2 text-muted-foreground">
                    {section.items.map((item) => (
                      <li key={item} className="flex items-start space-x-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-2" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
