import { GenreType, SortOptionType } from "@/components/search/defines/types";
import { atom } from "recoil";

export const genreContext = atom<GenreType>({
	key: "Genre",
	default: "ALL",
});

export const sortOptionContext = atom<SortOptionType>({
	key: "SortOption",
	default: "LATEST",
});
