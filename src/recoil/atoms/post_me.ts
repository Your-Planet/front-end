import { GenreType } from "@/components/search/defines/types";
import { atom } from "recoil";

export const authorIntroductionContext = atom<string>({
	key: "authorIntroduction",
	default: "",
});

export const selectedGenreContext = atom<Set<GenreType>>({
	key: "selectedGenre",
	default: new Set<GenreType>(),
});

export const filledLinkContext = atom<Array<string>>({
	key: "filledLink",
	default: new Array<string>(),
});
