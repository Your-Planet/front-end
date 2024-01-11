import { AuthorRegisterRequest } from "@/apis/member";
import { RegisterCommonMemberForm } from "@/defines/forms/register/common/types";
// TODO @김현규 API쪽 타입 가져와서 쓰는 방식으로 변경

export interface RegisterAuthorForm
	extends Omit<AuthorRegisterRequest, "genderType" | "birthDate">,
		RegisterCommonMemberForm {}
