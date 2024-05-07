import { deepFreeze } from "@/utils/object";

export const QUERY_KEY = deepFreeze({
	member: {
		all: () => ["member"] as const,
		detail: () => [...QUERY_KEY.member.all(), "detail"] as const,
	},
	instagramGraph: {
		all: () => ["instagramGraph"] as const,
		me: (req?: object) => [QUERY_KEY.instagramGraph.all(), "me", req] as const,
	},
});
