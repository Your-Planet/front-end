import { atom } from "recoil";

export const loggedInContext = atom<string | undefined>({
	key: "loggedIn",
	default: "",
});
