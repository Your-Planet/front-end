import { COOKIE } from "@/defines/cookie/constants";
import { getJwtPayload } from "@/utils/auth";
import { getFallbackURL, getIaObject, getPageAccessibleType } from "@/utils/ia";
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

	// TODO @김현규 access config에 따른 fallback URL 설정하는 부분 리팩토링 필요 (인자 정리)
	const pageAccessibleType = getPageAccessibleType(currentIa, jwtPayload);

	if (pageAccessibleType !== "accessible") {
		const fallbackURL = getFallbackURL(request, currentIa, pageAccessibleType, jwtPayload);
		return NextResponse.redirect(new URL(fallbackURL, request.url));
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
