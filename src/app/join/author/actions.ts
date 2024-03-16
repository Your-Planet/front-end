"use server";

import { API } from "@/apis";
import { DOMAIN } from "@/defines/domain/constants";
import { objectToUrlParams } from "@/utils/object";
import { getLeadingSlash } from "@/utils/string";

const getRedirectUri = (redirectPath: string) => `${DOMAIN.yourPlanet}${getLeadingSlash(redirectPath)}`;

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
		redirect_uri: getRedirectUri(redirectPath),
		scope: scopes.join(),
		response_type: "code",
	});

	return `${DOMAIN.instagram.api}/oauth/authorize?${params.toString()}`;
};

export const getInstagramAccessToken = async ({ code, redirectPath }: { code: string; redirectPath: string }) => {
	const { access_token, user_id } = (
		await API.instagramAuth.accessToken({
			client_id: process.env.INSTAGRAM_CLIENT_ID!,
			client_secret: process.env.INSTAGRAM_SECRET_CODE!,
			code,
			grant_type: "authorization_code",
			redirect_uri: getRedirectUri(redirectPath),
		})
	).data;

	return {
		accessToken: access_token,
		userId: user_id,
	};
};
