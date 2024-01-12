import { atom } from "recoil";

export const tosOpenContext = atom<boolean>({
	key: "tosOpen",
	default: false,
});
