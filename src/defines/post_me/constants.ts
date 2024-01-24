import { deepFreeze } from "@/utils/object";

export const AUTHOR_INTRODUCTION_LENGTH = deepFreeze({
	min: 10,
	max: 100,
});

export const SELECTED_GENRE_LIMIT = 2;
