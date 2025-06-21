import { env } from "@/lib/env";
import { withSentryConfig } from "@sentry/nextjs";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  turbopack: {
    resolveAlias: {
      "@": "./src",
    },
    resolveExtensions: [".mdx", ".tsx", ".ts", ".jsx", ".js", ".mjs", ".json"],
  },
  experimental: {
    useCache: true,
    authInterrupts: true,
    optimizePackageImports: ["@phosphor-icons/react"],
  },
};

export default withSentryConfig(nextConfig, {
  // For all available options, see:
  // https://www.npmjs.com/package/@sentry/webpack-plugin#options

  org: env.SENTRY_ORG,
  project: env.SENTRY_PROJECT,

  // Only print logs for uploading source maps in CI
  silent: !process.env.CI,

  // For all available options, see:
  // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

  // Optimize source map handling to reduce build impact
  sourcemaps: {
    // Disable source maps in development to improve build performance
    disable: process.env.NODE_ENV === "development",
    // Delete source maps after upload to reduce bundle size
    deleteSourcemapsAfterUpload: true,
  },

  // Reduce the scope of file uploads to improve performance
  // Only enable widenClientFileUpload in production builds
  widenClientFileUpload: process.env.NODE_ENV === "production",

  // Route browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers.
  // This can increase your server load as well as your hosting bill.
  // Note: Check that the configured route will not match with your Next.js middleware, otherwise reporting of client-
  // side errors will fail.
  tunnelRoute: "/monitoring",

  // Automatically tree-shake Sentry logger statements to reduce bundle size
  disableLogger: true,

  // Enables automatic instrumentation of Vercel Cron Monitors. (Does not yet work with App Router route handlers.)
  // See the following for more information:
  // https://docs.sentry.io/product/crons/
  // https://vercel.com/docs/cron-jobs
  automaticVercelMonitors: true,

  // Additional performance optimizations
  reactComponentAnnotation: {
    // Only enable in production to reduce development build time
    enabled: process.env.NODE_ENV === "production",
  },
});
