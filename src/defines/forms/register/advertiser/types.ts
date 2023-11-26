import { RegisterCommonMemberForm } from "@/defines/forms/register/common/types";

export interface RegisterAdvertiserForm extends RegisterCommonMemberForm {
	companyName: string;
	businessNumber: string;
	representativeName: string;
	businessAddress: {
		base: string;
		detail: string;
	};
}