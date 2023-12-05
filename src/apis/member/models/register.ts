import { GenderType, MemberType } from "@/defines/member/types";

export interface RegisterRequest {
	id: string;
	password: string;
	name: string;
	genderType: GenderType;
	tel: string;
	memberType: MemberType;
	birthDate: string;
	instagramId?: string;
	companyName?: string;
	businessNumber?: string;
	representativeName?: string;
	businessAddress?: string;
}

export type RegisterResponse = RegisterRequest;
