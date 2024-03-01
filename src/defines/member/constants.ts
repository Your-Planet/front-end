import { MemberType } from "@/defines/member/types";
import { deepFreeze } from "@/utils/object";

export const labelByMember: Record<MemberType, string> = deepFreeze({
	ADMIN: "관리자",
	AUTHOR: "작가",
	SPONSOR: "광고주",
});

export const labelByMemberForJoin: Record<Exclude<MemberType, "ADMIN">, string> = deepFreeze({
	AUTHOR: labelByMember.AUTHOR,
	SPONSOR: labelByMember.SPONSOR,
});
