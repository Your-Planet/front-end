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
