import { tosCheckedStateType } from "@/components/register/TermsOfService/defines/types";
import { atom } from "recoil";

export const tosOpenContext = atom<boolean>({
	key: "tosOpen",
	default: false,
});

export const tosCheckedContext = atom<tosCheckedStateType>({
	key: "tosChecked",
	default: {
		ALL: false,
		REQUIRED: false,
		PERSONAL_INFORMATION: false,
		SHOPPING_INFORMATION_RECEIPT: false,
	},
});
