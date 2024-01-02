// TODO @김현규 API쪽 타입 가져와서 쓰는 방식으로 변경
import { RegisterCommonMemberForm } from "@/defines/forms/register/common/types";
import { GenderType } from "@/defines/member/types";
import dayjs from "dayjs";

export interface RegisterAuthorForm extends RegisterCommonMemberForm {
	name: string;
	gender: GenderType | null;
	birthDate: dayjs.Dayjs | null;
	instagramId: string;
}

export type WatchedRegisterAuthorForm = Partial<RegisterAuthorForm>;
