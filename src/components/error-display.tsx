"use client";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { logError } from "@/lib/sentry";
import {
  DeviceRotateIcon,
  HouseIcon,
  WarningDiamondIcon,
  WarningIcon,
} from "@phosphor-icons/react";
import { useEffect } from "react";

interface ErrorDisplayProps {
  error: Error & { digest?: string };
  reset: () => void;
  title?: string;
  description?: string;
  showHomeButton?: boolean;
  className?: string;
}

export function ErrorDisplay({
  error,
  reset,
  title = "Something went wrong!",
  description = "An unexpected error occurred. Our team has been notified and is working to fix this issue.",
  showHomeButton = true,
  className = "",
}: ErrorDisplayProps) {
  useEffect(() => {
    logError({
      error,
      origin: "global-error",
    });
  }, [error]);

  return (
    <div
      className={`min-h-screen flex items-center justify-center bg-background p-4 ${className}`}
    >
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-destructive/10">
            <WarningIcon className="h-6 w-6 text-destructive" />
          </div>
          <h2 className="text-lg font-semibold">{title}</h2>
          <p className="text-sm text-muted-foreground">{description}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {process.env.NODE_ENV === "development" && (
            <Alert variant="destructive">
              <WarningDiamondIcon className="h-4 w-4" />
              <AlertTitle>Development Error Details</AlertTitle>
              <AlertDescription className="mt-2">
                <details>
                  <summary className="cursor-pointer font-medium">
                    Click to view error details
                  </summary>
                  <pre className="mt-2 whitespace-pre-wrap text-xs">
                    {error.message}
                    {error.stack && `\n\n${error.stack}`}
                  </pre>
                </details>
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Button onClick={reset} className="w-full" size="sm">
              <DeviceRotateIcon className="mr-2 h-4 w-4" />
              Try again
            </Button>

            {showHomeButton && (
              <Button
                variant="outline"
                onClick={() => (window.location.href = "/")}
                className="w-full"
                size="sm"
              >
                <HouseIcon className="mr-2 h-4 w-4" />
                Go to homepage
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
