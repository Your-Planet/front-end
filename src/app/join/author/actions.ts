"use server";

import { DOMAIN } from "@/defines/domain/constants";
import { objectToUrlParams } from "@/utils/object";
import { getLeadingSlash } from "@/utils/string";

export const getInstagramAuthUrl = async ({
	redirectPath,
	userMedia,
}: {
	redirectPath: string;
	userMedia?: boolean;
}) => {
	const scopes = ["user_profile"];
	if (userMedia) scopes.push("user_media");

	const params = objectToUrlParams({
		client_id: process.env.INSTAGRAM_CLIENT_ID,
		redirect_uri: `${DOMAIN.yourPlanet}${getLeadingSlash(redirectPath)}`,
		scope: scopes.join(),
		response_type: "code",
	});

	return `${DOMAIN.instagram.auth}/authorize?${params.toString()}`;
};
