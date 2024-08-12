import { COOKIE } from "@/defines/cookie/constants";
import { getJwtPayload } from "@/utils/auth";
import { getIaObject } from "@/utils/ia";
import { createGetRedirectUrlGetter, getPageAccessibleType, MiddlewareParams } from "@/utils/middleware";
import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
	const {
		nextUrl: { pathname },
		cookies,
	} = request;

	const response = NextResponse.next();

	const currentIa = getIaObject(pathname);

	const jwtPayload = getJwtPayload(cookies.get(COOKIE.accessToken)?.value);

	if (!currentIa) {
		console.error("IA not found for pathname", pathname);
		return response;
	}

	const middlewareParams: MiddlewareParams = {
		request,
		currentIa,
		jwtPayload,
	};

	const pageAccessibleType = getPageAccessibleType(middlewareParams);

	if (pageAccessibleType !== "accessible") {
		const fallbackUrl = createGetRedirectUrlGetter(middlewareParams)(pageAccessibleType);
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
