import { MemberType } from "@/defines/member/types";

export interface AccessTokenPayload {
	id: number;
	name: string;
	memberType: MemberType;
	exp: number;
}
