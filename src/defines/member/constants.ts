import { MemberType } from "@/defines/member/types";
import { deepFreeze } from "@/utils/object";

export const labelByMember: Record<MemberType, string> = deepFreeze({
	ADMIN: "관리자",
	AUTHOR: "작가",
	ADVERTISER: "광고주",
});

export const labelByMemberForRegister: Record<Exclude<MemberType, "ADMIN">, string> = deepFreeze({
	AUTHOR: labelByMember.AUTHOR,
	ADVERTISER: labelByMember.ADVERTISER,
});
