import { atom } from "recoil";
import { GenreType, SortOptionType } from "@/components/search/defines/types";

export const genreContext = atom<GenreType>({
	key: "Genre",
	default: "ALL",
});

export const sortOptionContext = atom<SortOptionType>({
	key: "SortOption",
	default: "LATEST",
});
