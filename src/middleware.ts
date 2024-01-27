import { ERROR_CODE } from "@/defines/auth/constants";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { COOKIE } from "./defines/cookie/constants";

export function middleware(request: NextRequest) {
	const accessToken = request.cookies.get(COOKIE.accessToken)?.value;
	const { pathname } = request.nextUrl;

	if (!accessToken) {
		if (pathname === "/search" || pathname === "/post-me") {
			return NextResponse.redirect(new URL(`/?alert=${ERROR_CODE.UNAUTHORIZED}`, request.url));
		}
	} else {
		// Redirect to main page if it is logged in already.
		if (pathname === "/login") {
			return NextResponse.redirect(new URL("/", request.url));
		}
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/login", "/search", "/post-me"],
};
