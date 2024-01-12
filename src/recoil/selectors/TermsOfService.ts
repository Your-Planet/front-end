import { selector } from "recoil";
import { tosOpenContext } from "../atoms/TermsOfService";

export const tosOpenState = selector({
	key: "tosOpenState",
	get: ({ get }) => {
		const open = get(tosOpenContext);

		return open;
	},
});
