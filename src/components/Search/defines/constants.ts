import { deepFreeze } from "@/utils/object";
import { GenreType, GenreInfo } from "./types";

export const LABEL_BY_GENRE_TYPE: Record<GenreType, GenreInfo> = deepFreeze({
	ALL: "전체",
	DAILY: "일상",
	HUMOR: "유머",
	DATE: "연애",
	HEALING: "힐링",
});
