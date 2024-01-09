import { objectToUrlParams } from "@/utils/object";

export const getInstagramAuthUrl = ({ redirectUri, userMedia }: { redirectUri: string; userMedia?: boolean }) => {
	const BASE_URL = "https://api.instagram.com/oauth/authorize";

	const scopes = ["user_profile"];
	if (userMedia) scopes.push("user_media");

	const params = objectToUrlParams({
		client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
		redirect_uri: redirectUri,
		scope: scopes.join(),
		response_type: "code",
	});

	return `${BASE_URL}?${params.toString()}`;
};
