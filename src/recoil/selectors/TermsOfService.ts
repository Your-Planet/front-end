import { selector } from "recoil";
import { tosCheckedContext } from "../atoms/TermsOfService";

export const tosCheckedState = selector({
	key: "tosCheckedState",
	get: ({ get }) => {
		const checked = get(tosCheckedContext);

		return checked;
	},
});
