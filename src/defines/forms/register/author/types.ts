import { GenderType } from "@/defines/member/types";
import dayjs from "dayjs";
import { AuthorRegisterRequest } from "@/apis/member";

export interface RegisterAuthorForm extends Omit<AuthorRegisterRequest, "gender" | "birthDate"> {
	passwordConfirm: string;
	gender: GenderType | null;
	birthDate: dayjs.Dayjs | null;
}

export type WatchedRegisterAuthorForm = Partial<RegisterAuthorForm>;
