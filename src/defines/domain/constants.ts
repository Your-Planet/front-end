import { deepFreeze } from "@/utils/object";

export const DOMAIN = deepFreeze({
	yourPlanet: "https://www.yourplanet.co.kr",
	instagram: {
		api: "https://api.instagram.com",
		graph: "https://graph.instagram.com",
	},
});
