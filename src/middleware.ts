import { NextRequest, NextResponse } from "next/server";
import { MemoryRateLimiter, getIp } from "./lib/rate-limit";

const ASSET_EXTENSIONS = [
  ".js",
  ".css",
  ".png",
  ".jpg",
  ".jpeg",
  ".gif",
  ".svg",
  ".ico",
  ".woff",
  ".woff2",
  ".ttf",
  ".eot",
  ".map",
];

const API_PATTERNS = ["/api/"];

const notFoundRateLimiter = new MemoryRateLimiter(5, "10 m");

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  const isAssetRequest = ASSET_EXTENSIONS.some((ext) => pathname.endsWith(ext));
  const isApiRequest = API_PATTERNS.some((pattern) =>
    pathname.startsWith(pattern)
  );

  if (!isAssetRequest && !isApiRequest) {
    return NextResponse.next();
  }

  const ip = await getIp();
  if (!ip) return NextResponse.next();

  const rateLimitResult = notFoundRateLimiter.limit(`404:${ip}`);

  if (!rateLimitResult.success) {
    return new NextResponse(
      JSON.stringify({
        error: "Too many not found requests",
        message:
          "You have exceeded the limit of not found requests. Please try again later.",
        retryAfter: rateLimitResult.reset,
      }),
      {
        status: 429,
        headers: {
          "Content-Type": "application/json",
          "Retry-After": rateLimitResult.reset.toString(),
          ...rateLimitResult.headers,
        },
      }
    );
  }

  const response = NextResponse.next();

  Object.entries(rateLimitResult.headers).forEach(([key, value]) => {
    response.headers.set(key, value);
  });

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
