// TODO @김현규 API쪽 타입 가져와서 쓰는 방식으로 변경
import { GenderType } from "@/defines/member/types";
import dayjs from "dayjs";
import { RegisterCommonMemberForm } from "@/defines/forms/register/common/types";

export interface RegisterAuthorForm extends RegisterCommonMemberForm {
	name: string;
	gender: GenderType | null;
	birthDate: dayjs.Dayjs | null;
	instagramId: string;
}

export type WatchedRegisterAuthorForm = Partial<RegisterAuthorForm>;
