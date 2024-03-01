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
	instagramAuthCode: string;
}

export interface AdvertiserJoinRequest extends CommonJoinRequest {
	companyName?: string;
	businessNumber?: string;
	representativeName?: string;
	businessAddress?: string;
	subscriptionPath?: SubscriptionPathType;
}

export type JoinRequest = AuthorJoinRequest | AdvertiserJoinRequest;

export type JoinResponse = JoinRequest;
