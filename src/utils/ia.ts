import { IA } from "@/defines/ia/constants";
import { PageAccessConfig, PageAccessibleType, PageAttributes } from "@/defines/ia/types";
import { AccessTokenPayload } from "@/defines/jwt/types";
import { MemberType } from "@/defines/member/types";
import { findObjectPath, getObjectAtPath } from "@/utils/object";
import { NextRequest } from "next/server";

// @ts-ignore
export const getIaPath = (page: PageAttributes) => {
	if (IA === page) return "/";
	return findObjectPath(IA, page) ?? "#";
};

export const getIaObject = (path: string): PageAttributes => {
	return getObjectAtPath(IA, path.substring(1), "/");
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

export const getPageAccessibleType = (
	currentIa: PageAttributes,
	jwtPayload: AccessTokenPayload | null,
): PageAccessibleType => {
	const { accessConfig } = currentIa;

	if (!accessConfig) return "accessible";

	const { disallowedOnLogin } = accessConfig;

	if (disallowedOnLogin) {
		return jwtPayload ? "inaccessibleOnLoggedIn" : "accessible";
	}

	if (!jwtPayload) return "needLogin";

	return getPageAccessibleTypeOnLoggedIn(accessConfig, jwtPayload.memberType);
};

export const getFallbackURL = (
	request: NextRequest,
	currentIa: PageAttributes,
	pageAccessibleType: PageAccessibleType,
	jwtPayload: AccessTokenPayload | null,
) => {
	const { nextUrl } = request;
	const { accessConfig } = currentIa;

	const redirectURL = `${nextUrl.pathname}${nextUrl.search}`;

	if (!accessConfig) return redirectURL;

	const { fallbackUrl } = accessConfig;

	if (fallbackUrl) {
		return typeof fallbackUrl === "function" ? fallbackUrl(IA, accessConfig, jwtPayload) : fallbackUrl;
	}

	switch (pageAccessibleType) {
		case "needLogin":
			return `${getIaPath(IA.login)}?redirect=${encodeURIComponent(redirectURL)}`;
		case "unauthorizedMember":
			// TODO @김현규 접근 권한 없음 페이지
			return "/403";
		case "inaccessibleOnLoggedIn":
			return getIaPath(IA);
		default:
			return redirectURL;
	}
};
