export const getObjectAtPath = <T>(obj: T, path: string, splitter = ".") => {
	if (!path || path === splitter) return obj;

	const keys = path.split(splitter);
	let value: any = obj;

	for (const key of keys) {
		value = (value as any)[key];
		if (value === undefined) {
			return undefined;
		}
	}

	return value;
};

export const findObjectPath = <T>(
	root: Record<string, any>,
	target: T,
	splitter = "/",
	path = splitter,
): string | undefined => {
	// eslint-disable-next-line guard-for-in,no-restricted-syntax
	for (const key in root) {
		const current = root[key];

		if (current === target) return path + key;

		if (typeof current === "object" && current !== null) {
			const result = findObjectPath(current, target, splitter, path + key + splitter);
			if (result) return result;
		}
	}

	return undefined;
};

/**
 * 불변 객체 생성
 * @param obj
 */
export const deepFreeze = <T extends Record<string, any>>(obj: T): T => {
	if (obj && typeof obj === "object" && !Object.isFrozen(obj)) {
		Object.freeze(obj);
		Object.keys(obj).forEach((key) => deepFreeze(obj[key]));
	}
	return obj;
};

/**
 * 객체를 URL 파라미터로 변경
 * @param obj
 */
export const objectToUrlParams = (obj: object): URLSearchParams => {
	const searchParams = new URLSearchParams();

	Object.entries(obj).forEach(([k, v]) => {
		if (v !== undefined) searchParams.append(k, v.toString());
	});

	return searchParams;
};
