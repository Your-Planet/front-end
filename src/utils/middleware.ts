import { IA } from "@/defines/ia/constants";
import { PageAccessConfig, PageAccessibleType, PageAttributes } from "@/defines/ia/types";
import { AccessTokenPayload } from "@/defines/jwt/types";
import { MemberType } from "@/defines/member/types";
import { getIaPath } from "@/utils/ia";
import { NextRequest } from "next/server";

export type MiddlewareParams = {
	request: NextRequest;
	currentIa: PageAttributes;
	jwtPayload: AccessTokenPayload | null;
};

const getPageAccessibleTypeOnLoggedIn = (
	{ allowedMemberTypes, disallowedMemberTypes }: PageAccessConfig,
	memberType: MemberType,
): PageAccessibleType => {
	const isNotAllowed = allowedMemberTypes && !allowedMemberTypes.includes(memberType);
	const isDisallowed = disallowedMemberTypes && disallowedMemberTypes.includes(memberType);

	if (isNotAllowed || isDisallowed) return "unauthorizedMember";
	return "accessible";
};

export const getPageAccessibleType = ({ currentIa, jwtPayload }: MiddlewareParams) => {
	const { accessConfig } = currentIa;

	if (!accessConfig) return "accessible";

	const { disallowedOnLogin } = accessConfig;

	if (disallowedOnLogin) {
		return jwtPayload ? "inaccessibleOnLoggedIn" : "accessible";
	}

	if (!jwtPayload) return "needLogin";

	return getPageAccessibleTypeOnLoggedIn(accessConfig, jwtPayload.memberType);
};

export const createGetFallbackUrlGetter = ({ request, currentIa, jwtPayload }: MiddlewareParams) => {
	const { nextUrl } = request;
	const { accessConfig } = currentIa;

	const redirectUrl = `${nextUrl.pathname}${nextUrl.search}`;

	return (pageAccessibleType: PageAccessibleType) => {
		if (!accessConfig) return redirectUrl;

		const { fallbackUrl } = accessConfig;

		if (fallbackUrl) {
			return typeof fallbackUrl === "function" ? fallbackUrl(IA, accessConfig, jwtPayload) : fallbackUrl;
		}

		switch (pageAccessibleType) {
			case "needLogin":
				return `${getIaPath(IA.login)}?redirect=${encodeURIComponent(redirectUrl)}`;
			case "unauthorizedMember":
				// TODO @김현규 접근 권한 없음 페이지
				return "/403";
			case "inaccessibleOnLoggedIn":
				return getIaPath(IA);
			default:
				return redirectUrl;
		}
	};
};
