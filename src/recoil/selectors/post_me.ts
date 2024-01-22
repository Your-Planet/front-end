import { selector } from "recoil";
import { authorIntroductionContext, filledLinkContext, selectedGenreContext } from "../atoms/post_me";

export const authorIntroductionState = selector({
	key: "authorIntroductionState",
	get: ({ get }) => {
		const authorIntroduction = get(authorIntroductionContext);

		return authorIntroduction;
	},
});

export const selectedGenreState = selector({
	key: "selectedGenreState",
	get: ({ get }) => {
		const selectedGenre = get(selectedGenreContext);

		return selectedGenre;
	},
});

export const filledLinkState = selector({
	key: "filledLinkState",
	get: ({ get }) => {
		const filledLink = get(filledLinkContext);

		return filledLink;
	},
});
