import { MemberType } from "@/defines/member/types";

export const labelByMember: Record<MemberType, string> = {
	ADMIN: "관리자",
	AUTHOR: "작가",
	ADVERTISER: "광고주",
};

export const labelByMemberForRegister: Record<Exclude<MemberType, "ADMIN">, string> = {
	AUTHOR: labelByMember.AUTHOR,
	ADVERTISER: labelByMember.ADVERTISER,
};
