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
 * 객체 혹은 primitive 타입을 string 배열인 query key 형태로 변환
 * @param obj
 */
export const object2QueryKeys = (obj?: object | number | string | boolean): string[] => {
	if (obj === undefined) return [];
	if (typeof obj === "number" || typeof obj === "string" || typeof obj === "boolean") return [obj.toString()];

	return Object.entries(obj).map(([key, value]) => {
		if (typeof value === "object") {
			if (Array.isArray(value)) {
				return `${key}:${value.join()}`;
			}
			return `${key}:${JSON.stringify(value)}`;
		}
		return `${key}:${value?.toString()}`;
	});
};
