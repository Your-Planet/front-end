import { TermsInfoType } from "@/defines/forms/join/common/types";
import { GenderType, MemberType, SubscriptionPathType } from "@/defines/member/types";

interface CommonJoinRequest {
	email: string;
	password: string;
	name: string;
	genderType: GenderType;
	tel: string;
	memberType: MemberType;
	birthDate?: string;
	termsInfo: TermsInfoType;
}

export interface CreatorJoinRequest extends CommonJoinRequest {
	instagramId: string;
	instagramUsername: string;
	instagramAccessToken: string;
}

export interface SponsorJoinRequest extends CommonJoinRequest {
	companyName?: string;
	businessNumber?: string;
	representativeName?: string;
	businessAddress?: string;
	subscriptionPath?: SubscriptionPathType;
}

export type JoinRequest = CreatorJoinRequest | SponsorJoinRequest;

export type JoinResponse = JoinRequest;
