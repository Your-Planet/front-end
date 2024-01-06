export const getObjectAtPath = <T>(obj: T, path: string) => {
	const keys = path.split(".");
	let value: any = obj;

	for (const key of keys) {
		value = (value as any)[key];
		if (value === undefined) {
			return undefined;
		}
	}

	return value;
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
