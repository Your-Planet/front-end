import { IA } from "@/defines/ia/constants";
import { PageAccessConfig, PageAttributes } from "@/defines/ia/types";
import { AccessTokenPayload } from "@/defines/jwt/types";
import { findObjectPath, getObjectAtPath } from "@/utils/object";

export const getIaPath = (page: PageAttributes) => {
	if (IA === page) return "/";
	return findObjectPath(IA, page) ?? "#";
};

export const getIaObject = (path: string): PageAttributes => {
	return getObjectAtPath(IA, path.substring(1), "/");
};

const getIsAccessibleAllowedOnLogin = (
	{ allowedMemberTypes, disallowedMemberTypes }: PageAccessConfig,
	jwtPayload: AccessTokenPayload | null,
) => {
	if (!jwtPayload) return false;

	const { memberType } = jwtPayload;

	const isNotAllowed = allowedMemberTypes && !allowedMemberTypes.includes(memberType);
	const isDisallowed = disallowedMemberTypes && disallowedMemberTypes.includes(memberType);

	return !(isNotAllowed || isDisallowed);
};

export const getIsAccessiblePage = (currentIa: PageAttributes, jwtPayload: AccessTokenPayload | null) => {
	const { accessConfig } = currentIa;

	if (!accessConfig) return true;

	const { disallowedOnLogin } = accessConfig;

	if (disallowedOnLogin) return !jwtPayload;

	return getIsAccessibleAllowedOnLogin(accessConfig, jwtPayload);
};
