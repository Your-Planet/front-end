import { AdvertiserRegisterRequest } from "@/apis/member";
import { RegisterCommonMemberForm } from "@/defines/forms/register/common/types";

export interface RegisterAdvertiserForm
	extends Omit<AdvertiserRegisterRequest, "genderType" | "birthDate" | "businessAddress">,
		RegisterCommonMemberForm {
	businessAddress: {
		base: string;
		detail: string;
	};
}
