import { COOKIE } from "@/defines/cookie/constants";
import { getJwtPayload } from "@/utils/auth";
import { getFallbackUrl, getIaObject, getIsAccessiblePage } from "@/utils/ia";
import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
	const {
		nextUrl: { pathname },
		cookies,
	} = request;

	const response = NextResponse.next();

	const jwtPayload = getJwtPayload(cookies.get(COOKIE.accessToken)?.value);

	const currentIa = getIaObject(pathname);

	if (!currentIa) {
		console.error("IA not found for pathname", pathname);
		return response;
	}

	if (!getIsAccessiblePage(currentIa, jwtPayload)) {
		const fallbackUrl = getFallbackUrl(currentIa, jwtPayload);
		return NextResponse.redirect(new URL(fallbackUrl, request.url));
	}

	return response;
};

export const config = {
	matcher: [
		{
			source: "/((?!image|_next/static|favicon.ico|api|fonts).*)",
		},
	],
};
