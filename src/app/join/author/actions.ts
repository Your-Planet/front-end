"use server";

import { API } from "@/apis";
import { DOMAIN } from "@/defines/domain/constants";
import { objectToUrlParams } from "@/utils/object";
import { getLeadingSlash } from "@/utils/string";

const redirectUri = `${DOMAIN.yourPlanet}${getLeadingSlash("/join/author")}`;

export const getInstagramAuthUrl = async (userMedia?: boolean) => {
	const scopes = ["user_profile"];
	if (userMedia) scopes.push("user_media");

	const params = objectToUrlParams({
		client_id: process.env.INSTAGRAM_CLIENT_ID,
		redirect_uri: redirectUri,
		scope: scopes.join(),
		response_type: "code",
	});

	return `${DOMAIN.instagram.api}/oauth/authorize?${params.toString()}`;
};

export const getInstagramAccessToken = async (code: string) => {
	const { access_token, user_id } = (
		await API.instagramAuth.accessToken({
			client_id: process.env.INSTAGRAM_CLIENT_ID!,
			client_secret: process.env.INSTAGRAM_SECRET_CODE!,
			code,
			grant_type: "authorization_code",
			redirect_uri: redirectUri,
		})
	).data;

	return {
		accessToken: access_token,
		userId: user_id,
	};
};
