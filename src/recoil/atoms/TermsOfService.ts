import { TosCheckedStateType } from "@/components/join/TermsOfService/defines/types";
import { atom } from "recoil";

export const tosCheckedContext = atom<TosCheckedStateType>({
	key: "tosChecked",
	default: {
		ALL: false,
		REQUIRED: false,
		PERSONAL_INFORMATION: false,
		SHOPPING_INFORMATION_RECEIPT: false,
	},
});
