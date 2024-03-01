import { AdvertiserJoinRequest } from "@/apis/member";
import { JoinCommonMemberForm } from "@/defines/forms/join/common/types";

export interface JoinAdvertiserForm
	extends Omit<AdvertiserJoinRequest, "genderType" | "birthDate" | "businessAddress">,
		JoinCommonMemberForm {
	businessAddress: {
		base: string;
		detail: string;
	};
}
