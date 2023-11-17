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
