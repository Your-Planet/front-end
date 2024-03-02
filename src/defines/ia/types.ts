import { MemberType } from "@/defines/member/types";

export type GlobalIa = Page &
	LoginIa &
	JoinIa &
	DeletionIa &
	SearchIa &
	ProjectIa &
	MypageIa &
	FindIa &
	ResetPwIa &
	TermsIa &
	PrivacyIa;

export type Ia<PageName extends string, SubIa extends Page = Page> = Page & Record<PageName, SubIa>;

type LoginIa = Ia<"login">;

type JoinIa = Ia<"join", JoinSubIa["author"] & JoinSubIa["sponsor"]>;

type DeletionIa = Ia<"deletion", DeletionSubIa["complete"]>;

type SearchIa = Ia<"search">;

type ProjectIa = Ia<"project">;

type MypageIa = Ia<"mypage", MypageSubIa["portfolio"] & MypageSubIa["project-history"]>;

type FindIa = Ia<"find", FindSubIa["email"] & FindSubIa["pw"]>;

type ResetPwIa = Ia<"reset-pw">;

type TermsIa = Ia<"terms">;

type PrivacyIa = Ia<"privacy">;

type JoinSubIa = {
	author: Ia<"author", Ia<"verify" | "details" | "complete">>;
	sponsor: Ia<"sponsor", Ia<"details" | "complete">>;
};

type DeletionSubIa = {
	complete: Ia<"complete">;
};

type MypageSubIa = {
	portfolio: Ia<"portfolio", Ia<"update">>;
	["project-history"]: Ia<"project-history", Ia<"[id]">>;
};

type FindSubIa = {
	email: Ia<"email", Ia<"complete">>;
	pw: Ia<"pw", Ia<"complete">>;
};

export interface Page {
	// 브라우저 탭에 표시되는 제목
	title: string;
	// UI상에서 표시되는 라벨
	label: string;
	accessConfig?: PageAccessConfig;
}

export type PageAccessConfig = PageAccessAllowedOnLogin | PageAccessDisallowedOnLogin;

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
