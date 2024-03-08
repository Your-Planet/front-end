import { COOKIE } from "@/defines/cookie/constants";
import { getJwtPayload } from "@/utils/auth";
import { getIaObject, getIsAccessiblePage } from "@/utils/ia";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
	const {
		nextUrl: { pathname },
		cookies,
	} = request;

	const jwtPayload = getJwtPayload(cookies.get(COOKIE.accessToken)?.value);

	const currentIa = getIaObject(pathname);

	if (!currentIa) {
		console.error("IA not found for pathname", pathname);
		return;
	}

	if (!getIsAccessiblePage(currentIa, jwtPayload)) {
		// TODO @김현규 접근 권한 없음 에러 페이지로 변경
		return NextResponse.redirect(new URL("/403", request.url));
	}
};

export const config = {
	matcher: [
		{
			source: "/((?!image|_next/static).*)",
		},
	],
};
