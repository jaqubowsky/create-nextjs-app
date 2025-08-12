import { SharedLink } from "@/components/ui/link";
import { landingConfig } from "../config/landing-content";

export function Footer() {
  const { footer } = landingConfig;

  return (
    <footer id={footer.id} className="bg-background border-t border-border">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="py-6 sm:py-8 border-t border-border">
          <div className="flex flex-col items-center justify-center gap-4 sm:gap-6 text-center">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6 md:space-x-8 text-sm sm:text-base text-muted-foreground">
              <p>
                © {new Date().getFullYear()} {footer.copyright}
              </p>
              <div className="flex items-center justify-center space-x-2 sm:space-x-3">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span>{footer.status}</span>
              </div>
            </div>

            <div className="flex items-center justify-center space-x-4 sm:space-x-6 md:space-x-8 text-sm sm:text-base">
              {footer.legal.map((item) => (
                <SharedLink
                  key={item.name}
                  href={item.href}
                  variant="muted"
                  className="font-medium"
                >
                  {item.name}
                </SharedLink>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
