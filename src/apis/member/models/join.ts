import { GenderType, MemberType, SubscriptionPathType } from "@/defines/member/types";

interface CommonJoinRequest {
	email: string;
	password: string;
	name: string;
	genderType: GenderType;
	tel: string;
	memberType: MemberType;
	birthDate?: string;
}

export interface AuthorJoinRequest extends CommonJoinRequest {
	instagramId: string;
	instagramUsername: string;
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
