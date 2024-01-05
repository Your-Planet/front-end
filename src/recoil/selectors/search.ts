import { selector } from "recoil";
import { sortOptionContext, genreContext } from "../atoms/search";

export const genreState = selector({
	key: "genreState",
	get: ({ get }) => {
		const genre = get(genreContext);

		return genre;
	},
});

export const sortOptionState = selector({
	key: "sortOptionState",
	get: ({ get }) => {
		const sortOption = get(sortOptionContext);

		return sortOption;
	},
});
