import { GenderType } from "@/defines/member/types";
import dayjs from "dayjs";

export interface JoinCommonMemberForm {
	passwordConfirm: string;
	genderType: GenderType | null;
	birthDate: dayjs.Dayjs | null;
}

export type TermsInfoType = {
	isTermsOfService: boolean;
	isPrivacyPolicy: boolean;
	isShoppingInformation: boolean;
};
