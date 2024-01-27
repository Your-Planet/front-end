import { selector } from "recoil";
import { loggedInContext } from "../atoms/Auth";

export const loggedInState = selector({
	key: "loggedInState",
	get: ({ get }) => {
		const loggedIn = get(loggedInContext);

		return loggedIn;
	},
});
