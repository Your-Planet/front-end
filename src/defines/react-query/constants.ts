import { deepFreeze } from "@/utils/object";

export const QUERY_KEY = deepFreeze({
	member: {
		all: () => ["member"] as const,
		detail: () => [...QUERY_KEY.member.all(), "detail"] as const,
	},
	studio: {
		all: () => ["studio"] as const,
		profile: () => [...QUERY_KEY.studio.all(), "profile"] as const,
		price: () => [...QUERY_KEY.studio.all(), "price"] as const,
	},
	instagram: {
		all: () => ["instagram"] as const,
		medias: (req: object) => [...QUERY_KEY.instagram.all(), "posts", req] as const,
	},
	instagramGraph: {
		all: () => ["instagramGraph"] as const,
		me: (req?: object) => [QUERY_KEY.instagramGraph.all(), "me", req] as const,
	},
});
