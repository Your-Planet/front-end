import { deepFreeze } from "@/utils/object";

const getQueryKey = (prefixKeys: readonly string[], req?: object) => {
	return [...prefixKeys, req] as const;
};

export const QUERY_KEY = deepFreeze({
	member: {
		all: () => ["member"] as const,
	},
	instagramGraph: {
		all: () => ["instagramGraph"] as const,
		me: (req?: object) => getQueryKey([...QUERY_KEY.instagramGraph.all(), "me"], req),
	},
});
