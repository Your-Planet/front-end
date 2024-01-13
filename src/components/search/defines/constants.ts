import { deepFreeze } from "@/utils/object";
import { GenreInfo, GenreType, SortOptionInfo, SortOptionType } from "./types";

export const LABEL_BY_GENRE_TYPE: Record<GenreType, GenreInfo> = deepFreeze({
	ALL: "전체",
	DAILY: "일상",
	HUMOR: "유머",
	DATE: "연애",
	HEALING: "힐링",
});

export const LABEL_BY_SORT_OPTION_TYPE: Record<SortOptionType, SortOptionInfo> = deepFreeze({
	ALPHABETICAL: "이름순",
	LATEST: "최신순",
	POPULARITY: "인기순",
});
