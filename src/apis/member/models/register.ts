import { GenderType, MemberType } from "@/defines/member/types";

interface CommonRegisterRequest {
	email: string;
	password: string;
	name: string;
	genderType: GenderType;
	tel: string;
	memberType: MemberType;
	birthDate: string;
}

export interface AuthorRegisterRequest extends CommonRegisterRequest {
	instagramAuthCode: string;
}

export interface AdvertiserRegisterRequest extends CommonRegisterRequest {
	companyName?: string;
	businessNumber?: string;
	representativeName?: string;
	businessAddress?: string;
}

export type RegisterRequest = AuthorRegisterRequest | AdvertiserRegisterRequest;

export type RegisterResponse = RegisterRequest;
