import { deepFreeze } from "@/utils/object";

export const PASSWORD_LENGTH = deepFreeze({
	min: 8,
	max: 20,
});

export const COMBINED_MIN_LIMIT = 3;

export const CONTINUOUS_DIGITS_LIMIT = 3;
