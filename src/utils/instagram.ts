import { DOMAIN_URL } from "@/defines/domain/constants";
import { objectToUrlParams } from "@/utils/object";
import { getLeadingSlash } from "@/utils/string";

export const getInstagramAuthUrl = ({ redirectPath, userMedia }: { redirectPath: string; userMedia?: boolean }) => {
	const BASE_URL = "https://api.instagram.com/oauth/authorize";

	const scopes = ["user_profile"];
	if (userMedia) scopes.push("user_media");

	console.log(`${DOMAIN_URL}${getLeadingSlash(redirectPath)}`);

	const params = objectToUrlParams({
		client_id: process.env.NEXT_PUBLIC_INSTAGRAM_CLIENT_ID,
		redirect_uri: `${DOMAIN_URL}${getLeadingSlash(redirectPath)}`,
		scope: scopes.join(),
		response_type: "code",
	});

	return `${BASE_URL}?${params.toString()}`;
};
