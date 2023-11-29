import { GenderType, MemberType } from "@/defines/member/types";
import { ResponseEntity } from "@/defines/apis/types";

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

export interface RegisterResponse extends ResponseEntity<RegisterRequest> {}
