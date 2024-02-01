import { deepFreeze } from "@/utils/object";

export const AUTHOR_INTRODUCTION_LENGTH = deepFreeze({
	min: 10,
	max: 100,
});

export const SELECTED_GENRE_LIMIT = deepFreeze({
	min: 1,
	max: 2,
});

export const PORTFOLIO_LINK_LIMIT = deepFreeze({
	min: 1,
	max: 10,
});
