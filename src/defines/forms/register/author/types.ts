import { AuthorRegisterRequest } from "@/apis/member";
import { RegisterCommonMemberForm } from "@/defines/forms/register/common/types";

export interface RegisterAuthorForm
	extends Omit<AuthorRegisterRequest, "genderType" | "birthDate">,
		RegisterCommonMemberForm {}
