import { Pair } from "@/defines/pair/types";

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

export const objectToUrlParams = (obj: object): URLSearchParams => {
	const searchParams = new URLSearchParams();

	Object.entries(obj).forEach(([k, v]) => {
		if (v !== undefined) searchParams.append(k, v.toString());
	});

	return searchParams;
};

export const objectToFormData = (obj: object): FormData => {
	const formData = new FormData();

	Object.entries(obj).forEach(([k, v]) => {
		if (v !== undefined) formData.append(k, v.toString());
	});

	return formData;
};

export const createMultipartFormData = ({
	files,
	jsonBody,
}: {
	files: Pair<(File | null)[]>;
	jsonBody: Pair<object>;
}) => {
	const formData = new FormData();

	files.value.forEach((file) => {
		if (file) {
			formData.append(files.key, file);
		}
	});

	formData.append(
		jsonBody.key,
		new Blob([JSON.stringify(jsonBody.value)], {
			type: "application/json",
		}),
	);

	return formData;
};
