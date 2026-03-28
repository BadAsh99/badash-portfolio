import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PRO_HOSTS = ["ashclements.dev", "www.ashclements.dev"];

function proPath(pathname: string): string {
  if (pathname === "/") return "/pro";
  if (pathname.startsWith("/pro")) return pathname;
  return `/pro${pathname}`;
}

export function middleware(request: NextRequest) {
  const hostname =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    "";

  const isPro = PRO_HOSTS.some((h) => hostname.includes(h));
  if (!isPro) return NextResponse.next();

  const { pathname } = request.nextUrl;

  // Pass through internals and static assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.includes(".")
  ) {
    return NextResponse.next();
  }

  const rewriteUrl = request.nextUrl.clone();
  rewriteUrl.pathname = proPath(pathname);
  return NextResponse.rewrite(rewriteUrl);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
