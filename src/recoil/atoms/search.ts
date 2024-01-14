import { GenreType, SelectedAuthorType, SortOptionType } from "@/components/search/defines/types";
import { atom } from "recoil";

export const genreContext = atom<GenreType>({
	key: "Genre",
	default: "ALL",
});

export const sortOptionContext = atom<SortOptionType>({
	key: "SortOption",
	default: "LATEST",
});

export const selectedAuthorContext = atom<SelectedAuthorType>({
	key: "SelectedAuthor",
	default: {
		authorName: null,
		instagramId: null,
	},
});
