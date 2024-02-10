import { isEqualWith } from "lodash-es";

export const isPropsEqual = (value: any, other: any) => {
	const ignoreKeys = ["_owner", "$$typeof"];

	return isEqualWith(value, other, (_: any, __: any, key: string | number | symbol | undefined) => {
		return ignoreKeys.includes(key as string) ? true : undefined;
	});
};
