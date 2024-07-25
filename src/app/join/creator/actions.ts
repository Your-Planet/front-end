"use server";

import { API } from "@/apis";
import { DOMAIN } from "@/defines/domain/constants";
import { IA } from "@/defines/ia/constants";
import { PageAttributes } from "@/defines/ia/types";
import { getIaPath } from "@/utils/ia";
import { objectToUrlParams } from "@/utils/object";
import { getLeadingSlash } from "@/utils/string";

const getRedirectUri = (ia: PageAttributes) => `${DOMAIN.yourPlanet}${getLeadingSlash(getIaPath(ia))}`;

const clientId = process.env.INSTAGRAM_CLIENT_ID!;
const secretCode = process.env.INSTAGRAM_SECRET_CODE!;

const INSTAGRAM_API_SCOPES = ["user_profile", "user_media"] as const;

export const getInstagramAuthUrl = async () => {
	const params = objectToUrlParams({
		client_id: clientId,
		redirect_uri: getRedirectUri(IA.join.creator.details),
		scope: INSTAGRAM_API_SCOPES.join(),
		response_type: "code",
	});

	return `${DOMAIN.instagram.api}/oauth/authorize?${params.toString()}`;
};

export const authorizeInstagram = async (code: string) => {
	const { access_token: shortLivedAccessToken, user_id: userId } = (
		await API.instagramAuth.shortLivedAccessToken({
			client_id: clientId,
			client_secret: secretCode,
			code,
			grant_type: "authorization_code",
			redirect_uri: getRedirectUri(IA.join.creator.details),
		})
	).data;

	const { access_token: accessToken, expires_in: expiresInSeconds } = (
		await API.instagramGraph.longLivedAccessToken({
			access_token: shortLivedAccessToken,
			client_secret: secretCode,
			grant_type: "ig_exchange_token",
		})
	).data;

	return {
		accessToken,
		userId,
		expiresInSeconds,
	};
};
