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

export const getInstagramAuthUrl = async (userMedia?: boolean) => {
	const scopes = ["user_profile"];
	if (userMedia) scopes.push("user_media");

	const params = objectToUrlParams({
		client_id: clientId,
		redirect_uri: getRedirectUri(IA.join.author.details),
		scope: scopes.join(),
		response_type: "code",
	});

	return `${DOMAIN.instagram.api}/oauth/authorize?${params.toString()}`;
};

export const getInstagramAccessToken = async (code: string) => {
	const { access_token: shortLivedAccessToken, user_id: userId } = (
		await API.instagramAuth.shortLivedAccessToken({
			client_id: clientId,
			client_secret: secretCode,
			code,
			grant_type: "authorization_code",
			redirect_uri: getRedirectUri(IA.join.author),
		})
	).data;

	// TODO @김현규 로그 제거
	console.log("shortLivedAccessToken", shortLivedAccessToken);

	const { access_token: accessToken, expires_in: expiresInSeconds } = (
		await API.instagramGraph.longLivedAccessToken({
			access_token: shortLivedAccessToken,
			client_secret: secretCode,
			grant_type: "ig_exchange_token",
		})
	).data;

	// TODO @김현규 로그 제거
	console.log("longLivedAccessToken", accessToken);

	return {
		accessToken,
		userId,
		expiresInSeconds,
	};
};