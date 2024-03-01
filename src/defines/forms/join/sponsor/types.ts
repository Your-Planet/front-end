import { SponsorJoinRequest } from "@/apis/member";
import { JoinCommonMemberForm } from "@/defines/forms/join/common/types";

export interface JoinSponsorForm
	extends Omit<SponsorJoinRequest, "genderType" | "birthDate" | "businessAddress">,
		JoinCommonMemberForm {
	businessAddress: {
		base: string;
		detail: string;
	};
}
