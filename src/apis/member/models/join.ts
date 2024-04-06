import { GenderType, MemberType, SubscriptionPathType } from "@/defines/member/types";

interface CommonJoinRequest {
	email: string;
	password: string;
	name: string;
	genderType: GenderType;
	tel: string;
	memberType: MemberType;
	birthDate?: string;
	// TODO: @나은찬 back-end에서 객체로 수정 후 refactoring
	isTermsOfService: boolean;
	isPrivacyPolicy: boolean;
	isShoppingInformation: boolean;
}

export interface AuthorJoinRequest extends CommonJoinRequest {
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

export type JoinRequest = AuthorJoinRequest | SponsorJoinRequest;

export type JoinResponse = JoinRequest;
