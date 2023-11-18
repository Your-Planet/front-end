// TODO @김현규 API쪽 타입 가져와서 쓰는 방식으로 변경
import { SexType } from "@/defines/member/types";

export interface RegisterAuthorForm {
	email: string;
	password: string;
	name: string;
	sex: SexType;
	tel: number;
	instagramId: string;

	passwordConfirm: string;
}
