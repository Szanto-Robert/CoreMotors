import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Ha a felhasználó a gyökér oldalra megy ("/")
  if (pathname === "/") {
    const url = request.nextUrl.clone();
    url.pathname = "/ro"; // alapértelmezett nyelv → román
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
