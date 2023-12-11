import { deepFreeze, object2QueryKeys } from "@/utils/object";

const getQueryKey = (prefixKeys: readonly string[], req?: object) => {
	return [...prefixKeys, ...object2QueryKeys(req)] as const;
};

export const QUERY_KEY = deepFreeze({
	member: {
		all: () => ["member"],
	},
});
