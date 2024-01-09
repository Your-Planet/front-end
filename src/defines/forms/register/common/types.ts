import { GenderType } from "@/defines/member/types";
import dayjs from "dayjs";

export interface RegisterCommonMemberForm {
	passwordConfirm: string;
	genderType: GenderType | null;
	birthDate: dayjs.Dayjs | null;
}
