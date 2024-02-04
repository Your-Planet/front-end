import { GenderType, MemberType, SubscriptionPathType } from "@/defines/member/types";

interface CommonRegisterRequest {
	email: string;
	password: string;
	name: string;
	genderType: GenderType;
	tel: string;
	memberType: MemberType;
	birthDate?: string;
}

export interface AuthorRegisterRequest extends CommonRegisterRequest {
	instagramAuthCode: string;
}

export interface AdvertiserRegisterRequest extends CommonRegisterRequest {
	companyName?: string;
	businessNumber?: string;
	representativeName?: string;
	businessAddress?: string;
	subscriptionPath?: SubscriptionPathType;
}

export type RegisterRequest = AuthorRegisterRequest | AdvertiserRegisterRequest;

export type RegisterResponse = RegisterRequest;
