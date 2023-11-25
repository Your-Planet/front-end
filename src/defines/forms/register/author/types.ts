// TODO @김현규 API쪽 타입 가져와서 쓰는 방식으로 변경
import { GenderType } from "@/defines/member/types";
import dayjs from "dayjs";

export interface RegisterAuthorForm {
	email: string;
	password: string;
	name: string;
	gender: GenderType | null;
	tel: string;
	birthDate: dayjs.Dayjs | null;
	instagramId: string;

	passwordConfirm: string;
}

export type WatchedRegisterAuthorForm = Partial<RegisterAuthorForm>;
