import { AccessTokenPayload } from "@/defines/jwt/types";
import { MemberType } from "@/defines/member/types";

export type GlobalIa = PageAttributes &
	LoginIa &
	LogoutIa &
	JoinIa &
	DeletionIa &
	SearchIa &
	ProjectIa &
	MypageIa &
	FindIa &
	ResetPwIa &
	TermsIa &
	PrivacyIa;

export type Ia<PageName extends string, SubIa extends PageAttributes = PageAttributes> = PageAttributes &
	Record<PageName, SubIa>;

type LoginIa = Ia<"login">;

type LogoutIa = Ia<"logout">;

type JoinIa = Ia<"join", JoinSubIa["author"] & JoinSubIa["sponsor"] & JoinSubIa["complete"]>;

type DeletionIa = Ia<"deletion", DeletionSubIa["complete"]>;

type SearchIa = Ia<"search">;

type ProjectIa = Ia<"project">;

type MypageIa = Ia<"mypage", MypageSubIa["studio"] & MypageSubIa["project-history"]>;

type FindIa = Ia<"find", FindSubIa["email"] & FindSubIa["pw"]>;

type ResetPwIa = Ia<"reset-pw">;

type TermsIa = Ia<"terms">;

type PrivacyIa = Ia<"privacy">;

type JoinSubIa = {
	author: Ia<"author", Ia<"verify" | "details">>;
	sponsor: Ia<"sponsor", Ia<"details">>;
	complete: Ia<"complete">;
};

type DeletionSubIa = {
	complete: Ia<"complete">;
};

type MypageSubIa = {
	studio: Ia<"studio", Ia<"profile" | "price">>;
	["project-history"]: Ia<"project-history", Ia<"[id]">>;
};

type FindSubIa = {
	email: Ia<"email", Ia<"complete">>;
	pw: Ia<"pw", Ia<"complete">>;
};

export interface PageAttributes {
	// 브라우저 탭에 표시되는 제목
	title: string;
	// UI상에서 표시되는 라벨
	label: string;
	accessConfig?: PageAccessConfig;
}

export type PageAccessConfig = (PageAccessAllowedOnLogin | PageAccessDisallowedOnLogin) & {
	fallbackUrl?: PageAccessFallbackUrl;
};

type PageAccessAllowedOnLogin = {
	allowedOnLogin: true;
	disallowedOnLogin?: never;
} & (PageAccessAllowedMemberTypes | PageAccessDisallowedMemberTypes);

type PageAccessDisallowedOnLogin = {
	allowedOnLogin?: never;
	disallowedOnLogin: true;
	allowedMemberTypes?: never;
	disallowedMemberTypes?: never;
};

type PageAccessAllowedMemberTypes = {
	allowedMemberTypes?: readonly MemberType[];
	disallowedMemberTypes?: never;
};

type PageAccessDisallowedMemberTypes = {
	allowedMemberTypes?: never;
	disallowedMemberTypes?: readonly MemberType[];
};

type PageAccessFallbackUrl =
	| string
	| ((globalIa: GlobalIa, accessConfig: PageAccessConfig, jwtPayload: AccessTokenPayload | null) => string);
